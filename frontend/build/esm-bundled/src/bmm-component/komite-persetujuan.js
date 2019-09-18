import{PolymerElement,html}from"../my-app.js";class KomitePersetujuan extends PolymerElement{static get template(){return html`
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

        vaadin-text-field, vaadin-number-field ,  vaadin-select,  vaadin-date-picker{
          width : 90%;
          margin : 2px 20px;
        }

        @media all and (max-width: 700px){
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


      </style>
       <!-- app-location binds to the app's URL -->
       <app-location route="{{route}}"></app-location>

      <!-- this app-route manages the top-level routes -->
      <app-route
          route="{{route}}"
          pattern="/panel/proposal/komite-persetujuan/:kat/:id"
          data="{{routeData}}"
          tail="{{subroute}}"></app-route>

      <global-variable key="LoginCred" value="{{ storedUser }}"></global-variable>
      <global-variable key="error" value="{{ error }}"></global-variable>
      <global-variable key="toast" value="{{ toast }}"></global-variable>
      <global-data id="globalData"></global-data>

      <vaadin-dialog aria-label="polymer templates" id="dialog_upd">
        <template > 
          <div style="position:relative">
             <h3> Data UPD muztahiks a/n {{regObj.muztahiks.nama}}</h3>
            <section class="main">
              <table class="aside">
                  <tr>
                    <td>Tujuan</td>
                    <td> <ul>
                    <dom-repeat items="[[regObj.upd.tujuan]]" id="Kadiv">
                         <template>
                           <li>{{item}}</li>
                          </template>
                    </dom-repeat></ul>
                    </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Analisa Kelayakan</td>
                    <td><ul>
                       <dom-repeat items="[[regObj.upd.analisis_kelayakan]]" id="Kadiv">
                         <template>
                           <li>{{item}}</li>
                          </template>
                    </dom-repeat></ul>
                    </td>
                  </tr>
              </table><span></span>
              <table  class="aside" style="margin-left: 10px;">
                  <tr>
                    <td>Latar Belakang</td>
                    <td><ul>
                    <dom-repeat items="[[regObj.upd.latar_belakang]]" id="Kadiv">
                         <template>
                           <li>{{item}}</li>
                          </template>
                    </dom-repeat></ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Program Penyaluran</td>
                    <td><ul>
                      <li><p> Biaya diserahkan kepada : [[regObj.upd.program_penyaluran.alur_biaya]] </p></li>
                      <li><p> Pelaksanaan Teknis dilakukan : [[regObj.upd.program_penyaluran.pelaksana_teknis]] </p></li>
                      <li><p> Penanggung Jawab : [[regObj.upd.program_penyaluran.penanggung_jawab]] </p></li>
                    </td></ul>
                  </tr>
                  <tr>
                    <td>Rekomendasi</td>
                    <td><ul>
                    <dom-repeat items="[[regObj.upd.rekomendasi]]" id="Kadiv">
                         <template>
                           <li>{{item}}</li>
                          </template>
                    </dom-repeat></ul>
                    </td>
                  </tr>
              </table>
            </section>
            <paper-icon-button  on-click="cancel_upd"  icon = "clear" style="top: -20px;right: 10px;position: absolute;">Delete</paper-icon-button>
          </div>
        </template>
      </vaadin-dialog>
        
      <vaadin-dialog aria-label="polymer templates" id="dialog_manager">
        <template>
        <h4>Ingin mencetak Form Komite?</h4>
          <vaadin-button on-click="cetak"> Cetak</vaadin-button>
          <vaadin-button on-click="cancel"  theme="error primary"> Tidak</vaadin-button>
        </template>
      </vaadin-dialog>

      <paper-button  raised class="indigo" on-click="cekUPD" >Lihat UPD</paper-button> 
      <div class="card">
      <table border="2" id="main-table">
            <tbody>
                <tr>
                  <th> Tanggal</th>
                  <td>
                  <vaadin-date-picker placeholder="Pilih tanggal" id="tanggal_komite" value="[[regObj.persetujuan.tanggal_komite]]"  colspan="2"disabled></vaadin-date-picker>
                  </td>
                  <th>Nomor</th>
                  <td>
                      <vaadin-text-field label="" value="{{regObj.persetujuan.nomor_permohonan}}" style="width:75%"disabled></vaadin-text-field>
                  </td>
                </tr>
                <tr>
                  <th> Bidang</th>
                  <td colspan="3">
                    <vaadin-select value="{{ regObj.kategoris.sub_program }}" label="sub-kategori" disabled>
                      <template>
                        <vaadin-list-box>
                        <dom-repeat items="{{subkategori}}">
                          <template>
                            <vaadin-item label="{{item.nama}}" value="{{item.kode}}">{{item.nama}}</vaadin-item>
                          </template>
                        </dom-repeat>
                        </vaadin-list-box>
                      </template>
                    </vaadin-select>
                  </td>
                </tr>
                <tr>
                  <th> Nama Program</th>
                  <td colspan="3">
                      <vaadin-text-field label="" value="{{ regObj.persetujuan.kategori_program }}" disabled></vaadin-text-field>
                  </td>
                </tr>
                <tr>
                  <th> Tujuan Program</th>
                  <td colspan="3">
                      <vaadin-text-area label="" value="{{regObj.tujuan_proposal}}"disabled></vaadin-text-area>
                  </td>
                </tr>
                <tr>
                  <th> Wilayah Penyaluran</th>
                  <td >
                      <vaadin-text-area label="" value="{{regObj.muztahiks.kabkot}}"disabled></vaadin-text-area>
                  </td>
                  <th > Propinsi</th>
                  <td >
                      <vaadin-text-area label="" value="{{regObj.muztahiks.provinsi}}"disabled></vaadin-text-area>
                  </td>
                </tr>
                <tr>
                  <th> Sifat Santunan</th>
                  <td colspan="3">
                    <vaadin-select  value="{{regObj.persetujuan.sifat_santunan}}">
                      <template>
                        <vaadin-list-box>
                          <vaadin-item value="Santunan">Santunan</vaadin-item>
                          <vaadin-item value="Pemberdayaann">Pemberdayaann</vaadin-item>
                          <vaadin-item value="Lainnya">Lainnya</vaadin-item>
                        </vaadin-list-box>
                      </template>
                    </vaadin-select>
                  </td>
                </tr>
                <tr>
                  <th> Biaya Kegiatan</th>
                  <td>
                      <vaadin-number-field label="" value="{{ regObj.kategoris.jumlah_bantuan }}" style="width:50%;"disabled></vaadin-number-field>
                      <vaadin-button on-click="_checkKomiteTerpilih">Cek</vaadin-button>
                  </td>
                  <th>Sumber Dana</th>
                  <td>
                      <vaadin-text-field label="" value="{{ regObj.persetujuan.sumber_dana }}" style="width:75%"disabled></vaadin-text-field>
                  </td>
                </tr>
                <tr>
                  <th> Jumlah Penerima Manfaat</th>
                  <td colspan="3">
                      <vaadin-text-field label="" value="{{regObj.persetujuan.jumlah_penerima_manfaat}}"disabled></vaadin-text-field>
                  </td>
                </tr>
                <tr>
                  <th> Asnaf (Penerima Manfaat) </th>
                  <td colspan="1">
                      <vaadin-text-field label="" value="{{ regObj.kategoris.asnaf }}" disabled></vaadin-text-field>
                  </td>
                  <td colspan="2">
                      <vaadin-text-area label="" value="{{ asnafDetail( regObj.kategoris.asnaf) }}" disabled></vaadin-text-area>
                  </td>
                </tr>
                <tr>
                  <th> Mitra Pelaksana</th>
                  <td colspan="3">
                      <vaadin-text-field label=""value="{{ regObj.persetujuan.mitra_pelaksana }}"disabled></vaadin-text-field>
                  </td>
                </tr>
                <tr>
                  <th> Jadwal Pelaksanaan</th>
                  <td >
                    <vaadin-date-picker placeholder="Pilih tanggal" id="tanggal_pelaksanaan" value="[[regObj.persetujuan.tanggal_pelaksanaan]]" disabled></vaadin-date-picker>
                  </td>
                  <th> Diajukan Oleh</th>
                  <td >
                      <vaadin-text-field label="" value="{{ regObj.persetujuan.pic_nama }}" disabled></vaadin-text-field>
                  </td>
                </tr>
            </tbody>
        </table>
      </div>

      <!-- Kepala divisi -->
      <dom-repeat items="{{Kadiv}}" id="Kadiv">
          <template>
          <div class="card">
              <h3> Kepala Divisi {{displayIndex(index)}}</h3>
                <table border="2" id="main-table">
                    <tbody>
                        <tr>
                          <th> 
                          <p style="margin-left : 20px;">Status  : 
                          <dom-if  if="[[cekOtoritas(item.user)]]">
                              <template >
                                   <vaadin-select value="{{ item.status }}" style="width:50%">
                                      <template>
                                        <vaadin-list-box>
                                            <vaadin-item value="1">Setuju</vaadin-item>
                                            <vaadin-item value="2">Tidak Setuju</vaadin-item>
                                        </vaadin-list-box>
                                      </template>
                                    </vaadin-select>
                              </template>
                          </dom-if>
                          <dom-if  if="[[!cekOtoritas(item.user)]]">
                              <template >
                                     {{displayStatus(item.status)}} / {{item.tanggal}}
                              </template>
                          </dom-if>                         
                           </p>
                          <vaadin-select value="{{ item.user }}" label="Kepala Divisi" disabled>
                              <template>
                                <vaadin-list-box>
                                <dom-repeat items="{{ cekUser(User, 4)}}">
                                  <template>
                                    <vaadin-item label="{{item.nama}}" value="{{item.Id}}">{{item.nama}}</vaadin-item>
                                  </template>
                                </dom-repeat>
                                </vaadin-list-box>
                              </template>
                            </vaadin-select>
                            <br>
                            
                          </th>
                          <td>
                          <p style="margin-left : 20px;">Catatan</p>
                          <dom-if  if="[[cekOtoritas(item.user)]]">
                              <template >
                                  <vaadin-text-area  value="{{item.catatan}}"></vaadin-text-area>
                              </template>
                          </dom-if>
                          <dom-if  if="[[!cekOtoritas(item.user)]]">
                              <template >
                                  <vaadin-text-area  value="{{item.catatan}}" disabled></vaadin-text-area>
                              </template>
                          </dom-if>
                          </td>
                        </tr>
                      </tbody>
                </table>
              </div>
          </template>
      </dom-repeat>
        
      <!-- Pengawas -->
      <dom-repeat items="{{Pengurus}}" id="Pengurus">
          <template>
          <div class="card">
              <h3> Pengurus {{displayIndex(index)}}</h3>
                <table border="2" id="main-table">
                    <tbody>
                        <tr>
                          <th> 
                          <p style="margin-left : 20px;">Status  : 
                          <dom-if  if="[[cekOtoritas(item.user)]]">
                              <template >
                                   <vaadin-select value="{{ item.status }}" style="width:50%">
                                      <template>
                                        <vaadin-list-box>
                                            <vaadin-item value="1">Setuju</vaadin-item>
                                            <vaadin-item value="2">Tidak Setuju</vaadin-item>
                                        </vaadin-list-box>
                                      </template>
                                    </vaadin-select>
                              </template>
                          </dom-if>
                          <dom-if  if="[[!cekOtoritas(item.user)]]">
                              <template >
                                     {{displayStatus(item.status)}} / {{item.tanggal}}
                              </template>
                          </dom-if>                         
                           </p>
                          <vaadin-select value="{{ item.user}}" label="Pengawas" disabled>
                              <template>
                                <vaadin-list-box>
                                <dom-repeat items="{{cekUser(User, 7)}}">
                                  <template>
                                    <vaadin-item label="{{item.nama}}" value="{{item.Id}}">{{item.nama}}</vaadin-item>
                                  </template>
                                </dom-repeat>
                                </vaadin-list-box>
                              </template>
                            </vaadin-select>
                            <br>
                            
                          </th>
                          <td>
                          <p style="margin-left : 20px;">Catatan</p>
                          <dom-if  if="[[cekOtoritas(item.user)]]">
                              <template >
                                  <vaadin-text-area  value="{{item.catatan}}"></vaadin-text-area>
                              </template>
                          </dom-if>
                          <dom-if  if="[[!cekOtoritas(item.user)]]">
                              <template >
                                  <vaadin-text-area  value="{{item.catatan}}" disabled></vaadin-text-area>
                              </template>
                          </dom-if>
                          </td>
                        </tr>
                      </tbody>
                </table>
              </div>
          </template>
      </dom-repeat>

       <!-- Pengurus -->
       <dom-repeat items="{{Pengawas}}" id="Pengawas">
          <template>
          <div class="card">
              <h3> Pengawas {{displayIndex(index)}}</h3>
                <table border="2" id="main-table">
                    <tbody>
                        <tr>
                          <th> 
                          <p style="margin-left : 20px;">Status  : 
                          <dom-if  if="[[cekOtoritas(item.user)]]">
                              <template >
                                   <vaadin-select value="{{ item.status }}" style="width:50%">
                                      <template>
                                        <vaadin-list-box>
                                            <vaadin-item value="1">Setuju</vaadin-item>
                                            <vaadin-item value="2">Tidak Setuju</vaadin-item>
                                        </vaadin-list-box>
                                      </template>
                                    </vaadin-select>
                              </template>
                          </dom-if>
                          <dom-if  if="[[!cekOtoritas(item.user)]]">
                              <template >
                                     {{displayStatus(item.status)}} / {{item.tanggal}}
                              </template>
                          </dom-if>                         
                           </p>
                          <vaadin-select value="{{ item.user }}" label="Kepala Divisi" disabled>
                              <template>
                                <vaadin-list-box>
                                <dom-repeat items="{{cekUser(User, 8)}}">
                                  <template>
                                    <vaadin-item label="{{item.nama}}" value="{{item.Id}}">{{item.nama}}</vaadin-item>
                                  </template>
                                </dom-repeat>
                                </vaadin-list-box>
                              </template>
                            </vaadin-select>
                            <br>
                            
                          </th>
                          <td>
                          <p style="margin-left : 20px;">Catatan</p>
                          <dom-if  if="[[cekOtoritas(item.user)]]">
                              <template >
                                  <vaadin-text-area  value="{{item.catatan}}"></vaadin-text-area>
                              </template>
                          </dom-if>
                          <dom-if  if="[[!cekOtoritas(item.user)]]">
                              <template >
                                  <vaadin-text-area  value="{{item.catatan}}" disabled></vaadin-text-area>
                              </template>
                          </dom-if>
                          </td>
                        </tr>
                      </tbody>
                </table>
              </div>
          </template>
      </dom-repeat>

      <paper-button  raised class="indigo" on-click="printData" id="cetak_upd">Cetak Form Komite</paper-button>

      <paper-button  raised class="indigo" on-click="sendData" id="simpan_dan_cetak_upd">Simpan Form Komite </paper-button>

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
          on-response="_handleKomitePost"
            on-error="_handleKomitePostError"
          Content-Type="application/json"
          debounce-duration="300">
      </iron-ajax>

      <iron-ajax 
          id="printData"
          headers='{"Access-Control-Allow-Origin": "*" }'
          method="GET"
          handle-as="json"
          method="GET"
          on-response="_handleKomitePrint"
          on-error="_handleKomitePrintError"
          Content-Type="application/json"
          debounce-duration="300">
      </iron-ajax>
    `}static get properties(){return{tempKadiv:{type:Array,notify:!0,value:function(){return[]}},tempPengawas:String,tempPengurus:String,Upd:{type:Object,notify:!0,value:function(){return{}}},storedUser:{type:Object,notify:!0},regObj:{type:Object,notify:!0,value:function(){return{persetujuan:{tanggal_komite:this.formatDate(new Date),tanggal_pelaksanaan:this.formatDate(new Date)}}}},Kadiv:{type:Array,notify:!0,value:function(){return[]}},Pengawas:{type:Array,notify:!0,value:function(){return[]}},Pengurus:{type:Array,notify:!0,value:function(){return[]}},User:{type:Array,notify:!0,value:function(){return[]}}}}static get observers(){return["_routePageChanged(routeData.*)","_changeDatePelaksanaan(regObj.persetujuan.tanggal_pelaksanaan)","_changeDateKomite(regObj.persetujuan.tanggal_komite)"]}cekUPD(){this.$.dialog_upd.opened=!0}_changeKomite(val){if("undefined"!=typeof val){if(1e7>=val){this.Kadiv=[{user:"",status:0,catatan:"",tanggal:""},{user:"",status:0,tanggal:"",catatan:""}];this.Pengurus=[];this.Pengawas=[]}else if(5e7>=val){this.Kadiv=[{user:"",status:0,tanggal:"",catatan:""},{user:"",status:0,tanggal:"",catatan:""}];this.Pengurus=[{user:"",status:0,tanggal:"",catatan:""}];this.Pengawas=[]}else if(1e8>=val){this.Kadiv=[{user:"",status:0,tanggal:"",catatan:""},{user:"",status:0,tanggal:"",catatan:""}];this.Pengurus=[{user:"",status:0,tanggal:"",catatan:""},{user:"",status:0,tanggal:"",catatan:""}];this.Pengawas=[]}else{this.Kadiv=[{user:"",status:0,tanggal:"",catatan:""},{user:"",status:0,tanggal:"",catatan:""}];this.Pengurus=[{user:"",status:0,tanggal:"",catatan:""},{user:"",status:0,tanggal:"",catatan:""}];this.Pengawas=[{user:"",status:0,tanggal:"",catatan:"",role:8}]}this.shadowRoot.querySelector("#Kadiv").render();this.shadowRoot.querySelector("#Pengurus").render();this.shadowRoot.querySelector("#Pengawas").render()}}_checkKomiteTerpilih(){this._changeKomite(this.regObj.kategoris.jumlah_bantuan);if("undefined"!==typeof this.regObj.komite){if(0<this.regObj.komite.length){for(var cloneKadiv=this.Kadiv.slice(0),kadivData=this.regObj.komite.filter(x=>(4==x.user.role||9==x.user.role)&&1==x.levelKomite),i=0;i<cloneKadiv.length;i++){if("undefined"!=typeof kadivData[i]){var tanggal="";if("1-1-1"!==this.formatDate(new Date(kadivData[i].tanggal))&&"NaN-NaN-NaN"!==this.formatDate(new Date(kadivData[i].tanggal))){tanggal=this.formatDate(new Date(kadivData[i].tanggal))}cloneKadiv[i]={user:kadivData[i].user.Id,catatan:kadivData[i].catatan,status:kadivData[i].status.toString(),tanggal:tanggal}}}this.Kadiv=cloneKadiv;for(var clonePengurus=this.Pengurus.slice(0),pengurusData=this.regObj.komite.filter(x=>(7==x.user.role||9==x.user.role)&&2==x.levelKomite),i=0;i<clonePengurus.length;i++){if("undefined"!=typeof pengurusData[i]){var tanggal="";if("1-1-1"!==this.formatDate(new Date(pengurusData[i].tanggal))){tanggal=this.formatDate(new Date(pengurusData[i].tanggal))}clonePengurus[i]={user:pengurusData[i].user.Id,catatan:pengurusData[i].catatan,status:pengurusData[i].status.toString(),tanggal:tanggal}}}}this.Pengurus=clonePengurus;for(var clonePengawas=this.Pengawas.slice(0),pengawasData=this.regObj.komite.filter(x=>8==x.user.role),i=0;i<clonePengawas.length;i++){if("undefined"!=typeof pengawasData[i]){var tanggal="";if("1-1-1"!==this.formatDate(new Date(pengurusData[i].tanggal))){tanggal=this.formatDate(new Date(pengurusData[i].tanggal))}pengawasData[i]={user:pengawasData[i].user.Id,catatan:pengawasData[i].catatan,status:pengawasData[i].status.toString(),tanggal:tanggal}}}this.Pengawas=clonePengawas}}displayIndex(index){return index+1}asnafDetail(asnaf){switch(asnaf){case"Fakir":return"Mereka yang hampir tidak memiliki apa-apa sehingga tidak mampu memenuhi kebutuhan pokok hidup.";case"Miskin":return"Mereka yang memiliki harta namun tidak cukup untuk memenuhi kebutuhan dasar untuk hidup.";case"Amil":return"Mereka yang mengumpulkan dan mendistribusikan zakat.";case"Mu'allaf":return"Mereka yang baru masuk Islam dan membutuhkan bantuan untuk menguatkan dalam tauhid dan syariah.";case"Hamba sahaya":return"Budak yang ingin memerdekakan dirinya.";case"Gharimin":return"Mereka yang berhutang untuk kebutuhan hidup dalam mempertahankan jiwa dan izzahnya.";case"Fisabilillah":return" Mereka yang berjuang di jalan Allah dalam bentuk kegiatan dakwah, jihad dan sebagainya.";case"Ibnus Sabil":return"Mereka yang kehabisan biaya di perjalanan dalam ketaatan kepada Allah.";}}_handleProposal(e){this.regObj=e.detail.response.Data;this._checkKomiteTerpilih()}_handleProposalError(e){this.error=e.detail.request.xhr.status;this.set("route.path","/panel/proposal")}_routePageChanged(page){this.$.datass.url="";this.$.datass.url=MyAppGlobals.apiPath+"/api/kategori";this.$.datass.headers.authorization=this.storedUser.access_token;this.$.kadiv.url=MyAppGlobals.apiPath+"/api/users?role=4&role2=7&role3=8&role4=9";this.$.kadiv.headers.authorization=this.storedUser.access_token}_handleKategori(e){var response=e.detail.response;this.subkategori=response.data.filter(x=>x.KodeP==this.routeData.kat)[0].sub;this.$.getData.url="";this.$.getData.url=MyAppGlobals.apiPath+"/api/pendaftaran/"+this.routeData.kat+"/"+this.routeData.id;this.$.getData.headers.authorization=this.storedUser.access_token}_errorKategori(e){}_handleKadiv(e){var response=e.detail.response;this.User=response.data}_errorKadiv(e){console.log(e)}cancel_upd(){this.shadowRoot.querySelector("#dialog_upd").opened=!1}cancel(){this.shadowRoot.querySelector("#dialog_manager").opened=!1;this.set("route.path","/panel/proposal")}_handleKomitePost(e){this.shadowRoot.querySelector("#dialog_manager").opened=!0}_handleKomitePostError(e){this.error=e.detail.request.xhr.status;this.set("route.path","/panel/proposal")}_changeDatePelaksanaan(f){if(""!==f&&"undefined"!==typeof f){var date=this.$.tanggal_pelaksanaan,that=this;date.value=this.formatDate(new Date(f));date.addEventListener("change",function(){if(""!==date.value){that.regObj.persetujuan.tanggal_pelaksanaan=new Date(date.value).toISOString()}})}}_changeDateKomite(f){if(""!==f&&"undefined"!==typeof f){var date=this.$.tanggal_komite,that=this;date.value=this.formatDate(new Date(f));date.addEventListener("change",function(){if(""!==date.value){that.regObj.persetujuan.tanggal_komite=new Date(date.value).toISOString()}})}}formatDate(date){var dd=date.getDate(),mm=date.getMonth()+1,yyyy=date.getFullYear();return yyyy+"-"+mm+"-"+dd}sendData(){this.Kadiv=this.convertData(this.Kadiv);this.Pengawas=this.convertData(this.Pengawas);this.Pengurus=this.convertData(this.Pengurus);this.regObj.komite=[...this.Kadiv,...this.Pengawas,...this.Pengurus];this.$.postData.url=MyAppGlobals.apiPath+"/api/komite/"+this.routeData.id;this.$.postData.headers.authorization=this.storedUser.access_token;this.$.postData.body=this.regObj;this.$.postData.generateRequest()}convertData(data){var that=this,i;for(i=data.length-1;0<=i;i-=1){if("undefined"!==typeof data[i]){data[i].status=parseInt(data[i].status);delete data[i].tanggal;var temp=that.User.filter(u=>u.Id==data[i].user);if(0!==temp.length){data[i].user=temp[0]}else{data.splice(i,1)}}}return data}displayStatus(data){switch(data){case"0":return"Belum dilihat";case"1":return"Disetujui";case"2":return"Tidak disetujui";default:return"Belum dilihat";}}cekUser(user,role){return this.User.filter(u=>u.role==role||9==u.role)}printData(){this.$.printData.url=MyAppGlobals.apiPath+"/api/report/komite/"+this.routeData.kat+"/"+this.routeData.id;this.$.printData.headers.authorization=this.storedUser.access_token;this.$.printData.generateRequest()}cetak(){this.toast="Berhasil Menyimpan Komite";this.shadowRoot.querySelector("#dialog_manager").opened=!1;this.printData()}_handleKomitePrint(e){if("undefined"!==typeof e.detail.response.url){document.location.href=MyAppGlobals.apiPath+e.detail.response.url;this.set("route.path","/panel/proposal")}}_handleKomitePrintError(e){this.error=e.detail.request.xhr.status;console.log(e)}cekOtoritas(val){if(val==this.storedUser.id){return!0}return!1}}window.customElements.define("bmm-komite-persetujuan",KomitePersetujuan);