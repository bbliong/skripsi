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
import './../shared-styles.js';
import('./../config/loader.js');

// vaadin Component
import '@vaadin/vaadin-item/vaadin-item.js';
import '@vaadin/vaadin-select/vaadin-select.js';
import '@vaadin/vaadin-button/vaadin-button.js';
import '@vaadin/vaadin-dialog/vaadin-dialog.js';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@vaadin/vaadin-text-field/vaadin-text-area.js';
import '@vaadin/vaadin-text-field/vaadin-number-field.js';
import '@vaadin/vaadin-form-layout/vaadin-form-layout.js';
import '@vaadin/vaadin-list-box/vaadin-list-box.js';
import '@vaadin/vaadin-date-picker/vaadin-date-picker.js';


// Iron Component
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/paper-button/paper-button.js';

// polymer Component
import '@polymer/app-route/app-route.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/app-route/app-location.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-menu-button/paper-menu-button.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';

class Laporan extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
         p{
           color : red;
           font-weight : bold;
         }
      </style>

      <bmm-loader></bmm-loader>
      <!-- this app-route manages the top-level routes -->
      <app-route
        route="{{route}}"
        pattern="/panel/muztahik/:view"
        data="{{routeData}}"
        tail="{{subroute}}"></app-route>

      <global-variable key="LoginCred" value="{{ storedUser }}"></global-variable>
      <global-variable key="Register" value="{{ regObj }}"></global-variable>
      <global-variable key="error" value="{{ error }}"></global-variable>
      <global-variable key="toast" value="{{ toast }}"></global-variable>
      <global-data id="globalData"></global-data>

      <iron-ajax
          auto 
          id="datass"
          on-response="_handleKategori"
          on-error="_errorKategori">
      </iron-ajax>

      <iron-ajax 
          id="printData"
          headers='{"Access-Control-Allow-Origin": "*" }'
          method="POST"
          handle-as="json"
          on-response="_handleReport"
          on-error="_handleReportError"
          Content-Type="application/json"
          debounce-duration="300">
      </iron-ajax>


      <div class="card" id="main">
        <h1>Laporan</h1>
        <vaadin-form-layout>
          <vaadin-date-picker id="start" label="Tanggal Awal" value="{{filter.start_date}}"></vaadin-date-picker>
          <vaadin-date-picker id="end" label="Tanggal Akhir" value="{{filter.end_date}}" ></vaadin-date-picker>
          <vaadin-select value="{{selectedKategori}}" colspan="2" label="kategori">
            <template>
              <vaadin-list-box>
              <vaadin-item label="Semua" value="0">Semua</vaadin-item>
                <dom-repeat items="{{Kategori}}">
                  <template>
                    <vaadin-item label="{{item.Value}}" value="{{item.KodeP}}">{{item.Value}}</vaadin-item>
                  </template>
                </dom-repeat>
              </vaadin-list-box>
            </template>
          </vaadin-select>

          <vaadin-button on-click="printData" theme="success"> Monitoring </vaadin-button>
          <vaadin-button on-click="printDataKategori"  theme="primary"> Per Kategori</vaadin-button>
        </vaadin-form-layout>

        <p> *Tombol Monitoring digunakan untuk mencetak laporan dalam 1 buah file (filter kategori tidak berpengaruh)</p>
        <p> *Tombol Per Kategori digunakan untuk mencetak laporan monitoring dengan file terpisah</p>
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
        type : Number,
        notify : true
      },
      Filter : {
        type : Object,
        notify : true,
        value : function(){
         return {
          "start_date" : this.formatDate(new Date()),
          "end_date" : this.formatDate(new Date()),
         }
        }
      }
    }
  }

      
  static get observers() {
    return [
      '_routePageChanged(routeData.*)',
      '_changeDateStart(Filter.start_date)',
      '_changeDateEnd(Filter.end_date)',
    ];
  }

    _changeDateStart(f){
      if (f !== "" && typeof f !== "undefined" ){
        var date = this.$.start
        var that =this
        date.value = this.formatDate(new Date(f))

        if(date.value !== ""){
          that.Filter.start_date = new Date(date.value).toISOString()
        }

        date.addEventListener("change", function(){
          if(date.value !== ""){

            that.Filter.start_date = new Date(date.value).toISOString()
          }
        })
      }
    }

    _changeDateEnd(f){
      if (f !== "" && typeof f !== "undefined" ){
        var date = this.$.end
        var that =this
        date.value = this.formatDate(new Date(f))

        if(date.value !== ""){
          that.Filter.end_date = new Date(date.value).toISOString()
        }

        date.addEventListener("change", function(){
          if(date.value !== ""){

            that.Filter.end_date = new Date(date.value).toISOString()
          }
        })
      }
    }

    formatDate(date){
      var dd = date.getDate();
      var mm = date.getMonth()+1; 
      var yyyy = date.getFullYear();
      return yyyy + "-" + mm +  "-"+dd
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
  this._loading(0)
  }

  _errorKategori(e){
    console.log(e)
  }

  
  _loading(show){
    if(show ==0 ){
     this.shadowRoot.querySelector("#main").style.display = "block"
     var that = this
     setTimeout(function () {
       that.shadowRoot.querySelector("bmm-loader").style.display = "none"
     }, 2000);
    } else { 
     this.shadowRoot.querySelector("#main").style.display = "none"
      this.shadowRoot.querySelector("bmm-loader").style.display = "block"
    }
   }

   connectedCallback() {
    super.connectedCallback();
    this._loading(1)
  } 

    
   /******  Handle print form verifikator *******/
  printData(){
    this.$.printData.url= MyAppGlobals.apiPath + "/api/report/proposal"
    this.$.printData.headers['authorization'] = this.storedUser.access_token;
    this.$.printData.body  = {
      "start_date" : this.Filter.start_date,
      "end_date" : this.Filter.end_date,
    }
    this.$.printData.generateRequest();
  }

  printDataKategori(){
   if(this.selectedKategori == ""){
    this.toast = "Kategori belum dipilih"
    return
   }

    this.$.printData.url= MyAppGlobals.apiPath + "/api/report/proposal/kategori"
    this.$.printData.headers['authorization'] = this.storedUser.access_token;
    this.$.printData.body  = {
      "start_date" : this.Filter.start_date,
      "end_date" : this.Filter.end_date,
      "kategori" : this.selectedKategori,
    }
    console.log( this.$.printData.body)
    this.$.printData.generateRequest();
  }


  _handleReport(e){
    if(typeof e.detail.response.url !== "undefined" ){
      document.location.href =  MyAppGlobals.apiPath  + e.detail.response.url
      // this.set('route.path', '/panel/proposal');
    }
  }

  _handleReportError(e){
    this.error = e.detail.request.xhr.status
    console.log(e)
  }

}
window.customElements.define('bmm-laporan', Laporan);
