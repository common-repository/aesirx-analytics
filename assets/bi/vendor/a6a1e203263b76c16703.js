/*! For license information please see a6a1e203263b76c16703.js.LICENSE.txt */
"use strict";(self.webpackChunkaesirx_analytics=self.webpackChunkaesirx_analytics||[]).push([[985],{70985:(e,t,s)=>{s.r(t),s.d(t,{default:()=>_});var a=s(23804),r=s(4692),n=s(55270),i=s(93336),l=s(51751),o=s(53800),h=s(55688),c=s(96540),d=s(56347),u=s(54625),m=s(67658),M=s(27813),v=s(95093),g=s.n(v),E=s(418),p=s(44015),b=s(32389),w=s(65606),D=class{constructor(e,t){(0,h.Mu)(this,"eventsStore",null),(0,h.Mu)(this,"status",l.s.READY),(0,h.Mu)(this,"statusTable",l.s.READY),(0,h.Mu)(this,"globalStoreViewModel",null),(0,h.Mu)(this,"data",null),(0,h.Mu)(this,"dataEvents",null),(0,h.Mu)(this,"dataFilter",{}),(0,h.Mu)(this,"attributeData",null),(0,h.Mu)(this,"search",{}),(0,h.Mu)(this,"sortBy",{"sort[]":"","sort_direction[]":""}),(0,h.Mu)(this,"transformDataToEventsListModel",(()=>new r.B(this.data))),(0,h.Mu)(this,"getVisitor",(async(e,t,s={},a={})=>{this.statusTable=l.s.LOADING,this.sortBy=s,this.search=a,this.dataFilterTable={page_size:"5",...this.dataFilterTable,...e,...this.sortBy,...this.search};const r={...this.globalStoreViewModel.dateFilter,...t};"all"===e["filter[event_name]"]&&this.dataFilterTable["filter[event_name]"]&&delete this.dataFilterTable["filter[event_name]"],await this.eventsStore.getVisitor(this.dataFilterTable,r,this.callbackOnDataSuccessHandler,this.callbackOnErrorHandler)})),(0,h.Mu)(this,"getEvents",((e,t)=>{this.status=l.s.LOADING,this.dataFilterEvents={page_size:"1000",...this.dataFilterEvents,...e};const s={...this.globalStoreViewModel.dateFilter,...t};this.eventsStore.getEvents(this.dataFilterEvents,s,this.callbackOnDataEventsSuccessHandler,this.callbackOnErrorHandler)})),(0,h.Mu)(this,"getAttribute",((e,t)=>{this.status=l.s.LOADING,this.dataFilter={...this.dataFilter,...e};const s={...this.globalStoreViewModel?.dateFilter,...t};this.eventsStore.getAttribute(e,s,this.callbackOnDataAttributeSuccessHandler,this.callbackOnErrorHandler)})),(0,h.Mu)(this,"setDataFilter",(e=>{this.dataFilter=e})),(0,h.Mu)(this,"handleFilterDateRange",((e,t)=>{this.status=l.s.LOADING,this.statusTable=l.s.LOADING;const s={...this.globalStoreViewModel.dateFilter,date_start:g()(e).format("YYYY-MM-DD"),date_end:g()(t).endOf("day").format("YYYY-MM-DD")};this.dateFilter={...this.dateFilter,...s},this.eventsStore.getVisitor(this.dataFilterTable,s,this.callbackOnDataSuccessHandler,this.callbackOnErrorHandler),this.eventsStore.getEvents(this.dataFilterEvents,s,this.callbackOnDataEventsSuccessHandler,this.callbackOnErrorHandler)})),(0,h.Mu)(this,"handleFilterTable",(async e=>{this.statusTable=l.s.LOADING,this.dataFilterTable={...this.dataFilterTable,...e};const t={...this.globalStoreViewModel.dateFilter};if(await this.eventsStore.getVisitor(this.dataFilterTable,t,this.callbackOnDataSuccessHandler,this.callbackOnErrorHandler),this.globalStoreViewModel.dataFilter={pagination:this.dataFilterTable?.page},e?.page){const t={...E.A.parse(location.search),pagination:e?.page};window.history.replaceState("","",`/behavior/events?${E.A.stringify(t)}`)}})),(0,h.Mu)(this,"callbackOnErrorHandler",(e=>{this.status=l.s.READY,(0,m.me)(e.message,"error")})),(0,h.Mu)(this,"callbackOnDataSuccessHandler",(e=>{if(e?.list){if("canceled"!==e?.message){this.statusTable=l.s.READY;const t=new r.B(e?.list,this.globalStoreViewModel);this.data={list:t,pagination:e.pagination}}}else this.statusTable=l.s.ERROR,this.data=[]})),(0,h.Mu)(this,"callbackOnDataEventsSuccessHandler",(e=>{if(e){if("canceled"!==e?.message){this.status=l.s.READY;const t=new r.B(e,this.globalStoreViewModel);this.dataEvents=t}}else this.status=l.s.ERROR,this.data=[]})),(0,h.Mu)(this,"callbackOnDataAttributeSuccessHandler",(e=>{e?"canceled"!==e?.message&&(this.status=l.s.READY,this.attributeData=e?.list):(this.status=l.s.ERROR,this.attributeData={})})),(0,M.l_)(this),this.eventsStore=e,this.globalStoreViewModel=t}},S=class{constructor(e,t){(0,h.Mu)(this,"eventsList",null),(0,h.Mu)(this,"getEventsListViewModel",(()=>this.eventsList)),e&&(this.eventsList=new D(e,t))}},f=(0,c.lazy)((()=>Promise.all([s.e(3580),s.e(450),s.e(7360),s.e(8863),s.e(8529),s.e(4628)]).then(s.bind(s,4628)))),T=(0,c.lazy)((()=>s.e(6138).then(s.bind(s,36138)))),A=({link:e,...t})=>{switch(e){case"behavior-events":default:return c.createElement(f,{...t});case"behavior-events-generator":return c.createElement(T,{...t})}},O=(0,p.PA)(class extends c.Component{constructor(e){super(e),(0,h.Mu)(this,"eventsStore",null),(0,h.Mu)(this,"behaviorViewModel",null),(0,h.Mu)(this,"handleChangeLink",((e,t)=>{e.preventDefault(),t&&this.biListViewModel.setIntegrationLink(t)}));const{viewModel:t}=e;this.viewModel=t||null,this.biListViewModel=this.viewModel?this.viewModel.getBiListViewModel():null,this.eventsStore=new a.D({}),this.behaviorViewModel=new S(this.eventsStore,this.biListViewModel)}render(){const{integration:e=!1}=this.props,{integrationLink:t,activeDomain:s}=this.biListViewModel,a=(0,d.B6)(m.b6.location.pathname,{path:w.env.REACT_APP_INTERGRATION?"/bi":"/behavior/events",exact:!0,strict:!1});return c.createElement(n.g,{viewModel:this.behaviorViewModel},(a?.isExact||"behavior-events"===t)&&c.createElement("div",{className:"printButton d-flex"},e?c.createElement("a",{href:"#",onClick:e=>this.handleChangeLink(e,"behavior-events-generator"),className:"btn btn-success me-2 text-nowrap fw-semibold py-13 lh-sm"},c.createElement(b.wD,null,(e=>c.createElement(c.Fragment,null,e("txt_generator_event"))))):c.createElement(u.N_,{to:"/behavior/events-generator",className:"btn btn-success me-2 text-nowrap fw-semibold py-13 lh-sm"},c.createElement(b.wD,null,(e=>c.createElement(c.Fragment,null,e("txt_generator_event"))))),c.createElement(i.d,{data:this?.behaviorViewModel?.eventsList?.data?.list?.toEventTable(!0)?.data,i18n:this.props.i18n,t:this.props.t,componentRef:this.componentRef,classWrapper:!0,sectionName:"event"})),c.createElement(R,{integration:e,integrationLink:t,activeDomain:s,ref:e=>this.componentRef=e}))}}),R=(0,p.PA)(class extends c.Component{constructor(e){super(e)}render(){return c.createElement("div",{className:"aesirxui"},this.props.integration?c.createElement(A,{link:this.props.integrationLink,activeDomain:this.props.activeDomain,...this.props}):c.createElement(c.Fragment,null,c.createElement(d.qh,{exact:!0,path:["/behavior/events","/bi/behavior/events"]},c.createElement(f,{...this.props})),c.createElement(d.qh,{exact:!0,path:["/behavior/events-generator"]},c.createElement(T,null))))}}),_=(0,b.CI)()((0,o.cm)((0,d.y)(O)))},23804:(e,t,s)=>{s.d(t,{D:()=>i});var a=s(55688),r=s(27813),n=s(66683),i=class{constructor(){(0,a.Mu)(this,"getVisitor",(async(e,t,s,a)=>{try{const i=new n.L20,l=await i.getVisitor(e,t);l&&"AxiosError"!==l?.name?(0,r.h5)((()=>{s(l)})):a({message:l?.response?.data?.error||"Something went wrong from Server response"})}catch(e){(0,r.h5)((()=>{e.response?.data.message?a({message:e.response?.data?.message}):e.response?.data.error?a({message:e.response?.data?.error}):a({message:e?.response?.data?._messages?e.response?.data?._messages[0]?.message:"Something went wrong from Server response"})}))}})),(0,a.Mu)(this,"getAttribute",(async(e,t,s,a)=>{try{const i=new n.L20,l=await i.getAttribute(e,t);l&&"AxiosError"!==l?.name?(0,r.h5)((()=>{s(l)})):a({message:l?.response?.data?.error||"Something went wrong from Server response"})}catch(e){(0,r.h5)((()=>{e.response?.data.message?a({message:e.response?.data?.message}):e.response?.data.error?a({message:e.response?.data?.error}):a({message:e?.response?.data?._messages?e.response?.data?._messages[0]?.message:"Something went wrong from Server response"})}))}})),(0,a.Mu)(this,"getEvents",(async(e,t,s,a)=>{try{const i=new n.L20,l=await i.getEvents(e,t);l&&"AxiosError"!==l?.name?(0,r.h5)((()=>{s(l)})):a({message:l?.response?.data?.error||"Something went wrong from Server response"})}catch(e){(0,r.h5)((()=>{e.response?.data.message?a({message:e.response?.data?.message}):e.response?.data.error?a({message:e.response?.data?.error}):a({message:e?.response?.data?._messages?e.response?.data?._messages[0]?.message:"Something went wrong from Server response"})}))}}))}}},4692:(e,t,s)=>{s.d(t,{B:()=>h});var a=s(55688),r=s(96540),n=s(66683),i=s(95093),l=s.n(i),o=s(54625),h=class{constructor(e,t){(0,a.Mu)(this,"data",[]),(0,a.Mu)(this,"globalViewModel",null),(0,a.Mu)(this,"toRaw",(()=>this.data)),(0,a.Mu)(this,"transformResponse",(()=>{let e={};return this.data?.length>0&&this.data?.forEach((t=>{const s=this.data.filter((e=>e[n.sSJ.EVENT_NAME]===t[n.sSJ.EVENT_NAME]));e={...e,[t[n.sSJ.EVENT_NAME]]:s}})),e})),(0,a.Mu)(this,"transformEventsResponse",(()=>{let e={};return this.data?.length>0&&this.data?.forEach((t=>{const s=this.data.filter((e=>e[n.HMX.EVENT_NAME]===t[n.HMX.EVENT_NAME]));e={...e,[t[n.HMX.EVENT_NAME]]:s}})),e})),(0,a.Mu)(this,"getFilterName",(()=>{const e=this.transformResponse(),t=Object.keys(e).map((e=>({value:e,label:e})));return t?.unshift({value:"all",label:"All Event"}),t})),(0,a.Mu)(this,"getListLine",(()=>{const e=this.transformResponse();return Object.keys(e).map((e=>e))})),(0,a.Mu)(this,"toAreaChart",(()=>{const e=this.transformEventsResponse(),t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],s=(0,n.jgq)(this.globalViewModel.dateFilter.date_start,this.globalViewModel.dateFilter.date_end),a={},r={all:s.map((t=>({name:t&&l()(t,"YYYY-MM-DD").format("DD"),...Object.keys(e).map((s=>{const a=e[s].filter((e=>e[n.HMX.DATE]===t));return{[s]:a?.length?a[0][n.HMX.TOTAL_VISITOR]:0}})).reduce(((e,t)=>({...t,...e})),{})}))),...Object.keys(e).map((t=>({[t]:s.map((s=>{const a=e[t].filter((e=>e[n.HMX.DATE]===s));return{name:s&&l()(s,"YYYY-MM-DD").format("DD MMM"),[t]:a?.length?a[0][n.HMX.TOTAL_VISITOR]:0}}))}))).reduce(((e,t)=>({...t,...e})),{})},i={all:t.map(((t,s)=>({name:t,...Object.keys(e).map((e=>{const t=this.data?.filter((e=>l()(e[n.HMX.DATE],"YYYY-MM-DD").month()===s))?.reduce(((e,t)=>e+t[n.HMX.TOTAL_VISITOR]),0);return{[e]:t??0}})).reduce(((e,t)=>({...t,...e})),{})}))),...Object.keys(e).map((e=>({[e]:t.map(((t,s)=>{const a=this.data?.filter((e=>l()(e[n.HMX.DATE],"YYYY-MM-DD").month()===s))?.reduce(((e,t)=>e+t[n.HMX.TOTAL_VISITOR]),0);return a?{name:t,[e]:a}:{name:t,[e]:0}}))}))).reduce(((e,t)=>({...t,...e})),{})};s.forEach((t=>{const s=l()(t).startOf("isoWeek").format("YYYY-MM-DD"),r=l()(t).endOf("isoWeek").format("YYYY-MM-DD"),i=`${l()(s).format("DD MMM")} - ${l()(r).format("DD MMM")}`;a[i]||(a[i]={},Object.keys(e).forEach((e=>{a[i][e]=0}))),Object.keys(e).forEach((s=>{const r=e[s].filter((e=>e[n.HMX.DATE]===t));a[i][s]+=r?.length?r[0][n.HMX.TOTAL_VISITOR]:0}))}));return[i,r,{all:Object.keys(a).map((e=>({name:e,...a[e]})))}]})),(0,a.Mu)(this,"toBarChart",(()=>{const e=this.transformEventsResponse();return Object.keys(e).map((t=>({name:t,number:e[t]?.reduce(((e,t)=>e+t[n.HMX.TOTAL_VISITOR]),0)})))})),(0,a.Mu)(this,"handleChangeLink",((e,t)=>{e.preventDefault(),t&&this.globalViewModel.setIntegrationLink(t)})),(0,a.Mu)(this,"toEventTable",(e=>{const t=["Name","Type","URL","Referer","Date",""],s=[n.sSJ.EVENT_NAME,n.sSJ.EVENT_TYPE,n.sSJ.URL,n.sSJ.REFERER,n.sSJ.START_DATE,n.sSJ.UUID];if(this.data.length){const a=s.map(((s,a)=>({Header:t[a],accessor:s,width:s===n.sSJ.UUID?10:s===n.sSJ.EVENT_TYPE?50:170,allowSort:!0,Cell:({cell:t,column:s})=>{if(s.id===n.sSJ.EVENT_NAME&&t?.value)return r.createElement(r.Fragment,null,e?r.createElement("a",{href:"#",onClick:e=>this.handleChangeLink(e,`events-detail&id=${t?.value}`),className:"px-3 text-secondary-50"},r.createElement("span",null,t?.value??null)):r.createElement(o.k2,{to:`/events-detail/${t?.value}`,className:"px-3 text-secondary-50"},t?.value??null));if(s.id===n.sSJ.UUID)return r.createElement(r.Fragment,null);if(s.id!==n.sSJ.REFERER&&s.id!==n.sSJ.URL||!t?.value)return r.createElement("div",{className:"px-3"},t?.value??null);{const e=new URL(t?.value);return r.createElement("div",{className:"px-3"},""===e?"Unknown":e.pathname+e.search)}}}))),i=this.data.map((e=>({...e,...s.map((t=>t===n.sSJ.START_DATE?{[t]:l()(e[t]).format("DD-MM-YYYY HH:mm:ss")}:{[t]:e[t]})).reduce(((e,t)=>({...t,...e})),{})}))),h=i?.map((e=>{for(let t in e)s.includes(t)||delete e[t];return e}));return{header:a,data:h}}return{header:[],data:[]}})),(0,a.Mu)(this,"toEventsList",(()=>{const e=this.data?.length?this.data?.map((e=>({value:e?.event_name,label:e?.event_name}))):[];return[{label:"All Event",value:"all"},...[...new Map(e.map((e=>[e.value,e]))).values()]]})),(0,a.Mu)(this,"toConversionList",(()=>{const e=this.data?.length?this.data?.map((e=>({value:e?.event_name,label:e?.event_name}))):[];return[{label:"All Conversion",value:"all"},...[...new Map(e.map((e=>[e.value,e]))).values()]]})),e&&(this.data=e,this.globalViewModel=t)}}},55270:(e,t,s)=>{s.d(t,{Z:()=>i,g:()=>n});var a=s(96540),r=a.createContext(),n=({children:e,viewModel:t})=>a.createElement(r.Provider,{value:t},e),i=()=>a.useContext(r)}}]);