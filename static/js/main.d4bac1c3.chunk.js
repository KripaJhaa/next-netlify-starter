(this.webpackJsonpmaterial=this.webpackJsonpmaterial||[]).push([[0],{194:function(e,t,n){},195:function(e,t,n){},204:function(e,t,n){},207:function(e,t,n){},211:function(e,t,n){},212:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(56),r=n.n(c),o=(n(194),n(58)),l=n(59),s=n(82),d=n(81),j=(n(195),n(291)),b=n(161),u=Object(b.a)({palette:{primary:{main:"#a9bcef"},neutral:{main:"#64748B",contrastText:"#fff"},secondary:{light:"#7a97e5",main:"#4f76e1",contrastText:"#ffcc00"},contrastThreshold:3,tonalOffset:.2}}),m=n(80),O=n(109),h="Toggle Nav",x=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;return t.type===h?!e:e},f=Object(O.a)({navToggle:x}),p=Object(O.b)(f,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),g=n(19),v=n(92),k=n(293),w=n(292),y=n(84),N=n(294),T=n(273),S=n(289),C=n(272),D=n(152),F=n.n(D),_=function(){return{type:h}},P=[{title:"Ticket",icon:"TicketIcon",subtile:"Ticket details",link:"Create ticket and details",redirect:"/tickets"},{title:"Item1",icon:"Home",subtile:"temp1",link:"Some discription"},{title:"Item1",icon:"Home",subtile:"temp1",link:"Some discription"}],I=n(1);function E(){var e=Object(m.c)((function(e){return e.navToggle})),t=Object(m.b)(),n="left";return Object(I.jsx)("div",{children:Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)(w.a,{anchor:n,open:e,classes:{width:100,height:300},children:[Object(I.jsx)(y.a,{variant:"contained","aria-label":"outlined primary button group",onClick:function(){return t(_())},sx:{color:"primary.dark"},children:Object(I.jsx)(F.a,{})}),function(e){return Object(I.jsxs)(k.a,{sx:{width:"top"===e||"bottom"===e?"auto":250},role:"presentation",children:[Object(I.jsx)(N.a,{children:P.map((function(e,n){return Object(I.jsxs)(S.a,{button:!0,children:[Object(I.jsx)(C.a,{primary:e.subtile}),Object(I.jsx)(v.b,{onClick:function(){return t(_())},to:"".concat(e.redirect),children:e.title})]},e.title)}))}),Object(I.jsx)(T.a,{})]})}(n)]})})})}var L=n(295),q=n(85),H=n(120),M=n(153),X=n.n(M),B=function(){var e=Object(m.b)();return Object(I.jsx)(k.a,{sx:{bgcolor:"secondary.dark"},children:Object(I.jsxs)(L.a,{children:[Object(I.jsx)(q.a,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},onClick:function(){return e(_())},children:Object(I.jsx)(X.a,{})}),Object(I.jsx)(H.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:Object(I.jsx)(v.b,{style:{textDecoration:"none"},to:"/",children:"Manage"})})]})})},R=function(){return Object(I.jsxs)("div",{children:[Object(I.jsx)("h3",{children:"Home Page"}),Object(I.jsx)("p",{children:"I am crazy about hats these days. Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."}),Object(I.jsx)("p",{children:"Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."})]})},U=n(14),V=n(7),z=n(3),J=n(33),A=n(135),G=n(281),K=n(283),Q=n(284),W=n(282),Y=n(285),Z=(n(204),n(286)),$=n(154),ee=n.n($),te=n(155),ne=n.n(te),ae=n(156),ie=n.n(ae),ce=n(83),re=(ee.a,ne.a,ie.a,function(e){var t=e.id,n=e.field,a=e.option;e.control;return Object(I.jsx)(Z.a,{id:t,className:"dropdown",options:a,autoHighlight:!0,onChange:function(e,t){return n.onChange(t.label)},getOptionLabel:function(e){return e.label},renderOption:function(e,t){return Object(I.jsxs)(k.a,Object(J.a)(Object(J.a)({component:"li"},e),{},{children:[t.icon," ",t.label," ",t.style]}))},renderInput:function(e){return Object(I.jsx)(A.a,Object(J.a)(Object(J.a)({},e),{},{inputProps:Object(J.a)({},e.inputProps)}))}})}),oe=n(297),le=n(157),se=n.n(le),de=n(290),je=[{label:"Riya"}],be=[{label:"support pipeline"},{label:"add another pipeline"}],ue=[{label:"New"},{label:"waiting on contact"},{label:"waiting on us"},{label:"closed"}],me=[{label:" Low"},{label:"Medium"},{label:"High"}],Oe=function(e){var t=e.name,n=e.important;return Object(I.jsxs)(G.a,{component:"legend",children:[t," ",n?Object(I.jsx)(I.Fragment,{children:"*"}):Object(I.jsx)(I.Fragment,{})]})},he=function(e){var t=e.setTicketFormData,n=i.a.useState({left:!1}),a=Object(V.a)(n,2),c=a[0],r=a[1],o=function(e,t){return function(n){("keydown"!==n.type||"Tab"!==n.key&&"Shift"!==n.key)&&r(Object(J.a)(Object(J.a)({},c),{},Object(z.a)({},e,t)))}},l="right";return Object(I.jsxs)("div",{children:[Object(I.jsx)(oe.a,{className:"create-ticket-btn",color:"secondary","aria-label":"add",onClick:o(l,!0),children:Object(I.jsx)(se.a,{})}),Object(I.jsx)(w.a,{anchor:l,open:c.right,onClose:o(l,!1),children:Object(I.jsx)(xe,{setTicketFormData:t})})]},l)},xe=function(e){var t=e.setTicketFormData,n=Object(ce.b)({}),a=n.control,c=n.register,r=n.handleSubmit,o=(n.watch,i.a.useState(new Date("2014-08-18T21:11:54"))),l=Object(V.a)(o,2),s=l[0],d=l[1];return Object(I.jsxs)("form",{onSubmit:r((function(e){var n=Object(J.a)({id:Object(de.a)()},e);t(n)})),children:[Object(I.jsx)(Oe,{name:"Ticket name"}),Object(I.jsx)(A.a,Object(J.a)(Object(J.a)({id:"ticketName"},c("ticketName")),{},{className:"inputbox"})),Object(I.jsx)(Oe,{name:"Pipeline"}),Object(I.jsx)(ce.a,{name:"pipeline",control:a,render:function(e){var t=e.field;return Object(I.jsx)(re,{field:t,option:be})}}),Object(I.jsx)(Oe,{name:"Ticket Status"}),Object(I.jsx)(ce.a,{name:"status",control:a,render:function(e){var t=e.field;return Object(I.jsx)(re,{field:t,option:ue})}}),Object(I.jsx)(Oe,{name:"Ticket owner"}),Object(I.jsx)(ce.a,{name:"ticketOwner",control:a,render:function(e){var t=e.field;return Object(I.jsx)(re,{field:t,option:je})}}),Object(I.jsx)(Oe,{name:"Priority"}),Object(I.jsx)(ce.a,{name:"priority",control:a,render:function(e){var t=e.field;return Object(I.jsx)(re,{field:t,option:me})}}),Object(I.jsx)(W.b,{dateAdapter:Q.a,children:Object(I.jsx)(K.a,{spacing:3,children:Object(I.jsx)(Y.a,{inputFormat:"MM/dd/yyyy",value:s,onChange:function(e){d(e)},renderInput:function(e){return Object(I.jsx)(A.a,Object(J.a)(Object(J.a)({},c("date")),e))}})})}),Object(I.jsxs)(K.a,{className:"stack",spacing:3,direction:"row",children:[Object(I.jsx)(y.a,{variant:"outlined",type:"submit",children:"Submit"}),Object(I.jsx)(y.a,{color:"neutral",variant:"contained",children:"Create and add another"}),Object(I.jsx)(y.a,{variant:"outlined",children:"cancel"})]})]})},fe=n(159),pe=(n(207),[{field:"ticketname",headerName:"Ticket Name",width:170,editable:!0},{field:"pipeline",headerName:"Pipeline",width:130,editable:!0},{field:"ticketstatus",headerName:"Ticket Status",width:170,editable:!0},{field:"ticketdescription",headerName:"Ticket Discription",width:190,editable:!0},{field:"source",headerName:"Source",width:130,editable:!0},{field:"ticketowner",headerName:"Ticket Owner",width:170,editable:!0},{field:"priority",headerName:"Priority",width:130,editable:!0},{field:"date",headerName:"Date",width:130,editable:!0},{field:"company",headerName:"Company",width:140,editable:!0},{field:"contact",headerName:"Contact",width:130,editable:!0},{field:"firstName",headerName:"Full name",width:160,editable:!0}]),ge=function(e){var t=e.rowData;return Object(I.jsx)("div",{className:"data-grid-view",style:{height:600,width:"90%"},children:Object(I.jsx)(fe.a,{rows:t,columns:pe})})},ve=(n(211),function(){var e=Object(a.useState)([]),t=Object(V.a)(e,2),n=t[0],i=t[1];return Object(I.jsxs)("div",{className:"ticket-dashboard",children:[Object(I.jsx)(ge,{className:"data-grid",rowData:n}),Object(I.jsx)(he,{setTicketFormData:function(e){console.log(e),i([].concat(Object(U.a)(n),[e]))},className:"create-ticket"})]})}),ke=function(){return Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)(g.c,{children:[Object(I.jsx)(g.a,{exact:!0,path:"/",element:Object(I.jsx)(R,{})}),Object(I.jsx)(g.a,{exact:!0,path:"/tickets",element:Object(I.jsx)(ve,{})})]})})},we=function(){return Object(I.jsxs)(v.a,{children:[Object(I.jsx)(B,{}),Object(I.jsx)(E,{}),Object(I.jsx)(ke,{})]})},ye=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(I.jsx)(m.a,{store:p,children:Object(I.jsx)(j.a,{theme:u,children:Object(I.jsx)(we,{})})})}}]),n}(a.Component),Ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,299)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))};r.a.render(Object(I.jsx)(i.a.StrictMode,{children:Object(I.jsx)(ye,{})}),document.getElementById("root")),Ne()}},[[212,1,2]]]);
//# sourceMappingURL=main.d4bac1c3.chunk.js.map