(()=>{"use strict";var e,t={8186:(e,t,i)=>{var n=i(298),s=i(9340),r=i(3825),o=i(9357),a=i(694),l=i(5224),u=i(9643),d=i(4842),c=i(7917);const h=s.Ay.extend({name:"rippleable",directives:{ripple:c.A},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(e={}){return this.ripple?(e.staticClass="v-input--selection-controls__ripple",e.directives=e.directives||[],e.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",e)):null}}});var p=i(6910);function v(e){e.preventDefault()}const m=(0,i(3041).A)(d.A,h,p.A).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const e=this.value,t=this.internalValue;return this.isMultiple?!!Array.isArray(t)&&t.some((t=>this.valueComparator(t,e))):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,t):Boolean(t):this.valueComparator(t,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(e){this.lazyValue=e,this.hasColor=e}},methods:{genLabel(){const e=d.A.options.methods.genLabel.call(this);return e?(e.data.on={click:v},e):e},genInput(e,t){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:e,type:e},t),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:v},ref:"input"})},onClick(e){this.onChange(),this.$emit("click",e)},onChange(){if(!this.isInteractive)return;const e=this.value;let t=this.internalValue;if(this.isMultiple){Array.isArray(t)||(t=[]);const i=t.length;t=t.filter((t=>!this.valueComparator(t,e))),t.length===i&&t.push(e)}else t=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(t,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(t,e)?null:e:!t;this.validate(!0,t),this.internalValue=t,this.hasColor=t},onFocus(e){this.isFocused=!0,this.$emit("focus",e)},onBlur(e){this.isFocused=!1,this.$emit("blur",e)},onKeydown(e){}}}).extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data(){return{inputIndeterminate:this.indeterminate}},computed:{classes(){return{...d.A.options.computed.classes.call(this),"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate}},computedIcon(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate(e){this.$nextTick((()=>this.inputIndeterminate=e))},inputIndeterminate(e){this.$emit("update:indeterminate",e)},isActive(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox(){const{title:e,...t}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(u.A,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",{...t,"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()}),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot(){return[this.genCheckbox(),this.genLabel()]}}});var f=i(3572),y=i(1186),g=i(3845),b=i(4565),A=i(7290),x=i(5237),w=i(5415),_=i(4182),k=i(9546);(0,A.Gn)("v-list-item__action-text","span");const $=(0,A.Gn)("v-list-item__content","div");(0,A.Gn)("v-list-item__title","div"),(0,A.Gn)("v-list-item__subtitle","div");y.A,x.A,g.A,b.A,_.A,w.A,k.A;var C=i(7251),S=i(305);i(7980),i(8010),i(6577),i(8969),i(9493);var O=i(3578),T=i(6819),V=function(e,t,i,n){var s,r=arguments.length,o=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(r<3?s(o):r>3?s(t,i,o):s(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};s.Ay.use(O.Ay);let I=class extends T.hw{get reps(){return this.context.rootState.ReplicantModule.reps}clearNames(){const e=n.PH.repsTyped.lowerThird;e.names=[],n.PH.setReplicant({name:"lowerThird",val:e})}addName(e){const t=n.PH.repsTyped.lowerThird;t.names.push(e),n.PH.setReplicant({name:"lowerThird",val:t})}removeName(e){const t=n.PH.repsTyped.lowerThird,i=t.names.indexOf(e);i>-1&&t.names.splice(i,1),n.PH.setReplicant({name:"lowerThird",val:t})}};V([T.sM],I.prototype,"clearNames",null),V([T.sM],I.prototype,"addName",null),V([T.sM],I.prototype,"removeName",null),I=V([(0,T.nV)({name:"OurModule"})],I);const D=new O.il({strict:!1,state:{},modules:{ReplicantModule:n.h0,OurModule:I}}),H=D,M=(0,T.f_)(I,D);var P=function(e,t,i,n){var s,r=arguments.length,o=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(r<3?s(o):r>3?s(t,i,o):s(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};let j=class extends s.Ay{constructor(){super(...arguments),this.nameEntry="",this.updatingName=!1,this.autoHide=!0,this.autoHideSeconds="10",this.removeName=M.removeName}showLowerThird(){let e=this.autoHide;const t=parseInt(this.autoHideSeconds,10);t<1&&(e=!1),nodecg.sendMessage("lower-third:show",{autoHide:e,showForSecs:t})}hideLowerThird(){nodecg.sendMessage("lower-third:hide")}get toggleButtonsDisabled(){return this.lowerThird.transitioning||this.updatingName}get inputsDisabled(){return this.toggleButtonsDisabled||this.lowerThird.visible}add(){return e=this,t=void 0,n=function*(){this.updatingName=!0;try{yield nodecg.sendMessage("lower-third:add-name",this.nameEntry)}catch(e){}this.updatingName=!1,this.nameEntry=""},new((i=void 0)||(i=Promise))((function(s,r){function o(e){try{l(n.next(e))}catch(e){r(e)}}function a(e){try{l(n.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,a)}l((n=n.apply(e,t||[])).next())}));var e,t,i,n}};P([n.ok.State((e=>e.reps.lowerThird))],j.prototype,"lowerThird",void 0),j=P([S.default],j);const E=j,R=(0,i(6775).A)(E,(function(){var e=this,t=e._self._c;return e._self._setupProxy,t(o.A,[t(l.A,{style:{"margin-bottom":"10px"},attrs:{tile:""}},[t(y.A,{attrs:{dense:""}},[t(w.A,e._l(e.lowerThird.names,(function(i,n){return t(g.A,{key:n,attrs:{inactive:"",selectable:""}},[t(b.A,[t(f.A,{on:{click:function(t){return e.removeName(i)}}},[e._v("mdi-delete")])],1),e._v(" "),t($,[e._v("\n            "+e._s(i)+"\n          ")])],1)})),1)],1)],1),e._v(" "),t("div",{staticClass:"d-flex"},[t(C.A,{attrs:{label:"Enter Name Here","hide-details":"",filled:"",spellcheck:!1,disabled:e.inputsDisabled},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.add.apply(null,arguments)}},model:{value:e.nameEntry,callback:function(t){e.nameEntry=t},expression:"nameEntry"}}),e._v(" "),t(a.A,{style:{"min-width":"0","margin-left":"5px"},attrs:{height:"56px",disabled:e.inputsDisabled},on:{click:e.add}},[t(f.A,[e._v("mdi-check")])],1)],1),e._v(" "),t("div",{staticClass:"d-flex",staticStyle:{"margin-top":"10px"}},[t(a.A,{style:{"margin-left":"5px"},attrs:{height:"56px",disabled:e.toggleButtonsDisabled||e.lowerThird.visible},on:{click:e.showLowerThird}},[e._v("\n      Show\n    ")]),e._v(" "),t(a.A,{style:{"margin-left":"5px"},attrs:{height:"56px",disabled:e.autoHide||e.toggleButtonsDisabled||!e.lowerThird.visible},on:{click:e.hideLowerThird}},[e._v("\n      Hide\n    ")])],1),e._v(" "),t("div",{staticClass:"d-flex",staticStyle:{"margin-top":"10px"}},[t(m,{attrs:{disabled:e.inputsDisabled,label:"Auto hide after"},model:{value:e.autoHide,callback:function(t){e.autoHide=t},expression:"autoHide"}}),e._v(" "),t(C.A,{style:{width:"10px"},attrs:{label:"seconds","hide-details":"",filled:"",spellcheck:!1,disabled:e.inputsDisabled},model:{value:e.autoHideSeconds,callback:function(t){e.autoHideSeconds=t},expression:"autoHideSeconds"}})],1)],1)}),[],!1,null,null,null).exports;(0,n.tg)(H).then((()=>{new s.Ay({vuetify:r.A,store:H,el:"#App",render:e=>e(R)})}))},8969:(e,t,i)=>{"undefined"!=typeof Reflect&&Reflect.getMetadata},208:(e,t,i)=>{i.d(t,{Qo:()=>a,mM:()=>r,vt:()=>o});var n=i(9437),s=i(5596);(0,n.o)("carousel-transition"),(0,n.o)("carousel-reverse-transition"),(0,n.o)("tab-transition"),(0,n.o)("tab-reverse-transition"),(0,n.o)("menu-transition"),(0,n.o)("fab-transition","center center","out-in"),(0,n.o)("dialog-transition"),(0,n.o)("dialog-bottom-transition"),(0,n.o)("dialog-top-transition");const r=(0,n.o)("fade-transition"),o=((0,n.o)("scale-transition"),(0,n.o)("scroll-x-transition"),(0,n.o)("scroll-x-reverse-transition"),(0,n.o)("scroll-y-transition"),(0,n.o)("scroll-y-reverse-transition"),(0,n.o)("slide-x-transition")),a=((0,n.o)("slide-x-reverse-transition"),(0,n.o)("slide-y-transition"),(0,n.o)("slide-y-reverse-transition"),(0,n.b)("expand-transition",(0,s.A)()));(0,n.b)("expand-x-transition",(0,s.A)("",!0))},6022:(e,t,i)=>{i.d(t,{A:()=>s});var n=i(7098);const s=i(9340).Ay.extend().extend({name:"bootable",props:{eager:Boolean},data:()=>({isBooted:!1}),computed:{hasContent(){return this.isBooted||this.eager||this.isActive}},watch:{isActive(){this.isBooted=!0}},created(){"lazy"in this.$attrs&&(0,n.rq)("lazy",this)},methods:{showLazyContent(e){return this.hasContent&&e?e():[this.$createElement()]}}})},1290:(e,t,i)=>{i.d(t,{A:()=>r,P:()=>s});var n=i(9340);function s(e="value",t="input"){return n.Ay.extend({name:"toggleable",model:{prop:e,event:t},props:{[e]:{required:!1}},data(){return{isActive:!!this[e]}},watch:{[e](e){this.isActive=!!e},isActive(i){!!i!==this[e]&&this.$emit(t,i)}}})}const r=s()},7098:(e,t,i)=>{i.d(t,{OP:()=>r,q4:()=>a,rq:()=>l,yA:()=>o});var n=i(6383);function s(e,t,i){if(!n.A.config.silent){if(i&&(t={_isVue:!0,$parent:i,$options:t}),t){if(t.$_alreadyWarned=t.$_alreadyWarned||[],t.$_alreadyWarned.includes(e))return;t.$_alreadyWarned.push(e)}return`[Vuetify] ${e}`+(t?function(e){if(e._isVue&&e.$parent){const t=[];let i=0;for(;e;){if(t.length>0){const n=t[t.length-1];if(n.constructor===e.constructor){i++,e=e.$parent;continue}i>0&&(t[t.length-1]=[n,i],i=0)}t.push(e),e=e.$parent}return"\n\nfound in\n\n"+t.map(((e,t)=>`${0===t?"---\x3e ":" ".repeat(5+2*t)}${Array.isArray(e)?`${c(e[0])}... (${e[1]} recursive calls)`:c(e)}`)).join("\n")}return`\n\n(found in ${c(e)})`}(t):"")}}function r(e,t,i){const n=s(e,t,i);null!=n&&console.warn(n)}function o(e,t,i){const n=s(e,t,i);null!=n&&console.error(n)}function a(e,t,i,n){o(`[BREAKING] '${e}' has been removed, use '${t}' instead. For more information, see the upgrade guide https://github.com/vuetifyjs/vuetify/releases/tag/v2.0.0#user-content-upgrade-guide`,i,n)}function l(e,t,i){r(`[REMOVED] '${e}' has been removed. You can safely omit it.`,t,i)}const u=/(?:^|[-_])(\w)/g,d=e=>e.replace(u,(e=>e.toUpperCase())).replace(/[-_]/g,"");function c(e,t){if(e.$root===e)return"<Root>";const i="function"==typeof e&&null!=e.cid?e.options:e._isVue?e.$options||e.constructor.options:e||{};let n=i.name||i._componentTag;const s=i.__file;if(!n&&s){const e=s.match(/([^/\\]+)\.vue$/);n=e&&e[1]}return(n?`<${d(n)}>`:"<Anonymous>")+(s&&!1!==t?` at ${s}`:"")}}},i={};function n(e){var s=i[e];if(void 0!==s)return s.exports;var r=i[e]={exports:{}};return t[e].call(r.exports,r,r.exports,n),r.exports}n.m=t,e=[],n.O=(t,i,s,r)=>{if(!i){var o=1/0;for(d=0;d<e.length;d++){for(var[i,s,r]=e[d],a=!0,l=0;l<i.length;l++)(!1&r||o>=r)&&Object.keys(n.O).every((e=>n.O[e](i[l])))?i.splice(l--,1):(a=!1,r<o&&(o=r));if(a){e.splice(d--,1);var u=s();void 0!==u&&(t=u)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[i,s,r]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={210:0};n.O.j=t=>0===e[t];var t=(t,i)=>{var s,r,[o,a,l]=i,u=0;if(o.some((t=>0!==e[t]))){for(s in a)n.o(a,s)&&(n.m[s]=a[s]);if(l)var d=l(n)}for(t&&t(i);u<o.length;u++)r=o[u],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(d)},i=self.webpackChunk=self.webpackChunk||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var s=n.O(void 0,[690,880,842,654,120,289,563],(()=>n(8186)));s=n.O(s)})();