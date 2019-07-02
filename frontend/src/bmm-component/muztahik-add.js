define(["require","../my-app.js"],function(_require,_myApp){"use strict";_require=babelHelpers.interopRequireWildcard(_require);class MuztahikAdd extends _myApp.PolymerElement{static get template(){return _myApp.html`
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
      </style>
        <!-- app-location binds to the app's URL -->
        <app-location route="{{route}}"></app-location>

        <!-- this app-route manages the top-level routes -->
        <app-route
            route="{{route}}"
            pattern="/panel/muztahik/:view"
            data="{{routeData}}"
            tail="{{subroute}}"></app-route>

      <global-variable key="LoginCred" value="{{ storedUser }}"></global-variable>
      <global-variable key="Register" value="{{ regObj }}"></global-variable>
      <global-variable key="error" value="{{ error }}"></global-variable>
      <global-data id="globalData"></global-data>
      <div class="card">
      <h1>Pendaftaran Muztahik</h1>

      <vaadin-form-layout>
            <vaadin-text-field label="Nama" value="{{regObj.muztahik.nama}}"></vaadin-text-field>
            <vaadin-text-field label="Nik" value="{{regObj.muztahik.nik}}"></vaadin-text-field>
            <vaadin-text-field label="No Handphone" value="{{regObj.muztahik.nohp}}"></vaadin-text-field>
            <vaadin-text-field label="Email" value="{{regObj.muztahik.email}}"></vaadin-text-field>
        </vaadin-form-layout>

      <vaadin-form-layout>
        <vaadin-text-area label="Alamat"  colspan="2" value="{{regObj.muztahik.alamat}}"></vaadin-text-area>
        <vaadin-text-field label="Kecamatan" value="{{regObj.muztahik.kecamatan}}"></vaadin-text-field>
        <vaadin-text-field label="Kabupate/Kota" value="{{regObj.muztahik.kabkot}}"></vaadin-text-field>
        <vaadin-text-field label="Provinsi" value="{{regObj.muztahik.provinsi}}"></vaadin-text-field>
        </vaadin-form-layout>
      </div>

      <iron-ajax
          auto 
          id="datass"
          on-response="_handleKategori"
          on-error="_errorKategori">
      </iron-ajax>
      <iron-ajax 
          id="postData"
          headers='{"Access-Control-Allow-Origin": "*" }'
          handle-as="json"
          method="POST"
          on-response="_handleMuztahik"
          on-error="_handleMuztahikError"
          Content-Type="application/json"
          debounce-duration="300"></iron-ajax>
      </iron-ajax>
      <iron-ajax 
          id="deleteData"
          headers='{"Access-Control-Allow-Origin": "*" }'
          handle-as="json"
          method="DELETE"
          on-response="_handleMuztahikDelete"
          on-error="_handleMuztahikDeleteError"
          Content-Type="application/json"
          debounce-duration="300"></iron-ajax>
      </iron-ajax>

    <div class="card">    
      <h1>Pendaftaran Kategori</h1>
        <vaadin-form-layout>
        <vaadin-select value="{{selectedKategori}}" colspan="2">
          <template>
            <vaadin-list-box>
            <dom-repeat items="{{Kategori}}">
            <template>
              <vaadin-item label="{{item.Value}}" value="{{item}}">{{item.Value}}</vaadin-item>
            </template>
            </dom-repeat>
            </vaadin-list-box>
          </template>
        </vaadin-select>
        </vaadin-form-layout>    
        <div class="wrap">
          <iron-pages selected="[[selectedKategori.Kode]]"  attr-for-selected="name">
            <bmm-kategori-ksm name="Ksm" subKategori="{{subkategori}}"></bmm-kategori-ksm>
            <bmm-kategori-rbm name="Rbm" subKategori="{{subkategori}}"></bmm-kategori-rbm>
            <bmm-kategori-paud name="Paud" subKategori="{{subkategori}}"></bmm-kategori-paud>
            <bmm-kategori-kafala name="Kafala" subKategori="{{subkategori}}"></bmm-kategori-kafala>
            <bmm-kategori-jsm name="Jsm" subKategori="{{subkategori}}"></bmm-kategori-jsm>
            <bmm-kategori-dzm name="Dzm" subKategori="{{subkategori}}"></bmm-kategori-dzm>
            <bmm-kategori-bsu name="Bsu" subKategori="{{subkategori}}"></bmm-kategori-bsu>
            <bmm-kategori-br name="Br" subKategori="{{subkategori}}"></bmm-kategori-br>
            <bmm-kategori-btm name="Btm" subKategori="{{subkategori}}"></bmm-kategori-btm>
            <bmm-kategori-bsm name="Bsm" subKategori="{{subkategori}}"></bmm-kategori-bsm>
            <bmm-kategori-bcm name="Bcm" subKategori="{{subkategori}}"></bmm-kategori-bcm>
            <bmm-kategori-asm name="Asm" subKategori="{{subkategori}}"></bmm-kategori-asm>
          </iron-pages>
        </div> 

      <iron-localstorage name="register-data" value="{{regObj}}"></iron-localstorage>
      <paper-button  raised class="indigo" on-click="sendData" >Registrasi</paper-button> 
      </div>
      <div class="toast">
         <paper-toast text="{{toastError}}" id="toastError" ></paper-toast>
      </div>

    `}static get properties(){return{Kategori:{type:Array,notify:!0,value:function(){return[]}},selectedKategori:{type:Object,notify:!0},storedUser:{type:Object,notify:!0},regObj:{type:Object,notify:!0,value:function(){return{proposal:1}}},nama:{type:String,notify:!0},subkategori:{type:Array,notify:!0,value:function(){return[]}},toastError:String,resID:String}}static get observers(){return["_kategoriSelected(selectedKategori)","_routePageChanged(routeData.*)"]}_routePageChanged(page){this.$.datass.url="change";this.$.datass.url=MyAppGlobals.apiPath+"/api/kategori";this.$.datass.headers.authorization=this.storedUser.access_token}_handleKategori(e){var response=e.detail.response;this.Kategori=response.data;var data={muztahik:{},kategoris:{},tanggalProposal:this.formatDate(new Date)};this.regObj=data}_errorKategori(e){console.log(e)}_kategoriSelected(e){this.subkategori=e.sub;switch(e.Kode){case"Ksm":new Promise((res,rej)=>_require.default(["../bmm-kategori/ksm.js"],res,rej)).then(bundle=>bundle&&bundle.$ksm||{});break;case"Rbm":new Promise((res,rej)=>_require.default(["../bmm-kategori/rbm.js"],res,rej)).then(bundle=>bundle&&bundle.$rbm||{});break;case"Paud":new Promise((res,rej)=>_require.default(["../bmm-kategori/paud.js"],res,rej)).then(bundle=>bundle&&bundle.$paud||{});break;case"Kafala":new Promise((res,rej)=>_require.default(["../bmm-kategori/kafala.js"],res,rej)).then(bundle=>bundle&&bundle.$kafala||{});break;case"Jsm":new Promise((res,rej)=>_require.default(["../bmm-kategori/jsm.js"],res,rej)).then(bundle=>bundle&&bundle.$jsm||{});break;case"Dzm":new Promise((res,rej)=>_require.default(["../bmm-kategori/dzm.js"],res,rej)).then(bundle=>bundle&&bundle.$dzm||{});break;case"Bsu":new Promise((res,rej)=>_require.default(["../bmm-kategori/bsu.js"],res,rej)).then(bundle=>bundle&&bundle.$bsu||{});break;case"Br":new Promise((res,rej)=>_require.default(["../bmm-kategori/br.js"],res,rej)).then(bundle=>bundle&&bundle.$br||{});break;case"Btm":new Promise((res,rej)=>_require.default(["../bmm-kategori/btm.js"],res,rej)).then(bundle=>bundle&&bundle.$btm||{});break;case"Bsm":new Promise((res,rej)=>_require.default(["../bmm-kategori/bsm.js"],res,rej)).then(bundle=>bundle&&bundle.$bsm||{});break;case"Bcm":new Promise((res,rej)=>_require.default(["../bmm-kategori/bcm.js"],res,rej)).then(bundle=>bundle&&bundle.$bcm||{});break;case"Asm":new Promise((res,rej)=>_require.default(["../bmm-kategori/asm.js"],res,rej)).then(bundle=>bundle&&bundle.$asm||{});break;case"view404":new Promise((res,rej)=>_require.default(["../my-view404.js"],res,rej)).then(bundle=>bundle&&bundle.$myView404||{});break;}}sendData(){this.$.postData.url=MyAppGlobals.apiPath+"/api/muztahik";this.$.postData.headers.authorization=this.storedUser.access_token;this.$.postData.body=this.regObj.muztahik;this.$.postData.generateRequest()}_handleMuztahik(e){var id=e.detail.response.Data.InsertedID;switch(this.$.postData.url){case MyAppGlobals.apiPath+"/api/muztahik":if(id){this.resID=id;this.$.postData.url=MyAppGlobals.apiPath+"/api/pendaftaran";this.$.postData.headers.authorization=this.storedUser.access_token;this.$.postData.body={muztahik_id:id,kategori:this.selectedKategori.KodeP,kategoris:this.regObj.kategoris,persetujuan:{Proposal:1,disposisi_pic:this.storedUser.name,tanggal_disposisi:new Date().toISOString()},tanggalProposal:this.regObj.tanggalProposal};this.$.postData.generateRequest()}break;case MyAppGlobals.apiPath+"/api/pendaftaran":if(id){var data={muztahik:{},kategoris:{}};this.regObj=data;this.selectedKategori={};this.set("subroute.path","/muztahik")}}}_handleMuztahikError(e){if(401==e.detail.request.xhr.status){this.error=e.detail.request.xhr.status}else{if(""!=this.resID){this.$.deleteData.url=MyAppGlobals.apiPath+"/api/muztahik/"+this.resID;this.$.deleteData.headers.authorization=this.storedUser.access_token;this.$.deleteData.generateRequest()}this.toastError=e.detail.request.xhr.response.Message;this.$.toastError.open()}}_handleMuztahikDelete(e){console.log(e)}_handleMuztahikDeleteError(e){console.log(e)}formatDate(date){var dd=date.getDate(),mm=date.getMonth()+1,yyyy=date.getFullYear();return yyyy+"-"+mm+"-"+dd}}window.customElements.define("bmm-muztahik-add",MuztahikAdd)});