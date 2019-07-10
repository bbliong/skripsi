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

// vaadin Component
import '@vaadin/vaadin-item/vaadin-item.js';
import '@vaadin/vaadin-select/vaadin-select.js';
import '@vaadin/vaadin-grid/vaadin-grid.js';
import '@vaadin/vaadin-button/vaadin-button.js';
import '@vaadin/vaadin-dialog/vaadin-dialog.js';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@vaadin/vaadin-grid/vaadin-grid-sort-column.js';
import '@vaadin/vaadin-grid/vaadin-grid-column.js';


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
        
        #cekData {
          display :none;
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
              /* border: 2px solid black; */
          color: white;
          /* width: 100%; */
          /* height: 100%; */
          /* padding-top: 10px; */
          width: auto;
          display: inline;
          border: 1px solid white;
          border-radius: 20px;
          margin-left: 10px;
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

      </style>
       <!-- app-location binds to the app's URL -->
       <app-location route="{{route}}"></app-location>

      <!-- this app-route manages the top-level routes -->
      <app-route
          route="{{route}}"
          pattern="/panel/:view"
          data="{{routeData}}"
          tail="{{subroute}}"></app-route>

      <div class="card">
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
        
        <h1>Data Permintaan
        </h1>
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

          <global-variable key="LoginCred" 
              value="{{ storedUser }}">
          </global-variable>
          <global-variable key="error" 
              value="{{ error }}">
          </global-variable>
          <global-data id="globalData">
          </global-data>
         <!-- Filter  -->
        <div class="filter-side">
          <paper-menu-button on-iron-select="_itemSelected">
          <paper-icon-button icon="search" slot="dropdown-trigger">   </paper-icon-button>
              <paper-listbox slot="dropdown-content">
                <dom-repeat items="{{filter}}" id="dropdownArray" selected="1">
                  <template>
                      <paper-item >{{item}}</paper-item>
                  </template>
                </dom-repeat>
                </paper-listbox>
          
          </paper-menu-button>
        </div>

          <div class="search">
              <dom-repeat items="{{selectedArray}}" id="selectedField">
                <template>
                <vaadin-text-field label="{{item.name}}"  value="{{item.value}}"></vaadin-text-field>
                <paper-icon-button icon="remove" id="{{item.name}}" on-click="_removeArray"> Filter  </paper-icon-button>
                </template>
              </dom-repeat>
              <paper-button  raised class="indigo" on-click="cekData" id="cekData">Search</paper-button>
          </div>
          </template>
        <!-- End Filter -->

          <!-- Table  -->
          <vaadin-grid theme="column-borders" column-reordering-allowed multi-sort id="grid" page-size="10" height-by-rows aria-label="Selection using Active Item Example" >
            <vaadin-grid-sort-column path="muztahiks.nama" id="nama" header="nama" width="300px"></vaadin-grid-sort-column >
              <vaadin-grid-sort-column id="tanggal" header="tanggal" width="150px"></vaadin-grid-sort-column >
              <vaadin-grid-sort-column path="persetujuan.kategori_program" id="kategori" header="kategori" width="300px"></vaadin-grid-sort-column >
              <vaadin-grid-sort-column id="status" header="status" width="200px"></vaadin-grid-sort-column >
              <vaadin-grid-column header="Action" id="action" width="150px"></vaadin-grid-column>
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
        filter : {
          type : Array,
          notify : true, 
          value : function(){
            return ["nama","kategori"]
          }
        },
        selectedArray : {
          type : Array,
          notify : true, 
          value :function(){
            return []
          }
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
  }
}

  static get observers() {
    return [
      // 'getData(storedUser.*)',
       '_routePageChanged(subroute.*)',
    ];
  }

  // Fungsi aktifasi PIC
  confirmPic(){
    this.$.postData.url= MyAppGlobals.apiPath + "/api/pendaftaran/" + this.regObj._id
    this.$.postData.headers['authorization'] = this.storedUser.access_token;
    this.$.postData.body  = this.regObj
    console.log(this.regObj)
    this.$.postData.generateRequest();
  }

  _activatedChanged(newValue, oldValue){
    if(newValue) {
      localStorage.removeItem("register-data");
      this.getData(this.storeData)
      this.$.managerDPP.url= MyAppGlobals.apiPath + "/api/users?role=2"  
      this.$.managerDPP.headers['authorization'] = this.storedUser.access_token;
      console.log(this.storedUser.role)
      if(this.storedUser.role !== 3){
          this.$.dialog_pic.style = "display:none"
      }
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
          var innerHtml = '<paper-icon-button icon ="settings" class="green">Edit</paper-icon-button><paper-icon-button icon = "clear" class="red" style="display:none">Delete</paper-icon-button><paper-icon-button icon ="pan-tool" class="green"  style="display:none">PIC</paper-icon-button>';
        break;
        case  3 : 
          var  urlEdit = '/panel/proposal/edit-proposal/'+ rowData.item.kategori + "/" + rowData.item._id ;
          var innerHtml = '<paper-icon-button icon ="settings" class="green" style="display:none">Edit</paper-icon-button><paper-icon-button icon = "clear" class="red" style="display:none">Delete</paper-icon-button><paper-icon-button icon ="pan-tool" class="green">PIC</paper-icon-button>';
          break;
        case 7 :
          var urlEdit = '/panel/proposal/edit-verifikator/'+ rowData.item.kategori + "/" + rowData.item._id ;
          var innerHtml = '<paper-icon-button icon ="settings" class="green">Edit</paper-icon-button><paper-icon-button icon = "clear" class="red" style="display:none">Delete</paper-icon-button><paper-icon-button icon ="pan-tool" class="green"  style="display:none">PIC</paper-icon-button>';
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
        that.regObj._id = rowData.item._id 
        that.regObj.disposisi_pic_id = rowData.item.persetujuan.disposisi_pic_id
        that.regObj.level_persetujuan = rowData.item.persetujuan.level_persetujuan
        that.shadowRoot.querySelector('vaadin-dialog').opened  =true
      })

      if (rowData.item.persetujuan.level_persetujuan >= 2 && that.storedUser.role == 2){
        let el = document.createElement("paper-button")
        el.innerHTML = "UPD"
        el.classList.add("green")
        root.appendChild(el)
        root.childNodes[3].addEventListener('click', function(e){
          that.set('route.path', '/panel/proposal/edit-upd/'+ rowData.item.kategori +  "/" +  rowData.item._id );
        })
      }
    }
  }


  /* fungsi untuk filter data table */
  _showArray(){
    var value
    if (this.selectedArray.length > 0 ){
       value = "inline"
    }else{
      value="none"
      this.getData(this.storedUser)
    }
    this.$.cekData.updateStyles({
      'display' : value
     }) 
  }

  _removeArray(obj){
    var name = obj.target.id 
    for(var i=0; i < this.selectedArray.length; i++) {
      if(this.selectedArray[i].name == name )
      {
        this.selectedArray.splice(i,1);
      }
   }
   this.filter.push(name)
   this.$.selectedField.render();
   this.$.dropdownArray.render();
   this._showArray()
   
  }

  _containsObject(obj, list) {
      for (var i = 0; i < list.length; i++) {
          if (list[i].name === obj) {
              return true;
          }
      }

      return false;
  }

  _itemSelected(e){
    var selected = e.target.selectedItem.innerText;
    if(this._containsObject(this.selectereArray, selected)){
      this.selectedArray.push({
        name : selected, 
        value : ""
      })
      this.filter = this.filter.filter(function(value, index,arr){
        return value != selected
      })
    }
    this.$.selectedField.render();
    this._showArray()
  }

  /* END Filter */

  

  /* Fungsi untuk get data pertama kalo */
  getData(storeData, url = MyAppGlobals.apiPath + '/api/pendaftaran'){
    if (typeof this.muzId !== 'undefined') {
        url = url +  '?muztahik_id=' + this.muzId
        this.shadowRoot.querySelector(".filter-side").style.display = 'none'
    }
    this.$.GetPendaftaran.url= url
    this.$.GetPendaftaran.headers['authorization'] = this.storedUser.access_token;
    this.$.GetPendaftaran.generateRequest();

   
  }

  cekData(){
    this.pages = 0
    const pagesControl = this.$.pages 
    pagesControl.innerHTML = "";
    var search ='?'
    this.selectedArray.forEach((item)=>{
      search +=  (search.length > 2) ? '&' : ''
      search += (item.name == 'nik' ? 'nik_no_yayasan' + '=' + item.value : item.name + '=' + item.value ) 
    })
    var url = MyAppGlobals.apiPath+ '/api/pendaftaran' + search
    this.getData(this.storedUser, url)
  }

  _handleResponseM(event){
    var response = event.detail.response;
    console.log(response)
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
    root.textContent = date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate();
    };
    // this.$.kategori.renderer = (root, grid, rowData) => {
    //   root.textContent = `${rowData.item.persetujuan.kategori_program}`;
    // };
    this.$.status.renderer = (root, grid, rowData) => {
      var status = ""
      var colors = ["#74b9ff", "#d63031",  "#00b894", "#FF7F50"];
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
          status = "Sudah buat UPD"
          root.classList.add("status-verifikasi")
          root.style.backgroundColor = colors[3] 
          break;
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
    this.shadowRoot.querySelector("vaadin-dialog").opened = false
    this.getData(this.storeData)
  }

  _handleProposalPostError(e){
    console.log(e)
  }

} 

window.customElements.define('bmm-proposal', Proposal);
