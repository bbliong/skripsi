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



class MuztahikAdd extends PolymerElement {
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

    `;
  }

  static get properties(){
    return{
      Kategori : {
        type : Array,
        notify : true,
        value : function(){
          return [

          ]
        }
      },
      selectedKategori : {
        type : Object,
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
            proposal : 1
          }
        }
      },
      nama  : {
        type : String,
        notify : true
      },
      subkategori : {
        type : Array,
        notify : true,
        value : function(){
          return []
        }
      },
      toastError : String,
      resID : String
    }
  }

  static get observers() {
    return [
      '_kategoriSelected(selectedKategori)',
      '_routePageChanged(routeData.*)'
    ];
  }

   /*********** Start Trigger ketika page berubahs **********/
  _routePageChanged(page) {
      this.$.datass.url = "change" //Fix Problem kategori tidak dikirim lagi
      this.$.datass.url= MyAppGlobals.apiPath + "/api/kategori"
      this.$.datass.headers['authorization'] = this.storedUser.access_token;
  }


   /*********** End Fungsi untuk handle get  kategori  **********/
  _handleKategori(e){
    var response = e.detail.response;
    this.Kategori = response.data
    var data = {
      muztahik : {},
      kategoris : {},
      tanggalProposal : this.formatDate(new Date()),
    }
    this.regObj =   data
  }

  _errorKategori(e){
    console.log(e)
  }

  /*********** End Fungsi untuk handle get  kategori  **********/

   /*********** Start Fungsi untuk handle ketika kategori sudah diilih **********/
  _kategoriSelected(e){
    this.subkategori = e.sub
     switch (e.Kode) {
      case 'Ksm':
        import('./../bmm-kategori/ksm.js');
        break;
      case 'Rbm':
        import('./../bmm-kategori/rbm.js');
        break;
      case 'Paud':
        import('./../bmm-kategori/paud.js');
        break;
      case 'Kafala':
        import('./../bmm-kategori/kafala.js');
        break;
      case 'Jsm':
        import('./../bmm-kategori/jsm.js');
        break;
      case 'Dzm':
        import('./../bmm-kategori/dzm.js');
        break;
      case 'Bsu':
        import('./../bmm-kategori/bsu.js');
        break;
      case 'Br':
        import('./../bmm-kategori/br.js');
        break;
      case 'Btm':
        import('./../bmm-kategori/btm.js');
        break;
      case 'Bsm':
        import('./../bmm-kategori/bsm.js');
        break;
      case 'Bcm':
        import('./../bmm-kategori/bcm.js');
        break;
      case 'Asm':
        import('./../bmm-kategori/asm.js');
        break;
      case 'view404':
        import('./../my-view404.js');
        break;
    } 
  }

   /***********  End Fungsi untuk post data muztahik **********/

  /*********** Start post data pendaftaran muztahik  **********/
  sendData(){
    this.$.postData.url= MyAppGlobals.apiPath + "/api/muztahik"
    this.$.postData.headers['authorization'] = this.storedUser.access_token;
    this.$.postData.body  = this.regObj.muztahik
    this.$.postData.generateRequest();
  }


  /***********  Start Fungsi untuk handle post data muztahik **********/

  _handleMuztahik(e){
    var id = e.detail.response.Data.InsertedID
    switch(this.$.postData.url){
      case MyAppGlobals.apiPath + "/api/muztahik" : 
        if(id){
          this.resID = id
          this.$.postData.url= MyAppGlobals.apiPath + "/api/pendaftaran"
          this.$.postData.headers['authorization'] = this.storedUser.access_token;
          this.$.postData.body  = {
            muztahik_id : id, 
            kategori : this.selectedKategori.KodeP,
            kategoris : this.regObj.kategoris,
            persetujuan : {
                "Proposal" : 1,
                "disposisi_pic" : this.storedUser.name,
                "tanggal_disposisi" :   new Date().toISOString(),   
            },
            tanggalProposal : this.regObj.tanggalProposal,
          }
          this.$.postData.generateRequest();
        }
      break;
      case MyAppGlobals.apiPath + "/api/pendaftaran" : 
        if(id){
          var data = {
            muztahik : {},
            kategoris : {}
          }
          this.regObj =   data
          this.selectedKategori = {}
          this.set('subroute.path', '/muztahik');
        }
      }

  }

  _handleMuztahikError(e){
    if(e.detail.request.xhr.status == 401){
      this.error = e.detail.request.xhr.status
    }else{
        if (this.resID != ""){
          this.$.deleteData.url= MyAppGlobals.apiPath + "/api/muztahik/" + this.resID
          this.$.deleteData.headers['authorization'] = this.storedUser.access_token;
          this.$.deleteData.generateRequest();
        }
      this.toastError =e.detail.request.xhr.response.Message
      this.$.toastError.open();
   }
  }

  _handleMuztahikDelete(e){
    console.log(e)
  }

  _handleMuztahikDeleteError(e){
    console.log(e)
  }
   /*********** End Fungsi untuk handle post data muztahik **********/


  /***********  Start Fungsi untuk format tanggal **********/

  formatDate(date){
    var dd = date.getDate();
    var mm = date.getMonth()+1; 
    var yyyy = date.getFullYear();
    return yyyy + "-" + mm +  "-"+dd
  }
}

window.customElements.define('bmm-muztahik-add', MuztahikAdd);
