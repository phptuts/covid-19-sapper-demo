import{d as t,e as a,i as r,s as e,f as n,S as s,k as c,B as o,l as i,m as l,n as u,C as f,j as v,o as h,p as d,h as p,q as y,w as m,D as g,x as $,z as D,A as C,a as S,b as I,a2 as E,G as b,H as L,I as V,L as P,M as R,N as w,g as M,Z as x,a3 as k,a4 as B,a5 as T,E as F,F as H,K as N,a6 as j,a0 as A}from"./client.2d272aee.js";import{c as O,d as K,e as q,C as z,f as G,F as Z,T as J}from"./helpers.ffcbf004.js";import{_ as Q}from"./cache.ee36fff2.js";function U(t){return function(){var a,r=D(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var e=D(this).constructor;a=Reflect.construct(r,arguments,e)}else a=r.apply(this,arguments);return C(this,a)}}function W(t){var a,r,e,n,s,D,C,S,I,E,b,L,V,P,R,w,M,x,k,B,T,F,H,N,j,A,O,K,q,z,G,Z,J,Q,U,W,X,Y,_,tt=t[0].toLocaleString()+"",at=t[1].toLocaleString()+"",rt=t[2].toLocaleString()+"",et=t[6].toLocaleString()+"",nt=t[8].toLocaleString()+"",st=t[3].toLocaleString()+"",ct=t[5].toLocaleString()+"",ot=t[7].toLocaleString()+"",it=t[4].toLocaleString()+"";return{c:function(){a=c("div"),r=c("div"),e=c("div"),n=o("Cases: "),s=o(tt),D=i(),C=c("div"),S=o("Cases Today: "),I=o(at),E=i(),b=c("div"),L=o("Cases Per Million: "),V=o(rt),P=i(),R=c("div"),w=c("div"),M=o("Deaths: "),x=o(et),k=i(),B=c("div"),T=o("Deaths Today: "),F=o(nt),H=i(),N=c("div"),j=o("Deaths Per Million: "),A=o(st),O=i(),K=c("div"),q=c("div"),z=o("Active: "),G=o(ct),Z=i(),J=c("div"),Q=o("Critical: "),U=o(ot),W=i(),X=c("div"),Y=o("Recovered: "),_=o(it),this.h()},l:function(t){a=l(t,"DIV",{class:!0});var c=u(a);r=l(c,"DIV",{class:!0});var o=u(r);e=l(o,"DIV",{class:!0});var i=u(e);n=f(i,"Cases: "),s=f(i,tt),i.forEach(v),D=h(o),C=l(o,"DIV",{class:!0});var d=u(C);S=f(d,"Cases Today: "),I=f(d,at),d.forEach(v),E=h(o),b=l(o,"DIV",{class:!0});var p=u(b);L=f(p,"Cases Per Million: "),V=f(p,rt),p.forEach(v),o.forEach(v),P=h(c),R=l(c,"DIV",{class:!0});var y=u(R);w=l(y,"DIV",{class:!0});var m=u(w);M=f(m,"Deaths: "),x=f(m,et),m.forEach(v),k=h(y),B=l(y,"DIV",{class:!0});var g=u(B);T=f(g,"Deaths Today: "),F=f(g,nt),g.forEach(v),H=h(y),N=l(y,"DIV",{class:!0});var $=u(N);j=f($,"Deaths Per Million: "),A=f($,st),$.forEach(v),y.forEach(v),O=h(c),K=l(c,"DIV",{class:!0});var lt=u(K);q=l(lt,"DIV",{class:!0});var ut=u(q);z=f(ut,"Active: "),G=f(ut,ct),ut.forEach(v),Z=h(lt),J=l(lt,"DIV",{class:!0});var ft=u(J);Q=f(ft,"Critical: "),U=f(ft,ot),ft.forEach(v),W=h(lt),X=l(lt,"DIV",{class:!0});var vt=u(X);Y=f(vt,"Recovered: "),_=f(vt,it),vt.forEach(v),lt.forEach(v),c.forEach(v),this.h()},h:function(){d(e,"class","column svelte-br4p2"),d(C,"class","column svelte-br4p2"),d(b,"class","column svelte-br4p2"),d(r,"class","ui stackable three column grid svelte-br4p2"),d(w,"class","column  svelte-br4p2"),d(B,"class","column  svelte-br4p2"),d(N,"class","column svelte-br4p2"),d(R,"class","ui stackable three column grid svelte-br4p2"),d(q,"class","column svelte-br4p2"),d(J,"class","column svelte-br4p2"),d(X,"class","column svelte-br4p2"),d(K,"class","ui stackable three column grid svelte-br4p2"),d(a,"class","ui container")},m:function(t,c){p(t,a,c),y(a,r),y(r,e),y(e,n),y(e,s),y(r,D),y(r,C),y(C,S),y(C,I),y(r,E),y(r,b),y(b,L),y(b,V),y(a,P),y(a,R),y(R,w),y(w,M),y(w,x),y(R,k),y(R,B),y(B,T),y(B,F),y(R,H),y(R,N),y(N,j),y(N,A),y(a,O),y(a,K),y(K,q),y(q,z),y(q,G),y(K,Z),y(K,J),y(J,Q),y(J,U),y(K,W),y(K,X),y(X,Y),y(X,_)},p:function(t,a){var r=m(a,1)[0];1&r&&tt!==(tt=t[0].toLocaleString()+"")&&g(s,tt),2&r&&at!==(at=t[1].toLocaleString()+"")&&g(I,at),4&r&&rt!==(rt=t[2].toLocaleString()+"")&&g(V,rt),64&r&&et!==(et=t[6].toLocaleString()+"")&&g(x,et),256&r&&nt!==(nt=t[8].toLocaleString()+"")&&g(F,nt),8&r&&st!==(st=t[3].toLocaleString()+"")&&g(A,st),32&r&&ct!==(ct=t[5].toLocaleString()+"")&&g(G,ct),128&r&&ot!==(ot=t[7].toLocaleString()+"")&&g(U,ot),16&r&&it!==(it=t[4].toLocaleString()+"")&&g(_,it)},i:$,o:$,d:function(t){t&&v(a)}}}function X(t,a,r){var e=a.cases,n=void 0===e?0:e,s=a.todayCases,c=void 0===s?0:s,o=a.casesPerOneMillion,i=void 0===o?0:o,l=a.deathsPerMillion,u=void 0===l?0:l,f=a.recovered,v=void 0===f?0:f,h=a.active,d=void 0===h?0:h,p=a.deaths,y=void 0===p?0:p,m=a.critical,g=void 0===m?0:m,$=a.todayDeaths,D=void 0===$?0:$;return t.$set=function(t){"cases"in t&&r(0,n=t.cases),"todayCases"in t&&r(1,c=t.todayCases),"casesPerOneMillion"in t&&r(2,i=t.casesPerOneMillion),"deathsPerMillion"in t&&r(3,u=t.deathsPerMillion),"recovered"in t&&r(4,v=t.recovered),"active"in t&&r(5,d=t.active),"deaths"in t&&r(6,y=t.deaths),"critical"in t&&r(7,g=t.critical),"todayDeaths"in t&&r(8,D=t.todayDeaths)},[n,c,i,u,v,d,y,g,D]}var Y=function(c){t(i,s);var o=U(i);function i(t){var s;return a(this,i),s=o.call(this),r(n(s),t,X,W,e,{cases:0,todayCases:1,casesPerOneMillion:2,deathsPerMillion:3,recovered:4,active:5,deaths:6,critical:7,todayDeaths:8}),s}return i}();function _(t){return function(){var a,r=D(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var e=D(this).constructor;a=Reflect.construct(r,arguments,e)}else a=r.apply(this,arguments);return C(this,a)}}function tt(t){var a,r,e,n,s,m,g,$,D;function C(a){t[14].call(null,a)}function S(a){t[15].call(null,a)}var I={geoRegionName:"Province / State",selectFields:t[8]};void 0!==t[4]&&(I.sortBy=t[4]),void 0!==t[5]&&(I.search=t[5]);var E=new Z({props:I});function M(a){t[16].call(null,a)}F.push(function(){return H(E,"sortBy",C)}),F.push(function(){return H(E,"search",S)});var x={geoRegionName:"Province / State",fields:t[8],sortBy:t[4],canNav:!1,list:t[3]};void 0!==t[6]&&(x.page=t[6]);var k=new J({props:x});return F.push(function(){return H(k,"page",M)}),k.$on("location",t[9]),{c:function(){a=c("div"),r=c("h1"),e=o("Search By Province / State"),n=i(),b(E.$$.fragment),g=i(),b(k.$$.fragment),this.h()},l:function(t){a=l(t,"DIV",{class:!0});var s=u(a);r=l(s,"H1",{class:!0});var c=u(r);e=f(c,"Search By Province / State"),c.forEach(v),s.forEach(v),n=h(t),L(E.$$.fragment,t),g=h(t),L(k.$$.fragment,t),this.h()},h:function(){d(r,"class","svelte-15uwyg3"),d(a,"class","ui container")},m:function(t,s){p(t,a,s),y(a,r),y(r,e),p(t,n,s),V(E,t,s),p(t,g,s),V(k,t,s),D=!0},p:function(t,a){var r={};!s&&16&a&&(s=!0,r.sortBy=t[4],N(function(){return s=!1})),!m&&32&a&&(m=!0,r.search=t[5],N(function(){return m=!1})),E.$set(r);var e={};16&a&&(e.sortBy=t[4]),8&a&&(e.list=t[3]),!$&&64&a&&($=!0,e.page=t[6],N(function(){return $=!1})),k.$set(e)},i:function(t){D||(P(E.$$.fragment,t),P(k.$$.fragment,t),D=!0)},o:function(t){R(E.$$.fragment,t),R(k.$$.fragment,t),D=!1},d:function(t){t&&v(a),t&&v(n),w(E,t),t&&v(g),w(k,t)}}}function at(t){var a,r,e,n,s,$,D,C,S,I,F,H,N,A,O,K,q,G,Z,J,U,W,X=Q.startCase(t[7])+"",_=Q.startCase(t[7])+"";document.title=a="Covid 19 Tracker For "+Q.startCase(t[7]);for(var at=[t[1]],rt={},et=0;et<at.length;et+=1)rt=E(rt,at[et]);var nt=new Y({props:rt}),st=new z({props:{title:"Covid-19 State For "+Q.startCase(t[7]),historicData:t[0].timeline}}),ct=t[2].length>0&&tt(t);return{c:function(){r=i(),e=c("div"),n=c("div"),s=c("a"),$=o("Home"),D=i(),C=c("div"),S=o("/"),I=i(),F=c("div"),H=o(X),N=i(),A=c("div"),O=c("h1"),K=o("Country "),q=o(_),G=i(),b(nt.$$.fragment),Z=i(),b(st.$$.fragment),J=i(),ct&&ct.c(),U=M(),this.h()},l:function(t){x('[data-svelte="svelte-14u9moo"]',document.head).forEach(v),r=h(t),e=l(t,"DIV",{class:!0});var a=u(e);n=l(a,"DIV",{class:!0});var c=u(n);s=l(c,"A",{href:!0,class:!0});var o=u(s);$=f(o,"Home"),o.forEach(v),D=h(c),C=l(c,"DIV",{class:!0});var i=u(C);S=f(i,"/"),i.forEach(v),I=h(c),F=l(c,"DIV",{class:!0});var d=u(F);H=f(d,X),d.forEach(v),c.forEach(v),a.forEach(v),N=h(t),A=l(t,"DIV",{class:!0});var p=u(A);O=l(p,"H1",{class:!0});var y=u(O);K=f(y,"Country "),q=f(y,_),y.forEach(v),p.forEach(v),G=h(t),L(nt.$$.fragment,t),Z=h(t),L(st.$$.fragment,t),J=h(t),ct&&ct.l(t),U=M(),this.h()},h:function(){d(s,"href","/covid-19-sapper-demo"),d(s,"class","section"),d(C,"class","divider"),d(F,"class","active section"),d(n,"class","ui breadcrumb"),d(e,"class","ui container"),d(O,"class","svelte-15uwyg3"),d(A,"class","ui container")},m:function(t,a){p(t,r,a),p(t,e,a),y(e,n),y(n,s),y(s,$),y(n,D),y(n,C),y(C,S),y(n,I),y(n,F),y(F,H),p(t,N,a),p(t,A,a),y(A,O),y(O,K),y(O,q),p(t,G,a),V(nt,t,a),p(t,Z,a),V(st,t,a),p(t,J,a),ct&&ct.m(t,a),p(t,U,a),W=!0},p:function(t,r){var e=m(r,1)[0];(!W||128&e)&&a!==(a="Covid 19 Tracker For "+Q.startCase(t[7]))&&(document.title=a),(!W||128&e)&&X!==(X=Q.startCase(t[7])+"")&&g(H,X),(!W||128&e)&&_!==(_=Q.startCase(t[7])+"")&&g(q,_);var n=2&e?k(at,[B(t[1])]):{};nt.$set(n);var s={};128&e&&(s.title="Covid-19 State For "+Q.startCase(t[7])),1&e&&(s.historicData=t[0].timeline),st.$set(s),t[2].length>0?ct?(ct.p(t,e),P(ct,1)):((ct=tt(t)).c(),P(ct,1),ct.m(U.parentNode,U)):ct&&(j(),R(ct,1,1,function(){ct=null}),T())},i:function(t){W||(P(nt.$$.fragment,t),P(st.$$.fragment,t),P(ct),W=!0)},o:function(t){R(nt.$$.fragment,t),R(st.$$.fragment,t),R(ct),W=!1},d:function(t){t&&v(r),t&&v(e),t&&v(N),t&&v(A),t&&v(G),w(nt,t),t&&v(Z),w(st,t),t&&v(J),ct&&ct.d(t),t&&v(U)}}}function rt(t){return et.apply(this,arguments)}function et(){return(et=S(I.mark(function t(a){var r,e,n,s;return I.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=a.params.country,t.next=4,q(r);case 4:return e=t.sent,t.next=7,K(r);case 7:return n=t.sent,t.next=10,O(n.country);case 10:return s=t.sent,t.abrupt("return",{countryInfo:e,historicCountryData:n,provinces:s,country:r});case 14:t.prev=14,t.t0=t.catch(0),this.error(500,"There was an error in calling the api, please try again in 5 minutes.");case 17:return t.abrupt("return",{country:a.params.country});case 18:case"end":return t.stop()}},t,this,[[0,14]])}))).apply(this,arguments)}function nt(t,a,r){var e,n=a.country,s=a.historicCountryData,c=void 0===s?{}:s,o=a.countryInfo,i=void 0===o?{}:o,l=a.provinces,u=void 0===l?[]:l,f=[],v="none",h="",d=0;function p(){return(p=S(I.mark(function t(a){return I.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A(n+"/"+a.detail);case 2:case"end":return t.stop()}},t)}))).apply(this,arguments)}return t.$set=function(t){"country"in t&&r(10,n=t.country),"historicCountryData"in t&&r(0,c=t.historicCountryData),"countryInfo"in t&&r(1,i=t.countryInfo),"provinces"in t&&r(2,u=t.provinces)},t.$$.update=function(){1024&t.$$.dirty&&r(7,e=n.toLowerCase().includes("korea")?"South Korea":n),36&t.$$.dirty&&r(3,f=G(u,h)),32&t.$$.dirty&&h.length>0&&r(6,d=0)},[c,i,u,f,v,h,d,e,["Cases","Deaths"],function(t){return p.apply(this,arguments)},n,void 0,void 0,void 0,function(t){r(4,v=t)},function(t){r(5,h=t)},function(t){r(6,d=t),r(5,h)}]}export default(function(c){t(i,s);var o=_(i);function i(t){var s;return a(this,i),s=o.call(this),r(n(s),t,nt,at,e,{country:10,historicCountryData:0,countryInfo:1,provinces:2}),s}return i}());export{rt as preload};