/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
import './../shared-styles.js';
import '@polymer/polymer/lib/elements/dom-if.js';
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import('./../config/loader.js');

// vaadin Component
import '@vaadin/vaadin-item/vaadin-item.js';
import '@vaadin/vaadin-select/vaadin-select.js';
import '@vaadin/vaadin-grid/vaadin-grid.js';
import '@vaadin/vaadin-button/vaadin-button.js';
import '@vaadin/vaadin-dialog/vaadin-dialog.js';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@vaadin/vaadin-text-field/vaadin-text-area.js';
import '@vaadin/vaadin-text-field/vaadin-number-field.js';
import '@vaadin/vaadin-grid/vaadin-grid-sort-column.js';
import '@vaadin/vaadin-grid/vaadin-grid-column.js';
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

class Proposal extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }

        .filter-side {
          position:absolute;
          top: 20px;
    right: 20px;
    z-index: 100;
        }
      
        #pages {
          display: flex;
          flex-wrap: wrap;
          margin: 20px;
        }

        .search {
          margin-bottom :20px;
        }

        #pages > button {
          user-select: none;
          padding: 5px;
          margin: 0 5px;
          border-radius: 10%;
          border: 0;
          background: transparent;
          font: inherit;
          outline: none;
          cursor: pointer;
        }

        #pages > button:not([disabled]):hover,
        #pages > button:focus {
          color: #ccc;
          background-color: #eee;
        }

        #pages > button[selected] {
          font-weight: bold;
          color: white;
          background-color: #ccc;
        }

        #pages > button[disabled] {
          opacity: 0.5;
          cursor: default;
        }

        .card {
          position : relative;
        }

        .status-verifikasi {
          color: white;
          width: 220px;
          display: inline;
          border: 1px solid white;
          width: 4;
          margin-left: 10px;
          border-radius: 7px;
          text-align: center;
        }

        [part~="cell"].female {
        background: rgb(255, 240, 240);
      }

      [part~="cell"].male {
        background: rgb(245, 245, 255);
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

        #main {
          display :none;
        }

        vaadin-grid {
          font-size :14px;
        }
      </style>

      <bmm-loader></bmm-loader>

       <!-- app-location binds to the app's URL -->
       <app-location route="{{route}}"></app-location>

      <!-- this app-route manages the top-level routes -->
      <app-route
          route="{{route}}"
          pattern="/panel/:view"
          data="{{routeData}}"
          tail="{{subroute}}"></app-route>

      <div class="card" id="main">
      <vaadin-dialog aria-label="polymer templates" id="dialog_pic">
          <template>
           <h3> Pilih PIC </h3>
           <vaadin-select value="{{ regObj.disposisi_pic_id }}" label="Staff tertuju" id="disposisi_pic">
              <template>
                <vaadin-list-box>
                <dom-repeat items="{{User}}">
                  <template>
                    <vaadin-item label="{{item.nama}}" value="{{item.Id}}">{{item.nama}}</vaadin-item>
                  </template>
                </dom-repeat>
                </vaadin-list-box>
              </template>
            </vaadin-select>
            <vaadin-button on-click="confirmPic"> Simpan</vaadin-button>
          </template>
       </vaadin-dialog>
       <vaadin-dialog  id="dialogSearch">
          <template>
           <h3> Filter </h3>
           <!-- <div class="search"  id="selectedField"> -->
                <vaadin-select value="{{Filter.kategori}}" colspan="2" label="Kategori">
                  <template>
              
                    <vaadin-list-box>
                    <vaadin-item value="">Semua</vaadin-item>
                      <dom-repeat items="{{Kategori}}">
                        <template>
                          <vaadin-item label="{{item.Value}}" value="{{item.KodeP}}">{{item.Value}}</vaadin-item>
                        </template>
                      </dom-repeat>
                    </vaadin-list-box>
                  </template>
                </vaadin-select><br>
    
          <!-- </div> -->
            <vaadin-date-picker id="start" label="Tanggal Mulai" value="{{Filter.tanggal_mulai}}"></vaadin-date-picker><br>
            <vaadin-date-picker id="end" label="Tanggal Akhir"  value="{{Filter.tanggal_akhir}}"></vaadin-date-picker><br>
            <vaadin-button on-click="cekData" id="cekData" class="green" style="width:100%"> Cari</vaadin-button>
          </template>
       </vaadin-dialog>
       <vaadin-dialog  id="dialogPencairan">
          <template>
           <h3> Pencairan dana a/n  {{ Pencairan.muztahiks.nama}}</h3>
            <vaadin-date-picker id="end" label="Tanggal Pencairan"value="{{Pencairan.persetujuan.tanggal_pencairan}}" style="width:100%"></vaadin-date-picker><br>
            <vaadin-number-field label="Jumlah Pencairan" style="width:100%" value="{{Pencairan.persetujuan.jumlah_pencairan}}"></vaadin-number-field><br>
            <vaadin-text-area label="Keterangan" style="width:100%" value="{{Pencairan.persetujuan.keterangan}}"></vaadin-text-area><br>
            <vaadin-button on-click="simpanPencairan" id="simpanPencairan"> Simpan Data Pencairan</vaadin-button>
          </template>
       </vaadin-dialog>
        <h1 style="display:inline;margin-right:20px;">Data Permintaan</h1>
        <paper-button raised class="indigo" on-click="refresh">Refresh</paper-button>
        <iron-ajax
          id="GetPendaftaran"
          headers='{"Access-Control-Allow-Origin": "*" }'
          handle-as="json"
          method="GET"
          on-response="_handleResponseM"
          on-error="_handleErrorM"
          Content-Type="application/json"
          debounce-duration="300"></iron-ajax>
        
        <!-- ajax delete -->
          <iron-ajax
          id="DeletePendaftaran"
          headers='{"Access-Control-Allow-Origin": "*" }'
          handle-as="json"
          method="DELETE"
          on-response="_handlePendaftaranDelete"
          on-error="_handlePendaftaranDeleteError"
          Content-Type="application/json"
          debounce-duration="300"></iron-ajax>

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
            method="PUT"
            on-response="_handleProposalPost"
            on-error="_handleProposalPostsError"
            Content-Type="application/json"
            debounce-duration="300"></iron-ajax>

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

          <global-variable key="LoginCred"   value="{{ storedUser }}"> </global-variable>
          <global-variable key="error"   value="{{ error }}">  </global-variable>
          <global-variable key="toast" value="{{ toast }}"></global-variable>
          <global-data id="globalData"> </global-data>

          <div class="filter-side">
              <paper-icon-button icon="search" on-click="dialogSearch"></paper-icon-button>
          </div>
          <!-- Table  -->
          <vaadin-grid theme="column-borders" column-reordering-allowed multi-sort id="grid" page-size="10" height-by-rows aria-label="Selection using Active Item Example" style="margin-top:30px;">
            <vaadin-grid-sort-column path="muztahiks.nama" id="nama" header="nama" width="200px"></vaadin-grid-sort-column >
              <vaadin-grid-sort-column id="tanggal" header="tanggal" width="200px"></vaadin-grid-sort-column >
              <vaadin-grid-sort-column path="persetujuan.kategori_program" id="kategori" header="kategori" width="220px"></vaadin-grid-sort-column >
              <vaadin-grid-sort-column id="status" header="status" width="220px"></vaadin-grid-sort-column >
              <vaadin-grid-column header="Action" id="action" width="150px">
                    
              </vaadin-grid-column>
          </vaadin-grid>
          <div id="pages"></div>
          <!-- End Table -->
      </div>
    `;
  }

  static get properties(){
      return {
        pendaftarans : {
          type :Array,
          notify : true,
        },
        Search : String,
        storedUser : {
          type : Object,
          notify : true
        },
        pages :{
          type : Array,
          notify  :true
        },
        User : {
          type : Array,
          notify : true,
          value : function(){
            return [
  
            ]
          }
        },
        // Varible id 
        muzId : {
          type : String,
          notify : true,
          observer: '_activatedChanged'
        },
        
         // Varible id 
         reload : {
          type : Boolean,
          notify : true
        },
        activated: {
          type: Boolean,
          value:false,
          observer: '_activatedChanged'
        },
        regObj  : {
          type : Object,
          notify : true,
          value : function(){
            return {       
            }
          }
        },
        Pencairan  : {
          type : Object,
          notify : true,
          value : function(){
            return {  
              "nama" : "",
              "persetujuan" : {
                    "tanggal_pencairan" : "",
                    "jumlah_pencairan" : "",
                    "keterangan" : "",
              }     
            }
          }
        },
        Kategori : {
          type : Array,
          notify : true,
          value : function(){
            return [

            ]
          }
        },
        Filter : {
          type : Object,
          notify : true,
          value : function(){
            return   {
              "kategori" : "",
              "tanggal_mulai" : "",
              "tanggal_akhir" : "",
            }
          }
        },
        statusRequest : Number
  }
} 


connectedCallback() {
  super.connectedCallback();
  this._loading(1)
}

  static get observers() {
    return [
      // 'getData(storedUser.*)',
       '_routePageChanged(subroute.*)',
       '_kategoriSelected(selectedKategori)',
    ];
  }

  _kategoriSelected(val){
    console.log(val)
  }
  
  // Fungsi aktifasi PIC
  confirmPic(){
    this.$.postData.url= MyAppGlobals.apiPath + "/api/pendaftaran/" + this.regObj._id
    this.$.postData.headers['authorization'] = this.storedUser.access_token;
    this.$.postData.body  = {
      "muztahik_id" : this.regObj._id,
      "persetujuan" : {
        "disposisi_pic_id" : this.regObj.disposisi_pic_id,
        "level_persetujuan" : this.regObj.level_persetujuan
      }
    }
    this.statusRequest = 1
    this.$.postData.generateRequest();
  }

  // Fungsi aktifasi PIC
  simpanPencairan(){
    this.$.postData.url= MyAppGlobals.apiPath + "/api/pencairan/" +  this.Pencairan._id
    this.$.postData.headers['authorization'] = this.storedUser.access_token;
    this.$.postData.body  = {
      "muztahik_id" : this.Pencairan._id,
      "persetujuan" : {
        "level_persetujuan" : this.Pencairan.persetujuan.level_persetujuan,
        "tanggal_pencairan" :  new Date(this.Pencairan.persetujuan.tanggal_pencairan).toISOString(),
        "jumlah_pencairan" :  parseInt(this.Pencairan.persetujuan.jumlah_pencairan),
        "keterangan" :  this.Pencairan.persetujuan.keterangan,
      }
    }
    this.statusRequest = 2
    this.$.postData.generateRequest();
  }
  _activatedChanged(newValue, oldValue){
    if(newValue) {
      // this._loading(1)
      localStorage.removeItem("register-data");
      this.getData(this.storeData)
      this.$.managerDPP.url= MyAppGlobals.apiPath + "/api/users?role=2&role2=3"  
      this.$.managerDPP.headers['authorization'] = this.storedUser.access_token;
      if(this.storedUser.role !== 3){
          this.$.dialog_pic.style = "display:none"
      }
    }
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


  _clicked(){
    const action = this.$.action
    var that =this 
    action.renderer = function(root, column, rowData){
      
      switch(that.storedUser.role){
        case  1 : 
          var  urlEdit = '/panel/proposal/edit-proposal/'+ rowData.item.kategori + "/" + rowData.item._id ;
          var urlDelete = MyAppGlobals.apiPath + "/api/pendaftaran/"+ rowData.item._id;
          var innerHtml = '<paper-icon-button icon ="settings" class="green">Edit</paper-icon-button><paper-icon-button icon = "clear" class="red">Delete</paper-icon-button><paper-icon-button icon ="pan-tool" class="green" style="display:none">PIC</paper-icon-button>';
          break;
        case  2 : 
          var urlEdit = '/panel/proposal/edit-verifikator/'+ rowData.item.kategori + "/" + rowData.item._id ;
          var innerHtml = '<paper-button class="green">Verif</paper-button><paper-icon-button icon = "clear" class="red" style="display:none">Delete</paper-icon-button><paper-icon-button icon ="pan-tool" class="green"  style="display:none">PIC</paper-icon-button>';
        break;
        case  3 : 
          var  urlEdit = '/panel/proposal/edit-proposal/'+ rowData.item.kategori + "/" + rowData.item._id ;
          var innerHtml = '<paper-icon-button icon ="settings" class="green" style="display:none">Edit</paper-icon-button><paper-icon-button icon = "clear" class="red" style="display:none">Delete</paper-icon-button><paper-icon-button icon ="pan-tool" class="green">PIC</paper-icon-button> ';

          break;
        case  4 : 
          var  urlEdit = '/panel/proposal/edit-proposal/'+ rowData.item.kategori + "/" + rowData.item._id ;
          var innerHtml = '<paper-icon-button icon ="settings" class="green" style="display:none">Edit</paper-icon-button><paper-icon-button icon = "clear" class="red" style="display:none">Delete</paper-icon-button><paper-icon-button icon ="pan-tool" class="green"  style="display:none">PIC</paper-icon-button>';
          break;
        case  5 : 
          var  urlEdit = '/panel/proposal/edit-proposal/'+ rowData.item.kategori + "/" + rowData.item._id ;
          var urlDelete = MyAppGlobals.apiPath + "/api/pendaftaran/"+ rowData.item._id;
          var innerHtml = '<paper-icon-button icon ="settings" class="green">Edit</paper-icon-button><paper-icon-button icon = "clear" class="red">Delete</paper-icon-button><paper-icon-button icon ="pan-tool" class="green" style="display:none">PIC</paper-icon-button>';
        break;
        case 7 :
          var urlEdit = '/panel/proposal/edit-verifikator/'+ rowData.item.kategori + "/" + rowData.item._id ;
          var innerHtml = '<paper-icon-button icon ="settings" class="green"  style="display:none">Edit</paper-icon-button><paper-icon-button icon = "clear" class="red" style="display:none">Delete</paper-icon-button><paper-icon-button icon ="pan-tool" class="green"  style="display:none">PIC</paper-icon-button>';
        break;
        case  9 : 
        var  urlEdit = '/panel/proposal/edit-proposal/'+ rowData.item.kategori + "/" + rowData.item._id ;
        var innerHtml = '<paper-icon-button icon ="settings" class="green" style="display:none">Edit</paper-icon-button><paper-icon-button icon = "clear" class="red" style="display:none">Delete</paper-icon-button><paper-icon-button icon ="pan-tool" class="green"  style="display:none">PIC</paper-icon-button>';
        break;
      }

      root.innerHTML =  innerHtml;
      root.childNodes[0].addEventListener('click', function(e){
        that.set('route.path', urlEdit);
      })
      root.childNodes[1].addEventListener('click', function(e){
        if(confirm("Yakin hapus pendaftaran proposal "  +rowData.item.muztahiks.nama + " dengan asnaf " +  rowData.item.kategoris.asnaf + ". Jika data dihapus, tidak dapat dikembalikan kembali!")){
          that.$.DeletePendaftaran.url= urlDelete;
          that.$.DeletePendaftaran.headers['authorization'] = that.storedUser.access_token;
          that.$.DeletePendaftaran.generateRequest();
        }
      })
      root.childNodes[2].addEventListener('click', function(e){
        // that.regObj._id = rowData.item._id 
        // that.regObj.disposisi_pic_id = rowData.item.persetujuan.disposisi_pic_id
        // that.regObj.level_persetujuan = rowData.item.persetujuan.level_persetujuan
        that.regObj = {
          "_id"  : rowData.item._id ,
              "disposisi_pic_id"  : rowData.item.persetujuan.disposisi_pic_id,
              "level_persetujuan" : rowData.item.persetujuan.level_persetujuan
        }

        // Untuk ambil yang ada di dalem shadowroot
        var dialog =that.shadowRoot.querySelector('vaadin-dialog')
        var backdrop = dialog.shadowRoot.querySelector('vaadin-dialog-overlay').shadowRoot.querySelector('#backdrop')
        backdrop.addEventListener("click", function(){
         that.regObj = {}
        })
        dialog.opened  =true      
      })

      if( that.storedUser.role == 3 && rowData.item.persetujuan.level_persetujuan >= 1  && (typeof rowData.item.verifikasi !== "undefined")){
        let el = document.createElement("paper-button")
        el.innerHTML = "Verif"
        el.classList.add("green")
        root.appendChild(el).addEventListener('click', function(e){
          that.set('route.path', '/panel/proposal/edit-verifikator/'+ rowData.item.kategori +  "/" +  rowData.item._id );
        })
        action.width =(that._subCon(action.width) <  that._subCon("220px")) ?   "220px" : action.width;
      }

      if ( (that.storedUser.role == 3  || that.storedUser.role == 2 ||that.storedUser.role == 9 || (that.storedUser.role == 4 && that.storedUser.department == 1   ) )   && rowData.item.persetujuan.level_persetujuan >= 2){
        let el = document.createElement("paper-button")
        el.innerHTML = "UPD"
        el.classList.add("green")
        root.appendChild(el).addEventListener('click', function(e){
          that.set('route.path', '/panel/proposal/edit-upd/'+ rowData.item.kategori +  "/" +  rowData.item._id );
        })

        action.width =(that._subCon(action.width) <  that._subCon("200px")) ?   "200px" : action.width;
      }

      if(  that.storedUser.role == 2 && rowData.item.persetujuan.level_persetujuan >= 5 && rowData.item.persetujuan.level_persetujuan !== 6) {
        let el = document.createElement("paper-button")
        el.innerHTML = "Komite"
        el.classList.add("blue")
        root.appendChild(el).addEventListener('click', function(e){
          that.set('route.path', '/panel/proposal/komite-pic/'+ rowData.item.kategori +  "/" +  rowData.item._id );
        })
        action.width =(that._subCon(action.width) <  that._subCon("280px")) ?   "280px" : action.width;
      }else if  ((that.storedUser.role == 4 || that.storedUser.role >= 7 )&& rowData.item.persetujuan.level_persetujuan >= 5 && rowData.item.persetujuan.level_persetujuan !== 6){
        let el = document.createElement("paper-button")
        el.innerHTML = "Komite"
        el.classList.add("blue")
        root.appendChild(el).addEventListener('click', function(e){
          that.set('route.path', '/panel/proposal/komite-persetujuan/'+ rowData.item.kategori +  "/" +  rowData.item._id );
        })
        action.width =(that._subCon(action.width) <  that._subCon("200px")) ?   "200px" : action.width;
      }


      
      if((that.storedUser.id == rowData.item.persetujuan.disposisi_pic_id || that.storedUser.id == rowData.item.persetujuan.manager_id || that.storedUser.id == rowData.item.persetujuan.kadiv_id )  && rowData.item.persetujuan.level_persetujuan >= 7) {
          var url = "/panel/ppd/ppd-persetujuan"
          if(that.storedUser.role == 2) {
            url = "/panel/proposal/ppd-pic"
          }
          var approve = rowData.item.komite.filter(function(data){
            return typeof data.tanggal !== "undefined" && data.tanggal !== "" && data.tanggal !== "0001-01-01T00:00:00Z"  
          })

          if(rowData.item.komite.length == approve.length){
            let el = document.createElement("paper-button")
              el.innerHTML = "PPD"
              el.classList.add("blue")
              root.appendChild(el).addEventListener('click', function(e){
              that.set('route.path', url+'/'+ rowData.item.kategori +  "/" +  rowData.item._id );
              })
            action.width =(that._subCon(action.width) <  that._subCon("350px")) ?   "350px" : action.width; 

            if(typeof  rowData.item.ppd !== "undefined"){
              var approve = rowData.item.ppd.filter(function(data){
                return typeof data.tanggal !== "undefined" && data.tanggal !== "" && data.tanggal !== "0001-01-01T00:00:00Z"  
              })
    
              if(rowData.item.ppd.length == approve.length && that.storedUser.role == 2){
                let el = document.createElement("paper-button")
                  el.innerHTML = "Pencairan"
                  el.classList.add("blue")
                  root.appendChild(el).addEventListener('click', function(e){
                    that.Pencairan  = rowData.item
                    that.Pencairan.persetujuan.tanggal_pencairan = that.formatDate2(new Date(rowData.item.persetujuan.tanggal_pencairan))
                    if (typeof that.Pencairan.persetujuan.jumlah_pencairan  == "undefined"){
                      that.Pencairan.persetujuan.jumlah_pencairan = that.Pencairan.kategoris.jumlah_bantuan
                    }
                    that.shadowRoot.querySelector("#dialogPencairan").opened = true
                  })
                action.width =(that._subCon(action.width) <  that._subCon("440px")) ?   "440px" : action.width; 
              } 
            }

          } 
          
         
         
      }    

         
    }
  }

 

  /* Fungsi untuk get data pertama kalo */
  getData(storeData, url = MyAppGlobals.apiPath + '/api/pendaftaran'){
    if (typeof this.muzId !== 'undefined') {
        url = url +  '?muztahik_id=' + this.muzId
        this.shadowRoot.querySelector(".filter-side").style.display = 'none'
        this.shadowRoot.querySelector("#main").style.margin = "0"
        this.shadowRoot.querySelector("#main").style.padding = "0"
    }
    this.$.GetPendaftaran.url= url
    this.$.GetPendaftaran.headers['authorization'] = this.storedUser.access_token;
    this.$.GetPendaftaran.generateRequest();

   
  }

  cekData(){
    this.pages = 0
    const pagesControl = this.$.pages 
    pagesControl.innerHTML = "";
    var search =''
    var isi = ''
    for (var key in this.Filter) {
      if (this.Filter.hasOwnProperty(key)) {
         if(this.Filter[key] !== ""){
            search +=  (search.length > 2) ? '&' : '?'
            if(key == "kategori"){
              isi =  this.Filter[key]
            }else if(key == "tanggal_mulai"){
                if(this.Filter["tanggal_akhir"] == ""){
                  alert('Belum memasukan tanggal akhir')
                  return
                }else{
                  isi = new Date(this.Filter[key]).toISOString()
                }
            }else if(key == "tanggal_akhir"){
                if(this.Filter["tanggal_mulai"] == ""){
                  alert('Belum memasukan tanggal mulai')
                  return
                }else{
                  isi = new Date(this.Filter[key]).toISOString()
                }
            }

            search+= key  + "=" + isi
         }
      }
    }
    var url = MyAppGlobals.apiPath+ '/api/pendaftaran' + search
    this.getData(this.storedUser, url)
  }

  _handleResponseM(event){
    this.shadowRoot.querySelector("#dialogSearch").opened = false
    var response = event.detail.response;
    this.pendaftarans = response.data
    //   const grid = document.querySelector('vaadin-grid');
    //   grid.items  = this.pendaftarans
    
    const grid = this.$.grid
    grid.items = this.pendaftarans
    this._clicked() 

    this.updateItemsFromPage(1);
    // this.$.nama.renderer = (root, grid, rowData) => {
    //   root.textContent = `${rowData.item.muztahiks.nama}`;
    // };
    this.$.tanggal.renderer = (root, grid, rowData) => {
    var  date = new Date(`${rowData.item.tanggalProposal}`);
    root.textContent = this.formatDate(date)
    };
    // this.$.kategori.renderer = (root, grid, rowData) => {
    //   root.textContent = `${rowData.item.persetujuan.kategori_program}`;
    // };
    this.$.status.renderer = (root, grid, rowData) => {
      var status = ""
      var colors = ["#74b9ff", "#d63031",  "#00b894", "#FF7F50", "#6861CE", "#8BC34A", "#F44336", "#c0392b" , "#16a085", "#2c3e50" ,"#8e44ad", '#34495e'];
      switch(rowData.item.persetujuan.level_persetujuan){
        case  0 :
          status = "Belum ada PIC"
          root.classList.add("status-verifikasi")
          root.style.backgroundColor = colors[1] 
          break;
        case  1 :
            status = "Belum Diverifikasi"
            root.classList.add("status-verifikasi")
            root.style.backgroundColor = colors[0] 
            break;
        case  2 :
            status = "Sudah Diverifikasi"
            root.classList.add("status-verifikasi")
            root.style.backgroundColor = colors[2] 
            break;
        case  3 :
            status = "UPD Sudah Dibuat"
            root.classList.add("status-verifikasi")
            root.style.backgroundColor = colors[3] 
            break;
        case  4 :
            status = "UPD diperiksa Manager"
            root.classList.add("status-verifikasi")
            root.style.backgroundColor = colors[4] 
            break;
        case  5 :
            status = "UPD Disetujui Kadiv/Direktur "
            root.classList.add("status-verifikasi")
            root.style.backgroundColor = colors[5] 
            break;
        case  6 :
            status = "UPD Tidak disetujui Kadiv/Direktur"
            root.classList.add("status-verifikasi")
            root.style.backgroundColor = colors[6] 
            break;
        case  7 :
          
            status = "Komite sudah dibentuk"
            root.classList.add("status-verifikasi")
            root.style.backgroundColor = colors[8] 

         
            if(typeof rowData.item.komite !== "undefined"){
              var approve = rowData.item.komite.filter(function(data){
                return typeof data.tanggal !== "undefined" && data.tanggal !== "" && data.tanggal !== "0001-01-01T00:00:00Z"  
              })
              if (approve.length == rowData.item.komite.length){
                status = "TTD Komite Sudah Lengkap" 
                root.classList.add("status-verifikasi")
                root.style.backgroundColor = colors[11] 
              }else if (approve.length > 0){
                status = "Komite sudah di ttd " + approve.length  + " orang" 
                root.classList.add("status-verifikasi")
                root.style.backgroundColor = colors[9] 
              }
             
            }
            break;
        case  8 :
            status = "PPD sudah dibuat"
            root.classList.add("status-verifikasi")
            root.style.backgroundColor = colors[10] 

            if(typeof rowData.item.ppd !== "undefined"){
              var approve = rowData.item.ppd.filter(function(data){
                return typeof data.tanggal !== "undefined" && data.tanggal !== "" && data.tanggal !== "0001-01-01T00:00:00Z"  
              })
              if (approve.length == 4){
                status = "TTD PPD Sudah Lengkap" 
                root.classList.add("status-verifikasi")
                root.style.backgroundColor = colors[11] 
              }else if (approve.length > 0){
                status = "PPd sudah di ttd " + approve.length  + " orang" 
                root.classList.add("status-verifikasi")
                root.style.backgroundColor = colors[10] 
              }
              
            }
        break;
        case  9 :
            status = "Pencairan tgl " + this.formatDate2(new Date( rowData.item.persetujuan.tanggal_pencairan))
            root.classList.add("status-verifikasi")
            root.style.backgroundColor = colors[2] 
      }
      root.textContent = status;
    };
    }

  _handleErrorM(e){
    this.error = e.detail.request.xhr.status
  }

  /* End Fungsi Get */

  updateItemsFromPage(page) {
    const pagesControl = this.$.pages
    var that = this
    const grid = this.$.grid

    if (page === undefined) {
      return;
    }
    if(this.pendaftarans == null){
      this._loading(0)
      return
    }
    if (!that.pages) {
      that.pages = Array.apply(null, {length: Math.ceil( this.pendaftarans.length / grid.pageSize)}).map(function(item, index) {
        return index + 1;
      });

      const prevBtn = window.document.createElement('button');
      prevBtn.textContent = '<';
      prevBtn.addEventListener('click', function() {
        const selectedPage = parseInt(pagesControl.querySelector('[selected]').textContent);
        that.updateItemsFromPage(selectedPage - 1);
      });

      pagesControl.appendChild(prevBtn);

      that.pages.forEach(function(pageNumber) {
        const pageBtn = window.document.createElement('button');
        pageBtn.textContent = pageNumber;
        pageBtn.addEventListener('click', function(e) {
        that.updateItemsFromPage(parseInt(e.target.textContent));
        });
        if (pageNumber === page) {
          pageBtn.setAttribute('selected', true);
        }
        pagesControl.appendChild(pageBtn);
      });

      const nextBtn = window.document.createElement('button');
      nextBtn.textContent = '>';
      nextBtn.addEventListener('click', function() {
        const selectedPage = parseInt(pagesControl.querySelector('[selected]').textContent);
        that.updateItemsFromPage(selectedPage + 1);
      });
      pagesControl.appendChild(nextBtn);
    }

    const buttons = Array.from(pagesControl.children);
    buttons.forEach(function(btn, index) {
        if (parseInt(btn.textContent) === page) {
          btn.setAttribute('selected', true);
        } else {
          btn.removeAttribute('selected');
        }
        if (index === 0) {
          if (page === 1) {
            btn.setAttribute('disabled', '');
          } else {
            btn.removeAttribute('disabled');
          }
        }
        if (index === buttons.length - 1) {
          if (page === that.pages.length) {
            btn.setAttribute('disabled', '');
          } else {
            btn.removeAttribute('disabled');
          }
        }
      });

    var start = (page - 1) * grid.pageSize;
    var end = page * grid.pageSize;
    grid.items =  this.pendaftarans.slice(start, end);
    this._clicked()
    this._loading(0)
  }

  /* Fungsi delete */
  _handlePendaftaranDelete(e){
    this.getData(this.storeData)
  }

  _handlePendaftaranDeleteError(e){
  }
  /* End Fungsi Delete */

  /* Update ketika page dibuka */

  _routePageChanged(page) {
    // if(this.muzId){
    //   this.getData(this.storeData)
    // }
  }

  // Handle Data user
  _handleManager(e){
    var response = e.detail.response;
    this.User = response.data
  }

  _errorManager(e){
    console.log(e)
  }

  // Handle update pic
  
  _handleProposalPost(e){
    if(this.statusRequest == 1){
      this.toast = "Berhasil memilih PIC"
    }else if(this.statusRequest == 1){
      this.toast = "Alhamdulillah sudah melakukan pencairan"
    }
    this.shadowRoot.querySelector("vaadin-dialog").opened = false
    this.shadowRoot.querySelector("#dialogPencairan").opened = false
    this.getData(this.storeData)
  }

  _handleProposalPostError(e){
    if(e.detail.request.xhr.status == 401){
      this.error = e.detail.request.xhr.status
    }else{
      this.toast =e.detail.request.xhr.response.Message
    }
  }


  formatDate(date){

    var hari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', "Jum'at", 'Sabtu']
    var bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
    var day = date.getDay();
    var dd = date.getDate();
    var mm = date.getMonth(); 
    var yyyy = date.getFullYear();

    var  hari = hari[day]
    var bulan = bulan[mm]
    return hari + ", " + dd  + " " + bulan + " " + yyyy
    }

    formatDate2(date){
      var dd = date.getDate();
      var mm = date.getMonth()+1; 
      var yyyy = date.getFullYear();
      return yyyy + "-" + mm +  "-"+dd
    }


   // Handle kategori 
     // Fungsi untuk handle kategori
    _handleKategori(e){
      var response = e.detail.response;
      this.Kategori = response.data
    }
    _errorKategori(e){
      console.log(e)
    }

    /***** Fungdi Handle Dialog  *****/

    dialogSearch(){
      this.shadowRoot.querySelector("#dialogSearch").opened = true
      this.$.datass.url= MyAppGlobals.apiPath + "/api/kategori"
      this.$.datass.headers['authorization'] = this.storedUser.access_token;
    }

    /****   Refresh Data ******/
    refresh(){
      localStorage.removeItem("register-data");
      this.getData(this.storeData)
    }


    _subCon(val){
      return parseInt(val.substring(0,3))
    }
}   

window.customElements.define('bmm-proposal', Proposal);
