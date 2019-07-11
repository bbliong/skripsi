import{PolymerElement,html}from"../my-app.js";class UserEdit extends PolymerElement{static get template(){return html`
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
            pattern="/panel/user/edit-user/:id"
            data="{{routeData}}"
            tail="{{subroute}}"></app-route>

      <global-variable key="LoginCred" value="{{ storedUser }}"></global-variable>
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
          <span style="color:red;font-weight:bold;">  *Jika password tidak diisi tidak akan diganti</span><br>
          <paper-button  raised class="indigo" on-click="sendData" >Ubah</paper-button> 
      </div>
   

      <iron-ajax 
          id="postData"
          headers='{"Access-Control-Allow-Origin": "*" }'
          handle-as="json"
          method="PUT"
          on-response="_handleUserPost"
          on-error="_handleUserPostError"
          Content-Type="application/json"
          debounce-duration="300">
      </iron-ajax>

      <iron-ajax 
          id="getData"
          headers='{"Access-Control-Allow-Origin": "*" }'
          handle-as="json"
          method="GET"
          on-response="_handleUser"
          on-error="_handleUserError"
          Content-Type="application/json"
          debounce-duration="300">
      </iron-ajax>
     
      <div class="toast">
         <paper-toast text="{{toastError}}" id="toastError" ></paper-toast>
      </div>

    `}static get properties(){return{storedUser:{type:Object,notify:!0},regObj:{type:Object,notify:!0,value:function(){return{}}},nama:{type:String,notify:!0},toastError:String,resID:String}}static get observers(){return["_routePageChanged(routeData.id)","_changeStoI(regObj.*)"]}_changeStoI(f){var array=f.path.split(".");if("role"==array[1]){f.base[array[1]]=parseInt(f.value)}}_routePageChanged(page){this.$.getData.url=MyAppGlobals.apiPath+"/api/user/"+page;this.$.getData.headers.authorization=this.storedUser.access_token;this.$.getData.generateRequest()}_handleUser(e){var temp=e.detail.response.data;if("undefined"!=typeof this.regObj.role){temp.role=temp.role.toString();temp.password=""}this.regObj=temp}_handleUserError(e){this.set("route.path","/panel/user")}_handleUserPost(e){this.set("route.path","/panel/user")}_handleUserPostError(e){console.log(e);this.set("route.path","/panel/user")}sendData(){this.$.postData.url=MyAppGlobals.apiPath+"/api/user/"+this.regObj.Id;this.$.postData.headers.authorization=this.storedUser.access_token;this.$.postData.body=this.regObj;this.$.postData.generateRequest()}}window.customElements.define("bmm-user-edit",UserEdit);