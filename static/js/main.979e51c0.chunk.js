(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{38:function(e,t,c){"use strict";c.r(t);var r=c(0),s=c(1),n=c.n(s),a=c(13),j=c.n(a),l=(c(20),c(4)),o=c(14),i=c.n(o),d=function(){return i.a.get("https://www.potterapi.com/v1/characters?key=$2a$10$C0VHLQtCHSPD2Yopqj2Nee0FeLO8zp/4KuGZc.Yf./kJFqfB.F1AO")};var h=function(e){return Object(r.jsx)("div",{className:"container".concat(e.fluid?"-fluid":""),children:e.children})};var b=function(e){return Object(r.jsx)("div",{className:"row".concat(e.fluid?"-fluid":""," d-flex justify-content-center"),children:e.children})};var x=function(e){return Object(r.jsx)("form",{children:Object(r.jsxs)("div",{className:"form-group ",children:[Object(r.jsx)("label",{htmlFor:"search",children:"Search For Characters:"}),Object(r.jsx)("input",{value:e.value,name:"search",type:"text",className:"form-control",placeholder:"Search For Character",id:"search"})]})})};var O=function(e){var t=e.characterData;return console.log(t),Object(r.jsxs)("table",{className:"table table-striped",children:[Object(r.jsx)("thead",{className:"text-center",children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{scope:"col",children:"Name"}),Object(r.jsx)("th",{scope:"col",children:"House"}),Object(r.jsx)("th",{scope:"col",children:"Role"}),Object(r.jsx)("th",{scope:"col",children:"School"}),Object(r.jsx)("th",{scope:"col",children:"Species"})]})}),Object(r.jsxs)("tbody",{className:"text-center",children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Hannah Abbot"}),Object(r.jsx)("td",{children:"Hufflepuff"}),Object(r.jsx)("td",{children:"Student"}),Object(r.jsx)("td",{children:"Hogwarts"}),Object(r.jsx)("td",{children:"Human"})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{scope:"row",children:"2"}),Object(r.jsx)("td",{children:"Jacob"}),Object(r.jsx)("td",{children:"Thornton"}),Object(r.jsx)("td",{children:"name@Email.com"}),Object(r.jsx)("td",{children:"@twitter"})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{scope:"row",children:"3"}),Object(r.jsx)("td",{children:"Larry"}),Object(r.jsx)("td",{children:"the Bird"}),Object(r.jsx)("td",{children:"name@Email.com"}),Object(r.jsx)("td",{children:"@twitter"})]})]})]})};var u=function(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),c=(t[0],t[1]),n=Object(s.useState)(),a=Object(l.a)(n,2),j=a[0],o=a[1];return Object(s.useEffect)((function(){d().then((function(e){if(0===e.data.length)throw new Error("No results found.");if("error"===e.data.status)throw new Error(e.data.message);var t=e.data;o(t)})).catch((function(e){return c(e.message)}))}),[]),Object(r.jsxs)(h,{children:[Object(r.jsx)(b,{children:Object(r.jsx)(x,{})}),Object(r.jsx)("br",{}),Object(r.jsx)(O,{characterData:j})]})};var f=function(){return Object(r.jsx)("div",{className:"jumbotron text-center d-flex align-content-around flex-wrap",style:{height:20},children:Object(r.jsxs)("div",{className:"container  ",children:[Object(r.jsx)("h1",{className:"display-4",children:"The World of Harry Potter"}),Object(r.jsx)("p",{className:"lead",children:"Click on carrots to filter by heading or use the search box to narrow your results."})]})})};var m=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(f,{}),Object(r.jsx)(u,{})]})};j.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(m,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.979e51c0.chunk.js.map