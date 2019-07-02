define(["require","../my-app.js"],function(_require,_myApp){"use strict";_require=babelHelpers.interopRequireWildcard(_require);class ProposalEdit extends _myApp.PolymerElement{static get template(){return _myApp.html`
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
            pattern="/panel/proposal/edit-proposal/:kat/:id"
            data="{{routeData}}"
            tail="{{subroute}}"></app-route>

      <global-variable key="LoginCred" value="{{ storedUser }}"></global-variable>
      <global-variable key="Register" value="{{regObj}}"></global-variable>
      <global-variable key="error" value="{{ error }}"></global-variable>
      <global-data id="globalData"></global-data>
      <div class="card">
      <h1> Pendaftaran Muztahik</h1>
      <h4 style="color:red"> *Data ini tidak dapat diubah, silahkan diubah dari table muztahik </h4>
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
        <h1>Pendaftaran Proposal</h1>
          <div class="wrap">
            <iron-pages selected="[[selectedKategori]]"  attr-for-selected="name">
              <bmm-kategori-ksm name="1" subKategori="{{subkategori}}"></bmm-kategori-ksm>
              <bmm-kategori-rbm name="2" subKategori="{{subkategori}}"></bmm-kategori-rbm>
              <bmm-kategori-paud name="3" subKategori="{{subkategori}}"></bmm-kategori-paud>
              <bmm-kategori-kafala name="4" subKategori="{{subkategori}}"></bmm-kategori-kafala>
              <bmm-kategori-jsm name="5" subKategori="{{subkategori}}"></bmm-kategori-jsm>
              <bmm-kategori-dzm name="6" subKategori="{{subkategori}}"></bmm-kategori-dzm>
              <bmm-kategori-bsu name="7" subKategori="{{subkategori}}"></bmm-kategori-bsu>
              <bmm-kategori-br name="8" subKategori="{{subkategori}}"></bmm-kategori-br>
              <bmm-kategori-btm name="9" subKategori="{{subkategori}}"></bmm-kategori-btm>
              <bmm-kategori-bsm name="10" subKategori="{{subkategori}}"></bmm-kategori-bsm>
              <bmm-kategori-bcm name="11" subKategori="{{subkategori}}"></bmm-kategori-bcm>
              <bmm-kategori-asm name="12" subKategori="{{subkategori}}"></bmm-kategori-asm>
            </iron-pages>
        </div> 

        <iron-localstorage name="register-data" value="{{regObj}}" on-iron-localstorage-load-empty="inisialRegObj"></iron-localstorage>
        <paper-button  raised class="indigo" on-click="sendData" >Registrasi</paper-button> 
      </div>
        
      <iron-ajax
          id="datass"
          on-response="_handleKategori"
          on-error="_errorKategori"
          headers='{"Access-Control-Allow-Origin": "*" }'
          handle-as="json"
          Content-Type="application/json"
          debounce-duration="300">
      </iron-ajax>

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

    `}static get properties(){return{Kategori:{type:Array,notify:!0},storedUser:{type:Object,notify:!0},regObj:{type:Object,notify:!0,value:function(){return{}}},nama:{type:String,notify:!0},toastError:String,resID:String,selectedKategori:Number,subkategori:{type:Array,notify:!0,value:function(){return[]}}}}inisialRegObj(){this.regObj={}}static get observers(){return["_routePageChanged(routeData.*)","_kategoriSelected(selectedKategori)"]}_routePageChanged(page){this.$.datass.url=MyAppGlobals.apiPath+"/api/kategori";this.$.datass.headers.authorization=this.storedUser.access_token;this.$.datass.generateRequest()}_handleProposal(e){this.regObj=e.detail.response.Data;this.selectedKategori=this.routeData.kat}_handleProposalError(e){this.set("route.path","/panel/proposal")}_handleProposalPost(e){this.set("route.path","/panel/proposal")}_handleProposalPostError(e){this.set("route.path","/panel/proposal")}_handleKategori(e){var response=e.detail.response;this.subkategori=response.data.filter(x=>x.KodeP==this.routeData.kat)[0].sub;this.$.getData.url=MyAppGlobals.apiPath+"/api/pendaftaran/"+this.routeData.kat+"/"+this.routeData.id;this.$.getData.headers.authorization=this.storedUser.access_token}_errorKategori(e){}sendData(){console.log(this.regObj);this.$.postData.url=MyAppGlobals.apiPath+"/api/pendaftaran/"+this.routeData.id;this.$.postData.headers.authorization=this.storedUser.access_token;this.$.postData.body=this.regObj;this.$.postData.generateRequest()}_kategoriSelected(e){switch(e){case"1":new Promise((res,rej)=>_require.default(["../bmm-kategori/ksm.js"],res,rej)).then(bundle=>bundle&&bundle.$ksm||{});break;case"2":new Promise((res,rej)=>_require.default(["../bmm-kategori/rbm.js"],res,rej)).then(bundle=>bundle&&bundle.$rbm||{});break;case"3":new Promise((res,rej)=>_require.default(["../bmm-kategori/paud.js"],res,rej)).then(bundle=>bundle&&bundle.$paud||{});break;case"4":new Promise((res,rej)=>_require.default(["../bmm-kategori/kafala.js"],res,rej)).then(bundle=>bundle&&bundle.$kafala||{});break;case"5":new Promise((res,rej)=>_require.default(["../bmm-kategori/jsm.js"],res,rej)).then(bundle=>bundle&&bundle.$jsm||{});break;case"6":new Promise((res,rej)=>_require.default(["../bmm-kategori/dzm.js"],res,rej)).then(bundle=>bundle&&bundle.$dzm||{});break;case"7":new Promise((res,rej)=>_require.default(["../bmm-kategori/bsu.js"],res,rej)).then(bundle=>bundle&&bundle.$bsu||{});break;case"8":new Promise((res,rej)=>_require.default(["../bmm-kategori/br.js"],res,rej)).then(bundle=>bundle&&bundle.$br||{});break;case"9":new Promise((res,rej)=>_require.default(["../bmm-kategori/btm.js"],res,rej)).then(bundle=>bundle&&bundle.$btm||{});break;case"10":new Promise((res,rej)=>_require.default(["../bmm-kategori/bsm.js"],res,rej)).then(bundle=>bundle&&bundle.$bsm||{});break;case"11":new Promise((res,rej)=>_require.default(["../bmm-kategori/bcm.js"],res,rej)).then(bundle=>bundle&&bundle.$bcm||{});break;case"12":new Promise((res,rej)=>_require.default(["../bmm-kategori/asm.js"],res,rej)).then(bundle=>bundle&&bundle.$asm||{});break;case"view404":new Promise((res,rej)=>_require.default(["../my-view404.js"],res,rej)).then(bundle=>bundle&&bundle.$myView404||{});break;}}}window.customElements.define("bmm-proposal-edit",ProposalEdit)});