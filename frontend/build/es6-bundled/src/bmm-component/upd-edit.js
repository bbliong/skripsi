define(["../my-app.js"],function(_myApp){"use strict";class UpdEdit extends _myApp.PolymerElement{static get template(){return _myApp.html`
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
        <global-variable key="toast" value="{{ toast }}"></global-variable>
        <global-data id="globalData"></global-data>
        
      <div class="card">
      <vaadin-dialog aria-label="polymer templates" id="dialog_manager">
          <template>
          <h4>Ingin mencetak UPD?</h4>
            <vaadin-button on-click="cetak"> Cetak</vaadin-button>
            <vaadin-button on-click="cancel"  theme="error primary"> Tidak</vaadin-button>
          </template>
        </vaadin-dialog>
        
        <vaadin-dialog aria-label="polymer templates" id="dialog_kadiv" >
          <template>
            <div style="text-align:center">
            <h3>Apakah bapak/ibu menyetujui UPD ini ?</h3>
            <vaadin-text-area placeholder="Keterangan" value="{{regObj.persetujuan.keterangan_kadiv}}" ></vaadin-text-area>
            <vaadin-button on-click="setuju"  theme="success primary"> Setuju</vaadin-button>
            <vaadin-button on-click="tidakSetuju"  theme="error primary"> Tidak Setuju</vaadin-button>
           </div>
          </template>
        </vaadin-dialog>
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
                              <td> <vaadin-text-field  value="{{regObj.kategoris.jumlah_bantuan}}"></vaadin-text-field></td>
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
                <tr>
                    <th>Status Verifikasi</th> 
                    <td>
                        <p> Verifikator : {{ tanggalPenting.verifikasi }} oleh <b>{{ regObj.verifikasi.nama_pelaksana }}</b>  </p>
                        <p> Pembuatan UPD : {{ tanggalPenting.verifikator }}  oleh <b>{{regObj.persetujuan.verifikator_nama }}</b> </p>
                        <p> Manager : {{ tanggalPenting.manager }}   oleh <b>{{ regObj.persetujuan.manager_nama }}  </b></p>
                        <p> Kadiv / Direktur Eksekutif : {{ tanggalPenting.kadiv }} oleh <b>{{ regObj.persetujuan.kadiv_nama }} </b> </p>

                    </td> 

                </tr>
            </tbody>
        </table>
        <div class="tombol">
        <paper-button  raised class="indigo" on-click="printData" id="cetak_upd">Cetak UPD</paper-button>

        <paper-button  raised class="indigo" on-click="sendData" id="simpan_dan_cetak_upd">Simpan dan Cetak UPD</paper-button>

         <paper-button  raised class="indigo" on-click="periksaUPD" id="approve">Periksa UPD</paper-button>

         <paper-button  raised class="indigo" on-click="setujuiUPD" id="approveKadiv">Setujui UPD</paper-button>

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


    `}static get properties(){return{Upd:{type:Object,notify:!0,value:function(){return{tujuan:[" "],latar_belakang:[" "],analisis_kelayakan:[" "],program_penyaluran:{pelaksana_teknis:"",alur_biaya:"",penanggung_jawab:""},rekomendasi:[""],url:""}},storedUser:{type:Object,notify:!0},regObj:{type:Object,notify:!0,value:function(){return{}}},tanggalPenting:{type:Object,notify:!0,value:function(){return{}}}}}}static get observers(){return["_changeStoI(regObj.kategoris.*)","_routePageChanged(routeData.*)"]}_changeStoI(f){var array=f.path.split(".");if("jumlah_bantuan"==array[2]){f.base[array[2]]=parseInt(f.value)}}displayIndex(index){return index+1}_addField(obj){var id=obj.target.getAttribute("data-id");this.Upd[id].push(" ");this.shadowRoot.querySelector("#"+id+"_isi").render()}_removeField(obj){var id=obj.target.getAttribute("data-id"),count=this.Upd[id].length;if(1<count){this.Upd[id].splice(count-1,1);this.shadowRoot.querySelector("#"+id+"_isi").render()}}_handleProposal(e){this.regObj=e.detail.response.Data;var verifikator="Belum buat UPD",manager="Belum diperiksa Manager",kadiv="Belum disetujui Kadiv",verifikasi="Belum diverifikasi";if("undefined"!=typeof this.regObj.verifikasi.tanggal_verifikasi){verifikasi=this.formatDate(new Date(this.regObj.verifikasi.tanggal_verifikasi))}if("undefined"!=typeof this.regObj.persetujuan.verifikator_tanggal){verifikator=this.formatDate(new Date(this.regObj.persetujuan.verifikator_tanggal))}if("undefined"!=typeof this.regObj.persetujuan.manager_tanggal){manager=this.formatDate(new Date(this.regObj.persetujuan.manager_tanggal))}if("undefined"!=typeof this.regObj.persetujuan.kadiv_tanggal){if(0==this.regObj.persetujuan.status_persetujuan_kadiv){kadiv="Tidak disetujui pada tanggal "}else{kadiv="Disetujui pada hari "}kadiv+=this.formatDate(new Date(this.regObj.persetujuan.kadiv_tanggal))}this.tanggalPenting={verifikasi:verifikasi,verifikator:verifikator,manager:manager,kadiv:kadiv};if("undefined"!==typeof this.regObj.upd){this.Upd=this.regObj.upd;if("undefined"==typeof this.Upd.url){this.shadowRoot.querySelector("#cetak_upd").style.display="none"}else{this.shadowRoot.querySelector("#cetak_upd").style.display="inline-block"}}else{this.shadowRoot.querySelector("#cetak_upd").style.display="none";this.Upd={tujuan:[""],latar_belakang:[""],analisis_kelayakan:[""],program_penyaluran:{pelaksana_teknis:"",alur_biaya:"",penanggung_jawab:""},rekomendasi:[""],url:""}}if(9==this.storedUser.role){if("undefined"==typeof this.regObj.persetujuan.keterangan_kadiv){this.regObj.persetujuan.keterangan_kadiv=""}}}_handleProposalError(e){this.error=e.detail.request.xhr.status;this.set("route.path","/panel/proposal")}_routePageChanged(page){switch(this.storedUser.role){case 1:case 2:this.shadowRoot.querySelector("#approve").style.display="none";this.shadowRoot.querySelector("#approveKadiv").style.display="none";break;case 3:this.shadowRoot.querySelector("#simpan_dan_cetak_upd").style.display="none";this.shadowRoot.querySelector("#approveKadiv").style.display="none";break;case 4:this.shadowRoot.querySelector("#approve").style.display="none";this.shadowRoot.querySelector("#simpan_dan_cetak_upd").style.display="none";break;case 9:this.shadowRoot.querySelector("#approve").style.display="none";this.shadowRoot.querySelector("#simpan_dan_cetak_upd").style.display="none";break;}this.$.getData.url=MyAppGlobals.apiPath+"/api/pendaftaran/"+this.routeData.kat+"/"+this.routeData.id;this.$.getData.headers.authorization=this.storedUser.access_token}_handleProposalPost(e){this.shadowRoot.querySelector("#dialog_manager").opened=!0}_handleProposalPostError(e){this.error=e.detail.request.xhr.status;this.set("route.path","/panel/proposal")}sendData(){this.regObj.upd=this.Upd;this.$.postData.url=MyAppGlobals.apiPath+"/api/upd/"+this.routeData.id;this.$.postData.headers.authorization=this.storedUser.access_token;this.$.postData.body=this.regObj;this.$.postData.generateRequest()}_handleUPD(e){if("undefined"!==typeof e.detail.response.url){document.location.href=MyAppGlobals.apiPath+e.detail.response.url;this.set("route.path","/panel/proposal")}}printData(){this.$.printData.url=MyAppGlobals.apiPath+"/api/report/upd/"+this.routeData.kat+"/"+this.routeData.id;this.$.printData.headers.authorization=this.storedUser.access_token;this.$.printData.generateRequest()}periksaUPD(){this.regObj.upd=this.Upd;this.$.postData.url=MyAppGlobals.apiPath+"/api/upd/"+this.routeData.id;this.$.postData.headers.authorization=this.storedUser.access_token;this.$.postData.body=this.regObj;this.$.postData.generateRequest()}setujuiUPD(){this.shadowRoot.querySelector("#dialog_kadiv").opened=!0}formatDate(date){var hari=["Minggu","Senin","Selasa","Rabu","Kamis","Jum'at","Sabtu"],bulan=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],day=date.getDay(),dd=date.getDate(),mm=date.getMonth(),yyyy=date.getFullYear(),hari=hari[day],bulan=bulan[mm];return hari+","+dd+" "+bulan+" "+yyyy}cetak(){this.toast="Berhasil Menyimpan UPD";this.shadowRoot.querySelector("#dialog_manager").opened=!1;this.printData()}cancel(){this.toast="Berhasil Menyimpan UPD";this.shadowRoot.querySelector("#dialog_manager").opened=!1;this.set("route.path","/panel/proposal")}setuju(){this.regObj.persetujuan.status_persetujuan_kadiv=1;this.periksaUPD();this.shadowRoot.querySelector("#dialog_kadiv").opened=!1}tidakSetuju(){this.regObj.persetujuan.status_persetujuan_kadiv=0;this.periksaUPD();this.shadowRoot.querySelector("#dialog_kadiv").opened=!1}}window.customElements.define("bmm-upd-edit",UpdEdit)});