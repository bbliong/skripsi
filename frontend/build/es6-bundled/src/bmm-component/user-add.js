define(["../my-app.js"],function(_myApp){"use strict";class UserAdd extends _myApp.PolymerElement{static get template(){return _myApp.html`
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
            pattern="/panel/user/:view"
            data="{{routeData}}"
            tail="{{subroute}}"></app-route>

      <global-variable key="LoginCred" value="{{ storedUser }}"></global-variable>
      <global-variable key="Register" value="{{ regObj }}"></global-variable>
      <global-variable key="error" value="{{ error }}"></global-variable>
      <global-data id="globalData"></global-data>
      <div class="card">
        <h1>Pendaftaran User</h1>

        <vaadin-form-layout>
              <vaadin-text-field label="Nama" value="{{regObj.nama}}"></vaadin-text-field>
              <vaadin-text-field label="Username" value="{{regObj.username}}"></vaadin-text-field>
              <vaadin-password-field label="Passsword" value="{{regObj.password}}"></vaadin-password-field>
              <vaadin-email-field label="Email" value="{{regObj.email}}"></vaadin-email-field>
              <vaadin-select label="Jabatan" value="{{regObj.role}}">
                <template>
                  <vaadin-list-box>
                    <vaadin-item value="1">Admin</vaadin-item>
                    <vaadin-item value="2">Staff</vaadin-item>
                    <vaadin-item value="3">Manager</vaadin-item>
                    <vaadin-item value="4">Kadiv</vaadin-item>
                    <vaadin-item value="5">Administrasi</vaadin-item>
                    <vaadin-item value="6">Keuangan</vaadin-item>
                  </vaadin-list-box>
                </template>
              </vaadin-select>
          </vaadin-form-layout>
      </div>

      <iron-ajax 
          id="postData"
          headers='{"Access-Control-Allow-Origin": "*" }'
          handle-as="json"
          method="POST"
          on-response="_handleUser"
          on-error="_handleUserError"
          Content-Type="application/json"
          debounce-duration="300"></iron-ajax>
      </iron-ajax>
    
      <iron-localstorage name="register-data" value="{{regObj}}" ></iron-localstorage>
      <paper-button  raised class="indigo" on-click="sendData" >Registrasi</paper-button> 
      </div>
      <div class="toast">
         <paper-toast text="{{toastError}}" id="toastError" ></paper-toast>
      </div>

    `}static get properties(){return{storedUser:{type:Object,notify:!0},regObj:{type:Object,notify:!0,value:function(){return{}}},toastError:String,activated:{type:Boolean,value:!1,observer:"_activatedChanged"}}}static get observers(){return["_kategoriSelected(selectedKategori)","_changeStoI(regObj.*)"]}_activatedChanged(newValue,oldValue){if(newValue){this.regObj={nama:"",username:"",email:"",password:"",role:""};localStorage.setItem("register-data",JSON.stringify(this.regObj))}}_changeStoI(f){var array=f.path.split(".");if("role"==array[1]){f.base[array[1]]=parseInt(f.value)}}sendData(){var jabatan="";switch(this.regObj.role){case 1:jabatan="Admin";break;case 2:jabatan="Staff";break;case 3:jabatan="Manager";break;case 4:jabatan="Kafiv";break;case 5:jabatan="Administrasi";break;case 6:jabatan="Keuangan";break;default:{jabatan=""}}this.regObj.details_role=jabatan;this.$.postData.url=MyAppGlobals.apiPath+"/api/user";this.$.postData.headers.authorization=this.storedUser.access_token;this.$.postData.body=this.regObj;console.log(this.$.postData.body);this.$.postData.generateRequest()}_handleUser(e){console.log("berhasil");this.regObj=e.detail.response;console.log(e.detail.response);this.set("subroute.path","/user")}_handleUserError(e){console.log("gagal");this.toastError=e.detail.request.xhr.response.Message;this.$.toastError.open()}_handleUserDelete(e){console.log(e)}_handleUserDeleteError(e){console.log(e)}}window.customElements.define("bmm-user-add",UserAdd)});