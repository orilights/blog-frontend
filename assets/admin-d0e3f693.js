import{h as t,c as n,k as s,d as _,e as l,w as $,q as g,y as C,u as y,b as B,a as A,t as S,r as V,o as R,F as v,l as h,m as d,f as u,z as w,A as N,g as z,T as E,B as I}from"./index-fd957ea8.js";import{_ as M}from"./NormalButton.vue_vue_type_script_setup_true_lang-c3e085ee.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";const j={},D={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},F=s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"},null,-1),H=[F];function O(o,r){return t(),n("svg",D,H)}const T=P(j,[["render",O]]),q={class:"h-[60px] w-full"},L={class:"flxed h-[60px] w-full top-0 left-0 bg-white shadow-md z-[99] flex justify-between items-center px-4 text-lg font-bold"},G=s("div",{class:"flex items-center"}," Ori博客 - 管理后台 ",-1),J=_({__name:"NavAdmin",setup(o){return(r,a)=>(t(),n("div",q,[s("div",L,[G,s("div",null,[l(M,{icon:"",onClick:a[0]||(a[0]=i=>r.$router.push("/profile"))},{default:$(()=>[l(T,{class:"w-4 h-4"})]),_:1})])])]))}}),x=_({__name:"SideBarItem",props:{data:null,active:{type:Boolean}},setup(o){return(r,a)=>(t(),n("div",{class:C(["w-full mb-1 px-2 py-1.5 font-semibold active:scale-95 transition-all rounded-md cursor-pointer",o.active?"text-blue-700/90 bg-[#e1f0ff]":"hover:bg-black/10"])},g(o.data.display),3))}}),K={class:"w-[250px] h-[calc(100vh-60px)] p-2 border-r-2 overflow-y-auto shrink-0"},Q={key:0,class:"border-t pt-1"},U={class:"border-t pt-1"},W=_({__name:"SideBarAdmin",setup(o){const r=y(),a=B(),i=A(),{isAdmin:m}=S(r),c=V("home");R(()=>{c.value=String(i.name)});function p(k,f){if(f==="APP_HOME"){a.push("/");return}c.value=k,a.push("/admin"+f)}return(k,f)=>(t(),n("div",K,[s("div",null,[(t(!0),n(v,null,h(u(w).user,e=>(t(),d(x,{data:e,active:c.value===e.name,onClick:b=>p(e.name,e.to)},null,8,["data","active","onClick"]))),256))]),u(m)?(t(),n("div",Q,[(t(!0),n(v,null,h(u(w).admin,e=>(t(),d(x,{data:e,active:c.value===e.name,onClick:b=>p(e.name,e.to)},null,8,["data","active","onClick"]))),256))])):N("",!0),s("div",U,[(t(!0),n(v,null,h(u(w).public,e=>(t(),d(x,{data:e,active:c.value===e.name,onClick:b=>p(e.name,e.to)},null,8,["data","active","onClick"]))),256))])]))}}),X={class:"w-full min-h-screen bg-white"},Y={class:"flex w-full"},Z={class:"w-full p-6 h-[calc(100vh-60px)] overflow-y-auto"},se=_({__name:"admin",setup(o){return(r,a)=>{const i=z("RouterView");return t(),n("div",X,[l(J),s("div",Y,[l(W),s("div",Z,[l(i,null,{default:$(({Component:m})=>[l(E,{name:"page-in"},{default:$(()=>[(t(),d(I(m)))]),_:2},1024)]),_:1})])])])}}});export{se as default};
