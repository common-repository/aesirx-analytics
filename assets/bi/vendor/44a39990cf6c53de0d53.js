"use strict";(self.webpackChunkaesirx_analytics=self.webpackChunkaesirx_analytics||[]).push([[6594],{76594:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var r=a(14835),s=a(87698),n=(a(24899),a(96540)),o=a(71083),l=a(9072),m=({btnClass:e="",spacingClass:t="",noLabel:a=!1,forgotPasswordLink:m=""})=>{const[i,c]=(0,n.useState)(!1),{handleOnData:d,demoUser:p,demoPassword:u}=(0,n.useContext)(r.k);return n.createElement("form",{onSubmit:async e=>{e.preventDefault(),c(!0);try{const{endpoint:t,client_id:a,client_secret:r}=(0,s.NR)(),n=e.target,l=new FormData(n),m="undefined"!=typeof window&&window.location.search,i=new URLSearchParams(m),p=i.get("organisationId"),u=i.get("return"),w=i.get("channel_type"),b={method:"post",url:`${t}/index.php?webserviceClient=site&webserviceVersion=1.0.0&option=token&api=oauth2`,headers:{"Content-Type":"application/x-www-form-urlencoded"},data:{username:l.get("ssoemail"),password:l.get("ssoepassword"),client_id:a,client_secret:r,grant_type:"password",...w&&{channel_type:w},...u&&{return:u},...p&&{organisationId:p}}},{data:h}=await(0,o.A)(b);d(h),c(!1)}catch(e){return console.log("errorerrorerror",e),(0,l.oR)("Wrong authentication",{closeOnClick:!1}),c(!1),!1}}},p&&p&&n.createElement(n.Fragment,null,n.createElement("h5",{className:"text-primary"},"Demo email: ",p," "),n.createElement("h5",{className:"mb-3 text-primary"},"Demo password: ",u," ")),n.createElement("div",{className:`${t||"mb-4"}`},!a&&n.createElement("label",{htmlFor:"ssoemail",className:"form-label text-primary mb-2"},"Email address"),n.createElement("input",{type:"email",className:"form-control lh-sm border",name:"ssoemail",defaultValue:p})),n.createElement("div",{className:`${t||"mb-4"}`},!a&&n.createElement("label",{htmlFor:"ssoepassword",className:"form-label text-primary mb-2"},"Password"),n.createElement("input",{type:"password",className:"form-control lh-sm border",name:"ssoepassword",defaultValue:u,required:!0})),n.createElement("p",{className:`text-end ${t||"mb-4"}`},n.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:`${m||"https://dapp.shield.aesirx.io/auth/forgot-password"}`,className:"text-decoration-none"},"Forgot password ?")),n.createElement("button",{type:"submit",className:`${e||"btn btn-success w-100 lh-sm text-white fw-semibold"}`},i?n.createElement(n.Fragment,null,n.createElement("span",{className:"spinner-border spinner-border-sm me-1",role:"status","aria-hidden":"true"}),"Waiting..."):"Login"))}}}]);