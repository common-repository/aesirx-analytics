/*! For license information please see 93455a2ec4a8a64ea073.js.LICENSE.txt */
"use strict";(self.webpackChunkaesirx_analytics=self.webpackChunkaesirx_analytics||[]).push([[9430],{49430:(t,e,a)=>{a.r(e),a.d(e,{default:()=>w});var s=a(66870),i=a(93336),r=a(51751),n=a(53800),l=a(55688),o=a(96540),u=a(56347),c=a(27813),h=a(66683),d=a(67658),m=a(95093),g=a.n(m),p=a(44015),b=a(32389),E=a(65606),A=class{constructor(){(0,l.Mu)(this,"getVisitor",(async(t,e,a,s)=>{try{const i=new h.L20,r=await i.getVisitor(t,e);r&&"AxiosError"!==r?.name?(0,c.h5)((()=>{a(r)})):s({message:r?.response?.data?.error||"Something went wrong from Server response"})}catch(t){(0,c.h5)((()=>{t.response?.data.message?s({message:t.response?.data?.message}):t.response?.data.error?s({message:t.response?.data?.error}):s({message:t?.response?.data?._messages?t.response?.data?._messages[0]?.message:"Something went wrong from Server response"})}))}})),(0,l.Mu)(this,"getAttribute",(async(t,e,a,s)=>{try{const i=new h.L20,r=await i.getAttribute(t,e);r&&"AxiosError"!==r?.name?(0,c.h5)((()=>{a(r)})):s({message:r?.response?.data?.error||"Something went wrong from Server response"})}catch(t){(0,c.h5)((()=>{t.response?.data.message?s({message:t.response?.data?.message}):t.response?.data.error?s({message:t.response?.data?.error}):s({message:t?.response?.data?._messages?t.response?.data?._messages[0]?.message:"Something went wrong from Server response"})}))}})),(0,l.Mu)(this,"getAttributeDate",(async(t,e,a,s)=>{try{const i=new h.L20,r=await i.getAttributeDate(t,e);r&&"AxiosError"!==r?.name?(0,c.h5)((()=>{a(r)})):s({message:r?.response?.data?.error||"Something went wrong from Server response"})}catch(t){(0,c.h5)((()=>{t.response?.data.message?s({message:t.response?.data?.message}):t.response?.data.error?s({message:t.response?.data?.error}):s({message:t?.response?.data?._messages?t.response?.data?._messages[0]?.message:"Something went wrong from Server response"})}))}}))}},M=class{constructor(t,e){(0,l.Mu)(this,"data",null),(0,l.Mu)(this,"globalViewModel",null),(0,l.Mu)(this,"toRaw",(()=>this.data)),(0,l.Mu)(this,"handleChangeLink",((t,e)=>{t.preventDefault(),e&&this.globalViewModel.setIntegrationLink(e)})),(0,l.Mu)(this,"transformResponseAcquisitionCampaign",(()=>{let t={};return this.data?.length>0&&this.data?.forEach((e=>{e.values?.forEach((e=>{const a=this.data.filter((t=>t?.values.some((t=>t?.value===e?.value))));t={...t,[e?.value]:a}}))})),t})),(0,l.Mu)(this,"getFilterNameAcquisitionCampaign",(()=>{const t=this.transformResponseAcquisitionCampaign(),e=Object.keys(t).map((t=>({value:t,label:t})));return e?.unshift({value:"all",label:"All"}),e})),(0,l.Mu)(this,"getListLineAcquisitionCampaign",(()=>{const t=this.transformResponseAcquisitionCampaign();return Object.keys(t).map((t=>t))})),(0,l.Mu)(this,"toBarChartAcquisitionCampaign",(()=>{const t=this.transformResponseAcquisitionCampaign();return Object.keys(t).map((e=>({name:e,number:t[e]?.map((t=>t?.values?.find((t=>t?.value===e))?.count))?.reduce(((t,e)=>parseInt(t)+parseInt(e)),0)})))})),(0,l.Mu)(this,"toAreaChartAcquisitionCampaign",(()=>{const t=this.transformResponseAcquisitionCampaign(),e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=(0,h.jgq)(this.globalViewModel.dateFilter.date_start,this.globalViewModel.dateFilter.date_end),s={all:a.map((e=>({name:e&&g()(e,"YYYY-MM-DD").format("DD"),...Object.keys(t).map((a=>{const s=t[a]?.filter((t=>g()(t[h.PF1.DATE]).format("YYYY-MM-DD")===e));return{[a]:s?.length?s[0]?.values?.find((t=>t?.value===a))?.count:0}})).reduce(((t,e)=>({...e,...t})),{})}))),...Object.keys(t).map((e=>({[e]:a.map((a=>{const s=t[e]?.filter((t=>g()(t[h.PF1.DATE]).format("YYYY-MM-DD")===a));return{name:a&&g()(a,"YYYY-MM-DD").format("DD"),[e]:s?.length?s[0]?.values?.find((t=>t?.value===e))?.count:0}}))}))).reduce(((t,e)=>({...e,...t})),{})};return[{all:e.map(((e,a)=>({name:e,...Object.keys(t).map((e=>{const s=t[e].filter((t=>g()(t[h.PF1.DATE]).month()===a));return{[e]:s?.length?s[0]?.values?.find((t=>t?.value===e))?.count:0}})).reduce(((t,e)=>({...e,...t})),{})}))),...Object.keys(t).map((a=>({[a]:e.map(((e,s)=>{const i=t[a].filter((t=>g()(t[h.PF1.DATE]).month()===s));return{name:e,[a]:i?.length?i[0]?.values?.find((t=>t?.value===a))?.count:0}}))}))).reduce(((t,e)=>({...e,...t})),{})},s]})),(0,l.Mu)(this,"toEventTableAcquisitionCampaign",(()=>{const t=["txt_campaign","txt_page_views","txt_unique_page_views","txt_bounce_rate","txt_page_session","txt_acg_session_duration"],e=["value",h.CEO.NUMBER_OF_PAGE_VIEWS,h.CEO.NUMBER_OF_UNIQUE_PAGE_VIEWS,h.CEO.BOUNCE_RATE,h.CEO.NUMBER_OF_PAGES_PER_SESSION,h.CEO.AVERAGE_SESSION_DURATION];if(this.data?.length){const a=e.map(((e,a)=>({Header:t[a],accessor:e,Cell:({cell:t,column:e})=>e.id===h.CEO.BOUNCE_RATE?o.createElement("div",{className:"px-3"},t?.value+"%"):e.id===h.CEO.AVERAGE_SESSION_DURATION?o.createElement("div",{className:"px-15"},t?.value?g().utc(1e3*t?.value).format("HH:mm:ss"):"00:00:00"):o.createElement("div",{className:"px-15"},t?.value??null)}))),s=this.data?.map((t=>({...t,...e.map((e=>({[e]:t[e]}))).reduce(((t,e)=>({...e,...t})),{})}))),i=s?.map((t=>{for(let a in t)e.includes(a)||delete t[a];return t}));return{header:a,data:i}}return{header:[],data:[]}})),(0,l.Mu)(this,"toAttributeList",(()=>{const t=this.transformResponseAcquisitionCampaign(),e=Object.keys(t)?.map((t=>({value:t,label:t})));return[{label:"All Campaign",value:"all"},...e]})),t&&(this.data=t,this.globalViewModel=e)}},O=class{constructor(t,e){(0,l.Mu)(this,"acquisitionCampaignStore",null),(0,l.Mu)(this,"statusAttribute",r.s.READY),(0,l.Mu)(this,"statusAttributeList",r.s.READY),(0,l.Mu)(this,"statusTable",r.s.READY),(0,l.Mu)(this,"globalStoreViewModel",null),(0,l.Mu)(this,"data",null),(0,l.Mu)(this,"dataFilter",{}),(0,l.Mu)(this,"attributeData",null),(0,l.Mu)(this,"dataAttribute",null),(0,l.Mu)(this,"dataAttributeList",null),(0,l.Mu)(this,"sortBy",{"sort[]":"","sort_direction[]":""}),(0,l.Mu)(this,"transformDataToAcquisitionCampaignModel",(()=>new M(this.data))),(0,l.Mu)(this,"getAttributeTable",((t,e,a={"sort[]":"start","sort_direction[]":"desc"})=>{this.statusTable=r.s.LOADING,this.sortBy=a,this.dataFilterTable={page_size:"5",...this.dataFilterTable,...t,...this.sortBy},"all"===t["filter[attribute_value]"]&&this.dataFilterTable["filter[attribute_value]"]&&delete this.dataFilterTable["filter[attribute_value]"];const s={...this.globalStoreViewModel.dateFilter,...e};this.acquisitionCampaignStore.getAttribute(this.dataFilterTable,s,this.callbackOnDataSuccessHandler,this.callbackOnErrorHandler)})),(0,l.Mu)(this,"getAttributeList",((t,e)=>{this.statusTable=r.s.LOADING,this.dataFilterAttributeList={page_size:"5",...this.dataFilterAttributeList,...t};const a={...this.globalStoreViewModel.dateFilter,...e};this.acquisitionCampaignStore.getAttribute(this.dataFilterAttributeList,a,this.callbackOnDataAttributeListSuccessHandler,this.callbackOnErrorHandler)})),(0,l.Mu)(this,"getAttributeDate",((t,e)=>{this.statusAttribute=r.s.LOADING,this.dataFilterAttribute={page_size:"1000",...this.dataFilterAttribute,...t};const a={...this.globalStoreViewModel?.dateFilter,...e};this.acquisitionCampaignStore.getAttributeDate(this.dataFilterAttribute,a,this.callbackOnDataAttributeSuccessHandler,this.callbackOnErrorHandler)})),(0,l.Mu)(this,"setDataFilter",(t=>{this.dataFilter=t})),(0,l.Mu)(this,"handleFilterDateRange",((t,e)=>{this.statusAttribute=r.s.LOADING,this.statusTable=r.s.LOADING;const a={...this.globalStoreViewModel.dateFilter,date_start:g()(t).format("YYYY-MM-DD"),date_end:g()(e).endOf("day").format("YYYY-MM-DD")};this.dateFilter={...this.dateFilter,...a},this.acquisitionCampaignStore.getAttribute(this.dataFilterTable,a,this.callbackOnDataSuccessHandler,this.callbackOnErrorHandler),this.acquisitionCampaignStore.getAttributeDate(this.dataFilterAttribute,a,this.callbackOnDataAttributeSuccessHandler,this.callbackOnErrorHandler)})),(0,l.Mu)(this,"handleFilterTable",(async t=>{this.statusTable=r.s.LOADING,this.dataFilterTable={...this.dataFilterTable,...t};const e={...this.globalStoreViewModel.dateFilter};await this.acquisitionCampaignStore.getAttributeTable(this.dataFilterTable,e,this.callbackOnDataSuccessHandler,this.callbackOnErrorHandler)})),(0,l.Mu)(this,"callbackOnErrorHandler",(t=>{this.statusAttribute=r.s.READY,this.statusTable=r.s.READY,(0,d.me)(t.message,"error")})),(0,l.Mu)(this,"callbackOnDataSuccessHandler",(t=>{if(t){if("canceled"!==t?.message){this.statusTable=r.s.READY;const e=t?.list[0]?.values?.map((t=>({value:t?.value,[h.CEO?.NUMBER_OF_VISITORS]:t[h.CEO?.NUMBER_OF_VISITORS],[h.CEO?.TOTAL_NUMBER_OF_VISITORS]:t[h.CEO?.TOTAL_NUMBER_OF_VISITORS],[h.CEO?.AVERAGE_SESSION_DURATION]:t[h.CEO?.AVERAGE_SESSION_DURATION],[h.CEO?.NUMBER_OF_PAGES_PER_SESSION]:t[h.CEO?.NUMBER_OF_PAGES_PER_SESSION],[h.CEO?.BOUNCE_RATE]:t[h.CEO?.BOUNCE_RATE]}))),a=new M(e,this.globalStoreViewModel);this.data={list:a,pagination:t.pagination}}}else this.statusTable=r.s.ERROR,this.data=[]})),(0,l.Mu)(this,"callbackOnDataAttributeSuccessHandler",(t=>{if(t){if("canceled"!==t?.message){this.statusAttribute=r.s.READY;const e=new M(t,this.globalStoreViewModel);this.dataAttribute=e}}else this.statusAttribute=r.s.ERROR,this.data=[]})),(0,l.Mu)(this,"callbackOnDataAttributeListSuccessHandler",(t=>{if(t){if("canceled"!==t?.message){this.statusAttributeList=r.s.READY;const e=new M(t?.list,this.globalStoreViewModel);this.dataAttributeList=e}}else this.statusAttributeList=r.s.ERROR,this.data=[]})),(0,c.l_)(this),this.acquisitionCampaignStore=t,this.globalStoreViewModel=e}},S=class{constructor(t,e){(0,l.Mu)(this,"acquisitionCampaignEvents",null),(0,l.Mu)(this,"getAcquisitionCampaignListModel",(()=>this.acquisitionCampaignEvents)),t&&(this.acquisitionCampaignEvents=new O(t,e))}},_=(0,o.lazy)((()=>Promise.all([a.e(3580),a.e(450),a.e(7360),a.e(8863),a.e(8529),a.e(9401)]).then(a.bind(a,69401)))),C=({link:t,...e})=>o.createElement(_,{...e}),v=(0,p.PA)(class extends o.Component{constructor(t){super(t),(0,l.Mu)(this,"acquisitionCampaignStore",null),(0,l.Mu)(this,"acquisitionCampaignViewModel",null);const{viewModel:e}=t;this.viewModel=e||null,this.biListViewModel=this.viewModel?this.viewModel.getBiListViewModel():null,this.acquisitionCampaignStore=new A({}),this.acquisitionCampaignViewModel=new S(this.acquisitionCampaignStore,this.biListViewModel)}render(){const{integration:t=!1}=this.props,{integrationLink:e,activeDomain:a}=this.biListViewModel,r=(0,u.B6)(d.b6.location.pathname,{path:E.env.REACT_APP_INTERGRATION?"/bi":"/acquisition/campaigns",exact:!0,strict:!1});return o.createElement(s.m,{viewModel:this.acquisitionCampaignViewModel},(r?.isExact||"acquisition-campaigns"===e)&&o.createElement(i.d,{data:this?.acquisitionCampaignViewModel?.acquisitionCampaignEvents?.data?.list?.toEventTableAcquisitionCampaign(!0)?.data,i18n:this.props.i18n,t:this.props.t,componentRef:this.componentRef,sectionName:"acquisition-campaigns"}),o.createElement(D,{integration:t,integrationLink:e,activeDomain:a,ref:t=>this.componentRef=t}))}}),D=(0,p.PA)(class extends o.Component{constructor(t){super(t)}render(){return o.createElement("div",{className:"aesirxui"},this.props.integration?o.createElement(C,{link:this.props.integrationLink,activeDomain:this.props.activeDomain,...this.props}):o.createElement(o.Fragment,null,o.createElement(u.qh,{exact:!0,path:["/acquisition/campaigns","/bi/acquisition-campaigns"]},o.createElement(_,null))))}}),w=(0,b.CI)()((0,n.cm)(v))},66870:(t,e,a)=>{a.d(e,{l:()=>n,m:()=>r});var s=a(96540),i=s.createContext(),r=({children:t,viewModel:e})=>s.createElement(i.Provider,{value:e},t),n=()=>s.useContext(i)}}]);