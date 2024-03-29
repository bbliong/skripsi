import{PolymerElement,html}from"../my-app.js";class MuztahikAdd extends PolymerElement{static get template(){return html`
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
      <global-variable key="toast" value="{{ toast }}"></global-variable>
      <global-data id="globalData"></global-data>
      <div class="card">
      <h1>Pendaftaran Muztahik</h1>

      <vaadin-form-layout>
            <vaadin-text-field label="Nama" value="{{regObj.muztahik.nama}}"></vaadin-text-field>
            <vaadin-text-field label="Nik *Wajib Diisi" value="{{regObj.muztahik.nik}}"></vaadin-text-field>
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


      <iron-ajax
          auto 
          id="managerDPP"
          headers='{"Access-Control-Allow-Origin": "*" }'
          handle-as="json"
          method="GET"
          on-response="_handleManager"
          on-error="_errorManager"
          Content-Type="application/json"
          debounce-duration="300">
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
            <bmm-kategori-ksm name="Ksm" subKategori="{{subkategori}}"  user="{{User}}"></bmm-kategori-ksm>
            <bmm-kategori-rbm name="Rbm" subKategori="{{subkategori}}" user="{{User}}"></bmm-kategori-rbm>
            <bmm-kategori-paud name="Paud" subKategori="{{subkategori}}" user="{{User}}"></bmm-kategori-paud>
            <bmm-kategori-kafala name="Kafala" subKategori="{{subkategori}}" user="{{User}}"></bmm-kategori-kafala>
            <bmm-kategori-jsm name="Jsm" subKategori="{{subkategori}}" user="{{User}}"></bmm-kategori-jsm>
            <bmm-kategori-dzm name="Dzm" subKategori="{{subkategori}}" user="{{User}}"></bmm-kategori-dzm>
            <bmm-kategori-bsu name="Bsu" subKategori="{{subkategori}}" user="{{User}}"></bmm-kategori-bsu>
            <bmm-kategori-br name="Br" subKategori="{{subkategori}}" user="{{User}}"></bmm-kategori-br>
            <bmm-kategori-btm name="Btm" subKategori="{{subkategori}}" user="{{User}}"></bmm-kategori-btm>
            <bmm-kategori-bsm name="Bsm" subKategori="{{subkategori}}" user="{{User}}"></bmm-kategori-bsm>
            <bmm-kategori-bcm name="Bcm" subKategori="{{subkategori}}" user="{{User}}"></bmm-kategori-bcm>
            <bmm-kategori-asm name="Asm" subKategori="{{subkategori}}" user="{{User}}"></bmm-kategori-asm>
          </iron-pages>
        </div> 

      <iron-localstorage name="register-data" value="{{regObj}}"></iron-localstorage>
      <paper-button  raised class="indigo" on-click="sendData" >Registrasi</paper-button> 
      </div>
    `}static get properties(){return{Kategori:{type:Array,notify:!0,value:function(){return[]}},selectedKategori:{type:Object,notify:!0},storedUser:{type:Object,notify:!0},regObj:{type:Object,notify:!0,value:function(){return{proposal:1}}},nama:{type:String,notify:!0},subkategori:{type:Array,notify:!0,value:function(){return[]}},resID:String,User:{type:Array,notify:!0,value:function(){return[]}}}}static get observers(){return["_kategoriSelected(selectedKategori)","_routePageChanged(routeData.*)"]}_routePageChanged(page){this.$.datass.url="change";this.$.datass.url=MyAppGlobals.apiPath+"/api/kategori";this.$.datass.headers.authorization=this.storedUser.access_token;this.$.managerDPP.url=MyAppGlobals.apiPath+"/api/users?role=3&role2=4&role3=9";this.$.managerDPP.headers.authorization=this.storedUser.access_token}_handleKategori(e){var response=e.detail.response;this.Kategori=response.data;var data={muztahik:{},kategoris:{},persetujuan:{},tanggalProposal:this.formatDate(new Date)};this.regObj=data}_errorKategori(e){console.log(e)}_kategoriSelected(e){this.subkategori=e.sub;switch(e.Kode){case"Ksm":import("../bmm-kategori/ksm.js").then(bundle=>bundle&&bundle.$ksm||{});break;case"Rbm":import("../bmm-kategori/rbm.js").then(bundle=>bundle&&bundle.$rbm||{});break;case"Paud":import("../bmm-kategori/paud.js").then(bundle=>bundle&&bundle.$paud||{});break;case"Kafala":import("../bmm-kategori/kafala.js").then(bundle=>bundle&&bundle.$kafala||{});break;case"Jsm":import("../bmm-kategori/jsm.js").then(bundle=>bundle&&bundle.$jsm||{});break;case"Dzm":import("../bmm-kategori/dzm.js").then(bundle=>bundle&&bundle.$dzm||{});break;case"Bsu":import("../bmm-kategori/bsu.js").then(bundle=>bundle&&bundle.$bsu||{});break;case"Br":import("../bmm-kategori/br.js").then(bundle=>bundle&&bundle.$br||{});break;case"Btm":import("../bmm-kategori/btm.js").then(bundle=>bundle&&bundle.$btm||{});break;case"Bsm":import("../bmm-kategori/bsm.js").then(bundle=>bundle&&bundle.$bsm||{});break;case"Bcm":import("../bmm-kategori/bcm.js").then(bundle=>bundle&&bundle.$bcm||{});break;case"Asm":import("../bmm-kategori/asm.js").then(bundle=>bundle&&bundle.$asm||{});break;case"view404":import("../my-view404.js").then(bundle=>bundle&&bundle.$myView404||{});break;}}sendData(){if("undefined"==typeof this.selectedKategori.KodeP){this.toast="Terjadi Masalah : Kategori Belum Dipilih";return}else if("undefined"==typeof this.regObj.persetujuan.manager_id||"undefined"==typeof this.regObj.persetujuan.kadiv_id){this.toast="Terjadi Masalah : Manager ID atau Kadiv ID belum terisi";return}this.$.postData.url=MyAppGlobals.apiPath+"/api/muztahik";this.$.postData.headers.authorization=this.storedUser.access_token;this.$.postData.body=this.regObj.muztahik;this.$.postData.generateRequest()}_handleMuztahik(e){var id=e.detail.response.Data.InsertedID;switch(this.$.postData.url){case MyAppGlobals.apiPath+"/api/muztahik":if(id){this.resID=id;this.$.postData.url=MyAppGlobals.apiPath+"/api/pendaftaran";this.$.postData.headers.authorization=this.storedUser.access_token;this.$.postData.body={muztahik_id:id,kategori:this.selectedKategori.KodeP,kategoris:this.regObj.kategoris,persetujuan:{Proposal:1,manager_id:this.regObj.persetujuan.manager_id,kadiv_id:this.regObj.persetujuan.kadiv_id,tanggal_disposisi:new Date().toISOString()},judul_proposal:this.regObj.judul_proposal,tanggalProposal:this.regObj.tanggalProposal};this.$.postData.generateRequest()}break;case MyAppGlobals.apiPath+"/api/pendaftaran":if(id){var data={muztahik:{},kategoris:{}};this.regObj=data;this.selectedKategori={};this.toast=e.detail.response.Message;this.set("route.path","/panel/muztahik")}}}_handleMuztahikError(e){if(401==e.detail.request.xhr.status){this.error=e.detail.request.xhr.status}else{this.toast=e.detail.request.xhr.response.Message;if(""!=this.resID){this.$.deleteData.url=MyAppGlobals.apiPath+"/api/muztahik/"+this.resID;this.$.deleteData.headers.authorization=this.storedUser.access_token;this.$.deleteData.generateRequest()}}}_handleMuztahikDelete(e){}_handleMuztahikDeleteError(e){}formatDate(date){var dd=date.getDate(),mm=date.getMonth()+1,yyyy=date.getFullYear();return yyyy+"-"+mm+"-"+dd}_handleManager(e){var response=e.detail.response;this.User=response.data}_errorManager(e){console.log(e)}}window.customElements.define("bmm-muztahik-add",MuztahikAdd);