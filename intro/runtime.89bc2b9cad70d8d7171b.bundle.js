!function(e){function r(r){for(var n,o,d=r[0],u=r[1],s=r[2],l=r[3]||[],f=0,h=[];f<d.length;f++)o=d[f],a[o]&&h.push(a[o][0]),a[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(p&&p(r),i.push.apply(i,l);h.length;)h.shift()();return c.push.apply(c,s||[]),t()}function t(){for(var e,r=0;r<c.length;r++){for(var t=c[r],n=!0,o=1;o<t.length;o++){var s=t[o];0!==a[s]&&(n=!1)}n&&(c.splice(r--,1),e=u(u.s=t[0]))}return 0===c.length&&(i.forEach(function(e){if(void 0===a[e]){a[e]=null;var r=document.createElement("link");u.nc&&r.setAttribute("nonce",u.nc),r.rel="prefetch",r.as="script",r.href=d(e),document.head.appendChild(r)}}),i.length=0),e}var n={},o={6:0},a={6:0},c=[],i=[];function d(e){return u.p+""+({0:"vendors~Sidebar~presenter.host",1:"Sidebar",2:"live",4:"presenter.host",5:"presenter.view",7:"target-blank",9:"vendors~Sidebar",10:"vendors~live",11:"vendors~presenter.host"}[e]||e)+"."+e+"."+{0:"3d79e284abca74c6f44c",1:"ca86e5f30628914d44d5",2:"67be8148c56440b62474",4:"3d13925d2abebc523c4a",5:"7ddafb020d26f870137c",7:"1329039a75da7d574c72",9:"62e06a08291923a498e3",10:"c973c990cc6043f510ec",11:"261ac6b5a3121314df4f"}[e]+".bundle.js"}function u(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var r=[];o[e]?r.push(o[e]):0!==o[e]&&{2:1,4:1}[e]&&r.push(o[e]=new Promise(function(r,t){for(var n=({0:"vendors~Sidebar~presenter.host",1:"Sidebar",2:"live",4:"presenter.host",5:"presenter.view",7:"target-blank",9:"vendors~Sidebar",10:"vendors~live",11:"vendors~presenter.host"}[e]||e)+"."+e+"."+{0:"3d79e284abca74c6f44c",1:"ca86e5f30628914d44d5",2:"67be8148c56440b62474",4:"3d13925d2abebc523c4a",5:"7ddafb020d26f870137c",7:"1329039a75da7d574c72",9:"62e06a08291923a498e3",10:"c973c990cc6043f510ec",11:"261ac6b5a3121314df4f"}[e]+".css",a=u.p+n,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var d=(l=c[i]).getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===n||d===a))return r()}var s=document.getElementsByTagName("style");for(i=0;i<s.length;i++){var l;if((d=(l=s[i]).getAttribute("data-href"))===n||d===a)return r()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=r,f.onerror=function(r){var n=r&&r.target&&r.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete o[e],f.parentNode.removeChild(f),t(c)},f.href=a,document.getElementsByTagName("head")[0].appendChild(f)}).then(function(){o[e]=0}));var t=a[e];if(0!==t)if(t)r.push(t[2]);else{var n=new Promise(function(r,n){t=a[e]=[r,n]});r.push(t[2]=n);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=d(e);var s=new Error;c=function(r){i.onerror=i.onload=null,clearTimeout(l);var t=a[e];if(0!==t){if(t){var n=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;s.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",s.name="ChunkLoadError",s.type=n,s.request=o,t[1](s)}a[e]=void 0}};var l=setTimeout(function(){c({type:"timeout",target:i})},12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(r)},u.m=e,u.c=n,u.d=function(e,r,t){u.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,r){if(1&r&&(e=u(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)u.d(t,n,function(r){return e[r]}.bind(null,n));return t},u.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(r,"a",r),r},u.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},u.p="",u.oe=function(e){throw console.error(e),e};var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=r,s=s.slice();for(var f=0;f<s.length;f++)r(s[f]);var p=l;t()}([]);