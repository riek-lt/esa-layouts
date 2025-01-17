(()=>{"use strict";var e,t={7622:(e,t,n)=>{var o=n(9804),a=n.n(o),r=n(5148),i=n(9340),c=n(305),s=n(3578),d=f("computed",s.aH),l=f("computed",s.L8),u=f("methods",s.i0),p=f("methods",s.PY);function f(e,t){function n(n,o){return(0,c.u1)((function(a,r){a[e]||(a[e]={});var i,c=((i={})[r]=n,i);a[e][r]=void 0!==o?t(o,c)[r]:t(c)[r]}))}return function(e,t){if("string"==typeof t){var o=t,a=e;return n(o,void 0)(a,o)}return n(e,function(e){var t=e&&e.namespace;if("string"==typeof t)return"/"!==t[t.length-1]?t+"/":t}(t))}}var v=n(6819),g=function(e,t,n,o){var a,r=arguments.length,i=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(i=(r<3?a(i):r>3?a(t,n,i):a(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};const y=new r.SpeedcontrolUtilBrowser(nodecg),R={additionalDonations:nodecg.Replicant("additionalDonations"),assetsDonationAlertAssets:nodecg.Replicant("assets:donation-alert-assets"),assetsIntermissionSlides:nodecg.Replicant("assets:intermission-slides"),assetsMediaBoxImages:nodecg.Replicant("assets:media-box-images"),assetsReaderIntroductionImages:nodecg.Replicant("assets:reader-introduction-images"),bids:nodecg.Replicant("bids"),bigbuttonPlayerMap:nodecg.Replicant("bigbuttonPlayerMap"),commentators:nodecg.Replicant("commentators"),commentatorsNew:nodecg.Replicant("commentatorsNew"),countdown:nodecg.Replicant("countdown"),currentRunDelay:nodecg.Replicant("currentRunDelay"),donationAlerts:nodecg.Replicant("donationAlerts"),donationReader:nodecg.Replicant("donationReader"),donationReaderNew:nodecg.Replicant("donationReaderNew"),donationsToRead:nodecg.Replicant("donationsToRead"),donationTotal:nodecg.Replicant("donationTotal"),donationTotalMilestones:nodecg.Replicant("donationTotalMilestones"),gameLayouts:nodecg.Replicant("gameLayouts"),intermissionSlides:nodecg.Replicant("intermissionSlides"),lowerThird:nodecg.Replicant("lowerThird"),mediaBox:nodecg.Replicant("mediaBox"),musicData:nodecg.Replicant("musicData"),obsData:nodecg.Replicant("obsData"),omnibar:nodecg.Replicant("omnibar"),otherStreamData:nodecg.Replicant("otherStreamData"),prizes:nodecg.Replicant("prizes"),readerIntroduction:nodecg.Replicant("readerIntroduction"),runDataActiveRun:y.runDataActiveRun,runDataActiveRunSurrounding:y.runDataActiveRunSurrounding,runDataArray:y.runDataArray,serverTimestamp:nodecg.Replicant("serverTimestamp"),soloedBidID:nodecg.Replicant("soloedBidID"),streamDeckData:nodecg.Replicant("streamDeckData"),timer:y.timer,ttsVoices:nodecg.Replicant("ttsVoices"),upcomingRunID:nodecg.Replicant("upcomingRunID"),videoPlayer:nodecg.Replicant("videoPlayer")};let m,h=class extends v.hw{constructor(){super(...arguments),this.reps={}}get repsTyped(){return this.reps}setState({name:e,val:t}){i.Ay.set(this.reps,e,a()(t))}setReplicant({name:e,val:t}){i.Ay.set(this.reps,e,a()(t)),R[e].value=a()(t)}};g([v.sM],h.prototype,"setState",null),g([v.sM],h.prototype,"setReplicant",null),h=g([(0,v.nV)({name:"ReplicantModule",namespaced:!0})],h);const b=function(e,t){function n(t){return function(n,o){if("string"==typeof o){var a=o,r=n;return t(a,{namespace:e})(r,a)}var i=n,c=function(e,t){var n={};return[e,t].forEach((function(e){Object.keys(e).forEach((function(t){n[t]=e[t]}))})),n}(o||{},{namespace:e});return t(i,c)}}return{State:n(d),Getter:n(l),Mutation:n(p),Action:n(u)}}("ReplicantModule");n(7980),n(8010),n(6577);var w=n(8969);function D(e){return void 0===e&&(e={}),function(t,n){(0,w.A)(e,t,n),(0,c.u1)((function(t,n){(t.props||(t.props={}))[n]=e}))(t,n)}}n(9493);var O=function(e,t,n,o){var a,r=arguments.length,i=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(i=(r<3?a(i):r>3?a(t,n,i):a(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};let x=class extends i.Ay{};O([D(Object)],x.prototype,"data",void 0),O([D({default:0})],x.prototype,"index",void 0),x=O([c.Ay],x);const A=x;var _=n(6775);const j=(0,_.A)(A,(function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{style:{padding:"20px 0","border-top":"3px solid white"}},[t("div",{style:{"font-size":"35px"}},[e._v("\n    #"+e._s(e.index+1)+": "+e._s(e.data.name)+" donated $"+e._s(e.data.amount.toFixed(2))+"\n  ")]),e._v(" "),e.data.comment?t("div",{style:{"font-size":"25px"}},[e._v("\n    "+e._s(e.data.comment)+"\n  ")]):e._e()])}),[],!1,null,null,null).exports;var P=function(e,t,n,o){var a,r=arguments.length,i=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(i=(r<3?a(i):r>3?a(t,n,i):a(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};let M=class extends i.Ay{};P([b.State((e=>e.reps.donationsToRead))],M.prototype,"donationsToRead",void 0),M=P([(0,c.Ay)({components:{Donation:j}})],M);const T=M,S=(0,_.A)(T,(function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",[t("h1",[e._v("Unread Donations")]),e._v(" "),e.donationsToRead.length?e._e():t("div",{style:{"font-size":"30px","font-style":"italic"}},[e._v("\n    None right now!\n  ")]),e._v(" "),e._l(e.donationsToRead,(function(e,n){return t("donation",{key:e.id,attrs:{data:e,index:n}})}))],2)}),[],!1,null,null,null).exports;i.Ay.use(s.Ay);let k=class extends v.hw{get reps(){return this.context.rootState.ReplicantModule.reps}};k=function(e,t,n,o){var a,r=arguments.length,i=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(i=(r<3?a(i):r>3?a(t,n,i):a(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i}([(0,v.nV)({name:"OurModule"})],k);const I=new s.il({strict:!1,state:{},modules:{ReplicantModule:h,OurModule:k}}),B=I;(0,v.f_)(k,I),function(e){return t=this,n=void 0,a=function*(){Object.keys(R).forEach((t=>{R[t].on("change",(n=>{e.commit("ReplicantModule/setState",{name:t,val:n})}))})),yield NodeCG.waitForReplicants(...Object.keys(R).map((e=>R[e]))),m=(0,v.f_)(h,e)},new((o=void 0)||(o=Promise))((function(e,r){function i(e){try{s(a.next(e))}catch(e){r(e)}}function c(e){try{s(a.throw(e))}catch(e){r(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(i,c)}s((a=a.apply(t,n||[])).next())}));var t,n,o,a}(B).then((()=>{new i.Ay({store:B,el:"#App",render:e=>e(S)})}))},8969:(e,t,n)=>{n.d(t,{A:()=>a});var o="undefined"!=typeof Reflect&&void 0!==Reflect.getMetadata;function a(e,t,n){if(o&&!Array.isArray(e)&&"function"!=typeof e&&!e.hasOwnProperty("type")&&void 0===e.type){var a=Reflect.getMetadata("design:type",t,n);a!==Object&&(e.type=a)}}}},n={};function o(e){var a=n[e];if(void 0!==a)return a.exports;var r=n[e]={exports:{}};return t[e].call(r.exports,r,r.exports,o),r.exports}o.m=t,e=[],o.O=(t,n,a,r)=>{if(!n){var i=1/0;for(l=0;l<e.length;l++){for(var[n,a,r]=e[l],c=!0,s=0;s<n.length;s++)(!1&r||i>=r)&&Object.keys(o.O).every((e=>o.O[e](n[s])))?n.splice(s--,1):(c=!1,r<i&&(i=r));if(c){e.splice(l--,1);var d=a();void 0!==d&&(t=d)}}return t}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[n,a,r]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={980:0,160:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var a,r,[i,c,s]=n,d=0;if(i.some((t=>0!==e[t]))){for(a in c)o.o(c,a)&&(o.m[a]=c[a]);if(s)var l=s(o)}for(t&&t(n);d<i.length;d++)r=i[d],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(l)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=o.O(void 0,[478,160,243],(()=>o(7622)));a=o.O(a)})();