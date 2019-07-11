define(["require","../my-app.js"],function(_require,_myApp){"use strict";_require=babelHelpers.interopRequireWildcard(_require);class ProposalAdd extends _myApp.PolymerElement{static get template(){return _myApp.html`
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
            pattern="/panel/proposal/add-proposal/:view"
            data="{{routeData}}"
            tail="{{subroute}}"></app-route>

      <global-variable key="LoginCred" value="{{ storedUser }}"></global-variable>
      <global-variable key="Register" value="{{ regObj }}"></global-variable>
      <global-variable key="error" value="{{ error }}"></global-variable>
      <global-data id="globalData"></global-data>
      <div class="card">
      <h1>Pendaftaran Muztahik</h1>
      <h4 style="color:red"> *Data ini tidak dapat diubah, silahkan diubah dari table muztahik </h4>
      <vaadin-form-layout>
            <vaadin-text-field label="Nama" value="{{regObj.muztahik.nama}}" disabled></vaadin-text-field>
            <vaadin-text-field label="Nik" value="{{regObj.muztahik.nik}}" disabled></vaadin-text-field>
            <vaadin-text-field label="No Handphone" value="{{regObj.muztahik.nohp}}" disabled></vaadin-text-field>
            <vaadin-text-field label="Email" value="{{regObj.muztahik.email}}" disabled></vaadin-text-field>
        </vaadin-form-layout> 

      <vaadin-form-layout>
        <vaadin-text-area label="Alamat"  colspan="2" value="{{regObj.muztahik.alamat}}" disabled></vaadin-text-area>
        <vaadin-text-field label="Kecamatan" value="{{regObj.muztahik.kecamatan}}" disabled></vaadin-text-field>
        <vaadin-text-field label="Kabupate/Kota" value="{{regObj.muztahik.kabkot}}" disabled></vaadin-text-field>
        <vaadin-text-field label="Provinsi" value="{{regObj.muztahik.provinsi}}" disabled></vaadin-text-field>
        </vaadin-form-layout>
      </div>

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
            <bmm-kategori-ksm name="Ksm" subKategori="{{subkategori}}" user="{{User}}"></bmm-kategori-ksm>
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

      <iron-localstorage name="register-data" value="{{regObj}}" on-iron-localstorage-load-empty="inisialRegObj"></iron-localstorage>
      <paper-button  raised class="indigo" on-click="sendData" >Registrasi</paper-button> 
      </div>
      <div class="toast">
         <paper-toast text="{{toastError}}" id="toastError" ></paper-toast>
      </div>
      <iron-ajax
          auto 
          id="datass"
          headers='{"Access-Control-Allow-Origin": "*" }'
          handle-as="json"
          method="GET"
          on-response="_handleKategori"
          on-error="_errorKategori"
          Content-Type="application/json"
          debounce-duration="300">
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
      <iron-ajax 
          id="postData"
          headers='{"Access-Control-Allow-Origin": "*" }'
          handle-as="json"
          method="POST"
          on-response="_handleProposal"
          on-error="_handleProposalError"
          Content-Type="application/json"
          debounce-duration="300"></iron-ajax>
      </iron-ajax>
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
      </iron-ajax>


    `}static get properties(){return{Kategori:{type:Array,notify:!0,value:function(){return[]}},User:{type:Array,notify:!0,value:function(){return[]}},selectedKategori:{type:Object,notify:!0},storedUser:{type:Object,notify:!0},regObj:{type:Object,notify:!0,value:function(){return{}}},nama:{type:String,notify:!0},subkategori:{type:Array,notify:!0,value:function(){return[]}},toastError:String,resID:String}}static get observers(){return["_kategoriSelected(selectedKategori)","_routePageChanged(route.*)"]}_routePageChanged(page){this.$.datass.url=MyAppGlobals.apiPath+"/api/kategori";this.$.datass.headers.authorization=this.storedUser.access_token;this.$.managerDPP.url=MyAppGlobals.apiPath+"/api/users?role=2";this.$.managerDPP.headers.authorization=this.storedUser.access_token;this.$.getData.url=MyAppGlobals.apiPath+"/api/muztahik/"+this.routeData.view;this.$.getData.headers.authorization=this.storedUser.access_token;this.selectedKategori=null}_handleKategori(e){var response=e.detail.response;this.Kategori=response.data}_errorKategori(e){console.log(e)}_handleManager(e){var response=e.detail.response;this.User=response.data}_errorManager(e){console.log(e)}_kategoriSelected(e){if(null!==e){this.subkategori=e.sub;switch(e.Kode){case"Ksm":new Promise((res,rej)=>_require.default(["../bmm-kategori/ksm.js"],res,rej)).then(bundle=>bundle&&bundle.$ksm||{});break;case"Rbm":new Promise((res,rej)=>_require.default(["../bmm-kategori/rbm.js"],res,rej)).then(bundle=>bundle&&bundle.$rbm||{});break;case"Paud":new Promise((res,rej)=>_require.default(["../bmm-kategori/paud.js"],res,rej)).then(bundle=>bundle&&bundle.$paud||{});break;case"Kafala":new Promise((res,rej)=>_require.default(["../bmm-kategori/kafala.js"],res,rej)).then(bundle=>bundle&&bundle.$kafala||{});break;case"Jsm":new Promise((res,rej)=>_require.default(["../bmm-kategori/jsm.js"],res,rej)).then(bundle=>bundle&&bundle.$jsm||{});break;case"Dzm":new Promise((res,rej)=>_require.default(["../bmm-kategori/dzm.js"],res,rej)).then(bundle=>bundle&&bundle.$dzm||{});break;case"Bsu":new Promise((res,rej)=>_require.default(["../bmm-kategori/bsu.js"],res,rej)).then(bundle=>bundle&&bundle.$bsu||{});break;case"Br":new Promise((res,rej)=>_require.default(["../bmm-kategori/br.js"],res,rej)).then(bundle=>bundle&&bundle.$br||{});break;case"Btm":new Promise((res,rej)=>_require.default(["../bmm-kategori/btm.js"],res,rej)).then(bundle=>bundle&&bundle.$btm||{});break;case"Bsm":new Promise((res,rej)=>_require.default(["../bmm-kategori/bsm.js"],res,rej)).then(bundle=>bundle&&bundle.$bsm||{});break;case"Bcm":new Promise((res,rej)=>_require.default(["../bmm-kategori/bcm.js"],res,rej)).then(bundle=>bundle&&bundle.$bcm||{});break;case"Asm":new Promise((res,rej)=>_require.default(["../bmm-kategori/asm.js"],res,rej)).then(bundle=>bundle&&bundle.$asm||{});break;case"view404":new Promise((res,rej)=>_require.default(["../my-view404.js"],res,rej)).then(bundle=>bundle&&bundle.$myView404||{});break;}}}sendData(){this.$.postData.url=MyAppGlobals.apiPath+"/api/pendaftaran";this.$.postData.headers.authorization=this.storedUser.access_token;this.$.postData.body={muztahik_id:this.regObj.muztahik._id,judul_proposal:this.regObj.judul_proposal,tanggalProposal:this.regObj.tanggalProposal,kategori:this.selectedKategori.KodeP,kategoris:this.regObj.kategoris,persetujuan:{Proposal:1,manager_id:this.regObj.persetujuan.manager_id}};console.log(this.$.postData.body);this.$.postData.generateRequest()}_handleProposal(e){this.set("route.path","/panel/proposal")}_handleProposalError(e){console.log(e)}_handleMuztahik(e){var date=this.formatDate(new Date),data={tanggalProposal:new Date(date).toISOString(),muztahik:e.detail.response.data,kategoris:{},persetujuan:{}};this.regObj=data}_handleMuztahikError(e){this.set("route.path","/panel/muztahik")}formatDate(date){var dd=date.getDate(),mm=date.getMonth()+1,yyyy=date.getFullYear();return yyyy+"-"+mm+"-"+dd}}window.customElements.define("bmm-proposal-add",ProposalAdd)});