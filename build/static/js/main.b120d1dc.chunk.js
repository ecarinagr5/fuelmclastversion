(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{16:function(e,t,a){"use strict";var n=a(22),r=a(0),o=a.n(r);t.a=Object(n.a)({},o.a,{ID:o.a.oneOfType([o.a.string,o.a.number]).isRequired,component:o.a.oneOfType([o.a.string,o.a.func]),date:o.a.oneOfType([o.a.instanceOf(Date),o.a.string])})},19:function(e,t,a){"use strict";var n=a(22),r=a(8),o=a(1),c=a.n(o),i=(a(16),a(3)),l=a.n(i),s=a(50),u=function(e){var t=e.rounded,a=e.circle,o=e.src,i=e.size,s=e.tag,u=e.className,m=e.style,p=Object(r.a)(e,["rounded","circle","src","size","tag","className","style"]),d=l()({"rounded-circle":a,rounded:t},u);return c.a.createElement(s,Object.assign({src:o,style:Object(n.a)({width:i,height:i},m),className:d},p))};u.defaultProps={tag:"img",rounded:!1,circle:!0,size:40,src:a.n(s).a,style:{}},t.a=u},20:function(e,t,a){"use strict";var n,r=a(3),o=a.n(r),c=(n="cr",{create:function(e){var t=e;return"string"===typeof n&&(t="".concat(n,"-").concat(e)),{b:function(){for(var e=arguments.length,a=new Array(e),n=0;n<e;n++)a[n]=arguments[n];return o()(t,a)},e:function(e){for(var a=arguments.length,n=new Array(a>1?a-1:0),r=1;r<a;r++)n[r-1]=arguments[r];return o()("".concat(t,"__").concat(e),n)},m:function(e){for(var a=arguments.length,n=new Array(a>1?a-1:0),r=1;r<a;r++)n[r-1]=arguments[r];return o()("".concat(t,"--").concat(e),n)}}}});t.a=c},25:function(e,t,a){"use strict";a.d(t,"a",function(){return E});var n=a(9),r=a(10),o=a(12),c=a(11),i=a(13),l=a(26),s=a.n(l),u=a(1),m=a.n(u),p=a(92),d=a(31),f=a(32),h=a(33),b=a(62),g=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).changeAuthState=function(e){return function(t){t.preventDefault(),a.props.onChangeAuthState(e)}},a.handleSubmit=function(e){e.preventDefault()},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"renderButtonText",value:function(){var e=this.props.buttonText;return!e&&this.isLogin?"Login":!e&&this.isSignup?"Signup":e}},{key:"render",value:function(){var e=this.props,t=e.showLogo,a=e.usernameLabel,n=e.usernameInputProps,r=e.passwordLabel,o=e.passwordInputProps,c=e.confirmPasswordLabel,i=e.confirmPasswordInputProps,l=e.children,u=e.onLogoClick;return m.a.createElement(p.a,{onSubmit:this.handleSubmit},t&&m.a.createElement("div",{className:"text-center pb-4"},m.a.createElement("img",{src:s.a,className:"rounded",style:{width:60,height:60,cursor:"pointer"},alt:"logo",onClick:u})),m.a.createElement(d.a,null,m.a.createElement(f.a,{for:a},a),m.a.createElement(h.a,n)),m.a.createElement(d.a,null,m.a.createElement(f.a,{for:r},r),m.a.createElement(h.a,o)),this.isSignup&&m.a.createElement(d.a,null,m.a.createElement(f.a,{for:c},c),m.a.createElement(h.a,i)),m.a.createElement(d.a,{check:!0},m.a.createElement(f.a,{check:!0},m.a.createElement(h.a,{type:"checkbox"})," ",this.isSignup?"Agree the terms and policy":"Remember me")),m.a.createElement("hr",null),m.a.createElement(b.a,{size:"lg",className:"bg-gradient-theme-left border-0",block:!0,onClick:this.handleSubmit},this.renderButtonText()),m.a.createElement("div",{className:"text-center pt-1"},m.a.createElement("h6",null,"or"),m.a.createElement("h6",null,this.isSignup?m.a.createElement("a",{href:"#login",onClick:this.changeAuthState(E)},"Login"):m.a.createElement("a",{href:"#signup",onClick:this.changeAuthState(v)},"Signup"))),l)}},{key:"isLogin",get:function(){return this.props.authState===E}},{key:"isSignup",get:function(){return this.props.authState===v}}]),t}(m.a.Component),E="LOGIN",v="SIGNUP";g.defaultProps={authState:"LOGIN",showLogo:!0,usernameLabel:"Email",usernameInputProps:{type:"email",placeholder:"your@email.com"},passwordLabel:"Password",passwordInputProps:{type:"password",placeholder:"your password"},confirmPasswordLabel:"Confirm Password",confirmPasswordInputProps:{type:"password",placeholder:"confirm your password"},onLogoClick:function(){}},t.b=g},26:function(e,t,a){e.exports=a.p+"static/media/logo_200.caf2c652.png"},39:function(e,t,a){e.exports=a.p+"static/media/img.94772e4e.png"},41:function(e,t,a){"use strict";var n=a(8),r=a(1),o=a.n(r),c=a(16),i=a(3),l=a.n(i),s=a(100),u=a(101),m=a(102),p=a(103),d=a(104),f=a(19),h=function(e){var t=e.avatar,a=e.avatarSize,r=e.title,c=e.subtitle,i=e.text,h=e.children,b=e.className,g=Object(n.a)(e,["avatar","avatarSize","title","subtitle","text","children","className"]),E=l()("bg-gradient-theme",b);return o.a.createElement(s.a,Object.assign({inverse:!0,className:E},g),o.a.createElement(u.a,{className:"d-flex justify-content-center align-items-center flex-column"},o.a.createElement(f.a,{src:t,size:a,className:"mb-2"}),o.a.createElement(m.a,null,r),o.a.createElement(p.a,null,c),o.a.createElement(d.a,null,o.a.createElement("small",null,i))),h)};h.defaultProps={avatarSize:80};var b=h,g=a(105),E=a(62),v=function(e){var t=e.color,a=e.header,r=e.avatar,c=e.avatarSize,i=e.name,m=e.date,p=e.text,h=e.className,b=e.buttonProps,v=Object(n.a)(e,["color","header","avatar","avatarSize","name","date","text","className","buttonProps"]),y="bg-".concat(t),x=l()(y,h);return o.a.createElement(s.a,Object.assign({inverse:!0,className:x},v),a&&"string"===typeof a?o.a.createElement(g.a,{className:y},a):a,o.a.createElement(u.a,{className:"d-flex flex-wrap flex-column align-items-center justify-content-center"},o.a.createElement(f.a,{size:c,src:r}),o.a.createElement(d.a,{className:"text-center"},o.a.createElement("strong",{className:"d-block"},i),o.a.createElement("small",{className:"text-muted"},m)),o.a.createElement(d.a,{className:"text-center"},p),o.a.createElement(E.a,Object.assign({color:"primary"},b))))};v.defaultProps={color:"gradient-secondary",avatarSize:60};var y=v,x=a(108),k=a(109),O=a(106),N=a(107),S=a(31),P=a(32),C=a(33),j=(c.a.arrayOf(c.a.shape({id:c.a.ID,title:c.a.string,done:c.a.bool})),function(e){var t=e.todos,a=Object(n.a)(e,["todos"]);return o.a.createElement(O.a,Object.assign({flush:!0},a),t.map(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,a=e.title,n=e.done;return o.a.createElement(N.a,{key:t,className:"border-0"},o.a.createElement(S.a,{check:!0},o.a.createElement(P.a,{check:!0},o.a.createElement(C.a,{type:"checkbox",checked:n,readOnly:!0}),n?o.a.createElement("strike",null,a):o.a.createElement("span",null,a))))}),o.a.createElement(E.a,{block:!0},"Add"))});j.defaultProps={todos:[]};var w=j,z=a(51),A=function(e){var t=e.image,a=e.title,r=e.subtitle,c=e.todos,i=Object(n.a)(e,["image","title","subtitle","todos"]);return o.a.createElement(s.a,i,o.a.createElement("div",{className:"position-relative"},o.a.createElement(x.a,{src:t}),o.a.createElement(k.a,{className:"bg-dark",style:{opacity:.2}},o.a.createElement(m.a,{className:"text-white"},a),o.a.createElement(d.a,{className:"text-white"},r))),o.a.createElement(w,{todos:c}))};A.defaultProps={image:a.n(z).a,title:"Tasks",subtitle:"Due soon..."};var _=A;a.d(t,"c",function(){return b}),a.d(t,"a",function(){return y}),a.d(t,"b",function(){return _})},45:function(e,t,a){e.exports=a.p+"static/media/100_1.1f7beca5.jpg"},46:function(e,t,a){"use strict";var n=a(22),r=a(8),o=a(1),c=a.n(o),i=a(3),l=a.n(i),s=a(93),u={"top-right":{top:-3,right:-3},"top-left":{top:-3,left:-3},"bottom-left":{bottom:-3,left:-3},"bottom-right":{bottom:-3,right:-3}},m={xs:{width:10,height:10},sm:{width:15,height:15},md:{width:20,height:20},lg:{width:25,height:25},xl:{width:30,height:30}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.position,a=void 0===t?"bottom-right":t,o=e.size,i=void 0===o?"sm":o,p=e.style,d=void 0===p?{}:p,f=e.className,h=Object(r.a)(e,["position","size","style","className"]);return function(e){return function(t){var o=t.tag,p=void 0===o?"div":o,b=Object(r.a)(t,["tag"]);return c.a.createElement(p,{className:"d-inline-block position-relative"},c.a.createElement(e,b),c.a.createElement(s.a,Object.assign({className:l()("position-absolute",f),style:Object(n.a)({},u[a],m[i],{borderRadius:"50%",border:"2px solid #fff"},d)},h)))}}}},50:function(e,t,a){e.exports=a.p+"static/media/carina_001.8f1f2ffd.png"},51:function(e,t,a){e.exports=a.p+"static/media/background_1920-2.c54eef50.jpg"},52:function(e,t,a){e.exports=a.p+"static/media/100_2.82e7c41e.jpg"},53:function(e,t,a){e.exports=a.p+"static/media/100_3.6e25d86d.jpg"},54:function(e,t,a){e.exports=a.p+"static/media/100_4.978e51b5.jpg"},55:function(e,t,a){e.exports=a.p+"static/media/100_5.fd533725.jpg"},56:function(e,t,a){e.exports=a.p+"static/media/logo_pemex_v2.32a5a286.png"},63:function(e,t,a){e.exports=a(91)},90:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(21),c=a.n(o),i=a(9),l=a(10),s=a(12),u=a(11),m=a(13),p=a(25),d=a(0),f=a.n(d),h=a(30),b=!!Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_NAME:"React Reduction",REACT_APP_DESCRIPTION:"React version of Reduction Admin Template",REACT_APP_SOURCE_URL:"https://github.com/reduction-admin/react-reduction"}).REACT_APP_GOOGLE_ANALYTICS;b&&h.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_NAME:"React Reduction",REACT_APP_DESCRIPTION:"React version of Reduction Admin Template",REACT_APP_SOURCE_URL:"https://github.com/reduction-admin/react-reduction"}).REACT_APP_GOOGLE_ANALYTICS);var g=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){b&&(this.sendPageView(this.context.router.history.location),this.context.router.history.listen(this.sendPageView))}},{key:"sendPageView",value:function(e){h.a.set({page:e.pathname}),h.a.pageview(e.pathname)}},{key:"render",value:function(){return this.props.children}}]),t}(r.a.Component);g.contextTypes={router:f.a.object};var E=a(8),v=a(20),y=a(96),x=v.a.create("content"),k=function(e){var t=e.tag,a=e.className,n=Object(E.a)(e,["tag","className"]),o=x.b(a);return r.a.createElement(t,Object.assign({className:o},n))};k.defaultProps={tag:y.a};var O=k,N=a(97),S=a(98),P=a(99),C=function(e){return r.a.createElement("a",Object.assign({href:"/",target:"_self",rel:"noopener noreferrer"},e))},j=function(){return r.a.createElement(N.a,null,r.a.createElement(S.a,{navbar:!0},r.a.createElement(P.a,null,"2021 Everis")))},w=a(19),z=a(41),A=(a(16),a(110)),_=function(e){var t=e.notificationsData;return t&&t.length&&t.map(function(e){var t=e.id,a=e.avatar,n=e.message,o=e.date;return r.a.createElement(A.a,{key:t,className:"pb-2"},r.a.createElement(A.a,{left:!0,className:"align-self-center pr-3"},r.a.createElement(w.a,{tag:A.a,object:!0,src:a,alt:"Avatar"})),r.a.createElement(A.a,{body:!0,middle:!0,className:"align-self-center"},n),r.a.createElement(A.a,{right:!0,className:"align-self-center"},r.a.createElement("small",{className:"text-muted"},o)))})};_.defaultProps={notificationsData:[]};var R=a(7),L=(a(92),a(33),a(45)),I=a.n(L),T=a(52),D=a.n(T),B=a(53),U=a.n(B),M=a(54),G=a.n(M),W=a(55),q=a.n(W),F=(I.a,D.a,U.a,G.a,q.a,a(46)),V=a(56),J=a.n(V),X=a(62),Y=a(111),H=a(112),Q=a(113),K=a(106),Z=a(107),$=v.a.create("header"),ee=(Object(F.a)({size:"md",color:"primary",style:{top:-10,right:-10,display:"inline-flex",justifyContent:"center",alignItems:"center"},children:r.a.createElement("small",null,"5")})(R.o),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isOpenNotificationPopover:!1,isNotificationConfirmed:!1,isOpenUserCardPopover:!1},a.toggleNotificationPopover=function(){a.setState({isOpenNotificationPopover:!a.state.isOpenNotificationPopover}),a.state.isNotificationConfirmed||a.setState({isNotificationConfirmed:!0})},a.toggleUserCardPopover=function(){a.setState({isOpenUserCardPopover:!a.state.isOpenUserCardPopover})},a.handleSidebarControlButton=function(e){e.preventDefault(),e.stopPropagation(),document.querySelector(".cr-sidebar").classList.toggle("cr-sidebar--open")},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){console.log("js",this.props);this.state.isNotificationConfirmed;return r.a.createElement(N.a,{light:!0,expand:!0,className:$.b("bg-white")},r.a.createElement(S.a,{navbar:!0,className:"mr-2"},r.a.createElement(X.a,{outline:!0,onClick:this.handleSidebarControlButton},r.a.createElement(R.g,{size:25}))),r.a.createElement("img",{src:J.a,alt:"fuel",className:"logo-station"}),r.a.createElement(S.a,{navbar:!0},r.a.createElement("li",null,r.a.createElement("select",{class:"select-estacion-title"},r.a.createElement("option",{selected:!0},"Gasolinera PEMEX | 3529"),r.a.createElement("option",{value:"1"},"Fuel A | 5529 "),r.a.createElement("option",{value:"2"},"Fuel B | 3129"),r.a.createElement("option",{value:"3"},"Fuel C | 1529"))),r.a.createElement("li",null,r.a.createElement("div",{className:"direccion-estacion"},"Av. Adolfo L\xf3pez Mateos 518-520 Agua Azul, Mx.19 EDOMEX"))),r.a.createElement(S.a,{navbar:!0,className:$.e("nav-right")},r.a.createElement(P.a,null,r.a.createElement("p",{className:"station-type"},"Estaci\xf3n ",r.a.createElement("span",{className:"station-name"}," L\xedder")),r.a.createElement("p",{className:"station-type"},"\xbfQu\xe9 significa?")),r.a.createElement(P.a,null),r.a.createElement(P.a,null,r.a.createElement(Y.a,{id:"Popover2"},r.a.createElement(w.a,{onClick:this.toggleUserCardPopover,className:"can-click"})),r.a.createElement(H.a,{placement:"bottom-end",isOpen:this.state.isOpenUserCardPopover,toggle:this.toggleUserCardPopover,target:"Popover2",className:"p-0 border-0",style:{minWidth:250}},r.a.createElement(Q.a,{className:"p-0 border-light"},r.a.createElement(z.c,{title:"Carina Gonz\xe1lez",subtitle:"Carina@everis.com",text:"\xdaltima conexi\xf3n 19 Enero 2021 10:21am",className:"border-light"},r.a.createElement(K.a,{flush:!0},r.a.createElement(Z.a,{tag:"button",action:!0,className:"border-light"},r.a.createElement(R.p,null)," Perfil"),r.a.createElement(Z.a,{tag:"button",action:!0,className:"border-light"},r.a.createElement(R.i,null)," Cerrar Sesi\xf3n"))))))))}}]),t}(r.a.Component)),te=a(61),ae=a(58),ne=a.n(ae),re={NotificationItem:{DefaultStyle:{display:"flex",justifyContent:"space-between",alignItems:"center",borderRadius:"4px",fontSize:"14px"},success:{borderTop:0,backgroundColor:"#45b649",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0},error:{borderTop:0,backgroundColor:"#f85032",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0},warning:{borderTop:0,backgroundColor:"#ffd700",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0},info:{borderTop:0,background:"linear-gradient(to right, #6a82fb, #fc5c7d)",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0}},Title:{DefaultStyle:{margin:0,padding:0,paddingRight:5,color:"#fff",display:"inline-flex",fontSize:20,fontWeight:"bold"}},MessageWrapper:{DefaultStyle:{display:"block",color:"#fff",width:"100%"}},Dismiss:{DefaultStyle:{display:"inline-flex",justifyContent:"center",alignItems:"center",fontFamily:"inherit",fontSize:20,color:"#f2f2f2",position:"relative",margin:0,padding:0,background:"none",borderRadius:0,opacity:1,width:20,height:20,textAlign:"initial",float:"none",top:"unset",right:"unset",lineHeight:"inherit"}},Action:{DefaultStyle:{background:"#fff",borderRadius:"2px",padding:"6px 20px",fontWeight:"bold",margin:"10px 0 0 0",border:0},success:{backgroundColor:"#45b649",color:"#fff"},error:{backgroundColor:"#f85032",color:"#fff"},warning:{backgroundColor:"#ffd700",color:"#fff"},info:{backgroundColor:"#00c9ff",color:"#fff"}},ActionWrapper:{DefaultStyle:{margin:0,padding:0}}},oe=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleContentClick=function(e){!t.isSidebarOpen()||"xs"!==a.props.breakpoint&&"sm"!==a.props.breakpoint&&"md"!==a.props.breakpoint||a.openSidebar("close")},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.breakpoint;t!==this.props.breakpoint&&this.checkBreakpoint(t)}},{key:"componentDidMount",value:function(){this.checkBreakpoint(this.props.breakpoint)}},{key:"checkBreakpoint",value:function(e){switch(e){case"xs":case"sm":case"md":return this.openSidebar("close");case"lg":case"xl":default:return this.openSidebar("open")}}},{key:"openSidebar",value:function(e){if("open"===e)return document.querySelector(".cr-sidebar").classList.add("cr-sidebar--open");document.querySelector(".cr-sidebar").classList.remove("cr-sidebar--open")}},{key:"render",value:function(){var e=this,t=this.props.children;return r.a.createElement("main",{className:"cr-app bg-light"},r.a.createElement(he,null),r.a.createElement(O,{fluid:!0,onClick:this.handleContentClick},r.a.createElement(ee,null),t,r.a.createElement(j,null)),r.a.createElement(ne.a,{dismissible:!1,ref:function(t){return e.notificationSystem=t},style:re}))}}],[{key:"isSidebarOpen",value:function(){return document.querySelector(".cr-sidebar").classList.contains("cr-sidebar--open")}}]),t}(r.a.Component),ce=a(24),ie=a(26),le=a.n(ie),se=a(39),ue=a.n(se),me=a(118),pe={backgroundImage:'url("'.concat(ue.a,'")'),backgroundSize:"cover",backgroundRepeat:"no-repeat"},de=(R.t,R.j,R.f,R.F,R.b,R.z,R.o,R.d,R.E,R.A,R.c,R.a,R.D,[{to:"/",name:"Estacion",exact:!0,Icon:R.h},{to:"/masivo",name:"Masivo",exact:!1,Icon:R.G}]),fe=v.a.create("sidebar"),he=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isOpenComponents:!0,isOpenContents:!0,isOpenPages:!0},a.handleClick=function(e){return function(){a.setState(function(t){var a=t["isOpen".concat(e)];return Object(ce.a)({},"isOpen".concat(e),!a)})}},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("aside",{className:fe.b(),"data-image":ue.a},r.a.createElement("div",{className:fe.e("background"),style:pe}),r.a.createElement("div",{className:fe.e("content")},r.a.createElement(N.a,null,r.a.createElement(C,{className:"navbar-brand d-flex"},r.a.createElement("img",{src:le.a,width:"40",height:"30",className:"pr-2",alt:""}),r.a.createElement("span",{className:"text-white"},"SIMULADOR"))),r.a.createElement(S.a,{vertical:!0},de.map(function(e,t){var a=e.to,n=e.name,o=e.exact,c=e.Icon;return r.a.createElement(P.a,{key:t,className:fe.e("nav-item")},r.a.createElement(Y.a,{id:"navItem-".concat(n,"-").concat(t),className:"text-uppercase",tag:me.a,to:a,activeClassName:"active",exact:o},r.a.createElement(c,{className:fe.e("nav-item-icon")}),r.a.createElement("span",{className:""},n)))}))))}}]),t}(r.a.Component),be=a(114),ge=function(e){var t=e.color,a=void 0===t?"primary":t;return r.a.createElement("div",{className:"cr-page-spinner"},r.a.createElement(be.a,{color:a}))},Ee=a(115),ve=a(116),ye=a(100),xe=(r.a.Component,a(59)),ke=a.n(xe),Oe=a(117),Ne=a(119),Se=(a(90),r.a.lazy(function(){return Promise.all([a.e(3),a.e(24)]).then(a.bind(null,470))})),Pe=r.a.lazy(function(){return Promise.all([a.e(3),a.e(18)]).then(a.bind(null,458))}),Ce=r.a.lazy(function(){return a.e(19).then(a.bind(null,459))}),je=r.a.lazy(function(){return a.e(8).then(a.bind(null,475))}),we=r.a.lazy(function(){return a.e(15).then(a.bind(null,468))}),ze=r.a.lazy(function(){return Promise.all([a.e(0),a.e(7)]).then(a.bind(null,471))}),Ae=r.a.lazy(function(){return Promise.all([a.e(0),a.e(14)]).then(a.bind(null,460))}),_e=(r.a.lazy(function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(25)]).then(a.bind(null,472))}),r.a.lazy(function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(22)]).then(a.bind(null,461))})),Re=r.a.lazy(function(){return a.e(9).then(a.bind(null,462))}),Le=r.a.lazy(function(){return a.e(20).then(a.bind(null,473))}),Ie=r.a.lazy(function(){return a.e(10).then(a.bind(null,469))}),Te=r.a.lazy(function(){return Promise.all([a.e(3),a.e(16)]).then(a.bind(null,474))}),De=r.a.lazy(function(){return a.e(12).then(a.bind(null,463))}),Be=r.a.lazy(function(){return a.e(17).then(a.bind(null,464))}),Ue=r.a.lazy(function(){return a.e(21).then(a.bind(null,465))}),Me=r.a.lazy(function(){return a.e(11).then(a.bind(null,476))}),Ge=r.a.lazy(function(){return Promise.all([a.e(0),a.e(1),a.e(13),a.e(2),a.e(23)]).then(a.bind(null,477))}),We=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(Oe.a,null,r.a.createElement(Ne.a,null,r.a.createElement(oe,{breakpoint:this.props.breakpoint},r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(ge,null)},r.a.createElement(te.a,{exact:!0,path:"/",component:_e}),r.a.createElement(te.a,{exact:!0,path:"/login-modal",component:Pe}),r.a.createElement(te.a,{exact:!0,path:"/buttons",component:we}),r.a.createElement(te.a,{exact:!0,path:"/cards",component:ze}),r.a.createElement(te.a,{exact:!0,path:"/widgets",component:Me}),r.a.createElement(te.a,{exact:!0,path:"/typography",component:Ue}),r.a.createElement(te.a,{exact:!0,path:"/alerts",component:Se}),r.a.createElement(te.a,{exact:!0,path:"/tables",component:Be}),r.a.createElement(te.a,{exact:!0,path:"/badges",component:Ce}),r.a.createElement(te.a,{exact:!0,path:"/masivo",component:Ge}),r.a.createElement(te.a,{exact:!0,path:"/button-groups",component:je}),r.a.createElement(te.a,{exact:!0,path:"/dropdowns",component:Re}),r.a.createElement(te.a,{exact:!0,path:"/progress",component:De}),r.a.createElement(te.a,{exact:!0,path:"/modals",component:Te}),r.a.createElement(te.a,{exact:!0,path:"/forms",component:Le}),r.a.createElement(te.a,{exact:!0,path:"/input-groups",component:Ie}),r.a.createElement(te.a,{exact:!0,path:"/charts",component:Ae})))))}}]),t}(r.a.Component),qe=ke()(function(e){var t=e.width;return t<575?{breakpoint:"xs"}:576<t&&t<767?{breakpoint:"sm"}:768<t&&t<991?{breakpoint:"md"}:992<t&&t<1199?{breakpoint:"lg"}:t>1200?{breakpoint:"xl"}:{breakpoint:"xs"}})(We);c.a.render(r.a.createElement(qe,null),document.getElementById("root"))}},[[63,5,6]]]);
//# sourceMappingURL=main.b120d1dc.chunk.js.map