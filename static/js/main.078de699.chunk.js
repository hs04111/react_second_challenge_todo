(this.webpackJsonpreact_master_class_2021=this.webpackJsonpreact_master_class_2021||[]).push([[0],{65:function(n,t,e){"use strict";e.r(t);var o,r=e(0),c=e.n(r),i=e(22),a=e.n(i),l=e(34),s=e(10),d=e(11),u=e(13),b=e(5),j=e(4);!function(n){n.TO_DO="TO_DO",n.DOING="DOING",n.DONE="DONE"}(o||(o={}));var p,x=Object(s.b)({key:"customCategories",default:JSON.parse(localStorage.getItem("additional_categories")||"[]")}),f=Object(s.b)({key:"category",default:o.TO_DO}),O=Object(s.b)({key:"toDoList",default:JSON.parse(localStorage.getItem("toDos")||"[]")}),m=Object(s.c)({key:"toDoSelector",get:function(n){var t=n.get,e=t(O),o=t(f);return e.filter((function(n){return n.category===o}))}}),g=e(8),h=e(30),y=e(3),v=d.c.form(p||(p=Object(u.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  input {\n    margin-top: 15px;\n    width: 60%;\n    background: transparent;\n    color: ",";\n    font-size: 20px;\n    border: none;\n    text-align: center;\n  }\n  button {\n    margin-top: 15px;\n    background: transparent;\n    color: ",";\n    font-size: 20px;\n    border: 3px solid ",";\n    border-radius: 5px;\n  }\n  span {\n    margin-top: 8px;\n  }\n"])),(function(n){return n.theme.textColor}),(function(n){return n.theme.textColor}),(function(n){return n.theme.textColor}));var D=function(){var n,t=Object(h.a)(),e=t.register,o=t.handleSubmit,c=t.setValue,i=t.formState.errors,a=Object(s.d)(x),l=Object(j.a)(a,2),d=l[0],u=l[1],p=Object(s.f)(f);return Object(r.useEffect)((function(){localStorage.setItem("additional_categories",JSON.stringify(d))}),[d]),Object(y.jsxs)(v,{onSubmit:o((function(n){var t=n.customCategory;c("customCategory",""),p(t),u((function(n){return[].concat(Object(g.a)(n),[t])}))})),children:[Object(y.jsx)("input",Object(b.a)(Object(b.a)({},e("customCategory",{required:"\uce74\ud14c\uace0\ub9ac\ub97c \uc785\ub825 \ud6c4 \uc0dd\uc131\uc744 \ud074\ub9ad\ud558\uc138\uc694."})),{},{placeholder:"\uc5ec\uae30\uc5d0 \uc0c8 \uce74\ud14c\uace0\ub9ac\ub97c \uc4f0\uc138\uc694",type:"text"})),Object(y.jsx)("button",{children:"\uc0dd\uc131"}),Object(y.jsx)("span",{children:null===(n=i.customCategory)||void 0===n?void 0:n.message})]})};var C,k,S,w,T=function(){var n,t=Object(h.a)(),e=t.register,o=t.handleSubmit,r=t.setValue,c=t.formState.errors,i=Object(s.f)(O),a=Object(s.e)(f);return Object(y.jsxs)(v,{onSubmit:o((function(n){var t=n.toDo;r("toDo",""),i((function(n){return[{text:t,id:Date.now(),category:a}].concat(Object(g.a)(n))}))})),children:[Object(y.jsx)("input",Object(b.a)(Object(b.a)({},e("toDo",{required:"To do\ub97c \uc785\ub825 \ud6c4 \ub4f1\ub85d\uc744 \ud074\ub9ad\ud558\uc138\uc694."})),{},{placeholder:"\uc624\ub298\uc758 To do\ub294?",type:"text"})),Object(y.jsx)("button",{children:"\ub4f1\ub85d"}),Object(y.jsx)("span",{children:null===(n=c.toDo)||void 0===n?void 0:n.message})]})},N=d.c.li(C||(C=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  margin-bottom: 8px;\n  border: 2px solid ",";\n  border-radius: 5px;\n  padding: 10px;\n"])),(function(n){return n.theme.textColor})),_=d.c.span(k||(k=Object(u.a)(["\n  font-size: 20px;\n  font-weight: bold;\n  text-align: center;\n  margin: 20px auto;\n"]))),I=d.c.div(S||(S=Object(u.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  div {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n  }\n  button {\n    margin: 0 5px;\n    margin-top: 10px;\n    background: transparent;\n    color: ",";\n    font-size: 16px;\n    border: 1px solid ",";\n    border-radius: 5px;\n  }\n"])),(function(n){return n.theme.textColor}),(function(n){return n.theme.textColor})),q=d.c.button(w||(w=Object(u.a)(["\n  margin-top: 25px;\n  background: transparent;\n  color: ",";\n  font-size: 20px;\n  border: 3px solid ",";\n  border-radius: 5px;\n"])),(function(n){return n.theme.textColor}),(function(n){return n.theme.textColor}));var z,E,J,G=function(n){var t=n.text,e=n.category,r=n.id,c=Object(s.f)(O),i=Object(s.e)(x),a=function(n){var e=n.currentTarget.name;c((function(n){var o=n.findIndex((function(n){return n.id===r})),c={text:t,id:r,category:e};return[].concat(Object(g.a)(n.slice(0,o)),[c],Object(g.a)(n.slice(o+1)))}))};return Object(y.jsxs)(N,{children:[Object(y.jsx)(_,{children:t}),Object(y.jsxs)(I,{children:[Object(y.jsx)("span",{children:"\uce74\ud14c\uace0\ub9ac \uc774\ub3d9:"}),Object(y.jsxs)("div",{children:[e!==o.TO_DO&&Object(y.jsx)("button",{name:o.TO_DO,onClick:a,children:"To Do"}),e!==o.DOING&&Object(y.jsx)("button",{name:o.DOING,onClick:a,children:"Doing"}),e!==o.DONE&&Object(y.jsx)("button",{name:o.DONE,onClick:a,children:"Done"}),i!==[]&&i.map((function(n,t){if(n!==e)return Object(y.jsx)("button",{name:n,onClick:a,children:n},t)}))]})]}),Object(y.jsx)(q,{onClick:function(n){c((function(t){return t.filter((function(t){return t.id!==Number(n.currentTarget.id)}))}))},id:"".concat(r),children:"To do \uc9c0\uc6b0\uae30"})]})},P=d.c.div(z||(z=Object(u.a)(["\n  max-width: 500px;\n  margin: 0 auto;\n  margin-top: 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  select {\n    margin-top: 15px;\n    width: 30%;\n    background: transparent;\n    color: ",";\n    font-size: 20px;\n    border: 2px solid ",";\n    border-radius: 5px;\n    option {\n      background-color: ",";\n    }\n  }\n  ul {\n    width: 100%;\n    margin-top: 30px;\n  }\n"])),(function(n){return n.theme.textColor}),(function(n){return n.theme.textColor}),(function(n){return n.theme.bgColor})),B=d.c.h1(E||(E=Object(u.a)(["\n  width: 100%;\n  font-size: 40px;\n  font-weight: bold;\n  text-align: center;\n  margin-top: 20px;\n  padding: 14px;\n  border: 1px solid ",";\n  border-radius: 10px;\n"])),(function(n){return n.theme.textColor})),L=d.c.h2(J||(J=Object(u.a)(["\n  font-size: 20px;\n  font-weight: bold;\n  text-align: center;\n  margin-top: 50px;\n"])));var M,Q=function(){var n=Object(s.e)(O),t=Object(s.e)(m),e=Object(s.d)(f),c=Object(j.a)(e,2),i=c[0],a=c[1],l=Object(s.e)(x);return Object(r.useEffect)((function(){localStorage.setItem("toDos",JSON.stringify(n))}),[n]),Object(y.jsxs)(P,{children:[Object(y.jsx)(B,{children:"\uc624\ub298\uc758 To Do"}),Object(y.jsx)(L,{children:"\uce74\ud14c\uace0\ub9ac\ub97c \uc544\ub798\uc5d0\uc11c \uc120\ud0dd\ud558\uc138\uc694"}),Object(y.jsxs)("select",{value:i,onInput:function(n){a(n.currentTarget.value)},children:[Object(y.jsx)("option",{value:o.TO_DO,children:"To Do"}),Object(y.jsx)("option",{value:o.DOING,children:"Doing"}),Object(y.jsx)("option",{value:o.DONE,children:"Done"}),l!==[]&&l.map((function(n,t){return Object(y.jsx)("option",{value:n,children:n},t)}))]}),Object(y.jsx)(L,{children:"\uc0c8 \uce74\ud14c\uace0\ub9ac\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4"}),Object(y.jsx)(D,{}),Object(y.jsx)(L,{children:"To do\ub97c \uc785\ub825\ud558\uc138\uc694"}),Object(y.jsx)(T,{}),Object(y.jsx)("ul",{children:t.map((function(n){return Object(y.jsx)(G,Object(b.a)({},n),n.id)}))})]})},V=Object(d.b)(M||(M=Object(u.a)(["\n\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\nbody {\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color: ",";\n  color:  ",";\n}\na {\n  text-decoration: none;\n  color: inherit;\n}\n* {\n  box-sizing: border-box;\n}\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor}));var F=function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(V,{}),Object(y.jsx)(Q,{})]})},H=new l.QueryClient;a.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(s.a,{children:Object(y.jsx)(d.a,{theme:{bgColor:"#28284C",textColor:"white",accentColor:"#9c88ff",cardBgColor:"transparent"},children:Object(y.jsx)(l.QueryClientProvider,{client:H,children:Object(y.jsx)(F,{})})})})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.078de699.chunk.js.map