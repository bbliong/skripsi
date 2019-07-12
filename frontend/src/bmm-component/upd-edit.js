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
import '@polymer/polymer/lib/elements/dom-if.js';
import './../shared-styles.js';

//polymer
import '@polymer/iron-localstorage/iron-localstorage.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/app-route/app-route.js';
import '@polymer/app-route/app-location.js';

//vaadin
import '@vaadin/vaadin-text-field/vaadin-text-area.js';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';



//Other
import 'global-variable-migration/global-data.js';
import 'global-variable-migration/global-variable.js';

class UpdEdit extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
        #main-table, #sub-table { 
          border-collapse: collapse;
          border: 1px solid #ddd;
          text-align: left;
          width :100%;
        }

        #main-table > tbody > tr > th{
          width : 20%;
          padding : 8px;
        }

        
        #sub-table > tbody > tr > td:first-child{
          width : 30%;
          padding : 8px;
        }


        tr:nth-child(even) {background-color: #f2f2f2;}

        vaadin-text-area {
          max-height: 300px;
          width: 90%;
          margin : 1px 20px
        }

        vaadin-text-field{
          width : 90%;
          margin : 2px 4px;
        }

        @media all and (max-width: 700px){
          .card {
            display :table;
          }

          .card > table {
            display :table-row;
          }
        }

        
      </style>
         <!-- app-location binds to the app's URL -->
         <app-location route="{{route}}"></app-location>

        <!-- this app-route manages the top-level routes -->
        <app-route
            route="{{route}}"
            pattern="/panel/proposal/edit-upd/:kat/:id"
            data="{{routeData}}"
            tail="{{subroute}}"></app-route>

        <global-variable key="LoginCred" value="{{ storedUser }}"></global-variable>
        <global-variable key="error" value="{{ error }}"></global-variable>
        <global-data id="globalData"></global-data>
        
      <div class="card">
        <div class="circle">3</div>
        <h1>UPD Edit</h1>
        <table border="2" id="main-table">
            <tbody>
                <tr>
                  <th>
                  Tujuan<br>
                  <paper-icon-button icon ="add" class="green" data-id="tujuan" on-click="_addField"></paper-icon-button>
                  <paper-icon-button icon="remove" data-id="tujuan" on-click="_removeField">   </paper-icon-button>
                  </th>
                  <td>
                      <dom-repeat items="{{Upd.tujuan}}" id="tujuan_isi">
                          <template>
                               <vaadin-text-area label="Tujuan {{displayIndex(index)}}" value="{{item}}" ></vaadin-text-area>
                          </template>
                      </dom-repeat>
                  </td>
                </tr>
                <tr>
                  <th>Latar Belakang<br>
                  <paper-icon-button icon ="add" class="green" data-id="latar_belakang" on-click="_addField"></paper-icon-button>
                  <paper-icon-button icon="remove" data-id="latar_belakang" on-click="_removeField">   </paper-icon-button></th>
                  <td>
                      <dom-repeat items="{{Upd.latar_belakang}}" id="latar_belakang_isi">
                          <template>
                               <vaadin-text-area label="Latar Belakang {{displayIndex(index)}}" value="{{item}}" ></vaadin-text-area>
                          </template>
                      </dom-repeat>
                  </td>
                </tr>
                <tr>
                  <th>Analisis Kelayakan<br>
                  <paper-icon-button icon ="add" class="green" data-id="analisis_kelayakan" on-click="_addField"></paper-icon-button>
                  <paper-icon-button icon="remove" data-id="analisis_kelayakan" on-click="_removeField">   </paper-icon-button></th>
                  <td>
                      <dom-repeat items="{{Upd.analisis_kelayakan}}" id="analisis_kelayakan_isi">
                          <template>
                               <vaadin-text-area label="Analisis Kelayakan {{displayIndex(index)}}" value="{{item}}" ></vaadin-text-area>
                          </template>
                      </dom-repeat>
                  </td>
                </tr>
                <tr>
                  <th>Program Penyaluran</th>
                  <td>
                      <table border="2" id="sub-table">
                          <tr>
                              <td>Nominal Bantuan</td>
                              <td> <vaadin-text-field disabled value="{{regObj.kategoris.jumlah_bantuan}}"></vaadin-text-field></td>
                          </tr>
                          <tr>
                              <td>Biaya Diserahkan</td>
                              <td> <vaadin-text-field  disabled value="{{regObj.verifikasi.bentuk_bantuan}}"></vaadin-text-field></td>
                          </tr>
                          <tr>
                              <td>Pelaksana Teknis Kegiatan</td>
                              <td> <vaadin-text-field value="{{Upd.program_penyaluran.pelaksana_teknis}}"></vaadin-text-field></td>
                          </tr>
                          <tr>
                              <td>Biaya diberikan melalui rekening</td>
                              <td> <vaadin-text-field value="{{Upd.program_penyaluran.alur_biaya}}"></vaadin-text-field></td>
                          </tr>
                          <tr>
                              <td>Penanggung jawab laporan kegiatan</td>
                              <td> <vaadin-text-field value="{{Upd.program_penyaluran.penanggung_jawab}}"></vaadin-text-field></td>
                          </tr>
                      </table>

                  </td>
                </tr>
                <tr>
                  <th>Rekomendaasi<br>
                  <paper-icon-button icon ="add" class="green" data-id="rekomendasi" on-click="_addField"></paper-icon-button>
                  <paper-icon-button icon="remove" data-id="rekomendasi" on-click="_removeField">   </paper-icon-button></th>
                  <td>
                  <dom-repeat items="{{Upd.rekomendasi}}" id="rekomendasi_isi">
                          <template>
                               <vaadin-text-area label="Rekomendasi {{displayIndex(index)}}" value="{{item}}" ></vaadin-text-area>
                          </template>
                      </dom-repeat>
                  </td>
                </tr>
            </tbody>
        </table>
        <div class="tombol">
        <paper-button  raised class="indigo" on-click="printData" id="cetak_upd">Cetak UPD</paper-button>

        <paper-button  raised class="indigo" on-click="sendData" id="simpan_dan_cetak_upd">Simpan dan Cetak UPD</paper-button>

         <paper-button  raised class="indigo" on-click="periksaUPD" id="approve">Periksa UPD</paper-button>

        </div>
      </div>
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
          id="printData"
          headers='{"Access-Control-Allow-Origin": "*" }'
          method="GET"
          handle-as="json"
          method="GET"
          on-response="_handleUPD"
          on-error="_handleUPDError"
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

      <div class="toast">
         <paper-toast text="{{toastError}}" id="toastError" ></paper-toast>
      </div>


    `;
  }

  static get properties(){
    return {
      Upd : {
        type : Object,
        notify :  true,
        value : function(){
            return {
              "tujuan" :  [" "],
              "latar_belakang" :  [" "],
              "analisis_kelayakan" :  [" "],
              "program_penyaluran" :  {
                "pelaksana_teknis"  : "",
                "alur_biaya"  : "",
                "penanggung_jawab"  : "",
              },
              "rekomendasi" :[""],
              "url" : ""
            }
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
      }
    }
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.*)',
    ];
  }


  displayIndex(index){
    return index + 1
  }
  
  _addField(obj){
    var  id = obj.target.getAttribute("data-id");
    this.Upd[id].push(" ")
    this.shadowRoot.querySelector("#" + id + "_isi").render()
  }

  _removeField(obj){
    var  id = obj.target.getAttribute("data-id");
    var count = this.Upd[id].length
    if(count > 1){
      this.Upd[id].splice(count - 1,1);
      this.shadowRoot.querySelector("#" + id + "_isi").render()
    }
  }

    // FUngsi untuk handle post data proposal

    _handleProposal(e){
      this.regObj = e.detail.response.Data
      //Handle card pihak dverifikasi
      if(typeof this.regObj.upd !== "undefined"){
        console.log("ada upd")
          this.Upd = this.regObj.upd
          if(typeof this.Upd.url  == "undefined"){
            this.shadowRoot.querySelector('#cetak_upd').style.display ="none"
          }else{
            this.shadowRoot.querySelector('#cetak_upd').style.display ="inline-block"
          }
      }else{
        this.shadowRoot.querySelector('#cetak_upd').style.display ="none"
          this.Upd =   {
            "tujuan" :  [""],
            "latar_belakang" :  [""],
            "analisis_kelayakan" :  [""],
            "program_penyaluran" :  {
              "pelaksana_teknis"  : "",
              "alur_biaya"  : "",
              "penanggung_jawab"  : "",
            },
            "rekomendasi" :[""],
            "url" : "",
          }
      }
  
    }
  
    _handleProposalError(e){
      this.set('route.path', '/panel/proposal');
    }

      // Define ketika polymer pertama kali di load 
  
    _routePageChanged(page) {
      this.$.getData.url= MyAppGlobals.apiPath + "/api/pendaftaran/"+ this.routeData.kat  + "/" + this.routeData.id
      this.$.getData.headers['authorization'] = this.storedUser.access_token;
    }

     // Fungsi untuk handle post proposal update

    _handleProposalPost(e){
      console.log(e.detail.response)
      this.printData()
    }

    _handleProposalPostError(e){
      this.set('route.path', '/panel/proposal');
    }


    sendData(){
      this.regObj.upd = this.Upd    
      this.$.postData.url= MyAppGlobals.apiPath + "/api/upd/" + this.routeData.id
      this.$.postData.headers['authorization'] = this.storedUser.access_token;
      this.$.postData.body  = this.regObj
      this.$.postData.generateRequest();
    }

    /* Handle cetak */

    _handleUPD(e){
       if(typeof e.detail.response.url !== "undefined" ){
          document.location.href =  MyAppGlobals.apiPath  + e.detail.response.url
           this.set('route.path', '/panel/proposal');
       }
       
    }

    printData(){
      console.log("check")
      this.$.printData.url= MyAppGlobals.apiPath + "/api/report/upd/"+ this.routeData.kat  + "/" + this.routeData.id
      this.$.printData.headers['authorization'] = this.storedUser.access_token;
      this.$.printData.generateRequest();
    }

    /***************  Handle Periksa UPD  **************/

    _handleProposalPost(e){
      console.log(e.detail.response)
      
    }

    _handleProposalPostError(e){
      this.set('route.path', '/panel/proposal');
    }


    periksaUPD(){
      this.regObj.upd = this.Upd    
      this.$.postData.url= MyAppGlobals.apiPath + "/api/upd/" + this.routeData.id
      this.$.postData.headers['authorization'] = this.storedUser.access_token;
      this.$.postData.body  = this.regObj
      this.$.postData.generateRequest();
    }

    /***************  Handle Periksa UPD  **************/
}

window.customElements.define('bmm-upd-edit', UpdEdit);
