(()=>{"use strict";var n={522:(n,e,t)=>{t.d(e,{Z:()=>v});var a=t(81),r=t.n(a),o=t(645),i=t.n(o),s=t(667),c=t.n(s),p=new URL(t(219),t.b),d=new URL(t(444),t.b),l=new URL(t(318),t.b),m=i()(r()),u=c()(p),f=c()(d),h=c()(l);m.push([n.id,"@font-face {\n    font-family: 'EB Garamond';\n    src: url("+u+");\n}\n\n@font-face {\n    font-family: 'Sacramento';\n    src: url("+f+");\n}\n\n\n@font-face {\n    font-family: 'Parisienne';\n    src: url("+h+");\n} \n\nbody {\n    background: black;\n    color: rgba(255, 255, 255, 0.839);\n    font-family: 'EB Garamond', cursive;\n    animation: fadeIn 1.5s;\n}\n\n.header {\n    font-family: 'Parisienne', sans-serif ;\n    font-size: clamp(3%, 5vw, 40px);\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 0 clamp(5%, 10%, 60px);\n    gap: 1%;\n    \n}\n\n.main {\n    width: 100%;\n    position: relative;\n}\n\n#image-logo{\n    width: clamp(10%, 8vw, 100px);\n    margin-right: min(2%, 10px);\n}\n\n#image-logo > img {\n    width: clamp(10%, 8vw, 100px);\n    height: auto;\n}\n\n.image-restaurant {\n    display: flex;\n    animation: fadeIn 1.5s;\n}\n\n.main, .image-restaurant > img {\n    width: clamp(0px, 70vw, 800px);\n    margin: auto;\n    height: auto;\n    border-radius: min(10px, 3%);\n}\n\n\n/* Navigation bar */\n\n.nav {\n    display: flex;\n    width: clamp(0px, 70vw, 800px);\n    justify-content: center;\n    margin: auto;\n    height: min(50px, 6vw);\n    font-family: 'Sacramento', sans-serif;\n}\n\n.nav > ul {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    width: 600px;\n    margin: 0;\n    padding: 0;\n}\n\n.nav > ul > li{\n    list-style-type: none;\n    border-radius: 3px;\n    font-size: clamp(5px, 4vw, 35px);\n    height: 100%;\n    width: 33%;\n    padding: 0 min(5%, 10px);\n    display: grid;\n    place-content: center;\n}\n\n.nav > ul > li:hover{\n    background-color: rgba(247, 247, 247, 0.146);\n    text-decoration: overline;\n    text-decoration-color: #d3d5d3b0;\n    cursor: pointer;\n}\n/* container */\n.container-content {\n    margin: 0;\n}\n\n#container {\n    background-color: rgba(255, 255, 255, 0.775);\n    border-radius: min(10px, 3%);\n    width: clamp(0px, calc(70vw - 20%), calc(800px - 20%));\n    z-index: 2;\n    position: absolute;\n    top: 5%;\n    left: 10%;\n    color: black;\n    font-size: min(3vw, 30px);\n    padding: min(3vw, 10%) min(10vw, 15%);\n    box-sizing: border-box;\n    opacity: 1;\n    height: clamp(0px, 70vw, 700px);\n}\n\n#container ul {\n    padding: 0;\n}\n\n.home, .menu, .contact{\n    animation: fadeIn 1.5s;\n}\n/* hours */\n#hours {\n    display: grid;\n    place-content: center;\n\n}\n\n#hours > p {\n    text-align: center;\n    margin-left: min(70px, 2.5vw);\n    margin: 0;\n    text-decoration: underline;\n    text-decoration-color:rgba(68, 68, 68, 0.447);\n}\n\n#hours li {\n    display: flex;\n    justify-content: space-between;\n}\n.day {\n    font-weight: bold;\n    color:rgba(68, 68, 68, 0.856)\n}\n\n.hours {\n    margin-left: min(60px, 2vw)\n}\n\n.ardoise {\n    position: absolute;\n    z-index: 3;\n    top: calc(5% - 5px);\n    left: calc(50% - 15vw/2);\n    height: min(15px, 5%);\n    background-color: rgba(0, 0, 0, 0.809);\n    width: 15vw;\n    box-shadow: 5px 4px 6px gray;\n}\n\n.description{\n    text-align: center;\n}\n\n/* Menu */\n.menu {\n    font-family: 'Sacramento', sans-serif;\n    font-size: min(6vw, 60px);\n    margin: auto;\n    text-align: center;\n}\n\n.menu p {\n    margin: 0;\n    text-align: center;\n}\n\n.dish p.title {\n    font-size: min(5vw, 50px);\n    text-decoration: underline;\n    text-decoration-color:rgba(167, 167, 167, 0.518);\n}\n\n.dish p.menu-item {\n    font-size: min(3vw, 25px);\n    font-family: 'EB Garamond', sans-serif;\n}\n\n.dish {\n    margin-top: min(50px, 10%);\n}\n\n/* Contact */\n\np.reservations {\n    font-family: 'Sacramento', sans-serif;\n    text-align: center;\n    font-size: min(5vw, 50px);\n    margin: min(20px, 2vw) 0;\n}\n\naddress {\n    text-align: center;\n}\n\n.image-address{\n    margin-top: min(30px, 10%);\n}\n.image-address > img {\n    width: 100%;\n    height: auto;\n}\n\n#ardoise:not(.activate), #container:not(.activate) {\n    opacity: 0;\n    transform: scaleY(0);\n\n}\n\n#ardoise.activate,  #container.activate  {\n    opacity: 1;\n    transform: scaleY(1);\n}\n\n#ardoise, #container {\n    transition: transform 0.8s;\n}\n\n\n@keyframes fadeIn {\n    0% {\n      opacity: 0;\n    }\n  \n    100% {\n      opacity: 1;\n    }\n  }\n",""]);const v=m},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,r,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(a)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var p=0;p<n.length;p++){var d=[].concat(n[p]);a&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var o={},i=[],s=0;s<n.length;s++){var c=n[s],p=a.base?c[0]+a.base:c[0],d=o[p]||0,l="".concat(p," ").concat(d);o[p]=d+1;var m=t(l),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(u);else{var f=r(u,a);a.byIndex=s,e.splice(s,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var o=a(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var s=t(o[i]);e[s].references--}for(var c=a(n,r),p=0;p<o.length;p++){var d=t(o[p]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=c}}},569:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},219:(n,e,t)=>{n.exports=t.p+"d7ae3de766c4194a8698.ttf"},318:(n,e,t)=>{n.exports=t.p+"82a775783a33ce6f911d.ttf"},444:(n,e,t)=>{n.exports=t.p+"5bd7d5208f7a9c18fe22.ttf"}},e={};function t(a){var r=e[a];if(void 0!==r)return r.exports;var o=e[a]={id:a,exports:{}};return n[a](o,o.exports,t),o.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var a=e.getElementsByTagName("script");a.length&&(n=a[a.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{function n({type:n,className:e,idName:t,innerText:a}){const r=document.createElement(n);return e&&r.classList.add(e),t&&r.setAttribute("id",t),a&&(r.innerHTML=a),r}function e(...n){const e=document.createElement("ul");for(let[t,a]of n){const n=document.createElement("li");n.innerHTML=t,n.setAttribute("id",a),e.appendChild(n)}return e}function a(e,t,a){const r=n({type:"div",className:e,idName:t}),o=new Image(100,11);return o.src=a,r.appendChild(o),r}function r(e,t){const a=n({type:"div",className:"dish"}),r=n({type:"p",className:"title",innerText:e});a.append(r);for(let e of t){const t=n({type:"p",className:"menu-item",innerText:e});a.append(t)}return a}function o(n){for(;n.firstChild;)n.removeChild(n.firstChild)}const i=t.p+"3ab60f9b3d55a8cc227f.ico",s=t.p+"32e6c3f6a7ca3ea80c38.png",c=t.p+"1d9f5c65e97ef84b9e94.jpeg",p=t.p+"b072b7ae928d75c11b6d.jpeg",d=t.p+"44bad65f5b68ba3535db.jpeg";var l=t(379),m=t.n(l),u=t(795),f=t.n(u),h=t(569),v=t.n(h),g=t(565),y=t.n(g),x=t(216),b=t.n(x),w=t(589),N=t.n(w),E=t(522),T={};T.styleTagTransform=N(),T.setAttributes=y(),T.insert=v().bind(null,"head"),T.domAPI=f(),T.insertStyleElement=b(),m()(E.Z,T),E.Z&&E.Z.locals&&E.Z.locals,function(){const t=document.getElementById("content"),l=document.createElement("link");l.rel="icon",l.href=i,document.head.appendChild(l),(()=>{const e=n({type:"div",className:"header"}),r=n({type:"p"});r.innerText="Le Festin Restaurant";const o=a("","image-logo",s);e.append(o,r),t.appendChild(e)})(),(()=>{const a=n({type:"div",className:"nav"}),r=e(["Home","nav-home"],["Menu","nav-menu"],["Contact","nav-contact"]);a.appendChild(r),t.appendChild(a)})(),(()=>{const e=n({type:"div",className:"main"}),r=a("image-restaurant","",c),o=a("image-restaurant","",p),i=n({type:"div",className:"ardoise",idName:"ardoise"}),s=n({type:"div",className:"",idName:"container"});e.append(r,o,i,s),t.append(e)})();const m=(t,i)=>{switch(o(t),i){case"home":const o=n({type:"div",className:"home"}),i=n({type:"p",className:"description",innerText:"Brought to you by the world reknown chef from the Disney movie 'Ratatouille'"});o.append(i);const s=n({type:"div",idName:"hours"}),c=n({type:"p",innerText:"Hours:"}),p=e(['<span class="day">Monday:</span><span class="hours">Closed</span>',""],['<span class="day">Tuesday:</span><span class="hours">Closed</span>',""],['<span class="day">Wednesday:</span><span class="hours">7pm -10pm</span>',""],['<span class="day">Thursday:</span><span class="hours">7pm -10pm</span>',""],['<span class="day">Friday:</span><span class="hours">8pm -11pm</span>',""],['<span class="day">Saturday:</span><span class="hours">8pm -11pm</span>',""]);s.append(c,p),o.append(s),t.append(o);break;case"menu":const l=n({type:"div",className:"menu",innerText:"Menu"}),m=r("Appetizers",["Potato Chips"]),u=r("Mains",["Osso Bucco","Spaghetti Carbonara"]),f=r("Desserts",["Crème brûlée","Macarons"]);l.append(m,u,f),t.append(l);break;case"contact":const h=n({type:"div",className:"contact"}),v=n({type:"p",className:"reservations",innerText:"For reservations:"}),g=n({type:"address",innerText:"1234 rue des Champs Elysees<br>Paris, France<br>Tel: 01 23 45 67 89"}),y=a("image-address","",d);h.append(v,g,y),t.append(h)}return function(){const n=document.getElementById("container"),e=document.getElementById("container-content");document.getElementById("ardoise").classList.add("activate"),n.classList.add("activate"),e.classList.add("activate")}(),t};(()=>{const e=document.getElementById("container");let t=n({type:"div",className:"container-content",idName:"container-content"});o(t),document.getElementById("nav-home").addEventListener("click",(()=>m(t,"home"))),document.getElementById("nav-menu").addEventListener("click",(()=>m(t,"menu"))),document.getElementById("nav-contact").addEventListener("click",(()=>m(t,"contact"))),e.append(t)})()}()})()})();