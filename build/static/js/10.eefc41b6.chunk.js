(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{124:function(e,a,t){"use strict";var n=t(27),l=t(8),c=t(3),r=t.n(c),s=t(1),m=t.n(s),i=(t(16),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),u=function(e){var a,t=e.tag,c=e.className,s=e.type,u=Object(l.a)(e,["tag","className","type"]),o=r()(Object(n.a)({},s,!!s),c);return a=t||(!t&&i[s]?i[s]:"p"),m.a.createElement(a,Object.assign({},u,{className:o}))};u.defaultProps={type:"p"},a.a=u},126:function(e,a,t){"use strict";var n=t(8),l=t(1),c=t.n(l),r=(t(16),t(20)),s=t(132),m=t(133),i=t(124),u=r.a.create("page"),o=function(e){var a=e.title,t=e.breadcrumbs,l=e.tag,r=e.className,o=e.children,d=Object(n.a)(e,["title","breadcrumbs","tag","className","children"]),p=u.b("px-3",r);return c.a.createElement(l,Object.assign({className:p},d),c.a.createElement("div",{className:u.e("header")},a&&"string"===typeof a?c.a.createElement(i.a,{type:"h1",className:u.e("title")},a):a,t&&c.a.createElement(s.a,{className:u.e("breadcrumb")},c.a.createElement(m.a,null,"Home"),t.length&&t.map(function(e,a){var t=e.name,n=e.active;return c.a.createElement(m.a,{key:a,active:n},t)}))),o)};o.defaultProps={tag:"div",title:""},a.a=o},129:function(e,a,t){"use strict";t.d(a,"a",function(){return n}),t.d(a,"b",function(){return l});var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"primary";return"undefined"===typeof window?null:window.getComputedStyle(document.documentElement).getPropertyValue("--".concat(e))},l=function(){return["primary","secondary","success","info","warning","danger"]}},139:function(e,a,t){"use strict";t(146),t(129)},259:function(e,a,t){e.exports=t.p+"static/media/background_1920-11.b7f68e8a.jpg"},260:function(e,a,t){e.exports=t.p+"static/media/background_1920-18.acfe7046.jpg"},261:function(e,a,t){e.exports=t.p+"static/media/background_640-1.1420d15b.jpg"},262:function(e,a,t){e.exports=t.p+"static/media/background_640-3.55e47e98.jpg"},309:function(e,a,t){e.exports=t.p+"static/media/background_1920-5.1d98ff2e.jpg"},310:function(e,a,t){e.exports=t.p+"static/media/background_1920-6.1e0eb550.jpg"},311:function(e,a,t){e.exports=t.p+"static/media/background_1920-7.abf47fc1.png"},312:function(e,a,t){e.exports=t.p+"static/media/background_1920-19.22fc19f2.jpg"},479:function(e,a,t){"use strict";t.r(a);var n=t(259),l=t.n(n),c=t(260),r=t.n(c),s=t(261),m=t.n(s),i=t(262),u=t.n(i),o=t(47),d=t.n(o),p=t(43),g=t(126),E=(t(146),t(129)),f=t(309),h=t.n(f),b=t(310),x=t.n(b),y=t(311),N=t.n(y),k=t(312),j=t.n(k),v=[{imgUrl:h.a},{imgUrl:x.a},{imgUrl:N.a},{imgUrl:j.a}],w=(Object(E.a)("secondary"),Object(E.a)("secondary"),t(139),t(1)),C=t.n(w),O=(t(147),t(118)),_=t(119),q=t(103),M=t(111),P=t(104),U=t(105),R=t(107),S=t(109),T=t(110),H=t(4),L=t(5),z=t(0),D=t.n(z),G=t(3),I=t.n(G),J=t(2),K={tag:J.p,innerRef:D.a.oneOfType([D.a.object,D.a.func,D.a.string]),className:D.a.string,cssModule:D.a.object},V=function(e){var a=e.className,t=e.cssModule,n=e.tag,l=e.innerRef,c=Object(L.a)(e,["className","cssModule","tag","innerRef"]),r=Object(J.l)(I()(a,"card-link"),t);return C.a.createElement(n,Object(H.a)({},c,{ref:l,className:r}))};V.propTypes=K,V.defaultProps={tag:"a"};var A=V,B=t(63),F=t(112);a.default=function(){return C.a.createElement(g.a,{title:"Cards",breadcrumbs:[{name:"cards",active:!0}]},C.a.createElement(O.a,null,C.a.createElement(_.a,{md:6,sm:6,xs:12,className:"mb-3"},C.a.createElement(q.a,{className:"flex-row"},C.a.createElement(M.a,{className:"card-img-left",src:m.a,style:{width:"auto",height:150}}),C.a.createElement(P.a,null,C.a.createElement(U.a,null,"Horizontal Image Card(Left)"),C.a.createElement(R.a,null,"Some quick example text to build on the card title and make up the bulk of the card's content.")))),C.a.createElement(_.a,{md:6,sm:6,xs:12,className:"mb-3"},C.a.createElement(q.a,{className:"flex-row"},C.a.createElement(P.a,null,C.a.createElement(U.a,null,"Horizontal Image Card(Right)"),C.a.createElement(R.a,null,"Some quick example card")),C.a.createElement(M.a,{className:"card-img-right",src:u.a,style:{width:"auto",height:150}})))),C.a.createElement(O.a,null,C.a.createElement(_.a,{md:6,sm:6,xs:12,className:"mb-3"},C.a.createElement(q.a,null,C.a.createElement(M.a,{top:!0,src:l.a}),C.a.createElement(P.a,null,C.a.createElement(U.a,null,"Card with image"),C.a.createElement(R.a,null,"Some quick example text to build on the card title and make up the bulk of the card's content.")))),C.a.createElement(_.a,{md:6,sm:6,xs:12,className:"mb-3"},C.a.createElement(q.a,null,C.a.createElement(M.a,{top:!0,src:r.a}),C.a.createElement(P.a,null,C.a.createElement(U.a,null,"Card with list group"),C.a.createElement(R.a,null,"This example shows how to use card with list group"," ")),C.a.createElement(S.a,{flush:!0},C.a.createElement(T.a,null,"Cras justo odio"),C.a.createElement(T.a,null,"Dapibus ac facilisis in"),C.a.createElement(T.a,null,"Morbi leo risus")),C.a.createElement(P.a,null,C.a.createElement(A,{tag:"a",href:"#"},"Go to details"),C.a.createElement(A,{tag:"a",href:"#"},"More"))))),C.a.createElement(O.a,null,["","top","left","right"].map(function(e,a){return C.a.createElement(_.a,{key:a,md:6,sm:6,xs:12,className:"mb-3"},C.a.createElement(q.a,{inverse:!0,className:"border-0 bg-gradient-theme".concat(e?"-":"").concat(e),style:{height:200}},C.a.createElement(P.a,{className:"d-flex flex-column justify-content-start align-items-start"},C.a.createElement(U.a,null,"Card title"),C.a.createElement(R.a,null,"card text")),C.a.createElement(P.a,{className:"d-flex justify-content-between align-items-center"},C.a.createElement(R.a,null,"Karl David"),C.a.createElement(B.a,{outline:!0,color:"light"},"Click"))))})),C.a.createElement(O.a,null,v.map(function(e,a){var t=e.imgUrl;return C.a.createElement(_.a,{key:a,md:6,sm:6,xs:12},C.a.createElement(q.a,{inverse:!0,className:"text-center"},C.a.createElement(M.a,{width:"100%",src:t,alt:"Card image cap"}),C.a.createElement(F.a,null,C.a.createElement(U.a,null,"Card Title"),C.a.createElement(R.a,null,"inversed card"),C.a.createElement(R.a,null,C.a.createElement("small",{className:"text-muted"},"Last updated 3 mins ago")))))})),C.a.createElement(O.a,null,C.a.createElement(_.a,{md:5},C.a.createElement(p.a,{avatar:d.a,title:"Chris",subtitle:"Project Lead",text:"Give me a star!",style:{height:300}}))))}}}]);
//# sourceMappingURL=10.eefc41b6.chunk.js.map