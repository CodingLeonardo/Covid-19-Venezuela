!function(t){function e(e){for(var n,o,c=e[0],s=e[1],i=0,l=[];i<c.length;i++)o=c[i],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&l.push(r[o][0]),r[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);for(a&&a(e);l.length;)l.shift()()}var n={},r={1:0};function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var c=new Promise((function(e,o){n=r[t]=[e,o]}));e.push(n[2]=c);var s,i=document.createElement("script");i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.src=function(t){return o.p+"5b4408190b9d2cd97a10/"+({0:"index",2:"vendors~index"}[t]||t)+"."+t+".js"}(t);var a=new Error;s=function(e){i.onerror=i.onload=null,clearTimeout(l);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+c+")",a.name="ChunkLoadError",a.type=o,a.request=c,n[1](a)}r[t]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:i})}),12e4);i.onerror=i.onload=s,document.head.appendChild(i)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="client/",o.oe=function(t){throw console.error(t),t};var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var i=0;i<c.length;i++)e(c[i]);var a=s;o(o.s=2)}([function(t,e,n){"use strict";function r(){}n.d(e,"a",(function(){return Dt})),n.d(e,"b",(function(){return gt})),n.d(e,"c",(function(){return it})),n.d(e,"d",(function(){return L})),n.d(e,"e",(function(){return N})),n.d(e,"f",(function(){return c})),n.d(e,"g",(function(){return F})),n.d(e,"h",(function(){return kt})),n.d(e,"i",(function(){return D})),n.d(e,"j",(function(){return zt})),n.d(e,"k",(function(){return V})),n.d(e,"l",(function(){return K})),n.d(e,"m",(function(){return W})),n.d(e,"n",(function(){return X})),n.d(e,"o",(function(){return Pt})),n.d(e,"p",(function(){return It})),n.d(e,"q",(function(){return Ct})),n.d(e,"r",(function(){return h})),n.d(e,"s",(function(){return Mt})),n.d(e,"t",(function(){return H})),n.d(e,"u",(function(){return I})),n.d(e,"v",(function(){return M})),n.d(e,"w",(function(){return lt})),n.d(e,"x",(function(){return g})),n.d(e,"y",(function(){return p})),n.d(e,"z",(function(){return Tt})),n.d(e,"A",(function(){return Lt})),n.d(e,"B",(function(){return St})),n.d(e,"C",(function(){return Q})),n.d(e,"D",(function(){return o})),n.d(e,"E",(function(){return Ft})),n.d(e,"F",(function(){return T})),n.d(e,"G",(function(){return l})),n.d(e,"H",(function(){return qt})),n.d(e,"I",(function(){return r})),n.d(e,"J",(function(){return st})),n.d(e,"K",(function(){return a})),n.d(e,"L",(function(){return u})),n.d(e,"M",(function(){return at})),n.d(e,"N",(function(){return G})),n.d(e,"O",(function(){return q})),n.d(e,"P",(function(){return O})),n.d(e,"Q",(function(){return d})),n.d(e,"R",(function(){return z})),n.d(e,"S",(function(){return Rt})),n.d(e,"T",(function(){return Nt})),n.d(e,"U",(function(){return m}));const o=t=>t;function c(t,e){for(const n in e)t[n]=e[n];return t}function s(t){return t()}function i(){return Object.create(null)}function a(t){t.forEach(s)}function l(t){return"function"==typeof t}function u(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function f(t){return 0===Object.keys(t).length}function d(t,...e){if(null==t)return r;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function h(t,e,n,r){if(t){const o=b(t,e,n,r);return t[0](o)}}function b(t,e,n,r){return t[1]&&r?c(n.ctx.slice(),t[1](r(e))):n.ctx}function p(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}function m(t,e,n,r,o,c){if(o){const s=b(e,n,r,c);t.p(s,o)}}function g(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}function O(t){const e="string"==typeof t&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const j="undefined"!=typeof window;let v=j?()=>window.performance.now():()=>Date.now(),$=j?t=>requestAnimationFrame(t):r;const y=new Set;function _(t){y.forEach(e=>{e.c(t)||(y.delete(e),e.f())}),0!==y.size&&$(_)}function w(t){let e;return 0===y.size&&$(_),{promise:new Promise(n=>{y.add(e={c:t,f:n})}),abort(){y.delete(e)}}}const x="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;class E{constructor(t){this.options=t,this._listeners="WeakMap"in x?new WeakMap:void 0}observe(t,e){return this._listeners.set(t,e),this._getObserver().observe(t,this.options),()=>{this._listeners.delete(t),this._observer.unobserve(t)}}_getObserver(){var t;return null!==(t=this._observer)&&void 0!==t?t:this._observer=new ResizeObserver(t=>{var e;for(const n of t)E.entries.set(n.target,n),null===(e=this._listeners.get(n.target))||void 0===e||e(n)})}}E.entries="WeakMap"in x?new WeakMap:void 0;let S=!1;function k(t,e,n,r){for(;t<e;){const o=t+(e-t>>1);n(o)<=r?t=o+1:e=o}return t}function R(t,e){t.appendChild(e)}function N(t,e,n){const r=A(t);if(!r.getElementById(e)){const t=I("style");t.id=e,t.textContent=n,P(r,t)}}function A(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function C(t){const e=I("style");return P(A(t),e),e.sheet}function P(t,e){return R(t.head||t,e),e.sheet}function L(t,e){if(S){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let n=0;n<e.length;n++){const r=e[n];void 0!==r.claim_order&&t.push(r)}e=t}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let o=0;for(let t=0;t<e.length;t++){const c=e[t].claim_order,s=(o>0&&e[n[o]].claim_order<=c?o+1:k(1,o,t=>e[n[t]].claim_order,c))-1;r[t]=n[s]+1;const i=s+1;n[i]=t,o=Math.max(i,o)}const c=[],s=[];let i=e.length-1;for(let t=n[o]+1;0!=t;t=r[t-1]){for(c.push(e[t-1]);i>=t;i--)s.push(e[i]);i--}for(;i>=0;i--)s.push(e[i]);c.reverse(),s.sort((t,e)=>t.claim_order-e.claim_order);for(let e=0,n=0;e<s.length;e++){for(;n<c.length&&s[e].claim_order>=c[n].claim_order;)n++;const r=n<c.length?c[n]:null;t.insertBefore(s[e],r)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?void 0===e.claim_order&&e.parentNode===t||t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else e.parentNode===t&&null===e.nextSibling||t.appendChild(e)}function T(t,e,n){S&&!n?L(t,e):e.parentNode===t&&e.nextSibling==n||t.insertBefore(e,n||null)}function H(t){t.parentNode&&t.parentNode.removeChild(t)}function I(t){return document.createElement(t)}function z(t){return document.createTextNode(t)}function q(){return z(" ")}function M(){return z("")}function F(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function D(t){return Array.from(t.childNodes)}function U(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}function B(t,e,n,r,o=!1){U(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const c=t[r];if(e(c)){const e=n(c);return void 0===e?t.splice(r,1):t[r]=e,o||(t.claim_info.last_index=r),c}}for(let r=t.claim_info.last_index-1;r>=0;r--){const c=t[r];if(e(c)){const e=n(c);return void 0===e?t.splice(r,1):t[r]=e,o?void 0===e&&t.claim_info.last_index--:t.claim_info.last_index=r,c}}return r()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function J(t,e,n,r){return B(t,t=>t.nodeName===e,t=>{const e=[];for(let r=0;r<t.attributes.length;r++){const o=t.attributes[r];n[o.name]||e.push(o.name)}e.forEach(e=>t.removeAttribute(e))},()=>r(e))}function V(t,e,n){return J(t,e,n,I)}function W(t,e){return B(t,t=>3===t.nodeType,t=>{const n=""+e;if(t.data.startsWith(n)){if(t.data.length!==n.length)return t.splitText(n.length)}else t.data=n},()=>z(e),!0)}function K(t){return W(t," ")}function G(t,e){e=""+e,t.data!==e&&(t.data=e)}function Y(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,r,e),o}function Q(t,e){const n=[];let r=0;for(const o of e.childNodes)if(8===o.nodeType){const e=o.textContent.trim();e===`HEAD_${t}_END`?(r-=1,n.push(o)):e===`HEAD_${t}_START`&&(r+=1,n.push(o))}else r>0&&n.push(o);return n}function X(t,e){return new t(e)}const Z=new Map;let tt,et=0;function nt(t,e,n,r,o,c,s,i=0){const a=16.666/r;let l="{\n";for(let t=0;t<=1;t+=a){const r=e+(n-e)*c(t);l+=100*t+`%{${s(r,1-r)}}\n`}const u=l+`100% {${s(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${i}`,d=A(t),{stylesheet:h,rules:b}=Z.get(d)||function(t,e){const n={stylesheet:C(e),rules:{}};return Z.set(t,n),n}(d,t);b[f]||(b[f]=!0,h.insertRule(`@keyframes ${f} ${u}`,h.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?p+", ":""}${f} ${r}ms linear ${o}ms 1 both`,et+=1,f}function rt(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),o=n.length-r.length;o&&(t.style.animation=r.join(", "),et-=o,et||$(()=>{et||(Z.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&H(e)}),Z.clear())}))}function ot(t){tt=t}function ct(){if(!tt)throw new Error("Function called outside component initialization");return tt}function st(t){ct().$$.on_mount.push(t)}function it(t){ct().$$.after_update.push(t)}function at(t,e){return ct().$$.context.set(t,e),e}function lt(t){return ct().$$.context.get(t)}const ut=[],ft=[];let dt=[];const ht=[],bt=Promise.resolve();let pt=!1;function mt(){pt||(pt=!0,bt.then($t))}function gt(t){dt.push(t)}const Ot=new Set;let jt,vt=0;function $t(){if(0!==vt)return;const t=tt;do{try{for(;vt<ut.length;){const t=ut[vt];vt++,ot(t),yt(t.$$)}}catch(t){throw ut.length=0,vt=0,t}for(ot(null),ut.length=0,vt=0;ft.length;)ft.pop()();for(let t=0;t<dt.length;t+=1){const e=dt[t];Ot.has(e)||(Ot.add(e),e())}dt.length=0}while(ut.length);for(;ht.length;)ht.pop()();pt=!1,Ot.clear(),ot(t)}function yt(t){if(null!==t.fragment){t.update(),a(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(gt)}}function _t(){return jt||(jt=Promise.resolve(),jt.then(()=>{jt=null})),jt}function wt(t,e,n){t.dispatchEvent(Y(`${e?"intro":"outro"}${n}`))}const xt=new Set;let Et;function St(){Et={r:0,c:[],p:Et}}function kt(){Et.r||a(Et.c),Et=Et.p}function Rt(t,e){t&&t.i&&(xt.delete(t),t.i(e))}function Nt(t,e,n,r){if(t&&t.o){if(xt.has(t))return;xt.add(t),Et.c.push(()=>{xt.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const At={duration:0};function Ct(t,e,n){const c={direction:"in"};let s,i,a=e(t,n,c),u=!1,f=0;function d(){s&&rt(t,s)}function h(){const{delay:e=0,duration:n=300,easing:c=o,tick:l=r,css:h}=a||At;h&&(s=nt(t,0,1,n,e,c,h,f++)),l(0,1);const b=v()+e,p=b+n;i&&i.abort(),u=!0,gt(()=>wt(t,!0,"start")),i=w(e=>{if(u){if(e>=p)return l(1,0),wt(t,!0,"end"),d(),u=!1;if(e>=b){const t=c((e-b)/n);l(t,1-t)}}return u})}let b=!1;return{start(){b||(b=!0,rt(t),l(a)?(a=a(c),_t().then(h)):h())},invalidate(){b=!1},end(){u&&(d(),u=!1)}}}function Pt(t,e,n,c){const s={direction:"both"};let i=e(t,n,s),u=c?0:1,f=null,d=null,h=null;function b(){h&&rt(t,h)}function p(t,e){const n=t.b-u;return e*=Math.abs(n),{a:u,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function m(e){const{delay:n=0,duration:c=300,easing:s=o,tick:l=r,css:m}=i||At,g={start:v()+n,b:e};e||(g.group=Et,Et.r+=1),f||d?d=g:(m&&(b(),h=nt(t,u,e,c,n,s,m)),e&&l(0,1),f=p(g,c),gt(()=>wt(t,e,"start")),w(e=>{if(d&&e>d.start&&(f=p(d,c),d=null,wt(t,f.b,"start"),m&&(b(),h=nt(t,u,f.b,f.duration,0,s,i.css))),f)if(e>=f.end)l(u=f.b,1-u),wt(t,f.b,"end"),d||(f.b?b():--f.group.r||a(f.group.c)),f=null;else if(e>=f.start){const t=e-f.start;u=f.a+f.d*s(t/f.duration),l(u,1-u)}return!(!f&&!d)}))}return{run(t){l(i)?_t().then(()=>{i=i(s),m(t)}):m(t)},end(){b(),f=d=null}}}function Lt(t,e){const n={},r={},o={$$scope:1};let c=t.length;for(;c--;){const s=t[c],i=e[c];if(i){for(const t in s)t in i||(r[t]=1);for(const t in i)o[t]||(n[t]=i[t],o[t]=1);t[c]=i}else for(const t in s)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function Tt(t){return"object"==typeof t&&null!==t?t:{}}new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]);let Ht;function It(t){t&&t.c()}function zt(t,e){t&&t.l(e)}function qt(t,e,n,r){const{fragment:o,after_update:c}=t.$$;o&&o.m(e,n),r||gt(()=>{const e=t.$$.on_mount.map(s).filter(l);t.$$.on_destroy?t.$$.on_destroy.push(...e):a(e),t.$$.on_mount=[]}),c.forEach(gt)}function Mt(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];dt.forEach(r=>-1===t.indexOf(r)?e.push(r):n.push(r)),n.forEach(t=>t()),dt=e}(n.after_update),a(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ft(t,e,n,o,c,s,l,u=[-1]){const f=tt;ot(t);const d=t.$$={fragment:null,ctx:[],props:s,update:r,not_equal:c,bound:i(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:i(),dirty:u,skip_bound:!1,root:e.target||f.$$.root};l&&l(d.root);let h=!1;if(d.ctx=n?n(t,e.props||{},(e,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&c(d.ctx[e],d.ctx[e]=o)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](o),h&&function(t,e){-1===t.$$.dirty[0]&&(ut.push(t),mt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),n}):[],d.update(),h=!0,a(d.before_update),d.fragment=!!o&&o(d.ctx),e.target){if(e.hydrate){S=!0;const t=D(e.target);d.fragment&&d.fragment.l(t),t.forEach(H)}else d.fragment&&d.fragment.c();e.intro&&Rt(t.$$.fragment),qt(t,e.target,e.anchor,e.customElement),S=!1,$t()}ot(f)}"function"==typeof HTMLElement&&(Ht=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(s).filter(l);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){a(this.$$.on_disconnect)}$destroy(){Mt(this,1),this.$destroy=r}$on(t,e){if(!l(e))return r;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!f(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class Dt{$destroy(){Mt(this,1),this.$destroy=r}$on(t,e){if(!l(e))return r;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!f(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}},function(t,e,n){"use strict";var r=n(0);n.d(e,"a",(function(){return r.c})),n.d(e,"b",(function(){return r.w})),n.d(e,"c",(function(){return r.J})),n.d(e,"d",(function(){return r.M}))},function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(0);const c=[];function s(t,e=o.I){let n;const r=new Set;function s(e){if(Object(o.L)(t,e)&&(t=e,n)){const e=!c.length;for(const e of r)e[1](),c.push(e,t);if(e){for(let t=0;t<c.length;t+=2)c[t][0](c[t+1]);c.length=0}}}return{set:s,update:function(e){s(e(t))},subscribe:function(c,i=o.I){const a=[c,i];return r.add(a),1===r.size&&(n=e(s)||o.I),c(t),()=>{r.delete(a),0===r.size&&n&&(n(),n=null)}}}}const i={},a=()=>({});function l(t){Object(o.e)(t,"svelte-yl8ewg",".Header.svelte-yl8ewg.svelte-yl8ewg{background:var(--tertiary-100);display:flex;justify-content:center;align-items:center;height:5em}.Header.svelte-yl8ewg h1.svelte-yl8ewg{font-size:3em}.Header.svelte-yl8ewg h1 span.svelte-yl8ewg:nth-child(1){color:var(--primary-400)}.Header.svelte-yl8ewg h1 span.svelte-yl8ewg:nth-child(2){color:var(--tertiary-400)}.Header.svelte-yl8ewg h1 span.svelte-yl8ewg:nth-child(3){color:var(--secondary-300)}@media screen and (min-width: 320px){.Header.svelte-yl8ewg h1.svelte-yl8ewg{font-size:2em}}@media screen and (min-width: 375px){.Header.svelte-yl8ewg h1.svelte-yl8ewg{font-size:2.2em}}@media screen and (min-width: 425px){.Header.svelte-yl8ewg h1.svelte-yl8ewg{font-size:2.5em}}")}function u(t){let e,n,r,c,s,i,a,l,u,f,d;return{c(){e=Object(o.u)("div"),n=Object(o.u)("h1"),r=Object(o.R)("COVID-19 -\n    "),c=Object(o.u)("span"),s=Object(o.R)("Ven"),i=Object(o.O)(),a=Object(o.u)("span"),l=Object(o.R)("ezu"),u=Object(o.O)(),f=Object(o.u)("span"),d=Object(o.R)("ela"),this.h()},l(t){e=Object(o.k)(t,"DIV",{class:!0});var h=Object(o.i)(e);n=Object(o.k)(h,"H1",{class:!0});var b=Object(o.i)(n);r=Object(o.m)(b,"COVID-19 -\n    "),c=Object(o.k)(b,"SPAN",{class:!0});var p=Object(o.i)(c);s=Object(o.m)(p,"Ven"),p.forEach(o.t),i=Object(o.l)(b),a=Object(o.k)(b,"SPAN",{class:!0});var m=Object(o.i)(a);l=Object(o.m)(m,"ezu"),m.forEach(o.t),u=Object(o.l)(b),f=Object(o.k)(b,"SPAN",{class:!0});var g=Object(o.i)(f);d=Object(o.m)(g,"ela"),g.forEach(o.t),b.forEach(o.t),h.forEach(o.t),this.h()},h(){Object(o.g)(c,"class","svelte-yl8ewg"),Object(o.g)(a,"class","svelte-yl8ewg"),Object(o.g)(f,"class","svelte-yl8ewg"),Object(o.g)(n,"class","svelte-yl8ewg"),Object(o.g)(e,"class","Header svelte-yl8ewg")},m(t,h){Object(o.F)(t,e,h),Object(o.d)(e,n),Object(o.d)(n,r),Object(o.d)(n,c),Object(o.d)(c,s),Object(o.d)(n,i),Object(o.d)(n,a),Object(o.d)(a,l),Object(o.d)(n,u),Object(o.d)(n,f),Object(o.d)(f,d)},p:o.I,i:o.I,o:o.I,d(t){t&&Object(o.t)(e)}}}class f extends o.a{constructor(t){super(),Object(o.E)(this,t,null,u,o.L,{},l)}}var d=f;function h(t){Object(o.e)(t,"svelte-1e8vhso","footer.svelte-1e8vhso{display:flex;justify-content:center;align-items:center;background:var(--tertiary-100);color:white;height:3.5em}h1.svelte-1e8vhso{font-size:1.8em;margin-right:0.2em}a.svelte-1e8vhso{font-weight:lighter;text-decoration:underline;color:white}@media screen and (min-width: 320px){h1.svelte-1e8vhso{font-size:1.2em}}@media screen and (min-width: 425px){h1.svelte-1e8vhso{font-size:1.5em}}@media screen and (min-width: 768px){h1.svelte-1e8vhso{font-size:1.8em}}")}function b(t){let e,n,r,c,s,i,a,l;return{c(){e=Object(o.u)("footer"),n=Object(o.u)("h1"),r=Object(o.R)("Designed with\n    "),c=Object(o.u)("span"),s=Object(o.R)("💚"),i=Object(o.R)("\n    by\n    "),a=Object(o.u)("a"),l=Object(o.R)("@CodingLeonardo"),this.h()},l(t){e=Object(o.k)(t,"FOOTER",{class:!0});var u=Object(o.i)(e);n=Object(o.k)(u,"H1",{class:!0});var f=Object(o.i)(n);r=Object(o.m)(f,"Designed with\n    "),c=Object(o.k)(f,"SPAN",{});var d=Object(o.i)(c);s=Object(o.m)(d,"💚"),d.forEach(o.t),i=Object(o.m)(f,"\n    by\n    "),a=Object(o.k)(f,"A",{href:!0,target:!0,class:!0});var h=Object(o.i)(a);l=Object(o.m)(h,"@CodingLeonardo"),h.forEach(o.t),f.forEach(o.t),u.forEach(o.t),this.h()},h(){Object(o.g)(a,"href","https://github.com/CodingLeonardo"),Object(o.g)(a,"target","_blank"),Object(o.g)(a,"class","svelte-1e8vhso"),Object(o.g)(n,"class","svelte-1e8vhso"),Object(o.g)(e,"class","svelte-1e8vhso")},m(t,u){Object(o.F)(t,e,u),Object(o.d)(e,n),Object(o.d)(n,r),Object(o.d)(n,c),Object(o.d)(c,s),Object(o.d)(n,i),Object(o.d)(n,a),Object(o.d)(a,l)},p:o.I,i:o.I,o:o.I,d(t){t&&Object(o.t)(e)}}}class p extends o.a{constructor(t){super(),Object(o.E)(this,t,null,b,o.L,{},h)}}var m=p;function g(t){Object(o.e)(t,"svelte-lwkp3t","main.svelte-lwkp3t{width:100%}")}function O(t){let e,n,r,c,s,i;e=new d({props:{segment:t[0]}});const a=t[2].default,l=Object(o.r)(a,t,t[1],null);return s=new m({}),{c(){Object(o.p)(e.$$.fragment),n=Object(o.O)(),r=Object(o.u)("main"),l&&l.c(),c=Object(o.O)(),Object(o.p)(s.$$.fragment),this.h()},l(t){Object(o.j)(e.$$.fragment,t),n=Object(o.l)(t),r=Object(o.k)(t,"MAIN",{class:!0});var i=Object(o.i)(r);l&&l.l(i),i.forEach(o.t),c=Object(o.l)(t),Object(o.j)(s.$$.fragment,t),this.h()},h(){Object(o.g)(r,"class","svelte-lwkp3t")},m(t,a){Object(o.H)(e,t,a),Object(o.F)(t,n,a),Object(o.F)(t,r,a),l&&l.m(r,null),Object(o.F)(t,c,a),Object(o.H)(s,t,a),i=!0},p(t,[n]){const r={};1&n&&(r.segment=t[0]),e.$set(r),l&&l.p&&(!i||2&n)&&Object(o.U)(l,a,t,t[1],i?Object(o.y)(a,t[1],n,null):Object(o.x)(t[1]),null)},i(t){i||(Object(o.S)(e.$$.fragment,t),Object(o.S)(l,t),Object(o.S)(s.$$.fragment,t),i=!0)},o(t){Object(o.T)(e.$$.fragment,t),Object(o.T)(l,t),Object(o.T)(s.$$.fragment,t),i=!1},d(t){Object(o.s)(e,t),t&&Object(o.t)(n),t&&Object(o.t)(r),l&&l.d(t),t&&Object(o.t)(c),Object(o.s)(s,t)}}}function j(t,e,n){let{$$slots:r={},$$scope:o}=e,{segment:c}=e;return t.$$set=t=>{"segment"in t&&n(0,c=t.segment),"$$scope"in t&&n(1,o=t.$$scope)},[c,o,r]}class v extends o.a{constructor(t){super(),Object(o.E)(this,t,j,O,o.L,{segment:0},g)}}var $=v;function y(t){let e,n,r,c,s,i,a,l=t[0].message+"",u=!1;return{c(){e=Object(o.u)("h1"),n=Object(o.R)(t[1]),r=Object(o.O)(),c=Object(o.u)("p"),s=Object(o.R)(l),i=Object(o.O)(),u&&u.c(),a=Object(o.v)()},l(f){e=Object(o.k)(f,"H1",{});var d=Object(o.i)(e);n=Object(o.m)(d,t[1]),d.forEach(o.t),r=Object(o.l)(f),c=Object(o.k)(f,"P",{});var h=Object(o.i)(c);s=Object(o.m)(h,l),h.forEach(o.t),i=Object(o.l)(f),u&&u.l(f),a=Object(o.v)()},m(t,l){Object(o.F)(t,e,l),Object(o.d)(e,n),Object(o.F)(t,r,l),Object(o.F)(t,c,l),Object(o.d)(c,s),Object(o.F)(t,i,l),u&&u.m(t,l),Object(o.F)(t,a,l)},p(t,[e]){2&e&&Object(o.N)(n,t[1]),1&e&&l!==(l=t[0].message+"")&&Object(o.N)(s,l)},i:o.I,o:o.I,d(t){t&&Object(o.t)(e),t&&Object(o.t)(r),t&&Object(o.t)(c),t&&Object(o.t)(i),u&&u.d(t),t&&Object(o.t)(a)}}}function _(t,e,n){let{error:r}=e,{status:o}=e;return t.$$set=t=>{"error"in t&&n(0,r=t.error),"status"in t&&n(1,o=t.status)},[r,o]}class w extends o.a{constructor(t){super(),Object(o.E)(this,t,_,y,o.L,{error:0,status:1})}}var x=w;function E(t){let e,n,r;const c=[t[4].props];var s=t[4].component;function i(t){let e={};for(let t=0;t<c.length;t+=1)e=Object(o.f)(e,c[t]);return{props:e}}return s&&(e=Object(o.n)(s,i())),{c(){e&&Object(o.p)(e.$$.fragment),n=Object(o.v)()},l(t){e&&Object(o.j)(e.$$.fragment,t),n=Object(o.v)()},m(t,c){e&&Object(o.H)(e,t,c),Object(o.F)(t,n,c),r=!0},p(t,r){const a=16&r?Object(o.A)(c,[Object(o.z)(t[4].props)]):{};if(16&r&&s!==(s=t[4].component)){if(e){Object(o.B)();const t=e;Object(o.T)(t.$$.fragment,1,0,()=>{Object(o.s)(t,1)}),Object(o.h)()}s?(e=Object(o.n)(s,i()),Object(o.p)(e.$$.fragment),Object(o.S)(e.$$.fragment,1),Object(o.H)(e,n.parentNode,n)):e=null}else s&&e.$set(a)},i(t){r||(e&&Object(o.S)(e.$$.fragment,t),r=!0)},o(t){e&&Object(o.T)(e.$$.fragment,t),r=!1},d(t){t&&Object(o.t)(n),e&&Object(o.s)(e,t)}}}function S(t){let e,n;return e=new x({props:{error:t[0],status:t[1]}}),{c(){Object(o.p)(e.$$.fragment)},l(t){Object(o.j)(e.$$.fragment,t)},m(t,r){Object(o.H)(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(Object(o.S)(e.$$.fragment,t),n=!0)},o(t){Object(o.T)(e.$$.fragment,t),n=!1},d(t){Object(o.s)(e,t)}}}function k(t){let e,n,r,c;const s=[S,E],i=[];function a(t,e){return t[0]?0:1}return e=a(t),n=i[e]=s[e](t),{c(){n.c(),r=Object(o.v)()},l(t){n.l(t),r=Object(o.v)()},m(t,n){i[e].m(t,n),Object(o.F)(t,r,n),c=!0},p(t,c){let l=e;e=a(t),e===l?i[e].p(t,c):(Object(o.B)(),Object(o.T)(i[l],1,1,()=>{i[l]=null}),Object(o.h)(),n=i[e],n?n.p(t,c):(n=i[e]=s[e](t),n.c()),Object(o.S)(n,1),n.m(r.parentNode,r))},i(t){c||(Object(o.S)(n),c=!0)},o(t){Object(o.T)(n),c=!1},d(t){i[e].d(t),t&&Object(o.t)(r)}}}function R(t){let e,n;const r=[{segment:t[2][0]},t[3].props];let c={$$slots:{default:[k]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)c=Object(o.f)(c,r[t]);return e=new $({props:c}),{c(){Object(o.p)(e.$$.fragment)},l(t){Object(o.j)(e.$$.fragment,t)},m(t,r){Object(o.H)(e,t,r),n=!0},p(t,[n]){const c=12&n?Object(o.A)(r,[4&n&&{segment:t[2][0]},8&n&&Object(o.z)(t[3].props)]):{};147&n&&(c.$$scope={dirty:n,ctx:t}),e.$set(c)},i(t){n||(Object(o.S)(e.$$.fragment,t),n=!0)},o(t){Object(o.T)(e.$$.fragment,t),n=!1},d(t){Object(o.s)(e,t)}}}function N(t,e,n){let{stores:o}=e,{error:c}=e,{status:s}=e,{segments:a}=e,{level0:l}=e,{level1:u=null}=e,{notify:f}=e;return Object(r.a)(f),Object(r.d)(i,o),t.$$set=t=>{"stores"in t&&n(5,o=t.stores),"error"in t&&n(0,c=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,l=t.level0),"level1"in t&&n(4,u=t.level1),"notify"in t&&n(6,f=t.notify)},[c,s,a,l,u,o,f]}class A extends o.a{constructor(t){super(),Object(o.E)(this,t,N,R,o.L,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}var C=A;const P=[],L=[{js:()=>Promise.all([n.e(2),n.e(0)]).then(n.bind(null,145)),css:"__SAPPER_CSS_PLACEHOLDER:index.svelte__"}],T=[{pattern:/^\/$/,parts:[{i:0}]}];const H="undefined"!=typeof __SAPPER__&&__SAPPER__;let I,z,q,M=!1,F=[],D="{}";const U={page:function(t){const e=s(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:s(null),session:s(H&&H.session)};let B,J;U.session.subscribe(async t=>{if(B=t,!M)return;J=!0;const e=Z(new URL(location.href)),n=z={},{redirect:r,props:o,branch:c}=await rt(e);n===z&&await nt(r,c,o,e.page)});let V,W=null;let K,G=1;const Y="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Q={};function X(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Z(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(H.baseUrl))return null;let e=t.pathname.slice(H.baseUrl.length);if(""===e&&(e="/"),!P.some(t=>t.test(e)))for(let n=0;n<T.length;n+=1){const r=T[n],o=r.pattern.exec(e);if(o){const n=X(t.search),c=r.parts[r.parts.length-1],s=c.params?c.params(o):{},i={host:location.host,path:e,query:n,params:s};return{href:t.href,route:r,match:o,page:i}}}}function tt(){return{x:pageXOffset,y:pageYOffset}}async function et(t,e,n,r){if(e)K=e;else{const t=tt();Q[K]=t,e=K=++G,Q[K]=n?t:{x:0,y:0}}K=e,I&&U.preloading.set(!0);const o=W&&W.href===t.href?W.promise:rt(t);W=null;const c=z={},{redirect:s,props:i,branch:a}=await o;if(c===z&&(await nt(s,a,i,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Q[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}Q[K]=t,t&&scrollTo(t.x,t.y)}}async function nt(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=Z(new URL(t,document.baseURI));return n?(Y[e.replaceState?"replaceState":"pushState"]({id:K},"",t),et(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(U.page.set(r),U.preloading.set(!1),I)I.$set(n);else{n.stores={page:{subscribe:U.page.subscribe},preloading:{subscribe:U.preloading.subscribe},session:U.session},n.level0={props:await q},n.notify=U.page.notify;const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)st(t.nextSibling);st(t),st(e)}I=new C({target:V,props:n,hydrate:!0})}F=e,D=JSON.stringify(r.query),M=!0,J=!1}async function rt(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const c={error:null,status:200,segments:[r[0]]},s={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{c.error="string"==typeof e?new Error(e):e,c.status=t}};let i;q||(q=H.preloaded[0]||a.call(s,{host:n.host,path:n.path,query:n.query,params:{}},B));let l=1;try{const o=JSON.stringify(n.query),a=e.pattern.exec(n.path);let u=!1;i=await Promise.all(e.parts.map(async(e,i)=>{const f=r[i];if(function(t,e,n,r){if(r!==D)return!0;const o=F[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(i,f,a,o)&&(u=!0),c.segments[l]=r[i+1],!e)return{segment:f};const d=l++;if(!J&&!u&&F[i]&&F[i].part===e.i)return F[i];u=!1;const{default:h,preload:b}=await ct(L[e.i]);let p;return p=M||!H.preloaded[i+1]?b?await b.call(s,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},B):{}:H.preloaded[i+1],c["level"+d]={component:h,props:p,segment:f,match:a,part:e.i}}))}catch(t){c.error=t,c.status=500,i=[]}return{redirect:o,props:c,branch:i}}function ot(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function ct(t){const e="string"==typeof t.css?[]:t.css.map(ot);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}function st(t){t.parentNode.removeChild(t)}function it(t){const e=Z(new URL(t,document.baseURI));if(e)return W&&t===W.href||function(t,e){W={href:t,promise:e}}(t,rt(e)),W.promise}let at;function lt(t){clearTimeout(at),at=setTimeout(()=>{ut(t)},20)}function ut(t){const e=dt(t.target);e&&"prefetch"===e.rel&&it(e.href)}function ft(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=dt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const c=Z(o);if(c){et(c,null,e.hasAttribute("sapper-noscroll"),o.hash),t.preventDefault(),Y.pushState({id:K},"",o.href)}}function dt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function ht(t){if(Q[K]=tt(),t.state){const e=Z(new URL(location.href));e?et(e,t.state.id):location.href=location.href}else G=G+1,function(t){K=t}(G),Y.replaceState({id:K},"",location.href)}var bt,pt;bt={target:document.querySelector("#sapper")},"scrollRestoration"in Y&&(Y.scrollRestoration="manual"),addEventListener("beforeunload",()=>{Y.scrollRestoration="auto"}),addEventListener("load",()=>{Y.scrollRestoration="manual"}),pt=bt.target,V=pt,addEventListener("click",ft),addEventListener("popstate",ht),addEventListener("touchstart",ut),addEventListener("mousemove",lt),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Y.replaceState({id:G},"",e);const n=new URL(location.href);if(H.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:c,status:s,error:i}=H;q||(q=c&&c[0]),nt(null,[],{error:i,status:s,session:o,level0:{props:q},level1:{props:{status:s,error:i},component:x},segments:c},{host:e,path:n,query:X(r),params:{}})}();const r=Z(n);return r?et(r,G,!0,t):void 0})}]);