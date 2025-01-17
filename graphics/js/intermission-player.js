(()=>{"use strict";var e,t={9243:(e,t,n)=>{var o=n(9804),r=n.n(o),a=n(5148),i=n(9340),s=n(305),c=n(3578),l=f("computed",c.aH),d=f("computed",c.L8),u=f("methods",c.i0),p=f("methods",c.PY);function f(e,t){function n(n,o){return(0,s.u1)((function(r,a){r[e]||(r[e]={});var i,s=((i={})[a]=n,i);r[e][a]=void 0!==o?t(o,s)[a]:t(s)[a]}))}return function(e,t){if("string"==typeof t){var o=t,r=e;return n(o,void 0)(r,o)}return n(e,function(e){var t=e&&e.namespace;if("string"==typeof t)return"/"!==t[t.length-1]?t+"/":t}(t))}}var g=n(6819),m=function(e,t,n,o){var r,a=arguments.length,i=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(a<3?r(i):a>3?r(t,n,i):r(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i};const R=new a.SpeedcontrolUtilBrowser(nodecg),v={additionalDonations:nodecg.Replicant("additionalDonations"),assetsDonationAlertAssets:nodecg.Replicant("assets:donation-alert-assets"),assetsIntermissionSlides:nodecg.Replicant("assets:intermission-slides"),assetsMediaBoxImages:nodecg.Replicant("assets:media-box-images"),assetsReaderIntroductionImages:nodecg.Replicant("assets:reader-introduction-images"),bids:nodecg.Replicant("bids"),bigbuttonPlayerMap:nodecg.Replicant("bigbuttonPlayerMap"),commentators:nodecg.Replicant("commentators"),commentatorsNew:nodecg.Replicant("commentatorsNew"),countdown:nodecg.Replicant("countdown"),currentRunDelay:nodecg.Replicant("currentRunDelay"),donationAlerts:nodecg.Replicant("donationAlerts"),donationReader:nodecg.Replicant("donationReader"),donationReaderNew:nodecg.Replicant("donationReaderNew"),donationsToRead:nodecg.Replicant("donationsToRead"),donationTotal:nodecg.Replicant("donationTotal"),donationTotalMilestones:nodecg.Replicant("donationTotalMilestones"),gameLayouts:nodecg.Replicant("gameLayouts"),intermissionSlides:nodecg.Replicant("intermissionSlides"),lowerThird:nodecg.Replicant("lowerThird"),mediaBox:nodecg.Replicant("mediaBox"),musicData:nodecg.Replicant("musicData"),obsData:nodecg.Replicant("obsData"),omnibar:nodecg.Replicant("omnibar"),otherStreamData:nodecg.Replicant("otherStreamData"),prizes:nodecg.Replicant("prizes"),readerIntroduction:nodecg.Replicant("readerIntroduction"),runDataActiveRun:R.runDataActiveRun,runDataActiveRunSurrounding:R.runDataActiveRunSurrounding,runDataArray:R.runDataArray,serverTimestamp:nodecg.Replicant("serverTimestamp"),soloedBidID:nodecg.Replicant("soloedBidID"),streamDeckData:nodecg.Replicant("streamDeckData"),timer:R.timer,ttsVoices:nodecg.Replicant("ttsVoices"),upcomingRunID:nodecg.Replicant("upcomingRunID"),videoPlayer:nodecg.Replicant("videoPlayer")};let y,h=class extends g.hw{constructor(){super(...arguments),this.reps={}}get repsTyped(){return this.reps}setState({name:e,val:t}){i.Ay.set(this.reps,e,r()(t))}setReplicant({name:e,val:t}){i.Ay.set(this.reps,e,r()(t)),v[e].value=r()(t)}};m([g.sM],h.prototype,"setState",null),m([g.sM],h.prototype,"setReplicant",null),h=m([(0,g.nV)({name:"ReplicantModule",namespaced:!0})],h),function(e,t){function n(t){return function(n,o){if("string"==typeof o){var r=o,a=n;return t(r,{namespace:e})(a,r)}var i=n,s=function(e,t){var n={};return[e,t].forEach((function(e){Object.keys(e).forEach((function(t){n[t]=e[t]}))})),n}(o||{},{namespace:e});return t(i,s)}}n(l),n(d),n(p),n(u)}("ReplicantModule"),n(7378),n(7980),n(8010),n(6577),n(8969),n(9493);var x=function(e,t,n,o){var r,a=arguments.length,i=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(a<3?r(i):a>3?r(t,n,i):r(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i};i.Ay.use(c.Ay);let b=class extends g.hw{constructor(){super(...arguments),this.nextRun=null}get reps(){return this.context.rootState.ReplicantModule.reps}setNextRun(e){i.Ay.set(this,"nextRun",e)}};x([g.sM],b.prototype,"setNextRun",null),b=x([(0,g.nV)({name:"OurModule"})],b);const w=new c.il({strict:!1,state:{},modules:{ReplicantModule:h,OurModule:b}}),_=w,D=(0,g.f_)(b,w),O=nodecg.bundleConfig;let S=class extends i.Ay{constructor(){super(...arguments),this.getRunTotalPlayers=a.SpeedcontrolUtilBrowser.getRunTotalPlayers,this.zoom=`calc(${O.obs.canvasResolution.height}/1080)`}get nextRun(){return D.nextRun}formPlayerNamesStr(e){return e.teams.map((e=>e.name||e.players.map((e=>e.name)).join(", "))).join(" vs. ")||"N/A"}};S=function(e,t,n,o){var r,a=arguments.length,i=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(a<3?r(i):a>3?r(t,n,i):r(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i}([s.Ay],S);const P=S,j=(0,n(6775).A)(P,(function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{style:{width:"1920px",height:"1080px",position:"fixed",zoom:e.zoom},attrs:{id:"IntermissionPlayer"}},[t("div",{staticClass:"Fixed",style:{left:"209px",top:"25px",width:"1503px",height:"845px","background-color":"black"}}),e._v(" "),t("div",{staticClass:"Fixed Flex UpcomingBar",style:{left:"25px",top:"895px",width:"1870px",height:"80px"}},[t("div",{staticClass:"Flex Header",style:{color:"white","text-transform":"uppercase",height:"100%",padding:"0 25px","font-size":"24px","font-weight":500}},[t("p",[e._v("Setting Up For")])]),e._v(" "),t("div",{staticClass:"Flex",style:{flex:1,"background-color":"rgba(0, 0, 0, 0.3)",height:"100%","font-size":"24px","justify-content":"space-between","flex-direction":"row","align-items":"center",padding:"0 27px"}},[e.nextRun?[e._v("\n        "+e._s(e.nextRun.game)+"\n        "),t("span",{staticClass:"RunInfoExtra",style:{"font-size":"20px"}},[e.nextRun.category?t("span",[e._v("\n            "+e._s(e.nextRun.category)+"\n          ")]):e._e(),e._v(" "),e.nextRun.system?t("span",[e._v("\n            "+e._s(e.nextRun.system)+"\n          ")]):e._e(),e._v(" "),e.getRunTotalPlayers(e.nextRun)>0?t("span",[e._v("\n            "+e._s(e.formPlayerNamesStr(e.nextRun))+"\n          ")]):e._e(),e._v(" "),e.nextRun.estimate?t("span",[e._v("\n            "+e._s(e.nextRun.estimate)+"\n          ")]):e._e()])]:[t("div",{staticClass:"Flex"},[e._v("\n          No More Runs\n          "),t("img",{style:{height:"1.4em","margin-left":"10px"},attrs:{src:n(6078)}})])]],2)])])}),[],!1,null,"3cea0dac",null).exports,A=new a.SpeedcontrolUtilBrowser(nodecg);(function(e){return t=this,n=void 0,r=function*(){Object.keys(v).forEach((t=>{v[t].on("change",(n=>{e.commit("ReplicantModule/setState",{name:t,val:n})}))})),yield NodeCG.waitForReplicants(...Object.keys(v).map((e=>v[e]))),y=(0,g.f_)(h,e)},new((o=void 0)||(o=Promise))((function(e,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(i,s)}c((r=r.apply(t,n||[])).next())}));var t,n,o,r})(_).then((()=>{_.watch((()=>_.state.ReplicantModule.reps.upcomingRunID),(e=>{_.commit("setNextRun",function(e){var t;const n=A.findRunIndex(e);return n>=0&&null!==(t=A.getRunDataArray()[n])&&void 0!==t?t:null}(e))}),{immediate:!0}),new i.Ay({store:_,el:"#App",render:e=>e(j)})}))},8969:(e,t,n)=>{"undefined"!=typeof Reflect&&Reflect.getMetadata},6078:(e,t,n)=>{e.exports=n.p+"img/esaOhNo-9591ab044d41ec3de73d.png"}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={id:e,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.exports}o.m=t,e=[],o.O=(t,n,r,a)=>{if(!n){var i=1/0;for(d=0;d<e.length;d++){for(var[n,r,a]=e[d],s=!0,c=0;c<n.length;c++)(!1&a||i>=a)&&Object.keys(o.O).every((e=>o.O[e](n[c])))?n.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(d--,1);var l=r();void 0!==l&&(t=l)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[n,r,a]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=n[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e+"../"})(),(()=>{var e={799:0,160:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,a,[i,s,c]=n,l=0;if(i.some((t=>0!==e[t]))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(c)var d=c(o)}for(t&&t(n);l<i.length;l++)a=i[l],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(d)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),o.nc=void 0;var r=o.O(void 0,[478,160,243,378],(()=>o(9243)));r=o.O(r)})();