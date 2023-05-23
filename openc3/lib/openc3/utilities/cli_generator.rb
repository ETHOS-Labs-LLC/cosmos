# encoding: ascii-8bit

# Copyright 2023 OpenC3, Inc.
# All Rights Reserved.
#
# This program is free software; you can modify and/or redistribute it
# under the terms of the GNU Affero General Public License
# as published by the Free Software Foundation; version 3 with
# attribution addendums as found in the LICENSE.txt
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.

# This file may also be used under the terms of a commercial license
# if purchased from OpenC3, Inc.

module OpenC3
  class CliGenerator
    GENERATORS = %w(plugin target microservice widget conversion limits_response)
    TEMPLATES_DIR = "#{File.dirname(__FILE__)}/../../../templates"

    # Called by openc3cli with ARGV[1..-1]
    def self.generate(args)
      unless GENERATORS.include?(args[0])
        abort("Unknown generator '#{args[0]}'. Valid generators: #{GENERATORS.join(', ')}")
      end
      check_args(args)
      send("generate_#{args[0]}", args)
    end

    def self.check_args(args)
      args.each do |arg|
        if arg =~ /\s/
          abort("#{args[0].capitalize} arguments can not have spaces!")
        end
      end
      # All generators except 'plugin' must be within an existing plugin
      if args[0] != 'plugin' and Dir.glob("*.gemspec").empty?
        abort("No gemspec file detected. #{args[0].capitalize} generator should be run within an existing plugin.")
      end
    end

    def self.process_template(template_dir, the_binding)
      Dir.glob("#{template_dir}/**/*", File::FNM_DOTMATCH).each do |file|
        next if File.basename(file) == '.'
        base_name = file.sub("#{template_dir}/", '')
        next if yield base_name
        if File.directory?(file)
          FileUtils.mkdir(base_name) unless File.exist?(base_name)
          next
        end
        output = ERB.new(File.read(file), trim_mode: "-").result(the_binding)
        File.open(base_name, 'w') do |file|
          file.write output
        end
      end
    end

    def self.generate_plugin(args)
      if args.length != 2
        abort("Usage: cli generate #{args[0]} <NAME>")
      end

      # Create the local variables
      plugin = args[1].downcase.gsub(/_+|-+/, '-')
      plugin_name = "openc3-cosmos-#{plugin}"
      if File.exist?(plugin_name)
        abort("Plugin #{plugin_name} already exists!")
      end
      FileUtils.mkdir(plugin_name)
      Dir.chdir(plugin_name) # Change to the plugin path to make copying easier

      process_template("#{TEMPLATES_DIR}/plugin", binding) do |filename|
        filename.sub!("plugin.gemspec", "#{plugin_name}.gemspec")
        false
      end

      puts "Plugin #{plugin_name} successfully generated!"
      return plugin_name
    end

    def self.generate_target(args)
      if args.length != 2
        abort("Usage: cli generate #{args[0]} <NAME>")
      end

      # Create the local variables
      target_name = args[1].upcase.gsub(/_+|-+/, '_')
      target_path = "targets/#{target_name}"
      if File.exist?(target_path)
        abort("Target #{target_path} already exists!")
      end
      target_lib_filename = "#{target_name.downcase}.rb"
      target_class = target_lib_filename.filename_to_class_name
      target_object = target_name.downcase

      process_template("#{TEMPLATES_DIR}/target", binding) do |filename|
        # Rename the template TARGET to our actual target named after the plugin
        filename.sub!("targets/TARGET", "targets/#{target_name}")
        filename.sub!("target.rb", target_lib_filename)
        false
      end

      # Add this target to plugin.txt
      File.open("plugin.txt", 'a') do |file|
        file.puts <<~DOC

          VARIABLE #{target_name.downcase}_target_name #{target_name}

          TARGET #{target_name} <%= #{target_name.downcase}_target_name %>
          INTERFACE <%= #{target_name.downcase}_target_name %>_INT tcpip_client_interface.rb host.docker.internal 8080 8081 10.0 nil BURST
            MAP_TARGET <%= #{target_name.downcase}_target_name %>
        DOC
      end

      puts "Target #{target_name} successfully generated!"
      return target_name
    end

    def self.generate_microservice(args)
      if args.length != 2
        abort("Usage: cli generate #{args[0]} <NAME>")
      end

      # Create the local variables
      microservice_name = args[1].upcase.gsub(/_+|-+/, '_')
      microservice_path = "microservices/#{microservice_name}"
      if File.exist?(microservice_path)
        abort("Microservice #{microservice_path} already exists!")
      end
      microservice_filename = "#{microservice_name.downcase}.rb"
      microservice_class = microservice_filename.filename_to_class_name

      process_template("#{TEMPLATES_DIR}/microservice", binding) do |filename|
        # Rename the template MICROSERVICE to our actual microservice name
        filename.sub!("microservices/TEMPLATE", "microservices/#{microservice_name}")
        filename.sub!("microservice.rb", microservice_filename)
        false
      end

      # Add this microservice to plugin.txt
      File.open("plugin.txt", 'a') do |file|
        file.puts <<~DOC

          MICROSERVICE #{microservice_name} #{microservice_name.downcase.gsub('_','-')}-microservice
            CMD ruby #{microservice_name.downcase}.rb
        DOC
      end

      puts "Microservice #{microservice_name} successfully generated!"
      return microservice_name
    end

    def self.generate_widget(args)
      if args.length != 2
        abort("Usage: cli generate #{args[0]} <SuperdataWidget>")
      end
      # Per https://stackoverflow.com/a/47591707/453280
      if args[1] !~ /.*Widget$/ or args[1][0...-6] != args[1][0...-6].capitalize
        abort("Widget name should be Uppercase followed by Widget, e.g. SuperdataWidget. Found '#{args[1]}'.")
      end

      # Create the local variables
      widget_name = args[1]
      widget_filename = "#{widget_name}.vue"
      widget_path = "src/#{widget_filename}"
      if File.exist?(widget_path)
        abort("Widget #{widget_path} already exists!")
      end
      skip_package = false
      if File.exist?('package.json')
        puts "package.json already exists ... you'll have to manually add this widget to the end of the \"build\" script."
        skip_package = true
      end

      process_template("#{TEMPLATES_DIR}/widget", binding) do |filename|
        if skip_package && filename == 'package.json'
          true # causes the block to skip processing this file
        elsif filename.include?('node_modules')
          true
        else
          filename.sub!("Widget.vue", widget_filename)
          false
        end
      end

      # Add this widget to plugin.txt but remove Widget from the name
      File.open("plugin.txt", 'a') do |file|
        file.puts <<~DOC

          WIDGET #{widget_name[0...-6]}
        DOC
      end

      puts "Widget #{widget_name} successfully generated!"
      puts "Please be sure #{widget_name} does not overlap an existing widget: https://openc3.com/docs/v5/telemetry-screens"
      return widget_name
    end

    def self.generate_conversion(args)
      if args.length != 3
        abort("Usage: cli generate conversion <TARGET> <NAME>")
      end

      # Create the local variables
      target_name = args[1].upcase
      unless File.exist?("targets/#{target_name}")
        abort("Target '#{target_name}' does not exist! Conversions must be created for existing targets.")
      end
      conversion_name = "#{args[2].upcase.gsub(/_+|-+/, '_')}_CONVERSION"
      conversion_path = "targets/#{target_name}/lib/"
      conversion_basename = "#{conversion_name.downcase}.rb"
      conversion_class = conversion_basename.filename_to_class_name
      conversion_filename = "targets/#{target_name}/lib/#{conversion_basename}"
      if File.exist?(conversion_filename)
        abort("Conversion #{conversion_filename} already exists!")
      end

      process_template("#{TEMPLATES_DIR}/conversion", binding) do |filename|
        filename.sub!("conversion.rb", conversion_filename)
        false
      end

      puts "Conversion #{conversion_filename} successfully generated!"
      puts "To use the conversion add the following to a telemetry item:"
      puts "  READ_CONVERSION #{conversion_basename}"
      return conversion_name
    end

    def self.generate_limits_response(args)
      if args.length != 3
        abort("Usage: cli generate limits_response <TARGET> <NAME>")
      end

      # Create the local variables
      target_name = args[1].upcase
      unless File.exist?("targets/#{target_name}")
        abort("Target '#{target_name}' does not exist! Limits responses must be created for existing targets.")
      end
      response_name = "#{args[2].upcase.gsub(/_+|-+/, '_')}_LIMITS_RESPONSE"
      response_path = "targets/#{target_name}/lib/"
      response_basename = "#{response_name.downcase}.rb"
      response_class = response_basename.filename_to_class_name
      response_filename = "targets/#{target_name}/lib/#{response_basename}"
      if File.exist?(response_filename)
        abort("response #{response_filename} already exists!")
      end

      process_template("#{TEMPLATES_DIR}/limits_response", binding) do |filename|
        filename.sub!("response.rb", response_filename)
        false
      end

      puts "Limits response #{response_filename} successfully generated!"
      puts "To use the limits response add the following to a telemetry item:"
      puts "  LIMITS_RESPONSE #{response_basename}"
      return response_name
    end
  end
end