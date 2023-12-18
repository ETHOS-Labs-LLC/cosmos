"use strict";(self.webpackChunkdocs_openc3_com=self.webpackChunkdocs_openc3_com||[]).push([[8769],{2028:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>o});var a=t(5893),n=t(1151);const d={title:"Command and Telemetry Server"},r=void 0,i={id:"tools/cmd-tlm-server",title:"Command and Telemetry Server",description:"Introduction",source:"@site/docs/tools/cmd-tlm-server.md",sourceDirName:"tools",slug:"/tools/cmd-tlm-server",permalink:"/docs/tools/cmd-tlm-server",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenC3/cosmos/tree/main/docs.openc3.com/docs/tools/cmd-tlm-server.md",tags:[],version:"current",frontMatter:{title:"Command and Telemetry Server"},sidebar:"defaultSidebar",previous:{title:"Command Sender",permalink:"/docs/tools/cmd-sender"},next:{title:"Data Extractor",permalink:"/docs/tools/data-extractor"}},c={},o=[{value:"Introduction",id:"introduction",level:2},{value:"Command and Telemetry Server Menus",id:"command-and-telemetry-server-menus",level:2},{value:"File Menu Items",id:"file-menu-items",level:3},{value:"Interfaces Tab",id:"interfaces-tab",level:2},{value:"Targets Tab",id:"targets-tab",level:2},{value:"Command Packets Tab",id:"command-packets-tab",level:2},{value:"Telemetry Packets Tab",id:"telemetry-packets-tab",level:2},{value:"Status Tab",id:"status-tab",level:2},{value:"Log Messages",id:"log-messages",level:2}];function l(e){const s={a:"a",h2:"h2",h3:"h3",img:"img",p:"p",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsxs)(s.p,{children:["The Command and Telemetry Server application provides status about the ",(0,a.jsx)(s.a,{href:"/docs/configuration/interfaces",children:"interfaces"})," and targets instantiated in your COSMOS installation. Intefaces can be connected or disconnected and raw byte counts are returned. The application also provides quick shortcuts to view\nboth raw and formatted command and telemetry packets as they go through the COSMOS system. At the bottom of the Command and Telemetry Server is the Log Messages showing server messages."]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"Cmd Tlm Server",src:t(4098).Z+"",width:"1938",height:"1394"})}),"\n",(0,a.jsx)(s.h2,{id:"command-and-telemetry-server-menus",children:"Command and Telemetry Server Menus"}),"\n",(0,a.jsx)(s.h3,{id:"file-menu-items",children:"File Menu Items"}),"\n",(0,a.jsx)(s.p,{children:"The Command and Telemetry Server has one menu under File -> Options:"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"File Menu",src:t(275).Z+"",width:"267",height:"130"})}),"\n",(0,a.jsx)(s.p,{children:"This dialog changes the refresh rate of the Command and Telemetry Server to reduce load on both your browser window and the backend server. Note that this changes the refresh rate of the various tabs in the application. The Log Messages will continue to update as messages are generated."}),"\n",(0,a.jsx)(s.h2,{id:"interfaces-tab",children:"Interfaces Tab"}),"\n",(0,a.jsx)(s.p,{children:"The Interfaces tab displays all the interfaces defined by your COSMOS installation. You can Connect or Disconnect interfaces and view raw byte and packet counts."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"Interfaces",src:t(9013).Z+"",width:"1938",height:"800"})}),"\n",(0,a.jsx)(s.h2,{id:"targets-tab",children:"Targets Tab"}),"\n",(0,a.jsx)(s.p,{children:"The Targets tab displays all the targets and their mapped interfaces."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"Targets",src:t(9645).Z+"",width:"1938",height:"976"})}),"\n",(0,a.jsx)(s.h2,{id:"command-packets-tab",children:"Command Packets Tab"}),"\n",(0,a.jsx)(s.p,{children:"The Command Packets tab displays all the available commands. The table can be sorted by clicking on the column headers. The table is paginated to support thousands of commands. The search bar searches all pages for a command."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"Commands",src:t(81).Z+"",width:"1938",height:"1320"})}),"\n",(0,a.jsx)(s.p,{children:"Clicking on View Raw opens a dialog displaying the raw bytes for that command."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"Raw Command",src:t(2125).Z+"",width:"705",height:"274"})}),"\n",(0,a.jsxs)(s.p,{children:["Clicking View in Command Sender opens up a new ",(0,a.jsx)(s.a,{href:"/docs/tools/cmd-sender",children:"Command Sender"})," window with the specified command."]}),"\n",(0,a.jsx)(s.h2,{id:"telemetry-packets-tab",children:"Telemetry Packets Tab"}),"\n",(0,a.jsx)(s.p,{children:"The Telemetry Packets tab displays all the available telemetry. The table can be sorted by clicking on the column headers. The table is paginated to support thousands of telemetry packets. The search bar searches all pages for a telemetry packet."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"Telemetry",src:t(8071).Z+"",width:"1938",height:"1320"})}),"\n",(0,a.jsx)(s.p,{children:"Clicking on View Raw opens a dialog displaying the raw bytes for that telemetry packet."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"Raw Telemetry",src:t(1290).Z+"",width:"697",height:"364"})}),"\n",(0,a.jsxs)(s.p,{children:["Clicking View in Packet Viewer opens up a new ",(0,a.jsx)(s.a,{href:"/docs/tools/packet-viewer",children:"Packet Viewer"})," window with the specified telemetry packet."]}),"\n",(0,a.jsx)(s.h2,{id:"status-tab",children:"Status Tab"}),"\n",(0,a.jsx)(s.p,{children:"The Status tab displays the current COSMOS Limits Set and metrics."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"Status",src:t(3630).Z+"",width:"1938",height:"1036"})}),"\n",(0,a.jsx)(s.h2,{id:"log-messages",children:"Log Messages"}),"\n",(0,a.jsx)(s.p,{children:"The Log Messages table sits below all the tabs in the Command and Telemetry Server application. It displays server messages such as limits events (new RED, YELLOW, GREEN values), logging events (new files) and interface events (connecting and disconnecting). It can be filtered by severity or by entering values in the Search box. It can also be paused and resumed to inspect an individual message."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"Log Messages",src:t(650).Z+"",width:"1938",height:"864"})})]})}function h(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},4098:(e,s,t)=>{t.d(s,{Z:()=>a});const a=t.p+"assets/images/cmd_tlm_server-313e3f64afc0e374d9d28b46364235d7b793001f84690fc0ae90e1eefdd9142d.png"},81:(e,s,t)=>{t.d(s,{Z:()=>a});const a=t.p+"assets/images/commands-3608d5c856fd34e771d1f9e69f9f449f52929249bdf4f0e7feed0aa2bd2d9fd7.png"},275:(e,s,t)=>{t.d(s,{Z:()=>a});const a="data:image/png;base64,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"},9013:(e,s,t)=>{t.d(s,{Z:()=>a});const a=t.p+"assets/images/interfaces-5622abf50e3df63980661a48216bf71187f38cb636bd512f48917ca4a425f083.png"},650:(e,s,t)=>{t.d(s,{Z:()=>a});const a=t.p+"assets/images/log_messages-19c3ce9c7ff86e43d459cb6591df8c05d25e1390d857728cb462a57b9d3ccc69.png"},2125:(e,s,t)=>{t.d(s,{Z:()=>a});const a=t.p+"assets/images/raw_command-759d93759a73a6a3dd7e30f89fc4d1a544dfb6f7355abfed03897d404279161d.png"},1290:(e,s,t)=>{t.d(s,{Z:()=>a});const a=t.p+"assets/images/raw_telemetry-ffeb6b603f9a9abbe0cb77afaaeb4b4f07dfee479682a5c9661f85589a679049.png"},3630:(e,s,t)=>{t.d(s,{Z:()=>a});const a=t.p+"assets/images/status-80010882300d2f1c453fbc4cb35bdb1f06d3db578266dda95c56ea7ec230ac72.png"},9645:(e,s,t)=>{t.d(s,{Z:()=>a});const a=t.p+"assets/images/targets-d15296b133787be4997c3d5e7d43eec9030831f1758508a8f6a71d40d04478ce.png"},8071:(e,s,t)=>{t.d(s,{Z:()=>a});const a=t.p+"assets/images/telemetry-3f1169fc67b3d2427047ba66a9b2f3ddf71f61edf498ee70d14e78f0ef3c1e3c.png"},1151:(e,s,t)=>{t.d(s,{Z:()=>i,a:()=>r});var a=t(7294);const n={},d=a.createContext(n);function r(e){const s=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(d.Provider,{value:s},e.children)}}}]);