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



class ProposalEdit extends PolymerElement {
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
              <bmm-kategori-ksm name="1" subKategori="{{subkategori}}"  user="{{User}}"></bmm-kategori-ksm>
              <bmm-kategori-rbm name="2" subKategori="{{subkategori}}"  user="{{User}}"></bmm-kategori-rbm>
              <bmm-kategori-paud name="3" subKategori="{{subkategori}}"  user="{{User}}"></bmm-kategori-paud>
              <bmm-kategori-kafala name="4" subKategori="{{subkategori}}"  user="{{User}}"></bmm-kategori-kafala>
              <bmm-kategori-jsm name="5" subKategori="{{subkategori}}"  user="{{User}}"></bmm-kategori-jsm>
              <bmm-kategori-dzm name="6" subKategori="{{subkategori}}"  user="{{User}}"></bmm-kategori-dzm>
              <bmm-kategori-bsu name="7" subKategori="{{subkategori}}"  user="{{User}}"></bmm-kategori-bsu>
              <bmm-kategori-br name="8" subKategori="{{subkategori}}"  user="{{User}}"></bmm-kategori-br>
              <bmm-kategori-btm name="9" subKategori="{{subkategori}}"  user="{{User}}"></bmm-kategori-btm>
              <bmm-kategori-bsm name="10" subKategori="{{subkategori}}"  user="{{User}}"></bmm-kategori-bsm>
              <bmm-kategori-bcm name="11" subKategori="{{subkategori}}"  user="{{User}}"></bmm-kategori-bcm>
              <bmm-kategori-asm name="12" subKategori="{{subkategori}}" user="{{User}}"></bmm-kategori-asm>
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
      
      <div class="toast">
         <paper-toast text="{{toastError}}" id="toastError" ></paper-toast>
      </div>

    `;
  }

  static get properties(){
    return{
      Kategori : {
        type : Array,
        notify : true
      },
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
      User : {
        type : Array,
        notify : true,
        value : function(){
          return [

          ]
        }
      },
      nama  : {
        type : String,
        notify : true
      },
      toastError : String,
      resID : String,
      selectedKategori : Number,
      subkategori : {
        type : Array,
        notify : true,
        value : function(){
          return []
        }
      },
    }
  }

  inisialRegObj(){
    this.regObj = {
    }
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.*)',
      '_kategoriSelected(selectedKategori)'
    ];
  }
  // Define ketika polymer pertama kali di load 
  
  _routePageChanged(page) {
    this.$.datass.url= MyAppGlobals.apiPath + "/api/kategori"
    this.$.datass.headers['authorization'] = this.storedUser.access_token;
    this.$.managerDPP.url= MyAppGlobals.apiPath + "/api/users?role=3"  
    this.$.managerDPP.headers['authorization'] = this.storedUser.access_token;
    this.$.datass.generateRequest();
    // this.$.getData.generateRequest();
  }

  // Handle user manager

  _handleManager(e){
    var response = e.detail.response;
    this.User = response.data
    console.log(response)
  }

  _errorManager(e){
    this.error = e.detail.request.xhr.status
    console.log(e)
  }
  // end user manager

  // FUngsi untuk handle post data proposal

  _handleProposal(e){
    this.regObj = e.detail.response.Data
    this.selectedKategori = this.routeData.kat
  }

  _handleProposalError(e){
    this.set('route.path', '/panel/proposal');
  }
  

  // Fungsi untuk handle post proposal update

  _handleProposalPost(e){
    this.set('route.path', '/panel/proposal');
  }

  _handleProposalPostError(e){
    this.error = e.detail.request.xhr.status
    this.set('route.path', '/panel/proposal');
  }

  // Fungsi untuk handle kategori
  _handleKategori(e){
    var response = e.detail.response;
    this.subkategori = response.data.filter(x => x.KodeP == this.routeData.kat)[0].sub
    this.$.getData.url= MyAppGlobals.apiPath + "/api/pendaftaran/"+ this.routeData.kat  + "/" + this.routeData.id
    this.$.getData.headers['authorization'] = this.storedUser.access_token;
  }
  _errorKategori(e){

  }
  

  sendData(){
    console.log( this.regObj)
    this.$.postData.url= MyAppGlobals.apiPath + "/api/pendaftaran/" + this.routeData.id
    this.$.postData.headers['authorization'] = this.storedUser.access_token;
    this.$.postData.body  = this.regObj
    // console.log(this.$.postData.body)
    this.$.postData.generateRequest();
  }

  // fungsi untuk handle pendaftaran
  // _addPendaftaran(e){
  //   console.log(e)
  // }


  _kategoriSelected(e){
    switch(e) {
      case "1":
        import('./../bmm-kategori/ksm.js');
        break;
      case "2":
        import('./../bmm-kategori/rbm.js');
        break;
      case "3":
        import('./../bmm-kategori/paud.js');
        break;
      case "4":
        import('./../bmm-kategori/kafala.js');
        break;
      case "5":
        import('./../bmm-kategori/jsm.js');
        break;
      case "6":
        import('./../bmm-kategori/dzm.js');
        break;
      case "7":
        import('./../bmm-kategori/bsu.js');
        break;
      case "8":
        import('./../bmm-kategori/br.js');
        break;
      case "9":
        import('./../bmm-kategori/btm.js');
        break;
      case "10":
        import('./../bmm-kategori/bsm.js');
        break;
      case "11":
        import('./../bmm-kategori/bcm.js');
        break;
      case "12":
        import('./../bmm-kategori/asm.js');
        break;
      case 'view404':
        import('./../my-view404.js');
        break;

  
    }
  
  }
}

window.customElements.define('bmm-proposal-edit', ProposalEdit);
