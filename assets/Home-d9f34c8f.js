import{_ as d}from"./PostPreview.vue_vue_type_script_setup_true_lang-d50dfca2.js";import{N as l}from"./nprogress-131c7954.js";import{g as _}from"./post-0ff8842a.js";import{_ as h}from"./Pagination.vue_vue_type_script_setup_true_lang-540c9b31.js";import{d as v,u as x,r as a,o as k,c,a as p,w as C,F as i,b as L,e as b,f as w,g as n,h as y,i as N,p as z}from"./index-7fb9b2a6.js";import"./index-b25eac40.js";import"./IconView-bf2064e2.js";import"./IconLikeS-54684b0b.js";const M=v({__name:"Home",setup(B){const s=x(),t=a([]),o=a(1),r=a(0);k(()=>{u()});function u(){l.start(),s.pageLoading=!0,t.value=[],_(o.value).then(e=>{t.value=e.posts,r.value=e.count}).finally(()=>{l.done(),s.pageLoading=!1})}function m(e){o.value=e,u()}return(e,P)=>{const f=w("RouterLink");return n(),c(i,null,[p(f,{class:"w-full text-center text-2xl font-bold block py-4 my-2 bg-white hover:bg-gray-200 transition-colors rounded-md shadow-sm",to:"/post/35"},{default:C(()=>[y(" 点击前往作业报告 ")]),_:1}),(n(!0),c(i,null,L(t.value,g=>(n(),N(d,{"post-data":g},null,8,["post-data"]))),256)),p(h,{"current-page":o.value,"total-count":r.value,"page-size":b(z),onChange:m},null,8,["current-page","total-count","page-size"])],64)}}});export{M as default};