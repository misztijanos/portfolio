(this["webpackJsonpmulti-step-form"]=this["webpackJsonpmulti-step-form"]||[]).push([[0],{3:function(e,t,c){e.exports={nav_container:"SignupForm_nav_container__196Ee",selected:"SignupForm_selected__1vGKL",disabled:"SignupForm_disabled__2MYk8",icon:"SignupForm_icon__2-1il",circle_icon:"SignupForm_circle_icon__3OlbT",form_container:"SignupForm_form_container__1sN8w",button:"SignupForm_button__2BqE4",error:"SignupForm_error__27D-N",review:"SignupForm_review__-DMVW"}},37:function(e,t,c){},38:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var a=c(0),r=c.n(a),s=c(30),i=c.n(s),n=(c(37),c(38),c.p+"static/media/817603_l.551d7585.jpg"),o=c(16),l=c(3),j=c.n(l),b=c(8),u=c(17),d=c(2),m=Object(a.createContext)(null),x=function(){return Object(a.useContext)(m)};function O(e){var t=e.children,c=Object(a.useState)({}),r=Object(u.a)(c,2),s=r[0],i=r[1],n=Object(a.useState)({}),o=Object(u.a)(n,2),l=o[0],j=o[1];return Object(d.jsx)(m.Provider,{value:{profile:s,setProfile:i,social:l,setSocial:j},children:t})}var p=function(){var e=x(),t=e.profile,c=e.social;return Object(d.jsx)("nav",{className:j.a.nav_container,children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsxs)(o.b,{activeClassName:j.a.selected,to:"/",exact:!0,children:[Object(d.jsx)(b.d,{className:j.a.icon,style:!t.name&&{color:"#999"}}),"Profile",Object(d.jsx)(b.b,{className:j.a.circle_icon})]})}),Object(d.jsx)("li",{children:t.name?Object(d.jsxs)(o.b,{activeClassName:j.a.selected,to:"/social",children:[Object(d.jsx)(b.c,{className:j.a.icon,style:!c.twitter&&{color:"#999"}}),"Social",Object(d.jsx)(b.b,{className:j.a.circle_icon})]}):Object(d.jsxs)("a",{className:j.a.disabled,children:[Object(d.jsx)(b.c,{className:j.a.icon,style:!c.twitter&&{color:"#999"}}),"Social",Object(d.jsx)(b.b,{className:j.a.circle_icon})]})}),Object(d.jsx)("li",{children:t.name&&c.twitter?Object(d.jsxs)(o.b,{activeClassName:j.a.selected,to:"/review",children:[Object(d.jsx)(b.a,{className:j.a.icon,style:!(t.name&&c.twitter)&&{color:"#999"}}),"Review",Object(d.jsx)(b.b,{className:j.a.circle_icon})]}):Object(d.jsxs)("a",{className:j.a.disabled,children:[Object(d.jsx)(b.a,{className:j.a.icon,style:!(t.name&&c.twitter)&&{color:"#999"}}),"Review",Object(d.jsx)(b.b,{className:j.a.circle_icon})]})})]})})},h=c(4),f=c(49),v=c(24),_=c(48),N=function(e){var t=e.children;return Object(d.jsx)(_.a.div,{className:j.a.form_container,initial:{x:200,scale:.8,opacity:0,display:"none"},animate:{x:0,scale:1,opacity:1,display:"block"},exit:{x:-200,scale:.8,opacity:0,display:"none"},children:t})},y=function(){var e=Object(v.a)(),t=e.register,c=e.errors,a=e.handleSubmit,r=Object(h.f)(),s=x(),i=s.profile,n=s.setProfile;return Object(d.jsx)(N,{children:Object(d.jsxs)("form",{onSubmit:a((function(e){n(e),r.push("./social")})),noValidate:!0,children:[Object(d.jsx)("h1",{children:"Tell us about yourself"}),Object(d.jsx)("input",{type:"text",name:"name",placeholder:"What's your name?",value:i.name,ref:t({required:!0})}),Object(d.jsx)("p",{className:j.a.error,children:c.name&&"Your name is required"}),Object(d.jsx)("input",{type:"email",name:"email",placeholder:"What's your email?",value:i.email,ref:t({required:!0,pattern:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}),Object(d.jsx)("p",{className:j.a.error,children:c.email&&"A valid email address is required"}),Object(d.jsx)("input",{className:j.a.button,type:"submit",value:"Next"})]})})},w=function(){var e=Object(v.a)(),t=e.register,c=e.errors,a=e.handleSubmit,r=Object(h.f)(),s=x(),i=s.social,n=s.setSocial;return Object(d.jsx)(N,{children:Object(d.jsxs)("form",{onSubmit:a((function(e){n(e),r.push("./review")})),noValidate:!0,children:[Object(d.jsx)("h1",{children:"Add your social media"}),Object(d.jsx)("input",{type:"text",name:"twitter",placeholder:"What's your Twitter?",value:i.twitter,ref:t({required:!0})}),Object(d.jsx)("p",{className:j.a.error,children:c.twitter&&"Your Twitter is required"}),Object(d.jsx)("input",{type:"text",name:"facebook",placeholder:"What's your Facebook?",value:i.facebook,ref:t({required:!0})}),Object(d.jsx)("p",{className:j.a.error,children:c.facebook&&"Your Facebook is required"}),Object(d.jsx)("input",{className:j.a.button,type:"submit",value:"Next"})]})})},g=function(){var e=x(),t=e.profile,c=e.social;return Object(d.jsxs)(N,{children:[Object(d.jsxs)("p",{className:j.a.review,children:[Object(d.jsx)("strong",{children:"Name:"})," ",t.name]}),Object(d.jsxs)("p",{className:j.a.review,children:[Object(d.jsx)("strong",{children:"Email:"})," ",t.email]}),Object(d.jsxs)("p",{className:j.a.review,children:[Object(d.jsx)("strong",{children:"Twitter:"})," ",c.twitter]}),Object(d.jsxs)("p",{className:j.a.review,children:[Object(d.jsx)("strong",{children:"Facebook:"})," ",c.facebook]}),Object(d.jsx)("input",{className:j.a.button,type:"submit",value:"Submit",onClick:function(){return alert("Great Success!! Thank you for trying my app. This is a user interface and state management demo project, so your data won't be stored externally, or transmitted over the web.")}})]})},S=function(){var e=Object(h.g)();return Object(d.jsx)(f.a,{children:Object(d.jsxs)(h.c,{location:e,children:[Object(d.jsx)(h.a,{path:"/",exact:!0,component:y}),Object(d.jsx)(h.a,{path:"/social",component:w}),Object(d.jsx)(h.a,{path:"/review",component:g})]},e.pathname)})},k=function(){return Object(d.jsx)(o.a,{children:Object(d.jsxs)(O,{children:[Object(d.jsx)(p,{}),Object(d.jsx)(S,{})]})})};var F=function(){return Object(d.jsx)("div",{className:"app",style:{background:"url(".concat(n,")"),backgroundSize:"cover",backgroundPosition:"top left"},children:Object(d.jsx)("div",{className:"form-container",children:Object(d.jsx)(k,{})})})};i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(F,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.811a2ced.chunk.js.map