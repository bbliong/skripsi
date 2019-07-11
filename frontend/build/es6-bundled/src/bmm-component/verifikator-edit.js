define(["exports","../my-app.js"],function(_exports,_myApp){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.CheckboxGroupElement=_exports.$vaadinCheckboxGroup=void 0;class CheckboxGroupElement extends(0,_myApp.ThemableMixin)(_myApp.PolymerElement){static get template(){return _myApp.html$1`
    <style>
      :host {
        display: inline-flex;
      }

      :host::before {
        content: "\\2003";
        width: 0;
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      .vaadin-group-field-container {
        display: flex;
        flex-direction: column;
      }

      [part="label"]:empty {
        display: none;
      }
    </style>

    <div class="vaadin-group-field-container">
      <label part="label">[[label]]</label>

      <div part="group-field">
        <slot id="slot"></slot>
      </div>

      <div part="error-message" aria-live="assertive" aria-hidden\$="[[_getErrorMessageAriaHidden(invalid, errorMessage)]]">[[errorMessage]]</div>

    </div>
`}static get is(){return"vaadin-checkbox-group"}static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0,observer:"_disabledChanged"},label:{type:String,value:"",observer:"_labelChanged"},value:{type:Array,value:()=>[],notify:!0},errorMessage:{type:String,value:""},required:{type:Boolean,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1}}}static get observers(){return["_updateValue(value, value.splices)"]}ready(){super.ready();this.addEventListener("focusout",e=>{if(!this._checkboxes.some(checkbox=>e.relatedTarget===checkbox||checkbox.shadowRoot.contains(e.relatedTarget))){this.validate()}});const checkedChangedListener=e=>{this._changeSelectedCheckbox(e.target)};this._observer=new _myApp.FlattenedNodesObserver(this,info=>{const addedCheckboxes=this._filterCheckboxes(info.addedNodes);addedCheckboxes.forEach(checkbox=>{checkbox.addEventListener("checked-changed",checkedChangedListener);if(this.disabled){checkbox.disabled=!0}if(checkbox.checked){this._addCheckboxToValue(checkbox.value)}});this._filterCheckboxes(info.removedNodes).forEach(checkbox=>{checkbox.removeEventListener("checked-changed",checkedChangedListener);if(checkbox.checked){this._removeCheckboxFromValue(checkbox.value)}});if(addedCheckboxes.some(checkbox=>!checkbox.hasAttribute("value"))){console.warn("Please add value attribute to all checkboxes in checkbox group")}})}validate(){this.invalid=this.required&&0===this.value.length;return!this.invalid}get _checkboxes(){return this._filterCheckboxes(this.querySelectorAll("*"))}_filterCheckboxes(nodes){return Array.from(nodes).filter(child=>child instanceof _myApp.CheckboxElement)}_disabledChanged(disabled){this.setAttribute("aria-disabled",disabled);this._checkboxes.forEach(checkbox=>checkbox.disabled=disabled)}_addCheckboxToValue(value){const update=this.value.slice(0);update.push(value);this.value=update}_removeCheckboxFromValue(value){const update=this.value.slice(0),index=update.indexOf(value);update.splice(index,1);this.value=update}_changeSelectedCheckbox(checkbox){if(this._updatingValue){return}if(checkbox.checked){this._addCheckboxToValue(checkbox.value)}else{this._removeCheckboxFromValue(checkbox.value)}}_updateValue(value,splices){if(0===value.length&&this._oldValue===void 0){return}if(value.length){this.setAttribute("has-value","")}else{this.removeAttribute("has-value")}this._oldValue=value;this._updatingValue=!0;this._checkboxes.forEach(checkbox=>{checkbox.checked=-1<value.indexOf(checkbox.value)});this._updatingValue=!1;this.validate()}_labelChanged(label){if(label){this.setAttribute("has-label","")}else{this.removeAttribute("has-label")}}_getErrorMessageAriaHidden(invalid,errorMessage){return(!errorMessage||!invalid).toString()}}_exports.CheckboxGroupElement=CheckboxGroupElement;customElements.define(CheckboxGroupElement.is,CheckboxGroupElement);var vaadinCheckboxGroup={CheckboxGroupElement:CheckboxGroupElement};_exports.$vaadinCheckboxGroup=vaadinCheckboxGroup;const $_documentContainer=_myApp.html$1`<dom-module id="lumo-checkbox-group" theme-for="vaadin-checkbox-group">
  <template>
    <style include="lumo-required-field">
      :host {
        color: var(--lumo-body-text-color);
        font-size: var(--lumo-font-size-m);
        font-family: var(--lumo-font-family);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
        padding: var(--lumo-space-xs) 0;
      }

      :host::before {
        height: var(--lumo-size-m);
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
      }

      :host([theme~="vertical"]) [part="group-field"] {
        display: flex;
        flex-direction: column;
      }

      [part="label"] {
        padding-bottom: 0.7em;
      }

      :host([disabled]) [part="label"] {
        color: var(--lumo-disabled-text-color);
        -webkit-text-fill-color: var(--lumo-disabled-text-color);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer.content);class VerifikatorEdit extends _myApp.PolymerElement{static get template(){return _myApp.html`
        <style include="shared-styles">
            :host {
            display: block;

            padding: 10px;
            }

            .wrap {
            width:100%;
            }
            .paper-toast-open{
            left: 250px !important;
            }

            .verif {
                width : 24%;
            }

            paper-button {
              margin-left: 25px;
            }
            
            @media(max-width : 800px){
                .verif {
                    width : 100%;
                }
            }
        </style>
            <!-- app-location binds to the app's URL -->
            <app-location route="{{route}}"></app-location>

            <!-- this app-route manages the top-level routes -->
            <app-route
                route="{{route}}"
                pattern="/panel/proposal/edit-verifikator/:kat/:id"
                data="{{routeData}}"
                tail="{{subroute}}"></app-route>

        <global-variable key="LoginCred" value="{{ storedUser }}"></global-variable>
        <global-variable key="error" value="{{ error }}"></global-variable>
        <global-data id="globalData"></global-data>
        <div class="card">
        <h1> Form Verifikasi Proposal</h1>
        <h3 style="color:red"> *Data ini tidak dapat diubah, silahkan diubah dari table muztahik </h3>
        <vaadin-form-layout>
            <vaadin-text-field label="Nama" value="{{regObj.muztahiks.nama}}" disabled></vaadin-text-field>
            <vaadin-text-field label="Nik" value="{{regObj.muztahiks.nik}}" disabled></vaadin-text-field>
            <vaadin-text-field label="No Handphone" value="{{regObj.muztahiks.nohp}}" disabled></vaadin-text-field>
            <vaadin-text-field label="Email" value="{{regObj.muztahiks.email}}" disabled></vaadin-text-field>
        </vaadin-form-layout>

        <vaadin-form-layout>
            <vaadin-text-area label="Alamat"  colspan="2" value="{{regObj.muztahiks.alamat}}" disabled></vaadin-text-area>
            <vaadin-text-field label="Kecamatan" value="{{regObj.muztahiks.kecamatan}}" disabled></vaadin-text-field>
            <vaadin-text-field label="Kabupate/Kota" value="{{regObj.muztahiks.kabkot}}" disabled></vaadin-text-field>
            <vaadin-text-field label="Provinsi" value="{{regObj.muztahiks.provinsi}}" disabled></vaadin-text-field>
            </vaadin-form-layout>
        </div>
        <div class="card">
            <div class="wrap">
                <vaadin-form-layout>
                    <vaadin-date-picker label="Tanggal Verifikasi" placeholder="Pilih tanggal" id="tanggal_verifikasi" value="[[regObj.verifikasi.tanggal_verifikasi]]"  colspan="2"></vaadin-date-picker>
                    <vaadin-text-field label="Nama Pelaksana" value="{{regObj.verifikasi.nama_pelaksana}}" ></vaadin-text-field>
                    <vaadin-text-field label="Jabatan Pelaksana" value="{{regObj.verifikasi.jabatan_pelaksana}}" ></vaadin-text-field>
                    <vaadin-text-field label="Judul Proposal" value="{{regObj.judul_proposal}}"  disabled ></vaadin-text-field>
                    <vaadin-text-field label="Bentuk Bantuan" value="{{regObj.verifikasi.bentuk_bantuan}}" ></vaadin-text-field>
                    <vaadin-text-field label="Jumlah Bantuan" value="{{regObj.kategoris.jumlah_bantuan}}" ></vaadin-text-field>
                    <vaadin-checkbox-group id="checkgroup" label="Cara verifikasi">
                        <vaadin-checkbox value="1">Wawancara</vaadin-checkbox>
                        <vaadin-checkbox value="2">Media/Berita</vaadin-checkbox>
                    </vaadin-checkbox-group>
                </vaadin-form-layout>         
            </div>
        </div>
        <dom-repeat items="{{pihakPenerima}}" id="penerima">
            <template>
                    <div class="card">
                        <div class="wrap">
                        <div class="head">
                        <h3 style="display:inline-block"> Penerima Manfaat  [[displayIndex(index)]] </h3>
                        <paper-icon-button icon="remove" id="{{index}}" on-click="_removePenerima">   </paper-icon-button>
                        </div>

                        <vaadin-text-field label="Nama" value="{{item.nama}}" class="penerima"></vaadin-text-field>
                        <vaadin-text-field label="Usia" value="{{item.usia}}" class="penerima"></vaadin-text-field>
                        <vaadin-text-field label="Tanggungan" value="{{item.tanggungan}}" class="penerima"></vaadin-text-field>
                        <vaadin-text-field label="Alamat" value="{{item.alamat}}" class="penerima"></vaadin-text-field>
                        <vaadin-text-field label="Telepon" value="{{item.telepon}}" class="penerima"></vaadin-text-field>
                    </template>           
                    </div>
                </div>
        </dom-repeat> 
        <paper-button  raised class="indigo" on-click="_addPenerima" id="addPenerima">Tambah Penerima </paper-button>
        <dom-repeat items="{{pihakKonfirmasi}}" id="konfirmasi">
            <template>
                    <div class="card">
                        <div class="wrap">
                        <div class="head">
                        <h3 style="display:inline-block"> Pihak Diverfikasi / Dikonfirmasi  [[displayIndex(index)]] </h3>
                        <paper-icon-button icon="remove" id="{{index}}" on-click="_removeKonfirmasi">   </paper-icon-button>
                        </div>

                        <vaadin-text-field label="Nama" value="{{item.nama}}" class="verif"></vaadin-text-field>
                        <vaadin-text-field label="Lembaga" value="{{item.lembaga}}" class="verif"></vaadin-text-field>
                        <vaadin-text-field label="Jabatan" value="{{item.jabatan}}" class="verif"></vaadin-text-field>
                        <vaadin-text-field label="Telepon" value="{{item.telepon}}" class="verif"></vaadin-text-field>
                       
                        <h3> Hasil Verifikasi  / Konfirmasi <paper-icon-button icon ="add" class="green" id="[[index]]" on-click="_addHasil">Add</paper-icon-button>
                        </h3>
                        <vaadin-form-layout> 
                        <dom-repeat items="{{item.hasil}}" id="[[displayName(index)]]">
                            <template>
                                <vaadin-text-field value="{{item}}" colspan="2" label="Hasil  [[displayIndex(index)]] "></vaadin-text-field >
                            </template>
                        </dom-repeat>
                        </vaadin-form-layout> 
                    </template>           
                    </div>
                </div>
        </dom-repeat> 
        <paper-button  raised class="indigo" on-click="_addKonfirmasi" id="addKonfirmasi">Tambah Pihak </paper-button>
       
        <div class="card">
            <div class="wrap">
                <h3> Hasil Verifikasi </h3>
                <vaadin-form-layout>
                <vaadin-select label="Asnaf" value="{{regObj.kategoris.asnaf}}">
                    <template>
                    <vaadin-list-box>
                        <vaadin-item value="Fakir">Fakir</vaadin-item>
                        <vaadin-item value="Miskin">Miskin</vaadin-item>
                        <vaadin-item value="Amil">Amil</vaadin-item>
                        <vaadin-item value="Mu'allaf">Mu'allaf</vaadin-item>
                        <vaadin-item value="Gharimin">Gharimin</vaadin-item>
                        <vaadin-item value="Fisabilillah">Fisabilillah</vaadin-item>
                        <vaadin-item value="Ibnus Sabil">Ibnus Sabil</vaadin-item>
                    </vaadin-list-box>
                    </template>
                </vaadin-select>
                    <vaadin-select label="Kelengkapan dan Administrasi" value="{{regObj.verifikasi.hasil_verifikasi.kelengkapan_adm}}">
                        <template>
                        <vaadin-list-box>
                            <vaadin-item value="Lengkap">Lengkap</vaadin-item>
                            <vaadin-item value="Tidak">Tidak</vaadin-item>
                        </vaadin-list-box>
                        </template>
                    </vaadin-select>
                    <vaadin-select label="Direkomendasikan" value="{{regObj.verifikasi.hasil_verifikasi.direkomendasikan}}">
                        <template>
                        <vaadin-list-box>
                            <vaadin-item value="Ya">Ya</vaadin-item>
                            <vaadin-item value="Tidak">Tidak</vaadin-item>
                        </vaadin-list-box>
                        </template>
                    </vaadin-select>
                    <vaadin-select label="Dokumentasi" value="{{regObj.verifikasi.hasil_verifikasi.dokumentasi}}">
                        <template>
                        <vaadin-list-box>
                            <vaadin-item value="Ada">Ada</vaadin-item>
                            <vaadin-item value="Tidak">Tidak</vaadin-item>
                        </vaadin-list-box>
                        </template>
                    </vaadin-select>
                </vaadin-form-layout>
            </div>
        </div>
     <paper-button  raised class="indigo" on-click="sendData" id="Verifikasi">Simpan dan Cetak Verifikasi</paper-button>
      <iron-ajax 
          id="postData"
          headers='{"Access-Control-Allow-Origin": "*" }'
          handle-as="json"
          method="PUT"
          on-response="_handleProposalPost"
          on-error="_handleProposalPostError"
          Content-Type="application/json"
          debounce-duration="300">
      </iron-ajax>

      <iron-ajax 
          id="printData"
          headers='{"Access-Control-Allow-Origin": "*" }'
          method="GET"
          handle-as="json"
          method="GET"
          on-response="_handleVerif"
          on-error="_handleVerifError"
          Content-Type="application/json"
          debounce-duration="300">
      </iron-ajax>

      <iron-ajax 
          auto
          id="getData"
          headers='{"Access-Control-Allow-Origin": "*" }'
          handle-as="json"
          method="GET"
          on-response="_handleProposal"
          on-error="_handleProposalError"
          Content-Type="application/json"
          debounce-duration="300">
      </iron-ajax>

      <div class="toast">
         <paper-toast text="{{toastError}}" id="toastError" ></paper-toast>
      </div>

    `}static get properties(){return{storedUser:{type:Object,notify:!0},regObj:{type:Object,notify:!0,value:function(){return{judul_proposal:"-",verifikasi:{tanggal_verifikasi:this.formatDate(new Date)}}}},toastError:String,resID:String,activated:{type:Boolean,value:!1,observer:"_activatedChanged"},pihakKonfirmasi:{type:Array,notify:!0,value:function(){return[{nama:"",lembaga:"",jabatan:"",telepon:"",hasil:[""]}]}},pihakPenerima:{type:Array,notify:!0,value:function(){return[{nama:"",usia:"",tanggungan:"",alamat:"",tujuan:""}]}}}}inisialRegObj(){this.regObj={}}static get observers(){return["_routePageChanged(routeData.*)","_changeDateVerifikasi(regObj.verifikasi.tanggal_verifikasi)","_changeStoI(regObj.kategoris.*)"]}displayIndex(index){return index+1}displayName(index){return"item_hasil_"+index}_activatedChanged(newValue,oldValue){if(newValue){const checkboxGroup=this.$.checkgroup;var that=this;checkboxGroup.addEventListener("value-changed",function(event){that.regObj.verifikasi.cara_verifikasi=event.detail.value})}}_addKonfirmasi(){var obj={nama:"",lembaga:"",jabatan:"",telepon:"",hasil:[""]};this.pihakKonfirmasi.push(obj);this.$.konfirmasi.render()}_removeKonfirmasi(obj){var id=obj.target.id;this.pihakKonfirmasi.splice(id,1);this.$.konfirmasi.render()}_addHasil(e){var id=e.target.id;this.pihakKonfirmasi[id].hasil.push("-");this.shadowRoot.querySelector("#item_hasil_"+id).render()}_addPenerima(){var obj={nama:"",usia:"",tanggungan:"",alamat:"",tujuan:""};this.pihakPenerima.push(obj);this.$.penerima.render()}_removePenerima(obj){var id=obj.target.id;this.pihakPenerima.splice(id,1);this.$.penerima.render()}_routePageChanged(page){this.$.getData.url=MyAppGlobals.apiPath+"/api/pendaftaran/"+this.routeData.kat+"/"+this.routeData.id;this.$.getData.headers.authorization=this.storedUser.access_token}_handleProposal(e){this.regObj=e.detail.response.Data;console.log(this.regObj);if("undefined"==typeof this.regObj.verifikasi){this.regObj.verifikasi={tanggal_verifikasi:this.formatDate(new Date),nama_pelaksana:" ",jabatan_pelaksana:" ",bentuk_bantuan:" ",cara_verifikasi:[],hasil_verifikasi:{kelengkapan_adm:" ",direkomendasikan:" ",dokumentasi:" "}}}if(0!==this.regObj.verifikasi.cara_verifikasi.length){let cara=this.regObj.verifikasi.cara_verifikasi;const options=Array.from(this.shadowRoot.querySelectorAll("vaadin-checkbox[value]"));cara.forEach(function(item,index){options[index].checked=!0})}if("undefined"!==typeof this.regObj.verifikasi.pihak_konfirmasi){this.pihakKonfirmasi=this.regObj.verifikasi.pihak_konfirmasi}if("undefined"!==typeof this.regObj.verifikasi.penerima_manfaat){this.pihakPenerima=this.regObj.verifikasi.penerima_manfaat}}_handleProposalError(e){this.set("route.path","/panel/proposal")}_handleProposalPost(e){this.printData()}_handleProposalPostError(e){this.set("route.path","/panel/proposal")}sendData(){this.regObj.verifikasi.pihak_konfirmasi=this.pihakKonfirmasi;this.regObj.verifikasi.penerima_manfaat=this.pihakPenerima;this.$.postData.url=MyAppGlobals.apiPath+"/api/verifikator/"+this.routeData.id;this.$.postData.headers.authorization=this.storedUser.access_token;this.$.postData.body=this.regObj;this.$.postData.generateRequest()}_changeDateVerifikasi(f){console.log(f);if(""!==f&&"undefined"!==typeof f){var date=this.$.tanggal_verifikasi,that=this;date.value=this.formatDate(new Date(f));date.addEventListener("change",function(){if(""!==date.value){that.regObj.verifikasi.tanggal_verifikasi=new Date(date.value).toISOString()}})}}formatDate(date){var dd=date.getDate(),mm=date.getMonth()+1,yyyy=date.getFullYear();return yyyy+"-"+mm+"-"+dd}_changeStoI(f){var array=f.path.split(".");if("jumlah_bantuan"==array[2]){f.base[array[2]]=parseInt(f.value)}}_handleVerif(e){if("undefined"!==typeof e.detail.response.url){document.location.href=MyAppGlobals.apiPath+e.detail.response.url;this.set("route.path","/panel/proposal")}}_handleVerifError(e){console.log(e)}printData(){console.log("check");this.$.printData.url=MyAppGlobals.apiPath+"/api/report/verifikasi/"+this.routeData.kat+"/"+this.routeData.id;this.$.printData.headers.authorization=this.storedUser.access_token;this.$.printData.generateRequest()}}window.customElements.define("bmm-verifikator-edit",VerifikatorEdit)});