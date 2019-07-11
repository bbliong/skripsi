define(["exports","meta","require"],function(_exports,meta,_require){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.elementIsScrollLocked=elementIsScrollLocked;_exports.pushScrollLock=pushScrollLock;_exports.removeScrollLock=removeScrollLock;_exports._hasCachedLockedElement=_hasCachedLockedElement;_exports._hasCachedUnlockedElement=_hasCachedUnlockedElement;_exports._composedTreeContains=_composedTreeContains;_exports._scrollInteractionHandler=_scrollInteractionHandler;_exports._lockScrollInteractions=_lockScrollInteractions;_exports._unlockScrollInteractions=_unlockScrollInteractions;_exports._shouldPreventScrolling=_shouldPreventScrolling;_exports._getScrollableNodes=_getScrollableNodes;_exports._getScrollingNode=_getScrollingNode;_exports._getScrollInfo=_getScrollInfo;_exports.mixinBehaviors=mixinBehaviors;_exports.calculateSplices=calculateSplices;_exports.dashToCamelCase=dashToCamelCase;_exports.camelToDashCase=camelToDashCase;_exports.deepTargetFind=deepTargetFind;_exports.addListener=addListener;_exports.removeListener=removeListener;_exports.register=register$1;_exports.setTouchAction=setTouchAction;_exports.prevent=prevent;_exports.resetMouseCanceller=resetMouseCanceller;_exports.isPath=isPath;_exports.root=root;_exports.isAncestor=isAncestor;_exports.isDescendant=isDescendant;_exports.translate=translate;_exports.matches=matches;_exports.normalize=normalize;_exports.split=split;_exports.get=get;_exports.set=set;_exports.flush$2=flush;_exports.beforeNextRender=beforeNextRender;_exports.afterNextRender=afterNextRender;_exports.resolveUrl=resolveUrl;_exports.resolveCss=resolveCss;_exports.pathFromUrl=pathFromUrl;_exports.stylesFromModules=stylesFromModules;_exports.stylesFromModule=stylesFromModule;_exports.stylesFromTemplate=stylesFromTemplate;_exports.stylesFromModuleImports=stylesFromModuleImports;_exports.cssFromModules=cssFromModules;_exports.cssFromModule=cssFromModule;_exports.cssFromTemplate=cssFromTemplate;_exports.cssFromModuleImports=cssFromModuleImports;_exports.incrementInstanceCount=incrementInstanceCount;_exports.register$1=register;_exports.dumpRegistrations=dumpRegistrations;_exports.templatize=templatize;_exports.modelForElement=modelForElement;_exports.invalidate=invalidate;_exports.invalidateTemplate=invalidateTemplate;_exports.isValid=isValid;_exports.templateIsValid=templateIsValid;_exports.isValidating=isValidating;_exports.templateIsValidating=templateIsValidating;_exports.startValidating=startValidating;_exports.startValidatingTemplate=startValidatingTemplate;_exports.elementsAreInvalid=elementsAreInvalid;_exports.updateNativeProperties=updateNativeProperties;_exports.getComputedStyleValue=getComputedStyleValue;_exports.detectMixin=detectMixin;_exports.parse=parse;_exports.stringify=stringify;_exports.removeCustomPropAssignment=removeCustomPropAssignment;_exports.$documentWaitDefault=documentWait;_exports.toCssText=toCssText;_exports.rulesForStyle=rulesForStyle;_exports.isKeyframesSelector=isKeyframesSelector;_exports.forEachRule=forEachRule;_exports.applyCss=applyCss;_exports.createScopeStyle=createScopeStyle;_exports.applyStylePlaceHolder=applyStylePlaceHolder;_exports.applyStyle=applyStyle;_exports.isTargetedBuild=isTargetedBuild;_exports.findMatchingParen=findMatchingParen;_exports.processVariableAndFallback=processVariableAndFallback;_exports.setElementClassRaw=setElementClassRaw;_exports.getIsExtends=getIsExtends;_exports.gatherStyleText=gatherStyleText;_exports.splitSelectorList=splitSelectorList;_exports.getCssBuild=getCssBuild;_exports.elementHasBuiltCss=elementHasBuiltCss;_exports.getBuildComment=getBuildComment;_exports.isOptimalCssBuild=isOptimalCssBuild;_exports.processUnscopedStyle=processUnscopedStyle;_exports.isUnscopedStyle=isUnscopedStyle;_exports.$vaadinGridSortColumn=_exports.$vaadinGridSelectionMixin=_exports.$vaadinGridScroller=_exports.$vaadinGridScrollMixin=_exports.$vaadinGridRowDetailsMixin=_exports.$vaadinGridKeyboardNavigationMixin=_exports.$vaadinGridFilterMixin=_exports.$vaadinGridEventContextMixin=_exports.$vaadinGridDynamicColumnsMixin=_exports.$vaadinGridDragAndDropMixin=_exports.$vaadinGridDataProviderMixin=_exports.$vaadinGridColumn=_exports.$vaadinGridColumnResizingMixin=_exports.$vaadinGridColumnReorderingMixin=_exports.$vaadinGridArrayDataProviderMixin=_exports.$vaadinGridActiveItemMixin=_exports.$vaadinGridA11yMixin=_exports.$ironList=_exports.$vaadinFormLayout=_exports.$vaadinElementMixin=_exports.$vaadinDevelopmentModeDetector=_exports.$vaadinDatePicker=_exports.$vaadinDatePickerMixin=_exports.$vaadinDatePickerHelper=_exports.$vaadinControlStateMixin=_exports.$vaadinCheckbox=_exports.$vaadinButton=_exports.$polymerLegacy=_exports.$polymerElement=_exports.$wrap=_exports.$templatize=_exports.$telemetry=_exports.$styleGather=_exports.$settings=_exports.$resolveUrl=_exports.$renderStatus=_exports.$path=_exports.$mixin=_exports.$htmlTag=_exports.$gestures=_exports.$flush=_exports.$flattenedNodesObserver=_exports.$debounce=_exports.$caseMap=_exports.$async=_exports.$arraySplice=_exports.$templateStamp=_exports.$propertyEffects=_exports.$propertyAccessors=_exports.$propertiesMixin=_exports.$propertiesChanged=_exports.$mutableData=_exports.$gestureEventListeners=_exports.$elementMixin=_exports.$disableUpgradeMixin=_exports.$dirMixin=_exports.$templatizerBehavior=_exports.$polymerDom=_exports.$polymerFn=_exports.$mutableDataBehavior=_exports.$legacyElementMixin=_exports.$class=_exports.$domRepeat=_exports.$domModule=_exports.$domIf=_exports.$domBind=_exports.$customStyle=_exports.$arraySelector=_exports.$paperMenuButton=_exports.$paperItemBehavior=_exports.$paperInputBehavior=_exports.$paperInputAddonBehavior=_exports.$paperRippleBehavior=_exports.$paperInkyFocusBehavior=_exports.$paperButtonBehavior=_exports.$neonAnimationRunnerBehavior=_exports.$neonAnimationBehavior=_exports.$neonAnimatableBehavior=_exports.$ironValidatableBehavior=_exports.$ironSelection=_exports.$ironSelectable=_exports.$ironMultiSelectable=_exports.$ironScrollTargetBehavior=_exports.$ironResizableBehavior=_exports.$ironScrollManager=_exports.$ironOverlayManager=_exports.$ironOverlayBehavior=_exports.$ironFocusablesHelper=_exports.$ironMeta=_exports.$ironMenuBehavior=_exports.$ironFormElementBehavior=_exports.$ironFitBehavior=_exports.$ironControlState=_exports.$ironButtonState=_exports.$ironA11yKeysBehavior=_exports.$ironA11yAnnouncer=_exports.$appRouteConverterBehavior=_exports.$helpers=_exports.$appScrollEffectsBehavior=_exports.$appLayoutBehavior=void 0;_exports.Polymer$1=_exports.Polymer=_exports.OptionalMutableDataBehavior=_exports.MutableDataBehavior=_exports.LegacyElementMixin=_exports.Class=_exports.DomRepeat=_exports.DomModule=_exports.DomIf=_exports.DomBind=_exports.CustomStyle=_exports.ArraySelector=_exports.ArraySelectorMixin=_exports.PaperMenuButton=_exports.PaperItemBehavior=_exports.PaperItemBehaviorImpl=_exports.PaperInputBehavior=_exports.PaperInputBehaviorImpl=_exports.PaperInputHelper=_exports.PaperInputAddonBehavior=_exports.PaperRippleBehavior=_exports.PaperInkyFocusBehavior=_exports.PaperInkyFocusBehaviorImpl=_exports.PaperButtonBehavior=_exports.PaperButtonBehaviorImpl=_exports.NeonAnimationRunnerBehavior=_exports.NeonAnimationRunnerBehaviorImpl=_exports.NeonAnimationBehavior=_exports.NeonAnimatableBehavior=_exports.IronValidatableBehavior=_exports.IronValidatableBehaviorMeta=_exports.IronSelection=_exports.IronSelectableBehavior=_exports.IronMultiSelectableBehavior=_exports.IronMultiSelectableBehaviorImpl=_exports.IronScrollTargetBehavior=_exports.IronResizableBehavior=_exports._boundScrollHandler=_exports._unlockedElementCache=_exports._lockedElementCache=_exports._lockingElements=_exports.currentLockingElement=_exports.IronOverlayManager=_exports.IronOverlayManagerClass=_exports.IronOverlayBehavior=_exports.IronOverlayBehaviorImpl=_exports.IronFocusablesHelper=_exports.IronMeta=_exports.IronMenuBehavior=_exports.IronMenuBehaviorImpl=_exports.IronFormElementBehavior=_exports.IronFitBehavior=_exports.IronControlState=_exports.IronButtonState=_exports.IronButtonStateImpl=_exports.IronA11yKeysBehavior=_exports.IronA11yAnnouncer=_exports.AppRouteConverterBehavior=_exports.scroll=_exports.queryAllRoot=_exports.registerEffect=_exports.scrollTimingFunction=_exports._scrollTimer=_exports._scrollEffects=_exports.AppScrollEffectsBehavior=_exports.AppLayoutBehavior=_exports.$globalData=_exports.$unscopedStyleHandler=_exports.$templateMap=_exports.$styleUtil=_exports.$styleSettings=_exports.$documentWait=_exports.$customStyleInterface$1=_exports.$cssParse=_exports.$commonUtils=_exports.$commonRegex=_exports.$applyShim$1=_exports.$applyShimUtils=_exports.$vaadinUsageStatistics=_exports.$vaadinThemePropertyMixin=_exports.$vaadinThemableMixin=_exports.$vaadinTextField=_exports.$vaadinTextFieldMixin=_exports.$vaadinTextArea=_exports.$vaadinPasswordField=_exports.$vaadinNumberField=_exports.$vaadinEmailField=_exports.$vaadinSelect=_exports.$vaadinOverlay=_exports.$vaadinFocusablesHelper=_exports.$version=_exports.$vaadinListMixin=_exports.$vaadinListBox=_exports.$vaadinItem=_exports.$vaadinItemMixin=_exports.$vaadinGrid=_exports.$vaadinGridTemplatizer=_exports.$vaadinGridStylingMixin=_exports.$vaadinGridSorter=_exports.$vaadinGridSortMixin=void 0;_exports.ItemMixin=_exports.GridElement=_exports.Templatizer$1=_exports.StylingMixin=_exports.GridSorterElement=_exports.SortMixin=_exports.GridSortColumnElement=_exports.SelectionMixin=_exports.ScrollerElement=_exports.ScrollMixin=_exports.RowDetailsMixin=_exports.KeyboardNavigationMixin=_exports.FilterMixin=_exports.EventContextMixin=_exports.DynamicColumnsMixin=_exports.DragAndDropMixin=_exports.DataProviderMixin=_exports.ItemCache=_exports.GridColumnElement=_exports.ColumnBaseMixin=_exports.ColumnResizingMixin=_exports.ColumnReorderingMixin=_exports.ArrayDataProviderMixin=_exports.ActiveItemMixin=_exports.A11yMixin=_exports.PolymerIronList=_exports.FormLayoutElement=_exports.ElementMixin=_exports.runIfDevelopmentMode=_exports.DatePickerElement=_exports.DatePickerMixin=_exports.DatePickerHelper=_exports.ControlStateMixin=_exports.CheckboxElement=_exports.ButtonElement=_exports.Base=_exports.PolymerElement=_exports.wrap=_exports.TemplateInstanceBase=_exports.registrations=_exports.instanceCount=_exports.setSyncInitialRender=_exports.syncInitialRender=_exports.setLegacyOptimizations=_exports.legacyOptimizations=_exports.setAllowTemplateFromDomModule=_exports.allowTemplateFromDomModule=_exports.setStrictTemplatePolicy=_exports.strictTemplatePolicy=_exports.setPassiveTouchGestures=_exports.passiveTouchGestures=_exports.setSanitizeDOMValue=_exports.sanitizeDOMValue=_exports.setRootPath=_exports.rootPath=_exports.useNativeCustomElements=_exports.useNativeCSSProperties=_exports.useShadow=_exports.isDeep=_exports.dedupingMixin=_exports.htmlLiteral=_exports.html$2=_exports.html=_exports.html$1=_exports.remove=_exports.add=_exports.findOriginalTarget=_exports.recognizers=_exports.gestures=_exports.FlattenedNodesObserver=_exports.flushDebouncers=_exports.Debouncer=_exports.microTask=_exports.idlePeriod=_exports.animationFrame=_exports.timeOut=_exports.TemplateStamp=_exports.PropertyEffects=_exports.PropertyAccessors=_exports.PropertiesMixin=_exports.PropertiesChanged=_exports.OptionalMutableData=_exports.MutableData=_exports.GestureEventListeners=_exports.updateStyles=_exports.ElementMixin$1=_exports.version$1=_exports.version=_exports.DisableUpgradeMixin=_exports.DirMixin=_exports.Templatizer=_exports.dom=_exports.DomApi=_exports.EventApi=_exports.matchesSelector=_exports.enqueueDebouncer$1=_exports.enqueueDebouncer=_exports.addDebouncer=_exports.flush$1=_exports.flush=void 0;_exports.$globalDataDefault=_exports.scopingAttribute=_exports.$templateMapDefault=_exports.wrap$1=_exports.nativeCssVariables=_exports.disableRuntime=_exports.cssBuild=_exports.nativeShadow=_exports.CustomStyleInterfaceInterface=_exports.$customStyleInterfaceDefault=_exports.CustomStyleProvider=_exports.types=_exports.StyleNode=_exports.HOST_SUFFIX=_exports.HOST_PREFIX=_exports.BRACKETED=_exports.IS_VAR=_exports.MEDIA_MATCH=_exports.ANIMATION_MATCH=_exports.VAR_CONSUMED=_exports.MIXIN_MATCH=_exports.VAR_ASSIGN=_exports.$applyShimDefault=_exports.usageStatistics=_exports.ThemePropertyMixin=_exports.ThemableMixin=_exports.TextFieldElement=_exports.TextFieldMixin=_exports.TextAreaElement=_exports.PasswordFieldElement=_exports.NumberFieldElement=_exports.EmailFieldElement=_exports.SelectElement=_exports.OverlayElement=_exports.FocusablesHelper=_exports.Lumo=_exports.ListMixin=_exports.ListBoxElement=_exports.ItemElement=void 0;meta=babelHelpers.interopRequireWildcard(meta);_require=babelHelpers.interopRequireWildcard(_require);var _Mathsqrt=Math.sqrt,_StringfromCharCode=String.fromCharCode,_Mathmax=Math.max,_Mathround=Math.round,_Mathceil=Math.ceil,_Mathmin=Math.min,_Mathabs=Math.abs,_Mathfloor=Math.floor;const nativeShadow=!(window.ShadyDOM&&window.ShadyDOM.inUse);_exports.nativeShadow=nativeShadow;let nativeCssVariables_;function calcCssVariables(settings){if(settings&&settings.shimcssproperties){nativeCssVariables_=!1}else{nativeCssVariables_=nativeShadow||!!(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)"))}}let cssBuild;_exports.cssBuild=cssBuild;if(window.ShadyCSS&&window.ShadyCSS.cssBuild!==void 0){_exports.cssBuild=cssBuild=window.ShadyCSS.cssBuild}const disableRuntime=!!(window.ShadyCSS&&window.ShadyCSS.disableRuntime);_exports.disableRuntime=disableRuntime;if(window.ShadyCSS&&window.ShadyCSS.nativeCss!==void 0){nativeCssVariables_=window.ShadyCSS.nativeCss}else if(window.ShadyCSS){calcCssVariables(window.ShadyCSS);window.ShadyCSS=void 0}else{calcCssVariables(window.WebComponents&&window.WebComponents.flags)}const nativeCssVariables=nativeCssVariables_;_exports.nativeCssVariables=nativeCssVariables;var styleSettings={nativeShadow:nativeShadow,get cssBuild(){return cssBuild},disableRuntime:disableRuntime,nativeCssVariables:nativeCssVariables};_exports.$styleSettings=styleSettings;"use strict";class StyleNode{constructor(){this.start=0;this.end=0;this.previous=null;this.parent=null;this.rules=null;this.parsedCssText="";this.cssText="";this.atRule=!1;this.type=0;this.keyframesName="";this.selector="";this.parsedSelector=""}}_exports.StyleNode=StyleNode;function parse(text){text=clean(text);return parseCss(lex(text),text)}function clean(cssText){return cssText.replace(RX.comments,"").replace(RX.port,"")}function lex(text){let root=new StyleNode;root.start=0;root.end=text.length;let n=root;for(let i=0,l=text.length;i<l;i++){if(text[i]===OPEN_BRACE){if(!n.rules){n.rules=[]}let p=n,previous=p.rules[p.rules.length-1]||null;n=new StyleNode;n.start=i+1;n.parent=p;n.previous=previous;p.rules.push(n)}else if(text[i]===CLOSE_BRACE){n.end=i+1;n=n.parent||root}}return root}function parseCss(node,text){let t=text.substring(node.start,node.end-1);node.parsedCssText=node.cssText=t.trim();if(node.parent){let ss=node.previous?node.previous.end:node.parent.start;t=text.substring(ss,node.start-1);t=_expandUnicodeEscapes(t);t=t.replace(RX.multipleSpaces," ");t=t.substring(t.lastIndexOf(";")+1);let s=node.parsedSelector=node.selector=t.trim();node.atRule=0===s.indexOf(AT_START);if(node.atRule){if(0===s.indexOf(MEDIA_START)){node.type=types.MEDIA_RULE}else if(s.match(RX.keyframesRule)){node.type=types.KEYFRAMES_RULE;node.keyframesName=node.selector.split(RX.multipleSpaces).pop()}}else{if(0===s.indexOf(VAR_START)){node.type=types.MIXIN_RULE}else{node.type=types.STYLE_RULE}}}let r$=node.rules;if(r$){for(let i=0,l=r$.length,r;i<l&&(r=r$[i]);i++){parseCss(r,text)}}return node}function _expandUnicodeEscapes(s){return s.replace(/\\([0-9a-f]{1,6})\s/gi,function(){let code=arguments[1],repeat=6-code.length;while(repeat--){code="0"+code}return"\\"+code})}function stringify(node,preserveProperties,text=""){let cssText="";if(node.cssText||node.rules){let r$=node.rules;if(r$&&!_hasMixinRules(r$)){for(let i=0,l=r$.length,r;i<l&&(r=r$[i]);i++){cssText=stringify(r,preserveProperties,cssText)}}else{cssText=preserveProperties?node.cssText:removeCustomProps(node.cssText);cssText=cssText.trim();if(cssText){cssText="  "+cssText+"\n"}}}if(cssText){if(node.selector){text+=node.selector+" "+OPEN_BRACE+"\n"}text+=cssText;if(node.selector){text+=CLOSE_BRACE+"\n\n"}}return text}function _hasMixinRules(rules){let r=rules[0];return!!r&&!!r.selector&&0===r.selector.indexOf(VAR_START)}function removeCustomProps(cssText){cssText=removeCustomPropAssignment(cssText);return removeCustomPropApply(cssText)}function removeCustomPropAssignment(cssText){return cssText.replace(RX.customProp,"").replace(RX.mixinProp,"")}function removeCustomPropApply(cssText){return cssText.replace(RX.mixinApply,"").replace(RX.varApply,"")}const types={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3};_exports.types=types;const OPEN_BRACE="{",CLOSE_BRACE="}",RX={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},VAR_START="--",MEDIA_START="@media",AT_START="@";var cssParse={StyleNode:StyleNode,parse:parse,stringify:stringify,removeCustomPropAssignment:removeCustomPropAssignment,types:types};_exports.$cssParse=cssParse;const VAR_ASSIGN=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi;_exports.VAR_ASSIGN=VAR_ASSIGN;const MIXIN_MATCH=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi;_exports.MIXIN_MATCH=MIXIN_MATCH;const VAR_CONSUMED=/(--[\w-]+)\s*([:,;)]|$)/gi;_exports.VAR_CONSUMED=VAR_CONSUMED;const ANIMATION_MATCH=/(animation\s*:)|(animation-name\s*:)/;_exports.ANIMATION_MATCH=ANIMATION_MATCH;const MEDIA_MATCH=/@media\s(.*)/;_exports.MEDIA_MATCH=MEDIA_MATCH;const IS_VAR=/^--/;_exports.IS_VAR=IS_VAR;const BRACKETED=/\{[^}]*\}/g;_exports.BRACKETED=BRACKETED;const HOST_PREFIX="(?:^|[^.#[:])";_exports.HOST_PREFIX=HOST_PREFIX;const HOST_SUFFIX="($|[.:[\\s>+~])";_exports.HOST_SUFFIX=HOST_SUFFIX;var commonRegex={VAR_ASSIGN:VAR_ASSIGN,MIXIN_MATCH:MIXIN_MATCH,VAR_CONSUMED:VAR_CONSUMED,ANIMATION_MATCH:ANIMATION_MATCH,MEDIA_MATCH:MEDIA_MATCH,IS_VAR:IS_VAR,BRACKETED:BRACKETED,HOST_PREFIX:HOST_PREFIX,HOST_SUFFIX:HOST_SUFFIX};_exports.$commonRegex=commonRegex;"use strict";const styleTextSet=new Set,scopingAttribute="shady-unscoped";_exports.scopingAttribute=scopingAttribute;function processUnscopedStyle(style){const text=style.textContent;if(!styleTextSet.has(text)){styleTextSet.add(text);const newStyle=style.cloneNode(!0);document.head.appendChild(newStyle)}}function isUnscopedStyle(style){return style.hasAttribute(scopingAttribute)}var unscopedStyleHandler={scopingAttribute:scopingAttribute,processUnscopedStyle:processUnscopedStyle,isUnscopedStyle:isUnscopedStyle};_exports.$unscopedStyleHandler=unscopedStyleHandler;"use strict";function toCssText(rules,callback){if(!rules){return""}if("string"===typeof rules){rules=parse(rules)}if(callback){forEachRule(rules,callback)}return stringify(rules,nativeCssVariables)}function rulesForStyle(style){if(!style.__cssRules&&style.textContent){style.__cssRules=parse(style.textContent)}return style.__cssRules||null}function isKeyframesSelector(rule){return!!rule.parent&&rule.parent.type===types.KEYFRAMES_RULE}function forEachRule(node,styleRuleCallback,keyframesRuleCallback,onlyActiveRules){if(!node){return}let skipRules=!1,type=node.type;if(onlyActiveRules){if(type===types.MEDIA_RULE){let matchMedia=node.selector.match(MEDIA_MATCH);if(matchMedia){if(!window.matchMedia(matchMedia[1]).matches){skipRules=!0}}}}if(type===types.STYLE_RULE){styleRuleCallback(node)}else if(keyframesRuleCallback&&type===types.KEYFRAMES_RULE){keyframesRuleCallback(node)}else if(type===types.MIXIN_RULE){skipRules=!0}let r$=node.rules;if(r$&&!skipRules){for(let i=0,l=r$.length,r;i<l&&(r=r$[i]);i++){forEachRule(r,styleRuleCallback,keyframesRuleCallback,onlyActiveRules)}}}function applyCss(cssText,moniker,target,contextNode){let style=createScopeStyle(cssText,moniker);applyStyle(style,target,contextNode);return style}function createScopeStyle(cssText,moniker){let style=document.createElement("style");if(moniker){style.setAttribute("scope",moniker)}style.textContent=cssText;return style}let lastHeadApplyNode=null;function applyStylePlaceHolder(moniker){let placeHolder=document.createComment(" Shady DOM styles for "+moniker+" "),after=lastHeadApplyNode?lastHeadApplyNode.nextSibling:null,scope=document.head;scope.insertBefore(placeHolder,after||scope.firstChild);lastHeadApplyNode=placeHolder;return placeHolder}function applyStyle(style,target,contextNode){target=target||document.head;let after=contextNode&&contextNode.nextSibling||target.firstChild;target.insertBefore(style,after);if(!lastHeadApplyNode){lastHeadApplyNode=style}else{let position=style.compareDocumentPosition(lastHeadApplyNode);if(position===Node.DOCUMENT_POSITION_PRECEDING){lastHeadApplyNode=style}}}function isTargetedBuild(buildType){return nativeShadow?"shadow"===buildType:"shady"===buildType}function findMatchingParen(text,start){let level=0;for(let i=start,l=text.length;i<l;i++){if("("===text[i]){level++}else if(")"===text[i]){if(0===--level){return i}}}return-1}function processVariableAndFallback(str,callback){let start=str.indexOf("var(");if(-1===start){return callback(str,"","","")}let end=findMatchingParen(str,start+3),inner=str.substring(start+4,end),prefix=str.substring(0,start),suffix=processVariableAndFallback(str.substring(end+1),callback),comma=inner.indexOf(",");if(-1===comma){return callback(prefix,inner.trim(),"",suffix)}let value=inner.substring(0,comma).trim(),fallback=inner.substring(comma+1).trim();return callback(prefix,value,fallback,suffix)}function setElementClassRaw(element,value){if(nativeShadow){element.setAttribute("class",value)}else{window.ShadyDOM.nativeMethods.setAttribute.call(element,"class",value)}}const wrap=window.ShadyDOM&&window.ShadyDOM.wrap||(node=>node);_exports.wrap$1=wrap;function getIsExtends(element){let localName=element.localName,is="",typeExtension="";if(localName){if(-1<localName.indexOf("-")){is=localName}else{typeExtension=localName;is=element.getAttribute&&element.getAttribute("is")||""}}else{is=element.is;typeExtension=element.extends}return{is,typeExtension}}function gatherStyleText(element){const styleTextParts=[],styles=element.querySelectorAll("style");for(let i=0;i<styles.length;i++){const style=styles[i];if(isUnscopedStyle(style)){if(!nativeShadow){processUnscopedStyle(style);style.parentNode.removeChild(style)}}else{styleTextParts.push(style.textContent);style.parentNode.removeChild(style)}}return styleTextParts.join("").trim()}function splitSelectorList(selector){const parts=[];let part="";for(let i=0;0<=i&&i<selector.length;i++){if("("===selector[i]){const end=findMatchingParen(selector,i);part+=selector.slice(i,end+1);i=end}else if(","===selector[i]){parts.push(part);part=""}else{part+=selector[i]}}if(part){parts.push(part)}return parts}const CSS_BUILD_ATTR="css-build";function getCssBuild(element){if(cssBuild!==void 0){return cssBuild}if(element.__cssBuild===void 0){const attrValue=element.getAttribute(CSS_BUILD_ATTR);if(attrValue){element.__cssBuild=attrValue}else{const buildComment=getBuildComment(element);if(""!==buildComment){removeBuildComment(element)}element.__cssBuild=buildComment}}return element.__cssBuild||""}function elementHasBuiltCss(element){return""!==getCssBuild(element)}function getBuildComment(element){const buildComment="template"===element.localName?element.content.firstChild:element.firstChild;if(buildComment instanceof Comment){const commentParts=buildComment.textContent.trim().split(":");if(commentParts[0]===CSS_BUILD_ATTR){return commentParts[1]}}return""}function isOptimalCssBuild(cssBuild$$1=""){if(""===cssBuild$$1||!nativeCssVariables){return!1}return nativeShadow?"shadow"===cssBuild$$1:"shady"===cssBuild$$1}function removeBuildComment(element){const buildComment="template"===element.localName?element.content.firstChild:element.firstChild;buildComment.parentNode.removeChild(buildComment)}var styleUtil={toCssText:toCssText,rulesForStyle:rulesForStyle,isKeyframesSelector:isKeyframesSelector,forEachRule:forEachRule,applyCss:applyCss,createScopeStyle:createScopeStyle,applyStylePlaceHolder:applyStylePlaceHolder,applyStyle:applyStyle,isTargetedBuild:isTargetedBuild,findMatchingParen:findMatchingParen,processVariableAndFallback:processVariableAndFallback,setElementClassRaw:setElementClassRaw,wrap:wrap,getIsExtends:getIsExtends,gatherStyleText:gatherStyleText,splitSelectorList:splitSelectorList,getCssBuild:getCssBuild,elementHasBuiltCss:elementHasBuiltCss,getBuildComment:getBuildComment,isOptimalCssBuild:isOptimalCssBuild};_exports.$styleUtil=styleUtil;"use strict";function updateNativeProperties(element,properties){for(let p in properties){if(null===p){element.style.removeProperty(p)}else{element.style.setProperty(p,properties[p])}}}function getComputedStyleValue(element,property){const value=window.getComputedStyle(element).getPropertyValue(property);if(!value){return""}else{return value.trim()}}function detectMixin(cssText){const has=MIXIN_MATCH.test(cssText)||VAR_ASSIGN.test(cssText);MIXIN_MATCH.lastIndex=0;VAR_ASSIGN.lastIndex=0;return has}var commonUtils={updateNativeProperties:updateNativeProperties,getComputedStyleValue:getComputedStyleValue,detectMixin:detectMixin};_exports.$commonUtils=commonUtils;"use strict";const APPLY_NAME_CLEAN=/;\s*/m,INITIAL_INHERIT=/^\s*(initial)|(inherit)\s*$/,IMPORTANT=/\s*!important/,MIXIN_VAR_SEP="_-_";let PropertyEntry,DependantsEntry,MixinMapEntry;class MixinMap{constructor(){this._map={}}set(name,props){name=name.trim();this._map[name]={properties:props,dependants:{}}}get(name){name=name.trim();return this._map[name]||null}}let invalidCallback=null;class ApplyShim{constructor(){this._currentElement=null;this._measureElement=null;this._map=new MixinMap}detectMixin(cssText){return detectMixin(cssText)}gatherStyles(template){const styleText=gatherStyleText(template.content);if(styleText){const style=document.createElement("style");style.textContent=styleText;template.content.insertBefore(style,template.content.firstChild);return style}return null}transformTemplate(template,elementName){if(template._gatheredStyle===void 0){template._gatheredStyle=this.gatherStyles(template)}const style=template._gatheredStyle;return style?this.transformStyle(style,elementName):null}transformStyle(style,elementName=""){let ast=rulesForStyle(style);this.transformRules(ast,elementName);style.textContent=toCssText(ast);return ast}transformCustomStyle(style){let ast=rulesForStyle(style);forEachRule(ast,rule=>{if(":root"===rule.selector){rule.selector="html"}this.transformRule(rule)});style.textContent=toCssText(ast);return ast}transformRules(rules,elementName){this._currentElement=elementName;forEachRule(rules,r=>{this.transformRule(r)});this._currentElement=null}transformRule(rule){rule.cssText=this.transformCssText(rule.parsedCssText,rule);if(":root"===rule.selector){rule.selector=":host > *"}}transformCssText(cssText,rule){cssText=cssText.replace(VAR_ASSIGN,(matchText,propertyName,valueProperty,valueMixin)=>this._produceCssProperties(matchText,propertyName,valueProperty,valueMixin,rule));return this._consumeCssProperties(cssText,rule)}_getInitialValueForProperty(property){if(!this._measureElement){this._measureElement=document.createElement("meta");this._measureElement.setAttribute("apply-shim-measure","");this._measureElement.style.all="initial";document.head.appendChild(this._measureElement)}return window.getComputedStyle(this._measureElement).getPropertyValue(property)}_fallbacksFromPreviousRules(startRule){let topRule=startRule;while(topRule.parent){topRule=topRule.parent}const fallbacks={};let seenStartRule=!1;forEachRule(topRule,r=>{seenStartRule=seenStartRule||r===startRule;if(seenStartRule){return}if(r.selector===startRule.selector){Object.assign(fallbacks,this._cssTextToMap(r.parsedCssText))}});return fallbacks}_consumeCssProperties(text,rule){let m=null;while(m=MIXIN_MATCH.exec(text)){let matchText=m[0],mixinName=m[1],idx=m.index,applyPos=idx+matchText.indexOf("@apply"),afterApplyPos=idx+matchText.length,textBeforeApply=text.slice(0,applyPos),textAfterApply=text.slice(afterApplyPos),defaults=rule?this._fallbacksFromPreviousRules(rule):{};Object.assign(defaults,this._cssTextToMap(textBeforeApply));let replacement=this._atApplyToCssProperties(mixinName,defaults);text=`${textBeforeApply}${replacement}${textAfterApply}`;MIXIN_MATCH.lastIndex=idx+replacement.length}return text}_atApplyToCssProperties(mixinName,fallbacks){mixinName=mixinName.replace(APPLY_NAME_CLEAN,"");let vars=[],mixinEntry=this._map.get(mixinName);if(!mixinEntry){this._map.set(mixinName,{});mixinEntry=this._map.get(mixinName)}if(mixinEntry){if(this._currentElement){mixinEntry.dependants[this._currentElement]=!0}let p,parts,f;const properties=mixinEntry.properties;for(p in properties){f=fallbacks&&fallbacks[p];parts=[p,": var(",mixinName,MIXIN_VAR_SEP,p];if(f){parts.push(",",f.replace(IMPORTANT,""))}parts.push(")");if(IMPORTANT.test(properties[p])){parts.push(" !important")}vars.push(parts.join(""))}}return vars.join("; ")}_replaceInitialOrInherit(property,value){let match=INITIAL_INHERIT.exec(value);if(match){if(match[1]){value=this._getInitialValueForProperty(property)}else{value="apply-shim-inherit"}}return value}_cssTextToMap(text,replaceInitialOrInherit=!1){let props=text.split(";"),property,value,out={};for(let i=0,p,sp;i<props.length;i++){p=props[i];if(p){sp=p.split(":");if(1<sp.length){property=sp[0].trim();value=sp.slice(1).join(":");if(replaceInitialOrInherit){value=this._replaceInitialOrInherit(property,value)}out[property]=value}}}return out}_invalidateMixinEntry(mixinEntry){if(!invalidCallback){return}for(let elementName in mixinEntry.dependants){if(elementName!==this._currentElement){invalidCallback(elementName)}}}_produceCssProperties(matchText,propertyName,valueProperty,valueMixin,rule){if(valueProperty){processVariableAndFallback(valueProperty,(prefix,value)=>{if(value&&this._map.get(value)){valueMixin=`@apply ${value};`}})}if(!valueMixin){return matchText}let mixinAsProperties=this._consumeCssProperties(""+valueMixin,rule),prefix=matchText.slice(0,matchText.indexOf("--")),mixinValues=this._cssTextToMap(mixinAsProperties,!0),combinedProps=mixinValues,mixinEntry=this._map.get(propertyName),oldProps=mixinEntry&&mixinEntry.properties;if(oldProps){combinedProps=Object.assign(Object.create(oldProps),mixinValues)}else{this._map.set(propertyName,combinedProps)}let out=[],p,v,needToInvalidate=!1;for(p in combinedProps){v=mixinValues[p];if(v===void 0){v="initial"}if(oldProps&&!(p in oldProps)){needToInvalidate=!0}out.push(`${propertyName}${MIXIN_VAR_SEP}${p}: ${v}`)}if(needToInvalidate){this._invalidateMixinEntry(mixinEntry)}if(mixinEntry){mixinEntry.properties=combinedProps}if(valueProperty){prefix=`${matchText};${prefix}`}return`${prefix}${out.join("; ")};`}}_exports.$applyShimDefault=ApplyShim;ApplyShim.prototype.detectMixin=ApplyShim.prototype.detectMixin;ApplyShim.prototype.transformStyle=ApplyShim.prototype.transformStyle;ApplyShim.prototype.transformCustomStyle=ApplyShim.prototype.transformCustomStyle;ApplyShim.prototype.transformRules=ApplyShim.prototype.transformRules;ApplyShim.prototype.transformRule=ApplyShim.prototype.transformRule;ApplyShim.prototype.transformTemplate=ApplyShim.prototype.transformTemplate;ApplyShim.prototype._separator=MIXIN_VAR_SEP;Object.defineProperty(ApplyShim.prototype,"invalidCallback",{get(){return invalidCallback},set(cb){invalidCallback=cb}});var applyShim={default:ApplyShim};_exports.$applyShim$1=applyShim;"use strict";const templateMap={};_exports.$templateMapDefault=templateMap;var templateMap$1={default:templateMap};_exports.$templateMap=templateMap$1;"use strict";const CURRENT_VERSION="_applyShimCurrentVersion",NEXT_VERSION="_applyShimNextVersion",VALIDATING_VERSION="_applyShimValidatingVersion",promise=Promise.resolve();function invalidate(elementName){let template=templateMap[elementName];if(template){invalidateTemplate(template)}}function invalidateTemplate(template){template[CURRENT_VERSION]=template[CURRENT_VERSION]||0;template[VALIDATING_VERSION]=template[VALIDATING_VERSION]||0;template[NEXT_VERSION]=(template[NEXT_VERSION]||0)+1}function isValid(elementName){let template=templateMap[elementName];if(template){return templateIsValid(template)}return!0}function templateIsValid(template){return template[CURRENT_VERSION]===template[NEXT_VERSION]}function isValidating(elementName){let template=templateMap[elementName];if(template){return templateIsValidating(template)}return!1}function templateIsValidating(template){return!templateIsValid(template)&&template[VALIDATING_VERSION]===template[NEXT_VERSION]}function startValidating(elementName){let template=templateMap[elementName];startValidatingTemplate(template)}function startValidatingTemplate(template){template[VALIDATING_VERSION]=template[NEXT_VERSION];if(!template._validating){template._validating=!0;promise.then(function(){template[CURRENT_VERSION]=template[NEXT_VERSION];template._validating=!1})}}function elementsAreInvalid(){for(let elementName in templateMap){let template=templateMap[elementName];if(!templateIsValid(template)){return!0}}return!1}var applyShimUtils={invalidate:invalidate,invalidateTemplate:invalidateTemplate,isValid:isValid,templateIsValid:templateIsValid,isValidating:isValidating,templateIsValidating:templateIsValidating,startValidating:startValidating,startValidatingTemplate:startValidatingTemplate,elementsAreInvalid:elementsAreInvalid};_exports.$applyShimUtils=applyShimUtils;"use strict";let readyPromise=null,whenReady=window.HTMLImports&&window.HTMLImports.whenReady||null,resolveFn;function documentWait(callback){requestAnimationFrame(function(){if(whenReady){whenReady(callback)}else{if(!readyPromise){readyPromise=new Promise(resolve=>{resolveFn=resolve});if("complete"===document.readyState){resolveFn()}else{document.addEventListener("readystatechange",()=>{if("complete"===document.readyState){resolveFn()}})}}readyPromise.then(function(){callback&&callback()})}})}var documentWait$1={default:documentWait};_exports.$documentWait=documentWait$1;"use strict";let CustomStyleProvider;_exports.CustomStyleProvider=CustomStyleProvider;const SEEN_MARKER="__seenByShadyCSS",CACHED_STYLE="__shadyCSSCachedStyle";let transformFn=null,validateFn=null;class CustomStyleInterface{constructor(){this.customStyles=[];this.enqueued=!1;documentWait(()=>{if(window.ShadyCSS.flushCustomStyles){window.ShadyCSS.flushCustomStyles()}})}enqueueDocumentValidation(){if(this.enqueued||!validateFn){return}this.enqueued=!0;documentWait(validateFn)}addCustomStyle(style){if(!style[SEEN_MARKER]){style[SEEN_MARKER]=!0;this.customStyles.push(style);this.enqueueDocumentValidation()}}getStyleForCustomStyle(customStyle){if(customStyle[CACHED_STYLE]){return customStyle[CACHED_STYLE]}let style;if(customStyle.getStyle){style=customStyle.getStyle()}else{style=customStyle}return style}processStyles(){const cs=this.customStyles;for(let i=0;i<cs.length;i++){const customStyle=cs[i];if(customStyle[CACHED_STYLE]){continue}const style=this.getStyleForCustomStyle(customStyle);if(style){const styleToTransform=style.__appliedElement||style;if(transformFn){transformFn(styleToTransform)}customStyle[CACHED_STYLE]=styleToTransform}}return cs}}_exports.$customStyleInterfaceDefault=CustomStyleInterface;CustomStyleInterface.prototype.addCustomStyle=CustomStyleInterface.prototype.addCustomStyle;CustomStyleInterface.prototype.getStyleForCustomStyle=CustomStyleInterface.prototype.getStyleForCustomStyle;CustomStyleInterface.prototype.processStyles=CustomStyleInterface.prototype.processStyles;Object.defineProperties(CustomStyleInterface.prototype,{transformCallback:{get(){return transformFn},set(fn){transformFn=fn}},validateCallback:{get(){return validateFn},set(fn){let needsEnqueue=!1;if(!validateFn){needsEnqueue=!0}validateFn=fn;if(needsEnqueue){this.enqueueDocumentValidation()}}}});const CustomStyleInterfaceInterface={};_exports.CustomStyleInterfaceInterface=CustomStyleInterfaceInterface;var customStyleInterface={CustomStyleProvider:CustomStyleProvider,default:CustomStyleInterface,CustomStyleInterfaceInterface:CustomStyleInterfaceInterface};_exports.$customStyleInterface$1=customStyleInterface;"use strict";const applyShim$1=new ApplyShim;class ApplyShimInterface{constructor(){this.customStyleInterface=null;applyShim$1.invalidCallback=invalidate}ensure(){if(this.customStyleInterface){return}if(window.ShadyCSS.CustomStyleInterface){this.customStyleInterface=window.ShadyCSS.CustomStyleInterface;this.customStyleInterface.transformCallback=style=>{applyShim$1.transformCustomStyle(style)};this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{if(this.customStyleInterface.enqueued){this.flushCustomStyles()}})}}}prepareTemplate(template,elementName){this.ensure();if(elementHasBuiltCss(template)){return}templateMap[elementName]=template;let ast=applyShim$1.transformTemplate(template,elementName);template._styleAst=ast}flushCustomStyles(){this.ensure();if(!this.customStyleInterface){return}let styles=this.customStyleInterface.processStyles();if(!this.customStyleInterface.enqueued){return}for(let i=0;i<styles.length;i++){let cs=styles[i],style=this.customStyleInterface.getStyleForCustomStyle(cs);if(style){applyShim$1.transformCustomStyle(style)}}this.customStyleInterface.enqueued=!1}styleSubtree(element,properties){this.ensure();if(properties){updateNativeProperties(element,properties)}if(element.shadowRoot){this.styleElement(element);let shadowChildren=element.shadowRoot.children||element.shadowRoot.childNodes;for(let i=0;i<shadowChildren.length;i++){this.styleSubtree(shadowChildren[i])}}else{let children=element.children||element.childNodes;for(let i=0;i<children.length;i++){this.styleSubtree(children[i])}}}styleElement(element){this.ensure();let{is}=getIsExtends(element),template=templateMap[is];if(template&&elementHasBuiltCss(template)){return}if(template&&!templateIsValid(template)){if(!templateIsValidating(template)){this.prepareTemplate(template,is);startValidatingTemplate(template)}let root=element.shadowRoot;if(root){let style=root.querySelector("style");if(style){style.__cssRules=template._styleAst;style.textContent=toCssText(template._styleAst)}}}}styleDocument(properties){this.ensure();this.styleSubtree(document.body,properties)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const applyShimInterface=new ApplyShimInterface;let CustomStyleInterface$$1=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(template,elementName,elementExtends){applyShimInterface.flushCustomStyles();applyShimInterface.prepareTemplate(template,elementName)},prepareTemplateStyles(template,elementName,elementExtends){window.ShadyCSS.prepareTemplate(template,elementName,elementExtends)},prepareTemplateDom(template,elementName){},styleSubtree(element,properties){applyShimInterface.flushCustomStyles();applyShimInterface.styleSubtree(element,properties)},styleElement(element){applyShimInterface.flushCustomStyles();applyShimInterface.styleElement(element)},styleDocument(properties){applyShimInterface.flushCustomStyles();applyShimInterface.styleDocument(properties)},getComputedStyleValue(element,property){return getComputedStyleValue(element,property)},flushCustomStyles(){applyShimInterface.flushCustomStyles()},nativeCss:nativeCssVariables,nativeShadow:nativeShadow,cssBuild:cssBuild,disableRuntime:disableRuntime};if(CustomStyleInterface$$1){window.ShadyCSS.CustomStyleInterface=CustomStyleInterface$$1}}window.ShadyCSS.ApplyShim=applyShim$1;window.JSCompiler_renameProperty=function(prop,obj){return prop};let CSS_URL_RX=/(url\()([^)]*)(\))/g,ABS_URL=/(^\/)|(^#)|(^[\w-\d]*:)/,workingURL,resolveDoc;function resolveUrl(url,baseURI){if(url&&ABS_URL.test(url)){return url}if(workingURL===void 0){workingURL=!1;try{const u=new URL("b","http://a");u.pathname="c%20d";workingURL="http://a/c%20d"===u.href}catch(e){}}if(!baseURI){baseURI=document.baseURI||window.location.href}if(workingURL){return new URL(url,baseURI).href}if(!resolveDoc){resolveDoc=document.implementation.createHTMLDocument("temp");resolveDoc.base=resolveDoc.createElement("base");resolveDoc.head.appendChild(resolveDoc.base);resolveDoc.anchor=resolveDoc.createElement("a");resolveDoc.body.appendChild(resolveDoc.anchor)}resolveDoc.base.href=baseURI;resolveDoc.anchor.href=url;return resolveDoc.anchor.href||url}function resolveCss(cssText,baseURI){return cssText.replace(CSS_URL_RX,function(m,pre,url,post){return pre+"'"+resolveUrl(url.replace(/["']/g,""),baseURI)+"'"+post})}function pathFromUrl(url){return url.substring(0,url.lastIndexOf("/")+1)}var resolveUrl$1={resolveUrl:resolveUrl,resolveCss:resolveCss,pathFromUrl:pathFromUrl};_exports.$resolveUrl=resolveUrl$1;const useShadow=!window.ShadyDOM;_exports.useShadow=useShadow;const useNativeCSSProperties=!!(!window.ShadyCSS||window.ShadyCSS.nativeCss);_exports.useNativeCSSProperties=useNativeCSSProperties;const useNativeCustomElements=!window.customElements.polyfillWrapFlushCallback;_exports.useNativeCustomElements=useNativeCustomElements;let rootPath=pathFromUrl(document.baseURI||window.location.href);_exports.rootPath=rootPath;const setRootPath=function(path){_exports.rootPath=rootPath=path};_exports.setRootPath=setRootPath;let sanitizeDOMValue=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;_exports.sanitizeDOMValue=sanitizeDOMValue;const setSanitizeDOMValue=function(newSanitizeDOMValue){_exports.sanitizeDOMValue=sanitizeDOMValue=newSanitizeDOMValue};_exports.setSanitizeDOMValue=setSanitizeDOMValue;let passiveTouchGestures=!1;_exports.passiveTouchGestures=passiveTouchGestures;const setPassiveTouchGestures=function(usePassive){_exports.passiveTouchGestures=passiveTouchGestures=usePassive};_exports.setPassiveTouchGestures=setPassiveTouchGestures;let strictTemplatePolicy=!1;_exports.strictTemplatePolicy=strictTemplatePolicy;const setStrictTemplatePolicy=function(useStrictPolicy){_exports.strictTemplatePolicy=strictTemplatePolicy=useStrictPolicy};_exports.setStrictTemplatePolicy=setStrictTemplatePolicy;let allowTemplateFromDomModule=!1;_exports.allowTemplateFromDomModule=allowTemplateFromDomModule;const setAllowTemplateFromDomModule=function(allowDomModule){_exports.allowTemplateFromDomModule=allowTemplateFromDomModule=allowDomModule};_exports.setAllowTemplateFromDomModule=setAllowTemplateFromDomModule;let legacyOptimizations=!1;_exports.legacyOptimizations=legacyOptimizations;const setLegacyOptimizations=function(useLegacyOptimizations){_exports.legacyOptimizations=legacyOptimizations=useLegacyOptimizations};_exports.setLegacyOptimizations=setLegacyOptimizations;let syncInitialRender=!1;_exports.syncInitialRender=syncInitialRender;const setSyncInitialRender=function(useSyncInitialRender){_exports.syncInitialRender=syncInitialRender=useSyncInitialRender};_exports.setSyncInitialRender=setSyncInitialRender;var settings={useShadow:useShadow,useNativeCSSProperties:useNativeCSSProperties,useNativeCustomElements:useNativeCustomElements,get rootPath(){return rootPath},setRootPath:setRootPath,get sanitizeDOMValue(){return sanitizeDOMValue},setSanitizeDOMValue:setSanitizeDOMValue,get passiveTouchGestures(){return passiveTouchGestures},setPassiveTouchGestures:setPassiveTouchGestures,get strictTemplatePolicy(){return strictTemplatePolicy},setStrictTemplatePolicy:setStrictTemplatePolicy,get allowTemplateFromDomModule(){return allowTemplateFromDomModule},setAllowTemplateFromDomModule:setAllowTemplateFromDomModule,get legacyOptimizations(){return legacyOptimizations},setLegacyOptimizations:setLegacyOptimizations,get syncInitialRender(){return syncInitialRender},setSyncInitialRender:setSyncInitialRender};_exports.$settings=settings;let dedupeId=0;function MixinFunction(){}MixinFunction.prototype.__mixinApplications;MixinFunction.prototype.__mixinSet;const dedupingMixin=function(mixin){let mixinApplications=mixin.__mixinApplications;if(!mixinApplications){mixinApplications=new WeakMap;mixin.__mixinApplications=mixinApplications}let mixinDedupeId=dedupeId++;function dedupingMixin(base){let baseSet=base.__mixinSet;if(baseSet&&baseSet[mixinDedupeId]){return base}let map=mixinApplications,extended=map.get(base);if(!extended){extended=mixin(base);map.set(base,extended)}let mixinSet=Object.create(extended.__mixinSet||baseSet||null);mixinSet[mixinDedupeId]=!0;extended.__mixinSet=mixinSet;return extended}return dedupingMixin};_exports.dedupingMixin=dedupingMixin;var mixin={dedupingMixin:dedupingMixin};_exports.$mixin=mixin;let modules={},lcModules={};function setModule(id,module){modules[id]=lcModules[id.toLowerCase()]=module}function findModule(id){return modules[id]||lcModules[id.toLowerCase()]}function styleOutsideTemplateCheck(inst){if(inst.querySelector("style")){console.warn("dom-module %s has style outside template",inst.id)}}class DomModule extends HTMLElement{static get observedAttributes(){return["id"]}static import(id,selector){if(id){let m=findModule(id);if(m&&selector){return m.querySelector(selector)}return m}return null}attributeChangedCallback(name,old,value,namespace){if(old!==value){this.register()}}get assetpath(){if(!this.__assetpath){const owner=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,url=resolveUrl(this.getAttribute("assetpath")||"",owner.baseURI);this.__assetpath=pathFromUrl(url)}return this.__assetpath}register(id){id=id||this.id;if(id){if(strictTemplatePolicy&&findModule(id)!==void 0){setModule(id,null);throw new Error(`strictTemplatePolicy: dom-module ${id} re-registered`)}this.id=id;setModule(id,this);styleOutsideTemplateCheck(this)}}}_exports.DomModule=DomModule;DomModule.prototype.modules=modules;customElements.define("dom-module",DomModule);var domModule={DomModule:DomModule};_exports.$domModule=domModule;const MODULE_STYLE_LINK_SELECTOR="link[rel=import][type~=css]",INCLUDE_ATTR="include",SHADY_UNSCOPED_ATTR="shady-unscoped";function importModule(moduleId){return DomModule.import(moduleId)}function styleForImport(importDoc){let container=importDoc.body?importDoc.body:importDoc;const importCss=resolveCss(container.textContent,importDoc.baseURI),style=document.createElement("style");style.textContent=importCss;return style}let templateWithAssetPath;function stylesFromModules(moduleIds){const modules=moduleIds.trim().split(/\s+/),styles=[];for(let i=0;i<modules.length;i++){styles.push(...stylesFromModule(modules[i]))}return styles}function stylesFromModule(moduleId){const m=importModule(moduleId);if(!m){console.warn("Could not find style data in module named",moduleId);return[]}if(m._styles===void 0){const styles=[..._stylesFromModuleImports(m)],template=m.querySelector("template");if(template){styles.push(...stylesFromTemplate(template,m.assetpath))}m._styles=styles}return m._styles}function stylesFromTemplate(template,baseURI){if(!template._styles){const styles=[],e$=template.content.querySelectorAll("style");for(let i=0;i<e$.length;i++){let e=e$[i],include=e.getAttribute(INCLUDE_ATTR);if(include){styles.push(...stylesFromModules(include).filter(function(item,index,self){return self.indexOf(item)===index}))}if(baseURI){e.textContent=resolveCss(e.textContent,baseURI)}styles.push(e)}template._styles=styles}return template._styles}function stylesFromModuleImports(moduleId){let m=importModule(moduleId);return m?_stylesFromModuleImports(m):[]}function _stylesFromModuleImports(module){const styles=[],p$=module.querySelectorAll(MODULE_STYLE_LINK_SELECTOR);for(let i=0,p;i<p$.length;i++){p=p$[i];if(p.import){const importDoc=p.import,unscoped=p.hasAttribute(SHADY_UNSCOPED_ATTR);if(unscoped&&!importDoc._unscopedStyle){const style=styleForImport(importDoc);style.setAttribute(SHADY_UNSCOPED_ATTR,"");importDoc._unscopedStyle=style}else if(!importDoc._style){importDoc._style=styleForImport(importDoc)}styles.push(unscoped?importDoc._unscopedStyle:importDoc._style)}}return styles}function cssFromModules(moduleIds){let modules=moduleIds.trim().split(/\s+/),cssText="";for(let i=0;i<modules.length;i++){cssText+=cssFromModule(modules[i])}return cssText}function cssFromModule(moduleId){let m=importModule(moduleId);if(m&&m._cssText===void 0){let cssText=_cssFromModuleImports(m),t=m.querySelector("template");if(t){cssText+=cssFromTemplate(t,m.assetpath)}m._cssText=cssText||null}if(!m){console.warn("Could not find style data in module named",moduleId)}return m&&m._cssText||""}function cssFromTemplate(template,baseURI){let cssText="";const e$=stylesFromTemplate(template,baseURI);for(let i=0,e;i<e$.length;i++){e=e$[i];if(e.parentNode){e.parentNode.removeChild(e)}cssText+=e.textContent}return cssText}function cssFromModuleImports(moduleId){let m=importModule(moduleId);return m?_cssFromModuleImports(m):""}function _cssFromModuleImports(module){let cssText="",styles=_stylesFromModuleImports(module);for(let i=0;i<styles.length;i++){cssText+=styles[i].textContent}return cssText}var styleGather={stylesFromModules:stylesFromModules,stylesFromModule:stylesFromModule,stylesFromTemplate:stylesFromTemplate,stylesFromModuleImports:stylesFromModuleImports,cssFromModules:cssFromModules,cssFromModule:cssFromModule,cssFromTemplate:cssFromTemplate,cssFromModuleImports:cssFromModuleImports};_exports.$styleGather=styleGather;const wrap$1=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:n=>n;_exports.wrap=wrap$1;var wrap$2={wrap:wrap$1};_exports.$wrap=wrap$2;function isPath(path){return 0<=path.indexOf(".")}function root(path){let dotIndex=path.indexOf(".");if(-1===dotIndex){return path}return path.slice(0,dotIndex)}function isAncestor(base,path){return 0===base.indexOf(path+".")}function isDescendant(base,path){return 0===path.indexOf(base+".")}function translate(base,newBase,path){return newBase+path.slice(base.length)}function matches(base,path){return base===path||isAncestor(base,path)||isDescendant(base,path)}function normalize(path){if(Array.isArray(path)){let parts=[];for(let i=0,args;i<path.length;i++){args=path[i].toString().split(".");for(let j=0;j<args.length;j++){parts.push(args[j])}}return parts.join(".")}else{return path}}function split(path){if(Array.isArray(path)){return normalize(path).split(".")}return path.toString().split(".")}function get(root,path,info){let prop=root,parts=split(path);for(let i=0;i<parts.length;i++){if(!prop){return}let part=parts[i];prop=prop[part]}if(info){info.path=parts.join(".")}return prop}function set(root,path,value){let prop=root,parts=split(path),last=parts[parts.length-1];if(1<parts.length){for(let i=0,part;i<parts.length-1;i++){part=parts[i];prop=prop[part];if(!prop){return}}prop[last]=value}else{prop[path]=value}return parts.join(".")}const isDeep=isPath;_exports.isDeep=isDeep;var path={isPath:isPath,root:root,isAncestor:isAncestor,isDescendant:isDescendant,translate:translate,matches:matches,normalize:normalize,split:split,get:get,set:set,isDeep:isDeep};_exports.$path=path;const caseMap={},DASH_TO_CAMEL=/-[a-z]/g,CAMEL_TO_DASH=/([A-Z])/g;function dashToCamelCase(dash){return caseMap[dash]||(caseMap[dash]=0>dash.indexOf("-")?dash:dash.replace(DASH_TO_CAMEL,m=>m[1].toUpperCase()))}function camelToDashCase(camel){return caseMap[camel]||(caseMap[camel]=camel.replace(CAMEL_TO_DASH,"-$1").toLowerCase())}var caseMap$1={dashToCamelCase:dashToCamelCase,camelToDashCase:camelToDashCase};_exports.$caseMap=caseMap$1;let microtaskCurrHandle=0,microtaskLastHandle=0,microtaskCallbacks=[],microtaskNodeContent=0,microtaskNode=document.createTextNode("");new window.MutationObserver(microtaskFlush).observe(microtaskNode,{characterData:!0});function microtaskFlush(){const len=microtaskCallbacks.length;for(let i=0,cb;i<len;i++){cb=microtaskCallbacks[i];if(cb){try{cb()}catch(e){setTimeout(()=>{throw e})}}}microtaskCallbacks.splice(0,len);microtaskLastHandle+=len}const timeOut={after(delay){return{run(fn){return window.setTimeout(fn,delay)},cancel(handle){window.clearTimeout(handle)}}},run(fn,delay){return window.setTimeout(fn,delay)},cancel(handle){window.clearTimeout(handle)}};_exports.timeOut=timeOut;const animationFrame={run(fn){return window.requestAnimationFrame(fn)},cancel(handle){window.cancelAnimationFrame(handle)}};_exports.animationFrame=animationFrame;const idlePeriod={run(fn){return window.requestIdleCallback?window.requestIdleCallback(fn):window.setTimeout(fn,16)},cancel(handle){window.cancelIdleCallback?window.cancelIdleCallback(handle):window.clearTimeout(handle)}};_exports.idlePeriod=idlePeriod;const microTask={run(callback){microtaskNode.textContent=microtaskNodeContent++;microtaskCallbacks.push(callback);return microtaskCurrHandle++},cancel(handle){const idx=handle-microtaskLastHandle;if(0<=idx){if(!microtaskCallbacks[idx]){throw new Error("invalid async handle: "+handle)}microtaskCallbacks[idx]=null}}};_exports.microTask=microTask;var async={timeOut:timeOut,animationFrame:animationFrame,idlePeriod:idlePeriod,microTask:microTask};_exports.$async=async;const microtask=microTask,PropertiesChanged=dedupingMixin(superClass=>{class PropertiesChanged extends superClass{static createProperties(props){const proto=this.prototype;for(let prop in props){if(!(prop in proto)){proto._createPropertyAccessor(prop)}}}static attributeNameForProperty(property){return property.toLowerCase()}static typeForProperty(name){}_createPropertyAccessor(property,readOnly){this._addPropertyToAttributeMap(property);if(!this.hasOwnProperty("__dataHasAccessor")){this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)}if(!this.__dataHasAccessor[property]){this.__dataHasAccessor[property]=!0;this._definePropertyAccessor(property,readOnly)}}_addPropertyToAttributeMap(property){if(!this.hasOwnProperty("__dataAttributes")){this.__dataAttributes=Object.assign({},this.__dataAttributes)}if(!this.__dataAttributes[property]){const attr=this.constructor.attributeNameForProperty(property);this.__dataAttributes[attr]=property}}_definePropertyAccessor(property,readOnly){Object.defineProperty(this,property,{get(){return this._getProperty(property)},set:readOnly?function(){}:function(value){this._setProperty(property,value)}})}constructor(){super();this.__dataEnabled=!1;this.__dataReady=!1;this.__dataInvalid=!1;this.__data={};this.__dataPending=null;this.__dataOld=null;this.__dataInstanceProps=null;this.__serializing=!1;this._initializeProperties()}ready(){this.__dataReady=!0;this._flushProperties()}_initializeProperties(){for(let p in this.__dataHasAccessor){if(this.hasOwnProperty(p)){this.__dataInstanceProps=this.__dataInstanceProps||{};this.__dataInstanceProps[p]=this[p];delete this[p]}}}_initializeInstanceProperties(props){Object.assign(this,props)}_setProperty(property,value){if(this._setPendingProperty(property,value)){this._invalidateProperties()}}_getProperty(property){return this.__data[property]}_setPendingProperty(property,value,ext){let old=this.__data[property],changed=this._shouldPropertyChange(property,value,old);if(changed){if(!this.__dataPending){this.__dataPending={};this.__dataOld={}}if(this.__dataOld&&!(property in this.__dataOld)){this.__dataOld[property]=old}this.__data[property]=value;this.__dataPending[property]=value}return changed}_invalidateProperties(){if(!this.__dataInvalid&&this.__dataReady){this.__dataInvalid=!0;microtask.run(()=>{if(this.__dataInvalid){this.__dataInvalid=!1;this._flushProperties()}})}}_enableProperties(){if(!this.__dataEnabled){this.__dataEnabled=!0;if(this.__dataInstanceProps){this._initializeInstanceProperties(this.__dataInstanceProps);this.__dataInstanceProps=null}this.ready()}}_flushProperties(){const props=this.__data,changedProps=this.__dataPending,old=this.__dataOld;if(this._shouldPropertiesChange(props,changedProps,old)){this.__dataPending=null;this.__dataOld=null;this._propertiesChanged(props,changedProps,old)}}_shouldPropertiesChange(currentProps,changedProps,oldProps){return!!changedProps}_propertiesChanged(currentProps,changedProps,oldProps){}_shouldPropertyChange(property,value,old){return old!==value&&(old===old||value===value)}attributeChangedCallback(name,old,value,namespace){if(old!==value){this._attributeToProperty(name,value)}if(super.attributeChangedCallback){super.attributeChangedCallback(name,old,value,namespace)}}_attributeToProperty(attribute,value,type){if(!this.__serializing){const map=this.__dataAttributes,property=map&&map[attribute]||attribute;this[property]=this._deserializeValue(value,type||this.constructor.typeForProperty(property))}}_propertyToAttribute(property,attribute,value){this.__serializing=!0;value=3>arguments.length?this[property]:value;this._valueToNodeAttribute(this,value,attribute||this.constructor.attributeNameForProperty(property));this.__serializing=!1}_valueToNodeAttribute(node,value,attribute){const str=this._serializeValue(value);if(str===void 0){node.removeAttribute(attribute)}else{if("class"===attribute||"name"===attribute||"slot"===attribute){node=wrap$1(node)}node.setAttribute(attribute,str)}}_serializeValue(value){switch(typeof value){case"boolean":return value?"":void 0;default:return null!=value?value.toString():void 0;}}_deserializeValue(value,type){switch(type){case Boolean:return null!==value;case Number:return+value;default:return value;}}}return PropertiesChanged});_exports.PropertiesChanged=PropertiesChanged;var propertiesChanged={PropertiesChanged:PropertiesChanged};_exports.$propertiesChanged=propertiesChanged;const nativeProperties={};let proto=HTMLElement.prototype;while(proto){let props=Object.getOwnPropertyNames(proto);for(let i=0;i<props.length;i++){nativeProperties[props[i]]=!0}proto=Object.getPrototypeOf(proto)}function saveAccessorValue(model,property){if(!nativeProperties[property]){let value=model[property];if(value!==void 0){if(model.__data){model._setPendingProperty(property,value)}else{if(!model.__dataProto){model.__dataProto={}}else if(!model.hasOwnProperty(JSCompiler_renameProperty("__dataProto",model))){model.__dataProto=Object.create(model.__dataProto)}model.__dataProto[property]=value}}}}const PropertyAccessors=dedupingMixin(superClass=>{const base=PropertiesChanged(superClass);class PropertyAccessors extends base{static createPropertiesForAttributes(){let a$=this.observedAttributes;for(let i=0;i<a$.length;i++){this.prototype._createPropertyAccessor(dashToCamelCase(a$[i]))}}static attributeNameForProperty(property){return camelToDashCase(property)}_initializeProperties(){if(this.__dataProto){this._initializeProtoProperties(this.__dataProto);this.__dataProto=null}super._initializeProperties()}_initializeProtoProperties(props){for(let p in props){this._setProperty(p,props[p])}}_ensureAttribute(attribute,value){const el=this;if(!el.hasAttribute(attribute)){this._valueToNodeAttribute(el,value,attribute)}}_serializeValue(value){switch(typeof value){case"object":if(value instanceof Date){return value.toString()}else if(value){try{return JSON.stringify(value)}catch(x){return""}}default:return super._serializeValue(value);}}_deserializeValue(value,type){let outValue;switch(type){case Object:try{outValue=JSON.parse(value)}catch(x){outValue=value}break;case Array:try{outValue=JSON.parse(value)}catch(x){outValue=null;console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${value}`)}break;case Date:outValue=isNaN(value)?value+"":+value;outValue=new Date(outValue);break;default:outValue=super._deserializeValue(value,type);break;}return outValue}_definePropertyAccessor(property,readOnly){saveAccessorValue(this,property);super._definePropertyAccessor(property,readOnly)}_hasAccessor(property){return this.__dataHasAccessor&&this.__dataHasAccessor[property]}_isPropertyPending(prop){return!!(this.__dataPending&&prop in this.__dataPending)}}return PropertyAccessors});_exports.PropertyAccessors=PropertyAccessors;var propertyAccessors={PropertyAccessors:PropertyAccessors};_exports.$propertyAccessors=propertyAccessors;const walker=document.createTreeWalker(document,NodeFilter.SHOW_ALL,null,!1),templateExtensions={"dom-if":!0,"dom-repeat":!0};function wrapTemplateExtension(node){let is=node.getAttribute("is");if(is&&templateExtensions[is]){let t=node;t.removeAttribute("is");node=t.ownerDocument.createElement(is);t.parentNode.replaceChild(node,t);node.appendChild(t);while(t.attributes.length){node.setAttribute(t.attributes[0].name,t.attributes[0].value);t.removeAttribute(t.attributes[0].name)}}return node}function findTemplateNode(root,nodeInfo){let parent=nodeInfo.parentInfo&&findTemplateNode(root,nodeInfo.parentInfo);if(parent){walker.currentNode=parent;for(let n=walker.firstChild(),i=0;n;n=walker.nextSibling()){if(nodeInfo.parentIndex===i++){return n}}}else{return root}}function applyIdToMap(inst,map,node,nodeInfo){if(nodeInfo.id){map[nodeInfo.id]=node}}function applyEventListener(inst,node,nodeInfo){if(nodeInfo.events&&nodeInfo.events.length){for(let j=0,e$=nodeInfo.events,e;j<e$.length&&(e=e$[j]);j++){inst._addMethodEventListenerToNode(node,e.name,e.value,inst)}}}function applyTemplateContent(inst,node,nodeInfo){if(nodeInfo.templateInfo){node._templateInfo=nodeInfo.templateInfo}}function createNodeEventHandler(context,eventName,methodName){context=context._methodHost||context;let handler=function(e){if(context[methodName]){context[methodName](e,e.detail)}else{console.warn("listener method `"+methodName+"` not defined")}};return handler}const TemplateStamp=dedupingMixin(superClass=>{class TemplateStamp extends superClass{static _parseTemplate(template,outerTemplateInfo){if(!template._templateInfo){let templateInfo=template._templateInfo={};templateInfo.nodeInfoList=[];templateInfo.stripWhiteSpace=outerTemplateInfo&&outerTemplateInfo.stripWhiteSpace||template.hasAttribute("strip-whitespace");this._parseTemplateContent(template,templateInfo,{parent:null})}return template._templateInfo}static _parseTemplateContent(template,templateInfo,nodeInfo){return this._parseTemplateNode(template.content,templateInfo,nodeInfo)}static _parseTemplateNode(node,templateInfo,nodeInfo){let noted,element=node;if("template"==element.localName&&!element.hasAttribute("preserve-content")){noted=this._parseTemplateNestedTemplate(element,templateInfo,nodeInfo)||noted}else if("slot"===element.localName){templateInfo.hasInsertionPoint=!0}walker.currentNode=element;if(walker.firstChild()){noted=this._parseTemplateChildNodes(element,templateInfo,nodeInfo)||noted}if(element.hasAttributes&&element.hasAttributes()){noted=this._parseTemplateNodeAttributes(element,templateInfo,nodeInfo)||noted}return noted}static _parseTemplateChildNodes(root,templateInfo,nodeInfo){if("script"===root.localName||"style"===root.localName){return}walker.currentNode=root;for(let node=walker.firstChild(),parentIndex=0,next;node;node=next){if("template"==node.localName){node=wrapTemplateExtension(node)}walker.currentNode=node;next=walker.nextSibling();if(node.nodeType===Node.TEXT_NODE){let n=next;while(n&&n.nodeType===Node.TEXT_NODE){node.textContent+=n.textContent;next=walker.nextSibling();root.removeChild(n);n=next}if(templateInfo.stripWhiteSpace&&!node.textContent.trim()){root.removeChild(node);continue}}let childInfo={parentIndex,parentInfo:nodeInfo};if(this._parseTemplateNode(node,templateInfo,childInfo)){childInfo.infoIndex=templateInfo.nodeInfoList.push(childInfo)-1}walker.currentNode=node;if(walker.parentNode()){parentIndex++}}}static _parseTemplateNestedTemplate(node,outerTemplateInfo,nodeInfo){let templateInfo=this._parseTemplate(node,outerTemplateInfo),content=templateInfo.content=node.content.ownerDocument.createDocumentFragment();content.appendChild(node.content);nodeInfo.templateInfo=templateInfo;return!0}static _parseTemplateNodeAttributes(node,templateInfo,nodeInfo){let noted=!1,attrs=Array.from(node.attributes);for(let i=attrs.length-1,a;a=attrs[i];i--){noted=this._parseTemplateNodeAttribute(node,templateInfo,nodeInfo,a.name,a.value)||noted}return noted}static _parseTemplateNodeAttribute(node,templateInfo,nodeInfo,name,value){if("on-"===name.slice(0,3)){node.removeAttribute(name);nodeInfo.events=nodeInfo.events||[];nodeInfo.events.push({name:name.slice(3),value});return!0}else if("id"===name){nodeInfo.id=value;return!0}return!1}static _contentForTemplate(template){let templateInfo=template._templateInfo;return templateInfo&&templateInfo.content||template.content}_stampTemplate(template){if(template&&!template.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate){HTMLTemplateElement.decorate(template)}let templateInfo=this.constructor._parseTemplate(template),nodeInfo=templateInfo.nodeInfoList,content=templateInfo.content||template.content,dom=document.importNode(content,!0);dom.__noInsertionPoint=!templateInfo.hasInsertionPoint;let nodes=dom.nodeList=Array(nodeInfo.length);dom.$={};for(let i=0,l=nodeInfo.length,info,node;i<l&&(info=nodeInfo[i]);i++){node=nodes[i]=findTemplateNode(dom,info);applyIdToMap(this,dom.$,node,info);applyTemplateContent(this,node,info);applyEventListener(this,node,info)}dom=dom;return dom}_addMethodEventListenerToNode(node,eventName,methodName,context){context=context||node;let handler=createNodeEventHandler(context,eventName,methodName);this._addEventListenerToNode(node,eventName,handler);return handler}_addEventListenerToNode(node,eventName,handler){node.addEventListener(eventName,handler)}_removeEventListenerFromNode(node,eventName,handler){node.removeEventListener(eventName,handler)}}return TemplateStamp});_exports.TemplateStamp=TemplateStamp;var templateStamp={TemplateStamp:TemplateStamp};_exports.$templateStamp=templateStamp;let dedupeId$1=0;const TYPES={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},capitalAttributeRegex=/[A-Z]/;let DataTrigger,DataEffect;function ensureOwnEffectMap(model,type){let effects=model[type];if(!effects){effects=model[type]={}}else if(!model.hasOwnProperty(type)){effects=model[type]=Object.create(model[type]);for(let p in effects){let protoFx=effects[p],instFx=effects[p]=Array(protoFx.length);for(let i=0;i<protoFx.length;i++){instFx[i]=protoFx[i]}}}return effects}function runEffects(inst,effects,props,oldProps,hasPaths,extraArgs){if(effects){let ran=!1,id=dedupeId$1++;for(let prop in props){if(runEffectsForProperty(inst,effects,id,prop,props,oldProps,hasPaths,extraArgs)){ran=!0}}return ran}return!1}function runEffectsForProperty(inst,effects,dedupeId,prop,props,oldProps,hasPaths,extraArgs){let ran=!1,rootProperty=hasPaths?root(prop):prop,fxs=effects[rootProperty];if(fxs){for(let i=0,l=fxs.length,fx;i<l&&(fx=fxs[i]);i++){if((!fx.info||fx.info.lastRun!==dedupeId)&&(!hasPaths||pathMatchesTrigger(prop,fx.trigger))){if(fx.info){fx.info.lastRun=dedupeId}fx.fn(inst,prop,props,oldProps,fx.info,hasPaths,extraArgs);ran=!0}}}return ran}function pathMatchesTrigger(path,trigger){if(trigger){let triggerPath=trigger.name;return triggerPath==path||!!(trigger.structured&&isAncestor(triggerPath,path))||!!(trigger.wildcard&&isDescendant(triggerPath,path))}else{return!0}}function runObserverEffect(inst,property,props,oldProps,info){let fn="string"===typeof info.method?inst[info.method]:info.method,changedProp=info.property;if(fn){fn.call(inst,inst.__data[changedProp],oldProps[changedProp])}else if(!info.dynamicFn){console.warn("observer method `"+info.method+"` not defined")}}function runNotifyEffects(inst,notifyProps,props,oldProps,hasPaths){let fxs=inst[TYPES.NOTIFY],notified,id=dedupeId$1++;for(let prop in notifyProps){if(notifyProps[prop]){if(fxs&&runEffectsForProperty(inst,fxs,id,prop,props,oldProps,hasPaths)){notified=!0}else if(hasPaths&&notifyPath(inst,prop,props)){notified=!0}}}let host;if(notified&&(host=inst.__dataHost)&&host._invalidateProperties){host._invalidateProperties()}}function notifyPath(inst,path,props){let rootProperty=root(path);if(rootProperty!==path){let eventName=camelToDashCase(rootProperty)+"-changed";dispatchNotifyEvent(inst,eventName,props[path],path);return!0}return!1}function dispatchNotifyEvent(inst,eventName,value,path){let detail={value:value,queueProperty:!0};if(path){detail.path=path}wrap$1(inst).dispatchEvent(new CustomEvent(eventName,{detail}))}function runNotifyEffect(inst,property,props,oldProps,info,hasPaths){let rootProperty=hasPaths?root(property):property,path=rootProperty!=property?property:null,value=path?get(inst,path):inst.__data[property];if(path&&value===void 0){value=props[property]}dispatchNotifyEvent(inst,info.eventName,value,path)}function handleNotification(event,inst,fromProp,toPath,negate){let value,detail=event.detail,fromPath=detail&&detail.path;if(fromPath){toPath=translate(fromProp,toPath,fromPath);value=detail&&detail.value}else{value=event.currentTarget[fromProp]}value=negate?!value:value;if(!inst[TYPES.READ_ONLY]||!inst[TYPES.READ_ONLY][toPath]){if(inst._setPendingPropertyOrPath(toPath,value,!0,!!fromPath)&&(!detail||!detail.queueProperty)){inst._invalidateProperties()}}}function runReflectEffect(inst,property,props,oldProps,info){let value=inst.__data[property];if(sanitizeDOMValue){value=sanitizeDOMValue(value,info.attrName,"attribute",inst)}inst._propertyToAttribute(property,info.attrName,value)}function runComputedEffects(inst,changedProps,oldProps,hasPaths){let computeEffects=inst[TYPES.COMPUTE];if(computeEffects){let inputProps=changedProps;while(runEffects(inst,computeEffects,inputProps,oldProps,hasPaths)){Object.assign(oldProps,inst.__dataOld);Object.assign(changedProps,inst.__dataPending);inputProps=inst.__dataPending;inst.__dataPending=null}}}function runComputedEffect(inst,property,props,oldProps,info){let result=runMethodEffect(inst,property,props,oldProps,info),computedProp=info.methodInfo;if(inst.__dataHasAccessor&&inst.__dataHasAccessor[computedProp]){inst._setPendingProperty(computedProp,result,!0)}else{inst[computedProp]=result}}function computeLinkedPaths(inst,path,value){let links=inst.__dataLinkedPaths;if(links){let link;for(let a in links){let b=links[a];if(isDescendant(a,path)){link=translate(a,b,path);inst._setPendingPropertyOrPath(link,value,!0,!0)}else if(isDescendant(b,path)){link=translate(b,a,path);inst._setPendingPropertyOrPath(link,value,!0,!0)}}}}function addBinding(constructor,templateInfo,nodeInfo,kind,target,parts,literal){nodeInfo.bindings=nodeInfo.bindings||[];let binding={kind,target,parts,literal,isCompound:1!==parts.length};nodeInfo.bindings.push(binding);if(shouldAddListener(binding)){let{event,negate}=binding.parts[0];binding.listenerEvent=event||camelToDashCase(target)+"-changed";binding.listenerNegate=negate}let index=templateInfo.nodeInfoList.length;for(let i=0,part;i<binding.parts.length;i++){part=binding.parts[i];part.compoundIndex=i;addEffectForBindingPart(constructor,templateInfo,binding,part,index)}}function addEffectForBindingPart(constructor,templateInfo,binding,part,index){if(!part.literal){if("attribute"===binding.kind&&"-"===binding.target[0]){console.warn("Cannot set attribute "+binding.target+" because \"-\" is not a valid attribute starting character")}else{let dependencies=part.dependencies,info={index,binding,part,evaluator:constructor};for(let j=0,trigger;j<dependencies.length;j++){trigger=dependencies[j];if("string"==typeof trigger){trigger=parseArg(trigger);trigger.wildcard=!0}constructor._addTemplatePropertyEffect(templateInfo,trigger.rootProperty,{fn:runBindingEffect,info,trigger})}}}}function runBindingEffect(inst,path,props,oldProps,info,hasPaths,nodeList){let node=nodeList[info.index],binding=info.binding,part=info.part;if(hasPaths&&part.source&&path.length>part.source.length&&"property"==binding.kind&&!binding.isCompound&&node.__isPropertyEffectsClient&&node.__dataHasAccessor&&node.__dataHasAccessor[binding.target]){let value=props[path];path=translate(part.source,binding.target,path);if(node._setPendingPropertyOrPath(path,value,!1,!0)){inst._enqueueClient(node)}}else{let value=info.evaluator._evaluateBinding(inst,part,path,props,oldProps,hasPaths);applyBindingValue(inst,node,binding,part,value)}}function applyBindingValue(inst,node,binding,part,value){value=computeBindingValue(node,value,binding,part);if(sanitizeDOMValue){value=sanitizeDOMValue(value,binding.target,binding.kind,node)}if("attribute"==binding.kind){inst._valueToNodeAttribute(node,value,binding.target)}else{let prop=binding.target;if(node.__isPropertyEffectsClient&&node.__dataHasAccessor&&node.__dataHasAccessor[prop]){if(!node[TYPES.READ_ONLY]||!node[TYPES.READ_ONLY][prop]){if(node._setPendingProperty(prop,value)){inst._enqueueClient(node)}}}else{inst._setUnmanagedPropertyToNode(node,prop,value)}}}function computeBindingValue(node,value,binding,part){if(binding.isCompound){let storage=node.__dataCompoundStorage[binding.target];storage[part.compoundIndex]=value;value=storage.join("")}if("attribute"!==binding.kind){if("textContent"===binding.target||"value"===binding.target&&("input"===node.localName||"textarea"===node.localName)){value=value==void 0?"":value}}return value}function shouldAddListener(binding){return!!binding.target&&"attribute"!=binding.kind&&"text"!=binding.kind&&!binding.isCompound&&"{"===binding.parts[0].mode}function setupBindings(inst,templateInfo){let{nodeList,nodeInfoList}=templateInfo;if(nodeInfoList.length){for(let i=0;i<nodeInfoList.length;i++){let info=nodeInfoList[i],node=nodeList[i],bindings=info.bindings;if(bindings){for(let i=0,binding;i<bindings.length;i++){binding=bindings[i];setupCompoundStorage(node,binding);addNotifyListener(node,inst,binding)}}node.__dataHost=inst}}}function setupCompoundStorage(node,binding){if(binding.isCompound){let storage=node.__dataCompoundStorage||(node.__dataCompoundStorage={}),parts=binding.parts,literals=Array(parts.length);for(let j=0;j<parts.length;j++){literals[j]=parts[j].literal}let target=binding.target;storage[target]=literals;if(binding.literal&&"property"==binding.kind){node[target]=binding.literal}}}function addNotifyListener(node,inst,binding){if(binding.listenerEvent){let part=binding.parts[0];node.addEventListener(binding.listenerEvent,function(e){handleNotification(e,inst,binding.target,part.source,part.negate)})}}function createMethodEffect(model,sig,type,effectFn,methodInfo,dynamicFn){dynamicFn=sig.static||dynamicFn&&("object"!==typeof dynamicFn||dynamicFn[sig.methodName]);let info={methodName:sig.methodName,args:sig.args,methodInfo,dynamicFn};for(let i=0,arg;i<sig.args.length&&(arg=sig.args[i]);i++){if(!arg.literal){model._addPropertyEffect(arg.rootProperty,type,{fn:effectFn,info:info,trigger:arg})}}if(dynamicFn){model._addPropertyEffect(sig.methodName,type,{fn:effectFn,info:info})}}function runMethodEffect(inst,property,props,oldProps,info){let context=inst._methodHost||inst,fn=context[info.methodName];if(fn){let args=inst._marshalArgs(info.args,property,props);return fn.apply(context,args)}else if(!info.dynamicFn){console.warn("method `"+info.methodName+"` not defined")}}const emptyArray=[],IDENT="(?:"+"[a-zA-Z_$][\\w.:$\\-*]*"+")",NUMBER="(?:"+"[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?"+")",SQUOTE_STRING="(?:"+"'(?:[^'\\\\]|\\\\.)*'"+")",DQUOTE_STRING="(?:"+"\"(?:[^\"\\\\]|\\\\.)*\""+")",STRING="(?:"+SQUOTE_STRING+"|"+DQUOTE_STRING+")",ARGUMENT="(?:("+IDENT+"|"+NUMBER+"|"+STRING+")\\s*"+")",ARGUMENTS="(?:"+ARGUMENT+"(?:,\\s*"+ARGUMENT+")*"+")",ARGUMENT_LIST="(?:"+"\\(\\s*"+"(?:"+ARGUMENTS+"?"+")"+"\\)\\s*"+")",BINDING="("+IDENT+"\\s*"+ARGUMENT_LIST+"?"+")",OPEN_BRACKET="(\\[\\[|{{)"+"\\s*",CLOSE_BRACKET="(?:]]|}})",NEGATE="(?:(!)\\s*)?",EXPRESSION=OPEN_BRACKET+NEGATE+BINDING+CLOSE_BRACKET,bindingRegex=new RegExp(EXPRESSION,"g");function literalFromParts(parts){let s="";for(let i=0,literal;i<parts.length;i++){literal=parts[i].literal;s+=literal||""}return s}function parseMethod(expression){let m=expression.match(/([^\s]+?)\(([\s\S]*)\)/);if(m){let methodName=m[1],sig={methodName,static:!0,args:emptyArray};if(m[2].trim()){let args=m[2].replace(/\\,/g,"&comma;").split(",");return parseArgs(args,sig)}else{return sig}}return null}function parseArgs(argList,sig){sig.args=argList.map(function(rawArg){let arg=parseArg(rawArg);if(!arg.literal){sig.static=!1}return arg},this);return sig}function parseArg(rawArg){let arg=rawArg.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),a={name:arg,value:"",literal:!1},fc=arg[0];if("-"===fc){fc=arg[1]}if("0"<=fc&&"9">=fc){fc="#"}switch(fc){case"'":case"\"":a.value=arg.slice(1,-1);a.literal=!0;break;case"#":a.value=+arg;a.literal=!0;break;}if(!a.literal){a.rootProperty=root(arg);a.structured=isPath(arg);if(a.structured){a.wildcard=".*"==arg.slice(-2);if(a.wildcard){a.name=arg.slice(0,-2)}}}return a}function getArgValue(data,props,path){let value=get(data,path);if(value===void 0){value=props[path]}return value}function notifySplices(inst,array,path,splices){inst.notifyPath(path+".splices",{indexSplices:splices});inst.notifyPath(path+".length",array.length)}function notifySplice(inst,array,path,index,addedCount,removed){notifySplices(inst,array,path,[{index:index,addedCount:addedCount,removed:removed,object:array,type:"splice"}])}function upper(name){return name[0].toUpperCase()+name.substring(1)}const PropertyEffects=dedupingMixin(superClass=>{const propertyEffectsBase=TemplateStamp(PropertyAccessors(superClass));class PropertyEffects extends propertyEffectsBase{constructor(){super();this.__isPropertyEffectsClient=!0;this.__dataCounter=0;this.__dataClientsReady;this.__dataPendingClients;this.__dataToNotify;this.__dataLinkedPaths;this.__dataHasPaths;this.__dataCompoundStorage;this.__dataHost;this.__dataTemp;this.__dataClientsInitialized;this.__data;this.__dataPending;this.__dataOld;this.__computeEffects;this.__reflectEffects;this.__notifyEffects;this.__propagateEffects;this.__observeEffects;this.__readOnly;this.__templateInfo}get PROPERTY_EFFECT_TYPES(){return TYPES}_initializeProperties(){super._initializeProperties();hostStack.registerHost(this);this.__dataClientsReady=!1;this.__dataPendingClients=null;this.__dataToNotify=null;this.__dataLinkedPaths=null;this.__dataHasPaths=!1;this.__dataCompoundStorage=this.__dataCompoundStorage||null;this.__dataHost=this.__dataHost||null;this.__dataTemp={};this.__dataClientsInitialized=!1}_initializeProtoProperties(props){this.__data=Object.create(props);this.__dataPending=Object.create(props);this.__dataOld={}}_initializeInstanceProperties(props){let readOnly=this[TYPES.READ_ONLY];for(let prop in props){if(!readOnly||!readOnly[prop]){this.__dataPending=this.__dataPending||{};this.__dataOld=this.__dataOld||{};this.__data[prop]=this.__dataPending[prop]=props[prop]}}}_addPropertyEffect(property,type,effect){this._createPropertyAccessor(property,type==TYPES.READ_ONLY);let effects=ensureOwnEffectMap(this,type)[property];if(!effects){effects=this[type][property]=[]}effects.push(effect)}_removePropertyEffect(property,type,effect){let effects=ensureOwnEffectMap(this,type)[property],idx=effects.indexOf(effect);if(0<=idx){effects.splice(idx,1)}}_hasPropertyEffect(property,type){let effects=this[type];return!!(effects&&effects[property])}_hasReadOnlyEffect(property){return this._hasPropertyEffect(property,TYPES.READ_ONLY)}_hasNotifyEffect(property){return this._hasPropertyEffect(property,TYPES.NOTIFY)}_hasReflectEffect(property){return this._hasPropertyEffect(property,TYPES.REFLECT)}_hasComputedEffect(property){return this._hasPropertyEffect(property,TYPES.COMPUTE)}_setPendingPropertyOrPath(path,value,shouldNotify,isPathNotification){if(isPathNotification||root(Array.isArray(path)?path[0]:path)!==path){if(!isPathNotification){let old=get(this,path);path=set(this,path,value);if(!path||!super._shouldPropertyChange(path,value,old)){return!1}}this.__dataHasPaths=!0;if(this._setPendingProperty(path,value,shouldNotify)){computeLinkedPaths(this,path,value);return!0}}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[path]){return this._setPendingProperty(path,value,shouldNotify)}else{this[path]=value}}return!1}_setUnmanagedPropertyToNode(node,prop,value){if(value!==node[prop]||"object"==typeof value){node[prop]=value}}_setPendingProperty(property,value,shouldNotify){let propIsPath=this.__dataHasPaths&&isPath(property),prevProps=propIsPath?this.__dataTemp:this.__data;if(this._shouldPropertyChange(property,value,prevProps[property])){if(!this.__dataPending){this.__dataPending={};this.__dataOld={}}if(!(property in this.__dataOld)){this.__dataOld[property]=this.__data[property]}if(propIsPath){this.__dataTemp[property]=value}else{this.__data[property]=value}this.__dataPending[property]=value;if(propIsPath||this[TYPES.NOTIFY]&&this[TYPES.NOTIFY][property]){this.__dataToNotify=this.__dataToNotify||{};this.__dataToNotify[property]=shouldNotify}return!0}return!1}_setProperty(property,value){if(this._setPendingProperty(property,value,!0)){this._invalidateProperties()}}_invalidateProperties(){if(this.__dataReady){this._flushProperties()}}_enqueueClient(client){this.__dataPendingClients=this.__dataPendingClients||[];if(client!==this){this.__dataPendingClients.push(client)}}_flushProperties(){this.__dataCounter++;super._flushProperties();this.__dataCounter--}_flushClients(){if(!this.__dataClientsReady){this.__dataClientsReady=!0;this._readyClients();this.__dataReady=!0}else{this.__enableOrFlushClients()}}__enableOrFlushClients(){let clients=this.__dataPendingClients;if(clients){this.__dataPendingClients=null;for(let i=0,client;i<clients.length;i++){client=clients[i];if(!client.__dataEnabled){client._enableProperties()}else if(client.__dataPending){client._flushProperties()}}}}_readyClients(){this.__enableOrFlushClients()}setProperties(props,setReadOnly){for(let path in props){if(setReadOnly||!this[TYPES.READ_ONLY]||!this[TYPES.READ_ONLY][path]){this._setPendingPropertyOrPath(path,props[path],!0)}}this._invalidateProperties()}ready(){this._flushProperties();if(!this.__dataClientsReady){this._flushClients()}if(this.__dataPending){this._flushProperties()}}_propertiesChanged(currentProps,changedProps,oldProps){let hasPaths=this.__dataHasPaths;this.__dataHasPaths=!1;runComputedEffects(this,changedProps,oldProps,hasPaths);let notifyProps=this.__dataToNotify;this.__dataToNotify=null;this._propagatePropertyChanges(changedProps,oldProps,hasPaths);this._flushClients();runEffects(this,this[TYPES.REFLECT],changedProps,oldProps,hasPaths);runEffects(this,this[TYPES.OBSERVE],changedProps,oldProps,hasPaths);if(notifyProps){runNotifyEffects(this,notifyProps,changedProps,oldProps,hasPaths)}if(1==this.__dataCounter){this.__dataTemp={}}}_propagatePropertyChanges(changedProps,oldProps,hasPaths){if(this[TYPES.PROPAGATE]){runEffects(this,this[TYPES.PROPAGATE],changedProps,oldProps,hasPaths)}let templateInfo=this.__templateInfo;while(templateInfo){runEffects(this,templateInfo.propertyEffects,changedProps,oldProps,hasPaths,templateInfo.nodeList);templateInfo=templateInfo.nextTemplateInfo}}linkPaths(to,from){to=normalize(to);from=normalize(from);this.__dataLinkedPaths=this.__dataLinkedPaths||{};this.__dataLinkedPaths[to]=from}unlinkPaths(path){path=normalize(path);if(this.__dataLinkedPaths){delete this.__dataLinkedPaths[path]}}notifySplices(path,splices){let info={path:""},array=get(this,path,info);notifySplices(this,array,info.path,splices)}get(path,root$$1){return get(root$$1||this,path)}set(path,value,root$$1){if(root$$1){set(root$$1,path,value)}else{if(!this[TYPES.READ_ONLY]||!this[TYPES.READ_ONLY][path]){if(this._setPendingPropertyOrPath(path,value,!0)){this._invalidateProperties()}}}}push(path,...items){let info={path:""},array=get(this,path,info),len=array.length,ret=array.push(...items);if(items.length){notifySplice(this,array,info.path,len,items.length,[])}return ret}pop(path){let info={path:""},array=get(this,path,info),hadLength=!!array.length,ret=array.pop();if(hadLength){notifySplice(this,array,info.path,array.length,0,[ret])}return ret}splice(path,start,deleteCount,...items){let info={path:""},array=get(this,path,info);if(0>start){start=array.length-_Mathfloor(-start)}else if(start){start=_Mathfloor(start)}let ret;if(2===arguments.length){ret=array.splice(start)}else{ret=array.splice(start,deleteCount,...items)}if(items.length||ret.length){notifySplice(this,array,info.path,start,items.length,ret)}return ret}shift(path){let info={path:""},array=get(this,path,info),hadLength=!!array.length,ret=array.shift();if(hadLength){notifySplice(this,array,info.path,0,0,[ret])}return ret}unshift(path,...items){let info={path:""},array=get(this,path,info),ret=array.unshift(...items);if(items.length){notifySplice(this,array,info.path,0,items.length,[])}return ret}notifyPath(path,value){let propPath;if(1==arguments.length){let info={path:""};value=get(this,path,info);propPath=info.path}else if(Array.isArray(path)){propPath=normalize(path)}else{propPath=path}if(this._setPendingPropertyOrPath(propPath,value,!0,!0)){this._invalidateProperties()}}_createReadOnlyProperty(property,protectedSetter){this._addPropertyEffect(property,TYPES.READ_ONLY);if(protectedSetter){this["_set"+upper(property)]=function(value){this._setProperty(property,value)}}}_createPropertyObserver(property,method,dynamicFn){let info={property,method,dynamicFn:!!dynamicFn};this._addPropertyEffect(property,TYPES.OBSERVE,{fn:runObserverEffect,info,trigger:{name:property}});if(dynamicFn){this._addPropertyEffect(method,TYPES.OBSERVE,{fn:runObserverEffect,info,trigger:{name:method}})}}_createMethodObserver(expression,dynamicFn){let sig=parseMethod(expression);if(!sig){throw new Error("Malformed observer expression '"+expression+"'")}createMethodEffect(this,sig,TYPES.OBSERVE,runMethodEffect,null,dynamicFn)}_createNotifyingProperty(property){this._addPropertyEffect(property,TYPES.NOTIFY,{fn:runNotifyEffect,info:{eventName:camelToDashCase(property)+"-changed",property:property}})}_createReflectedProperty(property){let attr=this.constructor.attributeNameForProperty(property);if("-"===attr[0]){console.warn("Property "+property+" cannot be reflected to attribute "+attr+" because \"-\" is not a valid starting attribute name. Use a lowercase first letter for the property instead.")}else{this._addPropertyEffect(property,TYPES.REFLECT,{fn:runReflectEffect,info:{attrName:attr}})}}_createComputedProperty(property,expression,dynamicFn){let sig=parseMethod(expression);if(!sig){throw new Error("Malformed computed expression '"+expression+"'")}createMethodEffect(this,sig,TYPES.COMPUTE,runComputedEffect,property,dynamicFn)}_marshalArgs(args,path,props){const data=this.__data,values=[];for(let i=0,l=args.length;i<l;i++){let{name,structured,wildcard,value,literal}=args[i];if(!literal){if(wildcard){const matches$$1=isDescendant(name,path),pathValue=getArgValue(data,props,matches$$1?path:name);value={path:matches$$1?path:name,value:pathValue,base:matches$$1?get(data,name):pathValue}}else{value=structured?getArgValue(data,props,name):data[name]}}values[i]=value}return values}static addPropertyEffect(property,type,effect){this.prototype._addPropertyEffect(property,type,effect)}static createPropertyObserver(property,method,dynamicFn){this.prototype._createPropertyObserver(property,method,dynamicFn)}static createMethodObserver(expression,dynamicFn){this.prototype._createMethodObserver(expression,dynamicFn)}static createNotifyingProperty(property){this.prototype._createNotifyingProperty(property)}static createReadOnlyProperty(property,protectedSetter){this.prototype._createReadOnlyProperty(property,protectedSetter)}static createReflectedProperty(property){this.prototype._createReflectedProperty(property)}static createComputedProperty(property,expression,dynamicFn){this.prototype._createComputedProperty(property,expression,dynamicFn)}static bindTemplate(template){return this.prototype._bindTemplate(template)}_bindTemplate(template,instanceBinding){let templateInfo=this.constructor._parseTemplate(template),wasPreBound=this.__templateInfo==templateInfo;if(!wasPreBound){for(let prop in templateInfo.propertyEffects){this._createPropertyAccessor(prop)}}if(instanceBinding){templateInfo=Object.create(templateInfo);templateInfo.wasPreBound=wasPreBound;if(!wasPreBound&&this.__templateInfo){let last=this.__templateInfoLast||this.__templateInfo;this.__templateInfoLast=last.nextTemplateInfo=templateInfo;templateInfo.previousTemplateInfo=last;return templateInfo}}return this.__templateInfo=templateInfo}static _addTemplatePropertyEffect(templateInfo,prop,effect){let hostProps=templateInfo.hostProps=templateInfo.hostProps||{};hostProps[prop]=!0;let effects=templateInfo.propertyEffects=templateInfo.propertyEffects||{},propEffects=effects[prop]=effects[prop]||[];propEffects.push(effect)}_stampTemplate(template){hostStack.beginHosting(this);let dom=super._stampTemplate(template);hostStack.endHosting(this);let templateInfo=this._bindTemplate(template,!0);templateInfo.nodeList=dom.nodeList;if(!templateInfo.wasPreBound){let nodes=templateInfo.childNodes=[];for(let n=dom.firstChild;n;n=n.nextSibling){nodes.push(n)}}dom.templateInfo=templateInfo;setupBindings(this,templateInfo);if(this.__dataReady){runEffects(this,templateInfo.propertyEffects,this.__data,null,!1,templateInfo.nodeList)}return dom}_removeBoundDom(dom){let templateInfo=dom.templateInfo;if(templateInfo.previousTemplateInfo){templateInfo.previousTemplateInfo.nextTemplateInfo=templateInfo.nextTemplateInfo}if(templateInfo.nextTemplateInfo){templateInfo.nextTemplateInfo.previousTemplateInfo=templateInfo.previousTemplateInfo}if(this.__templateInfoLast==templateInfo){this.__templateInfoLast=templateInfo.previousTemplateInfo}templateInfo.previousTemplateInfo=templateInfo.nextTemplateInfo=null;let nodes=templateInfo.childNodes;for(let i=0,node;i<nodes.length;i++){node=nodes[i];node.parentNode.removeChild(node)}}static _parseTemplateNode(node,templateInfo,nodeInfo){let noted=super._parseTemplateNode(node,templateInfo,nodeInfo);if(node.nodeType===Node.TEXT_NODE){let parts=this._parseBindings(node.textContent,templateInfo);if(parts){node.textContent=literalFromParts(parts)||" ";addBinding(this,templateInfo,nodeInfo,"text","textContent",parts);noted=!0}}return noted}static _parseTemplateNodeAttribute(node,templateInfo,nodeInfo,name,value){let parts=this._parseBindings(value,templateInfo);if(parts){let origName=name,kind="property";if(capitalAttributeRegex.test(name)){kind="attribute"}else if("$"==name[name.length-1]){name=name.slice(0,-1);kind="attribute"}let literal=literalFromParts(parts);if(literal&&"attribute"==kind){if("class"==name&&node.hasAttribute("class")){literal+=" "+node.getAttribute(name)}node.setAttribute(name,literal)}if("input"===node.localName&&"value"===origName){node.setAttribute(origName,"")}node.removeAttribute(origName);if("property"===kind){name=dashToCamelCase(name)}addBinding(this,templateInfo,nodeInfo,kind,name,parts,literal);return!0}else{return super._parseTemplateNodeAttribute(node,templateInfo,nodeInfo,name,value)}}static _parseTemplateNestedTemplate(node,templateInfo,nodeInfo){let noted=super._parseTemplateNestedTemplate(node,templateInfo,nodeInfo),hostProps=nodeInfo.templateInfo.hostProps,mode="{";for(let source in hostProps){let parts=[{mode,source,dependencies:[source]}];addBinding(this,templateInfo,nodeInfo,"property","_host_"+source,parts)}return noted}static _parseBindings(text,templateInfo){let parts=[],lastIndex=0,m;while(null!==(m=bindingRegex.exec(text))){if(m.index>lastIndex){parts.push({literal:text.slice(lastIndex,m.index)})}let mode=m[1][0],negate=!!m[2],source=m[3].trim(),customEvent=!1,notifyEvent="",colon=-1;if("{"==mode&&0<(colon=source.indexOf("::"))){notifyEvent=source.substring(colon+2);source=source.substring(0,colon);customEvent=!0}let signature=parseMethod(source),dependencies=[];if(signature){let{args,methodName}=signature;for(let i=0,arg;i<args.length;i++){arg=args[i];if(!arg.literal){dependencies.push(arg)}}let dynamicFns=templateInfo.dynamicFns;if(dynamicFns&&dynamicFns[methodName]||signature.static){dependencies.push(methodName);signature.dynamicFn=!0}}else{dependencies.push(source)}parts.push({source,mode,negate,customEvent,signature,dependencies,event:notifyEvent});lastIndex=bindingRegex.lastIndex}if(lastIndex&&lastIndex<text.length){let literal=text.substring(lastIndex);if(literal){parts.push({literal:literal})}}if(parts.length){return parts}else{return null}}static _evaluateBinding(inst,part,path,props,oldProps,hasPaths){let value;if(part.signature){value=runMethodEffect(inst,path,props,oldProps,part.signature)}else if(path!=part.source){value=get(inst,part.source)}else{if(hasPaths&&isPath(path)){value=get(inst,path)}else{value=inst.__data[path]}}if(part.negate){value=!value}return value}}return PropertyEffects});_exports.PropertyEffects=PropertyEffects;class HostStack{constructor(){this.stack=[]}registerHost(inst){if(this.stack.length){let host=this.stack[this.stack.length-1];host._enqueueClient(inst)}}beginHosting(inst){this.stack.push(inst)}endHosting(inst){let stackLen=this.stack.length;if(stackLen&&this.stack[stackLen-1]==inst){this.stack.pop()}}}const hostStack=new HostStack;var propertyEffects={PropertyEffects:PropertyEffects};_exports.$propertyEffects=propertyEffects;let instanceCount=0;_exports.instanceCount=instanceCount;function incrementInstanceCount(){_exports.instanceCount=instanceCount=instanceCount+1}const registrations=[];_exports.registrations=registrations;function _regLog(prototype){console.log("["+prototype.is+"]: registered")}function register(prototype){registrations.push(prototype)}function dumpRegistrations(){registrations.forEach(_regLog)}var telemetry={get instanceCount(){return instanceCount},incrementInstanceCount:incrementInstanceCount,registrations:registrations,register:register,dumpRegistrations:dumpRegistrations};_exports.$telemetry=telemetry;function normalizeProperties(props){const output={};for(let p in props){const o=props[p];output[p]="function"===typeof o?{type:o}:o}return output}const PropertiesMixin=dedupingMixin(superClass=>{const base=PropertiesChanged(superClass);function superPropertiesClass(constructor){const superCtor=Object.getPrototypeOf(constructor);return superCtor.prototype instanceof PropertiesMixin?superCtor:null}function ownProperties(constructor){if(!constructor.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",constructor))){let props=null;if(constructor.hasOwnProperty(JSCompiler_renameProperty("properties",constructor))){const properties=constructor.properties;if(properties){props=normalizeProperties(properties)}}constructor.__ownProperties=props}return constructor.__ownProperties}class PropertiesMixin extends base{static get observedAttributes(){if(!this.hasOwnProperty("__observedAttributes")){register(this.prototype);const props=this._properties;this.__observedAttributes=props?Object.keys(props).map(p=>this.attributeNameForProperty(p)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const superCtor=superPropertiesClass(this);if(superCtor){superCtor.finalize()}this.__finalized=!0;this._finalizeClass()}}static _finalizeClass(){const props=ownProperties(this);if(props){this.createProperties(props)}}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const superCtor=superPropertiesClass(this);this.__properties=Object.assign({},superCtor&&superCtor._properties,ownProperties(this))}return this.__properties}static typeForProperty(name){const info=this._properties[name];return info&&info.type}_initializeProperties(){incrementInstanceCount();this.constructor.finalize();super._initializeProperties()}connectedCallback(){if(super.connectedCallback){super.connectedCallback()}this._enableProperties()}disconnectedCallback(){if(super.disconnectedCallback){super.disconnectedCallback()}}}return PropertiesMixin});_exports.PropertiesMixin=PropertiesMixin;var propertiesMixin={PropertiesMixin:PropertiesMixin};_exports.$propertiesMixin=propertiesMixin;const bundledImportMeta={...meta,url:new URL("../node_modules/%40polymer/polymer/lib/mixins/element-mixin.js",meta.url).href},version="3.2.0";_exports.version$1=_exports.version=version;const builtCSS=window.ShadyCSS&&window.ShadyCSS.cssBuild,ElementMixin=dedupingMixin(base=>{const polymerElementBase=PropertiesMixin(PropertyEffects(base));function propertyDefaults(constructor){if(!constructor.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",constructor))){constructor.__propertyDefaults=null;let props=constructor._properties;for(let p in props){let info=props[p];if("value"in info){constructor.__propertyDefaults=constructor.__propertyDefaults||{};constructor.__propertyDefaults[p]=info}}}return constructor.__propertyDefaults}function ownObservers(constructor){if(!constructor.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",constructor))){constructor.__ownObservers=constructor.hasOwnProperty(JSCompiler_renameProperty("observers",constructor))?constructor.observers:null}return constructor.__ownObservers}function createPropertyFromConfig(proto,name,info,allProps){if(info.computed){info.readOnly=!0}if(info.computed){if(proto._hasReadOnlyEffect(name)){console.warn(`Cannot redefine computed property '${name}'.`)}else{proto._createComputedProperty(name,info.computed,allProps)}}if(info.readOnly&&!proto._hasReadOnlyEffect(name)){proto._createReadOnlyProperty(name,!info.computed)}else if(!1===info.readOnly&&proto._hasReadOnlyEffect(name)){console.warn(`Cannot make readOnly property '${name}' non-readOnly.`)}if(info.reflectToAttribute&&!proto._hasReflectEffect(name)){proto._createReflectedProperty(name)}else if(!1===info.reflectToAttribute&&proto._hasReflectEffect(name)){console.warn(`Cannot make reflected property '${name}' non-reflected.`)}if(info.notify&&!proto._hasNotifyEffect(name)){proto._createNotifyingProperty(name)}else if(!1===info.notify&&proto._hasNotifyEffect(name)){console.warn(`Cannot make notify property '${name}' non-notify.`)}if(info.observer){proto._createPropertyObserver(name,info.observer,allProps[info.observer])}proto._addPropertyToAttributeMap(name)}function processElementStyles(klass,template,is,baseURI){if(!builtCSS){const templateStyles=template.content.querySelectorAll("style"),stylesWithImports=stylesFromTemplate(template),linkedStyles=stylesFromModuleImports(is),firstTemplateChild=template.content.firstElementChild;for(let idx=0,s;idx<linkedStyles.length;idx++){s=linkedStyles[idx];s.textContent=klass._processStyleText(s.textContent,baseURI);template.content.insertBefore(s,firstTemplateChild)}let templateStyleIndex=0;for(let i=0;i<stylesWithImports.length;i++){let s=stylesWithImports[i],templateStyle=templateStyles[templateStyleIndex];if(templateStyle!==s){s=s.cloneNode(!0);templateStyle.parentNode.insertBefore(s,templateStyle)}else{templateStyleIndex++}s.textContent=klass._processStyleText(s.textContent,baseURI)}}if(window.ShadyCSS){window.ShadyCSS.prepareTemplate(template,is)}}function getTemplateFromDomModule(is){let template=null;if(is&&(!strictTemplatePolicy||allowTemplateFromDomModule)){template=DomModule.import(is,"template");if(strictTemplatePolicy&&!template){throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${is}`)}}return template}class PolymerElement extends polymerElementBase{static get polymerElementVersion(){return version}static _finalizeClass(){super._finalizeClass();const observers=ownObservers(this);if(observers){this.createObservers(observers,this._properties)}this._prepareTemplate()}static _prepareTemplate(){let template=this.template;if(template){if("string"===typeof template){console.error("template getter must return HTMLTemplateElement");template=null}else if(!legacyOptimizations){template=template.cloneNode(!0)}}this.prototype._template=template}static createProperties(props){for(let p in props){createPropertyFromConfig(this.prototype,p,props[p],props)}}static createObservers(observers,dynamicFns){const proto=this.prototype;for(let i=0;i<observers.length;i++){proto._createMethodObserver(observers[i],dynamicFns)}}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){this._template=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:getTemplateFromDomModule(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(value){this._template=value}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const meta=this.importMeta;if(meta){this._importPath=pathFromUrl(meta.url)}else{const module=DomModule.import(this.is);this._importPath=module&&module.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super();this._template;this._importPath;this.rootPath;this.importPath;this.root;this.$}_initializeProperties(){this.constructor.finalize();this.constructor._finalizeTemplate(this.localName);super._initializeProperties();this.rootPath=rootPath;this.importPath=this.constructor.importPath;let p$=propertyDefaults(this.constructor);if(!p$){return}for(let p in p$){let info=p$[p];if(!this.hasOwnProperty(p)){let value="function"==typeof info.value?info.value.call(this):info.value;if(this._hasAccessor(p)){this._setPendingProperty(p,value,!0)}else{this[p]=value}}}}static _processStyleText(cssText,baseURI){return resolveCss(cssText,baseURI)}static _finalizeTemplate(is){const template=this.prototype._template;if(template&&!template.__polymerFinalized){template.__polymerFinalized=!0;const importPath=this.importPath,baseURI=importPath?resolveUrl(importPath):"";processElementStyles(this,template,is,baseURI);this.prototype._bindTemplate(template)}}connectedCallback(){if(window.ShadyCSS&&this._template){window.ShadyCSS.styleElement(this)}super.connectedCallback()}ready(){if(this._template){this.root=this._stampTemplate(this._template);this.$=this.root.$}super.ready()}_readyClients(){if(this._template){this.root=this._attachDom(this.root)}super._readyClients()}_attachDom(dom){const n=wrap$1(this);if(n.attachShadow){if(dom){if(!n.shadowRoot){n.attachShadow({mode:"open"})}n.shadowRoot.appendChild(dom);if(syncInitialRender&&window.ShadyDOM){ShadyDOM.flushInitial(n.shadowRoot)}return n.shadowRoot}return null}else{throw new Error("ShadowDOM not available. "+"PolymerElement can create dom as children instead of in "+"ShadowDOM by setting `this.root = this;` before `ready`.")}}updateStyles(properties){if(window.ShadyCSS){window.ShadyCSS.styleSubtree(this,properties)}}resolveUrl(url,base){if(!base&&this.importPath){base=resolveUrl(this.importPath)}return resolveUrl(url,base)}static _parseTemplateContent(template,templateInfo,nodeInfo){templateInfo.dynamicFns=templateInfo.dynamicFns||this._properties;return super._parseTemplateContent(template,templateInfo,nodeInfo)}static _addTemplatePropertyEffect(templateInfo,prop,effect){if(legacyOptimizations&&!(prop in this._properties)){console.warn(`Property '${prop}' used in template but not declared in 'properties'; `+`attribute will not be observed.`)}return super._addTemplatePropertyEffect(templateInfo,prop,effect)}}return PolymerElement});_exports.ElementMixin$1=ElementMixin;const updateStyles=function(props){if(window.ShadyCSS){window.ShadyCSS.styleDocument(props)}};_exports.updateStyles=updateStyles;var elementMixin={version:version,ElementMixin:ElementMixin,updateStyles:updateStyles};_exports.$elementMixin=elementMixin;class Debouncer{constructor(){this._asyncModule=null;this._callback=null;this._timer=null}setConfig(asyncModule,callback){this._asyncModule=asyncModule;this._callback=callback;this._timer=this._asyncModule.run(()=>{this._timer=null;debouncerQueue.delete(this);this._callback()})}cancel(){if(this.isActive()){this._cancelAsync();debouncerQueue.delete(this)}}_cancelAsync(){if(this.isActive()){this._asyncModule.cancel(this._timer);this._timer=null}}flush(){if(this.isActive()){this.cancel();this._callback()}}isActive(){return null!=this._timer}static debounce(debouncer,asyncModule,callback){if(debouncer instanceof Debouncer){debouncer._cancelAsync()}else{debouncer=new Debouncer}debouncer.setConfig(asyncModule,callback);return debouncer}}_exports.Debouncer=Debouncer;let debouncerQueue=new Set;const enqueueDebouncer=function(debouncer){debouncerQueue.add(debouncer)};_exports.enqueueDebouncer$1=_exports.enqueueDebouncer=_exports.addDebouncer=enqueueDebouncer;const flushDebouncers=function(){const didFlush=!!debouncerQueue.size;debouncerQueue.forEach(debouncer=>{try{debouncer.flush()}catch(e){setTimeout(()=>{throw e})}});return didFlush};_exports.flushDebouncers=flushDebouncers;var debounce={Debouncer:Debouncer,enqueueDebouncer:enqueueDebouncer,flushDebouncers:flushDebouncers};_exports.$debounce=debounce;let HAS_NATIVE_TA="string"===typeof document.head.style.touchAction,GESTURE_KEY="__polymerGestures",HANDLED_OBJ="__polymerGesturesHandled",TOUCH_ACTION="__polymerGesturesTouchAction",TAP_DISTANCE=25,TRACK_DISTANCE=5,TRACK_LENGTH=2,MOUSE_TIMEOUT=2500,MOUSE_EVENTS=["mousedown","mousemove","mouseup","click"],MOUSE_WHICH_TO_BUTTONS=[0,1,4,2],MOUSE_HAS_BUTTONS=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return!1}}();function isMouseEvent(name){return-1<MOUSE_EVENTS.indexOf(name)}let SUPPORTS_PASSIVE=!1;(function(){try{let opts=Object.defineProperty({},"passive",{get(){SUPPORTS_PASSIVE=!0}});window.addEventListener("test",null,opts);window.removeEventListener("test",null,opts)}catch(e){}})();function PASSIVE_TOUCH(eventName){if(isMouseEvent(eventName)||"touchend"===eventName){return}if(HAS_NATIVE_TA&&SUPPORTS_PASSIVE&&passiveTouchGestures){return{passive:!0}}else{return}}let IS_TOUCH_ONLY=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const clickedLabels=[],labellable={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},canBeDisabled={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function canBeLabelled(el){return labellable[el.localName]||!1}function matchingLabels(el){let labels=Array.prototype.slice.call(el.labels||[]);if(!labels.length){labels=[];let root=el.getRootNode();if(el.id){let matching=root.querySelectorAll(`label[for = ${el.id}]`);for(let i=0;i<matching.length;i++){labels.push(matching[i])}}}return labels}let mouseCanceller=function(mouseEvent){let sc=mouseEvent.sourceCapabilities;if(sc&&!sc.firesTouchEvents){return}mouseEvent[HANDLED_OBJ]={skip:!0};if("click"===mouseEvent.type){let clickFromLabel=!1,path=getComposedPath(mouseEvent);for(let i=0;i<path.length;i++){if(path[i].nodeType===Node.ELEMENT_NODE){if("label"===path[i].localName){clickedLabels.push(path[i])}else if(canBeLabelled(path[i])){let ownerLabels=matchingLabels(path[i]);for(let j=0;j<ownerLabels.length;j++){clickFromLabel=clickFromLabel||-1<clickedLabels.indexOf(ownerLabels[j])}}}if(path[i]===POINTERSTATE.mouse.target){return}}if(clickFromLabel){return}mouseEvent.preventDefault();mouseEvent.stopPropagation()}};function setupTeardownMouseCanceller(setup){let events=IS_TOUCH_ONLY?["click"]:MOUSE_EVENTS;for(let i=0,en;i<events.length;i++){en=events[i];if(setup){clickedLabels.length=0;document.addEventListener(en,mouseCanceller,!0)}else{document.removeEventListener(en,mouseCanceller,!0)}}}function ignoreMouse(e){if(!POINTERSTATE.mouse.mouseIgnoreJob){setupTeardownMouseCanceller(!0)}let unset=function(){setupTeardownMouseCanceller();POINTERSTATE.mouse.target=null;POINTERSTATE.mouse.mouseIgnoreJob=null};POINTERSTATE.mouse.target=getComposedPath(e)[0];POINTERSTATE.mouse.mouseIgnoreJob=Debouncer.debounce(POINTERSTATE.mouse.mouseIgnoreJob,timeOut.after(MOUSE_TIMEOUT),unset)}function hasLeftMouseButton(ev){let type=ev.type;if(!isMouseEvent(type)){return!1}if("mousemove"===type){let buttons=ev.buttons===void 0?1:ev.buttons;if(ev instanceof window.MouseEvent&&!MOUSE_HAS_BUTTONS){buttons=MOUSE_WHICH_TO_BUTTONS[ev.which]||0}return!!(1&buttons)}else{let button=ev.button===void 0?0:ev.button;return 0===button}}function isSyntheticClick(ev){if("click"===ev.type){if(0===ev.detail){return!0}let t=_findOriginalTarget(ev);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE){return!0}let bcr=t.getBoundingClientRect(),x=ev.pageX,y=ev.pageY;return!(x>=bcr.left&&x<=bcr.right&&y>=bcr.top&&y<=bcr.bottom)}return!1}let POINTERSTATE={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function firstTouchAction(ev){let ta="auto",path=getComposedPath(ev);for(let i=0,n;i<path.length;i++){n=path[i];if(n[TOUCH_ACTION]){ta=n[TOUCH_ACTION];break}}return ta}function trackDocument(stateObj,movefn,upfn){stateObj.movefn=movefn;stateObj.upfn=upfn;document.addEventListener("mousemove",movefn);document.addEventListener("mouseup",upfn)}function untrackDocument(stateObj){document.removeEventListener("mousemove",stateObj.movefn);document.removeEventListener("mouseup",stateObj.upfn);stateObj.movefn=null;stateObj.upfn=null}document.addEventListener("touchend",ignoreMouse,SUPPORTS_PASSIVE?{passive:!0}:!1);const getComposedPath=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:event=>event.composedPath&&event.composedPath()||[],gestures={};_exports.gestures=gestures;const recognizers=[];_exports.recognizers=recognizers;function deepTargetFind(x,y){let node=document.elementFromPoint(x,y),next=node;while(next&&next.shadowRoot&&!window.ShadyDOM){let oldNext=next;next=next.shadowRoot.elementFromPoint(x,y);if(oldNext===next){break}if(next){node=next}}return node}function _findOriginalTarget(ev){const path=getComposedPath(ev);return 0<path.length?path[0]:ev.target}function _handleNative(ev){let handled,type=ev.type,node=ev.currentTarget,gobj=node[GESTURE_KEY];if(!gobj){return}let gs=gobj[type];if(!gs){return}if(!ev[HANDLED_OBJ]){ev[HANDLED_OBJ]={};if("touch"===type.slice(0,5)){ev=ev;let t=ev.changedTouches[0];if("touchstart"===type){if(1===ev.touches.length){POINTERSTATE.touch.id=t.identifier}}if(POINTERSTATE.touch.id!==t.identifier){return}if(!HAS_NATIVE_TA){if("touchstart"===type||"touchmove"===type){_handleTouchAction(ev)}}}}handled=ev[HANDLED_OBJ];if(handled.skip){return}for(let i=0,r;i<recognizers.length;i++){r=recognizers[i];if(gs[r.name]&&!handled[r.name]){if(r.flow&&-1<r.flow.start.indexOf(ev.type)&&r.reset){r.reset()}}}for(let i=0,r;i<recognizers.length;i++){r=recognizers[i];if(gs[r.name]&&!handled[r.name]){handled[r.name]=!0;r[type](ev)}}}function _handleTouchAction(ev){let t=ev.changedTouches[0],type=ev.type;if("touchstart"===type){POINTERSTATE.touch.x=t.clientX;POINTERSTATE.touch.y=t.clientY;POINTERSTATE.touch.scrollDecided=!1}else if("touchmove"===type){if(POINTERSTATE.touch.scrollDecided){return}POINTERSTATE.touch.scrollDecided=!0;let ta=firstTouchAction(ev),shouldPrevent=!1,dx=_Mathabs(POINTERSTATE.touch.x-t.clientX),dy=_Mathabs(POINTERSTATE.touch.y-t.clientY);if(!ev.cancelable){}else if("none"===ta){shouldPrevent=!0}else if("pan-x"===ta){shouldPrevent=dy>dx}else if("pan-y"===ta){shouldPrevent=dx>dy}if(shouldPrevent){ev.preventDefault()}else{prevent("track")}}}function addListener(node,evType,handler){if(gestures[evType]){_add(node,evType,handler);return!0}return!1}function removeListener(node,evType,handler){if(gestures[evType]){_remove(node,evType,handler);return!0}return!1}function _add(node,evType,handler){let recognizer=gestures[evType],deps=recognizer.deps,name=recognizer.name,gobj=node[GESTURE_KEY];if(!gobj){node[GESTURE_KEY]=gobj={}}for(let i=0,dep,gd;i<deps.length;i++){dep=deps[i];if(IS_TOUCH_ONLY&&isMouseEvent(dep)&&"click"!==dep){continue}gd=gobj[dep];if(!gd){gobj[dep]=gd={_count:0}}if(0===gd._count){node.addEventListener(dep,_handleNative,PASSIVE_TOUCH(dep))}gd[name]=(gd[name]||0)+1;gd._count=(gd._count||0)+1}node.addEventListener(evType,handler);if(recognizer.touchAction){setTouchAction(node,recognizer.touchAction)}}function _remove(node,evType,handler){let recognizer=gestures[evType],deps=recognizer.deps,name=recognizer.name,gobj=node[GESTURE_KEY];if(gobj){for(let i=0,dep,gd;i<deps.length;i++){dep=deps[i];gd=gobj[dep];if(gd&&gd[name]){gd[name]=(gd[name]||1)-1;gd._count=(gd._count||1)-1;if(0===gd._count){node.removeEventListener(dep,_handleNative,PASSIVE_TOUCH(dep))}}}}node.removeEventListener(evType,handler)}function register$1(recog){recognizers.push(recog);for(let i=0;i<recog.emits.length;i++){gestures[recog.emits[i]]=recog}}function _findRecognizerByEvent(evName){for(let i=0,r;i<recognizers.length;i++){r=recognizers[i];for(let j=0,n;j<r.emits.length;j++){n=r.emits[j];if(n===evName){return r}}}return null}function setTouchAction(node,value){if(HAS_NATIVE_TA&&node instanceof HTMLElement){microTask.run(()=>{node.style.touchAction=value})}node[TOUCH_ACTION]=value}function _fire(target,type,detail){let ev=new Event(type,{bubbles:!0,cancelable:!0,composed:!0});ev.detail=detail;wrap$1(target).dispatchEvent(ev);if(ev.defaultPrevented){let preventer=detail.preventer||detail.sourceEvent;if(preventer&&preventer.preventDefault){preventer.preventDefault()}}}function prevent(evName){let recognizer=_findRecognizerByEvent(evName);if(recognizer.info){recognizer.info.prevent=!0}}function resetMouseCanceller(){if(POINTERSTATE.mouse.mouseIgnoreJob){POINTERSTATE.mouse.mouseIgnoreJob.flush()}}register$1({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){untrackDocument(this.info)},mousedown:function(e){if(!hasLeftMouseButton(e)){return}let t=_findOriginalTarget(e),self=this,movefn=function movefn(e){if(!hasLeftMouseButton(e)){downupFire("up",t,e);untrackDocument(self.info)}},upfn=function upfn(e){if(hasLeftMouseButton(e)){downupFire("up",t,e)}untrackDocument(self.info)};trackDocument(this.info,movefn,upfn);downupFire("down",t,e)},touchstart:function(e){downupFire("down",_findOriginalTarget(e),e.changedTouches[0],e)},touchend:function(e){downupFire("up",_findOriginalTarget(e),e.changedTouches[0],e)}});function downupFire(type,target,event,preventer){if(!target){return}_fire(target,type,{x:event.clientX,y:event.clientY,sourceEvent:event,preventer:preventer,prevent:function(e){return prevent(e)}})}register$1({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(move){if(this.moves.length>TRACK_LENGTH){this.moves.shift()}this.moves.push(move)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start";this.info.started=!1;this.info.moves=[];this.info.x=0;this.info.y=0;this.info.prevent=!1;untrackDocument(this.info)},mousedown:function(e){if(!hasLeftMouseButton(e)){return}let t=_findOriginalTarget(e),self=this,movefn=function movefn(e){let x=e.clientX,y=e.clientY;if(trackHasMovedEnough(self.info,x,y)){self.info.state=self.info.started?"mouseup"===e.type?"end":"track":"start";if("start"===self.info.state){prevent("tap")}self.info.addMove({x:x,y:y});if(!hasLeftMouseButton(e)){self.info.state="end";untrackDocument(self.info)}if(t){trackFire(self.info,t,e)}self.info.started=!0}},upfn=function upfn(e){if(self.info.started){movefn(e)}untrackDocument(self.info)};trackDocument(this.info,movefn,upfn);this.info.x=e.clientX;this.info.y=e.clientY},touchstart:function(e){let ct=e.changedTouches[0];this.info.x=ct.clientX;this.info.y=ct.clientY},touchmove:function(e){let t=_findOriginalTarget(e),ct=e.changedTouches[0],x=ct.clientX,y=ct.clientY;if(trackHasMovedEnough(this.info,x,y)){if("start"===this.info.state){prevent("tap")}this.info.addMove({x:x,y:y});trackFire(this.info,t,ct);this.info.state="track";this.info.started=!0}},touchend:function(e){let t=_findOriginalTarget(e),ct=e.changedTouches[0];if(this.info.started){this.info.state="end";this.info.addMove({x:ct.clientX,y:ct.clientY});trackFire(this.info,t,ct)}}});function trackHasMovedEnough(info,x,y){if(info.prevent){return!1}if(info.started){return!0}let dx=_Mathabs(info.x-x),dy=_Mathabs(info.y-y);return dx>=TRACK_DISTANCE||dy>=TRACK_DISTANCE}function trackFire(info,target,touch){if(!target){return}let secondlast=info.moves[info.moves.length-2],lastmove=info.moves[info.moves.length-1],dx=lastmove.x-info.x,dy=lastmove.y-info.y,ddx,ddy=0;if(secondlast){ddx=lastmove.x-secondlast.x;ddy=lastmove.y-secondlast.y}_fire(target,"track",{state:info.state,x:touch.clientX,y:touch.clientY,dx:dx,dy:dy,ddx:ddx,ddy:ddy,sourceEvent:touch,hover:function(){return deepTargetFind(touch.clientX,touch.clientY)}})}register$1({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN;this.info.y=NaN;this.info.prevent=!1},mousedown:function(e){if(hasLeftMouseButton(e)){this.info.x=e.clientX;this.info.y=e.clientY}},click:function(e){if(hasLeftMouseButton(e)){trackForward(this.info,e)}},touchstart:function(e){const touch=e.changedTouches[0];this.info.x=touch.clientX;this.info.y=touch.clientY},touchend:function(e){trackForward(this.info,e.changedTouches[0],e)}});function trackForward(info,e,preventer){let dx=_Mathabs(e.clientX-info.x),dy=_Mathabs(e.clientY-info.y),t=_findOriginalTarget(preventer||e);if(!t||canBeDisabled[t.localName]&&t.hasAttribute("disabled")){return}if(isNaN(dx)||isNaN(dy)||dx<=TAP_DISTANCE&&dy<=TAP_DISTANCE||isSyntheticClick(e)){if(!info.prevent){_fire(t,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:preventer})}}}const findOriginalTarget=_findOriginalTarget;_exports.findOriginalTarget=findOriginalTarget;const add=addListener;_exports.add=add;const remove=removeListener;_exports.remove=remove;var gestures$1={gestures:gestures,recognizers:recognizers,deepTargetFind:deepTargetFind,addListener:addListener,removeListener:removeListener,register:register$1,setTouchAction:setTouchAction,prevent:prevent,resetMouseCanceller:resetMouseCanceller,findOriginalTarget:findOriginalTarget,add:add,remove:remove};_exports.$gestures=gestures$1;const GestureEventListeners=dedupingMixin(superClass=>{class GestureEventListeners extends superClass{_addEventListenerToNode(node,eventName,handler){if(!addListener(node,eventName,handler)){super._addEventListenerToNode(node,eventName,handler)}}_removeEventListenerFromNode(node,eventName,handler){if(!removeListener(node,eventName,handler)){super._removeEventListenerFromNode(node,eventName,handler)}}}return GestureEventListeners});_exports.GestureEventListeners=GestureEventListeners;var gestureEventListeners={GestureEventListeners:GestureEventListeners};_exports.$gestureEventListeners=gestureEventListeners;const HOST_DIR=/:host\(:dir\((ltr|rtl)\)\)/g,HOST_DIR_REPLACMENT=":host([dir=\"$1\"])",EL_DIR=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,EL_DIR_REPLACMENT=":host([dir=\"$2\"]) $1",DIR_CHECK=/:dir\((?:ltr|rtl)\)/,SHIM_SHADOW=!!(window.ShadyDOM&&window.ShadyDOM.inUse),DIR_INSTANCES=[];let observer=null,DOCUMENT_DIR="";function getRTL(){DOCUMENT_DIR=document.documentElement.getAttribute("dir")}function setRTL(instance){if(!instance.__autoDirOptOut){const el=instance;el.setAttribute("dir",DOCUMENT_DIR)}}function updateDirection(){getRTL();DOCUMENT_DIR=document.documentElement.getAttribute("dir");for(let i=0;i<DIR_INSTANCES.length;i++){setRTL(DIR_INSTANCES[i])}}function takeRecords(){if(observer&&observer.takeRecords().length){updateDirection()}}const DirMixin=dedupingMixin(base=>{if(!SHIM_SHADOW){if(!observer){getRTL();observer=new MutationObserver(updateDirection);observer.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]})}}const elementBase=PropertyAccessors(base);class Dir extends elementBase{static _processStyleText(cssText,baseURI){cssText=super._processStyleText(cssText,baseURI);if(!SHIM_SHADOW&&DIR_CHECK.test(cssText)){cssText=this._replaceDirInCssText(cssText);this.__activateDir=!0}return cssText}static _replaceDirInCssText(text){let replacedText=text;replacedText=replacedText.replace(HOST_DIR,HOST_DIR_REPLACMENT);replacedText=replacedText.replace(EL_DIR,EL_DIR_REPLACMENT);return replacedText}constructor(){super();this.__autoDirOptOut=!1}ready(){super.ready();this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){if(elementBase.prototype.connectedCallback){super.connectedCallback()}if(this.constructor.__activateDir){takeRecords();DIR_INSTANCES.push(this);setRTL(this)}}disconnectedCallback(){if(elementBase.prototype.disconnectedCallback){super.disconnectedCallback()}if(this.constructor.__activateDir){const idx=DIR_INSTANCES.indexOf(this);if(-1<idx){DIR_INSTANCES.splice(idx,1)}}}}Dir.__activateDir=!1;return Dir});_exports.DirMixin=DirMixin;var dirMixin={DirMixin:DirMixin};_exports.$dirMixin=dirMixin;let scheduled=!1,beforeRenderQueue=[],afterRenderQueue=[];function schedule(){scheduled=!0;requestAnimationFrame(function(){scheduled=!1;flushQueue(beforeRenderQueue);setTimeout(function(){runQueue(afterRenderQueue)})})}function flushQueue(queue){while(queue.length){callMethod(queue.shift())}}function runQueue(queue){for(let i=0,l=queue.length;i<l;i++){callMethod(queue.shift())}}function callMethod(info){const context=info[0],callback=info[1],args=info[2];try{callback.apply(context,args)}catch(e){setTimeout(()=>{throw e})}}function flush(){while(beforeRenderQueue.length||afterRenderQueue.length){flushQueue(beforeRenderQueue);flushQueue(afterRenderQueue)}scheduled=!1}function beforeNextRender(context,callback,args){if(!scheduled){schedule()}beforeRenderQueue.push([context,callback,args])}function afterNextRender(context,callback,args){if(!scheduled){schedule()}afterRenderQueue.push([context,callback,args])}var renderStatus={flush:flush,beforeNextRender:beforeNextRender,afterNextRender:afterNextRender};_exports.$renderStatus=renderStatus;function resolve(){document.body.removeAttribute("unresolved")}if("interactive"===document.readyState||"complete"===document.readyState){resolve()}else{window.addEventListener("DOMContentLoaded",resolve)}function newSplice(index,removed,addedCount){return{index:index,removed:removed,addedCount:addedCount}}const EDIT_LEAVE=0,EDIT_UPDATE=1,EDIT_ADD=2,EDIT_DELETE=3;function calcEditDistances(current,currentStart,currentEnd,old,oldStart,oldEnd){let rowCount=oldEnd-oldStart+1,columnCount=currentEnd-currentStart+1,distances=Array(rowCount);for(let i=0;i<rowCount;i++){distances[i]=Array(columnCount);distances[i][0]=i}for(let j=0;j<columnCount;j++)distances[0][j]=j;for(let i=1;i<rowCount;i++){for(let j=1;j<columnCount;j++){if(equals(current[currentStart+j-1],old[oldStart+i-1]))distances[i][j]=distances[i-1][j-1];else{let north=distances[i-1][j]+1,west=distances[i][j-1]+1;distances[i][j]=north<west?north:west}}}return distances}function spliceOperationsFromEditDistances(distances){let i=distances.length-1,j=distances[0].length-1,current=distances[i][j],edits=[];while(0<i||0<j){if(0==i){edits.push(EDIT_ADD);j--;continue}if(0==j){edits.push(EDIT_DELETE);i--;continue}let northWest=distances[i-1][j-1],west=distances[i-1][j],north=distances[i][j-1],min;if(west<north)min=west<northWest?west:northWest;else min=north<northWest?north:northWest;if(min==northWest){if(northWest==current){edits.push(EDIT_LEAVE)}else{edits.push(EDIT_UPDATE);current=northWest}i--;j--}else if(min==west){edits.push(EDIT_DELETE);i--;current=west}else{edits.push(EDIT_ADD);j--;current=north}}edits.reverse();return edits}function calcSplices(current,currentStart,currentEnd,old,oldStart,oldEnd){let prefixCount=0,suffixCount=0,splice,minLength=_Mathmin(currentEnd-currentStart,oldEnd-oldStart);if(0==currentStart&&0==oldStart)prefixCount=sharedPrefix(current,old,minLength);if(currentEnd==current.length&&oldEnd==old.length)suffixCount=sharedSuffix(current,old,minLength-prefixCount);currentStart+=prefixCount;oldStart+=prefixCount;currentEnd-=suffixCount;oldEnd-=suffixCount;if(0==currentEnd-currentStart&&0==oldEnd-oldStart)return[];if(currentStart==currentEnd){splice=newSplice(currentStart,[],0);while(oldStart<oldEnd)splice.removed.push(old[oldStart++]);return[splice]}else if(oldStart==oldEnd)return[newSplice(currentStart,[],currentEnd-currentStart)];let ops=spliceOperationsFromEditDistances(calcEditDistances(current,currentStart,currentEnd,old,oldStart,oldEnd));splice=void 0;let splices=[],index=currentStart,oldIndex=oldStart;for(let i=0;i<ops.length;i++){switch(ops[i]){case EDIT_LEAVE:if(splice){splices.push(splice);splice=void 0}index++;oldIndex++;break;case EDIT_UPDATE:if(!splice)splice=newSplice(index,[],0);splice.addedCount++;index++;splice.removed.push(old[oldIndex]);oldIndex++;break;case EDIT_ADD:if(!splice)splice=newSplice(index,[],0);splice.addedCount++;index++;break;case EDIT_DELETE:if(!splice)splice=newSplice(index,[],0);splice.removed.push(old[oldIndex]);oldIndex++;break;}}if(splice){splices.push(splice)}return splices}function sharedPrefix(current,old,searchLength){for(let i=0;i<searchLength;i++)if(!equals(current[i],old[i]))return i;return searchLength}function sharedSuffix(current,old,searchLength){let index1=current.length,index2=old.length,count=0;while(count<searchLength&&equals(current[--index1],old[--index2]))count++;return count}function calculateSplices(current,previous){return calcSplices(current,0,current.length,previous,0,previous.length)}function equals(currentValue,previousValue){return currentValue===previousValue}var arraySplice={calculateSplices:calculateSplices};_exports.$arraySplice=arraySplice;function isSlot(node){return"slot"===node.localName}let FlattenedNodesObserver=class{static getFlattenedNodes(node){const wrapped=wrap$1(node);if(isSlot(node)){node=node;return wrapped.assignedNodes({flatten:!0})}else{return Array.from(wrapped.childNodes).map(node=>{if(isSlot(node)){node=node;return wrap$1(node).assignedNodes({flatten:!0})}else{return[node]}}).reduce((a,b)=>a.concat(b),[])}}constructor(target,callback){this._shadyChildrenObserver=null;this._nativeChildrenObserver=null;this._connected=!1;this._target=target;this.callback=callback;this._effectiveNodes=[];this._observer=null;this._scheduled=!1;this._boundSchedule=()=>{this._schedule()};this.connect();this._schedule()}connect(){if(isSlot(this._target)){this._listenSlots([this._target])}else if(wrap$1(this._target).children){this._listenSlots(wrap$1(this._target).children);if(window.ShadyDOM){this._shadyChildrenObserver=ShadyDOM.observeChildren(this._target,mutations=>{this._processMutations(mutations)})}else{this._nativeChildrenObserver=new MutationObserver(mutations=>{this._processMutations(mutations)});this._nativeChildrenObserver.observe(this._target,{childList:!0})}}this._connected=!0}disconnect(){if(isSlot(this._target)){this._unlistenSlots([this._target])}else if(wrap$1(this._target).children){this._unlistenSlots(wrap$1(this._target).children);if(window.ShadyDOM&&this._shadyChildrenObserver){ShadyDOM.unobserveChildren(this._shadyChildrenObserver);this._shadyChildrenObserver=null}else if(this._nativeChildrenObserver){this._nativeChildrenObserver.disconnect();this._nativeChildrenObserver=null}}this._connected=!1}_schedule(){if(!this._scheduled){this._scheduled=!0;microTask.run(()=>this.flush())}}_processMutations(mutations){this._processSlotMutations(mutations);this.flush()}_processSlotMutations(mutations){if(mutations){for(let i=0,mutation;i<mutations.length;i++){mutation=mutations[i];if(mutation.addedNodes){this._listenSlots(mutation.addedNodes)}if(mutation.removedNodes){this._unlistenSlots(mutation.removedNodes)}}}}flush(){if(!this._connected){return!1}if(window.ShadyDOM){ShadyDOM.flush()}if(this._nativeChildrenObserver){this._processSlotMutations(this._nativeChildrenObserver.takeRecords())}else if(this._shadyChildrenObserver){this._processSlotMutations(this._shadyChildrenObserver.takeRecords())}this._scheduled=!1;let info={target:this._target,addedNodes:[],removedNodes:[]},newNodes=this.constructor.getFlattenedNodes(this._target),splices=calculateSplices(newNodes,this._effectiveNodes);for(let i=0,s;i<splices.length&&(s=splices[i]);i++){for(let j=0,n;j<s.removed.length&&(n=s.removed[j]);j++){info.removedNodes.push(n)}}for(let i=0,s;i<splices.length&&(s=splices[i]);i++){for(let j=s.index;j<s.index+s.addedCount;j++){info.addedNodes.push(newNodes[j])}}this._effectiveNodes=newNodes;let didFlush=!1;if(info.addedNodes.length||info.removedNodes.length){didFlush=!0;this.callback.call(this._target,info)}return didFlush}_listenSlots(nodeList){for(let i=0,n;i<nodeList.length;i++){n=nodeList[i];if(isSlot(n)){n.addEventListener("slotchange",this._boundSchedule)}}}_unlistenSlots(nodeList){for(let i=0,n;i<nodeList.length;i++){n=nodeList[i];if(isSlot(n)){n.removeEventListener("slotchange",this._boundSchedule)}}}};_exports.FlattenedNodesObserver=FlattenedNodesObserver;var flattenedNodesObserver={FlattenedNodesObserver:FlattenedNodesObserver};_exports.$flattenedNodesObserver=flattenedNodesObserver;const flush$1=function(){let shadyDOM,debouncers;do{shadyDOM=window.ShadyDOM&&ShadyDOM.flush();if(window.ShadyCSS&&window.ShadyCSS.ScopingShim){window.ShadyCSS.ScopingShim.flush()}debouncers=flushDebouncers()}while(shadyDOM||debouncers)};_exports.flush$1=_exports.flush=flush$1;var flush$2={flush:flush$1,enqueueDebouncer:enqueueDebouncer};_exports.$flush=flush$2;const p=Element.prototype,normalizedMatchesSelector=p.matches||p.matchesSelector||p.mozMatchesSelector||p.msMatchesSelector||p.oMatchesSelector||p.webkitMatchesSelector,matchesSelector=function(node,selector){return normalizedMatchesSelector.call(node,selector)};_exports.matchesSelector=matchesSelector;class DomApiNative{constructor(node){this.node=node}observeNodes(callback){return new FlattenedNodesObserver(this.node,callback)}unobserveNodes(observerHandle){observerHandle.disconnect()}notifyObserver(){}deepContains(node){if(wrap$1(this.node).contains(node)){return!0}let n=node,doc=node.ownerDocument;while(n&&n!==doc&&n!==this.node){n=wrap$1(n).parentNode||wrap$1(n).host}return n===this.node}getOwnerRoot(){return wrap$1(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?wrap$1(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let ip$=[],n=wrap$1(this.node).assignedSlot;while(n){ip$.push(n);n=wrap$1(n).assignedSlot}return ip$}importNode(node,deep){let doc=this.node instanceof Document?this.node:this.node.ownerDocument;return wrap$1(doc).importNode(node,deep)}getEffectiveChildNodes(){return FlattenedNodesObserver.getFlattenedNodes(this.node)}queryDistributedElements(selector){let c$=this.getEffectiveChildNodes(),list=[];for(let i=0,l=c$.length,c;i<l&&(c=c$[i]);i++){if(c.nodeType===Node.ELEMENT_NODE&&matchesSelector(c,selector)){list.push(c)}}return list}get activeElement(){let node=this.node;return node._activeElement!==void 0?node._activeElement:node.activeElement}}function forwardMethods(proto,methods){for(let i=0,method;i<methods.length;i++){method=methods[i];proto[method]=function(){return this.node[method].apply(this.node,arguments)}}}function forwardReadOnlyProperties(proto,properties){for(let i=0,name;i<properties.length;i++){name=properties[i];Object.defineProperty(proto,name,{get:function(){const domApi=this;return domApi.node[name]},configurable:!0})}}function forwardProperties(proto,properties){for(let i=0,name;i<properties.length;i++){name=properties[i];Object.defineProperty(proto,name,{get:function(){return this.node[name]},set:function(value){this.node[name]=value},configurable:!0})}}class EventApi{constructor(event){this.event=event}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}_exports.EventApi=EventApi;DomApiNative.prototype.cloneNode;DomApiNative.prototype.appendChild;DomApiNative.prototype.insertBefore;DomApiNative.prototype.removeChild;DomApiNative.prototype.replaceChild;DomApiNative.prototype.setAttribute;DomApiNative.prototype.removeAttribute;DomApiNative.prototype.querySelector;DomApiNative.prototype.querySelectorAll;DomApiNative.prototype.parentNode;DomApiNative.prototype.firstChild;DomApiNative.prototype.lastChild;DomApiNative.prototype.nextSibling;DomApiNative.prototype.previousSibling;DomApiNative.prototype.firstElementChild;DomApiNative.prototype.lastElementChild;DomApiNative.prototype.nextElementSibling;DomApiNative.prototype.previousElementSibling;DomApiNative.prototype.childNodes;DomApiNative.prototype.children;DomApiNative.prototype.classList;DomApiNative.prototype.textContent;DomApiNative.prototype.innerHTML;let DomApiImpl=DomApiNative;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class Wrapper extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(DomApiNative.prototype).forEach(prop=>{if("activeElement"!=prop){Wrapper.prototype[prop]=DomApiNative.prototype[prop]}});forwardReadOnlyProperties(Wrapper.prototype,["classList"]);DomApiImpl=Wrapper;Object.defineProperties(EventApi.prototype,{localTarget:{get(){return this.event.currentTarget},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else{forwardMethods(DomApiNative.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]);forwardReadOnlyProperties(DomApiNative.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]);forwardProperties(DomApiNative.prototype,["textContent","innerHTML"])}const DomApi=DomApiImpl;_exports.DomApi=DomApi;const dom=function(obj){obj=obj||document;if(obj instanceof DomApiImpl){return obj}if(obj instanceof EventApi){return obj}let helper=obj.__domApi;if(!helper){if(obj instanceof Event){helper=new EventApi(obj)}else{helper=new DomApiImpl(obj)}obj.__domApi=helper}return helper};_exports.dom=dom;var polymer_dom={matchesSelector:matchesSelector,EventApi:EventApi,DomApi:DomApi,dom:dom,flush:flush$1,addDebouncer:enqueueDebouncer};_exports.$polymerDom=polymer_dom;const bundledImportMeta$1={...meta,url:new URL("../node_modules/%40polymer/polymer/lib/legacy/legacy-element-mixin.js",meta.url).href};let styleInterface=window.ShadyCSS;const LegacyElementMixin=dedupingMixin(base=>{const legacyElementBase=DirMixin(GestureEventListeners(ElementMixin(base))),DIRECTION_MAP={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class LegacyElement extends legacyElementBase{constructor(){super();this.isAttached;this.__boundListeners;this._debouncers}static get importMeta(){return this.prototype.importMeta}created(){}connectedCallback(){super.connectedCallback();this.isAttached=!0;this.attached()}attached(){}disconnectedCallback(){super.disconnectedCallback();this.isAttached=!1;this.detached()}detached(){}attributeChangedCallback(name,old,value,namespace){if(old!==value){super.attributeChangedCallback(name,old,value,namespace);this.attributeChanged(name,old,value)}}attributeChanged(name,old,value){}_initializeProperties(){let proto=Object.getPrototypeOf(this);if(!proto.hasOwnProperty("__hasRegisterFinished")){this._registered();proto.__hasRegisterFinished=!0}super._initializeProperties();this.root=this;this.created();this._applyListeners()}_registered(){}ready(){this._ensureAttributes();super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(value){return this._serializeValue(value)}deserialize(value,type){return this._deserializeValue(value,type)}reflectPropertyToAttribute(property,attribute,value){this._propertyToAttribute(property,attribute,value)}serializeValueToAttribute(value,attribute,node){this._valueToNodeAttribute(node||this,value,attribute)}extend(prototype,api){if(!(prototype&&api)){return prototype||api}let n$=Object.getOwnPropertyNames(api);for(let i=0,n,pd;i<n$.length&&(n=n$[i]);i++){pd=Object.getOwnPropertyDescriptor(api,n);if(pd){Object.defineProperty(prototype,n,pd)}}return prototype}mixin(target,source){for(let i in source){target[i]=source[i]}return target}chainObject(object,prototype){if(object&&prototype&&object!==prototype){object.__proto__=prototype}return object}instanceTemplate(template){let content=this.constructor._contentForTemplate(template),dom$$1=document.importNode(content,!0);return dom$$1}fire(type,detail,options){options=options||{};detail=null===detail||detail===void 0?{}:detail;let event=new Event(type,{bubbles:options.bubbles===void 0?!0:options.bubbles,cancelable:!!options.cancelable,composed:options.composed===void 0?!0:options.composed});event.detail=detail;let node=options.node||this;wrap$1(node).dispatchEvent(event);return event}listen(node,eventName,methodName){node=node||this;let hbl=this.__boundListeners||(this.__boundListeners=new WeakMap),bl=hbl.get(node);if(!bl){bl={};hbl.set(node,bl)}let key=eventName+methodName;if(!bl[key]){bl[key]=this._addMethodEventListenerToNode(node,eventName,methodName,this)}}unlisten(node,eventName,methodName){node=node||this;let bl=this.__boundListeners&&this.__boundListeners.get(node),key=eventName+methodName,handler=bl&&bl[key];if(handler){this._removeEventListenerFromNode(node,eventName,handler);bl[key]=null}}setScrollDirection(direction,node){setTouchAction(node||this,DIRECTION_MAP[direction]||"auto")}$$(slctr){return this.root.querySelector(slctr)}get domHost(){let root$$1=wrap$1(this).getRootNode();return root$$1 instanceof DocumentFragment?root$$1.host:root$$1}distributeContent(){const thisEl=this,domApi=dom(thisEl);if(window.ShadyDOM&&domApi.shadowRoot){ShadyDOM.flush()}}getEffectiveChildNodes(){const thisEl=this,domApi=dom(thisEl);return domApi.getEffectiveChildNodes()}queryDistributedElements(selector){const thisEl=this,domApi=dom(thisEl);return domApi.queryDistributedElements(selector)}getEffectiveChildren(){let list=this.getEffectiveChildNodes();return list.filter(function(n){return n.nodeType===Node.ELEMENT_NODE})}getEffectiveTextContent(){let cn=this.getEffectiveChildNodes(),tc=[];for(let i=0,c;c=cn[i];i++){if(c.nodeType!==Node.COMMENT_NODE){tc.push(c.textContent)}}return tc.join("")}queryEffectiveChildren(selector){let e$=this.queryDistributedElements(selector);return e$&&e$[0]}queryAllEffectiveChildren(selector){return this.queryDistributedElements(selector)}getContentChildNodes(slctr){let content=this.root.querySelector(slctr||"slot");return content?dom(content).getDistributedNodes():[]}getContentChildren(slctr){let children=this.getContentChildNodes(slctr).filter(function(n){return n.nodeType===Node.ELEMENT_NODE});return children}isLightDescendant(node){const thisNode=this;return thisNode!==node&&wrap$1(thisNode).contains(node)&&wrap$1(thisNode).getRootNode()===wrap$1(node).getRootNode()}isLocalDescendant(node){return this.root===wrap$1(node).getRootNode()}scopeSubtree(container,shouldObserve){}getComputedStyleValue(property){return styleInterface.getComputedStyleValue(this,property)}debounce(jobName,callback,wait){this._debouncers=this._debouncers||{};return this._debouncers[jobName]=Debouncer.debounce(this._debouncers[jobName],0<wait?timeOut.after(wait):microTask,callback.bind(this))}isDebouncerActive(jobName){this._debouncers=this._debouncers||{};let debouncer=this._debouncers[jobName];return!!(debouncer&&debouncer.isActive())}flushDebouncer(jobName){this._debouncers=this._debouncers||{};let debouncer=this._debouncers[jobName];if(debouncer){debouncer.flush()}}cancelDebouncer(jobName){this._debouncers=this._debouncers||{};let debouncer=this._debouncers[jobName];if(debouncer){debouncer.cancel()}}async(callback,waitTime){return 0<waitTime?timeOut.run(callback.bind(this),waitTime):~microTask.run(callback.bind(this))}cancelAsync(handle){0>handle?microTask.cancel(~handle):timeOut.cancel(handle)}create(tag,props){let elt=document.createElement(tag);if(props){if(elt.setProperties){elt.setProperties(props)}else{for(let n in props){elt[n]=props[n]}}}return elt}elementMatches(selector,node){return matchesSelector(node||this,selector)}toggleAttribute(name,bool){let node=this;if(3===arguments.length){node=arguments[2]}if(1==arguments.length){bool=!node.hasAttribute(name)}if(bool){wrap$1(node).setAttribute(name,"");return!0}else{wrap$1(node).removeAttribute(name);return!1}}toggleClass(name,bool,node){node=node||this;if(1==arguments.length){bool=!node.classList.contains(name)}if(bool){node.classList.add(name)}else{node.classList.remove(name)}}transform(transformText,node){node=node||this;node.style.webkitTransform=transformText;node.style.transform=transformText}translate3d(x,y,z,node){node=node||this;this.transform("translate3d("+x+","+y+","+z+")",node)}arrayDelete(arrayOrPath,item){let index;if(Array.isArray(arrayOrPath)){index=arrayOrPath.indexOf(item);if(0<=index){return arrayOrPath.splice(index,1)}}else{let arr=get(this,arrayOrPath);index=arr.indexOf(item);if(0<=index){return this.splice(arrayOrPath,index,1)}}return null}_logger(level,args){if(Array.isArray(args)&&1===args.length&&Array.isArray(args[0])){args=args[0]}switch(level){case"log":case"warn":case"error":console[level](...args);}}_log(...args){this._logger("log",args)}_warn(...args){this._logger("warn",args)}_error(...args){this._logger("error",args)}_logf(methodName,...args){return["[%s::%s]",this.is,methodName,...args]}}LegacyElement.prototype.is="";return LegacyElement});_exports.LegacyElementMixin=LegacyElementMixin;var legacyElementMixin={LegacyElementMixin:LegacyElementMixin};_exports.$legacyElementMixin=legacyElementMixin;const lifecycleProps={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},excludeOnInfo={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},excludeOnBehaviors=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},excludeOnInfo);function copyProperties(source,target,excludeProps){const noAccessors=source._noAccessors,propertyNames=Object.getOwnPropertyNames(source);for(let i=0,p;i<propertyNames.length;i++){p=propertyNames[i];if(p in excludeProps){continue}if(noAccessors){target[p]=source[p]}else{let pd=Object.getOwnPropertyDescriptor(source,p);if(pd){pd.configurable=!0;Object.defineProperty(target,p,pd)}}}}function mixinBehaviors(behaviors,klass){return GenerateClassFromInfo({},LegacyElementMixin(klass),behaviors)}function applyBehaviors(proto,behaviors,lifecycle){for(let i=0;i<behaviors.length;i++){applyInfo(proto,behaviors[i],lifecycle,excludeOnBehaviors)}}function applyInfo(proto,info,lifecycle,excludeProps){copyProperties(info,proto,excludeProps);for(let p in lifecycleProps){if(info[p]){lifecycle[p]=lifecycle[p]||[];lifecycle[p].push(info[p])}}}function flattenBehaviors(behaviors,list,exclude){list=list||[];for(let i=behaviors.length-1,b;0<=i;i--){b=behaviors[i];if(b){if(Array.isArray(b)){flattenBehaviors(b,list)}else{if(0>list.indexOf(b)&&(!exclude||0>exclude.indexOf(b))){list.unshift(b)}}}else{console.warn("behavior is null, check for missing or 404 import")}}return list}function mergeProperties(target,source){for(const p in source){const targetInfo=target[p],sourceInfo=source[p];if(!("value"in sourceInfo)&&targetInfo&&"value"in targetInfo){target[p]=Object.assign({value:targetInfo.value},sourceInfo)}else{target[p]=sourceInfo}}}function GenerateClassFromInfo(info,Base,behaviors){let behaviorList;const lifecycle={};class PolymerGenerated extends Base{static _finalizeClass(){if(!this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){super._finalizeClass()}else{if(behaviorList){for(let i=0,b;i<behaviorList.length;i++){b=behaviorList[i];if(b.properties){this.createProperties(b.properties)}if(b.observers){this.createObservers(b.observers,b.properties)}}}if(info.properties){this.createProperties(info.properties)}if(info.observers){this.createObservers(info.observers,info.properties)}this._prepareTemplate()}}static get properties(){const properties={};if(behaviorList){for(let i=0;i<behaviorList.length;i++){mergeProperties(properties,behaviorList[i].properties)}}mergeProperties(properties,info.properties);return properties}static get observers(){let observers=[];if(behaviorList){for(let i=0,b;i<behaviorList.length;i++){b=behaviorList[i];if(b.observers){observers=observers.concat(b.observers)}}}if(info.observers){observers=observers.concat(info.observers)}return observers}created(){super.created();const list=lifecycle.created;if(list){for(let i=0;i<list.length;i++){list[i].call(this)}}}_registered(){const generatedProto=PolymerGenerated.prototype;if(!generatedProto.hasOwnProperty("__hasRegisterFinished")){generatedProto.__hasRegisterFinished=!0;super._registered();if(legacyOptimizations){copyPropertiesToProto(generatedProto)}const proto=Object.getPrototypeOf(this);let list=lifecycle.beforeRegister;if(list){for(let i=0;i<list.length;i++){list[i].call(proto)}}list=lifecycle.registered;if(list){for(let i=0;i<list.length;i++){list[i].call(proto)}}}}_applyListeners(){super._applyListeners();const list=lifecycle.listeners;if(list){for(let i=0;i<list.length;i++){const listeners=list[i];if(listeners){for(let l in listeners){this._addMethodEventListenerToNode(this,l,listeners[l])}}}}}_ensureAttributes(){const list=lifecycle.hostAttributes;if(list){for(let i=list.length-1;0<=i;i--){const hostAttributes=list[i];for(let a in hostAttributes){this._ensureAttribute(a,hostAttributes[a])}}}super._ensureAttributes()}ready(){super.ready();let list=lifecycle.ready;if(list){for(let i=0;i<list.length;i++){list[i].call(this)}}}attached(){super.attached();let list=lifecycle.attached;if(list){for(let i=0;i<list.length;i++){list[i].call(this)}}}detached(){super.detached();let list=lifecycle.detached;if(list){for(let i=0;i<list.length;i++){list[i].call(this)}}}attributeChanged(name,old,value){super.attributeChanged();let list=lifecycle.attributeChanged;if(list){for(let i=0;i<list.length;i++){list[i].call(this,name,old,value)}}}}if(behaviors){if(!Array.isArray(behaviors)){behaviors=[behaviors]}let superBehaviors=Base.prototype.behaviors;behaviorList=flattenBehaviors(behaviors,null,superBehaviors);PolymerGenerated.prototype.behaviors=superBehaviors?superBehaviors.concat(behaviors):behaviorList}const copyPropertiesToProto=proto=>{if(behaviorList){applyBehaviors(proto,behaviorList,lifecycle)}applyInfo(proto,info,lifecycle,excludeOnInfo)};if(!legacyOptimizations){copyPropertiesToProto(PolymerGenerated.prototype)}PolymerGenerated.generatedFrom=info;return PolymerGenerated}const Class=function(info,mixin){if(!info){console.warn("Polymer.Class requires `info` argument")}let klass=mixin?mixin(LegacyElementMixin(HTMLElement)):LegacyElementMixin(HTMLElement);klass=GenerateClassFromInfo(info,klass,info.behaviors);klass.is=klass.prototype.is=info.is;return klass};_exports.Class=Class;var _class={mixinBehaviors:mixinBehaviors,Class:Class};_exports.$class=_class;const Polymer=function(info){let klass;if("function"===typeof info){klass=info}else{klass=Polymer.Class(info)}customElements.define(klass.is,klass);return klass};_exports.Polymer$1=_exports.Polymer=Polymer;Polymer.Class=Class;var polymerFn={Polymer:Polymer};_exports.$polymerFn=polymerFn;function mutablePropertyChange(inst,property,value,old,mutableData){let isObject;if(mutableData){isObject="object"===typeof value&&null!==value;if(isObject){old=inst.__dataTemp[property]}}let shouldChange=old!==value&&(old===old||value===value);if(isObject&&shouldChange){inst.__dataTemp[property]=value}return shouldChange}const MutableData=dedupingMixin(superClass=>{class MutableData extends superClass{_shouldPropertyChange(property,value,old){return mutablePropertyChange(this,property,value,old,!0)}}return MutableData});_exports.MutableData=MutableData;const OptionalMutableData=dedupingMixin(superClass=>{class OptionalMutableData extends superClass{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(property,value,old){return mutablePropertyChange(this,property,value,old,this.mutableData)}}return OptionalMutableData});_exports.OptionalMutableData=OptionalMutableData;MutableData._mutablePropertyChange=mutablePropertyChange;var mutableData={MutableData:MutableData,OptionalMutableData:OptionalMutableData};_exports.$mutableData=mutableData;let newInstance=null;function HTMLTemplateElementExtension(){return newInstance}HTMLTemplateElementExtension.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:HTMLTemplateElementExtension,writable:!0}});const DataTemplate=PropertyEffects(HTMLTemplateElementExtension),MutableDataTemplate=MutableData(DataTemplate);function upgradeTemplate(template,constructor){newInstance=template;Object.setPrototypeOf(template,constructor.prototype);new constructor;newInstance=null}const templateInstanceBase=PropertyEffects(class{});class TemplateInstanceBase extends templateInstanceBase{constructor(props){super();this._configureProperties(props);this.root=this._stampTemplate(this.__dataHost);let children=this.children=[];for(let n=this.root.firstChild;n;n=n.nextSibling){children.push(n);n.__templatizeInstance=this}if(this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__){this._showHideChildren(!0)}let options=this.__templatizeOptions;if(props&&options.instanceProps||!options.instanceProps){this._enableProperties()}}_configureProperties(props){let options=this.__templatizeOptions;if(options.forwardHostProp){for(let hprop in this.__hostProps){this._setPendingProperty(hprop,this.__dataHost["_host_"+hprop])}}for(let iprop in props){this._setPendingProperty(iprop,props[iprop])}}forwardHostProp(prop,value){if(this._setPendingPropertyOrPath(prop,value,!1,!0)){this.__dataHost._enqueueClient(this)}}_addEventListenerToNode(node,eventName,handler){if(this._methodHost&&this.__templatizeOptions.parentModel){this._methodHost._addEventListenerToNode(node,eventName,e=>{e.model=this;handler(e)})}else{let templateHost=this.__dataHost.__dataHost;if(templateHost){templateHost._addEventListenerToNode(node,eventName,handler)}}}_showHideChildren(hide){let c=this.children;for(let i=0,n;i<c.length;i++){n=c[i];if(!!hide!=!!n.__hideTemplateChildren__){if(n.nodeType===Node.TEXT_NODE){if(hide){n.__polymerTextContent__=n.textContent;n.textContent=""}else{n.textContent=n.__polymerTextContent__}}else if("slot"===n.localName){if(hide){n.__polymerReplaced__=document.createComment("hidden-slot");wrap$1(wrap$1(n).parentNode).replaceChild(n.__polymerReplaced__,n)}else{const replace=n.__polymerReplaced__;if(replace){wrap$1(wrap$1(replace).parentNode).replaceChild(n,replace)}}}else if(n.style){if(hide){n.__polymerDisplay__=n.style.display;n.style.display="none"}else{n.style.display=n.__polymerDisplay__}}}n.__hideTemplateChildren__=hide;if(n._showHideChildren){n._showHideChildren(hide)}}}_setUnmanagedPropertyToNode(node,prop,value){if(node.__hideTemplateChildren__&&node.nodeType==Node.TEXT_NODE&&"textContent"==prop){node.__polymerTextContent__=value}else{super._setUnmanagedPropertyToNode(node,prop,value)}}get parentModel(){let model=this.__parentModel;if(!model){let options;model=this;do{model=model.__dataHost.__dataHost}while((options=model.__templatizeOptions)&&!options.parentModel);this.__parentModel=model}return model}dispatchEvent(event){return!0}}_exports.TemplateInstanceBase=TemplateInstanceBase;TemplateInstanceBase.prototype.__dataHost;TemplateInstanceBase.prototype.__templatizeOptions;TemplateInstanceBase.prototype._methodHost;TemplateInstanceBase.prototype.__templatizeOwner;TemplateInstanceBase.prototype.__hostProps;const MutableTemplateInstanceBase=MutableData(TemplateInstanceBase);function findMethodHost(template){let templateHost=template.__dataHost;return templateHost&&templateHost._methodHost||templateHost}function createTemplatizerClass(template,templateInfo,options){let templatizerBase=options.mutableData?MutableTemplateInstanceBase:TemplateInstanceBase;if(templatize.mixin){templatizerBase=templatize.mixin(templatizerBase)}let klass=class extends templatizerBase{};klass.prototype.__templatizeOptions=options;klass.prototype._bindTemplate(template);addNotifyEffects(klass,template,templateInfo,options);return klass}function addPropagateEffects(template,templateInfo,options){let userForwardHostProp=options.forwardHostProp;if(userForwardHostProp){let klass=templateInfo.templatizeTemplateClass;if(!klass){let templatizedBase=options.mutableData?MutableDataTemplate:DataTemplate;klass=templateInfo.templatizeTemplateClass=class TemplatizedTemplate extends templatizedBase{};let hostProps=templateInfo.hostProps;for(let prop in hostProps){klass.prototype._addPropertyEffect("_host_"+prop,klass.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:createForwardHostPropEffect(prop,userForwardHostProp)});klass.prototype._createNotifyingProperty("_host_"+prop)}}upgradeTemplate(template,klass);if(template.__dataProto){Object.assign(template.__data,template.__dataProto)}template.__dataTemp={};template.__dataPending=null;template.__dataOld=null;template._enableProperties()}}function createForwardHostPropEffect(hostProp,userForwardHostProp){return function forwardHostProp(template,prop,props){userForwardHostProp.call(template.__templatizeOwner,prop.substring("_host_".length),props[prop])}}function addNotifyEffects(klass,template,templateInfo,options){let hostProps=templateInfo.hostProps||{};for(let iprop in options.instanceProps){delete hostProps[iprop];let userNotifyInstanceProp=options.notifyInstanceProp;if(userNotifyInstanceProp){klass.prototype._addPropertyEffect(iprop,klass.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:createNotifyInstancePropEffect(iprop,userNotifyInstanceProp)})}}if(options.forwardHostProp&&template.__dataHost){for(let hprop in hostProps){klass.prototype._addPropertyEffect(hprop,klass.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:createNotifyHostPropEffect()})}}}function createNotifyInstancePropEffect(instProp,userNotifyInstanceProp){return function notifyInstanceProp(inst,prop,props){userNotifyInstanceProp.call(inst.__templatizeOwner,inst,prop,props[prop])}}function createNotifyHostPropEffect(){return function notifyHostProp(inst,prop,props){inst.__dataHost._setPendingPropertyOrPath("_host_"+prop,props[prop],!0,!0)}}function templatize(template,owner,options){if(strictTemplatePolicy&&!findMethodHost(template)){throw new Error("strictTemplatePolicy: template owner not trusted")}options=options||{};if(template.__templatizeOwner){throw new Error("A <template> can only be templatized once")}template.__templatizeOwner=owner;const ctor=owner?owner.constructor:TemplateInstanceBase;let templateInfo=ctor._parseTemplate(template),baseClass=templateInfo.templatizeInstanceClass;if(!baseClass){baseClass=createTemplatizerClass(template,templateInfo,options);templateInfo.templatizeInstanceClass=baseClass}addPropagateEffects(template,templateInfo,options);let klass=class TemplateInstance extends baseClass{};klass.prototype._methodHost=findMethodHost(template);klass.prototype.__dataHost=template;klass.prototype.__templatizeOwner=owner;klass.prototype.__hostProps=templateInfo.hostProps;klass=klass;return klass}function modelForElement(template,node){let model;while(node){if(model=node.__templatizeInstance){if(model.__dataHost!=template){node=model.__dataHost}else{return model}}else{node=wrap$1(node).parentNode}}return null}var templatize$1={templatize:templatize,modelForElement:modelForElement,TemplateInstanceBase:TemplateInstanceBase};_exports.$templatize=templatize$1;let TemplatizerUser;const Templatizer={templatize(template,mutableData){this._templatizerTemplate=template;this.ctor=templatize(template,this,{mutableData:!!mutableData,parentModel:this._parentModel,instanceProps:this._instanceProps,forwardHostProp:this._forwardHostPropV2,notifyInstanceProp:this._notifyInstancePropV2})},stamp(model){return new this.ctor(model)},modelForElement(el){return modelForElement(this._templatizerTemplate,el)}};_exports.Templatizer=Templatizer;var templatizerBehavior={Templatizer:Templatizer};_exports.$templatizerBehavior=templatizerBehavior;const domBindBase=GestureEventListeners(OptionalMutableData(PropertyEffects(HTMLElement)));class DomBind extends domBindBase{static get observedAttributes(){return["mutable-data"]}constructor(){super();if(strictTemplatePolicy){throw new Error(`strictTemplatePolicy: dom-bind not allowed`)}this.root=null;this.$=null;this.__children=null}attributeChangedCallback(){this.mutableData=!0}connectedCallback(){this.style.display="none";this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){wrap$1(wrap$1(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children){for(let i=0;i<this.__children.length;i++){this.root.appendChild(this.__children[i])}}}render(){let template;if(!this.__children){template=template||this.querySelector("template");if(!template){let observer=new MutationObserver(()=>{template=this.querySelector("template");if(template){observer.disconnect();this.render()}else{throw new Error("dom-bind requires a <template> child")}});observer.observe(this,{childList:!0});return}this.root=this._stampTemplate(template);this.$=this.root.$;this.__children=[];for(let n=this.root.firstChild;n;n=n.nextSibling){this.__children[this.__children.length]=n}this._enableProperties()}this.__insertChildren();this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}}_exports.DomBind=DomBind;customElements.define("dom-bind",DomBind);var domBind={DomBind:DomBind};_exports.$domBind=domBind;class LiteralString{constructor(string){this.value=string.toString()}toString(){return this.value}}function literalValue(value){if(value instanceof LiteralString){return value.value}else{throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${value}`)}}function htmlValue(value){if(value instanceof HTMLTemplateElement){return value.innerHTML}else if(value instanceof LiteralString){return literalValue(value)}else{throw new Error(`non-template value passed to Polymer's html function: ${value}`)}}const html=function html(strings,...values){const template=document.createElement("template");template.innerHTML=values.reduce((acc,v,idx)=>acc+htmlValue(v)+strings[idx+1],strings[0]);return template};_exports.html$2=_exports.html=_exports.html$1=html;const htmlLiteral=function(strings,...values){return new LiteralString(values.reduce((acc,v,idx)=>acc+literalValue(v)+strings[idx+1],strings[0]))};_exports.htmlLiteral=htmlLiteral;var htmlTag={html:html,htmlLiteral:htmlLiteral};_exports.$htmlTag=htmlTag;const PolymerElement=ElementMixin(HTMLElement);_exports.PolymerElement=PolymerElement;var polymerElement={version:version,PolymerElement:PolymerElement,html:html};_exports.$polymerElement=polymerElement;const domRepeatBase=OptionalMutableData(PolymerElement);class DomRepeat extends domRepeatBase{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!0,readOnly:!0},initialCount:{type:Number,observer:"__initializeChunking"},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super();this.__instances=[];this.__limit=1/0;this.__pool=[];this.__renderDebouncer=null;this.__itemsIdxToInstIdx={};this.__chunkCount=null;this.__lastChunkTime=null;this.__sortFn=null;this.__filterFn=null;this.__observePaths=null;this.__ctor=null;this.__isDetached=!0;this.template=null}disconnectedCallback(){super.disconnectedCallback();this.__isDetached=!0;for(let i=0;i<this.__instances.length;i++){this.__detachInstance(i)}}connectedCallback(){super.connectedCallback();this.style.display="none";if(this.__isDetached){this.__isDetached=!1;let wrappedParent=wrap$1(wrap$1(this).parentNode);for(let i=0;i<this.__instances.length;i++){this.__attachInstance(i,wrappedParent)}}}__ensureTemplatized(){if(!this.__ctor){let template=this.template=this.querySelector("template");if(!template){let observer=new MutationObserver(()=>{if(this.querySelector("template")){observer.disconnect();this.__render()}else{throw new Error("dom-repeat requires a <template> child")}});observer.observe(this,{childList:!0});return!1}let instanceProps={};instanceProps[this.as]=!0;instanceProps[this.indexAs]=!0;instanceProps[this.itemsIndexAs]=!0;this.__ctor=templatize(template,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:instanceProps,forwardHostProp:function(prop,value){let i$=this.__instances;for(let i=0,inst;i<i$.length&&(inst=i$[i]);i++){inst.forwardHostProp(prop,value)}},notifyInstanceProp:function(inst,prop,value){if(matches(this.as,prop)){let idx=inst[this.itemsIndexAs];if(prop==this.as){this.items[idx]=value}let path=translate(this.as,`${JSCompiler_renameProperty("items",this)}.${idx}`,prop);this.notifyPath(path,value)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(functionOrMethodName){if("string"===typeof functionOrMethodName){let methodName=functionOrMethodName,obj=this.__getMethodHost();return function(){return obj[methodName].apply(obj,arguments)}}return functionOrMethodName}__sortChanged(sort){this.__sortFn=this.__functionFromPropertyValue(sort);if(this.items){this.__debounceRender(this.__render)}}__filterChanged(filter){this.__filterFn=this.__functionFromPropertyValue(filter);if(this.items){this.__debounceRender(this.__render)}}__computeFrameTime(rate){return _Mathceil(1e3/rate)}__initializeChunking(){if(this.initialCount){this.__limit=this.initialCount;this.__chunkCount=this.initialCount;this.__lastChunkTime=performance.now()}}__tryRenderChunk(){if(this.items&&this.__limit<this.items.length){this.__debounceRender(this.__requestRenderChunk)}}__requestRenderChunk(){requestAnimationFrame(()=>this.__renderChunk())}__renderChunk(){let currChunkTime=performance.now(),ratio=this._targetFrameTime/(currChunkTime-this.__lastChunkTime);this.__chunkCount=_Mathround(this.__chunkCount*ratio)||1;this.__limit+=this.__chunkCount;this.__lastChunkTime=currChunkTime;this.__debounceRender(this.__render)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__itemsChanged(change){if(this.items&&!Array.isArray(this.items)){console.warn("dom-repeat expected array for `items`, found",this.items)}if(!this.__handleItemPath(change.path,change.value)){this.__initializeChunking();this.__debounceRender(this.__render)}}__handleObservedPaths(path){if(this.__sortFn||this.__filterFn){if(!path){this.__debounceRender(this.__render,this.delay)}else if(this.__observePaths){let paths=this.__observePaths;for(let i=0;i<paths.length;i++){if(0===path.indexOf(paths[i])){this.__debounceRender(this.__render,this.delay)}}}}}__debounceRender(fn,delay=0){this.__renderDebouncer=Debouncer.debounce(this.__renderDebouncer,0<delay?timeOut.after(delay):microTask,fn.bind(this));enqueueDebouncer(this.__renderDebouncer)}render(){this.__debounceRender(this.__render);flush$1()}__render(){if(!this.__ensureTemplatized()){return}this.__applyFullRefresh();this.__pool.length=0;this._setRenderedItemCount(this.__instances.length);this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}));this.__tryRenderChunk()}__applyFullRefresh(){let items=this.items||[],isntIdxToItemsIdx=Array(items.length);for(let i=0;i<items.length;i++){isntIdxToItemsIdx[i]=i}if(this.__filterFn){isntIdxToItemsIdx=isntIdxToItemsIdx.filter((i,idx,array)=>this.__filterFn(items[i],idx,array))}if(this.__sortFn){isntIdxToItemsIdx.sort((a,b)=>this.__sortFn(items[a],items[b]))}const itemsIdxToInstIdx=this.__itemsIdxToInstIdx={};let instIdx=0;const limit=_Mathmin(isntIdxToItemsIdx.length,this.__limit);for(;instIdx<limit;instIdx++){let inst=this.__instances[instIdx],itemIdx=isntIdxToItemsIdx[instIdx],item=items[itemIdx];itemsIdxToInstIdx[itemIdx]=instIdx;if(inst){inst._setPendingProperty(this.as,item);inst._setPendingProperty(this.indexAs,instIdx);inst._setPendingProperty(this.itemsIndexAs,itemIdx);inst._flushProperties()}else{this.__insertInstance(item,instIdx,itemIdx)}}for(let i=this.__instances.length-1;i>=instIdx;i--){this.__detachAndRemoveInstance(i)}}__detachInstance(idx){let inst=this.__instances[idx];const wrappedRoot=wrap$1(inst.root);for(let i=0,el;i<inst.children.length;i++){el=inst.children[i];wrappedRoot.appendChild(el)}return inst}__attachInstance(idx,parent){let inst=this.__instances[idx];parent.insertBefore(inst.root,this)}__detachAndRemoveInstance(idx){let inst=this.__detachInstance(idx);if(inst){this.__pool.push(inst)}this.__instances.splice(idx,1)}__stampInstance(item,instIdx,itemIdx){let model={};model[this.as]=item;model[this.indexAs]=instIdx;model[this.itemsIndexAs]=itemIdx;return new this.__ctor(model)}__insertInstance(item,instIdx,itemIdx){let inst=this.__pool.pop();if(inst){inst._setPendingProperty(this.as,item);inst._setPendingProperty(this.indexAs,instIdx);inst._setPendingProperty(this.itemsIndexAs,itemIdx);inst._flushProperties()}else{inst=this.__stampInstance(item,instIdx,itemIdx)}let beforeRow=this.__instances[instIdx+1],beforeNode=beforeRow?beforeRow.children[0]:this;wrap$1(wrap$1(this).parentNode).insertBefore(inst.root,beforeNode);this.__instances[instIdx]=inst;return inst}_showHideChildren(hidden){for(let i=0;i<this.__instances.length;i++){this.__instances[i]._showHideChildren(hidden)}}__handleItemPath(path,value){let itemsPath=path.slice(6),dot=itemsPath.indexOf("."),itemsIdx=0>dot?itemsPath:itemsPath.substring(0,dot);if(itemsIdx==parseInt(itemsIdx,10)){let itemSubPath=0>dot?"":itemsPath.substring(dot+1);this.__handleObservedPaths(itemSubPath);let instIdx=this.__itemsIdxToInstIdx[itemsIdx],inst=this.__instances[instIdx];if(inst){let itemPath=this.as+(itemSubPath?"."+itemSubPath:"");inst._setPendingPropertyOrPath(itemPath,value,!1,!0);inst._flushProperties()}return!0}}itemForElement(el){let instance=this.modelForElement(el);return instance&&instance[this.as]}indexForElement(el){let instance=this.modelForElement(el);return instance&&instance[this.indexAs]}modelForElement(el){return modelForElement(this.template,el)}}_exports.DomRepeat=DomRepeat;customElements.define(DomRepeat.is,DomRepeat);var domRepeat={DomRepeat:DomRepeat};_exports.$domRepeat=domRepeat;class DomIf extends PolymerElement{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"}}}constructor(){super();this.__renderDebouncer=null;this.__invalidProps=null;this.__instance=null;this._lastIf=!1;this.__ctor=null;this.__hideTemplateChildren__=!1}__debounceRender(){this.__renderDebouncer=Debouncer.debounce(this.__renderDebouncer,microTask,()=>this.__render());enqueueDebouncer(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const parent=wrap$1(this).parentNode;if(!parent||parent.nodeType==Node.DOCUMENT_FRAGMENT_NODE&&!wrap$1(parent).host){this.__teardownInstance()}}connectedCallback(){super.connectedCallback();this.style.display="none";if(this.if){this.__debounceRender()}}render(){flush$1()}__render(){if(this.if){if(!this.__ensureInstance()){return}this._showHideChildren()}else if(this.restamp){this.__teardownInstance()}if(!this.restamp&&this.__instance){this._showHideChildren()}if(this.if!=this._lastIf){this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}));this._lastIf=this.if}}__ensureInstance(){let parentNode=wrap$1(this).parentNode;if(parentNode){if(!this.__ctor){let template=wrap$1(this).querySelector("template");if(!template){let observer=new MutationObserver(()=>{if(wrap$1(this).querySelector("template")){observer.disconnect();this.__render()}else{throw new Error("dom-if requires a <template> child")}});observer.observe(this,{childList:!0});return!1}this.__ctor=templatize(template,this,{mutableData:!0,forwardHostProp:function(prop,value){if(this.__instance){if(this.if){this.__instance.forwardHostProp(prop,value)}else{this.__invalidProps=this.__invalidProps||Object.create(null);this.__invalidProps[root(prop)]=!0}}}})}if(!this.__instance){this.__instance=new this.__ctor;wrap$1(parentNode).insertBefore(this.__instance.root,this)}else{this.__syncHostProperties();let c$=this.__instance.children;if(c$&&c$.length){let lastChild=wrap$1(this).previousSibling;if(lastChild!==c$[c$.length-1]){for(let i=0,n;i<c$.length&&(n=c$[i]);i++){wrap$1(parentNode).insertBefore(n,this)}}}}}return!0}__syncHostProperties(){let props=this.__invalidProps;if(props){for(let prop in props){this.__instance._setPendingProperty(prop,this.__dataHost[prop])}this.__invalidProps=null;this.__instance._flushProperties()}}__teardownInstance(){if(this.__instance){let c$=this.__instance.children;if(c$&&c$.length){let parent=wrap$1(c$[0]).parentNode;if(parent){parent=wrap$1(parent);for(let i=0,n;i<c$.length&&(n=c$[i]);i++){parent.removeChild(n)}}}this.__instance=null;this.__invalidProps=null}}_showHideChildren(){let hidden=this.__hideTemplateChildren__||!this.if;if(this.__instance){this.__instance._showHideChildren(hidden)}}}_exports.DomIf=DomIf;customElements.define(DomIf.is,DomIf);var domIf={DomIf:DomIf};_exports.$domIf=domIf;let ArraySelectorMixin=dedupingMixin(superClass=>{let elementBase=ElementMixin(superClass);class ArraySelectorMixin extends elementBase{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super();this.__lastItems=null;this.__lastMulti=null;this.__selectedMap=null}__updateSelection(multi,itemsInfo){let path=itemsInfo.path;if(path==JSCompiler_renameProperty("items",this)){let newItems=itemsInfo.base||[],lastItems=this.__lastItems,lastMulti=this.__lastMulti;if(multi!==lastMulti){this.clearSelection()}if(lastItems){let splices=calculateSplices(newItems,lastItems);this.__applySplices(splices)}this.__lastItems=newItems;this.__lastMulti=multi}else if(`${JSCompiler_renameProperty("items",this)}.splices`==itemsInfo.path){this.__applySplices(itemsInfo.value.indexSplices)}else{let part=path.slice(`${JSCompiler_renameProperty("items",this)}.`.length),idx=parseInt(part,10);if(0>part.indexOf(".")&&part==idx){this.__deselectChangedIdx(idx)}}}__applySplices(splices){let selected=this.__selectedMap;for(let i=0,s;i<splices.length;i++){s=splices[i];selected.forEach((idx,item)=>{if(idx<s.index){}else if(idx>=s.index+s.removed.length){selected.set(item,idx+s.addedCount-s.removed.length)}else{selected.set(item,-1)}});for(let j=0,idx;j<s.addedCount;j++){idx=s.index+j;if(selected.has(this.items[idx])){selected.set(this.items[idx],idx)}}}this.__updateLinks();let sidx=0;selected.forEach((idx,item)=>{if(0>idx){if(this.multi){this.splice(JSCompiler_renameProperty("selected",this),sidx,1)}else{this.selected=this.selectedItem=null}selected.delete(item)}else{sidx++}})}__updateLinks(){this.__dataLinkedPaths={};if(this.multi){let sidx=0;this.__selectedMap.forEach(idx=>{if(0<=idx){this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${idx}`,`${JSCompiler_renameProperty("selected",this)}.${sidx++}`)}})}else{this.__selectedMap.forEach(idx=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${idx}`);this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${idx}`)})}}clearSelection(){this.__dataLinkedPaths={};this.__selectedMap=new Map;this.selected=this.multi?[]:null;this.selectedItem=null}isSelected(item){return this.__selectedMap.has(item)}isIndexSelected(idx){return this.isSelected(this.items[idx])}__deselectChangedIdx(idx){let sidx=this.__selectedIndexForItemIndex(idx);if(0<=sidx){let i=0;this.__selectedMap.forEach((idx,item)=>{if(sidx==i++){this.deselect(item)}})}}__selectedIndexForItemIndex(idx){let selected=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${idx}`];if(selected){return parseInt(selected.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}}deselect(item){let idx=this.__selectedMap.get(item);if(0<=idx){this.__selectedMap.delete(item);let sidx;if(this.multi){sidx=this.__selectedIndexForItemIndex(idx)}this.__updateLinks();if(this.multi){this.splice(JSCompiler_renameProperty("selected",this),sidx,1)}else{this.selected=this.selectedItem=null}}}deselectIndex(idx){this.deselect(this.items[idx])}select(item){this.selectIndex(this.items.indexOf(item))}selectIndex(idx){let item=this.items[idx];if(!this.isSelected(item)){if(!this.multi){this.__selectedMap.clear()}this.__selectedMap.set(item,idx);this.__updateLinks();if(this.multi){this.push(JSCompiler_renameProperty("selected",this),item)}else{this.selected=this.selectedItem=item}}else if(this.toggle){this.deselectIndex(idx)}}}return ArraySelectorMixin});_exports.ArraySelectorMixin=ArraySelectorMixin;let baseArraySelector=ArraySelectorMixin(PolymerElement);class ArraySelector extends baseArraySelector{static get is(){return"array-selector"}static get template(){return null}}_exports.ArraySelector=ArraySelector;customElements.define(ArraySelector.is,ArraySelector);var arraySelector={ArraySelectorMixin:ArraySelectorMixin,ArraySelector:ArraySelector};_exports.$arraySelector=arraySelector;"use strict";const customStyleInterface$1=new CustomStyleInterface;if(!window.ShadyCSS){window.ShadyCSS={prepareTemplate(template,elementName,elementExtends){},prepareTemplateDom(template,elementName){},prepareTemplateStyles(template,elementName,elementExtends){},styleSubtree(element,properties){customStyleInterface$1.processStyles();updateNativeProperties(element,properties)},styleElement(element){customStyleInterface$1.processStyles()},styleDocument(properties){customStyleInterface$1.processStyles();updateNativeProperties(document.body,properties)},getComputedStyleValue(element,property){return getComputedStyleValue(element,property)},flushCustomStyles(){},nativeCss:nativeCssVariables,nativeShadow:nativeShadow,cssBuild:cssBuild,disableRuntime:disableRuntime}}window.ShadyCSS.CustomStyleInterface=customStyleInterface$1;const attr="include",CustomStyleInterface$1=window.ShadyCSS.CustomStyleInterface;class CustomStyle extends HTMLElement{constructor(){super();this._style=null;CustomStyleInterface$1.addCustomStyle(this)}getStyle(){if(this._style){return this._style}const style=this.querySelector("style");if(!style){return null}this._style=style;const include=style.getAttribute(attr);if(include){style.removeAttribute(attr);style.textContent=cssFromModules(include)+style.textContent}if(this.ownerDocument!==window.document){window.document.head.appendChild(this)}return this._style}}_exports.CustomStyle=CustomStyle;window.customElements.define("custom-style",CustomStyle);var customStyle={CustomStyle:CustomStyle};_exports.$customStyle=customStyle;let mutablePropertyChange$1;(()=>{mutablePropertyChange$1=MutableData._mutablePropertyChange})();const MutableDataBehavior={_shouldPropertyChange(property,value,old){return mutablePropertyChange$1(this,property,value,old,!0)}};_exports.MutableDataBehavior=MutableDataBehavior;const OptionalMutableDataBehavior={properties:{mutableData:Boolean},_shouldPropertyChange(property,value,old){return mutablePropertyChange$1(this,property,value,old,this.mutableData)}};_exports.OptionalMutableDataBehavior=OptionalMutableDataBehavior;var mutableDataBehavior={MutableDataBehavior:MutableDataBehavior,OptionalMutableDataBehavior:OptionalMutableDataBehavior};_exports.$mutableDataBehavior=mutableDataBehavior;const Base=LegacyElementMixin(HTMLElement).prototype;_exports.Base=Base;var polymerLegacy={Base:Base,Polymer:Polymer,html:html};_exports.$polymerLegacy=polymerLegacy;Polymer({is:"iron-media-query",properties:{queryMatches:{type:Boolean,value:!1,readOnly:!0,notify:!0},query:{type:String,observer:"queryChanged"},full:{type:Boolean,value:!1},_boundMQHandler:{value:function(){return this.queryHandler.bind(this)}},_mq:{value:null}},attached:function(){this.style.display="none";this.queryChanged()},detached:function(){this._remove()},_add:function(){if(this._mq){this._mq.addListener(this._boundMQHandler)}},_remove:function(){if(this._mq){this._mq.removeListener(this._boundMQHandler)}this._mq=null},queryChanged:function(){this._remove();var query=this.query;if(!query){return}if(!this.full&&"("!==query[0]){query="("+query+")"}this._mq=window.matchMedia(query);this._add();this.queryHandler(this._mq)},queryHandler:function(mq){this._setQueryMatches(mq.matches)}});var ORPHANS=new Set;const IronResizableBehavior={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[];this._boundNotifyResize=this.notifyResize.bind(this);this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){if(this._parentResizable){this._parentResizable.stopResizeNotificationsFor(this)}else{ORPHANS.delete(this);window.removeEventListener("resize",this._boundNotifyResize)}this._parentResizable=null},notifyResize:function(){if(!this.isAttached){return}this._interestedResizables.forEach(function(resizable){if(this.resizerShouldNotify(resizable)){this._notifyDescendant(resizable)}},this);this._fireResize()},assignParentResizable:function(parentResizable){if(this._parentResizable){this._parentResizable.stopResizeNotificationsFor(this)}this._parentResizable=parentResizable;if(parentResizable&&-1===parentResizable._interestedResizables.indexOf(this)){parentResizable._interestedResizables.push(this);parentResizable._subscribeIronResize(this)}},stopResizeNotificationsFor:function(target){var index=this._interestedResizables.indexOf(target);if(-1<index){this._interestedResizables.splice(index,1);this._unsubscribeIronResize(target)}},_subscribeIronResize:function(target){target.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(target){target.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(element){return!0},_onDescendantIronResize:function(event){if(this._notifyingDescendant){event.stopPropagation();return}if(!useShadow){this._fireResize()}},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(event){var target=dom(event).rootTarget;if(target===this){return}target.assignParentResizable(this);this._notifyDescendant(target);event.stopPropagation()},_parentResizableChanged:function(parentResizable){if(parentResizable){window.removeEventListener("resize",this._boundNotifyResize)}},_notifyDescendant:function(descendant){if(!this.isAttached){return}this._notifyingDescendant=!0;descendant.notifyResize();this._notifyingDescendant=!1},_requestResizeNotifications:function(){if(!this.isAttached){return}if("loading"===document.readyState){var _requestResizeNotifications=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",function readystatechanged(){document.removeEventListener("readystatechange",readystatechanged);_requestResizeNotifications()})}else{this._findParent();if(!this._parentResizable){ORPHANS.forEach(function(orphan){if(orphan!==this){orphan._findParent()}},this);window.addEventListener("resize",this._boundNotifyResize);this.notifyResize()}else{this._parentResizable._interestedResizables.forEach(function(resizable){if(resizable!==this){resizable._findParent()}},this)}}},_findParent:function(){this.assignParentResizable(null);this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0});if(!this._parentResizable){ORPHANS.add(this)}else{ORPHANS.delete(this)}}};_exports.IronResizableBehavior=IronResizableBehavior;var ironResizableBehavior={IronResizableBehavior:IronResizableBehavior};_exports.$ironResizableBehavior=ironResizableBehavior;const AppLayoutBehavior=[IronResizableBehavior,{listeners:{"app-reset-layout":"_appResetLayoutHandler","iron-resize":"resetLayout"},attached:function(){this.fire("app-reset-layout")},_appResetLayoutHandler:function(e){if(dom(e).path[0]===this){return}this.resetLayout();e.stopPropagation()},_updateLayoutStates:function(){console.error("unimplemented")},resetLayout:function(){var self=this,cb=this._updateLayoutStates.bind(this);this._layoutDebouncer=Debouncer.debounce(this._layoutDebouncer,animationFrame,cb);enqueueDebouncer(this._layoutDebouncer);this._notifyDescendantResize()},_notifyLayoutChanged:function(){var self=this;requestAnimationFrame(function(){self.fire("app-reset-layout")})},_notifyDescendantResize:function(){if(!this.isAttached){return}this._interestedResizables.forEach(function(resizable){if(this.resizerShouldNotify(resizable)){this._notifyDescendant(resizable)}},this)}}];_exports.AppLayoutBehavior=AppLayoutBehavior;var appLayoutBehavior={AppLayoutBehavior:AppLayoutBehavior};_exports.$appLayoutBehavior=appLayoutBehavior;Polymer({_template:html`
    <style>
      :host {
        display: block;
        /**
         * Force app-drawer-layout to have its own stacking context so that its parent can
         * control the stacking of it relative to other elements.
         */
        position: relative;
        z-index: 0;
      }

      :host ::slotted([slot=drawer]) {
        z-index: 1;
      }

      :host([fullbleed]) {
        @apply --layout-fit;
      }

      #contentContainer {
        /* Create a stacking context here so that all children appear below the header. */
        position: relative;
        z-index: 0;
        height: 100%;
        transition: var(--app-drawer-layout-content-transition, none);
      }

      #contentContainer[drawer-position=left] {
        margin-left: var(--app-drawer-width, 256px);
      }

      #contentContainer[drawer-position=right] {
        margin-right: var(--app-drawer-width, 256px);
      }
    </style>

    <slot id="drawerSlot" name="drawer"></slot>

    <div id="contentContainer" drawer-position\$="[[_drawerPosition]]">
      <slot></slot>
    </div>

    <iron-media-query query="[[_computeMediaQuery(forceNarrow, responsiveWidth)]]" on-query-matches-changed="_onQueryMatchesChanged"></iron-media-query>
`,is:"app-drawer-layout",behaviors:[AppLayoutBehavior],properties:{forceNarrow:{type:Boolean,value:!1},responsiveWidth:{type:String,value:"640px"},narrow:{type:Boolean,reflectToAttribute:!0,readOnly:!0,notify:!0},openedWhenNarrow:{type:Boolean,value:!1},_drawerPosition:{type:String}},listeners:{click:"_clickHandler"},observers:["_narrowChanged(narrow)"],get drawer(){return dom(this.$.drawerSlot).getDistributedNodes()[0]},attached:function(){var drawer=this.drawer;if(drawer){drawer.setAttribute("no-transition","")}},_clickHandler:function(e){var target=dom(e).localTarget;if(target&&target.hasAttribute("drawer-toggle")){var drawer=this.drawer;if(drawer&&!drawer.persistent){drawer.toggle()}}},_updateLayoutStates:function(){var drawer=this.drawer;if(!this.isAttached||!drawer){return}this._drawerPosition=this.narrow?null:drawer.position;if(this._drawerNeedsReset){if(this.narrow){drawer.opened=this.openedWhenNarrow;drawer.persistent=!1}else{drawer.opened=drawer.persistent=!0}if(drawer.hasAttribute("no-transition")){afterNextRender(this,function(){drawer.removeAttribute("no-transition")})}this._drawerNeedsReset=!1}},_narrowChanged:function(){this._drawerNeedsReset=!0;this.resetLayout()},_onQueryMatchesChanged:function(event){this._setNarrow(event.detail.value)},_computeMediaQuery:function(forceNarrow,responsiveWidth){return forceNarrow?"(min-width: 0px)":"(max-width: "+responsiveWidth+")"}});const template=html`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;template.setAttribute("style","display: none;");document.head.appendChild(template.content);var style=document.createElement("style");style.textContent="[hidden] { display: none !important; }";document.head.appendChild(style);Polymer({_template:html`
    <style>
      :host {
        position: fixed;
        top: -120px;
        right: 0;
        bottom: -120px;
        left: 0;

        visibility: hidden;

        transition-property: visibility;
      }

      :host([opened]) {
        visibility: visible;
      }

      :host([persistent]) {
        width: var(--app-drawer-width, 256px);
      }

      :host([persistent][position=left]) {
        right: auto;
      }

      :host([persistent][position=right]) {
        left: auto;
      }

      #contentContainer {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;

        width: var(--app-drawer-width, 256px);
        padding: 120px 0;

        transition-property: -webkit-transform;
        transition-property: transform;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);

        background-color: #FFF;

        @apply --app-drawer-content-container;
      }

      #contentContainer[persistent] {
        width: 100%;
      }

      #contentContainer[position=right] {
        right: 0;
        left: auto;

        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
      }

      #contentContainer[swipe-open]::after {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 100%;

        visibility: visible;

        width: 20px;

        content: '';
      }

      #contentContainer[swipe-open][position=right]::after {
        right: 100%;
        left: auto;
      }

      #contentContainer[opened] {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }

      #scrim {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        transition-property: opacity;
        -webkit-transform: translateZ(0);
        transform:  translateZ(0);

        opacity: 0;
        background: var(--app-drawer-scrim-background, rgba(0, 0, 0, 0.5));
      }

      #scrim.visible {
        opacity: 1;
      }

      :host([no-transition]) #contentContainer {
        transition-property: none;
      }
    </style>

    <div id="scrim" on-click="close"></div>

    <!-- HACK(keanulee): Bind attributes here (in addition to :host) for styling to workaround Safari
    bug. https://bugs.webkit.org/show_bug.cgi?id=170762 -->
    <div id="contentContainer" opened\$="[[opened]]" persistent\$="[[persistent]]" position\$="[[position]]" swipe-open\$="[[swipeOpen]]">
      <slot></slot>
    </div>
`,is:"app-drawer",properties:{opened:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},persistent:{type:Boolean,value:!1,reflectToAttribute:!0},transitionDuration:{type:Number,value:200},align:{type:String,value:"left"},position:{type:String,readOnly:!0,reflectToAttribute:!0},swipeOpen:{type:Boolean,value:!1,reflectToAttribute:!0},noFocusTrap:{type:Boolean,value:!1},disableSwipe:{type:Boolean,value:!1}},observers:["resetLayout(position, isAttached)","_resetPosition(align, isAttached)","_styleTransitionDuration(transitionDuration)","_openedPersistentChanged(opened, persistent)"],_translateOffset:0,_trackDetails:null,_drawerState:0,_boundEscKeydownHandler:null,_firstTabStop:null,_lastTabStop:null,attached:function(){afterNextRender(this,function(){this._boundEscKeydownHandler=this._escKeydownHandler.bind(this);this.addEventListener("keydown",this._tabKeydownHandler.bind(this));this.listen(this,"track","_track");this.setScrollDirection("y")});this.fire("app-reset-layout")},detached:function(){document.removeEventListener("keydown",this._boundEscKeydownHandler)},open:function(){this.opened=!0},close:function(){this.opened=!1},toggle:function(){this.opened=!this.opened},getWidth:function(){return this._savedWidth||this.$.contentContainer.offsetWidth},_isRTL:function(){return"rtl"===window.getComputedStyle(this).direction},_resetPosition:function(){switch(this.align){case"start":this._setPosition(this._isRTL()?"right":"left");return;case"end":this._setPosition(this._isRTL()?"left":"right");return;}this._setPosition(this.align)},_escKeydownHandler:function(event){var ESC_KEYCODE=27;if(event.keyCode===ESC_KEYCODE){event.preventDefault();this.close()}},_track:function(event){if(this.persistent||this.disableSwipe){return}event.preventDefault();switch(event.detail.state){case"start":this._trackStart(event);break;case"track":this._trackMove(event);break;case"end":this._trackEnd(event);break;}},_trackStart:function(event){this._drawerState=this._DRAWER_STATE.TRACKING;var rect=this.$.contentContainer.getBoundingClientRect();this._savedWidth=rect.width;if("left"===this.position){this._translateOffset=rect.left}else{this._translateOffset=rect.right-window.innerWidth}this._trackDetails=[];this._styleTransitionDuration(0);this.style.visibility="visible"},_trackMove:function(event){this._translateDrawer(event.detail.dx+this._translateOffset);this._trackDetails.push({dx:event.detail.dx,timeStamp:Date.now()})},_trackEnd:function(event){var x=event.detail.dx+this._translateOffset,drawerWidth=this.getWidth(),isPositionLeft="left"===this.position,isInEndState=isPositionLeft?0<=x||x<=-drawerWidth:0>=x||x>=drawerWidth;if(!isInEndState){var trackDetails=this._trackDetails;this._trackDetails=null;this._flingDrawer(event,trackDetails);if(this._drawerState===this._DRAWER_STATE.FLINGING){return}}var halfWidth=drawerWidth/2;if(event.detail.dx<-halfWidth){this.opened="right"===this.position}else if(event.detail.dx>halfWidth){this.opened="left"===this.position}if(isInEndState){this.debounce("_resetDrawerState",this._resetDrawerState)}else{this.debounce("_resetDrawerState",this._resetDrawerState,this.transitionDuration)}this._styleTransitionDuration(this.transitionDuration);this._resetDrawerTranslate();this.style.visibility=""},_calculateVelocity:function(event,trackDetails){var now=Date.now(),timeLowerBound=now-100,trackDetail,min=0,max=trackDetails.length-1;while(min<=max){var mid=min+max>>1,d=trackDetails[mid];if(d.timeStamp>=timeLowerBound){trackDetail=d;max=mid-1}else{min=mid+1}}if(trackDetail){var dx=event.detail.dx-trackDetail.dx,dt=now-trackDetail.timeStamp||1;return dx/dt}return 0},_flingDrawer:function(event,trackDetails){var velocity=this._calculateVelocity(event,trackDetails);if(_Mathabs(velocity)<this._MIN_FLING_THRESHOLD){return}this._drawerState=this._DRAWER_STATE.FLINGING;var x=event.detail.dx+this._translateOffset,drawerWidth=this.getWidth(),isPositionLeft="left"===this.position,isVelocityPositive=0<velocity,isClosingLeft=!isVelocityPositive&&isPositionLeft,isClosingRight=isVelocityPositive&&!isPositionLeft,dx;if(isClosingLeft){dx=-(x+drawerWidth)}else if(isClosingRight){dx=drawerWidth-x}else{dx=-x}if(isVelocityPositive){velocity=_Mathmax(velocity,this._MIN_TRANSITION_VELOCITY);this.opened="left"===this.position}else{velocity=_Mathmin(velocity,-this._MIN_TRANSITION_VELOCITY);this.opened="right"===this.position}var t=this._FLING_INITIAL_SLOPE*dx/velocity;this._styleTransitionDuration(t);this._styleTransitionTimingFunction(this._FLING_TIMING_FUNCTION);this._resetDrawerTranslate();this.debounce("_resetDrawerState",this._resetDrawerState,t)},_styleTransitionDuration:function(duration){this.style.transitionDuration=duration+"ms";this.$.contentContainer.style.transitionDuration=duration+"ms";this.$.scrim.style.transitionDuration=duration+"ms"},_styleTransitionTimingFunction:function(timingFunction){this.$.contentContainer.style.transitionTimingFunction=timingFunction;this.$.scrim.style.transitionTimingFunction=timingFunction},_translateDrawer:function(x){var drawerWidth=this.getWidth();if("left"===this.position){x=_Mathmax(-drawerWidth,_Mathmin(x,0));this.$.scrim.style.opacity=1+x/drawerWidth}else{x=_Mathmax(0,_Mathmin(x,drawerWidth));this.$.scrim.style.opacity=1-x/drawerWidth}this.translate3d(x+"px","0","0",this.$.contentContainer)},_resetDrawerTranslate:function(){this.$.scrim.style.opacity="";this.transform("",this.$.contentContainer)},_resetDrawerState:function(){var oldState=this._drawerState;if(oldState===this._DRAWER_STATE.FLINGING){this._styleTransitionDuration(this.transitionDuration);this._styleTransitionTimingFunction("");this.style.visibility=""}this._savedWidth=null;if(this.opened){this._drawerState=this.persistent?this._DRAWER_STATE.OPENED_PERSISTENT:this._DRAWER_STATE.OPENED}else{this._drawerState=this._DRAWER_STATE.CLOSED}if(oldState!==this._drawerState){if(this._drawerState===this._DRAWER_STATE.OPENED){this._setKeyboardFocusTrap();document.addEventListener("keydown",this._boundEscKeydownHandler);document.body.style.overflow="hidden"}else{document.removeEventListener("keydown",this._boundEscKeydownHandler);document.body.style.overflow=""}if(oldState!==this._DRAWER_STATE.INIT){this.fire("app-drawer-transitioned")}}},resetLayout:function(){this.fire("app-reset-layout")},_setKeyboardFocusTrap:function(){if(this.noFocusTrap){return}var focusableElementsSelector=["a[href]:not([tabindex=\"-1\"])","area[href]:not([tabindex=\"-1\"])","input:not([disabled]):not([tabindex=\"-1\"])","select:not([disabled]):not([tabindex=\"-1\"])","textarea:not([disabled]):not([tabindex=\"-1\"])","button:not([disabled]):not([tabindex=\"-1\"])","iframe:not([tabindex=\"-1\"])","[tabindex]:not([tabindex=\"-1\"])","[contentEditable=true]:not([tabindex=\"-1\"])"].join(","),focusableElements=dom(this).querySelectorAll(focusableElementsSelector);if(0<focusableElements.length){this._firstTabStop=focusableElements[0];this._lastTabStop=focusableElements[focusableElements.length-1]}else{this._firstTabStop=null;this._lastTabStop=null}var tabindex=this.getAttribute("tabindex");if(tabindex&&-1<parseInt(tabindex,10)){this.focus()}else if(this._firstTabStop){this._firstTabStop.focus()}},_tabKeydownHandler:function(event){if(this.noFocusTrap){return}var TAB_KEYCODE=9;if(this._drawerState===this._DRAWER_STATE.OPENED&&event.keyCode===TAB_KEYCODE){if(event.shiftKey){if(this._firstTabStop&&dom(event).localTarget===this._firstTabStop){event.preventDefault();this._lastTabStop.focus()}}else{if(this._lastTabStop&&dom(event).localTarget===this._lastTabStop){event.preventDefault();this._firstTabStop.focus()}}}},_openedPersistentChanged:function(opened,persistent){this.toggleClass("visible",opened&&!persistent,this.$.scrim);this.debounce("_resetDrawerState",this._resetDrawerState,this.transitionDuration)},_MIN_FLING_THRESHOLD:.2,_MIN_TRANSITION_VELOCITY:1.2,_FLING_TIMING_FUNCTION:"cubic-bezier(0.667, 1, 0.667, 1)",_FLING_INITIAL_SLOPE:1.5,_DRAWER_STATE:{INIT:0,OPENED:1,OPENED_PERSISTENT:2,CLOSED:3,TRACKING:4,FLINGING:5}});Polymer({_template:html`
    <style>
      :host {
        display: block;
        /**
         * Force app-header-layout to have its own stacking context so that its parent can
         * control the stacking of it relative to other elements (e.g. app-drawer-layout).
         * This could be done using \`isolation: isolate\`, but that's not well supported
         * across browsers.
         */
        position: relative;
        z-index: 0;
      }

      #wrapper ::slotted([slot=header]) {
        @apply --layout-fixed-top;
        z-index: 1;
      }

      #wrapper.initializing ::slotted([slot=header]) {
        position: relative;
      }

      :host([has-scrolling-region]) {
        height: 100%;
      }

      :host([has-scrolling-region]) #wrapper ::slotted([slot=header]) {
        position: absolute;
      }

      :host([has-scrolling-region]) #wrapper.initializing ::slotted([slot=header]) {
        position: relative;
      }

      :host([has-scrolling-region]) #wrapper #contentContainer {
        @apply --layout-fit;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }

      :host([has-scrolling-region]) #wrapper.initializing #contentContainer {
        position: relative;
      }

      :host([fullbleed]) {
        @apply --layout-vertical;
        @apply --layout-fit;
      }

      :host([fullbleed]) #wrapper,
      :host([fullbleed]) #wrapper #contentContainer {
        @apply --layout-vertical;
        @apply --layout-flex;
      }

      #contentContainer {
        /* Create a stacking context here so that all children appear below the header. */
        position: relative;
        z-index: 0;
      }

      @media print {
        :host([has-scrolling-region]) #wrapper #contentContainer {
          overflow-y: visible;
        }
      }

    </style>

    <div id="wrapper" class="initializing">
      <slot id="headerSlot" name="header"></slot>

      <div id="contentContainer">
        <slot></slot>
      </div>
    </div>
`,is:"app-header-layout",behaviors:[AppLayoutBehavior],properties:{hasScrollingRegion:{type:Boolean,value:!1,reflectToAttribute:!0}},observers:["resetLayout(isAttached, hasScrollingRegion)"],get header(){return dom(this.$.headerSlot).getDistributedNodes()[0]},_updateLayoutStates:function(){var header=this.header;if(!this.isAttached||!header){return}this.$.wrapper.classList.remove("initializing");header.scrollTarget=this.hasScrollingRegion?this.$.contentContainer:this.ownerDocument.documentElement;var headerHeight=header.offsetHeight;if(!this.hasScrollingRegion){requestAnimationFrame(function(){var rect=this.getBoundingClientRect(),rightOffset=document.documentElement.clientWidth-rect.right;header.style.left=rect.left+"px";header.style.right=rightOffset+"px"}.bind(this))}else{header.style.left="";header.style.right=""}var containerStyle=this.$.contentContainer.style;if(header.fixed&&!header.condenses&&this.hasScrollingRegion){containerStyle.marginTop=headerHeight+"px";containerStyle.paddingTop=""}else{containerStyle.paddingTop=headerHeight+"px";containerStyle.marginTop=""}}});const IronScrollTargetBehavior={properties:{scrollTarget:{type:HTMLElement,value:function(){return this._defaultScrollTarget}}},observers:["_scrollTargetChanged(scrollTarget, isAttached)"],_shouldHaveListener:!0,_scrollTargetChanged:function(scrollTarget,isAttached){var eventTarget;if(this._oldScrollTarget){this._toggleScrollListener(!1,this._oldScrollTarget);this._oldScrollTarget=null}if(!isAttached){return}if("document"===scrollTarget){this.scrollTarget=this._doc}else if("string"===typeof scrollTarget){var domHost=this.domHost;this.scrollTarget=domHost&&domHost.$?domHost.$[scrollTarget]:dom(this.ownerDocument).querySelector("#"+scrollTarget)}else if(this._isValidScrollTarget()){this._oldScrollTarget=scrollTarget;this._toggleScrollListener(this._shouldHaveListener,scrollTarget)}},_scrollHandler:function scrollHandler(){},get _defaultScrollTarget(){return this._doc},get _doc(){return this.ownerDocument.documentElement},get _scrollTop(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop}return 0},get _scrollLeft(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft}return 0},set _scrollTop(top){if(this.scrollTarget===this._doc){window.scrollTo(window.pageXOffset,top)}else if(this._isValidScrollTarget()){this.scrollTarget.scrollTop=top}},set _scrollLeft(left){if(this.scrollTarget===this._doc){window.scrollTo(left,window.pageYOffset)}else if(this._isValidScrollTarget()){this.scrollTarget.scrollLeft=left}},scroll:function(leftOrOptions,top){var left;if("object"===typeof leftOrOptions){left=leftOrOptions.left;top=leftOrOptions.top}else{left=leftOrOptions}left=left||0;top=top||0;if(this.scrollTarget===this._doc){window.scrollTo(left,top)}else if(this._isValidScrollTarget()){this.scrollTarget.scrollLeft=left;this.scrollTarget.scrollTop=top}},get _scrollTargetWidth(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth}return 0},get _scrollTargetHeight(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight}return 0},_isValidScrollTarget:function(){return this.scrollTarget instanceof HTMLElement},_toggleScrollListener:function(yes,scrollTarget){var eventTarget=scrollTarget===this._doc?window:scrollTarget;if(yes){if(!this._boundScrollHandler){this._boundScrollHandler=this._scrollHandler.bind(this);eventTarget.addEventListener("scroll",this._boundScrollHandler)}}else{if(this._boundScrollHandler){eventTarget.removeEventListener("scroll",this._boundScrollHandler);this._boundScrollHandler=null}}},toggleScrollListener:function(yes){this._shouldHaveListener=yes;this._toggleScrollListener(yes,this.scrollTarget)}};_exports.IronScrollTargetBehavior=IronScrollTargetBehavior;var ironScrollTargetBehavior={IronScrollTargetBehavior:IronScrollTargetBehavior};_exports.$ironScrollTargetBehavior=ironScrollTargetBehavior;const _scrollEffects={};_exports._scrollEffects=_scrollEffects;let _scrollTimer=null;_exports._scrollTimer=_scrollTimer;const scrollTimingFunction=function easeOutQuad(t,b,c,d){t/=d;return-c*t*(t-2)+b};_exports.scrollTimingFunction=scrollTimingFunction;const registerEffect=function registerEffect(effectName,effectDef){if(null!=_scrollEffects[effectName]){throw new Error("effect `"+effectName+"` is already registered.")}_scrollEffects[effectName]=effectDef};_exports.registerEffect=registerEffect;const queryAllRoot=function(selector,root){var queue=[root],matches=[];while(0<queue.length){var node=queue.shift();matches.push.apply(matches,node.querySelectorAll(selector));for(var i=0;node.children[i];i++){if(node.children[i].shadowRoot){queue.push(node.children[i].shadowRoot)}}}return matches};_exports.queryAllRoot=queryAllRoot;const scroll=function scroll(options){options=options||{};var docEl=document.documentElement,target=options.target||docEl,hasNativeScrollBehavior="scrollBehavior"in target.style&&target.scroll,scrollClassName="app-layout-silent-scroll",scrollTop=options.top||0,scrollLeft=options.left||0,scrollTo=target===docEl?window.scrollTo:function scrollTo(scrollLeft,scrollTop){target.scrollLeft=scrollLeft;target.scrollTop=scrollTop};if("smooth"===options.behavior){if(hasNativeScrollBehavior){target.scroll(options)}else{var timingFn=scrollTimingFunction,startTime=Date.now(),currentScrollTop=target===docEl?window.pageYOffset:target.scrollTop,currentScrollLeft=target===docEl?window.pageXOffset:target.scrollLeft,deltaScrollTop=scrollTop-currentScrollTop,deltaScrollLeft=scrollLeft-currentScrollLeft,duration=300,updateFrame=function updateFrame(){var now=Date.now(),elapsedTime=now-startTime;if(elapsedTime<duration){scrollTo(timingFn(elapsedTime,currentScrollLeft,deltaScrollLeft,duration),timingFn(elapsedTime,currentScrollTop,deltaScrollTop,duration));requestAnimationFrame(updateFrame)}else{scrollTo(scrollLeft,scrollTop)}}.bind(this);updateFrame()}}else if("silent"===options.behavior){var headers=queryAllRoot("app-header",document.body);headers.forEach(function(header){header.setAttribute("silent-scroll","")});if(_scrollTimer){window.cancelAnimationFrame(_scrollTimer)}_exports._scrollTimer=_scrollTimer=window.requestAnimationFrame(function(){headers.forEach(function(header){header.removeAttribute("silent-scroll")});_exports._scrollTimer=_scrollTimer=null});scrollTo(scrollLeft,scrollTop)}else{scrollTo(scrollLeft,scrollTop)}};_exports.scroll=scroll;var helpers={_scrollEffects:_scrollEffects,get _scrollTimer(){return _scrollTimer},scrollTimingFunction:scrollTimingFunction,registerEffect:registerEffect,queryAllRoot:queryAllRoot,scroll:scroll};_exports.$helpers=helpers;const AppScrollEffectsBehavior=[IronScrollTargetBehavior,{properties:{effects:{type:String},effectsConfig:{type:Object,value:function(){return{}}},disabled:{type:Boolean,reflectToAttribute:!0,value:!1},threshold:{type:Number,value:0},thresholdTriggered:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0}},observers:["_effectsChanged(effects, effectsConfig, isAttached)"],_updateScrollState:function(scrollTop){},isOnScreen:function(){return!1},isContentBelow:function(){return!1},_effectsRunFn:null,_effects:null,get _clampedScrollTop(){return _Mathmax(0,this._scrollTop)},attached:function(){this._scrollStateChanged()},detached:function(){this._tearDownEffects()},createEffect:function(effectName,effectConfig){var effectDef=_scrollEffects[effectName];if(!effectDef){throw new ReferenceError(this._getUndefinedMsg(effectName))}var prop=this._boundEffect(effectDef,effectConfig||{});prop.setUp();return prop},_effectsChanged:function(effects,effectsConfig,isAttached){this._tearDownEffects();if(!effects||!isAttached){return}effects.split(" ").forEach(function(effectName){var effectDef;if(""!==effectName){if(effectDef=_scrollEffects[effectName]){this._effects.push(this._boundEffect(effectDef,effectsConfig[effectName]))}else{console.warn(this._getUndefinedMsg(effectName))}}},this);this._setUpEffect()},_layoutIfDirty:function(){return this.offsetWidth},_boundEffect:function(effectDef,effectsConfig){effectsConfig=effectsConfig||{};var startsAt=parseFloat(effectsConfig.startsAt||0),endsAt=parseFloat(effectsConfig.endsAt||1),deltaS=endsAt-startsAt,noop=function(){},runFn=0===startsAt&&1===endsAt?effectDef.run:function(progress,y){effectDef.run.call(this,_Mathmax(0,(progress-startsAt)/deltaS),y)};return{setUp:effectDef.setUp?effectDef.setUp.bind(this,effectsConfig):noop,run:effectDef.run?runFn.bind(this):noop,tearDown:effectDef.tearDown?effectDef.tearDown.bind(this):noop}},_setUpEffect:function(){if(this.isAttached&&this._effects){this._effectsRunFn=[];this._effects.forEach(function(effectDef){if(!1!==effectDef.setUp()){this._effectsRunFn.push(effectDef.run)}},this)}},_tearDownEffects:function(){if(this._effects){this._effects.forEach(function(effectDef){effectDef.tearDown()})}this._effectsRunFn=[];this._effects=[]},_runEffects:function(p,y){if(this._effectsRunFn){this._effectsRunFn.forEach(function(run){run(p,y)})}},_scrollHandler:function(){this._scrollStateChanged()},_scrollStateChanged:function(){if(!this.disabled){var scrollTop=this._clampedScrollTop;this._updateScrollState(scrollTop);if(0<this.threshold){this._setThresholdTriggered(scrollTop>=this.threshold)}}},_getDOMRef:function(id){console.warn("_getDOMRef","`"+id+"` is undefined")},_getUndefinedMsg:function(effectName){return"Scroll effect `"+effectName+"` is undefined. "+"Did you forget to import app-layout/app-scroll-effects/effects/"+effectName+".html ?"}}];_exports.AppScrollEffectsBehavior=AppScrollEffectsBehavior;var appScrollEffectsBehavior={AppScrollEffectsBehavior:AppScrollEffectsBehavior};_exports.$appScrollEffectsBehavior=appScrollEffectsBehavior;Polymer({_template:html`
    <style>
      :host {
        position: relative;
        display: block;
        transition-timing-function: linear;
        transition-property: -webkit-transform;
        transition-property: transform;
      }

      :host::before {
        position: absolute;
        right: 0px;
        bottom: -5px;
        left: 0px;
        width: 100%;
        height: 5px;
        content: "";
        transition: opacity 0.4s;
        pointer-events: none;
        opacity: 0;
        box-shadow: inset 0px 5px 6px -3px rgba(0, 0, 0, 0.4);
        will-change: opacity;
        @apply --app-header-shadow;
      }

      :host([shadow])::before {
        opacity: 1;
      }

      #background {
        @apply --layout-fit;
        overflow: hidden;
      }

      #backgroundFrontLayer,
      #backgroundRearLayer {
        @apply --layout-fit;
        height: 100%;
        pointer-events: none;
        background-size: cover;
      }

      #backgroundFrontLayer {
        @apply --app-header-background-front-layer;
      }

      #backgroundRearLayer {
        opacity: 0;
        @apply --app-header-background-rear-layer;
      }

      #contentContainer {
        position: relative;
        width: 100%;
        height: 100%;
      }

      :host([disabled]),
      :host([disabled])::after,
      :host([disabled]) #backgroundFrontLayer,
      :host([disabled]) #backgroundRearLayer,
      /* Silent scrolling should not run CSS transitions */
      :host([silent-scroll]),
      :host([silent-scroll])::after,
      :host([silent-scroll]) #backgroundFrontLayer,
      :host([silent-scroll]) #backgroundRearLayer {
        transition: none !important;
      }

      :host([disabled]) ::slotted(app-toolbar:first-of-type),
      :host([disabled]) ::slotted([sticky]),
      /* Silent scrolling should not run CSS transitions */
      :host([silent-scroll]) ::slotted(app-toolbar:first-of-type),
      :host([silent-scroll]) ::slotted([sticky]) {
        transition: none !important;
      }

    </style>
    <div id="contentContainer">
      <slot id="slot"></slot>
    </div>
`,is:"app-header",behaviors:[AppScrollEffectsBehavior,AppLayoutBehavior],properties:{condenses:{type:Boolean,value:!1},fixed:{type:Boolean,value:!1},reveals:{type:Boolean,value:!1},shadow:{type:Boolean,reflectToAttribute:!0,value:!1}},observers:["_configChanged(isAttached, condenses, fixed)"],_height:0,_dHeight:0,_stickyElTop:0,_stickyElRef:null,_top:0,_progress:0,_wasScrollingDown:!1,_initScrollTop:0,_initTimestamp:0,_lastTimestamp:0,_lastScrollTop:0,get _maxHeaderTop(){return this.fixed?this._dHeight:this._height+5},get _stickyEl(){if(this._stickyElRef){return this._stickyElRef}for(var nodes=dom(this.$.slot).getDistributedNodes(),i=0,node;node=nodes[i];i++){if(node.nodeType===Node.ELEMENT_NODE){if(node.hasAttribute("sticky")){this._stickyElRef=node;break}else if(!this._stickyElRef){this._stickyElRef=node}}}return this._stickyElRef},_configChanged:function(){this.resetLayout();this._notifyLayoutChanged()},_updateLayoutStates:function(){if(0===this.offsetWidth&&0===this.offsetHeight){return}var scrollTop=this._clampedScrollTop,firstSetup=0===this._height||0===scrollTop,currentDisabled=this.disabled;this._height=this.offsetHeight;this._stickyElRef=null;this.disabled=!0;if(!firstSetup){this._updateScrollState(0,!0)}if(this._mayMove()){this._dHeight=this._stickyEl?this._height-this._stickyEl.offsetHeight:0}else{this._dHeight=0}this._stickyElTop=this._stickyEl?this._stickyEl.offsetTop:0;this._setUpEffect();if(firstSetup){this._updateScrollState(scrollTop,!0)}else{this._updateScrollState(this._lastScrollTop,!0);this._layoutIfDirty()}this.disabled=currentDisabled},_updateScrollState:function(scrollTop,forceUpdate){if(0===this._height){return}var progress=0,top=0,lastTop=this._top,lastScrollTop=this._lastScrollTop,maxHeaderTop=this._maxHeaderTop,dScrollTop=scrollTop-this._lastScrollTop,absDScrollTop=_Mathabs(dScrollTop),isScrollingDown=scrollTop>this._lastScrollTop,now=performance.now();if(this._mayMove()){top=this._clamp(this.reveals?lastTop+dScrollTop:scrollTop,0,maxHeaderTop)}if(scrollTop>=this._dHeight){top=this.condenses&&!this.fixed?_Mathmax(this._dHeight,top):top;this.style.transitionDuration="0ms"}if(this.reveals&&!this.disabled&&100>absDScrollTop){if(300<now-this._initTimestamp||this._wasScrollingDown!==isScrollingDown){this._initScrollTop=scrollTop;this._initTimestamp=now}if(scrollTop>=maxHeaderTop){if(30<_Mathabs(this._initScrollTop-scrollTop)||10<absDScrollTop){if(isScrollingDown&&scrollTop>=maxHeaderTop){top=maxHeaderTop}else if(!isScrollingDown&&scrollTop>=this._dHeight){top=this.condenses&&!this.fixed?this._dHeight:0}var scrollVelocity=dScrollTop/(now-this._lastTimestamp);this.style.transitionDuration=this._clamp((top-lastTop)/scrollVelocity,0,300)+"ms"}else{top=this._top}}}if(0===this._dHeight){progress=0<scrollTop?1:0}else{progress=top/this._dHeight}if(!forceUpdate){this._lastScrollTop=scrollTop;this._top=top;this._wasScrollingDown=isScrollingDown;this._lastTimestamp=now}if(forceUpdate||progress!==this._progress||lastTop!==top||0===scrollTop){this._progress=progress;this._runEffects(progress,top);this._transformHeader(top)}},_mayMove:function(){return this.condenses||!this.fixed},willCondense:function(){return 0<this._dHeight&&this.condenses},isOnScreen:function(){return 0!==this._height&&this._top<this._height},isContentBelow:function(){return 0===this._top?0<this._clampedScrollTop:0<=this._clampedScrollTop-this._maxHeaderTop},_transformHeader:function(y){this.translate3d(0,-y+"px",0);if(this._stickyEl){this.translate3d(0,this.condenses&&y>=this._stickyElTop?_Mathmin(y,this._dHeight)-this._stickyElTop+"px":0,0,this._stickyEl)}},_clamp:function(v,min,max){return _Mathmin(max,_Mathmax(min,v))},_ensureBgContainers:function(){if(!this._bgContainer){this._bgContainer=document.createElement("div");this._bgContainer.id="background";this._bgRear=document.createElement("div");this._bgRear.id="backgroundRearLayer";this._bgContainer.appendChild(this._bgRear);this._bgFront=document.createElement("div");this._bgFront.id="backgroundFrontLayer";this._bgContainer.appendChild(this._bgFront);dom(this.root).insertBefore(this._bgContainer,this.$.contentContainer)}},_getDOMRef:function(id){switch(id){case"backgroundFrontLayer":this._ensureBgContainers();return this._bgFront;case"backgroundRearLayer":this._ensureBgContainers();return this._bgRear;case"background":this._ensureBgContainers();return this._bgContainer;case"mainTitle":return dom(this).querySelector("[main-title]");case"condensedTitle":return dom(this).querySelector("[condensed-title]");}return null},getScrollState:function(){return{progress:this._progress,top:this._top}}});registerEffect("blend-background",{setUp:function setUp(){var fx={backgroundFrontLayer:this._getDOMRef("backgroundFrontLayer"),backgroundRearLayer:this._getDOMRef("backgroundRearLayer")};fx.backgroundFrontLayer.style.willChange="opacity";fx.backgroundFrontLayer.style.transform="translateZ(0)";fx.backgroundRearLayer.style.willChange="opacity";fx.backgroundRearLayer.style.transform="translateZ(0)";fx.backgroundRearLayer.style.opacity=0;this._fxBlendBackground=fx},run:function run(p,y){var fx=this._fxBlendBackground;fx.backgroundFrontLayer.style.opacity=1-p;fx.backgroundRearLayer.style.opacity=p},tearDown:function tearDown(){delete this._fxBlendBackground}});registerEffect("fade-background",{setUp:function setUp(config){var fx={},duration=config.duration||"0.5s";fx.backgroundFrontLayer=this._getDOMRef("backgroundFrontLayer");fx.backgroundRearLayer=this._getDOMRef("backgroundRearLayer");fx.backgroundFrontLayer.style.willChange="opacity";fx.backgroundFrontLayer.style.webkitTransform="translateZ(0)";fx.backgroundFrontLayer.style.transitionProperty="opacity";fx.backgroundFrontLayer.style.transitionDuration=duration;fx.backgroundRearLayer.style.willChange="opacity";fx.backgroundRearLayer.style.webkitTransform="translateZ(0)";fx.backgroundRearLayer.style.transitionProperty="opacity";fx.backgroundRearLayer.style.transitionDuration=duration;this._fxFadeBackground=fx},run:function run(p,y){var fx=this._fxFadeBackground;if(1<=p){fx.backgroundFrontLayer.style.opacity=0;fx.backgroundRearLayer.style.opacity=1}else{fx.backgroundFrontLayer.style.opacity=1;fx.backgroundRearLayer.style.opacity=0}},tearDown:function tearDown(){delete this._fxFadeBackground}});registerEffect("waterfall",{run:function run(){this.shadow=this.isOnScreen()&&this.isContentBelow()}});function interpolate(progress,points,fn,ctx){fn.apply(ctx,points.map(function(point){return point[0]+(point[1]-point[0])*progress}))}registerEffect("resize-title",{setUp:function setUp(){var title=this._getDOMRef("mainTitle"),condensedTitle=this._getDOMRef("condensedTitle");if(!condensedTitle){console.warn("Scroll effect `resize-title`: undefined `condensed-title`");return!1}if(!title){console.warn("Scroll effect `resize-title`: undefined `main-title`");return!1}condensedTitle.style.willChange="opacity";condensedTitle.style.webkitTransform="translateZ(0)";condensedTitle.style.transform="translateZ(0)";condensedTitle.style.webkitTransformOrigin="left top";condensedTitle.style.transformOrigin="left top";title.style.willChange="opacity";title.style.webkitTransformOrigin="left top";title.style.transformOrigin="left top";title.style.webkitTransform="translateZ(0)";title.style.transform="translateZ(0)";var titleClientRect=title.getBoundingClientRect(),condensedTitleClientRect=condensedTitle.getBoundingClientRect(),fx={};fx.scale=parseInt(window.getComputedStyle(condensedTitle)["font-size"],10)/parseInt(window.getComputedStyle(title)["font-size"],10);fx.titleDX=titleClientRect.left-condensedTitleClientRect.left;fx.titleDY=titleClientRect.top-condensedTitleClientRect.top;fx.condensedTitle=condensedTitle;fx.title=title;this._fxResizeTitle=fx},run:function run(p,y){var fx=this._fxResizeTitle;if(!this.condenses){y=0}if(1<=p){fx.title.style.opacity=0;fx.condensedTitle.style.opacity=1}else{fx.title.style.opacity=1;fx.condensedTitle.style.opacity=0}interpolate(_Mathmin(1,p),[[1,fx.scale],[0,-fx.titleDX],[y,y-fx.titleDY]],function(scale,translateX,translateY){this.transform("translate("+translateX+"px, "+translateY+"px) "+"scale3d("+scale+", "+scale+", 1)",fx.title)},this)},tearDown:function tearDown(){delete this._fxResizeTitle}});registerEffect("parallax-background",{setUp:function setUp(config){var fx={},scalar=parseFloat(config.scalar);fx.background=this._getDOMRef("background");fx.backgroundFrontLayer=this._getDOMRef("backgroundFrontLayer");fx.backgroundRearLayer=this._getDOMRef("backgroundRearLayer");fx.deltaBg=fx.backgroundFrontLayer.offsetHeight-fx.background.offsetHeight;if(0===fx.deltaBg){if(isNaN(scalar)){scalar=.8}fx.deltaBg=(this._dHeight||0)*scalar}else{if(isNaN(scalar)){scalar=1}fx.deltaBg=fx.deltaBg*scalar}this._fxParallaxBackground=fx},run:function run(p,y){var fx=this._fxParallaxBackground;this.transform("translate3d(0px, "+fx.deltaBg*_Mathmin(1,p)+"px, 0px)",fx.backgroundFrontLayer);if(fx.backgroundRearLayer){this.transform("translate3d(0px, "+fx.deltaBg*_Mathmin(1,p)+"px, 0px)",fx.backgroundRearLayer)}},tearDown:function tearDown(){delete this._fxParallaxBackground}});registerEffect("material",{setUp:function setUp(){this.effects="waterfall resize-title blend-background parallax-background";return!1}});registerEffect("resize-snapped-title",{setUp:function setUp(config){var title=this._getDOMRef("mainTitle"),condensedTitle=this._getDOMRef("condensedTitle"),duration=config.duration||"0.2s",fx={};if(!condensedTitle){console.warn("Scroll effect `resize-snapped-title`: undefined `condensed-title`");return!1}if(!title){console.warn("Scroll effect `resize-snapped-title`: undefined `main-title`");return!1}title.style.transitionProperty="opacity";title.style.transitionDuration=duration;condensedTitle.style.transitionProperty="opacity";condensedTitle.style.transitionDuration=duration;fx.condensedTitle=condensedTitle;fx.title=title;this._fxResizeSnappedTitle=fx},run:function run(p,y){var fx=this._fxResizeSnappedTitle;if(0<p){fx.title.style.opacity=0;fx.condensedTitle.style.opacity=1}else{fx.title.style.opacity=1;fx.condensedTitle.style.opacity=0}},tearDown:function tearDown(){var fx=this._fxResizeSnappedTitle;fx.title.style.transition="";fx.condensedTitle.style.transition="";delete this._fxResizeSnappedTitle}});Polymer({_template:html`
    <style>

      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        position: relative;
        height: 64px;
        padding: 0 16px;
        pointer-events: none;
        font-size: var(--app-toolbar-font-size, 20px);
      }

      :host ::slotted(*) {
        pointer-events: auto;
      }

      :host ::slotted(paper-icon-button) {
        /* paper-icon-button/issues/33 */
        font-size: 0;
      }

      :host ::slotted([main-title]),
      :host ::slotted([condensed-title]) {
        pointer-events: none;
        @apply --layout-flex;
      }

      :host ::slotted([bottom-item]) {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
      }

      :host ::slotted([top-item]) {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
      }

      :host ::slotted([spacer]) {
        margin-left: 64px;
      }
    </style>

    <slot></slot>
`,is:"app-toolbar"});Polymer({is:"iron-location",properties:{path:{type:String,notify:!0,value:function(){return window.decodeURIComponent(window.location.pathname)}},query:{type:String,notify:!0,value:function(){return window.location.search.slice(1)}},hash:{type:String,notify:!0,value:function(){return window.decodeURIComponent(window.location.hash.slice(1))}},dwellTime:{type:Number,value:2e3},urlSpaceRegex:{type:String,value:""},encodeSpaceAsPlusInQuery:{type:Boolean,value:!1},_urlSpaceRegExp:{computed:"_makeRegExp(urlSpaceRegex)"},_lastChangedAt:{type:Number},_initialized:{type:Boolean,value:!1}},hostAttributes:{hidden:!0},observers:["_updateUrl(path, query, hash)"],created:function(){this.__location=window.location},attached:function(){this.listen(window,"hashchange","_hashChanged");this.listen(window,"location-changed","_urlChanged");this.listen(window,"popstate","_urlChanged");this.listen(document.body,"click","_globalOnClick");this._lastChangedAt=window.performance.now()-(this.dwellTime-200);this._initialized=!0;this._urlChanged()},detached:function(){this.unlisten(window,"hashchange","_hashChanged");this.unlisten(window,"location-changed","_urlChanged");this.unlisten(window,"popstate","_urlChanged");this.unlisten(document.body,"click","_globalOnClick");this._initialized=!1},_hashChanged:function(){this.hash=window.decodeURIComponent(this.__location.hash.substring(1))},_urlChanged:function(){this._dontUpdateUrl=!0;this._hashChanged();this.path=window.decodeURIComponent(this.__location.pathname);this.query=this.__location.search.substring(1);this._dontUpdateUrl=!1;this._updateUrl()},_getUrl:function(){var partiallyEncodedPath=window.encodeURI(this.path).replace(/\#/g,"%23").replace(/\?/g,"%3F"),partiallyEncodedQuery="";if(this.query){partiallyEncodedQuery="?"+this.query.replace(/\#/g,"%23");if(this.encodeSpaceAsPlusInQuery){partiallyEncodedQuery=partiallyEncodedQuery.replace(/\+/g,"%2B").replace(/ /g,"+").replace(/%20/g,"+")}else{partiallyEncodedQuery=partiallyEncodedQuery.replace(/\+/g,"%2B").replace(/ /g,"%20")}}var partiallyEncodedHash="";if(this.hash){partiallyEncodedHash="#"+window.encodeURI(this.hash)}return partiallyEncodedPath+partiallyEncodedQuery+partiallyEncodedHash},_updateUrl:function(){if(this._dontUpdateUrl||!this._initialized){return}if(this.path===window.decodeURIComponent(this.__location.pathname)&&this.query===this.__location.search.substring(1)&&this.hash===window.decodeURIComponent(this.__location.hash.substring(1))){return}var newUrl=this._getUrl(),fullNewUrl=new URL(newUrl,this.__location.protocol+"//"+this.__location.host).href,now=window.performance.now(),shouldReplace=this._lastChangedAt+this.dwellTime>now;this._lastChangedAt=now;if(shouldReplace){window.history.replaceState({},"",fullNewUrl)}else{window.history.pushState({},"",fullNewUrl)}this.fire("location-changed",{},{node:window})},_globalOnClick:function(event){if(event.defaultPrevented){return}var href=this._getSameOriginLinkHref(event);if(!href){return}event.preventDefault();if(href===this.__location.href){return}window.history.pushState({},"",href);this.fire("location-changed",{},{node:window})},_getSameOriginLinkHref:function(event){if(0!==event.button){return null}if(event.metaKey||event.ctrlKey){return null}for(var eventPath=dom(event).path,anchor=null,i=0,element;i<eventPath.length;i++){element=eventPath[i];if("A"===element.tagName&&element.href){anchor=element;break}}if(!anchor){return null}if("_blank"===anchor.target){return null}if(("_top"===anchor.target||"_parent"===anchor.target)&&window.top!==window){return null}if(anchor.download){return null}var href=anchor.href,url;if(null!=document.baseURI){url=new URL(href,document.baseURI)}else{url=new URL(href)}var origin;if(this.__location.origin){origin=this.__location.origin}else{origin=this.__location.protocol+"//"+this.__location.host}var urlOrigin;if(url.origin){urlOrigin=url.origin}else{var urlHost=url.host,urlPort=url.port,urlProtocol=url.protocol,isExtraneousHTTPS="https:"===urlProtocol&&"443"===urlPort,isExtraneousHTTP="http:"===urlProtocol&&"80"===urlPort;if(isExtraneousHTTPS||isExtraneousHTTP){urlHost=url.hostname}urlOrigin=urlProtocol+"//"+urlHost}if(urlOrigin!==origin){return null}var normalizedHref=url.pathname+url.search+url.hash;if("/"!==normalizedHref[0]){normalizedHref="/"+normalizedHref}if(this._urlSpaceRegExp&&!this._urlSpaceRegExp.test(normalizedHref)){return null}var fullNormalizedHref=new URL(normalizedHref,this.__location.href).href;return fullNormalizedHref},_makeRegExp:function(urlSpaceRegex){return RegExp(urlSpaceRegex)}});Polymer({is:"iron-query-params",properties:{paramsString:{type:String,notify:!0,observer:"paramsStringChanged"},paramsObject:{type:Object,notify:!0},_dontReact:{type:Boolean,value:!1}},hostAttributes:{hidden:!0},observers:["paramsObjectChanged(paramsObject.*)"],paramsStringChanged:function(){this._dontReact=!0;this.paramsObject=this._decodeParams(this.paramsString);this._dontReact=!1},paramsObjectChanged:function(){if(this._dontReact){return}this.paramsString=this._encodeParams(this.paramsObject).replace(/%3F/g,"?").replace(/%2F/g,"/").replace(/'/g,"%27")},_encodeParams:function(params){var encodedParams=[];for(var key in params){var value=params[key];if(""===value){encodedParams.push(encodeURIComponent(key))}else if(value){encodedParams.push(encodeURIComponent(key)+"="+encodeURIComponent(value.toString()))}}return encodedParams.join("&")},_decodeParams:function(paramString){var params={};paramString=(paramString||"").replace(/\+/g,"%20");for(var paramList=paramString.split("&"),i=0,param;i<paramList.length;i++){param=paramList[i].split("=");if(param[0]){params[decodeURIComponent(param[0])]=decodeURIComponent(param[1]||"")}}return params}});const AppRouteConverterBehavior={properties:{route:{type:Object,notify:!0},queryParams:{type:Object,notify:!0},path:{type:String,notify:!0}},observers:["_locationChanged(path, queryParams)","_routeChanged(route.prefix, route.path)","_routeQueryParamsChanged(route.__queryParams)"],created:function(){this.linkPaths("route.__queryParams","queryParams");this.linkPaths("queryParams","route.__queryParams")},_locationChanged:function(){if(this.route&&this.route.path===this.path&&this.queryParams===this.route.__queryParams){return}this.route={prefix:"",path:this.path,__queryParams:this.queryParams}},_routeChanged:function(){if(!this.route){return}this.path=this.route.prefix+this.route.path},_routeQueryParamsChanged:function(queryParams){if(!this.route){return}this.queryParams=queryParams}};_exports.AppRouteConverterBehavior=AppRouteConverterBehavior;var appRouteConverterBehavior={AppRouteConverterBehavior:AppRouteConverterBehavior};_exports.$appRouteConverterBehavior=appRouteConverterBehavior;Polymer({_template:html`
    <iron-query-params params-string="{{__query}}" params-object="{{queryParams}}">
    </iron-query-params>
    <iron-location path="{{__path}}" query="{{__query}}" hash="{{__hash}}" url-space-regex="[[urlSpaceRegex]]" dwell-time="[[dwellTime]]">
    </iron-location>
  `,is:"app-location",properties:{route:{type:Object,notify:!0},useHashAsPath:{type:Boolean,value:!1},urlSpaceRegex:{type:String,notify:!0},__queryParams:{type:Object},__path:{type:String},__query:{type:String},__hash:{type:String},path:{type:String,observer:"__onPathChanged"},_isReady:{type:Boolean},dwellTime:{type:Number}},behaviors:[AppRouteConverterBehavior],observers:["__computeRoutePath(useHashAsPath, __hash, __path)"],ready:function(){this._isReady=!0},__computeRoutePath:function(){this.path=this.useHashAsPath?this.__hash:this.__path},__onPathChanged:function(){if(!this._isReady){return}if(this.useHashAsPath){this.__hash=this.path}else{this.__path=this.path}}});Polymer({is:"app-route",properties:{route:{type:Object,notify:!0},pattern:{type:String},data:{type:Object,value:function(){return{}},notify:!0},autoActivate:{type:Boolean,value:!1},_queryParamsUpdating:{type:Boolean,value:!1},queryParams:{type:Object,value:function(){return{}},notify:!0},tail:{type:Object,value:function(){return{path:null,prefix:null,__queryParams:null}},notify:!0},active:{type:Boolean,notify:!0,readOnly:!0},_matched:{type:String,value:""}},observers:["__tryToMatch(route.path, pattern)","__updatePathOnDataChange(data.*)","__tailPathChanged(tail.path)","__routeQueryParamsChanged(route.__queryParams)","__tailQueryParamsChanged(tail.__queryParams)","__queryParamsChanged(queryParams.*)"],created:function(){this.linkPaths("route.__queryParams","tail.__queryParams");this.linkPaths("tail.__queryParams","route.__queryParams")},__routeQueryParamsChanged:function(queryParams){if(queryParams&&this.tail){if(this.tail.__queryParams!==queryParams){this.set("tail.__queryParams",queryParams)}if(!this.active||this._queryParamsUpdating){return}var copyOfQueryParams={},anythingChanged=!1;for(var key in queryParams){copyOfQueryParams[key]=queryParams[key];if(anythingChanged||!this.queryParams||queryParams[key]!==this.queryParams[key]){anythingChanged=!0}}for(var key in this.queryParams){if(anythingChanged||!(key in queryParams)){anythingChanged=!0;break}}if(!anythingChanged){return}this._queryParamsUpdating=!0;this.set("queryParams",copyOfQueryParams);this._queryParamsUpdating=!1}},__tailQueryParamsChanged:function(queryParams){if(queryParams&&this.route&&this.route.__queryParams!=queryParams){this.set("route.__queryParams",queryParams)}},__queryParamsChanged:function(changes){if(!this.active||this._queryParamsUpdating){return}this.set("route.__"+changes.path,changes.value)},__resetProperties:function(){this._setActive(!1);this._matched=null},__tryToMatch:function(){if(!this.route){return}var path=this.route.path,pattern=this.pattern;if(this.autoActivate&&""===path){path="/"}if(!pattern){return}if(!path){this.__resetProperties();return}for(var remainingPieces=path.split("/"),patternPieces=pattern.split("/"),matched=[],namedMatches={},i=0,patternPiece;i<patternPieces.length;i++){patternPiece=patternPieces[i];if(!patternPiece&&""!==patternPiece){break}var pathPiece=remainingPieces.shift();if(!pathPiece&&""!==pathPiece){this.__resetProperties();return}matched.push(pathPiece);if(":"==patternPiece.charAt(0)){namedMatches[patternPiece.slice(1)]=pathPiece}else if(patternPiece!==pathPiece){this.__resetProperties();return}}this._matched=matched.join("/");var propertyUpdates={};if(!this.active){propertyUpdates.active=!0}var tailPrefix=this.route.prefix+this._matched,tailPath=remainingPieces.join("/");if(0<remainingPieces.length){tailPath="/"+tailPath}if(!this.tail||this.tail.prefix!==tailPrefix||this.tail.path!==tailPath){propertyUpdates.tail={prefix:tailPrefix,path:tailPath,__queryParams:this.route.__queryParams}}propertyUpdates.data=namedMatches;this._dataInUrl={};for(var key in namedMatches){this._dataInUrl[key]=namedMatches[key]}if(this.setProperties){this.setProperties(propertyUpdates,!0)}else{this.__setMulti(propertyUpdates)}},__tailPathChanged:function(path){if(!this.active){return}var tailPath=path,newPath=this._matched;if(tailPath){if("/"!==tailPath.charAt(0)){tailPath="/"+tailPath}newPath+=tailPath}this.set("route.path",newPath)},__updatePathOnDataChange:function(){if(!this.route||!this.active){return}var newPath=this.__getLink({}),oldPath=this.__getLink(this._dataInUrl);if(newPath===oldPath){return}this.set("route.path",newPath)},__getLink:function(overrideValues){var values={tail:null};for(var key in this.data){values[key]=this.data[key]}for(var key in overrideValues){values[key]=overrideValues[key]}var patternPieces=this.pattern.split("/"),interp=patternPieces.map(function(value){if(":"==value[0]){value=values[value.slice(1)]}return value},this);if(values.tail&&values.tail.path){if(0<interp.length&&"/"===values.tail.path.charAt(0)){interp.push(values.tail.path.slice(1))}else{interp.push(values.tail.path)}}return interp.join("/")},__setMulti:function(setObj){for(var property in setObj){this._propertySetter(property,setObj[property])}if(setObj.data!==void 0){this._pathEffector("data",this.data);this._notifyChange("data")}if(setObj.active!==void 0){this._pathEffector("active",this.active);this._notifyChange("active")}if(setObj.tail!==void 0){this._pathEffector("tail",this.tail);this._notifyChange("tail")}}});if(!window.polymerSkipLoadingFontRoboto){const link=document.createElement("link");link.rel="stylesheet";link.type="text/css";link.crossOrigin="anonymous";link.href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,300,300italic,400italic,500,500italic,700,700italic";document.head.appendChild(link)}const IronA11yAnnouncer=Polymer({_template:html`
    <style>
      :host {
        display: inline-block;
        position: fixed;
        clip: rect(0px,0px,0px,0px);
      }
    </style>
    <div aria-live$="[[mode]]">[[_text]]</div>
`,is:"iron-a11y-announcer",properties:{mode:{type:String,value:"polite"},_text:{type:String,value:""}},created:function(){if(!IronA11yAnnouncer.instance){IronA11yAnnouncer.instance=this}document.body.addEventListener("iron-announce",this._onIronAnnounce.bind(this))},announce:function(text){this._text="";this.async(function(){this._text=text},100)},_onIronAnnounce:function(event){if(event.detail&&event.detail.text){this.announce(event.detail.text)}}});_exports.IronA11yAnnouncer=IronA11yAnnouncer;IronA11yAnnouncer.instance=null;IronA11yAnnouncer.requestAvailability=function(){if(!IronA11yAnnouncer.instance){IronA11yAnnouncer.instance=document.createElement("iron-a11y-announcer")}document.body.appendChild(IronA11yAnnouncer.instance)};var ironA11yAnnouncer={IronA11yAnnouncer:IronA11yAnnouncer};_exports.$ironA11yAnnouncer=ironA11yAnnouncer;var KEY_IDENTIFIER={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},KEY_CODE={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},MODIFIER_KEYS={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},KEY_CHAR=/[a-z0-9*]/,IDENT_CHAR=/U\+/,ARROW_KEY=/^arrow/,SPACE_KEY=/^space(bar)?/,ESC_KEY=/^escape$/;function transformKey(key,noSpecialChars){var validKey="";if(key){var lKey=key.toLowerCase();if(" "===lKey||SPACE_KEY.test(lKey)){validKey="space"}else if(ESC_KEY.test(lKey)){validKey="esc"}else if(1==lKey.length){if(!noSpecialChars||KEY_CHAR.test(lKey)){validKey=lKey}}else if(ARROW_KEY.test(lKey)){validKey=lKey.replace("arrow","")}else if("multiply"==lKey){validKey="*"}else{validKey=lKey}}return validKey}function transformKeyIdentifier(keyIdent){var validKey="";if(keyIdent){if(keyIdent in KEY_IDENTIFIER){validKey=KEY_IDENTIFIER[keyIdent]}else if(IDENT_CHAR.test(keyIdent)){keyIdent=parseInt(keyIdent.replace("U+","0x"),16);validKey=_StringfromCharCode(keyIdent).toLowerCase()}else{validKey=keyIdent.toLowerCase()}}return validKey}function transformKeyCode(keyCode){var validKey="";if(+keyCode){if(65<=keyCode&&90>=keyCode){validKey=_StringfromCharCode(32+keyCode)}else if(112<=keyCode&&123>=keyCode){validKey="f"+(keyCode-112+1)}else if(48<=keyCode&&57>=keyCode){validKey=keyCode-48+""}else if(96<=keyCode&&105>=keyCode){validKey=keyCode-96+""}else{validKey=KEY_CODE[keyCode]}}return validKey}function normalizedKeyForEvent(keyEvent,noSpecialChars){if(keyEvent.key){return transformKey(keyEvent.key,noSpecialChars)}if(keyEvent.detail&&keyEvent.detail.key){return transformKey(keyEvent.detail.key,noSpecialChars)}return transformKeyIdentifier(keyEvent.keyIdentifier)||transformKeyCode(keyEvent.keyCode)||""}function keyComboMatchesEvent(keyCombo,event){var keyEvent=normalizedKeyForEvent(event,keyCombo.hasModifiers);return keyEvent===keyCombo.key&&(!keyCombo.hasModifiers||!!event.shiftKey===!!keyCombo.shiftKey&&!!event.ctrlKey===!!keyCombo.ctrlKey&&!!event.altKey===!!keyCombo.altKey&&!!event.metaKey===!!keyCombo.metaKey)}function parseKeyComboString(keyComboString){if(1===keyComboString.length){return{combo:keyComboString,key:keyComboString,event:"keydown"}}return keyComboString.split("+").reduce(function(parsedKeyCombo,keyComboPart){var eventParts=keyComboPart.split(":"),keyName=eventParts[0],event=eventParts[1];if(keyName in MODIFIER_KEYS){parsedKeyCombo[MODIFIER_KEYS[keyName]]=!0;parsedKeyCombo.hasModifiers=!0}else{parsedKeyCombo.key=keyName;parsedKeyCombo.event=event||"keydown"}return parsedKeyCombo},{combo:keyComboString.split(":").shift()})}function parseEventString(eventString){return eventString.trim().split(" ").map(function(keyComboString){return parseKeyComboString(keyComboString)})}const IronA11yKeysBehavior={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(eventString,handlerName){this._imperativeKeyBindings[eventString]=handlerName;this._prepKeyBindings();this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={};this._prepKeyBindings();this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(event,eventString){for(var keyCombos=parseEventString(eventString),i=0;i<keyCombos.length;++i){if(keyComboMatchesEvent(keyCombos[i],event)){return!0}}return!1},_collectKeyBindings:function(){var keyBindings=this.behaviors.map(function(behavior){return behavior.keyBindings});if(-1===keyBindings.indexOf(this.keyBindings)){keyBindings.push(this.keyBindings)}return keyBindings},_prepKeyBindings:function(){this._keyBindings={};this._collectKeyBindings().forEach(function(keyBindings){for(var eventString in keyBindings){this._addKeyBinding(eventString,keyBindings[eventString])}},this);for(var eventString in this._imperativeKeyBindings){this._addKeyBinding(eventString,this._imperativeKeyBindings[eventString])}for(var eventName in this._keyBindings){this._keyBindings[eventName].sort(function(kb1,kb2){var b1=kb1[0].hasModifiers,b2=kb2[0].hasModifiers;return b1===b2?0:b1?-1:1})}},_addKeyBinding:function(eventString,handlerName){parseEventString(eventString).forEach(function(keyCombo){this._keyBindings[keyCombo.event]=this._keyBindings[keyCombo.event]||[];this._keyBindings[keyCombo.event].push([keyCombo,handlerName])},this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners();if(this.isAttached){this._listenKeyEventListeners()}},_listenKeyEventListeners:function(){if(!this.keyEventTarget){return}Object.keys(this._keyBindings).forEach(function(eventName){var keyBindings=this._keyBindings[eventName],boundKeyHandler=this._onKeyBindingEvent.bind(this,keyBindings);this._boundKeyHandlers.push([this.keyEventTarget,eventName,boundKeyHandler]);this.keyEventTarget.addEventListener(eventName,boundKeyHandler)},this)},_unlistenKeyEventListeners:function(){var keyHandlerTuple,keyEventTarget,eventName,boundKeyHandler;while(this._boundKeyHandlers.length){keyHandlerTuple=this._boundKeyHandlers.pop();keyEventTarget=keyHandlerTuple[0];eventName=keyHandlerTuple[1];boundKeyHandler=keyHandlerTuple[2];keyEventTarget.removeEventListener(eventName,boundKeyHandler)}},_onKeyBindingEvent:function(keyBindings,event){if(this.stopKeyboardEventPropagation){event.stopPropagation()}if(event.defaultPrevented){return}for(var i=0;i<keyBindings.length;i++){var keyCombo=keyBindings[i][0],handlerName=keyBindings[i][1];if(keyComboMatchesEvent(keyCombo,event)){this._triggerKeyHandler(keyCombo,handlerName,event);if(event.defaultPrevented){return}}}},_triggerKeyHandler:function(keyCombo,handlerName,keyboardEvent){var detail=Object.create(keyCombo);detail.keyboardEvent=keyboardEvent;var event=new CustomEvent(keyCombo.event,{detail:detail,cancelable:!0});this[handlerName].call(this,event);if(event.defaultPrevented){keyboardEvent.preventDefault()}}};_exports.IronA11yKeysBehavior=IronA11yKeysBehavior;var ironA11yKeysBehavior={IronA11yKeysBehavior:IronA11yKeysBehavior};_exports.$ironA11yKeysBehavior=ironA11yKeysBehavior;Polymer({is:"iron-request",hostAttributes:{hidden:!0},properties:{xhr:{type:Object,notify:!0,readOnly:!0,value:function(){return new XMLHttpRequest}},response:{type:Object,notify:!0,readOnly:!0,value:function(){return null}},status:{type:Number,notify:!0,readOnly:!0,value:0},statusText:{type:String,notify:!0,readOnly:!0,value:""},completes:{type:Object,readOnly:!0,notify:!0,value:function(){return new Promise(function(resolve,reject){this.resolveCompletes=resolve;this.rejectCompletes=reject}.bind(this))}},progress:{type:Object,notify:!0,readOnly:!0,value:function(){return{}}},aborted:{type:Boolean,notify:!0,readOnly:!0,value:!1},errored:{type:Boolean,notify:!0,readOnly:!0,value:!1},timedOut:{type:Boolean,notify:!0,readOnly:!0,value:!1}},get succeeded(){if(this.errored||this.aborted||this.timedOut){return!1}var status=this.xhr.status||0;return 0===status||200<=status&&300>status},send:function(options){var xhr=this.xhr;if(0<xhr.readyState){return null}xhr.addEventListener("progress",function(progress){this._setProgress({lengthComputable:progress.lengthComputable,loaded:progress.loaded,total:progress.total});this.fire("iron-request-progress-changed",{value:this.progress})}.bind(this));xhr.addEventListener("error",function(error){this._setErrored(!0);this._updateStatus();var response=options.rejectWithRequest?{error:error,request:this}:error;this.rejectCompletes(response)}.bind(this));xhr.addEventListener("timeout",function(error){this._setTimedOut(!0);this._updateStatus();var response=options.rejectWithRequest?{error:error,request:this}:error;this.rejectCompletes(response)}.bind(this));xhr.addEventListener("abort",function(){this._setAborted(!0);this._updateStatus();var error=new Error("Request aborted."),response=options.rejectWithRequest?{error:error,request:this}:error;this.rejectCompletes(response)}.bind(this));xhr.addEventListener("loadend",function(){this._updateStatus();this._setResponse(this.parseResponse());if(!this.succeeded){var error=new Error("The request failed with status code: "+this.xhr.status),response=options.rejectWithRequest?{error:error,request:this}:error;this.rejectCompletes(response);return}this.resolveCompletes(this)}.bind(this));this.url=options.url;var isXHRAsync=!1!==options.async;xhr.open(options.method||"GET",options.url,isXHRAsync);var acceptType={json:"application/json",text:"text/plain",html:"text/html",xml:"application/xml",arraybuffer:"application/octet-stream"}[options.handleAs],headers=options.headers||Object.create(null),newHeaders=Object.create(null);for(var key in headers){newHeaders[key.toLowerCase()]=headers[key]}headers=newHeaders;if(acceptType&&!headers.accept){headers.accept=acceptType}Object.keys(headers).forEach(function(requestHeader){if(/[A-Z]/.test(requestHeader)){Base._error("Headers must be lower case, got",requestHeader)}xhr.setRequestHeader(requestHeader,headers[requestHeader])},this);if(isXHRAsync){xhr.timeout=options.timeout;var handleAs=options.handleAs;if(!!options.jsonPrefix||!handleAs){handleAs="text"}xhr.responseType=xhr._responseType=handleAs;if(!!options.jsonPrefix){xhr._jsonPrefix=options.jsonPrefix}}xhr.withCredentials=!!options.withCredentials;var body=this._encodeBodyObject(options.body,headers["content-type"]);xhr.send(body);return this.completes},parseResponse:function(){var xhr=this.xhr,responseType=xhr.responseType||xhr._responseType,preferResponseText=!this.xhr.responseType,prefixLen=xhr._jsonPrefix&&xhr._jsonPrefix.length||0;try{switch(responseType){case"json":if(preferResponseText||xhr.response===void 0){try{return JSON.parse(xhr.responseText)}catch(_){console.warn("Failed to parse JSON sent from "+xhr.responseURL);return null}}return xhr.response;case"xml":return xhr.responseXML;case"blob":case"document":case"arraybuffer":return xhr.response;case"text":default:{if(prefixLen){try{return JSON.parse(xhr.responseText.substring(prefixLen))}catch(_){console.warn("Failed to parse JSON sent from "+xhr.responseURL);return null}}return xhr.responseText}}}catch(e){this.rejectCompletes(new Error("Could not parse response. "+e.message))}},abort:function(){this._setAborted(!0);this.xhr.abort()},_encodeBodyObject:function(body,contentType){if("string"==typeof body){return body}var bodyObj=body;switch(contentType){case"application/json":return JSON.stringify(bodyObj);case"application/x-www-form-urlencoded":return this._wwwFormUrlEncode(bodyObj);}return body},_wwwFormUrlEncode:function(object){if(!object){return""}var pieces=[];Object.keys(object).forEach(function(key){pieces.push(this._wwwFormUrlEncodePiece(key)+"="+this._wwwFormUrlEncodePiece(object[key]))},this);return pieces.join("&")},_wwwFormUrlEncodePiece:function(str){if(null===str||str===void 0||!str.toString){return""}return encodeURIComponent(str.toString().replace(/\r?\n/g,"\r\n")).replace(/%20/g,"+")},_updateStatus:function(){this._setStatus(this.xhr.status);this._setStatusText(this.xhr.statusText===void 0?"":this.xhr.statusText)}});Polymer({is:"iron-ajax",hostAttributes:{hidden:!0},properties:{url:{type:String},params:{type:Object,value:function(){return{}}},method:{type:String,value:"GET"},headers:{type:Object,value:function(){return{}}},contentType:{type:String,value:null},body:{type:Object,value:null},sync:{type:Boolean,value:!1},handleAs:{type:String,value:"json"},withCredentials:{type:Boolean,value:!1},timeout:{type:Number,value:0},auto:{type:Boolean,value:!1},verbose:{type:Boolean,value:!1},lastRequest:{type:Object,notify:!0,readOnly:!0},lastProgress:{type:Object,notify:!0,readOnly:!0},loading:{type:Boolean,notify:!0,readOnly:!0},lastResponse:{type:Object,notify:!0,readOnly:!0},lastError:{type:Object,notify:!0,readOnly:!0},activeRequests:{type:Array,notify:!0,readOnly:!0,value:function(){return[]}},debounceDuration:{type:Number,value:0,notify:!0},jsonPrefix:{type:String,value:""},bubbles:{type:Boolean,value:!1},rejectWithRequest:{type:Boolean,value:!1},_boundHandleResponse:{type:Function,value:function(){return this._handleResponse.bind(this)}}},observers:["_requestOptionsChanged(url, method, params.*, headers, contentType, "+"body, sync, handleAs, jsonPrefix, withCredentials, timeout, auto)"],created:function(){this._boundOnProgressChanged=this._onProgressChanged.bind(this)},get queryString(){var queryParts=[],param,value;for(param in this.params){value=this.params[param];param=window.encodeURIComponent(param);if(Array.isArray(value)){for(var i=0;i<value.length;i++){queryParts.push(param+"="+window.encodeURIComponent(value[i]))}}else if(null!==value){queryParts.push(param+"="+window.encodeURIComponent(value))}else{queryParts.push(param)}}return queryParts.join("&")},get requestUrl(){var queryString=this.queryString,url=this.url||"";if(queryString){var bindingChar=0<=url.indexOf("?")?"&":"?";return url+bindingChar+queryString}return url},get requestHeaders(){var headers={},contentType=this.contentType;if(null==contentType&&"string"===typeof this.body){contentType="application/x-www-form-urlencoded"}if(contentType){headers["content-type"]=contentType}var header;if("object"===typeof this.headers){for(header in this.headers){headers[header]=this.headers[header].toString()}}return headers},_onProgressChanged:function(event){this._setLastProgress(event.detail.value)},toRequestOptions:function(){return{url:this.requestUrl||"",method:this.method,headers:this.requestHeaders,body:this.body,async:!this.sync,handleAs:this.handleAs,jsonPrefix:this.jsonPrefix,withCredentials:this.withCredentials,timeout:this.timeout,rejectWithRequest:this.rejectWithRequest}},generateRequest:function(){var request=document.createElement("iron-request"),requestOptions=this.toRequestOptions();this.push("activeRequests",request);request.completes.then(this._boundHandleResponse).catch(this._handleError.bind(this,request)).then(this._discardRequest.bind(this,request));var evt=this.fire("iron-ajax-presend",{request:request,options:requestOptions},{bubbles:this.bubbles,cancelable:!0});if(evt.defaultPrevented){request.abort();request.rejectCompletes(request);return request}if(this.lastRequest){this.lastRequest.removeEventListener("iron-request-progress-changed",this._boundOnProgressChanged)}request.addEventListener("iron-request-progress-changed",this._boundOnProgressChanged);request.send(requestOptions);this._setLastProgress(null);this._setLastRequest(request);this._setLoading(!0);this.fire("request",{request:request,options:requestOptions},{bubbles:this.bubbles,composed:!0});this.fire("iron-ajax-request",{request:request,options:requestOptions},{bubbles:this.bubbles,composed:!0});return request},_handleResponse:function(request){if(request===this.lastRequest){this._setLastResponse(request.response);this._setLastError(null);this._setLoading(!1)}this.fire("response",request,{bubbles:this.bubbles,composed:!0});this.fire("iron-ajax-response",request,{bubbles:this.bubbles,composed:!0})},_handleError:function(request,error){if(this.verbose){Base._error(error)}if(request===this.lastRequest){this._setLastError({request:request,error:error,status:request.xhr.status,statusText:request.xhr.statusText,response:request.xhr.response});this._setLastResponse(null);this._setLoading(!1)}this.fire("iron-ajax-error",{request:request,error:error},{bubbles:this.bubbles,composed:!0});this.fire("error",{request:request,error:error},{bubbles:this.bubbles,composed:!0})},_discardRequest:function(request){var requestIndex=this.activeRequests.indexOf(request);if(-1<requestIndex){this.splice("activeRequests",requestIndex,1)}},_requestOptionsChanged:function(){this.debounce("generate-request",function(){if(null==this.url){return}if(this.auto){this.generateRequest()}},this.debounceDuration)}});const IronControlState={properties:{focused:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},disabled:{type:Boolean,value:!1,notify:!0,observer:"_disabledChanged",reflectToAttribute:!0},_oldTabIndex:{type:String},_boundFocusBlurHandler:{type:Function,value:function(){return this._focusBlurHandler.bind(this)}}},observers:["_changedControlState(focused, disabled)"],ready:function(){this.addEventListener("focus",this._boundFocusBlurHandler,!0);this.addEventListener("blur",this._boundFocusBlurHandler,!0)},_focusBlurHandler:function(event){this._setFocused("focus"===event.type);return},_disabledChanged:function(disabled,old){this.setAttribute("aria-disabled",disabled?"true":"false");this.style.pointerEvents=disabled?"none":"";if(disabled){this._oldTabIndex=this.getAttribute("tabindex");this._setFocused(!1);this.tabIndex=-1;this.blur()}else if(this._oldTabIndex!==void 0){if(null===this._oldTabIndex){this.removeAttribute("tabindex")}else{this.setAttribute("tabindex",this._oldTabIndex)}}},_changedControlState:function(){if(this._controlStateChanged){this._controlStateChanged()}}};_exports.IronControlState=IronControlState;var ironControlState={IronControlState:IronControlState};_exports.$ironControlState=ironControlState;const IronButtonStateImpl={properties:{pressed:{type:Boolean,readOnly:!0,value:!1,reflectToAttribute:!0,observer:"_pressedChanged"},toggles:{type:Boolean,value:!1,reflectToAttribute:!0},active:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},pointerDown:{type:Boolean,readOnly:!0,value:!1},receivedFocusFromKeyboard:{type:Boolean,readOnly:!0},ariaActiveAttribute:{type:String,value:"aria-pressed",observer:"_ariaActiveAttributeChanged"}},listeners:{down:"_downHandler",up:"_upHandler",tap:"_tapHandler"},observers:["_focusChanged(focused)","_activeChanged(active, ariaActiveAttribute)"],keyBindings:{"enter:keydown":"_asyncClick","space:keydown":"_spaceKeyDownHandler","space:keyup":"_spaceKeyUpHandler"},_mouseEventRe:/^mouse/,_tapHandler:function(){if(this.toggles){this._userActivate(!this.active)}else{this.active=!1}},_focusChanged:function(focused){this._detectKeyboardFocus(focused);if(!focused){this._setPressed(!1)}},_detectKeyboardFocus:function(focused){this._setReceivedFocusFromKeyboard(!this.pointerDown&&focused)},_userActivate:function(active){if(this.active!==active){this.active=active;this.fire("change")}},_downHandler:function(event){this._setPointerDown(!0);this._setPressed(!0);this._setReceivedFocusFromKeyboard(!1)},_upHandler:function(){this._setPointerDown(!1);this._setPressed(!1)},_spaceKeyDownHandler:function(event){var keyboardEvent=event.detail.keyboardEvent,target=dom(keyboardEvent).localTarget;if(this.isLightDescendant(target))return;keyboardEvent.preventDefault();keyboardEvent.stopImmediatePropagation();this._setPressed(!0)},_spaceKeyUpHandler:function(event){var keyboardEvent=event.detail.keyboardEvent,target=dom(keyboardEvent).localTarget;if(this.isLightDescendant(target))return;if(this.pressed){this._asyncClick()}this._setPressed(!1)},_asyncClick:function(){this.async(function(){this.click()},1)},_pressedChanged:function(pressed){this._changedButtonState()},_ariaActiveAttributeChanged:function(value,oldValue){if(oldValue&&oldValue!=value&&this.hasAttribute(oldValue)){this.removeAttribute(oldValue)}},_activeChanged:function(active,ariaActiveAttribute){if(this.toggles){this.setAttribute(this.ariaActiveAttribute,active?"true":"false")}else{this.removeAttribute(this.ariaActiveAttribute)}this._changedButtonState()},_controlStateChanged:function(){if(this.disabled){this._setPressed(!1)}else{this._changedButtonState()}},_changedButtonState:function(){if(this._buttonStateChanged){this._buttonStateChanged()}}};_exports.IronButtonStateImpl=IronButtonStateImpl;const IronButtonState=[IronA11yKeysBehavior,IronButtonStateImpl];_exports.IronButtonState=IronButtonState;var ironButtonState={IronButtonStateImpl:IronButtonStateImpl,IronButtonState:IronButtonState};_exports.$ironButtonState=ironButtonState;const IronFitBehavior={properties:{sizingTarget:{type:Object,value:function(){return this}},fitInto:{type:Object,value:window},noOverlap:{type:Boolean},positionTarget:{type:Element},horizontalAlign:{type:String},verticalAlign:{type:String},dynamicAlign:{type:Boolean},horizontalOffset:{type:Number,value:0,notify:!0},verticalOffset:{type:Number,value:0,notify:!0},autoFitOnAttach:{type:Boolean,value:!1},_fitInfo:{type:Object}},get _fitWidth(){var fitWidth;if(this.fitInto===window){fitWidth=this.fitInto.innerWidth}else{fitWidth=this.fitInto.getBoundingClientRect().width}return fitWidth},get _fitHeight(){var fitHeight;if(this.fitInto===window){fitHeight=this.fitInto.innerHeight}else{fitHeight=this.fitInto.getBoundingClientRect().height}return fitHeight},get _fitLeft(){var fitLeft;if(this.fitInto===window){fitLeft=0}else{fitLeft=this.fitInto.getBoundingClientRect().left}return fitLeft},get _fitTop(){var fitTop;if(this.fitInto===window){fitTop=0}else{fitTop=this.fitInto.getBoundingClientRect().top}return fitTop},get _defaultPositionTarget(){var parent=dom(this).parentNode;if(parent&&parent.nodeType===Node.DOCUMENT_FRAGMENT_NODE){parent=parent.host}return parent},get _localeHorizontalAlign(){if(this._isRTL){if("right"===this.horizontalAlign){return"left"}if("left"===this.horizontalAlign){return"right"}}return this.horizontalAlign},get __shouldPosition(){return(this.horizontalAlign||this.verticalAlign)&&this.positionTarget},attached:function(){if("undefined"===typeof this._isRTL){this._isRTL="rtl"==window.getComputedStyle(this).direction}this.positionTarget=this.positionTarget||this._defaultPositionTarget;if(this.autoFitOnAttach){if("none"===window.getComputedStyle(this).display){setTimeout(function(){this.fit()}.bind(this))}else{window.ShadyDOM&&ShadyDOM.flush();this.fit()}}},detached:function(){if(this.__deferredFit){clearTimeout(this.__deferredFit);this.__deferredFit=null}},fit:function(){this.position();this.constrain();this.center()},_discoverInfo:function(){if(this._fitInfo){return}var target=window.getComputedStyle(this),sizer=window.getComputedStyle(this.sizingTarget);this._fitInfo={inlineStyle:{top:this.style.top||"",left:this.style.left||"",position:this.style.position||""},sizerInlineStyle:{maxWidth:this.sizingTarget.style.maxWidth||"",maxHeight:this.sizingTarget.style.maxHeight||"",boxSizing:this.sizingTarget.style.boxSizing||""},positionedBy:{vertically:"auto"!==target.top?"top":"auto"!==target.bottom?"bottom":null,horizontally:"auto"!==target.left?"left":"auto"!==target.right?"right":null},sizedBy:{height:"none"!==sizer.maxHeight,width:"none"!==sizer.maxWidth,minWidth:parseInt(sizer.minWidth,10)||0,minHeight:parseInt(sizer.minHeight,10)||0},margin:{top:parseInt(target.marginTop,10)||0,right:parseInt(target.marginRight,10)||0,bottom:parseInt(target.marginBottom,10)||0,left:parseInt(target.marginLeft,10)||0}}},resetFit:function(){var info=this._fitInfo||{};for(var property in info.sizerInlineStyle){this.sizingTarget.style[property]=info.sizerInlineStyle[property]}for(var property in info.inlineStyle){this.style[property]=info.inlineStyle[property]}this._fitInfo=null},refit:function(){var scrollLeft=this.sizingTarget.scrollLeft,scrollTop=this.sizingTarget.scrollTop;this.resetFit();this.fit();this.sizingTarget.scrollLeft=scrollLeft;this.sizingTarget.scrollTop=scrollTop},position:function(){if(!this.__shouldPosition){return}this._discoverInfo();this.style.position="fixed";this.sizingTarget.style.boxSizing="border-box";this.style.left="0px";this.style.top="0px";var rect=this.getBoundingClientRect(),positionRect=this.__getNormalizedRect(this.positionTarget),fitRect=this.__getNormalizedRect(this.fitInto),margin=this._fitInfo.margin,size={width:rect.width+margin.left+margin.right,height:rect.height+margin.top+margin.bottom},position=this.__getPosition(this._localeHorizontalAlign,this.verticalAlign,size,rect,positionRect,fitRect),left=position.left+margin.left,top=position.top+margin.top,right=_Mathmin(fitRect.right-margin.right,left+rect.width),bottom=_Mathmin(fitRect.bottom-margin.bottom,top+rect.height);left=_Mathmax(fitRect.left+margin.left,_Mathmin(left,right-this._fitInfo.sizedBy.minWidth));top=_Mathmax(fitRect.top+margin.top,_Mathmin(top,bottom-this._fitInfo.sizedBy.minHeight));this.sizingTarget.style.maxWidth=_Mathmax(right-left,this._fitInfo.sizedBy.minWidth)+"px";this.sizingTarget.style.maxHeight=_Mathmax(bottom-top,this._fitInfo.sizedBy.minHeight)+"px";this.style.left=left-rect.left+"px";this.style.top=top-rect.top+"px"},constrain:function(){if(this.__shouldPosition){return}this._discoverInfo();var info=this._fitInfo;if(!info.positionedBy.vertically){this.style.position="fixed";this.style.top="0px"}if(!info.positionedBy.horizontally){this.style.position="fixed";this.style.left="0px"}this.sizingTarget.style.boxSizing="border-box";var rect=this.getBoundingClientRect();if(!info.sizedBy.height){this.__sizeDimension(rect,info.positionedBy.vertically,"top","bottom","Height")}if(!info.sizedBy.width){this.__sizeDimension(rect,info.positionedBy.horizontally,"left","right","Width")}},_sizeDimension:function(rect,positionedBy,start,end,extent){this.__sizeDimension(rect,positionedBy,start,end,extent)},__sizeDimension:function(rect,positionedBy,start,end,extent){var info=this._fitInfo,fitRect=this.__getNormalizedRect(this.fitInto),max="Width"===extent?fitRect.width:fitRect.height,flip=positionedBy===end,offset=flip?max-rect[end]:rect[start],margin=info.margin[flip?start:end],offsetExtent="offset"+extent,sizingOffset=this[offsetExtent]-this.sizingTarget[offsetExtent];this.sizingTarget.style["max"+extent]=max-margin-offset-sizingOffset+"px"},center:function(){if(this.__shouldPosition){return}this._discoverInfo();var positionedBy=this._fitInfo.positionedBy;if(positionedBy.vertically&&positionedBy.horizontally){return}this.style.position="fixed";if(!positionedBy.vertically){this.style.top="0px"}if(!positionedBy.horizontally){this.style.left="0px"}var rect=this.getBoundingClientRect(),fitRect=this.__getNormalizedRect(this.fitInto);if(!positionedBy.vertically){var top=fitRect.top-rect.top+(fitRect.height-rect.height)/2;this.style.top=top+"px"}if(!positionedBy.horizontally){var left=fitRect.left-rect.left+(fitRect.width-rect.width)/2;this.style.left=left+"px"}},__getNormalizedRect:function(target){if(target===document.documentElement||target===window){return{top:0,left:0,width:window.innerWidth,height:window.innerHeight,right:window.innerWidth,bottom:window.innerHeight}}return target.getBoundingClientRect()},__getOffscreenArea:function(position,size,fitRect){var verticalCrop=_Mathmin(0,position.top)+_Mathmin(0,fitRect.bottom-(position.top+size.height)),horizontalCrop=_Mathmin(0,position.left)+_Mathmin(0,fitRect.right-(position.left+size.width));return _Mathabs(verticalCrop)*size.width+_Mathabs(horizontalCrop)*size.height},__getPosition:function(hAlign,vAlign,size,sizeNoMargins,positionRect,fitRect){var positions=[{verticalAlign:"top",horizontalAlign:"left",top:positionRect.top+this.verticalOffset,left:positionRect.left+this.horizontalOffset},{verticalAlign:"top",horizontalAlign:"right",top:positionRect.top+this.verticalOffset,left:positionRect.right-size.width-this.horizontalOffset},{verticalAlign:"bottom",horizontalAlign:"left",top:positionRect.bottom-size.height-this.verticalOffset,left:positionRect.left+this.horizontalOffset},{verticalAlign:"bottom",horizontalAlign:"right",top:positionRect.bottom-size.height-this.verticalOffset,left:positionRect.right-size.width-this.horizontalOffset}];if(this.noOverlap){for(var i=0,l=positions.length,copy;i<l;i++){copy={};for(var key in positions[i]){copy[key]=positions[i][key]}positions.push(copy)}positions[0].top=positions[1].top+=positionRect.height;positions[2].top=positions[3].top-=positionRect.height;positions[4].left=positions[6].left+=positionRect.width;positions[5].left=positions[7].left-=positionRect.width}vAlign="auto"===vAlign?null:vAlign;hAlign="auto"===hAlign?null:hAlign;if(!hAlign||"center"===hAlign){positions.push({verticalAlign:"top",horizontalAlign:"center",top:positionRect.top+this.verticalOffset+(this.noOverlap?positionRect.height:0),left:positionRect.left-sizeNoMargins.width/2+positionRect.width/2+this.horizontalOffset});positions.push({verticalAlign:"bottom",horizontalAlign:"center",top:positionRect.bottom-size.height-this.verticalOffset-(this.noOverlap?positionRect.height:0),left:positionRect.left-sizeNoMargins.width/2+positionRect.width/2+this.horizontalOffset})}if(!vAlign||"middle"===vAlign){positions.push({verticalAlign:"middle",horizontalAlign:"left",top:positionRect.top-sizeNoMargins.height/2+positionRect.height/2+this.verticalOffset,left:positionRect.left+this.horizontalOffset+(this.noOverlap?positionRect.width:0)});positions.push({verticalAlign:"middle",horizontalAlign:"right",top:positionRect.top-sizeNoMargins.height/2+positionRect.height/2+this.verticalOffset,left:positionRect.right-size.width-this.horizontalOffset-(this.noOverlap?positionRect.width:0)})}if("middle"===vAlign&&"center"===hAlign){positions.push({verticalAlign:"middle",horizontalAlign:"center",top:positionRect.top-sizeNoMargins.height/2+positionRect.height/2+this.verticalOffset,left:positionRect.left-sizeNoMargins.width/2+positionRect.width/2+this.horizontalOffset})}for(var position,i=0;i<positions.length;i++){var candidate=positions[i],vAlignOk=candidate.verticalAlign===vAlign,hAlignOk=candidate.horizontalAlign===hAlign;if(!this.dynamicAlign&&!this.noOverlap&&vAlignOk&&hAlignOk){position=candidate;break}var alignOk=(!vAlign||vAlignOk)&&(!hAlign||hAlignOk);if(!this.dynamicAlign&&!alignOk){continue}candidate.offscreenArea=this.__getOffscreenArea(candidate,size,fitRect);if(0===candidate.offscreenArea&&alignOk){position=candidate;break}position=position||candidate;var diff=candidate.offscreenArea-position.offscreenArea;if(0>diff||0===diff&&(vAlignOk||hAlignOk)){position=candidate}}return position}};_exports.IronFitBehavior=IronFitBehavior;var ironFitBehavior={IronFitBehavior:IronFitBehavior};_exports.$ironFitBehavior=ironFitBehavior;var p$1=Element.prototype,matches$1=p$1.matches||p$1.matchesSelector||p$1.mozMatchesSelector||p$1.msMatchesSelector||p$1.oMatchesSelector||p$1.webkitMatchesSelector;const IronFocusablesHelper={getTabbableNodes:function(node){var result=[],needsSortByTabIndex=this._collectTabbableNodes(node,result);if(needsSortByTabIndex){return this._sortByTabIndex(result)}return result},isFocusable:function(element){if(matches$1.call(element,"input, select, textarea, button, object")){return matches$1.call(element,":not([disabled])")}return matches$1.call(element,"a[href], area[href], iframe, [tabindex], [contentEditable]")},isTabbable:function(element){return this.isFocusable(element)&&matches$1.call(element,":not([tabindex=\"-1\"])")&&this._isVisible(element)},_normalizedTabIndex:function(element){if(this.isFocusable(element)){var tabIndex=element.getAttribute("tabindex")||0;return+tabIndex}return-1},_collectTabbableNodes:function(node,result){if(node.nodeType!==Node.ELEMENT_NODE||!this._isVisible(node)){return!1}var element=node,tabIndex=this._normalizedTabIndex(element),needsSort=0<tabIndex;if(0<=tabIndex){result.push(element)}var children;if("content"===element.localName||"slot"===element.localName){children=dom(element).getDistributedNodes()}else{children=dom(element.root||element).children}for(var i=0;i<children.length;i++){needsSort=this._collectTabbableNodes(children[i],result)||needsSort}return needsSort},_isVisible:function(element){var style=element.style;if("hidden"!==style.visibility&&"none"!==style.display){style=window.getComputedStyle(element);return"hidden"!==style.visibility&&"none"!==style.display}return!1},_sortByTabIndex:function(tabbables){var len=tabbables.length;if(2>len){return tabbables}var pivot=_Mathceil(len/2),left=this._sortByTabIndex(tabbables.slice(0,pivot)),right=this._sortByTabIndex(tabbables.slice(pivot));return this._mergeSortByTabIndex(left,right)},_mergeSortByTabIndex:function(left,right){var result=[];while(0<left.length&&0<right.length){if(this._hasLowerTabOrder(left[0],right[0])){result.push(right.shift())}else{result.push(left.shift())}}return result.concat(left,right)},_hasLowerTabOrder:function(a,b){var ati=_Mathmax(a.tabIndex,0),bti=_Mathmax(b.tabIndex,0);return 0===ati||0===bti?bti>ati:ati>bti}};_exports.IronFocusablesHelper=IronFocusablesHelper;var ironFocusablesHelper={IronFocusablesHelper:IronFocusablesHelper};_exports.$ironFocusablesHelper=ironFocusablesHelper;Polymer({_template:html`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--iron-overlay-backdrop-background-color, #000);
        opacity: 0;
        transition: opacity 0.2s;
        pointer-events: none;
        @apply --iron-overlay-backdrop;
      }

      :host(.opened) {
        opacity: var(--iron-overlay-backdrop-opacity, 0.6);
        pointer-events: auto;
        @apply --iron-overlay-backdrop-opened;
      }
    </style>

    <slot></slot>
`,is:"iron-overlay-backdrop",properties:{opened:{reflectToAttribute:!0,type:Boolean,value:!1,observer:"_openedChanged"}},listeners:{transitionend:"_onTransitionend"},created:function(){this.__openedRaf=null},attached:function(){this.opened&&this._openedChanged(this.opened)},prepare:function(){if(this.opened&&!this.parentNode){dom(document.body).appendChild(this)}},open:function(){this.opened=!0},close:function(){this.opened=!1},complete:function(){if(!this.opened&&this.parentNode===document.body){dom(this.parentNode).removeChild(this)}},_onTransitionend:function(event){if(event&&event.target===this){this.complete()}},_openedChanged:function(opened){if(opened){this.prepare()}else{var cs=window.getComputedStyle(this);if("0s"===cs.transitionDuration||0==cs.opacity){this.complete()}}if(!this.isAttached){return}if(this.__openedRaf){window.cancelAnimationFrame(this.__openedRaf);this.__openedRaf=null}this.scrollTop=this.scrollTop;this.__openedRaf=window.requestAnimationFrame(function(){this.__openedRaf=null;this.toggleClass("opened",this.opened)}.bind(this))}});const IronOverlayManagerClass=function(){this._overlays=[];this._minimumZ=101;this._backdropElement=null;add(document.documentElement,"tap",function(){});document.addEventListener("tap",this._onCaptureClick.bind(this),!0);document.addEventListener("focus",this._onCaptureFocus.bind(this),!0);document.addEventListener("keydown",this._onCaptureKeyDown.bind(this),!0)};_exports.IronOverlayManagerClass=IronOverlayManagerClass;IronOverlayManagerClass.prototype={constructor:IronOverlayManagerClass,get backdropElement(){if(!this._backdropElement){this._backdropElement=document.createElement("iron-overlay-backdrop")}return this._backdropElement},get deepActiveElement(){var active=document.activeElement;if(!active||!1===active instanceof Element){active=document.body}while(active.root&&dom(active.root).activeElement){active=dom(active.root).activeElement}return active},_bringOverlayAtIndexToFront:function(i){var overlay=this._overlays[i];if(!overlay){return}var lastI=this._overlays.length-1,currentOverlay=this._overlays[lastI];if(currentOverlay&&this._shouldBeBehindOverlay(overlay,currentOverlay)){lastI--}if(i>=lastI){return}var minimumZ=_Mathmax(this.currentOverlayZ(),this._minimumZ);if(this._getZ(overlay)<=minimumZ){this._applyOverlayZ(overlay,minimumZ)}while(i<lastI){this._overlays[i]=this._overlays[i+1];i++}this._overlays[lastI]=overlay},addOrRemoveOverlay:function(overlay){if(overlay.opened){this.addOverlay(overlay)}else{this.removeOverlay(overlay)}},addOverlay:function(overlay){var i=this._overlays.indexOf(overlay);if(0<=i){this._bringOverlayAtIndexToFront(i);this.trackBackdrop();return}var insertionIndex=this._overlays.length,currentOverlay=this._overlays[insertionIndex-1],minimumZ=_Mathmax(this._getZ(currentOverlay),this._minimumZ),newZ=this._getZ(overlay);if(currentOverlay&&this._shouldBeBehindOverlay(overlay,currentOverlay)){this._applyOverlayZ(currentOverlay,minimumZ);insertionIndex--;var previousOverlay=this._overlays[insertionIndex-1];minimumZ=_Mathmax(this._getZ(previousOverlay),this._minimumZ)}if(newZ<=minimumZ){this._applyOverlayZ(overlay,minimumZ)}this._overlays.splice(insertionIndex,0,overlay);this.trackBackdrop()},removeOverlay:function(overlay){var i=this._overlays.indexOf(overlay);if(-1===i){return}this._overlays.splice(i,1);this.trackBackdrop()},currentOverlay:function(){var i=this._overlays.length-1;return this._overlays[i]},currentOverlayZ:function(){return this._getZ(this.currentOverlay())},ensureMinimumZ:function(minimumZ){this._minimumZ=_Mathmax(this._minimumZ,minimumZ)},focusOverlay:function(){var current=this.currentOverlay();if(current){current._applyFocus()}},trackBackdrop:function(){var overlay=this._overlayWithBackdrop();if(!overlay&&!this._backdropElement){return}this.backdropElement.style.zIndex=this._getZ(overlay)-1;this.backdropElement.opened=!!overlay;this.backdropElement.prepare()},getBackdrops:function(){for(var backdrops=[],i=0;i<this._overlays.length;i++){if(this._overlays[i].withBackdrop){backdrops.push(this._overlays[i])}}return backdrops},backdropZ:function(){return this._getZ(this._overlayWithBackdrop())-1},_overlayWithBackdrop:function(){for(var i=this._overlays.length-1;0<=i;i--){if(this._overlays[i].withBackdrop){return this._overlays[i]}}},_getZ:function(overlay){var z=this._minimumZ;if(overlay){var z1=+(overlay.style.zIndex||window.getComputedStyle(overlay).zIndex);if(z1===z1){z=z1}}return z},_setZ:function(element,z){element.style.zIndex=z},_applyOverlayZ:function(overlay,aboveZ){this._setZ(overlay,aboveZ+2)},_overlayInPath:function(path){path=path||[];for(var i=0;i<path.length;i++){if(path[i]._manager===this){return path[i]}}},_onCaptureClick:function(event){var i=this._overlays.length-1;if(-1===i)return;var path=dom(event).path,overlay;while((overlay=this._overlays[i])&&this._overlayInPath(path)!==overlay){overlay._onCaptureClick(event);if(overlay.allowClickThrough){i--}else{break}}},_onCaptureFocus:function(event){var overlay=this.currentOverlay();if(overlay){overlay._onCaptureFocus(event)}},_onCaptureKeyDown:function(event){var overlay=this.currentOverlay();if(overlay){if(IronA11yKeysBehavior.keyboardEventMatchesKeys(event,"esc")){overlay._onCaptureEsc(event)}else if(IronA11yKeysBehavior.keyboardEventMatchesKeys(event,"tab")){overlay._onCaptureTab(event)}}},_shouldBeBehindOverlay:function(overlay1,overlay2){return!overlay1.alwaysOnTop&&overlay2.alwaysOnTop}};const IronOverlayManager=new IronOverlayManagerClass;_exports.IronOverlayManager=IronOverlayManager;var ironOverlayManager={IronOverlayManagerClass:IronOverlayManagerClass,IronOverlayManager:IronOverlayManager};_exports.$ironOverlayManager=ironOverlayManager;var lastTouchPosition={pageX:0,pageY:0},lastRootTarget=null,lastScrollableNodes=[],scrollEvents=["wheel","mousewheel","DOMMouseScroll","touchstart","touchmove"],_boundScrollHandler;_exports._boundScrollHandler=_boundScrollHandler;var currentLockingElement;_exports.currentLockingElement=currentLockingElement;`TODO(modulizer): A namespace named Polymer.IronScrollManager was
declared here. The surrounding comments should be reviewed,
and this string can then be deleted`;function elementIsScrollLocked(element){var lockingElement=currentLockingElement;if(lockingElement===void 0){return!1}var scrollLocked;if(_hasCachedLockedElement(element)){return!0}if(_hasCachedUnlockedElement(element)){return!1}scrollLocked=!!lockingElement&&lockingElement!==element&&!_composedTreeContains(lockingElement,element);if(scrollLocked){_lockedElementCache.push(element)}else{_unlockedElementCache.push(element)}return scrollLocked}function pushScrollLock(element){if(0<=_lockingElements.indexOf(element)){return}if(0===_lockingElements.length){_lockScrollInteractions()}_lockingElements.push(element);_exports.currentLockingElement=currentLockingElement=_lockingElements[_lockingElements.length-1];_exports._lockedElementCache=_lockedElementCache=[];_exports._unlockedElementCache=_unlockedElementCache=[]}function removeScrollLock(element){var index=_lockingElements.indexOf(element);if(-1===index){return}_lockingElements.splice(index,1);_exports.currentLockingElement=currentLockingElement=_lockingElements[_lockingElements.length-1];_exports._lockedElementCache=_lockedElementCache=[];_exports._unlockedElementCache=_unlockedElementCache=[];if(0===_lockingElements.length){_unlockScrollInteractions()}}const _lockingElements=[];_exports._lockingElements=_lockingElements;let _lockedElementCache=null;_exports._lockedElementCache=_lockedElementCache;let _unlockedElementCache=null;_exports._unlockedElementCache=_unlockedElementCache;function _hasCachedLockedElement(element){return-1<_lockedElementCache.indexOf(element)}function _hasCachedUnlockedElement(element){return-1<_unlockedElementCache.indexOf(element)}function _composedTreeContains(element,child){var contentElements,distributedNodes,contentIndex,nodeIndex;if(element.contains(child)){return!0}contentElements=dom(element).querySelectorAll("content,slot");for(contentIndex=0;contentIndex<contentElements.length;++contentIndex){distributedNodes=dom(contentElements[contentIndex]).getDistributedNodes();for(nodeIndex=0;nodeIndex<distributedNodes.length;++nodeIndex){if(distributedNodes[nodeIndex].nodeType!==Node.ELEMENT_NODE)continue;if(_composedTreeContains(distributedNodes[nodeIndex],child)){return!0}}}return!1}function _scrollInteractionHandler(event){if(event.cancelable&&_shouldPreventScrolling(event)){event.preventDefault()}if(event.targetTouches){var touch=event.targetTouches[0];lastTouchPosition.pageX=touch.pageX;lastTouchPosition.pageY=touch.pageY}}function _lockScrollInteractions(){_exports._boundScrollHandler=_boundScrollHandler=_boundScrollHandler||_scrollInteractionHandler.bind(void 0);for(var i=0,l=scrollEvents.length;i<l;i++){document.addEventListener(scrollEvents[i],_boundScrollHandler,{capture:!0,passive:!1})}}function _unlockScrollInteractions(){for(var i=0,l=scrollEvents.length;i<l;i++){document.removeEventListener(scrollEvents[i],_boundScrollHandler,{capture:!0,passive:!1})}}function _shouldPreventScrolling(event){var target=dom(event).rootTarget;if("touchmove"!==event.type&&lastRootTarget!==target){lastRootTarget=target;lastScrollableNodes=_getScrollableNodes(dom(event).path)}if(!lastScrollableNodes.length){return!0}if("touchstart"===event.type){return!1}var info=_getScrollInfo(event);return!_getScrollingNode(lastScrollableNodes,info.deltaX,info.deltaY)}function _getScrollableNodes(nodes){for(var scrollables=[],lockingIndex=nodes.indexOf(currentLockingElement),i=0;i<=lockingIndex;i++){if(nodes[i].nodeType!==Node.ELEMENT_NODE){continue}var node=nodes[i],style=node.style;if("scroll"!==style.overflow&&"auto"!==style.overflow){style=window.getComputedStyle(node)}if("scroll"===style.overflow||"auto"===style.overflow){scrollables.push(node)}}return scrollables}function _getScrollingNode(nodes,deltaX,deltaY){if(!deltaX&&!deltaY){return}for(var verticalScroll=_Mathabs(deltaY)>=_Mathabs(deltaX),i=0;i<nodes.length;i++){var node=nodes[i],canScroll=!1;if(verticalScroll){canScroll=0>deltaY?0<node.scrollTop:node.scrollTop<node.scrollHeight-node.clientHeight}else{canScroll=0>deltaX?0<node.scrollLeft:node.scrollLeft<node.scrollWidth-node.clientWidth}if(canScroll){return node}}}function _getScrollInfo(event){var info={deltaX:event.deltaX,deltaY:event.deltaY};if("deltaX"in event){}else if("wheelDeltaX"in event&&"wheelDeltaY"in event){info.deltaX=-event.wheelDeltaX;info.deltaY=-event.wheelDeltaY}else if("wheelDelta"in event){info.deltaX=0;info.deltaY=-event.wheelDelta}else if("axis"in event){info.deltaX=1===event.axis?event.detail:0;info.deltaY=2===event.axis?event.detail:0}else if(event.targetTouches){var touch=event.targetTouches[0];info.deltaX=lastTouchPosition.pageX-touch.pageX;info.deltaY=lastTouchPosition.pageY-touch.pageY}return info}var ironScrollManager={get currentLockingElement(){return currentLockingElement},elementIsScrollLocked:elementIsScrollLocked,pushScrollLock:pushScrollLock,removeScrollLock:removeScrollLock,_lockingElements:_lockingElements,get _lockedElementCache(){return _lockedElementCache},get _unlockedElementCache(){return _unlockedElementCache},_hasCachedLockedElement:_hasCachedLockedElement,_hasCachedUnlockedElement:_hasCachedUnlockedElement,_composedTreeContains:_composedTreeContains,_scrollInteractionHandler:_scrollInteractionHandler,get _boundScrollHandler(){return _boundScrollHandler},_lockScrollInteractions:_lockScrollInteractions,_unlockScrollInteractions:_unlockScrollInteractions,_shouldPreventScrolling:_shouldPreventScrolling,_getScrollableNodes:_getScrollableNodes,_getScrollingNode:_getScrollingNode,_getScrollInfo:_getScrollInfo};_exports.$ironScrollManager=ironScrollManager;const IronOverlayBehaviorImpl={properties:{opened:{observer:"_openedChanged",type:Boolean,value:!1,notify:!0},canceled:{observer:"_canceledChanged",readOnly:!0,type:Boolean,value:!1},withBackdrop:{observer:"_withBackdropChanged",type:Boolean},noAutoFocus:{type:Boolean,value:!1},noCancelOnEscKey:{type:Boolean,value:!1},noCancelOnOutsideClick:{type:Boolean,value:!1},closingReason:{type:Object},restoreFocusOnClose:{type:Boolean,value:!1},allowClickThrough:{type:Boolean},alwaysOnTop:{type:Boolean},scrollAction:{type:String},_manager:{type:Object,value:IronOverlayManager},_focusedChild:{type:Object}},listeners:{"iron-resize":"_onIronResize"},observers:["__updateScrollObservers(isAttached, opened, scrollAction)"],get backdropElement(){return this._manager.backdropElement},get _focusNode(){return this._focusedChild||dom(this).querySelector("[autofocus]")||this},get _focusableNodes(){return IronFocusablesHelper.getTabbableNodes(this)},ready:function(){this.__isAnimating=!1;this.__shouldRemoveTabIndex=!1;this.__firstFocusableNode=this.__lastFocusableNode=null;this.__rafs={};this.__restoreFocusNode=null;this.__scrollTop=this.__scrollLeft=null;this.__onCaptureScroll=this.__onCaptureScroll.bind(this);this.__rootNodes=null;this._ensureSetup()},attached:function(){if(this.opened){this._openedChanged(this.opened)}this._observer=dom(this).observeNodes(this._onNodesChange)},detached:function(){dom(this).unobserveNodes(this._observer);this._observer=null;for(var cb in this.__rafs){if(null!==this.__rafs[cb]){cancelAnimationFrame(this.__rafs[cb])}}this.__rafs={};this._manager.removeOverlay(this);if(this.__isAnimating){if(this.opened){this._finishRenderOpened()}else{this._applyFocus();this._finishRenderClosed()}}},toggle:function(){this._setCanceled(!1);this.opened=!this.opened},open:function(){this._setCanceled(!1);this.opened=!0},close:function(){this._setCanceled(!1);this.opened=!1},cancel:function(event){var cancelEvent=this.fire("iron-overlay-canceled",event,{cancelable:!0});if(cancelEvent.defaultPrevented){return}this._setCanceled(!0);this.opened=!1},invalidateTabbables:function(){this.__firstFocusableNode=this.__lastFocusableNode=null},_ensureSetup:function(){if(this._overlaySetup){return}this._overlaySetup=!0;this.style.outline="none";this.style.display="none"},_openedChanged:function(opened){if(opened){this.removeAttribute("aria-hidden")}else{this.setAttribute("aria-hidden","true")}if(!this.isAttached){return}this.__isAnimating=!0;this.__deraf("__openedChanged",this.__openedChanged)},_canceledChanged:function(){this.closingReason=this.closingReason||{};this.closingReason.canceled=this.canceled},_withBackdropChanged:function(){if(this.withBackdrop&&!this.hasAttribute("tabindex")){this.setAttribute("tabindex","-1");this.__shouldRemoveTabIndex=!0}else if(this.__shouldRemoveTabIndex){this.removeAttribute("tabindex");this.__shouldRemoveTabIndex=!1}if(this.opened&&this.isAttached){this._manager.trackBackdrop()}},_prepareRenderOpened:function(){this.__restoreFocusNode=this._manager.deepActiveElement;this._preparePositioning();this.refit();this._finishPositioning();if(this.noAutoFocus&&document.activeElement===this._focusNode){this._focusNode.blur();this.__restoreFocusNode.focus()}},_renderOpened:function(){this._finishRenderOpened()},_renderClosed:function(){this._finishRenderClosed()},_finishRenderOpened:function(){this.notifyResize();this.__isAnimating=!1;this.fire("iron-overlay-opened")},_finishRenderClosed:function(){this.style.display="none";this.style.zIndex="";this.notifyResize();this.__isAnimating=!1;this.fire("iron-overlay-closed",this.closingReason)},_preparePositioning:function(){this.style.transition=this.style.webkitTransition="none";this.style.transform=this.style.webkitTransform="none";this.style.display=""},_finishPositioning:function(){this.style.display="none";this.scrollTop=this.scrollTop;this.style.transition=this.style.webkitTransition="";this.style.transform=this.style.webkitTransform="";this.style.display="";this.scrollTop=this.scrollTop},_applyFocus:function(){if(this.opened){if(!this.noAutoFocus){this._focusNode.focus()}}else{if(this.restoreFocusOnClose&&this.__restoreFocusNode){var activeElement=this._manager.deepActiveElement;if(activeElement===document.body||dom(this).deepContains(activeElement)){this.__restoreFocusNode.focus()}}this.__restoreFocusNode=null;this._focusNode.blur();this._focusedChild=null}},_onCaptureClick:function(event){if(!this.noCancelOnOutsideClick){this.cancel(event)}},_onCaptureFocus:function(event){if(!this.withBackdrop){return}var path=dom(event).path;if(-1===path.indexOf(this)){event.stopPropagation();this._applyFocus()}else{this._focusedChild=path[0]}},_onCaptureEsc:function(event){if(!this.noCancelOnEscKey){this.cancel(event)}},_onCaptureTab:function(event){if(!this.withBackdrop){return}this.__ensureFirstLastFocusables();var shift=event.shiftKey,nodeToCheck=shift?this.__firstFocusableNode:this.__lastFocusableNode,nodeToSet=shift?this.__lastFocusableNode:this.__firstFocusableNode,shouldWrap=!1;if(nodeToCheck===nodeToSet){shouldWrap=!0}else{var focusedNode=this._manager.deepActiveElement;shouldWrap=focusedNode===nodeToCheck||focusedNode===this}if(shouldWrap){event.preventDefault();this._focusedChild=nodeToSet;this._applyFocus()}},_onIronResize:function(){if(this.opened&&!this.__isAnimating){this.__deraf("refit",this.refit)}},_onNodesChange:function(){if(this.opened&&!this.__isAnimating){this.invalidateTabbables();this.notifyResize()}},__ensureFirstLastFocusables:function(){var focusableNodes=this._focusableNodes;this.__firstFocusableNode=focusableNodes[0];this.__lastFocusableNode=focusableNodes[focusableNodes.length-1]},__openedChanged:function(){if(this.opened){this._prepareRenderOpened();this._manager.addOverlay(this);this._applyFocus();this._renderOpened()}else{this._manager.removeOverlay(this);this._applyFocus();this._renderClosed()}},__deraf:function(jobname,callback){var rafs=this.__rafs;if(null!==rafs[jobname]){cancelAnimationFrame(rafs[jobname])}rafs[jobname]=requestAnimationFrame(function nextAnimationFrame(){rafs[jobname]=null;callback.call(this)}.bind(this))},__updateScrollObservers:function(isAttached,opened,scrollAction){if(!isAttached||!opened||!this.__isValidScrollAction(scrollAction)){removeScrollLock(this);this.__removeScrollListeners()}else{if("lock"===scrollAction){this.__saveScrollPosition();pushScrollLock(this)}this.__addScrollListeners()}},__addScrollListeners:function(){if(!this.__rootNodes){this.__rootNodes=[];if(useShadow){var node=this;while(node){if(node.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&node.host){this.__rootNodes.push(node)}node=node.host||node.assignedSlot||node.parentNode}}this.__rootNodes.push(document)}this.__rootNodes.forEach(function(el){el.addEventListener("scroll",this.__onCaptureScroll,{capture:!0,passive:!0})},this)},__removeScrollListeners:function(){if(this.__rootNodes){this.__rootNodes.forEach(function(el){el.removeEventListener("scroll",this.__onCaptureScroll,{capture:!0,passive:!0})},this)}if(!this.isAttached){this.__rootNodes=null}},__isValidScrollAction:function(scrollAction){return"lock"===scrollAction||"refit"===scrollAction||"cancel"===scrollAction},__onCaptureScroll:function(event){if(this.__isAnimating){return}if(0<=dom(event).path.indexOf(this)){return}switch(this.scrollAction){case"lock":this.__restoreScrollPosition();break;case"refit":this.__deraf("refit",this.refit);break;case"cancel":this.cancel(event);break;}},__saveScrollPosition:function(){if(document.scrollingElement){this.__scrollTop=document.scrollingElement.scrollTop;this.__scrollLeft=document.scrollingElement.scrollLeft}else{this.__scrollTop=_Mathmax(document.documentElement.scrollTop,document.body.scrollTop);this.__scrollLeft=_Mathmax(document.documentElement.scrollLeft,document.body.scrollLeft)}},__restoreScrollPosition:function(){if(document.scrollingElement){document.scrollingElement.scrollTop=this.__scrollTop;document.scrollingElement.scrollLeft=this.__scrollLeft}else{document.documentElement.scrollTop=document.body.scrollTop=this.__scrollTop;document.documentElement.scrollLeft=document.body.scrollLeft=this.__scrollLeft}}};_exports.IronOverlayBehaviorImpl=IronOverlayBehaviorImpl;const IronOverlayBehavior=[IronFitBehavior,IronResizableBehavior,IronOverlayBehaviorImpl];_exports.IronOverlayBehavior=IronOverlayBehavior;var ironOverlayBehavior={IronOverlayBehaviorImpl:IronOverlayBehaviorImpl,IronOverlayBehavior:IronOverlayBehavior};_exports.$ironOverlayBehavior=ironOverlayBehavior;const NeonAnimatableBehavior={properties:{animationConfig:{type:Object},entryAnimation:{observer:"_entryAnimationChanged",type:String},exitAnimation:{observer:"_exitAnimationChanged",type:String}},_entryAnimationChanged:function(){this.animationConfig=this.animationConfig||{};this.animationConfig.entry=[{name:this.entryAnimation,node:this}]},_exitAnimationChanged:function(){this.animationConfig=this.animationConfig||{};this.animationConfig.exit=[{name:this.exitAnimation,node:this}]},_copyProperties:function(config1,config2){for(var property in config2){config1[property]=config2[property]}},_cloneConfig:function(config){var clone={isClone:!0};this._copyProperties(clone,config);return clone},_getAnimationConfigRecursive:function(type,map,allConfigs){if(!this.animationConfig){return}if(this.animationConfig.value&&"function"===typeof this.animationConfig.value){this._warn(this._logf("playAnimation","Please put 'animationConfig' inside of your components 'properties' object instead of outside of it."));return}var thisConfig;if(type){thisConfig=this.animationConfig[type]}else{thisConfig=this.animationConfig}if(!Array.isArray(thisConfig)){thisConfig=[thisConfig]}if(thisConfig){for(var config,index=0;config=thisConfig[index];index++){if(config.animatable){config.animatable._getAnimationConfigRecursive(config.type||type,map,allConfigs)}else{if(config.id){var cachedConfig=map[config.id];if(cachedConfig){if(!cachedConfig.isClone){map[config.id]=this._cloneConfig(cachedConfig);cachedConfig=map[config.id]}this._copyProperties(cachedConfig,config)}else{map[config.id]=config}}else{allConfigs.push(config)}}}}},getAnimationConfig:function(type){var map={},allConfigs=[];this._getAnimationConfigRecursive(type,map,allConfigs);for(var key in map){allConfigs.push(map[key])}return allConfigs}};_exports.NeonAnimatableBehavior=NeonAnimatableBehavior;var neonAnimatableBehavior={NeonAnimatableBehavior:NeonAnimatableBehavior};_exports.$neonAnimatableBehavior=neonAnimatableBehavior;const NeonAnimationRunnerBehaviorImpl={_configureAnimations:function(configs){var results=[],resultsToPlay=[];if(0<configs.length){for(let config,index=0,neonAnimation;config=configs[index];index++){neonAnimation=document.createElement(config.name);if(neonAnimation.isNeonAnimation){let result=null;if(!neonAnimation.configure){neonAnimation.configure=function(config){return null}}result=neonAnimation.configure(config);resultsToPlay.push({result:result,config:config,neonAnimation:neonAnimation})}else{console.warn(this.is+":",config.name,"not found!")}}}for(var i=0;i<resultsToPlay.length;i++){let result=resultsToPlay[i].result,config=resultsToPlay[i].config,neonAnimation=resultsToPlay[i].neonAnimation;try{if("function"!=typeof result.cancel){result=document.timeline.play(result)}}catch(e){result=null;console.warn("Couldnt play","(",config.name,").",e)}if(result){results.push({neonAnimation:neonAnimation,config:config,animation:result})}}return results},_shouldComplete:function(activeEntries){for(var finished=!0,i=0;i<activeEntries.length;i++){if("finished"!=activeEntries[i].animation.playState){finished=!1;break}}return finished},_complete:function(activeEntries){for(var i=0;i<activeEntries.length;i++){activeEntries[i].neonAnimation.complete(activeEntries[i].config)}for(var i=0;i<activeEntries.length;i++){activeEntries[i].animation.cancel()}},playAnimation:function(type,cookie){var configs=this.getAnimationConfig(type);if(!configs){return}this._active=this._active||{};if(this._active[type]){this._complete(this._active[type]);delete this._active[type]}var activeEntries=this._configureAnimations(configs);if(0==activeEntries.length){this.fire("neon-animation-finish",cookie,{bubbles:!1});return}this._active[type]=activeEntries;for(var i=0;i<activeEntries.length;i++){activeEntries[i].animation.onfinish=function(){if(this._shouldComplete(activeEntries)){this._complete(activeEntries);delete this._active[type];this.fire("neon-animation-finish",cookie,{bubbles:!1})}}.bind(this)}},cancelAnimation:function(){for(var k in this._active){var entries=this._active[k];for(var j in entries){entries[j].animation.cancel()}}this._active={}}};_exports.NeonAnimationRunnerBehaviorImpl=NeonAnimationRunnerBehaviorImpl;const NeonAnimationRunnerBehavior=[NeonAnimatableBehavior,NeonAnimationRunnerBehaviorImpl];_exports.NeonAnimationRunnerBehavior=NeonAnimationRunnerBehavior;var neonAnimationRunnerBehavior={NeonAnimationRunnerBehaviorImpl:NeonAnimationRunnerBehaviorImpl,NeonAnimationRunnerBehavior:NeonAnimationRunnerBehavior};_exports.$neonAnimationRunnerBehavior=neonAnimationRunnerBehavior;Polymer({_template:html`
    <style>
      :host {
        position: fixed;
      }

      #contentWrapper ::slotted(*) {
        overflow: auto;
      }

      #contentWrapper.animating ::slotted(*) {
        overflow: hidden;
        pointer-events: none;
      }
    </style>

    <div id="contentWrapper">
      <slot id="content" name="dropdown-content"></slot>
    </div>
`,is:"iron-dropdown",behaviors:[IronControlState,IronA11yKeysBehavior,IronOverlayBehavior,NeonAnimationRunnerBehavior],properties:{horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},openAnimationConfig:{type:Object},closeAnimationConfig:{type:Object},focusTarget:{type:Object},noAnimations:{type:Boolean,value:!1},allowOutsideScroll:{type:Boolean,value:!1,observer:"_allowOutsideScrollChanged"}},listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},observers:["_updateOverlayPosition(positionTarget, verticalAlign, horizontalAlign, verticalOffset, horizontalOffset)"],get containedElement(){for(var nodes=dom(this.$.content).getDistributedNodes(),i=0,l=nodes.length;i<l;i++){if(nodes[i].nodeType===Node.ELEMENT_NODE){return nodes[i]}}},ready:function(){if(!this.scrollAction){this.scrollAction=this.allowOutsideScroll?"refit":"lock"}this._readied=!0},attached:function(){if(!this.sizingTarget||this.sizingTarget===this){this.sizingTarget=this.containedElement||this}},detached:function(){this.cancelAnimation()},_openedChanged:function(){if(this.opened&&this.disabled){this.cancel()}else{this.cancelAnimation();this._updateAnimationConfig();IronOverlayBehaviorImpl._openedChanged.apply(this,arguments)}},_renderOpened:function(){if(!this.noAnimations&&this.animationConfig.open){this.$.contentWrapper.classList.add("animating");this.playAnimation("open")}else{IronOverlayBehaviorImpl._renderOpened.apply(this,arguments)}},_renderClosed:function(){if(!this.noAnimations&&this.animationConfig.close){this.$.contentWrapper.classList.add("animating");this.playAnimation("close")}else{IronOverlayBehaviorImpl._renderClosed.apply(this,arguments)}},_onNeonAnimationFinish:function(){this.$.contentWrapper.classList.remove("animating");if(this.opened){this._finishRenderOpened()}else{this._finishRenderClosed()}},_updateAnimationConfig:function(){for(var animationNode=this.containedElement,animations=[].concat(this.openAnimationConfig||[]).concat(this.closeAnimationConfig||[]),i=0;i<animations.length;i++){animations[i].node=animationNode}this.animationConfig={open:this.openAnimationConfig,close:this.closeAnimationConfig}},_updateOverlayPosition:function(){if(this.isAttached){this.notifyResize()}},_allowOutsideScrollChanged:function(allowOutsideScroll){if(!this._readied){return}if(!allowOutsideScroll){this.scrollAction="lock"}else if(!this.scrollAction||"lock"===this.scrollAction){this.scrollAction="refit"}},_applyFocus:function(){var focusTarget=this.focusTarget||this.containedElement;if(focusTarget&&this.opened&&!this.noAutoFocus){focusTarget.focus()}else{IronOverlayBehaviorImpl._applyFocus.apply(this,arguments)}}});const IronFormElementBehavior={properties:{name:{type:String},value:{notify:!0,type:String},required:{type:Boolean,value:!1}},attached:function(){},detached:function(){}};_exports.IronFormElementBehavior=IronFormElementBehavior;var ironFormElementBehavior={IronFormElementBehavior:IronFormElementBehavior};_exports.$ironFormElementBehavior=ironFormElementBehavior;class IronMeta{constructor(options){IronMeta[" "](options);this.type=options&&options.type||"default";this.key=options&&options.key;if(options&&"value"in options){this.value=options.value}}get value(){var type=this.type,key=this.key;if(type&&key){return IronMeta.types[type]&&IronMeta.types[type][key]}}set value(value){var type=this.type,key=this.key;if(type&&key){type=IronMeta.types[type]=IronMeta.types[type]||{};if(null==value){delete type[key]}else{type[key]=value}}}get list(){var type=this.type;if(type){var items=IronMeta.types[this.type];if(!items){return[]}return Object.keys(items).map(function(key){return metaDatas[this.type][key]},this)}}byKey(key){this.key=key;return this.value}}_exports.IronMeta=IronMeta;IronMeta[" "]=function(){};IronMeta.types={};var metaDatas=IronMeta.types;Polymer({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(type,key,value){var meta=new IronMeta({type:type,key:key});if(value!==void 0&&value!==meta.value){meta.value=value}else if(this.value!==meta.value){this.value=meta.value}return meta},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(self){if(self){this.value=this}},byKey:function(key){return new IronMeta({type:this.type,key:key}).value}});var ironMeta={IronMeta:IronMeta};_exports.$ironMeta=ironMeta;Polymer({_template:html`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:Base.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(icon){var parts=(icon||"").split(":");this._iconName=parts.pop();this._iconsetName=parts.pop()||this._DEFAULT_ICONSET;this._updateIcon()},_srcChanged:function(src){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){if(this._usesIconset()){if(this._img&&this._img.parentNode){dom(this.root).removeChild(this._img)}if(""===this._iconName){if(this._iconset){this._iconset.removeIcon(this)}}else if(this._iconsetName&&this._meta){this._iconset=this._meta.byKey(this._iconsetName);if(this._iconset){this._iconset.applyIcon(this,this._iconName,this.theme);this.unlisten(window,"iron-iconset-added","_updateIcon")}else{this.listen(window,"iron-iconset-added","_updateIcon")}}}else{if(this._iconset){this._iconset.removeIcon(this)}if(!this._img){this._img=document.createElement("img");this._img.style.width="100%";this._img.style.height="100%";this._img.draggable=!1}this._img.src=this.src;dom(this.root).appendChild(this._img)}}});Polymer({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:!1},useGlobalRtlAttribute:{type:Boolean,value:!1}},created:function(){this._meta=new IronMeta({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){this._icons=this._createIconMap();return Object.keys(this._icons).map(function(n){return this.name+":"+n},this)},applyIcon:function(element,iconName){this.removeIcon(element);var svg=this._cloneIcon(iconName,this.rtlMirroring&&this._targetIsRTL(element));if(svg){var pde=dom(element.root||element);pde.insertBefore(svg,pde.childNodes[0]);return element._svgIcon=svg}return null},removeIcon:function(element){if(element._svgIcon){dom(element.root||element).removeChild(element._svgIcon);element._svgIcon=null}},_targetIsRTL:function(target){if(null==this.__targetIsRTL){if(this.useGlobalRtlAttribute){var globalElement=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL="rtl"===globalElement.getAttribute("dir")}else{if(target&&target.nodeType!==Node.ELEMENT_NODE){target=target.host}this.__targetIsRTL=target&&"rtl"===window.getComputedStyle(target).direction}}return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null;this._meta.key=this.name;this._meta.value=this;this.async(function(){this.fire("iron-iconset-added",this,{node:window})})},_createIconMap:function(){var icons=Object.create(null);dom(this).querySelectorAll("[id]").forEach(function(icon){icons[icon.id]=icon});return icons},_cloneIcon:function(id,mirrorAllowed){this._icons=this._icons||this._createIconMap();return this._prepareSvgClone(this._icons[id],this.size,mirrorAllowed)},_prepareSvgClone:function(sourceSvg,size,mirrorAllowed){if(sourceSvg){var content=sourceSvg.cloneNode(!0),svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),viewBox=content.getAttribute("viewBox")||"0 0 "+size+" "+size,cssText="pointer-events: none; display: block; width: 100%; height: 100%;";if(mirrorAllowed&&content.hasAttribute("mirror-in-rtl")){cssText+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"}svg.setAttribute("viewBox",viewBox);svg.setAttribute("preserveAspectRatio","xMidYMid meet");svg.setAttribute("focusable","false");svg.style.cssText=cssText;svg.appendChild(content).removeAttribute("id");return svg}return null}});const template$1=html`<iron-iconset-svg name="icons" size="24">
<svg><defs>
<g id="3d-rotation"><path d="M7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32zm.89-6.52c-.19 0-.37-.03-.52-.08-.16-.06-.29-.13-.4-.24-.11-.1-.2-.22-.26-.37-.06-.14-.09-.3-.09-.47h-1.3c0 .36.07.68.21.95.14.27.33.5.56.69.24.18.51.32.82.41.3.1.62.15.96.15.37 0 .72-.05 1.03-.15.32-.1.6-.25.83-.44s.42-.43.55-.72c.13-.29.2-.61.2-.97 0-.19-.02-.38-.07-.56-.05-.18-.12-.35-.23-.51-.1-.16-.24-.3-.4-.43-.17-.13-.37-.23-.61-.31.2-.09.37-.2.52-.33.15-.13.27-.27.37-.42.1-.15.17-.3.22-.46.05-.16.07-.32.07-.48 0-.36-.06-.68-.18-.96-.12-.28-.29-.51-.51-.69-.2-.19-.47-.33-.77-.43C9.1 8.05 8.76 8 8.39 8c-.36 0-.69.05-1 .16-.3.11-.57.26-.79.45-.21.19-.38.41-.51.67-.12.26-.18.54-.18.85h1.3c0-.17.03-.32.09-.45s.14-.25.25-.34c.11-.09.23-.17.38-.22.15-.05.3-.08.48-.08.4 0 .7.1.89.31.19.2.29.49.29.86 0 .18-.03.34-.08.49-.05.15-.14.27-.25.37-.11.1-.25.18-.41.24-.16.06-.36.09-.58.09H7.5v1.03h.77c.22 0 .42.02.6.07s.33.13.45.23c.12.11.22.24.29.4.07.16.1.35.1.57 0 .41-.12.72-.35.93-.23.23-.55.33-.95.33zm8.55-5.92c-.32-.33-.7-.59-1.14-.77-.43-.18-.92-.27-1.46-.27H12v8h2.3c.55 0 1.06-.09 1.51-.27.45-.18.84-.43 1.16-.76.32-.33.57-.73.74-1.19.17-.47.26-.99.26-1.57v-.4c0-.58-.09-1.1-.26-1.57-.18-.47-.43-.87-.75-1.2zm-.39 3.16c0 .42-.05.79-.14 1.13-.1.33-.24.62-.43.85-.19.23-.43.41-.71.53-.29.12-.62.18-.99.18h-.91V9.12h.97c.72 0 1.27.23 1.64.69.38.46.57 1.12.57 1.99v.4zM12 0l-.66.03 3.81 3.81 1.33-1.33c3.27 1.55 5.61 4.72 5.96 8.48h1.5C23.44 4.84 18.29 0 12 0z"></path></g>
<g id="accessibility"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"></path></g>
<g id="accessible"><circle cx="12" cy="4" r="2"></circle><path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07z"></path></g>
<g id="account-balance"><path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z"></path></g>
<g id="account-balance-wallet"><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="account-box"><path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"></path></g>
<g id="account-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></g>
<g id="add"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></g>
<g id="add-alert"><path d="M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zm8.87-4.19V11c0-3.25-2.25-5.97-5.29-6.69v-.72C13.59 2.71 12.88 2 12 2s-1.59.71-1.59 1.59v.72C7.37 5.03 5.12 7.75 5.12 11v5.82L3 18.94V20h18v-1.06l-2.12-2.12zM16 13.01h-3v3h-2v-3H8V11h3V8h2v3h3v2.01z"></path></g>
<g id="add-box"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></g>
<g id="add-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></g>
<g id="add-circle-outline"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="add-shopping-cart"><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"></path></g>
<g id="alarm"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></g>
<g id="alarm-add"><path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z"></path></g>
<g id="alarm-off"><path d="M12 6c3.87 0 7 3.13 7 7 0 .84-.16 1.65-.43 2.4l1.52 1.52c.58-1.19.91-2.51.91-3.92 0-4.97-4.03-9-9-9-1.41 0-2.73.33-3.92.91L9.6 6.43C10.35 6.16 11.16 6 12 6zm10-.28l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM2.92 2.29L1.65 3.57 2.98 4.9l-1.11.93 1.42 1.42 1.11-.94.8.8C3.83 8.69 3 10.75 3 13c0 4.97 4.02 9 9 9 2.25 0 4.31-.83 5.89-2.2l2.2 2.2 1.27-1.27L3.89 3.27l-.97-.98zm13.55 16.1C15.26 19.39 13.7 20 12 20c-3.87 0-7-3.13-7-7 0-1.7.61-3.26 1.61-4.47l9.86 9.86zM8.02 3.28L6.6 1.86l-.86.71 1.42 1.42.86-.71z"></path></g>
<g id="alarm-on"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-1.46-5.47L8.41 12.4l-1.06 1.06 3.18 3.18 6-6-1.06-1.06-4.93 4.95z"></path></g>
<g id="all-out"><path d="M16.21 4.16l4 4v-4zm4 12l-4 4h4zm-12 4l-4-4v4zm-4-12l4-4h-4zm12.95-.95c-2.73-2.73-7.17-2.73-9.9 0s-2.73 7.17 0 9.9 7.17 2.73 9.9 0 2.73-7.16 0-9.9zm-1.1 8.8c-2.13 2.13-5.57 2.13-7.7 0s-2.13-5.57 0-7.7 5.57-2.13 7.7 0 2.13 5.57 0 7.7z"></path></g>
<g id="android"><path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"></path></g>
<g id="announcement"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"></path></g>
<g id="apps"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path></g>
<g id="archive"><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"></path></g>
<g id="arrow-back"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></g>
<g id="arrow-downward"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></g>
<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>
<g id="arrow-drop-down-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z"></path></g>
<g id="arrow-drop-up"><path d="M7 14l5-5 5 5z"></path></g>
<g id="arrow-forward"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></g>
<g id="arrow-upward"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></g>
<g id="aspect-ratio"><path d="M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"></path></g>
<g id="assessment"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"></path></g>
<g id="assignment"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path></g>
<g id="assignment-ind"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"></path></g>
<g id="assignment-late"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 15h-2v-2h2v2zm0-4h-2V8h2v6zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></g>
<g id="assignment-return"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4 12h-4v3l-5-5 5-5v3h4v4z"></path></g>
<g id="assignment-returned"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 15l-5-5h3V9h4v4h3l-5 5z"></path></g>
<g id="assignment-turned-in"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></g>
<g id="attachment"><path d="M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z"></path></g>
<g id="autorenew"><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"></path></g>
<g id="backspace"><path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z"></path></g>
<g id="backup"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path></g>
<g id="block"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"></path></g>
<g id="book"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></g>
<g id="bookmark"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></g>
<g id="bookmark-border"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></g>
<g id="bug-report"><path d="M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z"></path></g>
<g id="build"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"></path></g>
<g id="cached"><path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"></path></g>
<g id="camera-enhance"><path d="M9 3L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.17L15 3H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-1l1.25-2.75L16 13l-2.75-1.25L12 9l-1.25 2.75L8 13l2.75 1.25z"></path></g>
<g id="cancel"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path></g>
<g id="card-giftcard"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path></g>
<g id="card-membership"><path d="M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 13H4v-2h16v2zm0-5H4V4h16v6z"></path></g>
<g id="card-travel"><path d="M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z"></path></g>
<g id="change-history"><path d="M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z"></path></g>
<g id="check"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></g>
<g id="check-box"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></g>
<g id="check-box-outline-blank"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="check-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></g>
<g id="chevron-left"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></g>
<g id="chevron-right"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></g>
<g id="chrome-reader-mode"><path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z"></path></g>
<g id="class"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></g>
<g id="clear"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
<g id="close"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
<g id="cloud"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"></path></g>
<g id="cloud-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14H8c-1.66 0-3-1.34-3-3s1.34-3 3-3l.14.01C8.58 8.28 10.13 7 12 7c2.21 0 4 1.79 4 4h.5c1.38 0 2.5 1.12 2.5 2.5S17.88 16 16.5 16z"></path></g>
<g id="cloud-done"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17 15.18 9l1.41 1.41L10 17z"></path></g>
<g id="cloud-download"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"></path></g>
<g id="cloud-off"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z"></path></g>
<g id="cloud-queue"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"></path></g>
<g id="cloud-upload"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path></g>
<g id="code"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path></g>
<g id="compare-arrows"><path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z"></path></g>
<g id="content-copy"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path></g>
<g id="content-cut"><path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z"></path></g>
<g id="content-paste"><path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"></path></g>
<g id="copyright"><path d="M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01-.66-.5-1.08-.66-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35.72.69 1.2.91 1.05.34 1.7.34c.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63.56-.58.74-.94.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="create"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></g>
<g id="create-new-folder"><path d="M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z"></path></g>
<g id="credit-card"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></g>
<g id="dashboard"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path></g>
<g id="date-range"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path></g>
<g id="delete"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></g>
<g id="delete-forever"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></path></g>
<g id="delete-sweep"><path d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z"></path></g>
<g id="description"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"></path></g>
<g id="dns"><path d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="done"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></g>
<g id="done-all"><path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"></path></g>
<g id="donut-large"><path d="M11 5.08V2c-5 .5-9 4.81-9 10s4 9.5 9 10v-3.08c-3-.48-6-3.4-6-6.92s3-6.44 6-6.92zM18.97 11H22c-.47-5-4-8.53-9-9v3.08C16 5.51 18.54 8 18.97 11zM13 18.92V22c5-.47 8.53-4 9-9h-3.03c-.43 3-2.97 5.49-5.97 5.92z"></path></g>
<g id="donut-small"><path d="M11 9.16V2c-5 .5-9 4.79-9 10s4 9.5 9 10v-7.16c-1-.41-2-1.52-2-2.84s1-2.43 2-2.84zM14.86 11H22c-.48-4.75-4-8.53-9-9v7.16c1 .3 1.52.98 1.86 1.84zM13 14.84V22c5-.47 8.52-4.25 9-9h-7.14c-.34.86-.86 1.54-1.86 1.84z"></path></g>
<g id="drafts"><path d="M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z"></path></g>
<g id="eject"><path d="M5 17h14v2H5zm7-12L5.33 15h13.34z"></path></g>
<g id="error"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></g>
<g id="error-outline"><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="euro-symbol"><path d="M15 18.5c-2.51 0-4.68-1.42-5.76-3.5H15v-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15V9H9.24C10.32 6.92 12.5 5.5 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3C19.41 3.87 17.3 3 15 3c-3.92 0-7.24 2.51-8.48 6H3v2h3.06c-.04.33-.06.66-.06 1 0 .34.02.67.06 1H3v2h3.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z"></path></g>
<g id="event"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path></g>
<g id="event-seat"><path d="M4 18v3h3v-3h10v3h3v-6H4zm15-8h3v3h-3zM2 10h3v3H2zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z"></path></g>
<g id="exit-to-app"><path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="expand-less"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></g>
<g id="expand-more"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></g>
<g id="explore"><path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"></path></g>
<g id="extension"><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"></path></g>
<g id="face"><path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"></path></g>
<g id="favorite"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></g>
<g id="favorite-border"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></g>
<g id="feedback"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"></path></g>
<g id="file-download"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g>
<g id="file-upload"><path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"></path></g>
<g id="filter-list"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path></g>
<g id="find-in-page"><path d="M20 19.59V8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L20 19.59zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"></path></g>
<g id="find-replace"><path d="M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05C14.68 4.78 12.93 4 11 4c-3.53 0-6.43 2.61-6.92 6H6.1c.46-2.28 2.48-4 4.9-4zm5.64 9.14c.66-.9 1.12-1.97 1.28-3.14H15.9c-.46 2.28-2.48 4-4.9 4-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05C7.32 17.22 9.07 18 11 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z"></path></g>
<g id="fingerprint"><path d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z"></path></g>
<g id="first-page"><path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"></path></g>
<g id="flag"><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path></g>
<g id="flight-land"><path d="M2.5 19h19v2h-19zm7.18-5.73l4.35 1.16 5.31 1.42c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17l1.6.43 5.31 1.43z"></path></g>
<g id="flight-takeoff"><path d="M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 1.82 3.16.77 1.33 1.6-.43 5.31-1.42 4.35-1.16L21 11.49c.81-.23 1.28-1.05 1.07-1.85z"></path></g>
<g id="flip-to-back"><path d="M9 7H7v2h2V7zm0 4H7v2h2v-2zm0-8c-1.11 0-2 .9-2 2h2V3zm4 12h-2v2h2v-2zm6-12v2h2c0-1.1-.9-2-2-2zm-6 0h-2v2h2V3zM9 17v-2H7c0 1.1.89 2 2 2zm10-4h2v-2h-2v2zm0-4h2V7h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zM5 7H3v12c0 1.1.89 2 2 2h12v-2H5V7zm10-2h2V3h-2v2zm0 12h2v-2h-2v2z"></path></g>
<g id="flip-to-front"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3c0 1.1.89 2 2 2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9c-1.11 0-2 .9-2 2v10c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H9V5h10v10zm-8 6h2v-2h-2v2zm-4 0h2v-2H7v2z"></path></g>
<g id="folder"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path></g>
<g id="folder-open"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"></path></g>
<g id="folder-shared"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1z"></path></g>
<g id="font-download"><path d="M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z"></path></g>
<g id="forward"><path d="M12 8V4l8 8-8 8v-4H4V8z"></path></g>
<g id="fullscreen"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path></g>
<g id="fullscreen-exit"><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"></path></g>
<g id="g-translate"><path d="M20 5h-9.12L10 2H4c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h7l1 3h8c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM7.17 14.59c-2.25 0-4.09-1.83-4.09-4.09s1.83-4.09 4.09-4.09c1.04 0 1.99.37 2.74 1.07l.07.06-1.23 1.18-.06-.05c-.29-.27-.78-.59-1.52-.59-1.31 0-2.38 1.09-2.38 2.42s1.07 2.42 2.38 2.42c1.37 0 1.96-.87 2.12-1.46H7.08V9.91h3.95l.01.07c.04.21.05.4.05.61 0 2.35-1.61 4-3.92 4zm6.03-1.71c.33.6.74 1.18 1.19 1.7l-.54.53-.65-2.23zm.77-.76h-.99l-.31-1.04h3.99s-.34 1.31-1.56 2.74c-.52-.62-.89-1.23-1.13-1.7zM21 20c0 .55-.45 1-1 1h-7l2-2-.81-2.77.92-.92L17.79 18l.73-.73-2.71-2.68c.9-1.03 1.6-2.25 1.92-3.51H19v-1.04h-3.64V9h-1.04v1.04h-1.96L11.18 6H20c.55 0 1 .45 1 1v13z"></path></g>
<g id="gavel"><path d="M1 21h12v2H1zM5.245 8.07l2.83-2.827 14.14 14.142-2.828 2.828zM12.317 1l5.657 5.656-2.83 2.83-5.654-5.66zM3.825 9.485l5.657 5.657-2.828 2.828-5.657-5.657z"></path></g>
<g id="gesture"><path d="M4.59 6.89c.7-.71 1.4-1.35 1.71-1.22.5.2 0 1.03-.3 1.52-.25.42-2.86 3.89-2.86 6.31 0 1.28.48 2.34 1.34 2.98.75.56 1.74.73 2.64.46 1.07-.31 1.95-1.4 3.06-2.77 1.21-1.49 2.83-3.44 4.08-3.44 1.63 0 1.65 1.01 1.76 1.79-3.78.64-5.38 3.67-5.38 5.37 0 1.7 1.44 3.09 3.21 3.09 1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2-2.25 0-4.18 1.91-4.94 2.84-.58.73-2.06 2.48-2.29 2.72-.25.3-.68.84-1.11.84-.45 0-.72-.83-.36-1.92.35-1.09 1.4-2.86 1.85-3.52.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3 5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93l1.75 1.71zm9.29 11.66c-.31 0-.74-.26-.74-.72 0-.6.73-2.2 2.87-2.76-.3 2.69-1.43 3.48-2.13 3.48z"></path></g>
<g id="get-app"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g>
<g id="gif"><path d="M11.5 9H13v6h-1.5zM9 9H6c-.6 0-1 .5-1 1v4c0 .5.4 1 1 1h3c.6 0 1-.5 1-1v-2H8.5v1.5h-2v-3H10V10c0-.5-.4-1-1-1zm10 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1z"></path></g>
<g id="grade"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></g>
<g id="group-work"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8zm6.5 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
<g id="help"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path></g>
<g id="help-outline"><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path></g>
<g id="highlight-off"><path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="history"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></g>
<g id="home"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></g>
<g id="hourglass-empty"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"></path></g>
<g id="hourglass-full"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z"></path></g>
<g id="http"><path d="M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5v2zm2.5-.5h1.5V15H10v-4.5h1.5V9H7v1.5zm5.5 0H14V15h1.5v-4.5H17V9h-4.5v1.5zm9-1.5H18v6h1.5v-2h2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5zm0 2.5h-2v-1h2v1z"></path></g>
<g id="https"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></g>
<g id="important-devices"><path d="M23 11.01L18 11c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-9c0-.55-.45-.99-1-.99zM23 20h-5v-7h5v7zM20 2H2C.89 2 0 2.89 0 4v12c0 1.1.89 2 2 2h7v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2V4c0-1.11-.9-2-2-2zm-8.03 7L11 6l-.97 3H7l2.47 1.76-.94 2.91 2.47-1.8 2.47 1.8-.94-2.91L15 9h-3.03z"></path></g>
<g id="inbox"><path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"></path></g>
<g id="indeterminate-check-box"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"></path></g>
<g id="info"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></g>
<g id="info-outline"><path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"></path></g>
<g id="input"><path d="M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z"></path></g>
<g id="invert-colors"><path d="M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z"></path></g>
<g id="label"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z"></path></g>
<g id="label-outline"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"></path></g>
<g id="language"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></g>
<g id="last-page"><path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"></path></g>
<g id="launch"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></g>
<g id="lightbulb-outline"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"></path></g>
<g id="line-style"><path d="M3 16h5v-2H3v2zm6.5 0h5v-2h-5v2zm6.5 0h5v-2h-5v2zM3 20h2v-2H3v2zm4 0h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM3 12h8v-2H3v2zm10 0h8v-2h-8v2zM3 4v4h18V4H3z"></path></g>
<g id="line-weight"><path d="M3 17h18v-2H3v2zm0 3h18v-1H3v1zm0-7h18v-3H3v3zm0-9v4h18V4H3z"></path></g>
<g id="link"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></g>
<g id="list"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"></path></g>
<g id="lock"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></g>
<g id="lock-open"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"></path></g>
<g id="lock-outline"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z"></path></g>
<g id="low-priority"><path d="M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z"></path></g>
<g id="loyalty"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7zm11.77 8.27L13 19.54l-4.27-4.27C8.28 14.81 8 14.19 8 13.5c0-1.38 1.12-2.5 2.5-2.5.69 0 1.32.28 1.77.74l.73.72.73-.73c.45-.45 1.08-.73 1.77-.73 1.38 0 2.5 1.12 2.5 2.5 0 .69-.28 1.32-.73 1.77z"></path></g>
<g id="mail"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></g>
<g id="markunread"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></g>
<g id="markunread-mailbox"><path d="M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"></path></g>
<g id="menu"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></g>
<g id="more-horiz"><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="more-vert"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="motorcycle"><path d="M19.44 9.03L15.41 5H11v2h3.59l2 2H5c-2.8 0-5 2.2-5 5s2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h1.65l2.77-2.77c-.21.54-.32 1.14-.32 1.77 0 2.8 2.2 5 5 5s5-2.2 5-5c0-2.65-1.97-4.77-4.56-4.97zM7.82 15C7.4 16.15 6.28 17 5 17c-1.63 0-3-1.37-3-3s1.37-3 3-3c1.28 0 2.4.85 2.82 2H5v2h2.82zM19 17c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path></g>
<g id="move-to-inbox"><path d="M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z"></path></g>
<g id="next-week"><path d="M20 7h-4V5c0-.55-.22-1.05-.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm1 13.5l-1-1 3-3-3-3 1-1 4 4-4 4z"></path></g>
<g id="note-add"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"></path></g>
<g id="offline-pin"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 16H7v-2h10v2zm-6.7-4L7 10.7l1.4-1.4 1.9 1.9 5.3-5.3L17 7.3 10.3 14z"></path></g>
<g id="opacity"><path d="M17.66 8L12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z"></path></g>
<g id="open-in-browser"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"></path></g>
<g id="open-in-new"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></g>
<g id="open-with"><path d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"></path></g>
<g id="pageview"><path d="M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.21 14.21l-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9-1.42 1.42z"></path></g>
<g id="pan-tool"><path d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"></path></g>
<g id="payment"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></g>
<g id="perm-camera-mic"><path d="M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v-2.09c-2.83-.48-5-2.94-5-5.91h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2c0 2.97-2.17 5.43-5 5.91V21h7c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-6 8c0 1.1-.9 2-2 2s-2-.9-2-2V9c0-1.1.9-2 2-2s2 .9 2 2v4z"></path></g>
<g id="perm-contact-calendar"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z"></path></g>
<g id="perm-data-setting"><path d="M18.99 11.5c.34 0 .67.03 1 .07L20 0 0 20h11.56c-.04-.33-.07-.66-.07-1 0-4.14 3.36-7.5 7.5-7.5zm3.71 7.99c.02-.16.04-.32.04-.49 0-.17-.01-.33-.04-.49l1.06-.83c.09-.08.12-.21.06-.32l-1-1.73c-.06-.11-.19-.15-.31-.11l-1.24.5c-.26-.2-.54-.37-.85-.49l-.19-1.32c-.01-.12-.12-.21-.24-.21h-2c-.12 0-.23.09-.25.21l-.19 1.32c-.3.13-.59.29-.85.49l-1.24-.5c-.11-.04-.24 0-.31.11l-1 1.73c-.06.11-.04.24.06.32l1.06.83c-.02.16-.03.32-.03.49 0 .17.01.33.03.49l-1.06.83c-.09.08-.12.21-.06.32l1 1.73c.06.11.19.15.31.11l1.24-.5c.26.2.54.37.85.49l.19 1.32c.02.12.12.21.25.21h2c.12 0 .23-.09.25-.21l.19-1.32c.3-.13.59-.29.84-.49l1.25.5c.11.04.24 0 .31-.11l1-1.73c.06-.11.03-.24-.06-.32l-1.07-.83zm-3.71 1.01c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="perm-device-information"><path d="M13 7h-2v2h2V7zm0 4h-2v6h2v-6zm4-9.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"></path></g>
<g id="perm-identity"><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path></g>
<g id="perm-media"><path d="M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z"></path></g>
<g id="perm-phone-msg"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z"></path></g>
<g id="perm-scan-wifi"><path d="M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3zm1 13h-2v-6h2v6zm-2-8V6h2v2h-2z"></path></g>
<g id="pets"><circle cx="4.5" cy="9.5" r="2.5"></circle><circle cx="9" cy="5.5" r="2.5"></circle><circle cx="15" cy="5.5" r="2.5"></circle><circle cx="19.5" cy="9.5" r="2.5"></circle><path d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"></path></g>
<g id="picture-in-picture"><path d="M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z"></path></g>
<g id="picture-in-picture-alt"><path d="M19 11h-8v6h8v-6zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H3V4.97h18v14.05z"></path></g>
<g id="play-for-work"><path d="M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5h-2zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6z"></path></g>
<g id="polymer"><path d="M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z"></path></g>
<g id="power-settings-new"><path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"></path></g>
<g id="pregnant-woman"><path d="M9 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm7 9c-.01-1.34-.83-2.51-2-3 0-1.66-1.34-3-3-3s-3 1.34-3 3v7h2v5h3v-5h3v-4z"></path></g>
<g id="print"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path></g>
<g id="query-builder"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></g>
<g id="question-answer"><path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"></path></g>
<g id="radio-button-checked"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="radio-button-unchecked"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="receipt"><path d="M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z"></path></g>
<g id="record-voice-over"><circle cx="9" cy="9" r="4"></circle><path d="M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.76-9.64l-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z"></path></g>
<g id="redeem"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path></g>
<g id="redo"><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"></path></g>
<g id="refresh"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path></g>
<g id="remove"><path d="M19 13H5v-2h14v2z"></path></g>
<g id="remove-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"></path></g>
<g id="remove-circle-outline"><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="remove-shopping-cart"><path d="M22.73 22.73L2.77 2.77 2 2l-.73-.73L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.27-1.27zM7.42 15c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h2.36l2 2H7.42zm8.13-2c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H6.54l9.01 9zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z"></path></g>
<g id="reorder"><path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"></path></g>
<g id="reply"><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path></g>
<g id="reply-all"><path d="M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path></g>
<g id="report"><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"></path></g>
<g id="report-problem"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>
<g id="restore"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></g>
<g id="restore-page"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-2 16c-2.05 0-3.81-1.24-4.58-3h1.71c.63.9 1.68 1.5 2.87 1.5 1.93 0 3.5-1.57 3.5-3.5S13.93 9.5 12 9.5c-1.35 0-2.52.78-3.1 1.9l1.6 1.6h-4V9l1.3 1.3C8.69 8.92 10.23 8 12 8c2.76 0 5 2.24 5 5s-2.24 5-5 5z"></path></g>
<g id="room"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
<g id="rounded-corner"><path d="M19 19h2v2h-2v-2zm0-2h2v-2h-2v2zM3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm0-4h2V3H3v2zm4 0h2V3H7v2zm8 16h2v-2h-2v2zm-4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-8 0h2v-2H7v2zm-4 0h2v-2H3v2zM21 8c0-2.76-2.24-5-5-5h-5v2h5c1.65 0 3 1.35 3 3v5h2V8z"></path></g>
<g id="rowing"><path d="M8.5 14.5L4 19l1.5 1.5L9 17h2l-2.5-2.5zM15 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 20.01L18 24l-2.99-3.01V19.5l-7.1-7.09c-.31.05-.61.07-.91.07v-2.16c1.66.03 3.61-.87 4.67-2.04l1.4-1.55c.19-.21.43-.38.69-.5.29-.14.62-.23.96-.23h.03C15.99 6.01 17 7.02 17 8.26v5.75c0 .84-.35 1.61-.92 2.16l-3.58-3.58v-2.27c-.63.52-1.43 1.02-2.29 1.39L16.5 18H18l3 3.01z"></path></g>
<g id="save"><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"></path></g>
<g id="schedule"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></g>
<g id="search"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></g>
<g id="select-all"><path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z"></path></g>
<g id="send"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></g>
<g id="settings"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path></g>
<g id="settings-applications"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42c-.09-.15-.05-.34.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16c-.13-.11-.17-.3-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69z"></path></g>
<g id="settings-backup-restore"><path d="M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"></path></g>
<g id="settings-bluetooth"><path d="M11 24h2v-2h-2v2zm-4 0h2v-2H7v2zm8 0h2v-2h-2v2zm2.71-18.29L12 0h-1v7.59L6.41 3 5 4.41 10.59 10 5 15.59 6.41 17 11 12.41V20h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 3.83l1.88 1.88L13 7.59V3.83zm1.88 10.46L13 16.17v-3.76l1.88 1.88z"></path></g>
<g id="settings-brightness"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02zM8 16h2.5l1.5 1.5 1.5-1.5H16v-2.5l1.5-1.5-1.5-1.5V8h-2.5L12 6.5 10.5 8H8v2.5L6.5 12 8 13.5V16zm4-7c1.66 0 3 1.34 3 3s-1.34 3-3 3V9z"></path></g>
<g id="settings-cell"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM16 .01L8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99zM16 16H8V4h8v12z"></path></g>
<g id="settings-ethernet"><path d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z"></path></g>
<g id="settings-input-antenna"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm1 9.29c.88-.39 1.5-1.26 1.5-2.29 0-1.38-1.12-2.5-2.5-2.5S9.5 10.62 9.5 12c0 1.02.62 1.9 1.5 2.29v3.3L7.59 21 9 22.41l3-3 3 3L16.41 21 13 17.59v-3.3zM12 1C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11z"></path></g>
<g id="settings-input-component"><path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"></path></g>
<g id="settings-input-composite"><path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"></path></g>
<g id="settings-input-hdmi"><path d="M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5v6l3 6v3h8v-3l3-6V7h-1zM8 4h8v3h-2V5h-1v2h-2V5h-1v2H8V4z"></path></g>
<g id="settings-input-svideo"><path d="M8 11.5c0-.83-.67-1.5-1.5-1.5S5 10.67 5 11.5 5.67 13 6.5 13 8 12.33 8 11.5zm7-5c0-.83-.67-1.5-1.5-1.5h-3C9.67 5 9 5.67 9 6.5S9.67 8 10.5 8h3c.83 0 1.5-.67 1.5-1.5zM8.5 15c-.83 0-1.5.67-1.5 1.5S7.67 18 8.5 18s1.5-.67 1.5-1.5S9.33 15 8.5 15zM12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm0 20c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9zm5.5-11c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-2 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path></g>
<g id="settings-overscan"><path d="M12.01 5.5L10 8h4l-1.99-2.5zM18 10v4l2.5-1.99L18 10zM6 10l-2.5 2.01L6 14v-4zm8 6h-4l2.01 2.5L14 16zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"></path></g>
<g id="settings-phone"><path d="M13 9h-2v2h2V9zm4 0h-2v2h2V9zm3 6.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 9v2h2V9h-2z"></path></g>
<g id="settings-power"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm2-22h-2v10h2V2zm3.56 2.44l-1.45 1.45C16.84 6.94 18 8.83 18 11c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44C5.36 5.88 4 8.28 4 11c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56zM15 24h2v-2h-2v2z"></path></g>
<g id="settings-remote"><path d="M15 9H9c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1zm-3 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM7.05 6.05l1.41 1.41C9.37 6.56 10.62 6 12 6s2.63.56 3.54 1.46l1.41-1.41C15.68 4.78 13.93 4 12 4s-3.68.78-4.95 2.05zM12 0C8.96 0 6.21 1.23 4.22 3.22l1.41 1.41C7.26 3.01 9.51 2 12 2s4.74 1.01 6.36 2.64l1.41-1.41C17.79 1.23 15.04 0 12 0z"></path></g>
<g id="settings-voice"><path d="M7 24h2v-2H7v2zm5-11c1.66 0 2.99-1.34 2.99-3L15 4c0-1.66-1.34-3-3-3S9 2.34 9 4v6c0 1.66 1.34 3 3 3zm-1 11h2v-2h-2v2zm4 0h2v-2h-2v2zm4-14h-1.7c0 3-2.54 5.1-5.3 5.1S6.7 13 6.7 10H5c0 3.41 2.72 6.23 6 6.72V20h2v-3.28c3.28-.49 6-3.31 6-6.72z"></path></g>
<g id="shop"><path d="M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zM9 18V9l7.5 4L9 18z"></path></g>
<g id="shop-two"><path d="M3 9H1v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H3V9zm15-4V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm0 12V8l5.5 3-5.5 4z"></path></g>
<g id="shopping-basket"><path d="M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="shopping-cart"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="sort"><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"></path></g>
<g id="speaker-notes"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 14H6v-2h2v2zm0-3H6V9h2v2zm0-3H6V6h2v2zm7 6h-5v-2h5v2zm3-3h-8V9h8v2zm0-3h-8V6h8v2z"></path></g>
<g id="speaker-notes-off"><path d="M10.54 11l-.54-.54L7.54 8 6 6.46 2.38 2.84 1.27 1.73 0 3l2.01 2.01L2 22l4-4h9l5.73 5.73L22 22.46 17.54 18l-7-7zM8 14H6v-2h2v2zm-2-3V9l2 2H6zm14-9H4.08L10 7.92V6h8v2h-7.92l1 1H18v2h-4.92l6.99 6.99C21.14 17.95 22 17.08 22 16V4c0-1.1-.9-2-2-2z"></path></g>
<g id="spellcheck"><path d="M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3zm-6.02-5L8.5 5.48 10.57 11H6.43zm15.16.59l-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13l-1.41-1.41z"></path></g>
<g id="star"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></g>
<g id="star-border"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></g>
<g id="star-half"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></g>
<g id="stars"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"></path></g>
<g id="store"><path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"></path></g>
<g id="subdirectory-arrow-left"><path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z"></path></g>
<g id="subdirectory-arrow-right"><path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"></path></g>
<g id="subject"><path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z"></path></g>
<g id="supervisor-account"><path d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"></path></g>
<g id="swap-horiz"><path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"></path></g>
<g id="swap-vert"><path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"></path></g>
<g id="swap-vertical-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6.5 9L10 5.5 13.5 9H11v4H9V9H6.5zm11 6L14 18.5 10.5 15H13v-4h2v4h2.5z"></path></g>
<g id="system-update-alt"><path d="M12 16.5l4-4h-3v-9h-2v9H8l4 4zm9-13h-6v1.99h6v14.03H3V5.49h6V3.5H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2z"></path></g>
<g id="tab"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z"></path></g>
<g id="tab-unselected"><path d="M1 9h2V7H1v2zm0 4h2v-2H1v2zm0-8h2V3c-1.1 0-2 .9-2 2zm8 16h2v-2H9v2zm-8-4h2v-2H1v2zm2 4v-2H1c0 1.1.9 2 2 2zM21 3h-8v6h10V5c0-1.1-.9-2-2-2zm0 14h2v-2h-2v2zM9 5h2V3H9v2zM5 21h2v-2H5v2zM5 5h2V3H5v2zm16 16c1.1 0 2-.9 2-2h-2v2zm0-8h2v-2h-2v2zm-8 8h2v-2h-2v2zm4 0h2v-2h-2v2z"></path></g>
<g id="text-format"><path d="M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z"></path></g>
<g id="theaters"><path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path></g>
<g id="thumb-down"><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"></path></g>
<g id="thumb-up"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path></g>
<g id="thumbs-up-down"><path d="M12 6c0-.55-.45-1-1-1H5.82l.66-3.18.02-.23c0-.31-.13-.59-.33-.8L5.38 0 .44 4.94C.17 5.21 0 5.59 0 6v6.5c0 .83.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.91l2.26-5.29c.07-.17.11-.36.11-.55V6zm10.5 4h-6.75c-.62 0-1.15.38-1.38.91l-2.26 5.29c-.07.17-.11.36-.11.55V18c0 .55.45 1 1 1h5.18l-.66 3.18-.02.24c0 .31.13.59.33.8l.79.78 4.94-4.94c.27-.27.44-.65.44-1.06v-6.5c0-.83-.67-1.5-1.5-1.5z"></path></g>
<g id="timeline"><path d="M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z"></path></g>
<g id="toc"><path d="M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z"></path></g>
<g id="today"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path></g>
<g id="toll"><path d="M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM3 12c0-2.61 1.67-4.83 4-5.65V4.26C3.55 5.15 1 8.27 1 12s2.55 6.85 6 7.74v-2.09c-2.33-.82-4-3.04-4-5.65z"></path></g>
<g id="touch-app"><path d="M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z"></path></g>
<g id="track-changes"><path d="M19.07 4.93l-1.41 1.41C19.1 7.79 20 9.79 20 12c0 4.42-3.58 8-8 8s-8-3.58-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12c0 3.31 2.69 6 6 6s6-2.69 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V2h-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-2.76-1.12-5.26-2.93-7.07z"></path></g>
<g id="translate"><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"></path></g>
<g id="trending-down"><path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"></path></g>
<g id="trending-flat"><path d="M22 12l-4-4v3H3v2h15v3z"></path></g>
<g id="trending-up"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path></g>
<g id="turned-in"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></g>
<g id="turned-in-not"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></g>
<g id="unarchive"><path d="M20.55 5.22l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.15.55L3.46 5.22C3.17 5.57 3 6.01 3 6.5V19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.49-.17-.93-.45-1.28zM12 9.5l5.5 5.5H14v2h-4v-2H6.5L12 9.5zM5.12 5l.82-1h12l.93 1H5.12z"></path></g>
<g id="undo"><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"></path></g>
<g id="unfold-less"><path d="M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z"></path></g>
<g id="unfold-more"><path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"></path></g>
<g id="update"><path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"></path></g>
<g id="verified-user"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></g>
<g id="view-agenda"><path d="M20 13H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm0-10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"></path></g>
<g id="view-array"><path d="M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z"></path></g>
<g id="view-carousel"><path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"></path></g>
<g id="view-column"><path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"></path></g>
<g id="view-day"><path d="M2 21h19v-3H2v3zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 3v3h19V3H2z"></path></g>
<g id="view-headline"><path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"></path></g>
<g id="view-list"><path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"></path></g>
<g id="view-module"><path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"></path></g>
<g id="view-quilt"><path d="M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z"></path></g>
<g id="view-stream"><path d="M4 18h17v-6H4v6zM4 5v6h17V5H4z"></path></g>
<g id="view-week"><path d="M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm14 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-7 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"></path></g>
<g id="visibility"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></g>
<g id="visibility-off"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path></g>
<g id="warning"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>
<g id="watch-later"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"></path></g>
<g id="weekend"><path d="M21 10c-1.1 0-2 .9-2 2v3H5v-3c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm-3-5H6c-1.1 0-2 .9-2 2v2.15c1.16.41 2 1.51 2 2.82V14h12v-2.03c0-1.3.84-2.4 2-2.82V7c0-1.1-.9-2-2-2z"></path></g>
<g id="work"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path></g>
<g id="youtube-searched-for"><path d="M17.01 14h-.8l-.27-.27c.98-1.14 1.57-2.61 1.57-4.23 0-3.59-2.91-6.5-6.5-6.5s-6.5 3-6.5 6.5H2l3.84 4 4.16-4H6.51C6.51 7 8.53 5 11.01 5s4.5 2.01 4.5 4.5c0 2.48-2.02 4.5-4.5 4.5-.65 0-1.26-.14-1.82-.38L7.71 15.1c.97.57 2.09.9 3.3.9 1.61 0 3.08-.59 4.22-1.57l.27.27v.79l5.01 4.99L22 19l-4.99-5z"></path></g>
<g id="zoom-in"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm2.5-4h-2v2H9v-2H7V9h2V7h1v2h2v1z"></path></g>
<g id="zoom-out"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(template$1.content);let IronValidatableBehaviorMeta=null;_exports.IronValidatableBehaviorMeta=IronValidatableBehaviorMeta;const IronValidatableBehavior={properties:{validator:{type:String},invalid:{notify:!0,reflectToAttribute:!0,type:Boolean,value:!1,observer:"_invalidChanged"}},registered:function(){_exports.IronValidatableBehaviorMeta=IronValidatableBehaviorMeta=new IronMeta({type:"validator"})},_invalidChanged:function(){if(this.invalid){this.setAttribute("aria-invalid","true")}else{this.removeAttribute("aria-invalid")}},get _validator(){return IronValidatableBehaviorMeta&&IronValidatableBehaviorMeta.byKey(this.validator)},hasValidator:function(){return null!=this._validator},validate:function(value){if(value===void 0&&this.value!==void 0)this.invalid=!this._getValidity(this.value);else this.invalid=!this._getValidity(value);return!this.invalid},_getValidity:function(value){if(this.hasValidator()){return this._validator.validate(value)}return!0}};_exports.IronValidatableBehavior=IronValidatableBehavior;var ironValidatableBehavior={get IronValidatableBehaviorMeta(){return IronValidatableBehaviorMeta},IronValidatableBehavior:IronValidatableBehavior};_exports.$ironValidatableBehavior=ironValidatableBehavior;Polymer({_template:html`
    <style>
      :host {
        display: inline-block;
      }
    </style>
    <slot id="content"></slot>
`,is:"iron-input",behaviors:[IronValidatableBehavior],properties:{bindValue:{type:String,value:""},value:{type:String,computed:"_computeValue(bindValue)"},allowedPattern:{type:String},autoValidate:{type:Boolean,value:!1},_inputElement:Object},observers:["_bindValueChanged(bindValue, _inputElement)"],listeners:{input:"_onInput",keypress:"_onKeypress"},created:function(){IronA11yAnnouncer.requestAvailability();this._previousValidInput="";this._patternAlreadyChecked=!1},attached:function(){this._observer=dom(this).observeNodes(function(info){this._initSlottedInput()}.bind(this))},detached:function(){if(this._observer){dom(this).unobserveNodes(this._observer);this._observer=null}},get inputElement(){return this._inputElement},_initSlottedInput:function(){this._inputElement=this.getEffectiveChildren()[0];if(this.inputElement&&this.inputElement.value){this.bindValue=this.inputElement.value}this.fire("iron-input-ready")},get _patternRegExp(){var pattern;if(this.allowedPattern){pattern=new RegExp(this.allowedPattern)}else{switch(this.inputElement.type){case"number":pattern=/[0-9.,e-]/;break;}}return pattern},_bindValueChanged:function(bindValue,inputElement){if(!inputElement){return}if(bindValue===void 0){inputElement.value=null}else if(bindValue!==inputElement.value){this.inputElement.value=bindValue}if(this.autoValidate){this.validate()}this.fire("bind-value-changed",{value:bindValue})},_onInput:function(){if(this.allowedPattern&&!this._patternAlreadyChecked){var valid=this._checkPatternValidity();if(!valid){this._announceInvalidCharacter("Invalid string of characters not entered.");this.inputElement.value=this._previousValidInput}}this.bindValue=this._previousValidInput=this.inputElement.value;this._patternAlreadyChecked=!1},_isPrintable:function(event){var anyNonPrintable=8==event.keyCode||9==event.keyCode||13==event.keyCode||27==event.keyCode,mozNonPrintable=19==event.keyCode||20==event.keyCode||45==event.keyCode||46==event.keyCode||144==event.keyCode||145==event.keyCode||32<event.keyCode&&41>event.keyCode||111<event.keyCode&&124>event.keyCode;return!anyNonPrintable&&!(0==event.charCode&&mozNonPrintable)},_onKeypress:function(event){if(!this.allowedPattern&&"number"!==this.inputElement.type){return}var regexp=this._patternRegExp;if(!regexp){return}if(event.metaKey||event.ctrlKey||event.altKey){return}this._patternAlreadyChecked=!0;var thisChar=_StringfromCharCode(event.charCode);if(this._isPrintable(event)&&!regexp.test(thisChar)){event.preventDefault();this._announceInvalidCharacter("Invalid character "+thisChar+" not entered.")}},_checkPatternValidity:function(){var regexp=this._patternRegExp;if(!regexp){return!0}for(var i=0;i<this.inputElement.value.length;i++){if(!regexp.test(this.inputElement.value[i])){return!1}}return!0},validate:function(){if(!this.inputElement){this.invalid=!1;return!0}var valid=this.inputElement.checkValidity();if(valid){if(this.required&&""===this.bindValue){valid=!1}else if(this.hasValidator()){valid=IronValidatableBehavior.validate.call(this,this.bindValue)}}this.invalid=!valid;this.fire("iron-input-validate");return valid},_announceInvalidCharacter:function(message){this.fire("iron-announce",{text:message})},_computeValue:function(bindValue){return bindValue}});Polymer({is:"iron-localstorage",properties:{name:{type:String,value:""},value:{type:Object,notify:!0},useRaw:{type:Boolean,value:!1},autoSaveDisabled:{type:Boolean,value:!1},errorMessage:{type:String,notify:!0},_loaded:{type:Boolean,value:!1}},observers:["_debounceReload(name,useRaw)","_trySaveValue(autoSaveDisabled)","_trySaveValue(value.*)"],ready:function(){this._boundHandleStorage=this._handleStorage.bind(this)},attached:function(){window.addEventListener("storage",this._boundHandleStorage)},detached:function(){window.removeEventListener("storage",this._boundHandleStorage)},_handleStorage:function(ev){if(ev.key==this.name){this._load(!0)}},_trySaveValue:function(){if(this.autoSaveDisabled===void 0||this._doNotSave){return}if(this._loaded&&!this.autoSaveDisabled){this.debounce("save",this.save)}},_debounceReload:function(){if(this.name!==void 0&&this.useRaw!==void 0){this.debounce("reload",this.reload)}},reload:function(){this._loaded=!1;this._load()},_load:function(externalChange){try{var v=window.localStorage.getItem(this.name)}catch(ex){this.errorMessage=ex.message;this._error("Could not save to localStorage.  Try enabling cookies for this page.",ex)}if(null===v){this._loaded=!0;this._doNotSave=!0;this.value=null;this._doNotSave=!1;this.fire("iron-localstorage-load-empty",{externalChange:externalChange},{composed:!0})}else{if(!this.useRaw){try{v=JSON.parse(v)}catch(x){this.errorMessage="Could not parse local storage value";Base._error("could not parse local storage value",v);v=null}}this._loaded=!0;this._doNotSave=!0;this.value=v;this._doNotSave=!1;this.fire("iron-localstorage-load",{externalChange:externalChange},{composed:!0})}},save:function(){var v=this.useRaw?this.value:JSON.stringify(this.value);try{if(null===this.value||this.value===void 0){window.localStorage.removeItem(this.name)}else{window.localStorage.setItem(this.name,v)}}catch(ex){this.errorMessage=ex.message;Base._error("Could not save to localStorage. Incognito mode may be blocking this action",ex)}}});class IronSelection{constructor(selectCallback){this.selection=[];this.selectCallback=selectCallback}get(){return this.multi?this.selection.slice():this.selection[0]}clear(excludes){this.selection.slice().forEach(function(item){if(!excludes||0>excludes.indexOf(item)){this.setItemSelected(item,!1)}},this)}isSelected(item){return 0<=this.selection.indexOf(item)}setItemSelected(item,isSelected){if(null!=item){if(isSelected!==this.isSelected(item)){if(isSelected){this.selection.push(item)}else{var i=this.selection.indexOf(item);if(0<=i){this.selection.splice(i,1)}}if(this.selectCallback){this.selectCallback(item,isSelected)}}}}select(item){if(this.multi){this.toggle(item)}else if(this.get()!==item){this.setItemSelected(this.get(),!1);this.setItemSelected(item,!0)}}toggle(item){this.setItemSelected(item,!this.isSelected(item))}}_exports.IronSelection=IronSelection;var ironSelection={IronSelection:IronSelection};_exports.$ironSelection=ironSelection;const IronSelectableBehavior={properties:{attrForSelected:{type:String,value:null},selected:{type:String,notify:!0},selectedItem:{type:Object,readOnly:!0,notify:!0},activateEvent:{type:String,value:"tap",observer:"_activateEventChanged"},selectable:String,selectedClass:{type:String,value:"iron-selected"},selectedAttribute:{type:String,value:null},fallbackSelection:{type:String,value:null},items:{type:Array,readOnly:!0,notify:!0,value:function(){return[]}},_excludedLocalNames:{type:Object,value:function(){return{template:1,"dom-bind":1,"dom-if":1,"dom-repeat":1}}}},observers:["_updateAttrForSelected(attrForSelected)","_updateSelected(selected)","_checkFallback(fallbackSelection)"],created:function(){this._bindFilterItem=this._filterItem.bind(this);this._selection=new IronSelection(this._applySelection.bind(this))},attached:function(){this._observer=this._observeItems(this);this._addListener(this.activateEvent)},detached:function(){if(this._observer){dom(this).unobserveNodes(this._observer)}this._removeListener(this.activateEvent)},indexOf:function(item){return this.items?this.items.indexOf(item):-1},select:function(value){this.selected=value},selectPrevious:function(){var length=this.items.length,index=length-1;if(this.selected!==void 0){index=(+this._valueToIndex(this.selected)-1+length)%length}this.selected=this._indexToValue(index)},selectNext:function(){var index=0;if(this.selected!==void 0){index=(+this._valueToIndex(this.selected)+1)%this.items.length}this.selected=this._indexToValue(index)},selectIndex:function(index){this.select(this._indexToValue(index))},forceSynchronousItemUpdate:function(){if(this._observer&&"function"===typeof this._observer.flush){this._observer.flush()}else{this._updateItems()}},get _shouldUpdateSelection(){return null!=this.selected},_checkFallback:function(){this._updateSelected()},_addListener:function(eventName){this.listen(this,eventName,"_activateHandler")},_removeListener:function(eventName){this.unlisten(this,eventName,"_activateHandler")},_activateEventChanged:function(eventName,old){this._removeListener(old);this._addListener(eventName)},_updateItems:function(){var nodes=dom(this).queryDistributedElements(this.selectable||"*");nodes=Array.prototype.filter.call(nodes,this._bindFilterItem);this._setItems(nodes)},_updateAttrForSelected:function(){if(this.selectedItem){this.selected=this._valueForItem(this.selectedItem)}},_updateSelected:function(){this._selectSelected(this.selected)},_selectSelected:function(selected){if(!this.items){return}var item=this._valueToItem(this.selected);if(item){this._selection.select(item)}else{this._selection.clear()}if(this.fallbackSelection&&this.items.length&&this._selection.get()===void 0){this.selected=this.fallbackSelection}},_filterItem:function(node){return!this._excludedLocalNames[node.localName]},_valueToItem:function(value){return null==value?null:this.items[this._valueToIndex(value)]},_valueToIndex:function(value){if(this.attrForSelected){for(var i=0,item;item=this.items[i];i++){if(this._valueForItem(item)==value){return i}}}else{return+value}},_indexToValue:function(index){if(this.attrForSelected){var item=this.items[index];if(item){return this._valueForItem(item)}}else{return index}},_valueForItem:function(item){if(!item){return null}if(!this.attrForSelected){var i=this.indexOf(item);return-1===i?null:i}var propValue=item[dashToCamelCase(this.attrForSelected)];return propValue!=void 0?propValue:item.getAttribute(this.attrForSelected)},_applySelection:function(item,isSelected){if(this.selectedClass){this.toggleClass(this.selectedClass,isSelected,item)}if(this.selectedAttribute){this.toggleAttribute(this.selectedAttribute,isSelected,item)}this._selectionChange();this.fire("iron-"+(isSelected?"select":"deselect"),{item:item})},_selectionChange:function(){this._setSelectedItem(this._selection.get())},_observeItems:function(node){return dom(node).observeNodes(function(mutation){this._updateItems();this._updateSelected();this.fire("iron-items-changed",mutation,{bubbles:!1,cancelable:!1})})},_activateHandler:function(e){var t=e.target,items=this.items;while(t&&t!=this){var i=items.indexOf(t);if(0<=i){var value=this._indexToValue(i);this._itemActivate(value,t);return}t=t.parentNode}},_itemActivate:function(value,item){if(!this.fire("iron-activate",{selected:value,item:item},{cancelable:!0}).defaultPrevented){this.select(value)}}};_exports.IronSelectableBehavior=IronSelectableBehavior;var ironSelectable={IronSelectableBehavior:IronSelectableBehavior};_exports.$ironSelectable=ironSelectable;const IronMultiSelectableBehaviorImpl={properties:{multi:{type:Boolean,value:!1,observer:"multiChanged"},selectedValues:{type:Array,notify:!0,value:function(){return[]}},selectedItems:{type:Array,readOnly:!0,notify:!0,value:function(){return[]}}},observers:["_updateSelected(selectedValues.splices)"],select:function(value){if(this.multi){this._toggleSelected(value)}else{this.selected=value}},multiChanged:function(multi){this._selection.multi=multi;this._updateSelected()},get _shouldUpdateSelection(){return null!=this.selected||null!=this.selectedValues&&this.selectedValues.length},_updateAttrForSelected:function(){if(!this.multi){IronSelectableBehavior._updateAttrForSelected.apply(this)}else if(this.selectedItems&&0<this.selectedItems.length){this.selectedValues=this.selectedItems.map(function(selectedItem){return this._indexToValue(this.indexOf(selectedItem))},this).filter(function(unfilteredValue){return null!=unfilteredValue},this)}},_updateSelected:function(){if(this.multi){this._selectMulti(this.selectedValues)}else{this._selectSelected(this.selected)}},_selectMulti:function(values){values=values||[];var selectedItems=(this._valuesToItems(values)||[]).filter(function(item){return null!==item&&item!==void 0});this._selection.clear(selectedItems);for(var i=0;i<selectedItems.length;i++){this._selection.setItemSelected(selectedItems[i],!0)}if(this.fallbackSelection&&!this._selection.get().length){var fallback=this._valueToItem(this.fallbackSelection);if(fallback){this.select(this.fallbackSelection)}}},_selectionChange:function(){var s=this._selection.get();if(this.multi){this._setSelectedItems(s);this._setSelectedItem(s.length?s[0]:null)}else{if(null!==s&&s!==void 0){this._setSelectedItems([s]);this._setSelectedItem(s)}else{this._setSelectedItems([]);this._setSelectedItem(null)}}},_toggleSelected:function(value){var i=this.selectedValues.indexOf(value),unselected=0>i;if(unselected){this.push("selectedValues",value)}else{this.splice("selectedValues",i,1)}},_valuesToItems:function(values){return null==values?null:values.map(function(value){return this._valueToItem(value)},this)}};_exports.IronMultiSelectableBehaviorImpl=IronMultiSelectableBehaviorImpl;const IronMultiSelectableBehavior=[IronSelectableBehavior,IronMultiSelectableBehaviorImpl];_exports.IronMultiSelectableBehavior=IronMultiSelectableBehavior;var ironMultiSelectable={IronMultiSelectableBehaviorImpl:IronMultiSelectableBehaviorImpl,IronMultiSelectableBehavior:IronMultiSelectableBehavior};_exports.$ironMultiSelectable=ironMultiSelectable;const IronMenuBehaviorImpl={properties:{focusedItem:{observer:"_focusedItemChanged",readOnly:!0,type:Object},attrForItemTitle:{type:String},disabled:{type:Boolean,value:!1,observer:"_disabledChanged"}},_MODIFIER_KEYS:["Alt","AltGraph","CapsLock","Control","Fn","FnLock","Hyper","Meta","NumLock","OS","ScrollLock","Shift","Super","Symbol","SymbolLock"],_SEARCH_RESET_TIMEOUT_MS:1e3,_previousTabIndex:0,hostAttributes:{role:"menu"},observers:["_updateMultiselectable(multi)"],listeners:{focus:"_onFocus",keydown:"_onKeydown","iron-items-changed":"_onIronItemsChanged"},keyBindings:{up:"_onUpKey",down:"_onDownKey",esc:"_onEscKey","shift+tab:keydown":"_onShiftTabDown"},attached:function(){this._resetTabindices()},select:function(value){if(this._defaultFocusAsync){this.cancelAsync(this._defaultFocusAsync);this._defaultFocusAsync=null}var item=this._valueToItem(value);if(item&&item.hasAttribute("disabled"))return;this._setFocusedItem(item);IronMultiSelectableBehaviorImpl.select.apply(this,arguments)},_resetTabindices:function(){var firstSelectedItem=this.multi?this.selectedItems&&this.selectedItems[0]:this.selectedItem;this.items.forEach(function(item){item.setAttribute("tabindex",item===firstSelectedItem?"0":"-1");item.setAttribute("aria-selected",this._selection.isSelected(item))},this)},_updateMultiselectable:function(multi){if(multi){this.setAttribute("aria-multiselectable","true")}else{this.removeAttribute("aria-multiselectable")}},_focusWithKeyboardEvent:function(event){if(-1!==this._MODIFIER_KEYS.indexOf(event.key))return;this.cancelDebouncer("_clearSearchText");var searchText=this._searchText||"",key=event.key&&1==event.key.length?event.key:_StringfromCharCode(event.keyCode);searchText+=key.toLocaleLowerCase();for(var searchLength=searchText.length,i=0,item;item=this.items[i];i++){if(item.hasAttribute("disabled")){continue}var attr=this.attrForItemTitle||"textContent",title=(item[attr]||item.getAttribute(attr)||"").trim();if(title.length<searchLength){continue}if(title.slice(0,searchLength).toLocaleLowerCase()==searchText){this._setFocusedItem(item);break}}this._searchText=searchText;this.debounce("_clearSearchText",this._clearSearchText,this._SEARCH_RESET_TIMEOUT_MS)},_clearSearchText:function(){this._searchText=""},_focusPrevious:function(){for(var length=this.items.length,curFocusIndex=+this.indexOf(this.focusedItem),i=1,item;i<length+1;i++){item=this.items[(curFocusIndex-i+length)%length];if(!item.hasAttribute("disabled")){var owner=dom(item).getOwnerRoot()||document;this._setFocusedItem(item);if(dom(owner).activeElement==item){return}}}},_focusNext:function(){for(var length=this.items.length,curFocusIndex=+this.indexOf(this.focusedItem),i=1,item;i<length+1;i++){item=this.items[(curFocusIndex+i)%length];if(!item.hasAttribute("disabled")){var owner=dom(item).getOwnerRoot()||document;this._setFocusedItem(item);if(dom(owner).activeElement==item){return}}}},_applySelection:function(item,isSelected){if(isSelected){item.setAttribute("aria-selected","true")}else{item.setAttribute("aria-selected","false")}IronSelectableBehavior._applySelection.apply(this,arguments)},_focusedItemChanged:function(focusedItem,old){old&&old.setAttribute("tabindex","-1");if(focusedItem&&!focusedItem.hasAttribute("disabled")&&!this.disabled){focusedItem.setAttribute("tabindex","0");focusedItem.focus()}},_onIronItemsChanged:function(event){if(event.detail.addedNodes.length){this._resetTabindices()}},_onShiftTabDown:function(event){var oldTabIndex=this.getAttribute("tabindex");IronMenuBehaviorImpl._shiftTabPressed=!0;this._setFocusedItem(null);this.setAttribute("tabindex","-1");this.async(function(){this.setAttribute("tabindex",oldTabIndex);IronMenuBehaviorImpl._shiftTabPressed=!1},1)},_onFocus:function(event){if(IronMenuBehaviorImpl._shiftTabPressed){return}var rootTarget=dom(event).rootTarget;if(rootTarget!==this&&"undefined"!==typeof rootTarget.tabIndex&&!this.isLightDescendant(rootTarget)){return}this._defaultFocusAsync=this.async(function(){var firstSelectedItem=this.multi?this.selectedItems&&this.selectedItems[0]:this.selectedItem;this._setFocusedItem(null);if(firstSelectedItem){this._setFocusedItem(firstSelectedItem)}else if(this.items[0]){this._focusNext()}})},_onUpKey:function(event){this._focusPrevious();event.detail.keyboardEvent.preventDefault()},_onDownKey:function(event){this._focusNext();event.detail.keyboardEvent.preventDefault()},_onEscKey:function(event){var focusedItem=this.focusedItem;if(focusedItem){focusedItem.blur()}},_onKeydown:function(event){if(!this.keyboardEventMatchesKeys(event,"up down esc")){this._focusWithKeyboardEvent(event)}event.stopPropagation()},_activateHandler:function(event){IronSelectableBehavior._activateHandler.call(this,event);event.stopPropagation()},_disabledChanged:function(disabled){if(disabled){this._previousTabIndex=this.hasAttribute("tabindex")?this.tabIndex:0;this.removeAttribute("tabindex")}else if(!this.hasAttribute("tabindex")){this.setAttribute("tabindex",this._previousTabIndex)}}};_exports.IronMenuBehaviorImpl=IronMenuBehaviorImpl;IronMenuBehaviorImpl._shiftTabPressed=!1;const IronMenuBehavior=[IronMultiSelectableBehavior,IronA11yKeysBehavior,IronMenuBehaviorImpl];_exports.IronMenuBehavior=IronMenuBehavior;var ironMenuBehavior={IronMenuBehaviorImpl:IronMenuBehaviorImpl,IronMenuBehavior:IronMenuBehavior};_exports.$ironMenuBehavior=ironMenuBehavior;Polymer({_template:html`
    <style>
      :host {
        display: block;
      }

      :host > ::slotted(:not(slot):not(.iron-selected)) {
        display: none !important;
      }
    </style>

    <slot></slot>
`,is:"iron-pages",behaviors:[IronResizableBehavior,IronSelectableBehavior],properties:{activateEvent:{type:String,value:null}},observers:["_selectedPageChanged(selected)"],_selectedPageChanged:function(selected,old){this.async(this.notifyResize)}});Polymer({is:"iron-selector",behaviors:[IronMultiSelectableBehavior]});const NeonAnimationBehavior={properties:{animationTiming:{type:Object,value:function(){return{duration:500,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"both"}}}},isNeonAnimation:!0,created:function(){if(!document.body.animate){console.warn("No web animations detected. This element will not"+" function without a web animations polyfill.")}},timingFromConfig:function(config){if(config.timing){for(var property in config.timing){this.animationTiming[property]=config.timing[property]}}return this.animationTiming},setPrefixedProperty:function(node,property,value){for(var map={transform:["webkitTransform"],transformOrigin:["mozTransformOrigin","webkitTransformOrigin"]},prefixes=map[property],prefix,index=0;prefix=prefixes[index];index++){node.style[prefix]=value}node.style[property]=value},complete:function(config){}};_exports.NeonAnimationBehavior=NeonAnimationBehavior;var neonAnimationBehavior={NeonAnimationBehavior:NeonAnimationBehavior};_exports.$neonAnimationBehavior=neonAnimationBehavior;Polymer({is:"fade-in-animation",behaviors:[NeonAnimationBehavior],configure:function(config){var node=config.node;this._effect=new KeyframeEffect(node,[{opacity:"0"},{opacity:"1"}],this.timingFromConfig(config));return this._effect}});Polymer({is:"fade-out-animation",behaviors:[NeonAnimationBehavior],configure:function(config){var node=config.node;this._effect=new KeyframeEffect(node,[{opacity:"1"},{opacity:"0"}],this.timingFromConfig(config));return this._effect}});var Utility={distance:function(x1,y1,x2,y2){var xDelta=x1-x2,yDelta=y1-y2;return _Mathsqrt(xDelta*xDelta+yDelta*yDelta)},now:window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now};function ElementMetrics(element){this.element=element;this.width=this.boundingRect.width;this.height=this.boundingRect.height;this.size=_Mathmax(this.width,this.height)}ElementMetrics.prototype={get boundingRect(){return this.element.getBoundingClientRect()},furthestCornerDistanceFrom:function(x,y){var topLeft=Utility.distance(x,y,0,0),topRight=Utility.distance(x,y,this.width,0),bottomLeft=Utility.distance(x,y,0,this.height),bottomRight=Utility.distance(x,y,this.width,this.height);return _Mathmax(topLeft,topRight,bottomLeft,bottomRight)}};function Ripple(element){this.element=element;this.color=window.getComputedStyle(element).color;this.wave=document.createElement("div");this.waveContainer=document.createElement("div");this.wave.style.backgroundColor=this.color;this.wave.classList.add("wave");this.waveContainer.classList.add("wave-container");dom(this.waveContainer).appendChild(this.wave);this.resetInteractionState()}Ripple.MAX_RADIUS=300;Ripple.prototype={get recenters(){return this.element.recenters},get center(){return this.element.center},get mouseDownElapsed(){var elapsed;if(!this.mouseDownStart){return 0}elapsed=Utility.now()-this.mouseDownStart;if(this.mouseUpStart){elapsed-=this.mouseUpElapsed}return elapsed},get mouseUpElapsed(){return this.mouseUpStart?Utility.now()-this.mouseUpStart:0},get mouseDownElapsedSeconds(){return this.mouseDownElapsed/1e3},get mouseUpElapsedSeconds(){return this.mouseUpElapsed/1e3},get mouseInteractionSeconds(){return this.mouseDownElapsedSeconds+this.mouseUpElapsedSeconds},get initialOpacity(){return this.element.initialOpacity},get opacityDecayVelocity(){return this.element.opacityDecayVelocity},get radius(){var width2=this.containerMetrics.width*this.containerMetrics.width,height2=this.containerMetrics.height*this.containerMetrics.height,waveRadius=1.1*_Mathmin(_Mathsqrt(width2+height2),Ripple.MAX_RADIUS)+5,duration=1.1-.2*(waveRadius/Ripple.MAX_RADIUS),timeNow=this.mouseInteractionSeconds/duration,size=waveRadius*(1-Math.pow(80,-timeNow));return _Mathabs(size)},get opacity(){if(!this.mouseUpStart){return this.initialOpacity}return _Mathmax(0,this.initialOpacity-this.mouseUpElapsedSeconds*this.opacityDecayVelocity)},get outerOpacity(){var outerOpacity=.3*this.mouseUpElapsedSeconds,waveOpacity=this.opacity;return _Mathmax(0,_Mathmin(outerOpacity,waveOpacity))},get isOpacityFullyDecayed(){return .01>this.opacity&&this.radius>=_Mathmin(this.maxRadius,Ripple.MAX_RADIUS)},get isRestingAtMaxRadius(){return this.opacity>=this.initialOpacity&&this.radius>=_Mathmin(this.maxRadius,Ripple.MAX_RADIUS)},get isAnimationComplete(){return this.mouseUpStart?this.isOpacityFullyDecayed:this.isRestingAtMaxRadius},get translationFraction(){return _Mathmin(1,2*(this.radius/this.containerMetrics.size)/1.4142135623730951)},get xNow(){if(this.xEnd){return this.xStart+this.translationFraction*(this.xEnd-this.xStart)}return this.xStart},get yNow(){if(this.yEnd){return this.yStart+this.translationFraction*(this.yEnd-this.yStart)}return this.yStart},get isMouseDown(){return this.mouseDownStart&&!this.mouseUpStart},resetInteractionState:function(){this.maxRadius=0;this.mouseDownStart=0;this.mouseUpStart=0;this.xStart=0;this.yStart=0;this.xEnd=0;this.yEnd=0;this.slideDistance=0;this.containerMetrics=new ElementMetrics(this.element)},draw:function(){var scale,dx,dy;this.wave.style.opacity=this.opacity;scale=this.radius/(this.containerMetrics.size/2);dx=this.xNow-this.containerMetrics.width/2;dy=this.yNow-this.containerMetrics.height/2;this.waveContainer.style.webkitTransform="translate("+dx+"px, "+dy+"px)";this.waveContainer.style.transform="translate3d("+dx+"px, "+dy+"px, 0)";this.wave.style.webkitTransform="scale("+scale+","+scale+")";this.wave.style.transform="scale3d("+scale+","+scale+",1)"},downAction:function(event){var xCenter=this.containerMetrics.width/2,yCenter=this.containerMetrics.height/2;this.resetInteractionState();this.mouseDownStart=Utility.now();if(this.center){this.xStart=xCenter;this.yStart=yCenter;this.slideDistance=Utility.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)}else{this.xStart=event?event.detail.x-this.containerMetrics.boundingRect.left:this.containerMetrics.width/2;this.yStart=event?event.detail.y-this.containerMetrics.boundingRect.top:this.containerMetrics.height/2}if(this.recenters){this.xEnd=xCenter;this.yEnd=yCenter;this.slideDistance=Utility.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)}this.maxRadius=this.containerMetrics.furthestCornerDistanceFrom(this.xStart,this.yStart);this.waveContainer.style.top=(this.containerMetrics.height-this.containerMetrics.size)/2+"px";this.waveContainer.style.left=(this.containerMetrics.width-this.containerMetrics.size)/2+"px";this.waveContainer.style.width=this.containerMetrics.size+"px";this.waveContainer.style.height=this.containerMetrics.size+"px"},upAction:function(event){if(!this.isMouseDown){return}this.mouseUpStart=Utility.now()},remove:function(){dom(this.waveContainer.parentNode).removeChild(this.waveContainer)}};Polymer({_template:html`
    <style>
      :host {
        display: block;
        position: absolute;
        border-radius: inherit;
        overflow: hidden;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        /* See PolymerElements/paper-behaviors/issues/34. On non-Chrome browsers,
         * creating a node (with a position:absolute) in the middle of an event
         * handler "interrupts" that event handler (which happens when the
         * ripple is created on demand) */
        pointer-events: none;
      }

      :host([animating]) {
        /* This resolves a rendering issue in Chrome (as of 40) where the
           ripple is not properly clipped by its parent (which may have
           rounded corners). See: http://jsbin.com/temexa/4

           Note: We only apply this style conditionally. Otherwise, the browser
           will create a new compositing layer for every ripple element on the
           page, and that would be bad. */
        -webkit-transform: translate(0, 0);
        transform: translate3d(0, 0, 0);
      }

      #background,
      #waves,
      .wave-container,
      .wave {
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      #background,
      .wave {
        opacity: 0;
      }

      #waves,
      .wave {
        overflow: hidden;
      }

      .wave-container,
      .wave {
        border-radius: 50%;
      }

      :host(.circle) #background,
      :host(.circle) #waves {
        border-radius: 50%;
      }

      :host(.circle) .wave-container {
        overflow: hidden;
      }
    </style>

    <div id="background"></div>
    <div id="waves"></div>
`,is:"paper-ripple",behaviors:[IronA11yKeysBehavior],properties:{initialOpacity:{type:Number,value:.25},opacityDecayVelocity:{type:Number,value:.8},recenters:{type:Boolean,value:!1},center:{type:Boolean,value:!1},ripples:{type:Array,value:function(){return[]}},animating:{type:Boolean,readOnly:!0,reflectToAttribute:!0,value:!1},holdDown:{type:Boolean,value:!1,observer:"_holdDownChanged"},noink:{type:Boolean,value:!1},_animating:{type:Boolean},_boundAnimate:{type:Function,value:function(){return this.animate.bind(this)}}},get target(){return this.keyEventTarget},keyBindings:{"enter:keydown":"_onEnterKeydown","space:keydown":"_onSpaceKeydown","space:keyup":"_onSpaceKeyup"},attached:function(){if(11==this.parentNode.nodeType){this.keyEventTarget=dom(this).getOwnerRoot().host}else{this.keyEventTarget=this.parentNode}var keyEventTarget=this.keyEventTarget;this.listen(keyEventTarget,"up","uiUpAction");this.listen(keyEventTarget,"down","uiDownAction")},detached:function(){this.unlisten(this.keyEventTarget,"up","uiUpAction");this.unlisten(this.keyEventTarget,"down","uiDownAction");this.keyEventTarget=null},get shouldKeepAnimating(){for(var index=0;index<this.ripples.length;++index){if(!this.ripples[index].isAnimationComplete){return!0}}return!1},simulatedRipple:function(){this.downAction(null);this.async(function(){this.upAction()},1)},uiDownAction:function(event){if(!this.noink){this.downAction(event)}},downAction:function(event){if(this.holdDown&&0<this.ripples.length){return}var ripple=this.addRipple();ripple.downAction(event);if(!this._animating){this._animating=!0;this.animate()}},uiUpAction:function(event){if(!this.noink){this.upAction(event)}},upAction:function(event){if(this.holdDown){return}this.ripples.forEach(function(ripple){ripple.upAction(event)});this._animating=!0;this.animate()},onAnimationComplete:function(){this._animating=!1;this.$.background.style.backgroundColor=null;this.fire("transitionend")},addRipple:function(){var ripple=new Ripple(this);dom(this.$.waves).appendChild(ripple.waveContainer);this.$.background.style.backgroundColor=ripple.color;this.ripples.push(ripple);this._setAnimating(!0);return ripple},removeRipple:function(ripple){var rippleIndex=this.ripples.indexOf(ripple);if(0>rippleIndex){return}this.ripples.splice(rippleIndex,1);ripple.remove();if(!this.ripples.length){this._setAnimating(!1)}},animate:function(){if(!this._animating){return}var index,ripple;for(index=0;index<this.ripples.length;++index){ripple=this.ripples[index];ripple.draw();this.$.background.style.opacity=ripple.outerOpacity;if(ripple.isOpacityFullyDecayed&&!ripple.isRestingAtMaxRadius){this.removeRipple(ripple)}}if(!this.shouldKeepAnimating&&0===this.ripples.length){this.onAnimationComplete()}else{window.requestAnimationFrame(this._boundAnimate)}},animateRipple:function(){return this.animate()},_onEnterKeydown:function(){this.uiDownAction();this.async(this.uiUpAction,1)},_onSpaceKeydown:function(){this.uiDownAction()},_onSpaceKeyup:function(){this.uiUpAction()},_holdDownChanged:function(newVal,oldVal){if(oldVal===void 0){return}if(newVal){this.downAction()}else{this.upAction()}}});const PaperRippleBehavior={properties:{noink:{type:Boolean,observer:"_noinkChanged"},_rippleContainer:{type:Object}},_buttonStateChanged:function(){if(this.focused){this.ensureRipple()}},_downHandler:function(event){IronButtonStateImpl._downHandler.call(this,event);if(this.pressed){this.ensureRipple(event)}},ensureRipple:function(optTriggeringEvent){if(!this.hasRipple()){this._ripple=this._createRipple();this._ripple.noink=this.noink;var rippleContainer=this._rippleContainer||this.root;if(rippleContainer){dom(rippleContainer).appendChild(this._ripple)}if(optTriggeringEvent){var domContainer=dom(this._rippleContainer||this),target=dom(optTriggeringEvent).rootTarget;if(domContainer.deepContains(target)){this._ripple.uiDownAction(optTriggeringEvent)}}}},getRipple:function(){this.ensureRipple();return this._ripple},hasRipple:function(){return!!this._ripple},_createRipple:function(){var element=document.createElement("paper-ripple");return element},_noinkChanged:function(noink){if(this.hasRipple()){this._ripple.noink=noink}}};_exports.PaperRippleBehavior=PaperRippleBehavior;var paperRippleBehavior={PaperRippleBehavior:PaperRippleBehavior};_exports.$paperRippleBehavior=paperRippleBehavior;const PaperButtonBehaviorImpl={properties:{elevation:{type:Number,reflectToAttribute:!0,readOnly:!0}},observers:["_calculateElevation(focused, disabled, active, pressed, receivedFocusFromKeyboard)","_computeKeyboardClass(receivedFocusFromKeyboard)"],hostAttributes:{role:"button",tabindex:"0",animated:!0},_calculateElevation:function(){var e=1;if(this.disabled){e=0}else if(this.active||this.pressed){e=4}else if(this.receivedFocusFromKeyboard){e=3}this._setElevation(e)},_computeKeyboardClass:function(receivedFocusFromKeyboard){this.toggleClass("keyboard-focus",receivedFocusFromKeyboard)},_spaceKeyDownHandler:function(event){IronButtonStateImpl._spaceKeyDownHandler.call(this,event);if(this.hasRipple()&&1>this.getRipple().ripples.length){this._ripple.uiDownAction()}},_spaceKeyUpHandler:function(event){IronButtonStateImpl._spaceKeyUpHandler.call(this,event);if(this.hasRipple()){this._ripple.uiUpAction()}}};_exports.PaperButtonBehaviorImpl=PaperButtonBehaviorImpl;const PaperButtonBehavior=[IronButtonState,IronControlState,PaperRippleBehavior,PaperButtonBehaviorImpl];_exports.PaperButtonBehavior=PaperButtonBehavior;var paperButtonBehavior={PaperButtonBehaviorImpl:PaperButtonBehaviorImpl,PaperButtonBehavior:PaperButtonBehavior};_exports.$paperButtonBehavior=paperButtonBehavior;const PaperInkyFocusBehaviorImpl={observers:["_focusedChanged(receivedFocusFromKeyboard)"],_focusedChanged:function(receivedFocusFromKeyboard){if(receivedFocusFromKeyboard){this.ensureRipple()}if(this.hasRipple()){this._ripple.holdDown=receivedFocusFromKeyboard}},_createRipple:function(){var ripple=PaperRippleBehavior._createRipple();ripple.id="ink";ripple.setAttribute("center","");ripple.classList.add("circle");return ripple}};_exports.PaperInkyFocusBehaviorImpl=PaperInkyFocusBehaviorImpl;const PaperInkyFocusBehavior=[IronButtonState,IronControlState,PaperRippleBehavior,PaperInkyFocusBehaviorImpl];_exports.PaperInkyFocusBehavior=PaperInkyFocusBehavior;var paperInkyFocusBehavior={PaperInkyFocusBehaviorImpl:PaperInkyFocusBehaviorImpl,PaperInkyFocusBehavior:PaperInkyFocusBehavior};_exports.$paperInkyFocusBehavior=paperInkyFocusBehavior;const template$2=html`
<custom-style>
  <style is="custom-style">
    html {

      --shadow-transition: {
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
      };

      --shadow-none: {
        box-shadow: none;
      };

      /* from http://codepen.io/shyndman/pen/c5394ddf2e8b2a5c9185904b57421cdb */

      --shadow-elevation-2dp: {
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                    0 1px 5px 0 rgba(0, 0, 0, 0.12),
                    0 3px 1px -2px rgba(0, 0, 0, 0.2);
      };

      --shadow-elevation-3dp: {
        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
                    0 1px 8px 0 rgba(0, 0, 0, 0.12),
                    0 3px 3px -2px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-4dp: {
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
                    0 1px 10px 0 rgba(0, 0, 0, 0.12),
                    0 2px 4px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-6dp: {
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                    0 1px 18px 0 rgba(0, 0, 0, 0.12),
                    0 3px 5px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-8dp: {
        box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
                    0 3px 14px 2px rgba(0, 0, 0, 0.12),
                    0 5px 5px -3px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-12dp: {
        box-shadow: 0 12px 16px 1px rgba(0, 0, 0, 0.14),
                    0 4px 22px 3px rgba(0, 0, 0, 0.12),
                    0 6px 7px -4px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-16dp: {
        box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
                    0  6px 30px 5px rgba(0, 0, 0, 0.12),
                    0  8px 10px -5px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-24dp: {
        box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
                    0 9px 46px 8px rgba(0, 0, 0, 0.12),
                    0 11px 15px -7px rgba(0, 0, 0, 0.4);
      };
    }
  </style>
</custom-style>`;template$2.setAttribute("style","display: none;");document.head.appendChild(template$2.content);const template$3=html`
<dom-module id="paper-material-styles">
  <template>
    <style>
      html {
        --paper-material: {
          display: block;
          position: relative;
        };
        --paper-material-elevation-1: {
          @apply --shadow-elevation-2dp;
        };
        --paper-material-elevation-2: {
          @apply --shadow-elevation-4dp;
        };
        --paper-material-elevation-3: {
          @apply --shadow-elevation-6dp;
        };
        --paper-material-elevation-4: {
          @apply --shadow-elevation-8dp;
        };
        --paper-material-elevation-5: {
          @apply --shadow-elevation-16dp;
        };
      }
      .paper-material {
        @apply --paper-material;
      }
      .paper-material[elevation="1"] {
        @apply --paper-material-elevation-1;
      }
      .paper-material[elevation="2"] {
        @apply --paper-material-elevation-2;
      }
      .paper-material[elevation="3"] {
        @apply --paper-material-elevation-3;
      }
      .paper-material[elevation="4"] {
        @apply --paper-material-elevation-4;
      }
      .paper-material[elevation="5"] {
        @apply --paper-material-elevation-5;
      }

      /* Duplicate the styles because of https://github.com/webcomponents/shadycss/issues/193 */
      :host {
        --paper-material: {
          display: block;
          position: relative;
        };
        --paper-material-elevation-1: {
          @apply --shadow-elevation-2dp;
        };
        --paper-material-elevation-2: {
          @apply --shadow-elevation-4dp;
        };
        --paper-material-elevation-3: {
          @apply --shadow-elevation-6dp;
        };
        --paper-material-elevation-4: {
          @apply --shadow-elevation-8dp;
        };
        --paper-material-elevation-5: {
          @apply --shadow-elevation-16dp;
        };
      }
      :host(.paper-material) {
        @apply --paper-material;
      }
      :host(.paper-material[elevation="1"]) {
        @apply --paper-material-elevation-1;
      }
      :host(.paper-material[elevation="2"]) {
        @apply --paper-material-elevation-2;
      }
      :host(.paper-material[elevation="3"]) {
        @apply --paper-material-elevation-3;
      }
      :host(.paper-material[elevation="4"]) {
        @apply --paper-material-elevation-4;
      }
      :host(.paper-material[elevation="5"]) {
        @apply --paper-material-elevation-5;
      }
    </style>
  </template>
</dom-module>`;template$3.setAttribute("style","display: none;");document.head.appendChild(template$3.content);const template$4=html`
  <style include="paper-material-styles">
    /* Need to specify the same specificity as the styles imported from paper-material. */
    :host {
      @apply --layout-inline;
      @apply --layout-center-center;
      position: relative;
      box-sizing: border-box;
      min-width: 5.14em;
      margin: 0 0.29em;
      background: transparent;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-tap-highlight-color: transparent;
      font: inherit;
      text-transform: uppercase;
      outline-width: 0;
      border-radius: 3px;
      -moz-user-select: none;
      -ms-user-select: none;
      -webkit-user-select: none;
      user-select: none;
      cursor: pointer;
      z-index: 0;
      padding: 0.7em 0.57em;

      @apply --paper-font-common-base;
      @apply --paper-button;
    }

    :host([elevation="1"]) {
      @apply --paper-material-elevation-1;
    }

    :host([elevation="2"]) {
      @apply --paper-material-elevation-2;
    }

    :host([elevation="3"]) {
      @apply --paper-material-elevation-3;
    }

    :host([elevation="4"]) {
      @apply --paper-material-elevation-4;
    }

    :host([elevation="5"]) {
      @apply --paper-material-elevation-5;
    }

    :host([hidden]) {
      display: none !important;
    }

    :host([raised].keyboard-focus) {
      font-weight: bold;
      @apply --paper-button-raised-keyboard-focus;
    }

    :host(:not([raised]).keyboard-focus) {
      font-weight: bold;
      @apply --paper-button-flat-keyboard-focus;
    }

    :host([disabled]) {
      background: none;
      color: #a8a8a8;
      cursor: auto;
      pointer-events: none;

      @apply --paper-button-disabled;
    }

    :host([disabled][raised]) {
      background: #eaeaea;
    }


    :host([animated]) {
      @apply --shadow-transition;
    }

    paper-ripple {
      color: var(--paper-button-ink-color);
    }
  </style>

  <slot></slot>`;template$4.setAttribute("strip-whitespace","");Polymer({_template:template$4,is:"paper-button",behaviors:[PaperButtonBehavior],properties:{raised:{type:Boolean,reflectToAttribute:!0,value:!1,observer:"_calculateElevation"}},_calculateElevation:function(){if(!this.raised){this._setElevation(0)}else{PaperButtonBehaviorImpl._calculateElevation.apply(this)}}});const $_documentContainer=document.createElement("template");$_documentContainer.setAttribute("style","display: none;");$_documentContainer.innerHTML=`<iron-iconset-svg name="paper-dropdown-menu" size="24">
<svg><defs>
<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild($_documentContainer.content);const template$5=html`
<custom-style>
  <style is="custom-style">
    html {

      /* Material Design color palette for Google products */

      --google-red-100: #f4c7c3;
      --google-red-300: #e67c73;
      --google-red-500: #db4437;
      --google-red-700: #c53929;

      --google-blue-100: #c6dafc;
      --google-blue-300: #7baaf7;
      --google-blue-500: #4285f4;
      --google-blue-700: #3367d6;

      --google-green-100: #b7e1cd;
      --google-green-300: #57bb8a;
      --google-green-500: #0f9d58;
      --google-green-700: #0b8043;

      --google-yellow-100: #fce8b2;
      --google-yellow-300: #f7cb4d;
      --google-yellow-500: #f4b400;
      --google-yellow-700: #f09300;

      --google-grey-100: #f5f5f5;
      --google-grey-300: #e0e0e0;
      --google-grey-500: #9e9e9e;
      --google-grey-700: #616161;

      /* Material Design color palette from online spec document */

      --paper-red-50: #ffebee;
      --paper-red-100: #ffcdd2;
      --paper-red-200: #ef9a9a;
      --paper-red-300: #e57373;
      --paper-red-400: #ef5350;
      --paper-red-500: #f44336;
      --paper-red-600: #e53935;
      --paper-red-700: #d32f2f;
      --paper-red-800: #c62828;
      --paper-red-900: #b71c1c;
      --paper-red-a100: #ff8a80;
      --paper-red-a200: #ff5252;
      --paper-red-a400: #ff1744;
      --paper-red-a700: #d50000;

      --paper-pink-50: #fce4ec;
      --paper-pink-100: #f8bbd0;
      --paper-pink-200: #f48fb1;
      --paper-pink-300: #f06292;
      --paper-pink-400: #ec407a;
      --paper-pink-500: #e91e63;
      --paper-pink-600: #d81b60;
      --paper-pink-700: #c2185b;
      --paper-pink-800: #ad1457;
      --paper-pink-900: #880e4f;
      --paper-pink-a100: #ff80ab;
      --paper-pink-a200: #ff4081;
      --paper-pink-a400: #f50057;
      --paper-pink-a700: #c51162;

      --paper-purple-50: #f3e5f5;
      --paper-purple-100: #e1bee7;
      --paper-purple-200: #ce93d8;
      --paper-purple-300: #ba68c8;
      --paper-purple-400: #ab47bc;
      --paper-purple-500: #9c27b0;
      --paper-purple-600: #8e24aa;
      --paper-purple-700: #7b1fa2;
      --paper-purple-800: #6a1b9a;
      --paper-purple-900: #4a148c;
      --paper-purple-a100: #ea80fc;
      --paper-purple-a200: #e040fb;
      --paper-purple-a400: #d500f9;
      --paper-purple-a700: #aa00ff;

      --paper-deep-purple-50: #ede7f6;
      --paper-deep-purple-100: #d1c4e9;
      --paper-deep-purple-200: #b39ddb;
      --paper-deep-purple-300: #9575cd;
      --paper-deep-purple-400: #7e57c2;
      --paper-deep-purple-500: #673ab7;
      --paper-deep-purple-600: #5e35b1;
      --paper-deep-purple-700: #512da8;
      --paper-deep-purple-800: #4527a0;
      --paper-deep-purple-900: #311b92;
      --paper-deep-purple-a100: #b388ff;
      --paper-deep-purple-a200: #7c4dff;
      --paper-deep-purple-a400: #651fff;
      --paper-deep-purple-a700: #6200ea;

      --paper-indigo-50: #e8eaf6;
      --paper-indigo-100: #c5cae9;
      --paper-indigo-200: #9fa8da;
      --paper-indigo-300: #7986cb;
      --paper-indigo-400: #5c6bc0;
      --paper-indigo-500: #3f51b5;
      --paper-indigo-600: #3949ab;
      --paper-indigo-700: #303f9f;
      --paper-indigo-800: #283593;
      --paper-indigo-900: #1a237e;
      --paper-indigo-a100: #8c9eff;
      --paper-indigo-a200: #536dfe;
      --paper-indigo-a400: #3d5afe;
      --paper-indigo-a700: #304ffe;

      --paper-blue-50: #e3f2fd;
      --paper-blue-100: #bbdefb;
      --paper-blue-200: #90caf9;
      --paper-blue-300: #64b5f6;
      --paper-blue-400: #42a5f5;
      --paper-blue-500: #2196f3;
      --paper-blue-600: #1e88e5;
      --paper-blue-700: #1976d2;
      --paper-blue-800: #1565c0;
      --paper-blue-900: #0d47a1;
      --paper-blue-a100: #82b1ff;
      --paper-blue-a200: #448aff;
      --paper-blue-a400: #2979ff;
      --paper-blue-a700: #2962ff;

      --paper-light-blue-50: #e1f5fe;
      --paper-light-blue-100: #b3e5fc;
      --paper-light-blue-200: #81d4fa;
      --paper-light-blue-300: #4fc3f7;
      --paper-light-blue-400: #29b6f6;
      --paper-light-blue-500: #03a9f4;
      --paper-light-blue-600: #039be5;
      --paper-light-blue-700: #0288d1;
      --paper-light-blue-800: #0277bd;
      --paper-light-blue-900: #01579b;
      --paper-light-blue-a100: #80d8ff;
      --paper-light-blue-a200: #40c4ff;
      --paper-light-blue-a400: #00b0ff;
      --paper-light-blue-a700: #0091ea;

      --paper-cyan-50: #e0f7fa;
      --paper-cyan-100: #b2ebf2;
      --paper-cyan-200: #80deea;
      --paper-cyan-300: #4dd0e1;
      --paper-cyan-400: #26c6da;
      --paper-cyan-500: #00bcd4;
      --paper-cyan-600: #00acc1;
      --paper-cyan-700: #0097a7;
      --paper-cyan-800: #00838f;
      --paper-cyan-900: #006064;
      --paper-cyan-a100: #84ffff;
      --paper-cyan-a200: #18ffff;
      --paper-cyan-a400: #00e5ff;
      --paper-cyan-a700: #00b8d4;

      --paper-teal-50: #e0f2f1;
      --paper-teal-100: #b2dfdb;
      --paper-teal-200: #80cbc4;
      --paper-teal-300: #4db6ac;
      --paper-teal-400: #26a69a;
      --paper-teal-500: #009688;
      --paper-teal-600: #00897b;
      --paper-teal-700: #00796b;
      --paper-teal-800: #00695c;
      --paper-teal-900: #004d40;
      --paper-teal-a100: #a7ffeb;
      --paper-teal-a200: #64ffda;
      --paper-teal-a400: #1de9b6;
      --paper-teal-a700: #00bfa5;

      --paper-green-50: #e8f5e9;
      --paper-green-100: #c8e6c9;
      --paper-green-200: #a5d6a7;
      --paper-green-300: #81c784;
      --paper-green-400: #66bb6a;
      --paper-green-500: #4caf50;
      --paper-green-600: #43a047;
      --paper-green-700: #388e3c;
      --paper-green-800: #2e7d32;
      --paper-green-900: #1b5e20;
      --paper-green-a100: #b9f6ca;
      --paper-green-a200: #69f0ae;
      --paper-green-a400: #00e676;
      --paper-green-a700: #00c853;

      --paper-light-green-50: #f1f8e9;
      --paper-light-green-100: #dcedc8;
      --paper-light-green-200: #c5e1a5;
      --paper-light-green-300: #aed581;
      --paper-light-green-400: #9ccc65;
      --paper-light-green-500: #8bc34a;
      --paper-light-green-600: #7cb342;
      --paper-light-green-700: #689f38;
      --paper-light-green-800: #558b2f;
      --paper-light-green-900: #33691e;
      --paper-light-green-a100: #ccff90;
      --paper-light-green-a200: #b2ff59;
      --paper-light-green-a400: #76ff03;
      --paper-light-green-a700: #64dd17;

      --paper-lime-50: #f9fbe7;
      --paper-lime-100: #f0f4c3;
      --paper-lime-200: #e6ee9c;
      --paper-lime-300: #dce775;
      --paper-lime-400: #d4e157;
      --paper-lime-500: #cddc39;
      --paper-lime-600: #c0ca33;
      --paper-lime-700: #afb42b;
      --paper-lime-800: #9e9d24;
      --paper-lime-900: #827717;
      --paper-lime-a100: #f4ff81;
      --paper-lime-a200: #eeff41;
      --paper-lime-a400: #c6ff00;
      --paper-lime-a700: #aeea00;

      --paper-yellow-50: #fffde7;
      --paper-yellow-100: #fff9c4;
      --paper-yellow-200: #fff59d;
      --paper-yellow-300: #fff176;
      --paper-yellow-400: #ffee58;
      --paper-yellow-500: #ffeb3b;
      --paper-yellow-600: #fdd835;
      --paper-yellow-700: #fbc02d;
      --paper-yellow-800: #f9a825;
      --paper-yellow-900: #f57f17;
      --paper-yellow-a100: #ffff8d;
      --paper-yellow-a200: #ffff00;
      --paper-yellow-a400: #ffea00;
      --paper-yellow-a700: #ffd600;

      --paper-amber-50: #fff8e1;
      --paper-amber-100: #ffecb3;
      --paper-amber-200: #ffe082;
      --paper-amber-300: #ffd54f;
      --paper-amber-400: #ffca28;
      --paper-amber-500: #ffc107;
      --paper-amber-600: #ffb300;
      --paper-amber-700: #ffa000;
      --paper-amber-800: #ff8f00;
      --paper-amber-900: #ff6f00;
      --paper-amber-a100: #ffe57f;
      --paper-amber-a200: #ffd740;
      --paper-amber-a400: #ffc400;
      --paper-amber-a700: #ffab00;

      --paper-orange-50: #fff3e0;
      --paper-orange-100: #ffe0b2;
      --paper-orange-200: #ffcc80;
      --paper-orange-300: #ffb74d;
      --paper-orange-400: #ffa726;
      --paper-orange-500: #ff9800;
      --paper-orange-600: #fb8c00;
      --paper-orange-700: #f57c00;
      --paper-orange-800: #ef6c00;
      --paper-orange-900: #e65100;
      --paper-orange-a100: #ffd180;
      --paper-orange-a200: #ffab40;
      --paper-orange-a400: #ff9100;
      --paper-orange-a700: #ff6500;

      --paper-deep-orange-50: #fbe9e7;
      --paper-deep-orange-100: #ffccbc;
      --paper-deep-orange-200: #ffab91;
      --paper-deep-orange-300: #ff8a65;
      --paper-deep-orange-400: #ff7043;
      --paper-deep-orange-500: #ff5722;
      --paper-deep-orange-600: #f4511e;
      --paper-deep-orange-700: #e64a19;
      --paper-deep-orange-800: #d84315;
      --paper-deep-orange-900: #bf360c;
      --paper-deep-orange-a100: #ff9e80;
      --paper-deep-orange-a200: #ff6e40;
      --paper-deep-orange-a400: #ff3d00;
      --paper-deep-orange-a700: #dd2c00;

      --paper-brown-50: #efebe9;
      --paper-brown-100: #d7ccc8;
      --paper-brown-200: #bcaaa4;
      --paper-brown-300: #a1887f;
      --paper-brown-400: #8d6e63;
      --paper-brown-500: #795548;
      --paper-brown-600: #6d4c41;
      --paper-brown-700: #5d4037;
      --paper-brown-800: #4e342e;
      --paper-brown-900: #3e2723;

      --paper-grey-50: #fafafa;
      --paper-grey-100: #f5f5f5;
      --paper-grey-200: #eeeeee;
      --paper-grey-300: #e0e0e0;
      --paper-grey-400: #bdbdbd;
      --paper-grey-500: #9e9e9e;
      --paper-grey-600: #757575;
      --paper-grey-700: #616161;
      --paper-grey-800: #424242;
      --paper-grey-900: #212121;

      --paper-blue-grey-50: #eceff1;
      --paper-blue-grey-100: #cfd8dc;
      --paper-blue-grey-200: #b0bec5;
      --paper-blue-grey-300: #90a4ae;
      --paper-blue-grey-400: #78909c;
      --paper-blue-grey-500: #607d8b;
      --paper-blue-grey-600: #546e7a;
      --paper-blue-grey-700: #455a64;
      --paper-blue-grey-800: #37474f;
      --paper-blue-grey-900: #263238;

      /* opacity for dark text on a light background */
      --dark-divider-opacity: 0.12;
      --dark-disabled-opacity: 0.38; /* or hint text or icon */
      --dark-secondary-opacity: 0.54;
      --dark-primary-opacity: 0.87;

      /* opacity for light text on a dark background */
      --light-divider-opacity: 0.12;
      --light-disabled-opacity: 0.3; /* or hint text or icon */
      --light-secondary-opacity: 0.7;
      --light-primary-opacity: 1.0;

    }

  </style>
</custom-style>
`;template$5.setAttribute("style","display: none;");document.head.appendChild(template$5.content);const template$6=html`
<custom-style>
  <style is="custom-style">
    html {
      /*
       * You can use these generic variables in your elements for easy theming.
       * For example, if all your elements use \`--primary-text-color\` as its main
       * color, then switching from a light to a dark theme is just a matter of
       * changing the value of \`--primary-text-color\` in your application.
       */
      --primary-text-color: var(--light-theme-text-color);
      --primary-background-color: var(--light-theme-background-color);
      --secondary-text-color: var(--light-theme-secondary-color);
      --disabled-text-color: var(--light-theme-disabled-color);
      --divider-color: var(--light-theme-divider-color);
      --error-color: var(--paper-deep-orange-a700);

      /*
       * Primary and accent colors. Also see color.js for more colors.
       */
      --primary-color: var(--paper-indigo-500);
      --light-primary-color: var(--paper-indigo-100);
      --dark-primary-color: var(--paper-indigo-700);

      --accent-color: var(--paper-pink-a200);
      --light-accent-color: var(--paper-pink-a100);
      --dark-accent-color: var(--paper-pink-a400);


      /*
       * Material Design Light background theme
       */
      --light-theme-background-color: #ffffff;
      --light-theme-base-color: #000000;
      --light-theme-text-color: var(--paper-grey-900);
      --light-theme-secondary-color: #737373;  /* for secondary text and icons */
      --light-theme-disabled-color: #9b9b9b;  /* disabled/hint text */
      --light-theme-divider-color: #dbdbdb;

      /*
       * Material Design Dark background theme
       */
      --dark-theme-background-color: var(--paper-grey-900);
      --dark-theme-base-color: #ffffff;
      --dark-theme-text-color: #ffffff;
      --dark-theme-secondary-color: #bcbcbc;  /* for secondary text and icons */
      --dark-theme-disabled-color: #646464;  /* disabled/hint text */
      --dark-theme-divider-color: #3c3c3c;

      /*
       * Deprecated values because of their confusing names.
       */
      --text-primary-color: var(--dark-theme-text-color);
      --default-primary-color: var(--primary-color);
    }
  </style>
</custom-style>`;template$6.setAttribute("style","display: none;");document.head.appendChild(template$6.content);const $_documentContainer$1=document.createElement("template");$_documentContainer$1.setAttribute("style","display: none;");$_documentContainer$1.innerHTML=`<dom-module id="paper-dropdown-menu-shared-styles">
  <template>
    <style>
      :host {
        display: inline-block;
        position: relative;
        text-align: left;

        /* NOTE(cdata): Both values are needed, since some phones require the
         * value to be \`transparent\`.
         */
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        -webkit-tap-highlight-color: transparent;

        --paper-input-container-input: {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          max-width: 100%;
          box-sizing: border-box;
          cursor: pointer;
        };

        @apply --paper-dropdown-menu;
      }

      :host([disabled]) {
        @apply --paper-dropdown-menu-disabled;
      }

      :host([noink]) paper-ripple {
        display: none;
      }

      :host([no-label-float]) paper-ripple {
        top: 8px;
      }

      paper-ripple {
        top: 12px;
        left: 0px;
        bottom: 8px;
        right: 0px;

        @apply --paper-dropdown-menu-ripple;
      }

      paper-menu-button {
        display: block;
        padding: 0;

        @apply --paper-dropdown-menu-button;
      }

      paper-input {
        @apply --paper-dropdown-menu-input;
      }

      iron-icon {
        color: var(--disabled-text-color);

        @apply --paper-dropdown-menu-icon;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$1.content);const template$7=html`<custom-style>
  <style is="custom-style">
    html {

      /* Shared Styles */
      --paper-font-common-base: {
        font-family: 'Roboto', 'Noto', sans-serif;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-code: {
        font-family: 'Roboto Mono', 'Consolas', 'Menlo', monospace;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-expensive-kerning: {
        text-rendering: optimizeLegibility;
      };

      --paper-font-common-nowrap: {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      };

      /* Material Font Styles */

      --paper-font-display4: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 112px;
        font-weight: 300;
        letter-spacing: -.044em;
        line-height: 120px;
      };

      --paper-font-display3: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 56px;
        font-weight: 400;
        letter-spacing: -.026em;
        line-height: 60px;
      };

      --paper-font-display2: {
        @apply --paper-font-common-base;

        font-size: 45px;
        font-weight: 400;
        letter-spacing: -.018em;
        line-height: 48px;
      };

      --paper-font-display1: {
        @apply --paper-font-common-base;

        font-size: 34px;
        font-weight: 400;
        letter-spacing: -.01em;
        line-height: 40px;
      };

      --paper-font-headline: {
        @apply --paper-font-common-base;

        font-size: 24px;
        font-weight: 400;
        letter-spacing: -.012em;
        line-height: 32px;
      };

      --paper-font-title: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
      };

      --paper-font-subhead: {
        @apply --paper-font-common-base;

        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      };

      --paper-font-body2: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-body1: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
      };

      --paper-font-caption: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.011em;
        line-height: 20px;
      };

      --paper-font-menu: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 13px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-button: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.018em;
        line-height: 24px;
        text-transform: uppercase;
      };

      --paper-font-code2: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
      };

      --paper-font-code1: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
      };

    }

  </style>
</custom-style>`;template$7.setAttribute("style","display: none;");document.head.appendChild(template$7.content);const PaperInputAddonBehavior={attached:function(){this.fire("addon-attached")},update:function(state){}};_exports.PaperInputAddonBehavior=PaperInputAddonBehavior;var paperInputAddonBehavior={PaperInputAddonBehavior:PaperInputAddonBehavior};_exports.$paperInputAddonBehavior=paperInputAddonBehavior;Polymer({_template:html`
    <style>
      :host {
        display: inline-block;
        float: right;

        @apply --paper-font-caption;
        @apply --paper-input-char-counter;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:dir(rtl)) {
        float: left;
      }
    </style>

    <span>[[_charCounterStr]]</span>
`,is:"paper-input-char-counter",behaviors:[PaperInputAddonBehavior],properties:{_charCounterStr:{type:String,value:"0"}},update:function(state){if(!state.inputElement){return}state.value=state.value||"";var counter=state.value.toString().length.toString();if(state.inputElement.hasAttribute("maxlength")){counter+="/"+state.inputElement.getAttribute("maxlength")}this._charCounterStr=counter}});const template$8=html`
<custom-style>
  <style is="custom-style">
    html {
      --paper-input-container-shared-input-style: {
        position: relative; /* to make a stacking context */
        outline: none;
        box-shadow: none;
        padding: 0;
        margin: 0;
        width: 100%;
        max-width: 100%;
        background: transparent;
        border: none;
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        -webkit-appearance: none;
        text-align: inherit;
        vertical-align: var(--paper-input-container-input-align, bottom);

        @apply --paper-font-subhead;
      };
    }
  </style>
</custom-style>
`;template$8.setAttribute("style","display: none;");document.head.appendChild(template$8.content);Polymer({_template:html`
    <style>
      :host {
        display: block;
        padding: 8px 0;
        @apply --paper-input-container;
      }

      :host([inline]) {
        display: inline-block;
      }

      :host([disabled]) {
        pointer-events: none;
        opacity: 0.33;

        @apply --paper-input-container-disabled;
      }

      :host([hidden]) {
        display: none !important;
      }

      [hidden] {
        display: none !important;
      }

      .floated-label-placeholder {
        @apply --paper-font-caption;
      }

      .underline {
        height: 2px;
        position: relative;
      }

      .focused-line {
        @apply --layout-fit;
        border-bottom: 2px solid var(--paper-input-container-focus-color, var(--primary-color));

        -webkit-transform-origin: center center;
        transform-origin: center center;
        -webkit-transform: scale3d(0,1,1);
        transform: scale3d(0,1,1);

        @apply --paper-input-container-underline-focus;
      }

      .underline.is-highlighted .focused-line {
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .underline.is-invalid .focused-line {
        border-color: var(--paper-input-container-invalid-color, var(--error-color));
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .unfocused-line {
        @apply --layout-fit;
        border-bottom: 1px solid var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline;
      }

      :host([disabled]) .unfocused-line {
        border-bottom: 1px dashed;
        border-color: var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline-disabled;
      }

      .input-wrapper {
        @apply --layout-horizontal;
        @apply --layout-center;
        position: relative;
      }

      .input-content {
        @apply --layout-flex-auto;
        @apply --layout-relative;
        max-width: 100%;
      }

      .input-content ::slotted(label),
      .input-content ::slotted(.paper-input-label) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        font: inherit;
        color: var(--paper-input-container-color, var(--secondary-text-color));
        -webkit-transition: -webkit-transform 0.25s, width 0.25s;
        transition: transform 0.25s, width 0.25s;
        -webkit-transform-origin: left top;
        transform-origin: left top;
        /* Fix for safari not focusing 0-height date/time inputs with -webkit-apperance: none; */
        min-height: 1px;

        @apply --paper-font-common-nowrap;
        @apply --paper-font-subhead;
        @apply --paper-input-container-label;
        @apply --paper-transition-easing;
      }

      .input-content.label-is-floating ::slotted(label),
      .input-content.label-is-floating ::slotted(.paper-input-label) {
        -webkit-transform: translateY(-75%) scale(0.75);
        transform: translateY(-75%) scale(0.75);

        /* Since we scale to 75/100 of the size, we actually have 100/75 of the
        original space now available */
        width: 133%;

        @apply --paper-input-container-label-floating;
      }

      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(label),
      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(.paper-input-label) {
        right: 0;
        left: auto;
        -webkit-transform-origin: right top;
        transform-origin: right top;
      }

      .input-content.label-is-highlighted ::slotted(label),
      .input-content.label-is-highlighted ::slotted(.paper-input-label) {
        color: var(--paper-input-container-focus-color, var(--primary-color));

        @apply --paper-input-container-label-focus;
      }

      .input-content.is-invalid ::slotted(label),
      .input-content.is-invalid ::slotted(.paper-input-label) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .input-content.label-is-hidden ::slotted(label),
      .input-content.label-is-hidden ::slotted(.paper-input-label) {
        visibility: hidden;
      }

      .input-content ::slotted(input),
      .input-content ::slotted(iron-input),
      .input-content ::slotted(textarea),
      .input-content ::slotted(iron-autogrow-textarea),
      .input-content ::slotted(.paper-input-input) {
        @apply --paper-input-container-shared-input-style;
        /* The apply shim doesn't apply the nested color custom property,
          so we have to re-apply it here. */
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        @apply --paper-input-container-input;
      }

      .input-content ::slotted(input)::-webkit-outer-spin-button,
      .input-content ::slotted(input)::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      .input-content.focused ::slotted(input),
      .input-content.focused ::slotted(iron-input),
      .input-content.focused ::slotted(textarea),
      .input-content.focused ::slotted(iron-autogrow-textarea),
      .input-content.focused ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-focus;
      }

      .input-content.is-invalid ::slotted(input),
      .input-content.is-invalid ::slotted(iron-input),
      .input-content.is-invalid ::slotted(textarea),
      .input-content.is-invalid ::slotted(iron-autogrow-textarea),
      .input-content.is-invalid ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-invalid;
      }

      .prefix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;
        @apply --paper-input-prefix;
      }

      .suffix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;

        @apply --paper-input-suffix;
      }

      /* Firefox sets a min-width on the input, which can cause layout issues */
      .input-content ::slotted(input) {
        min-width: 0;
      }

      .input-content ::slotted(textarea) {
        resize: none;
      }

      .add-on-content {
        position: relative;
      }

      .add-on-content.is-invalid ::slotted(*) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .add-on-content.is-highlighted ::slotted(*) {
        color: var(--paper-input-container-focus-color, var(--primary-color));
      }
    </style>

    <div class="floated-label-placeholder" aria-hidden="true" hidden="[[noLabelFloat]]">&nbsp;</div>

    <div class="input-wrapper">
      <span class="prefix"><slot name="prefix"></slot></span>

      <div class$="[[_computeInputContentClass(noLabelFloat,alwaysFloatLabel,focused,invalid,_inputHasContent)]]" id="labelAndInputContainer">
        <slot name="label"></slot>
        <slot name="input"></slot>
      </div>

      <span class="suffix"><slot name="suffix"></slot></span>
    </div>

    <div class$="[[_computeUnderlineClass(focused,invalid)]]">
      <div class="unfocused-line"></div>
      <div class="focused-line"></div>
    </div>

    <div class$="[[_computeAddOnContentClass(focused,invalid)]]">
      <slot name="add-on"></slot>
    </div>
`,is:"paper-input-container",properties:{noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},attrForValue:{type:String,value:"bind-value"},autoValidate:{type:Boolean,value:!1},invalid:{observer:"_invalidChanged",type:Boolean,value:!1},focused:{readOnly:!0,type:Boolean,value:!1,notify:!0},_addons:{type:Array},_inputHasContent:{type:Boolean,value:!1},_inputSelector:{type:String,value:"input,iron-input,textarea,.paper-input-input"},_boundOnFocus:{type:Function,value:function(){return this._onFocus.bind(this)}},_boundOnBlur:{type:Function,value:function(){return this._onBlur.bind(this)}},_boundOnInput:{type:Function,value:function(){return this._onInput.bind(this)}},_boundValueChanged:{type:Function,value:function(){return this._onValueChanged.bind(this)}}},listeners:{"addon-attached":"_onAddonAttached","iron-input-validate":"_onIronInputValidate"},get _valueChangedEvent(){return this.attrForValue+"-changed"},get _propertyForValue(){return dashToCamelCase(this.attrForValue)},get _inputElement(){return dom(this).querySelector(this._inputSelector)},get _inputElementValue(){return this._inputElement[this._propertyForValue]||this._inputElement.value},ready:function(){this.__isFirstValueUpdate=!0;if(!this._addons){this._addons=[]}this.addEventListener("focus",this._boundOnFocus,!0);this.addEventListener("blur",this._boundOnBlur,!0)},attached:function(){if(this.attrForValue){this._inputElement.addEventListener(this._valueChangedEvent,this._boundValueChanged)}else{this.addEventListener("input",this._onInput)}if(this._inputElementValue&&""!=this._inputElementValue){this._handleValueAndAutoValidate(this._inputElement)}else{this._handleValue(this._inputElement)}},_onAddonAttached:function(event){if(!this._addons){this._addons=[]}var target=event.target;if(-1===this._addons.indexOf(target)){this._addons.push(target);if(this.isAttached){this._handleValue(this._inputElement)}}},_onFocus:function(){this._setFocused(!0)},_onBlur:function(){this._setFocused(!1);this._handleValueAndAutoValidate(this._inputElement)},_onInput:function(event){this._handleValueAndAutoValidate(event.target)},_onValueChanged:function(event){var input=event.target;if(this.__isFirstValueUpdate){this.__isFirstValueUpdate=!1;if(input.value===void 0||""===input.value){return}}this._handleValueAndAutoValidate(event.target)},_handleValue:function(inputElement){var value=this._inputElementValue;if(value||0===value||"number"===inputElement.type&&!inputElement.checkValidity()){this._inputHasContent=!0}else{this._inputHasContent=!1}this.updateAddons({inputElement:inputElement,value:value,invalid:this.invalid})},_handleValueAndAutoValidate:function(inputElement){if(this.autoValidate&&inputElement){var valid;if(inputElement.validate){valid=inputElement.validate(this._inputElementValue)}else{valid=inputElement.checkValidity()}this.invalid=!valid}this._handleValue(inputElement)},_onIronInputValidate:function(event){this.invalid=this._inputElement.invalid},_invalidChanged:function(){if(this._addons){this.updateAddons({invalid:this.invalid})}},updateAddons:function(state){for(var addon,index=0;addon=this._addons[index];index++){addon.update(state)}},_computeInputContentClass:function(noLabelFloat,alwaysFloatLabel,focused,invalid,_inputHasContent){var cls="input-content";if(!noLabelFloat){var label=this.querySelector("label");if(alwaysFloatLabel||_inputHasContent){cls+=" label-is-floating";this.$.labelAndInputContainer.style.position="static";if(invalid){cls+=" is-invalid"}else if(focused){cls+=" label-is-highlighted"}}else{if(label){this.$.labelAndInputContainer.style.position="relative"}if(invalid){cls+=" is-invalid"}}}else{if(_inputHasContent){cls+=" label-is-hidden"}if(invalid){cls+=" is-invalid"}}if(focused){cls+=" focused"}return cls},_computeUnderlineClass:function(focused,invalid){var cls="underline";if(invalid){cls+=" is-invalid"}else if(focused){cls+=" is-highlighted"}return cls},_computeAddOnContentClass:function(focused,invalid){var cls="add-on-content";if(invalid){cls+=" is-invalid"}else if(focused){cls+=" is-highlighted"}return cls}});Polymer({_template:html`
    <style>
      :host {
        display: inline-block;
        visibility: hidden;

        color: var(--paper-input-container-invalid-color, var(--error-color));

        @apply --paper-font-caption;
        @apply --paper-input-error;
        position: absolute;
        left:0;
        right:0;
      }

      :host([invalid]) {
        visibility: visible;
      }

      #a11yWrapper {
        visibility: hidden;
      }

      :host([invalid]) #a11yWrapper {
        visibility: visible;
      }
    </style>

    <!--
    If the paper-input-error element is directly referenced by an
    \`aria-describedby\` attribute, such as when used as a paper-input add-on,
    then applying \`visibility: hidden;\` to the paper-input-error element itself
    does not hide the error.

    For more information, see:
    https://www.w3.org/TR/accname-1.1/#mapping_additional_nd_description
    -->
    <div id="a11yWrapper">
      <slot></slot>
    </div>
`,is:"paper-input-error",behaviors:[PaperInputAddonBehavior],properties:{invalid:{readOnly:!0,reflectToAttribute:!0,type:Boolean}},update:function(state){this._setInvalid(state.invalid)}});const PaperInputHelper={};_exports.PaperInputHelper=PaperInputHelper;PaperInputHelper.NextLabelID=1;PaperInputHelper.NextAddonID=1;PaperInputHelper.NextInputID=1;const PaperInputBehaviorImpl={properties:{label:{type:String},value:{notify:!0,type:String},disabled:{type:Boolean,value:!1},invalid:{type:Boolean,value:!1,notify:!0},allowedPattern:{type:String},type:{type:String},list:{type:String},pattern:{type:String},required:{type:Boolean,value:!1},errorMessage:{type:String},charCounter:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},autoValidate:{type:Boolean,value:!1},validator:{type:String},autocomplete:{type:String,value:"off"},autofocus:{type:Boolean,observer:"_autofocusChanged"},inputmode:{type:String},minlength:{type:Number},maxlength:{type:Number},min:{type:String},max:{type:String},step:{type:String},name:{type:String},placeholder:{type:String,value:""},readonly:{type:Boolean,value:!1},size:{type:Number},autocapitalize:{type:String,value:"none"},autocorrect:{type:String,value:"off"},autosave:{type:String},results:{type:Number},accept:{type:String},multiple:{type:Boolean},_ariaDescribedBy:{type:String,value:""},_ariaLabelledBy:{type:String,value:""},_inputId:{type:String,value:""}},listeners:{"addon-attached":"_onAddonAttached"},keyBindings:{"shift+tab:keydown":"_onShiftTabDown"},hostAttributes:{tabindex:0},get inputElement(){if(!this.$){this.$={}}if(!this.$.input){this._generateInputId();this.$.input=this.$$("#"+this._inputId)}return this.$.input},get _focusableElement(){return this.inputElement},created:function(){this._typesThatHaveText=["date","datetime","datetime-local","month","time","week","file"]},attached:function(){this._updateAriaLabelledBy();if(!PolymerElement&&this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.inputElement.type)){this.alwaysFloatLabel=!0}},_appendStringWithSpace:function(str,more){if(str){str=str+" "+more}else{str=more}return str},_onAddonAttached:function(event){var target=dom(event).rootTarget;if(target.id){this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,target.id)}else{var id="paper-input-add-on-"+PaperInputHelper.NextAddonID++;target.id=id;this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,id)}},validate:function(){return this.inputElement.validate()},_focusBlurHandler:function(event){IronControlState._focusBlurHandler.call(this,event);if(this.focused&&!this._shiftTabPressed&&this._focusableElement){this._focusableElement.focus()}},_onShiftTabDown:function(event){var oldTabIndex=this.getAttribute("tabindex");this._shiftTabPressed=!0;this.setAttribute("tabindex","-1");this.async(function(){this.setAttribute("tabindex",oldTabIndex);this._shiftTabPressed=!1},1)},_handleAutoValidate:function(){if(this.autoValidate)this.validate()},updateValueAndPreserveCaret:function(newValue){try{var start=this.inputElement.selectionStart;this.value=newValue;this.inputElement.selectionStart=start;this.inputElement.selectionEnd=start}catch(e){this.value=newValue}},_computeAlwaysFloatLabel:function(alwaysFloatLabel,placeholder){return placeholder||alwaysFloatLabel},_updateAriaLabelledBy:function(){var label=dom(this.root).querySelector("label");if(!label){this._ariaLabelledBy="";return}var labelledBy;if(label.id){labelledBy=label.id}else{labelledBy="paper-input-label-"+PaperInputHelper.NextLabelID++;label.id=labelledBy}this._ariaLabelledBy=labelledBy},_generateInputId:function(){if(!this._inputId||""===this._inputId){this._inputId="input-"+PaperInputHelper.NextInputID++}},_onChange:function(event){if(this.shadowRoot){this.fire(event.type,{sourceEvent:event},{node:this,bubbles:event.bubbles,cancelable:event.cancelable})}},_autofocusChanged:function(){if(this.autofocus&&this._focusableElement){var activeElement=document.activeElement,isActiveElementValid=activeElement instanceof HTMLElement,isSomeElementActive=isActiveElementValid&&activeElement!==document.body&&activeElement!==document.documentElement;if(!isSomeElementActive){this._focusableElement.focus()}}}};_exports.PaperInputBehaviorImpl=PaperInputBehaviorImpl;const PaperInputBehavior=[IronControlState,IronA11yKeysBehavior,PaperInputBehaviorImpl];_exports.PaperInputBehavior=PaperInputBehavior;var paperInputBehavior={PaperInputHelper:PaperInputHelper,PaperInputBehaviorImpl:PaperInputBehaviorImpl,PaperInputBehavior:PaperInputBehavior};_exports.$paperInputBehavior=paperInputBehavior;Polymer({is:"paper-input",_template:html`
    <style>
      :host {
        display: block;
      }

      :host([focused]) {
        outline: none;
      }

      :host([hidden]) {
        display: none !important;
      }

      input {
        /* Firefox sets a min-width on the input, which can cause layout issues */
        min-width: 0;
      }

      /* In 1.x, the <input> is distributed to paper-input-container, which styles it.
      In 2.x the <iron-input> is distributed to paper-input-container, which styles
      it, but in order for this to work correctly, we need to reset some
      of the native input's properties to inherit (from the iron-input) */
      iron-input > input {
        @apply --paper-input-container-shared-input-style;
        font-family: inherit;
        font-weight: inherit;
        font-size: inherit;
        letter-spacing: inherit;
        word-spacing: inherit;
        line-height: inherit;
        text-shadow: inherit;
        color: inherit;
        cursor: inherit;
      }

      input:disabled {
        @apply --paper-input-container-input-disabled;
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      input::-webkit-clear-button {
        @apply --paper-input-container-input-webkit-clear;
      }

      input::-webkit-calendar-picker-indicator {
        @apply --paper-input-container-input-webkit-calendar-picker-indicator;
      }

      input::-webkit-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input:-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-ms-clear {
        @apply --paper-input-container-ms-clear;
      }

      input::-ms-reveal {
        @apply --paper-input-container-ms-reveal;
      }

      input:-ms-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      label {
        pointer-events: none;
      }
    </style>

    <paper-input-container id="container" no-label-float="[[noLabelFloat]]" always-float-label="[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]" auto-validate$="[[autoValidate]]" disabled$="[[disabled]]" invalid="[[invalid]]">

      <slot name="prefix" slot="prefix"></slot>

      <label hidden$="[[!label]]" aria-hidden="true" for$="[[_inputId]]" slot="label">[[label]]</label>

      <!-- Need to bind maxlength so that the paper-input-char-counter works correctly -->
      <iron-input bind-value="{{value}}" slot="input" class="input-element" id$="[[_inputId]]" maxlength$="[[maxlength]]" allowed-pattern="[[allowedPattern]]" invalid="{{invalid}}" validator="[[validator]]">
        <input aria-labelledby$="[[_ariaLabelledBy]]" aria-describedby$="[[_ariaDescribedBy]]" disabled$="[[disabled]]" title$="[[title]]" type$="[[type]]" pattern$="[[pattern]]" required$="[[required]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" inputmode$="[[inputmode]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]" min$="[[min]]" max$="[[max]]" step$="[[step]]" name$="[[name]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" list$="[[list]]" size$="[[size]]" autocapitalize$="[[autocapitalize]]" autocorrect$="[[autocorrect]]" on-change="_onChange" tabindex$="[[tabIndex]]" autosave$="[[autosave]]" results$="[[results]]" accept$="[[accept]]" multiple$="[[multiple]]">
      </iron-input>

      <slot name="suffix" slot="suffix"></slot>

      <template is="dom-if" if="[[errorMessage]]">
        <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>
      </template>

      <template is="dom-if" if="[[charCounter]]">
        <paper-input-char-counter slot="add-on"></paper-input-char-counter>
      </template>

    </paper-input-container>
  `,behaviors:[PaperInputBehavior,IronFormElementBehavior],properties:{value:{type:String}},get _focusableElement(){return this.inputElement._inputElement},listeners:{"iron-input-ready":"_onIronInputReady"},_onIronInputReady:function(){if(!this.$.nativeInput){this.$.nativeInput=this.$$("input")}if(this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.$.nativeInput.type)){this.alwaysFloatLabel=!0}if(!!this.inputElement.bindValue){this.$.container._handleValueAndAutoValidate(this.inputElement)}}});Polymer({is:"paper-menu-grow-height-animation",behaviors:[NeonAnimationBehavior],configure:function(config){var node=config.node,rect=node.getBoundingClientRect(),height=rect.height;this._effect=new KeyframeEffect(node,[{height:height/2+"px"},{height:height+"px"}],this.timingFromConfig(config));return this._effect}});Polymer({is:"paper-menu-grow-width-animation",behaviors:[NeonAnimationBehavior],configure:function(config){var node=config.node,rect=node.getBoundingClientRect(),width=rect.width;this._effect=new KeyframeEffect(node,[{width:width/2+"px"},{width:width+"px"}],this.timingFromConfig(config));return this._effect}});Polymer({is:"paper-menu-shrink-width-animation",behaviors:[NeonAnimationBehavior],configure:function(config){var node=config.node,rect=node.getBoundingClientRect(),width=rect.width;this._effect=new KeyframeEffect(node,[{width:width+"px"},{width:width-width/20+"px"}],this.timingFromConfig(config));return this._effect}});Polymer({is:"paper-menu-shrink-height-animation",behaviors:[NeonAnimationBehavior],configure:function(config){var node=config.node,rect=node.getBoundingClientRect(),height=rect.height;this.setPrefixedProperty(node,"transformOrigin","0 0");this._effect=new KeyframeEffect(node,[{height:height+"px",transform:"translateY(0)"},{height:height/2+"px",transform:"translateY(-20px)"}],this.timingFromConfig(config));return this._effect}});var config={ANIMATION_CUBIC_BEZIER:"cubic-bezier(.3,.95,.5,1)",MAX_ANIMATION_TIME_MS:400};const PaperMenuButton=Polymer({_template:html`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 8px;
        outline: none;

        @apply --paper-menu-button;
      }

      :host([disabled]) {
        cursor: auto;
        color: var(--disabled-text-color);

        @apply --paper-menu-button-disabled;
      }

      iron-dropdown {
        @apply --paper-menu-button-dropdown;
      }

      .dropdown-content {
        @apply --shadow-elevation-2dp;

        position: relative;
        border-radius: 2px;
        background-color: var(--paper-menu-button-dropdown-background, var(--primary-background-color));

        @apply --paper-menu-button-content;
      }

      :host([vertical-align="top"]) .dropdown-content {
        margin-bottom: 20px;
        margin-top: -10px;
        top: 10px;
      }

      :host([vertical-align="bottom"]) .dropdown-content {
        bottom: 10px;
        margin-bottom: -10px;
        margin-top: 20px;
      }

      #trigger {
        cursor: pointer;
      }
    </style>

    <div id="trigger" on-tap="toggle">
      <slot name="dropdown-trigger"></slot>
    </div>

    <iron-dropdown id="dropdown" opened="{{opened}}" horizontal-align="[[horizontalAlign]]" vertical-align="[[verticalAlign]]" dynamic-align="[[dynamicAlign]]" horizontal-offset="[[horizontalOffset]]" vertical-offset="[[verticalOffset]]" no-overlap="[[noOverlap]]" open-animation-config="[[openAnimationConfig]]" close-animation-config="[[closeAnimationConfig]]" no-animations="[[noAnimations]]" focus-target="[[_dropdownContent]]" allow-outside-scroll="[[allowOutsideScroll]]" restore-focus-on-close="[[restoreFocusOnClose]]" on-iron-overlay-canceled="__onIronOverlayCanceled">
      <div slot="dropdown-content" class="dropdown-content">
        <slot id="content" name="dropdown-content"></slot>
      </div>
    </iron-dropdown>
`,is:"paper-menu-button",behaviors:[IronA11yKeysBehavior,IronControlState],properties:{opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},dynamicAlign:{type:Boolean},horizontalOffset:{type:Number,value:0,notify:!0},verticalOffset:{type:Number,value:0,notify:!0},noOverlap:{type:Boolean},noAnimations:{type:Boolean,value:!1},ignoreSelect:{type:Boolean,value:!1},closeOnActivate:{type:Boolean,value:!1},openAnimationConfig:{type:Object,value:function(){return[{name:"fade-in-animation",timing:{delay:100,duration:200}},{name:"paper-menu-grow-width-animation",timing:{delay:100,duration:150,easing:config.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-grow-height-animation",timing:{delay:100,duration:275,easing:config.ANIMATION_CUBIC_BEZIER}}]}},closeAnimationConfig:{type:Object,value:function(){return[{name:"fade-out-animation",timing:{duration:150}},{name:"paper-menu-shrink-width-animation",timing:{delay:100,duration:50,easing:config.ANIMATION_CUBIC_BEZIER}},{name:"paper-menu-shrink-height-animation",timing:{duration:200,easing:"ease-in"}}]}},allowOutsideScroll:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!0},_dropdownContent:{type:Object}},hostAttributes:{role:"group","aria-haspopup":"true"},listeners:{"iron-activate":"_onIronActivate","iron-select":"_onIronSelect"},get contentElement(){for(var nodes=dom(this.$.content).getDistributedNodes(),i=0,l=nodes.length;i<l;i++){if(nodes[i].nodeType===Node.ELEMENT_NODE){return nodes[i]}}},toggle:function(){if(this.opened){this.close()}else{this.open()}},open:function(){if(this.disabled){return}this.$.dropdown.open()},close:function(){this.$.dropdown.close()},_onIronSelect:function(event){if(!this.ignoreSelect){this.close()}},_onIronActivate:function(event){if(this.closeOnActivate){this.close()}},_openedChanged:function(opened,oldOpened){if(opened){this._dropdownContent=this.contentElement;this.fire("paper-dropdown-open")}else if(null!=oldOpened){this.fire("paper-dropdown-close")}},_disabledChanged:function(disabled){IronControlState._disabledChanged.apply(this,arguments);if(disabled&&this.opened){this.close()}},__onIronOverlayCanceled:function(event){var uiEvent=event.detail,trigger=this.$.trigger,path=dom(uiEvent).path;if(-1<path.indexOf(trigger)){event.preventDefault()}}});_exports.PaperMenuButton=PaperMenuButton;Object.keys(config).forEach(function(key){PaperMenuButton[key]=config[key]});var paperMenuButton={PaperMenuButton:PaperMenuButton};_exports.$paperMenuButton=paperMenuButton;Polymer({_template:html`
    <style include="paper-dropdown-menu-shared-styles"></style>

    <!-- this div fulfills an a11y requirement for combobox, do not remove -->
    <span role="button"></span>
    <paper-menu-button id="menuButton" vertical-align="[[verticalAlign]]" horizontal-align="[[horizontalAlign]]" dynamic-align="[[dynamicAlign]]" vertical-offset="[[_computeMenuVerticalOffset(noLabelFloat, verticalOffset)]]" disabled="[[disabled]]" no-animations="[[noAnimations]]" on-iron-select="_onIronSelect" on-iron-deselect="_onIronDeselect" opened="{{opened}}" close-on-activate allow-outside-scroll="[[allowOutsideScroll]]" restore-focus-on-close="[[restoreFocusOnClose]]">
      <!-- support hybrid mode: user might be using paper-menu-button 1.x which distributes via <content> -->
      <div class="dropdown-trigger" slot="dropdown-trigger">
        <paper-ripple></paper-ripple>
        <!-- paper-input has type="text" for a11y, do not remove -->
        <paper-input type="text" invalid="[[invalid]]" readonly disabled="[[disabled]]" value="[[value]]" placeholder="[[placeholder]]" error-message="[[errorMessage]]" always-float-label="[[alwaysFloatLabel]]" no-label-float="[[noLabelFloat]]" label="[[label]]">
          <!-- support hybrid mode: user might be using paper-input 1.x which distributes via <content> -->
          <iron-icon icon="paper-dropdown-menu:arrow-drop-down" suffix slot="suffix"></iron-icon>
        </paper-input>
      </div>
      <slot id="content" name="dropdown-content" slot="dropdown-content"></slot>
    </paper-menu-button>
`,is:"paper-dropdown-menu",behaviors:[IronButtonState,IronControlState,IronFormElementBehavior,IronValidatableBehavior],properties:{selectedItemLabel:{type:String,notify:!0,readOnly:!0},selectedItem:{type:Object,notify:!0,readOnly:!0},value:{type:String,notify:!0},label:{type:String},placeholder:{type:String},errorMessage:{type:String},opened:{type:Boolean,notify:!0,value:!1,observer:"_openedChanged"},allowOutsideScroll:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1,reflectToAttribute:!0},alwaysFloatLabel:{type:Boolean,value:!1},noAnimations:{type:Boolean,value:!1},horizontalAlign:{type:String,value:"right"},verticalAlign:{type:String,value:"top"},verticalOffset:Number,dynamicAlign:{type:Boolean},restoreFocusOnClose:{type:Boolean,value:!0}},listeners:{tap:"_onTap"},keyBindings:{"up down":"open",esc:"close"},hostAttributes:{role:"combobox","aria-autocomplete":"none","aria-haspopup":"true"},observers:["_selectedItemChanged(selectedItem)"],attached:function(){var contentElement=this.contentElement;if(contentElement&&contentElement.selectedItem){this._setSelectedItem(contentElement.selectedItem)}},get contentElement(){for(var nodes=dom(this.$.content).getDistributedNodes(),i=0,l=nodes.length;i<l;i++){if(nodes[i].nodeType===Node.ELEMENT_NODE){return nodes[i]}}},open:function(){this.$.menuButton.open()},close:function(){this.$.menuButton.close()},_onIronSelect:function(event){this._setSelectedItem(event.detail.item)},_onIronDeselect:function(event){this._setSelectedItem(null)},_onTap:function(event){if(findOriginalTarget(event)===this){this.open()}},_selectedItemChanged:function(selectedItem){var value="";if(!selectedItem){value=""}else{value=selectedItem.label||selectedItem.getAttribute("label")||selectedItem.textContent.trim()}this.value=value;this._setSelectedItemLabel(value)},_computeMenuVerticalOffset:function(noLabelFloat,opt_verticalOffset){if(opt_verticalOffset){return opt_verticalOffset}return noLabelFloat?-4:8},_getValidity:function(_value){return this.disabled||!this.required||this.required&&!!this.value},_openedChanged:function(){var openState=this.opened?"true":"false",e=this.contentElement;if(e){e.setAttribute("aria-expanded",openState)}}});Polymer({is:"paper-icon-button",_template:html`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 8px;
        outline: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: pointer;
        z-index: 0;
        line-height: 1;

        width: 40px;
        height: 40px;

        /*
          NOTE: Both values are needed, since some phones require the value to
          be \`transparent\`.
        */
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;

        /* Because of polymer/2558, this style has lower specificity than * */
        box-sizing: border-box !important;

        @apply --paper-icon-button;
      }

      :host #ink {
        color: var(--paper-icon-button-ink-color, var(--primary-text-color));
        opacity: 0.6;
      }

      :host([disabled]) {
        color: var(--paper-icon-button-disabled-text, var(--disabled-text-color));
        pointer-events: none;
        cursor: auto;

        @apply --paper-icon-button-disabled;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:hover) {
        @apply --paper-icon-button-hover;
      }

      iron-icon {
        --iron-icon-width: 100%;
        --iron-icon-height: 100%;
      }
    </style>

    <iron-icon id="icon" src="[[src]]" icon="[[icon]]"
               alt$="[[alt]]"></iron-icon>
  `,hostAttributes:{role:"button",tabindex:"0"},behaviors:[PaperInkyFocusBehavior],registered:function(){this._template.setAttribute("strip-whitespace","")},properties:{src:{type:String},icon:{type:String},alt:{type:String,observer:"_altChanged"}},_altChanged:function(newValue,oldValue){var label=this.getAttribute("aria-label");if(!label||oldValue==label){this.setAttribute("aria-label",newValue)}}});const PaperItemBehaviorImpl={hostAttributes:{role:"option",tabindex:"0"}};_exports.PaperItemBehaviorImpl=PaperItemBehaviorImpl;const PaperItemBehavior=[IronButtonState,IronControlState,PaperItemBehaviorImpl];_exports.PaperItemBehavior=PaperItemBehavior;var paperItemBehavior={PaperItemBehaviorImpl:PaperItemBehaviorImpl,PaperItemBehavior:PaperItemBehavior};_exports.$paperItemBehavior=paperItemBehavior;const $_documentContainer$2=document.createElement("template");$_documentContainer$2.setAttribute("style","display: none;");$_documentContainer$2.innerHTML=`<dom-module id="paper-item-shared-styles">
  <template>
    <style>
      :host, .paper-item {
        display: block;
        position: relative;
        min-height: var(--paper-item-min-height, 48px);
        padding: 0px 16px;
      }

      .paper-item {
        @apply --paper-font-subhead;
        border:none;
        outline: none;
        background: white;
        width: 100%;
        text-align: left;
      }

      :host([hidden]), .paper-item[hidden] {
        display: none !important;
      }

      :host(.iron-selected), .paper-item.iron-selected {
        font-weight: var(--paper-item-selected-weight, bold);

        @apply --paper-item-selected;
      }

      :host([disabled]), .paper-item[disabled] {
        color: var(--paper-item-disabled-color, var(--disabled-text-color));

        @apply --paper-item-disabled;
      }

      :host(:focus), .paper-item:focus {
        position: relative;
        outline: 0;

        @apply --paper-item-focused;
      }

      :host(:focus):before, .paper-item:focus:before {
        @apply --layout-fit;

        background: currentColor;
        content: '';
        opacity: var(--dark-divider-opacity);
        pointer-events: none;

        @apply --paper-item-focused-before;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$2.content);Polymer({_template:html`
    <style include="paper-item-shared-styles">
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
      }
    </style>
    <slot></slot>
`,is:"paper-item",behaviors:[PaperItemBehavior]});Polymer({_template:html`
    <style>
      :host {
        display: block;
        padding: 8px 0;

        background: var(--paper-listbox-background-color, var(--primary-background-color));
        color: var(--paper-listbox-color, var(--primary-text-color));

        @apply --paper-listbox;
      }
    </style>

    <slot></slot>
`,is:"paper-listbox",behaviors:[IronMenuBehavior],hostAttributes:{role:"listbox"}});var currentToast=null;Polymer({_template:html`
    <style>
      :host {
        display: block;
        position: fixed;
        background-color: var(--paper-toast-background-color, #323232);
        color: var(--paper-toast-color, #f1f1f1);
        min-height: 48px;
        min-width: 288px;
        padding: 16px 24px;
        box-sizing: border-box;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
        border-radius: 2px;
        margin: 12px;
        font-size: 14px;
        cursor: default;
        -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
        transition: transform 0.3s, opacity 0.3s;
        opacity: 0;
        -webkit-transform: translateY(100px);
        transform: translateY(100px);
        @apply --paper-font-common-base;
      }

      :host(.capsule) {
        border-radius: 24px;
      }

      :host(.fit-bottom) {
        width: 100%;
        min-width: 0;
        border-radius: 0;
        margin: 0;
      }

      :host(.paper-toast-open) {
        opacity: 1;
        -webkit-transform: translateY(0px);
        transform: translateY(0px);
      }
    </style>

    <span id="label">{{text}}</span>
    <slot></slot>
`,is:"paper-toast",behaviors:[IronOverlayBehavior],properties:{fitInto:{type:Object,value:window,observer:"_onFitIntoChanged"},horizontalAlign:{type:String,value:"left"},verticalAlign:{type:String,value:"bottom"},duration:{type:Number,value:3e3},text:{type:String,value:""},noCancelOnOutsideClick:{type:Boolean,value:!0},noAutoFocus:{type:Boolean,value:!0}},listeners:{transitionend:"__onTransitionEnd"},get visible(){Base._warn("`visible` is deprecated, use `opened` instead");return this.opened},get _canAutoClose(){return 0<this.duration&&this.duration!==1/0},created:function(){this._autoClose=null;IronA11yAnnouncer.requestAvailability()},show:function(properties){if("string"==typeof properties){properties={text:properties}}for(var property in properties){if(0===property.indexOf("_")){Base._warn("The property \""+property+"\" is private and was not set.")}else if(property in this){this[property]=properties[property]}else{Base._warn("The property \""+property+"\" is not valid.")}}this.open()},hide:function(){this.close()},__onTransitionEnd:function(e){if(e&&e.target===this&&"opacity"===e.propertyName){if(this.opened){this._finishRenderOpened()}else{this._finishRenderClosed()}}},_openedChanged:function(){if(null!==this._autoClose){this.cancelAsync(this._autoClose);this._autoClose=null}if(this.opened){if(currentToast&&currentToast!==this){currentToast.close()}currentToast=this;this.fire("iron-announce",{text:this.text});if(this._canAutoClose){this._autoClose=this.async(this.close,this.duration)}}else if(currentToast===this){currentToast=null}IronOverlayBehaviorImpl._openedChanged.apply(this,arguments)},_renderOpened:function(){this.classList.add("paper-toast-open")},_renderClosed:function(){this.classList.remove("paper-toast-open")},_onFitIntoChanged:function(fitInto){this.positionTarget=fitInto}});const DISABLED_ATTR="disable-upgrade",DisableUpgradeMixin=dedupingMixin(base=>{const superClass=ElementMixin(base);class DisableUpgradeClass extends superClass{static get observedAttributes(){return super.observedAttributes.concat(DISABLED_ATTR)}attributeChangedCallback(name,old,value,namespace){if(name==DISABLED_ATTR){if(!this.__dataEnabled&&null==value&&this.isConnected){super.connectedCallback()}}else{super.attributeChangedCallback(name,old,value,namespace)}}_initializeProperties(){}connectedCallback(){if(this.__dataEnabled||!this.hasAttribute(DISABLED_ATTR)){super.connectedCallback()}}_enableProperties(){if(!this.hasAttribute(DISABLED_ATTR)){if(!this.__dataEnabled){super._initializeProperties()}super._enableProperties()}}disconnectedCallback(){if(this.__dataEnabled){super.disconnectedCallback()}}}return DisableUpgradeClass});_exports.DisableUpgradeMixin=DisableUpgradeMixin;var disableUpgradeMixin={DisableUpgradeMixin:DisableUpgradeMixin};_exports.$disableUpgradeMixin=disableUpgradeMixin;const ThemePropertyMixin=superClass=>class VaadinThemePropertyMixin extends superClass{static get properties(){return{theme:{type:String,readOnly:!0}}}attributeChangedCallback(name,oldValue,newValue){super.attributeChangedCallback(name,oldValue,newValue);if("theme"===name){this._setTheme(newValue)}}};_exports.ThemePropertyMixin=ThemePropertyMixin;var vaadinThemePropertyMixin={ThemePropertyMixin:ThemePropertyMixin};_exports.$vaadinThemePropertyMixin=vaadinThemePropertyMixin;const ThemableMixin=superClass=>class VaadinThemableMixin extends ThemePropertyMixin(superClass){static finalize(){super.finalize();const template=this.prototype._template,hasOwnTemplate=this.template&&this.template.parentElement&&this.template.parentElement.id===this.is,inheritedTemplate=Object.getPrototypeOf(this.prototype)._template;if(inheritedTemplate&&!hasOwnTemplate){Array.from(inheritedTemplate.content.querySelectorAll("style[include]")).forEach(s=>{this._includeStyle(s.getAttribute("include"),template)})}this._includeMatchingThemes(template)}static _includeMatchingThemes(template){const domModule=DomModule,modules=domModule.prototype.modules;let hasThemes=!1;const defaultModuleName=this.is+"-default-theme";Object.keys(modules).sort((moduleNameA,moduleNameB)=>{const vaadinA=0===moduleNameA.indexOf("vaadin-"),vaadinB=0===moduleNameB.indexOf("vaadin-"),vaadinThemePrefixes=["lumo-","material-"],vaadinThemeA=0<vaadinThemePrefixes.filter(prefix=>0===moduleNameA.indexOf(prefix)).length,vaadinThemeB=0<vaadinThemePrefixes.filter(prefix=>0===moduleNameB.indexOf(prefix)).length;if(vaadinA!==vaadinB){return vaadinA?-1:1}else if(vaadinThemeA!==vaadinThemeB){return vaadinThemeA?-1:1}else{return 0}}).forEach(moduleName=>{if(moduleName!==defaultModuleName){const themeFor=modules[moduleName].getAttribute("theme-for");if(themeFor){themeFor.split(" ").forEach(themeForToken=>{if(new RegExp("^"+themeForToken.split("*").join(".*")+"$").test(this.is)){hasThemes=!0;this._includeStyle(moduleName,template)}})}}});if(!hasThemes&&modules[defaultModuleName]){this._includeStyle(defaultModuleName,template)}}static _includeStyle(moduleName,template){if(template&&!template.content.querySelector(`style[include="${moduleName}"]`)){const styleEl=document.createElement("style");styleEl.setAttribute("include",moduleName);template.content.appendChild(styleEl)}}};_exports.ThemableMixin=ThemableMixin;var vaadinThemableMixin={ThemableMixin:ThemableMixin};_exports.$vaadinThemableMixin=vaadinThemableMixin;const TabIndexMixin=superClass=>class VaadinTabIndexMixin extends superClass{static get properties(){var properties={tabindex:{type:Number,value:0,reflectToAttribute:!0,observer:"_tabindexChanged"}};if(window.ShadyDOM){properties.tabIndex=properties.tabindex}return properties}},ControlStateMixin=superClass=>class VaadinControlStateMixin extends TabIndexMixin(superClass){static get properties(){return{autofocus:{type:Boolean},_previousTabIndex:{type:Number},disabled:{type:Boolean,observer:"_disabledChanged",reflectToAttribute:!0},_isShiftTabbing:{type:Boolean}}}ready(){this.addEventListener("focusin",e=>{if(e.composedPath()[0]===this){this._focus(e)}else if(-1!==e.composedPath().indexOf(this.focusElement)&&!this.disabled){this._setFocused(!0)}});this.addEventListener("focusout",e=>this._setFocused(!1));super.ready();const ensureEventComposed=e=>{if(!e.composed){e.target.dispatchEvent(new CustomEvent(e.type,{bubbles:!0,composed:!0,cancelable:!1}))}};this.shadowRoot.addEventListener("focusin",ensureEventComposed);this.shadowRoot.addEventListener("focusout",ensureEventComposed);this.addEventListener("keydown",e=>{if(!e.defaultPrevented&&9===e.keyCode){if(e.shiftKey){this._isShiftTabbing=!0;HTMLElement.prototype.focus.apply(this);this._setFocused(!1);setTimeout(()=>this._isShiftTabbing=!1,0)}else{const firefox=window.navigator.userAgent.match(/Firefox\/(\d\d\.\d)/);if(firefox&&63<=parseFloat(firefox[1])&&66>parseFloat(firefox[1])&&this.parentNode&&this.nextSibling){const fakeTarget=document.createElement("input");fakeTarget.style.position="absolute";fakeTarget.style.opacity=0;fakeTarget.tabIndex=this.tabIndex;this.parentNode.insertBefore(fakeTarget,this.nextSibling);fakeTarget.focus();fakeTarget.addEventListener("focusout",()=>this.parentNode.removeChild(fakeTarget))}}}});if(this.autofocus&&!this.focused&&!this.disabled){window.requestAnimationFrame(()=>{this._focus();this._setFocused(!0);this.setAttribute("focus-ring","")})}this._boundKeydownListener=this._bodyKeydownListener.bind(this);this._boundKeyupListener=this._bodyKeyupListener.bind(this)}connectedCallback(){super.connectedCallback();document.body.addEventListener("keydown",this._boundKeydownListener,!0);document.body.addEventListener("keyup",this._boundKeyupListener,!0)}disconnectedCallback(){super.disconnectedCallback();document.body.removeEventListener("keydown",this._boundKeydownListener,!0);document.body.removeEventListener("keyup",this._boundKeyupListener,!0);if(this.hasAttribute("focused")){this._setFocused(!1)}}_setFocused(focused){if(focused){this.setAttribute("focused","")}else{this.removeAttribute("focused")}if(focused&&this._tabPressed){this.setAttribute("focus-ring","")}else{this.removeAttribute("focus-ring")}}_bodyKeydownListener(e){this._tabPressed=9===e.keyCode}_bodyKeyupListener(){this._tabPressed=!1}get focusElement(){window.console.warn(`Please implement the 'focusElement' property in <${this.localName}>`);return this}_focus(e){if(this._isShiftTabbing){return}this.focusElement.focus();this._setFocused(!0)}focus(){if(!this.focusElement||this.disabled){return}this.focusElement.focus();this._setFocused(!0)}blur(){this.focusElement.blur();this._setFocused(!1)}_disabledChanged(disabled){this.focusElement.disabled=disabled;if(disabled){this.blur();this._previousTabIndex=this.tabindex;this.tabindex=-1;this.setAttribute("aria-disabled","true")}else{if("undefined"!==typeof this._previousTabIndex){this.tabindex=this._previousTabIndex}this.removeAttribute("aria-disabled")}}_tabindexChanged(tabindex){if(tabindex!==void 0){this.focusElement.tabIndex=tabindex}if(this.disabled&&this.tabindex){if(-1!==this.tabindex){this._previousTabIndex=this.tabindex}this.tabindex=tabindex=void 0}if(window.ShadyDOM){this.setProperties({tabIndex:tabindex,tabindex:tabindex})}}click(){if(!this.disabled){super.click()}}};_exports.ControlStateMixin=ControlStateMixin;var vaadinControlStateMixin={ControlStateMixin:ControlStateMixin};_exports.$vaadinControlStateMixin=vaadinControlStateMixin;const DEV_MODE_CODE_REGEXP=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i;function isMinified(){function test(){return!0}return uncommentAndRun(test)}function isDevelopmentMode(){try{return isForcedDevelopmentMode()||isLocalhost()&&!isMinified()&&!isFlowProductionMode()}catch(e){return!1}}function isForcedDevelopmentMode(){return localStorage.getItem("vaadin.developmentmode.force")}function isLocalhost(){return 0<=["localhost","127.0.0.1"].indexOf(window.location.hostname)}function isFlowProductionMode(){if(window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients){const productionModeApps=Object.keys(window.Vaadin.Flow.clients).map(key=>window.Vaadin.Flow.clients[key]).filter(client=>client.productionMode);if(0<productionModeApps.length){return!0}}return!1}function uncommentAndRun(callback,args){if("function"!==typeof callback){return}const match=DEV_MODE_CODE_REGEXP.exec(callback.toString());if(match){try{callback=new Function(match[1])}catch(e){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",e)}}return callback(args)}window.Vaadin=window.Vaadin||{};const runIfDevelopmentMode=function(callback,args){if(window.Vaadin.developmentMode){return uncommentAndRun(callback,args)}};_exports.runIfDevelopmentMode=runIfDevelopmentMode;if(window.Vaadin.developmentMode===void 0){window.Vaadin.developmentMode=isDevelopmentMode()}var vaadinDevelopmentModeDetector={runIfDevelopmentMode:runIfDevelopmentMode};_exports.$vaadinDevelopmentModeDetector=vaadinDevelopmentModeDetector;function maybeGatherAndSendStats(){}const usageStatistics=function(){if("function"===typeof runIfDevelopmentMode){return runIfDevelopmentMode(maybeGatherAndSendStats)}};_exports.usageStatistics=usageStatistics;var vaadinUsageStatistics={usageStatistics:usageStatistics};_exports.$vaadinUsageStatistics=vaadinUsageStatistics;if(!window.Vaadin){window.Vaadin={}}window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{};window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){if(usageStatistics){usageStatistics()}};let statsJob;const ElementMixin$1=superClass=>class VaadinElementMixin extends superClass{static _finalizeClass(){super._finalizeClass();if(this.is){window.Vaadin.registrations.push(this);if(window.Vaadin.developmentModeCallback){statsJob=Debouncer.debounce(statsJob,idlePeriod,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()});enqueueDebouncer(statsJob)}}}ready(){super.ready();if(null===document.doctype){console.warn("Vaadin components require the \"standards mode\" declaration. Please add <!DOCTYPE html> to the HTML document.")}}};_exports.ElementMixin=ElementMixin$1;var vaadinElementMixin={ElementMixin:ElementMixin$1};_exports.$vaadinElementMixin=vaadinElementMixin;class ButtonElement extends ElementMixin$1(ControlStateMixin(ThemableMixin(GestureEventListeners(PolymerElement)))){static get template(){return html`
    <style>
      :host {
        display: inline-block;
        position: relative;
        outline: none;
        white-space: nowrap;
      }

      :host([hidden]) {
        display: none !important;
      }

      /* Ensure the button is always aligned on the baseline */
      .vaadin-button-container::before {
        content: "\\2003";
        display: inline-block;
        width: 0;
      }

      .vaadin-button-container {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100%;
        height: 100%;
        min-height: inherit;
        text-shadow: inherit;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      [part="prefix"],
      [part="suffix"] {
        flex: none;
      }

      [part="label"] {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      #button {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
      }
    </style>
    <div class="vaadin-button-container">
      <div part="prefix">
        <slot name="prefix"></slot>
      </div>
      <div part="label">
        <slot></slot>
      </div>
      <div part="suffix">
        <slot name="suffix"></slot>
      </div>
    </div>
    <button id="button" type="button"></button>
`}static get is(){return"vaadin-button"}static get version(){return"2.2.0"}ready(){super.ready();this.setAttribute("role","button");this.$.button.setAttribute("role","presentation");this._addActiveListeners()}disconnectedCallback(){super.disconnectedCallback();if(this.hasAttribute("active")){this.removeAttribute("active")}}_addActiveListeners(){addListener(this,"down",()=>!this.disabled&&this.setAttribute("active",""));addListener(this,"up",()=>this.removeAttribute("active"));this.addEventListener("keydown",e=>!this.disabled&&0<=[13,32].indexOf(e.keyCode)&&this.setAttribute("active",""));this.addEventListener("keyup",()=>this.removeAttribute("active"));this.addEventListener("blur",()=>this.removeAttribute("active"))}get focusElement(){return this.$.button}}_exports.ButtonElement=ButtonElement;customElements.define(ButtonElement.is,ButtonElement);var vaadinButton={ButtonElement:ButtonElement};_exports.$vaadinButton=vaadinButton;class Lumo extends HTMLElement{static get version(){return"1.4.2"}}_exports.Lumo=Lumo;customElements.define("vaadin-lumo-styles",Lumo);var version$1={Lumo:Lumo};_exports.$version=version$1;const $_documentContainer$3=document.createElement("template");$_documentContainer$3.innerHTML=`<custom-style>
  <style>
    html {
      /* Base (background) */
      --lumo-base-color: #FFF;

      /* Tint */
      --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
      --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
      --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
      --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
      --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
      --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
      --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
      --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
      --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
      --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
      --lumo-tint: #FFF;

      /* Shade */
      --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
      --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
      --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
      --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
      --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
      --lumo-shade-50pct: hsla(214, 45%, 20%, 0.5);
      --lumo-shade-60pct: hsla(214, 43%, 19%, 0.61);
      --lumo-shade-70pct: hsla(214, 42%, 18%, 0.72);
      --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
      --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
      --lumo-shade: hsl(214, 35%, 15%);

      /* Contrast */
      --lumo-contrast-5pct: var(--lumo-shade-5pct);
      --lumo-contrast-10pct: var(--lumo-shade-10pct);
      --lumo-contrast-20pct: var(--lumo-shade-20pct);
      --lumo-contrast-30pct: var(--lumo-shade-30pct);
      --lumo-contrast-40pct: var(--lumo-shade-40pct);
      --lumo-contrast-50pct: var(--lumo-shade-50pct);
      --lumo-contrast-60pct: var(--lumo-shade-60pct);
      --lumo-contrast-70pct: var(--lumo-shade-70pct);
      --lumo-contrast-80pct: var(--lumo-shade-80pct);
      --lumo-contrast-90pct: var(--lumo-shade-90pct);
      --lumo-contrast: var(--lumo-shade);

      /* Text */
      --lumo-header-text-color: var(--lumo-contrast);
      --lumo-body-text-color: var(--lumo-contrast-90pct);
      --lumo-secondary-text-color: var(--lumo-contrast-70pct);
      --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
      --lumo-disabled-text-color: var(--lumo-contrast-30pct);

      /* Primary */
      --lumo-primary-color: hsl(214, 90%, 52%);
      --lumo-primary-color-50pct: hsla(214, 90%, 52%, 0.5);
      --lumo-primary-color-10pct: hsla(214, 90%, 52%, 0.1);
      --lumo-primary-text-color: var(--lumo-primary-color);
      --lumo-primary-contrast-color: #FFF;

      /* Error */
      --lumo-error-color: hsl(3, 100%, 61%);
      --lumo-error-color-50pct: hsla(3, 100%, 60%, 0.5);
      --lumo-error-color-10pct: hsla(3, 100%, 60%, 0.1);
      --lumo-error-text-color: hsl(3, 92%, 53%);
      --lumo-error-contrast-color: #FFF;

      /* Success */
      --lumo-success-color: hsl(145, 80%, 42%); /* hsl(144,82%,37%); */
      --lumo-success-color-50pct: hsla(145, 76%, 44%, 0.55);
      --lumo-success-color-10pct: hsla(145, 76%, 44%, 0.12);
      --lumo-success-text-color: hsl(145, 100%, 32%);
      --lumo-success-contrast-color: #FFF;
    }
  </style>
</custom-style><dom-module id="lumo-color">
  <template>
    <style>
      [theme~="dark"] {
        /* Base (background) */
        --lumo-base-color: hsl(214, 35%, 21%);

        /* Tint */
        --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
        --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
        --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
        --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
        --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
        --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
        --lumo-tint-60pct: hsla(214, 82%, 90%, 0.6);
        --lumo-tint-70pct: hsla(214, 87%, 92%, 0.7);
        --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
        --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
        --lumo-tint: hsl(214, 100%, 98%);

        /* Shade */
        --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
        --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
        --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
        --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
        --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
        --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
        --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
        --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
        --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
        --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
        --lumo-shade: hsl(214, 33%, 13%);

        /* Contrast */
        --lumo-contrast-5pct: var(--lumo-tint-5pct);
        --lumo-contrast-10pct: var(--lumo-tint-10pct);
        --lumo-contrast-20pct: var(--lumo-tint-20pct);
        --lumo-contrast-30pct: var(--lumo-tint-30pct);
        --lumo-contrast-40pct: var(--lumo-tint-40pct);
        --lumo-contrast-50pct: var(--lumo-tint-50pct);
        --lumo-contrast-60pct: var(--lumo-tint-60pct);
        --lumo-contrast-70pct: var(--lumo-tint-70pct);
        --lumo-contrast-80pct: var(--lumo-tint-80pct);
        --lumo-contrast-90pct: var(--lumo-tint-90pct);
        --lumo-contrast: var(--lumo-tint);

        /* Text */
        --lumo-header-text-color: var(--lumo-contrast);
        --lumo-body-text-color: var(--lumo-contrast-90pct);
        --lumo-secondary-text-color: var(--lumo-contrast-70pct);
        --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
        --lumo-disabled-text-color: var(--lumo-contrast-30pct);

        /* Primary */
        --lumo-primary-color: hsl(214, 86%, 55%);
        --lumo-primary-color-50pct: hsla(214, 86%, 55%, 0.5);
        --lumo-primary-color-10pct: hsla(214, 90%, 63%, 0.1);
        --lumo-primary-text-color: hsl(214, 100%, 70%);
        --lumo-primary-contrast-color: #FFF;

        /* Error */
        --lumo-error-color: hsl(3, 90%, 63%);
        --lumo-error-color-50pct: hsla(3, 90%, 63%, 0.5);
        --lumo-error-color-10pct: hsla(3, 90%, 63%, 0.1);
        --lumo-error-text-color: hsl(3, 100%, 67%);

        /* Success */
        --lumo-success-color: hsl(145, 65%, 42%);
        --lumo-success-color-50pct: hsla(145, 65%, 42%, 0.5);
        --lumo-success-color-10pct: hsla(145, 65%, 42%, 0.1);
        --lumo-success-text-color: hsl(145, 85%, 47%);
      }

      html {
        color: var(--lumo-body-text-color);
        background-color: var(--lumo-base-color);
      }

      [theme~="dark"] {
        color: var(--lumo-body-text-color);
        background-color: var(--lumo-base-color);
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        color: var(--lumo-header-text-color);
      }

      a {
        color: var(--lumo-primary-text-color);
      }

      blockquote {
        color: var(--lumo-secondary-text-color);
      }

      code,
      pre {
        background-color: var(--lumo-contrast-10pct);
        border-radius: var(--lumo-border-radius-m);
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-color-legacy">
  <template>
    <style include="lumo-color">
      :host {
        color: var(--lumo-body-text-color) !important;
        background-color: var(--lumo-base-color) !important;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$3.content);const $_documentContainer$4=document.createElement("template");$_documentContainer$4.innerHTML=`<custom-style>
  <style>
    html {
      --lumo-size-xs: 1.625rem;
      --lumo-size-s: 1.875rem;
      --lumo-size-m: 2.25rem;
      --lumo-size-l: 2.75rem;
      --lumo-size-xl: 3.5rem;

      /* Icons */
      --lumo-icon-size-s: 1.25em;
      --lumo-icon-size-m: 1.5em;
      --lumo-icon-size-l: 2.25em;
      /* For backwards compatibility */
      --lumo-icon-size: var(--lumo-icon-size-m);
    }
  </style>
</custom-style>`;document.head.appendChild($_documentContainer$4.content);const $_documentContainer$5=document.createElement("template");$_documentContainer$5.innerHTML=`<custom-style>
  <style>
    html {
      /* Square */
      --lumo-space-xs: 0.25rem;
      --lumo-space-s: 0.5rem;
      --lumo-space-m: 1rem;
      --lumo-space-l: 1.5rem;
      --lumo-space-xl: 2.5rem;

      /* Wide */
      --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
      --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
      --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
      --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
      --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

      /* Tall */
      --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
      --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
      --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
      --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
      --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
    }
  </style>
</custom-style>`;document.head.appendChild($_documentContainer$5.content);const $_documentContainer$6=document.createElement("template");$_documentContainer$6.innerHTML=`<custom-style>
  <style>
    html {
      /* Border radius */
      --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
      --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
      --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */
      --lumo-border-radius: 0.25em; /* Deprecated */

      /* Shadow */
      --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
      --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
      --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
      --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
      --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

      /* Clickable element cursor */
      --lumo-clickable-cursor: default;
    }
  </style>
</custom-style>`;document.head.appendChild($_documentContainer$6.content);const $_documentContainer$7=document.createElement("template");$_documentContainer$7.innerHTML=`<custom-style>
  <style>
    html {
      /* Font families */
      --lumo-font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

      /* Font sizes */
      --lumo-font-size-xxs: .75rem;
      --lumo-font-size-xs: .8125rem;
      --lumo-font-size-s: .875rem;
      --lumo-font-size-m: 1rem;
      --lumo-font-size-l: 1.125rem;
      --lumo-font-size-xl: 1.375rem;
      --lumo-font-size-xxl: 1.75rem;
      --lumo-font-size-xxxl: 2.5rem;

      /* Line heights */
      --lumo-line-height-xs: 1.25;
      --lumo-line-height-s: 1.375;
      --lumo-line-height-m: 1.625;
    }

  </style>
</custom-style><dom-module id="lumo-typography">
  <template>
    <style>
      html {
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size, var(--lumo-font-size-m));
        line-height: var(--lumo-line-height-m);
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      /* Can’t combine with the above selector because that doesn’t work in browsers without native shadow dom */
      :host {
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size, var(--lumo-font-size-m));
        line-height: var(--lumo-line-height-m);
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      small,
      [theme~="font-size-s"] {
        font-size: var(--lumo-font-size-s);
        line-height: var(--lumo-line-height-s);
      }

      [theme~="font-size-xs"] {
        font-size: var(--lumo-font-size-xs);
        line-height: var(--lumo-line-height-xs);
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-weight: 600;
        line-height: var(--lumo-line-height-xs);
        margin-top: 1.25em;
      }

      h1 {
        font-size: var(--lumo-font-size-xxxl);
        margin-bottom: 0.75em;
      }

      h2 {
        font-size: var(--lumo-font-size-xxl);
        margin-bottom: 0.5em;
      }

      h3 {
        font-size: var(--lumo-font-size-xl);
        margin-bottom: 0.5em;
      }

      h4 {
        font-size: var(--lumo-font-size-l);
        margin-bottom: 0.5em;
      }

      h5 {
        font-size: var(--lumo-font-size-m);
        margin-bottom: 0.25em;
      }

      h6 {
        font-size: var(--lumo-font-size-xs);
        margin-bottom: 0;
        text-transform: uppercase;
        letter-spacing: 0.03em;
      }

      p,
      blockquote {
        margin-top: 0.5em;
        margin-bottom: 0.75em;
      }

      a {
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }

      hr {
        display: block;
        align-self: stretch;
        height: 1px;
        border: 0;
        padding: 0;
        margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
        background-color: var(--lumo-contrast-10pct);
      }

      blockquote {
        border-left: 2px solid var(--lumo-contrast-30pct);
      }

      b,
      strong {
        font-weight: 600;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$7.content);const $_documentContainer$8=html`<dom-module id="lumo-button" theme-for="vaadin-button">
  <template>
    <style>
      :host {
        /* Sizing */
        --lumo-button-size: var(--lumo-size-m);
        min-width: calc(var(--lumo-button-size) * 2);
        height: var(--lumo-button-size);
        padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius) / 2);
        margin: var(--lumo-space-xs) 0;
        box-sizing: border-box;
        /* Style */
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        font-weight: 500;
        color: var(--_lumo-button-color, var(--lumo-primary-text-color));
        background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));
        border-radius: var(--lumo-border-radius);
        cursor: default;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      /* Set only for the internal parts so we don’t affect the host vertical alignment */
      [part="label"],
      [part="prefix"],
      [part="suffix"] {
        line-height: var(--lumo-line-height-xs);
      }

      [part="label"] {
        padding: calc(var(--lumo-button-size) / 6) 0;
      }

      :host([theme~="small"]) {
        font-size: var(--lumo-font-size-s);
        --lumo-button-size: var(--lumo-size-s);
      }

      :host([theme~="large"]) {
        font-size: var(--lumo-font-size-l);
        --lumo-button-size: var(--lumo-size-l);
      }

      /* This needs to be the last selector for it to take priority */
      :host([disabled][disabled]) {
        pointer-events: none;
        color: var(--lumo-disabled-text-color);
        background-color: var(--lumo-contrast-5pct);
      }

      /* For interaction states */
      :host::before,
      :host::after {
        content: "";
        /* We rely on the host always being relative */
        position: absolute;
        z-index: 1;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: currentColor;
        border-radius: inherit;
        opacity: 0;
        transition: opacity 0.2s;
        pointer-events: none;
      }

      /* Hover */

      :host(:hover)::before {
        opacity: 0.05;
      }

      /* Disable hover for touch devices */
      @media (pointer: coarse) {
        :host(:not([active]):hover)::before {
          opacity: 0;
        }
      }

      /* Active */

      :host::after {
        transition: opacity 1.4s, transform 0.1s;
        filter: blur(8px);
      }

      :host([active])::before {
        opacity: 0.1;
        transition-duration: 0s;
      }

      :host([active])::after {
        opacity: 0.1;
        transition-duration: 0s, 0s;
        transform: scale(0);
      }

      /* Keyboard focus */

      :host([focus-ring]) {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Types (primary, tertiary, tertiary-inline */

      :host([theme~="tertiary"]),
      :host([theme~="tertiary-inline"]) {
        background-color: transparent !important;
        transition: opacity 0.2s;
        min-width: 0;
      }

      :host([theme~="tertiary"])::before,
      :host([theme~="tertiary-inline"])::before {
        display: none;
      }

      :host([theme~="tertiary"]) {
        padding: 0 calc(var(--lumo-button-size) / 6);
      }

      @media (hover: hover) {
        :host([theme*="tertiary"]:not([active]):hover) {
          opacity: 0.8;
        }
      }

      :host([theme~="tertiary"][active]),
      :host([theme~="tertiary-inline"][active]) {
        opacity: 0.5;
        transition-duration: 0s;
      }

      :host([theme~="tertiary-inline"]) {
        margin: 0;
        height: auto;
        padding: 0;
        line-height: inherit;
        font-size: inherit;
      }

      :host([theme~="tertiary-inline"]) [part="label"] {
        padding: 0;
        overflow: visible;
        line-height: inherit;
      }

      :host([theme~="primary"]) {
        background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));
        color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));
        font-weight: 600;
        min-width: calc(var(--lumo-button-size) * 2.5);
      }

      :host([theme~="primary"][disabled]) {
        background-color: var(--lumo-primary-color-50pct);
        color: var(--lumo-primary-contrast-color);
      }

      :host([theme~="primary"]:hover)::before {
        opacity: 0.1;
      }

      :host([theme~="primary"][active])::before {
        background-color: var(--lumo-shade-20pct);
      }

      @media (pointer: coarse) {
        :host([theme~="primary"][active])::before {
          background-color: var(--lumo-shade-60pct);
        }

        :host([theme~="primary"]:not([active]):hover)::before {
          opacity: 0;
        }
      }

      :host([theme~="primary"][active])::after {
        opacity: 0.2;
      }

      /* Colors (success, error, contrast) */

      :host([theme~="success"]) {
        color: var(--lumo-success-text-color);
      }

      :host([theme~="success"][theme~="primary"]) {
        background-color: var(--lumo-success-color);
        color: var(--lumo-success-contrast-color);
      }

      :host([theme~="success"][theme~="primary"][disabled]) {
        background-color: var(--lumo-success-color-50pct);
      }

      :host([theme~="error"]) {
        color: var(--lumo-error-text-color);
      }

      :host([theme~="error"][theme~="primary"]) {
        background-color: var(--lumo-error-color);
        color: var(--lumo-error-contrast-color);
      }

      :host([theme~="error"][theme~="primary"][disabled]) {
        background-color: var(--lumo-error-color-50pct);
      }

      :host([theme~="contrast"]) {
        color: var(--lumo-contrast);
      }

      :host([theme~="contrast"][theme~="primary"]) {
        background-color: var(--lumo-contrast);
        color: var(--lumo-base-color);
      }

      :host([theme~="contrast"][theme~="primary"][disabled]) {
        background-color: var(--lumo-contrast-50pct);
      }

      /* Icons */

      [part] ::slotted(iron-icon) {
        display: inline-block;
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
      [part] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: 0.25em;
        box-sizing: border-box !important;
      }

      [part="prefix"] {
        margin-left: -0.25em;
        margin-right: 0.25em;
      }

      [part="suffix"] {
        margin-left: 0.25em;
        margin-right: -0.25em;
      }

      /* Icon-only */

      :host([theme~="icon"]) {
        min-width: var(--lumo-button-size);
        padding-left: calc(var(--lumo-button-size) / 4);
        padding-right: calc(var(--lumo-button-size) / 4);
      }

      :host([theme~="icon"]) [part="prefix"],
      :host([theme~="icon"]) [part="suffix"] {
        margin-left: 0;
        margin-right: 0;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$8.content);class CheckboxElement extends ElementMixin$1(ControlStateMixin(ThemableMixin(GestureEventListeners(PolymerElement)))){static get template(){return html`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      label {
        display: inline-flex;
        align-items: baseline;
        outline: none;
      }

      [part="checkbox"] {
        position: relative;
        display: inline-block;
        flex: none;
      }

      input[type="checkbox"] {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
        margin: 0;
      }

      :host([disabled]) {
        -webkit-tap-highlight-color: transparent;
      }
    </style>

    <label>
      <span part="checkbox">
        <input type="checkbox" checked="{{checked::change}}" disabled\$="[[disabled]]" indeterminate="{{indeterminate::change}}" role="presentation" tabindex="-1">
      </span>

      <span part="label">
        <slot></slot>
      </span>
    </label>
`}static get is(){return"vaadin-checkbox"}static get version(){return"2.2.7"}static get properties(){return{checked:{type:Boolean,value:!1,notify:!0,observer:"_checkedChanged",reflectToAttribute:!0},indeterminate:{type:Boolean,notify:!0,observer:"_indeterminateChanged",reflectToAttribute:!0,value:!1},value:{type:String,value:"on"},_nativeCheckbox:{type:Object}}}constructor(){super();this.name}get name(){return this.checked?this._storedName:""}set name(name){this._storedName=name}ready(){super.ready();this.setAttribute("role","checkbox");this._nativeCheckbox=this.shadowRoot.querySelector("input[type=\"checkbox\"]");this.addEventListener("click",this._handleClick.bind(this));this._addActiveListeners();const attrName=this.getAttribute("name");if(attrName){this.name=attrName}this.shadowRoot.querySelector("[part~=\"label\"]").querySelector("slot").addEventListener("slotchange",this._updateLabelAttribute.bind(this));this._updateLabelAttribute()}_updateLabelAttribute(){const label=this.shadowRoot.querySelector("[part~=\"label\"]"),assignedNodes=label.firstElementChild.assignedNodes();if(this._isAssignedNodesEmpty(assignedNodes)){label.setAttribute("empty","")}else{label.removeAttribute("empty")}}_isAssignedNodesEmpty(nodes){return 0===nodes.length||1==nodes.length&&nodes[0].nodeType==Node.TEXT_NODE&&""===nodes[0].textContent.trim()}_checkedChanged(checked){if(this.indeterminate){this.setAttribute("aria-checked","mixed")}else{this.setAttribute("aria-checked",checked)}}_indeterminateChanged(indeterminate){if(indeterminate){this.setAttribute("aria-checked","mixed")}else{this.setAttribute("aria-checked",this.checked)}}_addActiveListeners(){this._addEventListenerToNode(this,"down",e=>{if(this.__interactionsAllowed(e)){this.setAttribute("active","")}});this._addEventListenerToNode(this,"up",()=>this.removeAttribute("active"));this.addEventListener("keydown",e=>{if(this.__interactionsAllowed(e)&&32===e.keyCode){e.preventDefault();this.setAttribute("active","")}});this.addEventListener("keyup",e=>{if(this.__interactionsAllowed(e)&&32===e.keyCode){e.preventDefault();this._toggleChecked();this.removeAttribute("active");if(this.indeterminate){this.indeterminate=!1}}})}get focusElement(){return this.shadowRoot.querySelector("input")}__interactionsAllowed(e){if(this.disabled){return!1}if("a"===e.target.localName){return!1}return!0}_handleClick(e){if(this.__interactionsAllowed(e)){if(!this.indeterminate){if(e.composedPath()[0]!==this._nativeCheckbox){e.preventDefault();this._toggleChecked()}}else{this.indeterminate=!1;e.preventDefault();this._toggleChecked()}}}_toggleChecked(){this.checked=!this.checked;this.dispatchEvent(new CustomEvent("change",{composed:!0,bubbles:!0}))}}_exports.CheckboxElement=CheckboxElement;customElements.define(CheckboxElement.is,CheckboxElement);var vaadinCheckbox={CheckboxElement:CheckboxElement};_exports.$vaadinCheckbox=vaadinCheckbox;const $_documentContainer$9=html`<dom-module id="lumo-checkbox" theme-for="vaadin-checkbox">
  <template>
    <style include="lumo-checkbox-style lumo-checkbox-effects">
      /* IE11 only */
      ::-ms-backdrop,
      [part="checkbox"] {
        line-height: 1;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-checkbox-style">
  <template>
    <style>
      :host {
        -webkit-tap-highlight-color: transparent;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: default;
        outline: none;
      }

      [part="label"]:not([empty]) {
        margin: 0.1875em 0.875em 0.1875em 0.375em;
      }

      [part="checkbox"] {
        width: calc(1em + 2px);
        height: calc(1em + 2px);
        margin: 0.1875em;
        position: relative;
        border-radius: var(--lumo-border-radius);
        background-color: var(--lumo-contrast-20pct);
        transition: transform 0.2s cubic-bezier(.12, .32, .54, 2), background-color 0.15s;
        pointer-events: none;
        line-height: 1.2;
      }

      :host([indeterminate]) [part="checkbox"],
      :host([checked]) [part="checkbox"] {
        background-color: var(--lumo-primary-color);
      }

      /* Needed to align the checkbox nicely on the baseline */
      [part="checkbox"]::before {
        content: "\\2003";
      }

      /* Checkmark */
      [part="checkbox"]::after {
        content: "";
        display: inline-block;
        width: 0;
        height: 0;
        border: 0 solid var(--lumo-primary-contrast-color);
        border-width: 0.1875em 0 0 0.1875em;
        box-sizing: border-box;
        transform-origin: 0 0;
        position: absolute;
        top: 0.8125em;
        left: 0.5em;
        transform: scale(0.55) rotate(-135deg);
        opacity: 0;
      }

      :host([checked]) [part="checkbox"]::after {
        opacity: 1;
        width: 0.625em;
        height: 1.0625em;
      }

      /* Indeterminate checkmark */

      :host([indeterminate]) [part="checkbox"]::after {
        transform: none;
        opacity: 1;
        top: 45%;
        height: 10%;
        left: 22%;
        right: 22%;
        width: auto;
        border: 0;
        background-color: var(--lumo-primary-contrast-color);
        transition: opacity 0.25s;
      }

      /* Focus ring */

      :host([focus-ring]) [part="checkbox"] {
        box-shadow: 0 0 0 3px var(--lumo-primary-color-50pct);
      }

      /* Disabled */

      :host([disabled]) {
        pointer-events: none;
        color: var(--lumo-disabled-text-color);
      }

      :host([disabled]) [part="label"] ::slotted(*) {
        color: inherit;
      }

      :host([disabled]) [part="checkbox"] {
        background-color: var(--lumo-contrast-10pct);
      }

      :host([disabled]) [part="checkbox"]::after {
        border-color: var(--lumo-contrast-30pct);
      }

      :host([indeterminate][disabled]) [part="checkbox"]::after {
        background-color: var(--lumo-contrast-30pct);
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-checkbox-effects">
  <template>
    <style>
      /* Transition the checkmark if activated with the mouse (disabled for grid select-all this way) */
      :host(:hover) [part="checkbox"]::after {
        transition: width 0.1s, height 0.25s;
      }

      /* Used for activation "halo" */
      [part="checkbox"]::before {
        color: transparent;
        display: inline-block;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        background-color: inherit;
        transform: scale(1.4);
        opacity: 0;
        transition: transform 0.1s, opacity 0.8s;
      }

      /* Hover */

      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part="checkbox"] {
        background-color: var(--lumo-contrast-30pct);
      }

      /* Disable hover for touch devices */
      @media (pointer: coarse) {
        :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part="checkbox"] {
          background-color: var(--lumo-contrast-20pct);
        }
      }

      /* Active */

      :host([active]) [part="checkbox"] {
        transform: scale(0.9);
        transition-duration: 0.05s;
      }

      :host([active][checked]) [part="checkbox"] {
        transform: scale(1.1);
      }

      :host([active]:not([checked])) [part="checkbox"]::before {
        transition-duration: 0.01s, 0.01s;
        transform: scale(0);
        opacity: 0.4;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$9.content);const DatePickerHelper=class VaadinDatePickerHelper{static _getISOWeekNumber(date){var dayOfWeek=date.getDay();if(0===dayOfWeek){dayOfWeek=7}var nearestThursdayDiff=4-dayOfWeek,nearestThursday=new Date(date.getTime()+1e3*(3600*(24*nearestThursdayDiff))),firstOfJanuary=new Date(0,0);firstOfJanuary.setFullYear(nearestThursday.getFullYear());var timeDiff=nearestThursday.getTime()-firstOfJanuary.getTime(),daysSinceFirstOfJanuary=_Mathround(timeDiff/(1e3*(3600*24)));return _Mathfloor(daysSinceFirstOfJanuary/7+1)}static _dateEquals(date1,date2){return date1 instanceof Date&&date2 instanceof Date&&date1.getFullYear()===date2.getFullYear()&&date1.getMonth()===date2.getMonth()&&date1.getDate()===date2.getDate()}static _dateAllowed(date,min,max){return(!min||date>=min)&&(!max||date<=max)}static _getClosestDate(date,dates){return dates.filter(date=>date!==void 0).reduce((closestDate,candidate)=>{if(!candidate){return closestDate}if(!closestDate){return candidate}var candidateDiff=_Mathabs(date.getTime()-candidate.getTime()),closestDateDiff=_Mathabs(closestDate.getTime()-date.getTime());return candidateDiff<closestDateDiff?candidate:closestDate})}static _extractDateParts(date){return{day:date.getDate(),month:date.getMonth(),year:date.getFullYear()}}};_exports.DatePickerHelper=DatePickerHelper;var vaadinDatePickerHelper={DatePickerHelper:DatePickerHelper};_exports.$vaadinDatePickerHelper=vaadinDatePickerHelper;const DatePickerMixin=subclass=>class VaadinDatePickerMixin extends mixinBehaviors([IronResizableBehavior],subclass){static get properties(){return{_selectedDate:{type:Date},_focusedDate:Date,value:{type:String,observer:"_valueChanged",notify:!0,value:""},required:{type:Boolean,value:!1},name:{type:String},initialPosition:String,label:String,opened:{type:Boolean,reflectToAttribute:!0,notify:!0,observer:"_openedChanged"},showWeekNumbers:{type:Boolean},_fullscreen:{value:!1,observer:"_fullscreenChanged"},_fullscreenMediaQuery:{value:"(max-width: 420px), (max-height: 420px)"},_touchPrevented:Array,i18n:{type:Object,value:()=>{return{monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],firstDayOfWeek:0,week:"Week",calendar:"Calendar",clear:"Clear",today:"Today",cancel:"Cancel",formatDate:d=>{const yearStr=(d.year+"").replace(/\d+/,y=>"0000".substr(y.length)+y);return[d.month+1,d.day,yearStr].join("/")},parseDate:text=>{const parts=text.split("/"),today=new Date;let date,month=today.getMonth(),year=today.getFullYear();if(3===parts.length){year=parseInt(parts[2]);if(3>parts[2].length&&0<=year){year+=50>year?2e3:1900}month=parseInt(parts[0])-1;date=parseInt(parts[1])}else if(2===parts.length){month=parseInt(parts[0])-1;date=parseInt(parts[1])}else if(1===parts.length){date=parseInt(parts[0])}if(date!==void 0){return{day:date,month,year}}},formatTitle:(monthName,fullYear)=>{return monthName+" "+fullYear}}}},min:{type:String,observer:"_minChanged"},max:{type:String,observer:"_maxChanged"},_minDate:{type:Date,value:""},_maxDate:{type:Date,value:""},_noInput:{type:Boolean,computed:"_isNoInput(_fullscreen, _ios, i18n, i18n.*)"},_ios:{type:Boolean,value:navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/)},_webkitOverflowScroll:{type:Boolean,value:""===document.createElement("div").style.webkitOverflowScrolling},_ignoreAnnounce:{value:!0},_focusOverlayOnOpen:Boolean,_overlayInitialized:Boolean}}static get observers(){return["_updateHasValue(value)","_validateInput(_selectedDate, _minDate, _maxDate)","_selectedDateChanged(_selectedDate, i18n.formatDate)","_focusedDateChanged(_focusedDate, i18n.formatDate)","_announceFocusedDate(_focusedDate, opened, _ignoreAnnounce)"]}ready(){super.ready();this._boundOnScroll=this._onScroll.bind(this);this._boundFocus=this._focus.bind(this);this._boundUpdateAlignmentAndPosition=this._updateAlignmentAndPosition.bind(this);addListener(this,"tap",this.open);this.addEventListener("touchend",this._preventDefault.bind(this));this.addEventListener("keydown",this._onKeydown.bind(this));this.addEventListener("input",this._onUserInput.bind(this));this.addEventListener("focus",e=>this._noInput&&e.target.blur())}_initOverlay(){this.$.overlay.removeAttribute("disable-upgrade");this._overlayInitialized=!0;this.$.overlay.addEventListener("opened-changed",e=>this.opened=e.detail.value);this._overlayContent.addEventListener("close",this._close.bind(this));this._overlayContent.addEventListener("focus-input",this._focusAndSelect.bind(this));this.$.overlay.addEventListener("vaadin-overlay-escape-press",this._boundFocus);this._overlayContent.addEventListener("focus",()=>this.focusElement._setFocused(!0));this.$.overlay.addEventListener("vaadin-overlay-close",this._onVaadinOverlayClose.bind(this))}disconnectedCallback(){super.disconnectedCallback();if(this._overlayInitialized){this.$.overlay.removeEventListener("vaadin-overlay-escape-press",this._boundFocus)}this.opened=!1}open(){if(!this.disabled&&!this.readonly){this.opened=!0}}_close(e){if(e){e.stopPropagation()}this._focus();this.close()}close(){if(this._overlayInitialized){this.$.overlay.close()}}get _inputElement(){return this._input()}get _nativeInput(){if(this._inputElement){return this._inputElement.focusElement?this._inputElement.focusElement:this._inputElement.inputElement?this._inputElement.inputElement:window.unwrap?window.unwrap(this._inputElement):this._inputElement}}_parseDate(str){var parts=/^([-+]\d{1}|\d{2,4}|[-+]\d{6})-(\d{1,2})-(\d{1,2})$/.exec(str);if(!parts){return}var date=new Date(0,0);date.setFullYear(parseInt(parts[1],10));date.setMonth(parseInt(parts[2],10)-1);date.setDate(parseInt(parts[3],10));return date}_isNoInput(fullscreen,ios,i18n){return!this._inputElement||fullscreen||ios||!i18n.parseDate}_formatISO(date){if(!(date instanceof Date)){return""}const pad=(num,fmt="00")=>(fmt+num).substr((fmt+num).length-fmt.length);let yearSign="",yearFmt="0000",yearAbs=date.getFullYear();if(0>yearAbs){yearAbs=-yearAbs;yearSign="-";yearFmt="000000"}else if(1e4<=date.getFullYear()){yearSign="+";yearFmt="000000"}const year=yearSign+pad(yearAbs,yearFmt),month=pad(date.getMonth()+1),day=pad(date.getDate());return[year,month,day].join("-")}_openedChanged(opened){if(opened&&!this._overlayInitialized){this._initOverlay()}if(this._overlayInitialized){this.$.overlay.opened=opened}if(opened){this._updateAlignmentAndPosition()}}_selectedDateChanged(selectedDate,formatDate){if(selectedDate===void 0||formatDate===void 0){return}if(this.__userInputOccurred){this.__dispatchChange=!0}const inputValue=selectedDate&&formatDate(DatePickerHelper._extractDateParts(selectedDate)),value=this._formatISO(selectedDate);if(value!==this.value){this.validate(inputValue);this.value=value}this.__userInputOccurred=!1;this.__dispatchChange=!1;this._focusedDate=selectedDate;this._inputValue=selectedDate?inputValue:""}_focusedDateChanged(focusedDate,formatDate){if(focusedDate===void 0||formatDate===void 0){return}this.__userInputOccurred=!0;if(!this._ignoreFocusedDateChange&&!this._noInput){this._inputValue=focusedDate?formatDate(DatePickerHelper._extractDateParts(focusedDate)):""}}_updateHasValue(value){if(value){this.setAttribute("has-value","")}else{this.removeAttribute("has-value")}}__getOverlayTheme(theme,overlayInitialized){if(overlayInitialized){return theme}}_handleDateChange(property,value,oldValue){if(!value){this[property]="";return}var date=this._parseDate(value);if(!date){this.value=oldValue;return}if(!DatePickerHelper._dateEquals(this[property],date)){this[property]=date}}_valueChanged(value,oldValue){if(this.__dispatchChange){this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}this._handleDateChange("_selectedDate",value,oldValue)}_minChanged(value,oldValue){this._handleDateChange("_minDate",value,oldValue)}_maxChanged(value,oldValue){this._handleDateChange("_maxDate",value,oldValue)}_updateAlignmentAndPosition(){if(!this._overlayInitialized){return}if(!this._fullscreen){const inputRect=this._inputElement.getBoundingClientRect(),bottomAlign=inputRect.top>window.innerHeight/2,rightAlign=inputRect.left+this.clientWidth/2>window.innerWidth/2;if(rightAlign){const viewportWidth=_Mathmin(window.innerWidth,document.documentElement.clientWidth);this.$.overlay.setAttribute("right-aligned","");this.$.overlay.style.removeProperty("left");this.$.overlay.style.right=viewportWidth-inputRect.right+"px"}else{this.$.overlay.removeAttribute("right-aligned");this.$.overlay.style.removeProperty("right");this.$.overlay.style.left=inputRect.left+"px"}if(bottomAlign){const viewportHeight=_Mathmin(window.innerHeight,document.documentElement.clientHeight);this.$.overlay.setAttribute("bottom-aligned","");this.$.overlay.style.removeProperty("top");this.$.overlay.style.bottom=viewportHeight-inputRect.top+"px"}else{this.$.overlay.removeAttribute("bottom-aligned");this.$.overlay.style.removeProperty("bottom");this.$.overlay.style.top=inputRect.bottom+"px"}}this.$.overlay.setAttribute("dir",getComputedStyle(this._inputElement).getPropertyValue("direction"));this._overlayContent._repositionYearScroller()}_fullscreenChanged(){if(this._overlayInitialized&&this.$.overlay.opened){this._updateAlignmentAndPosition()}}_onOverlayOpened(){this._openedWithFocusRing=this.hasAttribute("focus-ring")||this.focusElement&&this.focusElement.hasAttribute("focus-ring");var parsedInitialPosition=this._parseDate(this.initialPosition),initialPosition=this._selectedDate||this._overlayContent.initialPosition||parsedInitialPosition||new Date;if(parsedInitialPosition||DatePickerHelper._dateAllowed(initialPosition,this._minDate,this._maxDate)){this._overlayContent.initialPosition=initialPosition}else{this._overlayContent.initialPosition=DatePickerHelper._getClosestDate(initialPosition,[this._minDate,this._maxDate])}this._overlayContent.scrollToDate(this._overlayContent.focusedDate||this._overlayContent.initialPosition);this._ignoreFocusedDateChange=!0;this._overlayContent.focusedDate=this._overlayContent.focusedDate||this._overlayContent.initialPosition;this._ignoreFocusedDateChange=!1;window.addEventListener("scroll",this._boundOnScroll,!0);this.addEventListener("iron-resize",this._boundUpdateAlignmentAndPosition);if(this._webkitOverflowScroll){this._touchPrevented=this._preventWebkitOverflowScrollingTouch(this.parentElement)}if(this._focusOverlayOnOpen){this._overlayContent.focus();this._focusOverlayOnOpen=!1}else{this._focus()}if(this._noInput&&this.focusElement){this.focusElement.blur()}this.updateStyles();this._ignoreAnnounce=!1}_preventWebkitOverflowScrollingTouch(element){var result=[];while(element){if("touch"===window.getComputedStyle(element).webkitOverflowScrolling){var oldInlineValue=element.style.webkitOverflowScrolling;element.style.webkitOverflowScrolling="auto";result.push({element:element,oldInlineValue:oldInlineValue})}element=element.parentElement}return result}_onOverlayClosed(){this._ignoreAnnounce=!0;window.removeEventListener("scroll",this._boundOnScroll,!0);this.removeEventListener("iron-resize",this._boundUpdateAlignmentAndPosition);if(this._touchPrevented){this._touchPrevented.forEach(prevented=>prevented.element.style.webkitOverflowScrolling=prevented.oldInlineValue);this._touchPrevented=[]}this.updateStyles();this._ignoreFocusedDateChange=!0;if(this.i18n.parseDate){var inputValue=this._inputValue||"";const dateObject=this.i18n.parseDate(inputValue),parsedDate=dateObject&&this._parseDate(`${dateObject.year}-${dateObject.month+1}-${dateObject.day}`);if(this._isValidDate(parsedDate)){this._selectedDate=parsedDate}else{this._selectedDate=null;this._inputValue=inputValue}}else if(this._focusedDate){this._selectedDate=this._focusedDate}this._ignoreFocusedDateChange=!1;if(this._nativeInput&&this._nativeInput.selectionStart){this._nativeInput.selectionStart=this._nativeInput.selectionEnd}this.validate()}validate(value){this.invalid=!1;value=value!==void 0?value:this._inputValue;return!(this.invalid=!this.checkValidity(value))}checkValidity(value){var inputValid=!value||this._selectedDate&&value===this.i18n.formatDate(DatePickerHelper._extractDateParts(this._selectedDate)),minMaxValid=!this._selectedDate||DatePickerHelper._dateAllowed(this._selectedDate,this._minDate,this._maxDate),inputValidity=!0;if(this._inputElement){if(this._inputElement.checkValidity){inputValidity=this._inputElement.checkValidity(value)}else if(this._inputElement.validate){inputValidity=this._inputElement.validate(value)}}return inputValid&&minMaxValid&&inputValidity}_onScroll(e){if(e.target===window||!this._overlayContent.contains(e.target)){this._updateAlignmentAndPosition()}}_focus(){if(this._noInput){this._overlayInitialized&&this._overlayContent.focus()}else{this._inputElement.focus()}}_focusAndSelect(){this._focus();this._setSelectionRange(0,this._inputValue.length)}_setSelectionRange(a,b){if(this._nativeInput&&this._nativeInput.setSelectionRange){this._nativeInput.setSelectionRange(a,b)}}_preventDefault(e){e.preventDefault()}_eventKey(e){for(var keys=["down","up","enter","esc","tab"],i=0,k;i<keys.length;i++){k=keys[i];if(IronA11yKeysBehavior.keyboardEventMatchesKeys(e,k)){return k}}}_isValidDate(d){return d&&!isNaN(d.getTime())}_onKeydown(e){if(this._noInput){var allowedKeys=[9];if(-1===allowedKeys.indexOf(e.keyCode)){e.preventDefault()}}switch(this._eventKey(e)){case"down":case"up":e.preventDefault();if(this.opened){this._overlayContent.focus();this._overlayContent._onKeydown(e)}else{this._focusOverlayOnOpen=!0;this.open()}break;case"enter":{const dateObject=this.i18n.parseDate(this._inputValue),parsedDate=dateObject&&this._parseDate(dateObject.year+"-"+(dateObject.month+1)+"-"+dateObject.day);if(this._overlayContent.focusedDate&&this._isValidDate(parsedDate)){this._selectedDate=this._overlayContent.focusedDate}this.close();break}case"esc":this._focusedDate=this._selectedDate;this._close();break;case"tab":if(this.opened){e.preventDefault();this._setSelectionRange(0,0);if(e.shiftKey){this._overlayContent.focusCancel()}else{this._overlayContent.focus();this._overlayContent.revealDate(this._focusedDate)}}break;}}_validateInput(date,min,max){if(date&&(min||max)){this.invalid=!DatePickerHelper._dateAllowed(date,min,max)}}_onUserInput(e){if(!this.opened){this.open()}this._userInputValueChanged()}_userInputValueChanged(value){if(this.opened&&this._inputValue){const dateObject=this.i18n.parseDate&&this.i18n.parseDate(this._inputValue),parsedDate=dateObject&&this._parseDate(`${dateObject.year}-${dateObject.month+1}-${dateObject.day}`);if(this._isValidDate(parsedDate)){this._ignoreFocusedDateChange=!0;if(!DatePickerHelper._dateEquals(parsedDate,this._focusedDate)){this._focusedDate=parsedDate}this._ignoreFocusedDateChange=!1}}}_announceFocusedDate(_focusedDate,opened,_ignoreAnnounce){if(opened&&!_ignoreAnnounce){this._overlayContent.announceFocusedDate()}}get _overlayContent(){return this.$.overlay.content.querySelector("#overlay-content")}};_exports.DatePickerMixin=DatePickerMixin;var vaadinDatePickerMixin={DatePickerMixin:DatePickerMixin};_exports.$vaadinDatePickerMixin=vaadinDatePickerMixin;class MonthCalendarElement extends ThemableMixin(GestureEventListeners(PolymerElement)){static get template(){return html`
    <style>
      :host {
        display: block;
      }

      [part="weekdays"],
      #days {
        display: flex;
        flex-wrap: wrap;
        flex-grow: 1;
      }

      #days-container,
      #weekdays-container {
        display: flex;
      }

      [part="week-numbers"] {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-shrink: 0;
      }

      [part="week-numbers"][hidden],
      [part="weekday"][hidden] {
        display: none;
      }

      [part="weekday"],
      [part="date"] {
        /* Would use calc(100% / 7) but it doesn't work nice on IE */
        width: 14.285714286%;
      }

      [part="weekday"]:empty,
      [part="week-numbers"] {
        width: 12.5%;
        flex-shrink: 0;
      }
    </style>

    <div part="month-header" role="heading">[[_getTitle(month, i18n.monthNames)]]</div>
    <div id="monthGrid" on-tap="_handleTap" on-touchend="_preventDefault" on-touchstart="_onMonthGridTouchStart">
      <div id="weekdays-container">
        <div hidden="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]" part="weekday"></div>
        <div part="weekdays">
          <template is="dom-repeat" items="[[_getWeekDayNames(i18n.weekdays, i18n.weekdaysShort, showWeekNumbers, i18n.firstDayOfWeek)]]">
            <div part="weekday" role="heading" aria-label\$="[[item.weekDay]]">[[item.weekDayShort]]</div>
          </template>
        </div>
      </div>
      <div id="days-container">
        <div part="week-numbers" hidden="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]">
          <template is="dom-repeat" items="[[_getWeekNumbers(_days)]]">
            <div part="week-number" role="heading" aria-label\$="[[i18n.week]] [[item]]">[[item]]</div>
          </template>
        </div>
        <div id="days">
          <template is="dom-repeat" items="[[_days]]">
            <div part="date" today\$="[[_isToday(item)]]" selected\$="[[_dateEquals(item, selectedDate)]]" focused\$="[[_dateEquals(item, focusedDate)]]" date="[[item]]" disabled\$="[[!_dateAllowed(item, minDate, maxDate)]]" role\$="[[_getRole(item)]]" aria-label\$="[[_getAriaLabel(item)]]" aria-disabled\$="[[_getAriaDisabled(item, minDate, maxDate)]]">[[_getDate(item)]]</div>
          </template>
        </div>
      </div>
    </div>
`}static get is(){return"vaadin-month-calendar"}static get properties(){return{month:{type:Date,value:new Date},selectedDate:{type:Date,notify:!0},focusedDate:Date,showWeekNumbers:{type:Boolean,value:!1},i18n:{type:Object},ignoreTaps:Boolean,_notTapping:Boolean,minDate:{type:Date,value:null},maxDate:{type:Date,value:null},_days:{type:Array,computed:"_getDays(month, i18n.firstDayOfWeek, minDate, maxDate)"},disabled:{type:Boolean,reflectToAttribute:!0,computed:"_isDisabled(month, minDate, maxDate)"}}}static get observers(){return["_showWeekNumbersChanged(showWeekNumbers, i18n.firstDayOfWeek)"]}_dateEquals(date1,date2){return DatePickerHelper._dateEquals(date1,date2)}_dateAllowed(date,min,max){return DatePickerHelper._dateAllowed(date,min,max)}_isDisabled(month,minDate,maxDate){var firstDate=new Date(0,0);firstDate.setFullYear(month.getFullYear());firstDate.setMonth(month.getMonth());firstDate.setDate(1);var lastDate=new Date(0,0);lastDate.setFullYear(month.getFullYear());lastDate.setMonth(month.getMonth()+1);lastDate.setDate(-1);if(minDate&&maxDate&&minDate.getMonth()===maxDate.getMonth()&&minDate.getMonth()===month.getMonth()&&0<=maxDate.getDate()-minDate.getDate()){return!1}return!this._dateAllowed(firstDate,minDate,maxDate)&&!this._dateAllowed(lastDate,minDate,maxDate)}_getTitle(month,monthNames){if(month===void 0||monthNames===void 0){return}return this.i18n.formatTitle(monthNames[month.getMonth()],month.getFullYear())}_onMonthGridTouchStart(){this._notTapping=!1;setTimeout(()=>this._notTapping=!0,300)}_dateAdd(date,delta){date.setDate(date.getDate()+delta)}_applyFirstDayOfWeek(weekDayNames,firstDayOfWeek){if(weekDayNames===void 0||firstDayOfWeek===void 0){return}return weekDayNames.slice(firstDayOfWeek).concat(weekDayNames.slice(0,firstDayOfWeek))}_getWeekDayNames(weekDayNames,weekDayNamesShort,showWeekNumbers,firstDayOfWeek){if(weekDayNames===void 0||weekDayNamesShort===void 0||showWeekNumbers===void 0||firstDayOfWeek===void 0){return}weekDayNames=this._applyFirstDayOfWeek(weekDayNames,firstDayOfWeek);weekDayNamesShort=this._applyFirstDayOfWeek(weekDayNamesShort,firstDayOfWeek);weekDayNames=weekDayNames.map((day,index)=>{return{weekDay:day,weekDayShort:weekDayNamesShort[index]}});return weekDayNames}_getDate(date){return date?date.getDate():""}_showWeekNumbersChanged(showWeekNumbers,firstDayOfWeek){if(showWeekNumbers&&1===firstDayOfWeek){this.setAttribute("week-numbers","")}else{this.removeAttribute("week-numbers")}}_showWeekSeparator(showWeekNumbers,firstDayOfWeek){return showWeekNumbers&&1===firstDayOfWeek}_isToday(date){return this._dateEquals(new Date,date)}_getDays(month,firstDayOfWeek){if(month===void 0||firstDayOfWeek===void 0){return}var date=new Date(0,0);date.setFullYear(month.getFullYear());date.setMonth(month.getMonth());date.setDate(1);while(date.getDay()!==firstDayOfWeek){this._dateAdd(date,-1)}var days=[],startMonth=date.getMonth(),targetMonth=month.getMonth();while(date.getMonth()===targetMonth||date.getMonth()===startMonth){days.push(date.getMonth()===targetMonth?new Date(date.getTime()):null);this._dateAdd(date,1)}return days}_getWeekNumber(date,days){if(date===void 0||days===void 0){return}if(!date){date=days.reduce((acc,d)=>{return!acc&&d?d:acc})}return DatePickerHelper._getISOWeekNumber(date)}_getWeekNumbers(dates){return dates.map(date=>this._getWeekNumber(date,dates)).filter((week,index,arr)=>arr.indexOf(week)===index)}_handleTap(e){if(!this.ignoreTaps&&!this._notTapping&&e.target.date&&!e.target.hasAttribute("disabled")){this.selectedDate=e.target.date;this.dispatchEvent(new CustomEvent("date-tap",{bubbles:!0,composed:!0}))}}_preventDefault(e){e.preventDefault()}_getRole(date){return date?"button":"presentation"}_getAriaLabel(date){if(!date){return""}var ariaLabel=this._getDate(date)+" "+this.i18n.monthNames[date.getMonth()]+" "+date.getFullYear()+", "+this.i18n.weekdays[date.getDay()];if(this._isToday(date)){ariaLabel+=", "+this.i18n.today}return ariaLabel}_getAriaDisabled(date,min,max){if(date===void 0||min===void 0||max===void 0){return}return this._dateAllowed(date,min,max)?"false":"true"}}customElements.define(MonthCalendarElement.is,MonthCalendarElement);class InfiniteScrollerElement extends PolymerElement{static get template(){return html`
    <style>
      :host {
        display: block;
        overflow: hidden;
        height: 500px;
      }

      #scroller {
        position: relative;
        height: 100%;
        overflow: auto;
        outline: none;
        margin-right: -40px;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: none;
        overflow-x: hidden;
      }

      #scroller.notouchscroll {
        -webkit-overflow-scrolling: auto;
      }

      #scroller::-webkit-scrollbar {
        display: none;
      }

      .buffer {
        position: absolute;
        width: var(--vaadin-infinite-scroller-buffer-width, 100%);
        box-sizing: border-box;
        padding-right: 40px;
        top: var(--vaadin-infinite-scroller-buffer-offset, 0);
        animation: fadein 0.2s;
      }

      @keyframes fadein {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    </style>

    <div id="scroller" on-scroll="_scroll">
      <div class="buffer"></div>
      <div class="buffer"></div>
      <div id="fullHeight"></div>
    </div>
`}static get is(){return"vaadin-infinite-scroller"}static get properties(){return{bufferSize:{type:Number,value:20},_initialScroll:{value:5e5},_initialIndex:{value:0},_buffers:Array,_preventScrollEvent:Boolean,_mayHaveMomentum:Boolean,_initialized:Boolean,active:{type:Boolean,observer:"_activated"}}}ready(){super.ready();this._buffers=Array.prototype.slice.call(this.root.querySelectorAll(".buffer"));this.$.fullHeight.style.height=2*this._initialScroll+"px";var tpl=this.querySelector("template");this._TemplateClass=templatize(tpl,this,{forwardHostProp:function(prop,value){if("index"!==prop){this._buffers.forEach(buffer=>{[].forEach.call(buffer.children,insertionPoint=>{insertionPoint._itemWrapper.instance[prop]=value})})}}});var isFirefox=-1<navigator.userAgent.toLowerCase().indexOf("firefox");if(isFirefox){this.$.scroller.tabIndex=-1}}_activated(active){if(active&&!this._initialized){this._createPool();this._initialized=!0}}_finishInit(){if(!this._initDone){this._buffers.forEach(buffer=>{[].forEach.call(buffer.children,insertionPoint=>this._ensureStampedInstance(insertionPoint._itemWrapper))},this);if(!this._buffers[0].translateY){this._reset()}this._initDone=!0}}_translateBuffer(up){var index=up?1:0;this._buffers[index].translateY=this._buffers[index?0:1].translateY+this._bufferHeight*(index?-1:1);this._buffers[index].style.transform="translate3d(0, "+this._buffers[index].translateY+"px, 0)";this._buffers[index].updated=!1;this._buffers.reverse()}_scroll(){if(this._scrollDisabled){return}var scrollTop=this.$.scroller.scrollTop;if(scrollTop<this._bufferHeight||scrollTop>2*this._initialScroll-this._bufferHeight){this._initialIndex=~~this.position;this._reset()}var bufferOffset=this.root.querySelector(".buffer").offsetTop,upperThresholdReached=scrollTop>this._buffers[1].translateY+this.itemHeight+bufferOffset,lowerThresholdReached=scrollTop<this._buffers[0].translateY+this.itemHeight+bufferOffset;if(upperThresholdReached||lowerThresholdReached){this._translateBuffer(lowerThresholdReached);this._updateClones()}if(!this._preventScrollEvent){this.dispatchEvent(new CustomEvent("custom-scroll",{bubbles:!1,composed:!0}));this._mayHaveMomentum=!0}this._preventScrollEvent=!1;this._debouncerScrollFinish=Debouncer.debounce(this._debouncerScrollFinish,timeOut.after(200),()=>{var scrollerRect=this.$.scroller.getBoundingClientRect();if(!this._isVisible(this._buffers[0],scrollerRect)&&!this._isVisible(this._buffers[1],scrollerRect)){this.position=this.position}})}set position(index){this._preventScrollEvent=!0;if(index>this._firstIndex&&index<this._firstIndex+2*this.bufferSize){this.$.scroller.scrollTop=this.itemHeight*(index-this._firstIndex)+this._buffers[0].translateY}else{this._initialIndex=~~index;this._reset();this._scrollDisabled=!0;this.$.scroller.scrollTop+=index%1*this.itemHeight;this._scrollDisabled=!1}if(this._mayHaveMomentum){this.$.scroller.classList.add("notouchscroll");this._mayHaveMomentum=!1;setTimeout(()=>{this.$.scroller.classList.remove("notouchscroll")},10)}}get position(){return(this.$.scroller.scrollTop-this._buffers[0].translateY)/this.itemHeight+this._firstIndex}get itemHeight(){if(!this._itemHeightVal){if(!(window.ShadyCSS&&window.ShadyCSS.nativeCss)){this.updateStyles()}const itemHeight=window.ShadyCSS?window.ShadyCSS.getComputedStyleValue(this,"--vaadin-infinite-scroller-item-height"):getComputedStyle(this).getPropertyValue("--vaadin-infinite-scroller-item-height"),tmpStyleProp="background-position";this.$.fullHeight.style.setProperty(tmpStyleProp,itemHeight);const itemHeightPx=getComputedStyle(this.$.fullHeight).getPropertyValue(tmpStyleProp);this.$.fullHeight.style.removeProperty(tmpStyleProp);this._itemHeightVal=parseFloat(itemHeightPx)}return this._itemHeightVal}get _bufferHeight(){return this.itemHeight*this.bufferSize}_reset(){this._scrollDisabled=!0;this.$.scroller.scrollTop=this._initialScroll;this._buffers[0].translateY=this._initialScroll-this._bufferHeight;this._buffers[1].translateY=this._initialScroll;this._buffers.forEach(buffer=>{buffer.style.transform="translate3d(0, "+buffer.translateY+"px, 0)"});this._buffers[0].updated=this._buffers[1].updated=!1;this._updateClones(!0);this._debouncerUpdateClones=Debouncer.debounce(this._debouncerUpdateClones,timeOut.after(200),()=>{this._buffers[0].updated=this._buffers[1].updated=!1;this._updateClones()});this._scrollDisabled=!1}_createPool(){var container=this.getBoundingClientRect();this._buffers.forEach(buffer=>{for(var i=0;i<this.bufferSize;i++){const itemWrapper=document.createElement("div");itemWrapper.style.height=this.itemHeight+"px";itemWrapper.instance={};const contentId=InfiniteScrollerElement._contentIndex=InfiniteScrollerElement._contentIndex+1||0,slotName="vaadin-infinite-scroller-item-content-"+contentId,insertionPoint=document.createElement("slot");insertionPoint.setAttribute("name",slotName);insertionPoint._itemWrapper=itemWrapper;buffer.appendChild(insertionPoint);itemWrapper.setAttribute("slot",slotName);this.appendChild(itemWrapper);flush$1();setTimeout(()=>{if(this._isVisible(itemWrapper,container)){this._ensureStampedInstance(itemWrapper)}},1)}},this);setTimeout(()=>{afterNextRender(this,this._finishInit.bind(this))},1)}_ensureStampedInstance(itemWrapper){if(itemWrapper.firstElementChild){return}var tmpInstance=itemWrapper.instance;itemWrapper.instance=new this._TemplateClass({});itemWrapper.appendChild(itemWrapper.instance.root);Object.keys(tmpInstance).forEach(prop=>{itemWrapper.instance.set(prop,tmpInstance[prop])})}_updateClones(viewPortOnly){this._firstIndex=~~((this._buffers[0].translateY-this._initialScroll)/this.itemHeight)+this._initialIndex;var scrollerRect=viewPortOnly?this.$.scroller.getBoundingClientRect():void 0;this._buffers.forEach((buffer,bufferIndex)=>{if(!buffer.updated){var firstIndex=this._firstIndex+this.bufferSize*bufferIndex;[].forEach.call(buffer.children,(insertionPoint,index)=>{const itemWrapper=insertionPoint._itemWrapper;if(!viewPortOnly||this._isVisible(itemWrapper,scrollerRect)){itemWrapper.instance.index=firstIndex+index}});buffer.updated=!0}},this)}_isVisible(element,container){var rect=element.getBoundingClientRect();return rect.bottom>container.top&&rect.top<container.bottom}}customElements.define(InfiniteScrollerElement.is,InfiniteScrollerElement);const $_documentContainer$a=document.createElement("template");$_documentContainer$a.innerHTML=`<dom-module id="vaadin-date-picker-overlay-styles" theme-for="vaadin-date-picker-overlay">
  <template>
    <style>
      :host {
        align-items: flex-start;
        justify-content: flex-start;
      }

      :host([bottom-aligned]) {
        justify-content: flex-end;
      }

      :host([right-aligned]) {
        align-items: flex-end;
      }

      :host([right-aligned][dir="rtl"]) {
        align-items: flex-start;
      }

      [part="overlay"] {
        display: flex;
        flex: auto;
      }

      [part~="content"] {
        flex: auto;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$a.content);class DatePickerOverlayContentElement extends ThemableMixin(ThemePropertyMixin(GestureEventListeners(PolymerElement))){static get template(){return html`
    <style>
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        outline: none;
        background: #fff;
      }

      [part="overlay-header"] {
        display: flex;
        flex-shrink: 0;
        flex-wrap: nowrap;
        align-items: center;
      }

      :host(:not([fullscreen])) [part="overlay-header"] {
        display: none;
      }

      [part="label"] {
        flex-grow: 1;
      }

      [part="clear-button"]:not([showclear]) {
        display: none;
      }

      [part="years-toggle-button"] {
        display: flex;
      }

      [part="years-toggle-button"][desktop] {
        display: none;
      }

      :host(:not([years-visible])) [part="years-toggle-button"]::before {
        transform: rotate(180deg);
      }

      #scrollers {
        display: flex;
        height: 100%;
        width: 100%;
        position: relative;
        overflow: hidden;
      }

      [part="months"],
      [part="years"] {
        height: 100%;
      }

      [part="months"] {
        --vaadin-infinite-scroller-item-height: 270px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }

      #scrollers[desktop] [part="months"] {
        right: 50px;
        transform: none !important;
      }

      [part="years"] {
        --vaadin-infinite-scroller-item-height: 80px;
        width: 50px;
        position: absolute;
        right: 0;
        transform: translateX(100%);
        -webkit-tap-highlight-color: transparent;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        /* Center the year scroller position. */
        --vaadin-infinite-scroller-buffer-offset: 50%;
      }

      #scrollers[desktop] [part="years"] {
        position: absolute;
        transform: none !important;
      }

      [part="years"]::before {
        content: '';
        display: block;
        background: transparent;
        width: 0;
        height: 0;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        border-width: 6px;
        border-style: solid;
        border-color: transparent;
        border-left-color: #000;
      }

      :host(.animate) [part="months"],
      :host(.animate) [part="years"] {
        transition: all 200ms;
      }

      [part="toolbar"] {
        display: flex;
        justify-content: space-between;
        z-index: 2;
        flex-shrink: 0;
      }

      [part~="overlay-header"]:not([desktop]) {
        padding-bottom: 40px;
      }

      [part~="years-toggle-button"] {
        position: absolute;
        top: auto;
        right: 8px;
        bottom: 0;
        z-index: 1;
        padding: 8px;
      }

      #announcer {
        display: inline-block;
        position: fixed;
        clip: rect(0, 0, 0, 0);
        clip-path: inset(100%);
      }
    </style>

    <div id="announcer" role="alert" aria-live="polite">
      [[i18n.calendar]]
    </div>

    <div part="overlay-header" on-touchend="_preventDefault" desktop\$="[[_desktopMode]]" aria-hidden="true">
      <div part="label">[[_formatDisplayed(selectedDate, i18n.formatDate, label)]]</div>
      <div part="clear-button" on-tap="_clear" showclear\$="[[_showClear(selectedDate)]]"></div>
      <div part="toggle-button" on-tap="_cancel"></div>

      <div part="years-toggle-button" desktop\$="[[_desktopMode]]" on-tap="_toggleYearScroller" aria-hidden="true">
        [[_yearAfterXMonths(_visibleMonthIndex)]]
      </div>
    </div>

    <div id="scrollers" desktop\$="[[_desktopMode]]" on-track="_track">
      <vaadin-infinite-scroller id="monthScroller" on-custom-scroll="_onMonthScroll" on-touchstart="_onMonthScrollTouchStart" buffer-size="3" active="[[initialPosition]]" part="months">
        <template>
          <vaadin-month-calendar i18n="[[i18n]]" month="[[_dateAfterXMonths(index)]]" selected-date="{{selectedDate}}" focused-date="[[focusedDate]]" ignore-taps="[[_ignoreTaps]]" show-week-numbers="[[showWeekNumbers]]" min-date="[[minDate]]" max-date="[[maxDate]]" focused\$="[[_focused]]" part="month" theme\$="[[theme]]">
          </vaadin-month-calendar>
        </template>
      </vaadin-infinite-scroller>
      <vaadin-infinite-scroller id="yearScroller" on-tap="_onYearTap" on-custom-scroll="_onYearScroll" on-touchstart="_onYearScrollTouchStart" buffer-size="12" active="[[initialPosition]]" part="years">
        <template>
          <div part="year-number" role="button" current\$="[[_isCurrentYear(index)]]" selected\$="[[_isSelectedYear(index, selectedDate)]]">
            [[_yearAfterXYears(index)]]
          </div>
          <div part="year-separator" aria-hidden="true"></div>
        </template>
      </vaadin-infinite-scroller>
    </div>

    <div on-touchend="_preventDefault" role="toolbar" part="toolbar">
      <vaadin-button id="todayButton" part="today-button" disabled="[[!_isTodayAllowed(minDate, maxDate)]]" on-tap="_onTodayTap">
        [[i18n.today]]
      </vaadin-button>
      <vaadin-button id="cancelButton" part="cancel-button" on-tap="_cancel">
        [[i18n.cancel]]
      </vaadin-button>
    </div>

    <iron-media-query query="(min-width: 375px)" query-matches="{{_desktopMode}}"></iron-media-query>
`}static get is(){return"vaadin-date-picker-overlay-content"}static get properties(){return{selectedDate:{type:Date,notify:!0},focusedDate:{type:Date,notify:!0,observer:"_focusedDateChanged"},_focusedMonthDate:Number,initialPosition:{type:Date,observer:"_initialPositionChanged"},_originDate:{value:new Date},_visibleMonthIndex:Number,_desktopMode:Boolean,_translateX:{observer:"_translateXChanged"},_yearScrollerWidth:{value:50},i18n:{type:Object},showWeekNumbers:{type:Boolean},_ignoreTaps:Boolean,_notTapping:Boolean,minDate:Date,maxDate:Date,_focused:Boolean,label:String}}ready(){super.ready();this.setAttribute("tabindex",0);this.addEventListener("keydown",this._onKeydown.bind(this));addListener(this,"tap",this._stopPropagation);this.addEventListener("focus",this._onOverlayFocus.bind(this));this.addEventListener("blur",this._onOverlayBlur.bind(this))}connectedCallback(){super.connectedCallback();this._closeYearScroller();this._toggleAnimateClass(!0);setTouchAction(this.$.scrollers,"pan-y");IronA11yAnnouncer.requestAvailability()}announceFocusedDate(){var focusedDate=this._currentlyFocusedDate(),announce=[];if(DatePickerHelper._dateEquals(focusedDate,new Date)){announce.push(this.i18n.today)}announce=announce.concat([this.i18n.weekdays[focusedDate.getDay()],focusedDate.getDate(),this.i18n.monthNames[focusedDate.getMonth()],focusedDate.getFullYear()]);if(this.showWeekNumbers&&1===this.i18n.firstDayOfWeek){announce.push(this.i18n.week);announce.push(DatePickerHelper._getISOWeekNumber(focusedDate))}this.dispatchEvent(new CustomEvent("iron-announce",{bubbles:!0,composed:!0,detail:{text:announce.join(" ")}}));return}focusCancel(){this.$.cancelButton.focus()}scrollToDate(date,animate){this._scrollToPosition(this._differenceInMonths(date,this._originDate),animate)}_focusedDateChanged(focusedDate){this.revealDate(focusedDate)}_isCurrentYear(yearsFromNow){return 0===yearsFromNow}_isSelectedYear(yearsFromNow,selectedDate){if(selectedDate){return selectedDate.getFullYear()===this._originDate.getFullYear()+yearsFromNow}}revealDate(date){if(date){var diff=this._differenceInMonths(date,this._originDate),scrolledAboveViewport=this.$.monthScroller.position>diff,visibleItems=this.$.monthScroller.clientHeight/this.$.monthScroller.itemHeight,scrolledBelowViewport=this.$.monthScroller.position+visibleItems-1<diff;if(scrolledAboveViewport){this._scrollToPosition(diff,!0)}else if(scrolledBelowViewport){this._scrollToPosition(diff-visibleItems+1,!0)}}}_onOverlayFocus(){this._focused=!0}_onOverlayBlur(){this._focused=!1}_initialPositionChanged(initialPosition){this.scrollToDate(initialPosition)}_repositionYearScroller(){this._visibleMonthIndex=_Mathfloor(this.$.monthScroller.position);this.$.yearScroller.position=(this.$.monthScroller.position+this._originDate.getMonth())/12}_repositionMonthScroller(){this.$.monthScroller.position=12*this.$.yearScroller.position-this._originDate.getMonth();this._visibleMonthIndex=_Mathfloor(this.$.monthScroller.position)}_onMonthScroll(){this._repositionYearScroller();this._doIgnoreTaps()}_onYearScroll(){this._repositionMonthScroller();this._doIgnoreTaps()}_onYearScrollTouchStart(){this._notTapping=!1;setTimeout(()=>this._notTapping=!0,300);this._repositionMonthScroller()}_onMonthScrollTouchStart(){this._repositionYearScroller()}_doIgnoreTaps(){this._ignoreTaps=!0;this._debouncer=Debouncer.debounce(this._debouncer,timeOut.after(300),()=>this._ignoreTaps=!1)}_formatDisplayed(date,formatDate,label){if(date){return formatDate(DatePickerHelper._extractDateParts(date))}else{return label}}_onTodayTap(){var today=new Date;if(.001>_Mathabs(this.$.monthScroller.position-this._differenceInMonths(today,this._originDate))){this.selectedDate=today;this._close()}else{this._scrollToCurrentMonth()}}_scrollToCurrentMonth(){if(this.focusedDate){this.focusedDate=new Date}this.scrollToDate(new Date,!0)}_showClear(selectedDate){return!!selectedDate}_onYearTap(e){if(!this._ignoreTaps&&!this._notTapping){var scrollDelta=e.detail.y-(this.$.yearScroller.getBoundingClientRect().top+this.$.yearScroller.clientHeight/2),yearDelta=scrollDelta/this.$.yearScroller.itemHeight;this._scrollToPosition(this.$.monthScroller.position+12*yearDelta,!0)}}_scrollToPosition(targetPosition,animate){if(this._targetPosition!==void 0){this._targetPosition=targetPosition;return}if(!animate){this.$.monthScroller.position=targetPosition;this._targetPosition=void 0;this._repositionYearScroller();return}this._targetPosition=targetPosition;var easingFunction=(t,b,c,d)=>{t/=d/2;if(1>t){return c/2*t*t+b}t--;return-c/2*(t*(t-2)-1)+b},duration=animate?300:0,start=0,initialPosition=this.$.monthScroller.position,smoothScroll=timestamp=>{start=start||timestamp;var currentTime=timestamp-start;if(currentTime<duration){var currentPos=easingFunction(currentTime,initialPosition,this._targetPosition-initialPosition,duration);this.$.monthScroller.position=currentPos;window.requestAnimationFrame(smoothScroll)}else{this.dispatchEvent(new CustomEvent("scroll-animation-finished",{bubbles:!0,composed:!0,detail:{position:this._targetPosition,oldPosition:initialPosition}}));this.$.monthScroller.position=this._targetPosition;this._targetPosition=void 0}setTimeout(this._repositionYearScroller.bind(this),1)};window.requestAnimationFrame(smoothScroll)}_limit(value,range){return _Mathmin(range.max,_Mathmax(range.min,value))}_handleTrack(e){if(10>_Mathabs(e.detail.dx)||10<_Mathabs(e.detail.ddy)){return}if(_Mathabs(e.detail.ddx)>this._yearScrollerWidth/3){this._toggleAnimateClass(!0)}var newTranslateX=this._translateX+e.detail.ddx;this._translateX=this._limit(newTranslateX,{min:0,max:this._yearScrollerWidth})}_track(e){if(this._desktopMode){return}switch(e.detail.state){case"start":this._toggleAnimateClass(!1);break;case"track":this._handleTrack(e);break;case"end":this._toggleAnimateClass(!0);if(this._translateX>=this._yearScrollerWidth/2){this._closeYearScroller()}else{this._openYearScroller()}break;}}_toggleAnimateClass(enable){if(enable){this.classList.add("animate")}else{this.classList.remove("animate")}}_toggleYearScroller(){this._isYearScrollerVisible()?this._closeYearScroller():this._openYearScroller()}_openYearScroller(){this._translateX=0;this.setAttribute("years-visible","")}_closeYearScroller(){this.removeAttribute("years-visible");this._translateX=this._yearScrollerWidth}_isYearScrollerVisible(){return this._translateX<this._yearScrollerWidth/2}_translateXChanged(x){if(!this._desktopMode){this.$.monthScroller.style.transform="translateX("+(x-this._yearScrollerWidth)+"px)";this.$.yearScroller.style.transform="translateX("+x+"px)"}}_yearAfterXYears(index){var result=new Date(this._originDate);result.setFullYear(parseInt(index)+this._originDate.getFullYear());return result.getFullYear()}_yearAfterXMonths(months){return this._dateAfterXMonths(months).getFullYear()}_dateAfterXMonths(months){var result=new Date(this._originDate);result.setDate(1);result.setMonth(parseInt(months)+this._originDate.getMonth());return result}_differenceInMonths(date1,date2){var months=12*(date1.getFullYear()-date2.getFullYear());return months-date2.getMonth()+date1.getMonth()}_differenceInYears(date1,date2){return this._differenceInMonths(date1,date2)/12}_clear(){this.selectedDate=""}_close(){const overlayContent=this.getRootNode().host,overlay=overlayContent?overlayContent.getRootNode().host:null;if(overlay){overlay.opened=!1}this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}_cancel(){this.focusedDate=this.selectedDate;this._close()}_preventDefault(e){e.preventDefault()}_eventKey(e){for(var keys=["down","up","right","left","enter","space","home","end","pageup","pagedown","tab","esc"],i=0,k;i<keys.length;i++){k=keys[i];if(IronA11yKeysBehavior.keyboardEventMatchesKeys(e,k)){return k}}}_onKeydown(e){var focus=this._currentlyFocusedDate();const isToday=0<=e.composedPath().indexOf(this.$.todayButton),isCancel=0<=e.composedPath().indexOf(this.$.cancelButton),isScroller=!isToday&&!isCancel;var eventKey=this._eventKey(e);if("tab"===eventKey){e.stopPropagation();const isFullscreen=this.hasAttribute("fullscreen"),isShift=e.shiftKey;if(isFullscreen){e.preventDefault()}else if(isShift&&isScroller||!isShift&&isCancel){e.preventDefault();this.dispatchEvent(new CustomEvent("focus-input",{bubbles:!0,composed:!0}))}else if(isShift&&isToday){this._focused=!0;setTimeout(()=>this.revealDate(this.focusedDate),1)}else{this._focused=!1}}else if(eventKey){e.preventDefault();e.stopPropagation();switch(eventKey){case"down":this._moveFocusByDays(7);this.focus();break;case"up":this._moveFocusByDays(-7);this.focus();break;case"right":if(isScroller){this._moveFocusByDays(1)}break;case"left":if(isScroller){this._moveFocusByDays(-1)}break;case"enter":if(isScroller||isCancel){this._close()}else if(isToday){this._onTodayTap()}break;case"space":if(isCancel){this._close()}else if(isToday){this._onTodayTap()}else{var focusedDate=this.focusedDate;if(DatePickerHelper._dateEquals(focusedDate,this.selectedDate)){this.selectedDate="";this.focusedDate=focusedDate}else{this.selectedDate=focusedDate}}break;case"home":this._moveFocusInsideMonth(focus,"minDate");break;case"end":this._moveFocusInsideMonth(focus,"maxDate");break;case"pagedown":this._moveFocusByMonths(e.shiftKey?12:1);break;case"pageup":this._moveFocusByMonths(e.shiftKey?-12:-1);break;case"esc":this._cancel();break;}}}_currentlyFocusedDate(){return this.focusedDate||this.selectedDate||this.initialPosition||new Date}_focusDate(dateToFocus){this.focusedDate=dateToFocus;this._focusedMonthDate=dateToFocus.getDate()}_focusClosestDate(focus){this._focusDate(DatePickerHelper._getClosestDate(focus,[this.minDate,this.maxDate]))}_moveFocusByDays(days){var focus=this._currentlyFocusedDate(),dateToFocus=new Date(0,0);dateToFocus.setFullYear(focus.getFullYear());dateToFocus.setMonth(focus.getMonth());dateToFocus.setDate(focus.getDate()+days);if(this._dateAllowed(dateToFocus,this.minDate,this.maxDate)){this._focusDate(dateToFocus)}else{if(this._dateAllowed(focus,this.minDate,this.maxDate)){if(0<days){this._focusDate(this.maxDate)}else{this._focusDate(this.minDate)}}else{this._focusClosestDate(focus)}}}_moveFocusByMonths(months){var focus=this._currentlyFocusedDate(),dateToFocus=new Date(0,0);dateToFocus.setFullYear(focus.getFullYear());dateToFocus.setMonth(focus.getMonth()+months);var targetMonth=dateToFocus.getMonth();dateToFocus.setDate(this._focusedMonthDate||(this._focusedMonthDate=focus.getDate()));if(dateToFocus.getMonth()!==targetMonth){dateToFocus.setDate(0)}if(this._dateAllowed(dateToFocus,this.minDate,this.maxDate)){this.focusedDate=dateToFocus}else{if(this._dateAllowed(focus,this.minDate,this.maxDate)){if(0<months){this._focusDate(this.maxDate)}else{this._focusDate(this.minDate)}}else{this._focusClosestDate(focus)}}}_moveFocusInsideMonth(focusedDate,property){var dateToFocus=new Date(0,0);dateToFocus.setFullYear(focusedDate.getFullYear());if("minDate"===property){dateToFocus.setMonth(focusedDate.getMonth());dateToFocus.setDate(1)}else{dateToFocus.setMonth(focusedDate.getMonth()+1);dateToFocus.setDate(0)}if(this._dateAllowed(dateToFocus,this.minDate,this.maxDate)){this._focusDate(dateToFocus)}else{if(this._dateAllowed(focusedDate,this.minDate,this.maxDate)){this._focusDate(this[property])}else{this._focusClosestDate(focusedDate)}}}_dateAllowed(date,min,max){return(!min||date>=min)&&(!max||date<=max)}_isTodayAllowed(min,max){var today=new Date,todayMidnight=new Date(0,0);todayMidnight.setFullYear(today.getFullYear());todayMidnight.setMonth(today.getMonth());todayMidnight.setDate(today.getDate());return this._dateAllowed(todayMidnight,min,max)}_stopPropagation(e){e.stopPropagation()}}customElements.define(DatePickerOverlayContentElement.is,DatePickerOverlayContentElement);const p$2=Element.prototype,matches$2=p$2.matches||p$2.matchesSelector||p$2.mozMatchesSelector||p$2.msMatchesSelector||p$2.oMatchesSelector||p$2.webkitMatchesSelector,FocusablesHelper={getTabbableNodes:function(node){const result=[],needsSortByTabIndex=this._collectTabbableNodes(node,result);if(needsSortByTabIndex){return this._sortByTabIndex(result)}return result},isFocusable:function(element){if(matches$2.call(element,"input, select, textarea, button, object")){return matches$2.call(element,":not([disabled])")}return matches$2.call(element,"a[href], area[href], iframe, [tabindex], [contentEditable]")},isTabbable:function(element){return this.isFocusable(element)&&matches$2.call(element,":not([tabindex=\"-1\"])")&&this._isVisible(element)},_normalizedTabIndex:function(element){if(this.isFocusable(element)){const tabIndex=element.getAttribute("tabindex")||0;return+tabIndex}return-1},_collectTabbableNodes:function(node,result){if(node.nodeType!==Node.ELEMENT_NODE||!this._isVisible(node)){return!1}const element=node,tabIndex=this._normalizedTabIndex(element);let needsSort=0<tabIndex;if(0<=tabIndex){result.push(element)}let children;if("slot"===element.localName){children=element.assignedNodes({flatten:!0})}else{children=(element.shadowRoot||element).children}for(let i=0;i<children.length;i++){needsSort=this._collectTabbableNodes(children[i],result)||needsSort}return needsSort},_isVisible:function(element){let style=element.style;if("hidden"!==style.visibility&&"none"!==style.display){style=window.getComputedStyle(element);return"hidden"!==style.visibility&&"none"!==style.display}return!1},_sortByTabIndex:function(tabbables){const len=tabbables.length;if(2>len){return tabbables}const pivot=_Mathceil(len/2),left=this._sortByTabIndex(tabbables.slice(0,pivot)),right=this._sortByTabIndex(tabbables.slice(pivot));return this._mergeSortByTabIndex(left,right)},_mergeSortByTabIndex:function(left,right){const result=[];while(0<left.length&&0<right.length){if(this._hasLowerTabOrder(left[0],right[0])){result.push(right.shift())}else{result.push(left.shift())}}return result.concat(left,right)},_hasLowerTabOrder:function(a,b){const ati=_Mathmax(a.tabIndex,0),bti=_Mathmax(b.tabIndex,0);return 0===ati||0===bti?bti>ati:ati>bti}};_exports.FocusablesHelper=FocusablesHelper;var vaadinFocusablesHelper={FocusablesHelper:FocusablesHelper};_exports.$vaadinFocusablesHelper=vaadinFocusablesHelper;let overlayContentCounter=0;const overlayContentCache={},createOverlayContent=cssText=>{const is=overlayContentCache[cssText]||processOverlayStyles(cssText);return document.createElement(is)},processOverlayStyles=cssText=>{overlayContentCounter++;const is=`vaadin-overlay-content-${overlayContentCounter}`,styledTemplate=document.createElement("template"),style=document.createElement("style");style.textContent=":host { display: block; }"+cssText;styledTemplate.content.appendChild(style);if(window.ShadyCSS){window.ShadyCSS.prepareTemplate(styledTemplate,is)}const klass=(()=>class extends HTMLElement{static get is(){return is}connectedCallback(){if(window.ShadyCSS){window.ShadyCSS.styleElement(this)}if(!this.shadowRoot){this.attachShadow({mode:"open"});this.shadowRoot.appendChild(document.importNode(styledTemplate.content,!0))}}})();customElements.define(klass.is,klass);overlayContentCache[cssText]=is;return is};class OverlayElement extends ThemableMixin(PolymerElement){static get template(){return html`
    <style>
      :host {
        z-index: 200;
        position: fixed;

        /*
          Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part.
        */

        /*
          Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport.
        */
        top: 0;
        right: 0;
        bottom: var(--vaadin-overlay-viewport-bottom);
        left: 0;

        /* Use flexbox alignment for the overlay part. */
        display: flex;
        flex-direction: column; /* makes dropdowns sizing easier */
        /* Align to center by default. */
        align-items: center;
        justify-content: center;

        /* Allow centering when max-width/max-height applies. */
        margin: auto;

        /* The host is not clickable, only the overlay part is. */
        pointer-events: none;

        /* Remove tap highlight on touch devices. */
        -webkit-tap-highlight-color: transparent;

        /* CSS API for host */
        --vaadin-overlay-viewport-bottom: 0;
      }

      :host([hidden]),
      :host(:not([opened]):not([closing])) {
        display: none !important;
      }

      [part="overlay"] {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
        pointer-events: auto;

        /* Prevent overflowing the host in MSIE 11 */
        max-width: 100%;
        box-sizing: border-box;

        -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
      }

      [part="backdrop"] {
        z-index: -1;
        content: "";
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        pointer-events: auto;
      }
    </style>

    <div id="backdrop" part="backdrop" hidden\$="{{!withBackdrop}}"></div>
    <div part="overlay" id="overlay" tabindex="0">
      <div part="content" id="content">
        <slot></slot>
      </div>
    </div>
`}static get is(){return"vaadin-overlay"}static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0},owner:Element,renderer:Function,template:{type:Object,notify:!0},instanceProps:{type:Object},content:{type:Object,notify:!0},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0},model:Object,modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged"},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged"},focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},_mouseDownInside:{type:Boolean},_mouseUpInside:{type:Boolean},_instance:{type:Object},_originalContentPart:Object,_contentNodes:Array,_oldOwner:Element,_oldModel:Object,_oldTemplate:Object,_oldInstanceProps:Object,_oldRenderer:Object,_oldOpened:Boolean}}static get observers(){return["_templateOrRendererChanged(template, renderer, owner, model, instanceProps, opened)"]}constructor(){super();this._boundMouseDownListener=this._mouseDownListener.bind(this);this._boundMouseUpListener=this._mouseUpListener.bind(this);this._boundOutsideClickListener=this._outsideClickListener.bind(this);this._boundKeydownListener=this._keydownListener.bind(this);this._observer=new FlattenedNodesObserver(this,info=>{this._setTemplateFromNodes(info.addedNodes)});this._boundIronOverlayCanceledListener=this._ironOverlayCanceled.bind(this);if(/iPad|iPhone|iPod/.test(navigator.userAgent)){this._boundIosResizeListener=()=>this._detectIosNavbar()}}ready(){super.ready();this._observer.flush();this.addEventListener("click",()=>{});this.$.backdrop.addEventListener("click",()=>{})}_detectIosNavbar(){if(!this.opened){return}const innerHeight=window.innerHeight,innerWidth=window.innerWidth,landscape=innerWidth>innerHeight,clientHeight=document.documentElement.clientHeight;if(landscape&&clientHeight>innerHeight){this.style.setProperty("--vaadin-overlay-viewport-bottom",clientHeight-innerHeight+"px")}else{this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}}_setTemplateFromNodes(nodes){this.template=nodes.filter(node=>node.localName&&"template"===node.localName)[0]||this.template}close(sourceEvent){var evt=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:sourceEvent}});this.dispatchEvent(evt);if(!evt.defaultPrevented){this.opened=!1}}connectedCallback(){super.connectedCallback();if(this._boundIosResizeListener){this._detectIosNavbar();window.addEventListener("resize",this._boundIosResizeListener)}}disconnectedCallback(){super.disconnectedCallback();this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}_ironOverlayCanceled(event){event.preventDefault()}_mouseDownListener(event){this._mouseDownInside=0<=event.composedPath().indexOf(this.$.overlay)}_mouseUpListener(event){this._mouseUpInside=0<=event.composedPath().indexOf(this.$.overlay)}_outsideClickListener(event){if(-1!==event.composedPath().indexOf(this.$.overlay)||this._mouseDownInside||this._mouseUpInside){this._mouseDownInside=!1;this._mouseUpInside=!1;return}if(!this._last){return}const evt=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:event}});this.dispatchEvent(evt);if(this.opened&&!evt.defaultPrevented){this.close(event)}}_keydownListener(event){if(!this._last){return}if("Tab"===event.key&&this.focusTrap){this._cycleTab(event.shiftKey?-1:1);event.preventDefault()}else if("Escape"===event.key||"Esc"===event.key){const evt=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:event}});this.dispatchEvent(evt);if(this.opened&&!evt.defaultPrevented){this.close(event)}}}_ensureTemplatized(){this._setTemplateFromNodes(Array.from(this.children))}_openedChanged(opened,wasOpened){if(!this._instance){this._ensureTemplatized()}if(opened){this.__restoreFocusNode=this._getActiveElement();this._animatedOpening();afterNextRender(this,()=>{if(this.focusTrap&&!this.contains(document._activeElement||document.activeElement)){this._cycleTab(0,0)}const evt=new CustomEvent("vaadin-overlay-open",{bubbles:!0});this.dispatchEvent(evt)});if(!this.modeless){this._addGlobalListeners()}}else if(wasOpened){this._animatedClosing();if(!this.modeless){this._removeGlobalListeners()}}}_hiddenChanged(hidden){if(hidden&&this.hasAttribute("closing")){this._flushAnimation("closing")}}_shouldAnimate(){const name=getComputedStyle(this).getPropertyValue("animation-name"),hidden="none"===getComputedStyle(this).getPropertyValue("display");return!hidden&&name&&"none"!=name}_enqueueAnimation(type,callback){const handler=`__${type}Handler`,listener=()=>{callback();this.removeEventListener("animationend",listener);delete this[handler]};this[handler]=listener;this.addEventListener("animationend",listener)}_flushAnimation(type){const handler=`__${type}Handler`;if("function"===typeof this[handler]){this[handler]()}}_animatedOpening(){if(this.parentNode===document.body&&this.hasAttribute("closing")){this._flushAnimation("closing")}this._attachOverlay();this.setAttribute("opening","");const finishOpening=()=>{this.removeAttribute("opening");document.addEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener);if(!this.modeless){this._enterModalState()}};if(this._shouldAnimate()){this._enqueueAnimation("opening",finishOpening)}else{finishOpening()}}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder");this.parentNode.insertBefore(this._placeholder,this);document.body.appendChild(this)}_animatedClosing(){if(this.hasAttribute("opening")){this._flushAnimation("opening")}if(this._placeholder){this.setAttribute("closing","");const finishClosing=()=>{this.shadowRoot.querySelector("[part=\"overlay\"]").style.removeProperty("pointer-events");this._exitModalState();document.removeEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener);this._detachOverlay();this.removeAttribute("closing");if(this.restoreFocusOnClose&&this.__restoreFocusNode){const activeElement=this._getActiveElement();if(activeElement===document.body||this._deepContains(activeElement)){this.__restoreFocusNode.focus()}this.__restoreFocusNode=null}};if(this._shouldAnimate()){this._enqueueAnimation("closing",finishClosing)}else{finishClosing()}}}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder);this._placeholder.parentNode.removeChild(this._placeholder)}static get __attachedInstances(){return Array.from(document.body.children).filter(el=>el instanceof OverlayElement)}get _last(){return this===OverlayElement.__attachedInstances.pop()}_modelessChanged(modeless){if(!modeless){if(this.opened){this._addGlobalListeners();this._enterModalState()}}else{this._removeGlobalListeners();this._exitModalState()}}_addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener);document.addEventListener("mouseup",this._boundMouseUpListener);document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0);document.addEventListener("keydown",this._boundKeydownListener)}_enterModalState(){if("none"!==document.body.style.pointerEvents){this._previousDocumentPointerEvents=document.body.style.pointerEvents;document.body.style.pointerEvents="none"}OverlayElement.__attachedInstances.forEach(el=>{if(el!==this){el.shadowRoot.querySelector("[part=\"overlay\"]").style.pointerEvents="none"}})}_removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener);document.removeEventListener("mouseup",this._boundMouseUpListener);document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0);document.removeEventListener("keydown",this._boundKeydownListener)}_exitModalState(){if(this._previousDocumentPointerEvents!==void 0){document.body.style.pointerEvents=this._previousDocumentPointerEvents;delete this._previousDocumentPointerEvents}const instances=OverlayElement.__attachedInstances;let el;while(el=instances.pop()){if(el===this){continue}el.shadowRoot.querySelector("[part=\"overlay\"]").style.removeProperty("pointer-events");if(!el.modeless){break}}}_removeOldContent(){if(!this.content||!this._contentNodes){return}this._observer.disconnect();this._contentNodes.forEach(node=>{if(node.parentNode===this.content){this.content.removeChild(node)}});if(this._originalContentPart){this.$.content.parentNode.replaceChild(this._originalContentPart,this.$.content);this.$.content=this._originalContentPart;this._originalContentPart=void 0}this._observer.connect();this._contentNodes=void 0;this.content=void 0}_stampOverlayTemplate(template,instanceProps){this._removeOldContent();if(!template._Templatizer){template._Templatizer=templatize(template,this,{instanceProps:instanceProps,forwardHostProp:function(prop,value){if(this._instance){this._instance.forwardHostProp(prop,value)}}})}this._instance=new template._Templatizer({});this._contentNodes=Array.from(this._instance.root.childNodes);const templateRoot=template._templateRoot||(template._templateRoot=template.getRootNode()),_isScoped=templateRoot!==document;if(_isScoped){if(!this.$.content.shadowRoot){this.$.content.attachShadow({mode:"open"})}let scopeCssText="";const host=templateRoot.host;if(host&&host._template){scopeCssText=stylesFromTemplate(host._template).reduce((result,style)=>result+style.textContent,"")}scopeCssText=scopeCssText.replace(/:host/g,":host-nomatch");if(scopeCssText){if(window.ShadyCSS&&!window.ShadyCSS.nativeShadow){const contentPart=createOverlayContent(scopeCssText);contentPart.id="content";contentPart.setAttribute("part","content");this.$.content.parentNode.replaceChild(contentPart,this.$.content);contentPart.className=this.$.content.className;this._originalContentPart=this.$.content;this.$.content=contentPart}else{const style=document.createElement("style");style.textContent=scopeCssText;this.$.content.shadowRoot.appendChild(style);this._contentNodes.unshift(style)}}this.$.content.shadowRoot.appendChild(this._instance.root);this.content=this.$.content.shadowRoot}else{this.appendChild(this._instance.root);this.content=this}}_removeNewRendererOrTemplate(template,oldTemplate,renderer,oldRenderer){if(template!==oldTemplate){this.template=void 0}else if(renderer!==oldRenderer){this.renderer=void 0}}render(){if(this.renderer){this.renderer.call(this.owner,this.content,this.owner,this.model)}}_templateOrRendererChanged(template,renderer,owner,model,instanceProps,opened){if(template&&renderer){this._removeNewRendererOrTemplate(template,this._oldTemplate,renderer,this._oldRenderer);throw new Error("You should only use either a renderer or a template for overlay content")}const ownerOrModelChanged=this._oldOwner!==owner||this._oldModel!==model;this._oldModel=model;this._oldOwner=owner;const templateOrInstancePropsChanged=this._oldInstanceProps!==instanceProps||this._oldTemplate!==template;this._oldInstanceProps=instanceProps;this._oldTemplate=template;const rendererChanged=this._oldRenderer!==renderer;this._oldRenderer=renderer;const openedChanged=this._oldOpened!==opened;this._oldOpened=opened;if(template&&templateOrInstancePropsChanged){this._stampOverlayTemplate(template,instanceProps)}else if(renderer&&(rendererChanged||openedChanged||ownerOrModelChanged)){this.content=this;if(rendererChanged){while(this.content.firstChild){this.content.removeChild(this.content.firstChild)}}if(opened){this.render()}}}_isFocused(element){return element&&element.getRootNode().activeElement===element}_focusedIndex(elements){elements=elements||this._getFocusableElements();return elements.indexOf(elements.filter(this._isFocused).pop())}_cycleTab(increment,index){const focusableElements=this._getFocusableElements();if(index===void 0){index=this._focusedIndex(focusableElements)}index+=increment;if(index>=focusableElements.length){index=0}else if(0>index){index=focusableElements.length-1}focusableElements[index].focus()}_getFocusableElements(){return FocusablesHelper.getTabbableNodes(this.$.overlay)}_getActiveElement(){let active=document._activeElement||document.activeElement;if(!active||active===document.documentElement||!1===active instanceof Element){active=document.body}while(active.shadowRoot&&active.shadowRoot.activeElement){active=active.shadowRoot.activeElement}return active}_deepContains(node){if(this.contains(node)){return!0}let n=node;const doc=node.ownerDocument;while(n&&n!==doc&&n!==this){n=n.parentNode||n.host}return n===this}}_exports.OverlayElement=OverlayElement;customElements.define(OverlayElement.is,OverlayElement);var vaadinOverlay={OverlayElement:OverlayElement};_exports.$vaadinOverlay=vaadinOverlay;class DatePickerOverlayElement extends DisableUpgradeMixin(OverlayElement){static get is(){return"vaadin-date-picker-overlay"}}customElements.define(DatePickerOverlayElement.is,DatePickerOverlayElement);const $_documentContainer$b=document.createElement("template");$_documentContainer$b.innerHTML=`<dom-module id="vaadin-text-field-shared-styles">
  <template>
    <style>
      :host {
        display: inline-flex;
        outline: none;
      }

      :host::before {
        content: "\\2003";
        width: 0;
        display: inline-block;
        /* Size and position this element on the same vertical position as the input-field element
           to make vertical align for the host element work as expected */
      }

      :host([hidden]) {
        display: none !important;
      }

      .vaadin-text-field-container,
      .vaadin-text-area-container {
        display: flex;
        flex-direction: column;
        min-width: 100%;
        max-width: 100%;
        width: var(--vaadin-text-field-default-width, 12em);
      }

      [part="label"]:empty {
        display: none;
      }

      [part="input-field"] {
        display: flex;
        align-items: center;
        flex: auto;
      }

      .vaadin-text-field-container [part="input-field"] {
        flex-grow: 0;
      }

      /* Reset the native input styles */
      [part="value"],
      [part="input-field"] ::slotted(input),
      [part="input-field"] ::slotted(textarea) {
        -webkit-appearance: none;
        -moz-appearance: none;
        outline: none;
        margin: 0;
        padding: 0;
        border: 0;
        border-radius: 0;
        min-width: 0;
        font: inherit;
        font-size: 1em;
        line-height: normal;
        color: inherit;
        background-color: transparent;
        /* Disable default invalid style in Firefox */
        box-shadow: none;
      }

      [part="input-field"] ::slotted(*) {
        flex: none;
      }

      [part="value"],
      [part="input-field"] ::slotted(input),
      [part="input-field"] ::slotted(textarea),
      /* Slotted by vaadin-select-text-field */
      [part="input-field"] ::slotted([part="value"]) {
        flex: auto;
        white-space: nowrap;
        overflow: hidden;
        width: 100%;
        height: 100%;
      }

      [part="input-field"] ::slotted(textarea) {
        resize: none;
      }

      [part="value"]::-ms-clear,
      [part="input-field"] ::slotted(input)::-ms-clear {
        display: none;
      }

      [part="clear-button"] {
        cursor: default;
      }

      [part="clear-button"]::before {
        content: "✕";
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$b.content);const HOST_PROPS={default:["list","autofocus","pattern","autocapitalize","autocorrect","maxlength","minlength","name","placeholder","autocomplete","title"],accessible:["disabled","readonly","required","invalid"]},PROP_TYPE={DEFAULT:"default",ACCESSIBLE:"accessible"},TextFieldMixin=subclass=>class VaadinTextFieldMixin extends ControlStateMixin(subclass){static get properties(){return{autocomplete:{type:String},autocorrect:{type:String},autocapitalize:{type:String},autoselect:{type:Boolean,value:!1},clearButtonVisible:{type:Boolean,value:!1},errorMessage:{type:String,value:""},i18n:{type:Object,value:()=>{return{clear:"Clear"}}},label:{type:String,value:"",observer:"_labelChanged"},maxlength:{type:Number},minlength:{type:Number},name:{type:String},placeholder:{type:String},readonly:{type:Boolean,reflectToAttribute:!0},required:{type:Boolean,reflectToAttribute:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},hasValue:{type:Boolean,reflectToAttribute:!0},preventInvalidInput:{type:Boolean},_labelId:{type:String},_errorId:{type:String}}}static get observers(){return["_stateChanged(disabled, readonly, clearButtonVisible, hasValue)","_hostPropsChanged("+HOST_PROPS.default.join(", ")+")","_hostAccessiblePropsChanged("+HOST_PROPS.accessible.join(", ")+")","_getActiveErrorId(invalid, errorMessage, _errorId)","_getActiveLabelId(label, _labelId)"]}get focusElement(){if(!this.shadowRoot){return}const slotted=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);if(slotted){return slotted}return this.shadowRoot.querySelector("[part=\"value\"]")}get inputElement(){return this.focusElement}get _slottedTagName(){return"input"}_onInput(e){if(this.__preventInput){e.stopImmediatePropagation();this.__preventInput=!1;return}if(this.preventInvalidInput){const input=this.inputElement;if(0<input.value.length&&!this.checkValidity()){input.value=this.value||"";this.setAttribute("input-prevented","");this._inputDebouncer=Debouncer.debounce(this._inputDebouncer,timeOut.after(200),()=>{this.removeAttribute("input-prevented")});return}}if(!e.__fromClearButton){this.__userInput=!0}this.value=e.target.value}_stateChanged(disabled,readonly,clearButtonVisible,hasValue){if(!disabled&&!readonly&&clearButtonVisible&&hasValue){this.$.clearButton.removeAttribute("hidden")}else{this.$.clearButton.setAttribute("hidden",!0)}}_onChange(e){if(this._valueClearing){return}const changeEvent=new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable});this.dispatchEvent(changeEvent)}_valueChanged(newVal,oldVal){if(""===newVal&&oldVal===void 0){return}if(""!==newVal&&null!=newVal){this.hasValue=!0}else{this.hasValue=!1}if(this.__userInput){this.__userInput=!1;return}else if(newVal!==void 0){this.inputElement.value=newVal}else{this.value=this.inputElement.value=""}if(this.invalid){this.validate()}}_labelChanged(label){if(""!==label&&null!=label){this.setAttribute("has-label","")}else{this.removeAttribute("has-label")}}_onSlotChange(){const slotted=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);if(this.value){this.inputElement.value=this.value;this.validate()}if(slotted&&!this._slottedInput){this._validateSlottedValue(slotted);this._addInputListeners(slotted);this._addIEListeners(slotted);this._slottedInput=slotted}else if(!slotted&&this._slottedInput){this._removeInputListeners(this._slottedInput);this._removeIEListeners(this._slottedInput);this._slottedInput=void 0}Object.keys(PROP_TYPE).map(key=>PROP_TYPE[key]).forEach(type=>this._propagateHostAttributes(HOST_PROPS[type].map(attr=>this[attr]),type))}_hostPropsChanged(...attributesValues){this._propagateHostAttributes(attributesValues,PROP_TYPE.DEFAULT)}_hostAccessiblePropsChanged(...attributesValues){this._propagateHostAttributes(attributesValues,PROP_TYPE.ACCESSIBLE)}_validateSlottedValue(slotted){if(slotted.value!==this.value){console.warn("Please define value on the vaadin-text-field component!");slotted.value=""}}_propagateHostAttributes(attributesValues,type){const input=this.inputElement,attributeNames=HOST_PROPS[type];if("accessible"===type){attributeNames.forEach((attr,index)=>{this._setOrToggleAttribute(attr,attributesValues[index],input);this._setOrToggleAttribute(`aria-${attr}`,attributesValues[index],input)})}else{attributeNames.forEach((attr,index)=>{this._setOrToggleAttribute(attr,attributesValues[index],input)})}}_setOrToggleAttribute(name,value,node){if(!name||!node){return}if(value){node.setAttribute(name,"boolean"===typeof value?"":value)}else{node.removeAttribute(name)}}checkValidity(){if(this.required||this.pattern||this.maxlength||this.minlength){return this.inputElement.checkValidity()}else{return!this.invalid}}_addInputListeners(node){node.addEventListener("input",this._boundOnInput);node.addEventListener("change",this._boundOnChange);node.addEventListener("blur",this._boundOnBlur);node.addEventListener("focus",this._boundOnFocus)}_removeInputListeners(node){node.removeEventListener("input",this._boundOnInput);node.removeEventListener("change",this._boundOnChange);node.removeEventListener("blur",this._boundOnBlur);node.removeEventListener("focus",this._boundOnFocus)}ready(){super.ready();this._boundOnInput=this._onInput.bind(this);this._boundOnChange=this._onChange.bind(this);this._boundOnBlur=this._onBlur.bind(this);this._boundOnFocus=this._onFocus.bind(this);const defaultInput=this.shadowRoot.querySelector("[part=\"value\"]");this._slottedInput=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);this._addInputListeners(defaultInput);this._addIEListeners(defaultInput);if(this._slottedInput){this._addIEListeners(this._slottedInput);this._addInputListeners(this._slottedInput)}this.shadowRoot.querySelector("[name=\"input\"], [name=\"textarea\"]").addEventListener("slotchange",this._onSlotChange.bind(this));if(!(window.ShadyCSS&&window.ShadyCSS.nativeCss)){this.updateStyles()}this.$.clearButton.addEventListener("mousedown",()=>this._valueClearing=!0);this.$.clearButton.addEventListener("click",this._onClearButtonClick.bind(this));this.addEventListener("keydown",this._onKeyDown.bind(this));var uniqueId=TextFieldMixin._uniqueId=1+TextFieldMixin._uniqueId||0;this._errorId=`${this.constructor.is}-error-${uniqueId}`;this._labelId=`${this.constructor.is}-label-${uniqueId}`}validate(){return!(this.invalid=!this.checkValidity())}clear(){this.value=""}_onBlur(){this.validate()}_onFocus(){if(this.autoselect){this.inputElement.select();setTimeout(()=>{this.inputElement.setSelectionRange(0,9999)})}}_onClearButtonClick(e){e.preventDefault();this.inputElement.focus();this.clear();this._valueClearing=!1;if(navigator.userAgent.match(/Trident/)){this.__preventInput=!1}const inputEvent=new Event("input",{bubbles:!0,composed:!0});inputEvent.__fromClearButton=!0;const changeEvent=new Event("change",{bubbles:!this._slottedInput});changeEvent.__fromClearButton=!0;this.inputElement.dispatchEvent(inputEvent);this.inputElement.dispatchEvent(changeEvent)}_onKeyDown(e){if(27===e.keyCode&&this.clearButtonVisible){this.clear()}}_addIEListeners(node){if(navigator.userAgent.match(/Trident/)){this._shouldPreventInput=()=>{this.__preventInput=!0;requestAnimationFrame(()=>{this.__preventInput=!1})};node.addEventListener("focusin",this._shouldPreventInput);node.addEventListener("focusout",this._shouldPreventInput);this._createPropertyObserver("placeholder",this._shouldPreventInput)}}_removeIEListeners(node){if(navigator.userAgent.match(/Trident/)){node.removeEventListener("focusin",this._shouldPreventInput);node.removeEventListener("focusout",this._shouldPreventInput)}}_getActiveErrorId(invalid,errorMessage,errorId){this._setOrToggleAttribute("aria-describedby",errorMessage&&invalid?errorId:void 0,this.inputElement)}_getActiveLabelId(label,labelId){this._setOrToggleAttribute("aria-labelledby",label?labelId:void 0,this.inputElement)}_getErrorMessageAriaHidden(invalid,errorMessage,errorId){return(!(errorMessage&&invalid?errorId:void 0)).toString()}attributeChangedCallback(prop,oldVal,newVal){super.attributeChangedCallback(prop,oldVal,newVal);if(!(window.ShadyCSS&&window.ShadyCSS.nativeCss)&&/^(focused|focus-ring|invalid|disabled|placeholder|has-value)$/.test(prop)){this.updateStyles()}const isSafari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);if(isSafari&&this.root){const WEBKIT_PROPERTY="-webkit-backface-visibility";this.root.querySelectorAll("*").forEach(el=>{el.style[WEBKIT_PROPERTY]="visible";el.style[WEBKIT_PROPERTY]=""})}}};_exports.TextFieldMixin=TextFieldMixin;var vaadinTextFieldMixin={TextFieldMixin:TextFieldMixin};_exports.$vaadinTextFieldMixin=vaadinTextFieldMixin;class TextFieldElement extends ElementMixin$1(TextFieldMixin(ThemableMixin(PolymerElement))){static get template(){return html`
    <style include="vaadin-text-field-shared-styles">
      /* polymer-cli linter breaks with empty line */
    </style>

    <div class="vaadin-text-field-container">

      <label part="label" on-click="focus" id="[[_labelId]]">[[label]]</label>

      <div part="input-field">

        <slot name="prefix"></slot>

        <slot name="input">
          <input part="value">
        </slot>

        <div part="clear-button" id="clearButton" role="button" aria-label\$="[[i18n.clear]]"></div>
        <slot name="suffix"></slot>

      </div>

      <div part="error-message" id="[[_errorId]]" aria-live="assertive" aria-hidden\$="[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]">[[errorMessage]]</div>

    </div>
`}static get is(){return"vaadin-text-field"}static get version(){return"2.4.3"}static get properties(){return{list:{type:String},pattern:{type:String},title:{type:String}}}}_exports.TextFieldElement=TextFieldElement;customElements.define(TextFieldElement.is,TextFieldElement);var vaadinTextField={TextFieldElement:TextFieldElement};_exports.$vaadinTextField=vaadinTextField;class DatePickerElement extends ElementMixin$1(ControlStateMixin(ThemableMixin(ThemePropertyMixin(DatePickerMixin(GestureEventListeners(PolymerElement)))))){static get template(){return html`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host([opened]) {
        pointer-events: auto;
      }

      [part="text-field"] {
        width: 100%;
        min-width: 0;
      }

      :host([disabled]) [part="clear-button"],
      :host([readonly]) [part="clear-button"],
      :host(:not([has-value])) [part="clear-button"] {
        display: none;
      }
    </style>


    <vaadin-text-field id="input" role="application" autocomplete="off" on-focus="_focus" value="{{_userInputValue}}" invalid="[[invalid]]" label="[[label]]" name="[[name]]" placeholder="[[placeholder]]" required="[[required]]" disabled="[[disabled]]" readonly="[[readonly]]" error-message="[[errorMessage]]" aria-label\$="[[label]]" part="text-field" theme\$="[[theme]]">
      <slot name="prefix" slot="prefix"></slot>
      <div part="clear-button" slot="suffix" on-touchend="_clearTouchend" on-click="_clear" role="button" aria-label\$="[[i18n.clear]]"></div>
      <div part="toggle-button" slot="suffix" on-tap="_toggle" role="button" aria-label\$="[[i18n.calendar]]" aria-expanded\$="[[_getAriaExpanded(opened)]]"></div>
    </vaadin-text-field>

    <vaadin-date-picker-overlay id="overlay" fullscreen\$="[[_fullscreen]]" theme\$="[[__getOverlayTheme(theme, _overlayInitialized)]]" on-vaadin-overlay-open="_onOverlayOpened" on-vaadin-overlay-close="_onOverlayClosed" disable-upgrade="">
      <template>
        <vaadin-date-picker-overlay-content id="overlay-content" i18n="[[i18n]]" fullscreen\$="[[_fullscreen]]" label="[[label]]" selected-date="{{_selectedDate}}" slot="dropdown-content" focused-date="{{_focusedDate}}" show-week-numbers="[[showWeekNumbers]]" min-date="[[_minDate]]" max-date="[[_maxDate]]" role="dialog" on-date-tap="_close" part="overlay-content" theme\$="[[__getOverlayTheme(theme, _overlayInitialized)]]">
        </vaadin-date-picker-overlay-content>
      </template>
    </vaadin-date-picker-overlay>

    <iron-media-query query="[[_fullscreenMediaQuery]]" query-matches="{{_fullscreen}}">
    </iron-media-query>
`}static get is(){return"vaadin-date-picker"}static get version(){return"3.3.4"}static get properties(){return{disabled:{type:Boolean,value:!1,reflectToAttribute:!0},errorMessage:String,placeholder:String,readonly:{type:Boolean,value:!1,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},_userInputValue:String}}static get observers(){return["_userInputValueChanged(_userInputValue)"]}ready(){super.ready();afterNextRender(this,()=>this._inputElement.validate=()=>{})}_onVaadinOverlayClose(e){if(this._openedWithFocusRing&&this.hasAttribute("focused")){this.focusElement.setAttribute("focus-ring","")}else if(!this.hasAttribute("focused")){this.focusElement.blur()}if(e.detail.sourceEvent&&-1!==e.detail.sourceEvent.composedPath().indexOf(this)){e.preventDefault()}}_clear(){this.__dispatchChange=!0;this.value="";this.validate();this.focus();prevent("tap");this.__dispatchChange=!1}_clearTouchend(e){this._clear();e.preventDefault();prevent("tap")}_toggle(e){e.stopPropagation();this[this._overlayInitialized&&this.$.overlay.opened?"close":"open"]()}_input(){return this.$.input}set _inputValue(value){this._inputElement.value=value}get _inputValue(){return this._inputElement.value}_getAriaExpanded(opened){return(!!opened).toString()}get focusElement(){return this._input()||this}}_exports.DatePickerElement=DatePickerElement;customElements.define(DatePickerElement.is,DatePickerElement);var vaadinDatePicker={DatePickerElement:DatePickerElement};_exports.$vaadinDatePicker=vaadinDatePicker;const $_documentContainer$c=html`<dom-module id="lumo-date-picker-overlay-content" theme-for="vaadin-date-picker-overlay-content">
  <template>
    <style>
      :host {
        position: relative;
        background-color: transparent;
        /* Background for the year scroller, placed here as we are using a mask image on the actual years part */
        background-image: linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));
        background-size: 57px 100%;
        background-position: top right;
        background-repeat: no-repeat;
        cursor: default;
      }

      /* Month scroller */

      [part="months"] {
        /* Month calendar height:
              header height + margin-bottom
            + weekdays height + margin-bottom
            + date cell heights
            + small margin between month calendars
        */
        --vaadin-infinite-scroller-item-height:
          calc(
              var(--lumo-font-size-l) + var(--lumo-space-m)
            + var(--lumo-font-size-xs) + var(--lumo-space-s)
            + var(--lumo-size-m) * 6
            + var(--lumo-space-s)
          );
        --vaadin-infinite-scroller-buffer-offset: 20%;
        -webkit-mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
        mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
        position: relative;
        margin-right: 57px;
      }

      /* Year scroller */

      [part="years"] {
        /* TODO get rid of fixed magic number */
        --vaadin-infinite-scroller-buffer-width: 97px;
        width: 57px;
        height: auto;
        top: 0;
        bottom: 0;
        font-size: var(--lumo-font-size-s);
        box-shadow: inset 2px 0 4px 0 var(--lumo-shade-5pct);
        -webkit-mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
        mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
      }

      [part="year-number"],
      [part="year-separator"] {
        opacity: 0.5;
        transition: 0.2s opacity;
      }

      [part="years"]:hover [part="year-number"],
      [part="years"]:hover [part="year-separator"] {
        opacity: 1;
      }

      /* TODO unsupported selector */
      #scrollers {
        position: static;
        display: block;
      }

      /* TODO unsupported selector, should fix this in vaadin-date-picker that it adapts to the
       * width of the year scroller */
      #scrollers[desktop] [part="months"] {
        right: auto;
      }

      /* Year scroller position indicator */
      [part="years"]::before {
        border: none;
        width: 1em;
        height: 1em;
        background-color: var(--lumo-base-color);
        background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
        transform: translate(-75%, -50%) rotate(45deg);
        border-top-right-radius: calc(var(--lumo-border-radius) / 2);
        box-shadow: 2px -2px 6px 0 var(--lumo-shade-5pct);
        z-index: 1;
      }

      [part="year-number"],
      [part="year-separator"] {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50%;
        transform: translateY(-50%);
      }

      [part="years"] [part="year-separator"]::after {
        color: var(--lumo-disabled-text-color);
        content: "•";
      }

      /* Current year */

      [part="years"] [part="year-number"][current] {
        color: var(--lumo-primary-text-color);
      }

      /* Toolbar (footer) */

      [part="toolbar"] {
        padding: var(--lumo-space-s);
        box-shadow: 0 -1px 0 0 var(--lumo-contrast-10pct);
        border-bottom-left-radius: var(--lumo-border-radius);
        margin-right: 57px;
      }

      @supports (mask-image: linear-gradient(#000, #000)) or (-webkit-mask-image: linear-gradient(#000, #000)) {
        [part="toolbar"] {
          box-shadow: none;
        }
      }

      /* Today and Cancel buttons */

      /* TODO: Would be great if I could apply the "tertiary" theme from here instead of copying those styles */
      [part="toolbar"] [part\$="button"] {
        background-color: transparent;
        margin: 0;
        min-width: 0;
        padding: 0 0.75em;
      }

      /* Narrow viewport mode (fullscreen) */

      :host([fullscreen]) [part="toolbar"] {
        order: -1;
        background-color: var(--lumo-base-color);
      }

      :host([fullscreen]) [part="overlay-header"] {
        order: -2;
        height: var(--lumo-size-m);
        padding: var(--lumo-space-s);
        position: absolute;
        left: 0;
        right: 0;
        justify-content: center;
      }

      :host([fullscreen]) [part="toggle-button"],
      :host([fullscreen]) [part="clear-button"],
      [part="overlay-header"] [part="label"] {
        display: none;
      }

      /* Very narrow screen (year scroller initially hidden) */

      [part="years-toggle-button"] {
        position: relative;
        right: auto;
        display: flex;
        align-items: center;
        height: var(--lumo-size-s);
        padding: 0 0.5em;
        border-radius: var(--lumo-border-radius);
        z-index: 3;
        color: var(--lumo-primary-text-color);
        font-weight: 500;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      :host([years-visible]) [part="years-toggle-button"] {
        background-color: var(--lumo-primary-color);
        color: var(--lumo-primary-contrast-color);
      }

      [part="years-toggle-button"]::before {
        content: none;
      }

      /* TODO magic number (same as used for iron-media-query in vaadin-date-picker-overlay-content) */
      @media screen and (max-width: 374px) {
        :host {
          background-image: none;
        }

        [part="years"] {
          background-color: var(--lumo-shade-5pct);
        }

        [part="toolbar"],
        [part="months"] {
          margin-right: 0;
        }

        /* TODO make date-picker adapt to the width of the years part */
        [part="years"] {
          --vaadin-infinite-scroller-buffer-width: 90px;
          width: 50px;
        }

        :host([years-visible]) [part="months"] {
          padding-left: 50px;
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$c.content);const $_documentContainer$d=document.createElement("template");$_documentContainer$d.innerHTML=`<dom-module id="lumo-overlay">
  <template>
    <style>
      :host {
        top: var(--lumo-space-m);
        right: var(--lumo-space-m);
        bottom: var(--lumo-space-m);
        left: var(--lumo-space-m);
        /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */
        /* stylelint-disable-next-line */
        outline: 0px solid transparent;
      }

      [part="overlay"] {
        background-color: var(--lumo-base-color);
        background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
        border-radius: var(--lumo-border-radius-m);
        box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);
        color: var(--lumo-body-text-color);
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        font-weight: 400;
        line-height: var(--lumo-line-height-m);
        letter-spacing: 0;
        text-transform: none;
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      [part="content"] {
        padding: var(--lumo-space-xs);
      }

      [part="backdrop"] {
        background-color: var(--lumo-shade-20pct);
        animation: 0.2s lumo-overlay-backdrop-enter both;
        will-change: opacity;
      }

      @keyframes lumo-overlay-backdrop-enter {
        0% {
          opacity: 0;
        }
      }

      :host([closing]) [part="backdrop"] {
        animation: 0.2s lumo-overlay-backdrop-exit both;
      }

      @keyframes lumo-overlay-backdrop-exit {
        100% {
          opacity: 0;
        }
      }

      @keyframes lumo-overlay-dummy-animation {
        0% { opacity: 1; }
        100% { opacity: 1; }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$d.content);const $_documentContainer$e=document.createElement("template");$_documentContainer$e.innerHTML=`<dom-module id="lumo-menu-overlay-core">
  <template>
    <style>
      :host([opening]),
      :host([closing]) {
        animation: 0.14s lumo-overlay-dummy-animation;
      }

      [part="overlay"] {
        will-change: opacity, transform;
      }

      :host([opening]) [part="overlay"] {
        animation: 0.1s lumo-menu-overlay-enter ease-out both;
      }

      @keyframes lumo-menu-overlay-enter {
        0% {
          opacity: 0;
          transform: translateY(-4px);
        }
      }

      :host([closing]) [part="overlay"] {
        animation: 0.1s lumo-menu-overlay-exit both;
      }

      @keyframes lumo-menu-overlay-exit {
        100% {
          opacity: 0;
        }
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-menu-overlay">
  <template>
    <style include="lumo-overlay lumo-menu-overlay-core">
      /* Small viewport (bottom sheet) styles */
      /* Use direct media queries instead of the state attributes (\`[phone]\` and \`[fullscreen]\`) provided by the elements */
      @media (max-width: 420px), (max-height: 420px) {
        :host {
          top: 0 !important;
          right: 0 !important;
          bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
          left: 0 !important;
          align-items: stretch !important;
          justify-content: flex-end !important;
        }

        [part="overlay"] {
          max-height: 50vh;
          width: 100vw;
          border-radius: 0;
          box-shadow: var(--lumo-box-shadow-xl);
        }

        /* The content part scrolls instead of the overlay part, because of the gradient fade-out */
        [part="content"] {
          padding: 30px var(--lumo-space-m);
          max-height: inherit;
          box-sizing: border-box;
          -webkit-overflow-scrolling: touch;
          overflow: auto;
          -webkit-mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
          mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
        }

        [part="backdrop"] {
          display: block;
        }

        /* Animations */

        :host([opening]) [part="overlay"] {
          animation: 0.2s lumo-mobile-menu-overlay-enter cubic-bezier(.215, .61, .355, 1) both;
        }

        :host([closing]),
        :host([closing]) [part="backdrop"] {
          animation-delay: 0.14s;
        }

        :host([closing]) [part="overlay"] {
          animation: 0.14s 0.14s lumo-mobile-menu-overlay-exit cubic-bezier(.55, .055, .675, .19) both;
        }
      }

      @keyframes lumo-mobile-menu-overlay-enter {
        0% {
          transform: translateY(150%);
        }
      }

      @keyframes lumo-mobile-menu-overlay-exit {
        100% {
          transform: translateY(150%);
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$e.content);const $_documentContainer$f=html`<dom-module id="lumo-date-picker-overlay" theme-for="vaadin-date-picker-overlay">
  <template>
    <style include="lumo-menu-overlay">
      [part="overlay"] {
        /*
        Width:
            date cell widths
          + month calendar side padding
          + year scroller width
        */
        width:
          calc(
              var(--lumo-size-m) * 7
            + var(--lumo-space-xs) * 2
            + 57px
          );
        height: 100%;
        max-height: calc(var(--lumo-size-m) * 14);
        overflow: hidden;
        -webkit-tap-highlight-color: transparent;
      }

      [part="content"] {
        padding: 0;
        height: 100%;
        overflow: hidden;
        -webkit-mask-image: none;
        mask-image: none;
      }

      @media (max-width: 420px), (max-height: 420px) {
        [part="overlay"] {
          width: 100vw;
          height: 70vh;
          max-height: 70vh;
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$f.content);const $_documentContainer$g=document.createElement("template");$_documentContainer$g.innerHTML=`<custom-style>
  <style>
    @font-face {
      font-family: 'lumo-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIiwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2MAABd4h9To2WhlYWQAAA3kAAAAMQAAADYSnCkuaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh55IAsbWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wgc1Z9N0jpNnEL6kbRVS6HA2hQYGh9TGR1CbCqa2rXrWOkQE/sHNJgmtZvoVNZqE1B1DNHxzTQxCehUTYiJTQyENui0qSLezr3PduyQfgmRWOfde8+9551z7rnn/O4jLoJ/bRP0UaKQMLFJjpBAvphLZC3Dk0ok7WBzR2/upJs7Ryw/nfFbln/uuN/apCvwrKLrSvUqRufbm5pn0fs0w4gYxnGVP6qHnO4bWiDQGQgwtS6lm3lB3QoX1M2vwEmuzirF39y+Es2+DJ8d1pkyqBIqoze3D1+Zz4DrFoazxI8dWwMrDlZ2DMqQAR9AROsJU+2cmlTPazTco52F1xTa2a2+K8vvq92dVHmtLoPeQX/AZPRYGthDYOeZjBjKoFsVGulR3lWU95WeCK44qHU7MhWUGUKZDT3oKUcG2GWuh+EDDfUYA/jhAhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgRW95uEtpJ1Vfn9XiLriRBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKiflqHRSoWZc3m11Wa/fJdFgXD4sSYfleJBKd8GMz7J8dZn/cGRCcKGDnA2Ge3fKzcvlnTDNthGWLXzX/WaXtUAmRgeLlHSr30r0G9UTXMb0AtmwzOoy73fkSlHZkduw/TYuU9cAD4YutPoxTTsA3797wVr4Z/1NC5zARHr4vtxJjxIfiZMhMkbWk+14BnJZKwqGZwDfswLyxWDSg11rFLJF7Nopxjd1h1/QOT+oezgfu3Yq+Hk+duf5x+40o1GTkaIgikK/IEnC6aYxCUBaZJSN4XTYFjU/YMNIKqJwhDGOCCI8FDXnXmXjtGhGJyShqjAOnBOkW2JG9S7GgYeMWAU5JzhnWmBOaOM+CKEPoqSfFDC2Unq+DLlUgUVUFFLZGJg6jtlojsdsa8kPObPuJdi5dnBdBsLJMGTWDa4t2JvtwuPo9s+Y86suv/W33QG1rAaOAUV+vx4K6f2D04PVKlC7WLSrZzAi45ZV6lIC7WoXqmRyvUqoVwrzUoVsIjeTXWQv+RH5GTlBXiB/In8ln0IbBCAFOajAJrgZYyOHWqOfUe/aHjI12R6OQo1jCgt215l+4f6XPb+0MNou0V+43n2F77tSfRb24d7zitgnKmvYHs69zugaPvBwv6ioXkb2LdL65Atw51uLkXlu1bhMMRcXSPcYoqKIRlh34lQP8/5JbuUFye4vxD6/6MxFF11C0uVLr9Ulgw44tS3pMViNLUExbycFgLIct+QDMibRimx1ydUz8FXZiuOIDBOMVX2nUZc+huNE5XUJ81uiJoiabwqaVF0uacKbau/pl4R2VW0XXlJra6boVrYG646TF5NYzwy4vjENVrDlcNpZPl8DH6XX8XWCx0mvWVZY6KFLrvsY66/zPict5FnxaNUR/juvZCM3TvD60E2W1tZizbXTPDuabcm0nbbzpWKpmA1ayBQ8giedLUM+A0kNjBjQjmuYz7YrgIXYvmF63ZLBwSXrpn9Tb9wwdd/U1H0PMQK3XcO8ul3WT7PyPPdpy0TemKxNRcJNauiXJnnUDpUppQWs4SnUIy0EESGYqJYQLGHxzaGWwVIaS6Y7mQFM8ZjYDQ3axjf61SWjU33JwOZA1pwaG1L9mzf71aHRdX1JHw6Fp0aXhNwbqyeGNg4NbdzGCBxoz4ZXjy4Nu69Zr6sDY6vMrLU5nA1P8JkbdWXJ6ERfMryvNh1JfQ9+T4dIhGvK9w3dxjBBzatsQ/MlOHVIDnYpDz6odAXlQ01t2Pa5Iafd8MMpxAeDKP0C6CjgVLT5osB6icUx01lWjXxzT/GyRF2welEM5Z/7jG3VjQ1SrNn5IbyzOG5dobB3/QHxyZvsXcoz8IoEwS7plCg+zxHQk424q9BfEpkESJbFHQusDBSWFkuBkoPO0kLKwRVYjxGXlHTcTDQMJ/H6TX9afkO7mnraTO1feTnZAXLu4cp7HAXMmNG1yeFk9TgS/NHhZR/4QoBTr/ZB+6hCgyl15Nq1UbN6nE1/ZnP1U2cizCBpvs8cJQZJ4LkYx5N/yZPAUZNQQ0V4f3BQllWrK3YRzl30dOT6RVn2upNur6woSa8CqpdT/aKnBM4o3jNur9d9xqtUT6veBEt9Ca9at+ERzEEhUkR8sa5mQ4aVvJoVeEA8zI4ei5mULXFGyU7z/6TAeYLVcpzSWZY8PYYF5yrTV60sT0+XV141vX++Wf16V2bFeGVPZXxFpkvyeKTWLlzfW0mnKxsY6Y3294/0998SCfX1blm5pbcvFGlq/r07MRAMhYIDiW5JFKWW3vdrEpCsZSJG+om7Zu/PSScZJhNkLbmW5Wsr12pWqW5zKtlwRS4bFOxUw17mCzy6lskCDl1WYOGWDYrADrMA7BDDweWWNd5koiJnR1dz+ytLP2q0SqPB1lnK2ccB7RYe4FSoPks3iB3t4txTSHctb2sy1ivk0pvHuCNm6w1f6wxv3+OCgN78LqdQnUVh7R0oTAp0zOf2rbW770Vu5C2dIyGdTnHo8zSji7dppj0USoVCz+lhRMTh53Teq9VbGfbjuSbAooSdXayY4PYHg374C6f7gl1B/DXuJ4/QXxOBdJFJspFsI3egpoWUUCjlTIFnNYNl+ZyZKmBeYKGHkD1QyDlhaKbKwKcIJqJ4TLJ2OmdY/JWXae4DdGBw8HZ7eXcgFF2zr2SoalDry5iKqoa0Puhe3hPQ2s3elTYM+MI+n3rK0KgL7/La3GeMLt6m7u912vGnvtORiIa0qBmhqVi+XW9XNBmqb8eVgKzIHfGI5bNoG7X0UCzeISmqIcO/nY8FH7U8avX9fx/ST+hx0sezPw9Qy8Mum3GWf2N4Uy/yIYGVBXbJHWIZp7dfTcptdMTr9Qmq7DaiK/ukqCL4kt4RUfS5XPnMtmT22/mQFqF7emSqtrlu8SVElxDRJrZODkpuwe0VfTfjdEp1f7A7v+fozNBXUJ/6WTuK2TtFlpFVZAZ3LcFvUi1Z2p2YT+EMAkGJVStOzLTAPg4IqWIAlzRSjOBkl2zxj3TKycpzT/MnvX3uaSMWM+gU0rkXjohhefVRMaps3/kLMSKv23lT23uxQrkQjyOJleMDsdhAnD6ZGElWZ5MjCXzCE/hkWX+WF4knzGhVOyK2eQZekV3eyo0zL8kuYWCnDCvjjhAkcTPOBDXVdoav3HVcFnQjLvtV9S2p0zA6JegPwMQxt+yFb3ll9zGlq/5dRKb3cEyQYoaNYpharJ7xCB7AWxsLY3jjZXY0XsZj0Wjwc9I6PP/dKABnCZaqHpaZEACxk4ZeLZSKNgZABl+lYQX1sJQOSX3n6r410evcoud5JeAGUXVP9H1tZOKejTq4Ono0z0erro1FrnOpohva1d/hTdtVsQdKN5W9RlT3NjD0nznyKNTgKAMfWNWcyodV0IGLPIHOF0o4JyqufaK4z6WIIzuGh3d8c8cwQg8ER+OVxyrjdm8vNuhts4LoOihGxIMuUdgzwiYN7xhh1+oZnJNuTG7gQZvu4XWZ9GAZZjGEubwePqYhtKDTH+9VQkl17/iGybsnJ+8+sKtyPrcll9ty65Zsdst/9iqpEKh7M5VdBxh3csOdNc6tW3I1uyM1PzOXegSOrLFsFNI2O27M+TF2ApnN9MUv5ud6LjxIvEQnHRzxIu4IsA9MLFkJn2tcZoZ7ON7dXe7ujrc8HrusPKamlqXwd77lQUuLpilau4PUMapueBb7irU4RoUXEYXuVuIGlRGmOp+2lNkaRPVziOqmlaZvaqG4dFgSj0jxEJWrv12IUWntmw+rfQarRE0Aph4ocI6nlUlGqs+u3/+T/ethW62PpHp2eHbZstnh/wOO95yDAHicY2BkYGAAYi2NOJ94fpuvDNzML4AiDNc/fzqEoP+/Zp7KdAvI5WBgAokCAGkcDfgAAAB4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo8CoIKuArwC1ALlgu8eJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }

    html {
      --lumo-icons-align-center: "\\ea01";
      --lumo-icons-align-left: "\\ea02";
      --lumo-icons-align-right: "\\ea03";
      --lumo-icons-angle-down: "\\ea04";
      --lumo-icons-angle-left: "\\ea05";
      --lumo-icons-angle-right: "\\ea06";
      --lumo-icons-angle-up: "\\ea07";
      --lumo-icons-arrow-down: "\\ea08";
      --lumo-icons-arrow-left: "\\ea09";
      --lumo-icons-arrow-right: "\\ea0a";
      --lumo-icons-arrow-up: "\\ea0b";
      --lumo-icons-bar-chart: "\\ea0c";
      --lumo-icons-bell: "\\ea0d";
      --lumo-icons-calendar: "\\ea0e";
      --lumo-icons-checkmark: "\\ea0f";
      --lumo-icons-chevron-down: "\\ea10";
      --lumo-icons-chevron-left: "\\ea11";
      --lumo-icons-chevron-right: "\\ea12";
      --lumo-icons-chevron-up: "\\ea13";
      --lumo-icons-clock: "\\ea14";
      --lumo-icons-cog: "\\ea15";
      --lumo-icons-cross: "\\ea16";
      --lumo-icons-download: "\\ea17";
      --lumo-icons-dropdown: "\\ea18";
      --lumo-icons-edit: "\\ea19";
      --lumo-icons-error: "\\ea1a";
      --lumo-icons-eye: "\\ea1b";
      --lumo-icons-eye-disabled: "\\ea1c";
      --lumo-icons-menu: "\\ea1d";
      --lumo-icons-minus: "\\ea1e";
      --lumo-icons-ordered-list: "\\ea1f";
      --lumo-icons-phone: "\\ea20";
      --lumo-icons-photo: "\\ea21";
      --lumo-icons-play: "\\ea22";
      --lumo-icons-plus: "\\ea23";
      --lumo-icons-redo: "\\ea24";
      --lumo-icons-reload: "\\ea25";
      --lumo-icons-search: "\\ea26";
      --lumo-icons-undo: "\\ea27";
      --lumo-icons-unordered-list: "\\ea28";
      --lumo-icons-upload: "\\ea29";
      --lumo-icons-user: "\\ea2a";
    }
  </style>
</custom-style>`;document.head.appendChild($_documentContainer$g.content);const $_documentContainer$h=document.createElement("template");$_documentContainer$h.innerHTML=`<dom-module id="lumo-field-button">
  <template>
    <style>
      [part\$="button"] {
        flex: none;
        width: 1em;
        height: 1em;
        line-height: 1;
        font-size: var(--lumo-icon-size-m);
        text-align: center;
        color: var(--lumo-contrast-60pct);
        transition: 0.2s color;
        cursor: var(--lumo-clickable-cursor);
      }

      :host(:not([readonly])) [part\$="button"]:hover {
        color: var(--lumo-contrast-90pct);
      }

      :host([disabled]) [part\$="button"],
      :host([readonly]) [part\$="button"] {
        color: var(--lumo-contrast-20pct);
      }

      [part\$="button"]::before {
        font-family: "lumo-icons";
        display: block;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$h.content);const $_documentContainer$i=document.createElement("template");$_documentContainer$i.innerHTML=`<dom-module id="lumo-required-field">
  <template>
    <style>
      [part="label"] {
        align-self: flex-start;
        color: var(--lumo-secondary-text-color);
        font-weight: 500;
        font-size: var(--lumo-font-size-s);
        margin-left: calc(var(--lumo-border-radius-m) / 4);
        transition: color 0.2s;
        line-height: 1;
        padding-bottom: 0.5em;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        position: relative;
        max-width: 100%;
        box-sizing: border-box;
      }

      :host([has-label])::before {
        margin-top: calc(var(--lumo-font-size-s) * 1.5);
      }

      :host([has-label]) {
        padding-top: var(--lumo-space-m);
      }

      :host([required]) [part="label"] {
        padding-right: 1em;
      }

      [part="label"]::after {
        content: var(--lumo-required-field-indicator, "•");
        transition: opacity 0.2s;
        opacity: 0;
        color: var(--lumo-primary-text-color);
        position: absolute;
        right: 0;
        width: 1em;
        text-align: center;
      }

      :host([required]:not([has-value])) [part="label"]::after {
        opacity: 1;
      }

      :host([invalid]) [part="label"]::after {
        color: var(--lumo-error-text-color);
      }

      [part="error-message"] {
        margin-left: calc(var(--lumo-border-radius-m) / 4);
        font-size: var(--lumo-font-size-xs);
        line-height: var(--lumo-line-height-xs);
        color: var(--lumo-error-text-color);
        will-change: max-height;
        transition: 0.4s max-height;
        max-height: 5em;
      }

      /* Margin that doesn’t reserve space when there’s no error message */
      [part="error-message"]:not(:empty)::before,
      [part="error-message"]:not(:empty)::after {
        content: "";
        display: block;
        height: 0.4em;
      }

      :host(:not([invalid])) [part="error-message"] {
        max-height: 0;
        overflow: hidden;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$i.content);const $_documentContainer$j=html`<dom-module id="lumo-text-field" theme-for="vaadin-text-field">
  <template>
    <style include="lumo-required-field lumo-field-button">
      :host {
        --lumo-text-field-size: var(--lumo-size-m);
        color: var(--lumo-body-text-color);
        font-size: var(--lumo-font-size-m);
        font-family: var(--lumo-font-family);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
        padding: var(--lumo-space-xs) 0;
      }

      :host::before {
        height: var(--lumo-text-field-size);
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
      }

      :host([focused]:not([readonly])) [part="label"] {
        color: var(--lumo-primary-text-color);
      }

      [part="value"],
      [part="input-field"] ::slotted(input),
      [part="input-field"] ::slotted(textarea),
      /* Slotted by vaadin-select-text-field */
      [part="input-field"] ::slotted([part="value"]) {
        cursor: inherit;
        min-height: var(--lumo-text-field-size);
        padding: 0 0.25em;
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
        -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      }

      [part="value"]:focus,
      [part="input-field"] ::slotted(input):focus,
      [part="input-field"] ::slotted(textarea):focus {
        -webkit-mask-image: none;
        mask-image: none;
      }

      /*
        TODO: CSS custom property in \`mask-image\` causes crash in Edge
        see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/15415089/
      */
      @-moz-document url-prefix() {
        [part="value"],
        [part="input-field"] ::slotted(input),
        [part="input-field"] ::slotted(textarea),
        [part="input-field"] ::slotted([part="value"]) {
          mask-image: var(--_lumo-text-field-overflow-mask-image);
        }
      }

      [part="value"]::-webkit-input-placeholder {
        color: inherit;
        transition: opacity 0.175s 0.05s;
        opacity: 0.5;
      }

      [part="value"]:-ms-input-placeholder {
        color: inherit;
        opacity: 0.5;
      }

      [part="value"]::-moz-placeholder {
        color: inherit;
        transition: opacity 0.175s 0.05s;
        opacity: 0.5;
      }

      [part="value"]::placeholder {
        color: inherit;
        transition: opacity 0.175s 0.1s;
        opacity: 0.5;
      }

      [part="input-field"] {
        border-radius: var(--lumo-border-radius);
        background-color: var(--lumo-contrast-10pct);
        padding: 0 calc(0.375em + var(--lumo-border-radius) / 4 - 1px);
        font-weight: 500;
        line-height: 1;
        position: relative;
        cursor: text;
        box-sizing: border-box;
      }

      /* Used for hover and activation effects */
      [part="input-field"]::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: inherit;
        pointer-events: none;
        background-color: var(--lumo-contrast-50pct);
        opacity: 0;
        transition: transform 0.15s, opacity 0.2s;
        transform-origin: 100% 0;
      }

      /* Hover */

      :host(:hover:not([readonly]):not([focused])) [part="label"] {
        color: var(--lumo-body-text-color);
      }

      :host(:hover:not([readonly]):not([focused])) [part="input-field"]::after {
        opacity: 0.1;
      }

      /* Touch device adjustment */
      @media (pointer: coarse) {
        :host(:hover:not([readonly]):not([focused])) [part="label"] {
          color: var(--lumo-secondary-text-color);
        }

        :host(:hover:not([readonly]):not([focused])) [part="input-field"]::after {
          opacity: 0;
        }

        :host(:active:not([readonly]):not([focused])) [part="input-field"]::after {
          opacity: 0.2;
        }
      }

      /* Trigger when not focusing using the keyboard */
      :host([focused]:not([focus-ring]):not([readonly])) [part="input-field"]::after {
        transform: scaleX(0);
        transition-duration: 0.15s, 1s;
      }

      /* Focus-ring */

      :host([focus-ring]) [part="input-field"] {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Read-only and disabled */
      :host([readonly]) [part="value"]::-webkit-input-placeholder,
      :host([disabled]) [part="value"]::-webkit-input-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]:-ms-input-placeholder,
      :host([disabled]) [part="value"]:-ms-input-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]::-moz-placeholder,
      :host([disabled]) [part="value"]::-moz-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]::placeholder,
      :host([disabled]) [part="value"]::placeholder {
        opacity: 0;
      }

      /* Read-only */

      :host([readonly]) [part="input-field"] {
        color: var(--lumo-secondary-text-color);
        background-color: transparent;
        cursor: default;
      }

      :host([readonly]) [part="input-field"]::after {
        background-color: transparent;
        opacity: 1;
        border: 1px dashed var(--lumo-contrast-30pct);
      }

      /* Disabled style */

      :host([disabled]) {
        pointer-events: none;
      }

      :host([disabled]) [part="input-field"] {
        background-color: var(--lumo-contrast-5pct);
      }

      :host([disabled]) [part="label"],
      :host([disabled]) [part="value"],
      :host([disabled]) [part="input-field"] ::slotted(*) {
        color: var(--lumo-disabled-text-color);
        -webkit-text-fill-color: var(--lumo-disabled-text-color);
      }

      /* Invalid style */

      :host([invalid]) [part="input-field"] {
        background-color: var(--lumo-error-color-10pct);
      }

      :host([invalid]) [part="input-field"]::after {
        background-color: var(--lumo-error-color-50pct);
      }

      :host([invalid][focus-ring]) [part="input-field"] {
        box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);
      }

      :host([input-prevented]) [part="input-field"] {
        color: var(--lumo-error-text-color);
      }

      /* Small theme */

      :host([theme~="small"]) {
        font-size: var(--lumo-font-size-s);
        --lumo-text-field-size: var(--lumo-size-s);
      }

      :host([theme~="small"][has-label]) [part="label"] {
        font-size: var(--lumo-font-size-xs);
      }

      :host([theme~="small"][has-label]) [part="error-message"] {
        font-size: var(--lumo-font-size-xxs);
      }

      /* Text align */

      :host([theme~="align-center"]) [part="value"] {
        text-align: center;
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([theme~="align-right"]) [part="value"] {
        text-align: right;
        --_lumo-text-field-overflow-mask-image: none;
      }

      @-moz-document url-prefix() {
        /* Firefox is smart enough to align overflowing text to right */
        :host([theme~="align-right"]) [part="value"] {
          --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
        }
      }

      /* Slotted content */

      [part="input-field"] ::slotted(:not([part]):not(iron-icon):not(input):not(textarea)) {
        color: var(--lumo-secondary-text-color);
        font-weight: 400;
      }

      /* Slotted icons */

      [part="input-field"] ::slotted(iron-icon) {
        color: var(--lumo-contrast-60pct);
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
      [part="input-field"] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: 0.25em;
        box-sizing: border-box !important;
      }

      [part="clear-button"]::before {
        content: var(--lumo-icons-cross);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$j.content);const $_documentContainer$k=html`<dom-module id="lumo-date-picker" theme-for="vaadin-date-picker">
  <template>
    <style include="lumo-field-button">
      :host {
        outline: none;
      }

      [part="toggle-button"]::before {
        content: var(--lumo-icons-calendar);
      }

      [part="clear-button"]::before {
        content: var(--lumo-icons-cross);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$k.content);const $_documentContainer$l=html`<dom-module id="lumo-month-calendar" theme-for="vaadin-month-calendar">
  <template>
    <style>
      :host {
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        -webkit-tap-highlight-color: transparent;
        user-select: none;
        font-size: var(--lumo-font-size-m);
        color: var(--lumo-body-text-color);
        text-align: center;
        padding: 0 var(--lumo-space-xs);
      }

      /* Month header */

      [part="month-header"] {
        color: var(--lumo-header-text-color);
        font-size: var(--lumo-font-size-l);
        line-height: 1;
        font-weight: 500;
        margin-bottom: var(--lumo-space-m);
      }

      /* Week days and numbers */

      [part="weekdays"],
      [part="weekday"],
      [part="week-numbers"] {
        font-size: var(--lumo-font-size-xs);
        line-height: 1;
        color: var(--lumo-tertiary-text-color);
      }

      [part="weekdays"] {
        margin-bottom: var(--lumo-space-s);
      }

      /* TODO should have part="week-number" for the cell in weekdays-container */
      [part="weekday"]:empty,
      [part="week-numbers"] {
        width: var(--lumo-size-xs);
      }

      /* Date and week number cells */

      [part="date"],
      [part="week-number"] {
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: var(--lumo-size-m);
        position: relative;
      }

      [part="date"] {
        transition: color 0.1s;
      }

      /* Today date */

      [part="date"][today] {
        color: var(--lumo-primary-text-color);
      }

      /* Focused date */

      [part="date"]::before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        min-width: 2em;
        min-height: 2em;
        width: 80%;
        height: 80%;
        max-height: 100%;
        max-width: 100%;
        border-radius: var(--lumo-border-radius);
      }

      [part="date"][focused]::before {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      :host(:not([focused])) [part="date"][focused]::before {
        animation: vaadin-date-picker-month-calendar-focus-date 1.4s infinite;
      }

      @keyframes vaadin-date-picker-month-calendar-focus-date {
        50% {
          box-shadow: 0 0 0 2px transparent;
        }
      }

      /* TODO should not rely on the role attribute */
      [part="date"][role="button"]:not([disabled]):not([selected]):hover::before {
        background-color: var(--lumo-primary-color-10pct);
      }

      [part="date"][selected] {
        color: var(--lumo-primary-contrast-color);
      }

      [part="date"][selected]::before {
        background-color: var(--lumo-primary-color);
      }

      [part="date"][disabled] {
        color: var(--lumo-disabled-text-color);
      }

      @media (pointer: coarse) {
        [part="date"]:hover:not([selected])::before,
        [part="date"][focused]:not([selected])::before {
          display: none;
        }

        [part="date"][role="button"]:not([disabled]):active::before {
          display: block;
        }

        [part="date"][selected]::before {
          box-shadow: none;
        }
      }

      /* Disabled */

      :host([disabled]) * {
        color: var(--lumo-disabled-text-color) !important;
      }
    </style>
  </template>
</dom-module><custom-style>
  <style>
    @keyframes vaadin-date-picker-month-calendar-focus-date {
      50% {
        box-shadow: 0 0 0 2px transparent;
      }
    }
  </style>
</custom-style>`;document.head.appendChild($_documentContainer$l.content);class FormLayoutElement extends ElementMixin$1(ThemableMixin(mixinBehaviors([IronResizableBehavior],PolymerElement))){static get template(){return html`
    <style>
      :host {
        display: block;
        max-width: 100%;
        animation: 1ms vaadin-form-layout-appear;
        /* CSS API for host */
        --vaadin-form-layout-column-spacing: 2em; /* (default) */
        align-self: stretch;
      }

      @keyframes vaadin-form-layout-appear {
        to {
          opacity: 1;
        }
      }

      :host([hidden]) {
        display: none !important;
      }

      #layout {
        display: flex;

        align-items: baseline; /* default \`stretch\` is not appropriate */

        flex-wrap: wrap; /* the items should wrap */
      }

      #layout ::slotted(*) {
        /* Items should neither grow nor shrink. */
        flex-grow: 0;
        flex-shrink: 0;

        /* Margins make spacing between the columns */
        margin-left: calc(0.5 * var(--vaadin-form-layout-column-spacing));
        margin-right: calc(0.5 * var(--vaadin-form-layout-column-spacing));
      }

      #layout ::slotted(br) {
        /*
          Line break element wraps the following item on a new line. Makes
          a block with zero height, stretched to fill all the available width
          of layout, so that the next sibling item is wrapped for sure.
        */
        display: block;
        content: '';
        flex: 1 1 100%;
      }
    </style>
    <div id="layout">
      <slot id="slot"></slot>
    </div>
`}static get is(){return"vaadin-form-layout"}static get version(){return"2.1.2"}static get properties(){return{responsiveSteps:{type:Array,value:function(){return[{minWidth:0,columns:1,labelsPosition:"top"},{minWidth:"20em",columns:1},{minWidth:"40em",columns:2}]},observer:"_responsiveStepsChanged"},_columnCount:{type:Number},_labelsOnTop:{type:Boolean}}}static get observers(){return["_invokeUpdateStyles(_columnCount, _labelsOnTop)"]}ready(){this._styleElement=document.createElement("style");this.root.appendChild(this._styleElement);this._styleElement.textContent=" ";if(window.ShadyDOM){window.ShadyDOM.flush()}super.ready();this.addEventListener("iron-resize",this._selectResponsiveStep);this.addEventListener("animationend",this.__onAnimationEnd)}connectedCallback(){super.connectedCallback();beforeNextRender(this,this._selectResponsiveStep);beforeNextRender(this,this.updateStyles);this._observeChildrenColspanChange()}disconnectedCallback(){super.disconnectedCallback();this.__mutationObserver.disconnect();this.__childObserver.disconnect()}_observeChildrenColspanChange(){const mutationObserverConfig={attributes:!0};this.__mutationObserver=new MutationObserver(mutationRecord=>{mutationRecord.forEach(mutation=>{if("attributes"===mutation.type&&"colspan"===mutation.attributeName){this._invokeUpdateStyles()}})});this.__childObserver=new FlattenedNodesObserver(this,info=>{const ignore=["template","style","dom-repeat","dom-if"],nodes=Array.from(info.addedNodes).filter(node=>node.nodeType===Node.ELEMENT_NODE&&-1===ignore.indexOf(node.localName.toLowerCase()));nodes.forEach(child=>{this.__mutationObserver.observe(child,mutationObserverConfig)});if(nodes.some(node=>node.hasAttribute("colspan"))){this._invokeUpdateStyles()}})}_naturalNumberOrOne(n){if("number"===typeof n&&1<=n&&n<1/0){return _Mathfloor(n)}return 1}_isValidCSSLength(value){if("inherit"===value||"normal"===value){return!1}this._styleElement.firstChild.nodeValue=`#styleElement { word-spacing: ${value}; }`;if(!this._styleElement.sheet){return!0}return 0>["",null].indexOf(this._styleElement.sheet.cssRules[0].style.getPropertyValue("word-spacing"))}_responsiveStepsChanged(responsiveSteps,oldResponsiveSteps){try{if(!Array.isArray(responsiveSteps)){throw new Error("Invalid \"responsiveSteps\" type, an Array is required.")}if(1>responsiveSteps.length){throw new Error("Invalid empty \"responsiveSteps\" array, at least one item is required.")}responsiveSteps.forEach(step=>{if(this._naturalNumberOrOne(step.columns)!==step.columns){throw new Error(`Invalid 'columns' value of ${step.columns}, a natural number is required.`)}if(step.minWidth!==void 0&&!this._isValidCSSLength(step.minWidth)){throw new Error(`Invalid 'minWidth' value of ${step.minWidth}, a valid CSS length required.`)}if(step.labelsPosition!==void 0&&-1===["aside","top"].indexOf(step.labelsPosition)){throw new Error(`Invalid 'labelsPosition' value of ${step.labelsPosition}, 'aside' or 'top' string is required.`)}})}catch(e){if(oldResponsiveSteps&&oldResponsiveSteps!==responsiveSteps){console.warn(`${e.message} Using previously set 'responsiveSteps' instead.`);this.responsiveSteps=oldResponsiveSteps}else{console.warn(`${e.message} Using default 'responsiveSteps' instead.`);this.responsiveSteps=[{minWidth:0,columns:1,labelsPosition:"top"},{minWidth:"20em",columns:1},{minWidth:"40em",columns:2}]}}this._selectResponsiveStep()}__onAnimationEnd(e){if(0===e.animationName.indexOf("vaadin-form-layout-appear")){this._selectResponsiveStep()}}_selectResponsiveStep(){let selectedStep;const tmpStyleProp="background-position";this.responsiveSteps.forEach(step=>{this.$.layout.style.setProperty(tmpStyleProp,step.minWidth);const stepMinWidthPx=parseFloat(getComputedStyle(this.$.layout).getPropertyValue(tmpStyleProp));if(stepMinWidthPx<=this.offsetWidth){selectedStep=step}});this.$.layout.style.removeProperty(tmpStyleProp);if(selectedStep){this._columnCount=selectedStep.columns;this._labelsOnTop="top"===selectedStep.labelsPosition}if(/\b(Edge|Trident)\//.test(navigator.userAgent)){if(this.offsetWidth!==this._lastOffsetWidth){this.updateStyles();this._lastOffsetWidth=this.offsetWidth}}}_invokeUpdateStyles(){this.updateStyles()}updateStyles(...args){super.updateStyles(...args);const columnSpacing=window.ShadyCSS?window.ShadyCSS.getComputedStyleValue(this,"--vaadin-form-layout-column-spacing"):getComputedStyle(this).getPropertyValue("--vaadin-form-layout-column-spacing"),direction=getComputedStyle(this).direction,marginStartProp="margin-"+("ltr"===direction?"left":"right"),marginEndProp="margin-"+("ltr"===direction?"right":"left"),containerWidth=this.offsetWidth;if(window.ShadyDOM){window.ShadyDOM.flush()}let col=0;Array.from(this.children).forEach(child=>{if("none"!==getComputedStyle(child).display){let colspan;if("br"===child.localName){colspan=this._columnCount-col}else{colspan=this._naturalNumberOrOne(parseFloat(child.getAttribute("colspan")));colspan=_Mathmin(colspan,this._columnCount)}const childRatio=colspan/this._columnCount;if("br"===child.localName){child.style.paddingRight=`calc(${childRatio*containerWidth}px - ${1-childRatio} * ${columnSpacing})`}else{child.style.width=`calc(${99.9*childRatio}% - ${1-childRatio} * ${columnSpacing})`}if(col+colspan>this._columnCount){col=0}if(0===col){child.style.setProperty(marginStartProp,"0px")}else{child.style.removeProperty(marginStartProp)}if(col+colspan===this._columnCount){child.style.setProperty(marginEndProp,"0px")}else{child.style.removeProperty(marginEndProp)}col=(col+colspan)%this._columnCount;if("vaadin-form-item"===child.localName){if(this._labelsOnTop){child.setAttribute("label-position","top")}else{child.removeAttribute("label-position")}}}})}}_exports.FormLayoutElement=FormLayoutElement;customElements.define(FormLayoutElement.is,FormLayoutElement);var vaadinFormLayout={FormLayoutElement:FormLayoutElement};_exports.$vaadinFormLayout=vaadinFormLayout;const $_documentContainer$m=html`<dom-module id="lumo-form-layout" theme-for="vaadin-form-layout">
  <template>
    <style>
      :host {
        --vaadin-form-layout-column-spacing: var(--lumo-space-l);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$m.content);var IOS=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/),IOS_TOUCH_SCROLLING=IOS&&8<=IOS[1],DEFAULT_PHYSICAL_COUNT=3,ANIMATION_FRAME=animationFrame,IDLE_TIME=idlePeriod,MICRO_TASK=microTask;const PolymerIronList=Class({behaviors:[IronResizableBehavior,IronScrollTargetBehavior],_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_collection:null,_lastVisibleIndexVal:null,_maxPages:2,_focusedVirtualIndex:-1,_itemsPerRow:1,_rowHeight:0,_templateCost:0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){var size=this.grid?this._physicalRows*this._rowHeight:this._physicalSize;return size-this._viewportHeight},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){var virtualCount=this._convertIndexToCompleteRow(this._virtualCount);return _Mathmax(0,virtualCount-this._physicalCount)},set _virtualStart(val){val=this._clamp(val,0,this._maxVirtualStart);if(this.grid){val=val-val%this._itemsPerRow}this._virtualStartVal=val},get _virtualStart(){return this._virtualStartVal||0},set _physicalStart(val){val=val%this._physicalCount;if(0>val){val=this._physicalCount+val}if(this.grid){val=val-val%this._itemsPerRow}this._physicalStartVal=val},get _physicalStart(){return this._physicalStartVal||0},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},set _physicalCount(val){this._physicalCountVal=val},get _physicalCount(){return this._physicalCountVal||0},get _optPhysicalSize(){return 0===this._viewportHeight?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return!!(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){var idx=this._firstVisibleIndexVal;if(null==idx){var physicalOffset=this._physicalTop+this._scrollOffset;idx=this._iterateItems(function(pidx,vidx){physicalOffset+=this._getPhysicalSizeIncrement(pidx);if(physicalOffset>this._scrollPosition){return this.grid?vidx-vidx%this._itemsPerRow:vidx}if(this.grid&&this._virtualCount-1===vidx){return vidx-vidx%this._itemsPerRow}})||0;this._firstVisibleIndexVal=idx}return idx},get lastVisibleIndex(){var idx=this._lastVisibleIndexVal;if(null==idx){if(this.grid){idx=_Mathmin(this._virtualCount,this.firstVisibleIndex+this._estRowsInView*this._itemsPerRow-1)}else{var physicalOffset=this._physicalTop+this._scrollOffset;this._iterateItems(function(pidx,vidx){if(physicalOffset<this._scrollBottom){idx=vidx}physicalOffset+=this._getPhysicalSizeIncrement(pidx)})}this._lastVisibleIndexVal=idx}return idx},get _scrollOffset(){return this._scrollerPaddingTop},attached:function(){this._debounce("_render",this._render,ANIMATION_FRAME);this.listen(this,"iron-resize","_resizeHandler")},detached:function(){this.unlisten(this,"iron-resize","_resizeHandler")},updateViewportBoundaries:function(){var styles=window.getComputedStyle(this);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(styles["padding-top"],10);this._isRTL=!!("rtl"===styles.direction);this._viewportWidth=this.$.items.offsetWidth;this._viewportHeight=this._scrollTargetHeight;this.grid&&this._updateGridMetrics()},_scrollHandler:function(){var scrollTop=_Mathmax(0,_Mathmin(this._maxScrollTop,this._scrollTop)),delta=scrollTop-this._scrollPosition,isScrollingDown=0<=delta;this._scrollPosition=scrollTop;this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null;if(_Mathabs(delta)>this._physicalSize&&0<this._physicalSize){delta=delta-this._scrollOffset;var idxAdjustment=_Mathround(delta/this._physicalAverage)*this._itemsPerRow;this._virtualStart=this._virtualStart+idxAdjustment;this._physicalStart=this._physicalStart+idxAdjustment;this._physicalTop=_Mathfloor(this._virtualStart/this._itemsPerRow)*this._physicalAverage;this._update()}else if(0<this._physicalCount){var reusables=this._getReusables(isScrollingDown);if(isScrollingDown){this._physicalTop=reusables.physicalTop;this._virtualStart=this._virtualStart+reusables.indexes.length;this._physicalStart=this._physicalStart+reusables.indexes.length}else{this._virtualStart=this._virtualStart-reusables.indexes.length;this._physicalStart=this._physicalStart-reusables.indexes.length}this._update(reusables.indexes,isScrollingDown?null:reusables.indexes);this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),MICRO_TASK)}},_getReusables:function(fromTop){var ith,lastIth,offsetContent,physicalItemHeight,idxs=[],protectedOffsetContent=this._hiddenContentSize*this._ratio,virtualStart=this._virtualStart,virtualEnd=this._virtualEnd,physicalCount=this._physicalCount,top=this._physicalTop+this._scrollOffset,bottom=this._physicalBottom+this._scrollOffset,scrollTop=this._scrollTop,scrollBottom=this._scrollBottom;if(fromTop){ith=this._physicalStart;lastIth=this._physicalEnd;offsetContent=scrollTop-top}else{ith=this._physicalEnd;lastIth=this._physicalStart;offsetContent=bottom-scrollBottom}while(!0){physicalItemHeight=this._getPhysicalSizeIncrement(ith);offsetContent=offsetContent-physicalItemHeight;if(idxs.length>=physicalCount||offsetContent<=protectedOffsetContent){break}if(fromTop){if(virtualEnd+idxs.length+1>=this._virtualCount){break}if(top+physicalItemHeight>=scrollTop-this._scrollOffset){break}idxs.push(ith);top=top+physicalItemHeight;ith=(ith+1)%physicalCount}else{if(0>=virtualStart-idxs.length){break}if(top+this._physicalSize-physicalItemHeight<=scrollBottom){break}idxs.push(ith);top=top-physicalItemHeight;ith=0===ith?physicalCount-1:ith-1}}return{indexes:idxs,physicalTop:top-this._scrollOffset}},_update:function(itemSet,movingUp){if(itemSet&&0===itemSet.length||0===this._physicalCount){return}this._manageFocus();this._assignModels(itemSet);this._updateMetrics(itemSet);if(movingUp){while(movingUp.length){var idx=movingUp.pop();this._physicalTop-=this._getPhysicalSizeIncrement(idx)}}this._positionItems();this._updateScrollerSize()},_isClientFull:function(){return 0!=this._scrollBottom&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded:function(count){var nextPhysicalCount=this._clamp(this._physicalCount+count,DEFAULT_PHYSICAL_COUNT,this._virtualCount-this._virtualStart);nextPhysicalCount=this._convertIndexToCompleteRow(nextPhysicalCount);var delta=nextPhysicalCount-this._physicalCount,nextIncrease=_Mathround(.5*this._physicalCount);if(0>delta){return}if(0<delta){var ts=window.performance.now();[].push.apply(this._physicalItems,this._createPool(delta));for(var i=0;i<delta;i++){this._physicalSizes.push(0)}this._physicalCount=this._physicalCount+delta;if(this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd){this._physicalStart=this._physicalStart+delta}this._update();this._templateCost=(window.performance.now()-ts)/delta;nextIncrease=_Mathround(.5*this._physicalCount)}if(this._virtualEnd>=this._virtualCount-1||0===nextIncrease){}else if(!this._isClientFull()){this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,nextIncrease),MICRO_TASK)}else if(this._physicalSize<this._optPhysicalSize){this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(_Mathround(50/this._templateCost),1,nextIncrease)),IDLE_TIME)}},_render:function(){if(!this.isAttached||!this._isVisible){return}if(0!==this._physicalCount){var reusables=this._getReusables(!0);this._physicalTop=reusables.physicalTop;this._virtualStart=this._virtualStart+reusables.indexes.length;this._physicalStart=this._physicalStart+reusables.indexes.length;this._update(reusables.indexes);this._update();this._increasePoolIfNeeded(0)}else if(0<this._virtualCount){this.updateViewportBoundaries();this._increasePoolIfNeeded(DEFAULT_PHYSICAL_COUNT)}},_itemsChanged:function(change){if("items"===change.path){this._virtualStart=0;this._physicalTop=0;this._virtualCount=this.items?this.items.length:0;this._collection=this.items&&void 0?(void 0).get(this.items):null;this._physicalIndexForKey={};this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null;this._physicalCount=this._physicalCount||0;this._physicalItems=this._physicalItems||[];this._physicalSizes=this._physicalSizes||[];this._physicalStart=0;if(this._scrollTop>this._scrollOffset){this._resetScrollPosition(0)}this._removeFocusedItem();this._debounce("_render",this._render,ANIMATION_FRAME)}},_iterateItems:function(fn,itemSet){var pidx,vidx,rtn,i;if(2===arguments.length&&itemSet){for(i=0;i<itemSet.length;i++){pidx=itemSet[i];vidx=this._computeVidx(pidx);if(null!=(rtn=fn.call(this,pidx,vidx))){return rtn}}}else{pidx=this._physicalStart;vidx=this._virtualStart;for(;pidx<this._physicalCount;pidx++,vidx++){if(null!=(rtn=fn.call(this,pidx,vidx))){return rtn}}for(pidx=0;pidx<this._physicalStart;pidx++,vidx++){if(null!=(rtn=fn.call(this,pidx,vidx))){return rtn}}}},_computeVidx:function(pidx){if(pidx>=this._physicalStart){return this._virtualStart+(pidx-this._physicalStart)}return this._virtualStart+(this._physicalCount-this._physicalStart)+pidx},_updateMetrics:function(itemSet){flush$1?flush$1():flush$1();var newPhysicalSize=0,oldPhysicalSize=0,prevAvgCount=this._physicalAverageCount,prevPhysicalAvg=this._physicalAverage;this._iterateItems(function(pidx,vidx){oldPhysicalSize+=this._physicalSizes[pidx];this._physicalSizes[pidx]=this._physicalItems[pidx].offsetHeight;newPhysicalSize+=this._physicalSizes[pidx];this._physicalAverageCount+=this._physicalSizes[pidx]?1:0},itemSet);if(this.grid){this._updateGridMetrics();this._physicalSize=_Mathceil(this._physicalCount/this._itemsPerRow)*this._rowHeight}else{oldPhysicalSize=1===this._itemsPerRow?oldPhysicalSize:_Mathceil(this._physicalCount/this._itemsPerRow)*this._rowHeight;this._physicalSize=this._physicalSize+newPhysicalSize-oldPhysicalSize;this._itemsPerRow=1}if(this._physicalAverageCount!==prevAvgCount){this._physicalAverage=_Mathround((prevPhysicalAvg*prevAvgCount+newPhysicalSize)/this._physicalAverageCount)}},_positionItems:function(){this._adjustScrollPosition();var y=this._physicalTop;this._iterateItems(function(pidx,vidx){this.translate3d(0,y+"px",0,this._physicalItems[pidx]);y+=this._physicalSizes[pidx]})},_getPhysicalSizeIncrement:function(pidx){if(!this.grid){return this._physicalSizes[pidx]}if(this._computeVidx(pidx)%this._itemsPerRow!==this._itemsPerRow-1){return 0}return this._rowHeight},_adjustScrollPosition:function(){var deltaHeight=0===this._virtualStart?this._physicalTop:_Mathmin(this._scrollPosition+this._physicalTop,0);if(0!==deltaHeight){this._physicalTop=this._physicalTop-deltaHeight;var scrollTop=this._scrollTop;if(!IOS_TOUCH_SCROLLING&&0<scrollTop){this._resetScrollPosition(scrollTop-deltaHeight)}}},_resetScrollPosition:function(pos){if(this.scrollTarget&&0<=pos){this._scrollTop=pos;this._scrollPosition=this._scrollTop}},_updateScrollerSize:function(forceUpdate){if(this.grid){this._estScrollHeight=this._virtualRowCount*this._rowHeight}else{this._estScrollHeight=this._physicalBottom+_Mathmax(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage}forceUpdate=forceUpdate||0===this._scrollHeight;forceUpdate=forceUpdate||this._scrollPosition>=this._estScrollHeight-this._physicalSize;forceUpdate=forceUpdate||this.grid&&this.$.items.style.height<this._estScrollHeight;if(forceUpdate||_Mathabs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight){this.$.items.style.height=this._estScrollHeight+"px";this._scrollHeight=this._estScrollHeight}},scrollToIndex:function(idx){if("number"!==typeof idx||0>idx||idx>this.items.length-1){return}flush$1?flush$1():flush$1();if(0===this._physicalCount){return}idx=this._clamp(idx,0,this._virtualCount-1);if(!this._isIndexRendered(idx)||idx>=this._maxVirtualStart){this._virtualStart=this.grid?idx-2*this._itemsPerRow:idx-1}this._manageFocus();this._assignModels();this._updateMetrics();this._physicalTop=_Mathfloor(this._virtualStart/this._itemsPerRow)*this._physicalAverage;var currentTopItem=this._physicalStart,currentVirtualItem=this._virtualStart,targetOffsetTop=0,hiddenContentSize=this._hiddenContentSize;while(currentVirtualItem<idx&&targetOffsetTop<=hiddenContentSize){targetOffsetTop=targetOffsetTop+this._getPhysicalSizeIncrement(currentTopItem);currentTopItem=(currentTopItem+1)%this._physicalCount;currentVirtualItem++}this._updateScrollerSize(!0);this._positionItems();this._resetScrollPosition(this._physicalTop+this._scrollOffset+targetOffsetTop);this._increasePoolIfNeeded(0);this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null},_resetAverage:function(){this._physicalAverage=0;this._physicalAverageCount=0},_resizeHandler:function(){this._debounce("_render",function(){this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null;var delta=_Mathabs(this._viewportHeight-this._scrollTargetHeight);this.updateViewportBoundaries();if(this._isVisible){this.toggleScrollListener(!0);this._resetAverage();this._render()}else{this.toggleScrollListener(!1)}},ANIMATION_FRAME)},_convertIndexToCompleteRow:function(idx){this._itemsPerRow=this._itemsPerRow||1;return this.grid?_Mathceil(idx/this._itemsPerRow)*this._itemsPerRow:idx},_isIndexRendered:function(idx){return idx>=this._virtualStart&&idx<=this._virtualEnd},_getPhysicalIndex:function(vidx){return(this._physicalStart+(vidx-this._virtualStart))%this._physicalCount},_clamp:function(v,min,max){return _Mathmin(max,_Mathmax(min,v))},_debounce:function(name,cb,asyncModule){this._debouncers=this._debouncers||{};this._debouncers[name]=Debouncer.debounce(this._debouncers[name],asyncModule,cb.bind(this));enqueueDebouncer(this._debouncers[name])}});_exports.PolymerIronList=PolymerIronList;var ironList={PolymerIronList:PolymerIronList};_exports.$ironList=ironList;const A11yMixin=superClass=>class A11yMixin extends superClass{static get observers(){return["_a11yUpdateGridSize(size, _columnTree, _columnTree.*)"]}_a11yGetHeaderRowCount(_columnTree){return _columnTree.filter(level=>level.some(col=>col._headerTemplate||col.headerRenderer||col.path||col.header)).length}_a11yGetFooterRowCount(_columnTree){return _columnTree.filter(level=>level.some(col=>col._headerTemplate||col.headerRenderer)).length}_a11yUpdateGridSize(size,_columnTree){if(size===void 0||_columnTree===void 0){return}const bodyColumns=_columnTree[_columnTree.length-1];this.$.table.setAttribute("aria-rowcount",size+this._a11yGetHeaderRowCount(_columnTree)+this._a11yGetFooterRowCount(_columnTree));this.$.table.setAttribute("aria-colcount",bodyColumns&&bodyColumns.length||0);this._a11yUpdateHeaderRows();this._a11yUpdateFooterRows()}_a11yUpdateHeaderRows(){Array.from(this.$.header.children).forEach((headerRow,index)=>headerRow.setAttribute("aria-rowindex",index+1))}_a11yUpdateFooterRows(){Array.from(this.$.footer.children).forEach((footerRow,index)=>footerRow.setAttribute("aria-rowindex",this._a11yGetHeaderRowCount(this._columnTree)+this.size+index+1))}_a11yUpdateRowRowindex(row,index){row.setAttribute("aria-rowindex",index+this._a11yGetHeaderRowCount(this._columnTree)+1)}_a11yUpdateRowSelected(row,selected){row.setAttribute("aria-selected",!!selected);Array.from(row.children).forEach(cell=>cell.setAttribute("aria-selected",!!selected))}_a11yUpdateRowLevel(row,level){row.setAttribute("aria-level",level+1)}_a11yUpdateRowDetailsOpened(row,detailsOpened){Array.from(row.children).forEach(cell=>{if("boolean"===typeof detailsOpened){cell.setAttribute("aria-expanded",detailsOpened)}else{if(cell.hasAttribute("aria-expanded")){cell.removeAttribute("aria-expanded")}}})}_a11ySetRowDetailsCell(row,detailsCell){Array.from(row.children).forEach(cell=>{if(cell!==detailsCell){cell.setAttribute("aria-controls",detailsCell.id)}})}_a11yUpdateCellColspan(cell,colspan){cell.setAttribute("aria-colspan",+colspan)}_a11yUpdateSorters(){Array.from(this.querySelectorAll("vaadin-grid-sorter")).forEach(sorter=>{let cellContent=sorter.parentNode;while(cellContent&&"vaadin-grid-cell-content"!==cellContent.localName){cellContent=cellContent.parentNode}if(cellContent&&cellContent.assignedSlot){const cell=cellContent.assignedSlot.parentNode;cell.setAttribute("aria-sort",{asc:"ascending",desc:"descending"}[sorter.direction+""]||"none")}})}};_exports.A11yMixin=A11yMixin;var vaadinGridA11yMixin={A11yMixin:A11yMixin};_exports.$vaadinGridA11yMixin=vaadinGridA11yMixin;const ActiveItemMixin=superClass=>class ActiveItemMixin extends superClass{static get properties(){return{activeItem:{type:Object,notify:!0,value:null}}}ready(){super.ready();this.$.scroller.addEventListener("click",this._onClick.bind(this));this.addEventListener("cell-activate",this._activateItem.bind(this))}_activateItem(e){const model=e.detail.model,clickedItem=model?model.item:null;if(clickedItem){this.activeItem=!this._itemsEqual(this.activeItem,clickedItem)?clickedItem:null}}_onClick(e){if(e.defaultPrevented){return}const path=e.composedPath(),cell=path[path.indexOf(this.$.table)-3];if(!cell||-1<cell.getAttribute("part").indexOf("details-cell")){return}const cellContent=cell._content,activeElement=this.getRootNode().activeElement,cellContentHasFocus=cellContent.contains(activeElement)&&(!this._ie||this._isFocusable(activeElement));if(!cellContentHasFocus&&!this._isFocusable(e.target)){this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(cell.parentElement)}}))}}_isFocusable(target){if(!target.parentNode){return!1}const focusables=Array.from(target.parentNode.querySelectorAll("[tabindex], button, input, select, textarea, object, iframe, label, a[href], area[href]")).filter(element=>"cell body-cell"!==element.getAttribute("part")),isFocusableElement=-1!==focusables.indexOf(target);return!target.disabled&&isFocusableElement}};_exports.ActiveItemMixin=ActiveItemMixin;var vaadinGridActiveItemMixin={ActiveItemMixin:ActiveItemMixin};_exports.$vaadinGridActiveItemMixin=vaadinGridActiveItemMixin;const ArrayDataProviderMixin=superClass=>class ArrayDataProviderMixin extends superClass{static get properties(){return{items:Array}}static get observers(){return["_itemsChanged(items, items.*, isAttached)"]}_itemsChanged(items,splices,isAttached){if(!isAttached){return}if(!Array.isArray(items)){if(items===void 0||null===items){this.size=0}if(this.dataProvider===this._arrayDataProvider){this.dataProvider=void 0}return}this.size=items.length;this.dataProvider=this.dataProvider||this._arrayDataProvider;this.clearCache();this._ensureFirstPageLoaded()}_arrayDataProvider(opts,cb){let items=(Array.isArray(this.items)?this.items:[]).slice(0);if(this._filters&&this._checkPaths(this._filters,"filtering",items)){items=this._filter(items)}this.size=items.length;if(opts.sortOrders.length&&this._checkPaths(this._sorters,"sorting",items)){items=items.sort(this._multiSort.bind(this))}const start=opts.page*opts.pageSize,end=start+opts.pageSize,slice=items.slice(start,end);cb(slice,items.length)}_checkPaths(arrayToCheck,action,items){if(!items.length){return!1}let result=!0;for(var i in arrayToCheck){const path=arrayToCheck[i].path;if(!path||-1===path.indexOf(".")){continue}const parentProperty=path.replace(/\.[^\.]*$/,"");if(Base.get(parentProperty,items[0])===void 0){console.warn(`Path "${path}" used for ${action} does not exist in all of the items, ${action} is disabled.`);result=!1}}return result}_multiSort(a,b){return this._sorters.map(sort=>{if("asc"===sort.direction){return this._compare(Base.get(sort.path,a),Base.get(sort.path,b))}else if("desc"===sort.direction){return this._compare(Base.get(sort.path,b),Base.get(sort.path,a))}return 0}).reduce((p,n)=>{return p?p:n},0)}_normalizeEmptyValue(value){if(0<=[void 0,null].indexOf(value)){return""}else if(isNaN(value)){return value.toString()}else{return value}}_compare(a,b){a=this._normalizeEmptyValue(a);b=this._normalizeEmptyValue(b);if(a<b){return-1}if(a>b){return 1}return 0}_filter(items){return items.filter((item,index)=>{return 0===this._filters.filter(filter=>{const value=this._normalizeEmptyValue(Base.get(filter.path,item)),filterValueLowercase=this._normalizeEmptyValue(filter.value).toString().toLowerCase();return-1===value.toString().toLowerCase().indexOf(filterValueLowercase)}).length})}};_exports.ArrayDataProviderMixin=ArrayDataProviderMixin;var vaadinGridArrayDataProviderMixin={ArrayDataProviderMixin:ArrayDataProviderMixin};_exports.$vaadinGridArrayDataProviderMixin=vaadinGridArrayDataProviderMixin;const ColumnReorderingMixin=superClass=>class ColumnReorderingMixin extends GestureEventListeners(superClass){static get properties(){return{columnReorderingAllowed:{type:Boolean,value:!1},_orderBaseScope:{type:Number,value:1e7}}}static get observers(){return["_updateOrders(_columnTree, _columnTree.*)"]}ready(){super.ready();addListener(this,"track",this._onTrackEvent);this._reorderGhost=this.shadowRoot.querySelector("[part=\"reorder-ghost\"]");this.addEventListener("touchstart",this._onTouchStart.bind(this));this.addEventListener("touchmove",this._onTouchMove.bind(this));this.addEventListener("touchend",this._onTouchEnd.bind(this));this.addEventListener("contextmenu",this._onContextMenu.bind(this))}_onContextMenu(e){if(this.hasAttribute("reordering")){e.preventDefault()}}_onTouchStart(e){this._startTouchReorderTimeout=setTimeout(()=>{this._onTrackStart({detail:{x:e.touches[0].clientX,y:e.touches[0].clientY}})},100)}_onTouchMove(e){if(this._draggedColumn){e.preventDefault()}clearTimeout(this._startTouchReorderTimeout)}_onTouchEnd(){clearTimeout(this._startTouchReorderTimeout);this._onTrackEnd()}_onTrackEvent(e){if("start"===e.detail.state){const path=e.composedPath(),headerCell=path[path.indexOf(this.$.header)-2];if(!headerCell||!headerCell._content){return}const activeElement=this.getRootNode().activeElement;if(headerCell._content.contains(this.getRootNode().activeElement)&&(!this._ie||!this._isFocusable(activeElement))){return}if(this.$.scroller.hasAttribute("column-resizing")){return}if(!this._touchDevice){this._onTrackStart(e)}}else if("track"===e.detail.state){this._onTrack(e)}else if("end"===e.detail.state){this._onTrackEnd(e)}}_onTrackStart(e){if(!this.columnReorderingAllowed){return}const path=e.path||dom(e).path;if(path&&path.filter(node=>node.hasAttribute&&node.hasAttribute("draggable"))[0]){return}const headerCell=this._cellFromPoint(e.detail.x,e.detail.y);if(!headerCell||-1===headerCell.getAttribute("part").indexOf("header-cell")){return}this._toggleAttribute("reordering",!0,this);this._draggedColumn=headerCell._column;while(1===this._draggedColumn.parentElement.childElementCount){this._draggedColumn=this._draggedColumn.parentElement}this._setSiblingsReorderStatus(this._draggedColumn,"allowed");this._draggedColumn._reorderStatus="dragging";this._updateGhost(headerCell);this._reorderGhost.style.visibility="visible";this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y);this._autoScroller()}_onTrack(e){if(!this._draggedColumn){return}const targetCell=this._cellFromPoint(e.detail.x,e.detail.y);if(!targetCell){return}const targetColumn=this._getTargetColumn(targetCell,this._draggedColumn);if(this._isSwapAllowed(this._draggedColumn,targetColumn)&&this._isSwappableByPosition(targetColumn,e.detail.x)){this._swapColumnOrders(this._draggedColumn,targetColumn)}this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y);this._lastDragClientX=e.detail.x}_onTrackEnd(){if(!this._draggedColumn){return}this._toggleAttribute("reordering",!1,this);this._draggedColumn._reorderStatus="";this._setSiblingsReorderStatus(this._draggedColumn,"");this._draggedColumn=null;this._lastDragClientX=null;this._reorderGhost.style.visibility="hidden";this.dispatchEvent(new CustomEvent("column-reorder",{detail:{columns:this._getColumnsInOrder()}}))}_getColumnsInOrder(){return this._columnTree.slice(0).pop().filter(c=>!c.hidden).sort((b,a)=>b._order-a._order)}_cellFromPoint(x,y){x=x||0;y=y||0;if(!this._draggedColumn){this._toggleAttribute("no-content-pointer-events",!0,this.$.scroller)}let cell;if(useShadow){cell=this.shadowRoot.elementFromPoint(x,y)}else{cell=document.elementFromPoint(x,y);if("vaadin-grid-cell-content"===cell.localName){cell=cell.assignedSlot.parentNode}}this._toggleAttribute("no-content-pointer-events",!1,this.$.scroller);if(cell&&cell._column){return cell}}_updateGhostPosition(eventClientX,eventClientY){const ghostRect=this._reorderGhost.getBoundingClientRect(),targetLeft=eventClientX-ghostRect.width/2,targetTop=eventClientY-ghostRect.height/2,_left=parseInt(this._reorderGhost._left||0),_top=parseInt(this._reorderGhost._top||0);this._reorderGhost._left=_left-(ghostRect.left-targetLeft);this._reorderGhost._top=_top-(ghostRect.top-targetTop);this._reorderGhost.style.transform=`translate(${this._reorderGhost._left}px, ${this._reorderGhost._top}px)`}_getInnerText(e){if(e.localName){if("none"===getComputedStyle(e).display){return""}else{return Array.from(e.childNodes).map(n=>this._getInnerText(n)).join("")}}else{return e.textContent}}_updateGhost(cell){const ghost=this._reorderGhost;ghost.textContent=this._getInnerText(cell._content);const style=window.getComputedStyle(cell);["boxSizing","display","width","height","background","alignItems","padding","border","flex-direction","overflow"].forEach(propertyName=>ghost.style[propertyName]=style[propertyName]);return ghost}_updateOrders(columnTree,splices){if(columnTree===void 0||splices===void 0){return}columnTree[0].forEach((column,index)=>column._order=(index+1)*this._orderBaseScope)}_setSiblingsReorderStatus(column,status){Array.from(column.parentNode.children).filter(child=>/column/.test(child.localName)&&this._isSwapAllowed(child,column)).forEach(sibling=>sibling._reorderStatus=status)}_autoScroller(){if(this._lastDragClientX){const rightDiff=this._lastDragClientX-this.getBoundingClientRect().right+50,leftDiff=this.getBoundingClientRect().left-this._lastDragClientX+50;if(0<rightDiff){this.$.table.scrollLeft+=rightDiff/10}else if(0<leftDiff){this.$.table.scrollLeft-=leftDiff/10}this._scrollHandler()}if(this._draggedColumn){this.async(this._autoScroller,10)}}_isSwapAllowed(column1,column2){if(column1&&column2){const differentColumns=column1!==column2,sameParent=column1.parentElement===column2.parentElement,sameFrozen=column1.frozen===column2.frozen;return differentColumns&&sameParent&&sameFrozen}}_isSwappableByPosition(targetColumn,clientX){const targetCell=Array.from(this.$.header.querySelectorAll("tr:not([hidden]) [part~=\"cell\"]")).filter(cell=>targetColumn.contains(cell._column))[0],sourceCellRect=this.$.header.querySelector("tr:not([hidden]) [reorder-status=dragging]").getBoundingClientRect(),targetRect=targetCell.getBoundingClientRect();if(targetRect.left>sourceCellRect.left){return clientX>targetRect.right-sourceCellRect.width}else{return clientX<targetRect.left+sourceCellRect.width}}_swapColumnOrders(column1,column2){const _order=column1._order;column1._order=column2._order;column2._order=_order;this._updateLastFrozen();this._updateFirstAndLastColumn()}_getTargetColumn(targetCell,draggedColumn){if(targetCell&&draggedColumn){let candidate=targetCell._column;while(candidate.parentElement!==draggedColumn.parentElement&&candidate!==this){candidate=candidate.parentElement}if(candidate.parentElement===draggedColumn.parentElement){return candidate}else{return targetCell._column}}}};_exports.ColumnReorderingMixin=ColumnReorderingMixin;var vaadinGridColumnReorderingMixin={ColumnReorderingMixin:ColumnReorderingMixin};_exports.$vaadinGridColumnReorderingMixin=vaadinGridColumnReorderingMixin;const ColumnResizingMixin=superClass=>class ColumnResizingMixin extends GestureEventListeners(superClass){ready(){super.ready();const scroller=this.$.scroller;addListener(scroller,"track",this._onHeaderTrack.bind(this));scroller.addEventListener("touchmove",e=>scroller.hasAttribute("column-resizing")&&e.preventDefault());scroller.addEventListener("contextmenu",e=>"resize-handle"==e.target.getAttribute("part")&&e.preventDefault());scroller.addEventListener("mousedown",e=>"resize-handle"===e.target.getAttribute("part")&&e.preventDefault())}_onHeaderTrack(e){const handle=e.target;if("resize-handle"===handle.getAttribute("part")){const cell=handle.parentElement;let column=cell._column;this._toggleAttribute("column-resizing",!0,this.$.scroller);while("vaadin-grid-column-group"===column.localName){column=Array.prototype.slice.call(column._childColumns,0).sort(function(a,b){return a._order-b._order}).filter(function(column){return!column.hidden}).pop()}const columnRowCells=Array.from(this.$.header.querySelectorAll("[part~=\"row\"]:last-child [part~=\"cell\"]"));var targetCell=columnRowCells.filter(cell=>cell._column===column)[0];if(targetCell.offsetWidth){var style=window.getComputedStyle(targetCell),minWidth=10+parseInt(style.paddingLeft)+parseInt(style.paddingRight)+parseInt(style.borderLeftWidth)+parseInt(style.borderRightWidth)+parseInt(style.marginLeft)+parseInt(style.marginRight);column.width=_Mathmax(minWidth,targetCell.offsetWidth+e.detail.x-targetCell.getBoundingClientRect().right)+"px";column.flexGrow=0}columnRowCells.sort(function(a,b){return a._column._order-b._column._order}).forEach(function(cell,index,array){if(index<array.indexOf(targetCell)){cell._column.width=cell.offsetWidth+"px";cell._column.flexGrow=0}});if("end"===e.detail.state){this._toggleAttribute("column-resizing",!1,this.$.scroller)}this._resizeHandler()}}};_exports.ColumnResizingMixin=ColumnResizingMixin;var vaadinGridColumnResizingMixin={ColumnResizingMixin:ColumnResizingMixin};_exports.$vaadinGridColumnResizingMixin=vaadinGridColumnResizingMixin;class GridTemplatizer extends class extends PolymerElement{}{static get is(){return"vaadin-grid-templatizer"}static get properties(){return{dataHost:Object,template:Object,_templateInstances:{type:Array,value:function(){return[]}},_parentPathValues:{value:function(){return{}}},_grid:Object}}static get observers(){return["_templateInstancesChanged(_templateInstances.*, _parentPathValues.*)"]}constructor(){super();this._instanceProps={detailsOpened:!0,index:!0,item:!0,selected:!0,expanded:!0,level:!0}}createInstance(){this._ensureTemplatized();const instance=new this._TemplateClass({});this.addInstance(instance);return instance}addInstance(instance){if(-1===this._templateInstances.indexOf(instance)){this._templateInstances.push(instance);requestAnimationFrame(()=>this.notifyPath("_templateInstances.*",this._templateInstances))}}removeInstance(instance){const index=this._templateInstances.indexOf(instance);this.splice("_templateInstances",index,1)}_ensureTemplatized(){if(!this._TemplateClass){this._TemplateClass=templatize(this.template,this,{instanceProps:this._instanceProps,parentModel:!0,forwardHostProp:function(prop,value){this._forwardParentProp(prop,value);if(this._templateInstances){this._templateInstances.forEach(inst=>inst.notifyPath(prop,value))}},notifyInstanceProp:function(inst,prop,value){if("index"===prop||"item"===prop){return}const originalProp=`__${prop}__`;if(inst[originalProp]===value){return}inst[originalProp]=value;const row=Array.from(this._grid.$.items.children).filter(row=>this._grid._itemsEqual(row._item,inst.item))[0];if(row){Array.from(row.children).forEach(cell=>{if(cell._instance){cell._instance[originalProp]=value;cell._instance.notifyPath(prop,value)}})}const itemPrefix="item.";if(Array.isArray(this._grid.items)&&0===prop.indexOf(itemPrefix)){const itemsIndex=this._grid.items.indexOf(inst.item),path=prop.slice(itemPrefix.length);this._grid.notifyPath(`items.${itemsIndex}.${path}`,value)}const gridCallback=`_${prop}InstanceChangedCallback`;if(this._grid&&this._grid[gridCallback]){this._grid[gridCallback](inst,value)}}})}}_forwardParentProp(prop,value){this._parentPathValues[prop]=value;this._templateInstances.forEach(inst=>inst.notifyPath(prop,value))}_templateInstancesChanged(t,p){let index,count;if("_templateInstances"===t.path){index=0;count=this._templateInstances.length}else if("_templateInstances.splices"===t.path){index=t.value.index;count=t.value.addedCount}else{return}Object.keys(this._parentPathValues||{}).forEach(keyName=>{for(var i=index;i<index+count;i++){this._templateInstances[i].set(keyName,this._parentPathValues[keyName])}})}}_exports.Templatizer$1=GridTemplatizer;customElements.define(GridTemplatizer.is,GridTemplatizer);var vaadinGridTemplatizer={Templatizer:GridTemplatizer};_exports.$vaadinGridTemplatizer=vaadinGridTemplatizer;const ColumnBaseMixin=superClass=>class ColumnBaseMixin extends superClass{static get properties(){return{resizable:{type:Boolean,value:function(){if("vaadin-grid-column-group"===this.localName){return}const parent=this.parentNode;if(parent&&"vaadin-grid-column-group"===parent.localName){return parent.resizable||!1}else{return!1}}},_headerTemplate:{type:Object},_footerTemplate:{type:Object},frozen:{type:Boolean,value:!1},hidden:{type:Boolean},header:{type:String},textAlign:{type:String},_lastFrozen:{type:Boolean,value:!1},_order:Number,_reorderStatus:Boolean,_emptyCells:Array,_headerCell:Object,_footerCell:Object,_grid:Object,headerRenderer:Function,footerRenderer:Function}}static get observers(){return["_widthChanged(width, _headerCell, _footerCell, _cells.*)","_frozenChanged(frozen, _headerCell, _footerCell, _cells.*)","_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells.*)","_pathOrHeaderChanged(path, header, _headerCell, _footerCell, _cells.*, renderer, headerRenderer, _bodyTemplate, _headerTemplate)","_textAlignChanged(textAlign, _cells.*, _headerCell, _footerCell)","_orderChanged(_order, _headerCell, _footerCell, _cells.*)","_lastFrozenChanged(_lastFrozen)","_setBodyTemplateOrRenderer(_bodyTemplate, renderer, _cells, _cells.*)","_setHeaderTemplateOrRenderer(_headerTemplate, headerRenderer, _headerCell)","_setFooterTemplateOrRenderer(_footerTemplate, footerRenderer, _footerCell)","_resizableChanged(resizable, _headerCell)","_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells.*)","_hiddenChanged(hidden, _headerCell, _footerCell, _cells.*)"]}connectedCallback(){super.connectedCallback();this._bodyTemplate&&(this._bodyTemplate.templatizer._grid=this._grid);this._headerTemplate&&(this._headerTemplate.templatizer._grid=this._grid);this._footerTemplate&&(this._footerTemplate.templatizer._grid=this._grid);this._templateObserver.flush();if(!this._bodyTemplate){this._templateObserver.callback()}requestAnimationFrame(()=>{this._allCells.forEach(cell=>{if(!cell._content.parentNode){this._grid&&this._grid.appendChild(cell._content)}})})}disconnectedCallback(){super.disconnectedCallback();requestAnimationFrame(()=>{if(!this._findHostGrid()){this._allCells.forEach(cell=>{if(cell._content.parentNode){cell._content.parentNode.removeChild(cell._content)}})}});this._gridValue=void 0}_findHostGrid(){let el=this;while(el&&!/^vaadin.*grid(-pro)?$/.test(el.localName)){el=el.assignedSlot?el.assignedSlot.parentNode:el.parentNode}return el||void 0}get _grid(){if(!this._gridValue){this._gridValue=this._findHostGrid()}return this._gridValue}get _allCells(){return[].concat(this._cells||[]).concat(this._emptyCells||[]).concat(this._headerCell).concat(this._footerCell).filter(cell=>cell)}constructor(){super();this._templateObserver=new FlattenedNodesObserver(this,info=>{this._headerTemplate=this._prepareHeaderTemplate();this._footerTemplate=this._prepareFooterTemplate();this._bodyTemplate=this._prepareBodyTemplate()})}_prepareHeaderTemplate(){return this._prepareTemplatizer(this._findTemplate(!0)||null,{})}_prepareFooterTemplate(){return this._prepareTemplatizer(this._findTemplate(!1,!0)||null,{})}_prepareBodyTemplate(){return this._prepareTemplatizer(this._findTemplate()||null)}_prepareTemplatizer(template,instanceProps){if(template&&!template.templatizer){const templatizer=new GridTemplatizer;templatizer._grid=this._grid;templatizer.dataHost=this.dataHost;templatizer._instanceProps=instanceProps||templatizer._instanceProps;templatizer.template=template;template.templatizer=templatizer}return template}_renderHeaderAndFooter(){if(this.headerRenderer){this.__runRenderer(this.headerRenderer,this._headerCell)}if(this.footerRenderer){this.__runRenderer(this.footerRenderer,this._footerCell)}}__runRenderer(renderer,cell,rowData){const args=[cell._content,this];if(rowData&&rowData.item){args.push(rowData)}renderer.apply(this,args)}__setColumnTemplateOrRenderer(template,renderer,cells){if(template&&renderer){throw new Error("You should only use either a renderer or a template")}cells.forEach(cell=>{const model=this._grid.__getRowModel(cell.parentElement);if(renderer){cell._renderer=renderer;if(model.item||renderer===this.headerRenderer||renderer===this.footerRenderer){this.__runRenderer(renderer,cell,model)}}else if(cell._template!==template){cell._template=template;cell._content.innerHTML="";template.templatizer._grid=template.templatizer._grid||this._grid;const inst=template.templatizer.createInstance();cell._content.appendChild(inst.root);cell._instance=inst;if(model.item){cell._instance.setProperties(model)}}})}_setBodyTemplateOrRenderer(template,renderer,cells,splices){if((template||renderer)&&cells){this.__setColumnTemplateOrRenderer(template,renderer,cells)}}_setHeaderTemplateOrRenderer(headerTemplate,headerRenderer,headerCell){if((headerTemplate||headerRenderer)&&headerCell){this.__setColumnTemplateOrRenderer(headerTemplate,headerRenderer,[headerCell])}}_setFooterTemplateOrRenderer(footerTemplate,footerRenderer,footerCell){if((footerTemplate||footerRenderer)&&footerCell){this.__setColumnTemplateOrRenderer(footerTemplate,footerRenderer,[footerCell]);this._grid.__updateHeaderFooterRowVisibility(footerCell.parentElement)}}_selectFirstTemplate(header=!1,footer=!1){return FlattenedNodesObserver.getFlattenedNodes(this).filter(node=>"template"===node.localName&&node.classList.contains("header")===header&&node.classList.contains("footer")===footer)[0]}_findTemplate(header,footer){const template=this._selectFirstTemplate(header,footer);if(template){if(this.dataHost){template._rootDataHost=this.dataHost._rootDataHost||this.dataHost}}return template}_flexGrowChanged(flexGrow,headerCell,footerCell,cells){if(this.parentElement&&this.parentElement._columnPropChanged){this.parentElement._columnPropChanged("flexGrow")}this._allCells.forEach(cell=>cell.style.flexGrow=flexGrow)}_orderChanged(order,headerCell,footerCell,cells){this._allCells.forEach(cell=>cell.style.order=order)}_widthChanged(width,headerCell,footerCell,cells){if(this.parentElement&&this.parentElement._columnPropChanged){this.parentElement._columnPropChanged("width")}this._allCells.forEach(cell=>cell.style.width=width);if(this._grid&&this._grid.__forceReflow){this._grid.__forceReflow()}}_frozenChanged(frozen,headerCell,footerCell,cells){if(this.parentElement&&this.parentElement._columnPropChanged){this.parentElement._columnPropChanged("frozen",frozen)}this._allCells.forEach(cell=>this._toggleAttribute("frozen",frozen,cell));this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_lastFrozenChanged(lastFrozen){this._allCells.forEach(cell=>this._toggleAttribute("last-frozen",lastFrozen,cell));if(this.parentElement&&this.parentElement._columnPropChanged){this.parentElement._lastFrozen=lastFrozen}}_pathOrHeaderChanged(path,header,headerCell,footerCell,cells,renderer,headerRenderer,bodyTemplate,headerTemplate){const hasHeaderText=header!==void 0;if(!headerRenderer&&!headerTemplate&&hasHeaderText&&headerCell){this.__setTextContent(headerCell._content,header)}if(path&&cells.value){if(!renderer&&!bodyTemplate){const pathRenderer=(root,owner,{item})=>this.__setTextContent(root,this.get(path,item));this.__setColumnTemplateOrRenderer(void 0,pathRenderer,cells.value)}if(!headerRenderer&&!headerTemplate&&!hasHeaderText&&headerCell&&null!==header){this.__setTextContent(headerCell._content,this._generateHeader(path))}}if(headerCell){this._grid.__updateHeaderFooterRowVisibility(headerCell.parentElement)}}__setTextContent(node,textContent){node.textContent!==textContent&&(node.textContent=textContent)}_generateHeader(path){return path.substr(path.lastIndexOf(".")+1).replace(/([A-Z])/g,"-$1").toLowerCase().replace(/-/g," ").replace(/^./,match=>match.toUpperCase())}_toggleAttribute(name,bool,node){if(node.hasAttribute(name)===!bool){if(bool){node.setAttribute(name,"")}else{node.removeAttribute(name)}}}_reorderStatusChanged(reorderStatus,headerCell,footerCell,cells){this._allCells.forEach(cell=>cell.setAttribute("reorder-status",reorderStatus))}_resizableChanged(resizable,headerCell){if(resizable===void 0||headerCell===void 0){return}if(headerCell){[headerCell].concat(this._emptyCells).forEach(cell=>{if(cell){const existingHandle=cell.querySelector("[part~=\"resize-handle\"]");if(existingHandle){cell.removeChild(existingHandle)}if(resizable){const handle=document.createElement("div");handle.setAttribute("part","resize-handle");cell.appendChild(handle)}}})}}_textAlignChanged(textAlign,_cells,_headerCell,_footerCell){if(textAlign===void 0){return}if(-1===["start","end","center"].indexOf(textAlign)){console.warn("textAlign can only be set as \"start\", \"end\" or \"center\"");return}let textAlignFallback;if("ltr"===getComputedStyle(this._grid).direction){if("start"===textAlign){textAlignFallback="left"}else if("end"===textAlign){textAlignFallback="right"}}else{if("start"===textAlign){textAlignFallback="right"}else if("end"===textAlign){textAlignFallback="left"}}this._allCells.forEach(cell=>{cell._content.style.textAlign=textAlign;if(getComputedStyle(cell._content).textAlign!==textAlign){cell._content.style.textAlign=textAlignFallback}})}_hiddenChanged(hidden,headerCell,footerCell,cells){if(this.parentElement&&this.parentElement._columnPropChanged){this.parentElement._columnPropChanged("hidden",hidden)}this._allCells.forEach(cell=>this._toggleAttribute("hidden",hidden,cell));if(!!hidden!==!!this._previousHidden&&this._grid){this._grid._updateLastFrozen&&this._grid._updateLastFrozen();this._grid.notifyResize&&this._grid.notifyResize();this._grid._resetKeyboardNavigation&&this._grid._resetKeyboardNavigation()}this._previousHidden=hidden}};_exports.ColumnBaseMixin=ColumnBaseMixin;class GridColumnElement extends ColumnBaseMixin(PolymerElement){static get is(){return"vaadin-grid-column"}static get properties(){return{width:{type:String,value:"100px"},flexGrow:{type:Number,value:1},renderer:Function,path:{type:String},autoWidth:{type:Boolean,value:!1},_bodyTemplate:{type:Object},_cells:Array}}}_exports.GridColumnElement=GridColumnElement;customElements.define(GridColumnElement.is,GridColumnElement);var vaadinGridColumn={ColumnBaseMixin:ColumnBaseMixin,GridColumnElement:GridColumnElement};_exports.$vaadinGridColumn=vaadinGridColumn;const ItemCache=class ItemCache{constructor(grid,parentCache,parentItem){this.grid=grid;this.parentCache=parentCache;this.parentItem=parentItem;this.itemCaches={};this.items={};this.effectiveSize=0;this.size=0;this.pendingRequests={}}isLoading(){return Object.keys(this.pendingRequests).length||Object.keys(this.itemCaches).filter(index=>{return this.itemCaches[index].isLoading()})[0]}getItemForIndex(index){const{cache,scaledIndex}=this.getCacheAndIndex(index);return cache.items[scaledIndex]}updateSize(){this.effectiveSize=!this.parentItem||this.grid._isExpanded(this.parentItem)?this.size+Object.keys(this.itemCaches).reduce((prev,curr)=>{const subCache=this.itemCaches[curr];subCache.updateSize();return prev+subCache.effectiveSize},0):0}ensureSubCacheForScaledIndex(scaledIndex){if(!this.itemCaches[scaledIndex]){const subCache=new ItemCache(this.grid,this,this.items[scaledIndex]);this.itemCaches[scaledIndex]=subCache;this.grid._loadPage(0,subCache)}}getCacheAndIndex(index){let thisLevelIndex=index;const keys=Object.keys(this.itemCaches);for(var i=0;i<keys.length;i++){const expandedIndex=+keys[i],subCache=this.itemCaches[expandedIndex];if(thisLevelIndex<=expandedIndex){return{cache:this,scaledIndex:thisLevelIndex}}else if(thisLevelIndex<=expandedIndex+subCache.effectiveSize){return subCache.getCacheAndIndex(thisLevelIndex-expandedIndex-1)}thisLevelIndex-=subCache.effectiveSize}return{cache:this,scaledIndex:thisLevelIndex}}};_exports.ItemCache=ItemCache;const DataProviderMixin=superClass=>class DataProviderMixin extends superClass{static get properties(){return{pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},dataProvider:{type:Object,notify:!0,observer:"_dataProviderChanged"},loading:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0},_cache:{type:Object,value:function(){const cache=new ItemCache(this);return cache}},itemIdPath:{type:String,value:null},expandedItems:{type:Object,notify:!0,value:()=>[]}}}static get observers(){return["_sizeChanged(size)","_expandedItemsChanged(expandedItems.*)"]}_sizeChanged(size){const delta=size-this._cache.size;this._cache.size+=delta;this._cache.effectiveSize+=delta;this._effectiveSize=this._cache.effectiveSize}_updateRowItem(item,el){el.children.forEach(cell=>{cell._instance&&(cell._instance.item=item)})}_getItem(index,el){if(index>=this._effectiveSize){return}el.index=index;const{cache,scaledIndex}=this._cache.getCacheAndIndex(index),item=cache.items[scaledIndex];if(item){this._toggleAttribute("loading",!1,el);this._updateItem(el,item);if(this._isExpanded(item)){cache.ensureSubCacheForScaledIndex(scaledIndex)}}else{this._toggleAttribute("loading",!0,el);this._loadPage(this._getPageForIndex(scaledIndex),cache)}}_pagesForPhysicalItems(){const firstVisiblePage=this._getPageForIndex(this._firstVisibleIndex+this._vidxOffset);return[firstVisiblePage].concat(this._physicalItems.filter(row=>row.index).items(row=>this._getPageForIndex(row.index))).reduce((prev,curr)=>{if(-1===prev.indexOf(curr)){prev.push(curr)}return prev},[])}_expandedInstanceChangedCallback(inst,value){if(inst.item===void 0){return}if(value){this.expandItem(inst.item)}else{this.collapseItem(inst.item)}}getItemId(item){return this.itemIdPath?this.get(this.itemIdPath,item):item}_isExpanded(item){return this.expandedItems&&-1<this._getItemIndexInArray(item,this.expandedItems)}_expandedItemsChanged(e){this._cache.updateSize();this._effectiveSize=this._cache.effectiveSize;this._assignModels()}expandItem(item){if(!this._isExpanded(item)){this.push("expandedItems",item)}}collapseItem(item){if(this._isExpanded(item)){this.splice("expandedItems",this._getItemIndexInArray(item,this.expandedItems),1)}}_getIndexLevel(index){let{cache}=this._cache.getCacheAndIndex(index),level=0;while(cache.parentCache){cache=cache.parentCache;level++}return level}_canPopulate(){return this._hasData&&this._columnTree}_loadPage(page,cache){if(!cache.pendingRequests[page]&&this.dataProvider){this._setLoading(!0);cache.pendingRequests[page]=!0;const params={page,pageSize:this.pageSize,sortOrders:this._mapSorters(),filters:this._mapFilters(),parentItem:cache.parentItem};this.dataProvider(params,(items,size)=>{if(size!==void 0){cache.size=size}else{if(params.parentItem){cache.size=items.length}}items.forEach((item,itemsIndex)=>{const itemIndex=page*this.pageSize+itemsIndex;cache.items[itemIndex]=item;if(this._isExpanded(item)){cache.ensureSubCacheForScaledIndex(itemIndex)}});this._hasData=!0;delete cache.pendingRequests[page];if(!this._cache.isLoading()){this._setLoading(!1);this._cache.updateSize();this._effectiveSize=this._cache.effectiveSize;Array.from(this.$.items.children).filter(row=>!row.hidden).forEach(row=>{const cachedItem=this._cache.getItemForIndex(row.index);if(cachedItem){this._toggleAttribute("loading",!1,row);this._updateItem(row,cachedItem)}});this._increasePoolIfNeeded(0)}this.__setInitialColumnWidths()})}}_getPageForIndex(index){return _Mathfloor(index/this.pageSize)}clearCache(){this._cache=new ItemCache(this);Array.from(this.$.items.children).forEach(row=>{Array.from(row.children).forEach(cell=>{cell._instance&&cell._instance._setPendingProperty("item",{},!1)})});this._cache.size=this.size||0;this._cache.updateSize();this._hasData=!1;this._assignModels();if(!this._effectiveSize){this._loadPage(0,this._cache)}}_flushItemsDebouncer(){if(this._debouncerLoad){this._debouncerLoad.flush()}}_pageSizeChanged(pageSize,oldPageSize){if(oldPageSize!==void 0&&pageSize!==oldPageSize){this.clearCache()}}_checkSize(){if(this.size===void 0&&0===this._effectiveSize){console.warn("The <vaadin-grid> needs the total number of items"+" in order to display rows. Set the total number of items"+" to the `size` property, or provide the total number of items"+" in the second argument of the `dataProvider`\u2019s `callback` call.")}}_dataProviderChanged(dataProvider,oldDataProvider){if(oldDataProvider!==void 0){this.clearCache()}if(dataProvider&&this.items&&this.items.length){this._scrollToIndex(this._firstVisibleIndex)}this._ensureFirstPageLoaded();this._debouncerCheckSize=Debouncer.debounce(this._debouncerCheckSize,timeOut.after(2e3),this._checkSize.bind(this));this._scrollHandler()}_ensureFirstPageLoaded(){if(!this._hasData){this._loadPage(0,this._cache,()=>{const hadData=this._hasData;this._hasData=!0;if(!hadData){this.notifyResize()}})}}_itemsEqual(item1,item2){return this.getItemId(item1)===this.getItemId(item2)}_getItemIndexInArray(item,array){let result=-1;array.forEach((i,idx)=>{if(this._itemsEqual(i,item)){result=idx}});return result}};_exports.DataProviderMixin=DataProviderMixin;var vaadinGridDataProviderMixin={ItemCache:ItemCache,DataProviderMixin:DataProviderMixin};_exports.$vaadinGridDataProviderMixin=vaadinGridDataProviderMixin;const DropMode={BETWEEN:"between",ON_TOP:"on-top",ON_TOP_OR_BETWEEN:"on-top-or-between",ON_GRID:"on-grid"},DropLocation={ON_TOP:"on-top",ABOVE:"above",BELOW:"below",EMPTY:"empty"},DragAndDropMixin=superClass=>class DragAndDropMixin extends superClass{static get properties(){return{dropMode:String,rowsDraggable:Boolean,dragFilter:Function,dropFilter:Function,__dndAutoScrollThreshold:{value:50}}}static get observers(){return["_dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter)"]}ready(){super.ready();this.$.table.addEventListener("dragstart",this._onDragStart.bind(this));this.$.table.addEventListener("dragend",this._onDragEnd.bind(this));this.$.table.addEventListener("dragover",this._onDragOver.bind(this));this.$.table.addEventListener("dragleave",this._onDragLeave.bind(this));this.$.table.addEventListener("drop",this._onDrop.bind(this));this.$.table.addEventListener("dragenter",e=>{if(this.dropMode){e.preventDefault();e.stopPropagation()}})}_onDragStart(e){if(this.rowsDraggable){let row=e.target;if("vaadin-grid-cell-content"===row.localName){row=row.assignedSlot.parentNode.parentNode}if(row.parentNode!==this.$.items){return}e.stopPropagation();this._toggleAttribute("dragging-rows",!0,this);if(this._safari){const transform=row.style.transform;row.style.top=/translateY\((.*)\)/.exec(transform)[1];row.style.transform="none";requestAnimationFrame(()=>{row.style.top="";row.style.transform=transform})}const rowRect=row.getBoundingClientRect();if(!window.ShadyDOM){if(this._ios){e.dataTransfer.setDragImage(row)}else{e.dataTransfer.setDragImage(row,e.clientX-rowRect.left,e.clientY-rowRect.top)}}let rows=[row];if(this._isSelected(row._item)){rows=this.__getViewportRows().filter(row=>this._isSelected(row._item)).filter(row=>!this.dragFilter||this.dragFilter(this.__getRowModel(row)))}e.dataTransfer.setData("text",this.__formatDefaultTransferData(rows));row.setAttribute("dragstart",1<rows.length?rows.length:"");this.updateStyles({"--_grid-drag-start-x":`${e.clientX-rowRect.left+20}px`,"--_grid-drag-start-y":`${e.clientY-rowRect.top+10}px`});requestAnimationFrame(()=>{row.removeAttribute("dragstart");this.updateStyles({"--_grid-drag-start-x":"","--_grid-drag-start-y":""})});const event=new CustomEvent("grid-dragstart",{detail:{draggedItems:rows.map(row=>row._item),setDragData:(type,data)=>e.dataTransfer.setData(type,data),setDraggedItemsCount:count=>row.setAttribute("dragstart",count)}});event.originalEvent=e;this.dispatchEvent(event)}}_onDragEnd(e){this._toggleAttribute("dragging-rows",!1,this);e.stopPropagation();const event=new CustomEvent("grid-dragend");event.originalEvent=e;this.dispatchEvent(event)}_onDragLeave(e){e.stopPropagation();this._clearDragStyles()}_onDragOver(e){if(this.dropMode){this._dropLocation=void 0;this._dragOverItem=void 0;if(this.__dndAutoScroll(e.clientY)){this._clearDragStyles();return}let row=e.composedPath().filter(node=>"tr"===node.localName)[0];if(!this._effectiveSize||this.dropMode===DropMode.ON_GRID){this._dropLocation=DropLocation.EMPTY}else if(!row||row.parentNode!==this.$.items){this._dropLocation=DropLocation.EMPTY;if(this.dropMode===DropMode.BETWEEN||this.dropMode===DropMode.ON_TOP_OR_BETWEEN){row=Array.from(this.$.items.children).filter(row=>!row.hidden).pop();this._dropLocation=DropLocation.BELOW}}else{const rowRect=row.getBoundingClientRect();this._dropLocation=DropLocation.ON_TOP;if(this.dropMode===DropMode.BETWEEN){const dropAbove=e.clientY-rowRect.top<rowRect.bottom-e.clientY;this._dropLocation=dropAbove?DropLocation.ABOVE:DropLocation.BELOW}else if(this.dropMode===DropMode.ON_TOP_OR_BETWEEN){if(e.clientY-rowRect.top<rowRect.height/3){this._dropLocation=DropLocation.ABOVE}else if(e.clientY-rowRect.top>2*(rowRect.height/3)){this._dropLocation=DropLocation.BELOW}}}if(row&&row.hasAttribute("drop-disabled")){this._dropLocation=void 0;return}e.stopPropagation();e.preventDefault();if(this._dropLocation===DropLocation.EMPTY){if(this.dropMode===DropMode.ON_GRID){this._toggleAttribute("dragover",!0,this)}}else if(row){this._dragOverItem=row._item;if(row.getAttribute("dragover")!==this._dropLocation){row.setAttribute("dragover",this._dropLocation)}}else{this._clearDragStyles()}}}__dndAutoScroll(clientY){if(this.__dndAutoScrolling){return!0}const headerBottom=this.$.header.getBoundingClientRect().bottom,footerTop=this.$.footer.getBoundingClientRect().top,topDiff=headerBottom-clientY+this.__dndAutoScrollThreshold,bottomDiff=clientY-footerTop+this.__dndAutoScrollThreshold;let scrollTopDelta=0;if(0<bottomDiff){scrollTopDelta=2*bottomDiff}else if(0<topDiff){scrollTopDelta=2*-topDiff}if(scrollTopDelta){const scrollTop=this.$.table.scrollTop;this.$.table.scrollTop+=scrollTopDelta;const scrollTopChanged=scrollTop!==this.$.table.scrollTop;if(scrollTopChanged){this.__dndAutoScrolling=!0;setTimeout(()=>this.__dndAutoScrolling=!1,20);this._scrollHandler();return!0}}}__getViewportRows(){const headerBottom=this.$.header.getBoundingClientRect().bottom,footerTop=this.$.footer.getBoundingClientRect().top;return Array.from(this.$.items.children).filter(row=>{const rowRect=row.getBoundingClientRect();return rowRect.bottom>headerBottom&&rowRect.top<footerTop})}_clearDragStyles(){this.removeAttribute("dragover");Array.from(this.$.items.children).forEach(row=>row.removeAttribute("dragover"))}_onDrop(e){if(this.dropMode){e.stopPropagation();e.preventDefault();const dragData=e.dataTransfer.types&&Array.from(e.dataTransfer.types).map(type=>{return{type,data:e.dataTransfer.getData(type)}});this._clearDragStyles();const event=new CustomEvent("grid-drop",{bubbles:e.bubbles,cancelable:e.cancelable,detail:{dropTargetItem:this._dragOverItem,dropLocation:this._dropLocation,dragData}});event.originalEvent=e;this.dispatchEvent(event)}}__formatDefaultTransferData(rows){return rows.map(row=>{return Array.from(row.children).filter(cell=>!cell.hidden&&-1===cell.getAttribute("part").indexOf("details-cell")).sort((a,b)=>{return a._column._order>b._column._order?1:-1}).map(cell=>cell._content.textContent.trim()).filter(content=>content).join("\t")}).join("\n")}_dragDropAccessChanged(rowsDraggable,dropMode,dragFilter,dropFilter){this.filterDragAndDrop()}filterDragAndDrop(){Array.from(this.$.items.children).filter(row=>!row.hidden).forEach(row=>{this._filterDragAndDrop(row,this.__getRowModel(row))})}_filterDragAndDrop(row,rowData){const dragDisabled=!this.rowsDraggable||this.dragFilter&&!this.dragFilter(rowData),dropDisabled=!this.dropMode||this.dropFilter&&!this.dropFilter(rowData),draggableElements=window.ShadyDOM?[row]:Array.from(row.children).map(cell=>cell._content);draggableElements.forEach(e=>{if(dragDisabled){e.removeAttribute("draggable")}else{e.setAttribute("draggable",!0)}});this._toggleAttribute("drag-disabled",dragDisabled,row);this._toggleAttribute("drop-disabled",dropDisabled,row)}};_exports.DragAndDropMixin=DragAndDropMixin;var vaadinGridDragAndDropMixin={DragAndDropMixin:DragAndDropMixin};_exports.$vaadinGridDragAndDropMixin=vaadinGridDragAndDropMixin;const DynamicColumnsMixin=superClass=>class DynamicColumnsMixin extends superClass{ready(){super.ready();this._addNodeObserver()}_hasColumnGroups(columns){for(let i=0;i<columns.length;i++){if("vaadin-grid-column-group"===columns[i].localName){return!0}}return!1}_getChildColumns(el){return FlattenedNodesObserver.getFlattenedNodes(el).filter(this._isColumnElement)}_flattenColumnGroups(columns){return columns.map(col=>{if("vaadin-grid-column-group"===col.localName){return this._getChildColumns(col)}else{return[col]}}).reduce((prev,curr)=>{return prev.concat(curr)},[])}_getColumnTree(){for(var rootColumns=FlattenedNodesObserver.getFlattenedNodes(this).filter(this._isColumnElement),_columnTree=[],c=rootColumns;;){_columnTree.push(c);if(!this._hasColumnGroups(c)){break}c=this._flattenColumnGroups(c)}return _columnTree}_updateColumnTree(){var columnTree=this._getColumnTree();if(!this._arrayEquals(columnTree,this._columnTree)){this._columnTree=columnTree}}_addNodeObserver(){this._observer=new FlattenedNodesObserver(this,info=>{const rowDetailsTemplate=info.addedNodes.filter(n=>"template"===n.localName&&n.classList.contains("row-details"))[0];if(rowDetailsTemplate&&this._rowDetailsTemplate!==rowDetailsTemplate){this._rowDetailsTemplate=rowDetailsTemplate}if(0<info.addedNodes.filter(this._isColumnElement).length||0<info.removedNodes.filter(this._isColumnElement).length){this._updateColumnTree()}this._debouncerCheckImports=Debouncer.debounce(this._debouncerCheckImports,timeOut.after(2e3),this._checkImports.bind(this));this._ensureFirstPageLoaded()})}_arrayEquals(arr1,arr2){if(!arr1||!arr2||arr1.length!=arr2.length){return!1}for(var i=0,l=arr1.length;i<l;i++){if(arr1[i]instanceof Array&&arr2[i]instanceof Array){if(!this._arrayEquals(arr1[i],arr2[i])){return!1}}else if(arr1[i]!=arr2[i]){return!1}}return!0}_checkImports(){["vaadin-grid-column-group","vaadin-grid-filter","vaadin-grid-filter-column","vaadin-grid-tree-toggle","vaadin-grid-selection-column","vaadin-grid-sort-column","vaadin-grid-sorter"].forEach(elementName=>{var element=this.querySelector(elementName);if(element&&!(element instanceof PolymerElement)){console.warn(`Make sure you have imported the required module for <${elementName}> element.`)}})}_updateFirstAndLastColumn(){Array.from(this.shadowRoot.querySelectorAll("tr")).forEach(row=>this._updateFirstAndLastColumnForRow(row))}_updateFirstAndLastColumnForRow(row){Array.from(row.querySelectorAll("[part~=\"cell\"]:not([part~=\"details-cell\"])")).sort((a,b)=>{return a._column._order-b._column._order}).forEach((cell,cellIndex,children)=>{this._toggleAttribute("first-column",0===cellIndex,cell);this._toggleAttribute("last-column",cellIndex===children.length-1,cell)})}_isColumnElement(node){return node.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/.test(node.localName)}};_exports.DynamicColumnsMixin=DynamicColumnsMixin;var vaadinGridDynamicColumnsMixin={DynamicColumnsMixin:DynamicColumnsMixin};_exports.$vaadinGridDynamicColumnsMixin=vaadinGridDynamicColumnsMixin;const EventContextMixin=superClass=>class EventContextMixin extends superClass{getEventContext(event){const context={},path=event.composedPath(),cell=path[path.indexOf(this.$.table)-3];if(!cell){return context}context.section=["body","header","footer","details"].filter(section=>-1<cell.getAttribute("part").indexOf(section))[0];if(cell._column){context.column=cell._column}if("body"===context.section||"details"===context.section){Object.assign(context,this.__getRowModel(cell.parentElement))}return context}};_exports.EventContextMixin=EventContextMixin;var vaadinGridEventContextMixin={EventContextMixin:EventContextMixin};_exports.$vaadinGridEventContextMixin=vaadinGridEventContextMixin;const FilterMixin=superClass=>class FilterMixin extends superClass{static get properties(){return{_filters:{type:Array,value:function(){return[]}}}}ready(){super.ready();this.addEventListener("filter-changed",this._filterChanged.bind(this))}_filterChanged(e){if(-1===this._filters.indexOf(e.target)){this._filters.push(e.target)}e.stopPropagation();if(this.dataProvider){this.clearCache()}}_mapFilters(){return this._filters.map(filter=>{return{path:filter.path,value:filter.value}})}};_exports.FilterMixin=FilterMixin;var vaadinGridFilterMixin={FilterMixin:FilterMixin};_exports.$vaadinGridFilterMixin=vaadinGridFilterMixin;const KeyboardNavigationMixin=superClass=>class KeyboardNavigationMixin extends superClass{static get properties(){return{_headerFocusable:{type:Object,observer:"_focusableChanged"},_itemsFocusable:{type:Object,observer:"_focusableChanged"},_footerFocusable:{type:Object,observer:"_focusableChanged"},_navigatingIsHidden:Boolean,_focusedItemIndex:{type:Number,value:0},_focusedColumnOrder:Number}}ready(){super.ready();if(this._ios||this._android){return}this.addEventListener("keydown",this._onKeyDown);this.addEventListener("focusin",this._onFocusIn);this.addEventListener("focusout",this._onFocusOut);this.$.table.addEventListener("focusin",this._onCellFocusIn.bind(this));this.$.table.addEventListener("focusout",this._onCellFocusOut.bind(this));this.addEventListener("mousedown",()=>{this._toggleAttribute("navigating",!1,this);this._isMousedown=!0});this.addEventListener("mouseup",()=>this._isMousedown=!1)}_focusableChanged(focusable,oldFocusable){if(oldFocusable){oldFocusable.setAttribute("tabindex","-1")}if(focusable){focusable.setAttribute("tabindex","0")}}_onKeyDown(e){let key=e.key;if("Up"===key||"Down"===key||"Left"===key||"Right"===key){key="Arrow"+key}if("Esc"===key){key="Escape"}if("Spacebar"===key){key=" "}let keyGroup;switch(key){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"PageUp":case"PageDown":case"Home":case"End":keyGroup="Navigation";break;case"Enter":case"Escape":case"F2":keyGroup="Interaction";break;case"Tab":keyGroup="Tab";break;case" ":keyGroup="Space";break;}this._detectInteracting(e);if(this.hasAttribute("interacting")&&"Interaction"!==keyGroup){keyGroup=void 0}if(keyGroup){this[`_on${keyGroup}KeyDown`](e,key)}}_ensureScrolledToIndex(index){const targetRowInDom=Array.from(this.$.items.children).filter(child=>child.index===index)[0];if(!targetRowInDom){this._scrollToIndex(index)}}_onNavigationKeyDown(e,key){e.preventDefault();function indexOfChildElement(el){return Array.prototype.indexOf.call(el.parentNode.children,el)}const visibleItemsCount=this._lastVisibleIndex-this._firstVisibleIndex-1;let dx=0,dy=0;switch(key){case"ArrowRight":dx=1;break;case"ArrowLeft":dx=-1;break;case"Home":dx=-Infinity;e.ctrlKey&&(dy=-Infinity);break;case"End":dx=1/0;e.ctrlKey&&(dy=1/0);break;case"ArrowDown":dy=1;break;case"ArrowUp":dy=-1;break;case"PageDown":dy=visibleItemsCount;break;case"PageUp":dy=-visibleItemsCount;break;}const activeCell=e.composedPath()[0],columnIndex=indexOfChildElement(activeCell),isRowDetails=this._elementMatches(activeCell,"[part~=\"details-cell\"]"),activeRow=activeCell.parentNode,activeRowGroup=activeRow.parentNode,maxRowIndex=(activeRowGroup===this.$.items?this._effectiveSize:activeRowGroup.children.length)-1,rowIndex=activeRowGroup===this.$.items?this._focusedItemIndex!==void 0?this._focusedItemIndex:activeRow.index:indexOfChildElement(activeRow);let dstRowIndex=_Mathmax(0,_Mathmin(rowIndex+dy,maxRowIndex)),dstIsRowDetails=!1;if(activeRowGroup===this.$.items){const item=activeRow._item,dstItem=this._cache.getItemForIndex(dstRowIndex);if(isRowDetails){dstIsRowDetails=0===dy}else{dstIsRowDetails=1===dy&&this._isDetailsOpened(item)||-1===dy&&dstRowIndex!==rowIndex&&this._isDetailsOpened(dstItem)}if(dstIsRowDetails!==isRowDetails&&(1===dy&&dstIsRowDetails||-1===dy&&!dstIsRowDetails)){dstRowIndex=rowIndex}}if(activeRowGroup!==this.$.items){if(dstRowIndex>rowIndex){while(dstRowIndex<maxRowIndex&&activeRowGroup.children[dstRowIndex].hidden){dstRowIndex++}}else if(dstRowIndex<rowIndex){while(0<dstRowIndex&&activeRowGroup.children[dstRowIndex].hidden){dstRowIndex--}}}if(this._focusedColumnOrder===void 0){if(isRowDetails){this._focusedColumnOrder=0}else{this._focusedColumnOrder=this._getColumns(activeRowGroup,rowIndex)[columnIndex]._order}}const dstColumns=this._getColumns(activeRowGroup,dstRowIndex),dstSortedColumnOrders=dstColumns.filter(c=>!c.hidden).map(c=>c._order).sort((b,a)=>b-a),maxOrderedColumnIndex=dstSortedColumnOrders.length-1,orderedColumnIndex=dstSortedColumnOrders.indexOf(dstSortedColumnOrders.slice(0).sort((b,a)=>_Mathabs(b-this._focusedColumnOrder)-_Mathabs(a-this._focusedColumnOrder))[0]),dstOrderedColumnIndex=0===dy&&isRowDetails?orderedColumnIndex:_Mathmax(0,_Mathmin(orderedColumnIndex+dx,maxOrderedColumnIndex));if(dstOrderedColumnIndex!==orderedColumnIndex){this._focusedColumnOrder=void 0}if(activeRowGroup===this.$.items){this._ensureScrolledToIndex(dstRowIndex)}this._toggleAttribute("navigating",!0,this);const columnIndexByOrder=dstColumns.reduce((acc,col,i)=>(acc[col._order]=i,acc),{}),dstColumnIndex=columnIndexByOrder[dstSortedColumnOrders[dstOrderedColumnIndex]],dstRow=activeRowGroup===this.$.items?Array.from(activeRowGroup.children).filter(el=>el.index===dstRowIndex)[0]:activeRowGroup.children[dstRowIndex];if(!dstRow){return}const dstCell=dstIsRowDetails?Array.from(dstRow.children).filter(el=>this._elementMatches(el,"[part~=\"details-cell\"]"))[0]:dstRow.children[dstColumnIndex];this._scrollHorizontallyToCell(dstCell);if(activeRowGroup===this.$.items){this._focusedItemIndex=dstRowIndex}if(activeRowGroup===this.$.items){const dstRect=dstCell.getBoundingClientRect(),footerTop=this.$.footer.getBoundingClientRect().top,headerBottom=this.$.header.getBoundingClientRect().bottom;if(dstRect.bottom>footerTop){this.$.table.scrollTop+=dstRect.bottom-footerTop;this._scrollHandler()}else if(dstRect.top<headerBottom){this.$.table.scrollTop-=headerBottom-dstRect.top;this._scrollHandler()}}dstCell.focus()}_parseEventPath(path){const tableIndex=path.indexOf(this.$.table);return{rowGroup:path[tableIndex-1],row:path[tableIndex-2],cell:path[tableIndex-3]}}_onInteractionKeyDown(e,key){const localTarget=e.composedPath()[0],localTargetIsTextInput="input"===localTarget.localName&&!/^(button|checkbox|color|file|image|radio|range|reset|submit)$/i.test(localTarget.type);let wantInteracting;switch(key){case"Enter":wantInteracting=this.hasAttribute("interacting")?!localTargetIsTextInput:!0;break;case"Escape":wantInteracting=!1;break;case"F2":wantInteracting=!this.hasAttribute("interacting");break;}const{cell}=this._parseEventPath(e.composedPath());if(this.hasAttribute("interacting")!==wantInteracting){if(wantInteracting){const focusTarget=cell._content.querySelector("[focus-target]")||cell._content.firstElementChild;if(focusTarget){e.preventDefault();focusTarget.focus();this._toggleAttribute("interacting",!0,this);this._toggleAttribute("navigating",!1,this)}}else{e.preventDefault();this._focusedColumnOrder=void 0;cell.focus();this._toggleAttribute("interacting",!1,this);this._toggleAttribute("navigating",!0,this)}}}_predictFocusStepTarget(srcElement,step){const tabOrder=[this.$.table,this._headerFocusable,this._itemsFocusable,this._footerFocusable,this.$.focusexit];let index=tabOrder.indexOf(srcElement);index+=step;while(0<=index&&index<=tabOrder.length-1&&(!tabOrder[index]||tabOrder[index].parentNode.hidden)){index+=step}return tabOrder[index]}_onTabKeyDown(e){const focusTarget=this._predictFocusStepTarget(e.composedPath()[0],e.shiftKey?-1:1);if(focusTarget===this.$.table){this.$.table.focus()}else if(focusTarget===this.$.focusexit){this.$.focusexit.focus()}else if(focusTarget===this._itemsFocusable){let itemsFocusTarget=focusTarget;const targetRow=this._itemsFocusable.parentNode;this._ensureScrolledToIndex(this._focusedItemIndex);if(targetRow.index!==this._focusedItemIndex){const columnIndex=Array.from(targetRow.children).indexOf(this._itemsFocusable),focusedItemRow=Array.from(this.$.items.children).filter(row=>row.index===this._focusedItemIndex)[0];if(focusedItemRow){itemsFocusTarget=focusedItemRow.children[columnIndex]}}e.preventDefault();itemsFocusTarget.focus()}else{e.preventDefault();focusTarget.focus()}this._toggleAttribute("navigating",!0,this)}_onSpaceKeyDown(e){e.preventDefault();const cell=e.composedPath()[0];if(cell._content&&cell._content.firstElementChild){const wasNavigating=this.hasAttribute("navigating");cell._content.firstElementChild.click();this._toggleAttribute("navigating",wasNavigating,this)}else{this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(cell.parentElement)}}))}}_onFocusIn(e){if(!this._isMousedown){this._toggleAttribute("navigating",!0,this)}const rootTarget=e.composedPath()[0];if(rootTarget===this.$.table||rootTarget===this.$.focusexit){this._predictFocusStepTarget(rootTarget,rootTarget===this.$.table?1:-1).focus();this._toggleAttribute("interacting",!1,this)}else{this._detectInteracting(e)}}_onFocusOut(e){this._toggleAttribute("navigating",!1,this);this._detectInteracting(e)}_onCellFocusIn(e){this._detectInteracting(e);if(3===e.composedPath().indexOf(this.$.table)){const cell=e.composedPath()[0];this._activeRowGroup=cell.parentNode.parentNode;if(this._activeRowGroup===this.$.header){this._headerFocusable=cell}else if(this._activeRowGroup===this.$.items){this._itemsFocusable=cell}else if(this._activeRowGroup===this.$.footer){this._footerFocusable=cell}cell._content.dispatchEvent(new CustomEvent("cell-focusin",{bubbles:!1}))}this._detectFocusedItemIndex(e)}_onCellFocusOut(e){if(3===e.composedPath().indexOf(this.$.table)){const cell=e.composedPath()[0];cell._content.dispatchEvent(new CustomEvent("cell-focusout",{bubbles:!1}))}}_detectInteracting(e){this._toggleAttribute("interacting",e.composedPath().some(el=>"vaadin-grid-cell-content"===el.localName),this)}_detectFocusedItemIndex(e){const{rowGroup,row}=this._parseEventPath(e.composedPath());if(rowGroup===this.$.items){this._focusedItemIndex=row.index}}_preventScrollerRotatingCellFocus(item,index){if(item.index===this._focusedItemIndex&&this.hasAttribute("navigating")&&this._activeRowGroup===this.$.items){this._navigatingIsHidden=!0;this._toggleAttribute("navigating",!1,this)}if(index===this._focusedItemIndex&&this._navigatingIsHidden){this._navigatingIsHidden=!1;this._toggleAttribute("navigating",!0,this)}}_getColumns(rowGroup,rowIndex){let columnTreeLevel=this._columnTree.length-1;if(rowGroup===this.$.header){columnTreeLevel=rowIndex}else if(rowGroup===this.$.footer){columnTreeLevel=this._columnTree.length-1-rowIndex}return this._columnTree[columnTreeLevel]}_resetKeyboardNavigation(){if(this.$.header.firstElementChild){this._headerFocusable=Array.from(this.$.header.firstElementChild.children).filter(el=>!el.hidden)[0]}if(this.$.items.firstElementChild){const firstVisibleIndexRow=this._iterateItems((pidx,vidx)=>{if(this._firstVisibleIndex===vidx){return this.$.items.children[pidx]}});if(firstVisibleIndexRow){this._itemsFocusable=Array.from(firstVisibleIndexRow.children).filter(el=>!el.hidden)[0]}}if(this.$.footer.firstElementChild){this._footerFocusable=Array.from(this.$.footer.firstElementChild.children).filter(el=>!el.hidden)[0]}}_scrollHorizontallyToCell(dstCell){if(dstCell.hasAttribute("frozen")||this._elementMatches(dstCell,"[part~=\"details-cell\"]")){return}const dstCellRect=dstCell.getBoundingClientRect(),dstRow=dstCell.parentNode,dstCellIndex=Array.from(dstRow.children).indexOf(dstCell),tableRect=this.$.table.getBoundingClientRect();let leftBoundary=tableRect.left,rightBoundary=tableRect.right;for(let i=dstCellIndex-1;0<=i;i--){const cell=dstRow.children[i];if(cell.hasAttribute("hidden")||this._elementMatches(cell,"[part~=\"details-cell\"]")){continue}if(cell.hasAttribute("frozen")){leftBoundary=cell.getBoundingClientRect().right;break}}for(let i=dstCellIndex+1;i<dstRow.children.length;i++){const cell=dstRow.children[i];if(cell.hasAttribute("hidden")||this._elementMatches(cell,"[part~=\"details-cell\"]")){continue}if(cell.hasAttribute("frozen")){rightBoundary=cell.getBoundingClientRect().left;break}}if(dstCellRect.left<leftBoundary){this.$.table.scrollLeft+=_Mathround(dstCellRect.left-leftBoundary)}if(dstCellRect.right>rightBoundary){this.$.table.scrollLeft+=_Mathround(dstCellRect.right-rightBoundary)}}_elementMatches(el,query){return el.matches?el.matches(query):-1!==Array.from(el.parentNode.querySelectorAll(query)).indexOf(el)}};_exports.KeyboardNavigationMixin=KeyboardNavigationMixin;var vaadinGridKeyboardNavigationMixin={KeyboardNavigationMixin:KeyboardNavigationMixin};_exports.$vaadinGridKeyboardNavigationMixin=vaadinGridKeyboardNavigationMixin;class GridOuterScrollerElement extends class extends PolymerElement{}{static get template(){return html`
    <style>
      :host {
        display: block;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        box-sizing: border-box;
        overflow: auto;
      }

      :host([passthrough]) {
        pointer-events: none;
      }
    </style>

    <slot></slot>
`}static get is(){return"vaadin-grid-outer-scroller"}static get properties(){return{scrollTarget:{type:Object},scrollHandler:{type:Object},passthrough:{type:Boolean,reflectToAttribute:!0,value:!0},outerScrolling:Boolean,noScrollbars:Boolean,_touchDevice:Boolean}}ready(){super.ready();this.addEventListener("scroll",()=>this._syncScrollTarget());this.parentElement.addEventListener("mousemove",this._onMouseMove.bind(this));this.style.webkitOverflowScrolling="touch";this.addEventListener("mousedown",_=>this.outerScrolling=!0);this.addEventListener("mouseup",_=>{this.outerScrolling=!1;this.scrollHandler._scrollHandler()})}_onMouseMove(e){if(!this._touchDevice){if(this.noScrollbars&&this.parentElement.hasAttribute("scroll-period")){this.passthrough=e.offsetY<=this.clientHeight-20&&e.offsetX<=this.clientWidth-20}else{this.passthrough=e.offsetY<=this.clientHeight&&e.offsetX<=this.clientWidth}}}syncOuterScroller(){this.scrollTop=this.scrollTarget.scrollTop;this.scrollLeft=this.scrollTarget.scrollLeft}_syncScrollTarget(){requestAnimationFrame(()=>{this.scrollTarget.scrollTop=this.scrollTop;this.scrollTarget.scrollLeft=this.scrollLeft;this.scrollHandler._scrollHandler()})}}customElements.define(GridOuterScrollerElement.is,GridOuterScrollerElement);const RowDetailsMixin=superClass=>class RowDetailsMixin extends superClass{static get properties(){return{detailsOpenedItems:{type:Array,value:function(){return[]}},_rowDetailsTemplate:Object,rowDetailsRenderer:Function,_detailsCells:{type:Array}}}static get observers(){return["_detailsOpenedItemsChanged(detailsOpenedItems.*, _rowDetailsTemplate, rowDetailsRenderer)","_rowDetailsTemplateOrRendererChanged(_rowDetailsTemplate, rowDetailsRenderer)"]}_rowDetailsTemplateOrRendererChanged(rowDetailsTemplate,rowDetailsRenderer){if(rowDetailsTemplate&&rowDetailsRenderer){throw new Error("You should only use either a renderer or a template for row details")}if(rowDetailsTemplate||rowDetailsRenderer){if(rowDetailsTemplate&&!rowDetailsTemplate.templatizer){var templatizer=new GridTemplatizer;templatizer._grid=this;templatizer.dataHost=this.dataHost;templatizer.template=rowDetailsTemplate;rowDetailsTemplate.templatizer=templatizer}if(this._columnTree){Array.from(this.$.items.children).forEach(row=>{if(!row.querySelector("[part~=details-cell]")){this._updateRow(row,this._columnTree[this._columnTree.length-1]);this._a11yUpdateRowDetailsOpened(row,!1)}delete row.querySelector("[part~=details-cell]")._instance})}if(this.detailsOpenedItems.length){Array.from(this.$.items.children).forEach(this._toggleDetailsCell,this);this._update()}}}_detailsOpenedItemsChanged(changeRecord,rowDetailsTemplate,rowDetailsRenderer){if("detailsOpenedItems.length"===changeRecord.path||!changeRecord.value){return}Array.from(this.$.items.children).forEach(row=>{this._toggleDetailsCell(row,row._item);this._a11yUpdateRowDetailsOpened(row,this._isDetailsOpened(row._item))})}_configureDetailsCell(cell){cell.setAttribute("part","cell details-cell");this._toggleAttribute("frozen",!0,cell)}_toggleDetailsCell(row,item){const cell=row.querySelector("[part~=\"details-cell\"]");if(!cell){return}const detailsHidden=!this._isDetailsOpened(item),hiddenChanged=!!cell.hidden!==detailsHidden;if(!cell._instance&&!cell._renderer||cell.hidden!==detailsHidden){cell.hidden=detailsHidden;if(detailsHidden){row.style.removeProperty("padding-bottom")}else{if(this.rowDetailsRenderer){cell._renderer=this.rowDetailsRenderer;cell._renderer.call(this,cell._content,this,{index:row.index,item:item})}else if(this._rowDetailsTemplate&&!cell._instance){cell._instance=this._rowDetailsTemplate.templatizer.createInstance();cell._content.innerHTML="";cell._content.appendChild(cell._instance.root);this._updateItem(row,item)}flush$1();row.style.setProperty("padding-bottom",`${cell.offsetHeight}px`);requestAnimationFrame(()=>this.notifyResize())}}if(hiddenChanged){this._updateMetrics();this._positionItems()}}_updateDetailsCellHeights(){Array.from(this.$.items.querySelectorAll("[part~=\"details-cell\"]:not([hidden])")).forEach(cell=>{cell.parentElement.style.setProperty("padding-bottom",`${cell.offsetHeight}px`)})}_isDetailsOpened(item){return this.detailsOpenedItems&&-1!==this._getItemIndexInArray(item,this.detailsOpenedItems)}openItemDetails(item){if(!this._isDetailsOpened(item)){this.push("detailsOpenedItems",item)}}closeItemDetails(item){if(this._isDetailsOpened(item)){this.splice("detailsOpenedItems",this._getItemIndexInArray(item,this.detailsOpenedItems),1)}}_detailsOpenedInstanceChangedCallback(instance,value){if(super._detailsOpenedInstanceChangedCallback){super._detailsOpenedInstanceChangedCallback(instance,value)}if(value){this.openItemDetails(instance.item)}else{this.closeItemDetails(instance.item)}}};_exports.RowDetailsMixin=RowDetailsMixin;var vaadinGridRowDetailsMixin={RowDetailsMixin:RowDetailsMixin};_exports.$vaadinGridRowDetailsMixin=vaadinGridRowDetailsMixin;const ScrollMixin=superClass=>class ScrollMixin extends superClass{get _timeouts(){return{SCROLL_PERIOD:1e3,WHEEL_SCROLLING:200,SCROLLING:100,IGNORE_WHEEL:500}}static get properties(){return{_frozenCells:{type:Array,value:function(){return[]}},_scrollbarWidth:{type:Number,value:function(){var scrollDiv=document.createElement("div");scrollDiv.style.width="100px";scrollDiv.style.height="100px";scrollDiv.style.overflow="scroll";scrollDiv.style.position="absolute";scrollDiv.style.top="-9999px";document.body.appendChild(scrollDiv);var scrollbarWidth=scrollDiv.offsetWidth-scrollDiv.clientWidth;document.body.removeChild(scrollDiv);return scrollbarWidth}},_rowWithFocusedElement:Element,_deltaYAcc:{type:Number,value:0}}}static get observers(){return["_scrollHeightUpdated(_estScrollHeight)"]}ready(){super.ready();this.scrollTarget=this.$.table;this.addEventListener("wheel",e=>{this._wheelScrolling=!0;this._debouncerWheelScrolling=Debouncer.debounce(this._debouncerWheelScrolling,timeOut.after(this._timeouts.WHEEL_SCROLLING),()=>this._wheelScrolling=!1);this._onWheel(e)});this.$.table.addEventListener("scroll",e=>{if(this.$.outerscroller.outerScrolling){e.stopImmediatePropagation()}},!0);this.$.items.addEventListener("focusin",e=>{const itemsIndex=e.composedPath().indexOf(this.$.items);this._rowWithFocusedElement=e.composedPath()[itemsIndex-1]});this.$.items.addEventListener("focusout",()=>this._rowWithFocusedElement=void 0)}_onWheel(e){if(e.ctrlKey||this._hasScrolledAncestor(e.target,e.deltaX,e.deltaY)){return}var table=this.$.table,deltaY=e.deltaY;if(1===e.deltaMode){deltaY*=this._physicalAverage}if(this._wheelAnimationFrame){this._deltaYAcc+=deltaY;e.preventDefault();return}deltaY+=this._deltaYAcc;this._deltaYAcc=0;this._wheelAnimationFrame=!0;this._debouncerWheelAnimationFrame=Debouncer.debounce(this._debouncerWheelAnimationFrame,animationFrame,()=>this._wheelAnimationFrame=!1);var momentum=_Mathabs(e.deltaX)+_Mathabs(deltaY);if(this._canScroll(table,e.deltaX,deltaY)){e.preventDefault();table.scrollTop+=deltaY;table.scrollLeft+=e.deltaX;this._scrollHandler();this._hasResidualMomentum=!0;this._ignoreNewWheel=!0;this._debouncerIgnoreNewWheel=Debouncer.debounce(this._debouncerIgnoreNewWheel,timeOut.after(this._timeouts.IGNORE_WHEEL),()=>this._ignoreNewWheel=!1)}else if(this._hasResidualMomentum&&momentum<=this._previousMomentum||this._ignoreNewWheel){e.preventDefault()}else if(momentum>this._previousMomentum){this._hasResidualMomentum=!1}this._previousMomentum=momentum}_hasScrolledAncestor(el,deltaX,deltaY){if("vaadin-grid-cell-content"===el.localName){return!1}else if(this._canScroll(el,deltaX,deltaY)&&-1!==["auto","scroll"].indexOf(getComputedStyle(el).overflow)){return!0}else if(el!==this&&el.parentElement){return this._hasScrolledAncestor(el.parentElement,deltaX,deltaY)}}_canScroll(el,deltaX,deltaY){return 0<deltaY&&el.scrollTop<el.scrollHeight-el.offsetHeight||0>deltaY&&0<el.scrollTop||0<deltaX&&el.scrollLeft<el.scrollWidth-el.offsetWidth||0>deltaX&&0<el.scrollLeft}_scheduleScrolling(){if(!this._scrollingFrame){this._scrollingFrame=requestAnimationFrame(()=>this._toggleAttribute("scrolling",!0,this.$.scroller))}this._debounceScrolling=Debouncer.debounce(this._debounceScrolling,timeOut.after(this._timeouts.SCROLLING),()=>{cancelAnimationFrame(this._scrollingFrame);delete this._scrollingFrame;this._toggleAttribute("scrolling",!1,this.$.scroller);if(!this.$.outerscroller.outerScrolling){this._reorderRows()}});if(!this._scrollPeriodFrame){this._scrollPeriodFrame=requestAnimationFrame(()=>this._toggleAttribute("scroll-period",!0,this.$.scroller))}this._debounceScrollPeriod=Debouncer.debounce(this._debounceScrollPeriod,timeOut.after(this._timeouts.SCROLL_PERIOD),()=>{cancelAnimationFrame(this._scrollPeriodFrame);delete this._scrollPeriodFrame;this._toggleAttribute("scroll-period",!1,this.$.scroller)})}_afterScroll(){this._translateStationaryElements();if(!this.hasAttribute("reordering")){this._scheduleScrolling()}const os=this.$.outerscroller;if(!this._ios&&(this._wheelScrolling||os.passthrough)){os.syncOuterScroller()}if(this._ios){const overScroll=_Mathmax(-os.scrollTop,0)||_Mathmin(0,os.scrollHeight-os.scrollTop-os.offsetHeight);this.$.items.style.transform=`translateY(${overScroll}px)`}this._updateOverflow()}_updateOverflow(){let overflow="";const table=this.$.table;if(table.scrollTop<table.scrollHeight-table.clientHeight){overflow+=" bottom"}if(0<table.scrollTop){overflow+=" top"}if(table.scrollLeft<table.scrollWidth-table.clientWidth){overflow+=" right"}if(0<table.scrollLeft){overflow+=" left"}this._debounceOverflow=Debouncer.debounce(this._debounceOverflow,animationFrame,()=>{const value=overflow.trim();if(0<value.length&&this.getAttribute("overflow")!==value){this.setAttribute("overflow",value)}else if(0==value.length&&this.hasAttribute("overflow")){this.removeAttribute("overflow")}})}_reorderRows(){const body=this.$.items,items=body.querySelectorAll("tr");if(!items.length){return}const adjustedVirtualStart=this._virtualStart+this._vidxOffset,targetRow=this._rowWithFocusedElement||Array.from(items).filter(row=>!row.hidden)[0];if(!targetRow){return}const targetPhysicalIndex=targetRow.index-adjustedVirtualStart,delta=Array.from(items).indexOf(targetRow)-targetPhysicalIndex;if(0<delta){for(let i=0;i<delta;i++){body.appendChild(items[i])}}else if(0>delta){for(let i=items.length+delta;i<items.length;i++){body.insertBefore(items[i],items[0])}}}_frozenCellsChanged(){this._debouncerCacheElements=Debouncer.debounce(this._debouncerCacheElements,microTask,()=>{Array.from(this.root.querySelectorAll("[part~=\"cell\"]")).forEach(function(cell){cell.style.transform=""});this._frozenCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen]"));this._translateStationaryElements()});this._updateLastFrozen()}_updateLastFrozen(){if(!this._columnTree){return}const columnsRow=this._columnTree[this._columnTree.length-1].slice(0);columnsRow.sort((a,b)=>{return a._order-b._order});const lastFrozen=columnsRow.reduce((prev,col,index)=>{col._lastFrozen=!1;return col.frozen&&!col.hidden?index:prev},void 0);if(lastFrozen!==void 0){columnsRow[lastFrozen]._lastFrozen=!0}}_translateStationaryElements(){if(this._edge&&!this._scrollbarWidth){this.$.items.style.transform=this._getTranslate(-this._scrollLeft||0,-this._scrollTop||0);this.$.footer.style.transform=this.$.header.style.transform=this._getTranslate(-this._scrollLeft||0,0)}else{this.$.footer.style.transform=this.$.header.style.transform=this._getTranslate(0,this._scrollTop)}for(var frozenCellTransform=this._getTranslate(this._scrollLeft,0),i=0;i<this._frozenCells.length;i++){this._frozenCells[i].style.transform=frozenCellTransform}}_getTranslate(x,y){return"translate("+x+"px,"+y+"px)"}_scrollHeightUpdated(_estScrollHeight){this.$.outersizer.style.top=this.$.fixedsizer.style.top=_estScrollHeight+"px"}};_exports.ScrollMixin=ScrollMixin;var vaadinGridScrollMixin={ScrollMixin:ScrollMixin};_exports.$vaadinGridScrollMixin=vaadinGridScrollMixin;class GridScrollerElement extends PolymerIronList{static get is(){return"vaadin-grid-scroller"}static get properties(){return{size:{type:Number,notify:!0},_vidxOffset:{value:0}}}static get observers(){return["_effectiveSizeChanged(_effectiveSize)"]}connectedCallback(){super.connectedCallback();this._scrollHandler()}_updateScrollerItem(item,index){}_afterScroll(){}_getRowTarget(){}_createScrollerRows(){}_canPopulate(){}scrollToIndex(index){this._warnPrivateAPIAccess("scrollToIndex");if(0<index){this._pendingScrollToIndex=null}if(!parseInt(this.$.items.style.borderTopWidth)&&0<index){this._pendingScrollToIndex=index}this._scrollingToIndex=!0;index=_Mathmin(_Mathmax(index,0),this._effectiveSize-1);this.$.table.scrollTop=index/this._effectiveSize*(this.$.table.scrollHeight-this.$.table.offsetHeight);this._scrollHandler();if(this._accessIronListAPI(()=>this._maxScrollTop)&&this._virtualCount<this._effectiveSize){this._adjustVirtualIndexOffset(1e6)}this._accessIronListAPI(()=>super.scrollToIndex(index-this._vidxOffset));this._scrollHandler();const row=Array.from(this.$.items.children).filter(child=>child.index===index)[0];if(row){const headerOffset=row.getBoundingClientRect().top-this.$.header.getBoundingClientRect().bottom;if(1<_Mathabs(headerOffset)){this.$.table.scrollTop+=headerOffset;this._scrollHandler()}}this._scrollingToIndex=!1}_effectiveSizeChanged(size){let fvi,fviOffset=0;this._iterateItems((pidx,vidx)=>{if(vidx===this._firstVisibleIndex){const row=this._physicalItems[pidx];fvi=row.index;fviOffset=row.getBoundingClientRect().top}});if(this.items&&size<this.items.length){this._scrollTop=0}if(!Array.isArray(this.items)){const maxVirtualItems=this._edge||this._ie?3e4:1e5;this.items={length:_Mathmin(size,maxVirtualItems)}}this._accessIronListAPI(()=>super._itemsChanged({path:"items"}));this._virtualCount=_Mathmin(this.items.length,size)||0;if(0===this._scrollTop){this._accessIronListAPI(()=>this._scrollToIndex(_Mathmin(size-1,fvi)));this._iterateItems((pidx,vidx)=>{const row=this._physicalItems[pidx];if(row.index===fvi){this.$.table.scrollTop+=_Mathround(row.getBoundingClientRect().top-fviOffset)}if(row.index===this._focusedItemIndex&&this._itemsFocusable&&this.$.items.contains(this.shadowRoot.activeElement)){const cellIndex=Array.from(this._itemsFocusable.parentElement.children).indexOf(this._itemsFocusable);row.children[cellIndex].focus()}})}this._assignModels();requestAnimationFrame(()=>this._update())}_positionItems(){this._adjustScrollPosition();let rePosition;if(isNaN(this._physicalTop)){rePosition=!0;this._physicalTop=0}let y=this._physicalTop;this._iterateItems((pidx,vidx)=>{this._physicalItems[pidx].style.transform=`translateY(${y}px)`;y+=this._physicalSizes[pidx]});if(rePosition){this._scrollToIndex(0)}}_increasePoolIfNeeded(count){if(0===count&&this._scrollingToIndex||!this._canPopulate()||!this._effectiveSize){return}if(!this._initialPoolCreated){this._initialPoolCreated=!0;super._increasePoolIfNeeded(25)}else if(this._optPhysicalSize!==1/0){this._debounceIncreasePool=Debouncer.debounce(this._debounceIncreasePool,animationFrame,()=>{this._updateMetrics();const remainingPhysicalSize=this._optPhysicalSize-this._physicalSize;let estimatedMissingRowCount=_Mathceil(remainingPhysicalSize/this._physicalAverage);if(this._physicalCount+estimatedMissingRowCount>this._effectiveSize){estimatedMissingRowCount=_Mathmax(0,this._effectiveSize-this._physicalCount)}if(this._physicalSize&&0<estimatedMissingRowCount){super._increasePoolIfNeeded(estimatedMissingRowCount);this.__reorderChildNodes()}})}}__reorderChildNodes(){const childNodes=Array.from(this.$.items.childNodes),rowsInOrder=!!childNodes.reduce((inOrder,current,currentIndex,array)=>{if(0===currentIndex||array[currentIndex-1].index===current.index-1){return inOrder}},!0);if(!rowsInOrder){childNodes.sort((row1,row2)=>{return row1.index-row2.index}).forEach(row=>this.$.items.appendChild(row))}}_createPool(size){const fragment=document.createDocumentFragment(),physicalItems=this._createScrollerRows(size);physicalItems.forEach(inst=>fragment.appendChild(inst));this._getRowTarget().appendChild(fragment);const content=this.querySelector("[slot]");if(content){const slot=content.getAttribute("slot");content.setAttribute("slot","foo-bar");content.setAttribute("slot",slot)}this._updateHeaderFooterMetrics();afterNextRender(this,()=>this.notifyResize());return physicalItems}_assignModels(itemSet){this._iterateItems((pidx,vidx)=>{const el=this._physicalItems[pidx];this._toggleAttribute("hidden",vidx>=this._effectiveSize,el);this._updateScrollerItem(el,vidx+(this._vidxOffset||0))},itemSet)}_scrollHandler(){const delta=this.$.table.scrollTop-this._scrollPosition;this._accessIronListAPI(super._scrollHandler);const oldOffset=this._vidxOffset;if(this._accessIronListAPI(()=>this._maxScrollTop)&&this._virtualCount<this._effectiveSize){this._adjustVirtualIndexOffset(delta)}if(this._vidxOffset!==oldOffset){this._update()}this._afterScroll()}_adjustVirtualIndexOffset(delta){if(1e4<_Mathabs(delta)){if(this._noScale){this._noScale=!1;return}const scale=this.$.table.scrollTop/(this.$.table.scrollHeight-this.$.table.offsetHeight),offset=scale*this._effectiveSize;this._vidxOffset=_Mathround(offset-scale*this._virtualCount)}else{const oldOffset=this._vidxOffset||0,threshold=1e3,maxShift=100;if(0===this._scrollTop){this._vidxOffset=0;if(oldOffset!==this._vidxOffset){super.scrollToIndex(0)}}else if(this.firstVisibleIndex<threshold&&0<this._vidxOffset){this._vidxOffset-=_Mathmin(this._vidxOffset,maxShift);if(oldOffset!==this._vidxOffset){super.scrollToIndex(this.firstVisibleIndex+(oldOffset-this._vidxOffset))}this._noScale=!0}const maxOffset=this._effectiveSize-this._virtualCount;if(this._scrollTop>=this._maxScrollTop&&0<this._maxScrollTop){this._vidxOffset=maxOffset;if(oldOffset!==this._vidxOffset){super.scrollToIndex(this._virtualCount)}}else if(this.firstVisibleIndex>this._virtualCount-threshold&&this._vidxOffset<maxOffset){this._vidxOffset+=_Mathmin(maxOffset-this._vidxOffset,maxShift);if(oldOffset!==this._vidxOffset){super.scrollToIndex(this.firstVisibleIndex-(this._vidxOffset-oldOffset))}this._noScale=!0}}}_accessIronListAPI(cb){this._warnPrivateAPIAccessAsyncEnabled=!1;const returnValue=cb.apply(this);this._debouncerWarnPrivateAPIAccess=Debouncer.debounce(this._debouncerWarnPrivateAPIAccess,animationFrame,()=>this._warnPrivateAPIAccessAsyncEnabled=!0);return returnValue}_debounceRender(cb,asyncModule){super._debounceRender(()=>this._accessIronListAPI(cb),asyncModule)}_warnPrivateAPIAccess(apiName){if(this._warnPrivateAPIAccessAsyncEnabled){console.warn(`Accessing private API (${apiName})!`)}}_render(){this._accessIronListAPI(super._render)}_createFocusBackfillItem(){}_multiSelectionChanged(){}clearSelection(){}_itemsChanged(){}_manageFocus(){}_removeFocusedItem(){}get _firstVisibleIndex(){return this._accessIronListAPI(()=>super.firstVisibleIndex)}get _lastVisibleIndex(){return this._accessIronListAPI(()=>super.lastVisibleIndex)}_scrollToIndex(index){this._accessIronListAPI(()=>this.scrollToIndex(index))}get firstVisibleIndex(){this._warnPrivateAPIAccess("firstVisibleIndex");return super.firstVisibleIndex}set firstVisibleIndex(value){this._warnPrivateAPIAccess("firstVisibleIndex");super.firstVisibleIndex=value}get lastVisibleIndex(){this._warnPrivateAPIAccess("lastVisibleIndex");return super.lastVisibleIndex}set lastVisibleIndex(value){this._warnPrivateAPIAccess("lastVisibleIndex");super.lastVisibleIndex=value}updateViewportBoundaries(){this._warnPrivateAPIAccess("updateViewportBoundaries");super.updateViewportBoundaries.apply(this,arguments)}_resizeHandler(){super._resizeHandler();flush$1()}}_exports.ScrollerElement=GridScrollerElement;customElements.define(GridScrollerElement.is,GridScrollerElement);var vaadinGridScroller={ScrollerElement:GridScrollerElement};_exports.$vaadinGridScroller=vaadinGridScroller;const SelectionMixin=superClass=>class SelectionMixin extends superClass{static get properties(){return{selectedItems:{type:Object,notify:!0,value:()=>[]}}}static get observers(){return["_selectedItemsChanged(selectedItems.*)"]}_isSelected(item){return this.selectedItems&&-1<this._getItemIndexInArray(item,this.selectedItems)}selectItem(item){if(!this._isSelected(item)){this.push("selectedItems",item)}}deselectItem(item){const index=this._getItemIndexInArray(item,this.selectedItems);if(-1<index){this.splice("selectedItems",index,1)}}_toggleItem(item){const index=this._getItemIndexInArray(item,this.selectedItems);if(-1===index){this.selectItem(item)}else{this.deselectItem(item)}}_selectedItemsChanged(e){if(this.$.items.children.length&&("selectedItems"===e.path||"selectedItems.splices"===e.path)){Array.from(this.$.items.children).forEach(row=>{this._updateItem(row,row._item)})}}_selectedInstanceChangedCallback(instance,value){if(super._selectedInstanceChangedCallback){super._selectedInstanceChangedCallback(instance,value)}if(value){this.selectItem(instance.item)}else{this.deselectItem(instance.item)}}};_exports.SelectionMixin=SelectionMixin;var vaadinGridSelectionMixin={SelectionMixin:SelectionMixin};_exports.$vaadinGridSelectionMixin=vaadinGridSelectionMixin;const $_documentContainer$n=document.createElement("template");$_documentContainer$n.innerHTML=`<custom-style>
  <style>
    @font-face {
      font-family: 'vaadin-grid-sorter-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQwAA0AAAAABuwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAEFAAAABkAAAAcfep+mUdERUYAAAP4AAAAHAAAAB4AJwAOT1MvMgAAAZgAAAA/AAAAYA8TBPpjbWFwAAAB7AAAAFUAAAFeF1fZ4mdhc3AAAAPwAAAACAAAAAgAAAAQZ2x5ZgAAAlgAAABcAAAAnMvguMloZWFkAAABMAAAAC8AAAA2C5Ap72hoZWEAAAFgAAAAHQAAACQGbQPHaG10eAAAAdgAAAAUAAAAHAoAAABsb2NhAAACRAAAABIAAAASAIwAYG1heHAAAAGAAAAAFgAAACAACwAKbmFtZQAAArQAAAECAAACZxWCgKhwb3N0AAADuAAAADUAAABZCrApUXicY2BkYGAA4rDECVrx/DZfGbhZGEDgyqNPOxH0/wNMq5kPALkcDEwgUQBWRA0dAHicY2BkYGA+8P8AAwMLAwgwrWZgZEAFbABY4QM8AAAAeJxjYGRgYOAAQiYGEICQSAAAAi8AFgAAeJxjYGY6yziBgZWBgWkm0xkGBoZ+CM34msGYkZMBFTAKoAkwODAwvmRiPvD/AIMDMxCD1CDJKjAwAgBktQsXAHicY2GAAMZQCM0EwqshbAALxAEKeJxjYGBgZoBgGQZGBhCIAPIYwXwWBhsgzcXAwcAEhIwMCi+Z/v/9/x+sSuElA4T9/4k4K1gHFwMMMILMY2QDYmaoABOQYGJABUA7WBiGNwAAJd4NIQAAAAAAAAAACAAIABAAGAAmAEAATgAAeJyNjLENgDAMBP9tIURJwQCMQccSZgk2i5fIYBDAidJjycXr7x5EPwE2wY8si7jmyBNXGo/bNBerxJNrpxhbO3/fEFpx8ZICpV+ghxJ74fAMe+h7Ox14AbrsHB14nK2QQWrDMBRER4mTkhQK3ZRQKOgCNk7oGQqhhEIX2WSlWEI1BAlkJ5CDdNsj5Ey9Rncdi38ES+jzNJo/HwTgATcoDEthhY3wBHc4CE+pfwsX5F/hGe7Vo/AcK/UhvMSz+mGXKhZU6pww8ISz3oWn1BvhgnwTnuEJf8Jz1OpFeIlX9YULDLdFi4ASHolkSR0iuYdjLak1vAequBhj21D61Nqyi6l3qWybGPjySbPHGScGJl6dP58MYcQRI0bts7mjebBqrFENH7t3qWtj0OuqHnXcW7b0HOTZFnKryRGW2hFX1m0O2vEM3opNMfTau+CS6Z3Vx6veNnEXY6jwDxhsc2gAAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSrpYEBlIbxjQDrzgsuAAAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKyoz1cD0o087YTQATOcIewAAAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
</custom-style>`;document.head.appendChild($_documentContainer$n.content);class GridSorterElement extends ThemableMixin(PolymerElement){static get template(){return html`
    <style>
      :host {
        display: inline-flex;
        cursor: pointer;
        max-width: 100%;
      }

      [part="content"] {
        flex: 1 1 auto;
      }

      [part="indicators"] {
        position: relative;
        align-self: center;
        flex: none;
      }

      [part="order"] {
        display: inline;
        vertical-align: super;
      }

      [part="indicators"]::before {
        font-family: 'vaadin-grid-sorter-icons';
      }

      :host(:not([direction])) [part="indicators"]::before {
        content: "\\e901";
      }

      :host([direction=asc]) [part="indicators"]::before {
        content: "\\e900";
      }

      :host([direction=desc]) [part="indicators"]::before {
        content: "\\e902";
      }
    </style>

    <div part="content">
      <slot></slot>
    </div>
    <div part="indicators">
      <span part="order">[[_getDisplayOrder(_order)]]</span>
    </div>
`}static get is(){return"vaadin-grid-sorter"}static get properties(){return{path:String,direction:{type:String,reflectToAttribute:!0,notify:!0,value:null},_order:{type:Number,value:null},_isConnected:{type:Boolean,value:!1}}}static get observers(){return["_pathOrDirectionChanged(path, direction, _isConnected)","_directionOrOrderChanged(direction, _order)"]}ready(){super.ready();this.addEventListener("click",this._onClick.bind(this))}connectedCallback(){super.connectedCallback();this._isConnected=!0}disconnectedCallback(){super.disconnectedCallback();this._isConnected=!1}_pathOrDirectionChanged(path,direction,isConnected){if(path===void 0||direction===void 0||isConnected===void 0){return}if(isConnected){this.dispatchEvent(new CustomEvent("sorter-changed",{bubbles:!0,composed:!0}))}}_getDisplayOrder(order){return null===order?"":order+1}_onClick(e){const activeElement=this.getRootNode().activeElement;if(this!==activeElement&&this.contains(activeElement)){return}e.preventDefault();if("asc"===this.direction){this.direction="desc"}else if("desc"===this.direction){this.direction=null}else{this.direction="asc"}}_directionOrOrderChanged(direction,order){if(direction===void 0||order===void 0){return}var isSafari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);if(isSafari&&this.root){this.root.querySelectorAll("*").forEach(function(el){el.style["-webkit-backface-visibility"]="visible";el.style["-webkit-backface-visibility"]=""})}}}_exports.GridSorterElement=GridSorterElement;customElements.define(GridSorterElement.is,GridSorterElement);var vaadinGridSorter={GridSorterElement:GridSorterElement};_exports.$vaadinGridSorter=vaadinGridSorter;class GridSortColumnElement extends GridColumnElement{static get template(){return html`
    <template class="header" id="headerTemplate">
      <vaadin-grid-sorter path="[[path]]" direction="{{direction}}">[[_getHeader(header, path)]]</vaadin-grid-sorter>
    </template>
`}static get is(){return"vaadin-grid-sort-column"}static get properties(){return{path:String,direction:{type:String,notify:!0}}}_prepareHeaderTemplate(){const headerTemplate=this._prepareTemplatizer(this.$.headerTemplate);headerTemplate.templatizer.dataHost=this;return headerTemplate}_getHeader(header,path){return header||this._generateHeader(path)}}_exports.GridSortColumnElement=GridSortColumnElement;customElements.define(GridSortColumnElement.is,GridSortColumnElement);var vaadinGridSortColumn={GridSortColumnElement:GridSortColumnElement};_exports.$vaadinGridSortColumn=vaadinGridSortColumn;const SortMixin=superClass=>class SortMixin extends superClass{static get properties(){return{multiSort:{type:Boolean,value:!1},_sorters:{type:Array,value:function(){return[]}},_previousSorters:{type:Array,value:function(){return[]}}}}ready(){super.ready();this.addEventListener("sorter-changed",this._onSorterChanged);if(window.ShadyDOM){microTask.run(()=>{const sorters=this.querySelectorAll("vaadin-grid-sorter");Array.from(sorters).forEach(sorter=>{if(sorter instanceof PolymerElement){sorter.dispatchEvent(new CustomEvent("sorter-changed",{bubbles:!0,composed:!0}))}})})}}_onSorterChanged(e){const sorter=e.target;this._removeArrayItem(this._sorters,sorter);sorter._order=null;if(this.multiSort){if(sorter.direction){this._sorters.unshift(sorter)}this._sorters.forEach((sorter,index)=>sorter._order=1<this._sorters.length?index:null,this)}else{if(sorter.direction){this._sorters.forEach(sorter=>{sorter._order=null;sorter.direction=null});this._sorters=[sorter]}}e.stopPropagation();if(this.dataProvider&&JSON.stringify(this._previousSorters)!==JSON.stringify(this._mapSorters())){this.clearCache()}this._a11yUpdateSorters();this._previousSorters=this._mapSorters()}_mapSorters(){return this._sorters.map(sorter=>{return{path:sorter.path,direction:sorter.direction}})}_removeArrayItem(array,item){const index=array.indexOf(item);if(-1<index){array.splice(index,1)}}};_exports.SortMixin=SortMixin;var vaadinGridSortMixin={SortMixin:SortMixin};_exports.$vaadinGridSortMixin=vaadinGridSortMixin;const VaadinGridStyles=document.createElement("dom-module");VaadinGridStyles.appendChild(html`
  <style>
    @keyframes vaadin-grid-appear {
      to {
        opacity: 1;
      }
    }

    :host {
      display: block;
      animation: 1ms vaadin-grid-appear;
      height: 400px;
      flex: 1 1 auto;
      align-self: stretch;
      position: relative;
    }

    :host([hidden]) {
      display: none !important;
    }

    #scroller {
      display: block;
      transform: translateY(0);
      width: auto;
      height: auto;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    :host([height-by-rows]) {
      height: auto;
      align-self: flex-start;
      flex-grow: 0;
      width: 100%;
    }

    :host([height-by-rows]) #scroller {
      width: 100%;
      height: 100%;
      position: relative;
    }

    #table {
      display: block;
      width: 100%;
      height: 100%;
      overflow: auto;
      z-index: -2;
      position: relative;
      outline: none;
    }

    #header {
      display: block;
      position: absolute;
      top: 0;
      width: 100%;
    }

    th {
      text-align: inherit;
    }

    /* Safari doesn't work with "inherit" */
    [safari] th {
      text-align: initial;
    }

    #footer {
      display: block;
      position: absolute;
      bottom: 0;
      width: 100%;
    }

    #items {
      display: block;
      width: 100%;
      position: relative;
      z-index: -1;
    }

    #items,
    #outersizer,
    #fixedsizer {
      border-top: 0 solid transparent;
      border-bottom: 0 solid transparent;
    }

    [part~="row"] {
      display: flex;
      width: 100%;
      box-sizing: border-box;
      margin: 0;
    }

    [part~="row"][loading] [part~="body-cell"] ::slotted(vaadin-grid-cell-content) {
      opacity: 0;
    }

    #items [part~="row"] {
      position: absolute;
    }

    #items [part~="row"]:empty {
      height: 1em;
    }

    [part~="cell"]:not([part~="details-cell"]) {
      flex-shrink: 0;
      flex-grow: 1;
      box-sizing: border-box;
      display: flex;
      width: 100%;
      position: relative;
      align-items: center;
      padding: 0;
      white-space: nowrap;
    }

    [part~="details-cell"] {
      position: absolute;
      bottom: 0;
      width: 100%;
      box-sizing: border-box;
      padding: 0;
    }

    [part~="cell"] ::slotted(vaadin-grid-cell-content) {
      display: block;
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [hidden] {
      display: none !important;
    }

    [frozen] {
      z-index: 2;
      will-change: transform;
    }

    #outerscroller {
      /* Needed (at least) for Android Chrome */
      z-index: 0;
    }

    #scroller:not([safari]) #outerscroller {
      /* Needed for Android Chrome (#1020). Can't be applied to Safari
      since it would re-introduce the sub-pixel overflow bug (#853) */
      will-change: transform;
    }

    [no-scrollbars]:not([safari]):not([firefox]) #outerscroller,
    [no-scrollbars][safari] #table,
    [no-scrollbars][firefox] #table {
      overflow: hidden;
    }

    [no-scrollbars]:not([safari]):not([firefox]) #outerscroller {
      pointer-events: none;
    }

    /* Reordering styles */
    :host([reordering]) [part~="cell"] ::slotted(vaadin-grid-cell-content),
    :host([reordering]) [part~="resize-handle"],
    #scroller[no-content-pointer-events] [part~="cell"] ::slotted(vaadin-grid-cell-content) {
      pointer-events: none;
    }

    [part~="reorder-ghost"] {
      visibility: hidden;
      position: fixed;
      pointer-events: none;
      opacity: 0.5;

      /* Prevent overflowing the grid in Firefox */
      top: 0;
      left: 0;
    }

    :host([reordering]) {
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    #scroller[ie][column-reordering-allowed] [part~="header-cell"] {
      -ms-user-select: none;
    }

    :host([reordering]) #outerscroller {
      -webkit-overflow-scrolling: auto !important;
    }

    /* Resizing styles */
    [part~="resize-handle"] {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      cursor: col-resize;
      z-index: 1;
    }

    [part~="resize-handle"]::before {
      position: absolute;
      content: "";
      height: 100%;
      width: 35px;
      transform: translateX(-50%);
    }

    [last-column] [part~="resize-handle"]::before,
    [last-frozen] [part~="resize-handle"]::before {
      width: 18px;
      transform: translateX(-100%);
    }

    #scroller[column-resizing] {
      -ms-user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    /* Sizer styles */
    .sizer {
      display: flex;
      position: relative;
      width: 100%;
      visibility: hidden;
    }

    .sizer [part~="details-cell"] {
      display: none !important;
    }

    .sizer [part~="cell"][hidden] {
      display: none !important;
    }

    .sizer [part~="cell"] {
      display: block;
      flex-shrink: 0;
      line-height: 0;
      margin-top: -1em;
      height: 0 !important;
      min-height: 0 !important;
      max-height: 0 !important;
      padding: 0 !important;
    }

    .sizer [part~="cell"]::before {
      content: "-";
    }

    .sizer [part~="cell"] ::slotted(vaadin-grid-cell-content) {
      display: none !important;
    }

    /* Fixed mode (Tablet Edge) */
    #fixedsizer {
      position: absolute;
    }

    :not([edge][no-scrollbars]) #fixedsizer {
      display: none;
    }

    [edge][no-scrollbars] {
      /* Any value other than ‘none’ for the transform results in the creation of both a stacking context and
      a containing block. The object acts as a containing block for fixed positioned descendants. */
      transform: translateZ(0);
      overflow: hidden;
    }

    [edge][no-scrollbars] #header,
    [edge][no-scrollbars] #footer {
      position: fixed;
    }

    [edge][no-scrollbars] #items {
      position: fixed;
      width: 100%;
      will-change: transform;
    }
  </style>
`);const safari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),firefox=-1<navigator.userAgent.toLowerCase().indexOf("firefox");if(safari||firefox){const scrollingStyles=document.createElement("style");scrollingStyles.textContent=`
    [scrolling][safari] #outerscroller,
    [scrolling][firefox] #outerscroller {
      pointer-events: auto;
    }

    [ios] #outerscroller {
      pointer-events: auto;
      z-index: -3;
    }

    [ios][scrolling] #outerscroller {
      z-index: 0;
    }
  `;VaadinGridStyles.querySelector("template").content.appendChild(scrollingStyles)}VaadinGridStyles.register("vaadin-grid-styles");const StylingMixin=superClass=>class StylingMixin extends superClass{static get properties(){return{cellClassNameGenerator:Function}}static get observers(){return["__cellClassNameGeneratorChanged(cellClassNameGenerator)"]}__cellClassNameGeneratorChanged(cellClassGenerator){this.generateCellClassNames()}generateCellClassNames(){Array.from(this.$.items.children).filter(row=>!row.hidden).forEach(row=>this._generateCellClassNames(row,this.__getRowModel(row)))}_generateCellClassNames(row,rowData){Array.from(row.children).forEach(cell=>{if(cell.__generatedClasses){cell.__generatedClasses.forEach(className=>cell.classList.remove(className))}if(this.cellClassNameGenerator){const result=this.cellClassNameGenerator(cell._column,rowData);cell.__generatedClasses=result&&result.split(" ").filter(className=>0<className.length);if(cell.__generatedClasses){cell.__generatedClasses.forEach(className=>cell.classList.add(className))}}})}};_exports.StylingMixin=StylingMixin;var vaadinGridStylingMixin={StylingMixin:StylingMixin};_exports.$vaadinGridStylingMixin=vaadinGridStylingMixin;const TOUCH_DEVICE=(()=>{try{document.createEvent("TouchEvent");return!0}catch(e){return!1}})();class GridElement extends ElementMixin$1(ThemableMixin(DataProviderMixin(ArrayDataProviderMixin(DynamicColumnsMixin(ActiveItemMixin(ScrollMixin(SelectionMixin(SortMixin(RowDetailsMixin(KeyboardNavigationMixin(A11yMixin(FilterMixin(ColumnReorderingMixin(ColumnResizingMixin(EventContextMixin(DragAndDropMixin(StylingMixin(GridScrollerElement)))))))))))))))))){static get template(){return html`
    <style include="vaadin-grid-styles"></style>

    <div id="scroller" no-scrollbars\$="[[!_scrollbarWidth]]" wheel-scrolling\$="[[_wheelScrolling]]" safari\$="[[_safari]]" ios\$="[[_ios]]" loading\$="[[loading]]" edge\$="[[_edge]]" firefox\$="[[_firefox]]" ie\$="[[_ie]]" column-reordering-allowed\$="[[columnReorderingAllowed]]">

      <table id="table" role="grid" aria-multiselectable="true" tabindex="0">
        <caption id="fixedsizer" class="sizer" part="row"></caption>
        <thead id="header" role="rowgroup"></thead>
        <tbody id="items" role="rowgroup"></tbody>
        <tfoot id="footer" role="rowgroup"></tfoot>
      </table>

      <div part="reorder-ghost"></div>
      <vaadin-grid-outer-scroller id="outerscroller" _touch-device="[[_touchDevice]]" scroll-target="[[scrollTarget]]" scroll-handler="[[_this]]" no-scrollbars="[[!_scrollbarWidth]]">
        <div id="outersizer" class="sizer" part="row"></div>
      </vaadin-grid-outer-scroller>
    </div>

    <!-- The template needs at least one slot or else shady doesn't distribute -->
    <slot name="nodistribute"></slot>

    <div id="focusexit" tabindex="0"></div>
`}static get is(){return"vaadin-grid"}static get version(){return"5.4.0"}static get observers(){return["_columnTreeChanged(_columnTree, _columnTree.*)"]}static get properties(){return{_this:{type:Object,value:function(){return this}},_safari:{type:Boolean,value:/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},_ios:{type:Boolean,value:/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream},_edge:{type:Boolean,value:"undefined"!==typeof CSS&&CSS.supports("(-ms-ime-align:auto)")},_ie:{type:Boolean,value:!!(navigator.userAgent.match(/Trident/)&&!navigator.userAgent.match(/MSIE/))},_firefox:{type:Boolean,value:-1<navigator.userAgent.toLowerCase().indexOf("firefox")},_android:{type:Boolean,value:/android/i.test(navigator.userAgent)},_touchDevice:{type:Boolean,value:TOUCH_DEVICE},heightByRows:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_heightByRowsChanged"}}}constructor(){super();this.addEventListener("animationend",this._onAnimationEnd)}__hasRowsWithClientHeight(){return!!Array.from(this.$.items.children).filter(row=>row.clientHeight).length}__setInitialColumnWidths(){if(!this._initialColumnWidthsSet&&this.__hasRowsWithClientHeight()){this._initialColumnWidthsSet=!0;this.recalculateColumnWidths()}}_recalculateColumnWidths(cols){cols.forEach(col=>{col.width="auto";col._origFlexGrow=col.flexGrow;col.flexGrow=0});cols.forEach(col=>{col._currentWidth=0;col._allCells.forEach(c=>{const cellWidth=_Mathceil(c.getBoundingClientRect().width);col._currentWidth=_Mathmax(col._currentWidth,cellWidth)})});cols.forEach(col=>{col.width=`${col._currentWidth}px`;col.flexGrow=col._origFlexGrow;col._currentWidth=void 0;col._origFlexGrow=void 0})}recalculateColumnWidths(){if(!this._columnTree){return}const cols=this._getColumns().filter(col=>!col.hidden&&col.autoWidth);this._recalculateColumnWidths(cols)}_createScrollerRows(count){const rows=[];for(var i=0;i<count;i++){const row=document.createElement("tr");row.setAttribute("part","row");row.setAttribute("role","row");if(this._columnTree){this._updateRow(row,this._columnTree[this._columnTree.length-1],"body",!1,!0)}rows.push(row)}if(this._columnTree){this._columnTree[this._columnTree.length-1].forEach(c=>c.notifyPath&&c.notifyPath("_cells.*",c._cells))}beforeNextRender(this,()=>{this._updateFirstAndLastColumn();this._resetKeyboardNavigation()});return rows}_getRowTarget(){return this.$.items}_createCell(tagName){const contentId=this._contentIndex=this._contentIndex+1||0,slotName="vaadin-grid-cell-content-"+contentId,cellContent=document.createElement("vaadin-grid-cell-content");cellContent.setAttribute("slot",slotName);const cell=document.createElement(tagName);cell.id=slotName.replace("-content-","-");cell.setAttribute("tabindex","-1");cell.setAttribute("role","td"===tagName?"gridcell":"columnheader");const slot=document.createElement("slot");slot.setAttribute("name",slotName);cell.appendChild(slot);cell._content=cellContent;cellContent.addEventListener("mousedown",()=>{if(window.chrome){const mouseUpListener=()=>{if(!cellContent.contains(this.getRootNode().activeElement)){cell.focus()}document.removeEventListener("mouseup",mouseUpListener,!0)};document.addEventListener("mouseup",mouseUpListener,!0)}else{setTimeout(()=>{if(!cellContent.contains(this.getRootNode().activeElement)){cell.focus()}})}});return cell}_updateRow(row,columns,section,isColumnRow,noNotify){section=section||"body";const contentsFragment=document.createDocumentFragment();Array.from(row.children).forEach(cell=>cell._vacant=!0);row.innerHTML="";if("outersizer"!==row.id&&"fixedsizer"!==row.id){row.hidden=!0}columns.forEach((column,index)=>{let cell;if("body"===section){column._cells=column._cells||[];cell=column._cells.filter(cell=>cell._vacant)[0];if(!cell){cell=this._createCell("td");column._cells.push(cell)}cell.setAttribute("part","cell body-cell");row.appendChild(cell);if(index===columns.length-1&&(this._rowDetailsTemplate||this.rowDetailsRenderer)){this._detailsCells=this._detailsCells||[];const detailsCell=this._detailsCells.filter(cell=>cell._vacant)[0]||this._createCell("td");if(-1===this._detailsCells.indexOf(detailsCell)){this._detailsCells.push(detailsCell)}if(!detailsCell._content.parentElement){contentsFragment.appendChild(detailsCell._content)}this._configureDetailsCell(detailsCell);row.appendChild(detailsCell);this._a11ySetRowDetailsCell(row,detailsCell);detailsCell._vacant=!1}if(column.notifyPath&&!noNotify){column.notifyPath("_cells.*",column._cells)}}else{const tagName="header"===section?"th":"td";if(isColumnRow||"vaadin-grid-column-group"===column.localName){cell=column[`_${section}Cell`]||this._createCell(tagName);cell._column=column;row.appendChild(cell);column[`_${section}Cell`]=cell}else{column._emptyCells=column._emptyCells||[];cell=column._emptyCells.filter(cell=>cell._vacant)[0]||this._createCell(tagName);cell._column=column;row.appendChild(cell);if(-1===column._emptyCells.indexOf(cell)){column._emptyCells.push(cell)}}cell.setAttribute("part",`cell ${section}-cell`);this.__updateHeaderFooterRowVisibility(row)}if(!cell._content.parentElement){contentsFragment.appendChild(cell._content)}cell._vacant=!1;cell._column=column});this.appendChild(contentsFragment);this._frozenCellsChanged();this._updateFirstAndLastColumnForRow(row)}__updateHeaderFooterRowVisibility(row){if(!row){return}const visibleRowCells=Array.from(row.children).filter(cell=>{const column=cell._column;if(column._emptyCells&&-1<column._emptyCells.indexOf(cell)){return!1}if(row.parentElement===this.$.header){if(column.headerRenderer||column._headerTemplate){return!0}if(null===column.header){return!1}if(column.path||column.header!==void 0){return!0}}else{if(column.footerRenderer||column._footerTemplate){return!0}}});if(row.hidden!==!visibleRowCells.length){row.hidden=!visibleRowCells.length;this.notifyResize()}}_updateScrollerItem(row,index){this._preventScrollerRotatingCellFocus(row,index);if(!this._columnTree){return}this._toggleAttribute("first",0===index,row);this._toggleAttribute("odd",index%2,row);this._a11yUpdateRowRowindex(row,index);this._getItem(index,row)}_columnTreeChanged(columnTree,splices){Array.from(this.$.items.children).forEach(row=>this._updateRow(row,columnTree[columnTree.length-1]));while(this.$.header.children.length<columnTree.length){const headerRow=document.createElement("tr");headerRow.setAttribute("part","row");headerRow.setAttribute("role","row");this.$.header.appendChild(headerRow);const footerRow=document.createElement("tr");footerRow.setAttribute("part","row");footerRow.setAttribute("role","row");this.$.footer.appendChild(footerRow)}while(this.$.header.children.length>columnTree.length){this.$.header.removeChild(this.$.header.firstElementChild);this.$.footer.removeChild(this.$.footer.firstElementChild)}Array.from(this.$.header.children).forEach((headerRow,index)=>this._updateRow(headerRow,columnTree[index],"header",index===columnTree.length-1));Array.from(this.$.footer.children).forEach((footerRow,index)=>this._updateRow(footerRow,columnTree[columnTree.length-1-index],"footer",0===index));this._updateRow(this.$.outersizer,columnTree[columnTree.length-1]);this._updateRow(this.$.fixedsizer,columnTree[columnTree.length-1]);this._resizeHandler();this._frozenCellsChanged();this._updateFirstAndLastColumn();this._resetKeyboardNavigation();this._a11yUpdateHeaderRows();this._a11yUpdateFooterRows()}_updateItem(row,item){row._item=item;const model=this.__getRowModel(row);this._toggleAttribute("selected",model.selected,row);this._a11yUpdateRowSelected(row,model.selected);this._a11yUpdateRowLevel(row,model.level);this._toggleAttribute("expanded",model.expanded,row);if(this._rowDetailsTemplate||this.rowDetailsRenderer){this._toggleDetailsCell(row,item)}this._generateCellClassNames(row,model);this._filterDragAndDrop(row,model);Array.from(row.children).forEach(cell=>{if(cell._renderer){const owner=cell._column||this;cell._renderer.call(owner,cell._content,owner,model)}else if(cell._instance){cell._instance.__detailsOpened__=model.detailsOpened;cell._instance.__selected__=model.selected;cell._instance.__level__=model.level;cell._instance.__expanded__=model.expanded;cell._instance.setProperties(model)}});this._debouncerUpdateHeights=Debouncer.debounce(this._debouncerUpdateHeights,timeOut.after(1),()=>{this._updateMetrics();this._positionItems();this._updateScrollerSize()})}_resizeHandler(){this._updateDetailsCellHeights();this._accessIronListAPI(super._resizeHandler,!0);this._updateHeaderFooterMetrics()}_updateHeaderFooterMetrics(){const headerHeight=this.$.header.clientHeight+"px",footerHeight=this.$.footer.clientHeight+"px";[this.$.outersizer,this.$.fixedsizer,this.$.items].forEach(element=>{element.style.borderTopWidth=headerHeight;element.style.borderBottomWidth=footerHeight});afterNextRender(this.$.header,()=>{if(this._pendingScrollToIndex){this._scrollToIndex(this._pendingScrollToIndex)}})}_onAnimationEnd(e){if(0===e.animationName.indexOf("vaadin-grid-appear")){this._render();this._updateHeaderFooterMetrics();e.stopPropagation();this.notifyResize();this.__setInitialColumnWidths()}}_toggleAttribute(name,bool,node){if(node.hasAttribute(name)===!bool){if(bool){node.setAttribute(name,"")}else{node.removeAttribute(name)}}}__getRowModel(row){return{index:row.index,item:row._item,level:this._getIndexLevel(row.index),expanded:this._isExpanded(row._item),selected:this._isSelected(row._item),detailsOpened:!!(this._rowDetailsTemplate||this.rowDetailsRenderer)&&this._isDetailsOpened(row._item)}}render(){if(this._columnTree){this._columnTree.forEach(level=>{level.forEach(column=>column._renderHeaderAndFooter())});this._update()}}notifyResize(){super.notifyResize()}_heightByRowsChanged(value,oldValue){if(value||oldValue){this.notifyResize()}}__forceReflow(){this._debouncerForceReflow=Debouncer.debounce(this._debouncerForceReflow,animationFrame,()=>{this.$.scroller.style.overflow="hidden";setTimeout(()=>this.$.scroller.style.overflow="")})}}_exports.GridElement=GridElement;customElements.define(GridElement.is,GridElement);var vaadinGrid={GridElement:GridElement};_exports.$vaadinGrid=vaadinGrid;const $_documentContainer$o=html`<dom-module id="lumo-grid-sorter" theme-for="vaadin-grid-sorter">
  <template>
    <style>
      :host {
        justify-content: flex-start;
        align-items: baseline;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      [part="content"] {
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      [part="indicators"] {
        margin-left: var(--lumo-space-s);
      }

      :host(:not([direction])) [part="indicators"]::before {
        opacity: 0.2;
      }

      :host([direction]) {
        color: var(--lumo-primary-text-color);
      }

      [part="order"] {
        font-size: var(--lumo-font-size-xxs);
        line-height: 1;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$o.content);const $_documentContainer$p=html`<dom-module id="lumo-grid" theme-for="vaadin-grid">
  <template>
    <style>
      :host {
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        line-height: var(--lumo-line-height-s);
        color: var(--lumo-body-text-color);
        background-color: var(--lumo-base-color);
        box-sizing: border-box;
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        /* For internal use only */
        --_lumo-grid-border-color: var(--lumo-contrast-20pct);
        --_lumo-grid-secondary-border-color: var(--lumo-contrast-10pct);
        --_lumo-grid-border-width: 1px;
        --_lumo-grid-selected-row-color: var(--lumo-primary-color-10pct);
      }

      /* No (outer) border */

      :host(:not([theme~="no-border"])) {
        border: var(--_lumo-grid-border-width) solid var(--_lumo-grid-border-color);
      }

      /* Cell styles */

      [part~="cell"] {
        min-height: var(--lumo-size-m);
        background-color: var(--lumo-base-color);
      }

      [part~="cell"] ::slotted(vaadin-grid-cell-content) {
        cursor: default;
        padding: var(--lumo-space-xs) var(--lumo-space-m);
      }

      /* Apply row borders by default and introduce the "no-row-borders" variant */
      :host(:not([theme~="no-row-borders"])) [part~="cell"]:not([part~="details-cell"]) {
        border-top: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
      }

      /* Hide first body row top border */
      :host(:not([theme~="no-row-borders"])) [part="row"][first] [part~="cell"]:not([part~="details-cell"]) {
        border-top: 0;
        min-height: calc(var(--lumo-size-m) - var(--_lumo-grid-border-width));
      }

      /* Focus-ring */

      [part~="cell"]:focus {
        outline: none;
      }

      :host([navigating]) [part~="cell"]:focus::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Drag and Drop styles */
      :host([dragover])::after {
        content: "";
        position: absolute;
        z-index: 100;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      [part~="row"][dragover] {
        z-index: 100 !important;
      }

      [part~="row"][dragover] [part~="cell"] {
        overflow: visible;
      }

      [part~="row"][dragover] [part~="cell"]::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        height: calc(var(--_lumo-grid-border-width) + 2px);
        pointer-events: none;
        background: var(--lumo-primary-color-50pct);
      }

      :host([theme~="no-row-borders"]) [dragover] [part~="cell"]::after {
        height: 2px;
      }

      [part~="row"][dragover="below"] [part~="cell"]::after {
        top: 100%;
        bottom: auto;
        margin-top: -1px;
      }

      [part~="row"][dragover="above"] [part~="cell"]::after {
        top: auto;
        bottom: 100%;
        margin-bottom: -1px;
      }

      [part~="row"][dragover][dragover="on-top"] [part~="cell"]::after {
        height: 100%;
      }

      [part~="row"][dragstart] {
        /* Add bottom-space to the row so the drag number doesn't get clipped. Needed for IE/Edge */
        border-bottom: 100px solid transparent;
        z-index: 100 !important;
        opacity: 0.9;
      }

      [part~="row"][dragstart] [part~="cell"] {
        border: none !important;
        box-shadow: none !important;
      }

      [part~="row"][dragstart] [part~="cell"][last-column] {
        border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
      }

      [part~="row"][dragstart] [part~="cell"][first-column] {
        border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
      }

      [ios] [part~="row"][dragstart] [part~="cell"] {
        background: var(--lumo-primary-color-50pct);
      }

      #scroller:not([ios]) [part~="row"][dragstart]:not([dragstart=""])::after {
        display: block;
        position: absolute;
        left: var(--_grid-drag-start-x);
        top: var(--_grid-drag-start-y);
        z-index: 100;
        content: attr(dragstart);
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        padding: calc(var(--lumo-space-xs) * 0.8);
        color: var(--lumo-error-contrast-color);
        background-color: var(--lumo-error-color);
        border-radius: var(--lumo-border-radius-m);
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-xxs);
        line-height: 1;
        font-weight: 500;
        text-transform: initial;
        letter-spacing: initial;
        min-width: calc(var(--lumo-size-s) * 0.7);
        text-align: center;
      }

      /* Headers and footers */

      [part~="header-cell"] ::slotted(vaadin-grid-cell-content),
      [part~="footer-cell"] ::slotted(vaadin-grid-cell-content),
      [part~="reorder-ghost"] {
        font-size: var(--lumo-font-size-s);
        font-weight: 500;
      }

      [part~="footer-cell"] ::slotted(vaadin-grid-cell-content) {
        font-weight: 400;
      }

      [part="row"]:only-child [part~="header-cell"] {
        min-height: var(--lumo-size-xl);
      }

      /* Header borders */

      /* Hide first header row top border */
      :host(:not([theme~="no-row-borders"])) [part="row"]:first-child [part~="header-cell"] {
        border-top: 0;
      }

      [part="row"]:last-child [part~="header-cell"] {
        border-bottom: var(--_lumo-grid-border-width) solid transparent;
      }

      :host(:not([theme~="no-row-borders"])) [part="row"]:last-child [part~="header-cell"] {
        border-bottom-color: var(--_lumo-grid-secondary-border-color);
      }

      /* Overflow uses a stronger border color */
      :host([overflow~="top"]) [part="row"]:last-child [part~="header-cell"] {
        border-bottom-color: var(--_lumo-grid-border-color);
      }

      /* Footer borders */

      [part="row"]:first-child [part~="footer-cell"] {
        border-top: var(--_lumo-grid-border-width) solid transparent;
      }

      :host(:not([theme~="no-row-borders"])) [part="row"]:first-child [part~="footer-cell"] {
        border-top-color: var(--_lumo-grid-secondary-border-color);
      }

      /* Overflow uses a stronger border color */
      :host([overflow~="bottom"]) [part="row"]:first-child [part~="footer-cell"] {
        border-top-color: var(--_lumo-grid-border-color);
      }

      /* Column reordering */

      :host([reordering]) [part~="cell"] {
        background: linear-gradient(var(--lumo-shade-20pct), var(--lumo-shade-20pct)) var(--lumo-base-color);
      }

      :host([reordering]) [part~="cell"][reorder-status="allowed"] {
        background: var(--lumo-base-color);
      }

      :host([reordering]) [part~="cell"][reorder-status="dragging"] {
        background: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct)) var(--lumo-base-color);
      }

      [part~="reorder-ghost"] {
        opacity: 0.85;
        box-shadow: var(--lumo-box-shadow-s);
        /* TODO Use the same styles as for the cell element (reorder-ghost copies styles from the cell element) */
        padding: var(--lumo-space-s) var(--lumo-space-m) !important;
      }

      /* Column resizing */

      [part="resize-handle"] {
        width: 3px;
        background-color: var(--lumo-primary-color-50pct);
        opacity: 0;
        transition: opacity 0.2s;
      }

      :host(:not([reordering])) *:not([column-resizing]) [part~="cell"]:hover [part="resize-handle"],
      [part="resize-handle"]:active {
        opacity: 1;
        transition-delay: 0.15s;
      }

      /* Column borders */

      :host([theme~="column-borders"]) [part~="cell"]:not([last-column]):not([part~="details-cell"]) {
        border-right: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
      }

      /* Frozen columns */

      [last-frozen] {
        border-right: var(--_lumo-grid-border-width) solid transparent;
        overflow: hidden;
      }

      :host([overflow~="left"]) [part~="cell"][last-frozen]:not([part~="details-cell"]) {
        border-right-color: var(--_lumo-grid-border-color);
      }

      /* Row stripes */

      :host([theme~="row-stripes"]) [part~="row"]:not([odd]) [part~="body-cell"],
      :host([theme~="row-stripes"]) [part~="row"]:not([odd]) [part~="details-cell"] {
        background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
        background-repeat: repeat-x;
      }

      /* Selected row */

      /* Raise the selected rows above unselected rows (so that box-shadow can cover unselected rows) */
      :host(:not([reordering])) [part~="row"][selected] {
        z-index: 1;
      }

      :host(:not([reordering])) [part~="row"][selected] [part~="body-cell"]:not([part~="details-cell"]) {
        background-image: linear-gradient(var(--_lumo-grid-selected-row-color), var(--_lumo-grid-selected-row-color));
        background-repeat: repeat;
      }

      /* Cover the border of an unselected row */
      :host(:not([theme~="no-row-borders"])) [part~="row"][selected] [part~="cell"]:not([part~="details-cell"]) {
        box-shadow: 0 var(--_lumo-grid-border-width) 0 0 var(--_lumo-grid-selected-row-color);
      }

      /* Compact */

      :host([theme~="compact"]) [part="row"]:only-child [part~="header-cell"] {
        min-height: var(--lumo-size-m);
      }

      :host([theme~="compact"]) [part~="cell"] {
        min-height: var(--lumo-size-s);
      }

      :host([theme~="compact"]) [part="row"][first] [part~="cell"]:not([part~="details-cell"]) {
        min-height: calc(var(--lumo-size-s) - var(--_lumo-grid-border-width));
      }

      :host([theme~="compact"]) [part~="cell"] ::slotted(vaadin-grid-cell-content) {
        padding: var(--lumo-space-xs) var(--lumo-space-s);
      }

      /* Wrap cell contents */

      :host([theme~="wrap-cell-content"]) [part~="cell"] ::slotted(vaadin-grid-cell-content) {
        white-space: normal;
      }
    </style>
  </template>
</dom-module><dom-module theme-for="vaadin-checkbox" id="vaadin-grid-select-all-checkbox-lumo">
  <template>
    <style>
      :host(.vaadin-grid-select-all-checkbox) {
        font-size: var(--lumo-font-size-m);
      }
   </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$p.content);const ItemMixin=superClass=>class VaadinItemMixin extends superClass{static get properties(){return{_hasVaadinItemMixin:{value:!0},disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0},selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged"},_value:String}}constructor(){super();this.value}get value(){return this._value!==void 0?this._value:this.textContent.trim()}set value(value){this._value=value}ready(){super.ready();const attrValue=this.getAttribute("value");if(null!==attrValue){this.value=attrValue}this.addEventListener("focus",e=>this._setFocused(!0),!0);this.addEventListener("blur",e=>this._setFocused(!1),!0);this.addEventListener("mousedown",e=>{this._setActive(this._mousedown=!0);const mouseUpListener=()=>{this._setActive(this._mousedown=!1);document.removeEventListener("mouseup",mouseUpListener)};document.addEventListener("mouseup",mouseUpListener)});this.addEventListener("keydown",e=>this._onKeydown(e));this.addEventListener("keyup",e=>this._onKeyup(e))}disconnectedCallback(){super.disconnectedCallback();if(this.hasAttribute("active")){this._setFocused(!1)}}_selectedChanged(selected){this.setAttribute("aria-selected",selected)}_disabledChanged(disabled){if(disabled){this.selected=!1;this.setAttribute("aria-disabled","true");this.blur()}else{this.removeAttribute("aria-disabled")}}_setFocused(focused){if(focused){this.setAttribute("focused","");if(!this._mousedown){this.setAttribute("focus-ring","")}}else{this.removeAttribute("focused");this.removeAttribute("focus-ring");this._setActive(!1)}}_setActive(active){if(active){this.setAttribute("active","")}else{this.removeAttribute("active")}}_onKeydown(event){if(/^( |SpaceBar|Enter)$/.test(event.key)&&!event.defaultPrevented){event.preventDefault();this._setActive(!0)}}_onKeyup(event){if(this.hasAttribute("active")){this._setActive(!1);this.click()}}};_exports.ItemMixin=ItemMixin;var vaadinItemMixin={ItemMixin:ItemMixin};_exports.$vaadinItemMixin=vaadinItemMixin;class ItemElement extends ItemMixin(ThemableMixin(PolymerElement)){static get template(){return html`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }
    </style>
    <div part="content">
      <slot></slot>
    </div>
`}static get is(){return"vaadin-item"}static get version(){return"2.1.0"}}_exports.ItemElement=ItemElement;customElements.define(ItemElement.is,ItemElement);var vaadinItem={ItemElement:ItemElement};_exports.$vaadinItem=vaadinItem;const $_documentContainer$q=document.createElement("template");$_documentContainer$q.innerHTML=`<dom-module id="lumo-item" theme-for="vaadin-item">
  <template>
    <style>
      :host {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        line-height: var(--lumo-line-height-xs);
        padding: 0.5em 1em;
        min-height: var(--lumo-size-m);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
      }

      /* Selectable items have a checkmark icon */
      :host([tabindex])::before {
        display: var(--_lumo-item-selected-icon-display, none);
        content: var(--lumo-icons-checkmark);
        font-family: lumo-icons;
        font-size: var(--lumo-icon-size-m);
        line-height: 1;
        font-weight: normal;
        width: 1em;
        height: 1em;
        margin: calc((1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2) 0;
        color: var(--lumo-primary-text-color);
        flex: none;
        opacity: 0;
        transition: transform 0.2s cubic-bezier(.12, .32, .54, 2), opacity 0.1s;
      }

      :host([selected])::before {
        opacity: 1;
      }

      :host([active]:not([selected]))::before {
        transform: scale(0.8);
        opacity: 0;
        transition-duration: 0s;
      }

      [part="content"] {
        flex: auto;
      }

      /* Disabled item */

      :host([disabled]) {
        color: var(--lumo-disabled-text-color);
        cursor: default;
        pointer-events: none;
      }

      /* Slotted icons */

      :host ::slotted(iron-icon) {
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$q.content);const ListMixin=superClass=>class VaadinListMixin extends superClass{static get properties(){return{_hasVaadinListMixin:{value:!0},selected:{type:Number,reflectToAttribute:!0,notify:!0},orientation:{type:String,reflectToAttribute:!0,value:""},items:{type:Array,readOnly:!0,notify:!0},_searchBuf:{type:String,value:""}}}static get observers(){return["_enhanceItems(items, orientation, selected)"]}ready(){super.ready();this.addEventListener("keydown",e=>this._onKeydown(e));this.addEventListener("click",e=>this._onClick(e));this._observer=new FlattenedNodesObserver(this,info=>{this._setItems(this._filterItems(Array.from(this.children)))})}_enhanceItems(items,orientation,selected){if(items){this.setAttribute("aria-orientation",orientation||"vertical");this.items.forEach(item=>{orientation?item.setAttribute("orientation",orientation):item.removeAttribute("orientation");item.updateStyles()});this._setFocusable(selected);const itemToSelect=items[selected];items.forEach(item=>item.selected=item===itemToSelect);if(itemToSelect&&!itemToSelect.disabled){this._scrollToItem(selected)}}}get focused(){return this.getRootNode().activeElement}_filterItems(array){return array.filter(e=>e._hasVaadinItemMixin)}_onClick(event){if(event.metaKey||event.shiftKey||event.ctrlKey){return}const item=this._filterItems(event.composedPath())[0];let idx;if(item&&!item.disabled&&0<=(idx=this.items.indexOf(item))){this.selected=idx}}_searchKey(currentIdx,key){this._searchReset=Debouncer.debounce(this._searchReset,timeOut.after(500),()=>this._searchBuf="");this._searchBuf+=key.toLowerCase();const increment=1,condition=item=>!item.disabled&&0===item.textContent.replace(/[^a-zA-Z0-9]/g,"").toLowerCase().indexOf(this._searchBuf);if(!this.items.some(item=>0===item.textContent.replace(/[^a-zA-Z0-9]/g,"").toLowerCase().indexOf(this._searchBuf))){this._searchBuf=key.toLowerCase()}const idx=1===this._searchBuf.length?currentIdx+1:currentIdx;return this._getAvailableIndex(idx,increment,condition)}_onKeydown(event){if(event.metaKey||event.ctrlKey){return}const key=event.key.replace(/^Arrow/,""),currentIdx=this.items.indexOf(this.focused);if(/[a-zA-Z0-9]/.test(key)&&1===key.length){const idx=this._searchKey(currentIdx,key);if(0<=idx){this._focus(idx)}return}const condition=item=>!item.disabled;let idx,increment;if(this._vertical&&"Up"===key||!this._vertical&&"Left"===key){increment=-1;idx=currentIdx-1}else if(this._vertical&&"Down"===key||!this._vertical&&"Right"===key){increment=1;idx=currentIdx+1}else if("Home"===key){increment=1;idx=0}else if("End"===key){increment=-1;idx=this.items.length-1}idx=this._getAvailableIndex(idx,increment,condition);if(0<=idx){this._focus(idx);event.preventDefault()}}_getAvailableIndex(idx,increment,condition){const totalItems=this.items.length;for(let i=0;"number"==typeof idx&&i<totalItems;i++,idx+=increment||1){if(0>idx){idx=totalItems-1}else if(idx>=totalItems){idx=0}const item=this.items[idx];if(condition(item)){return idx}}return-1}_setFocusable(idx){idx=this._getAvailableIndex(idx,1,item=>!item.disabled);const item=this.items[idx]||this.items[0];this.items.forEach(e=>e.tabIndex=e===item?0:-1)}_focus(idx){const item=this.items[idx];this.items.forEach(e=>e.focused=e===item);this._setFocusable(idx);this._scrollToItem(idx);item.focus()}focus(){this._observer&&this._observer.flush();const firstItem=this.querySelector("[tabindex=\"0\"]")||(this.items?this.items[0]:null);firstItem&&firstItem.focus()}get _scrollerElement(){}_scrollToItem(idx){const item=this.items[idx];if(!item){return}const props=this._vertical?["top","bottom"]:["left","right"],scrollerRect=this._scrollerElement.getBoundingClientRect(),nextItemRect=(this.items[idx+1]||item).getBoundingClientRect(),prevItemRect=(this.items[idx-1]||item).getBoundingClientRect();let scrollDistance=0;if(nextItemRect[props[1]]>=scrollerRect[props[1]]){scrollDistance=nextItemRect[props[1]]-scrollerRect[props[1]]}else if(prevItemRect[props[0]]<=scrollerRect[props[0]]){scrollDistance=prevItemRect[props[0]]-scrollerRect[props[0]]}this._scroll(scrollDistance)}get _vertical(){return"horizontal"!==this.orientation}_scroll(pixels){this._scrollerElement["scroll"+(this._vertical?"Top":"Left")]+=pixels}};_exports.ListMixin=ListMixin;var vaadinListMixin={ListMixin:ListMixin};_exports.$vaadinListMixin=vaadinListMixin;class ListBoxElement extends ElementMixin$1(ListMixin(ThemableMixin(PolymerElement))){static get template(){return html`
    <style>
      :host {
        display: flex;
      }

      :host([hidden]) {
        display: none !important;
      }

      [part="items"] {
        height: 100%;
        width: 100%;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }
    </style>
    <div part="items">
      <slot></slot>
    </div>
`}static get is(){return"vaadin-list-box"}static get version(){return"1.1.0"}static get properties(){return{orientation:{readOnly:!0}}}ready(){super.ready();this.setAttribute("role","list")}get _scrollerElement(){return this.shadowRoot.querySelector("[part=\"items\"]")}}_exports.ListBoxElement=ListBoxElement;customElements.define(ListBoxElement.is,ListBoxElement);var vaadinListBox={ListBoxElement:ListBoxElement};_exports.$vaadinListBox=vaadinListBox;const $_documentContainer$r=document.createElement("template");$_documentContainer$r.innerHTML=`<dom-module id="lumo-list-box" theme-for="vaadin-list-box">
  <template>
    <style>
      :host {
        -webkit-tap-highlight-color: transparent;
        --_lumo-item-selected-icon-display: var(--_lumo-list-box-item-selected-icon-display, block);
      }

      /* IE11 flexbox issue workaround (vaadin-items are flex containers with min-height) */
      [part="items"] {
        display: flex;
        flex-direction: column;
      }

      [part="items"] ::slotted(*) {
        flex: none;
      }

      /* Normal item */

      [part="items"] ::slotted(vaadin-item) {
        -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
        cursor: default;
      }

      [part="items"] ::slotted(vaadin-item) {
        outline: none;
        border-radius: var(--lumo-border-radius);
        padding-left: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius) / 4));
        padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
      }

      /* Workaround to display checkmark in IE11 when list-box is not used in dropdown-menu */
      [part="items"] ::slotted(vaadin-item)::before {
        display: var(--_lumo-item-selected-icon-display);
      }

      /* Hovered item */
      /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */

      [part="items"] ::slotted(vaadin-item:hover:not([disabled])) {
        background-color: var(--lumo-primary-color-10pct);
      }

      /* Focused item */

      [part="items"] ::slotted([focus-ring]:not([disabled])) {
        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      @media (pointer: coarse) {
        [part="items"] ::slotted(vaadin-item:hover:not([disabled])) {
          background-color: transparent;
        }

        [part="items"] ::slotted([focus-ring]:not([disabled])) {
          box-shadow: none;
        }
      }

      /* Easily add section dividers */

      [part="items"] ::slotted(hr) {
        height: 1px;
        border: 0;
        padding: 0;
        margin: var(--lumo-space-s) var(--lumo-border-radius);
        background-color: var(--lumo-contrast-10pct);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$r.content);const $_documentContainer$s=document.createElement("template");$_documentContainer$s.innerHTML=`<dom-module id="vaadin-select-overlay-styles" theme-for="vaadin-select-overlay">
  <template>
    <style>
      :host {
        align-items: flex-start;
        justify-content: flex-start;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$s.content);class SelectOverlayElement extends OverlayElement{static get is(){return"vaadin-select-overlay"}}customElements.define(SelectOverlayElement.is,SelectOverlayElement);let memoizedTemplate;class SelectTextFieldElement extends TextFieldElement{static get is(){return"vaadin-select-text-field"}static get template(){if(super.template.content.querySelector("slot[name=\"input\"]")){return super.template}if(!memoizedTemplate){memoizedTemplate=super.template.cloneNode(!0);const slot=document.createElement("slot");slot.setAttribute("name","value");const input=memoizedTemplate.content.querySelector("input");input.parentElement.replaceChild(slot,input);slot.appendChild(input)}return memoizedTemplate}get focusElement(){return this.shadowRoot.querySelector("[part=input-field]")}get inputElement(){return this.shadowRoot.querySelector("input")}}customElements.define(SelectTextFieldElement.is,SelectTextFieldElement);const $_documentContainer$t=document.createElement("template");$_documentContainer$t.innerHTML=`<custom-style>
  <style>
    @font-face {
      font-family: "vaadin-select-icons";
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAASEAAsAAAAABDgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIGKmNtYXAAAAFoAAAAVAAAAFQXVtKHZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAHwAAAB8CohkJ2hlYWQAAAJAAAAANgAAADYOavgEaGhlYQAAAngAAAAkAAAAJAarA8ZobXR4AAACnAAAABQAAAAUCAABP2xvY2EAAAKwAAAADAAAAAwAKABSbWF4cAAAArwAAAAgAAAAIAAHABduYW1lAAAC3AAAAYYAAAGGmUoJ+3Bvc3QAAARkAAAAIAAAACAAAwAAAAMEAAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QADwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkA//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQE/AUAC6QIVABQAAAEwFx4BFxYxMDc+ATc2MTAjKgEjIgE/ISJPIiEhIk8iIUNCoEJDAhUhIk8iISEiTyIhAAEAAAABAABvL5bdXw889QALBAAAAAAA1jHaeQAAAADWMdp5AAAAAALpAhUAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAAAukAAQAAAAAAAAAAAAAAAAAAAAUEAAAAAAAAAAAAAAAAAAAABAABPwAAAAAACgAUAB4APgABAAAABQAVAAEAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEABwAAAAEAAAAAAAIABwBgAAEAAAAAAAMABwA2AAEAAAAAAAQABwB1AAEAAAAAAAUACwAVAAEAAAAAAAYABwBLAAEAAAAAAAoAGgCKAAMAAQQJAAEADgAHAAMAAQQJAAIADgBnAAMAAQQJAAMADgA9AAMAAQQJAAQADgB8AAMAAQQJAAUAFgAgAAMAAQQJAAYADgBSAAMAAQQJAAoANACkaWNvbW9vbgBpAGMAbwBtAG8AbwBuVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwaWNvbW9vbgBpAGMAbwBtAG8AbwBuaWNvbW9vbgBpAGMAbwBtAG8AbwBuUmVndWxhcgBSAGUAZwB1AGwAYQByaWNvbW9vbgBpAGMAbwBtAG8AbwBuRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
</custom-style>`;document.head.appendChild($_documentContainer$t.content);class SelectElement extends ElementMixin$1(ControlStateMixin(ThemableMixin(ThemePropertyMixin(mixinBehaviors(IronResizableBehavior,PolymerElement))))){static get template(){return html`
    <style>
      :host {
        display: inline-block;
      }

      vaadin-select-text-field {
        width: 100%;
        min-width: 0;
      }

      :host([hidden]) {
        display: none !important;
      }

      [part="toggle-button"] {
        font-family: "vaadin-select-icons";
      }

      [part="toggle-button"]::before {
        content: "\\e900";
      }
    </style>

    <vaadin-select-text-field placeholder="[[placeholder]]" label="[[label]]" required="[[required]]" invalid="[[invalid]]" error-message="[[errorMessage]]" readonly\$="[[readonly]]" theme\$="[[theme]]">
      <slot name="prefix" slot="prefix"></slot>
      <div part="value"></div>
      <div part="toggle-button" slot="suffix" role="button" aria-label="Toggle"></div>
    </vaadin-select-text-field>
    <vaadin-select-overlay opened="{{opened}}" with-backdrop="[[_phone]]" phone\$="[[_phone]]" theme\$="[[theme]]"></vaadin-select-overlay>

    <iron-media-query query="[[_phoneMediaQuery]]" query-matches="{{_phone}}"></iron-media-query>
`}static get is(){return"vaadin-select"}static get version(){return"2.1.0"}static get properties(){return{opened:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0,observer:"_openedChanged"},renderer:Function,errorMessage:{type:String,value:""},label:{type:String},value:{type:String,value:"",notify:!0,observer:"_valueChanged"},required:{type:Boolean,reflectToAttribute:!0,observer:"_requiredChanged"},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},name:{type:String,reflectToAttribute:!0},placeholder:{type:String},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},_phone:Boolean,_phoneMediaQuery:{value:"(max-width: 420px), (max-height: 420px)"},_overlayElement:Object,_inputElement:Object,_toggleElement:Object,_items:Object,_contentTemplate:Object,_oldTemplate:Object,_oldRenderer:Object}}static get observers(){return["_updateSelectedItem(value, _items)","_updateAriaExpanded(opened, _toggleElement)","_templateOrRendererChanged(_contentTemplate, renderer, _overlayElement)"]}constructor(){super();this._boundSetPosition=this._setPosition.bind(this)}connectedCallback(){super.connectedCallback();this.addEventListener("iron-resize",this._boundSetPosition)}ready(){super.ready();this._overlayElement=this.shadowRoot.querySelector("vaadin-select-overlay");this._valueElement=this.shadowRoot.querySelector("[part=\"value\"]");this._toggleElement=this.shadowRoot.querySelector("[part=\"toggle-button\"]");this._nativeInput=this.focusElement.shadowRoot.querySelector("input");this._nativeInput.setAttribute("aria-hidden",!0);this._nativeInput.setAttribute("tabindex",-1);this._nativeInput.style.pointerEvents="none";this.focusElement.addEventListener("click",e=>this.opened=!this.readonly);this.focusElement.addEventListener("keydown",e=>this._onKeyDown(e));this._observer=new FlattenedNodesObserver(this,info=>this._setTemplateFromNodes(info.addedNodes));this._observer.flush()}_setTemplateFromNodes(nodes){const template=Array.from(nodes).filter(node=>node.localName&&"template"===node.localName)[0]||this._contentTemplate;this._overlayElement.template=this._contentTemplate=template;this._setForwardHostProps()}_setForwardHostProps(){if(this._overlayElement.content){const origForwardHostProp=this._overlayElement._instance&&this._overlayElement._instance.forwardHostProp;if(this._overlayElement._instance){this._overlayElement._instance.forwardHostProp=(...args)=>{origForwardHostProp.apply(this._overlayElement._instance,args);setTimeout(()=>{this._updateValueSlot()})};this._assignMenuElement()}}}render(){this._overlayElement.render()}_removeNewRendererOrTemplate(template,oldTemplate,renderer,oldRenderer){if(template!==oldTemplate){this._contentTemplate=void 0}else if(renderer!==oldRenderer){this.renderer=void 0}}_templateOrRendererChanged(template,renderer,overlay){if(!overlay){return}if(template&&renderer){this._removeNewRendererOrTemplate(template,this._oldTemplate,renderer,this._oldRenderer);throw new Error("You should only use either a renderer or a template for select content")}this._oldTemplate=template;this._oldRenderer=renderer;if(renderer){overlay.setProperties({owner:this,renderer:renderer});this.render();if(overlay.content.firstChild){this._assignMenuElement()}}}_assignMenuElement(){this._menuElement=Array.from(this._overlayElement.content.children).filter(element=>"style"!==element.localName)[0];if(this._menuElement){this._menuElement.addEventListener("items-changed",e=>{this._items=this._menuElement.items});this._menuElement.addEventListener("selected-changed",e=>this._updateValueSlot());this._menuElement.addEventListener("keydown",e=>this._onKeyDownInside(e));this._menuElement.addEventListener("click",e=>this.opened=!1)}}get focusElement(){return this._inputElement||(this._inputElement=this.shadowRoot.querySelector("vaadin-select-text-field"))}disconnectedCallback(){super.disconnectedCallback();this.removeEventListener("iron-resize",this._boundSetPosition);this.opened=!1}notifyResize(){super.notifyResize();if(this.positionTarget&&this.opened){this._setPosition();requestAnimationFrame(this._setPosition.bind(this))}}_requiredChanged(required){this.setAttribute("aria-required",required)}_valueChanged(value,oldValue){if(""===value){this.focusElement.removeAttribute("has-value")}else{this.focusElement.setAttribute("has-value","")}if(""===value&&oldValue===void 0){return}this.validate()}_onKeyDown(e){if(!this.readonly&&!this.opened){if(/^(Enter|SpaceBar|\s|ArrowDown|Down|ArrowUp|Up)$/.test(e.key)){e.preventDefault();this.opened=!0}else if(/[a-zA-Z0-9]/.test(e.key)&&1===e.key.length){const selected=this._menuElement.selected,currentIdx=selected!==void 0?selected:-1,newIdx=this._menuElement._searchKey(currentIdx,e.key);if(0<=newIdx){this._updateSelectedItem(this._items[newIdx].value,this._items)}}}}_onKeyDownInside(e){if(/^(Tab)$/.test(e.key)){this.opened=!1}}_openedChanged(opened,wasOpened){if(opened){if(!this._overlayElement||!this._menuElement||!this._toggleElement||!this.focusElement||this.disabled||this.readonly){this.opened=!1;return}this._openedWithFocusRing=this.hasAttribute("focus-ring")||this.focusElement.hasAttribute("focus-ring");this._menuElement.focus();this._setPosition();window.addEventListener("scroll",this._boundSetPosition,!0)}else if(wasOpened){if(this._phone){this._setFocused(!1)}else{this.focusElement.focus();if(this._openedWithFocusRing){this.focusElement.setAttribute("focus-ring","")}}this.validate();window.removeEventListener("scroll",this._boundSetPosition,!0)}}_hasContent(selected){if(!selected){return!1}return!!(selected.hasAttribute("label")?selected.getAttribute("label"):selected.textContent.trim()||selected.children.length)}_attachSelectedItem(selected){if(!selected){return}let labelItem;if(selected.hasAttribute("label")){labelItem=document.createElement("vaadin-item");labelItem.textContent=selected.getAttribute("label")}else{labelItem=selected.cloneNode(!0)}labelItem._sourceItem=selected;labelItem.removeAttribute("tabindex");this._valueElement.appendChild(labelItem);labelItem.selected=!0}_updateAriaExpanded(opened,toggleElement){toggleElement&&toggleElement.setAttribute("aria-expanded",opened)}_updateValueSlot(){this.opened=!1;this._valueElement.innerHTML="";const selected=this._items[this._menuElement.selected],hasContent=this._hasContent(selected),slotName=this._inputElement.shadowRoot.querySelector("slot[name=\"input\"]")?"input":"value";this._valueElement.slot=hasContent?slotName:"";if(hasContent&&window.ShadyDOM){window.ShadyDOM.flush()}this._attachSelectedItem(selected);if(!this._valueChanging&&selected){this._selectedChanging=!0;this.value=selected.value||"";delete this._selectedChanging}}_updateSelectedItem(value,items){if(items){this._menuElement.selected=items.reduce((prev,item,idx)=>{return prev===void 0&&item.value===value?idx:prev},void 0);if(!this._selectedChanging){this._valueChanging=!0;this._updateValueSlot();delete this._valueChanging}}}_setFocused(focused){super._setFocused(this.opened||focused);this.focusElement._setFocused(this.hasAttribute("focused"));this.hasAttribute("focused")||this.validate()}_setPosition(){const inputRect=this._inputElement.shadowRoot.querySelector("[part~=\"input-field\"]").getBoundingClientRect(),viewportHeight=_Mathmin(window.innerHeight,document.documentElement.clientHeight),bottomAlign=inputRect.top>(viewportHeight-inputRect.height)/2;this._overlayElement.style.left=inputRect.left+"px";if(bottomAlign){this._overlayElement.setAttribute("bottom-aligned","");this._overlayElement.style.removeProperty("top");this._overlayElement.style.bottom=viewportHeight-inputRect.bottom+"px"}else{this._overlayElement.removeAttribute("bottom-aligned");this._overlayElement.style.removeProperty("bottom");this._overlayElement.style.top=inputRect.top+"px"}this._overlayElement.updateStyles({"--vaadin-select-text-field-width":inputRect.width+"px"})}validate(){return!(this.invalid=!(this.disabled||!this.required||this.value))}}_exports.SelectElement=SelectElement;customElements.define(SelectElement.is,SelectElement);var vaadinSelect={SelectElement:SelectElement};_exports.$vaadinSelect=vaadinSelect;const $_documentContainer$u=html`<dom-module id="lumo-select" theme-for="vaadin-select">
  <template>
    <style include="lumo-field-button">
      :host {
        outline: none;
        -webkit-tap-highlight-color: transparent;
      }

      [selected] {
        padding-left: 0;
        padding-right: 0;
      }

      :host([theme~="small"]) [selected] {
        padding: 0;
        min-height: var(--lumo-size-s);
      }

      [part="toggle-button"]::before {
        content: var(--lumo-icons-dropdown);
      }

      /* Highlight the toggle button when hovering over the entire component */
      :host(:hover:not([readonly]):not([disabled])) [part="toggle-button"] {
        color: var(--lumo-contrast-80pct);
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-select-text-field" theme-for="vaadin-select-text-field">
  <template>
    <style>
      [part="input-field"] {
        cursor: default;
      }

      [part="input-field"] ::slotted([part="value"]) {
        display: flex;
      }

      /* ShadyCSS limitation workaround */
      [part="input-field"] ::slotted([part="value"]) [selected]::before {
        display: none;
      }

      [part="input-field"]:focus {
        outline: none;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-select-overlay" theme-for="vaadin-select-overlay">
  <template>
    <style include="lumo-menu-overlay">
      :host {
        --_lumo-item-selected-icon-display: block;
      }

      :host([bottom-aligned]) {
        justify-content: flex-end;
      }

      [part~="overlay"] {
        min-width: var(--vaadin-select-text-field-width);
      }

      /* Small viewport adjustment */
      :host([phone]) {
        top: 0 !important;
        right: 0 !important;
        bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
        left: 0 !important;
        align-items: stretch;
        justify-content: flex-end;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$u.content);class EmailFieldElement extends TextFieldElement{static get is(){return"vaadin-email-field"}static get version(){return"2.4.3"}ready(){super.ready();this.inputElement.type="email";this.inputElement.autocapitalize="off";this.pattern="^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"}}_exports.EmailFieldElement=EmailFieldElement;customElements.define(EmailFieldElement.is,EmailFieldElement);var vaadinEmailField={EmailFieldElement:EmailFieldElement};_exports.$vaadinEmailField=vaadinEmailField;const $_documentContainer$v=document.createElement("template");$_documentContainer$v.innerHTML=`<dom-module id="vaadin-number-field-template">
  <template>
    <style>
      :host([readonly]) {
        pointer-events: none;
      }

      [part="decrease-button"]::before {
        content: "−";
      }

      [part="increase-button"]::before {
        content: "+";
      }

      [part="decrease-button"],
      [part="increase-button"] {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      /* Hide the native arrow icons */
      [part="value"]::-webkit-outer-spin-button,
      [part="value"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      [part="value"] {
        /* Older Firefox versions (v47.0) requires !important */
        -moz-appearance: textfield !important;
      }
    </style>

    <div disabled\$="[[!_allowed(-1, value, min, max, step)]]" part="decrease-button" on-click="_decreaseValue" on-touchend="_decreaseButtonTouchend" hidden\$="[[!hasControls]]">
    </div>

    <div disabled\$="[[!_allowed(1, value, min, max, step)]]" part="increase-button" on-click="_increaseValue" on-touchend="_increaseButtonTouchend" hidden\$="[[!hasControls]]">
    </div>
  </template>

  
</dom-module>`;document.head.appendChild($_documentContainer$v.content);let memoizedTemplate$1;class NumberFieldElement extends TextFieldElement{static get is(){return"vaadin-number-field"}static get version(){return"2.4.3"}static get properties(){return{hasControls:{type:Boolean,value:!1,reflectToAttribute:!0},min:{type:Number,reflectToAttribue:!0},max:{type:Number,reflectToAttribue:!0,observer:"_maxChanged"},step:{type:Number,reflectToAttribue:!0,value:1}}}static get observers(){return["_stepOrMinChanged(step, min)"]}ready(){super.ready();this.__previousValidInput=this.value||"";this.inputElement.type="number";this.inputElement.addEventListener("keydown",this.__onKeyDown.bind(this));this.inputElement.addEventListener("change",this.__onInputChange.bind(this))}_decreaseButtonTouchend(e){e.preventDefault();this._decreaseValue()}_increaseButtonTouchend(e){e.preventDefault();this._increaseValue()}static get template(){if(!memoizedTemplate$1){memoizedTemplate$1=super.template.cloneNode(!0);const thisTemplate=DomModule.import(this.is+"-template","template"),decreaseButton=thisTemplate.content.querySelector("[part=\"decrease-button\"]"),increaseButton=thisTemplate.content.querySelector("[part=\"increase-button\"]"),styles=thisTemplate.content.querySelector("style"),inputField=memoizedTemplate$1.content.querySelector("[part=\"input-field\"]"),prefixSlot=memoizedTemplate$1.content.querySelector("[name=\"prefix\"]");inputField.insertBefore(decreaseButton,prefixSlot);inputField.appendChild(increaseButton);memoizedTemplate$1.content.appendChild(styles)}return memoizedTemplate$1}_decreaseValue(){this._incrementValue(-1)}_increaseValue(){this._incrementValue(1)}_incrementValue(incr){if(this.disabled){return}let value=parseFloat(this.value);if(!this.value){if(0==this.min&&0>incr||0==this.max&&0<incr||0==this.max&&0==this.min){incr=0;value=0}else if((null==this.max||0<=this.max)&&(null==this.min||0>=this.min)){value=0}else if(0<this.min){value=this.min;if(0>this.max&&0>incr){value=this.max}incr=0}else if(0>this.max){value=this.max;if(0>incr){incr=0}else{if(this._getIncrement(1,value-this.step)>this.max){value-=2*this.step}else{value-=this.step}}}}else if(value<this.min){incr=0;value=this.min}else if(value>this.max){incr=0;value=this.max}const newValue=this._getIncrement(incr,value);if(!this.value||0==incr||this._incrementIsInsideTheLimits(incr,value)){this._setValue(newValue)}}_setValue(value){this.value=this.inputElement.value=parseFloat(value).toFixed(this.__decimals);this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}_getIncrement(incr,currentValue){let step=this.step||1,min=this.min||0;const multiplier=_Mathmax(this._getMultiplier(currentValue),this._getMultiplier(step),this._getMultiplier(min));step*=multiplier;currentValue*=multiplier;min*=multiplier;const margin=(currentValue-min)%step;if(0<incr){return(currentValue-margin+step)/multiplier}else if(0>incr){return(currentValue-(margin||step))/multiplier}else{return currentValue/multiplier}}_getMultiplier(number){if(!isNaN(number)){let multiplier=1;while(_Mathfloor(number*multiplier)!==number*multiplier){multiplier=10*multiplier}return multiplier}}_incrementIsInsideTheLimits(incr,value){if(0>incr){return null==this.min||this._getIncrement(incr,value)>=this.min}else if(0<incr){return null==this.max||this._getIncrement(incr,value)<=this.max}else{return this._getIncrement(incr,value)<=this.max&&this._getIncrement(incr,value)>=this.min}}_allowed(sign){const incr=sign*(this.step||1),value=parseFloat(this.value);return!this.value||!this.disabled&&this._incrementIsInsideTheLimits(incr,value)}_maxChanged(){this.inputElement.max=this.max}_valueChanged(newVal,oldVal){if(newVal&&isNaN(parseFloat(newVal).toFixed(this.__decimals))){this.value=""}else if("string"!==typeof this.value){this.value=this.value+""}super._valueChanged(this.value,oldVal)}__onKeyDown(e){if(38==e.keyCode){e.preventDefault();this._increaseValue()}else if(40==e.keyCode){e.preventDefault();this._decreaseValue()}}__onInputChange(){this.checkValidity()}_stepOrMinChanged(step,min){this.inputElement.step=step;this.inputElement.min=this.min;const countDecimalPlaces=number=>{return number?(_Mathabs(number)+"").replace(/^\d*\.?(.*)?$/,"$1").length:0};this.__decimals=_Mathmax(countDecimalPlaces(step),countDecimalPlaces(min))}checkValidity(){if(this.min!==void 0||this.max!==void 0||this.step){this.invalid=!this.inputElement.checkValidity()}return super.checkValidity()}}_exports.NumberFieldElement=NumberFieldElement;window.customElements.define(NumberFieldElement.is,NumberFieldElement);var vaadinNumberField={NumberFieldElement:NumberFieldElement};_exports.$vaadinNumberField=vaadinNumberField;const $_documentContainer$w=document.createElement("template");$_documentContainer$w.innerHTML=`<custom-style>
  <style>
    @font-face {
      font-family: 'vaadin-password-field-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAYMAAsAAAAABcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIFgGNtYXAAAAFoAAAAVAAAAFQXVtKIZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAfwAAAH8yBLEP2hlYWQAAAPAAAAANgAAADYN+RfTaGhlYQAAA/gAAAAkAAAAJAfCA8dobXR4AAAEHAAAABgAAAAYDgAAAGxvY2EAAAQ0AAAADgAAAA4BJgCSbWF4cAAABEQAAAAgAAAAIAAMAFpuYW1lAAAEZAAAAYYAAAGGmUoJ+3Bvc3QAAAXsAAAAIAAAACAAAwAAAAMDVQGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QEDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkB//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAwAAAHoEAALGABQAJABFAAABIg4CMTAeAjMyPgIxMC4CIwc+ATEwBhUUFjEHMCY1NDYTIi4CJz4BNw4BFRQeAjMyPgI1NCYnHgEXDgMjAgChyHAnN3rAiYjFfjsncMihrRg7IA1GExmnY5ZqQg8PWGAFCChGXTU1XUYoCAVgWA8RRW2ZZALGZnpmUmJSUGBQaHxoYA8FRSIhJQ0rIiYz/lQvQkYVInswEygYNV1GKChGXTUYKBMrgCIVRkIvAAAABQAA/8AEAAPAABoAJgA6AEcAVwAAAQceARcOAyMiJicHHgEzMj4CMTAuAicHNCYnATIWMzI+AhMBLgEjIg4CMTAeAhcHFTMBNQEuASc+ATcOARUUFhc3BzAmNTQ2MT4BMTAGFQYWAzo0UlMPEUVtmWQiNR0zJ1QsiMV+OxEsTTw6AgT+zA8dDjVdRijT/ucnXjWhyHAnGTNQN9MtA9P9AE1ZFA9YYAUILSY6QBMZGDsgBAsCczMrcyIWQ0AtCAQzDgtQYFAzS1ckeQ4bCv7TBihGXQH7/uYKEGZ6Zic5RBzNLQPTLf0tIVoYInswEygYNWMihgwrISc5DwVHJiIlAAEAAAAAAADkyo21Xw889QALBAAAAAAA1W1pqwAAAADVbWmrAAD/wAQAA8AAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAABAAAAQAAAAAAAAAAAAAAAAAAAAYEAAAAAAAAAAAAAAACAAAABAAAAAQAAAAAAAAAAAoAFAAeAH4A/gAAAAEAAAAGAFgABQAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAHAAAAAQAAAAAAAgAHAGAAAQAAAAAAAwAHADYAAQAAAAAABAAHAHUAAQAAAAAABQALABUAAQAAAAAABgAHAEsAAQAAAAAACgAaAIoAAwABBAkAAQAOAAcAAwABBAkAAgAOAGcAAwABBAkAAwAOAD0AAwABBAkABAAOAHwAAwABBAkABQAWACAAAwABBAkABgAOAFIAAwABBAkACgA0AKRpY29tb29uAGkAYwBvAG0AbwBvAG5WZXJzaW9uIDEuMABWAGUAcgBzAGkAbwBuACAAMQAuADBpY29tb29uAGkAYwBvAG0AbwBvAG5pY29tb29uAGkAYwBvAG0AbwBvAG5SZWd1bGFyAFIAZQBnAHUAbABhAHJpY29tb29uAGkAYwBvAG0AbwBvAG5Gb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
</custom-style><dom-module id="vaadin-password-field-template">
  <template>
    <style>
      /* Hide the native eye icon for IE/Edge */
      ::-ms-reveal {
        display: none;
      }

      [part="reveal-button"][hidden] {
        display: none !important;
      }
    </style>

    <div part="reveal-button" on-mousedown="_revealButtonMouseDown" on-touchend="_togglePasswordVisibilityTouchend" on-click="_togglePasswordVisibility" hidden\$="[[revealButtonHidden]]">
    </div>
  </template>
  
</dom-module>`;document.head.appendChild($_documentContainer$w.content);let memoizedTemplate$2;class PasswordFieldElement extends TextFieldElement{static get is(){return"vaadin-password-field"}static get version(){return"2.4.3"}static get properties(){return{revealButtonHidden:{type:Boolean,value:!1},passwordVisible:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_passwordVisibleChange",readOnly:!0}}}static get template(){if(!memoizedTemplate$2){memoizedTemplate$2=super.template.cloneNode(!0);const thisTemplate=DomModule.import(this.is+"-template","template"),revealButton=thisTemplate.content.querySelector("[part=\"reveal-button\"]"),styles=thisTemplate.content.querySelector("style"),inputField=memoizedTemplate$2.content.querySelector("[part=\"input-field\"]");inputField.appendChild(revealButton);memoizedTemplate$2.content.appendChild(styles)}return memoizedTemplate$2}ready(){super.ready();this.inputElement.type="password";this.inputElement.autocapitalize="off";this.addEventListener("focusout",()=>{if(!this._passwordVisibilityChanging){this._setPasswordVisible(!1);if(this._cachedChangeEvent){this._onChange(this._cachedChangeEvent)}}})}_onChange(e){const slotted=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);if(slotted){e.stopPropagation()}if(this._passwordVisibilityChanging){this._cachedChangeEvent=e}else{this._cachedChangeEvent=null;super._onChange(e)}}_revealButtonMouseDown(e){if(this.hasAttribute("focused")){e.preventDefault()}}_togglePasswordVisibilityTouchend(e){e.preventDefault();this._togglePasswordVisibility();this.inputElement.focus()}_togglePasswordVisibility(){this._passwordVisibilityChanging=!0;this.inputElement.blur();this._setPasswordVisible(!this.passwordVisible);this.inputElement.focus();this._passwordVisibilityChanging=!1}_passwordVisibleChange(passwordVisible){this.inputElement.type=passwordVisible?"text":"password"}}_exports.PasswordFieldElement=PasswordFieldElement;customElements.define(PasswordFieldElement.is,PasswordFieldElement);var vaadinPasswordField={PasswordFieldElement:PasswordFieldElement};_exports.$vaadinPasswordField=vaadinPasswordField;class TextAreaElement extends ElementMixin$1(TextFieldMixin(ThemableMixin(PolymerElement))){static get template(){return html`
    <style include="vaadin-text-field-shared-styles">
      .vaadin-text-area-container {
        flex: auto;
        max-height: inherit; /* MSIE 11 */
        min-height: inherit; /* MSIE 11 */
      }

      /* The label and the error message should neither grow nor shrink. */
      [part="label"],
      [part="error-message"] {
        flex: none;
      }

      [part="input-field"] {
        overflow: auto;
        -webkit-overflow-scrolling: touch;
      }

      [part="value"] {
        resize: none;
      }

      [part="value"],
      [part="input-field"] ::slotted(*) {
        align-self: flex-start;
      }

      @keyframes vaadin-text-area-appear {
        to {
          opacity: 1;
        }
      }

      :host {
        animation: 1ms vaadin-text-area-appear;
      }
    </style>

    <div class="vaadin-text-area-container">

      <label part="label" on-click="focus" id="[[_labelId]]">[[label]]</label>

      <div part="input-field">

        <slot name="prefix"></slot>

        <slot name="textarea">
          <textarea part="value"></textarea>
        </slot>

        <div part="clear-button" id="clearButton" role="button" aria-label\$="[[i18n.clear]]"></div>
        <slot name="suffix"></slot>

      </div>

      <div part="error-message" id="[[_errorId]]" aria-live="assertive" aria-hidden\$="[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]">[[errorMessage]]</div>

    </div>
`}static get is(){return"vaadin-text-area"}static get version(){return"2.4.3"}static get observers(){return["_textAreaValueChanged(value)"]}ready(){super.ready();this._updateHeight();this.addEventListener("animationend",this._onAnimationEnd)}_onAnimationEnd(e){if(0===e.animationName.indexOf("vaadin-text-area-appear")){this._updateHeight()}}get _slottedTagName(){return"textarea"}_textAreaValueChanged(value){this._updateHeight()}_updateHeight(){const inputField=this.root.querySelector("[part=input-field]"),scrollTop=inputField.scrollTop,input=this.inputElement,inputWidth=getComputedStyle(input).width,valueLength=this.value?this.value.length:0;if(this._oldValueLength>=valueLength){input.style.maxWidth=inputWidth;input.style.height="auto";inputField.style.display="block"}this._oldValueLength=valueLength;const inputHeight=input.scrollHeight;if(inputHeight>input.clientHeight){input.style.height=inputHeight+"px"}input.style.removeProperty("max-width");inputField.style.removeProperty("display");inputField.scrollTop=scrollTop;if(this.__previousInputHeight&&this.__previousInputHeight!==inputHeight){this.dispatchEvent(new CustomEvent("iron-resize",{bubbles:!0}))}this.__previousInputHeight=inputHeight}}_exports.TextAreaElement=TextAreaElement;customElements.define(TextAreaElement.is,TextAreaElement);var vaadinTextArea={TextAreaElement:TextAreaElement};_exports.$vaadinTextArea=vaadinTextArea;const $_documentContainer$x=html`<dom-module id="lumo-number-field" theme-for="vaadin-number-field">
  <template>
    <style include="lumo-field-button">
      :host {
        width: 8em;
      }

      :host([has-controls]) [part="value"] {
        text-align: center;
      }

      [part="decrease-button"][disabled],
      [part="increase-button"][disabled] {
        opacity: 0.2;
      }

      [part="decrease-button"],
      [part="increase-button"] {
        cursor: pointer;
        font-size: var(--lumo-icon-size-s);
        padding-bottom: 0.21em;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$x.content);const $_documentContainer$y=html`<dom-module id="lumo-password-field" theme-for="vaadin-password-field">
  <template>
    <style>
      [part="reveal-button"]::before {
        content: var(--lumo-icons-eye);
      }

      :host([password-visible]) [part="reveal-button"]::before {
        content: var(--lumo-icons-eye-disabled);
      }

      /* Make it easy to hide the button across the whole app */
      [part="reveal-button"] {
        display: var(--lumo-password-field-reveal-button-display, block);
      }

      /* FIXME: ShadyCSS workaround for slotted input in Edge */
      [part="input-field"] ::slotted(input)::-ms-reveal {
        display: none;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$y.content);const $_documentContainer$z=html`<dom-module id="lumo-text-area" theme-for="vaadin-text-area">
  <template>
    <style include="lumo-text-field">
      [part="input-field"],
      [part="input-field"] ::slotted(textarea) {
        /* Equal to the implicit padding in vaadin-text-field */
        padding-top: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);
        padding-bottom: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);
        height: auto;
        box-sizing: border-box;
        transition: background-color 0.1s;
        line-height: var(--lumo-line-height-s);
      }

      :host(:not([readonly])) [part="input-field"]::after {
        display: none;
      }

      :host(:hover:not([readonly]):not([focused])) [part="input-field"] {
        background-color: var(--lumo-contrast-20pct);
      }

      @media (pointer: coarse) {
        :host(:hover:not([readonly]):not([focused])) [part="input-field"] {
          background-color: var(--lumo-contrast-10pct);
        }

        :host(:active:not([readonly]):not([focused])) [part="input-field"] {
          background-color: var(--lumo-contrast-20pct);
        }
      }

      [part="value"],
      [part="input-field"] ::slotted(textarea) {
        line-height: inherit;
        --_lumo-text-field-overflow-mask-image: none;
      }

      /* Vertically align icon prefix/suffix with the first line of text */
      [part="input-field"] ::slotted(iron-icon) {
        margin-top: calc((var(--lumo-icon-size-m) - 1em * var(--lumo-line-height-s)) / -2);
      }

      [part="input-field"] [part="value"],
      [part="input-field"] ::slotted(textarea) {
        white-space: pre-wrap; /* override \`nowrap\` from <vaadin-text-field> */
        align-self: stretch; /* override \`baseline\` from <vaadin-text-field> */
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$z.content);const data={},subscribers={},EVENTS={SET:"set",SUBSCRIBE:"subscribe",UNSUBSCRIBE:"unsubscribe"},_notify=(event,detail,path="")=>{const pathSubscribers=subscribers[path]||[],wildCardSubscribers=subscribers["*"]||[];[...pathSubscribers,...wildCardSubscribers].forEach(subscriber=>{subscriber._onEvent(event,detail)})},_addSubscriber=(path,subscriber)=>{subscribers[path]=subscribers[path]||[];subscribers[path].push(subscriber)},_deleteSubscriber=(path,subscriber)=>{const index=subscribers[path].indexOf(subscriber);if(0<=index)subscribers[path].splice(index,1);if(0===subscribers[path].length)delete subscribers[path]},get$1=path=>data[path],set$1=(path,value)=>{if(data[path]===value){return}const{SET}=EVENTS;data[path]=value;_notify(SET,{path,value},path)},subscribe=(path,subscriber)=>{const{SUBSCRIBE}=EVENTS;_addSubscriber(path,subscriber);_notify(SUBSCRIBE,{path,element:subscriber})},unsubscribe=(path,subscriber)=>{if(!subscribers[path]){return}const{UNSUBSCRIBE}=EVENTS;_deleteSubscriber(path,subscriber);_notify(UNSUBSCRIBE,{path,element:subscriber})},isSubcribed=subscriber=>Object.entries(subscribers).reduce((acc,[path,subs])=>subs.contains(subscriber)?path:acc,!1);var globalData={EVENTS,get:get$1,set:set$1,subscribe,unsubscribe,isSubcribed};_exports.$globalDataDefault=globalData;var globalData$1={default:globalData};_exports.$globalData=globalData$1;class GlobalData extends PolymerElement{static get properties(){return{}}static get template(){return html`
      <style>
        :host {
          display: none;
        }
      </style>
    `}connectedCallback(){super.connectedCallback();globalData.subscribe("*",this)}disconnectedCallback(){super.disconnectedCallback();globalData.unsubscribe("*",this)}_onEvent(event,detail){this.dispatchEvent(new CustomEvent(event,{detail}))}set(path,value){globalData.set(path,value)}get(path){return globalData.get(path)}}customElements.define("global-data",GlobalData);class GlobalVariable extends PolymerElement{static get properties(){return{_notify:{type:Function,computed:"_notifyOrigin(key, readonly)"},key:{type:String,reflectToAttribute:!0,observer:"_subscribe"},value:{notify:!0,observer:"_notify"},readonly:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get template(){return html`
      <style>
        :host {
          display: none;
        }
      </style>
    `}disconnectedCallback(){super.disconnectedCallback();globalData.unsubscribe(this.key,this)}_notifyOrigin(key,readonly){return newValue=>{if(!readonly){globalData.set(key,newValue)}}}_subscribe(newKey,oldKey){if(newKey!=oldKey&&oldKey){globalData.unsubscribe(oldKey,this)}globalData.subscribe(newKey,this);this.set("value",globalData.get(newKey))}_onEvent(event,detail){const{SET}=globalData.EVENTS;if(event===SET){this._set(detail)}}_set(value){this.set("value",value.value)}}customElements.define("global-variable",GlobalVariable);const $_documentContainer$A=document.createElement("template");$_documentContainer$A.innerHTML=`<dom-module id="custom-css">
  <template>
    <style>

    :host {
      --app-primary-color: #2f274c;
      --app-second-color: #fff;
      --app-secondary-color: black;
      --app-bg-color-primary : #6861CE;
      --app-bg-color-secondary : #5C55BF;
      --app-content : #8d9498;
      display: block;
    }
    
    * {
      text-decoration: none;
    }
    app-drawer-layout:not([narrow]) [drawer-toggle] {
      display: none;
    }

    app-drawer {
    --app-drawer-scrim-background: rgba(0, 0, 100, 0.8);
    --app-drawer-content-container: {
      background-color: var( --app-second-color);
    }
    color : var(--app-content);
    -webkit-box-shadow: 4px 4px 10px rgba(69,65,78,.06);
    -moz-box-shadow: 4px 4px 10px rgba(69,65,78,.06);
    box-shadow: 4px 4px 10px rgba(69,65,78,.06);
   
  }

    app-header {
      color: var(--app-second-color);
      background-color: var(--app-bg-color-primary);
    }

    app-header paper-icon-button {
      --paper-icon-button-ink-color:  var(--app-primary-color);
    }

    .drawer-list {
      margin: 0 20px;
    }

    .drawer-list a {
      display: block;
      padding: 0 16px;
      text-decoration: none;
      color : var(--app-content);
      line-height: 40px;
    }

    .drawer-list a.iron-selected {
      color: white;
      font-weight: bold;
      background: #5C55BF;
      box-shadow: 4px 4px 10px 0 rgba(0,0,0,.1),4px 4px 15px -5px rgba(72,171,247,.4)!important;
      border-radius: 5px;
      width: 80%;
    }

    .tool-bar-menu .user-view {
      position: relative;
      padding: 20px 20px;
      width: 100%;
      padding-bottom : 5px;
    }

    .tool-bar-menu {
      overflow :hidden;
    }

    hr {
      background : #8d9498;
    }

   .tool-bar-menu .user-view  > div  {
        display : inline-block;
    }
    .tool-bar-menu .user-view  > .info  {
      position: absolute;
    top: 25px;
    margin-left: 15px;
    }
    .tool-bar-menu .user-view  > .info  > * {
      font-size: 14px;
      margin  : 0;
    }
    

    .tool-bar-menu .user-view .circle {
      height: 50px;
      width: 50px;
    }
    
    .white-text {
      color: #fff !important;
    }
    .circle {
      border-radius: 50%;
    }

    app-header-layout{
      background : #F3F6F9;
    }

    .tool-bar {
      background : var( --app-bg-color-secondary )
    }
    .tool-bar > div {
      color :white;
    }
    
    bmm-menu {
      margin-top: -30px;
    }

    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$A.content);const $_documentContainer$B=document.createElement("template");$_documentContainer$B.innerHTML=`<iron-iconset-svg name="my-icons" size="24">
  <svg>
    <defs>
      <g id="arrow-back">
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
      </g>
      <g id="menu">
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
      </g>
      <g id="chevron-right">
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
      </g>
      <g id="close">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
      </g>
    </defs>
  </svg>
</iron-iconset-svg>`;document.head.appendChild($_documentContainer$B.content);setPassiveTouchGestures(!0);setRootPath(MyAppGlobals.rootPath);class MyApp extends PolymerElement{static get template(){return html`
      <style include="custom-css"></style>

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>
    
      <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
        <bmm-login name="login"></bmm-login>
        <bmm-panel name="panel"></bmm-panel>
      </iron-pages>

    
    `}static get properties(){return{page:{type:String,reflectToAttribute:!0,observer:"_pageChanged"},routeData:Object,subroute:Object}}static get observers(){return["_routePageChanged(routeData.page)"]}_routePageChanged(page){if(!page){this.page="login"}else if(-1!==["panel","login"].indexOf(page)){this.page=page}else{this.page="view404"}}_pageChanged(page){switch(page){case"login":new Promise((res,rej)=>_require.default(["./login.js"],res,rej)).then(bundle=>bundle&&bundle.$login||{});break;case"panel":new Promise((res,rej)=>_require.default(["./panel.js"],res,rej)).then(bundle=>bundle&&bundle.$panel||{});break;}}}window.customElements.define("my-app",MyApp);const $_documentContainer$C=document.createElement("template");$_documentContainer$C.innerHTML=`<dom-module id="shared-styles">
  <template>
    <style>
      .card {
        margin: 24px;
        padding: 16px;
        color: #757575;
        border-radius: 5px;
        background-color: #fff;
        padding: 20px 40px;
        display: block;
        /* border: 1px solid green; */
        box-shadow: 0 0 1px rgba(0,0,0,.15);
    }
      
      }

      .circle {
        display: inline-block;
        width: 64px;
        height: 64px;
        text-align: center;
        color: #555;
        border-radius: 50%;
        background: #ddd;
        font-size: 30px;
        line-height: 64px;
      }

      h1 {
        margin: 16px 0;
        color: #212121;
        font-size: 22px;
      }

      @media all and (max-width: 600px) {
        .card {
          margin : 20px px;
        }
      }

    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$C.content)});