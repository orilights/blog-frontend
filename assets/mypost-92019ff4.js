import{g as b,d as y}from"./post-97f652fe.js";import{d as L,u as N,l as P,r as _,o as z,c as s,F as v,m as t,f as B,e as n,g as D,i as l,w as c,j as p,n as h,p as S,h as V}from"./index-cd4eda27.js";import{N as w}from"./nprogress-131c7954.js";import{_ as k}from"./NormalButton.vue_vue_type_script_setup_true_lang-285fc55e.js";import{_ as $}from"./Pagination.vue_vue_type_script_setup_true_lang-5c6739b4.js";const F=t("p",{class:"mb-4 text-2xl font-bold"},"我的文章",-1),R={key:0,class:"text-center pb-4"},T=t("span",null,"这里还什么都没有呢",-1),j=[T],E={class:"w-full table-fixed text-center"},M=t("colgroup",null,[t("col",{width:"700"}),t("col",{width:"10%"}),t("col",{width:"10%"}),t("col",{width:"30%"})],-1),q=t("tr",null,[t("th",null,"标题"),t("th",null,"浏览量"),t("th",null,"评论数"),t("th",null,"操作")],-1),A={class:"whitespace-nowrap overflow-ellipsis"},U=L({__name:"mypost",setup(G){const m=N(),u=P(),a=_([]),r=_(1),f=_(0);z(()=>{i()});function i(){w.start(),a.value=[],b(r.value,m.uid).then(e=>{a.value=e.posts,f.value=e.count}).catch(e=>{u.error(e.message)}).finally(()=>{w.done()})}function x(e){y(m.token,e).then(d=>{u.success("删除成功"),i()}).catch(d=>{u.error("删除失败："+d.message)})}function C(e){r.value=e,i()}return(e,d)=>{const g=V("RouterLink");return l(),s("div",null,[F,a.value.length===0?(l(),s("div",R,j)):(l(),s(v,{key:1},[t("table",E,[M,q,(l(!0),s(v,null,B(a.value,o=>(l(),s("tr",null,[t("td",A,[n(g,{to:"/post/"+o.pid},{default:c(()=>[p(h(o.title),1)]),_:2},1032,["to"])]),t("td",null,h(o.viewCount),1),t("td",null,h(o._count.comments),1),t("td",null,[n(g,{to:"/post/edit/"+o.pid},{default:c(()=>[n(k,null,{default:c(()=>[p("编辑")]),_:1})]),_:2},1032,["to"]),n(k,{class:"ml-2",onClick:H=>x(o.pid)},{default:c(()=>[p("删除")]),_:2},1032,["onClick"])])]))),256))]),n($,{"current-page":r.value,"total-count":f.value,"page-size":D(S),onChange:C},null,8,["current-page","total-count","page-size"])],64))])}}});export{U as default};