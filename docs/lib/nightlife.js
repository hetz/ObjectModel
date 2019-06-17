parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"oBft":[function(require,module,exports) {
"use strict";var t=function(){function t(t,r){for(var n in r){var o=r[n];o.configurable=!0,o.value&&(o.writable=!0)}Object.defineProperties(t,r)}return function(r,n,o){return n&&t(r.prototype,n),o&&t(r,o),r}}(),r=function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")},n=function(){function n(t,o,a){r(this,n),this.date=t,this.latitude=o,this.longitude=a,this.julianDate=b(t)}return t(n,{solarNoon:{get:function(){return A(this.julianDate,this.longitude,this.date)}},timeAtAngle:{value:function(t,r){return T(r,t,this.julianDate,this.date,this.latitude,this.longitude)}}}),n}(),o=function(t,r){var n=60*(r-Math.floor(r));return new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),0,r,n))};function a(t){return(t-2451545)/36525}function e(t){return t%4==0&&t%100!=0||t%400==0}function i(t){var r,n=Math.floor(t+.5),o=t+.5-n;if(n<2299161)r=n;else{var a=Math.floor((n-1867216.25)/36524.25);r=n+1+a-Math.floor(a/4)}var i=r+1524,u=Math.floor((i-122.1)/365.25),f=Math.floor(365.25*u),h=Math.floor((i-f)/30.6001),l=i-f-Math.floor(30.6001*h)+o,c=h<14?h-1:h-13,M=e(c>2?u-4716:u-4715)?1:2;return Math.floor(275*c/9)-M*Math.floor((c+9)/12)+l-30}function u(t){return 180*t/Math.PI}function f(t){return Math.PI*t/180}function h(t){for(var r=280.46646+t*(36000.76983+3032e-7*t);r>360;)r-=360;for(;r<0;)r+=360;return r}function l(t){return 357.52911+t*(35999.05029-1537e-7*t)}function c(t){return.016708634-t*(42037e-9+1.267e-7*t)}function M(t){var r=f(l(t));return Math.sin(r)*(1.914602-t*(.004817+14e-6*t))+Math.sin(r+r)*(.019993-101e-6*t)+289e-6*Math.sin(r+r+r)}function s(t){return h(t)+M(t)}function v(t){var r=125.04-1934.136*t;return s(t)-.00569-.00478*Math.sin(f(r))}function g(t){return 23+(26+(21.448-t*(46.815+t*(59e-5-.001813*t)))/60)/60}function d(t){var r=125.04-1934.136*t;return g(t)+.00256*Math.cos(f(r))}function D(t){var r=d(t),n=v(t),o=Math.sin(f(r))*Math.sin(f(n));return u(Math.asin(o))}function p(t){var r=d(t),n=h(t),o=c(t),a=l(t),e=Math.tan(f(r)/2);e*=e;var i=Math.sin(2*f(n)),M=Math.sin(f(a));return 4*u(e*i-2*o*M+4*o*e*M*Math.cos(2*f(n))-.5*e*e*Math.sin(4*f(n))-1.25*o*o*Math.sin(2*f(a)))}function w(t,r,n){var o=f(r),a=f(n),e=Math.cos(f(90+t))/(Math.cos(o)*Math.cos(a))-Math.tan(o)*Math.tan(a);return Math.acos(e)}function j(t){for(var r=!1,n=""+t,o=0;o<n.length;o++){var a=n.charAt(o);if(0!==o||"-"!==a&&"+"!==a)if("."!==a||r){if(a<"0"||a>"9")return!1}else r=!0}return!0}function b(t){var r=t.getFullYear(),n=t.getMonth()+1,o=t.getDate(),a=Math.floor(r/100),e=2-a+Math.floor(a/4);return Math.floor(365.25*(r+4716))+Math.floor(30.6001*(n+1))+o+e-1524.5}function A(t,r,n){for(var e=p(a(t-r/360)),i=720-4*r-(e=p(a(t+(720-4*r-e)/1440)));i<0;)i+=1440;for(;i>=1440;)i-=1440;return o(n,i)}function C(t){if(t<9e5||t>2817e3)return"error";var r,n=Math.floor(t+.5),o=t+.5-n;if(n<2299161)r=n;else{var a=Math.floor((n-1867216.25)/36524.25);r=n+1+a-Math.floor(a/4)}var e=r+1524,i=Math.floor((e-122.1)/365.25),u=Math.floor(365.25*i),f=Math.floor((e-u)/30.6001),h=e-u-Math.floor(30.6001*f)+o,l=f<14?f-1:f-13,c=l>2?i-4716:i-4715;return new Date(Date.UTC(c,l-1,h,0,0,0))}function P(t,r,n,o,e){var i=a(n),f=p(i),h=w(r,o,D(i));return t||(h=-h),720-4*(e+u(h))-f}function T(t,r,n,a,e,u){var f=P(t,r,n,e,u),h=P(t,r,n+f/1440,e,u);if(j(h))return o(a,h);var l=i(n);return C(m(e>66.4&&l>79&&l<267||e<-66.4&&(l<83||l>263)?!t:t,t,r,n,e,u))}function m(t,r,n,o,a,e){for(var i=o,u=t?1:-1,f=P(r,n,i,a,e);!j(f);)f=P(r,n,i+=u,a,e);return i}module.exports=n;
},{}],"zaOe":[function(require,module,exports) {
"use strict";var t=function(){function t(t,n){for(var e in n){var a=n[e];a.configurable=!0,a.value&&(a.writable=!0)}Object.defineProperties(t,n)}return function(n,e,a){return e&&t(n.prototype,e),a&&t(n,a),n}}(),n=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")},e=function(){function e(t,r,o){n(this,e),this.date=t,this.latitude=r,this.longitude=o,this.julianDate=a(t)}return t(e,{illuminosity:{get:function(){return y(this.date)/360}},distance:{get:function(){return w(this.date).distance}}}),e}();function a(t){var n=t.getFullYear(),e=t.getMonth()+1,a=t.getDate(),r=Math.floor(n/100),o=2-r+Math.floor(r/4);return Math.floor(365.25*(n+4716))+Math.floor(30.6001*(e+1))+a+o-1524.5}function r(t){return t-360*Math.floor(t/360)}function o(t){return Math.sin(t*Math.PI/180)}function i(t){return Math.cos(t*Math.PI/180)}function u(t){return Math.tan(t*Math.PI/180)}function f(t){return 180/Math.PI*Math.asin(t)}function c(t,n){return 180/Math.PI*Math.atan(t/n)-180*(n<0)}var h=[0,2,2,0,0,0,2,2,2,2,0,1,0,2,0,0,4,0,4,2,2,1,1,2,2,4,2,0,2,2,1,2,0,0,2,2,2,4,0,3,2,4,0,2,2,2,4,0,4,1,2,0,1,3,4,2,0,1,2,2],s=[0,0,0,0,1,0,0,-1,0,-1,1,0,1,0,0,0,0,0,0,1,1,0,1,-1,0,0,0,1,0,-1,0,-2,1,2,-2,0,0,-1,0,0,1,-1,2,2,1,-1,0,0,-1,0,1,0,1,0,0,-1,2,1,0,0],M=[1,-1,0,2,0,0,-2,-1,1,0,-1,0,1,0,1,1,-1,3,-2,-1,0,-1,0,1,2,0,-3,-2,-1,-2,1,0,2,0,-1,1,0,-1,2,-1,1,-2,-1,-1,-2,0,1,4,0,-2,0,2,1,-2,-3,2,1,-1,3,-1],l=[0,0,0,0,0,2,0,0,0,0,0,0,0,-2,2,-2,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,-2,2,0,2,0,0,0,0,0,0,-2,0,0,0,0,-2,-2,0,0,0,0,0,0,0,-2],d=[6288774,1274027,658314,213618,-185116,-114332,58793,57066,53322,45758,-40923,-34720,-30383,15327,-12528,10980,10675,10034,8548,-7888,-6766,-5163,4987,4036,3994,3861,3665,-2689,-2602,2390,-2348,2236,-2120,-2069,2048,-1773,-1595,1215,-1110,-892,-810,759,-713,-700,691,596,549,537,520,-487,-399,-381,351,-340,330,327,-323,299,294,0],v=[-20905355,-3699111,-2955968,-569925,48888,-3149,246158,-152138,-170733,-204586,-129620,108743,104755,10321,0,79661,-34782,-23210,-21636,24208,30824,-8379,-16675,-12831,-10445,-11650,14403,-7003,0,10056,6322,-9884,5751,0,-4950,4130,0,-3958,0,3258,2616,-1897,-2117,2354,0,0,-1423,-1117,-1571,-1739,0,-4421,0,0,0,0,1165,0,0,8752],b=[0,0,0,2,2,2,2,0,2,0,2,2,2,2,2,2,2,0,4,0,0,0,1,0,0,0,1,0,4,4,0,4,2,2,2,2,0,2,2,2,2,4,2,2,0,2,1,1,0,2,1,2,0,4,4,1,4,1,4,2],g=[0,0,0,0,0,0,0,0,0,0,-1,0,0,1,-1,-1,-1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,-1,0,0,0,0,1,1,0,-1,-2,0,1,1,1,1,1,0,-1,1,0,-1,0,0,0,-1,-2],P=[0,1,1,0,-1,-1,0,2,1,2,0,-2,1,0,-1,0,-1,-1,-1,0,0,-1,0,1,1,0,0,3,0,-1,1,-2,0,2,1,-2,3,2,-3,-1,0,0,1,0,1,1,0,0,-2,-1,1,-2,2,-2,-1,1,1,-1,0,0],p=[1,1,-1,-1,1,-1,1,1,-1,-1,-1,-1,1,-1,1,1,-1,-1,-1,1,3,1,1,1,-1,-1,-1,1,-1,1,-3,1,-3,-1,-1,1,-1,1,-1,1,1,1,1,-1,3,-1,-1,1,-1,-1,1,-1,1,-1,-1,-1,-1,-1,-1,1],I=[5128122,280602,277693,173237,55413,46271,32573,17198,9266,8822,8216,4324,4200,-3359,2463,2211,2065,-1870,1828,-1794,-1749,-1565,-1491,-1475,-1410,-1344,-1335,1107,1021,833,777,671,607,596,491,-451,439,422,421,-366,-351,331,315,302,-283,-229,223,223,-220,-220,-185,181,-177,176,166,-164,132,-119,115,107];function w(t){for(var n=a(t)+2451543.5,e=(n-2451545)/36525,w=e*e,y=w*e,j=y*e,m=218.3164477+481267.88123421*e-.0015786*w+y/538841-j/65194e3,D=297.8501921+445267.1114034*e-.0018819*w+y/545868-j/113065e3,x=357.5291092+35999.0502909*e-1536e-7*w+y/2449e4,C=134.9633964+477198.8675055*e+.0087414*w+y/69699-j/14712e3,E=93.272095+483202.0175233*e-.0036539*w-y/3526e3+j/86331e4,F=119.75+131.849*e,O=53.09+479264.29*e,T=313.45+481266.484*e,Y=1-.002516*e-74e-7*w,k=Y*Y,q=0,z=0,A=0;A<60;A++){var B=1;1===Math.abs(s[A])&&(B=Y),2===Math.abs(s[A])&&(B=k),q+=d[A]*B*o(r(h[A]*D+s[A]*x+M[A]*C+l[A]*E)),z+=v[A]*B*i(r(h[A]*D+s[A]*x+M[A]*C+l[A]*E))}var G=0;for(A=0;A<60;A++){B=1;1===Math.abs(g[A])&&(B=Y),2===Math.abs(g[A])&&(B=k),G+=I[A]*B*o(r(b[A]*D+g[A]*x+P[A]*C+p[A]*E))}q=q+3958*o(r(F))+1962*o(r(m-E))+318*o(r(O)),G=G-2235*o(r(m))+382*o(r(T))+175*o(r(F-E))+175*o(r(F+E))+127*o(r(m-C))-115*o(r(m+C));var H=r(m+q/1e6),J=r(G/1e6);J>180&&(J-=360);var K=Math.round(385000.56+z/1e3),L=23.4393-3.563e-9*(n-2451543.5),N=r(c(o(H)*i(L)-u(J)*o(L),i(H)))/15,Q=r(f(o(J)*i(L)+i(J)*o(L)*o(H)));return Q>180&&(Q-=360),{ra:N,dec:Q,distance:K}}function y(t){var n=(a(t)+2451543.5-2451545)/36525,e=n*n,i=e*n,u=i*n,f=297.8501921+445267.1114034*n-.0018819*e+i/545868-u/113065e3,c=134.9633964+477198.8675055*n+.0087414*e+i/69699-u/14712e3,h=357.5291092+35999.0502909*n-1536e-7*e+i/2449e4;return r(180-f-6.289*o(c)+2.1*o(h)-1.274*o(2*f-c)-.658*o(2*f)-.214*o(2*c)-.11*o(f))}module.exports=e;
},{}],"3KXC":[function(require,module,exports) {
"use strict";var n=function(){function n(n,t){for(var i in t){var e=t[i];e.configurable=!0,e.value&&(e.writable=!0)}Object.defineProperties(n,t)}return function(t,i,e){return i&&n(t.prototype,i),e&&n(t,e),t}}(),t=function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")},i=require("./sun.js"),e=require("./moon.js"),u={sunrise:.833,sunriseEnd:.3,twilight:6,nauticalTwilight:12,night:18,goldenHour:-6},r=function(){function r(n,u,s){t(this,r),this.date=n,this.lat=u,this.longitude=s,this.sun=new i(n,u,s),this.moon=new e(n,u,s)}return n(r,{solarNoon:{get:function(){return this.sun.solarNoon}},sunrise:{get:function(){return this.sun.timeAtAngle(u.sunrise,!0)}},sunset:{get:function(){return this.sun.timeAtAngle(u.sunrise)}},sunriseEnd:{get:function(){return this.sun.timeAtAngle(u.sunriseEnd,!0)}},sunsetStart:{get:function(){return this.sun.timeAtAngle(u.sunriseEnd,!1)}},civilDawn:{get:function(){return this.sun.timeAtAngle(u.twilight,!0)}},dawn:{get:function(){return this.civilDawn}},civilDusk:{get:function(){return this.sun.timeAtAngle(u.twilight,!1)}},dusk:{get:function(){return this.civilDusk}},nauticalDawn:{get:function(){return this.sun.timeAtAngle(u.nauticalTwilight,!0)}},nauticalDusk:{get:function(){return this.sun.timeAtAngle(u.nauticalTwilight,!1)}},nightStart:{get:function(){return this.astronomicalDusk}},astronomicalDusk:{get:function(){return this.sun.timeAtAngle(u.night,!1)}},astronomicalDawn:{get:function(){return this.sun.timeAtAngle(u.night,!0)}},nightEnd:{get:function(){return this.astronomicalDawn}},goldenHourStart:{get:function(){return this.sun.timeAtAngle(u.goldenHour,!1)}},goldenHourEnd:{get:function(){return this.sun.timeAtAngle(u.goldenHour,!0)}},lunarDistance:{get:function(){return this.moon.distance}},lunarIlluminosity:{get:function(){return this.moon.illuminosity}}}),r}();module.exports=r;
},{"./sun.js":"oBft","./moon.js":"zaOe"}],"6i9t":[function(require,module,exports) {
"use strict";module.exports=require("./lib/solarCalc.js");
},{"./lib/solarCalc.js":"3KXC"}],"KP3i":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=/((?:not )?all and )?(\(color-index: *(22|48|70)\))/i,t=/prefers-color-scheme:/i,a=function(a){var r=window.matchMedia&&matchMedia("(prefers-color-scheme: dark)"),i=r&&"(prefers-color-scheme: dark)"===r.media,n=function(){c(r.matches?"dark":"light")},c=function(a){a!==s&&(s=a,"function"==typeof o.onChange&&o.onChange()),[].forEach.call(document.styleSheets||[],function(r){[].forEach.call(r.cssRules||[],function(r){if(t.test(Object(r.media).mediaText)){var i=[].indexOf.call(r.parentStyleSheet.cssRules,r);r.parentStyleSheet.deleteRule(i)}else{var n=(Object(r.media).mediaText||"").match(e);n&&(r.media.mediaText=((/^dark$/i.test(a)?"48"===n[3]:/^light$/i.test(a)?"70"===n[3]:"22"===n[3])?"not all and ":"")+r.media.mediaText.replace(e,"$2"))}})})},o=Object.defineProperty({hasNativeSupport:i,removeListener:function(){r&&r.removeListener(n)}},"scheme",{get:function(){return s},set:c}),s=a||(r&&r.matches?"dark":"light");return c(s),r&&r.addListener(n),o},r=a;exports.default=r;
},{}],"MAzh":[function(require,module,exports) {
var t=require("solar-calc"),e=require("css-prefers-color-scheme").default,n="nightlife",o=function(t){throw new Error("[".concat(n,"] ").concat(t))},r=function(t){return console.log("[".concat(n,"] ").concat(t))},s={calcSunriseAndSunset:function(){var e=new Date,n=new Date;return n.setDate(e.getDate()+1),new Promise(function(t,e){return navigator.geolocation.getCurrentPosition(t,e)}).then(function(o){var r=o.coords,s=r.latitude,i=r.longitude,u=new t(e,s,i),a=u.sunrise,c=u.sunset,l=new t(n,s,i);return{sunrise:a,sunset:c,tomorrowSunrise:l.sunrise,tomorrowSunset:l.sunset}}).catch(function(t){console.error("Can't detect night time based on location, fallback to hour-based detection",t);var o=new Date(e);o.setHours(6,0,0,0);var r=new Date(e);r.setHours(18,0,0,0);var s=new Date(n);s.setHours(6,0,0,0);var i=new Date(n);return i.setHours(18,0,0,0),{sunrise:o,sunset:r,tomorrowSunrise:s,tomorrowSunset:i}})},autoApplyNightMode:function(t){return s.calcSunriseAndSunset().then(function(e){var n=e.sunrise,o=e.sunset,r=e.tomorrowSunrise,i=e.tomorrowSunset,u=Date.now()>o||Date.now()<n;return void 0!==t&&(u=t),Object.assign(s,{isNight:u,sunrise:n,sunset:o,tomorrowSunrise:r,tomorrowSunset:i}),s.toggleNightMode(u)})},toggleNightMode:function(t){void 0===t&&(t=!s.isNight),e(t?"dark":"light"),s.isNight=t,clearTimeout(s.timeout);var n=Date.now();if(t){var o=n<s.sunrise?s.sunrise:s.tomorrowSunrise;s.timeout=setTimeout(function(){r("A new day has risen"),s.autoApplyNightMode(!1).then(function(){return s.listeners.sunrise.forEach(function(t){return t()})})},o.getTime()-Date.now())}else{var i=n<s.sunset?s.sunset:s.tomorrowSunset;s.timeout=setTimeout(function(){r("Night has fallen"),s.autoApplyNightMode(!0).then(function(){return s.listeners.sunset.forEach(function(t){return t()})})},i.getTime()-Date.now())}return t},listeners:{init:[],sunrise:[],sunset:[]},on:function(t,e){this.listeners.hasOwnProperty(t)||o("Unknown event: ".concat(t)),s.listeners[t].push(e)}};s.autoApplyNightMode().then(function(){return s.listeners.init.forEach(function(t){return t()})}),window.nightlife=s;
},{"solar-calc":"6i9t","css-prefers-color-scheme":"KP3i"}]},{},["MAzh"], null)
//# sourceMappingURL=/nightlife.map