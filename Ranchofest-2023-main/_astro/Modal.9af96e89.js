import{d as i,r as c,c as d,a as e,b as f,n as p,o as m}from"./runtime-core.esm-bundler.a2ea3320.js";const _=(n,t)=>{const s=n.__vccOpts||n;for(const[o,a]of t)s[o]=a;return s},u=i({__name:"Modal",props:{open:{type:Boolean}},setup(n,{expose:t}){t();const s=n,o=localStorage.getItem("donationOverride"),a=c(s.open),r={props:s,donationOverride:o,state:a,overrideDonation:()=>{a.value=!1,localStorage.setItem("donationOverride","true")}};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}}),v={class:"flex justify-end"},b=e("ul",{class:"prohibited p-0 m-0"},[e("li",{class:"align-items-start p-0 m-0"})],-1),g=[b],x={class:"flex justify-between items-center"},y=e("img",{src:"images/dollar.gif",alt:"dollar"},null,-1),h=e("div",{class:"flex w-full justify-center"},[e("a",{href:"https://account.venmo.com/u/Ranchofest",class:"btn btn-primary btn-large mt-4"},[e("span",{class:"blink"},"Donate")])],-1);function k(n,t,s,o,a,l){return m(),d("div",{class:p(["min-w-[50px] min-h-[50px] fixed top-1/3 left-1/2 bg-black p-4",!o.donationOverride&&o.state?"flex flex-col justify-center":"hidden"]),style:{transform:"translate(-50%, 0)",border:"6px ridge #bbb",color:"yellow"}},[e("div",v,[e("button",{onClick:t[0]||(t[0]=r=>o.state=!1),class:"p-0 m-0"},g)]),e("div",x,[y,f(n.$slots,"default")]),h,e("button",{class:"mt-4 hover:underline",onClick:t[1]||(t[1]=r=>o.overrideDonation())},"I already donated!")],2)}const j=_(u,[["render",k]]);export{j as default};
