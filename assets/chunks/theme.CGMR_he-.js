const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/VPLocalSearchBox.8gNsnRFx.js","assets/chunks/framework.Dr7Kaxzq.js"])))=>i.map(i=>d[i]);
import{d as w,c as v,r as b,n as H,o as d,a as ue,t as D,b as x,w as y,T as Ot,e as $,_ as O,u as vo,i as ho,f as bo,g as Ct,h as C,j as g,k as f,l as Oe,m as _t,p as M,q as Q,s as ut,v as fe,x as Nt,y as Vt,z as go,A as yo,F,B as Y,C as pe,D as _n,E as dt,G as L,H as re,I as $n,J as ct,K as W,L as pt,M as _o,N as kn,O as $t,P as At,Q as Sn,R as ft,S as Pn,U as $o,V as ko,W as wn,X as Tn,Y as So,Z as Po,$ as wo,a0 as To,a1 as Lo,a2 as zt,a3 as xo,a4 as Oo,a5 as Co,a6 as No}from"./framework.Dr7Kaxzq.js";const Vo=w({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(e){return(t,n)=>(d(),v("span",{class:H(["VPBadge",e.type])},[b(t.$slots,"default",{},()=>[ue(D(e.text),1)])],2))}}),Ao={key:0,class:"VPBackdrop"},Io=w({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(e){return(t,n)=>(d(),x(Ot,{name:"fade"},{default:y(()=>[e.show?(d(),v("div",Ao)):$("",!0)]),_:1}))}}),jo=O(Io,[["__scopeId","data-v-c79a1216"]]),I=vo;function Mo(e,t){let n,o=!1;return()=>{n&&clearTimeout(n),o?n=setTimeout(e,t):(e(),(o=!0)&&setTimeout(()=>o=!1,t))}}function kt(e){return e.startsWith("/")?e:`/${e}`}function It(e){const{pathname:t,search:n,hash:o,protocol:r}=new URL(e,"http://a.com");if(ho(e)||e.startsWith("#")||!r.startsWith("http")||!bo(t))return e;const{site:s}=I(),i=t.endsWith("/")||t.endsWith(".html")?e:e.replace(/(?:(^\.+)\/)?.*$/,`$1${t.replace(/(\.md)?$/,s.value.cleanUrls?"":".html")}${n}${o}`);return Ct(i)}function Ze({correspondingLink:e=!1}={}){const{site:t,localeIndex:n,page:o,theme:r,hash:s}=I(),i=C(()=>{var a,u;return{label:(a=t.value.locales[n.value])==null?void 0:a.label,link:((u=t.value.locales[n.value])==null?void 0:u.link)||(n.value==="root"?"/":`/${n.value}/`)}});return{localeLinks:C(()=>Object.entries(t.value.locales).flatMap(([a,u])=>i.value.label===u.label?[]:{text:u.label,link:Eo(u.link||(a==="root"?"/":`/${a}/`),r.value.i18nRouting!==!1&&e,o.value.relativePath.slice(i.value.link.length-1),!t.value.cleanUrls)+s.value})),currentLang:i}}function Eo(e,t,n,o){return t?e.replace(/\/$/,"")+kt(n.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,o?".html":"")):e}const Bo={class:"NotFound"},Do={class:"code"},Ho={class:"title"},Ro={class:"quote"},Fo={class:"action"},Uo=["href","aria-label"],zo=w({__name:"NotFound",setup(e){const{theme:t}=I(),{currentLang:n}=Ze();return(o,r)=>{var s,i,l,a,u;return d(),v("div",Bo,[g("p",Do,D(((s=f(t).notFound)==null?void 0:s.code)??"404"),1),g("h1",Ho,D(((i=f(t).notFound)==null?void 0:i.title)??"PAGE NOT FOUND"),1),r[0]||(r[0]=g("div",{class:"divider"},null,-1)),g("blockquote",Ro,D(((l=f(t).notFound)==null?void 0:l.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),g("div",Fo,[g("a",{class:"link",href:f(Ct)(f(n).link),"aria-label":((a=f(t).notFound)==null?void 0:a.linkLabel)??"go to home"},D(((u=f(t).notFound)==null?void 0:u.linkText)??"Take me home"),9,Uo)])])}}}),Wo=O(zo,[["__scopeId","data-v-d6be1790"]]);function Ln(e,t){if(Array.isArray(e))return at(e);if(e==null)return[];t=kt(t);const n=Object.keys(e).sort((r,s)=>s.split("/").length-r.split("/").length).find(r=>t.startsWith(kt(r))),o=n?e[n]:[];return Array.isArray(o)?at(o):at(o.items,o.base)}function Go(e){const t=[];let n=0;for(const o in e){const r=e[o];if(r.items){n=t.push(r);continue}t[n]||t.push({items:[]}),t[n].items.push(r)}return t}function Ko(e){const t=[];function n(o){for(const r of o)r.text&&r.link&&t.push({text:r.text,link:r.link,docFooterText:r.docFooterText}),r.items&&n(r.items)}return n(e),t}function St(e,t){return Array.isArray(t)?t.some(n=>St(e,n)):Oe(e,t.link)?!0:t.items?St(e,t.items):!1}function at(e,t){return[...e].map(n=>{const o={...n},r=o.base||t;return r&&o.link&&(o.link=r+o.link),o.items&&(o.items=at(o.items,r)),o})}function me(){const{frontmatter:e,page:t,theme:n}=I(),o=_t("(min-width: 960px)"),r=M(!1),s=C(()=>{const S=n.value.sidebar,P=t.value.relativePath;return S?Ln(S,P):[]}),i=M(s.value);Q(s,(S,P)=>{JSON.stringify(S)!==JSON.stringify(P)&&(i.value=s.value)});const l=C(()=>e.value.sidebar!==!1&&i.value.length>0&&e.value.layout!=="home"),a=C(()=>u?e.value.aside==null?n.value.aside==="left":e.value.aside==="left":!1),u=C(()=>e.value.layout==="home"?!1:e.value.aside!=null?!!e.value.aside:n.value.aside!==!1),p=C(()=>l.value&&o.value),c=C(()=>l.value?Go(i.value):[]);function m(){r.value=!0}function h(){r.value=!1}function _(){r.value?h():m()}return{isOpen:r,sidebar:i,sidebarGroups:c,hasSidebar:l,hasAside:u,leftAside:a,isSidebarEnabled:p,open:m,close:h,toggle:_}}function qo(e,t){let n;ut(()=>{n=e.value?document.activeElement:void 0}),fe(()=>{window.addEventListener("keyup",o)}),Nt(()=>{window.removeEventListener("keyup",o)});function o(r){r.key==="Escape"&&e.value&&(t(),n==null||n.focus())}}function Yo(e){const{page:t,hash:n}=I(),o=M(!1),r=C(()=>e.value.collapsed!=null),s=C(()=>!!e.value.link),i=M(!1),l=()=>{i.value=Oe(t.value.relativePath,e.value.link)};Q([t,e,n],l),fe(l);const a=C(()=>i.value?!0:e.value.items?St(t.value.relativePath,e.value.items):!1),u=C(()=>!!(e.value.items&&e.value.items.length));ut(()=>{o.value=!!(r.value&&e.value.collapsed)}),Vt(()=>{(i.value||a.value)&&(o.value=!1)});function p(){r.value&&(o.value=!o.value)}return{collapsed:o,collapsible:r,isLink:s,isActiveLink:i,hasActiveLink:a,hasChildren:u,toggle:p}}function Jo(){const{hasSidebar:e}=me(),t=_t("(min-width: 960px)"),n=_t("(min-width: 1280px)");return{isAsideEnabled:C(()=>!n.value&&!t.value?!1:e.value?n.value:t.value)}}const Qo=/\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,Pt=[];function xn(e){return typeof e.outline=="object"&&!Array.isArray(e.outline)&&e.outline.label||e.outlineTitle||"On this page"}function jt(e){const t=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(n=>n.id&&n.hasChildNodes()).map(n=>{const o=Number(n.tagName[1]);return{element:n,title:Zo(n),link:"#"+n.id,level:o}});return Xo(t,e)}function Zo(e){let t="";for(const n of e.childNodes)if(n.nodeType===1){if(Qo.test(n.className))continue;t+=n.textContent}else n.nodeType===3&&(t+=n.textContent);return t.trim()}function Xo(e,t){if(t===!1)return[];const n=(typeof t=="object"&&!Array.isArray(t)?t.level:t)||2,[o,r]=typeof n=="number"?[n,n]:n==="deep"?[2,6]:n;return nr(e,o,r)}function er(e,t){const{isAsideEnabled:n}=Jo(),o=Mo(s,100);let r=null;fe(()=>{requestAnimationFrame(s),window.addEventListener("scroll",o)}),go(()=>{i(location.hash)}),Nt(()=>{window.removeEventListener("scroll",o)});function s(){if(!n.value)return;const l=window.scrollY,a=window.innerHeight,u=document.body.offsetHeight,p=Math.abs(l+a-u)<1,c=Pt.map(({element:h,link:_})=>({link:_,top:tr(h)})).filter(({top:h})=>!Number.isNaN(h)).sort((h,_)=>h.top-_.top);if(!c.length){i(null);return}if(l<1){i(null);return}if(p){i(c[c.length-1].link);return}let m=null;for(const{link:h,top:_}of c){if(_>l+yo()+4)break;m=h}i(m)}function i(l){r&&r.classList.remove("active"),l==null?r=null:r=e.value.querySelector(`a[href="${decodeURIComponent(l)}"]`);const a=r;a?(a.classList.add("active"),t.value.style.top=a.offsetTop+39+"px",t.value.style.opacity="1"):(t.value.style.top="33px",t.value.style.opacity="0")}}function tr(e){let t=0;for(;e!==document.body;){if(e===null)return NaN;t+=e.offsetTop,e=e.offsetParent}return t}function nr(e,t,n){Pt.length=0;const o=[],r=[];return e.forEach(s=>{const i={...s,children:[]};let l=r[r.length-1];for(;l&&l.level>=i.level;)r.pop(),l=r[r.length-1];if(i.element.classList.contains("ignore-header")||l&&"shouldIgnore"in l){r.push({level:i.level,shouldIgnore:!0});return}i.level>n||i.level<t||(Pt.push({element:i.element,link:i.link}),l?l.children.push(i):o.push(i),r.push(i))}),o}const or=["href","title"],rr=w({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(e){function t({target:n}){const o=n.href.split("#")[1],r=document.getElementById(decodeURIComponent(o));r==null||r.focus({preventScroll:!0})}return(n,o)=>{const r=pe("VPDocOutlineItem",!0);return d(),v("ul",{class:H(["VPDocOutlineItem",e.root?"root":"nested"])},[(d(!0),v(F,null,Y(e.headers,({children:s,link:i,title:l})=>(d(),v("li",null,[g("a",{class:"outline-link",href:i,onClick:t,title:l},D(l),9,or),s!=null&&s.length?(d(),x(r,{key:0,headers:s},null,8,["headers"])):$("",!0)]))),256))],2)}}}),On=O(rr,[["__scopeId","data-v-b933a997"]]),ar={class:"content"},sr={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},ir=w({__name:"VPDocAsideOutline",setup(e){const{frontmatter:t,theme:n}=I(),o=_n([]);dt(()=>{o.value=jt(t.value.outline??n.value.outline)});const r=M(),s=M();return er(r,s),(i,l)=>(d(),v("nav",{"aria-labelledby":"doc-outline-aria-label",class:H(["VPDocAsideOutline",{"has-outline":o.value.length>0}]),ref_key:"container",ref:r},[g("div",ar,[g("div",{class:"outline-marker",ref_key:"marker",ref:s},null,512),g("div",sr,D(f(xn)(f(n))),1),L(On,{headers:o.value,root:!0},null,8,["headers"])])],2))}}),lr=O(ir,[["__scopeId","data-v-a5bbad30"]]),ur={class:"VPDocAsideCarbonAds"},dr=w({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(e){const t=()=>null;return(n,o)=>(d(),v("div",ur,[L(f(t),{"carbon-ads":e.carbonAds},null,8,["carbon-ads"])]))}}),cr={class:"VPDocAside"},pr=w({__name:"VPDocAside",setup(e){const{theme:t}=I();return(n,o)=>(d(),v("div",cr,[b(n.$slots,"aside-top",{},void 0,!0),b(n.$slots,"aside-outline-before",{},void 0,!0),L(lr),b(n.$slots,"aside-outline-after",{},void 0,!0),o[0]||(o[0]=g("div",{class:"spacer"},null,-1)),b(n.$slots,"aside-ads-before",{},void 0,!0),f(t).carbonAds?(d(),x(dr,{key:0,"carbon-ads":f(t).carbonAds},null,8,["carbon-ads"])):$("",!0),b(n.$slots,"aside-ads-after",{},void 0,!0),b(n.$slots,"aside-bottom",{},void 0,!0)]))}}),fr=O(pr,[["__scopeId","data-v-3f215769"]]);function mr(){const{theme:e,page:t}=I();return C(()=>{const{text:n="Edit this page",pattern:o=""}=e.value.editLink||{};let r;return typeof o=="function"?r=o(t.value):r=o.replace(/:path/g,t.value.filePath),{url:r,text:n}})}function vr(){const{page:e,theme:t,frontmatter:n}=I();return C(()=>{var u,p,c,m,h,_,S,P;const o=Ln(t.value.sidebar,e.value.relativePath),r=Ko(o),s=hr(r,T=>T.link.replace(/[?#].*$/,"")),i=s.findIndex(T=>Oe(e.value.relativePath,T.link)),l=((u=t.value.docFooter)==null?void 0:u.prev)===!1&&!n.value.prev||n.value.prev===!1,a=((p=t.value.docFooter)==null?void 0:p.next)===!1&&!n.value.next||n.value.next===!1;return{prev:l?void 0:{text:(typeof n.value.prev=="string"?n.value.prev:typeof n.value.prev=="object"?n.value.prev.text:void 0)??((c=s[i-1])==null?void 0:c.docFooterText)??((m=s[i-1])==null?void 0:m.text),link:(typeof n.value.prev=="object"?n.value.prev.link:void 0)??((h=s[i-1])==null?void 0:h.link)},next:a?void 0:{text:(typeof n.value.next=="string"?n.value.next:typeof n.value.next=="object"?n.value.next.text:void 0)??((_=s[i+1])==null?void 0:_.docFooterText)??((S=s[i+1])==null?void 0:S.text),link:(typeof n.value.next=="object"?n.value.next.link:void 0)??((P=s[i+1])==null?void 0:P.link)}}})}function hr(e,t){const n=new Set;return e.filter(o=>{const r=t(o);return n.has(r)?!1:n.add(r)})}const te=w({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(e){const t=e,n=C(()=>t.tag??(t.href?"a":"span")),o=C(()=>t.href&&$n.test(t.href)||t.target==="_blank");return(r,s)=>(d(),x(re(n.value),{class:H(["VPLink",{link:e.href,"vp-external-link-icon":o.value,"no-icon":e.noIcon}]),href:e.href?f(It)(e.href):void 0,target:e.target??(o.value?"_blank":void 0),rel:e.rel??(o.value?"noreferrer":void 0)},{default:y(()=>[b(r.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),br={class:"VPLastUpdated"},gr=["datetime"],yr=w({__name:"VPDocFooterLastUpdated",setup(e){const{theme:t,page:n,lang:o}=I(),r=C(()=>new Date(n.value.lastUpdated)),s=C(()=>r.value.toISOString()),i=M("");return fe(()=>{ut(()=>{var l,a,u;i.value=new Intl.DateTimeFormat((a=(l=t.value.lastUpdated)==null?void 0:l.formatOptions)!=null&&a.forceLocale?o.value:void 0,((u=t.value.lastUpdated)==null?void 0:u.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(r.value)})}),(l,a)=>{var u;return d(),v("p",br,[ue(D(((u=f(t).lastUpdated)==null?void 0:u.text)||f(t).lastUpdatedText||"Last updated")+": ",1),g("time",{datetime:s.value},D(i.value),9,gr)])}}}),_r=O(yr,[["__scopeId","data-v-e98dd255"]]),$r={key:0,class:"VPDocFooter"},kr={key:0,class:"edit-info"},Sr={key:0,class:"edit-link"},Pr={key:1,class:"last-updated"},wr={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},Tr={class:"pager"},Lr=["innerHTML"],xr=["innerHTML"],Or={class:"pager"},Cr=["innerHTML"],Nr=["innerHTML"],Vr=w({__name:"VPDocFooter",setup(e){const{theme:t,page:n,frontmatter:o}=I(),r=mr(),s=vr(),i=C(()=>t.value.editLink&&o.value.editLink!==!1),l=C(()=>n.value.lastUpdated),a=C(()=>i.value||l.value||s.value.prev||s.value.next);return(u,p)=>{var c,m,h,_;return a.value?(d(),v("footer",$r,[b(u.$slots,"doc-footer-before",{},void 0,!0),i.value||l.value?(d(),v("div",kr,[i.value?(d(),v("div",Sr,[L(te,{class:"edit-link-button",href:f(r).url,"no-icon":!0},{default:y(()=>[p[0]||(p[0]=g("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),ue(" "+D(f(r).text),1)]),_:1},8,["href"])])):$("",!0),l.value?(d(),v("div",Pr,[L(_r)])):$("",!0)])):$("",!0),(c=f(s).prev)!=null&&c.link||(m=f(s).next)!=null&&m.link?(d(),v("nav",wr,[p[1]||(p[1]=g("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),g("div",Tr,[(h=f(s).prev)!=null&&h.link?(d(),x(te,{key:0,class:"pager-link prev",href:f(s).prev.link},{default:y(()=>{var S;return[g("span",{class:"desc",innerHTML:((S=f(t).docFooter)==null?void 0:S.prev)||"Previous page"},null,8,Lr),g("span",{class:"title",innerHTML:f(s).prev.text},null,8,xr)]}),_:1},8,["href"])):$("",!0)]),g("div",Or,[(_=f(s).next)!=null&&_.link?(d(),x(te,{key:0,class:"pager-link next",href:f(s).next.link},{default:y(()=>{var S;return[g("span",{class:"desc",innerHTML:((S=f(t).docFooter)==null?void 0:S.next)||"Next page"},null,8,Cr),g("span",{class:"title",innerHTML:f(s).next.text},null,8,Nr)]}),_:1},8,["href"])):$("",!0)])])):$("",!0)])):$("",!0)}}}),Ar=O(Vr,[["__scopeId","data-v-e257564d"]]),Ir={class:"container"},jr={class:"aside-container"},Mr={class:"aside-content"},Er={class:"content"},Br={class:"content-container"},Dr={class:"main"},Hr=w({__name:"VPDoc",setup(e){const{theme:t}=I(),n=ct(),{hasSidebar:o,hasAside:r,leftAside:s}=me(),i=C(()=>n.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(l,a)=>{const u=pe("Content");return d(),v("div",{class:H(["VPDoc",{"has-sidebar":f(o),"has-aside":f(r)}])},[b(l.$slots,"doc-top",{},void 0,!0),g("div",Ir,[f(r)?(d(),v("div",{key:0,class:H(["aside",{"left-aside":f(s)}])},[a[0]||(a[0]=g("div",{class:"aside-curtain"},null,-1)),g("div",jr,[g("div",Mr,[L(fr,null,{"aside-top":y(()=>[b(l.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":y(()=>[b(l.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":y(()=>[b(l.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":y(()=>[b(l.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":y(()=>[b(l.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":y(()=>[b(l.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):$("",!0),g("div",Er,[g("div",Br,[b(l.$slots,"doc-before",{},void 0,!0),g("main",Dr,[L(u,{class:H(["vp-doc",[i.value,f(t).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),L(Ar,null,{"doc-footer-before":y(()=>[b(l.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),b(l.$slots,"doc-after",{},void 0,!0)])])]),b(l.$slots,"doc-bottom",{},void 0,!0)],2)}}}),Rr=O(Hr,[["__scopeId","data-v-39a288b8"]]),Fr=w({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(e){const t=e,n=C(()=>t.href&&$n.test(t.href)),o=C(()=>t.tag||(t.href?"a":"button"));return(r,s)=>(d(),x(re(o.value),{class:H(["VPButton",[e.size,e.theme]]),href:e.href?f(It)(e.href):void 0,target:t.target??(n.value?"_blank":void 0),rel:t.rel??(n.value?"noreferrer":void 0)},{default:y(()=>[ue(D(e.text),1)]),_:1},8,["class","href","target","rel"]))}}),Ur=O(Fr,[["__scopeId","data-v-fa7799d5"]]),zr=["src","alt"],Wr=w({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(e){return(t,n)=>{const o=pe("VPImage",!0);return e.image?(d(),v(F,{key:0},[typeof e.image=="string"||"src"in e.image?(d(),v("img",W({key:0,class:"VPImage"},typeof e.image=="string"?t.$attrs:{...e.image,...t.$attrs},{src:f(Ct)(typeof e.image=="string"?e.image:e.image.src),alt:e.alt??(typeof e.image=="string"?"":e.image.alt||"")}),null,16,zr)):(d(),v(F,{key:1},[L(o,W({class:"dark",image:e.image.dark,alt:e.image.alt},t.$attrs),null,16,["image","alt"]),L(o,W({class:"light",image:e.image.light,alt:e.image.alt},t.$attrs),null,16,["image","alt"])],64))],64)):$("",!0)}}}),st=O(Wr,[["__scopeId","data-v-8426fc1a"]]),Gr={class:"container"},Kr={class:"main"},qr={class:"heading"},Yr=["innerHTML"],Jr=["innerHTML"],Qr=["innerHTML"],Zr={key:0,class:"actions"},Xr={key:0,class:"image"},ea={class:"image-container"},ta=w({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(e){const t=pt("hero-image-slot-exists");return(n,o)=>(d(),v("div",{class:H(["VPHero",{"has-image":e.image||f(t)}])},[g("div",Gr,[g("div",Kr,[b(n.$slots,"home-hero-info-before",{},void 0,!0),b(n.$slots,"home-hero-info",{},()=>[g("h1",qr,[e.name?(d(),v("span",{key:0,innerHTML:e.name,class:"name clip"},null,8,Yr)):$("",!0),e.text?(d(),v("span",{key:1,innerHTML:e.text,class:"text"},null,8,Jr)):$("",!0)]),e.tagline?(d(),v("p",{key:0,innerHTML:e.tagline,class:"tagline"},null,8,Qr)):$("",!0)],!0),b(n.$slots,"home-hero-info-after",{},void 0,!0),e.actions?(d(),v("div",Zr,[(d(!0),v(F,null,Y(e.actions,r=>(d(),v("div",{key:r.link,class:"action"},[L(Ur,{tag:"a",size:"medium",theme:r.theme,text:r.text,href:r.link,target:r.target,rel:r.rel},null,8,["theme","text","href","target","rel"])]))),128))])):$("",!0),b(n.$slots,"home-hero-actions-after",{},void 0,!0)]),e.image||f(t)?(d(),v("div",Xr,[g("div",ea,[o[0]||(o[0]=g("div",{class:"image-bg"},null,-1)),b(n.$slots,"home-hero-image",{},()=>[e.image?(d(),x(st,{key:0,class:"image-src",image:e.image},null,8,["image"])):$("",!0)],!0)])])):$("",!0)])],2))}}),na=O(ta,[["__scopeId","data-v-4f9c455b"]]),oa=w({__name:"VPHomeHero",setup(e){const{frontmatter:t}=I();return(n,o)=>f(t).hero?(d(),x(na,{key:0,class:"VPHomeHero",name:f(t).hero.name,text:f(t).hero.text,tagline:f(t).hero.tagline,image:f(t).hero.image,actions:f(t).hero.actions},{"home-hero-info-before":y(()=>[b(n.$slots,"home-hero-info-before")]),"home-hero-info":y(()=>[b(n.$slots,"home-hero-info")]),"home-hero-info-after":y(()=>[b(n.$slots,"home-hero-info-after")]),"home-hero-actions-after":y(()=>[b(n.$slots,"home-hero-actions-after")]),"home-hero-image":y(()=>[b(n.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):$("",!0)}}),ra={class:"box"},aa={key:0,class:"icon"},sa=["innerHTML"],ia=["innerHTML"],la=["innerHTML"],ua={key:4,class:"link-text"},da={class:"link-text-value"},ca=w({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(e){return(t,n)=>(d(),x(te,{class:"VPFeature",href:e.link,rel:e.rel,target:e.target,"no-icon":!0,tag:e.link?"a":"div"},{default:y(()=>[g("article",ra,[typeof e.icon=="object"&&e.icon.wrap?(d(),v("div",aa,[L(st,{image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])])):typeof e.icon=="object"?(d(),x(st,{key:1,image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])):e.icon?(d(),v("div",{key:2,class:"icon",innerHTML:e.icon},null,8,sa)):$("",!0),g("h2",{class:"title",innerHTML:e.title},null,8,ia),e.details?(d(),v("p",{key:3,class:"details",innerHTML:e.details},null,8,la)):$("",!0),e.linkText?(d(),v("div",ua,[g("p",da,[ue(D(e.linkText)+" ",1),n[0]||(n[0]=g("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):$("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),pa=O(ca,[["__scopeId","data-v-a3976bdc"]]),fa={key:0,class:"VPFeatures"},ma={class:"container"},va={class:"items"},ha=w({__name:"VPFeatures",props:{features:{}},setup(e){const t=e,n=C(()=>{const o=t.features.length;if(o){if(o===2)return"grid-2";if(o===3)return"grid-3";if(o%3===0)return"grid-6";if(o>3)return"grid-4"}else return});return(o,r)=>e.features?(d(),v("div",fa,[g("div",ma,[g("div",va,[(d(!0),v(F,null,Y(e.features,s=>(d(),v("div",{key:s.title,class:H(["item",[n.value]])},[L(pa,{icon:s.icon,title:s.title,details:s.details,link:s.link,"link-text":s.linkText,rel:s.rel,target:s.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):$("",!0)}}),ba=O(ha,[["__scopeId","data-v-a6181336"]]),ga=w({__name:"VPHomeFeatures",setup(e){const{frontmatter:t}=I();return(n,o)=>f(t).features?(d(),x(ba,{key:0,class:"VPHomeFeatures",features:f(t).features},null,8,["features"])):$("",!0)}}),ya=w({__name:"VPHomeContent",setup(e){const{width:t}=_o({initialWidth:0,includeScrollbar:!1});return(n,o)=>(d(),v("div",{class:"vp-doc container",style:kn(f(t)?{"--vp-offset":`calc(50% - ${f(t)/2}px)`}:{})},[b(n.$slots,"default",{},void 0,!0)],4))}}),_a=O(ya,[["__scopeId","data-v-8e2d4988"]]),$a=w({__name:"VPHome",setup(e){const{frontmatter:t,theme:n}=I();return(o,r)=>{const s=pe("Content");return d(),v("div",{class:H(["VPHome",{"external-link-icon-enabled":f(n).externalLinkIcon}])},[b(o.$slots,"home-hero-before",{},void 0,!0),L(oa,null,{"home-hero-info-before":y(()=>[b(o.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":y(()=>[b(o.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":y(()=>[b(o.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":y(()=>[b(o.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":y(()=>[b(o.$slots,"home-hero-image",{},void 0,!0)]),_:3}),b(o.$slots,"home-hero-after",{},void 0,!0),b(o.$slots,"home-features-before",{},void 0,!0),L(ga),b(o.$slots,"home-features-after",{},void 0,!0),f(t).markdownStyles!==!1?(d(),x(_a,{key:0},{default:y(()=>[L(s)]),_:1})):(d(),x(s,{key:1}))],2)}}}),ka=O($a,[["__scopeId","data-v-8b561e3d"]]),Sa={},Pa={class:"VPPage"};function wa(e,t){const n=pe("Content");return d(),v("div",Pa,[b(e.$slots,"page-top"),L(n),b(e.$slots,"page-bottom")])}const Ta=O(Sa,[["render",wa]]),La=w({__name:"VPContent",setup(e){const{page:t,frontmatter:n}=I(),{hasSidebar:o}=me();return(r,s)=>(d(),v("div",{class:H(["VPContent",{"has-sidebar":f(o),"is-home":f(n).layout==="home"}]),id:"VPContent"},[f(t).isNotFound?b(r.$slots,"not-found",{key:0},()=>[L(Wo)],!0):f(n).layout==="page"?(d(),x(Ta,{key:1},{"page-top":y(()=>[b(r.$slots,"page-top",{},void 0,!0)]),"page-bottom":y(()=>[b(r.$slots,"page-bottom",{},void 0,!0)]),_:3})):f(n).layout==="home"?(d(),x(ka,{key:2},{"home-hero-before":y(()=>[b(r.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":y(()=>[b(r.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":y(()=>[b(r.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":y(()=>[b(r.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":y(()=>[b(r.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":y(()=>[b(r.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":y(()=>[b(r.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":y(()=>[b(r.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":y(()=>[b(r.$slots,"home-features-after",{},void 0,!0)]),_:3})):f(n).layout&&f(n).layout!=="doc"?(d(),x(re(f(n).layout),{key:3})):(d(),x(Rr,{key:4},{"doc-top":y(()=>[b(r.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":y(()=>[b(r.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":y(()=>[b(r.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":y(()=>[b(r.$slots,"doc-before",{},void 0,!0)]),"doc-after":y(()=>[b(r.$slots,"doc-after",{},void 0,!0)]),"aside-top":y(()=>[b(r.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":y(()=>[b(r.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":y(()=>[b(r.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":y(()=>[b(r.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":y(()=>[b(r.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":y(()=>[b(r.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),xa=O(La,[["__scopeId","data-v-1428d186"]]),Oa={class:"container"},Ca=["innerHTML"],Na=["innerHTML"],Va=w({__name:"VPFooter",setup(e){const{theme:t,frontmatter:n}=I(),{hasSidebar:o}=me();return(r,s)=>f(t).footer&&f(n).footer!==!1?(d(),v("footer",{key:0,class:H(["VPFooter",{"has-sidebar":f(o)}])},[g("div",Oa,[f(t).footer.message?(d(),v("p",{key:0,class:"message",innerHTML:f(t).footer.message},null,8,Ca)):$("",!0),f(t).footer.copyright?(d(),v("p",{key:1,class:"copyright",innerHTML:f(t).footer.copyright},null,8,Na)):$("",!0)])],2)):$("",!0)}}),Aa=O(Va,[["__scopeId","data-v-e315a0ad"]]);function Ia(){const{theme:e,frontmatter:t}=I(),n=_n([]),o=C(()=>n.value.length>0);return dt(()=>{n.value=jt(t.value.outline??e.value.outline)}),{headers:n,hasLocalNav:o}}const ja={class:"menu-text"},Ma={class:"header"},Ea={class:"outline"},Ba=w({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(e){const t=e,{theme:n}=I(),o=M(!1),r=M(0),s=M(),i=M();function l(c){var m;(m=s.value)!=null&&m.contains(c.target)||(o.value=!1)}Q(o,c=>{if(c){document.addEventListener("click",l);return}document.removeEventListener("click",l)}),$t("Escape",()=>{o.value=!1}),dt(()=>{o.value=!1});function a(){o.value=!o.value,r.value=window.innerHeight+Math.min(window.scrollY-t.navHeight,0)}function u(c){c.target.classList.contains("outline-link")&&(i.value&&(i.value.style.transition="none"),At(()=>{o.value=!1}))}function p(){o.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(c,m)=>(d(),v("div",{class:"VPLocalNavOutlineDropdown",style:kn({"--vp-vh":r.value+"px"}),ref_key:"main",ref:s},[e.headers.length>0?(d(),v("button",{key:0,onClick:a,class:H({open:o.value})},[g("span",ja,D(f(xn)(f(n))),1),m[0]||(m[0]=g("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(d(),v("button",{key:1,onClick:p},D(f(n).returnToTopLabel||"Return to top"),1)),L(Ot,{name:"flyout"},{default:y(()=>[o.value?(d(),v("div",{key:0,ref_key:"items",ref:i,class:"items",onClick:u},[g("div",Ma,[g("a",{class:"top-link",href:"#",onClick:p},D(f(n).returnToTopLabel||"Return to top"),1)]),g("div",Ea,[L(On,{headers:e.headers},null,8,["headers"])])],512)):$("",!0)]),_:1})],4))}}),Da=O(Ba,[["__scopeId","data-v-8a42e2b4"]]),Ha={class:"container"},Ra=["aria-expanded"],Fa={class:"menu-text"},Ua=w({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(e){const{theme:t,frontmatter:n}=I(),{hasSidebar:o}=me(),{headers:r}=Ia(),{y:s}=Sn(),i=M(0);fe(()=>{i.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),dt(()=>{r.value=jt(n.value.outline??t.value.outline)});const l=C(()=>r.value.length===0),a=C(()=>l.value&&!o.value),u=C(()=>({VPLocalNav:!0,"has-sidebar":o.value,empty:l.value,fixed:a.value}));return(p,c)=>f(n).layout!=="home"&&(!a.value||f(s)>=i.value)?(d(),v("div",{key:0,class:H(u.value)},[g("div",Ha,[f(o)?(d(),v("button",{key:0,class:"menu","aria-expanded":e.open,"aria-controls":"VPSidebarNav",onClick:c[0]||(c[0]=m=>p.$emit("open-menu"))},[c[1]||(c[1]=g("span",{class:"vpi-align-left menu-icon"},null,-1)),g("span",Fa,D(f(t).sidebarMenuLabel||"Menu"),1)],8,Ra)):$("",!0),L(Da,{headers:f(r),navHeight:i.value},null,8,["headers","navHeight"])])],2)):$("",!0)}}),za=O(Ua,[["__scopeId","data-v-a6f0e41e"]]);function Wa(){const e=M(!1);function t(){e.value=!0,window.addEventListener("resize",r)}function n(){e.value=!1,window.removeEventListener("resize",r)}function o(){e.value?n():t()}function r(){window.outerWidth>=768&&n()}const s=ct();return Q(()=>s.path,n),{isScreenOpen:e,openScreen:t,closeScreen:n,toggleScreen:o}}const Ga={},Ka={class:"VPSwitch",type:"button",role:"switch"},qa={class:"check"},Ya={key:0,class:"icon"};function Ja(e,t){return d(),v("button",Ka,[g("span",qa,[e.$slots.default?(d(),v("span",Ya,[b(e.$slots,"default",{},void 0,!0)])):$("",!0)])])}const Qa=O(Ga,[["render",Ja],["__scopeId","data-v-1d5665e3"]]),Za=w({__name:"VPSwitchAppearance",setup(e){const{isDark:t,theme:n}=I(),o=pt("toggle-appearance",()=>{t.value=!t.value}),r=M("");return Vt(()=>{r.value=t.value?n.value.lightModeSwitchTitle||"Switch to light theme":n.value.darkModeSwitchTitle||"Switch to dark theme"}),(s,i)=>(d(),x(Qa,{title:r.value,class:"VPSwitchAppearance","aria-checked":f(t),onClick:f(o)},{default:y(()=>[...i[0]||(i[0]=[g("span",{class:"vpi-sun sun"},null,-1),g("span",{class:"vpi-moon moon"},null,-1)])]),_:1},8,["title","aria-checked","onClick"]))}}),Mt=O(Za,[["__scopeId","data-v-5337faa4"]]),Xa={key:0,class:"VPNavBarAppearance"},es=w({__name:"VPNavBarAppearance",setup(e){const{site:t}=I();return(n,o)=>f(t).appearance&&f(t).appearance!=="force-dark"&&f(t).appearance!=="force-auto"?(d(),v("div",Xa,[L(Mt)])):$("",!0)}}),ts=O(es,[["__scopeId","data-v-6c893767"]]),Et=M();let Cn=!1,ht=0;function ns(e){const t=M(!1);if(ft){!Cn&&os(),ht++;const n=Q(Et,o=>{var r,s,i;o===e.el.value||(r=e.el.value)!=null&&r.contains(o)?(t.value=!0,(s=e.onFocus)==null||s.call(e)):(t.value=!1,(i=e.onBlur)==null||i.call(e))});Nt(()=>{n(),ht--,ht||rs()})}return Pn(t)}function os(){document.addEventListener("focusin",Nn),Cn=!0,Et.value=document.activeElement}function rs(){document.removeEventListener("focusin",Nn)}function Nn(){Et.value=document.activeElement}const as={class:"VPMenuLink"},ss=["innerHTML"],is=w({__name:"VPMenuLink",props:{item:{}},setup(e){const{page:t}=I();return(n,o)=>(d(),v("div",as,[L(te,{class:H({active:f(Oe)(f(t).relativePath,e.item.activeMatch||e.item.link,!!e.item.activeMatch)}),href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon},{default:y(()=>[g("span",{innerHTML:e.item.text},null,8,ss)]),_:1},8,["class","href","target","rel","no-icon"])]))}}),mt=O(is,[["__scopeId","data-v-35975db6"]]),ls={class:"VPMenuGroup"},us={key:0,class:"title"},ds=w({__name:"VPMenuGroup",props:{text:{},items:{}},setup(e){return(t,n)=>(d(),v("div",ls,[e.text?(d(),v("p",us,D(e.text),1)):$("",!0),(d(!0),v(F,null,Y(e.items,o=>(d(),v(F,null,["link"in o?(d(),x(mt,{key:0,item:o},null,8,["item"])):$("",!0)],64))),256))]))}}),cs=O(ds,[["__scopeId","data-v-69e747b5"]]),ps={class:"VPMenu"},fs={key:0,class:"items"},ms=w({__name:"VPMenu",props:{items:{}},setup(e){return(t,n)=>(d(),v("div",ps,[e.items?(d(),v("div",fs,[(d(!0),v(F,null,Y(e.items,o=>(d(),v(F,{key:JSON.stringify(o)},["link"in o?(d(),x(mt,{key:0,item:o},null,8,["item"])):"component"in o?(d(),x(re(o.component),W({key:1,ref_for:!0},o.props),null,16)):(d(),x(cs,{key:2,text:o.text,items:o.items},null,8,["text","items"]))],64))),128))])):$("",!0),b(t.$slots,"default",{},void 0,!0)]))}}),vs=O(ms,[["__scopeId","data-v-b98bc113"]]),hs=["aria-expanded","aria-label"],bs={key:0,class:"text"},gs=["innerHTML"],ys={key:1,class:"vpi-more-horizontal icon"},_s={class:"menu"},$s=w({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(e){const t=M(!1),n=M();ns({el:n,onBlur:o});function o(){t.value=!1}return(r,s)=>(d(),v("div",{class:"VPFlyout",ref_key:"el",ref:n,onMouseenter:s[1]||(s[1]=i=>t.value=!0),onMouseleave:s[2]||(s[2]=i=>t.value=!1)},[g("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":t.value,"aria-label":e.label,onClick:s[0]||(s[0]=i=>t.value=!t.value)},[e.button||e.icon?(d(),v("span",bs,[e.icon?(d(),v("span",{key:0,class:H([e.icon,"option-icon"])},null,2)):$("",!0),e.button?(d(),v("span",{key:1,innerHTML:e.button},null,8,gs)):$("",!0),s[3]||(s[3]=g("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(d(),v("span",ys))],8,hs),g("div",_s,[L(vs,{items:e.items},{default:y(()=>[b(r.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),Bt=O($s,[["__scopeId","data-v-cf11d7a2"]]),ks=["href","aria-label","innerHTML"],Ss=w({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(e){const t=e,n=M();fe(async()=>{var s;await At();const r=(s=n.value)==null?void 0:s.children[0];r instanceof HTMLElement&&r.className.startsWith("vpi-social-")&&(getComputedStyle(r).maskImage||getComputedStyle(r).webkitMaskImage)==="none"&&r.style.setProperty("--icon",`url('https://api.iconify.design/simple-icons/${t.icon}.svg')`)});const o=C(()=>typeof t.icon=="object"?t.icon.svg:`<span class="vpi-social-${t.icon}"></span>`);return(r,s)=>(d(),v("a",{ref_key:"el",ref:n,class:"VPSocialLink no-icon",href:e.link,"aria-label":e.ariaLabel??(typeof e.icon=="string"?e.icon:""),target:"_blank",rel:"noopener",innerHTML:o.value},null,8,ks))}}),Ps=O(Ss,[["__scopeId","data-v-bd121fe5"]]),ws={class:"VPSocialLinks"},Ts=w({__name:"VPSocialLinks",props:{links:{}},setup(e){return(t,n)=>(d(),v("div",ws,[(d(!0),v(F,null,Y(e.links,({link:o,icon:r,ariaLabel:s})=>(d(),x(Ps,{key:o,icon:r,link:o,ariaLabel:s},null,8,["icon","link","ariaLabel"]))),128))]))}}),vt=O(Ts,[["__scopeId","data-v-7bc22406"]]),Ls={key:0,class:"group translations"},xs={class:"trans-title"},Os={key:1,class:"group"},Cs={class:"item appearance"},Ns={class:"label"},Vs={class:"appearance-action"},As={key:2,class:"group"},Is={class:"item social-links"},js=w({__name:"VPNavBarExtra",setup(e){const{site:t,theme:n}=I(),{localeLinks:o,currentLang:r}=Ze({correspondingLink:!0}),s=C(()=>o.value.length&&r.value.label||t.value.appearance||n.value.socialLinks);return(i,l)=>s.value?(d(),x(Bt,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:y(()=>[f(o).length&&f(r).label?(d(),v("div",Ls,[g("p",xs,D(f(r).label),1),(d(!0),v(F,null,Y(f(o),a=>(d(),x(mt,{key:a.link,item:a},null,8,["item"]))),128))])):$("",!0),f(t).appearance&&f(t).appearance!=="force-dark"&&f(t).appearance!=="force-auto"?(d(),v("div",Os,[g("div",Cs,[g("p",Ns,D(f(n).darkModeSwitchLabel||"Appearance"),1),g("div",Vs,[L(Mt)])])])):$("",!0),f(n).socialLinks?(d(),v("div",As,[g("div",Is,[L(vt,{class:"social-links-list",links:f(n).socialLinks},null,8,["links"])])])):$("",!0)]),_:1})):$("",!0)}}),Ms=O(js,[["__scopeId","data-v-bb2aa2f0"]]),Es=["aria-expanded"],Bs=w({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(e){return(t,n)=>(d(),v("button",{type:"button",class:H(["VPNavBarHamburger",{active:e.active}]),"aria-label":"mobile navigation","aria-expanded":e.active,"aria-controls":"VPNavScreen",onClick:n[0]||(n[0]=o=>t.$emit("click"))},[...n[1]||(n[1]=[g("span",{class:"container"},[g("span",{class:"top"}),g("span",{class:"middle"}),g("span",{class:"bottom"})],-1)])],10,Es))}}),Ds=O(Bs,[["__scopeId","data-v-e5dd9c1c"]]),Hs=["innerHTML"],Rs=w({__name:"VPNavBarMenuLink",props:{item:{}},setup(e){const{page:t}=I();return(n,o)=>(d(),x(te,{class:H({VPNavBarMenuLink:!0,active:f(Oe)(f(t).relativePath,e.item.activeMatch||e.item.link,!!e.item.activeMatch)}),href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,tabindex:"0"},{default:y(()=>[g("span",{innerHTML:e.item.text},null,8,Hs)]),_:1},8,["class","href","target","rel","no-icon"]))}}),Fs=O(Rs,[["__scopeId","data-v-e56f3d57"]]),Us=w({__name:"VPNavBarMenuGroup",props:{item:{}},setup(e){const t=e,{page:n}=I(),o=s=>"component"in s?!1:"link"in s?Oe(n.value.relativePath,s.link,!!t.item.activeMatch):s.items.some(o),r=C(()=>o(t.item));return(s,i)=>(d(),x(Bt,{class:H({VPNavBarMenuGroup:!0,active:f(Oe)(f(n).relativePath,e.item.activeMatch,!!e.item.activeMatch)||r.value}),button:e.item.text,items:e.item.items},null,8,["class","button","items"]))}}),zs={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},Ws=w({__name:"VPNavBarMenu",setup(e){const{theme:t}=I();return(n,o)=>f(t).nav?(d(),v("nav",zs,[o[0]||(o[0]=g("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),(d(!0),v(F,null,Y(f(t).nav,r=>(d(),v(F,{key:JSON.stringify(r)},["link"in r?(d(),x(Fs,{key:0,item:r},null,8,["item"])):"component"in r?(d(),x(re(r.component),W({key:1,ref_for:!0},r.props),null,16)):(d(),x(Us,{key:2,item:r},null,8,["item"]))],64))),128))])):$("",!0)}}),Gs=O(Ws,[["__scopeId","data-v-dc692963"]]);function Ks(e){const{localeIndex:t,theme:n}=I();function o(r){var _,S,P;const s=r.split("."),i=(_=n.value.search)==null?void 0:_.options,l=i&&typeof i=="object",a=l&&((P=(S=i.locales)==null?void 0:S[t.value])==null?void 0:P.translations)||null,u=l&&i.translations||null;let p=a,c=u,m=e;const h=s.pop();for(const T of s){let N=null;const E=m==null?void 0:m[T];E&&(N=m=E);const k=c==null?void 0:c[T];k&&(N=c=k);const V=p==null?void 0:p[T];V&&(N=p=V),E||(m=N),k||(c=N),V||(p=N)}return(p==null?void 0:p[h])??(c==null?void 0:c[h])??(m==null?void 0:m[h])??""}return o}const qs=["aria-label"],Ys={class:"DocSearch-Button-Container"},Js={class:"DocSearch-Button-Placeholder"},Wt=w({__name:"VPNavBarSearchButton",setup(e){const n=Ks({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(o,r)=>(d(),v("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":f(n)("button.buttonAriaLabel")},[g("span",Ys,[r[0]||(r[0]=g("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1)),g("span",Js,D(f(n)("button.buttonText")),1)]),r[1]||(r[1]=g("span",{class:"DocSearch-Button-Keys"},[g("kbd",{class:"DocSearch-Button-Key"}),g("kbd",{class:"DocSearch-Button-Key"},"K")],-1))],8,qs))}}),Qs={class:"VPNavBarSearch"},Zs={id:"local-search"},Xs={key:1,id:"docsearch"},ei=w({__name:"VPNavBarSearch",setup(e){const t=$o(()=>ko(()=>import("./VPLocalSearchBox.8gNsnRFx.js"),__vite__mapDeps([0,1]))),n=()=>null,{theme:o}=I(),r=M(!1),s=M(!1);fe(()=>{});function i(){r.value||(r.value=!0,setTimeout(l,16))}function l(){const c=new Event("keydown");c.key="k",c.metaKey=!0,window.dispatchEvent(c),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||l()},16)}function a(c){const m=c.target,h=m.tagName;return m.isContentEditable||h==="INPUT"||h==="SELECT"||h==="TEXTAREA"}const u=M(!1);$t("k",c=>{(c.ctrlKey||c.metaKey)&&(c.preventDefault(),u.value=!0)}),$t("/",c=>{a(c)||(c.preventDefault(),u.value=!0)});const p="local";return(c,m)=>{var h;return d(),v("div",Qs,[f(p)==="local"?(d(),v(F,{key:0},[u.value?(d(),x(f(t),{key:0,onClose:m[0]||(m[0]=_=>u.value=!1)})):$("",!0),g("div",Zs,[L(Wt,{onClick:m[1]||(m[1]=_=>u.value=!0)})])],64)):f(p)==="algolia"?(d(),v(F,{key:1},[r.value?(d(),x(f(n),{key:0,algolia:((h=f(o).search)==null?void 0:h.options)??f(o).algolia,onVnodeBeforeMount:m[2]||(m[2]=_=>s.value=!0)},null,8,["algolia"])):$("",!0),s.value?$("",!0):(d(),v("div",Xs,[L(Wt,{onClick:i})]))],64)):$("",!0)])}}}),ti=w({__name:"VPNavBarSocialLinks",setup(e){const{theme:t}=I();return(n,o)=>f(t).socialLinks?(d(),x(vt,{key:0,class:"VPNavBarSocialLinks",links:f(t).socialLinks},null,8,["links"])):$("",!0)}}),ni=O(ti,[["__scopeId","data-v-0394ad82"]]),oi=["href","rel","target"],ri=["innerHTML"],ai={key:2},si=w({__name:"VPNavBarTitle",setup(e){const{site:t,theme:n}=I(),{hasSidebar:o}=me(),{currentLang:r}=Ze(),s=C(()=>{var a;return typeof n.value.logoLink=="string"?n.value.logoLink:(a=n.value.logoLink)==null?void 0:a.link}),i=C(()=>{var a;return typeof n.value.logoLink=="string"||(a=n.value.logoLink)==null?void 0:a.rel}),l=C(()=>{var a;return typeof n.value.logoLink=="string"||(a=n.value.logoLink)==null?void 0:a.target});return(a,u)=>(d(),v("div",{class:H(["VPNavBarTitle",{"has-sidebar":f(o)}])},[g("a",{class:"title",href:s.value??f(It)(f(r).link),rel:i.value,target:l.value},[b(a.$slots,"nav-bar-title-before",{},void 0,!0),f(n).logo?(d(),x(st,{key:0,class:"logo",image:f(n).logo},null,8,["image"])):$("",!0),f(n).siteTitle?(d(),v("span",{key:1,innerHTML:f(n).siteTitle},null,8,ri)):f(n).siteTitle===void 0?(d(),v("span",ai,D(f(t).title),1)):$("",!0),b(a.$slots,"nav-bar-title-after",{},void 0,!0)],8,oi)],2))}}),ii=O(si,[["__scopeId","data-v-1168a8e4"]]),li={class:"items"},ui={class:"title"},di=w({__name:"VPNavBarTranslations",setup(e){const{theme:t}=I(),{localeLinks:n,currentLang:o}=Ze({correspondingLink:!0});return(r,s)=>f(n).length&&f(o).label?(d(),x(Bt,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:f(t).langMenuLabel||"Change language"},{default:y(()=>[g("div",li,[g("p",ui,D(f(o).label),1),(d(!0),v(F,null,Y(f(n),i=>(d(),x(mt,{key:i.link,item:i},null,8,["item"]))),128))])]),_:1},8,["label"])):$("",!0)}}),ci=O(di,[["__scopeId","data-v-88af2de4"]]),pi={class:"wrapper"},fi={class:"container"},mi={class:"title"},vi={class:"content"},hi={class:"content-body"},bi=w({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(e){const t=e,{y:n}=Sn(),{hasSidebar:o}=me(),{frontmatter:r}=I(),s=M({});return Vt(()=>{s.value={"has-sidebar":o.value,home:r.value.layout==="home",top:n.value===0,"screen-open":t.isScreenOpen}}),(i,l)=>(d(),v("div",{class:H(["VPNavBar",s.value])},[g("div",pi,[g("div",fi,[g("div",mi,[L(ii,null,{"nav-bar-title-before":y(()=>[b(i.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":y(()=>[b(i.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),g("div",vi,[g("div",hi,[b(i.$slots,"nav-bar-content-before",{},void 0,!0),L(ei,{class:"search"}),L(Gs,{class:"menu"}),L(ci,{class:"translations"}),L(ts,{class:"appearance"}),L(ni,{class:"social-links"}),L(Ms,{class:"extra"}),b(i.$slots,"nav-bar-content-after",{},void 0,!0),L(Ds,{class:"hamburger",active:e.isScreenOpen,onClick:l[0]||(l[0]=a=>i.$emit("toggle-screen"))},null,8,["active"])])])])]),l[1]||(l[1]=g("div",{class:"divider"},[g("div",{class:"divider-line"})],-1))],2))}}),gi=O(bi,[["__scopeId","data-v-6aa21345"]]),yi={key:0,class:"VPNavScreenAppearance"},_i={class:"text"},$i=w({__name:"VPNavScreenAppearance",setup(e){const{site:t,theme:n}=I();return(o,r)=>f(t).appearance&&f(t).appearance!=="force-dark"&&f(t).appearance!=="force-auto"?(d(),v("div",yi,[g("p",_i,D(f(n).darkModeSwitchLabel||"Appearance"),1),L(Mt)])):$("",!0)}}),ki=O($i,[["__scopeId","data-v-b44890b2"]]),Si=["innerHTML"],Pi=w({__name:"VPNavScreenMenuLink",props:{item:{}},setup(e){const t=pt("close-screen");return(n,o)=>(d(),x(te,{class:"VPNavScreenMenuLink",href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,onClick:f(t)},{default:y(()=>[g("span",{innerHTML:e.item.text},null,8,Si)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),wi=O(Pi,[["__scopeId","data-v-df37e6dd"]]),Ti=["innerHTML"],Li=w({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(e){const t=pt("close-screen");return(n,o)=>(d(),x(te,{class:"VPNavScreenMenuGroupLink",href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,onClick:f(t)},{default:y(()=>[g("span",{innerHTML:e.item.text},null,8,Ti)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Vn=O(Li,[["__scopeId","data-v-3e9c20e4"]]),xi={class:"VPNavScreenMenuGroupSection"},Oi={key:0,class:"title"},Ci=w({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(e){return(t,n)=>(d(),v("div",xi,[e.text?(d(),v("p",Oi,D(e.text),1)):$("",!0),(d(!0),v(F,null,Y(e.items,o=>(d(),x(Vn,{key:o.text,item:o},null,8,["item"]))),128))]))}}),Ni=O(Ci,[["__scopeId","data-v-8133b170"]]),Vi=["aria-controls","aria-expanded"],Ai=["innerHTML"],Ii=["id"],ji={key:0,class:"item"},Mi={key:1,class:"item"},Ei={key:2,class:"group"},Bi=w({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(e){const t=e,n=M(!1),o=C(()=>`NavScreenGroup-${t.text.replace(" ","-").toLowerCase()}`);function r(){n.value=!n.value}return(s,i)=>(d(),v("div",{class:H(["VPNavScreenMenuGroup",{open:n.value}])},[g("button",{class:"button","aria-controls":o.value,"aria-expanded":n.value,onClick:r},[g("span",{class:"button-text",innerHTML:e.text},null,8,Ai),i[0]||(i[0]=g("span",{class:"vpi-plus button-icon"},null,-1))],8,Vi),g("div",{id:o.value,class:"items"},[(d(!0),v(F,null,Y(e.items,l=>(d(),v(F,{key:JSON.stringify(l)},["link"in l?(d(),v("div",ji,[L(Vn,{item:l},null,8,["item"])])):"component"in l?(d(),v("div",Mi,[(d(),x(re(l.component),W({ref_for:!0},l.props,{"screen-menu":""}),null,16))])):(d(),v("div",Ei,[L(Ni,{text:l.text,items:l.items},null,8,["text","items"])]))],64))),128))],8,Ii)],2))}}),Di=O(Bi,[["__scopeId","data-v-b9ab8c58"]]),Hi={key:0,class:"VPNavScreenMenu"},Ri=w({__name:"VPNavScreenMenu",setup(e){const{theme:t}=I();return(n,o)=>f(t).nav?(d(),v("nav",Hi,[(d(!0),v(F,null,Y(f(t).nav,r=>(d(),v(F,{key:JSON.stringify(r)},["link"in r?(d(),x(wi,{key:0,item:r},null,8,["item"])):"component"in r?(d(),x(re(r.component),W({key:1,ref_for:!0},r.props,{"screen-menu":""}),null,16)):(d(),x(Di,{key:2,text:r.text||"",items:r.items},null,8,["text","items"]))],64))),128))])):$("",!0)}}),Fi=w({__name:"VPNavScreenSocialLinks",setup(e){const{theme:t}=I();return(n,o)=>f(t).socialLinks?(d(),x(vt,{key:0,class:"VPNavScreenSocialLinks",links:f(t).socialLinks},null,8,["links"])):$("",!0)}}),Ui={class:"list"},zi=w({__name:"VPNavScreenTranslations",setup(e){const{localeLinks:t,currentLang:n}=Ze({correspondingLink:!0}),o=M(!1);function r(){o.value=!o.value}return(s,i)=>f(t).length&&f(n).label?(d(),v("div",{key:0,class:H(["VPNavScreenTranslations",{open:o.value}])},[g("button",{class:"title",onClick:r},[i[0]||(i[0]=g("span",{class:"vpi-languages icon lang"},null,-1)),ue(" "+D(f(n).label)+" ",1),i[1]||(i[1]=g("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),g("ul",Ui,[(d(!0),v(F,null,Y(f(t),l=>(d(),v("li",{key:l.link,class:"item"},[L(te,{class:"link",href:l.link},{default:y(()=>[ue(D(l.text),1)]),_:2},1032,["href"])]))),128))])],2)):$("",!0)}}),Wi=O(zi,[["__scopeId","data-v-858fe1a4"]]),Gi={class:"container"},Ki=w({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(e){const t=M(null),n=wn(ft?document.body:null);return(o,r)=>(d(),x(Ot,{name:"fade",onEnter:r[0]||(r[0]=s=>n.value=!0),onAfterLeave:r[1]||(r[1]=s=>n.value=!1)},{default:y(()=>[e.open?(d(),v("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:t,id:"VPNavScreen"},[g("div",Gi,[b(o.$slots,"nav-screen-content-before",{},void 0,!0),L(Ri,{class:"menu"}),L(Wi,{class:"translations"}),L(ki,{class:"appearance"}),L(Fi,{class:"social-links"}),b(o.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):$("",!0)]),_:3}))}}),qi=O(Ki,[["__scopeId","data-v-f2779853"]]),Yi={key:0,class:"VPNav"},Ji=w({__name:"VPNav",setup(e){const{isScreenOpen:t,closeScreen:n,toggleScreen:o}=Wa(),{frontmatter:r}=I(),s=C(()=>r.value.navbar!==!1);return Tn("close-screen",n),ut(()=>{ft&&document.documentElement.classList.toggle("hide-nav",!s.value)}),(i,l)=>s.value?(d(),v("header",Yi,[L(gi,{"is-screen-open":f(t),onToggleScreen:f(o)},{"nav-bar-title-before":y(()=>[b(i.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":y(()=>[b(i.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":y(()=>[b(i.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":y(()=>[b(i.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),L(qi,{open:f(t)},{"nav-screen-content-before":y(()=>[b(i.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":y(()=>[b(i.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):$("",!0)}}),Qi=O(Ji,[["__scopeId","data-v-ae24b3ad"]]),Zi=["role","tabindex"],Xi={key:1,class:"items"},el=w({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(e){const t=e,{collapsed:n,collapsible:o,isLink:r,isActiveLink:s,hasActiveLink:i,hasChildren:l,toggle:a}=Yo(C(()=>t.item)),u=C(()=>l.value?"section":"div"),p=C(()=>r.value?"a":"div"),c=C(()=>l.value?t.depth+2===7?"p":`h${t.depth+2}`:"p"),m=C(()=>r.value?void 0:"button"),h=C(()=>[[`level-${t.depth}`],{collapsible:o.value},{collapsed:n.value},{"is-link":r.value},{"is-active":s.value},{"has-active":i.value}]);function _(P){"key"in P&&P.key!=="Enter"||!t.item.link&&a()}function S(){t.item.link&&a()}return(P,T)=>{const N=pe("VPSidebarItem",!0);return d(),x(re(u.value),{class:H(["VPSidebarItem",h.value])},{default:y(()=>[e.item.text?(d(),v("div",W({key:0,class:"item",role:m.value},So(e.item.items?{click:_,keydown:_}:{},!0),{tabindex:e.item.items&&0}),[T[1]||(T[1]=g("div",{class:"indicator"},null,-1)),e.item.link?(d(),x(te,{key:0,tag:p.value,class:"link",href:e.item.link,rel:e.item.rel,target:e.item.target},{default:y(()=>[(d(),x(re(c.value),{class:"text",innerHTML:e.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(d(),x(re(c.value),{key:1,class:"text",innerHTML:e.item.text},null,8,["innerHTML"])),e.item.collapsed!=null&&e.item.items&&e.item.items.length?(d(),v("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:S,onKeydown:Po(S,["enter"]),tabindex:"0"},[...T[0]||(T[0]=[g("span",{class:"vpi-chevron-right caret-icon"},null,-1)])],32)):$("",!0)],16,Zi)):$("",!0),e.item.items&&e.item.items.length?(d(),v("div",Xi,[e.depth<5?(d(!0),v(F,{key:0},Y(e.item.items,E=>(d(),x(N,{key:E.text,item:E,depth:e.depth+1},null,8,["item","depth"]))),128)):$("",!0)])):$("",!0)]),_:1},8,["class"])}}}),tl=O(el,[["__scopeId","data-v-b3fd67f8"]]),nl=w({__name:"VPSidebarGroup",props:{items:{}},setup(e){const t=M(!0);let n=null;return fe(()=>{n=setTimeout(()=>{n=null,t.value=!1},300)}),wo(()=>{n!=null&&(clearTimeout(n),n=null)}),(o,r)=>(d(!0),v(F,null,Y(e.items,s=>(d(),v("div",{key:s.text,class:H(["group",{"no-transition":t.value}])},[L(tl,{item:s,depth:0},null,8,["item"])],2))),128))}}),ol=O(nl,[["__scopeId","data-v-c40bc020"]]),rl={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},al=w({__name:"VPSidebar",props:{open:{type:Boolean}},setup(e){const{sidebarGroups:t,hasSidebar:n}=me(),o=e,r=M(null),s=wn(ft?document.body:null);Q([o,r],()=>{var l;o.open?(s.value=!0,(l=r.value)==null||l.focus()):s.value=!1},{immediate:!0,flush:"post"});const i=M(0);return Q(t,()=>{i.value+=1},{deep:!0}),(l,a)=>f(n)?(d(),v("aside",{key:0,class:H(["VPSidebar",{open:e.open}]),ref_key:"navEl",ref:r,onClick:a[0]||(a[0]=To(()=>{},["stop"]))},[a[2]||(a[2]=g("div",{class:"curtain"},null,-1)),g("nav",rl,[a[1]||(a[1]=g("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),b(l.$slots,"sidebar-nav-before",{},void 0,!0),(d(),x(ol,{items:f(t),key:i.value},null,8,["items"])),b(l.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):$("",!0)}}),sl=O(al,[["__scopeId","data-v-319d5ca6"]]),il=w({__name:"VPSkipLink",setup(e){const{theme:t}=I(),n=ct(),o=M();Q(()=>n.path,()=>o.value.focus());function r({target:s}){const i=document.getElementById(decodeURIComponent(s.hash).slice(1));if(i){const l=()=>{i.removeAttribute("tabindex"),i.removeEventListener("blur",l)};i.setAttribute("tabindex","-1"),i.addEventListener("blur",l),i.focus(),window.scrollTo(0,0)}}return(s,i)=>(d(),v(F,null,[g("span",{ref_key:"backToTop",ref:o,tabindex:"-1"},null,512),g("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:r},D(f(t).skipToContentLabel||"Skip to content"),1)],64))}}),ll=O(il,[["__scopeId","data-v-0b0ada53"]]),ul=w({__name:"Layout",setup(e){const{isOpen:t,open:n,close:o}=me(),r=ct();Q(()=>r.path,o),qo(t,o);const{frontmatter:s}=I(),i=Lo(),l=C(()=>!!i["home-hero-image"]);return Tn("hero-image-slot-exists",l),(a,u)=>{const p=pe("Content");return f(s).layout!==!1?(d(),v("div",{key:0,class:H(["Layout",f(s).pageClass])},[b(a.$slots,"layout-top",{},void 0,!0),L(ll),L(jo,{class:"backdrop",show:f(t),onClick:f(o)},null,8,["show","onClick"]),L(Qi,null,{"nav-bar-title-before":y(()=>[b(a.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":y(()=>[b(a.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":y(()=>[b(a.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":y(()=>[b(a.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":y(()=>[b(a.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":y(()=>[b(a.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),L(za,{open:f(t),onOpenMenu:f(n)},null,8,["open","onOpenMenu"]),L(sl,{open:f(t)},{"sidebar-nav-before":y(()=>[b(a.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":y(()=>[b(a.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),L(xa,null,{"page-top":y(()=>[b(a.$slots,"page-top",{},void 0,!0)]),"page-bottom":y(()=>[b(a.$slots,"page-bottom",{},void 0,!0)]),"not-found":y(()=>[b(a.$slots,"not-found",{},void 0,!0)]),"home-hero-before":y(()=>[b(a.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":y(()=>[b(a.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":y(()=>[b(a.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":y(()=>[b(a.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":y(()=>[b(a.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":y(()=>[b(a.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":y(()=>[b(a.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":y(()=>[b(a.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":y(()=>[b(a.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":y(()=>[b(a.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":y(()=>[b(a.$slots,"doc-before",{},void 0,!0)]),"doc-after":y(()=>[b(a.$slots,"doc-after",{},void 0,!0)]),"doc-top":y(()=>[b(a.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":y(()=>[b(a.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":y(()=>[b(a.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":y(()=>[b(a.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":y(()=>[b(a.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":y(()=>[b(a.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":y(()=>[b(a.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":y(()=>[b(a.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),L(Aa),b(a.$slots,"layout-bottom",{},void 0,!0)],2)):(d(),x(p,{key:1}))}}}),dl=O(ul,[["__scopeId","data-v-5d98c3a5"]]),cl={class:"profile"},pl={class:"avatar"},fl=["src","alt"],ml={class:"data"},vl={class:"name"},hl={key:0,class:"affiliation"},bl={key:0,class:"title"},gl={key:1,class:"at"},yl=["innerHTML"],_l={key:2,class:"links"},$l={key:0,class:"sp"},kl=w({__name:"VPTeamMembersItem",props:{size:{default:"medium"},member:{}},setup(e){return(t,n)=>(d(),v("article",{class:H(["VPTeamMembersItem",[e.size]])},[g("div",cl,[g("figure",pl,[g("img",{class:"avatar-img",src:e.member.avatar,alt:e.member.name},null,8,fl)]),g("div",ml,[g("h1",vl,D(e.member.name),1),e.member.title||e.member.org?(d(),v("p",hl,[e.member.title?(d(),v("span",bl,D(e.member.title),1)):$("",!0),e.member.title&&e.member.org?(d(),v("span",gl," @ ")):$("",!0),e.member.org?(d(),x(te,{key:2,class:H(["org",{link:e.member.orgLink}]),href:e.member.orgLink,"no-icon":""},{default:y(()=>[ue(D(e.member.org),1)]),_:1},8,["class","href"])):$("",!0)])):$("",!0),e.member.desc?(d(),v("p",{key:1,class:"desc",innerHTML:e.member.desc},null,8,yl)):$("",!0),e.member.links?(d(),v("div",_l,[L(vt,{links:e.member.links},null,8,["links"])])):$("",!0)])]),e.member.sponsor?(d(),v("div",$l,[L(te,{class:"sp-link",href:e.member.sponsor,"no-icon":""},{default:y(()=>[n[0]||(n[0]=g("span",{class:"vpi-heart sp-icon"},null,-1)),ue(" "+D(e.member.actionText||"Sponsor"),1)]),_:1},8,["href"])])):$("",!0)],2))}}),Sl=O(kl,[["__scopeId","data-v-f3fa364a"]]),Pl={class:"container"},wl=w({__name:"VPTeamMembers",props:{size:{default:"medium"},members:{}},setup(e){const t=e,n=C(()=>[t.size,`count-${t.members.length}`]);return(o,r)=>(d(),v("div",{class:H(["VPTeamMembers",n.value])},[g("div",Pl,[(d(!0),v(F,null,Y(e.members,s=>(d(),v("div",{key:s.name,class:"item"},[L(Sl,{size:e.size,member:s},null,8,["size","member"])]))),128))])],2))}}),Hd=O(wl,[["__scopeId","data-v-6cb0dbc4"]]),Tl={},Ll={class:"VPTeamPage"};function xl(e,t){return d(),v("div",Ll,[b(e.$slots,"default")])}const Rd=O(Tl,[["render",xl],["__scopeId","data-v-7c57f839"]]),Ol={},Cl={class:"VPTeamPageTitle"},Nl={key:0,class:"title"},Vl={key:1,class:"lead"};function Al(e,t){return d(),v("div",Cl,[e.$slots.title?(d(),v("h1",Nl,[b(e.$slots,"title",{},void 0,!0)])):$("",!0),e.$slots.lead?(d(),v("p",Vl,[b(e.$slots,"lead",{},void 0,!0)])):$("",!0)])}const Fd=O(Ol,[["render",Al],["__scopeId","data-v-bf2cbdac"]]),Il={Layout:dl,enhanceApp:({app:e})=>{e.component("Badge",Vo)}};var jl=Object.defineProperty,Gt=Object.getOwnPropertySymbols,Ml=Object.prototype.hasOwnProperty,El=Object.prototype.propertyIsEnumerable,Kt=(e,t,n)=>t in e?jl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Bl=(e,t)=>{for(var n in t||(t={}))Ml.call(t,n)&&Kt(e,n,t[n]);if(Gt)for(var n of Gt(t))El.call(t,n)&&Kt(e,n,t[n]);return e};function Ce(e){return e==null||e===""||Array.isArray(e)&&e.length===0||!(e instanceof Date)&&typeof e=="object"&&Object.keys(e).length===0}function Dt(e){return typeof e=="function"&&"call"in e&&"apply"in e}function U(e){return!Ce(e)}function le(e,t=!0){return e instanceof Object&&e.constructor===Object&&(t||Object.keys(e).length!==0)}function An(e={},t={}){let n=Bl({},e);return Object.keys(t).forEach(o=>{let r=o;le(t[r])&&r in e&&le(e[r])?n[r]=An(e[r],t[r]):n[r]=t[r]}),n}function Dl(...e){return e.reduce((t,n,o)=>o===0?n:An(t,n),{})}function X(e,...t){return Dt(e)?e(...t):e}function Z(e,t=!0){return typeof e=="string"&&(t||e!=="")}function ie(e){return Z(e)?e.replace(/(-|_)/g,"").toLowerCase():e}function Ht(e,t="",n={}){let o=ie(t).split("."),r=o.shift();if(r){if(le(e)){let s=Object.keys(e).find(i=>ie(i)===r)||"";return Ht(X(e[s],n),o.join("."),n)}return}return X(e,n)}function In(e,t=!0){return Array.isArray(e)&&(t||e.length!==0)}function Hl(e){return U(e)&&!isNaN(e)}function Le(e,t){if(t){let n=t.test(e);return t.lastIndex=0,n}return!1}function Rl(...e){return Dl(...e)}function De(e){return e&&e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":").trim()}function Fl(e){return Z(e,!1)?e[0].toUpperCase()+e.slice(1):e}function jn(e){return Z(e)?e.replace(/(_)/g,"-").replace(/[A-Z]/g,(t,n)=>n===0?t:"-"+t.toLowerCase()).toLowerCase():e}function Mn(){let e=new Map;return{on(t,n){let o=e.get(t);return o?o.push(n):o=[n],e.set(t,o),this},off(t,n){let o=e.get(t);return o&&o.splice(o.indexOf(n)>>>0,1),this},emit(t,n){let o=e.get(t);o&&o.forEach(r=>{r(n)})},clear(){e.clear()}}}function He(...e){if(e){let t=[];for(let n=0;n<e.length;n++){let o=e[n];if(!o)continue;let r=typeof o;if(r==="string"||r==="number")t.push(o);else if(r==="object"){let s=Array.isArray(o)?[He(...o)]:Object.entries(o).map(([i,l])=>l?i:void 0);t=s.length?t.concat(s.filter(i=>!!i)):t}}return t.join(" ").trim()}}function Ul(e,t){return e?e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className):!1}function zl(e,t){if(e&&t){let n=o=>{Ul(e,o)||(e.classList?e.classList.add(o):e.className+=" "+o)};[t].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(n))}}function bt(e,t){if(e&&t){let n=o=>{e.classList?e.classList.remove(o):e.className=e.className.replace(new RegExp("(^|\\b)"+o.split(" ").join("|")+"(\\b|$)","gi")," ")};[t].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(n))}}function qt(e){return e?Math.abs(e.scrollLeft):0}function Wl(e,t){return e instanceof HTMLElement?e.offsetWidth:0}function Gl(e){if(e){let t=e.parentNode;return t&&t instanceof ShadowRoot&&t.host&&(t=t.host),t}return null}function Kl(e){return!!(e!==null&&typeof e<"u"&&e.nodeName&&Gl(e))}function Xe(e){return typeof Element<"u"?e instanceof Element:e!==null&&typeof e=="object"&&e.nodeType===1&&typeof e.nodeName=="string"}function it(e,t={}){if(Xe(e)){let n=(o,r)=>{var s,i;let l=(s=e==null?void 0:e.$attrs)!=null&&s[o]?[(i=e==null?void 0:e.$attrs)==null?void 0:i[o]]:[];return[r].flat().reduce((a,u)=>{if(u!=null){let p=typeof u;if(p==="string"||p==="number")a.push(u);else if(p==="object"){let c=Array.isArray(u)?n(o,u):Object.entries(u).map(([m,h])=>o==="style"&&(h||h===0)?`${m.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${h}`:h?m:void 0);a=c.length?a.concat(c.filter(m=>!!m)):a}}return a},l)};Object.entries(t).forEach(([o,r])=>{if(r!=null){let s=o.match(/^on(.+)/);s?e.addEventListener(s[1].toLowerCase(),r):o==="p-bind"||o==="pBind"?it(e,r):(r=o==="class"?[...new Set(n("class",r))].join(" ").trim():o==="style"?n("style",r).join(";").trim():r,(e.$attrs=e.$attrs||{})&&(e.$attrs[o]=r),e.setAttribute(o,r))}})}}function ql(e,t={},...n){{let o=document.createElement(e);return it(o,t),o.append(...n),o}}function Yl(e,t){return Xe(e)?e.matches(t)?e:e.querySelector(t):null}function Jl(e,t){if(Xe(e)){let n=e.getAttribute(t);return isNaN(n)?n==="true"||n==="false"?n==="true":n:+n}}function Yt(e){if(e){let t=e.offsetHeight,n=getComputedStyle(e);return t-=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)+parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),t}return 0}function Ql(e){if(e){let t=e.getBoundingClientRect();return{top:t.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:t.left+(window.pageXOffset||qt(document.documentElement)||qt(document.body)||0)}}return{top:"auto",left:"auto"}}function Zl(e,t){return e?e.offsetHeight:0}function Jt(e){if(e){let t=e.offsetWidth,n=getComputedStyle(e);return t-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)+parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth),t}return 0}function Xl(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function eu(e,t="",n){Xe(e)&&n!==null&&n!==void 0&&e.setAttribute(t,n)}var tt={};function tu(e="pui_id_"){return Object.hasOwn(tt,e)||(tt[e]=0),tt[e]++,`${e}${tt[e]}`}var nu=Object.defineProperty,ou=Object.defineProperties,ru=Object.getOwnPropertyDescriptors,lt=Object.getOwnPropertySymbols,En=Object.prototype.hasOwnProperty,Bn=Object.prototype.propertyIsEnumerable,Qt=(e,t,n)=>t in e?nu(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,oe=(e,t)=>{for(var n in t||(t={}))En.call(t,n)&&Qt(e,n,t[n]);if(lt)for(var n of lt(t))Bn.call(t,n)&&Qt(e,n,t[n]);return e},gt=(e,t)=>ou(e,ru(t)),ce=(e,t)=>{var n={};for(var o in e)En.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&lt)for(var o of lt(e))t.indexOf(o)<0&&Bn.call(e,o)&&(n[o]=e[o]);return n},au=Mn(),K=au,Re=/{([^}]*)}/g,Dn=/(\d+\s+[\+\-\*\/]\s+\d+)/g,Hn=/var\([^)]+\)/g;function Zt(e){return Z(e)?e.replace(/[A-Z]/g,(t,n)=>n===0?t:"."+t.toLowerCase()).toLowerCase():e}function su(e){return le(e)&&e.hasOwnProperty("$value")&&e.hasOwnProperty("$type")?e.$value:e}function iu(e){return e.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function wt(e="",t=""){return iu(`${Z(e,!1)&&Z(t,!1)?`${e}-`:e}${t}`)}function Rn(e="",t=""){return`--${wt(e,t)}`}function lu(e=""){let t=(e.match(/{/g)||[]).length,n=(e.match(/}/g)||[]).length;return(t+n)%2!==0}function Fn(e,t="",n="",o=[],r){if(Z(e)){let s=e.trim();if(lu(s))return;if(Le(s,Re)){let i=s.replaceAll(Re,l=>{let a=l.replace(/{|}/g,"").split(".").filter(u=>!o.some(p=>Le(u,p)));return`var(${Rn(n,jn(a.join("-")))}${U(r)?`, ${r}`:""})`});return Le(i.replace(Hn,"0"),Dn)?`calc(${i})`:i}return s}else if(Hl(e))return e}function uu(e,t,n){Z(t,!1)&&e.push(`${t}:${n};`)}function je(e,t){return e?`${e}{${t}}`:""}function Un(e,t){if(e.indexOf("dt(")===-1)return e;function n(i,l){let a=[],u=0,p="",c=null,m=0;for(;u<=i.length;){let h=i[u];if((h==='"'||h==="'"||h==="`")&&i[u-1]!=="\\"&&(c=c===h?null:h),!c&&(h==="("&&m++,h===")"&&m--,(h===","||u===i.length)&&m===0)){let _=p.trim();_.startsWith("dt(")?a.push(Un(_,l)):a.push(o(_)),p="",u++;continue}h!==void 0&&(p+=h),u++}return a}function o(i){let l=i[0];if((l==='"'||l==="'"||l==="`")&&i[i.length-1]===l)return i.slice(1,-1);let a=Number(i);return isNaN(a)?i:a}let r=[],s=[];for(let i=0;i<e.length;i++)if(e[i]==="d"&&e.slice(i,i+3)==="dt(")s.push(i),i+=2;else if(e[i]===")"&&s.length>0){let l=s.pop();s.length===0&&r.push([l,i])}if(!r.length)return e;for(let i=r.length-1;i>=0;i--){let[l,a]=r[i],u=e.slice(l+3,a),p=n(u,t),c=t(...p);e=e.slice(0,l)+c+e.slice(a+1)}return e}var xe=(...e)=>du(R.getTheme(),...e),du=(e={},t,n,o)=>{if(t){let{variable:r,options:s}=R.defaults||{},{prefix:i,transform:l}=(e==null?void 0:e.options)||s||{},a=Le(t,Re)?t:`{${t}}`;return o==="value"||Ce(o)&&l==="strict"?R.getTokenValue(t):Fn(a,void 0,i,[r.excludedKeyRegex],n)}return""};function nt(e,...t){if(e instanceof Array){let n=e.reduce((o,r,s)=>{var i;return o+r+((i=X(t[s],{dt:xe}))!=null?i:"")},"");return Un(n,xe)}return X(e,{dt:xe})}function cu(e,t={}){let n=R.defaults.variable,{prefix:o=n.prefix,selector:r=n.selector,excludedKeyRegex:s=n.excludedKeyRegex}=t,i=[],l=[],a=[{node:e,path:o}];for(;a.length;){let{node:p,path:c}=a.pop();for(let m in p){let h=p[m],_=su(h),S=Le(m,s)?wt(c):wt(c,jn(m));if(le(_))a.push({node:_,path:S});else{let P=Rn(S),T=Fn(_,S,o,[s]);uu(l,P,T);let N=S;o&&N.startsWith(o+"-")&&(N=N.slice(o.length+1)),i.push(N.replace(/-/g,"."))}}}let u=l.join("");return{value:l,tokens:i,declarations:u,css:je(r,u)}}var ne={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(e){return{type:"class",selector:e,matched:this.pattern.test(e.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(e){return{type:"attr",selector:`:root${e},:host${e}`,matched:this.pattern.test(e.trim())}}},media:{pattern:/^@media (.*)$/,resolve(e){return{type:"media",selector:e,matched:this.pattern.test(e.trim())}}},system:{pattern:/^system$/,resolve(e){return{type:"system",selector:"@media (prefers-color-scheme: dark)",matched:this.pattern.test(e.trim())}}},custom:{resolve(e){return{type:"custom",selector:e,matched:!0}}}},resolve(e){let t=Object.keys(this.rules).filter(n=>n!=="custom").map(n=>this.rules[n]);return[e].flat().map(n=>{var o;return(o=t.map(r=>r.resolve(n)).find(r=>r.matched))!=null?o:this.rules.custom.resolve(n)})}},_toVariables(e,t){return cu(e,{prefix:t==null?void 0:t.prefix})},getCommon({name:e="",theme:t={},params:n,set:o,defaults:r}){var s,i,l,a,u,p,c;let{preset:m,options:h}=t,_,S,P,T,N,E,k;if(U(m)&&h.transform!=="strict"){let{primitive:V,semantic:G,extend:ee}=m,ve=G||{},{colorScheme:he}=ve,$e=ce(ve,["colorScheme"]),be=ee||{},{colorScheme:ke}=be,Se=ce(be,["colorScheme"]),ge=he||{},{dark:Pe}=ge,Ne=ce(ge,["dark"]),we=ke||{},{dark:Ve}=we,Ae=ce(we,["dark"]),de=U(V)?this._toVariables({primitive:V},h):{},ae=U($e)?this._toVariables({semantic:$e},h):{},Te=U(Ne)?this._toVariables({light:Ne},h):{},et=U(Pe)?this._toVariables({dark:Pe},h):{},Ie=U(Se)?this._toVariables({semantic:Se},h):{},Ft=U(Ae)?this._toVariables({light:Ae},h):{},Ut=U(Ve)?this._toVariables({dark:Ve},h):{},[Jn,Qn]=[(s=de.declarations)!=null?s:"",de.tokens],[Zn,Xn]=[(i=ae.declarations)!=null?i:"",ae.tokens||[]],[eo,to]=[(l=Te.declarations)!=null?l:"",Te.tokens||[]],[no,oo]=[(a=et.declarations)!=null?a:"",et.tokens||[]],[ro,ao]=[(u=Ie.declarations)!=null?u:"",Ie.tokens||[]],[so,io]=[(p=Ft.declarations)!=null?p:"",Ft.tokens||[]],[lo,uo]=[(c=Ut.declarations)!=null?c:"",Ut.tokens||[]];_=this.transformCSS(e,Jn,"light","variable",h,o,r),S=Qn;let co=this.transformCSS(e,`${Zn}${eo}`,"light","variable",h,o,r),po=this.transformCSS(e,`${no}`,"dark","variable",h,o,r);P=`${co}${po}`,T=[...new Set([...Xn,...to,...oo])];let fo=this.transformCSS(e,`${ro}${so}color-scheme:light`,"light","variable",h,o,r),mo=this.transformCSS(e,`${lo}color-scheme:dark`,"dark","variable",h,o,r);N=`${fo}${mo}`,E=[...new Set([...ao,...io,...uo])],k=X(m.css,{dt:xe})}return{primitive:{css:_,tokens:S},semantic:{css:P,tokens:T},global:{css:N,tokens:E},style:k}},getPreset({name:e="",preset:t={},options:n,params:o,set:r,defaults:s,selector:i}){var l,a,u;let p,c,m;if(U(t)&&n.transform!=="strict"){let h=e.replace("-directive",""),_=t,{colorScheme:S,extend:P,css:T}=_,N=ce(_,["colorScheme","extend","css"]),E=P||{},{colorScheme:k}=E,V=ce(E,["colorScheme"]),G=S||{},{dark:ee}=G,ve=ce(G,["dark"]),he=k||{},{dark:$e}=he,be=ce(he,["dark"]),ke=U(N)?this._toVariables({[h]:oe(oe({},N),V)},n):{},Se=U(ve)?this._toVariables({[h]:oe(oe({},ve),be)},n):{},ge=U(ee)?this._toVariables({[h]:oe(oe({},ee),$e)},n):{},[Pe,Ne]=[(l=ke.declarations)!=null?l:"",ke.tokens||[]],[we,Ve]=[(a=Se.declarations)!=null?a:"",Se.tokens||[]],[Ae,de]=[(u=ge.declarations)!=null?u:"",ge.tokens||[]],ae=this.transformCSS(h,`${Pe}${we}`,"light","variable",n,r,s,i),Te=this.transformCSS(h,Ae,"dark","variable",n,r,s,i);p=`${ae}${Te}`,c=[...new Set([...Ne,...Ve,...de])],m=X(T,{dt:xe})}return{css:p,tokens:c,style:m}},getPresetC({name:e="",theme:t={},params:n,set:o,defaults:r}){var s;let{preset:i,options:l}=t,a=(s=i==null?void 0:i.components)==null?void 0:s[e];return this.getPreset({name:e,preset:a,options:l,params:n,set:o,defaults:r})},getPresetD({name:e="",theme:t={},params:n,set:o,defaults:r}){var s,i;let l=e.replace("-directive",""),{preset:a,options:u}=t,p=((s=a==null?void 0:a.components)==null?void 0:s[l])||((i=a==null?void 0:a.directives)==null?void 0:i[l]);return this.getPreset({name:l,preset:p,options:u,params:n,set:o,defaults:r})},applyDarkColorScheme(e){return!(e.darkModeSelector==="none"||e.darkModeSelector===!1)},getColorSchemeOption(e,t){var n;return this.applyDarkColorScheme(e)?this.regex.resolve(e.darkModeSelector===!0?t.options.darkModeSelector:(n=e.darkModeSelector)!=null?n:t.options.darkModeSelector):[]},getLayerOrder(e,t={},n,o){let{cssLayer:r}=t;return r?`@layer ${X(r.order||r.name||"primeui",n)}`:""},getCommonStyleSheet({name:e="",theme:t={},params:n,props:o={},set:r,defaults:s}){let i=this.getCommon({name:e,theme:t,params:n,set:r,defaults:s}),l=Object.entries(o).reduce((a,[u,p])=>a.push(`${u}="${p}"`)&&a,[]).join(" ");return Object.entries(i||{}).reduce((a,[u,p])=>{if(le(p)&&Object.hasOwn(p,"css")){let c=De(p.css),m=`${u}-variables`;a.push(`<style type="text/css" data-primevue-style-id="${m}" ${l}>${c}</style>`)}return a},[]).join("")},getStyleSheet({name:e="",theme:t={},params:n,props:o={},set:r,defaults:s}){var i;let l={name:e,theme:t,params:n,set:r,defaults:s},a=(i=e.includes("-directive")?this.getPresetD(l):this.getPresetC(l))==null?void 0:i.css,u=Object.entries(o).reduce((p,[c,m])=>p.push(`${c}="${m}"`)&&p,[]).join(" ");return a?`<style type="text/css" data-primevue-style-id="${e}-variables" ${u}>${De(a)}</style>`:""},createTokens(e={},t,n="",o="",r={}){let s=function(l,a={},u=[]){if(u.includes(this.path))return console.warn(`Circular reference detected at ${this.path}`),{colorScheme:l,path:this.path,paths:a,value:void 0};u.push(this.path),a.name=this.path,a.binding||(a.binding={});let p=this.value;if(typeof this.value=="string"&&Re.test(this.value)){let c=this.value.trim().replace(Re,m=>{var h;let _=m.slice(1,-1),S=this.tokens[_];if(!S)return console.warn(`Token not found for path: ${_}`),"__UNRESOLVED__";let P=S.computed(l,a,u);return Array.isArray(P)&&P.length===2?`light-dark(${P[0].value},${P[1].value})`:(h=P==null?void 0:P.value)!=null?h:"__UNRESOLVED__"});p=Dn.test(c.replace(Hn,"0"))?`calc(${c})`:c}return Ce(a.binding)&&delete a.binding,u.pop(),{colorScheme:l,path:this.path,paths:a,value:p.includes("__UNRESOLVED__")?void 0:p}},i=(l,a,u)=>{Object.entries(l).forEach(([p,c])=>{let m=Le(p,t.variable.excludedKeyRegex)?a:a?`${a}.${Zt(p)}`:Zt(p),h=u?`${u}.${p}`:p;le(c)?i(c,m,h):(r[m]||(r[m]={paths:[],computed:(_,S={},P=[])=>{if(r[m].paths.length===1)return r[m].paths[0].computed(r[m].paths[0].scheme,S.binding,P);if(_&&_!=="none")for(let T=0;T<r[m].paths.length;T++){let N=r[m].paths[T];if(N.scheme===_)return N.computed(_,S.binding,P)}return r[m].paths.map(T=>T.computed(T.scheme,S[T.scheme],P))}}),r[m].paths.push({path:h,value:c,scheme:h.includes("colorScheme.light")?"light":h.includes("colorScheme.dark")?"dark":"none",computed:s,tokens:r}))})};return i(e,n,o),r},getTokenValue(e,t,n){var o;let r=(l=>l.split(".").filter(a=>!Le(a.toLowerCase(),n.variable.excludedKeyRegex)).join("."))(t),s=t.includes("colorScheme.light")?"light":t.includes("colorScheme.dark")?"dark":void 0,i=[(o=e[r])==null?void 0:o.computed(s)].flat().filter(l=>l);return i.length===1?i[0].value:i.reduce((l={},a)=>{let u=a,{colorScheme:p}=u,c=ce(u,["colorScheme"]);return l[p]=c,l},void 0)},getSelectorRule(e,t,n,o){return n==="class"||n==="attr"?je(U(t)?`${e}${t},${e} ${t}`:e,o):je(e,je(t??":root,:host",o))},transformCSS(e,t,n,o,r={},s,i,l){if(U(t)){let{cssLayer:a}=r;if(o!=="style"){let u=this.getColorSchemeOption(r,i);t=n==="dark"?u.reduce((p,{type:c,selector:m})=>(U(m)&&(p+=m.includes("[CSS]")?m.replace("[CSS]",t):this.getSelectorRule(m,l,c,t)),p),""):je(l??":root,:host",t)}if(a){let u={name:"primeui"};le(a)&&(u.name=X(a.name,{name:e,type:o})),U(u.name)&&(t=je(`@layer ${u.name}`,t),s==null||s.layerNames(u.name))}return t}return""}},R={defaults:{variable:{prefix:"p",selector:":root,:host",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(e={}){let{theme:t}=e;t&&(this._theme=gt(oe({},t),{options:oe(oe({},this.defaults.options),t.options)}),this._tokens=ne.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var e;return((e=this.theme)==null?void 0:e.preset)||{}},get options(){var e;return((e=this.theme)==null?void 0:e.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(e){this.update({theme:e}),K.emit("theme:change",e)},getPreset(){return this.preset},setPreset(e){this._theme=gt(oe({},this.theme),{preset:e}),this._tokens=ne.createTokens(e,this.defaults),this.clearLoadedStyleNames(),K.emit("preset:change",e),K.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(e){this._theme=gt(oe({},this.theme),{options:e}),this.clearLoadedStyleNames(),K.emit("options:change",e),K.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(e){this._layerNames.add(e)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(e){return ne.getTokenValue(this.tokens,e,this.defaults)},getCommon(e="",t){return ne.getCommon({name:e,theme:this.theme,params:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(e="",t){let n={name:e,theme:this.theme,params:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return ne.getPresetC(n)},getDirective(e="",t){let n={name:e,theme:this.theme,params:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return ne.getPresetD(n)},getCustomPreset(e="",t,n,o){let r={name:e,preset:t,options:this.options,selector:n,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return ne.getPreset(r)},getLayerOrderCSS(e=""){return ne.getLayerOrder(e,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(e="",t,n="style",o){return ne.transformCSS(e,t,o,n,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(e="",t,n={}){return ne.getCommonStyleSheet({name:e,theme:this.theme,params:t,props:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(e,t,n={}){return ne.getStyleSheet({name:e,theme:this.theme,params:t,props:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(e){this._loadingStyles.add(e)},onStyleUpdated(e){this._loadingStyles.add(e)},onStyleLoaded(e,{name:t}){this._loadingStyles.size&&(this._loadingStyles.delete(t),K.emit(`theme:${t}:load`,e),!this._loadingStyles.size&&K.emit("theme:load"))}},q={STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter"},pu=`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    /* Non vue overlay animations */
    .p-connected-overlay {
        opacity: 0;
        transform: scaleY(0.8);
        transition:
            transform 0.12s cubic-bezier(0, 0, 0.2, 1),
            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-visible {
        opacity: 1;
        transform: scaleY(1);
    }

    .p-connected-overlay-hidden {
        opacity: 0;
        transform: scaleY(1);
        transition: opacity 0.1s linear;
    }

    /* Vue based overlay animations */
    .p-connected-overlay-enter-from {
        opacity: 0;
        transform: scaleY(0.8);
    }

    .p-connected-overlay-leave-to {
        opacity: 0;
    }

    .p-connected-overlay-enter-active {
        transition:
            transform 0.12s cubic-bezier(0, 0, 0.2, 1),
            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-leave-active {
        transition: opacity 0.1s linear;
    }

    /* Toggleable Content */
    .p-toggleable-content-enter-from,
    .p-toggleable-content-leave-to {
        max-height: 0;
    }

    .p-toggleable-content-enter-to,
    .p-toggleable-content-leave-from {
        max-height: 1000px;
    }

    .p-toggleable-content-leave-active {
        overflow: hidden;
        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
    }

    .p-toggleable-content-enter-active {
        overflow: hidden;
        transition: max-height 1s ease-in-out;
    }

    .p-disabled,
    .p-disabled * {
        cursor: default;
        pointer-events: none;
        user-select: none;
    }

    .p-disabled,
    .p-component:disabled {
        opacity: dt('disabled.opacity');
    }

    .pi {
        font-size: dt('icon.size');
    }

    .p-icon {
        width: dt('icon.size');
        height: dt('icon.size');
    }

    .p-overlay-mask {
        background: dt('mask.background');
        color: dt('mask.color');
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-overlay-mask-enter {
        animation: p-overlay-mask-enter-animation dt('mask.transition.duration') forwards;
    }

    .p-overlay-mask-leave {
        animation: p-overlay-mask-leave-animation dt('mask.transition.duration') forwards;
    }

    @keyframes p-overlay-mask-enter-animation {
        from {
            background: transparent;
        }
        to {
            background: dt('mask.background');
        }
    }
    @keyframes p-overlay-mask-leave-animation {
        from {
            background: dt('mask.background');
        }
        to {
            background: transparent;
        }
    }
`;function Fe(e){"@babel/helpers - typeof";return Fe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Fe(e)}function Xt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function en(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Xt(Object(n),!0).forEach(function(o){fu(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xt(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function fu(e,t,n){return(t=mu(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function mu(e){var t=vu(e,"string");return Fe(t)=="symbol"?t:t+""}function vu(e,t){if(Fe(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t);if(Fe(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function hu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;zt()&&zt().components?fe(e):t?e():At(e)}var bu=0;function gu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=M(!1),o=M(e),r=M(null),s=Xl()?window.document:void 0,i=t.document,l=i===void 0?s:i,a=t.immediate,u=a===void 0?!0:a,p=t.manual,c=p===void 0?!1:p,m=t.name,h=m===void 0?"style_".concat(++bu):m,_=t.id,S=_===void 0?void 0:_,P=t.media,T=P===void 0?void 0:P,N=t.nonce,E=N===void 0?void 0:N,k=t.first,V=k===void 0?!1:k,G=t.onMounted,ee=G===void 0?void 0:G,ve=t.onUpdated,he=ve===void 0?void 0:ve,$e=t.onLoad,be=$e===void 0?void 0:$e,ke=t.props,Se=ke===void 0?{}:ke,ge=function(){},Pe=function(Ve){var Ae=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(l){var de=en(en({},Se),Ae),ae=de.name||h,Te=de.id||S,et=de.nonce||E;r.value=l.querySelector('style[data-primevue-style-id="'.concat(ae,'"]'))||l.getElementById(Te)||l.createElement("style"),r.value.isConnected||(o.value=Ve||e,it(r.value,{type:"text/css",id:Te,media:T,nonce:et}),V?l.head.prepend(r.value):l.head.appendChild(r.value),eu(r.value,"data-primevue-style-id",ae),it(r.value,de),r.value.onload=function(Ie){return be==null?void 0:be(Ie,{name:ae})},ee==null||ee(ae)),!n.value&&(ge=Q(o,function(Ie){r.value.textContent=Ie,he==null||he(ae)},{immediate:!0}),n.value=!0)}},Ne=function(){!l||!n.value||(ge(),Kl(r.value)&&l.head.removeChild(r.value),n.value=!1,r.value=null)};return u&&!c&&hu(Pe),{id:S,name:h,el:r,css:o,unload:Ne,load:Pe,isLoaded:Pn(n)}}function Ue(e){"@babel/helpers - typeof";return Ue=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ue(e)}var tn,nn,on,rn;function an(e,t){return ku(e)||$u(e,t)||_u(e,t)||yu()}function yu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _u(e,t){if(e){if(typeof e=="string")return sn(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?sn(e,t):void 0}}function sn(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function $u(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var o,r,s,i,l=[],a=!0,u=!1;try{if(s=(n=n.call(e)).next,t!==0)for(;!(a=(o=s.call(n)).done)&&(l.push(o.value),l.length!==t);a=!0);}catch(p){u=!0,r=p}finally{try{if(!a&&n.return!=null&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw r}}return l}}function ku(e){if(Array.isArray(e))return e}function ln(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function yt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ln(Object(n),!0).forEach(function(o){Su(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ln(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function Su(e,t,n){return(t=Pu(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Pu(e){var t=wu(e,"string");return Ue(t)=="symbol"?t:t+""}function wu(e,t){if(Ue(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t);if(Ue(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ot(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var Tu=function(t){var n=t.dt;return`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    opacity: 0;
    overflow: hidden;
    padding: 0;
    pointer-events: none;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: `.concat(n("scrollbar.width"),`;
}
`)},Lu={},xu={},z={name:"base",css:Tu,style:pu,classes:Lu,inlineStyles:xu,load:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(s){return s},r=o(nt(tn||(tn=ot(["",""])),t));return U(r)?gu(De(r),yt({name:this.name},n)):{}},loadCSS:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.load(this.css,t)},loadStyle:function(){var t=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return this.load(this.style,n,function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return R.transformCSS(n.name||t.name,"".concat(r).concat(nt(nn||(nn=ot(["",""])),o)))})},getCommonTheme:function(t){return R.getCommon(this.name,t)},getComponentTheme:function(t){return R.getComponent(this.name,t)},getDirectiveTheme:function(t){return R.getDirective(this.name,t)},getPresetTheme:function(t,n,o){return R.getCustomPreset(this.name,t,n,o)},getLayerOrderThemeCSS:function(){return R.getLayerOrderCSS(this.name)},getStyleSheet:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.css){var o=X(this.css,{dt:xe})||"",r=De(nt(on||(on=ot(["","",""])),o,t)),s=Object.entries(n).reduce(function(i,l){var a=an(l,2),u=a[0],p=a[1];return i.push("".concat(u,'="').concat(p,'"'))&&i},[]).join(" ");return U(r)?'<style type="text/css" data-primevue-style-id="'.concat(this.name,'" ').concat(s,">").concat(r,"</style>"):""}return""},getCommonThemeStyleSheet:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return R.getCommonStyleSheet(this.name,t,n)},getThemeStyleSheet:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=[R.getStyleSheet(this.name,t,n)];if(this.style){var r=this.name==="base"?"global-style":"".concat(this.name,"-style"),s=nt(rn||(rn=ot(["",""])),X(this.style,{dt:xe})),i=De(R.transformCSS(r,s)),l=Object.entries(n).reduce(function(a,u){var p=an(u,2),c=p[0],m=p[1];return a.push("".concat(c,'="').concat(m,'"'))&&a},[]).join(" ");U(i)&&o.push('<style type="text/css" data-primevue-style-id="'.concat(r,'" ').concat(l,">").concat(i,"</style>"))}return o.join("")},extend:function(t){return yt(yt({},this),{},{css:void 0,style:void 0},t)}},_e=Mn();function ze(e){"@babel/helpers - typeof";return ze=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ze(e)}function un(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function rt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?un(Object(n),!0).forEach(function(o){Ou(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):un(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function Ou(e,t,n){return(t=Cu(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Cu(e){var t=Nu(e,"string");return ze(t)=="symbol"?t:t+""}function Nu(e,t){if(ze(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t);if(ze(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Vu={ripple:!1,inputStyle:null,inputVariant:null,locale:{startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",completed:"Completed",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",today:"Today",weekHeader:"Wk",firstDayOfWeek:0,showMonthAfterYear:!1,dateFormat:"mm/dd/yy",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyFilterMessage:"No results found",searchMessage:"{0} results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",fileChosenMessage:"{0} files",noFileChosenMessage:"No file chosen",emptyMessage:"No available options",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"Page {page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List"}},filterMatchModeOptions:{text:[q.STARTS_WITH,q.CONTAINS,q.NOT_CONTAINS,q.ENDS_WITH,q.EQUALS,q.NOT_EQUALS],numeric:[q.EQUALS,q.NOT_EQUALS,q.LESS_THAN,q.LESS_THAN_OR_EQUAL_TO,q.GREATER_THAN,q.GREATER_THAN_OR_EQUAL_TO],date:[q.DATE_IS,q.DATE_IS_NOT,q.DATE_BEFORE,q.DATE_AFTER]},zIndex:{modal:1100,overlay:1e3,menu:1e3,tooltip:1100},theme:void 0,unstyled:!1,pt:void 0,ptOptions:{mergeSections:!0,mergeProps:!1},csp:{nonce:void 0}},Au=Symbol();function Iu(e,t){var n={config:xo(t)};return e.config.globalProperties.$primevue=n,e.provide(Au,n),ju(),Mu(e,n),n}var Me=[];function ju(){K.clear(),Me.forEach(function(e){return e==null?void 0:e()}),Me=[]}function Mu(e,t){var n=M(!1),o=function(){var u;if(((u=t.config)===null||u===void 0?void 0:u.theme)!=="none"&&!R.isStyleNameLoaded("common")){var p,c,m=((p=z.getCommonTheme)===null||p===void 0?void 0:p.call(z))||{},h=m.primitive,_=m.semantic,S=m.global,P=m.style,T={nonce:(c=t.config)===null||c===void 0||(c=c.csp)===null||c===void 0?void 0:c.nonce};z.load(h==null?void 0:h.css,rt({name:"primitive-variables"},T)),z.load(_==null?void 0:_.css,rt({name:"semantic-variables"},T)),z.load(S==null?void 0:S.css,rt({name:"global-variables"},T)),z.loadStyle(rt({name:"global-style"},T),P),R.setLoadedStyleName("common")}};K.on("theme:change",function(a){n.value||(e.config.globalProperties.$primevue.config.theme=a,n.value=!0)});var r=Q(t.config,function(a,u){_e.emit("config:change",{newValue:a,oldValue:u})},{immediate:!0,deep:!0}),s=Q(function(){return t.config.ripple},function(a,u){_e.emit("config:ripple:change",{newValue:a,oldValue:u})},{immediate:!0,deep:!0}),i=Q(function(){return t.config.theme},function(a,u){n.value||R.setTheme(a),t.config.unstyled||o(),n.value=!1,_e.emit("config:theme:change",{newValue:a,oldValue:u})},{immediate:!0,deep:!1}),l=Q(function(){return t.config.unstyled},function(a,u){!a&&t.config.theme&&o(),_e.emit("config:unstyled:change",{newValue:a,oldValue:u})},{immediate:!0,deep:!0});Me.push(r),Me.push(s),Me.push(i),Me.push(l)}var Eu={install:function(t,n){var o=Rl(Vu,n);Iu(t,o)}},ye={_loadedStyleNames:new Set,getLoadedStyleNames:function(){return this._loadedStyleNames},isStyleNameLoaded:function(t){return this._loadedStyleNames.has(t)},setLoadedStyleName:function(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName:function(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames:function(){this._loadedStyleNames.clear()}};function Bu(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"pc",t=Oo();return"".concat(e).concat(t.replace("v-","").replaceAll("-","_"))}var dn=z.extend({name:"common"});function We(e){"@babel/helpers - typeof";return We=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},We(e)}function Du(e){return Gn(e)||Hu(e)||Wn(e)||zn()}function Hu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ee(e,t){return Gn(e)||Ru(e,t)||Wn(e,t)||zn()}function zn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Wn(e,t){if(e){if(typeof e=="string")return cn(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?cn(e,t):void 0}}function cn(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function Ru(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var o,r,s,i,l=[],a=!0,u=!1;try{if(s=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;a=!1}else for(;!(a=(o=s.call(n)).done)&&(l.push(o.value),l.length!==t);a=!0);}catch(p){u=!0,r=p}finally{try{if(!a&&n.return!=null&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw r}}return l}}function Gn(e){if(Array.isArray(e))return e}function pn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?pn(Object(n),!0).forEach(function(o){Be(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pn(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function Be(e,t,n){return(t=Fu(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Fu(e){var t=Uu(e,"string");return We(t)=="symbol"?t:t+""}function Uu(e,t){if(We(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t);if(We(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Rt={name:"BaseComponent",props:{pt:{type:Object,default:void 0},ptOptions:{type:Object,default:void 0},unstyled:{type:Boolean,default:void 0},dt:{type:Object,default:void 0}},inject:{$parentInstance:{default:void 0}},watch:{isUnstyled:{immediate:!0,handler:function(t){K.off("theme:change",this._loadCoreStyles),t||(this._loadCoreStyles(),this._themeChangeListener(this._loadCoreStyles))}},dt:{immediate:!0,handler:function(t,n){var o=this;K.off("theme:change",this._themeScopedListener),t?(this._loadScopedThemeStyles(t),this._themeScopedListener=function(){return o._loadScopedThemeStyles(t)},this._themeChangeListener(this._themeScopedListener)):this._unloadScopedThemeStyles()}}},scopedStyleEl:void 0,rootEl:void 0,uid:void 0,$attrSelector:void 0,beforeCreate:function(){var t,n,o,r,s,i,l,a,u,p,c,m=(t=this.pt)===null||t===void 0?void 0:t._usept,h=m?(n=this.pt)===null||n===void 0||(n=n.originalValue)===null||n===void 0?void 0:n[this.$.type.name]:void 0,_=m?(o=this.pt)===null||o===void 0||(o=o.value)===null||o===void 0?void 0:o[this.$.type.name]:this.pt;(r=_||h)===null||r===void 0||(r=r.hooks)===null||r===void 0||(s=r.onBeforeCreate)===null||s===void 0||s.call(r);var S=(i=this.$primevueConfig)===null||i===void 0||(i=i.pt)===null||i===void 0?void 0:i._usept,P=S?(l=this.$primevue)===null||l===void 0||(l=l.config)===null||l===void 0||(l=l.pt)===null||l===void 0?void 0:l.originalValue:void 0,T=S?(a=this.$primevue)===null||a===void 0||(a=a.config)===null||a===void 0||(a=a.pt)===null||a===void 0?void 0:a.value:(u=this.$primevue)===null||u===void 0||(u=u.config)===null||u===void 0?void 0:u.pt;(p=T||P)===null||p===void 0||(p=p[this.$.type.name])===null||p===void 0||(p=p.hooks)===null||p===void 0||(c=p.onBeforeCreate)===null||c===void 0||c.call(p),this.$attrSelector=Bu(),this.uid=this.$attrs.id||this.$attrSelector.replace("pc","pv_id_")},created:function(){this._hook("onCreated")},beforeMount:function(){var t;this.rootEl=Yl(Xe(this.$el)?this.$el:(t=this.$el)===null||t===void 0?void 0:t.parentElement,"[".concat(this.$attrSelector,"]")),this.rootEl&&(this.rootEl.$pc=j({name:this.$.type.name,attrSelector:this.$attrSelector},this.$params)),this._loadStyles(),this._hook("onBeforeMount")},mounted:function(){this._hook("onMounted")},beforeUpdate:function(){this._hook("onBeforeUpdate")},updated:function(){this._hook("onUpdated")},beforeUnmount:function(){this._hook("onBeforeUnmount")},unmounted:function(){this._removeThemeListeners(),this._unloadScopedThemeStyles(),this._hook("onUnmounted")},methods:{_hook:function(t){if(!this.$options.hostName){var n=this._usePT(this._getPT(this.pt,this.$.type.name),this._getOptionValue,"hooks.".concat(t)),o=this._useDefaultPT(this._getOptionValue,"hooks.".concat(t));n==null||n(),o==null||o()}},_mergeProps:function(t){for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return Dt(t)?t.apply(void 0,o):W.apply(void 0,o)},_load:function(){ye.isStyleNameLoaded("base")||(z.loadCSS(this.$styleOptions),this._loadGlobalStyles(),ye.setLoadedStyleName("base")),this._loadThemeStyles()},_loadStyles:function(){this._load(),this._themeChangeListener(this._load)},_loadCoreStyles:function(){var t,n;!ye.isStyleNameLoaded((t=this.$style)===null||t===void 0?void 0:t.name)&&(n=this.$style)!==null&&n!==void 0&&n.name&&(dn.loadCSS(this.$styleOptions),this.$options.style&&this.$style.loadCSS(this.$styleOptions),ye.setLoadedStyleName(this.$style.name))},_loadGlobalStyles:function(){var t=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);U(t)&&z.load(t,j({name:"global"},this.$styleOptions))},_loadThemeStyles:function(){var t,n;if(!(this.isUnstyled||this.$theme==="none")){if(!R.isStyleNameLoaded("common")){var o,r,s=((o=this.$style)===null||o===void 0||(r=o.getCommonTheme)===null||r===void 0?void 0:r.call(o))||{},i=s.primitive,l=s.semantic,a=s.global,u=s.style;z.load(i==null?void 0:i.css,j({name:"primitive-variables"},this.$styleOptions)),z.load(l==null?void 0:l.css,j({name:"semantic-variables"},this.$styleOptions)),z.load(a==null?void 0:a.css,j({name:"global-variables"},this.$styleOptions)),z.loadStyle(j({name:"global-style"},this.$styleOptions),u),R.setLoadedStyleName("common")}if(!R.isStyleNameLoaded((t=this.$style)===null||t===void 0?void 0:t.name)&&(n=this.$style)!==null&&n!==void 0&&n.name){var p,c,m,h,_=((p=this.$style)===null||p===void 0||(c=p.getComponentTheme)===null||c===void 0?void 0:c.call(p))||{},S=_.css,P=_.style;(m=this.$style)===null||m===void 0||m.load(S,j({name:"".concat(this.$style.name,"-variables")},this.$styleOptions)),(h=this.$style)===null||h===void 0||h.loadStyle(j({name:"".concat(this.$style.name,"-style")},this.$styleOptions),P),R.setLoadedStyleName(this.$style.name)}if(!R.isStyleNameLoaded("layer-order")){var T,N,E=(T=this.$style)===null||T===void 0||(N=T.getLayerOrderThemeCSS)===null||N===void 0?void 0:N.call(T);z.load(E,j({name:"layer-order",first:!0},this.$styleOptions)),R.setLoadedStyleName("layer-order")}}},_loadScopedThemeStyles:function(t){var n,o,r,s=((n=this.$style)===null||n===void 0||(o=n.getPresetTheme)===null||o===void 0?void 0:o.call(n,t,"[".concat(this.$attrSelector,"]")))||{},i=s.css,l=(r=this.$style)===null||r===void 0?void 0:r.load(i,j({name:"".concat(this.$attrSelector,"-").concat(this.$style.name)},this.$styleOptions));this.scopedStyleEl=l.el},_unloadScopedThemeStyles:function(){var t;(t=this.scopedStyleEl)===null||t===void 0||(t=t.value)===null||t===void 0||t.remove()},_themeChangeListener:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){};ye.clearLoadedStyleNames(),K.on("theme:change",t)},_removeThemeListeners:function(){K.off("theme:change",this._loadCoreStyles),K.off("theme:change",this._load),K.off("theme:change",this._themeScopedListener)},_getHostInstance:function(t){return t?this.$options.hostName?t.$.type.name===this.$options.hostName?t:this._getHostInstance(t.$parentInstance):t.$parentInstance:void 0},_getPropValue:function(t){var n;return this[t]||((n=this._getHostInstance(this))===null||n===void 0?void 0:n[t])},_getOptionValue:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return Ht(t,n,o)},_getPTValue:function(){var t,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,i=/./g.test(o)&&!!r[o.split(".")[0]],l=this._getPropValue("ptOptions")||((t=this.$primevueConfig)===null||t===void 0?void 0:t.ptOptions)||{},a=l.mergeSections,u=a===void 0?!0:a,p=l.mergeProps,c=p===void 0?!1:p,m=s?i?this._useGlobalPT(this._getPTClassValue,o,r):this._useDefaultPT(this._getPTClassValue,o,r):void 0,h=i?void 0:this._getPTSelf(n,this._getPTClassValue,o,j(j({},r),{},{global:m||{}})),_=this._getPTDatasets(o);return u||!u&&h?c?this._mergeProps(c,m,h,_):j(j(j({},m),h),_):j(j({},h),_)},_getPTSelf:function(){for(var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return W(this._usePT.apply(this,[this._getPT(t,this.$name)].concat(o)),this._usePT.apply(this,[this.$_attrsPT].concat(o)))},_getPTDatasets:function(){var t,n,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",r="data-pc-",s=o==="root"&&U((t=this.pt)===null||t===void 0?void 0:t["data-pc-section"]);return o!=="transition"&&j(j({},o==="root"&&j(j(Be({},"".concat(r,"name"),ie(s?(n=this.pt)===null||n===void 0?void 0:n["data-pc-section"]:this.$.type.name)),s&&Be({},"".concat(r,"extend"),ie(this.$.type.name))),{},Be({},"".concat(this.$attrSelector),""))),{},Be({},"".concat(r,"section"),ie(o)))},_getPTClassValue:function(){var t=this._getOptionValue.apply(this,arguments);return Z(t)||In(t)?{class:t}:t},_getPT:function(t){var n=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,s=function(l){var a,u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,p=r?r(l):l,c=ie(o),m=ie(n.$name);return(a=u?c!==m?p==null?void 0:p[c]:void 0:p==null?void 0:p[c])!==null&&a!==void 0?a:p};return t!=null&&t.hasOwnProperty("_usept")?{_usept:t._usept,originalValue:s(t.originalValue),value:s(t.value)}:s(t,!0)},_usePT:function(t,n,o,r){var s=function(S){return n(S,o,r)};if(t!=null&&t.hasOwnProperty("_usept")){var i,l=t._usept||((i=this.$primevueConfig)===null||i===void 0?void 0:i.ptOptions)||{},a=l.mergeSections,u=a===void 0?!0:a,p=l.mergeProps,c=p===void 0?!1:p,m=s(t.originalValue),h=s(t.value);return m===void 0&&h===void 0?void 0:Z(h)?h:Z(m)?m:u||!u&&h?c?this._mergeProps(c,m,h):j(j({},m),h):h}return s(t)},_useGlobalPT:function(t,n,o){return this._usePT(this.globalPT,t,n,o)},_useDefaultPT:function(t,n,o){return this._usePT(this.defaultPT,t,n,o)},ptm:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this._getPTValue(this.pt,t,j(j({},this.$params),n))},ptmi:function(){var t,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=W(this.$_attrsWithoutPT,this.ptm(n,o));return r!=null&&r.hasOwnProperty("id")&&((t=r.id)!==null&&t!==void 0||(r.id=this.$id)),r},ptmo:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this._getPTValue(t,n,j({instance:this},o),!1)},cx:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.isUnstyled?void 0:this._getOptionValue(this.$style.classes,t,j(j({},this.$params),n))},sx:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(n){var r=this._getOptionValue(this.$style.inlineStyles,t,j(j({},this.$params),o)),s=this._getOptionValue(dn.inlineStyles,t,j(j({},this.$params),o));return[s,r]}}},computed:{globalPT:function(){var t,n=this;return this._getPT((t=this.$primevueConfig)===null||t===void 0?void 0:t.pt,void 0,function(o){return X(o,{instance:n})})},defaultPT:function(){var t,n=this;return this._getPT((t=this.$primevueConfig)===null||t===void 0?void 0:t.pt,void 0,function(o){return n._getOptionValue(o,n.$name,j({},n.$params))||X(o,j({},n.$params))})},isUnstyled:function(){var t;return this.unstyled!==void 0?this.unstyled:(t=this.$primevueConfig)===null||t===void 0?void 0:t.unstyled},$id:function(){return this.$attrs.id||this.uid},$inProps:function(){var t,n=Object.keys(((t=this.$.vnode)===null||t===void 0?void 0:t.props)||{});return Object.fromEntries(Object.entries(this.$props).filter(function(o){var r=Ee(o,1),s=r[0];return n==null?void 0:n.includes(s)}))},$theme:function(){var t;return(t=this.$primevueConfig)===null||t===void 0?void 0:t.theme},$style:function(){return j(j({classes:void 0,inlineStyles:void 0,load:function(){},loadCSS:function(){},loadStyle:function(){}},(this._getHostInstance(this)||{}).$style),this.$options.style)},$styleOptions:function(){var t;return{nonce:(t=this.$primevueConfig)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce}},$primevueConfig:function(){var t;return(t=this.$primevue)===null||t===void 0?void 0:t.config},$name:function(){return this.$options.hostName||this.$.type.name},$params:function(){var t=this._getHostInstance(this)||this.$parent;return{instance:this,props:this.$props,state:this.$data,attrs:this.$attrs,parent:{instance:t,props:t==null?void 0:t.$props,state:t==null?void 0:t.$data,attrs:t==null?void 0:t.$attrs}}},$_attrsPT:function(){return Object.entries(this.$attrs||{}).filter(function(t){var n=Ee(t,1),o=n[0];return o==null?void 0:o.startsWith("pt:")}).reduce(function(t,n){var o=Ee(n,2),r=o[0],s=o[1],i=r.split(":"),l=Du(i),a=l.slice(1);return a==null||a.reduce(function(u,p,c,m){return!u[p]&&(u[p]=c===m.length-1?s:{}),u[p]},t),t},{})},$_attrsWithoutPT:function(){return Object.entries(this.$attrs||{}).filter(function(t){var n=Ee(t,1),o=n[0];return!(o!=null&&o.startsWith("pt:"))}).reduce(function(t,n){var o=Ee(n,2),r=o[0],s=o[1];return t[r]=s,t},{})}}},zu=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
    flex-shrink: 0;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Wu=z.extend({name:"baseicon",css:zu});function Ge(e){"@babel/helpers - typeof";return Ge=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ge(e)}function fn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function mn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?fn(Object(n),!0).forEach(function(o){Gu(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fn(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function Gu(e,t,n){return(t=Ku(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ku(e){var t=qu(e,"string");return Ge(t)=="symbol"?t:t+""}function qu(e,t){if(Ge(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t);if(Ge(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Yu={name:"BaseIcon",extends:Rt,props:{label:{type:String,default:void 0},spin:{type:Boolean,default:!1}},style:Wu,provide:function(){return{$pcIcon:this,$parentInstance:this}},methods:{pti:function(){var t=Ce(this.label);return mn(mn({},!this.isUnstyled&&{class:["p-icon",{"p-icon-spin":this.spin}]}),{},{role:t?void 0:"img","aria-label":t?void 0:this.label,"aria-hidden":t})}}},Kn={name:"SpinnerIcon",extends:Yu};function Ju(e){return ed(e)||Xu(e)||Zu(e)||Qu()}function Qu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Zu(e,t){if(e){if(typeof e=="string")return Tt(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Tt(e,t):void 0}}function Xu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ed(e){if(Array.isArray(e))return Tt(e)}function Tt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function td(e,t,n,o,r,s){return d(),v("svg",W({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),Ju(t[0]||(t[0]=[g("path",{d:"M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",fill:"currentColor"},null,-1)])),16)}Kn.render=td;var nd=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`,od={root:function(t){var n=t.props,o=t.instance;return["p-badge p-component",{"p-badge-circle":U(n.value)&&String(n.value).length===1,"p-badge-dot":Ce(n.value)&&!o.$slots.default,"p-badge-sm":n.size==="small","p-badge-lg":n.size==="large","p-badge-xl":n.size==="xlarge","p-badge-info":n.severity==="info","p-badge-success":n.severity==="success","p-badge-warn":n.severity==="warn","p-badge-danger":n.severity==="danger","p-badge-secondary":n.severity==="secondary","p-badge-contrast":n.severity==="contrast"}]}},rd=z.extend({name:"badge",style:nd,classes:od}),ad={name:"BaseBadge",extends:Rt,props:{value:{type:[String,Number],default:null},severity:{type:String,default:null},size:{type:String,default:null}},style:rd,provide:function(){return{$pcBadge:this,$parentInstance:this}}};function Ke(e){"@babel/helpers - typeof";return Ke=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ke(e)}function vn(e,t,n){return(t=sd(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function sd(e){var t=id(e,"string");return Ke(t)=="symbol"?t:t+""}function id(e,t){if(Ke(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t);if(Ke(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var qn={name:"Badge",extends:ad,inheritAttrs:!1,computed:{dataP:function(){return He(vn(vn({circle:this.value!=null&&String(this.value).length===1,empty:this.value==null&&!this.$slots.default},this.severity,this.severity),this.size,this.size))}}},ld=["data-p"];function ud(e,t,n,o,r,s){return d(),v("span",W({class:e.cx("root"),"data-p":s.dataP},e.ptmi("root")),[b(e.$slots,"default",{},function(){return[ue(D(e.value),1)]})],16,ld)}qn.render=ud;function qe(e){"@babel/helpers - typeof";return qe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},qe(e)}function hn(e,t){return fd(e)||pd(e,t)||cd(e,t)||dd()}function dd(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cd(e,t){if(e){if(typeof e=="string")return bn(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?bn(e,t):void 0}}function bn(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function pd(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var o,r,s,i,l=[],a=!0,u=!1;try{if(s=(n=n.call(e)).next,t!==0)for(;!(a=(o=s.call(n)).done)&&(l.push(o.value),l.length!==t);a=!0);}catch(p){u=!0,r=p}finally{try{if(!a&&n.return!=null&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw r}}return l}}function fd(e){if(Array.isArray(e))return e}function gn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?gn(Object(n),!0).forEach(function(o){Lt(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gn(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function Lt(e,t,n){return(t=md(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function md(e){var t=vd(e,"string");return qe(t)=="symbol"?t:t+""}function vd(e,t){if(qe(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t);if(qe(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var A={_getMeta:function(){return[le(arguments.length<=0?void 0:arguments[0])||arguments.length<=0?void 0:arguments[0],X(le(arguments.length<=0?void 0:arguments[0])?arguments.length<=0?void 0:arguments[0]:arguments.length<=1?void 0:arguments[1])]},_getConfig:function(t,n){var o,r,s;return(o=(t==null||(r=t.instance)===null||r===void 0?void 0:r.$primevue)||(n==null||(s=n.ctx)===null||s===void 0||(s=s.appContext)===null||s===void 0||(s=s.config)===null||s===void 0||(s=s.globalProperties)===null||s===void 0?void 0:s.$primevue))===null||o===void 0?void 0:o.config},_getOptionValue:Ht,_getPTValue:function(){var t,n,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,a=function(){var N=A._getOptionValue.apply(A,arguments);return Z(N)||In(N)?{class:N}:N},u=((t=o.binding)===null||t===void 0||(t=t.value)===null||t===void 0?void 0:t.ptOptions)||((n=o.$primevueConfig)===null||n===void 0?void 0:n.ptOptions)||{},p=u.mergeSections,c=p===void 0?!0:p,m=u.mergeProps,h=m===void 0?!1:m,_=l?A._useDefaultPT(o,o.defaultPT(),a,s,i):void 0,S=A._usePT(o,A._getPT(r,o.$name),a,s,B(B({},i),{},{global:_||{}})),P=A._getPTDatasets(o,s);return c||!c&&S?h?A._mergeProps(o,h,_,S,P):B(B(B({},_),S),P):B(B({},S),P)},_getPTDatasets:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o="data-pc-";return B(B({},n==="root"&&Lt({},"".concat(o,"name"),ie(t.$name))),{},Lt({},"".concat(o,"section"),ie(n)))},_getPT:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2?arguments[2]:void 0,r=function(i){var l,a=o?o(i):i,u=ie(n);return(l=a==null?void 0:a[u])!==null&&l!==void 0?l:a};return t&&Object.hasOwn(t,"_usept")?{_usept:t._usept,originalValue:r(t.originalValue),value:r(t.value)}:r(t)},_usePT:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,s=arguments.length>4?arguments[4]:void 0,i=function(P){return o(P,r,s)};if(n&&Object.hasOwn(n,"_usept")){var l,a=n._usept||((l=t.$primevueConfig)===null||l===void 0?void 0:l.ptOptions)||{},u=a.mergeSections,p=u===void 0?!0:u,c=a.mergeProps,m=c===void 0?!1:c,h=i(n.originalValue),_=i(n.value);return h===void 0&&_===void 0?void 0:Z(_)?_:Z(h)?h:p||!p&&_?m?A._mergeProps(t,m,h,_):B(B({},h),_):_}return i(n)},_useDefaultPT:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,s=arguments.length>4?arguments[4]:void 0;return A._usePT(t,n,o,r,s)},_loadStyles:function(){var t,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,s=A._getConfig(o,r),i={nonce:s==null||(t=s.csp)===null||t===void 0?void 0:t.nonce};A._loadCoreStyles(n,i),A._loadThemeStyles(n,i),A._loadScopedThemeStyles(n,i),A._removeThemeListeners(n),n.$loadStyles=function(){return A._loadThemeStyles(n,i)},A._themeChangeListener(n.$loadStyles)},_loadCoreStyles:function(){var t,n,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;if(!ye.isStyleNameLoaded((t=o.$style)===null||t===void 0?void 0:t.name)&&(n=o.$style)!==null&&n!==void 0&&n.name){var s;z.loadCSS(r),(s=o.$style)===null||s===void 0||s.loadCSS(r),ye.setLoadedStyleName(o.$style.name)}},_loadThemeStyles:function(){var t,n,o,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1?arguments[1]:void 0;if(!(r!=null&&r.isUnstyled()||(r==null||(t=r.theme)===null||t===void 0?void 0:t.call(r))==="none")){if(!R.isStyleNameLoaded("common")){var i,l,a=((i=r.$style)===null||i===void 0||(l=i.getCommonTheme)===null||l===void 0?void 0:l.call(i))||{},u=a.primitive,p=a.semantic,c=a.global,m=a.style;z.load(u==null?void 0:u.css,B({name:"primitive-variables"},s)),z.load(p==null?void 0:p.css,B({name:"semantic-variables"},s)),z.load(c==null?void 0:c.css,B({name:"global-variables"},s)),z.loadStyle(B({name:"global-style"},s),m),R.setLoadedStyleName("common")}if(!R.isStyleNameLoaded((n=r.$style)===null||n===void 0?void 0:n.name)&&(o=r.$style)!==null&&o!==void 0&&o.name){var h,_,S,P,T=((h=r.$style)===null||h===void 0||(_=h.getDirectiveTheme)===null||_===void 0?void 0:_.call(h))||{},N=T.css,E=T.style;(S=r.$style)===null||S===void 0||S.load(N,B({name:"".concat(r.$style.name,"-variables")},s)),(P=r.$style)===null||P===void 0||P.loadStyle(B({name:"".concat(r.$style.name,"-style")},s),E),R.setLoadedStyleName(r.$style.name)}if(!R.isStyleNameLoaded("layer-order")){var k,V,G=(k=r.$style)===null||k===void 0||(V=k.getLayerOrderThemeCSS)===null||V===void 0?void 0:V.call(k);z.load(G,B({name:"layer-order",first:!0},s)),R.setLoadedStyleName("layer-order")}}},_loadScopedThemeStyles:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,o=t.preset();if(o&&t.$attrSelector){var r,s,i,l=((r=t.$style)===null||r===void 0||(s=r.getPresetTheme)===null||s===void 0?void 0:s.call(r,o,"[".concat(t.$attrSelector,"]")))||{},a=l.css,u=(i=t.$style)===null||i===void 0?void 0:i.load(a,B({name:"".concat(t.$attrSelector,"-").concat(t.$style.name)},n));t.scopedStyleEl=u.el}},_themeChangeListener:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){};ye.clearLoadedStyleNames(),K.on("theme:change",t)},_removeThemeListeners:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};K.off("theme:change",t.$loadStyles),t.$loadStyles=void 0},_hook:function(t,n,o,r,s,i){var l,a,u="on".concat(Fl(n)),p=A._getConfig(r,s),c=o==null?void 0:o.$instance,m=A._usePT(c,A._getPT(r==null||(l=r.value)===null||l===void 0?void 0:l.pt,t),A._getOptionValue,"hooks.".concat(u)),h=A._useDefaultPT(c,p==null||(a=p.pt)===null||a===void 0||(a=a.directives)===null||a===void 0?void 0:a[t],A._getOptionValue,"hooks.".concat(u)),_={el:o,binding:r,vnode:s,prevVnode:i};m==null||m(c,_),h==null||h(c,_)},_mergeProps:function(){for(var t=arguments.length>1?arguments[1]:void 0,n=arguments.length,o=new Array(n>2?n-2:0),r=2;r<n;r++)o[r-2]=arguments[r];return Dt(t)?t.apply(void 0,o):W.apply(void 0,o)},_extend:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=function(l,a,u,p,c){var m,h,_,S;a._$instances=a._$instances||{};var P=A._getConfig(u,p),T=a._$instances[t]||{},N=Ce(T)?B(B({},n),n==null?void 0:n.methods):{};a._$instances[t]=B(B({},T),{},{$name:t,$host:a,$binding:u,$modifiers:u==null?void 0:u.modifiers,$value:u==null?void 0:u.value,$el:T.$el||a||void 0,$style:B({classes:void 0,inlineStyles:void 0,load:function(){},loadCSS:function(){},loadStyle:function(){}},n==null?void 0:n.style),$primevueConfig:P,$attrSelector:(m=a.$pd)===null||m===void 0||(m=m[t])===null||m===void 0?void 0:m.attrSelector,defaultPT:function(){return A._getPT(P==null?void 0:P.pt,void 0,function(k){var V;return k==null||(V=k.directives)===null||V===void 0?void 0:V[t]})},isUnstyled:function(){var k,V;return((k=a._$instances[t])===null||k===void 0||(k=k.$binding)===null||k===void 0||(k=k.value)===null||k===void 0?void 0:k.unstyled)!==void 0?(V=a._$instances[t])===null||V===void 0||(V=V.$binding)===null||V===void 0||(V=V.value)===null||V===void 0?void 0:V.unstyled:P==null?void 0:P.unstyled},theme:function(){var k;return(k=a._$instances[t])===null||k===void 0||(k=k.$primevueConfig)===null||k===void 0?void 0:k.theme},preset:function(){var k;return(k=a._$instances[t])===null||k===void 0||(k=k.$binding)===null||k===void 0||(k=k.value)===null||k===void 0?void 0:k.dt},ptm:function(){var k,V=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",G=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return A._getPTValue(a._$instances[t],(k=a._$instances[t])===null||k===void 0||(k=k.$binding)===null||k===void 0||(k=k.value)===null||k===void 0?void 0:k.pt,V,B({},G))},ptmo:function(){var k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},V=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",G=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return A._getPTValue(a._$instances[t],k,V,G,!1)},cx:function(){var k,V,G=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",ee=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return(k=a._$instances[t])!==null&&k!==void 0&&k.isUnstyled()?void 0:A._getOptionValue((V=a._$instances[t])===null||V===void 0||(V=V.$style)===null||V===void 0?void 0:V.classes,G,B({},ee))},sx:function(){var k,V=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",G=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,ee=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return G?A._getOptionValue((k=a._$instances[t])===null||k===void 0||(k=k.$style)===null||k===void 0?void 0:k.inlineStyles,V,B({},ee)):void 0}},N),a.$instance=a._$instances[t],(h=(_=a.$instance)[l])===null||h===void 0||h.call(_,a,u,p,c),a["$".concat(t)]=a.$instance,A._hook(t,l,a,u,p,c),a.$pd||(a.$pd={}),a.$pd[t]=B(B({},(S=a.$pd)===null||S===void 0?void 0:S[t]),{},{name:t,instance:a._$instances[t]})},r=function(l){var a,u,p,c=l._$instances[t],m=c==null?void 0:c.watch,h=function(P){var T,N=P.newValue,E=P.oldValue;return m==null||(T=m.config)===null||T===void 0?void 0:T.call(c,N,E)},_=function(P){var T,N=P.newValue,E=P.oldValue;return m==null||(T=m["config.ripple"])===null||T===void 0?void 0:T.call(c,N,E)};c.$watchersCallback={config:h,"config.ripple":_},m==null||(a=m.config)===null||a===void 0||a.call(c,c==null?void 0:c.$primevueConfig),_e.on("config:change",h),m==null||(u=m["config.ripple"])===null||u===void 0||u.call(c,c==null||(p=c.$primevueConfig)===null||p===void 0?void 0:p.ripple),_e.on("config:ripple:change",_)},s=function(l){var a=l._$instances[t].$watchersCallback;a&&(_e.off("config:change",a.config),_e.off("config:ripple:change",a["config.ripple"]),l._$instances[t].$watchersCallback=void 0)};return{created:function(l,a,u,p){l.$pd||(l.$pd={}),l.$pd[t]={name:t,attrSelector:tu("pd")},o("created",l,a,u,p)},beforeMount:function(l,a,u,p){var c;A._loadStyles((c=l.$pd[t])===null||c===void 0?void 0:c.instance,a,u),o("beforeMount",l,a,u,p),r(l)},mounted:function(l,a,u,p){var c;A._loadStyles((c=l.$pd[t])===null||c===void 0?void 0:c.instance,a,u),o("mounted",l,a,u,p)},beforeUpdate:function(l,a,u,p){o("beforeUpdate",l,a,u,p)},updated:function(l,a,u,p){var c;A._loadStyles((c=l.$pd[t])===null||c===void 0?void 0:c.instance,a,u),o("updated",l,a,u,p)},beforeUnmount:function(l,a,u,p){var c;s(l),A._removeThemeListeners((c=l.$pd[t])===null||c===void 0?void 0:c.instance),o("beforeUnmount",l,a,u,p)},unmounted:function(l,a,u,p){var c;(c=l.$pd[t])===null||c===void 0||(c=c.instance)===null||c===void 0||(c=c.scopedStyleEl)===null||c===void 0||(c=c.value)===null||c===void 0||c.remove(),o("unmounted",l,a,u,p)}}},extend:function(){var t=A._getMeta.apply(A,arguments),n=hn(t,2),o=n[0],r=n[1];return B({extend:function(){var i=A._getMeta.apply(A,arguments),l=hn(i,2),a=l[0],u=l[1];return A.extend(a,B(B(B({},r),r==null?void 0:r.methods),u))}},A._extend(o,r))}},hd=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,bd={root:"p-ink"},gd=z.extend({name:"ripple-directive",style:hd,classes:bd}),yd=A.extend({style:gd});function Ye(e){"@babel/helpers - typeof";return Ye=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ye(e)}function _d(e){return Pd(e)||Sd(e)||kd(e)||$d()}function $d(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function kd(e,t){if(e){if(typeof e=="string")return xt(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?xt(e,t):void 0}}function Sd(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Pd(e){if(Array.isArray(e))return xt(e)}function xt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function yn(e,t,n){return(t=wd(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function wd(e){var t=Td(e,"string");return Ye(t)=="symbol"?t:t+""}function Td(e,t){if(Ye(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t);if(Ye(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Ld=yd.extend("ripple",{watch:{"config.ripple":function(t){t?(this.createRipple(this.$host),this.bindEvents(this.$host),this.$host.setAttribute("data-pd-ripple",!0),this.$host.style.overflow="hidden",this.$host.style.position="relative"):(this.remove(this.$host),this.$host.removeAttribute("data-pd-ripple"))}},unmounted:function(t){this.remove(t)},timeout:void 0,methods:{bindEvents:function(t){t.addEventListener("mousedown",this.onMouseDown.bind(this))},unbindEvents:function(t){t.removeEventListener("mousedown",this.onMouseDown.bind(this))},createRipple:function(t){var n=this.getInk(t);n||(n=ql("span",yn(yn({role:"presentation","aria-hidden":!0,"data-p-ink":!0,"data-p-ink-active":!1,class:!this.isUnstyled()&&this.cx("root"),onAnimationEnd:this.onAnimationEnd.bind(this)},this.$attrSelector,""),"p-bind",this.ptm("root"))),t.appendChild(n),this.$el=n)},remove:function(t){var n=this.getInk(t);n&&(this.$host.style.overflow="",this.$host.style.position="",this.unbindEvents(t),n.removeEventListener("animationend",this.onAnimationEnd),n.remove())},onMouseDown:function(t){var n=this,o=t.currentTarget,r=this.getInk(o);if(!(!r||getComputedStyle(r,null).display==="none")){if(!this.isUnstyled()&&bt(r,"p-ink-active"),r.setAttribute("data-p-ink-active","false"),!Yt(r)&&!Jt(r)){var s=Math.max(Wl(o),Zl(o));r.style.height=s+"px",r.style.width=s+"px"}var i=Ql(o),l=t.pageX-i.left+document.body.scrollTop-Jt(r)/2,a=t.pageY-i.top+document.body.scrollLeft-Yt(r)/2;r.style.top=a+"px",r.style.left=l+"px",!this.isUnstyled()&&zl(r,"p-ink-active"),r.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(function(){r&&(!n.isUnstyled()&&bt(r,"p-ink-active"),r.setAttribute("data-p-ink-active","false"))},401)}},onAnimationEnd:function(t){this.timeout&&clearTimeout(this.timeout),!this.isUnstyled()&&bt(t.currentTarget,"p-ink-active"),t.currentTarget.setAttribute("data-p-ink-active","false")},getInk:function(t){return t&&t.children?_d(t.children).find(function(n){return Jl(n,"data-pc-name")==="ripple"}):void 0}}}),xd=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\0A0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;function Je(e){"@babel/helpers - typeof";return Je=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Je(e)}function se(e,t,n){return(t=Od(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Od(e){var t=Cd(e,"string");return Je(t)=="symbol"?t:t+""}function Cd(e,t){if(Je(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t);if(Je(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Nd={root:function(t){var n=t.instance,o=t.props;return["p-button p-component",se(se(se(se(se(se(se(se(se({"p-button-icon-only":n.hasIcon&&!o.label&&!o.badge,"p-button-vertical":(o.iconPos==="top"||o.iconPos==="bottom")&&o.label,"p-button-loading":o.loading,"p-button-link":o.link||o.variant==="link"},"p-button-".concat(o.severity),o.severity),"p-button-raised",o.raised),"p-button-rounded",o.rounded),"p-button-text",o.text||o.variant==="text"),"p-button-outlined",o.outlined||o.variant==="outlined"),"p-button-sm",o.size==="small"),"p-button-lg",o.size==="large"),"p-button-plain",o.plain),"p-button-fluid",n.hasFluid)]},loadingIcon:"p-button-loading-icon",icon:function(t){var n=t.props;return["p-button-icon",se({},"p-button-icon-".concat(n.iconPos),n.label)]},label:"p-button-label"},Vd=z.extend({name:"button",style:xd,classes:Nd}),Ad={name:"BaseButton",extends:Rt,props:{label:{type:String,default:null},icon:{type:String,default:null},iconPos:{type:String,default:"left"},iconClass:{type:[String,Object],default:null},badge:{type:String,default:null},badgeClass:{type:[String,Object],default:null},badgeSeverity:{type:String,default:"secondary"},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:void 0},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1},link:{type:Boolean,default:!1},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},variant:{type:String,default:null},plain:{type:Boolean,default:!1},fluid:{type:Boolean,default:null}},style:Vd,provide:function(){return{$pcButton:this,$parentInstance:this}}};function Qe(e){"@babel/helpers - typeof";return Qe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Qe(e)}function J(e,t,n){return(t=Id(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Id(e){var t=jd(e,"string");return Qe(t)=="symbol"?t:t+""}function jd(e,t){if(Qe(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t);if(Qe(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Yn={name:"Button",extends:Ad,inheritAttrs:!1,inject:{$pcFluid:{default:null}},methods:{getPTOptions:function(t){var n=t==="root"?this.ptmi:this.ptm;return n(t,{context:{disabled:this.disabled}})}},computed:{disabled:function(){return this.$attrs.disabled||this.$attrs.disabled===""||this.loading},defaultAriaLabel:function(){return this.label?this.label+(this.badge?" "+this.badge:""):this.$attrs.ariaLabel},hasIcon:function(){return this.icon||this.$slots.icon},attrs:function(){return W(this.asAttrs,this.a11yAttrs,this.getPTOptions("root"))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{"aria-label":this.defaultAriaLabel,"data-pc-name":"button","data-p-disabled":this.disabled,"data-p-severity":this.severity}},hasFluid:function(){return Ce(this.fluid)?!!this.$pcFluid:this.fluid},dataP:function(){return He(J(J(J(J(J(J(J(J(J(J({},this.size,this.size),"icon-only",this.hasIcon&&!this.label&&!this.badge),"loading",this.loading),"fluid",this.hasFluid),"rounded",this.rounded),"raised",this.raised),"outlined",this.outlined||this.variant==="outlined"),"text",this.text||this.variant==="text"),"link",this.link||this.variant==="link"),"vertical",(this.iconPos==="top"||this.iconPos==="bottom")&&this.label))},dataIconP:function(){return He(J(J({},this.iconPos,this.iconPos),this.size,this.size))},dataLabelP:function(){return He(J(J({},this.size,this.size),"icon-only",this.hasIcon&&!this.label&&!this.badge))}},components:{SpinnerIcon:Kn,Badge:qn},directives:{ripple:Ld}},Md=["data-p"],Ed=["data-p"];function Bd(e,t,n,o,r,s){var i=pe("SpinnerIcon"),l=pe("Badge"),a=Co("ripple");return e.asChild?b(e.$slots,"default",{key:1,class:H(e.cx("root")),a11yAttrs:s.a11yAttrs}):No((d(),x(re(e.as),W({key:0,class:e.cx("root"),"data-p":s.dataP},s.attrs),{default:y(function(){return[b(e.$slots,"default",{},function(){return[e.loading?b(e.$slots,"loadingicon",W({key:0,class:[e.cx("loadingIcon"),e.cx("icon")]},e.ptm("loadingIcon")),function(){return[e.loadingIcon?(d(),v("span",W({key:0,class:[e.cx("loadingIcon"),e.cx("icon"),e.loadingIcon]},e.ptm("loadingIcon")),null,16)):(d(),x(i,W({key:1,class:[e.cx("loadingIcon"),e.cx("icon")],spin:""},e.ptm("loadingIcon")),null,16,["class"]))]}):b(e.$slots,"icon",W({key:1,class:[e.cx("icon")]},e.ptm("icon")),function(){return[e.icon?(d(),v("span",W({key:0,class:[e.cx("icon"),e.icon,e.iconClass],"data-p":s.dataIconP},e.ptm("icon")),null,16,Md)):$("",!0)]}),e.label?(d(),v("span",W({key:2,class:e.cx("label")},e.ptm("label"),{"data-p":s.dataLabelP}),D(e.label),17,Ed)):$("",!0),e.badge?(d(),x(l,{key:3,value:e.badge,class:H(e.badgeClass),severity:e.badgeSeverity,unstyled:e.unstyled,pt:e.ptm("pcBadge")},null,8,["value","class","severity","unstyled","pt"])):$("",!0)]})]}),_:3},16,["class","data-p"])),[[a]])}Yn.render=Bd;const Ud={extends:Il,enhanceApp({app:e}){e.use(Eu),e.component("Button",Yn)}};export{Ud as R,Fd as V,Hd as a,Rd as b,Ks as c,I as u};
