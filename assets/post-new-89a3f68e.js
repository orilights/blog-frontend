import{d as p,u as f,t as _,r as a,I as v,c as x,k as s,j as w,D as V,f as h,m as d,e as b,w as k,h as l,i as y}from"./index-10d97bec.js";import{m as B}from"./index-74aade08.js";import{l as g,_ as C,a as E}from"./NormalEditor.vue_vue_type_script_setup_true_lang-759c7658.js";import{_ as N}from"./NormalButton.vue_vue_type_script_setup_true_lang-c36d645a.js";import"./_commonjsHelpers-28e086c5.js";import"./IconView-a9988df5.js";import"./_plugin-vue_export-helper-c27b6911.js";const T=s("p",{class:"mb-4 text-2xl font-bold"},"发布文章",-1),U={class:"w-full"},$=s("p",{class:"my-2 font-bold"},"标题",-1),D=s("p",{class:"my-2 font-bold"},"内容",-1),A=p({__name:"post-new",setup(P){const m=f(),{setting:u}=_(m),n=a(""),o=a(""),c=a(""),i=g.exports.debounce(r=>{c.value=B.parse(r)},100);return v(()=>{i(o.value)}),(r,e)=>(l(),x("div",null,[T,s("div",U,[$,w(s("input",{class:"w-full px-2 py-1 rounded-md border hover:border-blue-500 transition-colors","onUpdate:modelValue":e[0]||(e[0]=t=>n.value=t),placeholder:"有什么新鲜事要向大家分享？",maxlength:"30"},null,512),[[V,n.value]]),D,h(u).legacyEditor?(l(),d(C,{key:0,modelValue:o.value,"onUpdate:modelValue":e[1]||(e[1]=t=>o.value=t)},null,8,["modelValue"])):(l(),d(E,{key:1,class:"h-[calc(100vh-320px)]",modelValue:o.value,"onUpdate:modelValue":e[2]||(e[2]=t=>o.value=t)},null,8,["modelValue"])),b(N,{class:"mt-2",primary:""},{default:k(()=>[y("发布")]),_:1})])]))}});export{A as default};
