(this["webpackJsonpcurrency-conventer-react"]=this["webpackJsonpcurrency-conventer-react"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(4),s=n.n(a),l=(n(9),n(10),n(0)),i=function(e){var t=e.title;return Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("h1",{children:t})})},u=n(2),o=(n(12),[{id:"EUR",name:"Euro",rate:4.5649},{id:"USD",name:"Dolar ameryka\u0144ski",rate:3.7855},{id:"UAH",name:"Hrywna ukrai\u0144ska",rate:.1356}]),j=function(e){var t=e.selectedCurrency,n=e.setSelectedCurrency;return Object(l.jsx)("select",{className:"form__select",name:"currency",value:t,onChange:function(e){var t=e.target;return n(t.value)},children:o.map((function(e){return Object(l.jsx)("option",{value:e.id,children:e.name},e.id)}))})},b=function(e){var t=e.amount,n=e.setNewAmount;return Object(l.jsx)("input",{className:"form__input",type:"number",name:"pln",placeholder:"Wpisz kwot\u0119",required:!0,min:"1",step:"any",value:t,autoFocus:!0,onChange:function(e){var t=e.target;return n(t.value)}})},d=(n(13),function(e){var t=e.result;return Object(l.jsxs)("p",{className:"form__paragraph",children:["Otrzymasz: ",Object(l.jsx)("strong",{className:"result",children:t})]})}),m=function(e){var t=e.currencies,n=Object(c.useState)(""),r=Object(u.a)(n,2),a=r[0],s=r[1],i=Object(c.useState)(t[0].id),o=Object(u.a)(i,2),m=o[0],h=o[1],O=Object(c.useState)([]),f=Object(u.a)(O,2),x=f[0],p=f[1],_=function(){return t.find((function(e){return e.id===m})).rate};return Object(l.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),_(),p([(a/_()).toFixed(2),m])},onReset:function(){s(""),p("")},children:[Object(l.jsx)("p",{className:"form__paragraph",children:"Pola wymagane oznaczone s\u0105 *"}),Object(l.jsxs)("fieldset",{className:"form__fieldset",children:[Object(l.jsx)("legend",{className:"form__legend",children:"Przelicznik walut"}),Object(l.jsx)("p",{children:Object(l.jsxs)("label",{children:[Object(l.jsx)("span",{className:"form__labelText",children:"Kwota w PLN*:"}),Object(l.jsx)(b,{amount:a,setNewAmount:s})]})}),Object(l.jsx)("p",{children:Object(l.jsxs)("label",{children:[Object(l.jsx)("span",{className:"form__labelText",children:"Wybierz walut\u0119"}),Object(l.jsx)(j,{setSelectedCurrency:h,selectedCurrency:m})]})}),Object(l.jsx)(d,{result:x})]}),Object(l.jsx)("button",{className:"form__button",children:"Przelicz"}),Object(l.jsx)("button",{className:"form__button",type:"reset",children:"Wyczy\u015b\u0107 formularz"})]})},h=(n(14),function(e){var t=e.title,n=e.scope;return Object(l.jsx)("th",{className:"table__cell table__cell--header",scope:n,children:t})}),O=(n(15),function(){return Object(l.jsxs)("p",{className:"table__paragraph",children:["Wszystkie dane do tabeli zosta\u0142y pobrane z strony",Object(l.jsx)("a",{className:"link",href:"https://mybank.pl/kursy-walut/",target:"_blank",title:"Oficjalna strona kurs\xf3w walut",rel:"noreferrer noopener",children:"Aktualny kurs walut"})," dnia 24.04.2021 r."]})}),f=function(){return Object(l.jsxs)("div",{className:"table__container",children:[Object(l.jsxs)("table",{className:"table",children:[Object(l.jsx)("caption",{className:"table__caption",children:"Kursy walut"}),Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)(h,{scope:"col",title:"Waluta"}),Object(l.jsx)(h,{scope:"col",title:"Kursy walut"})]})}),Object(l.jsx)("tbody",{children:o.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)(h,{scope:"row",title:e.name}),Object(l.jsx)("td",{className:"table__cell",children:e.rate})]},e.id)}))})]}),Object(l.jsx)(O,{})]})},x=(n(16),function(e){var t=e.children;return Object(l.jsx)("main",{className:"container",children:t})}),p=(n(17),function(e){var t=e.text;return Object(l.jsx)("footer",{className:"footer",children:t})});var _=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(x,{children:[Object(l.jsx)(i,{title:"Kalkulator walut online"}),Object(l.jsx)(m,{currencies:o}),Object(l.jsx)(f,{currencies:o}),Object(l.jsx)(p,{text:" \xa9 Tania Mishakova 2021"})]})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(_,{})}),document.getElementById("root")),y()}],[[18,1,2]]]);
//# sourceMappingURL=main.07c11ec4.chunk.js.map