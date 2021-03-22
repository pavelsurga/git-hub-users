(this["webpackJsonpgithub-users"]=this["webpackJsonpgithub-users"]||[]).push([[0],{36:function(e){e.exports=JSON.parse('{"range":10,"VisiblePagesCount":10}')},82:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"actionTypes",(function(){return v})),n.d(r,"loadProfile",(function(){return m}));var a={};n.r(a),n.d(a,"actionTypes",(function(){return Q})),n.d(a,"loadPage",(function(){return W})),n.d(a,"loadCount",(function(){return Y}));var c=n(0),s=n.n(c),u=n(22),i=n.n(u),o=n(12),l=n(26),b=n(7),j=n(2),O=n(28),p=n(53),f=n.n(p),d=n(54),h=n(10),x=n.n(h),g=n(20),v={LOAD_USER:"profile/LOAD_USER",ERROR:"profile/ERROR",ACTION_PROCESSING:"profile/ACTION_PROCESSING"},m=function(e){return function(){var t=Object(g.a)(x.a.mark((function t(n,r,a){var c,s,u;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=a.api.ProfileApi,!(s=r().profile.userData)||s.login!==e){t.next=4;break}return t.abrupt("return");case 4:return n({type:v.ACTION_PROCESSING,payload:!0}),t.next=7,c.getUserProfile(e);case 7:if((u=t.sent).success){t.next=11;break}return n({type:v.ERROR,payload:u.message}),t.abrupt("return");case 11:n({type:v.LOAD_USER,payload:u.data}),n({type:v.ACTION_PROCESSING,payload:!1});case 13:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},y=n(8),_={userData:{},error:null,actionProcessing:!0};var E,S,C,w,N,A,R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.LOAD_USER:return Object(y.a)(Object(y.a)({},e),{},{userData:t.payload,error:null});case v.ERROR:return Object(y.a)(Object(y.a)({},e),{},{userData:{},error:t.payload});case v.ACTION_PROCESSING:return Object(y.a)(Object(y.a)({},e),{},{actionProcessing:t.payload});default:return Object(y.a)({},e)}},P=n(110),U=n(43),I=n(108),k=n(17),D=n(99),T=n(18),L=Object(T.b)(D.a)(E||(E=Object(k.a)(["\n  display:flex;\n  width: 100%;\n  flex-direction:row;\n  padding: 0.5rem;\n"]))),G=T.b.div(S||(S=Object(k.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem;\n"]))),F=T.b.div(C||(C=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-around;\n  flex: 1;\n"]))),H=T.b.div(w||(w=Object(k.a)(["\n  display: flex;\n  flex: 1;\n"]))),V=function(e){var t=e.avatarUrl,n=e.name,r=e.location,a=e.from;return Object(j.jsxs)(L,{children:[Object(j.jsx)(G,{children:Object(j.jsx)(P.a,{alt:n,src:t})}),Object(j.jsxs)(F,{children:[Object(j.jsx)(H,{children:Object(j.jsx)(U.a,{variant:"h6",children:n})}),Object(j.jsx)(H,{children:Object(j.jsx)(U.a,{variant:"subtitle2",children:r})}),Object(j.jsx)(H,{children:Object(j.jsxs)(U.a,{variant:"caption",color:"textSecondary",children:["From ",Object(I.a)(new Date(a),"dd/mm/yyyy")]})})]})]})},X=T.b.div(N||(N=Object(k.a)(["\n  width: 100%;\n  height:100%;\n  background: rgb(240,240,240);\n  padding: 1rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n"]))),B=n(101),J=T.b.div(A||(A=Object(k.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),M=function(){return Object(j.jsx)(J,{children:Object(j.jsx)(B.a,{})})},q=function(e){var t=e.match,n=Object(o.c)();Object(c.useEffect)((function(){n(r.loadProfile(t.params.username))}),[t.params.username]);var a=Object(o.d)((function(e){return e.profile.userData}),o.b),s=Object(o.d)((function(e){return e.profile.error}),o.b),u=Object(o.d)((function(e){return e.profile.actionProcessing}),o.b);return s?Object(j.jsx)("div",{children:s}):u?Object(j.jsx)(M,{}):Object(j.jsx)(X,{children:Object(j.jsx)(V,{avatarUrl:a.avatar_url,name:a.name,location:a.location,from:a.created_at})})},z={getRoutes:function(){return Object(j.jsx)(b.b,{path:"/user/:username",component:q},"/user")}},K=n(36),Q={LOAD_USERS:"users/LOAD_USERS",CHANGE_PAGE:"users/CHANGE_PAGE",LOAD_COUNT:"users/LOAD_COUNT",ACTION_PROCESSING:"users/ACTION_PROCESSING"},W=function(e){return function(){var t=Object(g.a)(x.a.mark((function t(n,r,a){var c,s,u,i;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=r().users.currentPage,s=a.api.UsersApi,n({type:Q.CHANGE_PAGE,payload:e}),e!==c){t.next=5;break}return t.abrupt("return");case 5:return n({type:Q.ACTION_PROCESSING,payload:!0}),u=1===e?0:K.range*(e-1)-1,t.next=9,s.getUsers({since:u,per_page:K.range});case 9:i=t.sent,n({type:Q.LOAD_USERS,payload:i.data}),n({type:Q.ACTION_PROCESSING,payload:!1});case 12:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},Y=function(){return function(){var e=Object(g.a)(x.a.mark((function e(t,n,r){var a,c,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n().users.total,c=r.api.UsersApi,!a){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,c.getUsersCount();case 6:s=e.sent,t({type:Q.LOAD_COUNT,payload:s.data});case 8:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()},Z={userList:[],currentPage:null,total:0,actionProcessing:!0};var $,ee,te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q.LOAD_USERS:return Object(y.a)(Object(y.a)({},e),{},{userList:t.payload});case Q.LOAD_COUNT:return Object(y.a)(Object(y.a)({},e),{},{total:t.payload});case Q.CHANGE_PAGE:return Object(y.a)(Object(y.a)({},e),{},{currentPage:t.payload});case Q.ACTION_PROCESSING:return Object(y.a)(Object(y.a)({},e),{},{actionProcessing:t.payload});default:return Object(y.a)({},e)}},ne=n(106),re=n(107),ae=n(111),ce=n(102),se=n(103),ue=n(104),ie=n(105),oe=function(e){var t=e.username,n=e.htmlUrl,r=e.avatarUrl;return Object(j.jsxs)(ae.a,{button:!0,component:function(e){return Object(j.jsx)(l.b,Object(y.a)({to:"/user/".concat(t)},e))},children:[Object(j.jsx)(ce.a,{children:Object(j.jsx)(P.a,{alt:t,src:r})}),Object(j.jsx)(se.a,{primary:t}),Object(j.jsx)(ue.a,{children:Object(j.jsx)(ie.a,{variant:"outlined",href:n,target:"_blank",children:"\u041a\u043d\u043e\u043f\u043a\u0430"})})]})},le=function(e){var t=e.users;return Object(j.jsx)(ne.a,{children:t.map((function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(oe,{avatarUrl:e.avatar_url,htmlUrl:e.html_url,username:e.login}),Object(j.jsx)(re.a,{variant:"inset",component:"li"})]})}))})},be=n(109),je=T.b.div($||($=Object(k.a)(["\n  min-height: calc(100% - 6rem);\n"]))),Oe=function(e){var t=e.match,n=Object(b.g)(),r=Object(c.useCallback)((function(e){n.push("/users/".concat(e))}),[n]),s=Number(t.params.page),u=function(e,t){var n=Object(o.c)(),r=Object(o.d)((function(e){return e.users.userList}),o.b),s=Object(o.d)((function(e){return e.users.total}),o.b),u=Object(o.d)((function(e){return e.users.actionProcessing}),o.b),i=s?Math.ceil(s/K.VisiblePagesCount):0;return Object(c.useEffect)((function(){n(a.loadCount())}),[]),Object(c.useEffect)((function(){s&&(Number.isNaN(e)?t(1):e>i?t(i):n(a.loadPage(e)))}),[s,e]),{userList:r,pagesCount:i,loading:u}}(s,r),i=u.userList,l=u.pagesCount;return u.loading?Object(j.jsx)(M,{}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(je,{children:Object(j.jsx)(le,{users:i})}),Object(j.jsx)(be.a,{count:l,page:s,onChange:function(e,t){return r(t)},showFirstButton:!0,showLastButton:!0})]})},pe=[{getRoutes:function(){return Object(j.jsx)(b.b,{path:"/users/:page",component:Oe},"/users")}},z],fe={users:te,profile:R},de=n(29),he=n(30),xe=n(41),ge=n(40),ve=function(){function e(t){Object(de.a)(this,e),this.baseUrl=t}return Object(he.a)(e,[{key:"get",value:function(){var e=Object(g.a)(x.a.mark((function e(t,n,r){var a,c,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(this.baseUrl,"/").concat(t,"?").concat(new URLSearchParams(n)),e.next=3,fetch(a,{method:"GET",mode:"cors",cache:"no-cache",credentials:"same-origin",accept:"application/vnd.github.v3+json",headers:Object(y.a)({"Content-Type":"application/json"},r),redirect:"follow",referrerPolicy:"no-referrer"});case 3:return c=e.sent,e.next=6,c.json();case 6:if(s=e.sent,c.ok){e.next=9;break}return e.abrupt("return",{success:!1,message:s.message});case 9:return e.abrupt("return",{success:!0,data:s});case 10:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()}]),e}(),me=function(e){Object(xe.a)(n,e);var t=Object(ge.a)(n);function n(e){return Object(de.a)(this,n),t.call(this,e)}return Object(he.a)(n,[{key:"getUserProfile",value:function(){var e=Object(g.a)(x.a.mark((function e(t){var n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="users/".concat(t),e.next=3,this.get(n);case 3:return r=e.sent,e.next=6,r;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),n}(ve),ye=function(e){Object(xe.a)(n,e);var t=Object(ge.a)(n);function n(e){return Object(de.a)(this,n),t.call(this,e)}return Object(he.a)(n,[{key:"getUsersCount",value:function(){var e=Object(g.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={per_page:1,q:"type:user"},"search/users",e.next=4,this.get("search/users",t);case 4:return n=e.sent,e.abrupt("return",n.success?{success:!0,data:n.data.total_count}:n);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUsers",value:function(){var e=Object(g.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"users",e.next=3,this.get("users",t);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),n}(ve),_e=function(e){return{ProfileApi:new me(e),UsersApi:new ye(e)}},Ee=Object(T.a)(ee||(ee=Object(k.a)(["\n  body {\n    width: 100vw;\n    height: 100vh;\n    margin: 0;\n  }\n  #root {\n    width: 100%;\n    height: 100%;\n  }\n"]))),Se=function(e){var t=e.map((function(e){return e.getRoutes()}));return Object(j.jsxs)(b.d,{children:[t,Object(j.jsx)(b.a,{to:"/users/1"})]})}(pe),Ce=function(e){var t=Object(O.c)(fe),n=[d.a.withExtraArgument(e)];return Object(O.e)(t,Object(O.d)(O.a.apply(void 0,n),f()(["users","profile"]),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__({trace:!0}):function(e){return e}))}({api:_e("https://api.github.com")});i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(o.a,{store:Ce,children:Object(j.jsxs)(l.a,{basename:"/",children:[Object(j.jsx)(Ee,{}),Se]})})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.98368b24.chunk.js.map