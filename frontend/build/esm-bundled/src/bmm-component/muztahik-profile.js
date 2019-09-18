import{PolymerElement,html as html$1,ThemableMixin,ElementMixin,html$1 as html,resetMouseCanceller}from"../my-app.js";const ProgressMixin=superClass=>class VaadinProgressMixin extends superClass{static get properties(){return{value:{type:Number,observer:"_valueChanged"},min:{type:Number,value:0,observer:"_minChanged"},max:{type:Number,value:1,observer:"_maxChanged"},indeterminate:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["_normalizedValueChanged(value, min, max)"]}ready(){super.ready();this.setAttribute("role","progressbar")}_normalizedValueChanged(value,min,max){const newNormalizedValue=this._normalizeValue(value,min,max);this.style.setProperty("--vaadin-progress-value",newNormalizedValue);this.updateStyles({"--vaadin-progress-value":newNormalizedValue+""})}_valueChanged(newV,oldV){this.setAttribute("aria-valuenow",newV)}_minChanged(newV,oldV){this.setAttribute("aria-valuemin",newV)}_maxChanged(newV,oldV){this.setAttribute("aria-valuemax",newV)}_normalizeValue(value,min,max){let nV;if(!value&&0!=value){nV=0}else if(min>=max){nV=1}else{nV=(value-min)/(max-min);nV=Math.min(Math.max(nV,0),1)}return nV}};var vaadinProgressMixin={ProgressMixin:ProgressMixin};class ProgressBarElement extends ElementMixin(ThemableMixin(ProgressMixin(PolymerElement))){static get template(){return html`
    <style>
      :host {
        display: block;
        width: 100%; /* prevent collapsing inside non-stretching column flex */
        height: 8px;
      }

      :host([hidden]) {
        display: none !important;
      }

      [part="bar"] {
        height: 100%;
      }

      [part="value"] {
        height: 100%;
        transform-origin: 0 50%;
        transform: scaleX(var(--vaadin-progress-value));
      }

    </style>

    <div part="bar">
      <div part="value"></div>
    </div>
`}static get is(){return"vaadin-progress-bar"}static get version(){return"1.1.0"}}customElements.define(ProgressBarElement.is,ProgressBarElement);var vaadinProgressBar={ProgressBarElement:ProgressBarElement};const $_documentContainer=document.createElement("template");$_documentContainer.innerHTML=`<custom-style>
  <style>
    @font-face {
      font-family: 'vaadin-upload-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,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) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
</custom-style>`;document.head.appendChild($_documentContainer.content);class UploadFileElement extends ThemableMixin(PolymerElement){static get template(){return html`
    <style>
      :host {
        display: block;
      }

      [hidden] {
        display: none;
      }
    </style>

    <div part="row">
      <div part="info">
        <div part="done-icon" hidden\$="[[!file.complete]]"></div>
        <div part="warning-icon" hidden\$="[[!file.error]]"></div>

        <div part="meta">
          <div part="name" id="name">[[file.name]]</div>
          <div part="status" hidden\$="[[!file.status]]" id="status">[[file.status]]</div>
          <div part="error" id="error" hidden\$="[[!file.error]]">[[file.error]]</div>
        </div>
      </div>
      <div part="commands">
        <div part="start-button" file-event="file-start" on-click="_fireFileEvent" hidden\$="[[!file.held]]"></div>
        <div part="retry-button" file-event="file-retry" on-click="_fireFileEvent" hidden\$="[[!file.error]]"></div>
        <div part="clear-button" file-event="file-abort" on-click="_fireFileEvent"></div>
      </div>
    </div>

    <vaadin-progress-bar part="progress" id="progress" value\$="[[_formatProgressValue(file.progress)]]" error\$="[[file.error]]" indeterminate\$="[[file.indeterminate]]" uploading\$="[[file.uploading]]" complete\$="[[file.complete]]">
    </vaadin-progress-bar>
`}static get is(){return"vaadin-upload-file"}static get properties(){return{file:Object}}static get observers(){return["_fileAborted(file.abort)","_toggleHostAttribute(file.error, \"error\")","_toggleHostAttribute(file.indeterminate, \"indeterminate\")","_toggleHostAttribute(file.uploading, \"uploading\")","_toggleHostAttribute(file.complete, \"complete\")"]}_fileAborted(abort){if(abort){this._remove()}}_remove(){this.dispatchEvent(new CustomEvent("file-remove",{detail:{file:this.file},bubbles:!0,composed:!0}))}_formatProgressValue(progress){return progress/100}_fireFileEvent(e){e.preventDefault();return this.dispatchEvent(new CustomEvent(e.target.getAttribute("file-event"),{detail:{file:this.file},bubbles:!0,composed:!0}))}_toggleHostAttribute(value,attributeName){const shouldHave=!!value,has=this.hasAttribute(attributeName);if(has!==shouldHave){if(shouldHave){this.setAttribute(attributeName,"")}else{this.removeAttribute(attributeName)}}}}customElements.define(UploadFileElement.is,UploadFileElement);var vaadinUploadFile={UploadFileElement:UploadFileElement};class UploadElement extends ElementMixin(ThemableMixin(PolymerElement)){static get template(){return html`
    <style>
      :host {
        display: block;
        position: relative;
      }

      :host([hidden]) {
        display: none !important;
      }

      [hidden] {
        display: none !important;
      }
    </style>

    <div part="primary-buttons">
      <div id="addFiles" on-touchend="_onAddFilesTouchEnd" on-click="_onAddFilesClick">
        <slot name="add-button">
          <vaadin-button part="upload-button" id="addButton" disabled="[[maxFilesReached]]">
            [[_i18nPlural(maxFiles, i18n.addFiles, i18n.addFiles.*)]]
          </vaadin-button>
        </slot>
      </div>
      <div part="drop-label" hidden\$="[[nodrop]]" id="dropLabelContainer">
        <slot name="drop-label-icon">
          <div part="drop-label-icon"></div>
        </slot>
        <slot name="drop-label" id="dropLabel">
          [[_i18nPlural(maxFiles, i18n.dropFiles, i18n.dropFiles.*)]]
        </slot>
      </div>
    </div>
    <slot name="file-list">
      <div id="fileList" part="file-list">
        <template is="dom-repeat" items="[[files]]" as="file">
          <vaadin-upload-file file="[[file]]"></vaadin-upload-file>
        </template>
      </div>
    </slot>
    <slot></slot>
    <input type="file" id="fileInput" on-change="_onFileInputChange" hidden="" accept\$="{{accept}}" multiple\$="[[_isMultiple(maxFiles)]]" capture\$="[[capture]]">
`}static get is(){return"vaadin-upload"}static get version(){return"4.2.1"}static get properties(){return{nodrop:{type:Boolean,reflectToAttribute:!0,value:function(){try{return!!document.createEvent("TouchEvent")}catch(e){return!1}}},target:{type:String,value:""},method:{type:String,value:"POST"},headers:{type:Object,value:{}},timeout:{type:Number,value:0},_dragover:{type:Boolean,value:!1,observer:"_dragoverChanged"},files:{type:Array,notify:!0,value:function(){return[]}},maxFiles:{type:Number,value:1/0},maxFilesReached:{type:Boolean,value:!1,notify:!0,readOnly:!0,computed:"_maxFilesAdded(maxFiles, files.length)"},accept:{type:String,value:""},maxFileSize:{type:Number,value:1/0},_dragoverValid:{type:Boolean,value:!1,observer:"_dragoverValidChanged"},formDataName:{type:String,value:"file"},noAuto:{type:Boolean,value:!1},withCredentials:{type:Boolean,value:!1},capture:String,i18n:{type:Object,value:function(){return{dropFiles:{one:"Drop file here",many:"Drop files here"},addFiles:{one:"Upload File...",many:"Upload Files..."},cancel:"Cancel",error:{tooManyFiles:"Too Many Files.",fileIsTooBig:"File is Too Big.",incorrectFileType:"Incorrect File Type."},uploading:{status:{connecting:"Connecting...",stalled:"Stalled.",processing:"Processing File...",held:"Queued"},remainingTime:{prefix:"remaining time: ",unknown:"unknown remaining time"},error:{serverUnavailable:"Server Unavailable",unexpectedServerError:"Unexpected Server Error",forbidden:"Forbidden"}},units:{size:["B","kB","MB","GB","TB","PB","EB","ZB","YB"]}}}}}}ready(){super.ready();this.addEventListener("dragover",this._onDragover.bind(this));this.addEventListener("dragleave",this._onDragleave.bind(this));this.addEventListener("drop",this._onDrop.bind(this));this.addEventListener("file-retry",this._onFileRetry.bind(this));this.addEventListener("file-abort",this._onFileAbort.bind(this));this.addEventListener("file-remove",this._onFileRemove.bind(this));this.addEventListener("file-start",this._onFileStart.bind(this))}_formatSize(bytes){var _Mathlog=Math.log;if("function"===typeof this.i18n.formatSize){return this.i18n.formatSize(bytes)}const base=this.i18n.units.sizeBase||1e3,unit=~~(_Mathlog(bytes)/_Mathlog(base)),dec=Math.max(0,Math.min(3,unit-1)),size=parseFloat((bytes/Math.pow(base,unit)).toFixed(dec));return size+" "+this.i18n.units.size[unit]}_splitTimeByUnits(time){const unitSizes=[60,60,24,1/0],timeValues=[0];for(var i=0;i<unitSizes.length&&0<time;i++){timeValues[i]=time%unitSizes[i];time=Math.floor(time/unitSizes[i])}return timeValues}_formatTime(seconds,split){if("function"===typeof this.i18n.formatTime){return this.i18n.formatTime(seconds,split)}while(3>split.length){split.push(0)}return split.reverse().map(number=>{return(10>number?"0":"")+number}).join(":")}_formatFileProgress(file){return file.totalStr+": "+file.progress+"% ("+(0<file.loaded?this.i18n.uploading.remainingTime.prefix+file.remainingStr:this.i18n.uploading.remainingTime.unknown)+")"}_maxFilesAdded(maxFiles,numFiles){return 0<=maxFiles&&numFiles>=maxFiles}_onDragover(event){event.preventDefault();if(!this.nodrop&&!this._dragover){this._dragoverValid=!this.maxFilesReached;this._dragover=!0}event.dataTransfer.dropEffect=!this._dragoverValid||this.nodrop?"none":"copy"}_onDragleave(event){event.preventDefault();if(this._dragover&&!this.nodrop){this._dragover=this._dragoverValid=!1}}_onDrop(event){if(!this.nodrop){event.preventDefault();this._dragover=this._dragoverValid=!1;this._addFiles(event.dataTransfer.files)}}_createXhr(){return new XMLHttpRequest}_configureXhr(xhr){if("string"==typeof this.headers){try{this.headers=JSON.parse(this.headers)}catch(e){this.headers=void 0}}for(var key in this.headers){xhr.setRequestHeader(key,this.headers[key])}if(this.timeout){xhr.timeout=this.timeout}xhr.withCredentials=this.withCredentials}_setStatus(file,total,loaded,elapsed){file.elapsed=elapsed;file.elapsedStr=this._formatTime(file.elapsed,this._splitTimeByUnits(file.elapsed));file.remaining=Math.ceil(elapsed*(total/loaded-1));file.remainingStr=this._formatTime(file.remaining,this._splitTimeByUnits(file.remaining));file.speed=~~(total/elapsed/1024);file.totalStr=this._formatSize(total);file.loadedStr=this._formatSize(loaded);file.status=this._formatFileProgress(file)}uploadFiles(files){files=files||this.files;files=files.filter(file=>!file.complete);Array.prototype.forEach.call(files,this._uploadFile.bind(this))}_uploadFile(file){if(file.uploading){return}const ini=Date.now(),xhr=file.xhr=this._createXhr(file);let stalledId,last;xhr.upload.onprogress=e=>{clearTimeout(stalledId);last=Date.now();const elapsed=(last-ini)/1e3,loaded=e.loaded,total=e.total,progress=~~(100*(loaded/total));file.loaded=loaded;file.progress=progress;file.indeterminate=0>=loaded||loaded>=total;if(file.error){file.indeterminate=file.status=void 0}else if(!file.abort){if(100>progress){this._setStatus(file,total,loaded,elapsed);stalledId=setTimeout(()=>{file.status=this.i18n.uploading.status.stalled;this._notifyFileChanges(file)},2e3)}else{file.loadedStr=file.totalStr;file.status=this.i18n.uploading.status.processing;file.uploading=!1}}this._notifyFileChanges(file);this.dispatchEvent(new CustomEvent("upload-progress",{detail:{file,xhr}}))};xhr.onreadystatechange=()=>{if(4==xhr.readyState){clearTimeout(stalledId);file.indeterminate=file.uploading=!1;if(file.abort){this._notifyFileChanges(file);return}file.status="";const evt=this.dispatchEvent(new CustomEvent("upload-response",{detail:{file,xhr},cancelable:!0}));if(!evt){return}if(0===xhr.status){file.error=this.i18n.uploading.error.serverUnavailable}else if(500<=xhr.status){file.error=this.i18n.uploading.error.unexpectedServerError}else if(400<=xhr.status){file.error=this.i18n.uploading.error.forbidden}file.complete=!file.error;this.dispatchEvent(new CustomEvent(`upload-${file.error?"error":"success"}`,{detail:{file,xhr}}));this._notifyFileChanges(file)}};const formData=new FormData;file.uploadTarget=this.target||"";file.formDataName=this.formDataName;const evt=this.dispatchEvent(new CustomEvent("upload-before",{detail:{file,xhr},cancelable:!0}));if(!evt){return}formData.append(file.formDataName,file,file.name);xhr.open(this.method,file.uploadTarget,!0);this._configureXhr(xhr);file.status=this.i18n.uploading.status.connecting;file.uploading=file.indeterminate=!0;file.complete=file.abort=file.error=file.held=!1;xhr.upload.onloadstart=()=>{this.dispatchEvent(new CustomEvent("upload-start",{detail:{file,xhr}}));this._notifyFileChanges(file)};const uploadEvt=this.dispatchEvent(new CustomEvent("upload-request",{detail:{file,xhr,formData},cancelable:!0}));if(uploadEvt){xhr.send(formData)}}_retryFileUpload(file){const evt=this.dispatchEvent(new CustomEvent("upload-retry",{detail:{file,xhr:file.xhr},cancelable:!0}));if(evt){this._uploadFile(file)}}_abortFileUpload(file){const evt=this.dispatchEvent(new CustomEvent("upload-abort",{detail:{file,xhr:file.xhr},cancelable:!0}));if(evt){file.abort=!0;if(file.xhr){file.xhr.abort()}this._notifyFileChanges(file)}}_notifyFileChanges(file){var p="files."+this.files.indexOf(file)+".";for(var i in file){if(file.hasOwnProperty(i)){this.notifyPath(p+i,file[i])}}}_addFiles(files){Array.prototype.forEach.call(files,this._addFile.bind(this))}_addFile(file){if(this.maxFilesReached){this.dispatchEvent(new CustomEvent("file-reject",{detail:{file,error:this.i18n.error.tooManyFiles}}));return}if(0<=this.maxFileSize&&file.size>this.maxFileSize){this.dispatchEvent(new CustomEvent("file-reject",{detail:{file,error:this.i18n.error.fileIsTooBig}}));return}const fileExt=file.name.match(/\.[^\.]*$|$/)[0],re=new RegExp("^("+this.accept.replace(/[, ]+/g,"|").replace(/\/\*/g,"/.*")+")$","i");if(this.accept&&!(re.test(file.type)||re.test(fileExt))){this.dispatchEvent(new CustomEvent("file-reject",{detail:{file,error:this.i18n.error.incorrectFileType}}));return}file.loaded=0;file.held=!0;file.status=this.i18n.uploading.status.held;this.unshift("files",file);if(!this.noAuto){this._uploadFile(file)}}_removeFile(file){if(-1<this.files.indexOf(file)){this.splice("files",this.files.indexOf(file),1)}}_onAddFilesTouchEnd(e){e.preventDefault();this.__resetMouseCanceller();this._onAddFilesClick()}__resetMouseCanceller(){resetMouseCanceller()}_onAddFilesClick(){if(this.maxFilesReached){return}this.$.fileInput.value="";this.$.fileInput.click()}_onFileInputChange(event){this._addFiles(event.target.files)}_onFileStart(event){this._uploadFile(event.detail.file)}_onFileRetry(event){this._retryFileUpload(event.detail.file)}_onFileAbort(event){this._abortFileUpload(event.detail.file)}_onFileRemove(event){event.stopPropagation();this._removeFile(event.detail.file)}_dragoverChanged(dragover){dragover?this.setAttribute("dragover",dragover):this.removeAttribute("dragover")}_dragoverValidChanged(dragoverValid){dragoverValid?this.setAttribute("dragover-valid",dragoverValid):this.removeAttribute("dragover-valid")}_i18nPlural(value,plural){return 1==value?plural.one:plural.many}_isMultiple(){return 1!=this.maxFiles}}customElements.define(UploadElement.is,UploadElement);var vaadinUpload={UploadElement:UploadElement};const $_documentContainer$1=document.createElement("template");$_documentContainer$1.innerHTML=`<dom-module id="lumo-progress-bar" theme-for="vaadin-progress-bar">
  <template>
    <style>
      :host {
        height: calc(var(--lumo-size-l) / 10);
        margin: var(--lumo-space-s) 0;
      }

      [part="bar"] {
        border-radius: var(--lumo-border-radius);
        background-color: var(--lumo-contrast-10pct);
      }

      [part="value"] {
        border-radius: var(--lumo-border-radius);
        background-color: var(--lumo-primary-color);
        /* Use width instead of transform to preserve border radius */
        transform: none;
        width: calc(var(--vaadin-progress-value) * 100%);
        will-change: width;
        transition: 0.1s width linear;
      }

      /* Indeterminate mode */

      :host([indeterminate]) [part="value"] {
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to right, var(--lumo-primary-color-10pct) 10%, var(--lumo-primary-color));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to left, var(--lumo-primary-color-10pct) 10%, var(--lumo-primary-color));
        width: 100%;
        background-color: transparent !important;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background);
        opacity: 0.75;
        will-change: transform;
        animation: vaadin-progress-slide 1.6s infinite cubic-bezier(.645, .045, .355, 1), vaadin-progress-scale 1.6s infinite cubic-bezier(.645, .045, .355, 1);
      }

      @keyframes vaadin-progress-slide {
        0% {
          transform-origin: 0% 0%;
        }

        50% {
          transform-origin: 100% 0%;
          background-image: var(--lumo-progress-indeterminate-progress-bar-background);
        }

        50.1% {
          transform-origin: 100% 0%;
          background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
        }

        100% {
          transform-origin: 0% 0%;
          background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
        }
      }

      @keyframes vaadin-progress-scale {
        0% { transform: scaleX(0.015); }
        25% { transform: scaleX(0.4); }
        50% { transform: scaleX(0.015); }
        50.1% { transform: scaleX(0.015); }
        75% { transform: scaleX(0.4); }
        100% { transform: scaleX(0.015); }
      }

      :host(:not([aria-valuenow])) [part="value"]::before,
      :host([indeterminate]) [part="value"]::before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        background-color: var(--lumo-primary-color);
        will-change: opacity;
        animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(.645, .045, .355, 1);
      }

      @keyframes vaadin-progress-pulse3 {
        0% { opacity: 1; }
        10% { opacity: 0; }
        40% { opacity: 0; }
        50% { opacity: 1; }
        50.1% { opacity: 1; }
        60% { opacity: 0; }
        90% { opacity: 0; }
        100% { opacity: 1; }
      }

      /* Contrast color */

      :host([theme~="contrast"]) [part="value"],
      :host([theme~="contrast"]) [part="value"]::before {
        background-color: var(--lumo-contrast-80pct);
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to right, var(--lumo-contrast-5pct) 10%, var(--lumo-contrast-80pct));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to left, var(--lumo-contrast-5pct) 10%, var(--lumo-contrast-60pct));
      }

      /* Error color */

      :host([theme~="error"]) [part="value"],
      :host([theme~="error"]) [part="value"]::before {
        background-color: var(--lumo-error-color);
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to right, var(--lumo-error-color-10pct) 10%, var(--lumo-error-color));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to left, var(--lumo-error-color-10pct) 10%, var(--lumo-error-color));
      }

      /* Primary color */

      :host([theme~="success"]) [part="value"],
      :host([theme~="success"]) [part="value"]::before {
        background-color: var(--lumo-success-color);
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to right, var(--lumo-success-color-10pct) 10%, var(--lumo-success-color));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to left, var(--lumo-success-color-10pct) 10%, var(--lumo-success-color));
      }
    </style>
  </template>
</dom-module><custom-style>
  <style>
    @keyframes vaadin-progress-pulse3 {
      0% { opacity: 1; }
      10% { opacity: 0; }
      40% { opacity: 0; }
      50% { opacity: 1; }
      50.1% { opacity: 1; }
      60% { opacity: 0; }
      90% { opacity: 0; }
      100% { opacity: 1; }
    }
  </style>
</custom-style>`;document.head.appendChild($_documentContainer$1.content);const $_documentContainer$2=document.createElement("template");$_documentContainer$2.innerHTML=`<dom-module id="lumo-upload" theme-for="vaadin-upload">
  <template>
    <style>
      :host {
        line-height: var(--lumo-line-height-m);
      }

      :host(:not([nodrop])) {
        overflow: hidden;
        border: 1px dashed var(--lumo-contrast-20pct);
        border-radius: var(--lumo-border-radius);
        padding: var(--lumo-space-m);
        transition: background-color 0.6s, border-color 0.6s;
      }

      [part="primary-buttons"] > * {
        display: inline-block;
        white-space: nowrap;
      }

      [part="drop-label"] {
        display: inline-block;
        white-space: normal;
        padding: 0 var(--lumo-space-s);
        color: var(--lumo-secondary-text-color);
        font-family: var(--lumo-font-family);
      }

      :host([dragover-valid]) {
        border-color: var(--lumo-primary-color-50pct);
        background: var(--lumo-primary-color-10pct);
        transition: background-color 0.1s, border-color 0.1s;
      }

      :host([dragover-valid]) [part="drop-label"] {
        color: var(--lumo-primary-text-color);
      }

      [part="drop-label-icon"] {
        display: inline-block;
      }

      [part="drop-label-icon"]::before {
        content: var(--lumo-icons-upload);
        font-family: lumo-icons;
        font-size: var(--lumo-icon-size-m);
        line-height: 1;
        vertical-align: -.25em;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-upload-file" theme-for="vaadin-upload-file">
  <template>
    <style include="lumo-field-button">
      :host {
        padding: var(--lumo-space-s) 0;
      }

      :host(:not(:first-child)) {
        border-top: 1px solid var(--lumo-contrast-10pct);
      }

      [part="row"] {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
      }

      [part="status"],
      [part="error"] {
        color: var(--lumo-secondary-text-color);
        font-size: var(--lumo-font-size-s);
      }

      [part="info"] {
        display: flex;
        align-items: baseline;
        flex: auto;
      }

      [part="meta"] {
        width: 0.001px;
        flex: 1 1 auto;
      }

      [part="name"] {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      [part="commands"] {
        display: flex;
        align-items: baseline;
        flex: none;
      }

      [part="done-icon"],
      [part="warning-icon"] {
        margin-right: var(--lumo-space-xs);
      }

      /* When both icons are hidden, let us keep space for one */
      [part="done-icon"][hidden] + [part="warning-icon"][hidden] {
        display: block !important;
        visibility: hidden;
      }

      [part="done-icon"],
      [part="warning-icon"] {
        font-size: var(--lumo-icon-size-m);
        font-family: 'lumo-icons';
        line-height: 1;
      }

      [part="start-button"],
      [part="retry-button"],
      [part="clear-button"] {
        flex: none;
        margin-left: var(--lumo-space-xs);
      }

      [part="done-icon"]::before,
      [part="warning-icon"]::before,
      [part="start-button"]::before,
      [part="retry-button"]::before,
      [part="clear-button"]::before {
        vertical-align: -.25em;
      }

      [part="done-icon"]::before {
        content: var(--lumo-icons-checkmark);
        color: var(--lumo-primary-text-color);
      }

      [part="warning-icon"]::before {
        content: var(--lumo-icons-error);
        color: var(--lumo-error-text-color);
      }

      [part="start-button"]::before {
        content: var(--lumo-icons-play);
      }

      [part="retry-button"]::before {
        content: var(--lumo-icons-reload);
      }

      [part="clear-button"]::before {
        content: var(--lumo-icons-cross);
      }

      [part="error"] {
        color: var(--lumo-error-text-color);
      }

      [part="progress"] {
        width: auto;
        margin-left: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
        margin-right: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
      }

      [part="progress"][complete],
      [part="progress"][error] {
        display: none;
      }

    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$2.content);import("./proposal.js").then(bundle=>bundle&&bundle.$proposal||{});class MuztahikProfile extends PolymerElement{static get template(){return html$1`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }

        .container {
          display: -webkit-box;
          display: -moz-box;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -webkit-flex-flow: row wrap;
          flex-flow: row wrap;
          text-align: center;
          margin : 10px 23px;
        }

        .container > * , .main > * {
          padding: 10px;
          flex-grow: 1;
          flex-basis: 100%;
          text-align: left;

        }

        .aside-1 {
          display :flex;
          text-align : center;
            flex-direction: column;
        }

        @media all and (min-width: 600px) {
          .aside {
            flex-grow: 1;
            flex-basis: 0;
          }
        }

        @media all and (max-width: 700px){
          .main {
            padding: 0px;
            margin-left: -10px;
          }
          table {
            margin-top : 30px;
          }
        }

        @media all and (min-width: 800px) {
          .main {
            flex-grow: 3;
            flex-basis: 0;
            display :flex;
          }

          .aside-1 {
            order: 1;
          }

          .main {
            order: 2;
          }

        }
        body {
          padding: 2em;
        }
        table { 
          border-collapse: collapse;
          border: 1px solid #ddd;
          text-align: left;
          width :100%;
        }

        table > tbody > tr > td{
          width : 50%;
          padding : 8px;
        }

        tr:nth-child(even) {background-color: #f2f2f2;}
        
        .aside-1 > img  {
          border-radius: 50%;
          width: 150px;
          height: 150px;
          display: block;
          margin-left: auto;
          margin-right: auto;
        }

      </style>
        <!-- app-location binds to the app's URL -->
        <app-location route="{{route}}"></app-location>
        
        <!-- this app-route manages the top-level routes -->
        <app-route
            route="{{route}}"
            pattern="/panel/muztahik/profile-muztahik/:id"
            data="{{routeData}}"
            tail="{{subroute}}"></app-route>

        <iron-ajax 
          auto
          id="getData"
          headers='{"Access-Control-Allow-Origin": "*" }'
          handle-as="json"
          method="GET"
          on-response="_handleMuztahik"
          on-error="_handleMuztahikError"
          Content-Type="application/json"
          debounce-duration="300">
          <global-variable key="LoginCred" value="{{ storedUser }}"></global-variable>
          <global-variable key="error" value="{{ error }}"></global-variable>
      </iron-ajax>
      <div class="card">
        <div class="container">
            <header>
              <h2> {{regObj.nama}}</h2>
            </header>
            <aside class="aside aside-1">
                <img src="/images/no_photo.png" alt="photo muztahik" id="img" class="img-rounded">
                <vaadin-upload id="uploadPhoto" capture="camera" accept="image/*" nodrop ></vaadin-upload>                  
            </aside>
            <section class="main">
              <table class="aside">
                  <tr>
                    <td>ID</td>
                    <td> {{regObj._id}} </td>
                  </tr>
                  <tr>
                    <td>NIK</td>
                    <td>{{regObj.nik}}</td>
                  </tr>
                  <tr>
                    <td>Telpon</td>
                    <td>{{regObj.nohp}}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>{{regObj.email}}</td>
                  </tr>
              </table>
              <table  class="aside">
                  <tr>
                    <td>Kecamatan</td>
                    <td>{{regObj.kecamatan}}</td>
                  </tr>
                  <tr>
                    <td>Kota</td>
                    <td>{{regObj.kabkot}}</td>
                  </tr>
                  <tr>
                    <td>Provinsi</td>
                    <td>{{regObj.provinsi}}</td>
                  </tr>
                  <tr>
                    <td colspan="2">{{regObj.alamat}}</td>
                  
                  </tr>
              </table>
            </section>
        </div>
        <iron-pages selected="{{muzId}}" attr-for-selected="muz-id" selected-attribute="activated" id="pages">
           <bmm-proposal muz-id="{{muzId}}" id="proposal"></bmm-proposal>
        </iron-pages>

      </div>
    `}static get properties(){return{muzId:{type:String,notify:!0},regObj:{type:Object,notify:!0,value:function(){return{}}}}}static get observers(){return["_routePageChanged(route.*)"]}_routePageChanged(page){this.muzId=this.routeData.id;this.$.getData.url=MyAppGlobals.apiPath+"/api/muztahik/"+this.routeData.id;this.$.getData.headers.authorization=this.storedUser.access_token;var upload=this.$.uploadPhoto,that=this;upload.addEventListener("upload-before",function(event){var file=event.detail.file;file.uploadTarget=MyAppGlobals.apiPath+"/api/upload?muztahik_id="+that.muzId;file.formDataName="attachment"});upload.addEventListener("upload-request",function(event){event.detail.xhr.setRequestHeader("X-File-Name",event.detail.file.name);event.detail.xhr.setRequestHeader("authorization",that.storedUser.access_token);event.detail.formData.append("documentId",1234)});upload.addEventListener("upload-start",function(event){});upload.addEventListener("upload-response",function(event){var data=JSON.parse(event.detail.xhr.response);if(200==event.detail.xhr.status){that.$.img.src=MyAppGlobals.apiPath+"/"+data.data}else{event.detail.file.error=data.data}})}_handleMuztahik(e){this.regObj=e.detail.response.data;if("undefined"!==typeof this.regObj.photo){this.$.img.src=MyAppGlobals.apiPath+"/"+this.regObj.photo}else{this.$.img.src="/images/no_photo.png"}}_handleMuztahikError(e){this.error=e.detail.request.xhr.status;this.set("route.path","/panel/muztahik")}}window.customElements.define("bmm-muztahik-profile",MuztahikProfile);export{vaadinUploadFile as $vaadinUploadFile,vaadinUpload as $vaadinUpload,vaadinProgressBar as $vaadinProgressBar,vaadinProgressMixin as $vaadinProgressMixin,UploadFileElement,UploadElement,ProgressBarElement,ProgressMixin};