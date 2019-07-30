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
import '@polymer/polymer/lib/elements/dom-module';
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import('./../config/loader.js');

// vaadin Component
import '@vaadin/vaadin-grid/vaadin-grid.js';
import '@vaadin/vaadin-button/vaadin-button.js';
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
import 'global-variable-migration/global-data.js';
import 'global-variable-migration/global-variable.js'






class User extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }

        .filter-side {
          position:absolute;
          top : 120px;
          right :50px;
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
          border-radius: 100px;
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
        paper-button.green {
          background-color: var(--paper-green-500);
          color: white;
        }
        
        paper-button.green[active] {
          background-color: var(--paper-red-500);
        }
        vaadin-grid-cell-content{
          overflow :unset;
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
        <h1>Data User</h1>
        <iron-ajax
          id="GetUser"
          headers='{"Access-Control-Allow-Origin": "*" }'
          handle-as="json"
          method="GET"
          on-response="_handleResponseM"
          on-error="_handleErrorM"
          Content-Type="application/json"
          debounce-duration="300"></iron-ajax>
        
        <!-- ajax delete -->
          <iron-ajax
          id="DeleteUser"
          headers='{"Access-Control-Allow-Origin": "*" }'
          handle-as="json"
          method="DELETE"
          on-response="_handleUserDelete"
          on-error="_handleUserDeleteError"
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
        

          <div class="filter-side">
              <paper-button  raised class="indigo" on-click="_addUser" id="addUser">Tambah</paper-button>
          </div>


          <!-- Table  -->
          <vaadin-grid theme="column-borders" column-reordering-allowed multi-sort id="grid" page-size="10" height-by-rows aria-label="Selection using Active Item Example" >
              <vaadin-grid-sort-column header="Nama"  path="nama" width="300px"></vaadin-grid-sort-column >
              <vaadin-grid-sort-column header="Jabatan" id="jabatan" width="150px"></vaadin-grid-sort-column >
              <vaadin-grid-column header="Action" id="action"></vaadin-grid-column>
          </vaadin-grid>
          <div id="pages"></div>
          <!-- End Table -->
      </div>
    `;
  }

  static get properties(){
      return {
        users : {
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
        incre : {
          type : Number, 
          value : 0
        },
        activated: {
          type: Boolean,
          value:false,
          observer: '_activatedChanged'
        }
      }
  }

  static get observers() {
    return [
      // 'getData(storedUser.*)',
      // '_routePageChanged(subroute.*)',
    ];
  }

  connectedCallback() {
    super.connectedCallback();
    this._loading(1)
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

  _activatedChanged(newValue, oldValue){
    if(newValue) {
      localStorage.removeItem("register-data");
      this.getData(this.storeData)  
    }
  }

  _clicked(){
    const action = this.$.action
    var that =this 
    action.renderer = function(root, column, rowData){
      root.innerHTML ='<paper-icon-button icon ="settings" class="green">Edit</paper-icon-button><paper-icon-button icon = "clear" class="red">Delete</paper-icon-button>';
      root.childNodes[0].addEventListener('click', function(e){
        that.set('subroute.path', '/edit-user/'+rowData.item.Id);
      })
      root.childNodes[1].addEventListener('click', function(e){
        if(confirm("Yakin hapus pendaftaran proposal "  +rowData.item.muztahiks.nama + " dengan asnaf " +  rowData.item.kategoris.asnaf + ". Jika data dihapus, tidak dapat dikembalikan kembali!")){
          that.$.DeleteUser.url=  MyAppGlobals.apiPath + "/api/user/"+ rowData.item._id;;
          that.$.DeleteUser.headers['authorization'] = that.storedUser.access_token;
          that.$.DeleteUser.generateRequest();
        }
      })
    }
  }

  _addUser(){
    this.set('subroute.path', '/add-user');
  }


  /* Fungsi untuk get data pertama kalo */
  getData(storeData, url = MyAppGlobals.apiPath + '/api/users'){
    this.$.GetUser.url= url
    this.$.GetUser.headers['authorization'] = this.storedUser.access_token;
    this.$.GetUser.generateRequest();
  }

  _handleResponseM(event){
    var response = event.detail.response;
    this.users = response.data
    
    const grid = this.$.grid
    grid.items = this.users
    this._clicked() 

    this.updateItemsFromPage(1);
    this.$.jabatan.renderer = (root, grid, rowData) => {
      root.textContent = rowData.item.details_role
    };
    }

  _handleErrorM(e){
    this.error = e.detail.request.xhr.status
  }

  /* End Fungsi Get */

  updateItemsFromPage(page) {
    if( this.users !== null){
      const pagesControl = this.$.pages
      var that = this
      const grid = this.$.grid
  
      if (page === undefined) {
        return;
      }
  
      if (!that.pages) {
        that.pages = Array.apply(null, {length: Math.ceil( this.users.length / grid.pageSize)}).map(function(item, index) {
          return index + 1;
        });
  
        const prevBtn = window.document.createElement('button');
        prevBtn.classList.add("navigation-page")
        prevBtn.textContent = 'previous';
        prevBtn.addEventListener('click', function() {
          const selectedPage = parseInt(pagesControl.querySelector('[selected]').textContent);
          that.updateItemsFromPage(selectedPage - 1);
        });
  
        pagesControl.appendChild(prevBtn);
  
        that.pages.forEach(function(pageNumber) {
          const pageBtn = window.document.createElement('button');
          pageBtn.classList.add("navigation-page")
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
        nextBtn.classList.add("navigation-page-number")
        nextBtn.textContent = 'next';
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
      grid.items =  this.users.slice(start, end);
      this._clicked()
      this._loading(0)
    }

  }

  /* Fungsi delete */
  _handleUserDelete(e){
     this.getData(this.storeDatagetData)
  }

  _handleUserDeleteError(e){
    this.error = e.detail.request.xhr.status
    console.log(e)
  }

  
  _addUser(){
    this.set('subroute.path', '/add-user');
  }


} 

window.customElements.define('bmm-user', User);
