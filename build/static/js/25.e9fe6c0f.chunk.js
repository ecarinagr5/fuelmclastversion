(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{154:function(e,a,t){"use strict";var l=t(9),c=t(10),n=t(12),r=t(11),s=t(13),m=t(23),i=t(1),E=t.n(i),d=t(466),o=t(467),h=t(195),A=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(n.a)(this,Object(r.a)(a).call(this,e))).state={options:[{name:"Servico Aztecas",id:1},{name:"Servico Neza",id:2},{name:"Azcapotzalco",id:3},{name:"Naucalpan",id:4}],cliente:[{name:"A",id:1},{name:"B",id:2}],precio:[{name:"> 10",id:1},{name:"< 10",id:2}],semaforo:[{name:"red",id:1},{name:"green",id:2}]},t.onSelect=t.onSelect.bind(Object(m.a)(Object(m.a)(t))),t.onRemove=t.onRemove.bind(Object(m.a)(Object(m.a)(t))),t}return Object(s.a)(a,e),Object(c.a)(a,[{key:"onSelect",value:function(e,a){}},{key:"onRemove",value:function(e,a){}},{key:"render",value:function(){return E.a.createElement("div",null,E.a.createElement(d.a,null,E.a.createElement("hr",null),E.a.createElement(o.a,{md:12},E.a.createElement("div",{className:"content-filter"},E.a.createElement(o.a,{md:2,className:"float-left-five"},E.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-funnel ",viewBox:"0 0 16 16",className:"icon-filter"},E.a.createElement("path",{d:"M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"})),E.a.createElement("label",null,"Empresa"),E.a.createElement("p",{className:"filter-container"},E.a.createElement(h.Multiselect,{options:this.state.options,selectedValues:this.state.selectedValue,onSelect:this.onSelect,onRemove:this.onRemove,displayValue:"name",className:"row-filter"}))),E.a.createElement(o.a,{md:2,className:"float-left-five"},E.a.createElement("label",null,"Negocio"),E.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-funnel icono-filter-main",viewBox:"0 0 16 16",className:"icon-filter"},E.a.createElement("path",{d:"M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"})),E.a.createElement("p",{className:"filter-container"},E.a.createElement(h.Multiselect,{options:this.state.cliente,selectedValues:this.state.selectedValue,onSelect:this.onSelect,onRemove:this.onRemove,displayValue:"name"}))),E.a.createElement(o.a,{md:2,className:"float-left-five"},E.a.createElement("label",null,"Precio"),E.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-funnel icono-filter-main",viewBox:"0 0 16 16",className:"icon-filter"},E.a.createElement("path",{d:"M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"})),E.a.createElement("p",{className:"filter-container"},E.a.createElement(h.Multiselect,{options:this.state.precio,selectedValues:this.state.selectedValue,onSelect:this.onSelect,onRemove:this.onRemove,displayValue:"name"}))),E.a.createElement(o.a,{md:2,className:"float-left-five"},E.a.createElement("label",null,"Margen"),E.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-funnel icono-filter-main",viewBox:"0 0 16 16",className:"icon-filter"},E.a.createElement("path",{d:"M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"})),E.a.createElement(h.Multiselect,{options:this.state.semaforo,selectedValues:this.state.selectedValue,onSelect:this.onSelect,onRemove:this.onRemove,displayValue:"name"})),E.a.createElement(o.a,{md:2,className:"float-left-five"},E.a.createElement("label",null,"Volumen"),E.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-funnel icono-filter-main",viewBox:"0 0 16 16",className:"icon-filter"},E.a.createElement("path",{d:"M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"})),E.a.createElement(h.Multiselect,{options:this.state.semaforo,selectedValues:this.state.selectedValue,onSelect:this.onSelect,onRemove:this.onRemove,displayValue:"name"})),E.a.createElement(o.a,{md:2,className:"float-left-five"},E.a.createElement("label",null,"Utilidad"),E.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-funnel icono-filter-main",viewBox:"0 0 16 16",className:"icon-filter"},E.a.createElement("path",{d:"M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"})),E.a.createElement(h.Multiselect,{options:this.state.semaforo,selectedValues:this.state.selectedValue,onSelect:this.onSelect,onRemove:this.onRemove,displayValue:"name"})),E.a.createElement(o.a,{md:2,className:"float-left-five"},E.a.createElement("button",{className:"btn btn-outline-secondary clear-filter btn-red"},E.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-reply-all-fill",viewBox:"0 0 16 16"},E.a.createElement("path",{d:"M8.021 11.9L3.453 8.62a.719.719 0 0 1 0-1.238L8.021 4.1a.716.716 0 0 1 1.079.619V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z"}),E.a.createElement("path",{d:"M5.232 4.293a.5.5 0 0 1-.106.7L1.114 7.945a.5.5 0 0 1-.042.028.147.147 0 0 0 0 .252.503.503 0 0 1 .042.028l4.012 2.954a.5.5 0 1 1-.593.805L.539 9.073a1.147 1.147 0 0 1 0-1.946l3.994-2.94a.5.5 0 0 1 .699.106z"}))))))))}}]),a}(i.Component);a.a=A},155:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABJlBMVEUAAAAUxJ0ZvpsavJ4Vv5UXuZsavJwavJwavJwavJ0au50Yv58bvJ0avJwavJwavp0ktpIbvJwavJwavJwavZwavJsbvJsXuZwavJwavJwbu5was5kbvJsavJwbvZwYvpoau5savJwau5wcup8A//8fuJkavJwavZwavJwzzJkbvZsavJwavJwZvJwAv4AbvZ0avJwavJ0avJwbvJwZvJwZvJsavJsYtp4avZwau5sXuaIZvJ0avJwav5kew5YZvJ0avJsavJwZu5sbvJwbvZwavJwZvJwavJwWvJsavJwau5wbupwau5wZvZ0avJwavJsauZkavJwZvJsavp0bvJobvJoavJsYvJ4rqqoZu5wavJwavJ0ZvZwavZwau5wbupoavJwAAABvm7eNAAAAYHRSTlMADTNEDCF2xv3FdSCZ+6onB4b1t5b2hSzU7nEKc/DTK0/y2yUBGdxNagV75uV5BGj+uPi2b1y7FWR4C1v5FBGr5OKX3VWomOAX47lDWnC0bijxZk4mTNIqBoT6gh90xDDHsmatAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAO6QAADukBDjNCHAAAAAd0SU1FB+UBCBY0B09smFgAAAFaSURBVDjL1ZNrXwFREIf/taWNtMJWWCS7ym2RbpZKVKIbXVXifP9PkXOOXZsfL71oXs3MM3vmusC/k4VFQVhcmkWXHSsiGYq46nRNw2tuYom4Lk1gzwbDXp/f75Op5t702PnWNnUGgiFqhJQwtSLRMd+JUc9uHFA1TQWkBLVjeybfZ7UF4kim0oRksjok9oaY4zyYZ4UFkSyQg8xQK+pQmCt/SPkR594QUuT45JTqJRgyjygDQoV35oOals/OL6heVVHg3oqAy1HrNWikfnXNDQ03I3cDDVuAJbe2AFuKpsmHKVqjFHdA2SoyawY4rCLvaRsPPEJBssj5ow4n5098EDk2qLAEvVQlpOnQ0e6wQT2bo3xho068mqNu16ndeRsvIxphbygGNQwn+/79w77O7idbt1yo1Vqsvq/v7sRFuP4eTHzKTfV++vzk+kpv1lkaA0EYGHP7J+Ymv+p9fVXZdHxRAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTAxLTA4VDIyOjUyOjA3KzAwOjAwjnIuMgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wMS0wOFQyMjo1MjowNyswMDowMP8vlo4AAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"},156:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABmFBMVEUAAAAcv5wau5wdvZkavJsYvJ4avJwavJwZvJwavJ0avJwZu5sgv58avJwZu5sbvJoavJwcuJwbvJsau5wavJwbvJ0AgIAbvJwbvJoavZwavJwAqqoavp0bu5wiu5kauZkZvJsau5wew5YWvJsavZwavJwavJwavJwavJwavJwbu5sbvJwavJwavJwau5wbvZwZvJwgv58cxqobvZsavJwau5wavJ0avJsavJwavJwbvJ0XuZsas5kXvJ4avZoavZ0avJwbvZwavJwbvJwrqqobu5wavJ4avJwavJwUxJ0avJwcvpscu58avJwZvZwdup0avJwavJwavZ4avJ0avJwavJsavJwA//8avZ0avJwau50ZvJsbvZ0avZwavJwXuZwcvJscvaEbvJsbupoZvZwavJwavJwavZwavZ0ZvJwavJsZvZwavJwavJwavJwavJwStqQavJ0avJwbu50Zu5waupwZup0avJ0avJwau50avJwavJwbu5savJwavJ0avJsYtp4av5kcvp4cvZwavJwau5savJwAAAAGpbPAAAAAhnRSTlMAJMgjuyr+85iUlZcQ9Ckm9RJzubpyAt1MTd8DTnEPKD1iERd3m7LH4vePkMbaxK15CAl7r9vF5NZQOSEKIjrX41X7owaiRPG+DbdKLdUfGs/mMrjwpPoBh4mmZmil4CwuG1Qwjn60vH+NRYP47/n8DpH9XrU7NL3QPO5qae1jnBUUNzadgGrhTa4AAAABYktHRACIBR1IAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH5QENAAQW1e+hqQAAAZVJREFUOMt9U2dbwjAYjCjFAW5RQBBEBLfiQBAXMsQJKrj3Vly4977fLaX4kADlvuQud837pkkIYZAjkeSSbMgD8rL5Uk4m46RZAvkoKESRuC9XcMUlXGmZaKAcFYRUokrMV1ajhhAV1BqRQG3cisVUonvUCoUqM5i6Or2BU8h5Wq/gDPo63b9jbDA1mi1N4NEsTLXERZPF3GhqMJLWuIKsrb2js0sIWLt72nsVwnwfsaHf7hhwphd1Dg7ZhzFCRl0Yc2du2u2Ba5QQrw/j8ky+fwKySZ5MWTA9k+7PBhCcS6NJMJ/55xOLJeFdYAq7Qwg7aH8ojBDT+mIIS7ReRmiRXXIFq7Rcw3pKTxvYpOUW1Cl7gk9Ja+UCtpnADuYFsrsrjBXYYQJ72OeH3APgsJhnRzhmAmacxI7nNIKzM0ROY0d3AjPtW88vLolKDc5jLLuKwnZN/BdhKxXQI5BzAwRueXEnAe6lD3ikAloEI3h6TtxmzcsrIkHhgibwBkTfP5L60xQFDFRAs+z5Yn/M98+v2OtIwR8VemQVZclhHAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wMS0xM1QwMDowNDoyMiswMDowML5pS/UAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDEtMTNUMDA6MDQ6MjIrMDA6MDDPNPNJAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="},474:function(e,a,t){"use strict";t.r(a);var l=t(26),c=t(9),n=t(10),r=t(12),s=t(11),m=t(13),i=t(23),E=(t(22),t(42),t(169),t(170)),d=t(123),o=(t(172),t(173),t(174),t(145),t(141),t(175)),h=(t(143),t(154)),A=t(155),v=t.n(A),N=(t(156),t(176),t(1)),u=t.n(N),w=(t(142),t(7)),p=(t(183),t(116)),b=t(117),g=t(101),x=t(102),J=t(63),M=t(410),V=t(106),y=t(107),f=t(108),O=t(94),C=t(127),P=["PROMEDIOS","M\xc1XIMOS","M\xcdNIMOS"],R=new Date,D=(new Date(R.getFullYear(),R.getMonth(),R.getDate()-7),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(r.a)(this,Object(s.a)(a).call(this,e))).state={selectAll:!1,simular:!1,simular1:!1,simular2:!1,simular3:!1},t.selectAll=t.selectAll.bind(Object(i.a)(Object(i.a)(t))),t.handleClick=t.handleClick.bind(Object(i.a)(Object(i.a)(t))),t}return Object(m.a)(a,e),Object(n.a)(a,[{key:"selectAll",value:function(){this.setState({selectAll:!this.state.selectAll})}},{key:"handleClick",value:function(e){console.log("c",e.target.id),"0"===e.target.id&&this.setState({simular:!0}),"1"===e.target.id&&this.setState({simular1:!0}),"2"===e.target.id&&this.setState({simular2:!0}),"3"===e.target.id&&this.setState({simular3:!0})}},{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){var e=Object(C.a)("primary");Object(C.a)("secondary");return u.a.createElement(d.a,null,u.a.createElement(p.a,null,u.a.createElement(b.a,null,u.a.createElement(h.a,null),u.a.createElement(g.a,{className:"mb-3"},u.a.createElement(x.a,null,u.a.createElement(b.a,{md:3,className:"container-btn-masiva"},u.a.createElement(J.a,{color:"primary btn-barra-simular"},"SIMULACI\xd3N MASIVA"),u.a.createElement(J.a,{color:"primary btn-barra-simular"},"ACEPTAR \xa0",u.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-calendar2-event",viewBox:"0 0 16 16"},u.a.createElement("path",{d:"M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"}),u.a.createElement("path",{d:"M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"}),u.a.createElement("path",{d:"M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"})))),u.a.createElement(o.Tabs,{headerStyle:{fontWeight:"bold"},activeHeaderStyle:{color:"black"}},u.a.createElement(o.Tab,{label:"Diesel"},u.a.createElement(M.a,{responsive:!0},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",{className:"text-center header-table"},"All ",u.a.createElement("input",{type:"radio",onChange:this.selectAll})),u.a.createElement("th",{className:"text-center header-table"},"EMPRESA"),u.a.createElement("th",{className:"text-center header-table"},"NEGOCIO"),u.a.createElement("th",{className:"text-center header-table"},u.a.createElement("span",{className:"meaning"},"PRECIO DE COMPRA HOY"),u.a.createElement("span",{className:"detail"},"Precio de venta TAR de Suministro")),u.a.createElement("th",{className:"text-center header-table"},u.a.createElement("span",{className:"meaning"},"DIFERENCIA HOY Y MA\xd1ANA"),u.a.createElement("span",{className:"detail"},"Diferencia Hoy y Ma\xf1ana")),u.a.createElement("th",{className:"text-center header-table"},u.a.createElement("span",{className:"meaning"},"PVP PROMEDIO DE LA COMPETENCIA"),u.a.createElement("span",{className:"detail"},"Precio de venta promedio de la competencia")),u.a.createElement("th",{className:"text-center header-table"},u.a.createElement("span",{className:"meaning"},"PVP M\xc1XIMO DE LA COMPETENCIA"),u.a.createElement("span",{className:"detail"},"Precio de venta m\xe1ximo de la competencia")),u.a.createElement("th",{className:"text-center header-table"},u.a.createElement("span",{className:"meaning"},"PVP M\xcdNIMO DE LA COMPETENCIA"),u.a.createElement("span",{className:"detail"},"Precio de venta m\xednimo de la competencia")),u.a.createElement("th",{className:"text-center header-table"},u.a.createElement("span",{className:"meaning"},"PVP COMPETENCIA ESTRAT\xc9GICA"),u.a.createElement("span",{className:"detail"},"*")),u.a.createElement("th",{className:"text-center header-table"},"PVP RECOMENDADO"),u.a.createElement("th",{className:"text-center header-table"},"PVP SELECCIONADO"),u.a.createElement("th",{className:"text-center header-table"},u.a.createElement("span",{className:"meaning"},"MARGEN TE\xd3RICO"),u.a.createElement("span",{className:"detail"},"Dif. Precio de compra de hoy/ ma\xf1ana y precio seleccionado")),u.a.createElement("th",{className:"text-center header-table"},u.a.createElement("span",{className:"meaning"},"MARGEN REAL"),u.a.createElement("span",{className:"detail"},"Dif. \xdaltima compra y precio seleccionado")),u.a.createElement("th",{className:"text-center header-table"},u.a.createElement("span",{className:"meaning"},"VOLUMEN PROMEDIO DEL MES"),u.a.createElement("span",{className:"detail"},"Volumen promedio del mes")),u.a.createElement("th",{className:"text-center header-table"},u.a.createElement("span",{className:"meaning"},"DIFERENCIA VOLUMEN"),u.a.createElement("span",{className:"detail"},"Diferencia de volumen promedio del mes, con volumen objetivo")),u.a.createElement("th",{className:"text-center header-table"},"UTILIDAD TOTAL"),u.a.createElement("th",{className:"text-center header-table"}),u.a.createElement("th",{className:"text-center header-table"}))),u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",{className:"text-center color-blue"}," ",u.a.createElement("input",{type:"radio",id:"",name:"",value:"dewey"})),u.a.createElement("td",{className:"text-left"},"Servicio Aztecas"),u.a.createElement("td",{className:"text-center"}," B"),u.a.createElement("td",{className:"text-center"},"$13.5"),u.a.createElement("td",{className:"text-center"},"$15.6"),u.a.createElement("td",{className:"text-center text-shadow"},"$12.2"),u.a.createElement("td",{className:"text-center text-shadow"},"$15.3"),u.a.createElement("td",{className:"text-center text-shadow"},"$12.2"),u.a.createElement("td",{className:"text-center text-shadow"},"$13.3"),u.a.createElement("td",{className:"text-center text-shadow text-shadow"},this.state.simular?u.a.createElement("input",{type:"radio",name:"radio1",value:""}):""," $15.2 "),u.a.createElement("td",{className:"text-center bg-gray-light text-shadow"},this.state.simular?u.a.createElement("p",null,u.a.createElement("input",{type:"radio",name:"radio1",value:"",className:"dato_ms"}),u.a.createElement("input",{type:"number",className:"input-simulacion",placeholder:"12"})," "):13.2),u.a.createElement("td",{className:"text-center bg-gray-light txt-ok"}," 18.2%"),u.a.createElement("td",{className:"text-center bg-gray-light"}," 16.8% "),u.a.createElement("td",{className:"text-center bg-gray-light"}," 150 lts"),u.a.createElement("td",{className:"text-center bg-gray-light"}," 250 lts"),u.a.createElement("td",{className:"text-center bg-gray-light"},"$10,4423"),u.a.createElement("td",{className:"text-center"},u.a.createElement("a",{href:"/#ServicioAztecas",target:"_self"},u.a.createElement("img",{src:v.a,alt:"ver",className:"ver-dashboard"}))),u.a.createElement("td",{className:"text-center"},u.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-pencil editicon",viewBox:"0 0 16 16",id:"0",onClick:this.handleClick},u.a.createElement("path",{d:"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"})))),u.a.createElement("tr",null,u.a.createElement("td",{className:"text-center color-blue"}," ",u.a.createElement("input",{type:"radio",id:"",name:"",value:"dewey"})),u.a.createElement("td",{className:"text-left"},"Servicio Neza"),u.a.createElement("td",{className:"text-center"}," A"),u.a.createElement("td",{className:"text-center"},"$13.5"),u.a.createElement("td",{className:"text-center"},"$12.2"),u.a.createElement("td",{className:"text-center text-shadow"},"$13.6 "),u.a.createElement("td",{className:"text-center text-shadow"},"$13.2 "),u.a.createElement("td",{className:"text-center text-shadow"},"$12.2"),u.a.createElement("td",{className:"text-center text-shadow"},"$13.3"),u.a.createElement("td",{className:"text-center text-shadow"},this.state.simular1?u.a.createElement("input",{type:"radio",name:"radio1",value:""}):""," $15.2 "),u.a.createElement("td",{className:"text-center bg-gray-light text-shadow"},this.state.simular1?u.a.createElement("p",null,u.a.createElement("input",{type:"radio",name:"radio1",value:"",className:"dato_ms"}),u.a.createElement("input",{type:"number",className:"input-simulacion",placeholder:"12"})," "):13.2),u.a.createElement("td",{className:"text-center bg-gray-light txt-ok"},"18.3%"),u.a.createElement("td",{className:"text-center bg-gray-light"},"  12.8% "),u.a.createElement("td",{className:"text-center bg-gray-light"}," 250 lts"),u.a.createElement("td",{className:"text-center bg-gray-light"}," 150 lts"),u.a.createElement("td",{className:"text-center bg-gray-light"},"$20,4423"),u.a.createElement("td",{className:"text-center color-red"}," ",u.a.createElement("a",{href:"/#ServicoNeza",target:"_self"},u.a.createElement("img",{src:v.a,alt:"ver",className:"ver-dashboard"}))),u.a.createElement("td",{className:"text-center"},u.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-pencil editicon",viewBox:"0 0 16 16",id:"1",onClick:this.handleClick},u.a.createElement("path",{d:"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"})))),u.a.createElement("tr",null,u.a.createElement("td",{className:"text-center color-blue"}," ",u.a.createElement("input",{type:"radio",id:"",name:"",value:"dewey"})),u.a.createElement("td",{className:"text-left"},"Servicio Atizap\xe1n"),u.a.createElement("td",{className:"text-center"}," A"),u.a.createElement("td",{className:"text-center"},"$13.5"),u.a.createElement("td",{className:"text-center"},"$12.2"),u.a.createElement("td",{className:"text-center text-shadow"},"$13.6 "),u.a.createElement("td",{className:"text-center text-shadow"},"$13.2 "),u.a.createElement("td",{className:"text-center text-shadow"},"$12.2"),u.a.createElement("td",{className:"text-center text-shadow"},"$13.3"),u.a.createElement("td",{className:"text-center text-shadow"},this.state.simular2?u.a.createElement("input",{type:"radio",name:"radio1",value:""}):""," $15.2 "),u.a.createElement("td",{className:"text-center bg-gray-light text-shadow"},this.state.simular2?u.a.createElement("p",null,u.a.createElement("input",{type:"radio",name:"radio1",value:"",className:"dato_ms"}),u.a.createElement("input",{type:"number",className:"input-simulacion",placeholder:"12"})," "):13.2),u.a.createElement("td",{className:"text-center bg-gray-light txt-high"},"18.3%"),u.a.createElement("td",{className:"text-center"},"13.3%"),u.a.createElement("td",{className:"text-center bg-gray-light"}," 250 lts"),u.a.createElement("td",{className:"text-center bg-gray-light"}," 150 lts"),u.a.createElement("td",{className:"text-center bg-gray-light"},"$20,4423"),u.a.createElement("td",{className:"text-center color-red"}," ",u.a.createElement("a",{href:"/#ServicoNeza",target:"_self"},u.a.createElement("img",{src:v.a,alt:"ver",className:"ver-dashboard"}))),u.a.createElement("td",{className:"text-center"},u.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-pencil editicon",viewBox:"0 0 16 16",id:"2",onClick:this.handleClick},u.a.createElement("path",{d:"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"})))),u.a.createElement("tr",null,u.a.createElement("td",{className:"text-center color-blue"}," ",u.a.createElement("input",{type:"radio",id:"",name:"",value:"dewey"})),u.a.createElement("td",{className:"text-left"},"Servico Tlalnepantla"),u.a.createElement("td",{className:"text-center"}," A"),u.a.createElement("td",{className:"text-center"},"$13.5"),u.a.createElement("td",{className:"text-center"},"$12.2"),u.a.createElement("td",{className:"text-center text-shadow"},"$13.6 "),u.a.createElement("td",{className:"text-center text-shadow"},"$13.2 "),u.a.createElement("td",{className:"text-center text-shadow"},"$12.2"),u.a.createElement("td",{className:"text-center text-shadow"},"$13.3"),u.a.createElement("td",{className:"text-center text-shadow"},this.state.simular3?u.a.createElement("input",{type:"radio",name:"radio1",value:""}):""," $15.2 "),u.a.createElement("td",{className:"text-center bg-gray-light text-shadow"},this.state.simular3?u.a.createElement("p",null,u.a.createElement("input",{type:"radio",name:"radio1",value:"",className:"dato_ms"}),u.a.createElement("input",{type:"number",className:"input-simulacion",placeholder:"12"})," "):13.2),u.a.createElement("td",{className:"text-center bg-gray-light txt-high"},"18.3%"),u.a.createElement("td",{className:"text-center"},"13.3%"),u.a.createElement("td",{className:"text-center bg-gray-light"}," 250 lts"),u.a.createElement("td",{className:"text-center bg-gray-light"}," 150 lts"),u.a.createElement("td",{className:"text-center bg-gray-light"},"$20,4423"),u.a.createElement("td",{className:"text-center color-red"}," ",u.a.createElement("a",{href:"/#ServicoNeza",target:"_self"},u.a.createElement("img",{src:v.a,alt:"ver",className:"ver-dashboard"}))),u.a.createElement("td",{className:"text-center"},u.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-pencil editicon",viewBox:"0 0 16 16",id:"3",onClick:this.handleClick},u.a.createElement("path",{d:"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"}))))))),u.a.createElement(o.Tab,{label:"< 92"},u.a.createElement(M.a,{responsive:!0},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",{className:"text-center header-table"},"All ",u.a.createElement("input",{type:"radio",onChange:this.selectAll})),u.a.createElement("th",{className:"text-center header-table"},"EMPRESA"),u.a.createElement("th",{className:"text-center header-table"},"NEGOCIO"),u.a.createElement("th",{className:"text-center header-table"},u.a.createElement("span",{className:"meaning"},"PRECIO DE COMPRA HOY"),u.a.createElement("span",{className:"detail"},"Precio de venta TAR de Suministro")),u.a.createElement("th",{className:"text-center header-table"},u.a.createElement("span",{className:"meaning"},"DIFERENCIA HOY Y MA\xd1ANA"),u.a.createElement("span",{className:"detail"},"Diferencia Hoy y Ma\xf1ana")),u.a.createElement("th",{className:"text-center header-table"},u.a.createElement("span",{className:"meaning"},"PVP PROMEDIO DE LA COMPETENCIA"),u.a.createElement("span",{className:"detail"},"Precio de venta promedio de la competencia")),u.a.createElement("th",{className:"text-center header-table"},u.a.createElement("span",{className:"meaning"},"PVP M\xc1XIMO DE LA COMPETENCIA"),u.a.createElement("span",{className:"detail"},"Precio de venta m\xe1ximo de la competencia")),u.a.createElement("th",{className:"text-center header-table"},u.a.createElement("span",{className:"meaning"},"PVP M\xcdNIMO DE LA COMPETENCIA"),u.a.createElement("span",{className:"detail"},"Precio de venta m\xednimo de la competencia")),u.a.createElement("th",{className:"text-center header-table"},u.a.createElement("span",{className:"meaning"},"PVP COMPETENCIA ESTRAT\xc9GICA"),u.a.createElement("span",{className:"detail"},"*")),u.a.createElement("th",{className:"text-center header-table"},"PVP RECOMENDADO"),u.a.createElement("th",{className:"text-center header-table"},"PVP SELECCIONADO"),u.a.createElement("th",{className:"text-center header-table"},u.a.createElement("span",{className:"meaning"},"MARGEN TE\xd3RICO"),u.a.createElement("span",{className:"detail"},"Dif. Precio de compra de hoy/ ma\xf1ana y precio seleccionado")),u.a.createElement("th",{className:"text-center header-table"},u.a.createElement("span",{className:"meaning"},"MARGEN REAL"),u.a.createElement("span",{className:"detail"},"Dif. \xdaltima compra y precio seleccionado")),u.a.createElement("th",{className:"text-center header-table"},u.a.createElement("span",{className:"meaning"},"VOLUMEN PROMEDIO DEL MES"),u.a.createElement("span",{className:"detail"},"Volumen promedio del mes")),u.a.createElement("th",{className:"text-center header-table"},u.a.createElement("span",{className:"meaning"},"DIFERENCIA VOLUMEN"),u.a.createElement("span",{className:"detail"},"Diferencia de volumen promedio del mes, con volumen objetivo")),u.a.createElement("th",{className:"text-center header-table"},"UTILIDAD TOTAL"),u.a.createElement("th",{className:"text-center header-table"}),u.a.createElement("th",{className:"text-center header-table"}))),u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",{className:"text-center color-blue"}," ",u.a.createElement("input",{type:"radio",id:"",name:"",value:"dewey"})),u.a.createElement("td",{className:"text-center"},"Azcapotzalco"),u.a.createElement("td",{className:"text-center"},"$15.2"),u.a.createElement("td",{className:"text-center"},"$13.5"),u.a.createElement("td",{className:"text-center"},"$15.5"),u.a.createElement("td",{className:"text-center"},"$12.2"),u.a.createElement("td",{className:"text-center"},"$13.6 "),u.a.createElement("td",{className:"text-center"},"$13.2 "),u.a.createElement("td",{className:"text-center"},"$13.3"),u.a.createElement("td",{className:"text-center"},"$12.23"),u.a.createElement("td",{className:"text-center bg-gray-light"},"$13.2"),u.a.createElement("td",{className:"text-center bg-gray-light"},"$12"),u.a.createElement("td",{className:"text-center bg-gray-light"},"$12"),u.a.createElement("td",{className:"text-center bg-gray-light"},"$12.2"),u.a.createElement("td",{className:"text-center bg-gray-light bg-redb"},"$1.4"),u.a.createElement("td",{className:"text-center color-red"}," ",u.a.createElement("a",{href:"estacion#Azcapotzalco",target:"_self"},u.a.createElement("img",{src:v.a,alt:"ver",className:"ver-dashboard"}))),u.a.createElement("td",{className:"text-center"},u.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-pencil",viewBox:"0 0 16 16"},u.a.createElement("path",{d:"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"}))))))),u.a.createElement(o.Tab,{label:"> 92"},u.a.createElement(M.a,{responsive:!0},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",{className:"text-center header-table"},"All ",u.a.createElement("input",{type:"radio",onChange:this.selectAll})),u.a.createElement("th",{className:"text-center header-table"},"EMPRESA"),u.a.createElement("th",{className:"text-center header-table"},"NEGOCIO"),u.a.createElement("th",{className:"text-center header-table"},u.a.createElement("span",{className:"meaning"},"PRECIO DE COMPRA HOY"),u.a.createElement("span",{className:"detail"},"Precio de venta TAR de Suministro")),u.a.createElement("th",{className:"text-center header-table"},u.a.createElement("span",{className:"meaning"},"DIFERENCIA HOY Y MA\xd1ANA"),u.a.createElement("span",{className:"detail"},"Diferencia Hoy y Ma\xf1ana")),u.a.createElement("th",{className:"text-center header-table"},u.a.createElement("span",{className:"meaning"},"PVP PROMEDIO DE LA COMPETENCIA"),u.a.createElement("span",{className:"detail"},"Precio de venta promedio de la competencia")),u.a.createElement("th",{className:"text-center header-table"},u.a.createElement("span",{className:"meaning"},"PVP M\xc1XIMO DE LA COMPETENCIA"),u.a.createElement("span",{className:"detail"},"Precio de venta m\xe1ximo de la competencia")),u.a.createElement("th",{className:"text-center header-table"},u.a.createElement("span",{className:"meaning"},"PVP M\xcdNIMO DE LA COMPETENCIA"),u.a.createElement("span",{className:"detail"},"Precio de venta m\xednimo de la competencia")),u.a.createElement("th",{className:"text-center header-table"},u.a.createElement("span",{className:"meaning"},"PVP COMPETENCIA ESTRAT\xc9GICA"),u.a.createElement("span",{className:"detail"},"*")),u.a.createElement("th",{className:"text-center header-table"},"PVP RECOMENDADO"),u.a.createElement("th",{className:"text-center header-table"},"PVP SELECCIONADO"),u.a.createElement("th",{className:"text-center header-table"},u.a.createElement("span",{className:"meaning"},"MARGEN TE\xd3RICO"),u.a.createElement("span",{className:"detail"},"Dif. Precio de compra de hoy/ ma\xf1ana y precio seleccionado")),u.a.createElement("th",{className:"text-center header-table"},u.a.createElement("span",{className:"meaning"},"MARGEN REAL"),u.a.createElement("span",{className:"detail"},"Dif. \xdaltima compra y precio seleccionado")),u.a.createElement("th",{className:"text-center header-table"},u.a.createElement("span",{className:"meaning"},"VOLUMEN PROMEDIO DEL MES"),u.a.createElement("span",{className:"detail"},"Volumen promedio del mes")),u.a.createElement("th",{className:"text-center header-table"},u.a.createElement("span",{className:"meaning"},"DIFERENCIA VOLUMEN"),u.a.createElement("span",{className:"detail"},"Diferencia de volumen promedio del mes, con volumen objetivo")),u.a.createElement("th",{className:"text-center header-table"},"UTILIDAD TOTAL"),u.a.createElement("th",{className:"text-center header-table"}),u.a.createElement("th",{className:"text-center header-table"}))),u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",{className:"text-center color-blue"}," ",u.a.createElement("input",{type:"radio",id:"",name:"",value:"dewey"})),u.a.createElement("td",{className:"text-center"},"Naucalpan"),u.a.createElement("td",{className:"text-center"}," 15.2"),u.a.createElement("td",{className:"text-center"}," 13.5"),u.a.createElement("td",{className:"text-center"},"15.5"),u.a.createElement("td",{className:"text-center"}," 13.6 "),u.a.createElement("td",{className:"text-center"},"15.6"),u.a.createElement("td",{className:"text-center"},"15.2"),u.a.createElement("td",{className:"text-center"}," 12.23"),u.a.createElement("td",{className:"text-center"}," 13.2"),u.a.createElement("td",{className:"text-center bg-gray-light"},"13.2"),u.a.createElement("td",{className:"text-center bg-gray-light"}," 12"),u.a.createElement("td",{className:"text-center bg-gray-light"}," 12"),u.a.createElement("td",{className:"text-center bg-gray-light"}," 1.3"),u.a.createElement("td",{className:"text-center bg-gray-light"},"1.5"),u.a.createElement("td",{className:"text-center color-red"}," ",u.a.createElement("a",{href:"estacion#Naucalpan",target:"_self"}," ",u.a.createElement("img",{src:v.a,alt:"ver",className:"ver-dashboard"}))),u.a.createElement("td",{className:"text-center"},u.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-pencil",viewBox:"0 0 16 16"},u.a.createElement("path",{d:"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"})))))))))))),u.a.createElement(p.a,null,u.a.createElement(b.a,{lg:"8",md:"12",sm:"12",xs:"12"},u.a.createElement(g.a,null,u.a.createElement(V.a,null,"RESUMEN"," ",u.a.createElement("small",{className:"text-muted text-capitalize"},"Por d\xeda")),u.a.createElement(x.a,null,P.map(function(e,a){return u.a.createElement("row",null,u.a.createElement("p",{className:"titles-m"},e),u.a.createElement(M.a,Object.assign({},Object(l.a)({},e||"default",!0),{className:"min_max"}),u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",{className:"header-table"}),u.a.createElement("th",{className:"header-table"},"Diesel A+"),u.a.createElement("th",{className:"header-table"},"<92"),u.a.createElement("th",{className:"header-table"},">92"),u.a.createElement("th",{className:"header-table"},"Gasoleo B"),u.a.createElement("th",{className:"header-table"},"PEMEX"))),u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("th",{scope:"row"},"Ingreso"),u.a.createElement("td",null,"$12,023"),u.a.createElement("td",null,"$23,932"),u.a.createElement("td",null,"$22,333"),u.a.createElement("td",null,"$23,932"),u.a.createElement("td",null,"$23,932")),u.a.createElement("tr",null,u.a.createElement("th",{scope:"row"},"Precio"),u.a.createElement("td",null,"$23.3"),u.a.createElement("td",null,"$13.3"),u.a.createElement("td",null,"$12.3"),u.a.createElement("td",null,"$13.3"),u.a.createElement("td",null,"$12.3")),u.a.createElement("tr",null,u.a.createElement("th",{scope:"row"},"Utilidad"),u.a.createElement("td",null,"$10,000"),u.a.createElement("td",null,"$20,000"),u.a.createElement("td",null,"$22,500"),u.a.createElement("td",null,"$20,000"),u.a.createElement("td",null,"$22,500")),u.a.createElement("tr",null,u.a.createElement("th",{scope:"row"},"Volumen"),u.a.createElement("td",null,"290 lts"),u.a.createElement("td",null,"320 lts"),u.a.createElement("td",null,"250 lts"),u.a.createElement("td",null,"290 lts"),u.a.createElement("td",null,"320 lts")),u.a.createElement("tr",null,u.a.createElement("th",{scope:"row"},"Margen"),u.a.createElement("td",null,"10%"),u.a.createElement("td",null,"50%"),u.a.createElement("td",null,"65%"),u.a.createElement("td",null,"10%"),u.a.createElement("td",null,"50%")))))})))),u.a.createElement(b.a,{lg:"4",md:"12",sm:"12",xs:"12"},u.a.createElement(g.a,null,u.a.createElement(V.a,null,"RESUMEN"),u.a.createElement(x.a,{className:"bg-gradient-primary"},u.a.createElement(E.a,null)),u.a.createElement(y.a,{flush:!0},u.a.createElement(f.a,null,u.a.createElement(w.j,{size:25,color:e})," N\xfamero de Estaciones"," ",u.a.createElement("h4",{className:"text-center"},u.a.createElement(O.a,{color:""},"80"))),u.a.createElement(f.a,null,u.a.createElement(w.j,{size:25,color:e})," N\xfamero de Estaciones por Producto"," "),u.a.createElement(f.a,null,"<92",u.a.createElement(O.a,{color:""},"10")),u.a.createElement(f.a,null,">92"," ",u.a.createElement(O.a,{color:""},"10")),u.a.createElement(f.a,null,"Gasoleo B"," ",u.a.createElement(O.a,{color:""},"20")),u.a.createElement(f.a,null,"Diesel A+"," ",u.a.createElement(O.a,{color:""},"10")),u.a.createElement(f.a,null,"PEMEX DIESEL (DIESEL)"," ",u.a.createElement(O.a,{color:""},"30")))))))}}]),a}(u.a.Component));a.default=D}}]);
//# sourceMappingURL=25.e9fe6c0f.chunk.js.map