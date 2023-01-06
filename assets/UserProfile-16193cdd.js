import{d as j,e as a,c as l,j as e,k as n,u as h,b as r,w as p,y as v,s as $,i as H,g as A,q as O,h as G,t as J,r as m,m as K,B as Q,o as W,D as X,v as z,x as M,F as B,a as Y,z as Z,f as ee,p as te}from"./index-d5b50c01.js";import{N as C,g as se,h as oe,i as ae}from"./nprogress-52d93cfb.js";import{f as ne,I as le,a as re,b as ie}from"./IconView-0caece3f.js";import{N as I}from"./NormalButton-0ee94306.js";import{_ as de}from"./Pagination.vue_vue_type_script_setup_true_lang-5300395f.js";const ue={class:"w-full bg-gray-100 my-2 rounded-[12px] overflow-hidden"},ce={class:"flex pt-6 px-4"},me={class:"w-full flex flex-row justify-between"},he={class:"text-gray-500 flex items-center"},pe={key:0},fe={class:"pl-4 pr-8"},ve={class:"text-2xl leading-[60px]"},_e={class:""},ge={class:"flex h-10 mt-4"},xe={class:"h-full flex items-center justify-center hover:bg-gray-500/10 transition-colors"},we={class:"flex-1 flex items-center justify-center hover:bg-gray-500/10 transition-colors"},ye=j({__name:"UserProfilePost",props:{postData:null,editMode:{type:Boolean}},emits:["delete"],setup(s,{emit:d}){return(D,i)=>{const _=H("RouterLink");return a(),l("div",ue,[e("div",ce,[e("div",me,[e("div",he,[e("span",null,"发布于："+n(h(ne)(s.postData.createdAt)),1),r(le,{class:"w-4 h-4 inline-block ml-2 mr-1"}),e("span",null,n(s.postData.viewCount),1)]),s.editMode?(a(),l("div",pe,[r(_,{class:"mr-1",to:"/post/edit/"+s.postData.pid},{default:p(()=>[r(I,null,{default:p(()=>[v("编辑")]),_:1})]),_:1},8,["to"]),r(I,{onClick:i[0]||(i[0]=g=>d("delete",s.postData.pid))},{default:p(()=>[v("删除")]),_:1})])):$("",!0)])]),r(_,{to:"/post/"+s.postData.pid},{default:p(()=>[e("div",fe,[e("p",ve,n(s.postData.title),1),e("p",_e,n(s.postData.text),1)])]),_:1},8,["to"]),e("div",ge,[r(_,{class:"flex-1",to:{path:"/post/"+s.postData.pid,query:{navigate:"comments"}}},{default:p(()=>[e("div",xe,[r(re,{class:"w-5 h-5 inline-block mr-1"}),e("span",null,n(s.postData._count.comments),1)])]),_:1},8,["to"]),e("div",we,[r(ie,{class:"w-5 h-5 inline-block mr-1"}),e("span",null,n(s.postData.like),1)])])])}}}),be={class:"w-full bg-white my-2 rounded-md overflow-hidden shadow-sm px-4 pt-2 pb-4 relative"},ke={key:0,class:"absolute top-4 right-4"},Pe={key:1,class:"text-center"},De={key:2,class:"flex flex-col w-full items-center"},Ce=["src"],$e={class:"font-bold mt-4"},Ie={class:"text-gray-500"},Ne={class:"mt-2"},Se={class:"mr-2 text-sm bg-yellow-300 px-1 py-0.5 rounded-md"},Be={class:"mr-2 text-sm bg-red-300 px-1 py-0.5 rounded-md"},Ve={key:0,class:"mr-2 text-sm bg-red-500 px-1 py-0.5 rounded-md text-white"},Le={key:0,class:"w-full bg-white my-2 rounded-md overflow-hidden shadow-sm px-4 pt-2 pb-4"},Te=e("h2",null,"新博文",-1),ze={class:"w-full bg-white my-2 rounded-md overflow-hidden shadow-sm px-4 pt-2 pb-2"},Me={key:0,class:"text-center pb-4"},je=e("span",null,"这里还什么都没有呢",-1),Re=[je],Ae=j({__name:"UserProfile",setup(s){const d=A(),D=O(),i=G(),{login:_}=J(d),g=m(String(D.params.uid)),u=m(),N=m([]),x=m(""),w=m(""),S=m(1),V=m(0),y=K(()=>_.value&&g.value==String(d.uid));Q(D,async(t,o)=>{C.start(),g.value=String(D.params.uid),await b(),C.done()}),W(()=>{b()});async function b(){C.start();const t=X(Number(g.value)),o=se(S.value,Number(g.value));return Promise.all([t,o]).then(([f,k])=>{var P;u.value=f.userInfo,N.value=k.posts,V.value=k.count,document.title=((P=u.value)==null?void 0:P.nickname)+"的主页 - 博客"}).catch(f=>{i.error(f.message)}).finally(()=>{C.done()})}async function R(){if(x.value.trim()==""){i.warning("文章标题不可为空");return}if(w.value.trim()==""){i.warning("文章内容不可为空");return}oe(d.token,x.value.trim(),w.value.trim()).then(t=>{i.success("发布成功"),x.value="",w.value="",b()}).catch(t=>{i.error("发布失败: "+t)})}async function U(t){ae(d.token,t).then(o=>{i.success("删除成功"),b()}).catch(o=>{i.error("删除失败: "+o)})}function q(){localStorage.removeItem("uid"),localStorage.removeItem("token"),localStorage.removeItem("likeCache"),d.login=!1,d.uid=0,d.token=""}async function E(t){S.value=t,await b()}async function F(t){t.style.height="100px",await Z(),t.style.height=t.scrollHeight+"px"}return(t,o)=>{var f,k,P,L,T;return a(),l(B,null,[e("div",be,[h(y)?(a(),l("div",ke,[r(I,{onClick:q},{default:p(()=>[v("退出登录")]),_:1})])):$("",!0),e("h2",null,n(h(y)?"我的":"用户")+"信息",1),u.value?(a(),l("div",De,[e("img",{class:"rounded-full w-[120px] h-[120px] shadow-md",src:(f=u.value)==null?void 0:f.avatar,alt:"user avatar"},null,8,Ce),e("span",$e,n((k=u.value)==null?void 0:k.nickname),1),e("span",Ie,"@"+n((P=u.value)==null?void 0:P.name),1),e("div",Ne,[e("span",Se,"uid:"+n((L=u.value)==null?void 0:L.uid),1),e("span",Be,"用户组:"+n((T=u.value)==null?void 0:T.role),1),u.value.status!==0?(a(),l("span",Ve,"用户已被封禁")):$("",!0)])])):(a(),l("div",Pe,"加载中"))]),h(y)?(a(),l("div",Le,[Te,v(" 标题： "),z(e("input",{class:"w-full p-2 rounded-md border hover:border-blue-500 transition-colors","onUpdate:modelValue":o[0]||(o[0]=c=>x.value=c),placeholder:"有什么新鲜事要向大家分享？",maxlength:"30"},null,512),[[M,x.value]]),v(" 内容： "),z(e("textarea",{class:"w-full h-[100px] p-2 rounded-md border resize-none hover:border-blue-500 transition-colors overflow-y-hidden","onUpdate:modelValue":o[1]||(o[1]=c=>w.value=c),placeholder:"",onInput:o[2]||(o[2]=c=>F(c.target))},null,544),[[M,w.value]]),r(I,{onClick:R},{default:p(()=>[v("发布")]),_:1})])):$("",!0),e("div",ze,[e("h2",null,n(h(y)?"我的":"用户")+"文章",1),N.value.length==0?(a(),l("div",Me,Re)):(a(),l(B,{key:1},[(a(!0),l(B,null,Y(N.value,c=>(a(),ee(ye,{"post-data":c,"edit-mode":h(y),onDelete:U},null,8,["post-data","edit-mode"]))),256)),r(de,{"current-page":S.value,"total-count":V.value,"page-size":h(te),onChange:E},null,8,["current-page","total-count","page-size"])],64))])],64)}}});export{Ae as default};