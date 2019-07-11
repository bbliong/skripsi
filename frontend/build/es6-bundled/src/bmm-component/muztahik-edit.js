define(["../my-app.js"],function(_myApp){"use strict";class MuztahikEdit extends _myApp.PolymerElement{static get template(){return _myApp.html`
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
            pattern="/panel/muztahik/edit-muztahik/:id"
            data="{{routeData}}"
            tail="{{subroute}}"></app-route>

      <global-variable key="LoginCred" value="{{ storedUser }}"></global-variable>
      <global-variable key="error" value="{{ error }}"></global-variable>
      <global-data id="globalData"></global-data>
      <div class="card">
      <h1>Pendaftaran Muztahik</h1>

      <vaadin-form-layout>
            <vaadin-text-field label="Nama" value="{{regObj.nama}}"></vaadin-text-field>
            <vaadin-text-field label="Nik" value="{{regObj.nik}}"></vaadin-text-field>
            <vaadin-text-field label="No Handphone" value="{{regObj.nohp}}"></vaadin-text-field>
            <vaadin-text-field label="Email" value="{{regObj.email}}"></vaadin-text-field>
        </vaadin-form-layout>

      <vaadin-form-layout>
        <vaadin-text-area label="Alamat"  colspan="2" value="{{regObj.alamat}}"></vaadin-text-area>
        <vaadin-text-field label="Kecamatan" value="{{regObj.kecamatan}}"></vaadin-text-field>
        <vaadin-text-field label="Kabupate/Kota" value="{{regObj.kabkot}}" class="kabkot"></vaadin-text-field>

        <vaadin-text-field label="Provinsi" value="{{regObj.provinsi}}" class="provinsi"></vaadin-text-field>
        </vaadin-form-layout>

        <paper-button  raised class="indigo" on-click="sendData" >Ubah Data</paper-button> 
      </div>
   

      <iron-ajax 
          id="postData"
          headers='{"Access-Control-Allow-Origin": "*" }'
          handle-as="json"
          method="PUT"
          on-response="_handleMuztahikPost"
          on-error="_handleMuztahikPostError"
          Content-Type="application/json"
          debounce-duration="300">
      </iron-ajax>

      <iron-ajax 
          id="getData"
          headers='{"Access-Control-Allow-Origin": "*" }'
          handle-as="json"
          method="GET"
          on-response="_handleMuztahik"
          on-error="_handleMuztahikError"
          Content-Type="application/json"
          debounce-duration="300">
      </iron-ajax>

      <div class="toast">
         <paper-toast text="{{toastError}}" id="toastError" ></paper-toast>
      </div>

    `}ready(){super.ready()}static get properties(){return{storedUser:{type:Object,notify:!0},regObj:{type:Object,notify:!0,value:function(){return{}}},nama:{type:String,notify:!0},toastError:String,resID:String}}static get observers(){return["_routePageChanged(routeData.id)"]}_routePageChanged(page){this.$.getData.url=MyAppGlobals.apiPath+"/api/muztahik/"+page;this.$.getData.headers.authorization=this.storedUser.access_token;this.$.getData.generateRequest()}_handleMuztahik(e){this.regObj=e.detail.response.data}_handleMuztahikError(e){console.log(e);this.set("route.path","/panel/muztahik")}_handleMuztahikPost(e){this.set("route.path","/panel/muztahik")}_handleMuztahikPostError(e){console.log(e);this.set("route.path","/panel/muztahik")}sendData(){this.$.postData.url=MyAppGlobals.apiPath+"/api/muztahik";this.$.postData.headers.authorization=this.storedUser.access_token;this.$.postData.body=this.regObj;this.$.postData.generateRequest()}}window.customElements.define("bmm-muztahik-edit",MuztahikEdit)});