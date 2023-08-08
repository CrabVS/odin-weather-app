(()=>{"use strict";var n={74:(n,t,e)=>{e.d(t,{Z:()=>l});var o=e(81),r=e.n(o),i=e(645),a=e.n(i)()(r());a.push([n.id,"",""]);const l=a},858:(n,t,e)=>{e.d(t,{Z:()=>l});var o=e(81),r=e.n(o),i=e(645),a=e.n(i)()(r());a.push([n.id,'.lds-roller {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px;\n  }\n  .lds-roller div {\n    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n    transform-origin: 40px 40px;\n  }\n  .lds-roller div:after {\n    content: " ";\n    display: block;\n    position: absolute;\n    width: 7px;\n    height: 7px;\n    border-radius: 50%;\n    background: #fff;\n    margin: -4px 0 0 -4px;\n  }\n  .lds-roller div:nth-child(1) {\n    animation-delay: -0.036s;\n  }\n  .lds-roller div:nth-child(1):after {\n    top: 63px;\n    left: 63px;\n  }\n  .lds-roller div:nth-child(2) {\n    animation-delay: -0.072s;\n  }\n  .lds-roller div:nth-child(2):after {\n    top: 68px;\n    left: 56px;\n  }\n  .lds-roller div:nth-child(3) {\n    animation-delay: -0.108s;\n  }\n  .lds-roller div:nth-child(3):after {\n    top: 71px;\n    left: 48px;\n  }\n  .lds-roller div:nth-child(4) {\n    animation-delay: -0.144s;\n  }\n  .lds-roller div:nth-child(4):after {\n    top: 72px;\n    left: 40px;\n  }\n  .lds-roller div:nth-child(5) {\n    animation-delay: -0.18s;\n  }\n  .lds-roller div:nth-child(5):after {\n    top: 71px;\n    left: 32px;\n  }\n  .lds-roller div:nth-child(6) {\n    animation-delay: -0.216s;\n  }\n  .lds-roller div:nth-child(6):after {\n    top: 68px;\n    left: 24px;\n  }\n  .lds-roller div:nth-child(7) {\n    animation-delay: -0.252s;\n  }\n  .lds-roller div:nth-child(7):after {\n    top: 63px;\n    left: 17px;\n  }\n  .lds-roller div:nth-child(8) {\n    animation-delay: -0.288s;\n  }\n  .lds-roller div:nth-child(8):after {\n    top: 56px;\n    left: 12px;\n  }\n  @keyframes lds-roller {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }  ',""]);const l=a},917:(n,t,e)=>{e.d(t,{Z:()=>l});var o=e(81),r=e.n(o),i=e(645),a=e.n(i)()(r());a.push([n.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const l=a},426:(n,t,e)=>{e.d(t,{Z:()=>l});var o=e(81),r=e.n(o),i=e(645),a=e.n(i)()(r());a.push([n.id,'/*\nIMG Credit\nhttps://unsplash.com/@worldsbetweenlines\n\n*/\n\n* {\n    box-sizing: border-box;\n}\n\nbody {\n    background-image: url("https://images.unsplash.com/photo-1679344424193-b862cf2f5630?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80");\n    background-color: #555;\n    height: 100vh; \n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\nh3 {\n    font-size: 2.4rem;\n}\n\n.btn {\n    cursor: pointer;\n    min-width: 80px;\n    padding: 4px 0;\n    border: 1px solid #fff;\n    background-color: transparent;\n    color: #fff;\n}\n\n.btn:hover {\n    background-color: rgba(255, 255, 255, 0.1);\n}\n\n.btn:active {\n    transform: scale(0.98);\n}\n\n.container {\n    background-color: rgba(0, 0, 0, 0.75);\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n}\n\n#top-container {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    padding: 30px 0;\n}\n\n#location-form {\n    margin-bottom: 20px;\n}\n\n#location-search {\n    padding: 10px 16px;\n    outline: none;\n    border: none;\n    background-color: transparent;\n    border-bottom: 2px solid #fff;\n    font-size: 1.1rem;\n    color: #fff;\n    letter-spacing: 1px;\n}\n\n#data-button-group {\n    min-width: 260px;\n    display: flex;\n    justify-content: space-evenly;\n}\n\n#main-container {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    height: 100%;\n    color: #fff;\n    max-width: 800px;\n    width: 100%;\n    margin: 0 auto;\n    padding-bottom: 60px;\n    position: relative;\n}\n\n.info-sub-block {\n    display: flex;\n    align-items: center;\n    height: 100px;\n}\n\n.info-sub-block img {\n    margin-right: 10px;\n}\n\n#loader {\n    position: absolute;\n    display: none;\n}\n\n#loader.show-loader {\n    display: initial;\n}\n\n#error-msg {\n    position: absolute;\n}\n',""]);const l=a},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",o=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),o&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),o&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var l=0;l<this.length;l++){var c=this[l][0];null!=c&&(a[c]=!0)}for(var d=0;d<n.length;d++){var s=[].concat(n[d]);o&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),e&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=e):s[2]=e),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),t.push(s))}},t}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var t=[];function e(n){for(var e=-1,o=0;o<t.length;o++)if(t[o].identifier===n){e=o;break}return e}function o(n,o){for(var i={},a=[],l=0;l<n.length;l++){var c=n[l],d=o.base?c[0]+o.base:c[0],s=i[d]||0,u="".concat(d," ").concat(s);i[d]=s+1;var p=e(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=r(f,o);o.byIndex=l,t.splice(l,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function r(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var l=e(i[a]);t[l].references--}for(var c=o(n,r),d=0;d<i.length;d++){var s=e(i[d]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}i=c}}},569:n=>{var t={};n.exports=function(n,e){var o=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,r&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return n[o](i,i.exports,e),i.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0,(()=>{var n=e(379),t=e.n(n),o=e(795),r=e.n(o),i=e(569),a=e.n(i),l=e(565),c=e.n(l),d=e(216),s=e.n(d),u=e(589),p=e.n(u),f=e(74),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=s(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;var h=e(858),b={};b.styleTagTransform=p(),b.setAttributes=c(),b.insert=a().bind(null,"head"),b.domAPI=r(),b.insertStyleElement=s(),t()(h.Z,b),h.Z&&h.Z.locals&&h.Z.locals;let y,v="C",g="KpH";const x=function(){const n=document.querySelectorAll("#data-button-group .btn");n[0].disabled=!0,n[1].disabled=!0},w=function(){document.getElementById("location-search").disabled=!0,x()},k=function(){return{conditionIcon:document.getElementById("info-icon"),condition:document.getElementById("info-condition"),location:document.getElementById("info-location"),wind:document.getElementById("info-wind"),humidity:document.getElementById("info-humidity")}},C=function(){const n=k();n.conditionIcon.src="",n.conditionIcon.alt="",n.condition.textContent="",n.location.textContent="",n.wind.textContent="",n.humidity.textContent=""},I=async function(n){document.querySelector("#error-msg h3").textContent="",function(){const n=document.getElementById("loader");C(),n.classList.add("show-loader")}();try{const t=await async function(n){try{const t=await fetch(`https://api.weatherapi.com/v1/current.json?key=0d9d028bd7cf44ec9fe94100231107&q=${n}`);return async function(n){return{location:n.location.name,windKpH:n.current.wind_kph,windMpH:n.current.wind_mph,humidity:n.current.humidity,tempC:n.current.temp_c,tempF:n.current.temp_f,condition:n.current.condition}}(await t.json())}catch(n){return n}}(n);(function(n){const t=k();t.conditionIcon.src=n.condition.icon,t.conditionIcon.alt="weather icon",t.condition.textContent=n.condition.text,t.location.textContent=`${n.location} ${function(n){return n[`temp${v}`]}(n)}°${v}`,t.wind.textContent=`Wind: ${function(n){return n[`wind${g}`]}(n)} ${g}`,t.humidity.textContent=`Humidity: ${n.humidity}`})(t),y=t.location}catch(n){console.log(n),document.querySelector("#error-msg h3").textContent="An Error has Occurred"}document.getElementById("loader").classList.remove("show-loader"),function(){const n=document.getElementById("location-search"),t=document.querySelectorAll("#data-button-group .btn");n.disabled=!1,t[0].disabled=!1,t[1].disabled=!1}()};var E=e(917),Z={};Z.styleTagTransform=p(),Z.setAttributes=c(),Z.insert=a().bind(null,"head"),Z.domAPI=r(),Z.insertStyleElement=s(),t()(E.Z,Z),E.Z&&E.Z.locals&&E.Z.locals;var T=e(426),q={};q.styleTagTransform=p(),q.setAttributes=c(),q.insert=a().bind(null,"head"),q.domAPI=r(),q.insertStyleElement=s(),t()(T.Z,q),T.Z&&T.Z.locals&&T.Z.locals,function(){const n=document.getElementById("location-search");n.addEventListener("keydown",(t=>{if("Enter"===t.key){t.preventDefault(),w();const e=n.value;n.value="",I(e)}}))}(),function(){const n=document.querySelectorAll("#data-button-group .btn");n[0].addEventListener("click",(()=>{const t="C"===v?"F":"C";n[0].textContent=`To °${v}`,v=t,w(),I(y)})),n[1].addEventListener("click",(()=>{const t="KpH"===g?"MpH":"KpH";n[1].textContent=`To ${g}`,g=t,w(),I(y)}))}(),C(),x()})()})();