(this["webpackJsonpgithub-users"]=this["webpackJsonpgithub-users"]||[]).push([[0],{55:function(e){e.exports=JSON.parse('{"range":10}')},75:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"actionTypes",(function(){return g})),n.d(r,"loadProfile",(function(){return m}));var a={};n.r(a),n.d(a,"actionTypes",(function(){return z})),n.d(a,"loadPage",(function(){return B}));var c=n(0),s=n.n(c),i=n(17),u=n.n(i),o=n(21),l=n(25),j=n(7),b=n(2),p=n(27),f=n(47),d=n.n(f),O=n(48),h=n(11),x=n.n(h),v=n(18),g={LOAD_USER:"profile/LOAD_USER"},m=function(e){return function(){var t=Object(v.a)(x.a.mark((function t(n,r,a){var c,s,i;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=a.api.ProfileApi,!(s=r().profile.userData)||s.login!==e){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,c.getUserProfile(e);case 6:i=t.sent,n({type:g.LOAD_USER,payload:i});case 8:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},y=n(10),_={userData:{}};var w,E,U,A,S,P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g.LOAD_USER:return Object(y.a)(Object(y.a)({},e),{},{userData:t.payload});default:return Object(y.a)({},e)}},D=n(97),L=n(38),k=n(23),R=n(90),N=n(24),G=Object(N.b)(R.a)(w||(w=Object(k.a)(["\n  display:flex;\n  width: 100%;\n  flex-direction:row;\n  padding: 0.5rem;\n  border: 1px solid black;\n"]))),T=N.b.div(E||(E=Object(k.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem;\n"]))),C=N.b.div(U||(U=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-around;\n  flex: 1;\n"]))),H=N.b.div(A||(A=Object(k.a)(["\n  display: flex;\n  flex: 1;\n"]))),X=function(e){var t=e.avatarUrl,n=e.name,r=e.location,a=e.from;return Object(b.jsxs)(G,{children:[Object(b.jsx)(T,{children:Object(b.jsx)(D.a,{alt:n,src:t})}),Object(b.jsxs)(C,{children:[Object(b.jsx)(H,{children:Object(b.jsx)(L.a,{variant:"h6",children:n})}),Object(b.jsx)(H,{children:Object(b.jsx)(L.a,{variant:"h6",children:r})}),Object(b.jsx)(H,{children:Object(b.jsx)(L.a,{variant:"h6",children:a})})]})]})},I=N.b.div(S||(S=Object(k.a)(["\n  width: 100%;\n  height:100%;\n  background: gray;\n  padding: 1rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n"]))),J=function(e){var t=e.match,n=Object(o.c)();Object(c.useEffect)((function(){n(r.loadProfile(t.params.username))}),[t.params.username]);var a=Object(o.d)((function(e){return e.profile.userData}),o.b);return Object(b.jsx)(I,{children:Object(b.jsx)(X,{avatarUrl:a.avatar_url,name:a.name,location:a.location,from:a.created_at})})},V={getRoutes:function(){return Object(b.jsx)(j.b,{path:"/user/:username",component:J},"/user")}},q=n(55),z={LOAD_USERS:"users/LOAD_USERS",CHANGE_PAGE:"users/CHANGE_PAGE"},B=function(e){return function(){var t=Object(v.a)(x.a.mark((function t(n,r,a){var c,s,i;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=r().users.currentPage,s=a.api.UsersApi,n({type:z.CHANGE_PAGE,payload:e}),e!==c){t.next=7;break}return t.abrupt("return");case 7:return t.next=9,s.getUsers({page:e,per_page:q.range});case 9:i=t.sent,n({type:z.LOAD_USERS,payload:{page:e,userList:i.items,total:i.total_count}});case 11:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},F={userList:[],currentPage:null,total:0};var M,K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z.LOAD_USERS:return Object(y.a)(Object(y.a)({},e),{},{userList:t.payload.userList,total:t.payload.total});case z.CHANGE_PAGE:return Object(y.a)(Object(y.a)({},e),{},{currentPage:t.payload});default:return Object(y.a)({},e)}},Q=n(95),W=n(96),Y=n(98),Z=n(91),$=n(92),ee=n(93),te=n(94),ne=function(e){var t=e.username,n=e.htmlUrl,r=e.avatarUrl;return Object(b.jsxs)(Y.a,{button:!0,component:function(e){return Object(b.jsx)(l.b,Object(y.a)({to:"/user/".concat(t)},e))},children:[Object(b.jsx)(Z.a,{children:Object(b.jsx)(D.a,{alt:t,src:r})}),Object(b.jsx)($.a,{primary:t}),Object(b.jsx)(ee.a,{children:Object(b.jsx)(te.a,{variant:"outlined",href:n,target:"_blank",children:"\u041a\u043d\u043e\u043f\u043a\u0430"})})]})},re=function(e){var t=e.users;return Object(b.jsx)(Q.a,{children:t.map((function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(ne,{avatarUrl:e.avatar_url,htmlUrl:e.html_url,username:e.login}),Object(b.jsx)(W.a,{variant:"inset",component:"li"})]})}))})},ae=function(e){var t=e.match,n=Object(o.c)(),r=Object(o.d)((function(e){return e.users.userList}),o.b);return Object(c.useEffect)((function(){n(a.loadPage(Number(t.params.page)))}),[t.params.page]),Object(b.jsx)(re,{users:r})},ce=[V,{getRoutes:function(){return Object(b.jsx)(j.b,{path:"/users/:page",component:ae},"/users")}}],se={users:K,profile:P},ie=n(28),ue=n(29),oe=n(37),le=n(36),je=function(){function e(t){Object(ie.a)(this,e),this.baseUrl=t}return Object(ue.a)(e,[{key:"get",value:function(){var e=Object(v.a)(x.a.mark((function e(t,n,r){var a,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(this.baseUrl,"/").concat(t,"?").concat(new URLSearchParams(n)),e.next=3,fetch(a,{method:"GET",mode:"cors",cache:"no-cache",credentials:"same-origin",accept:"application/vnd.github.v3+json",headers:Object(y.a)({"Content-Type":"application/json"},r),redirect:"follow",referrerPolicy:"no-referrer"});case 3:return c=e.sent,e.next=6,c.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()}]),e}(),be=function(e){Object(oe.a)(n,e);var t=Object(le.a)(n);function n(e){return Object(ie.a)(this,n),t.call(this,e)}return Object(ue.a)(n,[{key:"getUserProfile",value:function(){var e=Object(v.a)(x.a.mark((function e(t){var n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="users/".concat(t),e.next=3,this.get(n);case 3:return r=e.sent,e.next=6,r;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),n}(je),pe=function(e){Object(oe.a)(n,e);var t=Object(le.a)(n);function n(e){return Object(ie.a)(this,n),t.call(this,e)}return Object(ue.a)(n,[{key:"getUsers",value:function(){var e=Object(v.a)(x.a.mark((function e(t){var n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(y.a)(Object(y.a)({},t),{},{q:"type:user"}),"search/users",e.next=4,this.get("search/users",n);case 4:return r=e.sent,e.next=7,r;case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),n}(je),fe=function(e){return{ProfileApi:new be(e),UsersApi:new pe(e)}},de=Object(N.a)(M||(M=Object(k.a)(["\n  body {\n    width: 100vw;\n    height: 100vh;\n    margin: 0;\n  }\n  #root {\n    width: 100%;\n    height: 100%;\n  }\n"]))),Oe=function(e){var t=e.map((function(e){return e.getRoutes()}));return Object(b.jsxs)(j.d,{children:[Object(b.jsx)(j.a,{exact:!0,to:"/users/1",from:"/"}),t]})}(ce),he=function(e){var t=Object(p.c)(se),n=[O.a.withExtraArgument(e)];return Object(p.e)(t,Object(p.d)(p.a.apply(void 0,n),d()(["users","profile"]),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__({trace:!0}):function(e){return e}))}({api:fe("https://api.github.com")});u.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(o.a,{store:he,children:Object(b.jsxs)(l.a,{children:[Object(b.jsx)(de,{}),Oe]})})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.be6a7175.chunk.js.map