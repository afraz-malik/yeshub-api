(this.webpackJsonpyeshub=this.webpackJsonpyeshub||[]).push([[44],{547:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(0),s=a.n(c),l=a(11),i=a(85),m=a(24),r=a(3),o=function(e,t){return r.a.post("/user/activateAccount",{email:e,hash:t})};t.default=function(){var e=Object(c.useState)(!0),t=Object(n.a)(e,2),a=t[0],r=t[1],u=Object(l.i)(),d=u.email,f=u.hash,E=Object(c.useState)(2),p=Object(n.a)(E,2),v=p[0],h=p[1];return Object(c.useEffect)((function(){o(d||"",f||"").then((function(){r(!1)}))}),[d,f]),Object(c.useEffect)((function(){var e;return a||(setTimeout((function(){window.location.href="/profile/settings"}),2e3),e=window.setInterval((function(){h(v-1)}),1e3)),function(){return clearInterval(e)}}),[a]),m.a?s.a.createElement(l.a,{to:{pathname:"/"}}):s.a.createElement(s.a.Fragment,null,s.a.createElement("section",null,s.a.createElement("div",{className:"main-content pb-50"},s.a.createElement("div",{className:"main-content-wrap"},s.a.createElement("div",{className:"mx_width",style:{maxWidth:750}},s.a.createElement("div",{className:"main-content-body"},s.a.createElement("div",{className:"mc-mid pt-lg-0 pt-5"},s.a.createElement("div",{className:"mc-mid-content"},s.a.createElement("div",{className:"mc-mid-wrap"},s.a.createElement("div",{className:"post-container mt-5"},s.a.createElement("div",{className:"post-wrap"},s.a.createElement("div",{className:"post-body"},s.a.createElement("div",{className:"ps-left"},s.a.createElement("div",{className:"left-wrapper"},a?s.a.createElement("div",null,s.a.createElement("h4",{className:"text-center"},"Verifying"),s.a.createElement(i.a,null)):s.a.createElement("p",{className:"d-flex justify-content-center"},"Email Verified Successfully, Redirecting to Settings in \xa0",v)))))))))))))))}}}]);
//# sourceMappingURL=44.ca00f0d9.chunk.js.map