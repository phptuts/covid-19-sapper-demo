function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function i(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function f(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function d(){return h(" ")}function m(){return h("")}function g(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t){return Array.from(t.childNodes)}function v(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;for(;e<o.attributes.length;){const t=o.attributes[e];n[t.name]?e++:o.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):p(e)}function b(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return h(e)}function E(t){return b(t," ")}function _(t,e){e=""+e,t.data!==e&&(t.data=e)}function w(t,e){(null!=e||t.value)&&(t.value=e)}function S(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function x(t,e){for(let n=0;n<t.options.length;n+=1){const r=t.options[n];if(r.__value===e)return void(r.selected=!0)}}function A(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function P(t,e,n){t.classList[n?"add":"remove"](e)}function R(t,e=document.body){return Array.from(e.querySelectorAll(t))}let C;function k(t){C=t}function L(){if(!C)throw new Error("Function called outside component initialization");return C}function j(t){L().$$.on_mount.push(t)}function q(t){L().$$.on_destroy.push(t)}function N(){const t=L();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const o=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);r.slice().forEach(e=>{e.call(t,o)})}}}const O=[],D=[],U=[],I=[],T=Promise.resolve();let V=!1;function z(t){U.push(t)}function H(t){I.push(t)}let M=!1;const B=new Set;function J(){if(!M){M=!0;do{for(let t=0;t<O.length;t+=1){const e=O[t];k(e),K(e.$$)}for(O.length=0;D.length;)D.pop()();for(let t=0;t<U.length;t+=1){const e=U[t];B.has(e)||(B.add(e),e())}U.length=0}while(O.length);for(;I.length;)I.pop()();V=!1,M=!1,B.clear()}}function K(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(z)}}const G=new Set;let F;function Q(){F={r:0,c:[],p:F}}function W(){F.r||o(F.c),F=F.p}function X(t,e){t&&t.i&&(G.delete(t),t.i(e))}function Y(t,e,n,r){if(t&&t.o){if(G.has(t))return;G.add(t),F.c.push(()=>{G.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function Z(t,e){t.d(1),e.delete(t.key)}function tt(t,e,n,r,o,s,a,c,i,l,u,f){let p=t.length,h=s.length,d=p;const m={};for(;d--;)m[t[d].key]=d;const g=[],$=new Map,y=new Map;for(d=h;d--;){const t=f(o,s,d),c=n(t);let i=a.get(c);i?r&&i.p(t,e):(i=l(c,t)).c(),$.set(c,g[d]=i),c in m&&y.set(c,Math.abs(d-m[c]))}const v=new Set,b=new Set;function E(t){X(t,1),t.m(c,u,a.has(t.key)),a.set(t.key,t),u=t.first,h--}for(;p&&h;){const e=g[h-1],n=t[p-1],r=e.key,o=n.key;e===n?(u=e.first,p--,h--):$.has(o)?!a.has(r)||v.has(r)?E(e):b.has(o)?p--:y.get(r)>y.get(o)?(b.add(r),E(e)):(v.add(o),p--):(i(n,a),p--)}for(;p--;){const e=t[p];$.has(e.key)||i(e,a)}for(;h;)E(g[h-1]);return g}function et(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const a=t[s],c=e[s];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in a)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function nt(t){return"object"==typeof t&&null!==t?t:{}}function rt(t,e,n){const r=t.$$.props[e];void 0!==r&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function ot(t){t&&t.c()}function st(t,e){t&&t.l(e)}function at(t,e,r){const{fragment:a,on_mount:c,on_destroy:i,after_update:l}=t.$$;a&&a.m(e,r),z(()=>{const e=c.map(n).filter(s);i?i.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(z)}function ct(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function it(t,e){-1===t.$$.dirty[0]&&(O.push(t),V||(V=!0,T.then(J)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function lt(e,n,s,a,c,i,l=[-1]){const f=C;k(e);const p=n.props||{},h=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:r(),dirty:l};let d=!1;if(h.ctx=s?s(e,p,(t,n,...r)=>{const o=r.length?r[0]:n;return h.ctx&&c(h.ctx[t],h.ctx[t]=o)&&(h.bound[t]&&h.bound[t](o),d&&it(e,t)),n}):[],h.update(),d=!0,o(h.before_update),h.fragment=!!a&&a(h.ctx),n.target){if(n.hydrate){const t=y(n.target);h.fragment&&h.fragment.l(t),t.forEach(u)}else h.fragment&&h.fragment.c();n.intro&&X(e.$$.fragment),at(e,n.target,n.anchor),J()}k(f)}class ut{$destroy(){ct(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const ft=[];function pt(e,n=t){let r;const o=[];function s(t){if(a(e,t)&&(e=t,r)){const t=!ft.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),ft.push(n,e)}if(t){for(let t=0;t<ft.length;t+=2)ft[t][0](ft[t+1]);ft.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(a,c=t){const i=[a,c];return o.push(i),1===o.length&&(r=n(s)||t),a(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const ht={},dt=()=>({});function mt(t){let e,n,r,s,a,f,m,_,w,S,x,A,P,R,C,k,L;const j=t[1].default,q=function(t,e,n,r){if(t){const o=c(t,e,n,r);return t[0](o)}}(j,t,t[0],null);return{c(){e=p("div"),n=p("div"),r=p("img"),a=d(),f=p("span"),m=h("Home"),_=d(),w=p("a"),S=h("About"),x=d(),A=p("a"),P=h("Refresh Data"),R=d(),C=p("main"),q&&q.c(),this.h()},l(t){var o=y(e=v(t,"DIV",{class:!0})),s=y(n=v(o,"DIV",{class:!0}));r=v(s,"IMG",{class:!0,alt:!0,src:!0}),s.forEach(u),a=E(o);var c=y(f=v(o,"SPAN",{class:!0}));m=b(c,"Home"),c.forEach(u),_=E(o);var i=y(w=v(o,"A",{href:!0,rel:!0,pre:!0,class:!0}));S=b(i,"About"),i.forEach(u),x=E(o);var l=y(A=v(o,"A",{href:!0,rel:!0,pre:!0,class:!0}));P=b(l,"Refresh Data"),l.forEach(u),o.forEach(u),R=E(t);var p=y(C=v(t,"MAIN",{class:!0}));q&&q.l(p),p.forEach(u),this.h()},h(){$(r,"class","click svelte-1wz98za"),$(r,"alt","covid-19 virus logo"),r.src!==(s="/covid-19-sapper-demo/logo.jpg")&&$(r,"src","/covid-19-sapper-demo/logo.jpg"),$(n,"class","item"),$(f,"class","item svelte-1wz98za"),$(w,"href","about"),$(w,"rel","prefetch"),$(w,"pre",""),$(w,"class","item"),$(A,"href","reset"),$(A,"rel","prefetch"),$(A,"pre",""),$(A,"class","item"),$(e,"class","ui top fixed menu"),$(C,"class","svelte-1wz98za")},m(t,s,c){l(t,e,s),i(e,n),i(n,r),i(e,a),i(e,f),i(f,m),i(e,_),i(e,w),i(w,S),i(e,x),i(e,A),i(A,P),l(t,R,s),l(t,C,s),q&&q.m(C,null),k=!0,c&&o(L),L=[g(r,"click",gt),g(f,"click",gt)]},p(t,[e]){q&&q.p&&1&e&&q.p(c(j,t,t[0],null),function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(j,t[0],e,null))},i(t){k||(X(q,t),k=!0)},o(t){Y(q,t),k=!1},d(t){t&&u(e),t&&u(R),t&&u(C),q&&q.d(t),o(L)}}}function gt(){Lt("/covid-19-sapper-demo")}function $t(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$set=(t=>{"$$scope"in t&&n(0,o=t.$$scope)}),[o,r]}class yt extends ut{constructor(t){super(),lt(this,t,$t,mt,a,{})}}function vt(e){let n,r,o,s,a,c,f,m,g,w,S,x=e[0].message+"";return{c(){n=d(),r=p("div"),o=p("h1"),s=h("Covid-19 Tracker Error"),a=d(),c=p("div"),f=p("div"),m=h("There was error."),g=d(),w=p("p"),S=h(x),this.h()},l(t){R('[data-svelte="svelte-1flk9qr"]',document.head).forEach(u),n=E(t);var e=y(r=v(t,"DIV",{class:!0})),i=y(o=v(e,"H1",{}));s=b(i,"Covid-19 Tracker Error"),i.forEach(u),a=E(e);var l=y(c=v(e,"DIV",{class:!0})),p=y(f=v(l,"DIV",{class:!0}));m=b(p,"There was error."),p.forEach(u),g=E(l);var h=y(w=v(l,"P",{}));S=b(h,x),h.forEach(u),l.forEach(u),e.forEach(u),this.h()},h(){document.title="Covid 19 Error Page",$(f,"class","header"),$(c,"class","ui error message"),$(r,"class","ui container")},m(t,e){l(t,n,e),l(t,r,e),i(r,o),i(o,s),i(r,a),i(r,c),i(c,f),i(f,m),i(c,g),i(c,w),i(w,S)},p(t,[e]){1&e&&x!==(x=t[0].message+"")&&_(S,x)},i:t,o:t,d(t){t&&u(n),t&&u(r)}}}function bt(t,e,n){let{error:r}=e;return console.log(r),t.$set=(t=>{"error"in t&&n(0,r=t.error)}),[r]}class Et extends ut{constructor(t){super(),lt(this,t,bt,vt,a,{error:0})}}function _t(t){let n,r;const o=[t[4].props];var s=t[4].component;function a(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}if(s)var c=new s(a());return{c(){c&&ot(c.$$.fragment),n=m()},l(t){c&&st(c.$$.fragment,t),n=m()},m(t,e){c&&at(c,t,e),l(t,n,e),r=!0},p(t,e){const r=16&e?et(o,[nt(t[4].props)]):{};if(s!==(s=t[4].component)){if(c){Q();const t=c;Y(t.$$.fragment,1,0,()=>{ct(t,1)}),W()}s?(ot((c=new s(a())).$$.fragment),X(c.$$.fragment,1),at(c,n.parentNode,n)):c=null}else s&&c.$set(r)},i(t){r||(c&&X(c.$$.fragment,t),r=!0)},o(t){c&&Y(c.$$.fragment,t),r=!1},d(t){t&&u(n),c&&ct(c,t)}}}function wt(t){let e;const n=new Et({props:{error:t[0],status:t[1]}});return{c(){ot(n.$$.fragment)},l(t){st(n.$$.fragment,t)},m(t,r){at(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i(t){e||(X(n.$$.fragment,t),e=!0)},o(t){Y(n.$$.fragment,t),e=!1},d(t){ct(n,t)}}}function St(t){let e,n,r,o;const s=[wt,_t],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=s[e](t),{c(){n.c(),r=m()},l(t){n.l(t),r=m()},m(t,n){a[e].m(t,n),l(t,r,n),o=!0},p(t,o){let i=e;(e=c(t))===i?a[e].p(t,o):(Q(),Y(a[i],1,1,()=>{a[i]=null}),W(),(n=a[e])||(n=a[e]=s[e](t)).c(),X(n,1),n.m(r.parentNode,r))},i(t){o||(X(n),o=!0)},o(t){Y(n),o=!1},d(t){a[e].d(t),t&&u(r)}}}function xt(t){let n;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[St]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);const s=new yt({props:o});return{c(){ot(s.$$.fragment)},l(t){st(s.$$.fragment,t)},m(t,e){at(s,t,e),n=!0},p(t,[e]){const n=12&e?et(r,[4&e&&{segment:t[2][0]},8&e&&nt(t[3].props)]):{};83&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){n||(X(s.$$.fragment,t),n=!0)},o(t){Y(s.$$.fragment,t),n=!1},d(t){ct(s,t)}}}function At(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e;var l,u;return l=ht,u=r,L().$$.context.set(l,u),t.$set=(t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1)}),[o,s,a,c,i,r]}class Pt extends ut{constructor(t){super(),lt(this,t,At,xt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4})}}const Rt=[],Ct=[{js:()=>import("./index.3672d075.js"),css:["index.3672d075.css","client.08cf105b.css","helpers.62b34e0b.css"]},{js:()=>import("./about.14807282.js"),css:["about.14807282.css","client.08cf105b.css"]},{js:()=>import("./reset.e2aeb73e.js"),css:["reset.e2aeb73e.css","client.08cf105b.css"]},{js:()=>import("./[country].f0536e96.js"),css:["[country].f0536e96.css","client.08cf105b.css","helpers.62b34e0b.css"]}],kt=(t=>[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/reset\/?$/,parts:[{i:2}]},{pattern:/^\/([^\/]+?)\/?$/,parts:[{i:3,params:e=>({country:t(e[1])})}]}])(decodeURIComponent);function Lt(t,e={replaceState:!1}){const n=Qt(new URL(t,document.baseURI));return n?(Kt[e.replaceState?"replaceState":"pushState"]({id:Bt},"",t),Xt(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}const jt="undefined"!=typeof __SAPPER__&&__SAPPER__;let qt,Nt,Ot,Dt=!1,Ut=[],It="{}";const Tt={page:pt({}),preloading:pt(null),session:pt(jt&&jt.session)};let Vt,zt;Tt.session.subscribe(async t=>{if(Vt=t,!Dt)return;zt=!0;const e=Qt(new URL(location.href)),n=Nt={},{redirect:r,props:o,branch:s}=await Zt(e);n===Nt&&await Yt(r,s,o,e.page)});let Ht,Mt=null;let Bt,Jt=1;const Kt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Gt={};function Ft(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Qt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(jt.baseUrl))return null;let e=t.pathname.slice(jt.baseUrl.length);if(""===e&&(e="/"),!Rt.some(t=>t.test(e)))for(let n=0;n<kt.length;n+=1){const r=kt[n],o=r.pattern.exec(e);if(o){const n=Ft(t.search),s=r.parts[r.parts.length-1],a=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:o,page:c}}}}function Wt(){return{x:pageXOffset,y:pageYOffset}}async function Xt(t,e,n,r){if(e)Bt=e;else{const t=Wt();Gt[Bt]=t,e=Bt=++Jt,Gt[Bt]=n?t:{x:0,y:0}}Bt=e,qt&&Tt.preloading.set(!0);const o=Mt&&Mt.href===t.href?Mt.promise:Zt(t);Mt=null;const s=Nt={},{redirect:a,props:c,branch:i}=await o;if(s===Nt&&(await Yt(a,i,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Gt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top})}Gt[Bt]=t,t&&scrollTo(t.x,t.y)}}async function Yt(t,e,n,r){if(t)return Lt(t.location,{replaceState:!0});if(Tt.page.set(r),Tt.preloading.set(!1),qt)qt.$set(n);else{n.stores={page:{subscribe:Tt.page.subscribe},preloading:{subscribe:Tt.preloading.subscribe},session:Tt.session},n.level0={props:await Ot};const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)ee(t.nextSibling);ee(t),ee(e)}qt=new Pt({target:Ht,props:n,hydrate:!0})}Ut=e,It=JSON.stringify(r.query),Dt=!0,zt=!1}async function Zt(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};let c;Ot||(Ot=jt.preloaded[0]||dt.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Vt));let i=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==It)return!0;const o=Ut[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(c,f,l,o)&&(u=!0),s.segments[i]=r[c+1],!e)return{segment:f};const p=i++;if(!zt&&!u&&Ut[c]&&Ut[c].part===e.i)return Ut[c];u=!1;const{default:h,preload:d}=await function(t){const e="string"==typeof t.css?[]:t.css.map(te);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(Ct[e.i]);let m;return m=Dt||!jt.preloaded[c+1]?d?await d.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Vt):{}:jt.preloaded[c+1],s[`level${p}`]={component:h,props:m,segment:f,match:l,part:e.i}}))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}function te(t){const e=`client/${t}`;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=(()=>t()),r.onerror=n,document.head.appendChild(r)})}function ee(t){t.parentNode.removeChild(t)}function ne(t){const e=Qt(new URL(t,document.baseURI));if(e)return Mt&&t===Mt.href||function(t,e){Mt={href:t,promise:e}}(t,Zt(e)),Mt.promise}let re;function oe(t){clearTimeout(re),re=setTimeout(()=>{se(t)},20)}function se(t){const e=ce(t.target);e&&"prefetch"===e.rel&&ne(e.href)}function ae(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=ce(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Qt(o);if(s){Xt(s,null,e.hasAttribute("sapper-noscroll"),o.hash),t.preventDefault(),Kt.pushState({id:Bt},"",o.href)}}function ce(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function ie(t){if(Gt[Bt]=Wt(),t.state){const e=Qt(new URL(location.href));e?Xt(e,t.state.id):location.href=location.href}else(function(t){Bt=t})(Jt=Jt+1),Kt.replaceState({id:Bt},"",location.href)}!function(t){var e;"scrollRestoration"in Kt&&(Kt.scrollRestoration="manual"),e=t.target,Ht=e,addEventListener("click",ae),addEventListener("popstate",ie),addEventListener("touchstart",se),addEventListener("mousemove",oe),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Kt.replaceState({id:Jt},"",e);const n=new URL(location.href);if(jt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:a,error:c}=jt;Ot||(Ot=s&&s[0]),Yt(null,[],{error:c,status:a,session:o,level0:{props:Ot},level1:{props:{status:a,error:c},component:Et},segments:s},{host:e,path:n,query:Ft(r),params:{}})}();const r=Qt(n);return r?Xt(r,Jt,!0,t):void 0})}({target:document.querySelector("#sapper")});export{tt as A,H as B,X as C,Y as D,ct as E,N as F,Z as G,z as H,w as I,x as J,A as K,j as L,q as M,R as N,S as O,Lt as P,e as Q,et as R,ut as S,nt as T,W as U,Q as V,l as a,p as b,d as c,u as d,m as e,v as f,y as g,E as h,lt as i,$ as j,i as k,g as l,s as m,t as n,f as o,h as p,b as q,o as r,a as s,P as t,_ as u,D as v,rt as w,ot as x,st as y,at as z};
