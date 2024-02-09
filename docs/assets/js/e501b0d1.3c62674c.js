"use strict";(self.webpackChunkdocs_openc3_com=self.webpackChunkdocs_openc3_com||[]).push([[1358],{2450:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=i(5893),o=i(1151);const s={title:"Local Mode"},a=void 0,c={id:"guides/local-mode",title:"Local Mode",description:"Local Mode is a new feature in the 5.0.9 COSMOS release. It is intended to capture the configuration of an edited plugin so it can be configuration managed. It allows you to edit portions of a plugin (scripts and screens) locally in the editor of your choice and instantly have those changes appear in the COSMOS plugin. This avoids the plugin build / install cycle which is required when editing command and telemetry or interface definitions.",source:"@site/docs/guides/local-mode.md",sourceDirName:"guides",slug:"/guides/local-mode",permalink:"/docs/guides/local-mode",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenC3/cosmos/tree/main/docs.openc3.com/docs/guides/local-mode.md",tags:[],version:"current",frontMatter:{title:"Local Mode"},sidebar:"defaultSidebar",previous:{title:"Little Endian Bitfields",permalink:"/docs/guides/little-endian-bitfields"},next:{title:"Logging",permalink:"/docs/guides/logging"}},d={},l=[{value:"Using Local Mode",id:"using-local-mode",level:2},{value:"Editing scripts",id:"editing-scripts",level:3},{value:"Disabling Local Mode",id:"disabling-local-mode",level:3},{value:"Configuration Management",id:"configuration-management",level:2}];function r(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Local Mode is a new feature in the 5.0.9 COSMOS release. It is intended to capture the configuration of an edited plugin so it can be configuration managed. It allows you to edit portions of a plugin (scripts and screens) locally in the editor of your choice and instantly have those changes appear in the COSMOS plugin. This avoids the plugin build / install cycle which is required when editing command and telemetry or interface definitions."}),"\n",(0,n.jsx)(t.h2,{id:"using-local-mode",children:"Using Local Mode"}),"\n",(0,n.jsxs)(t.p,{children:["In this tutorial we will use the COSMOS Demo as configured by the ",(0,n.jsx)(t.a,{href:"/docs/getting-started/installation",children:"Installation Guide"}),". You should have cloned a ",(0,n.jsx)(t.a,{href:"https://github.com/OpenC3/cosmos-project",children:"cosmos-project"})," and started it using ",(0,n.jsx)(t.code,{children:"openc3.sh run"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["If you check the project directory you should see a ",(0,n.jsx)(t.code,{children:"plugins/DEFAULT/openc3-cosmos-demo"})," directory. This will contain both the gem that was installed and a ",(0,n.jsx)(t.code,{children:"plugin_instance.json"})," file. The ",(0,n.jsx)(t.code,{children:"plugin_instance.json"})," file captures the plugin.txt values when the plugin was installed. Note, all files in the plugins directory are meant to be configuration managed with the project. This ensures if you make local edits and check them in, another user can clone the project and get the exact same configuration. We will demonstrate this later."]}),"\n",(0,n.jsx)(t.h3,{id:"editing-scripts",children:"Editing scripts"}),"\n",(0,n.jsx)(t.admonition,{title:"Visual Studio Code",type:"info",children:(0,n.jsxs)(t.p,{children:["This tutorial will use ",(0,n.jsx)(t.a,{href:"https://code.visualstudio.com",children:"VS Code"})," which is the editor used by the COSMOS developers."]})}),"\n",(0,n.jsxs)(t.p,{children:["The most common use case for Local Mode is script development. Launch Script Runner and open the ",(0,n.jsx)(t.code,{children:"INST/procedures/checks.rb"})," file. If you run this script you'll notice that it has a few errors (by design) which prevent it from running to completion. Let's fix it! Comment out lines 7 & 9 and save the script. You should now notice that Local Mode has saved a copy of the script to ",(0,n.jsx)(t.code,{children:"plugins/targets_modified/INST/procedures/checks.rb"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Project Layout",src:i(6713).Z+"",width:"991",height:"547"})}),"\n",(0,n.jsxs)(t.p,{children:["At this point Local Mode keeps these scripts in sync so we can edit in either place. Let's edit the local script by adding a simple comment at the top: ",(0,n.jsx)(t.code,{children:"# This is a script"}),". Now if we go back to Script Runner the changes have not ",(0,n.jsx)(t.em,{children:"automatically"})," appeared. However, there is a Reload button next to the filename that will refresh the file from the backend."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Project Layout",src:i(6162).Z+"",width:"839",height:"532"})}),"\n",(0,n.jsx)(t.p,{children:"Clicking this reloads the file which has been synced into COSMOS and now we see our comment."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Project Layout",src:i(6353).Z+"",width:"839",height:"232"})}),"\n",(0,n.jsx)(t.h3,{id:"disabling-local-mode",children:"Disabling Local Mode"}),"\n",(0,n.jsxs)(t.p,{children:["If you want to disable Local Mode you can edit the .env file and delete the setting ",(0,n.jsx)(t.code,{children:"OPENC3_LOCAL_MODE=1"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"configuration-management",children:"Configuration Management"}),"\n",(0,n.jsx)(t.p,{children:"It is recommended to configuration manage the entire project including the plugins directory. This will allow any user who starts COSMOS to launch an identical configuration. Plugins are created and updated with any modifications found in the targets_modified directory."}),"\n",(0,n.jsx)(t.p,{children:"At some point you will probably want to release your local changes back to the plugin they originated from. Simply copy the entire targets_modified/TARGET directory back to the original plugin. At that point you can rebuild the plugin using the CLI."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"openc3-cosmos-demo % ./openc3.sh cli rake build VERSION=1.0.1\n  Successfully built RubyGem\n  Name: openc3-cosmos-demo\n  Version: 1.0.1\n  File: openc3-cosmos-demo-1.0.1.gem\n"})}),"\n",(0,n.jsx)(t.p,{children:"Upgrade the plugin using the Admin Plugins tab and the Upgrade link. When you select your newly built plugin, COSMOS detects the existing changes and asks if you want to delete them. There is a stern warning attached because this will permanently remove these changes! Since we just moved over the changes and rebuilt the plugin we will check the box and INSTALL."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Project Layout",src:i(8686).Z+"",width:"1272",height:"619"})}),"\n",(0,n.jsxs)(t.p,{children:["When the new plugin is installed, the project's ",(0,n.jsx)(t.code,{children:"plugins"})," directory gets updated with the new plugin and everything under the targets_modified directory is removed because there are no modifications on a new install."]}),"\n",(0,n.jsx)(t.p,{children:"Local Mode is a powerful way to develop scripts and screens on the local file system and automatically have them sync to COSMOS."})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}},8686:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/delete_modified-ecf9beabf5e6cc6b8cc9d249ba9e313bd18d51c671ebc36029b4cebd729fa2d0.png"},6713:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/project-c521374330008c1292b4da1b9a1c8af6647ab59f1617b470f26e76a521fe8059.png"},6162:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/reload_file-056b240b1d48539a9fecfe2ad1bac0c27d83f5dddcd29af6cf719986869406ee.png"},6353:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/reloaded-516bc4c257f9b7f6ce3714f5a06eeef8ad47a8461e21613ba26989d5e56260ec.png"},1151:(e,t,i)=>{i.d(t,{Z:()=>c,a:()=>a});var n=i(7294);const o={},s=n.createContext(o);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);