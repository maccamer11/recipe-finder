(this["webpackJsonprecipe-finder"]=this["webpackJsonprecipe-finder"]||[]).push([[0],{13:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),l=a.n(r),i=(a(11),a(4),a(1)),o=a.n(i),s=a(2),m=function(e){var t=e.title,a=e.calories,n=e.image,r=e.ingredients,l=(e.totalNutrients,Math.round(a));return c.a.createElement("div",null,c.a.createElement("span",null,c.a.createElement("h3",{className:"heading"},t)),c.a.createElement("span",null,c.a.createElement("img",{className:"rounded-circle pic",src:n,alt:"food"})),c.a.createElement("span",null,c.a.createElement("p",null,"Calories: ",l)),c.a.createElement("span",null,c.a.createElement("ol",null,r.map((function(e){return c.a.createElement("li",null,e.text)})))))},u=function(){return c.a.createElement("div",null,c.a.createElement("h1",{className:"title-container__title"},"Recipe Finder"),c.a.createElement("h3",{className:"title-container__subtitle"},"Find your favourite recipes, health information and more..."))},p=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),i=Object(s.a)(l,2),p=i[0],d=i[1],f=Object(n.useState)(""),h=Object(s.a)(f,2),E=h[0],v=h[1];Object(n.useEffect)((function(){b()}),[E]);var b=function(){var e,t;return o.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.a.awrap(fetch("https://api.edamam.com/search?q=".concat(E,"&app_id=").concat("13fff1e9","&app_key=").concat("a33384c1b889940747fb5779d7fa12b4","&from=0&to=30")));case 2:return e=a.sent,a.next=5,o.a.awrap(e.json());case 5:t=a.sent,r(t.hits),console.log(t.hits);case 8:case"end":return a.stop()}}))};return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-5 title-container"},c.a.createElement(u,null)),c.a.createElement("div",{className:"App col-md-7 form-container d-flex justify-content-center"},c.a.createElement("div",{className:"row mr-auto"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),v(p),d("")},className:"search-form"},c.a.createElement("input",{className:"search-bar",type:"text",value:p,onChange:function(e){d(e.target.value)}}),c.a.createElement("button",{className:"search-button",type:"submit"},"Search"))),c.a.createElement("div",{className:"recipes row flex-wrap"},c.a.createElement("div",{className:" .customized"},a.map((function(e){return c.a.createElement(m,{key:e.recipe.label,title:e.recipe.label,image:e.recipe.image,calories:e.recipe.calories,ingredients:e.recipe.ingredients})}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},4:function(e,t,a){},6:function(e,t,a){e.exports=a(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.9901769d.chunk.js.map