(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[6],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(99),c=n(1),i=n(28),s=n(29),r=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.layout}));return Object(c.useEffect)((function(){var e,n=window.document.body;(e=n.classList).remove.apply(e,Object(a.a)(n.classList)),"light"!==t.skin&&n.classList.add({dark:"dark-layout",bordered:"bordered-layout","semi-dark":"semi-dark-layout"}[t.skin])}),[t.skin]),{skin:t.skin,setSkin:function(t){e(Object(i.l)(t))}}}},116:function(e,t,n){},147:function(e,t,n){},148:function(e,t,n){},149:function(e,t,n){},293:function(e,t,n){"use strict";n.r(t);var a=n(7),c=n(1),i=n(29),s=n(28),r=n(17),o=n(2),l=n.n(o),d=(n(113),n(3)),u=function(e){var t,n=e.layout,o=e.children,u=e.appLayout,j=e.wrapperClass,b=e.transition,m=e.routeMeta,O=Object(i.b)(),h=Object(i.c)((function(e){return e})),f=h.navbar,v=h.layout.contentWidth,p="HorizontalLayout"!==n||u?c.Fragment:"div";return Object(c.useEffect)((function(){return m&&(m.contentWidth&&O(Object(s.b)(m.contentWidth)),m.menuCollapsed&&O(Object(s.f)(m.menuCollapsed)),m.menuHidden&&O(Object(s.g)(m.menuHidden))),function(){m&&(m.contentWidth&&O(Object(s.b)("full")),m.menuCollapsed&&O(Object(s.f)(!m.menuCollapsed)),m.menuHidden&&O(Object(s.g)(!m.menuHidden)))}}),[]),Object(d.jsxs)("div",{className:l()("app-content content overflow-hidden",(t={},Object(r.a)(t,j,j),Object(r.a)(t,"show-overlay",f.query.length),t)),children:[Object(d.jsx)("div",{className:"content-overlay"}),Object(d.jsx)("div",{className:"header-navbar-shadow"}),Object(d.jsx)("div",{className:l()(Object(r.a)({"content-wrapper":!u,"content-area-wrapper":u,"container-xxl p-0":"boxed"===v},"animate__animated animate__".concat(b),"none"!==b&&b.length)),children:Object(d.jsx)(p,Object(a.a)(Object(a.a)({},"HorizontalLayout"!==n||u?{}:{className:l()({"content-body":!u})}),{},{children:o}))})]})},j=n(96),b=n(98),m=[{path:"/home",component:Object(c.lazy)((function(){return n.e(9).then(n.bind(null,295))}))},{path:"/second-page",component:Object(c.lazy)((function(){return n.e(10).then(n.bind(null,292))}))},{path:"/login",component:Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,294))})),layout:"BlankLayout",meta:{authRoute:!0}},{path:"/error",component:Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,291))})),layout:"BlankLayout"}],O=n(15),h=n(100),f=function(e){var t=e.children,n=Object(c.useState)(!1),a=Object(O.a)(n,2),i=a[0],s=a[1],r=Object(h.a)().skin;return Object(c.useEffect)((function(){return s(!0),function(){return s(!1)}}),[]),i?Object(d.jsx)("div",{className:l()("blank-page",{"dark-layout":"dark"===r}),children:Object(d.jsx)("div",{className:"app-content content",children:Object(d.jsx)("div",{className:"content-wrapper",children:Object(d.jsx)("div",{className:"content-body",children:t})})})}):null},v=n(285),p=n(22),x=n(8),g=n(268),k=function(e){return Object(a.a)(Object(a.a)({},e),{},{colors:Object(a.a)(Object(a.a)({},e.colors),{},{primary25:"#7367f01a",primary:"#7367f0",neutral10:"#7367f0",neutral20:"#ededed",neutral30:"#ededed"})})},N=n(269),y=n(270),w=n(106),L=n.n(w),C=(n(116),function(e){var t=e.skin,n=e.isRtl,a=e.layout,i=e.setSkin,s=e.setIsRtl,r=e.isHidden,o=e.setLayout,u=e.navbarType,j=e.footerType,b=e.transition,m=e.navbarColor,h=e.setIsHidden,f=e.contentWidth,v=e.menuCollapsed,x=e.setLastLayout,w=e.setTransition,C=e.setNavbarType,z=e.setFooterType,T=e.setNavbarColor,A=e.setContentWidth,I=e.setMenuCollapsed,H=Object(c.useState)(!1),S=Object(O.a)(H,2),M=S[0],P=S[1],D=function(e){e.preventDefault(),P(!M)},E=[{value:"fadeIn",label:"Fade"},{value:"fadeInLeft",label:"Fade In Left"},{value:"zoomIn",label:"Zoom In"},{value:"none",label:"None"}],G=E.find((function(e){return e.value===b}));return Object(d.jsxs)("div",{className:l()("customizer d-none d-md-block",{open:M}),children:[Object(d.jsx)("a",{href:"/",className:"customizer-toggle d-flex align-items-center justify-content-center",onClick:D,children:Object(d.jsx)(N.a,{size:14,className:"spinner"})}),Object(d.jsxs)(L.a,{className:"customizer-content",options:{wheelPropagation:!1},children:[Object(d.jsxs)("div",{className:"customizer-header px-2 pt-1 pb-0 position-relative",children:[Object(d.jsx)("h4",{className:"mb-0",children:"Theme Customizer"}),Object(d.jsx)("p",{className:"m-0",children:"Customize & Preview in Real Time"}),Object(d.jsx)("a",{href:"/",className:"customizer-close",onClick:D,children:Object(d.jsx)(y.a,{})})]}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:"px-2",children:[Object(d.jsxs)("div",{className:"mb-2",children:[Object(d.jsx)("p",{className:"fw-bold",children:"Skin"}),Object(d.jsx)("div",{className:"d-flex",children:function(){var e=[{name:"light",label:"Light",checked:"light"===t},{name:"bordered",label:"Bordered",checked:"bordered"===t},{name:"dark",label:"Dark",checked:"dark"===t},{name:"semi-dark",label:"Semi Dark",checked:"semi-dark"===t}];return e.map((function(t,n){var c=n!==e.length-1;return"HorizontalLayout"===a&&"semi-dark"===t.name?null:Object(d.jsxs)("div",{className:l()("form-check",{"mb-2 me-1":c}),children:[Object(d.jsx)(p.p,{type:"radio",id:t.name,checked:t.checked,onChange:function(){return i(t.name)}}),Object(d.jsx)(p.s,{className:"form-check-label",for:t.name,children:t.label})]},n)}))}()})]}),Object(d.jsxs)("div",{className:"mb-2",children:[Object(d.jsx)("p",{className:"fw-bold",children:"Content Width"}),Object(d.jsxs)("div",{className:"d-flex",children:[Object(d.jsxs)("div",{className:"form-check me-1",children:[Object(d.jsx)(p.p,{type:"radio",id:"full-width",checked:"full"===f,onChange:function(){return A("full")}}),Object(d.jsx)(p.s,{className:"form-check-label",for:"full-width",children:"Full Width"})]}),Object(d.jsxs)("div",{className:"form-check",children:[Object(d.jsx)(p.p,{id:"boxed",type:"radio",checked:"boxed"===f,onChange:function(){return A("boxed")}}),Object(d.jsx)(p.s,{className:"form-check-label",for:"boxed",children:"Boxed"})]})]})]}),Object(d.jsx)("div",{className:"form-switch mb-2 ps-0",children:Object(d.jsxs)("div",{className:"d-flex",children:[Object(d.jsx)("p",{className:"fw-bold me-auto mb-0",children:"RTL"}),Object(d.jsx)(p.p,{type:"switch",id:"rtl",name:"RTL",checked:n,onChange:function(){return s(!n)}})]})}),Object(d.jsx)("div",{className:"mb-2",children:Object(d.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(d.jsx)("p",{className:"fw-bold mb-0",children:"Router Transition"}),Object(d.jsx)(g.a,{theme:k,className:"react-select",classNamePrefix:"select",defaultValue:E[0],value:G,options:E,isClearable:!1,onChange:function(e){var t=e.value;return w(t)}})]})})]}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:"px-2",children:[Object(d.jsx)("p",{className:"fw-bold",children:"Menu Layout"}),Object(d.jsx)("div",{className:"mb-2",children:Object(d.jsxs)("div",{className:"d-flex align-items-center",children:[Object(d.jsxs)("div",{className:"form-check me-1",children:[Object(d.jsx)(p.p,{type:"radio",id:"vertical-layout",checked:"VerticalLayout"===a,onChange:function(){o("vertical"),x("vertical")}}),Object(d.jsx)(p.s,{className:"form-check-label",for:"vertical-layout",children:"Vertical"})]}),Object(d.jsxs)("div",{className:"form-check",children:[Object(d.jsx)(p.p,{type:"radio",id:"horizontal-layout",checked:"HorizontalLayout"===a,onChange:function(){o("horizontal"),x("horizontal")}}),Object(d.jsx)(p.s,{className:"form-check-label",for:"horizontal-layout",children:"Horizontal"})]})]})}),"HorizontalLayout"!==a?Object(d.jsx)("div",{className:"form-switch mb-2 ps-0",children:Object(d.jsxs)("div",{className:"d-flex align-items-center",children:[Object(d.jsx)("p",{className:"fw-bold me-auto mb-0",children:"Menu Collapsed"}),Object(d.jsx)(p.p,{type:"switch",id:"menu-collapsed",name:"menu-collapsed",checked:v,onChange:function(){return I(!v)}})]})}):null,Object(d.jsx)("div",{className:"form-switch mb-2 ps-0",children:Object(d.jsxs)("div",{className:"d-flex align-items-center",children:[Object(d.jsx)("p",{className:"fw-bold me-auto mb-0",children:"Menu Hidden"}),Object(d.jsx)(p.p,{type:"switch",id:"menu-hidden",name:"menu-hidden",checked:r,onChange:function(){return h(!r)}})]})})]}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:"px-2",children:["HorizontalLayout"!==a?Object(d.jsxs)("div",{className:"mb-2",children:[Object(d.jsx)("p",{className:"fw-bold",children:"Navbar Color"}),Object(d.jsx)("ul",{className:"list-inline unstyled-list",children:["white","primary","secondary","success","danger","info","warning","dark"].map((function(e){return Object(d.jsx)("li",{className:l()("color-box bg-".concat(e),{selected:m===e,border:"white"===e}),onClick:function(){return T(e)}},e)}))})]}):null,Object(d.jsxs)("div",{className:"mb-2",children:[Object(d.jsxs)("p",{className:"fw-bold",children:["HorizontalLayout"===a?"Menu":"Navbar"," Type"]}),Object(d.jsx)("div",{className:"d-flex",children:function(){var e=[{name:"floating",label:"Floating",checked:"floating"===u},{name:"sticky",label:"Sticky",checked:"sticky"===u},{name:"static",label:"Static",checked:"static"===u},{name:"hidden",label:"Hidden",checked:"hidden"===u}];return e.map((function(t,n){var c=n!==e.length-1;return"HorizontalLayout"===a&&"hidden"===t.name?null:Object(d.jsxs)("div",{className:l()("form-check",{"mb-2 me-1":c}),children:[Object(d.jsx)(p.p,{type:"radio",id:t.name,checked:t.checked,onChange:function(){return C(t.name)}}),Object(d.jsx)(p.s,{className:"form-check-label",for:t.name,children:t.label})]},n)}))}()})]})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("div",{className:"px-2",children:Object(d.jsxs)("div",{className:"mb-2",children:[Object(d.jsx)("p",{className:"fw-bold",children:"Footer Type"}),Object(d.jsx)("div",{className:"d-flex",children:function(){var e=[{name:"sticky",label:"Sticky",checked:"sticky"===j},{name:"static",label:"Static",checked:"static"===j},{name:"hidden",label:"Hidden",checked:"hidden"===j}];return e.map((function(t,n){var a=n!==e.length-1;return Object(d.jsxs)("div",{className:l()("form-check",{"mb-2 me-1":a}),children:[Object(d.jsx)(p.p,{type:"radio",checked:t.checked,id:"footer-".concat(t.name),onChange:function(){return z(t.name)}}),Object(d.jsx)(p.s,{className:"form-check-label",for:"footer-".concat(t.name),children:t.label})]},n)}))}()})]})})]})]})}),z=n(30),T=["showOffset","scrollBehaviour","children"],A=function(e){var t=e.showOffset,n=e.scrollBehaviour,i=e.children,s=Object(z.a)(e,T),r=Object(c.useState)(!1),o=Object(O.a)(r,2),l=o[0],u=o[1];Object(c.useEffect)((function(){window&&window.addEventListener("scroll",(function(){window.pageYOffset>=t?u(!0):u(!1)}))}),[]);return l&&Object(d.jsx)("div",Object(a.a)(Object(a.a)({className:"scroll-to-top",onClick:function(){window.scroll({top:0,behavior:n})}},s),{},{children:i}))},I=A;A.defaultProps={scrollBehaviour:"smooth"};var H=n(271),S=function(){return Object(d.jsxs)("p",{className:"clearfix mb-0",children:[Object(d.jsxs)("span",{className:"float-md-start d-block d-md-inline-block mt-25",children:["COPYRIGHT \xa9 ",(new Date).getFullYear()," ",Object(d.jsx)("a",{href:"https://1.envato.market/pixinvent_portfolio",target:"_blank",rel:"noopener noreferrer",children:"Pixinvent"}),Object(d.jsx)("span",{className:"d-none d-sm-inline-block",children:", All rights Reserved"})]}),Object(d.jsxs)("span",{className:"float-md-end d-none d-md-block",children:["Hand-crafted & Made with",Object(d.jsx)(H.a,{size:14})]})]})},M=["img","size","icon","color","status","badgeUp","content","tag","initials","imgWidth","className","badgeText","imgHeight","badgeColor","imgClassName","contentStyles"],P=Object(c.forwardRef)((function(e,t){var n,c,i=e.img,s=e.size,o=e.icon,u=e.color,j=e.status,b=e.badgeUp,m=e.content,O=e.tag,h=e.initials,f=e.imgWidth,v=e.className,x=e.badgeText,g=e.imgHeight,k=e.badgeColor,N=e.imgClassName,y=e.contentStyles,w=Object(z.a)(e,M);return Object(d.jsxs)(O,Object(a.a)(Object(a.a)({className:l()("avatar",(n={},Object(r.a)(n,v,v),Object(r.a)(n,"bg-".concat(u),u),Object(r.a)(n,"avatar-".concat(s),s),n)),ref:t},w),{},{children:[!1===i||void 0===i?Object(d.jsxs)("span",{className:l()("avatar-content",{"position-relative":b}),style:y,children:[h?function(e){var t=[];return e.split(" ").forEach((function(e){t.push(e[0])})),t.join("")}(m):m,o||null,b?Object(d.jsx)(p.a,{color:k||"primary",className:"badge-sm badge-up",pill:!0,children:x||"0"}):null]}):Object(d.jsx)("img",{className:l()(Object(r.a)({},N,N)),src:i,alt:"avatarImg",height:g&&!s?g:32,width:f&&!s?f:32}),j?Object(d.jsx)("span",{className:l()((c={},Object(r.a)(c,"avatar-status-".concat(j),j),Object(r.a)(c,"avatar-status-".concat(s),s),c))}):null]}))})),D=P;P.defaultProps={tag:"div"};var E=n(272),G=n(273),W=n(274),F=n(275),R=n(276),V=n(277),B=n(278),_=n.p+"static/media/avatar-s-11.1d46cc62.jpg",Y=function(){var e=Object(c.useState)(null),t=Object(O.a)(e,1)[0],n=t&&t.avatar||_;return Object(d.jsxs)(p.x,{tag:"li",className:"dropdown-user nav-item",children:[Object(d.jsxs)(p.m,{href:"/",tag:"a",className:"nav-link dropdown-user-link",onClick:function(e){return e.preventDefault()},children:[Object(d.jsxs)("div",{className:"user-nav d-sm-flex d-none",children:[Object(d.jsx)("span",{className:"user-name fw-bold",children:t&&t.username||"John Doe"}),Object(d.jsx)("span",{className:"user-status",children:t&&t.role||"Admin"})]}),Object(d.jsx)(D,{img:n,imgHeight:"40",imgWidth:"40",status:"online"})]}),Object(d.jsxs)(p.l,{end:!0,children:[Object(d.jsxs)(p.k,{tag:"a",href:"/pages/profile",onClick:function(e){return e.preventDefault()},children:[Object(d.jsx)(E.a,{size:14,className:"me-75"}),Object(d.jsx)("span",{className:"align-middle",children:"Profile"})]}),Object(d.jsxs)(p.k,{tag:"a",href:"/apps/email",onClick:function(e){return e.preventDefault()},children:[Object(d.jsx)(G.a,{size:14,className:"me-75"}),Object(d.jsx)("span",{className:"align-middle",children:"Inbox"})]}),Object(d.jsxs)(p.k,{tag:"a",href:"/apps/todo",onClick:function(e){return e.preventDefault()},children:[Object(d.jsx)(W.a,{size:14,className:"me-75"}),Object(d.jsx)("span",{className:"align-middle",children:"Tasks"})]}),Object(d.jsxs)(p.k,{tag:"a",href:"/apps/chat",onClick:function(e){return e.preventDefault()},children:[Object(d.jsx)(F.a,{size:14,className:"me-75"}),Object(d.jsx)("span",{className:"align-middle",children:"Chats"})]}),Object(d.jsx)(p.k,{divider:!0}),Object(d.jsxs)(p.k,{tag:"a",href:"/pages/account-settings",onClick:function(e){return e.preventDefault()},children:[Object(d.jsx)(N.a,{size:14,className:"me-75"}),Object(d.jsx)("span",{className:"align-middle",children:"Settings"})]}),Object(d.jsxs)(p.k,{tag:"a",href:"/pages/pricing",onClick:function(e){return e.preventDefault()},children:[Object(d.jsx)(R.a,{size:14,className:"me-75"}),Object(d.jsx)("span",{className:"align-middle",children:"Pricing"})]}),Object(d.jsxs)(p.k,{tag:"a",href:"/pages/faq",onClick:function(e){return e.preventDefault()},children:[Object(d.jsx)(V.a,{size:14,className:"me-75"}),Object(d.jsx)("span",{className:"align-middle",children:"FAQ"})]}),Object(d.jsxs)(p.k,{tag:b.b,to:"/login",children:[Object(d.jsx)(B.a,{size:14,className:"me-75"}),Object(d.jsx)("span",{className:"align-middle",children:"Logout"})]})]})]})},J=n(279),q=n(280),U=function(e){var t=e.skin,n=e.setSkin,a=function(){return"dark"===t?Object(d.jsx)(J.a,{className:"ficon",onClick:function(){return n("light")}}):Object(d.jsx)(q.a,{className:"ficon",onClick:function(){return n("dark")}})};return Object(d.jsxs)(c.Fragment,{children:[Object(d.jsx)("div",{className:"bookmark-wrapper d-flex align-items-center",children:Object(d.jsx)(p.t,{className:"d-none d-lg-block",children:Object(d.jsx)(p.u,{className:"nav-link-style",children:Object(d.jsx)(a,{})})})}),Object(d.jsx)("ul",{className:"nav navbar-nav align-items-center ms-auto",children:Object(d.jsx)(Y,{})})]})},Q=n(281),Z=function(e){var t=e.skin,n=e.setSkin,a=e.setMenuVisibility;return Object(d.jsxs)(c.Fragment,{children:[Object(d.jsx)("ul",{className:"navbar-nav d-xl-none",children:Object(d.jsx)(p.t,{className:"mobile-menu me-auto d-flex align-items-center",children:Object(d.jsx)(p.u,{className:"nav-menu-main menu-toggle hidden-xs is-active",onClick:function(){return a(!0)},children:Object(d.jsx)(Q.a,{className:"ficon"})})})}),Object(d.jsx)(U,{skin:t,setSkin:n})]})},K=n(282),X=n(283),$=function(e){var t=e.menuCollapsed,n=e.setMenuCollapsed,a=e.setMenuVisibility,i=e.setGroupOpen,s=e.menuHover;Object(c.useEffect)((function(){!s&&t&&i([])}),[s,t]);var r=function(){return t?Object(d.jsx)(X.a,{size:20,"data-tour":"toggle-icon",className:"text-primary toggle-icon d-none d-xl-block",onClick:function(){return n(!1)}}):Object(d.jsx)(K.a,{size:20,"data-tour":"toggle-icon",className:"text-primary toggle-icon d-none d-xl-block",onClick:function(){return n(!0)}})};return Object(d.jsx)("div",{className:"navbar-header",children:Object(d.jsxs)("ul",{className:"nav navbar-nav flex-row",children:[Object(d.jsx)("li",{className:"nav-item me-auto",children:Object(d.jsxs)(b.c,{to:"/",className:"navbar-brand",children:[Object(d.jsx)("span",{className:"brand-logo",children:Object(d.jsx)("img",{src:x.a.app.appLogoImage,alt:"logo"})}),Object(d.jsx)("h2",{className:"brand-text mb-0",children:x.a.app.appName})]})}),Object(d.jsx)("li",{className:"nav-item nav-toggle",children:Object(d.jsxs)("div",{className:"nav-link modern-nav-toggle cursor-pointer",children:[Object(d.jsx)(r,{}),Object(d.jsx)(y.a,{onClick:function(){return a(!1)},className:"toggle-icon icon-x d-block d-xl-none",size:20})]})})]})})},ee=function(e){var t=e.item,n=e.activeItem,i=e.setActiveItem,s=e.currentActiveItem,r=t.externalLink?"a":b.c,o=Object(j.g)();return Object(c.useEffect)((function(){null!==s&&i(s)}),[o]),Object(d.jsx)("li",{className:l()({"nav-item":!t.children,disabled:t.disabled,active:t.navLink===n}),children:Object(d.jsxs)(r,Object(a.a)(Object(a.a)({className:"d-flex align-items-center",target:t.newTab?"_blank":void 0},!0===t.externalLink?{href:t.navLink||"/"}:{to:t.navLink||"/",isActive:function(e){if(!e)return!1;e.url&&""!==e.url&&e.url===t.navLink&&(s=t.navLink)}}),{},{children:[t.icon,Object(d.jsx)("span",{className:"menu-item text-truncate",children:t.title}),t.badge&&t.badgeText?Object(d.jsx)(p.a,{className:"ms-auto me-1",color:t.badge,pill:!0,children:t.badgeText}):null]}))})},te=n(99),ne=n(145),ae=n(146),ce=Object(c.createContext)(),ie=(Object(ae.a)(ce.Consumer),function e(t,n){var a=t.children;if(!a)return!1;var c,i=Object(ne.a)(a);try{for(i.s();!(c=i.n()).done;){var s=c.value;if(s.children&&e(s,n))return!0;if(s&&s.navLink&&n&&(s.navLink===n||n.includes(s.navLink)))return!0}}catch(r){i.e(r)}finally{i.f()}return!1}),se=function e(t,n,a){t.forEach((function(t){if(!a.includes(t.id)){var c=n.indexOf(t.id);c>-1&&n.splice(c,1),t.children&&e(t.children,n,a)}}))},re=["item","groupOpen","menuHover","activeItem","parentItem","routerProps","groupActive","currentActiveGroup","setGroupOpen","setActiveItem","menuCollapsed","setGroupActive","setCurrentActiveGroup","currentActiveItem"],oe=function(e){var t=e.item,n=e.groupOpen,i=e.menuHover,s=e.activeItem,r=e.parentItem,o=e.routerProps,u=e.groupActive,m=e.currentActiveGroup,O=e.setGroupOpen,h=e.setActiveItem,f=e.menuCollapsed,v=e.setGroupActive,x=e.setCurrentActiveGroup,g=e.currentActiveItem,k=Object(z.a)(e,re),N=Object(j.g)(),y=Object(j.g)().pathname,w=function(e,t){!function(e,t){var a=n,c=u;a.includes(e.id)?(a.splice(a.indexOf(e.id),1),e.children&&se(e.children,a,u)):c.includes(e.id)||m.includes(e.id)?(!c.includes(e.id)&&m.includes(e.id)?c.push(e.id):c.splice(c.indexOf(e.id),1),v(Object(te.a)(c))):t?(t.children&&se(t.children,a,u),a.includes(e.id)||a.push(e.id)):(a=[]).includes(e.id)||a.push(e.id),O(Object(te.a)(a))}(t,r),e.preventDefault()};Object(c.useEffect)((function(){if(ie(t,y))u.includes(t.id)||u.push(t.id);else{var e=u.indexOf(t.id);e>-1&&u.splice(e,1)}v(Object(te.a)(u)),x(Object(te.a)(u)),O([])}),[N]);var L;return Object(d.jsxs)("li",{className:l()("nav-item has-sub",{open:(L=t.id,f&&i||!1===f?!(!u.includes(L)&&!n.includes(L))||void 0:(!u.includes(L)||!f||!1!==i)&&null),"menu-collapsed-open":u.includes(t.id),"sidebar-group-active":u.includes(t.id)||n.includes(t.id)||m.includes(t.id)}),children:[Object(d.jsxs)(b.b,{className:"d-flex align-items-center",to:"/",onClick:function(e){return w(e,t)},children:[t.icon,Object(d.jsx)("span",{className:"menu-title text-truncate",children:t.title}),t.badge&&t.badgeText?Object(d.jsx)(p.a,{className:"ms-auto me-1",color:t.badge,pill:!0,children:t.badgeText}):null]}),Object(d.jsx)("ul",{className:"menu-content",children:Object(d.jsx)(p.i,{isOpen:u&&u.includes(t.id)||n&&n.includes(t.id),children:Object(d.jsx)(ue,Object(a.a)(Object(a.a)({},k),{},{items:t.children,groupActive:u,setGroupActive:v,currentActiveGroup:m,setCurrentActiveGroup:x,groupOpen:n,setGroupOpen:O,parentItem:t,menuCollapsed:f,menuHover:i,routerProps:o,currentActiveItem:g,activeItem:s,setActiveItem:h}))})})]})},le=n(284),de=function(e){var t=e.item;return Object(d.jsxs)("li",{className:"navigation-header",children:[Object(d.jsx)("span",{children:t.header}),Object(d.jsx)(le.a,{className:"feather-more-horizontal"})]})},ue=function(e){var t={VerticalNavMenuLink:ee,VerticalNavMenuGroup:oe,VerticalNavMenuSectionHeader:de};return e.items.map((function(n,c){var i=t[function(e){return e.header?"VerticalNavMenuSectionHeader":e.children?"VerticalNavMenuGroup":"VerticalNavMenuLink"}(n)];return n.children?Object(d.jsx)(i,Object(a.a)({item:n,index:c},e),n.id):Object(d.jsx)(i,Object(a.a)({item:n},e),n.id||n.header)}))},je=function(e){var t=e.menuCollapsed,n=e.routerProps,i=e.menu,s=e.currentActiveItem,r=e.skin,o=e.menuData,u=Object(c.useState)([]),j=Object(O.a)(u,2),b=j[0],m=j[1],h=Object(c.useState)([]),f=Object(O.a)(h,2),v=f[0],p=f[1],x=Object(c.useState)([]),g=Object(O.a)(x,2),k=g[0],N=g[1],y=Object(c.useState)(null),w=Object(O.a)(y,2),C=w[0],z=w[1],T=Object(c.useState)(!1),A=Object(O.a)(T,2),I=A[0],H=A[1],S=Object(c.useRef)(null);return Object(d.jsx)(c.Fragment,{children:Object(d.jsx)("div",{className:l()("main-menu menu-fixed menu-accordion menu-shadow",{expanded:I||!1===t,"menu-light":"semi-dark"!==r&&"dark"!==r,"menu-dark":"semi-dark"===r||"dark"===r}),onMouseEnter:function(){H(!0)},onMouseLeave:function(){return H(!1)},children:i||Object(d.jsxs)(c.Fragment,{children:[Object(d.jsx)($,Object(a.a)({setGroupOpen:m,menuHover:I},e)),Object(d.jsx)("div",{className:"shadow-bottom",ref:S}),Object(d.jsx)(L.a,{className:"main-menu-content",options:{wheelPropagation:!1},onScrollY:function(e){return function(e){S&&e.scrollTop>0?S.current.classList.contains("d-block")||S.current.classList.add("d-block"):S.current.classList.contains("d-block")&&S.current.classList.remove("d-block")}(e)},children:Object(d.jsx)("ul",{className:"navigation navigation-main",children:Object(d.jsx)(ue,{items:o,menuData:o,menuHover:I,groupOpen:b,activeItem:C,groupActive:v,currentActiveGroup:k,routerProps:n,setGroupOpen:m,menuCollapsed:t,setActiveItem:z,setGroupActive:p,setCurrentActiveGroup:N,currentActiveItem:s})})})]})})})},be=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.layout.isRTL}));return Object(c.useEffect)((function(){var e=document.getElementsByTagName("html")[0];t?e.setAttribute("dir","rtl"):e.setAttribute("dir","ltr")}),[t]),[t,function(t){e(Object(s.j)(t))}]},me=function(){var e=Object(i.b)();return{navbarType:Object(i.c)((function(e){return e.layout})).navbarType,setNavbarType:function(t){e(Object(s.i)(t))}}},Oe=function(){var e=Object(i.b)();return{setFooterType:function(t){e(Object(s.c)(t))},footerType:Object(i.c)((function(e){return e.layout})).footerType}},he=function(){var e=Object(i.b)();return{navbarColor:Object(i.c)((function(e){return e.layout})).navbarColor,setNavbarColor:function(t){e(Object(s.h)(t))}}},fe=(n(147),n(148),function(e){var t=e.menu,n=e.navbar,r=e.footer,o=e.menuData,u=e.children,b=e.routerProps,m=e.setLastLayout,f=e.currentActiveItem,g=be(),k=Object(O.a)(g,2),N=k[0],y=k[1],w=Object(h.a)(),L=w.skin,z=w.setSkin,T=me(),A=T.navbarType,H=T.setNavbarType,M=Oe(),P=M.footerType,D=M.setFooterType,E=he(),G=E.navbarColor,W=E.setNavbarColor,F=Object(c.useState)(!1),R=Object(O.a)(F,2),V=R[0],B=R[1],_=Object(c.useState)(!1),Y=Object(O.a)(_,2),J=Y[0],q=Y[1],U=Object(c.useState)(window.innerWidth),Q=Object(O.a)(U,2),K=Q[0],X=Q[1],$=Object(i.b)(),ee=Object(i.c)((function(e){return e.layout})),te=function(){X(window.innerWidth)},ne=Object(j.g)(),ae=ee.contentWidth,ce=ee.menuCollapsed,ie=ee.menuHidden,se=function(e){return $(Object(s.f)(e))};Object(c.useEffect)((function(){J&&K<1200&&q(!1)}),[ne]),Object(c.useEffect)((function(){void 0!==window&&window.addEventListener("resize",te)}),[K]),Object(c.useEffect)((function(){return B(!0),function(){return B(!1)}}),[]);var re={static:"footer-static",sticky:"footer-fixed",hidden:"footer-hidden"},oe={floating:"boxed"===ae?"floating-nav container-xxl":"floating-nav",sticky:"fixed-top",static:"navbar-static-top",hidden:"d-none"},le=""!==G&&"light"!==G&&"white"!==G;return V?Object(d.jsxs)("div",Object(a.a)(Object(a.a)({className:l()("wrapper vertical-layout ".concat({floating:"navbar-floating",sticky:"navbar-sticky",static:"navbar-static",hidden:"navbar-hidden"}[A]||"navbar-floating"," ").concat(re[P]||"footer-static"),{"vertical-menu-modern":K>=1200,"menu-collapsed":ce&&K>=1200,"menu-expanded":!ce&&K>1200,"vertical-overlay-menu":K<1200,"menu-hide":!J&&K<1200,"menu-open":J&&K<1200})},ie?{"data-col":"1-column"}:{}),{},{children:[ie?null:Object(d.jsx)(je,{skin:L,menu:t,menuData:o,routerProps:b,menuCollapsed:ce,menuVisibility:J,setMenuCollapsed:se,setMenuVisibility:q,currentActiveItem:f}),Object(d.jsx)(p.v,{expand:"lg",container:!1,light:"dark"!==L,dark:"dark"===L||le,color:le?G:void 0,className:l()("header-navbar navbar align-items-center ".concat(oe[A]||"floating-nav"," navbar-shadow")),children:Object(d.jsx)("div",{className:"navbar-container d-flex content",children:n||Object(d.jsx)(Z,{setMenuVisibility:q,skin:L,setSkin:z})})}),u,Object(d.jsx)("div",{className:l()("sidenav-overlay",{show:J}),onClick:function(){return q(!1)}}),!0===x.a.layout.customizer?Object(d.jsx)(C,{skin:L,setSkin:z,footerType:P,setFooterType:D,navbarType:A,setNavbarType:H,navbarColor:G,setNavbarColor:W,isRtl:N,setIsRtl:y,layout:e.layout,setLayout:e.setLayout,setLastLayout:m,isHidden:ie,setIsHidden:function(e){return $(Object(s.g)(e))},contentWidth:ae,setContentWidth:function(e){return $(Object(s.b)(e))},menuCollapsed:ce,setMenuCollapsed:se,transition:e.transition,setTransition:e.setTransition,themeConfig:x.a}):null,Object(d.jsx)("footer",{className:l()("footer footer-light ".concat(re[P]||"footer-static"),{"d-none":"hidden"===P}),children:r||Object(d.jsx)(S,{footerType:P,footerClasses:re})}),!0===x.a.layout.scrollTop?Object(d.jsx)("div",{className:"scroll-to-top",children:Object(d.jsx)(I,{showOffset:300,className:"scroll-top d-block",children:Object(d.jsx)(p.b,{className:"btn-icon",color:"primary",children:Object(d.jsx)(v.a,{size:14})})})}):null]})):null}),ve=n(286),pe=n(287),xe=n(288),ge=[{id:"home",title:"\u0420\u0435\u0430\u043b\u044c\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f",icon:Object(d.jsx)(ve.a,{size:20}),navLink:"/home"},{id:"secondPage",title:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0441\u043c\u0435\u043d\u0430",icon:Object(d.jsx)(pe.a,{size:20}),navLink:"/second-page"},{id:"secondPage",title:"\u041f\u0440\u043e\u0441\u0442\u043e\u0438",icon:Object(d.jsx)(xe.a,{size:20}),navLink:"/error"}],ke=function(e){return Object(d.jsx)(fe,Object(a.a)(Object(a.a)({menuData:ge},e),{},{children:e.children}))},Ne=function(e){var t=e.item,n=e.isChild,i=e.activeItem,s=e.setActiveItem,r=e.setOpenDropdown,o=e.currentActiveItem,u=t.externalLink?"a":b.c;return Object(c.useEffect)((function(){null!==o&&s(o)}),[location.pathname]),Object(d.jsx)("li",{className:l()("nav-item",{active:t.navLink===i,disabled:t.disabled}),onClick:function(){return r([])},children:Object(d.jsxs)(u,Object(a.a)(Object(a.a)({className:l()("d-flex align-items-center",{"dropdown-item":n,"nav-link":!n}),tag:u,target:t.newTab?"_blank":void 0},!0===t.externalLink?{href:t.navLink||"/"}:{to:t.navLink||"/",isActive:function(e,n){if(!e)return!1;e.url&&""!==e.url&&e.url===t.navLink&&(o=t.navLink)}}),{},{children:[t.icon,Object(d.jsx)("span",{children:t.title})]}))})},ye=function(e){var t=e.item,n=e.submenu,i=e.activeItem,s=e.routerProps,r=e.groupActive,o=e.onMouseEnter,u=e.onMouseLeave,m=e.openDropdown,O=e.setActiveItem,h=e.setGroupActive,f=e.setOpenDropdown,v=e.currentActiveItem,x=Object(j.g)(),g=Object(j.g)().pathname;Object(c.useEffect)((function(){if(ie(t,g))r.includes(t.id)||r.push(t.id);else{var e=r.indexOf(t.id);e>-1&&r.splice(e,1)}h(Object(te.a)(r))}),[x]);var k=[{enabled:!0,phase:"write",name:"setMaxHeight",fn:function(e){var t,n=window.innerHeight,c=e.state.elements.popper,i=c.getBoundingClientRect().top;n-i-c.clientHeight-28<1&&(t={maxHeight:n-i-25,overflowY:"auto"});var s=c.getBoundingClientRect();s.left+s.width-(window.innerWidth-16)>=0&&c.closest(".dropdown").classList.add("openLeft"),e.state.styles.popper=Object(a.a)(Object(a.a)({},e.state.styles.popper),t)}}];return Object(d.jsxs)(p.j,{tag:"li",toggle:function(){return null},className:l()({"nav-item":!1===n,"dropdown-submenu":!0===n,"sidebar-group-active active":r.includes(t.id)}),isOpen:m.includes(t.id),onMouseEnter:function(){return o(t.id)},onMouseLeave:function(){return u(t.id)},children:[Object(d.jsxs)(p.m,{to:"/",tag:b.b,onClick:function(e){return e.preventDefault()},className:l()("dropdown-toggle d-flex align-items-center",{"dropdown-item":!0===n,"nav-link":!1===n}),children:[t.icon,Object(d.jsx)("span",{children:t.title})]}),Object(d.jsx)(p.l,{tag:"ul",modifiers:k,className:l()({"first-level":!1===n}),children:Object(d.jsx)(we,{submenu:!0,parentItem:t,items:t.children,activeItem:i,groupActive:r,routerProps:s,openDropdown:m,onMouseEnter:o,onMouseLeave:u,setActiveItem:O,setGroupActive:h,isChild:!0,setOpenDropdown:f,currentActiveItem:v})})]})},we=function(e){var t={HorizontalNavMenuGroup:ye,HorizontalNavMenuLink:Ne};return e.items.map((function(n,c){var i=t[function(e){return e.children?"HorizontalNavMenuGroup":"HorizontalNavMenuLink"}(n)];return n.children,Object(d.jsx)(i,Object(a.a)({item:n,index:c},e),n.id)}))},Le=function(e){var t=e.menuData,n=e.currentActiveItem,a=e.routerProps,i=Object(c.useState)(null),s=Object(O.a)(i,2),r=s[0],o=s[1],l=Object(c.useState)([]),u=Object(O.a)(l,2),j=u[0],b=u[1],m=Object(c.useState)([]),h=Object(O.a)(m,2),f=h[0],v=h[1];return Object(d.jsx)("div",{className:"navbar-container main-menu-content",children:Object(d.jsx)("ul",{className:"nav navbar-nav",id:"main-menu-navigation",children:Object(d.jsx)(we,{submenu:!1,items:t,activeItem:r,groupActive:j,routerProps:a,onMouseEnter:function(e){var t=f;t.push(e),v(Object(te.a)(t))},onMouseLeave:function(e){var t=f;t.splice(t.indexOf(e),1),v(Object(te.a)(t))},openDropdown:f,setActiveItem:o,setGroupActive:b,setOpenDropdown:v,currentActiveItem:n})})})},Ce=(n(149),function(e){var t,n=e.children,o=e.navbar,u=e.menuData,j=e.footer,m=e.menu,f=e.currentActiveItem,g=e.routerProps,k=e.setLastLayout,N=Object(h.a)(),y=N.skin,w=N.setSkin,L=be(),z=Object(O.a)(L,2),T=z[0],A=z[1],H=me(),M=H.navbarType,P=H.setNavbarType,D=Oe(),E=D.footerType,G=D.setFooterType,W=he(),F=W.navbarColor,R=W.setNavbarColor,V=Object(c.useState)(!1),B=Object(O.a)(V,2),_=B[0],Y=B[1],J=Object(c.useState)(!1),q=Object(O.a)(J,2),U=q[0],Q=q[1],K=Object(i.b)(),X=Object(i.c)((function(e){return e.layout})),$=X.contentWidth,ee=X.menuHidden;Object(c.useEffect)((function(){return Y(!0),window.addEventListener("scroll",(function(){window.pageYOffset>65&&!1===U&&Q(!0),window.pageYOffset<65&&Q(!1)})),function(){return Y(!1),void Q(!1)}}),[]);var te={static:"footer-static",sticky:"footer-fixed",hidden:"footer-hidden"},ne={floating:"boxed"===$?"floating-nav container-xxl":"floating-nav",sticky:"fixed-top"},ae=""!==F&&"light"!==F&&"white"!==F;return _?Object(d.jsxs)("div",Object(a.a)(Object(a.a)({className:l()("wrapper horizontal-layout horizontal-menu ".concat({floating:"navbar-floating",sticky:"navbar-sticky",static:"navbar-static"}[M]||"navbar-floating"," ").concat(te[E]||"footer-static"," menu-expanded"))},ee?{"data-col":"1-column"}:{}),{},{children:[Object(d.jsxs)(p.v,{expand:"lg",container:!1,className:l()("header-navbar navbar-fixed align-items-center navbar-shadow navbar-brand-center",{"navbar-scrolled":U}),children:[!o&&Object(d.jsx)("div",{className:"navbar-header d-xl-block d-none",children:Object(d.jsx)("ul",{className:"nav navbar-nav",children:Object(d.jsx)(p.t,{children:Object(d.jsxs)(b.b,{to:"/",className:"navbar-brand",children:[Object(d.jsx)("span",{className:"brand-logo",children:Object(d.jsx)("img",{src:x.a.app.appLogoImage,alt:"logo"})}),Object(d.jsx)("h2",{className:"brand-text mb-0",children:x.a.app.appName})]})})})}),Object(d.jsx)("div",{className:"navbar-container d-flex content",children:o||Object(d.jsx)(Z,{skin:y,setSkin:w})})]}),ee?null:Object(d.jsx)("div",{className:"horizontal-menu-wrapper",children:Object(d.jsx)(p.v,{tag:"div",expand:"sm",light:"dark"!==y,dark:"dark"===y||ae,className:l()("header-navbar navbar-horizontal navbar-shadow menu-border",(t={},Object(r.a)(t,ne[M],"static"!==M),Object(r.a)(t,"floating-nav",!ne[M]&&"static"!==M||"floating"===M),t)),children:m||Object(d.jsx)(Le,{menuData:u,routerProps:g,currentActiveItem:f})})}),n,!0===x.a.layout.customizer?Object(d.jsx)(C,{skin:y,setSkin:w,footerType:E,setFooterType:G,navbarType:M,setNavbarType:P,navbarColor:F,setNavbarColor:R,isRtl:T,setIsRtl:A,layout:e.layout,setLastLayout:k,setLayout:e.setLayout,isHidden:ee,setIsHidden:function(e){return K(Object(s.g)(e))},contentWidth:$,setContentWidth:function(e){return K(Object(s.b)(e))},transition:e.transition,setTransition:e.setTransition,themeConfig:x.a}):null,Object(d.jsx)("footer",{className:l()("footer footer-light ".concat(te[E]||"footer-static"),{"d-none":"hidden"===E}),children:j||Object(d.jsx)(S,{footerType:E,footerClasses:te})}),!0===x.a.layout.scrollTop?Object(d.jsx)("div",{className:"scroll-to-top",children:Object(d.jsx)(I,{showOffset:300,className:"scroll-top d-block",children:Object(d.jsx)(p.b,{className:"btn-icon",color:"primary",children:Object(d.jsx)(v.a,{size:14})})})}):null]})):null}),ze=n(289),Te=[{id:"home",title:"Home",icon:Object(d.jsx)(ze.a,{size:20}),navLink:"/home"},{id:"secondPage",title:"Second Page",icon:Object(d.jsx)(G.a,{size:20}),navLink:"/second-page"}],Ae=function(e){return Object(d.jsx)(Ce,Object(a.a)(Object(a.a)({menuData:Te},e),{},{children:e.children}))},Ie=function(){var e=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.layout})),n=function(t){e(Object(s.e)(t))};if(window){var a=1200;window.innerWidth<a&&n("vertical"),window.addEventListener("resize",(function(){window.innerWidth<=a&&"vertical"!==t.lastLayout&&"vertical"!==t.layout&&n("vertical"),window.innerWidth>=a&&t.lastLayout!==t.layout&&n(t.lastLayout)}))}return{layout:t.layout,setLayout:n,lastLayout:t.lastLayout,setLastLayout:function(t){e(Object(s.d)(t))}}}(),t=e.layout,r=e.setLayout,o=e.setLastLayout,l=function(){var e=Object(i.b)();return{transition:Object(i.c)((function(e){return e.layout})).routerTransition,setTransition:function(t){e(Object(s.k)(t))}}}(),O=l.transition,h=l.setTransition,v="horizontal"===t?"HorizontalLayout":"VerticalLayout",p={BlankLayout:f,VerticalLayout:ke,HorizontalLayout:Ae},x=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,290))})),g=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,291))}));return Object(d.jsx)(b.a,{basename:"",children:Object(d.jsxs)(j.d,{children:[Object(d.jsx)(j.b,{exact:!0,path:"/",render:function(){return Object(d.jsx)(j.a,{to:"/home"})}}),Object(d.jsx)(j.b,{exact:!0,path:"/misc/not-authorized",render:function(){return Object(d.jsx)(p.BlankLayout,{children:Object(d.jsx)(x,{})})}}),Object.keys(p).map((function(e,t){var n=p[e],i=function(e){var t=[],n=[];return m&&m.filter((function(a){(a.layout===e||void 0===a.layout&&v===e)&&(t.push(a),n.push(a.path))})),{LayoutRoutes:t,LayoutPaths:n}}(e),s=i.LayoutRoutes,l=i.LayoutPaths,b={};return Object(d.jsx)(j.b,{path:l,children:Object(d.jsx)(n,{layout:e,setLayout:r,transition:O,routerProps:b,setLastLayout:o,setTransition:h,currentActiveItem:null,children:Object(d.jsx)(j.d,{children:s.map((function(e){return Object(d.jsx)(j.b,{path:e.path,exact:!0===e.exact,render:function(t){return Object.assign(b,Object(a.a)(Object(a.a)({},t),{},{meta:e.meta})),Object(d.jsx)(c.Fragment,{children:"BlankLayout"===e.layout?Object(d.jsx)(c.Fragment,{children:Object(d.jsx)(e.component,Object(a.a)({},t))}):Object(d.jsx)(u,Object(a.a)(Object(a.a)(Object(a.a)(Object(a.a)({layout:v,transition:O,setTransition:h},e.appLayout?{appLayout:e.appLayout}:{}),e.meta?{routeMeta:e.meta}:{}),e.className?{wrapperClass:e.className}:{}),{},{children:Object(d.jsx)(c.Suspense,{fallback:null,children:Object(d.jsx)(e.component,Object(a.a)({},t))})}))})}},e.path)}))})})},t)})),Object(d.jsx)(j.b,{path:"*",component:g})]})})};t.default=function(){return Object(d.jsx)(Ie,{})}}}]);
//# sourceMappingURL=6.f07b2a3b.chunk.js.map