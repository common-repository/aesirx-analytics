/*! For license information please see 176b695fc568599fe81f.js.LICENSE.txt */
"use strict";(self.webpackChunkaesirx_analytics=self.webpackChunkaesirx_analytics||[]).push([[6195],{6195:(t,e,s)=>{s.r(e),s.d(e,{default:()=>S});var a=s(65004),n=s(93336),i=s(51751),o=s(53800),r=s(55688),l=s(96540),h=s(56347),c=s(27813),d=s(66683),u=s(67658),m=s(95093),g=s.n(m),M=s(44015),D=s(32389),p=class{constructor(){(0,r.Mu)(this,"getConsentsList",(async(t,e,s,a)=>{try{const n=new d.L20,i=await n.getConsentsList(t,e);i?(0,c.h5)((()=>{s(i)})):a({message:"Something went wrong from Server response"})}catch(t){(0,c.h5)((()=>{t.response?.data.message?a({message:t.response?.data?.message}):a({message:t?.response?.data?._messages?t.response?.data?._messages[0]?.message:"Something went wrong from Server response"})}))}})),(0,r.Mu)(this,"getConsentsDate",(async(t,e,s,a)=>{try{const n=new d.L20,i=await n.getConsentsDate(t,e);i?(0,c.h5)((()=>{s(i)})):a({message:"Something went wrong from Server response"})}catch(t){(0,c.h5)((()=>{t.response?.data.message?a({message:t.response?.data?.message}):a({message:t?.response?.data?._messages?t.response?.data?._messages[0]?.message:"Something went wrong from Server response"})}))}})),(0,r.Mu)(this,"getConsentsTier",(async(t,e,s,a)=>{try{const n=new d.L20,i=await n.getConsentsTier(t,e);i?(0,c.h5)((()=>{s(i)})):a({message:"Something went wrong from Server response"})}catch(t){(0,c.h5)((()=>{t.response?.data.message?a({message:t.response?.data?.message}):a({message:t?.response?.data?._messages?t.response?.data?._messages[0]?.message:"Something went wrong from Server response"})}))}})),(0,r.Mu)(this,"getEventsType",(async(t,e,s,a)=>{try{const n=new d.L20,i=await n.getEventsType(t,e);i?(0,c.h5)((()=>{s(i)})):a({message:"Something went wrong from Server response"})}catch(t){(0,c.h5)((()=>{t.response?.data.message?a({message:t.response?.data?.message}):a({message:t?.response?.data?._messages?t.response?.data?._messages[0]?.message:"Something went wrong from Server response"})}))}}))}},C=class{constructor(t,e){(0,r.Mu)(this,"data",[]),(0,r.Mu)(this,"globalViewModel",null),(0,r.Mu)(this,"toRaw",(()=>this.data)),(0,r.Mu)(this,"transformResponse",(()=>{let t={};return this.data?.length>0&&this.data?.forEach((e=>{const s=this.data.filter((t=>t[d.sSJ.EVENT_NAME]===e[d.sSJ.EVENT_NAME]));t={...t,[e[d.sSJ.EVENT_NAME]]:s}})),t})),(0,r.Mu)(this,"transformConsentsResponse",(()=>{let t={};return this.data?.length>0&&this.data?.forEach((e=>{const s=this.data.filter((t=>t[d.HMX.EVENT_NAME]===e[d.HMX.EVENT_NAME]));t={...t,[e[d.HMX.EVENT_NAME]]:s}})),t})),(0,r.Mu)(this,"transformAttributeCartResponse",(t=>(this.dataAttr?.length>0&&(this.dataAddToCart={...t}),t))),(0,r.Mu)(this,"getFilterName",(()=>{const t=this.transformResponse(),e=Object.keys(t).map((t=>({value:t,label:t})));return e?.unshift({value:"all",label:"All"}),e})),(0,r.Mu)(this,"getListLine",(()=>{const t=this.transformResponse();return Object.keys(t).map((t=>t))})),(0,r.Mu)(this,"toBarChart",(()=>{const t=this.transformConsentsResponse();return Object.keys(t).map((e=>({name:e,number:t[e]?.reduce(((t,e)=>t+e[d.HMX.TOTAL_VISITOR]),0)})))})),(0,r.Mu)(this,"handleChangeLink",((t,e)=>{t.preventDefault(),e&&this.globalViewModel.setIntegrationLink(e)})),(0,r.Mu)(this,"toChartByTier",(()=>this.data.map((t=>{if(t[d.ob1.TIER]){let e="Consent";switch(t[d.ob1.TIER]){case 1:e="Consent";break;case 3:e="Decentralized Consent";break;case 4:e="Decentralized Consent + SoP"}return{name:e,value:t[d.ob1.TOTAL]}}return"reject-consent"===t[d.uzr.EVENT_TYPE]?{name:"Reject Consent",value:t[d.uzr.TOTAL_VISITOR]}:{name:"Revoke Consent",value:t[d.uzr.TOTAL_VISITOR]}})))),(0,r.Mu)(this,"toChartByDate",(()=>{const t=(0,d.jgq)(this.globalViewModel?.dateFilter?.date_start,this.globalViewModel?.dateFilter?.date_end),e=t.map((t=>{const e=this.data.find((e=>g()(e.date).format("YYYY-MM-DD")===t));return{name:t&&g()(t,"YYYY-MM-DD").format("DD MMM"),Total:e?.[d._gJ.TOTAL]??0}})),s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map(((t,e)=>{const s=this.data.filter((t=>g()(t?.date).month()===e));let a=0;return s&&(a=s.reduce(((t,e)=>t+e[d._gJ.TOTAL]),0)),{name:t,Total:a}})),a={};t.forEach((t=>{const e=g()(t).startOf("isoWeek"),s=g()(t).endOf("isoWeek"),n=`${e.format("DD MMM")} - ${s.format("DD MMM")}`;a[n]||(a[n]={quantity:0});const i=this.data.filter((t=>g()(t?.date).isBetween(e,s,null,"[]")));if(i){const t=i.reduce(((t,e)=>t+e[d._gJ.TOTAL]),0);a[n].quantity+=t}}));return[{visitors:s},{visitors:e},{visitors:Object.keys(a).map((t=>({name:t,Total:a[t].quantity})))}]})),t&&(this.data=t,this.globalViewModel=e)}},E=class{constructor(t,e){(0,r.Mu)(this,"data",[]),(0,r.Mu)(this,"globalViewModel",null),(0,r.Mu)(this,"toRaw",(()=>this.data)),(0,r.Mu)(this,"toConsentsListTable",(()=>{const t=["txt_datetime","txt_expiration","txt_consent","txt_web3id","txt_wallet","txt_uuid"],e=[d.Ql_.DATETIME,d.Ql_.EXPIRATION,d.Ql_.TIER,d.Ql_.WEB3ID,d.Ql_.WALLET,d.Ql_.UUID];if(this.data?.length){const s=e.map(((e,s)=>({Header:t[s],accessor:e,width:e===d.Ql_.TIER||e===d.Ql_.WEB3ID?100:170,allowSort:!0,Cell:({cell:t,column:e})=>e.id===d.Ql_.WEB3ID?l.createElement("div",{className:"px-15"},t?.value):e.id===d.Ql_.WALLET?l.createElement("div",{className:"px-15"},t?.value?.address):e.id===d.Ql_.DATETIME||e.id===d.Ql_.EXPIRATION?l.createElement("div",{className:"px-15"},t?.value&&g()(t?.value).format("YYYY-MM-DD HH:mm:ss")):e.id===d.Ql_.TIER?l.createElement("div",{className:"px-15"},"3"===t?.value?.toString()?"Decentralized Consent":"4"===t?.value?.toString()?"Decentralized Consent + SoP":"Consent"):l.createElement("div",{className:""+(0===s?"pe-15":"px-15")},t?.value)}))),a=this.data?.map((t=>({...t,...e.map((e=>({[e]:t[e]}))).reduce(((t,e)=>({...e,...t})),{})}))),n=a?.map((t=>{for(let s in t)e.includes(s)||delete t[s];return t}));return{header:s,data:n}}return{header:[],data:[]}})),t&&(this.data=t??[],this.globalViewModel=e)}},T=class{constructor(t,e){(0,r.Mu)(this,"consentsStore",null),(0,r.Mu)(this,"status",i.s.READY),(0,r.Mu)(this,"globalStoreViewModel",null),(0,r.Mu)(this,"data",null),(0,r.Mu)(this,"dataFilter",{}),(0,r.Mu)(this,"statusConsentsList",i.s.READY),(0,r.Mu)(this,"consentsListData",null),(0,r.Mu)(this,"statusConsentsDate",i.s.READY),(0,r.Mu)(this,"consentsDateData",null),(0,r.Mu)(this,"statusConsentsTier",i.s.READY),(0,r.Mu)(this,"statusTierChart",i.s.READY),(0,r.Mu)(this,"consentsTierData",[]),(0,r.Mu)(this,"sortBy",{"sort[]":"","sort_direction[]":""}),(0,r.Mu)(this,"initialize",(async(t,e)=>{if(this.statusTierChart=i.s.LOADING,!e){const t=[this.dataFilterConsentsList,this.dataFilterConsentsDate];t?.forEach((t=>{for(const e in t)e.startsWith("filter[domain]")&&delete t[e]}))}this.getConsentsList({...t},e),this.getConsentsDate({...t},e),Promise.all([this.getConsentsTier({...t},e),this.getEventsType({...t},e,{"filter[event_name]":"Reject consent"}),this.getEventsType({...t},e,{"filter[event_name]":"Revoke consent"})]).then((()=>{this.statusTierChart=i.s.READY}))})),(0,r.Mu)(this,"getConsentsList",((t,e,s={"sort[]":"datetime","sort_direction[]":"desc"})=>{this.statusConsentsList=i.s.LOADING,this.sortBy=s,this.dataFilterConsentsList={page_size:"5",...this.dataFilterConsentsList,...t,...this.sortBy};const a={...this.globalStoreViewModel.dateFilter,...e};this.consentsStore.getConsentsList(this.dataFilterConsentsList,a,this.callbackOnDataConsentsListSuccessHandler,this.callbackOnErrorHandler)})),(0,r.Mu)(this,"getConsentsDate",((t,e)=>{this.statusConsentsDate=i.s.LOADING,this.dataFilterConsentsDate={page_size:"999",...this.dataFilterConsentsDate,...t};const s={...this.globalStoreViewModel.dateFilter,...e};this.consentsStore.getConsentsDate(this.dataFilterConsentsDate,s,this.callbackOnDataConsentsDateSuccessHandler,this.callbackOnErrorHandler)})),(0,r.Mu)(this,"getConsentsTier",((t,e)=>{this.statusConsentsTier=i.s.LOADING,this.dataFilterConsentsDate={page_size:"999",...this.dataFilterConsentsDate,...t};const s={...this.globalStoreViewModel.dateFilter,...e};this.consentsStore.getConsentsTier(this.dataFilterConsentsDate,s,this.callbackOnDataConsentsTierSuccessHandler,this.callbackOnErrorHandler)})),(0,r.Mu)(this,"getEventsType",(async(t,e,s={"sort[]":"number_of_page_views","sort_direction[]":"desc"})=>{this.statusConsentsTier=i.s.LOADING,this.sortByEventsType=s,this.dataFilterEventsType={page_size:"999",...this.dataFilterEventsType,...t,...this.sortByEventsType};const a={...this.globalStoreViewModel.dateFilter,...e};await this.consentsStore.getEventsType(this.dataFilterEventsType,a,this.callbackOnDataConsentsTierSuccessHandler,this.callbackOnErrorHandler)})),(0,r.Mu)(this,"setDataFilter",(t=>{this.dataFilter=t})),(0,r.Mu)(this,"handleFilterDateRange",((t,e)=>{this.statusConsentsList=i.s.LOADING,this.statusConsentsDate=i.s.LOADING,this.statusConsentsTier=i.s.LOADING;const s={...this.globalStoreViewModel.dateFilter,date_start:g()(t).format("YYYY-MM-DD"),date_end:g()(e).endOf("day").format("YYYY-MM-DD")};this.dateFilter={...this.dateFilter,...s},this.consentsTierData=[],this.initialize(this.dataFilter,s)})),(0,r.Mu)(this,"handleFilterTableConsentsList",(async t=>{this.statusConsentsList=i.s.LOADING,this.dataFilterConsentsList={...this.dataFilterConsentsList,...t};const e={...this.globalStoreViewModel.dateFilter};await this.consentsStore.getConsentsList(this.dataFilterConsentsList,e,this.callbackOnDataConsentsListSuccessHandler,this.callbackOnErrorHandler)})),(0,r.Mu)(this,"callbackOnErrorHandler",(t=>{this.status=i.s.READY,(0,u.me)(t.message,"error")})),(0,r.Mu)(this,"callbackOnDataConsentsListSuccessHandler",(t=>{if(t?.list){this.statusConsentsList=i.s.READY;const e=new E(t.list,this.globalStoreViewModel);this.consentsListData={list:e?.toConsentsListTable(),pagination:t.pagination}}else this.statusConsentsList=i.s.ERROR,this.consentsListData=[]})),(0,r.Mu)(this,"callbackOnDataConsentsDateSuccessHandler",(t=>{if(t?.list){this.statusConsentsDate=i.s.READY;const e=new C(t?.list,this.globalStoreViewModel);this.consentsDateData={list:e?.toChartByDate(),pagination:t.pagination}}else this.statusConsentsDate=i.s.ERROR,this.consentsDateData=[]})),(0,r.Mu)(this,"callbackOnDataConsentsTierSuccessHandler",(t=>{if(t?.list){this.statusConsentsTier=i.s.READY;const e=new C(t?.list,this.globalStoreViewModel);this.consentsTierData=[...this.consentsTierData,...e?.toChartByTier()],this.consentsTierData?.sort(((t,e)=>t.value>e.value?-1:1))}else this.statusConsentsTier=i.s.ERROR,this.consentsTierData=[]})),(0,c.l_)(this),this.consentsStore=t,this.globalStoreViewModel=e}},w=class{constructor(t,e){(0,r.Mu)(this,"consentsList",null),(0,r.Mu)(this,"getConsentsListViewModel",(()=>this.consentsList)),t&&(this.consentsList=new T(t,e))}},L=(0,l.lazy)((()=>Promise.all([s.e(3580),s.e(450),s.e(7360),s.e(8863),s.e(4678),s.e(6194)]).then(s.bind(s,66194)))),v=({link:t,...e})=>l.createElement(L,{...e}),b=(0,M.PA)(class extends l.Component{constructor(t){super(t),(0,r.Mu)(this,"consentsStore",null),(0,r.Mu)(this,"behaviorViewModel",null);const{viewModel:e}=t;this.viewModel=e||null,this.biListViewModel=this.viewModel?this.viewModel.getBiListViewModel():null,this.consentsStore=new p({}),this.behaviorViewModel=new w(this.consentsStore,this.biListViewModel)}render(){const{integration:t=!1}=this.props,{integrationLink:e,activeDomain:s}=this.biListViewModel;return l.createElement(a.K,{viewModel:this.behaviorViewModel},l.createElement(n.d,{data:this?.behaviorViewModel?.consentsList?.consentsListData?.list?.data,i18n:this.props.i18n,t:this.props.t,componentRef:this.componentRef,sectionName:"consent"}),l.createElement(_,{integration:t,integrationLink:e,activeDomain:s,ref:t=>this.componentRef=t}))}}),_=(0,M.PA)(class extends l.Component{constructor(t){super(t)}render(){return l.createElement("div",{className:"aesirxui"},this.props.integration?l.createElement(v,{link:this.props.integrationLink,activeDomain:this.props.activeDomain,...this.props}):l.createElement(l.Fragment,null,l.createElement(h.qh,{exact:!0,path:["/consents","/bi/consents"]},l.createElement(L,null))))}}),S=(0,D.CI)()((0,h.y)((0,o.cm)(b)))},65004:(t,e,s)=>{s.d(e,{K:()=>i,j:()=>o});var a=s(96540),n=a.createContext(),i=({children:t,viewModel:e})=>a.createElement(n.Provider,{value:e},t),o=()=>a.useContext(n)}}]);