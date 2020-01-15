(this["webpackJsonpmy-weather-app"]=this["webpackJsonpmy-weather-app"]||[]).push([[0],{31:function(e,t,a){e.exports=a(43)},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),o=a.n(c),i=(a(36),a(37),a(10)),l=a(63),u=a(65),m=a(64),s=a(58),d=a(60),f=a(61),h="95c3dbda29852d8d2d2de3dec7b3d340",p="https://api.openweathermap.org/data/2.5/weather",E="https://api.openweathermap.org/data/2.5/forecast",g="https://openweathermap.org/img/wn";a(38);var b=function(e){var t=e.location,a=Object(n.useState)(),c=Object(i.a)(a,2),o=c[0],l=c[1];Object(n.useEffect)((function(){console.log("Fetching weather data for ",t),function(e){return fetch("".concat(p,"?lat=").concat(e.latitude,"&lon=").concat(e.longitude,"&units=imperial&appId=").concat(h)).then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()}))}(t).then((function(e){return l(e)})).catch((function(e){return l(null)}))}),[t]);return r.a.createElement(s.a,{raised:!0,className:"weather-app-card"},o?r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{title:o.main.temp+"\xb0F",subheader:o.name+" "+(new Date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),r.a.createElement(f.a,null,r.a.createElement("img",{src:"".concat(g,"/").concat(o.weather[0].icon,"@2x.png"),alt:"weather-icon"}))):r.a.createElement(d.a,{subheader:"Unable to fetch weather data. Please try after sometime"}))},w=a(62),v=a(17),y=function(e){var t=e.date,a=e.min,n=e.max,c=e.icon;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{variant:"body2",color:"textSecondary"},new Date(t).toString().slice(0,10)),r.a.createElement("img",{src:"".concat(g,"/").concat(c,"@2x.png"),alt:"weather-icon"}),r.a.createElement(v.a,{variant:"body2",color:"textPrimary"},"Max: ",n+"\xb0F"),r.a.createElement(v.a,{variant:"body2",color:"textSecondary"},"Min: ",a+"\xb0F"))};a(42);var j=function(e){var t=e.location,a=Object(n.useState)(),c=Object(i.a)(a,2),o=c[0],l=c[1];return Object(n.useEffect)((function(){console.log("Fetching forecast data for ",t),function(e){return fetch("".concat(E,"?lat=").concat(e.latitude,"&lon=").concat(e.longitude,"&units=imperial&appId=").concat(h)).then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()}))}(t).then((function(e){return l(e)})).catch((function(e){return l(null)}))}),[t]),r.a.createElement(s.a,{raised:!0,className:"forecast-app-card"},o?r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{title:o.city.name,subheader:"5 Day Forecast"}),r.a.createElement(f.a,null,r.a.createElement(w.a,{container:!0,justify:"center",spacing:4},o.list.filter((function(e,t){return t%8===0})).map((function(e){return r.a.createElement(w.a,{key:e.dt,item:!0,className:"daily-forecast-grid-item"},r.a.createElement(y,{date:e.dt_txt,min:e.main.temp_min,max:e.main.temp_max,icon:e.weather[0].icon}))}))))):r.a.createElement(d.a,{subheader:"Unable to fetch forecast data. Please try after sometime"}))},x=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(),f=Object(i.a)(o,2),h=f[0],p=f[1];Object(n.useEffect)((function(){navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(e){var t={latitude:e.coords.latitude,longitude:e.coords.longitude};p(t)}))}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{position:"static"},r.a.createElement(u.a,{value:a,onChange:function(e,t){c(t)}},r.a.createElement(m.a,{label:"Weather"}),r.a.createElement(m.a,{label:"5 Day Forecast"}))),0===a&&h&&r.a.createElement(b,{location:h}),1===a&&h&&r.a.createElement(j,{location:h}),!h&&r.a.createElement(s.a,{raised:!0},r.a.createElement(d.a,{subheader:"Please enable location"})))};var F=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.10d31db5.chunk.js.map