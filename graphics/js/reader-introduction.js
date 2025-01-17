(()=>{"use strict";var e,t={9886:(e,t,n)=>{n.d(t,{h0:()=>g,ok:()=>v,tg:()=>m});var o=n(9804),r=n.n(o),a=n(5148),s=n(9340),i=n(9497),c=n(6819),l=function(e,t,n,o){var r,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s},u=function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function s(e){try{c(o.next(e))}catch(e){a(e)}}function i(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,i)}c((o=o.apply(e,t||[])).next())}))};const d=new a.SpeedcontrolUtilBrowser(nodecg),p={additionalDonations:nodecg.Replicant("additionalDonations"),assetsDonationAlertAssets:nodecg.Replicant("assets:donation-alert-assets"),assetsIntermissionSlides:nodecg.Replicant("assets:intermission-slides"),assetsMediaBoxImages:nodecg.Replicant("assets:media-box-images"),assetsReaderIntroductionImages:nodecg.Replicant("assets:reader-introduction-images"),bids:nodecg.Replicant("bids"),bigbuttonPlayerMap:nodecg.Replicant("bigbuttonPlayerMap"),commentators:nodecg.Replicant("commentators"),commentatorsNew:nodecg.Replicant("commentatorsNew"),countdown:nodecg.Replicant("countdown"),currentRunDelay:nodecg.Replicant("currentRunDelay"),donationAlerts:nodecg.Replicant("donationAlerts"),donationReader:nodecg.Replicant("donationReader"),donationReaderNew:nodecg.Replicant("donationReaderNew"),donationsToRead:nodecg.Replicant("donationsToRead"),donationTotal:nodecg.Replicant("donationTotal"),donationTotalMilestones:nodecg.Replicant("donationTotalMilestones"),gameLayouts:nodecg.Replicant("gameLayouts"),intermissionSlides:nodecg.Replicant("intermissionSlides"),lowerThird:nodecg.Replicant("lowerThird"),mediaBox:nodecg.Replicant("mediaBox"),musicData:nodecg.Replicant("musicData"),obsData:nodecg.Replicant("obsData"),omnibar:nodecg.Replicant("omnibar"),otherStreamData:nodecg.Replicant("otherStreamData"),prizes:nodecg.Replicant("prizes"),readerIntroduction:nodecg.Replicant("readerIntroduction"),runDataActiveRun:d.runDataActiveRun,runDataActiveRunSurrounding:d.runDataActiveRunSurrounding,runDataArray:d.runDataArray,serverTimestamp:nodecg.Replicant("serverTimestamp"),soloedBidID:nodecg.Replicant("soloedBidID"),streamDeckData:nodecg.Replicant("streamDeckData"),timer:d.timer,ttsVoices:nodecg.Replicant("ttsVoices"),upcomingRunID:nodecg.Replicant("upcomingRunID"),videoPlayer:nodecg.Replicant("videoPlayer")};let f,g=class extends c.hw{constructor(){super(...arguments),this.reps={}}get repsTyped(){return this.reps}setState({name:e,val:t}){s.Ay.set(this.reps,e,r()(t))}setReplicant({name:e,val:t}){s.Ay.set(this.reps,e,r()(t)),p[e].value=r()(t)}};l([c.sM],g.prototype,"setState",null),l([c.sM],g.prototype,"setReplicant",null),g=l([(0,c.nV)({name:"ReplicantModule",namespaced:!0})],g);const v=(0,i.MF)("ReplicantModule");function m(e){return u(this,void 0,void 0,(function*(){Object.keys(p).forEach((t=>{p[t].on("change",(n=>{e.commit("ReplicantModule/setState",{name:t,val:n})}))})),yield NodeCG.waitForReplicants(...Object.keys(p).map((e=>p[e]))),f=(0,c.f_)(g,e)}))}},4865:(e,t,n)=>{n.d(t,{A:()=>l});var o=n(9340),r=n(3578),a=n(6819),s=n(9886);o.Ay.use(r.Ay);let i=class extends a.hw{get reps(){return this.context.rootState.ReplicantModule.reps}};i=function(e,t,n,o){var r,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s}([(0,a.nV)({name:"OurModule"})],i);const c=new r.il({strict:!1,state:{},modules:{ReplicantModule:s.h0}}),l=c;(0,a.f_)(i,c)},8275:(e,t,n)=>{var o=n(9886),r=n(9340),a=(n(7378),n(9659)),s=n(5938),i=n(6775);const c=(0,i.A)(s.A,a.X,a.Y,!1,null,"7b12b6af",null).exports;n(4865);const l=c;var u=n(9804),d=n.n(u),p=n(5148),f=n(7268);const g=nodecg.bundleConfig;let v=class extends f.lD{};v=function(e,t,n,o){var r,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s}([f.uA],v);const m=v,y=(0,i.A)(m,(function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{staticClass:"FlexColumn",style:{"font-size":"30px","text-align":"center",width:"100%"}},[t("div",{staticClass:"Header Flex",style:{width:"100%",padding:"5px 0","font-weight":500,"text-transform":"uppercase"}},[e._t("header")],2),e._v(" "),t("div",{staticClass:"Content FlexColumn",style:{width:"100%",flex:1,padding:"15px 0"}},[e._t("content")],2)])}),[],!1,null,null,null).exports;var h=function(e,t,n,o){var r,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};let x=class extends f.lD{constructor(){super(...arguments),this.zoom=`calc(${g.obs.canvasResolution.height}/1080)`,this.boxartImgSuccess=!1,this.assetsTemp=[]}onAssetsChanged(e){e.length&&e.length!==this.assetsTemp.length&&(this.assetsTemp=d()(e))}get run(){return this.runDataArray.find((e=>{var t;return e.id===(null===(t=this.activeRun)||void 0===t?void 0:t.id)}))}get players(){if(this.run)return p.SpeedcontrolUtilBrowser.formPlayerNamesStr(this.run)}get comms(){return this.commentators.join(", ")}};h([o.ok.State((e=>e.reps.readerIntroduction))],x.prototype,"readerIntro",void 0),h([o.ok.State((e=>e.reps.assetsReaderIntroductionImages))],x.prototype,"assets",void 0),h([o.ok.State((e=>e.reps.runDataActiveRun))],x.prototype,"activeRun",void 0),h([o.ok.State((e=>e.reps.runDataArray))],x.prototype,"runDataArray",void 0),h([o.ok.State((e=>e.reps.commentators))],x.prototype,"commentators",void 0),h([o.ok.State((e=>e.reps.donationReader))],x.prototype,"reader",void 0),h([(0,f.ox)("assets",{immediate:!0})],x.prototype,"onAssetsChanged",null),x=h([(0,f.uA)({components:{MediaBox:l,Container:y}})],x);const R=x,b=(0,i.A)(R,(function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{style:{zoom:e.zoom},attrs:{id:"ReaderIntroduction"}},[t("div",{attrs:{id:"Background"}}),e._v(" "),t("div",{staticClass:"Flex",style:{height:"1000px",padding:"80px","box-sizing":"border-box"},attrs:{id:"Layout"}},[t("transition-group",{staticClass:"Grid",style:{width:"100%",height:"100%","background-color":"rgba(0, 0, 0, 0.3)"},attrs:{tag:"div",name:"fade"}},[e._l(e.assetsTemp,(function(n){return t("img",{directives:[{name:"show",rawName:"v-show",value:e.readerIntro.current===n.sum,expression:"readerIntro.current === asset.sum"}],key:n.sum,style:{width:"100%",height:"100%",padding:"0 400px","box-sizing":"border-box","object-fit":"contain",overflow:"hidden"},attrs:{src:n.url}})})),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"RunInfo"===e.readerIntro.current,expression:"readerIntro.current === 'RunInfo'"}],key:"RunInfo",staticClass:"Flex",style:{height:"100%",padding:"50px","box-sizing":"border-box","text-align":"center","font-size":"35px",overflow:"hidden"}},[e.run?[t("img",{directives:[{name:"show",rawName:"v-show",value:e.boxartImgSuccess,expression:"boxartImgSuccess"}],staticClass:"BoxArt",attrs:{src:`/bundles/esa-layouts/boxart/${e.run.id}.jpg`},on:{load:function(t){e.boxartImgSuccess=!0},error:function(t){e.boxartImgSuccess=!1}}}),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.boxartImgSuccess,expression:"!boxartImgSuccess"}],staticClass:"BoxArt Flex",style:{color:"white","font-size":"300px","background-color":"purple",width:"555px"}},[e._v("\n            ?\n          ")]),e._v(" "),t("div",{staticClass:"Flex",style:{"box-sizing":"border-box",padding:"30px 0",height:"100%","flex-grow":1,"flex-direction":"column","row-gap":"20px"}},[t("container",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("Game")]},proxy:!0},{key:"content",fn:function(){return[e._v(e._s(e.run.game))]},proxy:!0}],null,!1,1696339445)}),e._v(" "),t("div",{staticClass:"Flex",style:{width:"100%","column-gap":"20px"}},[t("container",{style:{"flex-basis":0,"flex-grow":1},scopedSlots:e._u([{key:"header",fn:function(){return[e._v("Category")]},proxy:!0},{key:"content",fn:function(){return[e._v(e._s(e.run.category))]},proxy:!0}],null,!1,986105205)}),e._v(" "),t("container",{style:{"flex-basis":0,"flex-grow":1},scopedSlots:e._u([{key:"header",fn:function(){return[e._v("Estimate")]},proxy:!0},{key:"content",fn:function(){return[e._v(e._s(e.run.estimate))]},proxy:!0}],null,!1,2554822773)}),e._v(" "),t("container",{style:{"flex-basis":0,"flex-grow":1},scopedSlots:e._u([{key:"header",fn:function(){return[e._v("System")]},proxy:!0},{key:"content",fn:function(){return[e._v(e._s(e.run.system))]},proxy:!0}],null,!1,1854353973)})],1),e._v(" "),t("container",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("Runners")]},proxy:!0},{key:"content",fn:function(){return[e._v(e._s(e.players))]},proxy:!0}],null,!1,45338929)}),e._v(" "),t("container",{directives:[{name:"show",rawName:"v-show",value:e.comms,expression:"comms"}],scopedSlots:e._u([{key:"header",fn:function(){return[e._v("Commentators")]},proxy:!0},{key:"content",fn:function(){return[e._v(e._s(e.comms))]},proxy:!0}],null,!1,2753842309)}),e._v(" "),t("container",{directives:[{name:"show",rawName:"v-show",value:e.reader,expression:"reader"}],scopedSlots:e._u([{key:"header",fn:function(){return[e._v("Donation Reader")]},proxy:!0},{key:"content",fn:function(){return[e._v(e._s(e.reader))]},proxy:!0}],null,!1,34020170)})],1)]:e._e()],2)],2)],1)])}),[],!1,null,"284adde6",null).exports;var w=n(3578),_=n(6819);r.Ay.use(w.Ay);let S=class extends _.hw{get reps(){return this.context.rootState.ReplicantModule.reps}};S=function(e,t,n,o){var r,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s}([(0,_.nV)({name:"OurModule"})],S);const D=new w.il({strict:!1,state:{},modules:{ReplicantModule:o.h0,OurModule:S}}),k=D;(0,_.f_)(S,D),(0,o.tg)(k).then((()=>{new r.Ay({store:k,el:"#App",render:e=>e(b)})}))},3488:(e,t,n)=>{n.d(t,{MF:()=>l});var o=n(305),r=n(3578),a=u("computed",r.aH),s=u("computed",r.L8),i=u("methods",r.i0),c=u("methods",r.PY);function l(e,t){function n(t){return function(n,o){if("string"==typeof o){var r=o,a=n;return t(r,{namespace:e})(a,r)}var s=n,i=function(e,t){var n={};return[e,t].forEach((function(e){Object.keys(e).forEach((function(t){n[t]=e[t]}))})),n}(o||{},{namespace:e});return t(s,i)}}return t?(console.warn("[vuex-class] passing the 2nd argument to `namespace` function is deprecated. pass only namespace string instead."),n(t)):{State:n(a),Getter:n(s),Mutation:n(c),Action:n(i)}}function u(e,t){function n(n,r){return(0,o.u1)((function(o,a){o[e]||(o[e]={});var s,i=((s={})[a]=n,s);o[e][a]=void 0!==r?t(r,i)[a]:t(i)[a]}))}return function(e,t){if("string"==typeof t){var o=t,r=e;return n(o,void 0)(r,o)}return n(e,function(e){var t=e&&e.namespace;if("string"==typeof t)return"/"!==t[t.length-1]?t+"/":t}(t))}}},9497:(e,t,n)=>{n.d(t,{MF:()=>o.MF});var o=n(3488)}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={id:e,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.exports}o.m=t,e=[],o.O=(t,n,r,a)=>{if(!n){var s=1/0;for(u=0;u<e.length;u++){for(var[n,r,a]=e[u],i=!0,c=0;c<n.length;c++)(!1&a||s>=a)&&Object.keys(o.O).every((e=>o.O[e](n[c])))?n.splice(c--,1):(i=!1,a<s&&(s=a));if(i){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,r,a]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=n[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e+"../"})(),(()=>{var e={983:0,160:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,a,[s,i,c]=n,l=0;if(s.some((t=>0!==e[t]))){for(r in i)o.o(i,r)&&(o.m[r]=i[r]);if(c)var u=c(o)}for(t&&t(n);l<s.length;l++)a=s[l],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(u)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),o.nc=void 0;var r=o.O(void 0,[478,160,243,378,868],(()=>o(8275)));r=o.O(r)})();