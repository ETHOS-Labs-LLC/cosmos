"use strict";(self.webpackChunkdocs_openc3_com=self.webpackChunkdocs_openc3_com||[]).push([[5239],{6712:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=t(5893),n=t(1151);const i={title:"Logging"},r=void 0,a={id:"guides/logging",title:"Logging",description:"The COSMOS Bucket Explorer tool provides a way to browse the COSMOS bucket storage backend whether you are running locally or in a cloud environment. Browse to http2900/tools/bucketexplorer and you should see the list of buckets at the top:",source:"@site/docs/guides/logging.md",sourceDirName:"guides",slug:"/guides/logging",permalink:"/docs/guides/logging",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenC3/cosmos/tree/main/docs.openc3.com/docs/guides/logging.md",tags:[],version:"current",frontMatter:{title:"Logging"},sidebar:"defaultSidebar",previous:{title:"Local Mode",permalink:"/docs/guides/local-mode"},next:{title:"Monitoring",permalink:"/docs/guides/monitoring"}},l={},c=[{value:"decom_logs &amp; raw_logs",id:"decom_logs--raw_logs",level:3},{value:"text_logs",id:"text_logs",level:3},{value:"openc3_log_messages",id:"openc3_log_messages",level:4},{value:"openc3_notifications",id:"openc3_notifications",level:4},{value:"tool_logs",id:"tool_logs",level:3}];function d(e){const o={a:"a",h3:"h3",h4:"h4",img:"img",p:"p",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.p,{children:["The COSMOS ",(0,s.jsx)(o.a,{href:"/docs/tools/bucket-explorer",children:"Bucket Explorer"})," tool provides a way to browse the COSMOS bucket storage backend whether you are running locally or in a cloud environment. Browse to ",(0,s.jsx)(o.a,{href:"http://localhost:2900/tools/bucketexplorer",children:"http://localhost:2900/tools/bucketexplorer"})," and you should see the list of buckets at the top:"]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"Bucket Explorer",src:t(9653).Z+"",width:"1818",height:"1498"})}),"\n",(0,s.jsx)(o.p,{children:"Note the config and logs buckets are organized by scopes of which there initially is just one: DEFAULT. Clicking the DEFAULT folder in the logs bucket shows the decom_logs, raw_logs, reduced_xxx_logs, text_logs and tool_logs."}),"\n",(0,s.jsx)(o.h3,{id:"decom_logs--raw_logs",children:"decom_logs & raw_logs"}),"\n",(0,s.jsx)(o.p,{children:"The decom_logs and raw_logs folders contain the decommutated and raw command and telemetry data. Both are further broken down by target, packet, then date. For example, browsing into the DEFAULT/raw_logs/tlm/INST2/ directory:"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"raw_tlm_logs",src:t(1503).Z+"",width:"1098",height:"743"})}),"\n",(0,s.jsxs)(o.p,{children:["Note the presence of both gzipped .bin files and .idx files. The .bin files contain the raw binary data while the idx files are index files designed to allow quick binary searches on the corresponding packet logs. For more information about the structure of these files see the ",(0,s.jsx)(o.a,{href:"/docs/development/log-structure",children:"Log Structure"})," developer documentation."]}),"\n",(0,s.jsx)(o.p,{children:"The default settings for the Logging microservice is to start a new log file every 10 minutes or 50MB, which ever comes first. In the case of the low data rate demo, the 10 minute mark is hit first."}),"\n",(0,s.jsxs)(o.p,{children:["To change the logging settings add the various CYCLE_TIME ",(0,s.jsx)(o.a,{href:"/docs/configuration/plugins#target-modifiers",children:"Target Modifiers"})," under the declared ",(0,s.jsx)(o.a,{href:"/docs/configuration/plugins#target-1",children:"TARGET"})," name in your plugin.txt."]}),"\n",(0,s.jsx)(o.h3,{id:"text_logs",children:"text_logs"}),"\n",(0,s.jsx)(o.p,{children:"The text_logs folder contains openc3_log_messages and openc3_notifications."}),"\n",(0,s.jsx)(o.h4,{id:"openc3_log_messages",children:"openc3_log_messages"}),"\n",(0,s.jsx)(o.p,{children:"The cosmos_log_messages folder contains text files which are again sorted by date and timestamped. These log messages come from the various microservices including the server and the target microservices. Thus these logs contain all the commands sent (in plain text) and telemetry checked."}),"\n",(0,s.jsx)(o.h4,{id:"openc3_notifications",children:"openc3_notifications"}),"\n",(0,s.jsx)(o.p,{children:"The openc3_notifications folder contains all the notifications which are accessible from the Bell icon in the status bar."}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"notifications",src:t(9271).Z+"",width:"414",height:"302"})}),"\n",(0,s.jsx)(o.h3,{id:"tool_logs",children:"tool_logs"}),"\n",(0,s.jsx)(o.p,{children:"The tool_logs directory contains logs from the various COSMOS tools. Note that if you have not yet run any tools you may not see this directory as it is created on demand. Tool sub-directories are also created on demand. For example, after running a script in Script Runner a new 'sr' subdirectory appears which contains the script runner log resulting from running the script. In some cases logs in this directory may also be directly available from the tool itself. In the Script Runner case, the Log Messages pane below the script holds the output messages from the last script. Clicking the Download link allows you to download these messages as a file."}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"log_messages",src:t(563).Z+"",width:"743",height:"193"})})]})}function g(e={}){const{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},9653:(e,o,t)=>{t.d(o,{Z:()=>s});const s=t.p+"assets/images/bucket_explorer-983c087ee3bdcf8626219e782620b6c580fd82bfe2e8b0c662a0f90cdca43838.png"},563:(e,o,t)=>{t.d(o,{Z:()=>s});const s=t.p+"assets/images/log_messages-2cfad0fd6f6f980f69b5564a4b7ecfecf3331c6256c78bcfb2b084970db305ca.png"},9271:(e,o,t)=>{t.d(o,{Z:()=>s});const s=t.p+"assets/images/notifications-5b32d6619542431027ddd67491eb445469fa2d16fa8352a2b0917b9298b7bbb2.png"},1503:(e,o,t)=>{t.d(o,{Z:()=>s});const s=t.p+"assets/images/raw_tlm_logs-8dcba4f020b36f8efbb793271b70d40d9cad627196afaeb5bf6f3931ed53fa52.png"},1151:(e,o,t)=>{t.d(o,{Z:()=>a,a:()=>r});var s=t(7294);const n={},i=s.createContext(n);function r(e){const o=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(i.Provider,{value:o},e.children)}}}]);