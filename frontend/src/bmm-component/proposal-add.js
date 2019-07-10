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



class ProposalAdd extends PolymerElement {
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
      User : {
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
      '_routePageChanged(route.*)'
    ];
  }


  //  Trigger untuk ketika load
  _routePageChanged(page) {
      // this.inisialRegObj()
      this.$.datass.url= MyAppGlobals.apiPath + "/api/kategori"
      this.$.datass.headers['authorization'] = this.storedUser.access_token;
      this.$.managerDPP.url= MyAppGlobals.apiPath + "/api/users?role=2"  
      this.$.managerDPP.headers['authorization'] = this.storedUser.access_token;
      this.$.getData.url= MyAppGlobals.apiPath + "/api/muztahik/" + this.routeData.view
      this.$.getData.headers['authorization'] = this.storedUser.access_token;
      this.selectedKategori = null
  }

  // Fungsi untuk handle kategori
  _handleKategori(e){
    var response = e.detail.response;
    this.Kategori = response.data
  }
  _errorKategori(e){
    console.log(e)
  }

  _handleManager(e){
    var response = e.detail.response;
    this.User = response.data
  }

  _errorManager(e){
    console.log(e)
  }

  _kategoriSelected(e){
    if( e !== null){
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
    
  }
  sendData(){
    this.$.postData.url= MyAppGlobals.apiPath + "/api/pendaftaran"
    this.$.postData.headers['authorization'] = this.storedUser.access_token;
    this.$.postData.body  = {
      muztahik_id : this.regObj.muztahik._id, 
      judul_proposal : this.regObj.judul_proposal,
      tanggalProposal : this.regObj.tanggalProposal,
      kategori : this.selectedKategori.KodeP,
      kategoris : this.regObj.kategoris,
      persetujuan : {
          "Proposal" : 1,
          "manager_id" :  this.regObj.persetujuan.manager_id,
      }
    }
  console.log(  this.$.postData.body)
  this.$.postData.generateRequest();
  }


  // FUngsi untuk handle post data proposal

  _handleProposal(e){
    this.set('route.path', '/panel/proposal');
  }
  _handleProposalError(e){
    console.log(e)
  }

  // FUngsi untuk handle post data muztahik

  _handleMuztahik(e){
    // Ini digunakan karena tidak bisa define sub object dalam sub object, jadi define dulu baru di taruh
    var date = this.formatDate(new Date())
    var data = {
      tanggalProposal :  new Date(date).toISOString(),
      muztahik : e.detail.response.data,
      kategoris : {},
      persetujuan  : {}
    }
    this.regObj =   data
  }

  _handleMuztahikError(e){
    this.set('route.path', '/panel/muztahik');
  }

  formatDate(date){
    var dd = date.getDate();
    var mm = date.getMonth()+1; 
    var yyyy = date.getFullYear();
    return yyyy + "-" + mm +  "-"+dd
  }

}

window.customElements.define('bmm-proposal-add', ProposalAdd);
