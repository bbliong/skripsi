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
import '@vaadin/vaadin-date-picker/vaadin-date-picker.js';
import '@vaadin/vaadin-checkbox/vaadin-checkbox.js';
import '@vaadin/vaadin-checkbox/vaadin-checkbox-group.js';
import '@vaadin/vaadin-select/vaadin-select.js';
import '@vaadin/vaadin-list-box/vaadin-list-box.js';
import '@vaadin/vaadin-item/vaadin-item.js';
import '@vaadin/vaadin-dialog/vaadin-dialog.js';
import '@vaadin/vaadin-select/vaadin-select.js';

//Other
import 'global-variable-migration/global-data.js';
import 'global-variable-migration/global-variable.js';

class VerifikatorEdit extends PolymerElement {
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

            .verif {
                width : 24%;
            }

            paper-button {
              margin-left: 25px;
            }
            
            @media(max-width : 800px){
                .verif {
                    width : 100%;
                }
            }

               paper-button.green {
          background-color: var(--paper-green-500);
          color: white;
        }
        
        paper-button.green[active] {
          background-color: var(--paper-red-500);
        }

        paper-button.blue {
          background-color: var(--paper-blue-500);
          color: white;
        }
        
        paper-button.blue[active] {
          background-color: var(--paper-blue-500);
        }
        
        paper-button.blue, paper-button.green {
            width : 97%;
        }


        @media all and (max-width: 600px) {
          paper-button, paper-button.blue, paper-button.green {
            width : 90%;
          }
        }
        </style>
                
      <vaadin-dialog aria-label="polymer templates" id="dialog_verifikasi">
        <template>
        <h4>Ingin mencetak Form Verifikasi?</h4>
          <vaadin-button on-click="cetak"> Cetak</vaadin-button>
          <vaadin-button on-click="cancel"  theme="error primary"> Tidak</vaadin-button>
        </template>
      </vaadin-dialog>

            <!-- app-location binds to the app's URL -->
            <app-location route="{{route}}"></app-location>

            <!-- this app-route manages the top-level routes -->
            <app-route
                route="{{route}}"
                pattern="/panel/proposal/edit-verifikator/:kat/:id"
                data="{{routeData}}"
                tail="{{subroute}}"></app-route>

        <global-variable key="LoginCred" value="{{ storedUser }}"></global-variable>
        <global-variable key="error" value="{{ error }}"></global-variable>
        <global-data id="globalData"></global-data>
        <div class="card">
        <h1> Form Verifikasi Proposal</h1>
        <h3 style="color:red"> *Data ini tidak dapat diubah, silahkan diubah dari table muztahik </h3>
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
            <div class="wrap">
                <vaadin-form-layout>
                    <vaadin-date-picker label="Tanggal Verifikasi" placeholder="Pilih tanggal" id="tanggal_verifikasi" value="[[regObj.verifikasi.tanggal_verifikasi]]"  colspan="2"></vaadin-date-picker>
                    <vaadin-text-field label="Nama Pelaksana" value="{{regObj.verifikasi.nama_pelaksana}}" ></vaadin-text-field>
                    <vaadin-text-field label="Jabatan Pelaksana" value="{{regObj.verifikasi.jabatan_pelaksana}}" ></vaadin-text-field>
                    <vaadin-text-field label="Judul Proposal" value="{{regObj.judul_proposal}}"  disabled ></vaadin-text-field>
                    <vaadin-text-field label="Bentuk Bantuan" value="{{regObj.verifikasi.bentuk_bantuan}}" ></vaadin-text-field>
                    <vaadin-text-field label="Jumlah Bantuan" value="{{regObj.kategoris.jumlah_bantuan}}" ></vaadin-text-field>
                    <vaadin-checkbox-group id="checkgroup" label="Cara verifikasi">
                        <vaadin-checkbox value="1">Wawancara</vaadin-checkbox>
                        <vaadin-checkbox value="2">Media/Berita</vaadin-checkbox>
                    </vaadin-checkbox-group>
                </vaadin-form-layout>         
            </div>
        </div>
        <dom-repeat items="{{pihakPenerima}}" id="penerima">
            <template>
                    <div class="card">
                        <div class="wrap">
                        <div class="head">
                        <h3 style="display:inline-block"> Penerima Manfaat  [[displayIndex(index)]] </h3>
                        <paper-icon-button icon="remove" id="{{index}}" on-click="_removePenerima">   </paper-icon-button>
                        </div>

                        <vaadin-text-field label="Nama" value="{{item.nama}}" class="penerima"></vaadin-text-field>
                        <vaadin-text-field label="Usia" value="{{item.usia}}" class="penerima"></vaadin-text-field>
                        <vaadin-text-field label="Tanggungan" value="{{item.tanggungan}}" class="penerima"></vaadin-text-field>
                        <vaadin-text-field label="Alamat" value="{{item.alamat}}" class="penerima"></vaadin-text-field>
                        <vaadin-text-field label="Telepon" value="{{item.telepon}}" class="penerima"></vaadin-text-field>
                    </template>           
                    </div>
                </div>
        </dom-repeat> 
        <paper-button  raised class="indigo" on-click="_addPenerima" id="addPenerima">Tambah Penerima </paper-button>
        <dom-repeat items="{{pihakKonfirmasi}}" id="konfirmasi">
            <template>
                    <div class="card">
                        <div class="wrap">
                        <div class="head">
                        <h3 style="display:inline-block"> Pihak Diverfikasi / Dikonfirmasi  [[displayIndex(index)]] </h3>
                        <paper-icon-button icon="remove" id="{{index}}" on-click="_removeKonfirmasi">   </paper-icon-button>
                        </div>

                        <vaadin-text-field label="Nama" value="{{item.nama}}" class="verif"></vaadin-text-field>
                        <vaadin-text-field label="Lembaga" value="{{item.lembaga}}" class="verif"></vaadin-text-field>
                        <vaadin-text-field label="Jabatan" value="{{item.jabatan}}" class="verif"></vaadin-text-field>
                        <vaadin-text-field label="Telepon" value="{{item.telepon}}" class="verif"></vaadin-text-field>
                       
                        <h3> Hasil Verifikasi  / Konfirmasi <paper-icon-button icon ="add" class="green" id="[[index]]" on-click="_addHasil">Add</paper-icon-button>
                        </h3>
                        <vaadin-form-layout> 
                        <dom-repeat items="{{item.hasil}}" id="[[displayName(index)]]">
                            <template>
                                <vaadin-text-field value="{{item}}" colspan="2" label="Hasil  [[displayIndex(index)]] "></vaadin-text-field >
                            </template>
                        </dom-repeat>
                        </vaadin-form-layout> 
                    </template>           
                    </div>
                </div>
        </dom-repeat> 
        <paper-button  raised class="indigo" on-click="_addKonfirmasi" id="addKonfirmasi">Tambah Pihak </paper-button>
       
        <div class="card">
            <div class="wrap">
                <h3> Hasil Verifikasi </h3>
                <vaadin-form-layout>
                <vaadin-select label="Asnaf" value="{{regObj.kategoris.asnaf}}">
                    <template>
                    <vaadin-list-box>
                        <vaadin-item value="Fakir">Fakir</vaadin-item>
                        <vaadin-item value="Miskin">Miskin</vaadin-item>
                        <vaadin-item value="Amil">Amil</vaadin-item>
                        <vaadin-item value="Mu'allaf">Mu'allaf</vaadin-item>
                        <vaadin-item value="Gharimin">Gharimin</vaadin-item>
                        <vaadin-item value="Fisabilillah">Fisabilillah</vaadin-item>
                        <vaadin-item value="Ibnus Sabil">Ibnus Sabil</vaadin-item>
                    </vaadin-list-box>
                    </template>
                </vaadin-select>
                    <vaadin-select label="Kelengkapan dan Administrasi" value="{{regObj.verifikasi.hasil_verifikasi.kelengkapan_adm}}">
                        <template>
                        <vaadin-list-box>
                            <vaadin-item value="Lengkap">Lengkap</vaadin-item>
                            <vaadin-item value="Tidak">Tidak</vaadin-item>
                        </vaadin-list-box>
                        </template>
                    </vaadin-select>
                    <vaadin-select label="Direkomendasikan" value="{{regObj.verifikasi.hasil_verifikasi.direkomendasikan}}">
                        <template>
                        <vaadin-list-box>
                            <vaadin-item value="Ya">Ya</vaadin-item>
                            <vaadin-item value="Tidak">Tidak</vaadin-item>
                        </vaadin-list-box>
                        </template>
                    </vaadin-select>
                    <vaadin-select label="Dokumentasi" value="{{regObj.verifikasi.hasil_verifikasi.dokumentasi}}">
                        <template>
                        <vaadin-list-box>
                            <vaadin-item value="Ada">Ada</vaadin-item>
                            <vaadin-item value="Tidak">Tidak</vaadin-item>
                        </vaadin-list-box>
                        </template>
                    </vaadin-select>
                </vaadin-form-layout>
            </div>
        </div>
     <paper-button  raised class="blue" on-click="sendData" id="Verifikasi">Simpan Verifikasi</paper-button>
     <paper-button  raised class="green" on-click="sendData" id="Verifikasi_manager">Mengetahui Hasil Verifikasi</paper-button>
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
          id="printData"
          headers='{"Access-Control-Allow-Origin": "*" }'
          method="GET"
          handle-as="json"
          method="GET"
          on-response="_handleVerif"
          on-error="_handleVerifError"
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
            "judul_proposal" : "-",
            "verifikasi" : {
                "tanggal_verifikasi" : this.formatDate(new Date()),
            }
          }
        }
      },
      toastError : String,
      resID : String,
      activated: {
        type: Boolean,
        value:false,
        observer: '_activatedChanged'
      },
      pihakKonfirmasi : {
          type : Array,
          notify :  true,
          value : function(){
              return[
                  {
                      "nama" : "",
                      "lembaga" : "",
                      "jabatan" : "",
                      "telepon" : "",
                      "hasil" : [""]
                  }
              ]
          }
      },
      pihakPenerima : {
        type : Array,
        notify :  true,
        value : function(){
            return[
                {
                    "nama" : "",
                    "usia" : "",
                    "tanggungan" : "",
                    "alamat" : "",
                    "tujuan" : ""
                }
            ]
        }
    }
    }
  }

  inisialRegObj(){
    this.regObj = {
    }
  }

  
  static get observers() {
    return [
      '_routePageChanged(routeData.*)',
      '_changeDateVerifikasi(regObj.verifikasi.tanggal_verifikasi)',
      '_changeStoI(regObj.kategoris.*)',
    ];
  }

  displayIndex(index){
    return index + 1
  }
  displayName(index){
      return "item_hasil_" + index
  }
  
  _activatedChanged(newValue, oldValue){
    if(newValue) {
        // Setup checkbox
        const checkboxGroup = this.$.checkgroup
        var that =this
        checkboxGroup.addEventListener('value-changed', function(event) {
            that.regObj.verifikasi.cara_verifikasi = event.detail.value
        });

    }
  }

  /* Event untuk konfirmasi */
  _addKonfirmasi(){
     
    var obj = {
        "nama" : "",
        "lembaga" : "",
        "jabatan" : "",
        "telepon" : "",
        "hasil" : [""]
        }
    this.pihakKonfirmasi.push(obj)
    this.$.konfirmasi.render();
  }

  
  _removeKonfirmasi(obj){
    var id = obj.target.id 
    this.pihakKonfirmasi.splice(id,1);
    this.$.konfirmasi.render();
  }

  _addHasil(e){
    var id = e.target.id 
    this.pihakKonfirmasi[id].hasil.push("-")
    this.shadowRoot.querySelector("#item_hasil_"+id).render()

  }


  /* Event untuk konfirmasi */


  /* Event untuk Penerima */
  _addPenerima(){
     
    var obj = {
      "nama" : "",
      "usia" : "",
      "tanggungan" : "",
      "alamat" : "",
      "tujuan" : ""
        }
    this.pihakPenerima.push(obj)
    this.$.penerima.render();
  }

  
  _removePenerima(obj){
    var id = obj.target.id 
    this.pihakPenerima.splice(id,1);
    this.$.penerima.render();
  }

  /* Event untuk Penerima */

  // Define ketika polymer pertama kali di load 
  
  _routePageChanged(page) {
    switch (this.storedUser.role){
      case 2 :
        this.shadowRoot.querySelector("#Verifikasi_manager").style.display = "none" 
        break;
      case 3 :
        this.shadowRoot.querySelector("#Verifikasi").style.display = "none" 
        break;
    }
    this.$.getData.url= MyAppGlobals.apiPath + "/api/pendaftaran/"+ this.routeData.kat  + "/" + this.routeData.id
    this.$.getData.headers['authorization'] = this.storedUser.access_token;
  }

  // FUngsi untuk handle post data proposal

  _handleProposal(e){
    this.regObj = e.detail.response.Data
    if(typeof this.regObj.verifikasi == "undefined"){
        this.regObj.verifikasi =   {
            "tanggal_verifikasi" : this.formatDate(new Date()),
            "nama_pelaksana" : " ",
            "jabatan_pelaksana" : " ",
            "bentuk_bantuan" : " ",
            "cara_verifikasi" : [],
            "hasil_verifikasi" : {
                "kelengkapan_adm" : " ",
                "direkomendasikan" : " ",
                "dokumentasi" : " "
            }
        }
    }

 
    if(typeof this.regObj.verifikasi.nama_pelaksana == "undefined"  ){
      this.regObj.verifikasi.nama_pelaksana = this.storedUser.name
    }else if(this.regObj.verifikasi.nama_pelaksana == ""){
      this.regObj.verifikasi.nama_pelaksana = this.storedUser.name
    }

    //Handle checkbox cara verifikasi
    if(typeof this.regObj.verifikasi.cara_verifikasi !== "undefined"){
      if(this.regObj.verifikasi.cara_verifikasi.length !== 0){
          let cara = this.regObj.verifikasi.cara_verifikasi
          const options = Array.from(this.shadowRoot.querySelectorAll('vaadin-checkbox[value]'));
          cara.forEach(function(item, index){
              options[index].checked =true
          })
      }
    }

    //Handle card pihak dverifikasi
    if(typeof this.regObj.verifikasi.pihak_konfirmasi !== "undefined"){
        this.pihakKonfirmasi = this.regObj.verifikasi.pihak_konfirmasi
    }

    //Handle card pihak dverifikasi
    if(typeof this.regObj.verifikasi.penerima_manfaat !== "undefined"){
      this.pihakPenerima = this.regObj.verifikasi.penerima_manfaat
  }

  }

  _handleProposalError(e){
    this.error = e.detail.request.xhr.status
    this.set('route.path', '/panel/proposal');
  }

  // Fungsi untuk handle post proposal update

  _handleProposalPost(e){
    this.shadowRoot.querySelector('#dialog_verifikasi').opened =  true
  }

  _handleProposalPostError(e){
    this.error = e.detail.request.xhr.status
    this.set('route.path', '/panel/proposal');
  }


  sendData(){
   
    this.regObj.verifikasi.pihak_konfirmasi = this.pihakKonfirmasi     
    this.regObj.verifikasi.penerima_manfaat = this.pihakPenerima  
    this.$.postData.url= MyAppGlobals.apiPath + "/api/verifikator/" + this.routeData.id
    this.$.postData.headers['authorization'] = this.storedUser.access_token;
    this.$.postData.body  = this.regObj
    this.$.postData.generateRequest();
  }

  _changeDateVerifikasi(f){
      console.log(f)
      if (f !== "" && typeof f !== "undefined" ){
        var date = this.$.tanggal_verifikasi
        var that =this
        date.value = this.formatDate(new Date(f))
        date.addEventListener("change", function(){
          if(date.value !== ""){
            that.regObj.verifikasi.tanggal_verifikasi = new Date(date.value).toISOString()
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

  // Fungsi convert ke int 
  _changeStoI(f){
    var array = f.path.split(".");
    if (array[2] == "jumlah_bantuan"){
      f.base[array[2]] = parseInt(f.value)
    }
  }

  
   /******  Handle print form verifikator *******/
  printData(){
    this.$.printData.url= MyAppGlobals.apiPath + "/api/report/verifikasi/"+ this.routeData.kat  + "/" + this.routeData.id
    this.$.printData.headers['authorization'] = this.storedUser.access_token;
    this.$.printData.generateRequest();
  }

  cetak(){
    this.shadowRoot.querySelector('#dialog_verifikasi').opened =  false
    this.printData();
  }

  cancel(){
    this.shadowRoot.querySelector('#dialog_verifikasi').opened =  false
    this.set('route.path', '/panel/proposal');
  }

  _handleVerif(e){
      if(typeof e.detail.response.url !== "undefined" ){
        document.location.href =  MyAppGlobals.apiPath  + e.detail.response.url
        this.set('route.path', '/panel/proposal');
      }
  }
  _handleVerifError(e){
    this.error = e.detail.request.xhr.status
    console.log(e)
  }


}



window.customElements.define('bmm-verifikator-edit', VerifikatorEdit);
