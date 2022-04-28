var error=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e,n,r){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function a(t,e,n,r){return t[1]&&r?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](r(e))):n.ctx}function l(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function h(){return f(" ")}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t,e,n){t.classList[n?"add":"remove"](e)}let m;function b(t){m=t}const v=[],y=[],$=[],_=[],E=Promise.resolve();let x=!1;function w(t){$.push(t)}const A=new Set;let C=0;function S(){const t=m;do{for(;C<v.length;){const t=v[C];C++,b(t),T(t.$$)}for(b(null),v.length=0,C=0;y.length;)y.pop()();for(let t=0;t<$.length;t+=1){const e=$[t];A.has(e)||(A.add(e),e())}$.length=0}while(v.length);for(;_.length;)_.pop()();x=!1,A.clear(),b(t)}function T(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(w)}}const k=new Set;function N(t,e){t&&t.i&&(k.delete(t),t.i(e))}function O(t,e,n,r){if(t&&t.o){if(k.has(t))return;k.add(t),undefined.c.push((()=>{k.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function L(t){t&&t.c()}function j(t,n,s,i){const{fragment:a,on_mount:l,on_destroy:c,after_update:u}=t.$$;a&&a.m(n,s),i||w((()=>{const n=l.map(e).filter(o);c?c.push(...n):r(n),t.$$.on_mount=[]})),u.forEach(w)}function D(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function U(t,e){-1===t.$$.dirty[0]&&(v.push(t),x||(x=!0,E.then(S)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function q(e,o,s,i,a,l,c,d=[-1]){const f=m;b(e);const h=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(f?f.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:o.target||f.$$.root};c&&c(h.root);let p=!1;if(h.ctx=s?s(e,o.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return h.ctx&&a(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),p&&U(e,t)),n})):[],h.update(),p=!0,r(h.before_update),h.fragment=!!i&&i(h.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);h.fragment&&h.fragment.l(t),t.forEach(u)}else h.fragment&&h.fragment.c();o.intro&&N(e.$$.fragment),j(e,o.target,o.anchor,o.customElement),S()}b(f)}class M{$destroy(){D(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var z,I={exports:{}};function P(){return z||(z=1,I.exports=function(){const t=new Map,e={set(e,n,r){t.has(e)||t.set(e,new Map);const o=t.get(e);o.has(n)||0===o.size?o.set(n,r):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(o.keys())[0]}.`)},get:(e,n)=>t.has(e)&&t.get(e).get(n)||null,remove(e,n){if(!t.has(e))return;const r=t.get(e);r.delete(n),0===r.size&&t.delete(e)}};return e}()),I.exports}var Y,H={exports:{}};
/*!
      * Bootstrap event-handler.js v5.1.3 (https://getbootstrap.com/)
      * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
      * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
      */function B(){return Y||(Y=1,H.exports=function(){const t=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},e=/[^.]*(?=\..*)\.|.*/,n=/\..*/,r=/::\d+$/,o={};let s=1;const i={mouseenter:"mouseover",mouseleave:"mouseout"},a=/^(mouseenter|mouseleave)/i,l=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function c(t,e){return e&&`${e}::${s++}`||t.uidEvent||s++}function u(t){const e=c(t);return t.uidEvent=e,o[e]=o[e]||{},o[e]}function d(t,e){return function n(r){return r.delegateTarget=t,n.oneOff&&y.off(t,r.type,e),e.apply(t,[r])}}function f(t,e,n){return function r(o){const s=t.querySelectorAll(e);for(let{target:i}=o;i&&i!==this;i=i.parentNode)for(let a=s.length;a--;)if(s[a]===i)return o.delegateTarget=i,r.oneOff&&y.off(t,o.type,e,n),n.apply(i,[o]);return null}}function h(t,e,n=null){const r=Object.keys(t);for(let o=0,s=r.length;o<s;o++){const s=t[r[o]];if(s.originalHandler===e&&s.delegationSelector===n)return s}return null}function p(t,e,n){const r="string"==typeof e,o=r?n:e;let s=v(t);return l.has(s)||(s=t),[r,o,s]}function g(t,n,r,o,s){if("string"!=typeof n||!t)return;if(r||(r=o,o=null),a.test(n)){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};o?o=t(o):r=t(r)}const[i,l,g]=p(n,r,o),m=u(t),b=m[g]||(m[g]={}),v=h(b,l,i?r:null);if(v)return void(v.oneOff=v.oneOff&&s);const y=c(l,n.replace(e,"")),$=i?f(t,r,o):d(t,r);$.delegationSelector=i?r:null,$.originalHandler=l,$.oneOff=s,$.uidEvent=y,b[y]=$,t.addEventListener(g,$,i)}function m(t,e,n,r,o){const s=h(e[n],r,o);s&&(t.removeEventListener(n,s,Boolean(o)),delete e[n][s.uidEvent])}function b(t,e,n,r){const o=e[n]||{};Object.keys(o).forEach((s=>{if(s.includes(r)){const r=o[s];m(t,e,n,r.originalHandler,r.delegationSelector)}}))}function v(t){return t=t.replace(n,""),i[t]||t}const y={on(t,e,n,r){g(t,e,n,r,!1)},one(t,e,n,r){g(t,e,n,r,!0)},off(t,e,n,o){if("string"!=typeof e||!t)return;const[s,i,a]=p(e,n,o),l=a!==e,c=u(t),d=e.startsWith(".");if(void 0!==i){if(!c||!c[a])return;return void m(t,c,a,i,s?n:null)}d&&Object.keys(c).forEach((n=>{b(t,c,n,e.slice(1))}));const f=c[a]||{};Object.keys(f).forEach((n=>{const o=n.replace(r,"");if(!l||e.includes(o)){const e=f[n];m(t,c,a,e.originalHandler,e.delegationSelector)}}))},trigger(e,n,r){if("string"!=typeof n||!e)return null;const o=t(),s=v(n),i=n!==s,a=l.has(s);let c,u=!0,d=!0,f=!1,h=null;return i&&o&&(c=o.Event(n,r),o(e).trigger(c),u=!c.isPropagationStopped(),d=!c.isImmediatePropagationStopped(),f=c.isDefaultPrevented()),a?(h=document.createEvent("HTMLEvents"),h.initEvent(s,u,!0)):h=new CustomEvent(n,{bubbles:u,cancelable:!0}),void 0!==r&&Object.keys(r).forEach((t=>{Object.defineProperty(h,t,{get:()=>r[t]})})),f&&h.preventDefault(),d&&e.dispatchEvent(h),h.defaultPrevented&&void 0!==c&&c.preventDefault(),h}};return y}()),H.exports}var K,R={exports:{}};
/*!
      * Bootstrap manipulator.js v5.1.3 (https://getbootstrap.com/)
      * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
      * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
      */function F(){return K||(K=1,R.exports=function(){function t(t){return"true"===t||"false"!==t&&(t===Number(t).toString()?Number(t):""===t||"null"===t?null:t)}function e(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}const n={setDataAttribute(t,n,r){t.setAttribute(`data-bs-${e(n)}`,r)},removeDataAttribute(t,n){t.removeAttribute(`data-bs-${e(n)}`)},getDataAttributes(e){if(!e)return{};const n={};return Object.keys(e.dataset).filter((t=>t.startsWith("bs"))).forEach((r=>{let o=r.replace(/^bs/,"");o=o.charAt(0).toLowerCase()+o.slice(1,o.length),n[o]=t(e.dataset[r])})),n},getDataAttribute:(n,r)=>t(n.getAttribute(`data-bs-${e(r)}`)),offset(t){const e=t.getBoundingClientRect();return{top:e.top+window.pageYOffset,left:e.left+window.pageXOffset}},position:t=>({top:t.offsetTop,left:t.offsetLeft})};return n}()),R.exports}var Q,V={exports:{}};
/*!
      * Bootstrap selector-engine.js v5.1.3 (https://getbootstrap.com/)
      * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
      * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
      */function W(){return Q||(Q=1,V.exports=function(){const t=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),e=e=>!(!t(e)||0===e.getClientRects().length)&&"visible"===getComputedStyle(e).getPropertyValue("visibility"),n=t=>!t||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")),r=3,o={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter((t=>t.matches(e))),parents(t,e){const n=[];let o=t.parentNode;for(;o&&o.nodeType===Node.ELEMENT_NODE&&o.nodeType!==r;)o.matches(e)&&n.push(o),o=o.parentNode;return n},prev(t,e){let n=t.previousElementSibling;for(;n;){if(n.matches(e))return[n];n=n.previousElementSibling}return[]},next(t,e){let n=t.nextElementSibling;for(;n;){if(n.matches(e))return[n];n=n.nextElementSibling}return[]},focusableChildren(t){const r=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(", ");return this.find(r,t).filter((t=>!n(t)&&e(t)))}};return o}()),V.exports}var J,X={exports:{}};
/*!
      * Bootstrap base-component.js v5.1.3 (https://getbootstrap.com/)
      * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
      * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
      */function Z(){return J||(J=1,X.exports=function(t,e){const n=t=>t&&"object"==typeof t&&"default"in t?t:{default:t},r=n(t),o=n(e),s=1e3,i="transitionend",a=t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:n}=window.getComputedStyle(t);const r=Number.parseFloat(e),o=Number.parseFloat(n);return r||o?(e=e.split(",")[0],n=n.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(n))*s):0},l=t=>{t.dispatchEvent(new Event(i))},c=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),u=t=>c(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(t):null,d=t=>{"function"==typeof t&&t()},f=(t,e,n=!0)=>{if(!n)return void d(t);const r=5,o=a(e)+r;let s=!1;const c=({target:n})=>{n===e&&(s=!0,e.removeEventListener(i,c),d(t))};e.addEventListener(i,c),setTimeout((()=>{s||l(e)}),o)},h="5.1.3";class p{constructor(t){(t=u(t))&&(this._element=t,r.default.set(this._element,this.constructor.DATA_KEY,this))}dispose(){r.default.remove(this._element,this.constructor.DATA_KEY),o.default.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach((t=>{this[t]=null}))}_queueCallback(t,e,n=!0){f(t,e,n)}static getInstance(t){return r.default.get(u(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return h}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}}return p}(P(),B())),X.exports}
/*!
      * Bootstrap collapse.js v5.1.3 (https://getbootstrap.com/)
      * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
      * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
      */(function(t,e,n,r,o){const s=t=>t&&"object"==typeof t&&"default"in t?t:{default:t},i=s(t),a=s(e),l=s(n),c=s(r),u=s(o),d=t=>null==t?`${t}`:{}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),f=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let n=t.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),e=n&&"#"!==n?n.trim():null}return e},h=t=>{const e=f(t);return e&&document.querySelector(e)?e:null},p=t=>{const e=f(t);return e?document.querySelector(e):null},g=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),m=t=>g(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(t):null,b=(t,e,n)=>{Object.keys(n).forEach((r=>{const o=n[r],s=e[r],i=s&&g(s)?"element":d(s);if(!new RegExp(o).test(i))throw new TypeError(`${t.toUpperCase()}: Option "${r}" provided type "${i}" but expected type "${o}".`)}))},v=t=>{t.offsetHeight},y=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},$=[],_=t=>{"loading"===document.readyState?($.length||document.addEventListener("DOMContentLoaded",(()=>{$.forEach((t=>t()))})),$.push(t)):t()},E=t=>{_((()=>{const e=y();if(e){const n=t.NAME,r=e.fn[n];e.fn[n]=t.jQueryInterface,e.fn[n].Constructor=t,e.fn[n].noConflict=()=>(e.fn[n]=r,t.jQueryInterface)}}))},x="collapse",w="bs.collapse",A=`.${w}`,C={toggle:!0,parent:null},S={toggle:"boolean",parent:"(null|element)"},T=`show${A}`,k=`shown${A}`,N=`hide${A}`,O=`hidden${A}`,L=`click${A}.data-api`,j="show",D="collapse",U="collapsing",q="collapsed",M=`:scope .${D} .${D}`,z="collapse-horizontal",I="width",P="height",Y=".collapse.show, .collapse.collapsing",H='[data-bs-toggle="collapse"]';class B extends u.default{constructor(t,e){super(t),this._isTransitioning=!1,this._config=this._getConfig(e),this._triggerArray=[];const n=c.default.find(H);for(let t=0,e=n.length;t<e;t++){const e=n[t],r=h(e),o=c.default.find(r).filter((t=>t===this._element));null!==r&&o.length&&(this._selector=r,this._triggerArray.push(e))}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return C}static get NAME(){return x}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t,e=[];if(this._config.parent){const t=c.default.find(M,this._config.parent);e=c.default.find(Y,this._config.parent).filter((e=>!t.includes(e)))}const n=c.default.findOne(this._selector);if(e.length){const r=e.find((t=>n!==t));if(t=r?B.getInstance(r):null,t&&t._isTransitioning)return}if(a.default.trigger(this._element,T).defaultPrevented)return;e.forEach((e=>{n!==e&&B.getOrCreateInstance(e,{toggle:!1}).hide(),t||i.default.set(e,w,null)}));const r=this._getDimension();this._element.classList.remove(D),this._element.classList.add(U),this._element.style[r]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const o=()=>{this._isTransitioning=!1,this._element.classList.remove(U),this._element.classList.add(D,j),this._element.style[r]="",a.default.trigger(this._element,k)},s=`scroll${r[0].toUpperCase()+r.slice(1)}`;this._queueCallback(o,this._element,!0),this._element.style[r]=`${this._element[s]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(a.default.trigger(this._element,N).defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,v(this._element),this._element.classList.add(U),this._element.classList.remove(D,j);const e=this._triggerArray.length;for(let t=0;t<e;t++){const e=this._triggerArray[t],n=p(e);n&&!this._isShown(n)&&this._addAriaAndCollapsedClass([e],!1)}this._isTransitioning=!0;const n=()=>{this._isTransitioning=!1,this._element.classList.remove(U),this._element.classList.add(D),a.default.trigger(this._element,O)};this._element.style[t]="",this._queueCallback(n,this._element,!0)}_isShown(t=this._element){return t.classList.contains(j)}_getConfig(t){return(t={...C,...l.default.getDataAttributes(this._element),...t}).toggle=Boolean(t.toggle),t.parent=m(t.parent),b(x,t,S),t}_getDimension(){return this._element.classList.contains(z)?I:P}_initializeChildren(){if(!this._config.parent)return;const t=c.default.find(M,this._config.parent);c.default.find(H,this._config.parent).filter((e=>!t.includes(e))).forEach((t=>{const e=p(t);e&&this._addAriaAndCollapsedClass([t],this._isShown(e))}))}_addAriaAndCollapsedClass(t,e){t.length&&t.forEach((t=>{e?t.classList.remove(q):t.classList.add(q),t.setAttribute("aria-expanded",e)}))}static jQueryInterface(t){return this.each((function(){const e={};"string"==typeof t&&/show|hide/.test(t)&&(e.toggle=!1);const n=B.getOrCreateInstance(this,e);if("string"==typeof t){if(void 0===n[t])throw new TypeError(`No method named "${t}"`);n[t]()}}))}}a.default.on(document,L,H,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();const e=h(this);c.default.find(e).forEach((t=>{B.getOrCreateInstance(t,{toggle:!1}).toggle()}))})),E(B)})(P(),B(),F(),W(),Z());const G=t=>{let e=document.querySelector(`input#${t}[type=hidden]`);if(!e)return null;let n=e.value;return e.remove(),n},tt=t=>{let e=document.querySelector(`input#${t}[type=hidden]`);if(!e)return!1;let n=e.value;return e.remove(),"true"==n.toLowerCase()},et=(nt="urls",JSON.parse(G(nt)));var nt;const rt=[];var ot;const st=G("theme-key"),it=document.head.querySelector(`#${st}`),at=function(e,n=t){let r;const o=new Set;function i(t){if(s(e,t)&&(e=t,r)){const t=!rt.length;for(const t of o)t[1](),rt.push(t,e);if(t){for(let t=0;t<rt.length;t+=2)rt[t][0](rt[t+1]);rt.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(s,a=t){const l=[s,a];return o.add(l),1===o.size&&(r=n(i)||t),s(e),()=>{o.delete(l),0===o.size&&(r(),r=null)}}}}("dark"==(null===(ot=null==it?void 0:it.dataset)||void 0===ot?void 0:ot.theme));function lt(e){let n,r,o;return{c(){n=d("a"),r=d("i"),o=f("\r\n                            Login"),p(r,"class","bi-person"),p(n,"class","btn btn-sm btn-primary"),p(n,"href",et.loginUrl)},m(t,e){c(t,n,e),l(n,r),l(n,o)},p:t,d(t){t&&u(n)}}}function ct(e){let n,r,o,s,i;return{c(){n=d("pre"),n.textContent=`\n                            ${e[1].email}\n                        `,r=h(),o=d("a"),s=d("i"),i=f("\r\n                            Logout"),p(n,"class","user-info text-nowrap svelte-1trrl30"),p(s,"class","bi bi-box-arrow-right"),p(o,"class","btn btn-primary"),p(o,"href",et.logoutUrl)},m(t,e){c(t,n,e),c(t,r,e),c(t,o,e),l(o,s),l(o,i)},p:t,d(t){t&&u(n),t&&u(r),t&&u(o)}}}function ut(e){let n,r,o,s,i,a,m,b,v,y,$,_,E,x,w,A,C,S,T,k,N,O,L,j,D,U,q,M,z,I,P,Y,H,B,K,R,F,Q;let V=function(t,e){return t[1].isSigned?ct:lt}(e),W=V(e);return{c(){n=h(),r=d("header"),o=d("nav"),s=d("div"),i=d("a"),a=f("RazorSvelte"),m=h(),b=d("button"),b.innerHTML='<i class="bi-list"></i>',v=h(),y=d("div"),$=d("ul"),_=d("li"),E=d("a"),x=f("Home"),w=h(),A=d("li"),C=d("a"),S=f("Offcanvas Navigation"),T=h(),k=d("li"),N=d("a"),O=f("Privacy"),L=h(),j=d("li"),D=d("a"),U=f("Authorized Access"),q=h(),M=d("li"),z=d("a"),I=f("Spa Example"),P=h(),Y=d("div"),W.c(),H=h(),B=d("button"),K=d("i"),p(i,"class","navbar-brand svelte-1trrl30"),p(i,"href",et.indexUrl),p(b,"class","navbar-toggler"),p(b,"type","button"),p(b,"data-bs-toggle","collapse"),p(b,"data-bs-target","#navbarCollapse"),p(b,"aria-controls","navbarCollapse"),p(b,"aria-expanded","false"),p(b,"aria-label","Toggle navigation"),p(E,"class","nav-link "),p(E,"href",et.indexUrl),g(E,"active",document.location.pathname==et.indexUrl),p(_,"class","nav-item py-0"),p(C,"class","nav-link"),p(C,"href",et.offcanvasNavUrl),g(C,"active",document.location.pathname==et.offcanvasNavUrl),p(A,"class","nav-item py-0"),p(N,"class","nav-link"),p(N,"href",et.privacyUrl),g(N,"active",document.location.pathname==et.privacyUrl),p(k,"class","nav-item py-0"),p(D,"class","nav-link"),p(D,"href",et.authorizedUrl),g(D,"active",document.location.pathname==et.authorizedUrl),p(j,"class","nav-item py-0"),p(z,"class","nav-link"),p(z,"href",et.spaUrl),g(z,"active",document.location.pathname==et.spaUrl),p(M,"class","nav-item py-0"),p($,"class","navbar-nav me-auto"),p(K,"class",R=e[0]?"bi-lightbulb":"bi-lightbulb-off"),p(B,"class","btn btn-sm btn-primary mx-1"),p(Y,"class","d-flex float-end"),p(y,"class","collapse navbar-collapse svelte-1trrl30"),p(y,"id","navbarCollapse"),p(s,"class","container-fluid"),p(o,"class","navbar navbar-expand-md navbar-dark fixed-top bg-primary py-0 py-md-0 svelte-1trrl30")},m(t,u){var d,f,h,p;c(t,n,u),c(t,r,u),l(r,o),l(o,s),l(s,i),l(i,a),l(s,m),l(s,b),l(s,v),l(s,y),l(y,$),l($,_),l(_,E),l(E,x),l($,w),l($,A),l(A,C),l(C,S),l($,T),l($,k),l(k,N),l(N,O),l($,L),l($,j),l(j,D),l(D,U),l($,q),l($,M),l(M,z),l(z,I),l(y,P),l(y,Y),W.m(Y,null),l(Y,H),l(Y,B),l(B,K),F||(d=B,f="click",h=e[2],d.addEventListener(f,h,p),Q=()=>d.removeEventListener(f,h,p),F=!0)},p(t,[e]){0&e&&g(E,"active",document.location.pathname==et.indexUrl),0&e&&g(C,"active",document.location.pathname==et.offcanvasNavUrl),0&e&&g(N,"active",document.location.pathname==et.privacyUrl),0&e&&g(D,"active",document.location.pathname==et.authorizedUrl),0&e&&g(z,"active",document.location.pathname==et.spaUrl),W.p(t,e),1&e&&R!==(R=t[0]?"bi-lightbulb":"bi-lightbulb-off")&&p(K,"class",R)},i:t,o:t,d(t){t&&u(n),t&&u(r),W.d(),F=!1,Q()}}}function dt(t,e,n){let r;i(t,at,(t=>n(0,r=t)));const o={isSigned:tt("isSigned"),email:G("email")};return[r,o,()=>{return t=r=!r,e=r,at.set(e),t;var t,e}]}it&&at.subscribe((t=>{let e=new Date;e.setFullYear(e.getFullYear()+10),t?(it.dataset.theme="dark",it.href=it.href.replace("light","dark"),document.cookie=`${st}=dark; expires=${e.toUTCString()}`):(it.dataset.theme="light",it.href=it.href.replace("dark","light"),document.cookie=`${st}=light; expires=${e.toUTCString()}`)}));class ft extends M{constructor(t){super(),q(this,t,dt,ut,s,{})}}function ht(e){let n,r,o,s,i,a,g;return{c(){n=h(),r=d("footer"),o=d("div"),s=d("span"),i=f("© 2021 - RazorSvelte - "),a=d("a"),g=f("Privacy"),p(a,"href",et.privacyUrl),p(s,"class","text-muted"),p(o,"class","container py-5"),p(r,"class","footer mt-auto py-3 bg-primary bg-opacity-10")},m(t,e){c(t,n,e),c(t,r,e),l(r,o),l(o,s),l(s,i),l(s,a),l(a,g)},p:t,i:t,o:t,d(t){t&&u(n),t&&u(r)}}}class pt extends M{constructor(t){super(),q(this,t,null,ht,s,{})}}function gt(t){let e,n,r,o,s,i;e=new ft({});const l=t[1].default,f=function(t,e,n,r){if(t){const o=a(t,e,n,r);return t[0](o)}}(l,t,t[0],null);return s=new pt({}),{c(){L(e.$$.fragment),n=h(),r=d("main"),f&&f.c(),o=h(),L(s.$$.fragment)},m(t,a){j(e,t,a),c(t,n,a),c(t,r,a),f&&f.m(r,null),c(t,o,a),j(s,t,a),i=!0},p(t,[e]){f&&f.p&&(!i||1&e)&&function(t,e,n,r,o,s){if(o){const i=a(e,n,r,s);t.p(i,o)}}(f,l,t,t[0],i?function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(l,t[0],e,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[0]),null)},i(t){i||(N(e.$$.fragment,t),N(f,t),N(s.$$.fragment,t),i=!0)},o(t){O(e.$$.fragment,t),O(f,t),O(s.$$.fragment,t),i=!1},d(t){D(e,t),t&&u(n),t&&u(r),f&&f.d(t),t&&u(o),D(s,t)}}}function mt(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class bt extends M{constructor(t){super(),q(this,t,mt,gt,s,{})}}function vt(e){let n,r,o,s,i,a=e[0]&&function(e){let n,r,o;return{c(){n=d("p"),n.textContent="Here is what we know:",r=h(),o=d("p"),o.textContent=`${e[0]}`,p(n,"id","error-label"),p(o,"class","text-danger")},m(t,e){c(t,n,e),c(t,r,e),c(t,o,e)},p:t,d(t){t&&u(n),t&&u(r),t&&u(o)}}}(e);return{c(){n=d("div"),r=d("h1"),r.textContent="Error.",o=h(),s=d("h2"),s.textContent="An error occurred while processing your request.",i=h(),a&&a.c(),p(r,"class","text-danger"),p(s,"class","text-danger"),p(n,"class","container")},m(t,e){c(t,n,e),l(n,r),l(n,o),l(n,s),l(n,i),a&&a.m(n,null)},p(t,e){t[0]&&a.p(t,e)},d(t){t&&u(n),a&&a.d()}}}function yt(t){let e,n;return e=new bt({props:{$$slots:{default:[vt]},$$scope:{ctx:t}}}),{c(){L(e.$$.fragment)},m(t,r){j(e,t,r),n=!0},p(t,[n]){const r={};4&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){n||(N(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){D(e,t)}}}function $t(t){const e=G("error-key");let n=sessionStorage.getItem(e);return n&&sessionStorage.removeItem(e),[n]}return new class extends M{constructor(t){super(),q(this,t,$t,yt,s,{})}}({target:document.body})}();
