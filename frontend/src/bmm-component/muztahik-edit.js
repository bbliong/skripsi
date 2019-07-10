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
import '@vaadin/vaadin-text-field/vaadin-text-area.js';
import '@vaadin/vaadin-form-layout/vaadin-form-layout.js';
import '@vaadin/vaadin-select/vaadin-select.js';
import '@vaadin/vaadin-list-box/vaadin-list-box.js';
import '@vaadin/vaadin-item/vaadin-item.js';

//Other
import 'global-variable-migration/global-data.js';
import 'global-variable-migration/global-variable.js';



class MuztahikEdit extends PolymerElement {
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

    `;
  }
  ready(){
    super.ready()
    // let role = this.storedUser.role
    // let provinsi = this.shadowRoot.querySelector(".provinsi")
    // if(role == 4) {
    //   provinsi.setAttribute("style", "display:none")
    // }
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
    this.$.getData.url= MyAppGlobals.apiPath + "/api/muztahik/"+ page
    this.$.getData.headers['authorization'] = this.storedUser.access_token;
    this.$.getData.generateRequest();
  }

  // FUngsi untuk handle post data muztahik

  _handleMuztahik(e){
    this.regObj = e.detail.response.data
  }

  _handleMuztahikError(e){
    console.log(e)
    this.set('route.path', '/panel/muztahik');
  }

  // Fungsi untuk handle post muztahik update

  _handleMuztahikPost(e){
    this.set('route.path', '/panel/muztahik');
  }

  _handleMuztahikPostError(e){
    console.log(e)
    this.set('route.path', '/panel/muztahik');
  }

  sendData(){
    this.$.postData.url= MyAppGlobals.apiPath + "/api/muztahik"
    this.$.postData.headers['authorization'] = this.storedUser.access_token;
    this.$.postData.body  = this.regObj
    this.$.postData.generateRequest();
  }

  // fungsi untuk handle pendaftaran
  // _addPendaftaran(e){
  //   console.log(e)
  // }


}

window.customElements.define('bmm-muztahik-edit', MuztahikEdit);
