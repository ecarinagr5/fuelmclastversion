(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{141:function(e,a,t){"use strict";t.d(a,"a",function(){return r});var l=t(144),c=t.n(l),r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;return c()().number({min:e,max:a})}},203:function(e,a,t){"use strict";var l=t(9),c=t(10),r=t(12),n=t(11),s=t(13),m=t(23),E=t(1),i=t.n(E),h=t(471),d=t(472),A=t(244),o=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(r.a)(this,Object(n.a)(a).call(this,e))).state={options:[{name:"Servico Aztecas",id:1},{name:"Servico Neza",id:2},{name:"Azcapotzalco",id:3},{name:"Naucalpan",id:4}],cliente:[{name:"A",id:1},{name:"B",id:2}],precio:[{name:"> 10",id:1},{name:"< 10",id:2}],semaforo:[{name:"red",id:1},{name:"green",id:2}]},t.onSelect=t.onSelect.bind(Object(m.a)(Object(m.a)(t))),t.onRemove=t.onRemove.bind(Object(m.a)(Object(m.a)(t))),t}return Object(s.a)(a,e),Object(c.a)(a,[{key:"onSelect",value:function(e,a){}},{key:"onRemove",value:function(e,a){}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(h.a,null,i.a.createElement("hr",null),i.a.createElement(d.a,{md:12},i.a.createElement("div",{className:"content-filter"},i.a.createElement(d.a,{md:2,className:"float-left-five"},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-funnel ",viewBox:"0 0 16 16",className:"icon-filter"},i.a.createElement("path",{d:"M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"})),i.a.createElement("label",null,"Operadora"),i.a.createElement("p",{className:"filter-container"},i.a.createElement(A.Multiselect,{options:this.state.options,selectedValues:this.state.selectedValue,onSelect:this.onSelect,onRemove:this.onRemove,displayValue:"name",className:"row-filter"}))),i.a.createElement(d.a,{md:2,className:"float-left-five"},i.a.createElement("label",null,"Cliente"),i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-funnel icono-filter-main",viewBox:"0 0 16 16",className:"icon-filter"},i.a.createElement("path",{d:"M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"})),i.a.createElement("p",{className:"filter-container"},i.a.createElement(A.Multiselect,{options:this.state.cliente,selectedValues:this.state.selectedValue,onSelect:this.onSelect,onRemove:this.onRemove,displayValue:"name"}))),i.a.createElement(d.a,{md:2,className:"float-left-five"},i.a.createElement("label",null,"Precio"),i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-funnel icono-filter-main",viewBox:"0 0 16 16",className:"icon-filter"},i.a.createElement("path",{d:"M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"})),i.a.createElement("p",{className:"filter-container"},i.a.createElement(A.Multiselect,{options:this.state.precio,selectedValues:this.state.selectedValue,onSelect:this.onSelect,onRemove:this.onRemove,displayValue:"name"}))),i.a.createElement(d.a,{md:2,className:"float-left-five"},i.a.createElement("label",null,"Semaforo"),i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-funnel icono-filter-main",viewBox:"0 0 16 16",className:"icon-filter"},i.a.createElement("path",{d:"M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"})),i.a.createElement(A.Multiselect,{options:this.state.semaforo,selectedValues:this.state.selectedValue,onSelect:this.onSelect,onRemove:this.onRemove,displayValue:"name"})),i.a.createElement(d.a,{md:2,className:"float-left-five"},i.a.createElement("button",{className:"btn btn-outline-secondary clear-filter btn-red"},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-reply-all-fill",viewBox:"0 0 16 16"},i.a.createElement("path",{d:"M8.021 11.9L3.453 8.62a.719.719 0 0 1 0-1.238L8.021 4.1a.716.716 0 0 1 1.079.619V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z"}),i.a.createElement("path",{d:"M5.232 4.293a.5.5 0 0 1-.106.7L1.114 7.945a.5.5 0 0 1-.042.028.147.147 0 0 0 0 .252.503.503 0 0 1 .042.028l4.012 2.954a.5.5 0 1 1-.593.805L.539 9.073a1.147 1.147 0 0 1 0-1.946l3.994-2.94a.5.5 0 0 1 .699.106z"}))))))))}}]),a}(E.Component);a.a=o},204:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABJlBMVEUAAAAUxJ0ZvpsavJ4Vv5UXuZsavJwavJwavJwavJ0au50Yv58bvJ0avJwavJwavp0ktpIbvJwavJwavJwavZwavJsbvJsXuZwavJwavJwbu5was5kbvJsavJwbvZwYvpoau5savJwau5wcup8A//8fuJkavJwavZwavJwzzJkbvZsavJwavJwZvJwAv4AbvZ0avJwavJ0avJwbvJwZvJwZvJsavJsYtp4avZwau5sXuaIZvJ0avJwav5kew5YZvJ0avJsavJwZu5sbvJwbvZwavJwZvJwavJwWvJsavJwau5wbupwau5wZvZ0avJwavJsauZkavJwZvJsavp0bvJobvJoavJsYvJ4rqqoZu5wavJwavJ0ZvZwavZwau5wbupoavJwAAABvm7eNAAAAYHRSTlMADTNEDCF2xv3FdSCZ+6onB4b1t5b2hSzU7nEKc/DTK0/y2yUBGdxNagV75uV5BGj+uPi2b1y7FWR4C1v5FBGr5OKX3VWomOAX47lDWnC0bijxZk4mTNIqBoT6gh90xDDHsmatAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAO6QAADukBDjNCHAAAAAd0SU1FB+UBCBY0B09smFgAAAFaSURBVDjL1ZNrXwFREIf/taWNtMJWWCS7ym2RbpZKVKIbXVXifP9PkXOOXZsfL71oXs3MM3vmusC/k4VFQVhcmkWXHSsiGYq46nRNw2tuYom4Lk1gzwbDXp/f75Op5t702PnWNnUGgiFqhJQwtSLRMd+JUc9uHFA1TQWkBLVjeybfZ7UF4kim0oRksjok9oaY4zyYZ4UFkSyQg8xQK+pQmCt/SPkR594QUuT45JTqJRgyjygDQoV35oOals/OL6heVVHg3oqAy1HrNWikfnXNDQ03I3cDDVuAJbe2AFuKpsmHKVqjFHdA2SoyawY4rCLvaRsPPEJBssj5ow4n5098EDk2qLAEvVQlpOnQ0e6wQT2bo3xho068mqNu16ndeRsvIxphbygGNQwn+/79w77O7idbt1yo1Vqsvq/v7sRFuP4eTHzKTfV++vzk+kpv1lkaA0EYGHP7J+Ymv+p9fVXZdHxRAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTAxLTA4VDIyOjUyOjA3KzAwOjAwjnIuMgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wMS0wOFQyMjo1MjowNyswMDowMP8vlo4AAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"},205:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABmFBMVEUAAAAcv5wau5wdvZkavJsYvJ4avJwavJwZvJwavJ0avJwZu5sgv58avJwZu5sbvJoavJwcuJwbvJsau5wavJwbvJ0AgIAbvJwbvJoavZwavJwAqqoavp0bu5wiu5kauZkZvJsau5wew5YWvJsavZwavJwavJwavJwavJwavJwbu5sbvJwavJwavJwau5wbvZwZvJwgv58cxqobvZsavJwau5wavJ0avJsavJwavJwbvJ0XuZsas5kXvJ4avZoavZ0avJwbvZwavJwbvJwrqqobu5wavJ4avJwavJwUxJ0avJwcvpscu58avJwZvZwdup0avJwavJwavZ4avJ0avJwavJsavJwA//8avZ0avJwau50ZvJsbvZ0avZwavJwXuZwcvJscvaEbvJsbupoZvZwavJwavJwavZwavZ0ZvJwavJsZvZwavJwavJwavJwavJwStqQavJ0avJwbu50Zu5waupwZup0avJ0avJwau50avJwavJwbu5savJwavJ0avJsYtp4av5kcvp4cvZwavJwau5savJwAAAAGpbPAAAAAhnRSTlMAJMgjuyr+85iUlZcQ9Ckm9RJzubpyAt1MTd8DTnEPKD1iERd3m7LH4vePkMbaxK15CAl7r9vF5NZQOSEKIjrX41X7owaiRPG+DbdKLdUfGs/mMrjwpPoBh4mmZmil4CwuG1Qwjn60vH+NRYP47/n8DpH9XrU7NL3QPO5qae1jnBUUNzadgGrhTa4AAAABYktHRACIBR1IAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH5QENAAQW1e+hqQAAAZVJREFUOMt9U2dbwjAYjCjFAW5RQBBEBLfiQBAXMsQJKrj3Vly4977fLaX4kADlvuQud837pkkIYZAjkeSSbMgD8rL5Uk4m46RZAvkoKESRuC9XcMUlXGmZaKAcFYRUokrMV1ajhhAV1BqRQG3cisVUonvUCoUqM5i6Or2BU8h5Wq/gDPo63b9jbDA1mi1N4NEsTLXERZPF3GhqMJLWuIKsrb2js0sIWLt72nsVwnwfsaHf7hhwphd1Dg7ZhzFCRl0Yc2du2u2Ba5QQrw/j8ky+fwKySZ5MWTA9k+7PBhCcS6NJMJ/55xOLJeFdYAq7Qwg7aH8ojBDT+mIIS7ReRmiRXXIFq7Rcw3pKTxvYpOUW1Cl7gk9Ja+UCtpnADuYFsrsrjBXYYQJ72OeH3APgsJhnRzhmAmacxI7nNIKzM0ROY0d3AjPtW88vLolKDc5jLLuKwnZN/BdhKxXQI5BzAwRueXEnAe6lD3ikAloEI3h6TtxmzcsrIkHhgibwBkTfP5L60xQFDFRAs+z5Yn/M98+v2OtIwR8VemQVZclhHAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wMS0xM1QwMDowNDoyMiswMDowML5pS/UAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDEtMTNUMDA6MDQ6MjIrMDA6MDDPNPNJAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="},473:function(e,a,t){"use strict";t.r(a);var l=t(9),c=t(10),r=t(12),n=t(11),s=t(13),m=t(23),E=(t(22),t(42),t(154),t(155),t(122)),i=(t(157),t(158),t(159),t(142),t(139),t(180)),h=(t(141),t(203)),d=t(204),A=t.n(d),o=(t(205),t(161),t(1)),v=t.n(o),N=(t(143),t(181),t(115)),w=t(116),b=t(100),u=t(101),x=t(62),g=t(417),p=t(127),J=new Date,M=(new Date(J.getFullYear(),J.getMonth(),J.getDate()-7),function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(r.a)(this,Object(n.a)(a).call(this,e))).state={selectAll:!1,simular:!1},t.selectAll=t.selectAll.bind(Object(m.a)(Object(m.a)(t))),t.handleClick=t.handleClick.bind(Object(m.a)(Object(m.a)(t))),t}return Object(s.a)(a,e),Object(c.a)(a,[{key:"selectAll",value:function(){this.setState({selectAll:!this.state.selectAll})}},{key:"handleClick",value:function(){this.setState({simular:!0})}},{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){Object(p.a)("primary"),Object(p.a)("secondary");return v.a.createElement(E.a,null,v.a.createElement(N.a,null,v.a.createElement(w.a,null,v.a.createElement(N.a,null,v.a.createElement(b.a,{className:"container-card-simular"},v.a.createElement(u.a,null,v.a.createElement("div",{class:"form-row"},v.a.createElement(w.a,{md:2,className:""},v.a.createElement("label",{className:"label-simular"},"PRECIO RECOMENDADO"),v.a.createElement("input",{type:"text",class:"form-control",placeholder:"$12.2"})),v.a.createElement(w.a,{md:2},v.a.createElement("label",{className:"label-simular"},"MARGEN"),v.a.createElement("input",{type:"text",class:"form-control",placeholder:"12"})),v.a.createElement(w.a,{md:2},v.a.createElement("label",{className:"label-simular"},"VOLUMEN"),v.a.createElement("input",{type:"text",class:"form-control",placeholder:"24"})),v.a.createElement(w.a,{md:3},v.a.createElement(x.a,{color:"primary btn-barra-simular",onClick:this.handleClick},"SIMULAR"),v.a.createElement(x.a,{color:"primary btn-barra-simular"},"ACEPTAR \xa0",v.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-calendar2-event",viewBox:"0 0 16 16"},v.a.createElement("path",{d:"M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"}),v.a.createElement("path",{d:"M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"}),v.a.createElement("path",{d:"M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"}))),v.a.createElement(x.a,{color:"danger btn-barra-simular"},v.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-reply-all-fill",viewBox:"0 0 16 16"},v.a.createElement("path",{d:"M8.021 11.9L3.453 8.62a.719.719 0 0 1 0-1.238L8.021 4.1a.716.716 0 0 1 1.079.619V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z"}),v.a.createElement("path",{d:"M5.232 4.293a.5.5 0 0 1-.106.7L1.114 7.945a.5.5 0 0 1-.042.028.147.147 0 0 0 0 .252.503.503 0 0 1 .042.028l4.012 2.954a.5.5 0 1 1-.593.805L.539 9.073a1.147 1.147 0 0 1 0-1.946l3.994-2.94a.5.5 0 0 1 .699.106z"})))))))),v.a.createElement(h.a,null),v.a.createElement(b.a,{className:"mb-3"},v.a.createElement(u.a,null,v.a.createElement(i.Tabs,{headerStyle:{fontWeight:"bold"},activeHeaderStyle:{color:"black"}},v.a.createElement(i.Tab,{label:"Diesel"},v.a.createElement(g.a,{responsive:!0},v.a.createElement("thead",null,v.a.createElement("tr",null,v.a.createElement("th",{className:"text-center header-table"},"All ",v.a.createElement("input",{type:"radio",onChange:this.selectAll})),v.a.createElement("th",{className:"text-center header-table"},"OPERADORA"),v.a.createElement("th",{className:"text-center header-table"},"CLIENTE"),v.a.createElement("th",{className:"text-center header-table"},v.a.createElement("span",{className:"meaning"},"TAR"),v.a.createElement("span",{className:"detail"},"Precio de venta TAR de Suministro")),v.a.createElement("th",{className:"text-center header-table"},v.a.createElement("span",{className:"meaning"},"PVP EESS"),v.a.createElement("span",{className:"detail"},"Precio de venta de estaci\xf3n de Servicio")),v.a.createElement("th",{className:"text-center header-table"},v.a.createElement("span",{className:"meaning"},"PVP COM "),v.a.createElement("span",{className:"detail"},"Precio medio de la competencia")),v.a.createElement("th",{className:"text-center header-table"},v.a.createElement("span",{className:"meaning"},"PVP MAX"),v.a.createElement("span",{className:"detail"},"Precio m\xe1ximo de la competencia")),v.a.createElement("th",{className:"text-center header-table"},v.a.createElement("span",{className:"meaning"},"PVP MIN"),v.a.createElement("span",{className:"detail"},"Precio m\xednimo de la competencia")),v.a.createElement("th",{className:"text-center header-table"},"ESTRAT\xc9GICO"),v.a.createElement("th",{className:"text-center header-table"},v.a.createElement("span",{className:"meaning"},"MARGEN REP ES"),v.a.createElement("span",{className:"detail"},"Margen te\xf3rico de la estaci\xf3n de servicio")),v.a.createElement("th",{className:"text-center header-table"},v.a.createElement("span",{className:"meaning"},"MARGEN SUM ES"),v.a.createElement("span",{className:"detail"},"Margen sobre suministro (sobre la compra)")),v.a.createElement("th",{className:"text-center header-table"},v.a.createElement("span",{className:"meaning"},"MARGEN PROM POND"),v.a.createElement("span",{className:"detail"},"Margen promedio ponderado del mes")),v.a.createElement("th",{className:"text-center header-table"},v.a.createElement("span",{className:"meaning"},"EV VTA ES"),v.a.createElement("span",{className:"detail"}," Desviaci\xf3n del volumen (Volumen objetivo vs. Volumen real)")),v.a.createElement("th",{className:"text-center header-table"},"PRECIO RECOMENDADO"),v.a.createElement("th",{className:"text-center header-table"},"MARGEN POR LITRO OBJETIVO"),v.a.createElement("th",{className:"text-center header-table"},"VOLUMEN OBJETIVO"),v.a.createElement("th",{className:"text-center header-table"},"UTILIDAD TOTAL"),v.a.createElement("th",{className:"text-center header-table"},"USUARIO"),v.a.createElement("th",{className:"text-center header-table"}),v.a.createElement("th",{className:"text-center header-table"}),v.a.createElement("th",{className:"text-center header-table"}),v.a.createElement("th",{className:"text-center header-table"}))),v.a.createElement("tbody",null,v.a.createElement("tr",null,v.a.createElement("td",{className:"text-center color-blue"}," ",v.a.createElement("input",{type:"radio",id:"",name:"",value:"dewey",checked:!!this.state.selectAll})),v.a.createElement("td",{className:"text-center"},"Servicio Aztecas"),v.a.createElement("td",{className:"text-center"}," B"),v.a.createElement("td",{className:"text-center"}," 13.5"),v.a.createElement("td",{className:"text-center"},"15.5"),v.a.createElement("td",{className:"text-center"}," 13.6 "),v.a.createElement("td",{className:"text-center"},"15.6"),v.a.createElement("td",{className:"text-center"}," 12.2"),v.a.createElement("td",{className:"text-center"},"15.3 ",v.a.createElement("span",{className:"txt-ok"},"*")),v.a.createElement("td",{className:"text-center"}," 12.2"),v.a.createElement("td",{className:"text-center"}," 13.3"),v.a.createElement("td",{className:"text-center"},"15.2"),v.a.createElement("td",{className:"text-center bg-gray-light"},"13.2"),v.a.createElement("td",{className:"text-center bg-gray-light"}," ",this.state.simular?v.a.createElement("input",{type:"number",className:"input-simulacion",placeholder:"12"}):12),v.a.createElement("td",{className:"text-center bg-gray-light"}," ",this.state.simular?v.a.createElement("input",{type:"number",className:"input-simulacion",placeholder:"16.8"}):16.8),v.a.createElement("td",{className:"text-center bg-gray-light"},this.state.simular?v.a.createElement("input",{type:"number",className:"input-simulacion",placeholder:"1.4"}):1.4),v.a.createElement("td",{className:"text-center bg-gray-light"},"1.4"),v.a.createElement("td",{className:"text-center bg-gray-light user-name"}," Karla_Perez"),v.a.createElement("td",{className:"text-center"},v.a.createElement("a",{href:"/#ServicioAztecas",target:"_self"},v.a.createElement("img",{src:A.a,alt:"ver",className:"ver-dashboard"}))),v.a.createElement("td",{className:"text-center"},v.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-check-circle color-check",viewBox:"0 0 16 16"},v.a.createElement("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),v.a.createElement("path",{d:"M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"}))),v.a.createElement("td",{className:"text-center"},v.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-x-square-fill color-cancel",viewBox:"0 0 16 16"},v.a.createElement("path",{d:"M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"})))),v.a.createElement("tr",null,v.a.createElement("td",{className:"text-center color-blue"}," ",v.a.createElement("input",{type:"radio",id:"",name:"",value:"dewey",checked:!!this.state.selectAll})),v.a.createElement("td",{className:"text-center"},"Servico Neza"),v.a.createElement("td",{className:"text-center"}," A"),v.a.createElement("td",{className:"text-center"}," 13.5"),v.a.createElement("td",{className:"text-center"}," 12.2"),v.a.createElement("td",{className:"text-center"}," 13.6 "),v.a.createElement("td",{className:"text-center"},"15.6"),v.a.createElement("td",{className:"text-center"}," 12.2"),v.a.createElement("td",{className:"text-center"}," 13.2 "),v.a.createElement("td",{className:"text-center"}," 12.2"),v.a.createElement("td",{className:"text-center"}," 13.3"),v.a.createElement("td",{className:"text-center"},"15.23"),v.a.createElement("td",{className:"text-center bg-gray-light"},"11.2"),v.a.createElement("td",{className:"text-center bg-gray-light"}," 1"),v.a.createElement("td",{className:"text-center bg-gray-light"}," 1"),v.a.createElement("td",{className:"text-center bg-gray-light"}," 1.2"),v.a.createElement("td",{className:"text-center bg-gray-light bg-margen-minimo"},"1.2"),v.a.createElement("td",{className:"text-center bg-gray-light user-name"}," Roman_Perez"),v.a.createElement("td",{className:"text-center color-red"}," ",v.a.createElement("a",{href:"/#ServicoNeza",target:"_self"},v.a.createElement("img",{src:A.a,alt:"ver",className:"ver-dashboard"}))),v.a.createElement("td",{className:"text-center"},v.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-check-circle color-check",viewBox:"0 0 16 16"},v.a.createElement("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),v.a.createElement("path",{d:"M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"}))),v.a.createElement("td",{className:"text-center"},v.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-x-square-fill color-cancel",viewBox:"0 0 16 16"},v.a.createElement("path",{d:"M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"}))))))),v.a.createElement(i.Tab,{label:"< 92"},v.a.createElement(g.a,{responsive:!0},v.a.createElement("thead",null,v.a.createElement("tr",null,v.a.createElement("th",{className:"text-center header-table"}),v.a.createElement("th",{className:"text-center header-table"},"OPERADORA"),v.a.createElement("th",{className:"text-center header-table"},"CLIENTE"),v.a.createElement("th",{className:"text-center header-table"},"TAR "),v.a.createElement("th",{className:"text-center header-table"},"PVP EESS"),v.a.createElement("th",{className:"text-center header-table"},"PVP COM"),v.a.createElement("th",{className:"text-center header-table"},"PVP MAX"),v.a.createElement("th",{className:"text-center header-table"},"PVP MIN"),v.a.createElement("th",{className:"text-center header-table"},"ESTRAT\xc9GICO"),v.a.createElement("th",{className:"text-center header-table"},"MARGEN REP ES"),v.a.createElement("th",{className:"text-center header-table"},"MARGEN SUM ES"),v.a.createElement("th",{className:"text-center header-table"},"MARGEN PROM POND"),v.a.createElement("th",{className:"text-center header-table"},"EV VTA ES"),v.a.createElement("th",{className:"text-center header-table"},"PRECIO RECOMENDADO"),v.a.createElement("th",{className:"text-center header-table"},"MARGEN POR LITRO OBJETIVO"),v.a.createElement("th",{className:"text-center header-table"},"VOLUMEN OBJETIVO"),v.a.createElement("th",{className:"text-center header-table"},"UTILIDAD TOTAL"),v.a.createElement("th",{className:"text-center header-table"},"USUARIO"),v.a.createElement("th",{className:"text-center header-table"}),v.a.createElement("th",{className:"text-center header-table"}),v.a.createElement("th",{className:"text-center header-table"}),v.a.createElement("th",{className:"text-center header-table"}))),v.a.createElement("tbody",null,v.a.createElement("tr",null,v.a.createElement("td",{className:"text-center color-blue"}," ",v.a.createElement("input",{type:"radio",id:"",name:"",value:"dewey"})),v.a.createElement("td",{className:"text-center"},"Azcapotzalco"),v.a.createElement("td",{className:"text-center"}," 15.2"),v.a.createElement("td",{className:"text-center"}," 13.5"),v.a.createElement("td",{className:"text-center"},"15.5"),v.a.createElement("td",{className:"text-center"}," 12.2"),v.a.createElement("td",{className:"text-center"}," 13.6 "),v.a.createElement("td",{className:"text-center"}," 13.2 "),v.a.createElement("td",{className:"text-center"}," 13.3"),v.a.createElement("td",{className:"text-center"}," 12.23"),v.a.createElement("td",{className:"text-center"}," 13.2"),v.a.createElement("td",{className:"text-center"},"15.23"),v.a.createElement("td",{className:"text-center bg-gray-light"},"13.2"),v.a.createElement("td",{className:"text-center bg-gray-light"}," 12"),v.a.createElement("td",{className:"text-center bg-gray-light"}," 12"),v.a.createElement("td",{className:"text-center bg-gray-light"}," 12.2"),v.a.createElement("td",{className:"text-center bg-gray-light bg-redb"},"1.4"),v.a.createElement("td",{className:"text-center bg-gray-light user-name"}," Isabel_Perez"),v.a.createElement("td",{className:"text-center color-red"}," ",v.a.createElement("a",{href:"estacion#Azcapotzalco",target:"_self"},v.a.createElement("img",{src:A.a,alt:"ver",className:"ver-dashboard"}))),v.a.createElement("td",{className:"text-center"},v.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-x-square-fill color-cancel",viewBox:"0 0 16 16"},v.a.createElement("path",{d:"M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"}))))))),v.a.createElement(i.Tab,{label:"> 92"},v.a.createElement(g.a,{responsive:!0},v.a.createElement("thead",null,v.a.createElement("tr",null,v.a.createElement("th",{className:"text-center header-table"}),v.a.createElement("th",{className:"text-center header-table"},"OPERADORA"),v.a.createElement("th",{className:"text-center header-table"},"CLIENTE"),v.a.createElement("th",{className:"text-center header-table"},v.a.createElement("span",{className:"meaning"},"TAR"),v.a.createElement("span",{className:"detail"},"TERMINAL")),v.a.createElement("th",{className:"text-center header-table"},"PVP EESS"),v.a.createElement("th",{className:"text-center header-table"},"PVP COM"),v.a.createElement("th",{className:"text-center header-table"},"PVP MAX"),v.a.createElement("th",{className:"text-center header-table"},"PVP MIN"),v.a.createElement("th",{className:"text-center header-table"},"ESTRAT\xc9GICO"),v.a.createElement("th",{className:"text-center header-table"},"MARGEN REP ES"),v.a.createElement("th",{className:"text-center header-table"},"MARGEN SUM ES"),v.a.createElement("th",{className:"text-center header-table"},"MARGEN PROM POND"),v.a.createElement("th",{className:"text-center header-table"},"EV VTA ES"),v.a.createElement("th",{className:"text-center header-table"},"PRECIO RECOMENDADO"),v.a.createElement("th",{className:"text-center header-table"},"MARGEN POR LITRO OBJETIVO"),v.a.createElement("th",{className:"text-center header-table"},"VOLUMEN OBJETIVO"),v.a.createElement("th",{className:"text-center header-table"},"UTILIDAD TOTAL"),v.a.createElement("th",{className:"text-center header-table"},"USUARIO"),v.a.createElement("th",{className:"text-center header-table"}),v.a.createElement("th",{className:"text-center header-table"}),v.a.createElement("th",{className:"text-center header-table"}),v.a.createElement("th",{className:"text-center header-table"}))),v.a.createElement("tbody",null,v.a.createElement("tr",null,v.a.createElement("td",{className:"text-center color-blue"}," ",v.a.createElement("input",{type:"radio",id:"",name:"",value:"dewey"})),v.a.createElement("td",{className:"text-center"},"Naucalpan"),v.a.createElement("td",{className:"text-center"}," 15.2"),v.a.createElement("td",{className:"text-center"}," 13.5"),v.a.createElement("td",{className:"text-center"},"15.5"),v.a.createElement("td",{className:"text-center"}," 13.6 "),v.a.createElement("td",{className:"text-center"},"15.6"),v.a.createElement("td",{className:"text-center"}," 12.2"),v.a.createElement("td",{className:"text-center"}," 12.2"),v.a.createElement("td",{className:"text-center"},"15.2"),v.a.createElement("td",{className:"text-center"}," 12.23"),v.a.createElement("td",{className:"text-center"}," 13.2"),v.a.createElement("td",{className:"text-center"},"15.23"),v.a.createElement("td",{className:"text-center bg-gray-light"},"13.2"),v.a.createElement("td",{className:"text-center bg-gray-light"}," 12"),v.a.createElement("td",{className:"text-center bg-gray-light"}," 12"),v.a.createElement("td",{className:"text-center bg-gray-light"}," 1.3"),v.a.createElement("td",{className:"text-center bg-gray-light"},"1.5"),v.a.createElement("td",{className:"text-center bg-gray-light user-name"}," Fernando_Robles"),v.a.createElement("td",{className:"text-center color-red"}," ",v.a.createElement("a",{href:"estacion#Naucalpan",target:"_self"}," ",v.a.createElement("img",{src:A.a,alt:"ver",className:"ver-dashboard"}))),v.a.createElement("td",{className:"text-center"},v.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-check-circle color-check",viewBox:"0 0 16 16"},v.a.createElement("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),v.a.createElement("path",{d:"M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"}))),v.a.createElement("td",{className:"text-center"},v.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-x-square-fill color-cancel",viewBox:"0 0 16 16"},v.a.createElement("path",{d:"M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"})))))))))))),v.a.createElement(N.a,null))}}]),a}(v.a.Component));a.default=M}}]);
//# sourceMappingURL=23.0239ef5e.chunk.js.map