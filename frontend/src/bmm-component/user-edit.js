/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';
import './../shared-styles.js';

//polymer

import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/app-route/app-location.js';
import '@polymer/paper-toast/paper-toast.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-localstorage/iron-localstorage.js';


//Vaadin
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@vaadin/vaadin-text-field/vaadin-password-field.js';
import '@vaadin/vaadin-text-field/vaadin-email-field.js';
import '@vaadin/vaadin-text-field/vaadin-text-area.js';
import '@vaadin/vaadin-form-layout/vaadin-form-layout.js';
import '@vaadin/vaadin-select/vaadin-select.js';
import '@vaadin/vaadin-list-box/vaadin-list-box.js';
import '@vaadin/vaadin-item/vaadin-item.js';

//Other
import 'global-variable-migration/global-data.js';
import 'global-variable-migration/global-variable.js';



class UserEdit extends PolymerElement {
  static get template() {
    return html`
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
                    <vaadin-item value="7">Pengurus</vaadin-item>
                    <vaadin-item value="8">Pengawas</vaadin-item>
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

    `;
  }


  static get properties(){
    return{
      storedUser : {
        type : Object,
        notify : true
      },
      regObj  : {
        type : Object,
        notify : true,
        value : function(){
          return {
          }
        }
      },
      nama  : {
        type : String,
        notify : true
      },
      toastError : String,
      resID : String,
    }
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.id)',
    ];
  }


  // Define ketika polymer pertama kali di load 
  
  _routePageChanged(page) {
    this.$.getData.url= MyAppGlobals.apiPath + "/api/user/"+ page
    this.$.getData.headers['authorization'] = this.storedUser.access_token;
    this.$.getData.generateRequest();
  }

  // FUngsi untuk handle post data user

  _handleUser(e){
    var temp = e.detail.response.data
    if(typeof this.regObj.role != "undefined"){
      temp.role = temp.role.toString();
      temp.password = ""
    }
    this.regObj = temp
  }

  _handleUserError(e){
    this.set('route.path', '/panel/user');
  }

  // Fungsi untuk handle post user update

  _handleUserPost(e){
    this.set('route.path', '/panel/user');
  }

  _handleUserPostError(e){
    console.log(e)
    this.set('route.path', '/panel/user');
  }

  sendData(){
    var jabatan = ""
    this.regObj.role = parseInt(this.regObj.role)
    switch(this.regObj.role){
      case 1 : 
        jabatan = "Admin"
      break;
      case 2: 
        jabatan = "Staff"
      break;
      case 3 : 
        jabatan = "Manager"
      break;
      case 4 : 
        jabatan = "Kadiv"
      break;
      case 5 : 
        jabatan = "Administrasi"
      break;
      case 6 : 
        jabatan = "Keuangan"
      break;
      case 7 : 
        jabatan = "Pengawas"
      break;
      default : {
        jabatan = ""
      }
    }
    this.regObj.details_role = jabatan
    this.$.postData.url= MyAppGlobals.apiPath + "/api/user/"  + this.regObj.Id
    this.$.postData.headers['authorization'] = this.storedUser.access_token;
    this.$.postData.body  = this.regObj
    console.log(this.regObj)
    this.$.postData.generateRequest();
  }

}

window.customElements.define('bmm-user-edit', UserEdit);
