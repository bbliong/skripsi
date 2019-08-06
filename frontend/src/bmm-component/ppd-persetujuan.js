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
import '@polymer/iron-localstorage/iron-localstorage.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/app-route/app-route.js';
import '@polymer/app-route/app-location.js';
import '@polymer/paper-icon-button/paper-icon-button.js';


//vaadin
import '@vaadin/vaadin-item/vaadin-item.js';
import '@vaadin/vaadin-select/vaadin-select.js';
import '@vaadin/vaadin-list-box/vaadin-list-box.js';
import '@vaadin/vaadin-text-field/vaadin-text-area.js';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@vaadin/vaadin-text-field/vaadin-number-field.js';
import '@vaadin/vaadin-dialog/vaadin-dialog.js';
import '@vaadin/vaadin-date-picker/vaadin-date-picker.js';
import '@vaadin/vaadin-button/vaadin-button.js';
import '@vaadin/vaadin-dialog/vaadin-dialog.js';


//Other
import 'global-variable-migration/global-data.js';
import 'global-variable-migration/global-variable.js';


class PpdPersetujuan extends PolymerElement {
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

        vaadin-text-field, vaadin-number-field ,  vaadin-select,  vaadin-date-picker, p, vaadin-button, paper-button {
          width : 90%;
          margin : 2px 20px;
        }

        @media all and (max-width: 900px){
          .card {
            display :table;
          }

          .card > table {
            display :table-row;
          }
        }


        @media all and (min-width: 600px) {
          .aside {
            flex-grow: 1;
            flex-basis: 0;
            width : 50%;
          }
        }

        @media all and (max-width: 700px){
          .main {
            padding: 0px;
            margin-left: -10px;
          }
          table {
            margin-top : 30px;
          }
        }

        @media all and (min-width: 800px) {
          .main {
            flex-grow: 3;
            flex-basis: 0;
            display :flex;
          }

          .main {
            order: 2;
          }

        }
        table { 
          border-collapse: collapse;
          border: 1px solid #ddd;
          text-align: left;
          width :100%;
        }

        table > tbody > tr > td{
          padding : 8px;
        }

        tr:nth-child(even) {background-color: #f2f2f2;}

        paper-button.blue {
          background-color: var(--paper-blue-500);
          color: white;
        }
        
        paper-button.blue[active] {
          background-color: var(--paper-blue-500);
        }


      </style>
       <!-- app-location binds to the app's URL -->
       <app-location route="{{route}}"></app-location>

      <!-- this app-route manages the top-level routes -->
      <app-route
          route="{{route}}"
          pattern="/panel/ppd/ppd-persetujuan/:kat/:id"
          data="{{routeData}}"
          tail="{{subroute}}"></app-route>

      <global-variable key="LoginCred" value="{{ storedUser }}"></global-variable>
      <global-variable key="error" value="{{ error }}"></global-variable>
      <global-data id="globalData"></global-data>

      <vaadin-dialog>
        <template>
        <h4>Ingin mencetak Form PPD?</h4>
          <vaadin-button on-click="cetak"> Cetak</vaadin-button>
          <vaadin-button on-click="cancel"  theme="error primary"> Tidak</vaadin-button>
        </template>
      </vaadin-dialog>

      <div class="card">
      <table border="2" id="main-table">
            <tbody>
                <tr>
                  <th> Tanggal</th>
                  <td>
                  <vaadin-date-picker placeholder="Pilih tanggal" id="tanggal_ppd" value="[[regObj.persetujuan.tanggal_ppd]]"  colspan="2" disabled></vaadin-date-picker>
                  </td>
                  <th>Nomor</th>
                  <td>
                      <vaadin-text-field label="" value="{{regObj.persetujuan.nomor_ppd}}" style="width:75%" disabled></vaadin-text-field>
                  </td>
                </tr>

                <tr>
                  <th> Jenis Pengeluaran</th>
                  <td colspan="3">
                    <vaadin-select  value="{{regObj.persetujuan.jenis_pengeluaran}}" disabled>
                      <template>
                        <vaadin-list-box>
                          <vaadin-item value="Realisasi Biaya">Realisasi Biaya</vaadin-item>
                          <vaadin-item value="Uang Muka">Uang Muka</vaadin-item>
                          <vaadin-item value="Lainnya">Lainnya</vaadin-item>
                        </vaadin-list-box>
                      </template>
                    </vaadin-select>
                  </td>
                </tr>

                <tr>
                  <th> Anggaran Biaya</th>
                  <td colspan="3">
                    <vaadin-select  value="{{regObj.persetujuan.anggaran_biaya}}" disabled>
                      <template>
                        <vaadin-list-box>
                          <vaadin-item value="Dianggarkan">Dianggarkan</vaadin-item>
                          <vaadin-item value="Tidak Dianggarkan">Tidak Dianggarkan</vaadin-item>
                        </vaadin-list-box>
                      </template>
                    </vaadin-select>
                  </td>
                </tr>
                <tr>
                  <th> Referensi</th>
                  <td colspan="3">
                      <vaadin-text-field label="" value="{{regObj.persetujuan.referensi}}" disabled></vaadin-text-field>
                  </td>
                </tr>
                
                <tr>
                  <th> Tanggal Kebutuhan</th>
                  <td >
                    <vaadin-date-picker placeholder="Pilih tanggal" id="tanggal_pelaksanaan" value="[[regObj.persetujuan.tanggal_pelaksanaan]]" disabled></vaadin-date-picker>
                  </td>
                  <th> Sumber Dana</th>
                  <td >
                      <vaadin-text-field label="" value="{{ regObj.persetujuan.sumber_dana }}" disabled ></vaadin-text-field>
                  </td>
                </tr>

                <tr>
                  <th> Bank Tertuju / No rekening</th>
                  <td  colspan="3">
                      <vaadin-text-area label="" value="{{ regObj.persetujuan.bank_tertuju }}" disabled></vaadin-text-area>
                  </td>
                </tr>

                <tr>
                  <th> Keterangan</th>
                  <td colspan="3">
                  <p>{{regObj.judul_proposal}} </p>
                  </td>
                </tr>

                <tr>
                <tr>
                  <th> Taksiran Jumlah Biaya</th>
                  <td colspan="3">
                  <p>{{_rupiah(regObj.kategoris.jumlah_bantuan)}} </p>
                  <p>{{_terbilang(regObj.kategoris.jumlah_bantuan)}} Rupiah</p>
                  </td>
                </tr>
                <tr>
                  <th> Bidang</th>
                  <td colspan="3">
                  <p>{{regObj.persetujuan.kategori_program}} - {{_cekSub(regObj.kategoris.sub_program)}} </p>
                  </td>
                </tr>
                  <th> Asnaf (Penerima Manfaat) </th>
                  <td colspan="3">
                      <p>{{ regObj.kategoris.asnaf }}</p>
                        <p>{{ asnafDetail( regObj.kategoris.asnaf) }}</p>
                  </td>
                </tr>

            </tbody>
        </table>
      </div>

       <!-- Kepala divisi -->
          <div class="card">
              <h3> Keuangan {{displayIndex(index)}}</h3>
                <table border="2" id="main-table">
                    <tbody>
                        <tr>
                          <th> 
                            <p>Manager DPP</p> 
                            <vaadin-select disabled>
                                <template>
                                  <vaadin-list-box>
                                      <vaadin-item label="{{regObj.persetujuan.manager_nama}}" >{{regObj.persetujuan.manager_nama}}</vaadin-item>
                                  </vaadin-list-box>
                                </template>
                            </vaadin-select>
                            <p> Tanggal TTD : {{ formatDate(regObj.persetujuan.ppd_manager)}} </p>
                          </th>
                          <th> 
                            <p>Kadiv DPP</p> 
                            <vaadin-select disabled>
                                <template>
                                  <vaadin-list-box>
                                      <vaadin-item label="{{regObj.persetujuan.kadiv_nama}}" >{{regObj.persetujuan.kadiv_nama}}</vaadin-item>
                                  </vaadin-list-box>
                                </template>
                            </vaadin-select>
                            <p> Tanggal TTD : {{ formatDate(regObj.persetujuan.ppd_kadiv)}} </p>
                          </th>
                        </tr>
                        <tr>
                          <th> 
                            <p>Staff Keuangan</p> 
                            <vaadin-select value="{{ StaffKeu.user }}" disabled>
                                <template>
                                  <vaadin-list-box>
                                  <dom-repeat items="{{ cekUser(User, 2, 2)}}">
                                    <template>
                                      <vaadin-item label="{{item.nama}}" value="{{item.Id}}">{{item.nama}}</vaadin-item>
                                    </template>
                                  </dom-repeat>
                                  </vaadin-list-box>
                                </template>
                            </vaadin-select>
                            <p> Tanggal TTD : {{StaffKeu.tanggal}} </p>
                          </th>
                          <th> 
                            <p>Manager Keuangan</p> 
                            <vaadin-select value="{{ ManagerKeu.user }}" disabled>
                                <template>
                                  <vaadin-list-box>
                                  <dom-repeat items="{{ cekUser(User, 3, 2)}}">
                                    <template>
                                      <vaadin-item label="{{item.nama}}" value="{{item.Id}}">{{item.nama}}</vaadin-item>
                                    </template>
                                  </dom-repeat>
                                  </vaadin-list-box>
                                </template>
                            </vaadin-select>
                            <p> Tanggal TTD : {{ManagerKeu.tanggal}} </p>
                          </th>
                        </tr>
                        <tr>
                          <th> 
                            <p>Kadiv Keuangan</p> 
                            <vaadin-select value="{{ KadivKeu.user }}" disabled>
                                <template>
                                  <vaadin-list-box>
                                  <dom-repeat items="{{ cekUser(User, 4, 2)}}">
                                    <template>
                                      <vaadin-item label="{{item.nama}}" value="{{item.Id}}">{{item.nama}}</vaadin-item>
                                    </template>
                                  </dom-repeat>
                                  </vaadin-list-box>
                                </template>
                            </vaadin-select>
                            <p> Tanggal TTD : {{KadivKeu.tanggal}} </p>
                          </th>
                          <th> 
                            <p>Direktur Eksekutif</p> 
                            <vaadin-select value="{{ DirekturEksekutif.user }}" disabled>
                                <template>
                                  <vaadin-list-box>
                                  <dom-repeat items="{{ cekUser(User, 9)}}">
                                    <template>
                                      <vaadin-item label="{{item.nama}}" value="{{item.Id}}">{{item.nama}}</vaadin-item>
                                    </template>
                                  </dom-repeat>
                                  </vaadin-list-box>
                                </template>
                            </vaadin-select>
                            <p> Tanggal TTD : {{DirekturEksekutif.tanggal}} </p>
                          </th>
                        </tr>
                      </tbody>
                </table>
          </div>
       <paper-button  raised class="blue" on-click="sendData" id="simpan_ttd" style="width:95%;">Tanda Tangani </paper-button>

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
          id="datass"
          auto
          on-response="_handleKategori"
          on-error="_errorKategori"
          headers='{"Access-Control-Allow-Origin": "*" }'
          handle-as="json"
          Content-Type="application/json"
          debounce-duration="300">
      </iron-ajax>

      <iron-ajax
            auto 
            id="kadiv"
            headers='{"Access-Control-Allow-Origin": "*" }'
            handle-as="json"
            method="GET"
            on-response="_handleKadiv"
            on-error="_errorKadiv"
            Content-Type="application/json"
            debounce-duration="300">
        </iron-ajax>

        <iron-ajax 
          id="postData"
          headers='{"Access-Control-Allow-Origin": "*" }'
          handle-as="json"
          method="PUT"
          on-response="_handlePpdPost"
            on-error="_handlePpdPostError"
          Content-Type="application/json"
          debounce-duration="300">
      </iron-ajax>

      <iron-ajax 
          id="printData"
          headers='{"Access-Control-Allow-Origin": "*" }'
          method="GET"
          handle-as="json"
          method="GET"
          on-response="_handlePpdPrint"
          on-error="_handlePpdPrintError"
          Content-Type="application/json"
          debounce-duration="300">
      </iron-ajax>
    `;
  }

  static get properties(){
    return {
        tempKadiv : {
          type : Array,
          notify : true,
          value : function(){
            return [

            ]
          }
        },
        Upd : {
        type : Object,
        notify :  true,
          value : function(){
              return {
              
              }
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
                "persetujuan" : {
                  "tanggal_ppd" : this.formatDate(new Date()),
                  "tanggal_pelaksanaan" : this.formatDate(new Date()),
                }
            }
          }
        },
        StaffKeu : {
          type : Object,
          notify : true,
          value : function(){
            return  {
                  "user" : "",
                  "tanggal" : "",
                }
          }
        },
        ManagerKeu : {
          type : Object,
          notify : true,
          value : function(){
            return  {
                  "user" : "",
                  "tanggal" : "",
                }
          }
        },
        KadivKeu : {
          type : Object,
          notify : true,
          value : function(){
            return  {
                  "user" : "",
                  "tanggal" : "",
                }
          }
        },
        DirekturEksekutif : {
          type : Object,
          notify : true,
          value : function(){
            return  {
                  "user" : "",
                  "tanggal" : "",
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
    }
  }

    static get observers() {
      return [
        '_routePageChanged(routeData.*)',
        //'_checkPpdTerpilih(regObj.kategoris.jumlah_bantuan)',
        '_changeDatePelaksanaan(regObj.persetujuan.tanggal_pelaksanaan)',
        '_changeDatePpd(regObj.persetujuan.tanggal_ppd)',
        //'_changeStoI(regObj.kategoris.*)',
      ];
    } 

    cekUPD(){
      this.$.dialog_upd.opened = true
    }

    _checkPpdTerpilih(){
     
      if ( typeof this.regObj.ppd !== "undefined" ){
          if(this.regObj.ppd.length > 0){

              // Convert data Staff
              var staffData =this.regObj.ppd.filter(x => x.user.role == 2)
             
              if(staffData.length > 0){
                var tanggal =""
               
                if(this.formatDate(new Date(staffData[0].tanggal)) !== "2001-1-1" && this.formatDate(new Date(staffData[0].tanggal)) !== "1-1-1" ){
                  tanggal = this.formatDate(new Date(staffData[0].tanggal))
                }

                this.StaffKeu = {
                  "user" : staffData[0].user.Id,
                  "tanggal" : tanggal
                }
              }

              // Convert data manager
              var managerData =this.regObj.ppd.filter(x => x.user.role == 3)
             
              if(managerData.length > 0){
                var tanggal =""
                if(this.formatDate(new Date(managerData[0].tanggal)) !== "2001-1-1" && this.formatDate(new Date(managerData[0].tanggal)) !== "1-1-1" ){
                  tanggal = this.formatDate(new Date(managerData[0].tanggal))
                }

                this.ManagerKeu = {
                  "user" : managerData[0].user.Id,
                  "tanggal" : tanggal
                }
              }

                // Convert data kadiv
                var kadivData =this.regObj.ppd.filter(x => x.user.role == 4)
             
                if(kadivData.length > 0){
                  var tanggal =""
                  if(this.formatDate(new Date(kadivData[0].tanggal)) !== "2001-1-1"  && this.formatDate(new Date(kadivData[0].tanggal)) !== "1-1-1"){
                    tanggal = this.formatDate(new Date(kadivData[0].tanggal))
                  }
  
                  this.KadivKeu = {
                    "user" : kadivData[0].user.Id,
                    "tanggal" : tanggal
                  }
                }

                  // Convert data Direktur
                var DirekturData =this.regObj.ppd.filter(x => x.user.role == 9)
              
                if(DirekturData.length > 0){
                  var tanggal =""
                  if(this.formatDate(new Date(DirekturData[0].tanggal)) !== "2001-1-1" && this.formatDate(new Date(DirekturData[0].tanggal)) !== "1-1-1" ){
                    tanggal = this.formatDate(new Date(DirekturData[0].tanggal))
                  }

                  this.DirekturEksekutif = {
                    "user" : DirekturData[0].user.Id,
                    "tanggal" : tanggal
                  }
                }
          }
      }  
  }

    // fungsi display nomer
    displayIndex(index){
      return index + 1
    }


    asnafDetail(asnaf){
      switch (asnaf) {
        case "Fakir" : 
        return "Mereka yang hampir tidak memiliki apa-apa sehingga tidak mampu memenuhi kebutuhan pokok hidup."
        case "Miskin" : 
        return "Mereka yang memiliki harta namun tidak cukup untuk memenuhi kebutuhan dasar untuk hidup."
        case "Amil" : 
        return "Mereka yang mengumpulkan dan mendistribusikan zakat."
        case "Mu'allaf" : 
        return "Mereka yang baru masuk Islam dan membutuhkan bantuan untuk menguatkan dalam tauhid dan syariah."
        case "Hamba sahaya" : 
        return "Budak yang ingin memerdekakan dirinya."
        case "Gharimin" : 
        return "Mereka yang berhutang untuk kebutuhan hidup dalam mempertahankan jiwa dan izzahnya."
        case "Fisabilillah" : 
        return " Mereka yang berjuang di jalan Allah dalam bentuk kegiatan dakwah, jihad dan sebagainya."
        case "Ibnus Sabil" : 
        return "Mereka yang kehabisan biaya di perjalanan dalam ketaatan kepada Allah."
      }
    }
    
    // FUngsi untuk handle get data proposal

    _handleProposal(e){
      this.regObj = e.detail.response.Data
      this._checkPpdTerpilih()
    }
    
    _handleProposalError(e){
      this.error = e.detail.request.xhr.status
      this.set('route.path', '/panel/proposal');
    }

      // Define ketika polymer pertama kali di load 
  
    _routePageChanged(page) {
      this.$.datass.url= ""
      this.$.datass.url= MyAppGlobals.apiPath + "/api/kategori"
      this.$.datass.headers['authorization'] = this.storedUser.access_token;
      this.$.kadiv.url= MyAppGlobals.apiPath + "/api/users?role=2&role2=3&role3=4&role4=9"  
      this.$.kadiv.headers['authorization'] = this.storedUser.access_token;
    }

    // Fungsi untuk handle kategori
    _handleKategori(e){
      var response = e.detail.response;
      this.subkategori = response.data.filter(x => x.KodeP == this.routeData.kat)[0].sub
      this.$.getData.url = ""
      this.$.getData.url= MyAppGlobals.apiPath + "/api/pendaftaran/"+ this.routeData.kat  + "/" + this.routeData.id
      this.$.getData.headers['authorization'] = this.storedUser.access_token;
    }
    _errorKategori(e){

    }

    // Fungsi handle kadiv
    _handleKadiv(e){
      var response = e.detail.response;
      this.User = response.data
    }

    _errorKadiv(e){
      console.log(e)
    }

    /*****  Handle ppd posts*******/
    _handlePpdPost(e){
         this.set('route.path', '/panel/ppd');
    }

    _handlePpdPostError(e){
      this.error = e.detail.request.xhr.status
      this.set('route.path', '/panel/proposal');
    }


    /*****  Handle Tanggal *****/
  
    _changeDatePelaksanaan(f){
      if (f !== "" && typeof f !== "undefined" ){
        var date = this.$.tanggal_pelaksanaan
        var that =this
        date.value = this.formatDate(new Date(f))
        date.addEventListener("change", function(){
          if(date.value !== ""){
            that.regObj.persetujuan.tanggal_pelaksanaan = new Date(date.value).toISOString()
          }
        })
      }
    }

    _changeDatePpd(f){
      if (f !== "" && typeof f !== "undefined" ){
        var date = this.$.tanggal_ppd
        var that =this
        date.value = this.formatDate(new Date(f))
        date.addEventListener("change", function(){
          if(date.value !== ""){
            that.regObj.persetujuan.tanggal_ppd = new Date(date.value).toISOString()
          }
        })
      }
    }

    formatDate(date){
      if(typeof date == "undefined"){
        return ""
      }
      date = new Date(date)
      var dd = date.getDate();
      var mm = date.getMonth()+1; 
      var yyyy = date.getFullYear();
      return yyyy + "-" + mm +  "-"+dd
    }
    

    sendData(){
      this.StaffKeu = this.convertData(this.StaffKeu)
      this.ManagerKeu = this.convertData(this.ManagerKeu)
      this.KadivKeu = this.convertData(this.KadivKeu)
      this.DirekturEksekutif = this.convertData(this.DirekturEksekutif)
      this.regObj.ppd = [this.StaffKeu, this.ManagerKeu, this.KadivKeu, this.DirekturEksekutif]
      this.regObj.kategoris.jumlah_bantuan = parseInt(  this.regObj.kategoris.jumlah_bantuan)
      this.$.postData.url= MyAppGlobals.apiPath + "/api/ppd/" + this.routeData.id
      this.$.postData.headers['authorization'] = this.storedUser.access_token;
      this.$.postData.body  = this.regObj
      this.$.postData.generateRequest();
    }

    convertData(data){
        data.user =  this.User.filter(u =>  u.Id == data.user)[0]
        if(data.tanggal !== "" && data.tanggal !== "undefined") {
          data.tanggal = new Date(data.tanggal).toISOString()
        }else{
          delete data.tanggal
        }
      return data
    }

  

    cekUser(user, role, department = 0){
      return user.filter(function(e){
        if (department !== 0){
          return e.role == role  && e.department == department
        }
        return  e.role == role
      })
    }    

    /****** Fungsi untuk print  ******/

  _cekSub(e){
    if(typeof this.subkategori !== "undefined"){
       return   this.subkategori.filter(x => x.kode == e)[0].nama
    }
  }

  _rupiah(nilai){
    if(typeof nilai == "undefined"){
      nilai = 0
    }
      var	reverse = nilai.toString().split('').reverse().join('');
      var ribuan 	= reverse.match(/\d{1,3}/g);
      ribuan	= ribuan.join('.').split('').reverse().join('')
      return "Rp." + ribuan
  }

  _terbilang(nilai){
    var huruf = ["", "Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan", "Sepuluh", "Sebelas"]
    var stringNilai 
    
    if(typeof nilai == "undefined"){ 
        nilai = 0
    }
    if (nilai== 0 ) {
      stringNilai = ""
    } else if( nilai < 12 && nilai != 0 ){
      stringNilai = "" + huruf[nilai]
    } else if (nilai < 20 ){
      stringNilai = this._terbilang(nilai-10) + " Belas "
    } else if (nilai < 100 ){
      stringNilai = this._terbilang(nilai/10) + " Puluh " + this._terbilang(nilai%10)
    } else if (nilai < 200) {
      stringNilai = " Seratus " + this._terbilang(nilai-100)
    } else if( nilai < 1000 ){
      stringNilai = this._terbilang(nilai/100) + " Ratus " + this._terbilang(nilai%100)
    } else if( nilai < 2000) {
      stringNilai = " Seribu " + this._terbilang(nilai-1000)
    } else if (nilai < 1000000 ){
      stringNilai = this._terbilang(nilai/1000) + " Ribu " + this._terbilang(nilai%1000)
    } else if (nilai < 1000000000) {
      stringNilai = this._terbilang(nilai/1000000) + " Juta " + this._terbilang(nilai%1000000)
    } else if (nilai < 1000000000000 ){
      stringNilai = this._terbilang(nilai/1000000000) + " Milyar " + this._terbilang(nilai%1000000000)
    } else if (nilai < 100000000000000) {
      stringNilai = this._terbilang(nilai/1000000000000) + " Trilyun " + this._terbilang(nilai%1000000000000)
    } else if( nilai <= 100000000000000) {
      stringNilai = "Maaf Tidak Dapat di Prose Karena Jumlah nilai Terlalu Besar "
    }
    return stringNilai
  }

   /****** Fungsi untuk handle otoritas ******/
   cekOtoritas(val){
    if(typeof this.storedUser !== "undefined"){
      if (val == this.storedUser.id){
        return true
      }
        return false
      }
    }
}


window.customElements.define('bmm-ppd-persetujuan', PpdPersetujuan);
