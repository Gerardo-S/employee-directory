(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{38:function(e,t,c){"use strict";c.r(t);var a=c(0),r=c(1),s=c.n(r),n=c(13),o=c.n(n),l=(c(20),c(3)),i=c(14),j=c.n(i),d=function(){return j.a.get("https://www.potterapi.com/v1/characters?key=$2a$10$C0VHLQtCHSPD2Yopqj2Nee0FeLO8zp/4KuGZc.Yf./kJFqfB.F1AO")};var u=function(e){return Object(a.jsx)("div",{className:"container".concat(e.fluid?"-fluid":""),children:e.children})};var h=function(e){return Object(a.jsx)("div",{className:"row".concat(e.fluid?"-fluid":""," d-flex justify-content-center"),children:e.children})};var b=function(e){return Object(a.jsx)("form",{children:Object(a.jsxs)("div",{className:"form-group ",children:[Object(a.jsx)("label",{htmlFor:"search",children:"Search For Characters:"}),Object(a.jsx)("input",{placeholder:"Search For Character",name:"search",type:"text",className:"form-control",id:"search",value:e.value,onChange:e.onSearchChange})]})})};var f=function(e){var t=e.characterData,c=Object(r.useState)("default"),s=Object(l.a)(c,2),n=s[0],o=s[1],i={up:{class:"sort-up",fn:function(e,t){return e.name-t.name}},down:{class:"sort-down",fn:function(e,t){return t.name-e.name}},default:{class:"sort",fn:function(e,t){return e}}};function j(e,t){var c=e.name.toUpperCase(),a=t.name.toUpperCase(),r=0;return c>a?r=1:c<a&&(r=-1),r}var d=function(){var e;"down"===n?(e="up",t.sort(j)):"up"===n?(t.reverse(),e="default"):"default"===n&&(e="down"),o(e)},u=t.map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:e.name}),Object(a.jsx)("td",{children:e.house}),Object(a.jsx)("td",{children:e.role}),Object(a.jsx)("td",{children:e.school}),Object(a.jsx)("td",{children:e.species})]},e._id)}));return Object(a.jsxs)("table",{className:"table table-striped table-responsive",children:[Object(a.jsx)("thead",{className:"text-center",children:Object(a.jsxs)("tr",{children:[Object(a.jsxs)("th",{scope:"col",onClick:d,children:["Name ",Object(a.jsx)("i",{className:"fa fa-".concat(i[n].class)})]}),Object(a.jsxs)("th",{scope:"col",onClick:d,children:["House ",Object(a.jsx)("i",{className:"fa fa-".concat(i[n].class)})]}),Object(a.jsxs)("th",{scope:"col",onClick:d,children:["Role ",Object(a.jsx)("i",{className:"fa fa-".concat(i[n].class)})]}),Object(a.jsxs)("th",{scope:"col",onClick:d,children:["School ",Object(a.jsx)("i",{className:"fa fa-".concat(i[n].class)})]}),Object(a.jsxs)("th",{scope:"col",onClick:d,children:["Species ",Object(a.jsx)("i",{className:"fa fa-".concat(i[n].class)})]})]})}),Object(a.jsx)("tbody",{className:"text-center",children:u})]})};var O=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),c=t[0],s=t[1],n=Object(r.useState)([]),o=Object(l.a)(n,2),i=o[0],j=o[1],O=Object(r.useState)(""),x=Object(l.a)(O,2),p=x[0],m=x[1];Object(r.useEffect)((function(){d().then((function(e){if(0===e.data.length)throw new Error("No results found.");if("error"===e.data.status)throw new Error(e.data.message);var t=e.data;j(t)})).catch((function(e){return s(c.message)}))}),[]);var v=i.filter((function(e){return e.name.toUpperCase().includes(p.toUpperCase())}));return Object(a.jsxs)(u,{children:[Object(a.jsx)(h,{children:Object(a.jsx)(b,{value:p,onSearchChange:function(e){m(e.target.value)}})}),Object(a.jsx)("br",{}),Object(a.jsx)(f,{characterData:v})]})};var x=function(){return Object(a.jsx)("div",{className:"jumbotron text-center d-flex align-content-around flex-wrap",style:{height:20},children:Object(a.jsxs)("div",{className:"container  ",children:[Object(a.jsx)("h1",{className:"display-4",children:"The World of Harry Potter"}),Object(a.jsx)("p",{className:"lead",children:"Click on carrots to filter by heading or use the search box to narrow your results."})]})})};var p=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(x,{}),Object(a.jsx)(O,{})]})};o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(p,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.37b6fea5.chunk.js.map