(this["webpackJsonpmy-weather-app"]=this["webpackJsonpmy-weather-app"]||[]).push([[0],{33:function(e,t,a){e.exports=a(45)},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),o=a.n(c),i=(a(38),a(39),a(10)),l=a(66),u=a(68),m=a(67),s=a(61),d=a(59),h=a(62),f=a(63),E=a(64),p="95c3dbda29852d8d2d2de3dec7b3d340",g="https://api.openweathermap.org/data/2.5/weather",b="https://api.openweathermap.org/data/2.5/forecast",w="https://openweathermap.org/img/wn";a(40);var v=function(){return r.a.createElement(d.a,{subheader:"Loading..."})},j=function(){return r.a.createElement(d.a,{subheader:"Unable to fetch weather data. Please try after sometime"})},y=function(e){return 5/9*(e-32)},O=function(e){var t=e.location,a=e.isMetric,c=e.onButtonClick,o=Object(n.useState)(),l=Object(i.a)(o,2),u=l[0],m=l[1],b=Object(n.useState)(),O=Object(i.a)(b,2),F=O[0],k=O[1];Object(n.useEffect)((function(){console.log("Fetching weather data for ",t),function(e){return fetch("".concat(g,"?lat=").concat(e.latitude,"&lon=").concat(e.longitude,"&units=imperial&appId=").concat(p)).then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()}))}(t).then((function(e){return m(e)})).catch((function(e){return k(e)}))}),[t]);var x;return r.a.createElement(s.a,{raised:!0,className:"weather-app-card"},u&&r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{title:(x=u.main.temp,a?Math.round(y(x))+"\xb0C":Math.round(x)+"\xb0F"),subheader:u.name+" "+(new Date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),r.a.createElement(h.a,null,r.a.createElement("img",{src:"".concat(w,"/").concat(u.weather[0].icon,"@2x.png"),alt:"weather-icon"})),r.a.createElement(f.a,null,r.a.createElement(E.a,{size:"small",color:"primary",onClick:c},a?r.a.createElement(r.a.Fragment,null,"Fahrenheit"):r.a.createElement(r.a.Fragment,null,"Celcius")))),F&&r.a.createElement(j,null),!F&&!u&&r.a.createElement(v,null))},F=a(65),k=a(19),x=function(e){var t=e.date,a=e.min,n=e.max,c=e.icon;return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{variant:"body2",color:"textSecondary"},new Date(t).toString().slice(0,10)),r.a.createElement("img",{src:"".concat(w,"/").concat(c,"@2x.png"),alt:"weather-icon"}),r.a.createElement(k.a,{variant:"body2",color:"textPrimary"},"Max: ",n),r.a.createElement(k.a,{variant:"body2",color:"textSecondary"},"Min: ",a))};a(44);var C=function(e){var t=e.location,a=e.isMetric,c=e.onButtonClick,o=Object(n.useState)(),l=Object(i.a)(o,2),u=l[0],m=l[1],g=Object(n.useState)(),w=Object(i.a)(g,2),O=w[0],k=w[1];Object(n.useEffect)((function(){console.log("Fetching forecast data for ",t),function(e){return fetch("".concat(b,"?lat=").concat(e.latitude,"&lon=").concat(e.longitude,"&units=imperial&appId=").concat(p)).then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()}))}(t).then((function(e){return m(e)})).catch((function(e){return k(e)}))}),[t]);var C=function(e){return a?Math.round(y(e))+"\xb0C":Math.round(e)+"\xb0F"};return r.a.createElement(s.a,{raised:!0,className:"forecast-app-card"},u&&r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{title:u.city.name,subheader:"5 Day Forecast"}),r.a.createElement(h.a,null,r.a.createElement(F.a,{container:!0,justify:"center",spacing:4},u.list.filter((function(e,t){return t%8===0})).map((function(e){return r.a.createElement(F.a,{key:e.dt,item:!0,className:"daily-forecast-grid-item"},r.a.createElement(x,{date:e.dt_txt,min:C(e.main.temp_min),max:C(e.main.temp_max),icon:e.weather[0].icon}))})))),r.a.createElement(f.a,null,r.a.createElement(E.a,{size:"small",color:"primary",onClick:c},a?r.a.createElement(r.a.Fragment,null,"Fahrenheit"):r.a.createElement(r.a.Fragment,null,"Celcius")))),O&&r.a.createElement(j,null),!O&&!u&&r.a.createElement(v,null))},S=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(),h=Object(i.a)(o,2),f=h[0],E=h[1],p=Object(n.useState)(!1),g=Object(i.a)(p,2),b=g[0],w=g[1];Object(n.useEffect)((function(){navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(e){var t={latitude:e.coords.latitude,longitude:e.coords.longitude};E(t)}))}),[]);var v=function(){w(!b)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{position:"static"},r.a.createElement(u.a,{value:a,onChange:function(e,t){c(t)}},r.a.createElement(m.a,{label:"Weather"}),r.a.createElement(m.a,{label:"5 Day Forecast"}))),0===a&&f&&r.a.createElement(O,{location:f,isMetric:b,onButtonClick:v}),1===a&&f&&r.a.createElement(C,{location:f,isMetric:b,onButtonClick:v}),!f&&r.a.createElement(s.a,{raised:!0},r.a.createElement(d.a,{subheader:"Please enable location"})))};var M=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(S,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.620322bd.chunk.js.map