import{S as a,i as s,s as e,b as t,q as c,c as r,f as i,g as o,u as l,d,h,j as n,a as u,k as v,O as f,P as m,m as D,o as E}from"./client.82fbedb7.js";import{d as b,a as k}from"./data-store.aa1d2d24.js";function p(a){let s,e,f,m,D,E,b;return{c(){s=t("div"),e=t("h1"),f=c("Covid-19 Tracker"),m=r(),D=t("div"),E=t("div"),b=c("Refreshing Data ..."),this.h()},l(a){s=i(a,"DIV",{class:!0});var t=o(s);e=i(t,"H1",{});var c=o(e);f=l(c,"Covid-19 Tracker"),c.forEach(d),m=h(t),D=i(t,"DIV",{class:!0});var r=o(D);E=i(r,"DIV",{class:!0});var n=o(E);b=l(n,"Refreshing Data ..."),n.forEach(d),r.forEach(d),t.forEach(d),this.h()},h(){n(E,"class","ui text loader"),n(D,"class","ui active dimmer"),n(s,"class","ui container svelte-1idf44v")},m(a,t){u(a,s,t),v(s,e),v(e,f),v(s,m),v(s,D),v(D,E),v(E,b)},d(a){a&&d(s)}}}function g(a){let s,e,b,k,g,I,V,j,y,R,T,q,x,C,N=a[1]&&p();return{c(){s=r(),e=t("div"),b=t("div"),k=t("div"),g=c("You just deleeted cache."),I=r(),V=t("p"),j=c("When you navigate to the home screen it should take a little longer."),y=r(),N&&N.c(),R=r(),T=t("div"),q=t("button"),x=c("Reset Data"),this.h()},l(a){f('[data-svelte="svelte-khqcqk"]',document.head).forEach(d),s=h(a),e=i(a,"DIV",{style:!0,class:!0});var t=o(e);b=i(t,"DIV",{class:!0});var c=o(b);k=i(c,"DIV",{class:!0});var r=o(k);g=l(r,"You just deleeted cache."),r.forEach(d),I=h(c),V=i(c,"P",{});var n=o(V);j=l(n,"When you navigate to the home screen it should take a little longer."),n.forEach(d),c.forEach(d),t.forEach(d),y=h(a),N&&N.l(a),R=h(a),T=i(a,"DIV",{class:!0});var u=o(T);q=i(u,"BUTTON",{class:!0});var v=o(q);x=l(v,"Reset Data"),v.forEach(d),u.forEach(d),this.h()},h(){document.title="Reset Cache",n(k,"class","header"),n(b,"class","ui success message"),m(e,"display",a[0]?"block":"none"),n(e,"class","ui container svelte-1idf44v"),n(q,"class","ui red basic button"),n(T,"class","ui container svelte-1idf44v")},m(t,c,r){u(t,s,c),u(t,e,c),v(e,b),v(b,k),v(k,g),v(b,I),v(b,V),v(V,j),u(t,y,c),N&&N.m(t,c),u(t,R,c),u(t,T,c),v(T,q),v(q,x),r&&C(),C=D(q,"click",a[2])},p(a,[s]){1&s&&m(e,"display",a[0]?"block":"none"),a[1]?N||((N=p()).c(),N.m(R.parentNode,R)):N&&(N.d(1),N=null)},i:E,o:E,d(a){a&&d(s),a&&d(e),a&&d(y),N&&N.d(a),a&&d(R),a&&d(T),C()}}}function I(a,s,e){let t=!1,c=!1;return b.subscribe(()=>{c&&(e(1,c=!1),e(0,t=!0))}),[t,c,function(){k(),e(1,c=!0)}]}export default class extends a{constructor(a){super(),s(this,a,I,g,e,{})}}