function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function r(t,r){if(t){if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){o=!0,a=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}}(t,e)||r(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function a(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}function i(t,e){return t(e={exports:{}},e.exports),e.exports}var c,u=i(function(e){var r=function(e){var r,n=Object.prototype,o=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),i=new R(n||[]);return a._invoke=function(t,e,r){var n=l;return function(o,a){if(n===h)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw a;return P()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=S(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=f(t,e,r);if("normal"===u.type){if(n=r.done?v:p,u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=v,r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var l="suspendedStart",p="suspendedYield",h="executing",v="completed",d={};function m(){}function y(){}function g(){}var b={};b[i]=function(){return this};var w=Object.getPrototypeOf,$=w&&w(w(j([])));$&&$!==n&&o.call($,i)&&(b=$);var x=g.prototype=m.prototype=Object.create(b);function E(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function _(e,r){var n;this._invoke=function(a,i){function c(){return new r(function(n,c){!function n(a,i,c,u){var s=f(e[a],e,i);if("throw"!==s.type){var l=s.arg,p=l.value;return p&&"object"===t(p)&&o.call(p,"__await")?r.resolve(p.__await).then(function(t){n("next",t,c,u)},function(t){n("throw",t,c,u)}):r.resolve(p).then(function(t){l.value=t,c(l)},function(t){return n("throw",t,c,u)})}u(s.arg)}(a,i,n,c)})}return n=n?n.then(c,c):c()}}function S(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,S(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,d):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function j(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:P}}function P(){return{value:r,done:!0}}return y.prototype=x.constructor=g,g.constructor=y,g[u]=y.displayName="GeneratorFunction",e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},E(_.prototype),_.prototype[c]=function(){return this},e.AsyncIterator=_,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new _(s(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},E(x),x[u]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=j,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),s=o.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),d}},e}(e.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}});function s(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function f(t){return function(){var e=this,r=arguments;return new Promise(function(n,o){var a=t.apply(e,r);function i(t){s(a,n,o,i,c,"next",t)}function c(t){s(a,n,o,i,c,"throw",t)}i(void 0)})}}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(e,r){return!r||"object"!==t(r)&&"function"!=typeof r?p(e):r}function v(t,e){return(v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}function m(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||r(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function g(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function b(){}function w(t,e){for(var r in e)t[r]=e[r];return t}function $(t){return t()}function x(){return Object.create(null)}function E(t){t.forEach($)}function _(t){return"function"==typeof t}function S(e,r){return e!=e?r==r:e!==r||e&&"object"===t(e)||"function"==typeof e}function k(t,e,r,n){return t[1]&&n?w(r.ctx.slice(),t[1](n(e))):r.ctx}function L(t,e){t.appendChild(e)}function R(t,e,r){t.insertBefore(e,r||null)}function j(t){t.parentNode.removeChild(t)}function P(t,e){for(var r=0;r<t.length;r+=1)t[r]&&t[r].d(e)}function A(t){return document.createElement(t)}function O(t){return document.createTextNode(t)}function C(){return O(" ")}function N(){return O("")}function D(t,e,r,n){return t.addEventListener(e,r,n),function(){return t.removeEventListener(e,r,n)}}function I(t,e,r){null==r?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}function T(t){return Array.from(t.childNodes)}function q(t,e,r,n){for(var o=0;o<t.length;o+=1){var a=t[o];if(a.nodeName===e){for(var i=0;i<a.attributes.length;){var c=a.attributes[i];r[c.name]?i++:a.removeAttribute(c.name)}return t.splice(o,1)[0]}}return n?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):A(e)}function U(t,e){for(var r=0;r<t.length;r+=1){var n=t[r];if(3===n.nodeType)return n.data=""+e,t.splice(r,1)[0]}return O(e)}function G(t){return U(t," ")}function M(t,e){e=""+e,t.data!==e&&(t.data=e)}function V(t,e){(null!=e||t.value)&&(t.value=e)}function z(t,e,r,n){t.style.setProperty(e,r,n?"important":"")}function F(t,e){for(var r=0;r<t.options.length;r+=1){var n=t.options[r];if(n.__value===e)return void(n.selected=!0)}}function H(t){var e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function B(t,e,r){t.classList[r?"add":"remove"](e)}function J(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;return Array.from(e.querySelectorAll(t))}function K(t){c=t}function Y(){if(!c)throw new Error("Function called outside component initialization");return c}function W(t){Y().$$.on_mount.push(t)}function X(t){Y().$$.on_destroy.push(t)}function Q(){var t=Y();return function(e,r){var n=t.$$.callbacks[e];if(n){var o=function(t,e){var r=document.createEvent("CustomEvent");return r.initCustomEvent(t,!1,!1,e),r}(e,r);n.slice().forEach(function(e){e.call(t,o)})}}}var Z=[],tt=[],et=[],rt=[],nt=Promise.resolve(),ot=!1;function at(t){et.push(t)}function it(t){rt.push(t)}var ct=!1,ut=new Set;function st(){if(!ct){ct=!0;do{for(var t=0;t<Z.length;t+=1){var e=Z[t];K(e),ft(e.$$)}for(Z.length=0;tt.length;)tt.pop()();for(var r=0;r<et.length;r+=1){var n=et[r];ut.has(n)||(ut.add(n),n())}et.length=0}while(Z.length);for(;rt.length;)rt.pop()();ot=!1,ct=!1,ut.clear()}}function ft(t){if(null!==t.fragment){t.update(),E(t.before_update);var e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(at)}}var lt,pt=new Set;function ht(){lt={r:0,c:[],p:lt}}function vt(){lt.r||E(lt.c),lt=lt.p}function dt(t,e){t&&t.i&&(pt.delete(t),t.i(e))}function mt(t,e,r,n){if(t&&t.o){if(pt.has(t))return;pt.add(t),lt.c.push(function(){pt.delete(t),n&&(r&&t.d(1),n())}),t.o(e)}}function yt(t,e){t.d(1),e.delete(t.key)}function gt(t,e,r,n,o,a,i,c,u,s,f,l){for(var p=t.length,h=a.length,v=p,d={};v--;)d[t[v].key]=v;var m=[],y=new Map,g=new Map;for(v=h;v--;){var b=l(o,a,v),w=r(b),$=i.get(w);$?n&&$.p(b,e):($=s(w,b)).c(),y.set(w,m[v]=$),w in d&&g.set(w,Math.abs(v-d[w]))}var x=new Set,E=new Set;function _(t){dt(t,1),t.m(c,f,i.has(t.key)),i.set(t.key,t),f=t.first,h--}for(;p&&h;){var S=m[h-1],k=t[p-1],L=S.key,R=k.key;S===k?(f=S.first,p--,h--):y.has(R)?!i.has(L)||x.has(L)?_(S):E.has(R)?p--:g.get(L)>g.get(R)?(E.add(L),_(S)):(x.add(R),p--):(u(k,i),p--)}for(;p--;){var j=t[p];y.has(j.key)||u(j,i)}for(;h;)_(m[h-1]);return m}function bt(t,e){for(var r={},n={},o={$$scope:1},a=t.length;a--;){var i=t[a],c=e[a];if(c){for(var u in i)u in c||(n[u]=1);for(var s in c)o[s]||(r[s]=c[s],o[s]=1);t[a]=c}else for(var f in i)o[f]=1}for(var l in n)l in r||(r[l]=void 0);return r}function wt(e){return"object"===t(e)&&null!==e?e:{}}function $t(t,e,r){var n=t.$$.props[e];void 0!==n&&(t.$$.bound[n]=r,r(t.$$.ctx[n]))}function xt(t){t&&t.c()}function Et(t,e){t&&t.l(e)}function _t(t,e,r){var n=t.$$,o=n.fragment,a=n.on_mount,i=n.on_destroy,c=n.after_update;o&&o.m(e,r),at(function(){var e=a.map($).filter(_);i?i.push.apply(i,m(e)):E(e),t.$$.on_mount=[]}),c.forEach(at)}function St(t,e){var r=t.$$;null!==r.fragment&&(E(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function kt(t,e){-1===t.$$.dirty[0]&&(Z.push(t),ot||(ot=!0,nt.then(st)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Lt(t,e,r,n,o,a){var i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],u=c;K(t);var s=e.props||{},f=t.$$={fragment:null,ctx:null,props:a,update:b,not_equal:o,bound:x(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:x(),dirty:i},l=!1;if(f.ctx=r?r(t,s,function(e,r){var n=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:r;return f.ctx&&o(f.ctx[e],f.ctx[e]=n)&&(f.bound[e]&&f.bound[e](n),l&&kt(t,e)),r}):[],f.update(),l=!0,E(f.before_update),f.fragment=!!n&&n(f.ctx),e.target){if(e.hydrate){var p=T(e.target);f.fragment&&f.fragment.l(p),p.forEach(j)}else f.fragment&&f.fragment.c();e.intro&&dt(t.$$.fragment),_t(t,e.target,e.anchor),st()}K(u)}var Rt=function(){function t(){y(this,t)}var e,r,n;return e=t,(r=[{key:"$destroy",value:function(){St(this,1),this.$destroy=b}},{key:"$on",value:function(t,e){var r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(e),function(){var t=r.indexOf(e);-1!==t&&r.splice(t,1)}}},{key:"$set",value:function(){}}])&&g(e.prototype,r),n&&g(e,n),t}(),jt=[];function Pt(t){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:b,n=[];function o(r){if(S(t,r)&&(t=r,e)){for(var o=!jt.length,a=0;a<n.length;a+=1){var i=n[a];i[1](),jt.push(i,t)}if(o){for(var c=0;c<jt.length;c+=2)jt[c][0](jt[c+1]);jt.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(a){var i=[a,arguments.length>1&&void 0!==arguments[1]?arguments[1]:b];return n.push(i),1===n.length&&(e=r(o)||b),a(t),function(){var t=n.indexOf(i);-1!==t&&n.splice(t,1),0===n.length&&(e(),e=null)}}}}var At={},Ot=function(){return{}};function Ct(t){return function(){var e,r=l(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var n=l(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return h(this,e)}}function Nt(e){var r,o,a,i,c,u,s,f,l,p,h,v,d,m,y,g,b=e[1].default,w=function(t,e,r,n){if(t){var o=k(t,e,r,n);return t[0](o)}}(b,e,e[0],null);return{c:function(){r=A("div"),o=A("div"),a=A("img"),i=C(),c=A("span"),u=O("Home"),s=C(),f=A("a"),l=O("About"),p=C(),h=A("a"),v=O("Refresh Data"),d=C(),m=A("main"),w&&w.c(),this.h()},l:function(t){var e=T(r=q(t,"DIV",{class:!0})),n=T(o=q(e,"DIV",{class:!0}));a=q(n,"IMG",{class:!0,alt:!0,src:!0}),n.forEach(j),i=G(e);var y=T(c=q(e,"SPAN",{class:!0}));u=U(y,"Home"),y.forEach(j),s=G(e);var g=T(f=q(e,"A",{href:!0,rel:!0,pre:!0,class:!0}));l=U(g,"About"),g.forEach(j),p=G(e);var b=T(h=q(e,"A",{href:!0,rel:!0,pre:!0,class:!0}));v=U(b,"Refresh Data"),b.forEach(j),e.forEach(j),d=G(t);var $=T(m=q(t,"MAIN",{class:!0}));w&&w.l($),$.forEach(j),this.h()},h:function(){I(a,"class","click svelte-1wz98za"),I(a,"alt","covid-19 virus logo"),a.src!=="/covid-19-sapper-demo/logo.jpg"&&I(a,"src","/covid-19-sapper-demo/logo.jpg"),I(o,"class","item"),I(c,"class","item svelte-1wz98za"),I(f,"href","about"),I(f,"rel","prefetch"),I(f,"pre",""),I(f,"class","item"),I(h,"href","reset"),I(h,"rel","prefetch"),I(h,"pre",""),I(h,"class","item"),I(r,"class","ui top fixed menu"),I(m,"class","svelte-1wz98za")},m:function(t,e,n){R(t,r,e),L(r,o),L(o,a),L(r,i),L(r,c),L(c,u),L(r,s),L(r,f),L(f,l),L(r,p),L(r,h),L(h,v),R(t,d,e),R(t,m,e),w&&w.m(m,null),y=!0,n&&E(g),g=[D(a,"click",Dt),D(c,"click",Dt)]},p:function(e,r){var o=n(r,1)[0];w&&w.p&&1&o&&w.p(k(b,e,e[0],null),function(e,r,n,o){if(e[2]&&o){var a=e[2](o(n));if(void 0===r.dirty)return a;if("object"===t(a)){for(var i=[],c=Math.max(r.dirty.length,a.length),u=0;u<c;u+=1)i[u]=r.dirty[u]|a[u];return i}return r.dirty|a}return r.dirty}(b,e[0],o,null))},i:function(t){y||(dt(w,t),y=!0)},o:function(t){mt(w,t),y=!1},d:function(t){t&&j(r),t&&j(d),t&&j(m),w&&w.d(t),E(g)}}}function Dt(){Zt("/covid-19-sapper-demo")}function It(t,e,r){var n=e.$$slots,o=void 0===n?{}:n,a=e.$$scope;return t.$set=function(t){"$$scope"in t&&r(0,a=t.$$scope)},[a,o]}var Tt=function(t){d(r,Rt);var e=Ct(r);function r(t){var n;return y(this,r),Lt(p(n=e.call(this)),t,It,Nt,S,{}),n}return r}();function qt(t){return function(){var e,r=l(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var n=l(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return h(this,e)}}function Ut(t){var e,r,o,a,i,c,u,s,f,l,p,h=t[0].message+"";return{c:function(){e=C(),r=A("div"),o=A("h1"),a=O("Covid-19 Tracker Error"),i=C(),c=A("div"),u=A("div"),s=O("There was error."),f=C(),l=A("p"),p=O(h),this.h()},l:function(t){J('[data-svelte="svelte-1flk9qr"]',document.head).forEach(j),e=G(t);var n=T(r=q(t,"DIV",{class:!0})),v=T(o=q(n,"H1",{}));a=U(v,"Covid-19 Tracker Error"),v.forEach(j),i=G(n);var d=T(c=q(n,"DIV",{class:!0})),m=T(u=q(d,"DIV",{class:!0}));s=U(m,"There was error."),m.forEach(j),f=G(d);var y=T(l=q(d,"P",{}));p=U(y,h),y.forEach(j),d.forEach(j),n.forEach(j),this.h()},h:function(){document.title="Covid 19 Error Page",I(u,"class","header"),I(c,"class","ui error message"),I(r,"class","ui container")},m:function(t,n){R(t,e,n),R(t,r,n),L(r,o),L(o,a),L(r,i),L(r,c),L(c,u),L(u,s),L(c,f),L(c,l),L(l,p)},p:function(t,e){1&n(e,1)[0]&&h!==(h=t[0].message+"")&&M(p,h)},i:b,o:b,d:function(t){t&&j(e),t&&j(r)}}}function Gt(t,e,r){var n=e.error;return console.log(n),t.$set=function(t){"error"in t&&r(0,n=t.error)},[n]}var Mt=function(t){d(r,Rt);var e=qt(r);function r(t){var n;return y(this,r),Lt(p(n=e.call(this)),t,Gt,Ut,S,{error:0}),n}return r}();function Vt(t){return function(){var e,r=l(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var n=l(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return h(this,e)}}function zt(t){var e,r,n=[t[4].props],o=t[4].component;function a(t){for(var e={},r=0;r<n.length;r+=1)e=w(e,n[r]);return{props:e}}if(o)var i=new o(a());return{c:function(){i&&xt(i.$$.fragment),e=N()},l:function(t){i&&Et(i.$$.fragment,t),e=N()},m:function(t,n){i&&_t(i,t,n),R(t,e,n),r=!0},p:function(t,r){var c=16&r?bt(n,[wt(t[4].props)]):{};if(o!==(o=t[4].component)){if(i){ht();var u=i;mt(u.$$.fragment,1,0,function(){St(u,1)}),vt()}o?(xt((i=new o(a())).$$.fragment),dt(i.$$.fragment,1),_t(i,e.parentNode,e)):i=null}else o&&i.$set(c)},i:function(t){r||(i&&dt(i.$$.fragment,t),r=!0)},o:function(t){i&&mt(i.$$.fragment,t),r=!1},d:function(t){t&&j(e),i&&St(i,t)}}}function Ft(t){var e,r=new Mt({props:{error:t[0],status:t[1]}});return{c:function(){xt(r.$$.fragment)},l:function(t){Et(r.$$.fragment,t)},m:function(t,n){_t(r,t,n),e=!0},p:function(t,e){var n={};1&e&&(n.error=t[0]),2&e&&(n.status=t[1]),r.$set(n)},i:function(t){e||(dt(r.$$.fragment,t),e=!0)},o:function(t){mt(r.$$.fragment,t),e=!1},d:function(t){St(r,t)}}}function Ht(t){var e,r,n,o,a=[Ft,zt],i=[];function c(t,e){return t[0]?0:1}return e=c(t),r=i[e]=a[e](t),{c:function(){r.c(),n=N()},l:function(t){r.l(t),n=N()},m:function(t,r){i[e].m(t,r),R(t,n,r),o=!0},p:function(t,o){var u=e;(e=c(t))===u?i[e].p(t,o):(ht(),mt(i[u],1,1,function(){i[u]=null}),vt(),(r=i[e])||(r=i[e]=a[e](t)).c(),dt(r,1),r.m(n.parentNode,n))},i:function(t){o||(dt(r),o=!0)},o:function(t){mt(r),o=!1},d:function(t){i[e].d(t),t&&j(n)}}}function Bt(t){for(var e,r=[{segment:t[2][0]},t[3].props],o={$$slots:{default:[Ht]},$$scope:{ctx:t}},a=0;a<r.length;a+=1)o=w(o,r[a]);var i=new Tt({props:o});return{c:function(){xt(i.$$.fragment)},l:function(t){Et(i.$$.fragment,t)},m:function(t,r){_t(i,t,r),e=!0},p:function(t,e){var o=n(e,1)[0],a=12&o?bt(r,[4&o&&{segment:t[2][0]},8&o&&wt(t[3].props)]):{};83&o&&(a.$$scope={dirty:o,ctx:t}),i.$set(a)},i:function(t){e||(dt(i.$$.fragment,t),e=!0)},o:function(t){mt(i.$$.fragment,t),e=!1},d:function(t){St(i,t)}}}function Jt(t,e,r){var n,o,a=e.stores,i=e.error,c=e.status,u=e.segments,s=e.level0,f=e.level1,l=void 0===f?null:f;return n=At,o=a,Y().$$.context.set(n,o),t.$set=function(t){"stores"in t&&r(5,a=t.stores),"error"in t&&r(0,i=t.error),"status"in t&&r(1,c=t.status),"segments"in t&&r(2,u=t.segments),"level0"in t&&r(3,s=t.level0),"level1"in t&&r(4,l=t.level1)},[i,c,u,s,l,a]}var Kt,Yt=function(t){d(r,Rt);var e=Vt(r);function r(t){var n;return y(this,r),Lt(p(n=e.call(this)),t,Jt,Bt,S,{stores:5,error:0,status:1,segments:2,level0:3,level1:4}),n}return r}(),Wt=[],Xt=[{js:function(){return import("./index.ba1dff67.js")},css:["legacy/index.ba1dff67.css","legacy/client.80764277.css","legacy/helpers.6d256096.css"]},{js:function(){return import("./about.fbdfc640.js")},css:["legacy/about.fbdfc640.css","legacy/client.80764277.css"]},{js:function(){return import("./reset.4c1bde68.js")},css:["legacy/reset.4c1bde68.css","legacy/client.80764277.css"]},{js:function(){return import("./[country].756895a1.js")},css:["legacy/[country].756895a1.css","legacy/client.80764277.css","legacy/helpers.6d256096.css"]}],Qt=(Kt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/reset\/?$/,parts:[{i:2}]},{pattern:/^\/([^\/]+?)\/?$/,parts:[{i:3,params:function(t){return{country:Kt(t[1])}}}]}]);function Zt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{replaceState:!1},r=ge(new URL(t,document.baseURI));return r?(de[e.replaceState?"replaceState":"pushState"]({id:pe},"",t),we(r,null).then(function(){})):(location.href=t,new Promise(function(t){}))}var te,ee,re,ne,oe,ae="undefined"!=typeof __SAPPER__&&__SAPPER__,ie=!1,ce=[],ue="{}",se={page:Pt({}),preloading:Pt(null),session:Pt(ae&&ae.session)};se.session.subscribe(function(){var t=f(u.mark(function t(e){var r,n,o,a,i,c;return u.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(ne=e,ie){t.next=3;break}return t.abrupt("return");case 3:return oe=!0,r=ge(new URL(location.href)),n=ee={},t.next=8,Se(r);case 8:if(o=t.sent,a=o.redirect,i=o.props,c=o.branch,n===ee){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,xe(a,c,i,r.page);case 16:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}());var fe,le=null;var pe,he=1;var ve,de="undefined"!=typeof history?history:{pushState:function(t,e,r){},replaceState:function(t,e,r){},scrollRestoration:""},me={};function ye(e){var r=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(function(e){var o=n(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," "))),3),a=o[1],i=o[2],c=void 0===i?"":i;"string"==typeof r[a]&&(r[a]=[r[a]]),"object"===t(r[a])?r[a].push(c):r[a]=c}),r}function ge(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(ae.baseUrl))return null;var e=t.pathname.slice(ae.baseUrl.length);if(""===e&&(e="/"),!Wt.some(function(t){return t.test(e)}))for(var r=0;r<Qt.length;r+=1){var n=Qt[r],o=n.pattern.exec(e);if(o){var a=ye(t.search),i=n.parts[n.parts.length-1],c=i.params?i.params(o):{},u={host:location.host,path:e,query:a,params:c};return{href:t.href,route:n,match:o,page:u}}}}function be(){return{x:pageXOffset,y:pageYOffset}}function we(t,e,r,n){return $e.apply(this,arguments)}function $e(){return($e=f(u.mark(function t(e,r,n,o){var a,i,c,s,f,l,p,h,v;return u.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r?pe=r:(a=be(),me[pe]=a,r=pe=++he,me[pe]=n?a:{x:0,y:0}),pe=r,te&&se.preloading.set(!0),i=le&&le.href===e.href?le.promise:Se(e),le=null,c=ee={},t.next=8,i;case 8:if(s=t.sent,f=s.redirect,l=s.props,p=s.branch,c===ee){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,xe(f,p,l,e.page);case 16:document.activeElement&&document.activeElement.blur(),n||(h=me[r],o&&(v=document.getElementById(o.slice(1)))&&(h={x:0,y:v.getBoundingClientRect().top}),me[pe]=h,h&&scrollTo(h.x,h.y));case 18:case"end":return t.stop()}},t)}))).apply(this,arguments)}function xe(t,e,r,n){return Ee.apply(this,arguments)}function Ee(){return(Ee=f(u.mark(function t(e,r,n,o){var a,i;return u.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=2;break}return t.abrupt("return",Zt(e.location,{replaceState:!0}));case 2:if(se.page.set(o),se.preloading.set(!1),!te){t.next=8;break}te.$set(n),t.next=17;break;case 8:return n.stores={page:{subscribe:se.page.subscribe},preloading:{subscribe:se.preloading.subscribe},session:se.session},t.next=11,re;case 11:if(t.t0=t.sent,n.level0={props:t.t0},a=document.querySelector("#sapper-head-start"),i=document.querySelector("#sapper-head-end"),a&&i){for(;a.nextSibling!==i;)je(a.nextSibling);je(a),je(i)}te=new Yt({target:fe,props:n,hydrate:!0});case 17:ce=r,ue=JSON.stringify(o.query),ie=!0,oe=!1;case 21:case"end":return t.stop()}},t)}))).apply(this,arguments)}function _e(t,e,r,n){if(n!==ue)return!0;var o=ce[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(r.slice(1,t+2)))||void 0))}function Se(t){return ke.apply(this,arguments)}function ke(){return(ke=f(u.mark(function t(e){var r,n,o,a,i,c,s,l,p,h,v;return u.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.route,n=e.page,o=n.path.split("/").filter(Boolean),a=null,i={error:null,status:200,segments:[o[0]]},c={fetch:function(t){function e(e,r){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t,e){return fetch(t,e)}),redirect:function(t,e){if(a&&(a.statusCode!==t||a.location!==e))throw new Error("Conflicting redirects");a={statusCode:t,location:e}},error:function(t,e){i.error="string"==typeof e?new Error(e):e,i.status=t}},re||(re=ae.preloaded[0]||Ot.call(c,{host:n.host,path:n.path,query:n.query,params:{}},ne)),l=1,t.prev=7,p=JSON.stringify(n.query),h=r.pattern.exec(n.path),v=!1,t.next=13,Promise.all(r.parts.map(function(){var t=f(u.mark(function t(r,a){var s,f,d,m,y,g;return u.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(s=o[a],_e(a,s,h,p)&&(v=!0),i.segments[l]=o[a+1],r){t.next=5;break}return t.abrupt("return",{segment:s});case 5:if(f=l++,oe||v||!ce[a]||ce[a].part!==r.i){t.next=8;break}return t.abrupt("return",ce[a]);case 8:return v=!1,t.next=11,Re(Xt[r.i]);case 11:if(d=t.sent,m=d.default,y=d.preload,!ie&&ae.preloaded[a+1]){t.next=25;break}if(!y){t.next=21;break}return t.next=18,y.call(c,{host:n.host,path:n.path,query:n.query,params:r.params?r.params(e.match):{}},ne);case 18:t.t0=t.sent,t.next=22;break;case 21:t.t0={};case 22:g=t.t0,t.next=26;break;case 25:g=ae.preloaded[a+1];case 26:return t.abrupt("return",i["level".concat(f)]={component:m,props:g,segment:s,match:h,part:r.i});case 27:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}()));case 13:s=t.sent,t.next=21;break;case 16:t.prev=16,t.t0=t.catch(7),i.error=t.t0,i.status=500,s=[];case 21:return t.abrupt("return",{redirect:a,props:i,branch:s});case 22:case"end":return t.stop()}},t,null,[[7,16]])}))).apply(this,arguments)}function Le(t){var e="client/".concat(t);if(!document.querySelector('link[href="'.concat(e,'"]')))return new Promise(function(t,r){var n=document.createElement("link");n.rel="stylesheet",n.href=e,n.onload=function(){return t()},n.onerror=r,document.head.appendChild(n)})}function Re(t){var e="string"==typeof t.css?[]:t.css.map(Le);return e.unshift(t.js()),Promise.all(e).then(function(t){return t[0]})}function je(t){t.parentNode.removeChild(t)}function Pe(t){var e=ge(new URL(t,document.baseURI));if(e)return le&&t===le.href||function(t,e){le={href:t,promise:e}}(t,Se(e)),le.promise}function Ae(t){clearTimeout(ve),ve=setTimeout(function(){Oe(t)},20)}function Oe(t){var e=Ne(t.target);e&&"prefetch"===e.rel&&Pe(e.href)}function Ce(e){if(1===function(t){return null===t.which?t.button:t.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)){var r=Ne(e.target);if(r&&r.href){var n="object"===t(r.href)&&"SVGAnimatedString"===r.href.constructor.name,o=String(n?r.href.baseVal:r.href);if(o!==location.href){if(!r.hasAttribute("download")&&"external"!==r.getAttribute("rel")&&(n?!r.target.baseVal:!r.target)){var a=new URL(o);if(a.pathname!==location.pathname||a.search!==location.search){var i=ge(a);if(i)we(i,null,r.hasAttribute("sapper-noscroll"),a.hash),e.preventDefault(),de.pushState({id:pe},"",a.href)}}}else location.hash||e.preventDefault()}}}function Ne(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function De(t){if(me[pe]=be(),t.state){var e=ge(new URL(location.href));e?we(e,t.state.id):location.href=location.href}else(function(t){pe=t})(he=he+1),de.replaceState({id:pe},"",location.href)}!function(t){var e;"scrollRestoration"in de&&(de.scrollRestoration="manual"),e=t.target,fe=e,addEventListener("click",Ce),addEventListener("popstate",De),addEventListener("touchstart",Oe),addEventListener("mousemove",Ae),Promise.resolve().then(function(){var t=location,e=t.hash,r=t.href;de.replaceState({id:he},"",r);var n,o,a,i,c,u,s,f,l=new URL(location.href);if(ae.error)return n=location,o=n.host,a=n.pathname,i=n.search,c=ae.session,u=ae.preloaded,s=ae.status,f=ae.error,re||(re=u&&u[0]),void xe(null,[],{error:f,status:s,session:c,level0:{props:re},level1:{props:{status:s,error:f},component:Mt},segments:u},{host:o,path:a,query:ye(i),params:{}});var p=ge(l);return p?we(p,he,!0,e):void 0})}({target:document.querySelector("#sapper")});export{z as $,h as A,O as B,U as C,M as D,tt as E,$t as F,xt as G,Et as H,_t as I,gt as J,it as K,dt as L,mt as M,St as N,Q as O,yt as P,at as Q,V as R,Rt as S,F as T,H as U,o as V,a as W,W as X,X as Y,J as Z,t as _,f as a,Zt as a0,w as a1,bt as a2,wt as a3,vt as a4,ht as a5,u as b,i as c,d,y as e,p as f,N as g,R as h,Lt as i,j,A as k,C as l,q as m,T as n,G as o,I as p,L as q,E as r,S as s,B as t,D as u,_ as v,n as w,b as x,P as y,l as z};
