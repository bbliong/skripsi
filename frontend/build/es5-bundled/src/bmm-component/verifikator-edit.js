define(["exports","../my-app.js"],function(_exports,_myApp){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.CheckboxGroupElement=_exports.$vaadinCheckboxGroup=void 0;function _templateObject3_89cec870da2b11e9886ab5694315db4a(){var data=babelHelpers.taggedTemplateLiteral(["\n        <style include=\"shared-styles\">\n            :host {\n            display: block;\n\n            padding: 10px;\n            }\n\n            .wrap {\n            width:100%;\n            }\n            .paper-toast-open{\n            left: 250px !important;\n            }\n\n            .verif {\n                width : 24%;\n            }\n\n            paper-button {\n              margin-left: 25px;\n            }\n            \n            @media(max-width : 800px){\n                .verif {\n                    width : 100%;\n                }\n            }\n\n               paper-button.green {\n          background-color: var(--paper-green-500);\n          color: white;\n        }\n        \n        paper-button.green[active] {\n          background-color: var(--paper-red-500);\n        }\n\n        paper-button.blue {\n          background-color: var(--paper-blue-500);\n          color: white;\n        }\n        \n        paper-button.blue[active] {\n          background-color: var(--paper-blue-500);\n        }\n        \n        paper-button.blue, paper-button.green {\n            width : 97%;\n        }\n\n\n        @media all and (max-width: 600px) {\n          paper-button, paper-button.blue, paper-button.green {\n            width : 90%;\n          }\n        }\n        </style>\n                \n      <vaadin-dialog aria-label=\"polymer templates\" id=\"dialog_verifikasi\">\n        <template>\n        <h4>Ingin mencetak Form Verifikasi?</h4>\n          <vaadin-button on-click=\"cetak\"> Cetak</vaadin-button>\n          <vaadin-button on-click=\"cancel\"  theme=\"error primary\"> Tidak</vaadin-button>\n        </template>\n      </vaadin-dialog>\n\n            <!-- app-location binds to the app's URL -->\n            <app-location route=\"{{route}}\"></app-location>\n\n            <!-- this app-route manages the top-level routes -->\n            <app-route\n                route=\"{{route}}\"\n                pattern=\"/panel/proposal/edit-verifikator/:kat/:id\"\n                data=\"{{routeData}}\"\n                tail=\"{{subroute}}\"></app-route>\n\n        <global-variable key=\"LoginCred\" value=\"{{ storedUser }}\"></global-variable>\n        <global-variable key=\"error\" value=\"{{ error }}\"></global-variable>\n        <global-data id=\"globalData\"></global-data>\n        <div class=\"card\">\n        <h1> Form Verifikasi Proposal</h1>\n        <h3 style=\"color:red\"> *Data ini tidak dapat diubah, silahkan diubah dari table muztahik </h3>\n        <vaadin-form-layout>\n            <vaadin-text-field label=\"Nama\" value=\"{{regObj.muztahiks.nama}}\" disabled></vaadin-text-field>\n            <vaadin-text-field label=\"Nik\" value=\"{{regObj.muztahiks.nik}}\" disabled></vaadin-text-field>\n            <vaadin-text-field label=\"No Handphone\" value=\"{{regObj.muztahiks.nohp}}\" disabled></vaadin-text-field>\n            <vaadin-text-field label=\"Email\" value=\"{{regObj.muztahiks.email}}\" disabled></vaadin-text-field>\n        </vaadin-form-layout>\n\n        <vaadin-form-layout>\n            <vaadin-text-area label=\"Alamat\"  colspan=\"2\" value=\"{{regObj.muztahiks.alamat}}\" disabled></vaadin-text-area>\n            <vaadin-text-field label=\"Kecamatan\" value=\"{{regObj.muztahiks.kecamatan}}\" disabled></vaadin-text-field>\n            <vaadin-text-field label=\"Kabupate/Kota\" value=\"{{regObj.muztahiks.kabkot}}\" disabled></vaadin-text-field>\n            <vaadin-text-field label=\"Provinsi\" value=\"{{regObj.muztahiks.provinsi}}\" disabled></vaadin-text-field>\n            </vaadin-form-layout>\n        </div>\n        <div class=\"card\">\n            <div class=\"wrap\">\n                <vaadin-form-layout>\n                    <vaadin-date-picker label=\"Tanggal Verifikasi\" placeholder=\"Pilih tanggal\" id=\"tanggal_verifikasi\" value=\"[[regObj.verifikasi.tanggal_verifikasi]]\"  colspan=\"2\"></vaadin-date-picker>\n                    <vaadin-text-field label=\"Nama Pelaksana\" value=\"{{regObj.verifikasi.nama_pelaksana}}\" ></vaadin-text-field>\n                    <vaadin-text-field label=\"Jabatan Pelaksana\" value=\"{{regObj.verifikasi.jabatan_pelaksana}}\" ></vaadin-text-field>\n                    <vaadin-text-field label=\"Judul Proposal\" value=\"{{regObj.judul_proposal}}\"  disabled ></vaadin-text-field>\n                    <vaadin-text-field label=\"Bentuk Bantuan\" value=\"{{regObj.verifikasi.bentuk_bantuan}}\" ></vaadin-text-field>\n                    <vaadin-text-field label=\"Jumlah Bantuan\" value=\"{{regObj.kategoris.jumlah_bantuan}}\" ></vaadin-text-field>\n                    <vaadin-checkbox-group id=\"checkgroup\" label=\"Cara verifikasi\">\n                        <vaadin-checkbox value=\"1\">Wawancara</vaadin-checkbox>\n                        <vaadin-checkbox value=\"2\">Media/Berita</vaadin-checkbox>\n                    </vaadin-checkbox-group>\n                </vaadin-form-layout>         \n            </div>\n        </div>\n        <dom-repeat items=\"{{pihakPenerima}}\" id=\"penerima\">\n            <template>\n                    <div class=\"card\">\n                        <div class=\"wrap\">\n                        <div class=\"head\">\n                        <h3 style=\"display:inline-block\"> Penerima Manfaat  [[displayIndex(index)]] </h3>\n                        <paper-icon-button icon=\"remove\" id=\"{{index}}\" on-click=\"_removePenerima\">   </paper-icon-button>\n                        </div>\n\n                        <vaadin-text-field label=\"Nama\" value=\"{{item.nama}}\" class=\"penerima\"></vaadin-text-field>\n                        <vaadin-text-field label=\"Usia\" value=\"{{item.usia}}\" class=\"penerima\"></vaadin-text-field>\n                        <vaadin-text-field label=\"Tanggungan\" value=\"{{item.tanggungan}}\" class=\"penerima\"></vaadin-text-field>\n                        <vaadin-text-field label=\"Alamat\" value=\"{{item.alamat}}\" class=\"penerima\"></vaadin-text-field>\n                        <vaadin-text-field label=\"Telepon\" value=\"{{item.telepon}}\" class=\"penerima\"></vaadin-text-field>\n                    </template>           \n                    </div>\n                </div>\n        </dom-repeat> \n        <paper-button  raised class=\"indigo\" on-click=\"_addPenerima\" id=\"addPenerima\">Tambah Penerima </paper-button>\n        <dom-repeat items=\"{{pihakKonfirmasi}}\" id=\"konfirmasi\">\n            <template>\n                    <div class=\"card\">\n                        <div class=\"wrap\">\n                        <div class=\"head\">\n                        <h3 style=\"display:inline-block\"> Pihak Diverfikasi / Dikonfirmasi  [[displayIndex(index)]] </h3>\n                        <paper-icon-button icon=\"remove\" id=\"{{index}}\" on-click=\"_removeKonfirmasi\">   </paper-icon-button>\n                        </div>\n\n                        <vaadin-text-field label=\"Nama\" value=\"{{item.nama}}\" class=\"verif\"></vaadin-text-field>\n                        <vaadin-text-field label=\"Lembaga\" value=\"{{item.lembaga}}\" class=\"verif\"></vaadin-text-field>\n                        <vaadin-text-field label=\"Jabatan\" value=\"{{item.jabatan}}\" class=\"verif\"></vaadin-text-field>\n                        <vaadin-text-field label=\"Telepon\" value=\"{{item.telepon}}\" class=\"verif\"></vaadin-text-field>\n                       \n                        <h3> Hasil Verifikasi  / Konfirmasi <paper-icon-button icon =\"add\" class=\"green\" id=\"[[index]]\" on-click=\"_addHasil\">Add</paper-icon-button>\n                        </h3>\n                        <vaadin-form-layout> \n                        <dom-repeat items=\"{{item.hasil}}\" id=\"[[displayName(index)]]\">\n                            <template>\n                                <vaadin-text-field value=\"{{item}}\" colspan=\"2\" label=\"Hasil  [[displayIndex(index)]] \"></vaadin-text-field >\n                            </template>\n                        </dom-repeat>\n                        </vaadin-form-layout> \n                    </template>           \n                    </div>\n                </div>\n        </dom-repeat> \n        <paper-button  raised class=\"indigo\" on-click=\"_addKonfirmasi\" id=\"addKonfirmasi\">Tambah Pihak </paper-button>\n       \n        <div class=\"card\">\n            <div class=\"wrap\">\n                <h3> Hasil Verifikasi </h3>\n                <vaadin-form-layout>\n                <vaadin-select label=\"Asnaf\" value=\"{{regObj.kategoris.asnaf}}\">\n                    <template>\n                    <vaadin-list-box>\n                        <vaadin-item value=\"Fakir\">Fakir</vaadin-item>\n                        <vaadin-item value=\"Miskin\">Miskin</vaadin-item>\n                        <vaadin-item value=\"Amil\">Amil</vaadin-item>\n                        <vaadin-item value=\"Mu'allaf\">Mu'allaf</vaadin-item>\n                        <vaadin-item value=\"Gharimin\">Gharimin</vaadin-item>\n                        <vaadin-item value=\"Fisabilillah\">Fisabilillah</vaadin-item>\n                        <vaadin-item value=\"Ibnus Sabil\">Ibnus Sabil</vaadin-item>\n                    </vaadin-list-box>\n                    </template>\n                </vaadin-select>\n                    <vaadin-select label=\"Kelengkapan dan Administrasi\" value=\"{{regObj.verifikasi.hasil_verifikasi.kelengkapan_adm}}\">\n                        <template>\n                        <vaadin-list-box>\n                            <vaadin-item value=\"Lengkap\">Lengkap</vaadin-item>\n                            <vaadin-item value=\"Tidak\">Tidak</vaadin-item>\n                        </vaadin-list-box>\n                        </template>\n                    </vaadin-select>\n                    <vaadin-select label=\"Direkomendasikan\" value=\"{{regObj.verifikasi.hasil_verifikasi.direkomendasikan}}\">\n                        <template>\n                        <vaadin-list-box>\n                            <vaadin-item value=\"Ya\">Ya</vaadin-item>\n                            <vaadin-item value=\"Tidak\">Tidak</vaadin-item>\n                        </vaadin-list-box>\n                        </template>\n                    </vaadin-select>\n                    <vaadin-select label=\"Dokumentasi\" value=\"{{regObj.verifikasi.hasil_verifikasi.dokumentasi}}\">\n                        <template>\n                        <vaadin-list-box>\n                            <vaadin-item value=\"Ada\">Ada</vaadin-item>\n                            <vaadin-item value=\"Tidak\">Tidak</vaadin-item>\n                        </vaadin-list-box>\n                        </template>\n                    </vaadin-select>\n                </vaadin-form-layout>\n            </div>\n        </div>\n     <paper-button  raised class=\"blue\" on-click=\"sendData\" id=\"Verifikasi\">Simpan Verifikasi</paper-button>\n     <paper-button  raised class=\"green\" on-click=\"sendData\" id=\"Verifikasi_manager\">Mengetahui Hasil Verifikasi</paper-button>\n      <iron-ajax \n          id=\"postData\"\n          headers='{\"Access-Control-Allow-Origin\": \"*\" }'\n          handle-as=\"json\"\n          method=\"PUT\"\n          on-response=\"_handleProposalPost\"\n          on-error=\"_handleProposalPostError\"\n          Content-Type=\"application/json\"\n          debounce-duration=\"300\">\n      </iron-ajax>\n\n      <iron-ajax \n          id=\"printData\"\n          headers='{\"Access-Control-Allow-Origin\": \"*\" }'\n          method=\"GET\"\n          handle-as=\"json\"\n          method=\"GET\"\n          on-response=\"_handleVerif\"\n          on-error=\"_handleVerifError\"\n          Content-Type=\"application/json\"\n          debounce-duration=\"300\">\n      </iron-ajax>\n\n      <iron-ajax \n          auto\n          id=\"getData\"\n          headers='{\"Access-Control-Allow-Origin\": \"*\" }'\n          handle-as=\"json\"\n          method=\"GET\"\n          on-response=\"_handleProposal\"\n          on-error=\"_handleProposalError\"\n          Content-Type=\"application/json\"\n          debounce-duration=\"300\">\n      </iron-ajax>\n\n      <div class=\"toast\">\n         <paper-toast text=\"{{toastError}}\" id=\"toastError\" ></paper-toast>\n      </div>\n\n    "]);_templateObject3_89cec870da2b11e9886ab5694315db4a=function _templateObject3_89cec870da2b11e9886ab5694315db4a(){return data};return data}function _templateObject2_89cec870da2b11e9886ab5694315db4a(){var data=babelHelpers.taggedTemplateLiteral(["<dom-module id=\"lumo-checkbox-group\" theme-for=\"vaadin-checkbox-group\">\n  <template>\n    <style include=\"lumo-required-field\">\n      :host {\n        color: var(--lumo-body-text-color);\n        font-size: var(--lumo-font-size-m);\n        font-family: var(--lumo-font-family);\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        -webkit-tap-highlight-color: transparent;\n        padding: var(--lumo-space-xs) 0;\n      }\n\n      :host::before {\n        height: var(--lumo-size-m);\n        box-sizing: border-box;\n        display: inline-flex;\n        align-items: center;\n      }\n\n      :host([theme~=\"vertical\"]) [part=\"group-field\"] {\n        display: flex;\n        flex-direction: column;\n      }\n\n      [part=\"label\"] {\n        padding-bottom: 0.7em;\n      }\n\n      :host([disabled]) [part=\"label\"] {\n        color: var(--lumo-disabled-text-color);\n        -webkit-text-fill-color: var(--lumo-disabled-text-color);\n      }\n    </style>\n  </template>\n</dom-module>"]);_templateObject2_89cec870da2b11e9886ab5694315db4a=function _templateObject2_89cec870da2b11e9886ab5694315db4a(){return data};return data}function _templateObject_89cec870da2b11e9886ab5694315db4a(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-flex;\n      }\n\n      :host::before {\n        content: \"\\2003\";\n        width: 0;\n        display: inline-block;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      .vaadin-group-field-container {\n        display: flex;\n        flex-direction: column;\n      }\n\n      [part=\"label\"]:empty {\n        display: none;\n      }\n    </style>\n\n    <div class=\"vaadin-group-field-container\">\n      <label part=\"label\">[[label]]</label>\n\n      <div part=\"group-field\">\n        <slot id=\"slot\"></slot>\n      </div>\n\n      <div part=\"error-message\" aria-live=\"assertive\" aria-hidden$=\"[[_getErrorMessageAriaHidden(invalid, errorMessage)]]\">[[errorMessage]]</div>\n\n    </div>\n"],["\n    <style>\n      :host {\n        display: inline-flex;\n      }\n\n      :host::before {\n        content: \"\\\\2003\";\n        width: 0;\n        display: inline-block;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      .vaadin-group-field-container {\n        display: flex;\n        flex-direction: column;\n      }\n\n      [part=\"label\"]:empty {\n        display: none;\n      }\n    </style>\n\n    <div class=\"vaadin-group-field-container\">\n      <label part=\"label\">[[label]]</label>\n\n      <div part=\"group-field\">\n        <slot id=\"slot\"></slot>\n      </div>\n\n      <div part=\"error-message\" aria-live=\"assertive\" aria-hidden\\$=\"[[_getErrorMessageAriaHidden(invalid, errorMessage)]]\">[[errorMessage]]</div>\n\n    </div>\n"]);_templateObject_89cec870da2b11e9886ab5694315db4a=function _templateObject_89cec870da2b11e9886ab5694315db4a(){return data};return data}var CheckboxGroupElement=function(_ThemableMixin){babelHelpers.inherits(CheckboxGroupElement,_ThemableMixin);function CheckboxGroupElement(){babelHelpers.classCallCheck(this,CheckboxGroupElement);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(CheckboxGroupElement).apply(this,arguments))}babelHelpers.createClass(CheckboxGroupElement,[{key:"ready",value:function ready(){var _this=this;babelHelpers.get(babelHelpers.getPrototypeOf(CheckboxGroupElement.prototype),"ready",this).call(this);this.addEventListener("focusout",function(e){if(!_this._checkboxes.some(function(checkbox){return e.relatedTarget===checkbox||checkbox.shadowRoot.contains(e.relatedTarget)})){_this.validate()}});var checkedChangedListener=function checkedChangedListener(e){_this._changeSelectedCheckbox(e.target)};this._observer=new _myApp.FlattenedNodesObserver(this,function(info){var addedCheckboxes=_this._filterCheckboxes(info.addedNodes);addedCheckboxes.forEach(function(checkbox){checkbox.addEventListener("checked-changed",checkedChangedListener);if(_this.disabled){checkbox.disabled=!0}if(checkbox.checked){_this._addCheckboxToValue(checkbox.value)}});_this._filterCheckboxes(info.removedNodes).forEach(function(checkbox){checkbox.removeEventListener("checked-changed",checkedChangedListener);if(checkbox.checked){_this._removeCheckboxFromValue(checkbox.value)}});if(addedCheckboxes.some(function(checkbox){return!checkbox.hasAttribute("value")})){console.warn("Please add value attribute to all checkboxes in checkbox group")}})}},{key:"validate",value:function validate(){this.invalid=this.required&&0===this.value.length;return!this.invalid}},{key:"_filterCheckboxes",value:function _filterCheckboxes(nodes){return Array.from(nodes).filter(function(child){return babelHelpers.instanceof(child,_myApp.CheckboxElement)})}},{key:"_disabledChanged",value:function _disabledChanged(disabled){this.setAttribute("aria-disabled",disabled);this._checkboxes.forEach(function(checkbox){return checkbox.disabled=disabled})}},{key:"_addCheckboxToValue",value:function _addCheckboxToValue(value){var update=this.value.slice(0);update.push(value);this.value=update}},{key:"_removeCheckboxFromValue",value:function _removeCheckboxFromValue(value){var update=this.value.slice(0),index=update.indexOf(value);update.splice(index,1);this.value=update}},{key:"_changeSelectedCheckbox",value:function _changeSelectedCheckbox(checkbox){if(this._updatingValue){return}if(checkbox.checked){this._addCheckboxToValue(checkbox.value)}else{this._removeCheckboxFromValue(checkbox.value)}}},{key:"_updateValue",value:function _updateValue(value,splices){if(0===value.length&&this._oldValue===void 0){return}if(value.length){this.setAttribute("has-value","")}else{this.removeAttribute("has-value")}this._oldValue=value;this._updatingValue=!0;this._checkboxes.forEach(function(checkbox){checkbox.checked=-1<value.indexOf(checkbox.value)});this._updatingValue=!1;this.validate()}},{key:"_labelChanged",value:function _labelChanged(label){if(label){this.setAttribute("has-label","")}else{this.removeAttribute("has-label")}}},{key:"_getErrorMessageAriaHidden",value:function _getErrorMessageAriaHidden(invalid,errorMessage){return(!errorMessage||!invalid).toString()}},{key:"_checkboxes",get:function get(){return this._filterCheckboxes(this.querySelectorAll("*"))}}],[{key:"template",get:function get(){return(0,_myApp.html$1)(_templateObject_89cec870da2b11e9886ab5694315db4a())}},{key:"is",get:function get(){return"vaadin-checkbox-group"}},{key:"properties",get:function get(){return{disabled:{type:Boolean,reflectToAttribute:!0,observer:"_disabledChanged"},label:{type:String,value:"",observer:"_labelChanged"},value:{type:Array,value:function value(){return[]},notify:!0},errorMessage:{type:String,value:""},required:{type:Boolean,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1}}}},{key:"observers",get:function get(){return["_updateValue(value, value.splices)"]}}]);return CheckboxGroupElement}((0,_myApp.ThemableMixin)(_myApp.PolymerElement));_exports.CheckboxGroupElement=CheckboxGroupElement;customElements.define(CheckboxGroupElement.is,CheckboxGroupElement);var vaadinCheckboxGroup={CheckboxGroupElement:CheckboxGroupElement};_exports.$vaadinCheckboxGroup=vaadinCheckboxGroup;var $_documentContainer=(0,_myApp.html$1)(_templateObject2_89cec870da2b11e9886ab5694315db4a());document.head.appendChild($_documentContainer.content);var VerifikatorEdit=function(_PolymerElement){babelHelpers.inherits(VerifikatorEdit,_PolymerElement);function VerifikatorEdit(){babelHelpers.classCallCheck(this,VerifikatorEdit);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(VerifikatorEdit).apply(this,arguments))}babelHelpers.createClass(VerifikatorEdit,[{key:"inisialRegObj",value:function inisialRegObj(){this.regObj={}}},{key:"displayIndex",value:function displayIndex(index){return index+1}},{key:"displayName",value:function displayName(index){return"item_hasil_"+index}},{key:"_activatedChanged",value:function _activatedChanged(newValue,oldValue){if(newValue){var checkboxGroup=this.$.checkgroup,that=this;checkboxGroup.addEventListener("value-changed",function(event){that.regObj.verifikasi.cara_verifikasi=event.detail.value})}}},{key:"_addKonfirmasi",value:function _addKonfirmasi(){var obj={nama:"",lembaga:"",jabatan:"",telepon:"",hasil:[""]};this.pihakKonfirmasi.push(obj);this.$.konfirmasi.render()}},{key:"_removeKonfirmasi",value:function _removeKonfirmasi(obj){var id=obj.target.id;this.pihakKonfirmasi.splice(id,1);this.$.konfirmasi.render()}},{key:"_addHasil",value:function _addHasil(e){var id=e.target.id;this.pihakKonfirmasi[id].hasil.push("-");this.shadowRoot.querySelector("#item_hasil_"+id).render()}},{key:"_addPenerima",value:function _addPenerima(){var obj={nama:"",usia:"",tanggungan:"",alamat:"",tujuan:""};this.pihakPenerima.push(obj);this.$.penerima.render()}},{key:"_removePenerima",value:function _removePenerima(obj){var id=obj.target.id;this.pihakPenerima.splice(id,1);this.$.penerima.render()}},{key:"_routePageChanged",value:function _routePageChanged(page){switch(this.storedUser.role){case 2:this.shadowRoot.querySelector("#Verifikasi_manager").style.display="none";break;case 3:this.shadowRoot.querySelector("#Verifikasi").style.display="none";break;}this.$.getData.url=MyAppGlobals.apiPath+"/api/pendaftaran/"+this.routeData.kat+"/"+this.routeData.id;this.$.getData.headers.authorization=this.storedUser.access_token}},{key:"_handleProposal",value:function _handleProposal(e){this.regObj=e.detail.response.Data;if("undefined"==typeof this.regObj.verifikasi){this.regObj.verifikasi={tanggal_verifikasi:this.formatDate(new Date),nama_pelaksana:" ",jabatan_pelaksana:" ",bentuk_bantuan:" ",cara_verifikasi:[],hasil_verifikasi:{kelengkapan_adm:" ",direkomendasikan:" ",dokumentasi:" "}}}if("undefined"==typeof this.regObj.verifikasi.nama_pelaksana){this.regObj.verifikasi.nama_pelaksana=this.storedUser.name}else if(""==this.regObj.verifikasi.nama_pelaksana){this.regObj.verifikasi.nama_pelaksana=this.storedUser.name}if("undefined"!==typeof this.regObj.verifikasi.cara_verifikasi){if(0!==this.regObj.verifikasi.cara_verifikasi.length){var cara=this.regObj.verifikasi.cara_verifikasi,options=Array.from(this.shadowRoot.querySelectorAll("vaadin-checkbox[value]"));cara.forEach(function(item,index){options[index].checked=!0})}}if("undefined"!==typeof this.regObj.verifikasi.pihak_konfirmasi){this.pihakKonfirmasi=this.regObj.verifikasi.pihak_konfirmasi}if("undefined"!==typeof this.regObj.verifikasi.penerima_manfaat){this.pihakPenerima=this.regObj.verifikasi.penerima_manfaat}}},{key:"_handleProposalError",value:function _handleProposalError(e){this.error=e.detail.request.xhr.status;this.set("route.path","/panel/proposal")}},{key:"_handleProposalPost",value:function _handleProposalPost(e){this.shadowRoot.querySelector("#dialog_verifikasi").opened=!0}},{key:"_handleProposalPostError",value:function _handleProposalPostError(e){this.error=e.detail.request.xhr.status;this.set("route.path","/panel/proposal")}},{key:"sendData",value:function sendData(){this.regObj.verifikasi.pihak_konfirmasi=this.pihakKonfirmasi;this.regObj.verifikasi.penerima_manfaat=this.pihakPenerima;this.$.postData.url=MyAppGlobals.apiPath+"/api/verifikator/"+this.routeData.id;this.$.postData.headers.authorization=this.storedUser.access_token;this.$.postData.body=this.regObj;this.$.postData.generateRequest()}},{key:"_changeDateVerifikasi",value:function _changeDateVerifikasi(f){console.log(f);if(""!==f&&"undefined"!==typeof f){var date=this.$.tanggal_verifikasi,that=this;date.value=this.formatDate(new Date(f));date.addEventListener("change",function(){if(""!==date.value){that.regObj.verifikasi.tanggal_verifikasi=new Date(date.value).toISOString()}})}}},{key:"formatDate",value:function formatDate(date){var dd=date.getDate(),mm=date.getMonth()+1,yyyy=date.getFullYear();return yyyy+"-"+mm+"-"+dd}},{key:"_changeStoI",value:function _changeStoI(f){var array=f.path.split(".");if("jumlah_bantuan"==array[2]){f.base[array[2]]=parseInt(f.value)}}},{key:"printData",value:function printData(){this.$.printData.url=MyAppGlobals.apiPath+"/api/report/verifikasi/"+this.routeData.kat+"/"+this.routeData.id;this.$.printData.headers.authorization=this.storedUser.access_token;this.$.printData.generateRequest()}},{key:"cetak",value:function cetak(){this.shadowRoot.querySelector("#dialog_verifikasi").opened=!1;this.printData()}},{key:"cancel",value:function cancel(){this.shadowRoot.querySelector("#dialog_verifikasi").opened=!1;this.set("route.path","/panel/proposal")}},{key:"_handleVerif",value:function _handleVerif(e){if("undefined"!==typeof e.detail.response.url){document.location.href=MyAppGlobals.apiPath+e.detail.response.url;this.set("route.path","/panel/proposal")}}},{key:"_handleVerifError",value:function _handleVerifError(e){this.error=e.detail.request.xhr.status;console.log(e)}}],[{key:"template",get:function get(){return(0,_myApp.html)(_templateObject3_89cec870da2b11e9886ab5694315db4a())}},{key:"properties",get:function get(){return{storedUser:{type:Object,notify:!0},regObj:{type:Object,notify:!0,value:function value(){return{judul_proposal:"-",verifikasi:{tanggal_verifikasi:this.formatDate(new Date)}}}},toastError:String,resID:String,activated:{type:Boolean,value:!1,observer:"_activatedChanged"},pihakKonfirmasi:{type:Array,notify:!0,value:function value(){return[{nama:"",lembaga:"",jabatan:"",telepon:"",hasil:[""]}]}},pihakPenerima:{type:Array,notify:!0,value:function value(){return[{nama:"",usia:"",tanggungan:"",alamat:"",tujuan:""}]}}}}},{key:"observers",get:function get(){return["_routePageChanged(routeData.*)","_changeDateVerifikasi(regObj.verifikasi.tanggal_verifikasi)","_changeStoI(regObj.kategoris.*)"]}}]);return VerifikatorEdit}(_myApp.PolymerElement);window.customElements.define("bmm-verifikator-edit",VerifikatorEdit)});