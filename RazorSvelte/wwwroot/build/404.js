var notfound=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function s(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e,n,r){return t[1]&&r?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](r(e))):n.ctx}function a(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function f(){return t=" ",document.createTextNode(t);var t}function d(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let g;function h(t){g=t}const p=[],m=[],b=[],v=[],y=Promise.resolve();let _=!1;function $(t){b.push(t)}let E=!1;const A=new Set;function x(){if(!E){E=!0;do{for(let t=0;t<p.length;t+=1){const e=p[t];h(e),w(e.$$)}for(h(null),p.length=0;m.length;)m.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];A.has(e)||(A.add(e),e())}b.length=0}while(p.length);for(;v.length;)v.pop()();_=!1,E=!1,A.clear()}}function w(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach($)}}const T=new Set;function L(t,e){t&&t.i&&(T.delete(t),t.i(e))}function C(t,e,n,r){if(t&&t.o){if(T.has(t))return;T.add(t),undefined.c.push((()=>{T.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function N(t){t&&t.c()}function k(t,n,o,i){const{fragment:a,on_mount:l,on_destroy:c,after_update:u}=t.$$;a&&a.m(n,o),i||$((()=>{const n=l.map(e).filter(s);c?c.push(...n):r(n),t.$$.on_mount=[]})),u.forEach($)}function O(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function S(t,e){-1===t.$$.dirty[0]&&(p.push(t),_||(_=!0,y.then(x)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function D(e,s,o,i,a,l,u,f=[-1]){const d=g;h(e);const p=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:s.context||[]),callbacks:n(),dirty:f,skip_bound:!1,root:s.target||d.$$.root};u&&u(p.root);let m=!1;if(p.ctx=o?o(e,s.props||{},((t,n,...r)=>{const s=r.length?r[0]:n;return p.ctx&&a(p.ctx[t],p.ctx[t]=s)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](s),m&&S(e,t)),n})):[],p.update(),m=!0,r(p.before_update),p.fragment=!!i&&i(p.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);p.fragment&&p.fragment.l(t),t.forEach(c)}else p.fragment&&p.fragment.c();s.intro&&L(e.$$.fragment),k(e,s.target,s.anchor,s.customElement),x()}h(d)}class j{$destroy(){O(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function M(e){let n;return{c(){n=u("a"),n.textContent="Login",d(n,"class","btn btn-outline-success"),d(n,"href","/login")},m(t,e){l(t,n,e)},p:t,d(t){t&&c(n)}}}function I(e){let n,r,s,o;return{c(){n=u("div"),r=u("div"),r.textContent=`${e[0].email}`,s=f(),o=u("a"),o.textContent="Logout",d(r,"class","nav-item p-2"),d(o,"class","btn btn-outline-success"),d(o,"href","/logout"),d(n,"class","navbar-nav")},m(t,e){l(t,n,e),a(n,r),a(n,s),a(n,o)},p:t,d(t){t&&c(n)}}}function P(e){let n,r,s,o,i,g,h,p,m,b,v,y;let _=function(t,e){return t[0].isSigned?I:M}(e)(e);return{c(){n=f(),r=u("header"),s=u("nav"),o=u("div"),i=u("a"),i.textContent="RazorSvelte",g=f(),h=u("button"),h.innerHTML='<span class="navbar-toggler-icon"></span>',p=f(),m=u("div"),b=u("ul"),b.innerHTML='<li class="nav-item"><a class="nav-link active" href="/">Home</a></li> \n                    <li class="nav-item"><a class="nav-link" href="/privacy">Privacy</a></li> \n                    <li class="nav-item"><a class="nav-link" href="/authorized">Authorized Access</a></li>',v=f(),y=u("div"),_.c(),d(i,"class","navbar-brand"),d(i,"href","/"),d(h,"class","navbar-toggler"),d(h,"type","button"),d(h,"data-bs-toggle","collapse"),d(h,"data-bs-target","#navbarCollapse"),d(h,"aria-controls","navbarCollapse"),d(h,"aria-expanded","false"),d(h,"aria-label","Toggle navigation"),d(b,"class","navbar-nav me-auto mb-2 mb-md-0"),d(y,"class","d-flex"),d(m,"class","collapse navbar-collapse"),d(m,"id","navbarCollapse"),d(o,"class","container-fluid"),d(s,"class","navbar navbar-expand-md navbar-light fixed-top bg-light")},m(t,e){l(t,n,e),l(t,r,e),a(r,s),a(s,o),a(o,i),a(o,g),a(o,h),a(o,p),a(o,m),a(m,b),a(m,v),a(m,y),_.m(y,null)},p(t,[e]){_.p(t,e)},i:t,o:t,d(t){t&&c(n),t&&c(r),_.d()}}}function q(t){return[(()=>{const t={},e=[];for(let n of document.getElementsByTagName("input"))"hidden"==n.type&&(n.id.startsWith("is")?t[n.id]="true"==n.value.toLowerCase():t[n.id]=n.value,e.push(n));for(let t of e)t.remove();return t})()]}class H extends j{constructor(t){super(),D(this,t,q,P,o,{})}}function z(e){let n,r;return{c(){n=f(),r=u("footer"),r.innerHTML='<div class="container py-5"><span class="text-muted">© 2021 - RazorSvelte - <a href="/privacy">Privacy</a></span></div>',d(r,"class","footer mt-auto py-3 bg-light")},m(t,e){l(t,n,e),l(t,r,e)},p:t,i:t,o:t,d(t){t&&c(n),t&&c(r)}}}class B extends j{constructor(t){super(),D(this,t,null,z,o,{})}}function Y(t){let e,n,r,s,o,a;e=new H({});const d=t[1].default,g=function(t,e,n,r){if(t){const s=i(t,e,n,r);return t[0](s)}}(d,t,t[0],null);return o=new B({}),{c(){N(e.$$.fragment),n=f(),r=u("main"),g&&g.c(),s=f(),N(o.$$.fragment)},m(t,i){k(e,t,i),l(t,n,i),l(t,r,i),g&&g.m(r,null),l(t,s,i),k(o,t,i),a=!0},p(t,[e]){g&&g.p&&(!a||1&e)&&function(t,e,n,r,s,o){if(s){const a=i(e,n,r,o);t.p(a,s)}}(g,d,t,t[0],a?function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(d,t[0],e,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[0]),null)},i(t){a||(L(e.$$.fragment,t),L(g,t),L(o.$$.fragment,t),a=!0)},o(t){C(e.$$.fragment,t),C(g,t),C(o.$$.fragment,t),a=!1},d(t){O(e,t),t&&c(n),t&&c(r),g&&g.d(t),t&&c(s),O(o,t)}}}function K(t,e,n){let{$$slots:r={},$$scope:s}=e;return t.$$set=t=>{"$$scope"in t&&n(0,s=t.$$scope)},[s,r]}class R extends j{constructor(t){super(),D(this,t,K,Y,o,{})}}function F(t){let e;return{c(){e=u("div"),e.innerHTML='<h1 class="text-danger">404 Not Found</h1> \n        \n        <p>This page doesn&#39;t seem to exists.</p>',d(e,"class","container text-center")},m(t,n){l(t,e,n)},d(t){t&&c(e)}}}function W(t){let e,n;return e=new R({props:{$$slots:{default:[F]},$$scope:{ctx:t}}}),{c(){N(e.$$.fragment)},m(t,r){k(e,t,r),n=!0},p(t,[n]){const r={};1&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){n||(L(e.$$.fragment,t),n=!0)},o(t){C(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}const Q={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter((t=>t.matches(e))),parents(t,e){const n=[];let r=t.parentNode;for(;r&&r.nodeType===Node.ELEMENT_NODE&&3!==r.nodeType;)r.matches(e)&&n.push(r),r=r.parentNode;return n},prev(t,e){let n=t.previousElementSibling;for(;n;){if(n.matches(e))return[n];n=n.previousElementSibling}return[]},next(t,e){let n=t.nextElementSibling;for(;n;){if(n.matches(e))return[n];n=n.nextElementSibling}return[]}},V="transitionend",U=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let n=t.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),e=n&&"#"!==n?n.trim():null}return e},Z=t=>{const e=U(t);return e&&document.querySelector(e)?e:null},G=t=>{const e=U(t);return e?document.querySelector(e):null},J=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),X=t=>J(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?Q.findOne(t):null,tt=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},et=[],nt=t=>{"function"==typeof t&&t()},rt=(t,e,n=!0)=>{if(!n)return void nt(t);const r=(t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:n}=window.getComputedStyle(t);const r=Number.parseFloat(e),s=Number.parseFloat(n);return r||s?(e=e.split(",")[0],n=n.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(n))):0})(e)+5;let s=!1;const o=({target:n})=>{n===e&&(s=!0,e.removeEventListener(V,o),nt(t))};e.addEventListener(V,o),setTimeout((()=>{s||(t=>{t.dispatchEvent(new Event(V))})(e)}),r)},st=new Map;var ot={set(t,e,n){st.has(t)||st.set(t,new Map);const r=st.get(t);r.has(e)||0===r.size?r.set(e,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`)},get:(t,e)=>st.has(t)&&st.get(t).get(e)||null,remove(t,e){if(!st.has(t))return;const n=st.get(t);n.delete(e),0===n.size&&st.delete(t)}};const it=/[^.]*(?=\..*)\.|.*/,at=/\..*/,lt=/::\d+$/,ct={};let ut=1;const ft={mouseenter:"mouseover",mouseleave:"mouseout"},dt=/^(mouseenter|mouseleave)/i,gt=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function ht(t,e){return e&&`${e}::${ut++}`||t.uidEvent||ut++}function pt(t){const e=ht(t);return t.uidEvent=e,ct[e]=ct[e]||{},ct[e]}function mt(t,e,n=null){const r=Object.keys(t);for(let s=0,o=r.length;s<o;s++){const o=t[r[s]];if(o.originalHandler===e&&o.delegationSelector===n)return o}return null}function bt(t,e,n){const r="string"==typeof e,s=r?n:e;let o=_t(t);return gt.has(o)||(o=t),[r,s,o]}function vt(t,e,n,r,s){if("string"!=typeof e||!t)return;if(n||(n=r,r=null),dt.test(e)){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};r?r=t(r):n=t(n)}const[o,i,a]=bt(e,n,r),l=pt(t),c=l[a]||(l[a]={}),u=mt(c,i,o?n:null);if(u)return void(u.oneOff=u.oneOff&&s);const f=ht(i,e.replace(it,"")),d=o?function(t,e,n){return function r(s){const o=t.querySelectorAll(e);for(let{target:i}=s;i&&i!==this;i=i.parentNode)for(let a=o.length;a--;)if(o[a]===i)return s.delegateTarget=i,r.oneOff&&$t.off(t,s.type,e,n),n.apply(i,[s]);return null}}(t,n,r):function(t,e){return function n(r){return r.delegateTarget=t,n.oneOff&&$t.off(t,r.type,e),e.apply(t,[r])}}(t,n);d.delegationSelector=o?n:null,d.originalHandler=i,d.oneOff=s,d.uidEvent=f,c[f]=d,t.addEventListener(a,d,o)}function yt(t,e,n,r,s){const o=mt(e[n],r,s);o&&(t.removeEventListener(n,o,Boolean(s)),delete e[n][o.uidEvent])}function _t(t){return t=t.replace(at,""),ft[t]||t}const $t={on(t,e,n,r){vt(t,e,n,r,!1)},one(t,e,n,r){vt(t,e,n,r,!0)},off(t,e,n,r){if("string"!=typeof e||!t)return;const[s,o,i]=bt(e,n,r),a=i!==e,l=pt(t),c=e.startsWith(".");if(void 0!==o){if(!l||!l[i])return;return void yt(t,l,i,o,s?n:null)}c&&Object.keys(l).forEach((n=>{!function(t,e,n,r){const s=e[n]||{};Object.keys(s).forEach((o=>{if(o.includes(r)){const r=s[o];yt(t,e,n,r.originalHandler,r.delegationSelector)}}))}(t,l,n,e.slice(1))}));const u=l[i]||{};Object.keys(u).forEach((n=>{const r=n.replace(lt,"");if(!a||e.includes(r)){const e=u[n];yt(t,l,i,e.originalHandler,e.delegationSelector)}}))},trigger(t,e,n){if("string"!=typeof e||!t)return null;const r=tt(),s=_t(e),o=e!==s,i=gt.has(s);let a,l=!0,c=!0,u=!1,f=null;return o&&r&&(a=r.Event(e,n),r(t).trigger(a),l=!a.isPropagationStopped(),c=!a.isImmediatePropagationStopped(),u=a.isDefaultPrevented()),i?(f=document.createEvent("HTMLEvents"),f.initEvent(s,l,!0)):f=new CustomEvent(e,{bubbles:l,cancelable:!0}),void 0!==n&&Object.keys(n).forEach((t=>{Object.defineProperty(f,t,{get:()=>n[t]})})),u&&f.preventDefault(),c&&t.dispatchEvent(f),f.defaultPrevented&&void 0!==a&&a.preventDefault(),f}};function Et(t){return"true"===t||"false"!==t&&(t===Number(t).toString()?Number(t):""===t||"null"===t?null:t)}function At(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}const xt={setDataAttribute(t,e,n){t.setAttribute(`data-bs-${At(e)}`,n)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${At(e)}`)},getDataAttributes(t){if(!t)return{};const e={};return Object.keys(t.dataset).filter((t=>t.startsWith("bs"))).forEach((n=>{let r=n.replace(/^bs/,"");r=r.charAt(0).toLowerCase()+r.slice(1,r.length),e[r]=Et(t.dataset[n])})),e},getDataAttribute:(t,e)=>Et(t.getAttribute(`data-bs-${At(e)}`)),offset(t){const e=t.getBoundingClientRect();return{top:e.top+document.body.scrollTop,left:e.left+document.body.scrollLeft}},position:t=>({top:t.offsetTop,left:t.offsetLeft})};const wt="collapse",Tt="bs.collapse",Lt={toggle:!0,parent:""},Ct={toggle:"boolean",parent:"(string|element)"},Nt="show",kt="collapse",Ot="collapsing",St="collapsed",Dt="width",jt='[data-bs-toggle="collapse"]';class Mt extends class{constructor(t){(t=X(t))&&(this._element=t,ot.set(this._element,this.constructor.DATA_KEY,this))}dispose(){ot.remove(this._element,this.constructor.DATA_KEY),$t.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach((t=>{this[t]=null}))}_queueCallback(t,e,n=!0){rt(t,e,n)}static getInstance(t){return ot.get(t,this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return"5.0.2"}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}}{constructor(t,e){super(t),this._isTransitioning=!1,this._config=this._getConfig(e),this._triggerArray=Q.find(`${jt}[href="#${this._element.id}"],${jt}[data-bs-target="#${this._element.id}"]`);const n=Q.find(jt);for(let t=0,e=n.length;t<e;t++){const e=n[t],r=Z(e),s=Q.find(r).filter((t=>t===this._element));null!==r&&s.length&&(this._selector=r,this._triggerArray.push(e))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}static get Default(){return Lt}static get NAME(){return wt}toggle(){this._element.classList.contains(Nt)?this.hide():this.show()}show(){if(this._isTransitioning||this._element.classList.contains(Nt))return;let t,e;this._parent&&(t=Q.find(".show, .collapsing",this._parent).filter((t=>"string"==typeof this._config.parent?t.getAttribute("data-bs-parent")===this._config.parent:t.classList.contains(kt))),0===t.length&&(t=null));const n=Q.findOne(this._selector);if(t){const r=t.find((t=>n!==t));if(e=r?Mt.getInstance(r):null,e&&e._isTransitioning)return}if($t.trigger(this._element,"show.bs.collapse").defaultPrevented)return;t&&t.forEach((t=>{n!==t&&Mt.collapseInterface(t,"hide"),e||ot.set(t,Tt,null)}));const r=this._getDimension();this._element.classList.remove(kt),this._element.classList.add(Ot),this._element.style[r]=0,this._triggerArray.length&&this._triggerArray.forEach((t=>{t.classList.remove(St),t.setAttribute("aria-expanded",!0)})),this.setTransitioning(!0);const s=`scroll${r[0].toUpperCase()+r.slice(1)}`;this._queueCallback((()=>{this._element.classList.remove(Ot),this._element.classList.add(kt,Nt),this._element.style[r]="",this.setTransitioning(!1),$t.trigger(this._element,"shown.bs.collapse")}),this._element,!0),this._element.style[r]=`${this._element[s]}px`}hide(){if(this._isTransitioning||!this._element.classList.contains(Nt))return;if($t.trigger(this._element,"hide.bs.collapse").defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,(t=>{t.offsetHeight})(this._element),this._element.classList.add(Ot),this._element.classList.remove(kt,Nt);const e=this._triggerArray.length;if(e>0)for(let t=0;t<e;t++){const e=this._triggerArray[t],n=G(e);n&&!n.classList.contains(Nt)&&(e.classList.add(St),e.setAttribute("aria-expanded",!1))}this.setTransitioning(!0);this._element.style[t]="",this._queueCallback((()=>{this.setTransitioning(!1),this._element.classList.remove(Ot),this._element.classList.add(kt),$t.trigger(this._element,"hidden.bs.collapse")}),this._element,!0)}setTransitioning(t){this._isTransitioning=t}_getConfig(t){return(t={...Lt,...t}).toggle=Boolean(t.toggle),((t,e,n)=>{Object.keys(n).forEach((r=>{const s=n[r],o=e[r],i=o&&J(o)?"element":null==(a=o)?`${a}`:{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();var a;if(!new RegExp(s).test(i))throw new TypeError(`${t.toUpperCase()}: Option "${r}" provided type "${i}" but expected type "${s}".`)}))})(wt,t,Ct),t}_getDimension(){return this._element.classList.contains(Dt)?Dt:"height"}_getParent(){let{parent:t}=this._config;t=X(t);const e=`${jt}[data-bs-parent="${t}"]`;return Q.find(e,t).forEach((t=>{const e=G(t);this._addAriaAndCollapsedClass(e,[t])})),t}_addAriaAndCollapsedClass(t,e){if(!t||!e.length)return;const n=t.classList.contains(Nt);e.forEach((t=>{n?t.classList.remove(St):t.classList.add(St),t.setAttribute("aria-expanded",n)}))}static collapseInterface(t,e){let n=Mt.getInstance(t);const r={...Lt,...xt.getDataAttributes(t),..."object"==typeof e&&e?e:{}};if(!n&&r.toggle&&"string"==typeof e&&/show|hide/.test(e)&&(r.toggle=!1),n||(n=new Mt(t,r)),"string"==typeof e){if(void 0===n[e])throw new TypeError(`No method named "${e}"`);n[e]()}}static jQueryInterface(t){return this.each((function(){Mt.collapseInterface(this,t)}))}}var It,Pt;return $t.on(document,"click.bs.collapse.data-api",jt,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();const e=xt.getDataAttributes(this),n=Z(this);Q.find(n).forEach((t=>{const n=Mt.getInstance(t);let r;n?(null===n._parent&&"string"==typeof e.parent&&(n._config.parent=e.parent,n._parent=n._getParent()),r="toggle"):r=e,Mt.collapseInterface(t,r)}))})),It=Mt,Pt=()=>{const t=tt();if(t){const e=It.NAME,n=t.fn[e];t.fn[e]=It.jQueryInterface,t.fn[e].Constructor=It,t.fn[e].noConflict=()=>(t.fn[e]=n,It.jQueryInterface)}},"loading"===document.readyState?(et.length||document.addEventListener("DOMContentLoaded",(()=>{et.forEach((t=>t()))})),et.push(Pt)):Pt(),new class extends j{constructor(t){super(),D(this,t,null,W,o,{})}}({target:document.body})}();
