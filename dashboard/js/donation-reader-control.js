(()=>{"use strict";var e,t={7592:(e,t,n)=>{var o=n(9804),r=n.n(o),i=n(5148),a=n(9340),s=n(9497),c=n(6819),l=function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};const d=new i.SpeedcontrolUtilBrowser(nodecg),u={additionalDonations:nodecg.Replicant("additionalDonations"),assetsDonationAlertAssets:nodecg.Replicant("assets:donation-alert-assets"),assetsIntermissionSlides:nodecg.Replicant("assets:intermission-slides"),assetsMediaBoxImages:nodecg.Replicant("assets:media-box-images"),assetsReaderIntroductionImages:nodecg.Replicant("assets:reader-introduction-images"),bids:nodecg.Replicant("bids"),bigbuttonPlayerMap:nodecg.Replicant("bigbuttonPlayerMap"),commentators:nodecg.Replicant("commentators"),commentatorsNew:nodecg.Replicant("commentatorsNew"),countdown:nodecg.Replicant("countdown"),currentRunDelay:nodecg.Replicant("currentRunDelay"),donationAlerts:nodecg.Replicant("donationAlerts"),donationReader:nodecg.Replicant("donationReader"),donationReaderNew:nodecg.Replicant("donationReaderNew"),donationsToRead:nodecg.Replicant("donationsToRead"),donationTotal:nodecg.Replicant("donationTotal"),donationTotalMilestones:nodecg.Replicant("donationTotalMilestones"),gameLayouts:nodecg.Replicant("gameLayouts"),intermissionSlides:nodecg.Replicant("intermissionSlides"),lowerThird:nodecg.Replicant("lowerThird"),mediaBox:nodecg.Replicant("mediaBox"),musicData:nodecg.Replicant("musicData"),obsData:nodecg.Replicant("obsData"),omnibar:nodecg.Replicant("omnibar"),otherStreamData:nodecg.Replicant("otherStreamData"),prizes:nodecg.Replicant("prizes"),readerIntroduction:nodecg.Replicant("readerIntroduction"),runDataActiveRun:d.runDataActiveRun,runDataActiveRunSurrounding:d.runDataActiveRunSurrounding,runDataArray:d.runDataArray,serverTimestamp:nodecg.Replicant("serverTimestamp"),soloedBidID:nodecg.Replicant("soloedBidID"),streamDeckData:nodecg.Replicant("streamDeckData"),timer:d.timer,ttsVoices:nodecg.Replicant("ttsVoices"),upcomingRunID:nodecg.Replicant("upcomingRunID"),videoPlayer:nodecg.Replicant("videoPlayer")};let p,f=class extends c.hw{constructor(){super(...arguments),this.reps={}}get repsTyped(){return this.reps}setState({name:e,val:t}){a.Ay.set(this.reps,e,r()(t))}setReplicant({name:e,val:t}){a.Ay.set(this.reps,e,r()(t)),u[e].value=r()(t)}};l([c.sM],f.prototype,"setState",null),l([c.sM],f.prototype,"setReplicant",null),f=l([(0,c.nV)({name:"ReplicantModule",namespaced:!0})],f);const y=(0,s.MF)("ReplicantModule");var g=n(3825),m=n(9357),v=n(694),h=n(3572),b=n(7251),R=n(305);n(7980),n(8010),n(6577),n(8969),n(9493);var w=function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};let $=class extends a.Ay{constructor(){super(...arguments),this.entry="",this.disable=!1}onDonationReaderChanged(e){this.entry=(null==e?void 0:e.pronouns)?`${e.name} (${e.pronouns})`:(null==e?void 0:e.name)||"",this.entry=(null==e?void 0:e.country)?`${this.entry} (${e.country})`:this.entry}modify(e=!1){var t,n,o,r,i,a,s;return r=this,i=void 0,s=function*(){this.disable=!0;try{yield nodecg.sendMessage("readerModify",e?null:this.entry)}catch(e){}this.entry=(null===(t=this.donationReader)||void 0===t?void 0:t.pronouns)?`${this.donationReader.name} (${this.donationReader.pronouns})`:(null===(n=this.donationReader)||void 0===n?void 0:n.name)||"",this.entry=(null===(o=this.donationReader)||void 0===o?void 0:o.country)?`${this.entry} (${this.donationReader.country})`:this.entry,this.disable=!1},new((a=void 0)||(a=Promise))((function(e,t){function n(e){try{c(s.next(e))}catch(e){t(e)}}function o(e){try{c(s.throw(e))}catch(e){t(e)}}function c(t){var r;t.done?e(t.value):(r=t.value,r instanceof a?r:new a((function(e){e(r)}))).then(n,o)}c((s=s.apply(r,i||[])).next())}))}};w([y.State((e=>e.reps.donationReaderNew))],$.prototype,"donationReader",void 0),w([function(e,t){void 0===t&&(t={});var n=t.deep,o=void 0!==n&&n,r=t.immediate,i=void 0!==r&&r;return(0,R.createDecorator)((function(t,n){"object"!=typeof t.watch&&(t.watch=Object.create(null));var r=t.watch;"object"!=typeof r[e]||Array.isArray(r[e])?void 0===r[e]&&(r[e]=[]):r[e]=[r[e]],r[e].push({handler:n,deep:o,immediate:i})}))}("donationReader",{immediate:!0})],$.prototype,"onDonationReaderChanged",null),$=w([R.default],$);const A=$,O=(0,n(6775).A)(A,(function(){var e=this,t=e._self._c;return e._self._setupProxy,t(m.A,[t("div",{staticClass:"d-flex"},[t(b.A,{attrs:{label:"Donation Reader","hide-details":"",filled:"",spellcheck:!1,disabled:e.disable},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.modify(),t.target.blur()}},model:{value:e.entry,callback:function(t){e.entry=t},expression:"entry"}}),e._v(" "),t(v.A,{style:{"min-width":"0","margin-left":"5px"},attrs:{height:"56px",disabled:e.disable},on:{click:function(t){return e.modify()}}},[t(h.A,[e._v("mdi-check")])],1)],1),e._v(" "),t(v.A,{style:{"margin-top":"10px"},attrs:{disabled:e.disable},on:{click:function(t){return e.modify(!0)}}},[e._v("\n    Clear\n  ")])],1)}),[],!1,null,null,null).exports;var x=n(3578);a.Ay.use(x.Ay);let k=class extends c.hw{get reps(){return this.context.rootState.ReplicantModule.reps}};k=function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}([(0,c.nV)({name:"OurModule"})],k);const D=new x.il({strict:!1,state:{},modules:{ReplicantModule:f,OurModule:k}}),j=D;(0,c.f_)(k,D),function(e){return t=this,n=void 0,r=function*(){Object.keys(u).forEach((t=>{u[t].on("change",(n=>{e.commit("ReplicantModule/setState",{name:t,val:n})}))})),yield NodeCG.waitForReplicants(...Object.keys(u).map((e=>u[e]))),p=(0,c.f_)(f,e)},new((o=void 0)||(o=Promise))((function(e,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(a,s)}c((r=r.apply(t,n||[])).next())}));var t,n,o,r}(j).then((()=>{new a.Ay({vuetify:g.A,store:j,el:"#App",render:e=>e(O)})}))},8969:(e,t,n)=>{"undefined"!=typeof Reflect&&Reflect.getMetadata},208:(e,t,n)=>{n.d(t,{mM:()=>i,vt:()=>a});var o=n(9437),r=n(5596);(0,o.o)("carousel-transition"),(0,o.o)("carousel-reverse-transition"),(0,o.o)("tab-transition"),(0,o.o)("tab-reverse-transition"),(0,o.o)("menu-transition"),(0,o.o)("fab-transition","center center","out-in"),(0,o.o)("dialog-transition"),(0,o.o)("dialog-bottom-transition"),(0,o.o)("dialog-top-transition");const i=(0,o.o)("fade-transition"),a=((0,o.o)("scale-transition"),(0,o.o)("scroll-x-transition"),(0,o.o)("scroll-x-reverse-transition"),(0,o.o)("scroll-y-transition"),(0,o.o)("scroll-y-reverse-transition"),(0,o.o)("slide-x-transition"));(0,o.o)("slide-x-reverse-transition"),(0,o.o)("slide-y-transition"),(0,o.o)("slide-y-reverse-transition"),(0,o.b)("expand-transition",(0,r.A)()),(0,o.b)("expand-x-transition",(0,r.A)("",!0))},4442:(e,t,n)=>{n.d(t,{W:()=>a});var o=n(9340),r=n(7098);function i(e,t){return()=>(0,r.OP)(`The ${e} component must be used inside a ${t}`)}function a(e,t,n){const r=t&&n?{register:i(t,n),unregister:i(t,n)}:null;return o.Ay.extend({name:"registrable-inject",inject:{[e]:{default:r}}})}},1290:(e,t,n)=>{n.d(t,{P:()=>r});var o=n(9340);function r(e="value",t="input"){return o.Ay.extend({name:"toggleable",model:{prop:e,event:t},props:{[e]:{required:!1}},data(){return{isActive:!!this[e]}},watch:{[e](e){this.isActive=!!e},isActive(n){!!n!==this[e]&&this.$emit(t,n)}}})}r()},7503:(e,t,n)=>{n.d(t,{I:()=>s});var o=n(5247),r=n(9868),i=n(6943);function a(e,t={}){const n={container:document.scrollingElement||document.body||document.documentElement,duration:500,offset:0,easing:"easeInOutCubic",appOffset:!0,...t},o=(0,i.M)(n.container);if(n.appOffset&&a.framework.application){const e=o.classList.contains("v-navigation-drawer"),t=o.classList.contains("v-navigation-drawer--clipped"),{bar:r,top:i}=a.framework.application;n.offset+=r,e&&!t||(n.offset+=i)}const s=performance.now();let c;c="number"==typeof e?(0,i.A)(e)-n.offset:(0,i.A)(e)-(0,i.A)(o)-n.offset;const l=o.scrollTop;if(c===l)return Promise.resolve(c);const d="function"==typeof n.easing?n.easing:r[n.easing];if(!d)throw new TypeError(`Easing function "${n.easing}" not found.`);return new Promise((e=>requestAnimationFrame((function t(r){const i=r-s,a=Math.abs(n.duration?Math.min(i/n.duration,1):1);o.scrollTop=Math.floor(l+(c-l)*d(a));const u=(o===document.body?document.documentElement.clientHeight:o.clientHeight)+o.scrollTop>=o.scrollHeight;if(1===a||c>o.scrollTop&&u)return e(c);requestAnimationFrame(t)}))))}a.framework={},a.init=()=>{};class s extends o.k{constructor(){return super(),a}}s.property="goTo"},7098:(e,t,n)=>{n.d(t,{OP:()=>i,q4:()=>s,yA:()=>a});var o=n(6383);function r(e,t,n){if(!o.A.config.silent){if(n&&(t={_isVue:!0,$parent:n,$options:t}),t){if(t.$_alreadyWarned=t.$_alreadyWarned||[],t.$_alreadyWarned.includes(e))return;t.$_alreadyWarned.push(e)}return`[Vuetify] ${e}`+(t?function(e){if(e._isVue&&e.$parent){const t=[];let n=0;for(;e;){if(t.length>0){const o=t[t.length-1];if(o.constructor===e.constructor){n++,e=e.$parent;continue}n>0&&(t[t.length-1]=[o,n],n=0)}t.push(e),e=e.$parent}return"\n\nfound in\n\n"+t.map(((e,t)=>`${0===t?"---\x3e ":" ".repeat(5+2*t)}${Array.isArray(e)?`${d(e[0])}... (${e[1]} recursive calls)`:d(e)}`)).join("\n")}return`\n\n(found in ${d(e)})`}(t):"")}}function i(e,t,n){const o=r(e,t,n);null!=o&&console.warn(o)}function a(e,t,n){const o=r(e,t,n);null!=o&&console.error(o)}function s(e,t,n,o){a(`[BREAKING] '${e}' has been removed, use '${t}' instead. For more information, see the upgrade guide https://github.com/vuetifyjs/vuetify/releases/tag/v2.0.0#user-content-upgrade-guide`,n,o)}const c=/(?:^|[-_])(\w)/g,l=e=>e.replace(c,(e=>e.toUpperCase())).replace(/[-_]/g,"");function d(e,t){if(e.$root===e)return"<Root>";const n="function"==typeof e&&null!=e.cid?e.options:e._isVue?e.$options||e.constructor.options:e||{};let o=n.name||n._componentTag;const r=n.__file;if(!o&&r){const e=r.match(/([^/\\]+)\.vue$/);o=e&&e[1]}return(o?`<${l(o)}>`:"<Anonymous>")+(r&&!1!==t?` at ${r}`:"")}},7290:(e,t,n)=>{n.d(t,{$c:()=>h,BN:()=>v,D9:()=>R,Dg:()=>c,HP:()=>f,LJ:()=>r,PT:()=>g,Zb:()=>m,bD:()=>i,fF:()=>s,g8:()=>p,kW:()=>l,no:()=>a,qE:()=>b,uP:()=>u});let o=!1;try{if("undefined"!=typeof window){const e=Object.defineProperty({},"passive",{get:()=>{o=!0}});window.addEventListener("testListener",e,e),window.removeEventListener("testListener",e,e)}}catch(e){console.warn(e)}function r(e,t,n){const o=t.length-1;if(o<0)return void 0===e?n:e;for(let r=0;r<o;r++){if(null==e)return n;e=e[t[r]]}return null==e||void 0===e[t[o]]?n:e[t[o]]}function i(e,t){if(e===t)return!0;if(e instanceof Date&&t instanceof Date&&e.getTime()!==t.getTime())return!1;if(e!==Object(e)||t!==Object(t))return!1;const n=Object.keys(e);return n.length===Object.keys(t).length&&n.every((n=>i(e[n],t[n])))}function a(e,t,n){return null!=e&&t&&"string"==typeof t?void 0!==e[t]?e[t]:r(e,(t=(t=t.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),n):n}function s(e,t){const n={};for(let o=0;o<t.length;o++){const r=t[o];void 0!==e[r]&&(n[r]=e[r])}return n}function c(e,t="px"){return null==e||""===e?void 0:isNaN(+e)?String(e):`${Number(e)}${t}`}function l(e){return(e||"").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function d(e){return null!==e&&"object"==typeof e}const u=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function p(e,t){const n=e.$vuetify.icons.component;if(t.startsWith("$")){const n=a(e,`$vuetify.icons.values.${t.split("$").pop().split(".").pop()}`,t);if("string"!=typeof n)return n;t=n}return null==n?t:{component:n,props:{icon:t}}}function f(e){return Object.keys(e)}const y=/-(\w)/g,g=e=>e.replace(y,((e,t)=>t?t.toUpperCase():""));function m(e){return e.charAt(0).toUpperCase()+e.slice(1)}function v(e){return null!=e?Array.isArray(e)?e:[e]:[]}function h(e,t="default",n,o=!1){const r=l(t);return e.$scopedSlots.hasOwnProperty(t)?e.$scopedSlots[t](n instanceof Function?n():n):e.$scopedSlots.hasOwnProperty(r)?e.$scopedSlots[r](n instanceof Function?n():n):!e.$slots.hasOwnProperty(t)||n&&!o?!e.$slots.hasOwnProperty(r)||n&&!o?void 0:e.$slots[r]:e.$slots[t]}function b(e,t=0,n=1){return Math.max(t,Math.min(n,e))}function R(e={},t={}){for(const n in t){const o=e[n],r=t[n];d(o)&&d(r)?e[n]=R(o,r):e[n]=r}return e}},8459:(e,t,n)=>{n.d(t,{Ay:()=>a});var o=n(7290);const r={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function i(e){const t={};for(const n of e.split(r.styleList)){let[e,i]=n.split(r.styleProp);e=e.trim(),e&&("string"==typeof i&&(i=i.trim()),t[(0,o.PT)(e)]=i)}return t}function a(){const e={};let t,n=arguments.length;for(;n--;)for(t of Object.keys(arguments[n]))switch(t){case"class":case"directives":arguments[n][t]&&(e[t]=(r=e[t],(i=arguments[n][t])?r&&r?(0,o.BN)(r).concat(i):i:r));break;case"style":arguments[n][t]&&(e[t]=s(e[t],arguments[n][t]));break;case"staticClass":if(!arguments[n][t])break;void 0===e[t]&&(e[t]=""),e[t]&&(e[t]+=" "),e[t]+=arguments[n][t].trim();break;case"on":case"nativeOn":arguments[n][t]&&(e[t]=c(e[t],arguments[n][t]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[n][t])break;e[t]||(e[t]={}),e[t]={...arguments[n][t],...e[t]};break;default:e[t]||(e[t]=arguments[n][t])}var r,i;return e}function s(e,t){return e?t?(e=(0,o.BN)("string"==typeof e?i(e):e)).concat("string"==typeof t?i(t):t):e:t}function c(...e){if(!e[0])return e[1];if(!e[1])return e[0];const t={};for(let n=2;n--;){const o=e[n];for(const e in o)o[e]&&(t[e]?t[e]=[].concat(o[e],t[e]):t[e]=o[e])}return t}}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,o),i.exports}o.m=t,e=[],o.O=(t,n,r,i)=>{if(!n){var a=1/0;for(d=0;d<e.length;d++){for(var[n,r,i]=e[d],s=!0,c=0;c<n.length;c++)(!1&i||a>=i)&&Object.keys(o.O).every((e=>o.O[e](n[c])))?n.splice(c--,1):(s=!1,i<a&&(a=i));if(s){e.splice(d--,1);var l=r();void 0!==l&&(t=l)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[n,r,i]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={555:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,i,[a,s,c]=n,l=0;if(a.some((t=>0!==e[t]))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(c)var d=c(o)}for(t&&t(n);l<a.length;l++)i=a[l],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(d)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=o.O(void 0,[690,880,842,654,120],(()=>o(7592)));r=o.O(r)})();