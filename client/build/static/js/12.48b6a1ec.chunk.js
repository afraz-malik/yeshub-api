(this.webpackJsonpyeshub=this.webpackJsonpyeshub||[]).push([[12,17],{357:function(e,t,n){"use strict";var c=n(2),r=n(0),a=n.n(r),u=n(117);t.a=function(e){var t=e.event,n=e.link,i=Object(r.useState)(t),o=Object(c.a)(i,2),s=(o[0],o[1],Object(r.useState)(t.going)),l=Object(c.a)(s,2),f=l[0],d=l[1];return a.a.createElement("div",{className:"event-card-container pt-3"},a.a.createElement("div",{className:"event-card-wrap"},t&&a.a.createElement(u.a,{event:t,going:f,onMarkGoing:function(e){return d(e)},link:n})))}},358:function(e,t,n){"use strict";var c=n(2),r=n(0),a=null;t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=Object(r.useState)(e),n=Object(c.a)(t,2),u=n[0],i=n[1],o=function(){window.innerHeight+window.scrollY>=document.body.offsetHeight-100&&null===a&&(a=setTimeout((function(){i((function(e){return e+1})),a=null}),2e3))};return Object(r.useEffect)((function(){return document.addEventListener("scroll",o),function(){return document.removeEventListener("scroll",o)}}),[u]),{page:u}}},363:function(e,t,n){"use strict";var c=n(0),r=n.n(c),a=n(357);t.a=function(e){var t=e.events,n=void 0===t?[]:t;return r.a.createElement("div",{className:"profile_events__container"},n.map((function(e){return r.a.createElement(a.a,{key:e._id,event:e})})))}},406:function(e,t,n){"use strict";n.r(t);var c=n(21),r=n(2),a=n(0),u=n.n(a),i=n(114),o=n(83),s=n(363),l=n(37),f=n(358),d=n(8);t.default=function(e){var t=e.onlySubscribed,n=e.title,v=void 0===n?"My Events":n,b=Object(a.useState)([]),m=Object(r.a)(b,2),E=m[0],g=m[1],j=Object(f.a)(1).page;Object(a.useEffect)((function(){l.a.fetch(j).then((function(e){console.log(e),console.log("-------- my events -------"),g((function(t){return[].concat(Object(c.a)(t),Object(c.a)(O(e.data.docs)))}))})).catch((function(e){return console.log(e)}))}),[j]);var O=function(e){return t&&e.length?e.filter((function(e){return 1==e.isSubscribed})):e},h=function(e){var t=E.filter((function(t){return t._id!==e.detail.id}));g(t)};return Object(a.useEffect)((function(){return document.addEventListener(d.b,h),function(){return document.removeEventListener(d.b,h)}}),[E,h]),u.a.createElement(i.a,{showSideBar:!1},u.a.createElement(o.a,{title:v}),u.a.createElement(s.a,{events:E}))}},521:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(406);t.default=function(){return r.a.createElement(a.default,{onlySubscribed:!0,title:"Subscribed Events"})}}}]);
//# sourceMappingURL=12.48b6a1ec.chunk.js.map