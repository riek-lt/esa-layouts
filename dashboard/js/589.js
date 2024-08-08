"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[589],{8333:()=>{},1818:()=>{},8969:(t,e,i)=>{i.d(e,{A:()=>n});var s="undefined"!=typeof Reflect&&void 0!==Reflect.getMetadata;function n(t,e,i){if(s&&!Array.isArray(t)&&"function"!=typeof t&&!t.hasOwnProperty("type")&&void 0===t.type){var n=Reflect.getMetadata("design:type",e,i);n!==Object&&(t.type=n)}}},5224:(t,e,i)=>{i.d(e,{A:()=>l}),i(8333);var s=i(4789),n=i(4363),o=i(2156),r=i(3041),a=i(7290);const l=(0,r.A)(n.A,o.A,s.A).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...o.A.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...s.A.options.computed.classes.call(this)}},styles(){const t={...s.A.options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=n.A.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:i}=this.generateRouteLink();return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,i),[this.genProgress(),(0,a.$c)(this)])}})},3808:(t,e,i)=>{i.d(e,{OQ:()=>r,SL:()=>o});var s=i(5224),n=i(7290);const o=(0,n.Gn)("v-card__actions"),r=((0,n.Gn)("v-card__subtitle"),(0,n.Gn)("v-card__text"));(0,n.Gn)("v-card__title");s.A},7966:(t,e,i)=>{i.d(e,{A:()=>A});var s=i(9251);const n=s.A.extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark(){return this.root?this.rootIsDark:s.A.options.computed.isDark.call(this)}},render(){return this.$slots.default&&this.$slots.default.find((t=>!t.isComment&&" "!==t.text))}});var o=i(8356),r=i(1929),a=i(8613),l=i(4141),c=i(1290),d=i(3041),h=i(7290);const u=(0,d.A)(l.A,s.A,c.A).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim(){const t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes(){return{"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive,...this.themeClasses}},computedOpacity(){return Number(this.isActive?this.opacity:0)},styles(){return{zIndex:this.zIndex}}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-overlay__content"},(0,h.$c)(this))}},render(t){const e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},e)}});var v=i(9340);const p=v.Ay.extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:()=>({animationFrame:0,overlay:null}),watch:{hideOverlay(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy(){this.removeOverlay()},methods:{createOverlay(){const t=new u({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();const e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay(){if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((()=>{this.overlay&&(void 0!==this.activeZIndex?this.overlay.zIndex=String(this.activeZIndex-1):this.$el&&(this.overlay.zIndex=(0,h.fl)(this.$el)),this.overlay.value=!0)})),!0},removeOverlay(t=!0){this.overlay&&((0,h.d7)(this.overlay.$el,"transitionend",(()=>{this.overlay&&this.overlay.$el&&this.overlay.$el.parentNode&&!this.overlay.value&&!this.isActive&&(this.overlay.$el.parentNode.removeChild(this.overlay.$el),this.overlay.$destroy(),this.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),t&&this.showScroll()},scrollListener(t){if("key"in t){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;const e=[h.uP.up,h.uP.pageup],i=[h.uP.down,h.uP.pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!i.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;const e=window.getComputedStyle(t);return(["auto","scroll"].includes(e.overflowY)||"SELECT"===t.tagName)&&t.scrollHeight>t.clientHeight||["auto","scroll"].includes(e.overflowX)&&t.scrollWidth>t.clientWidth},shouldScroll(t,e){if(t.hasAttribute("data-app"))return!1;const i=e.shiftKey||e.deltaX?"x":"y",s="y"===i?e.deltaY:e.deltaX||e.deltaY;let n,o;return"y"===i?(n=0===t.scrollTop,o=t.scrollTop+t.clientHeight===t.scrollHeight):(n=0===t.scrollLeft,o=t.scrollLeft+t.clientWidth===t.scrollWidth),!(n||!(s<0))||!(o||!(s>0))||!(!n&&!o||!t.parentNode)&&this.shouldScroll(t.parentNode,e)},isInside(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath(t){const e=(0,h.K9)(t);if("keydown"===t.type&&e[0]===document.body){const e=this.$refs.dialog,i=window.getSelection().anchorNode;return!(e&&this.hasScrollbar(e)&&this.isInside(i,e)&&this.shouldScroll(e,t))}for(let i=0;i<e.length;i++){const s=e[i];if(s===document)return!0;if(s===document.documentElement)return!0;if(s===this.$refs.content)return!0;if(this.hasScrollbar(s))return!this.shouldScroll(s,t)}return!0},hideScroll(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):((0,h.P4)(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}}),m=v.Ay.extend({name:"returnable",props:{returnValue:null},data:()=>({isActive:!1,originalValue:null}),watch:{isActive(t){t?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save(t){this.originalValue=t,setTimeout((()=>{this.isActive=!1}))}}});var f=i(4994),g=i(3884),y=i(7098);const A=(0,d.A)(r.A,a.A,p,m,f.A,o.A).extend({name:"v-dialog",directives:{ClickOutside:g.A},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data:()=>({activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}),computed:{classes(){return{[`v-dialog ${this.contentClass}`.trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null===(e=this.previousActiveElement)||void 0===e||e.focus())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&(0,y.rq)("full-width",this)},beforeMount(){this.$nextTick((()=>{this.isBooted=this.isActive,this.isActive&&this.show()}))},beforeDestroy(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick((()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout((()=>this.animate=!1),150)}))},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):p.options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((()=>{this.$nextTick((()=>{var t,e;(null===(t=this.$refs.dialog)||void 0===t?void 0:t.contains(document.activeElement))||(this.previousActiveElement=document.activeElement,null===(e=this.$refs.dialog)||void 0===e||e.focus()),this.bind()}))}))},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===h.uP.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick((()=>t&&t.focus()))}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const e=t.target;if(e&&this.$refs.dialog&&![document,this.$refs.dialog].includes(e)&&!this.$refs.dialog.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((t=>t.contains(e)))){const t=[...this.$refs.dialog.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])')].find((t=>!t.hasAttribute("disabled")&&!t.matches('[tabindex="-1"]')));t&&t.focus()}},genContent(){return this.showLazyContent((()=>[this.$createElement(n,{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"dialog","aria-modal":this.hideOverlay?void 0:"true",...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])]))},genTransition(){const t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent(){const t={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style={...t.style,maxWidth:(0,h.Dg)(this.maxWidth),width:(0,h.Dg)(this.width)}),this.$createElement("div",t,this.getContentSlot())}},render(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},5324:(t,e,i)=>{i.d(e,{A:()=>a});var s=i(3041),n=i(4211),o=i(4442),r=i(7290);const a=(0,s.A)(n.A,(0,o.G)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",(e=>{this.$set(this.errorBag,t._uid,e)}),{immediate:!0}),i={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",(s=>{s&&(this.errorBag.hasOwnProperty(t._uid)||(i.valid=e(t)))})):i.valid=e(t),i},validate(){return 0===this.inputs.filter((t=>!t.validate(!0))).length},reset(){this.inputs.forEach((t=>t.reset())),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout((()=>{this.errorBag={}}),0)},resetValidation(){this.inputs.forEach((t=>t.resetValidation())),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find((e=>e._uid===t._uid));if(!e)return;const i=this.watchers.find((t=>t._uid===e._uid));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((t=>t._uid!==e._uid)),this.inputs=this.inputs.filter((t=>t._uid!==e._uid)),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},(0,r.$c)(this))}})},220:(t,e,i)=>{i.d(e,{A:()=>s}),i(1818);const s=(0,i(7290).Gn)("spacer","div","v-spacer")},3884:(t,e,i)=>{i.d(e,{A:()=>l});var s=i(1179);function n(){return!0}function o(t,e,i){if(!t||!1===r(t,i))return!1;const n=(0,s.b)(e);if("undefined"!=typeof ShadowRoot&&n instanceof ShadowRoot&&n.host===t.target)return!1;const o=("object"==typeof i.value&&i.value.include||(()=>[]))();return o.push(e),!o.some((e=>e.contains(t.target)))}function r(t,e){return("object"==typeof e.value&&e.value.closeConditional||n)(t)}function a(t,e){const i=(0,s.b)(t);e(document),"undefined"!=typeof ShadowRoot&&i instanceof ShadowRoot&&e(i)}const l={inserted(t,e,i){const s=i=>function(t,e,i){const s="function"==typeof i.value?i.value:i.value.handler;e._clickOutside.lastMousedownWasOutside&&o(t,e,i)&&setTimeout((()=>{r(t,i)&&s&&s(t)}),0)}(i,t,e),n=i=>{t._clickOutside.lastMousedownWasOutside=o(i,t,e)};a(t,(t=>{t.addEventListener("click",s,!0),t.addEventListener("mousedown",n,!0)})),t._clickOutside||(t._clickOutside={lastMousedownWasOutside:!0}),t._clickOutside[i.context._uid]={onClick:s,onMousedown:n}},unbind(t,e,i){t._clickOutside&&(a(t,(e=>{var s;if(!e||!(null===(s=t._clickOutside)||void 0===s?void 0:s[i.context._uid]))return;const{onClick:n,onMousedown:o}=t._clickOutside[i.context._uid];e.removeEventListener("click",n,!0),e.removeEventListener("mousedown",o,!0)})),delete t._clickOutside[i.context._uid])}}},8356:(t,e,i)=>{i.d(e,{A:()=>l});var s=i(8573),n=i(1290),o=i(3041),r=i(7290),a=i(7098);const l=(0,o.A)(s.A,n.A).extend({name:"activatable",props:{activator:{default:null,validator:t=>["string","object"].includes(typeof t)},disabled:Boolean,internalActivator:Boolean,openOnClick:{type:Boolean,default:!0},openOnHover:Boolean,openOnFocus:Boolean},data:()=>({activatorElement:null,activatorNode:[],events:["click","mouseenter","mouseleave","focus"],listeners:{}}),watch:{activator:"resetActivator",openOnFocus:"resetActivator",openOnHover:"resetActivator"},mounted(){const t=(0,r.fo)(this,"activator",!0);t&&["v-slot","normal"].includes(t)&&(0,a.yA)('The activator slot must be bound, try \'<template v-slot:activator="{ on }"><v-btn v-on="on">\'',this),this.addActivatorEvents()},beforeDestroy(){this.removeActivatorEvents()},methods:{addActivatorEvents(){if(!this.activator||this.disabled||!this.getActivator())return;this.listeners=this.genActivatorListeners();const t=Object.keys(this.listeners);for(const e of t)this.getActivator().addEventListener(e,this.listeners[e])},genActivator(){const t=(0,r.$c)(this,"activator",Object.assign(this.getValueProxy(),{on:this.genActivatorListeners(),attrs:this.genActivatorAttributes()}))||[];return this.activatorNode=t,t},genActivatorAttributes(){return{role:this.openOnClick&&!this.openOnHover?"button":void 0,"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genActivatorListeners(){if(this.disabled)return{};const t={};return this.openOnHover?(t.mouseenter=t=>{this.getActivator(t),this.runDelay("open")},t.mouseleave=t=>{this.getActivator(t),this.runDelay("close")}):this.openOnClick&&(t.click=t=>{const e=this.getActivator(t);e&&e.focus(),t.stopPropagation(),this.isActive=!this.isActive}),this.openOnFocus&&(t.focus=t=>{this.getActivator(t),t.stopPropagation(),this.isActive=!this.isActive}),t},getActivator(t){if(this.activatorElement)return this.activatorElement;let e=null;if(this.activator){const t=this.internalActivator?this.$el:document;e="string"==typeof this.activator?t.querySelector(this.activator):this.activator.$el?this.activator.$el:this.activator}else if(1===this.activatorNode.length||this.activatorNode.length&&!t){const t=this.activatorNode[0].componentInstance;e=t&&t.$options.mixins&&t.$options.mixins.some((t=>t.options&&["activatable","menuable"].includes(t.options.name)))?t.getActivator():this.activatorNode[0].elm}else t&&(e=t.currentTarget||t.target);return this.activatorElement=(null==e?void 0:e.nodeType)===Node.ELEMENT_NODE?e:null,this.activatorElement},getContentSlot(){return(0,r.$c)(this,"default",this.getValueProxy(),!0)},getValueProxy(){const t=this;return{get value(){return t.isActive},set value(e){t.isActive=e}}},removeActivatorEvents(){if(!this.activator||!this.activatorElement)return;const t=Object.keys(this.listeners);for(const e of t)this.activatorElement.removeEventListener(e,this.listeners[e]);this.listeners={}},resetActivator(){this.removeActivatorEvents(),this.activatorElement=null,this.getActivator(),this.addActivatorEvents()}}})},8573:(t,e,i)=>{i.d(e,{A:()=>s});const s=i(9340).Ay.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:()=>({openTimeout:void 0,closeTimeout:void 0}),methods:{clearDelay(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay(t,e){this.clearDelay();const i=parseInt(this[`${t}Delay`],10);this[`${t}Timeout`]=setTimeout(e||(()=>{this.isActive={open:!0,close:!1}[t]}),i)}}})},1929:(t,e,i)=>{function s(t){const e=[];for(let i=0;i<t.length;i++){const n=t[i];n.isActive&&n.isDependent?e.push(n):e.push(...s(n.$children))}return e}i.d(e,{A:()=>n});const n=(0,i(3041).A)().extend({name:"dependent",data:()=>({closeDependents:!0,isActive:!1,isDependent:!0}),watch:{isActive(t){if(t)return;const e=this.getOpenDependents();for(let t=0;t<e.length;t++)e[t].isActive=!1}},methods:{getOpenDependents(){return this.closeDependents?s(this.$children):[]},getOpenDependentElements(){const t=[],e=this.getOpenDependents();for(let i=0;i<e.length;i++)t.push(...e[i].getClickableDependentElements());return t},getClickableDependentElements(){const t=[this.$el];return this.$refs.content&&t.push(this.$refs.content),this.overlay&&t.push(this.overlay.$el),t.push(...this.getOpenDependentElements()),t}}})},8613:(t,e,i)=>{i.d(e,{A:()=>l});var s=i(6022),n=i(7290),o=i(3041),r=i(7098);function a(t){t.forEach((t=>{t.elm&&t.elm.parentNode&&t.elm.parentNode.removeChild(t.elm)}))}const l=(0,o.A)(s.A).extend({name:"detachable",props:{attach:{default:!1,validator:function(t){const e=typeof t;return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}},contentClass:{type:String,default:""}},data:()=>({activatorNode:null,hasDetached:!1}),watch:{attach(){this.hasDetached=!1,this.initDetach()},hasContent(){this.$nextTick(this.initDetach)}},beforeMount(){this.$nextTick((()=>{this.activatorNode&&(Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode]).forEach((t=>{if(!t.elm)return;if(!this.$el.parentNode)return;const e=this.$el===this.$el.parentNode.firstChild?this.$el:this.$el.nextSibling;this.$el.parentNode.insertBefore(t.elm,e)}))}))},mounted(){this.hasContent&&this.initDetach()},deactivated(){this.isActive=!1},beforeDestroy(){this.$refs.content&&this.$refs.content.parentNode&&this.$refs.content.parentNode.removeChild(this.$refs.content)},destroyed(){if(this.activatorNode){const t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];if(this.$el.isConnected){const e=new MutationObserver((i=>{i.some((t=>Array.from(t.removedNodes).includes(this.$el)))&&(e.disconnect(),a(t))}));e.observe(this.$el.parentNode,{subtree:!1,childList:!0})}else a(t)}},methods:{getScopeIdAttrs(){const t=(0,n.no)(this.$vnode,"context.$options._scopeId");return t&&{[t]:""}},initDetach(){if(this._isDestroyed||!this.$refs.content||this.hasDetached||""===this.attach||!0===this.attach||"attach"===this.attach)return;let t;t=!1===this.attach?document.querySelector("[data-app]"):"string"==typeof this.attach?document.querySelector(this.attach):this.attach,t?(t.appendChild(this.$refs.content),this.hasDetached=!0):(0,r.OP)(`Unable to locate target ${this.attach||"[data-app]"}`,this)}}})},4442:(t,e,i)=>{i.d(e,{G:()=>a,W:()=>r});var s=i(9340),n=i(7098);function o(t,e){return()=>(0,n.OP)(`The ${t} component must be used inside a ${e}`)}function r(t,e,i){const n=e&&i?{register:o(e,i),unregister:o(e,i)}:null;return s.Ay.extend({name:"registrable-inject",inject:{[t]:{default:n}}})}function a(t,e=!1){return s.Ay.extend({name:"registrable-provide",provide(){return{[t]:e?this:{register:this.register,unregister:this.unregister}}}})}},4994:(t,e,i)=>{i.d(e,{A:()=>o});var s=i(9340),n=i(7290);const o=s.Ay.extend().extend({name:"stackable",data:()=>({stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}),computed:{activeZIndex(){if("undefined"==typeof window)return 0;const t=this.stackElement||this.$refs.content,e=this.isActive?this.getMaxZIndex(this.stackExclude||[t])+2:(0,n.fl)(t);return null==e?e:parseInt(e)}},methods:{getMaxZIndex(t=[]){const e=this.$el,i=[this.stackMinZIndex,(0,n.fl)(e)],s=[...document.getElementsByClassName("v-menu__content--active"),...document.getElementsByClassName("v-dialog__content--active")];for(let e=0;e<s.length;e++)t.includes(s[e])||i.push((0,n.fl)(s[e]));return Math.max(...i)}}})},7503:(t,e,i)=>{i.d(e,{I:()=>a});var s=i(5247),n=i(9868),o=i(6943);function r(t,e={}){const i={container:document.scrollingElement||document.body||document.documentElement,duration:500,offset:0,easing:"easeInOutCubic",appOffset:!0,...e},s=(0,o.M)(i.container);if(i.appOffset&&r.framework.application){const t=s.classList.contains("v-navigation-drawer"),e=s.classList.contains("v-navigation-drawer--clipped"),{bar:n,top:o}=r.framework.application;i.offset+=n,t&&!e||(i.offset+=o)}const a=performance.now();let l;l="number"==typeof t?(0,o.A)(t)-i.offset:(0,o.A)(t)-(0,o.A)(s)-i.offset;const c=s.scrollTop;if(l===c)return Promise.resolve(l);const d="function"==typeof i.easing?i.easing:n[i.easing];if(!d)throw new TypeError(`Easing function "${i.easing}" not found.`);return new Promise((t=>requestAnimationFrame((function e(n){const o=n-a,r=Math.abs(i.duration?Math.min(o/i.duration,1):1);s.scrollTop=Math.floor(c+(l-c)*d(r));const h=(s===document.body?document.documentElement.clientHeight:s.clientHeight)+s.scrollTop>=s.scrollHeight;if(1===r||l>s.scrollTop&&h)return t(l);requestAnimationFrame(e)}))))}r.framework={},r.init=()=>{};class a extends s.k{constructor(){return super(),r}}a.property="goTo"},7290:(t,e,i)=>{i.d(e,{$c:()=>k,BN:()=>b,D9:()=>x,Dg:()=>v,Gn:()=>n,HP:()=>y,K9:()=>C,LJ:()=>l,P4:()=>a,PT:()=>w,Zb:()=>$,bD:()=>c,d7:()=>o,fF:()=>u,fl:()=>h,fo:()=>E,g8:()=>g,kW:()=>p,no:()=>d,qE:()=>O,uP:()=>f});var s=i(9340);function n(t,e="div",i){return s.Ay.extend({name:i||t.replace(/__/g,"-"),functional:!0,props:{tag:{type:String,default:e}},render:(e,{data:i,props:s,children:n})=>(i.staticClass=`${t} ${i.staticClass||""}`.trim(),e(s.tag,i,n))})}function o(t,e,i,s=!1){const n=o=>{i(o),t.removeEventListener(e,n,s)};t.addEventListener(e,n,s)}let r=!1;try{if("undefined"!=typeof window){const t=Object.defineProperty({},"passive",{get:()=>{r=!0}});window.addEventListener("testListener",t,t),window.removeEventListener("testListener",t,t)}}catch(t){console.warn(t)}function a(t,e,i,s){t.addEventListener(e,i,!!r&&s)}function l(t,e,i){const s=e.length-1;if(s<0)return void 0===t?i:t;for(let n=0;n<s;n++){if(null==t)return i;t=t[e[n]]}return null==t||void 0===t[e[s]]?i:t[e[s]]}function c(t,e){if(t===e)return!0;if(t instanceof Date&&e instanceof Date&&t.getTime()!==e.getTime())return!1;if(t!==Object(t)||e!==Object(e))return!1;const i=Object.keys(t);return i.length===Object.keys(e).length&&i.every((i=>c(t[i],e[i])))}function d(t,e,i){return null!=t&&e&&"string"==typeof e?void 0!==t[e]?t[e]:l(t,(e=(e=e.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),i):i}function h(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return 0;return+window.getComputedStyle(t).getPropertyValue("z-index")||h(t.parentNode)}function u(t,e){const i={};for(let s=0;s<e.length;s++){const n=e[s];void 0!==t[n]&&(i[n]=t[n])}return i}function v(t,e="px"){return null==t||""===t?void 0:isNaN(+t)?String(t):`${Number(t)}${e}`}function p(t){return(t||"").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function m(t){return null!==t&&"object"==typeof t}const f=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function g(t,e){const i=t.$vuetify.icons.component;if(e.startsWith("$")){const i=d(t,`$vuetify.icons.values.${e.split("$").pop().split(".").pop()}`,e);if("string"!=typeof i)return i;e=i}return null==i?e:{component:i,props:{icon:e}}}function y(t){return Object.keys(t)}const A=/-(\w)/g,w=t=>t.replace(A,((t,e)=>e?e.toUpperCase():""));function $(t){return t.charAt(0).toUpperCase()+t.slice(1)}function b(t){return null!=t?Array.isArray(t)?t:[t]:[]}function E(t,e,i){return t.$slots.hasOwnProperty(e)&&t.$scopedSlots.hasOwnProperty(e)&&t.$scopedSlots[e].name?i?"v-slot":"scoped":t.$slots.hasOwnProperty(e)?"normal":t.$scopedSlots.hasOwnProperty(e)?"scoped":void 0}function k(t,e="default",i,s=!1){const n=p(e);return t.$scopedSlots.hasOwnProperty(e)?t.$scopedSlots[e](i instanceof Function?i():i):t.$scopedSlots.hasOwnProperty(n)?t.$scopedSlots[n](i instanceof Function?i():i):!t.$slots.hasOwnProperty(e)||i&&!s?!t.$slots.hasOwnProperty(n)||i&&!s?void 0:t.$slots[n]:t.$slots[e]}function O(t,e=0,i=1){return Math.max(e,Math.min(i,t))}function x(t={},e={}){for(const i in e){const s=t[i],n=e[i];m(s)&&m(n)?t[i]=x(s,n):t[i]=n}return t}function C(t){if(t.composedPath)return t.composedPath();const e=[];let i=t.target;for(;i;){if(e.push(i),"HTML"===i.tagName)return e.push(document),e.push(window),e;i=i.parentElement}return e}}}]);