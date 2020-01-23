(this["webpackJsonpmy-weather-app"]=this["webpackJsonpmy-weather-app"]||[]).push([[0],{42:function(e,t,a){e.exports=a(56)},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},53:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),o=a.n(c),i=(a(47),a(48),a(12)),l=a(79),m=a(81),u=a(80),s=a(25),d=a(17),E=a(75),p=a(71),h=a(73),f=a(76),g=a(77),b="95c3dbda29852d8d2d2de3dec7b3d340",w="https://api.openweathermap.org/data/2.5/weather",v="https://api.openweathermap.org/data/2.5/forecast",y="https://openweathermap.org/img/wn",j=(a(49),function(e){var t=e.errorMessage;return r.a.createElement(p.a,{raised:!0},r.a.createElement(h.a,{subheader:t}))}),x=function(e,t){return t?Math.round(O(e))+"\xb0C":Math.round(e)+"\xb0F"},O=function(e){return 5/9*(e-32)},M=function(e,t){var a=Object(n.useState)(!1),r=Object(i.a)(a,2),c=r[0],o=r[1],l=Object(n.useState)(),m=Object(i.a)(l,2),u=m[0],s=m[1],d=Object(n.useState)(),E=Object(i.a)(d,2),p=E[0],h=E[1];return Object(n.useEffect)((function(){o(!0),fetch(e).then((function(e){if(o(!1),!e.ok)throw Error(e.statusText);return e.json()})).then((function(e){return s(e)})).catch((function(e){return h(e)}))}),[e,t]),[c,u,p]},S=Object(n.createContext)(null),C=a(74),k=function(){var e=Object(n.useContext)(S),t=e.isMetric,a=e.setIsMetric;return r.a.createElement(C.a,{size:"small",color:"primary",onClick:function(){return a(!t)}},t?"Fahrenheit":"Celsius")},F=function(e){var t=e.location,a=M("".concat(w,"?lat=").concat(t.latitude,"&lon=").concat(t.longitude,"&units=imperial&appId=").concat(b),t),c=Object(i.a)(a,3),o=c[0],l=c[1],m=c[2],u=Object(n.useContext)(S).isMetric;return o?r.a.createElement(E.a,{color:"secondary"}):m?r.a.createElement(j,{errorMessage:"Unable to get weather data. Please try again after sometime"}):r.a.createElement(r.a.Fragment,null,l&&r.a.createElement(p.a,{raised:!0,className:"weather-app-card"},r.a.createElement(h.a,{title:x(l.main.temp,u),subheader:l.name+" "+(new Date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),r.a.createElement(f.a,null,r.a.createElement("img",{src:"".concat(y,"/").concat(l.weather[0].icon,"@2x.png"),alt:"weather-icon"})),r.a.createElement(g.a,null,r.a.createElement(k,null))))},P=a(78),I=a(26),N=function(e){var t=e.date,a=e.min,c=e.max,o=e.icon,i=Object(n.useContext)(S).isMetric;return r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,{variant:"body2",color:"textSecondary"},new Date(t).toString().slice(0,10)),r.a.createElement("img",{src:"".concat(y,"/").concat(o,"@2x.png"),alt:"weather-icon"}),r.a.createElement(I.a,{variant:"body2",color:"textPrimary"},"Max: ",x(c,i)),r.a.createElement(I.a,{variant:"body2",color:"textSecondary"},"Min: ",x(a,i)))},D=(a(53),function(e){var t=e.location,a=M("".concat(v,"?lat=").concat(t.latitude,"&lon=").concat(t.longitude,"&units=imperial&appId=").concat(b),t),n=Object(i.a)(a,3),c=n[0],o=n[1],l=n[2];return c?r.a.createElement(E.a,{color:"secondary"}):l?r.a.createElement(j,{errorMessage:"Unable to get weather data. Please try again after sometime"}):r.a.createElement(r.a.Fragment,null,o&&r.a.createElement(p.a,{raised:!0,className:"forecast-app-card"},r.a.createElement(h.a,{title:o.city.name,subheader:"5 Day Forecast"}),r.a.createElement(f.a,null,r.a.createElement(P.a,{container:!0,justify:"center",spacing:4},o.list.filter((function(e,t){return t%8===0})).map((function(e){return r.a.createElement(P.a,{key:e.dt,item:!0,className:"daily-forecast-grid-item"},r.a.createElement(N,{date:e.dt_txt,min:e.main.temp_min,max:e.main.temp_max,icon:e.weather[0].icon}))})))),r.a.createElement(g.a,null,r.a.createElement(k,null))))}),W=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],o=function(){var e=Object(n.useState)(),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(e){var t={latitude:e.coords.latitude,longitude:e.coords.longitude};r(t)}))}),[]),a}();return o?r.a.createElement(s.a,null,r.a.createElement(l.a,{position:"static"},r.a.createElement(m.a,{value:!1},r.a.createElement(u.a,{label:"Weather",component:s.b,to:"/weather"}),r.a.createElement(u.a,{label:"Forecast",component:s.b,to:"/forecast"}))),o&&r.a.createElement("div",{className:"main"},r.a.createElement(S.Provider,{value:{isMetric:a,setIsMetric:c}},r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/weather"},r.a.createElement(F,{location:o})),r.a.createElement(d.b,{exact:!0,path:"/forecast"},r.a.createElement(D,{location:o})),r.a.createElement(d.a,{to:"/weather"}))))):r.a.createElement(j,{errorMessage:"Please enable location and try again"})};var _=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(W,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[42,1,2]]]);
//# sourceMappingURL=main.b4c70d8c.chunk.js.map