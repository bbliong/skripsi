define(["require","../my-app.js"],function(_require,_myApp){"use strict";_require=babelHelpers.interopRequireWildcard(_require);new Promise((res,rej)=>_require.default(["../config/loader.js"],res,rej)).then(bundle=>bundle&&bundle.$loader||{});class User extends _myApp.PolymerElement{static get template(){return _myApp.html`
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
    `}static get properties(){return{users:{type:Array,notify:!0},Search:String,storedUser:{type:Object,notify:!0},pages:{type:Array,notify:!0},incre:{type:Number,value:0},activated:{type:Boolean,value:!1,observer:"_activatedChanged"}}}static get observers(){return[]}connectedCallback(){super.connectedCallback();this._loading(1)}_loading(show){if(0==show){this.shadowRoot.querySelector("#main").style.display="block";var that=this;setTimeout(function(){that.shadowRoot.querySelector("bmm-loader").style.display="none"},2e3)}else{this.shadowRoot.querySelector("#main").style.display="none";this.shadowRoot.querySelector("bmm-loader").style.display="block"}}_activatedChanged(newValue,oldValue){if(newValue){localStorage.removeItem("register-data");this.getData(this.storeData)}}_clicked(){const action=this.$.action;var that=this;action.renderer=function(root,column,rowData){root.innerHTML="<paper-icon-button icon =\"settings\" class=\"green\">Edit</paper-icon-button><paper-icon-button icon = \"clear\" class=\"red\">Delete</paper-icon-button>";root.childNodes[0].addEventListener("click",function(e){that.set("subroute.path","/edit-user/"+rowData.item.Id)});root.childNodes[1].addEventListener("click",function(e){if(confirm("Yakin hapus pendaftaran proposal "+rowData.item.muztahiks.nama+" dengan asnaf "+rowData.item.kategoris.asnaf+". Jika data dihapus, tidak dapat dikembalikan kembali!")){that.$.DeleteUser.url=MyAppGlobals.apiPath+"/api/user/"+rowData.item._id;that.$.DeleteUser.headers.authorization=that.storedUser.access_token;that.$.DeleteUser.generateRequest()}})}}_addUser(){this.set("subroute.path","/add-user")}getData(storeData,url=MyAppGlobals.apiPath+"/api/users"){this.$.GetUser.url=url;this.$.GetUser.headers.authorization=this.storedUser.access_token;this.$.GetUser.generateRequest()}_handleResponseM(event){var response=event.detail.response;this.users=response.data;const grid=this.$.grid;grid.items=this.users;this._clicked();this.updateItemsFromPage(1);this.$.jabatan.renderer=(root,grid,rowData)=>{root.textContent=rowData.item.details_role}}_handleErrorM(e){this.error=e.detail.request.xhr.status}updateItemsFromPage(page){if(null!==this.users){const pagesControl=this.$.pages;var that=this;const grid=this.$.grid;if(page===void 0){return}if(!that.pages){that.pages=Array.apply(null,{length:Math.ceil(this.users.length/grid.pageSize)}).map(function(item,index){return index+1});const prevBtn=window.document.createElement("button");prevBtn.classList.add("navigation-page");prevBtn.textContent="previous";prevBtn.addEventListener("click",function(){const selectedPage=parseInt(pagesControl.querySelector("[selected]").textContent);that.updateItemsFromPage(selectedPage-1)});pagesControl.appendChild(prevBtn);that.pages.forEach(function(pageNumber){const pageBtn=window.document.createElement("button");pageBtn.classList.add("navigation-page");pageBtn.textContent=pageNumber;pageBtn.addEventListener("click",function(e){that.updateItemsFromPage(parseInt(e.target.textContent))});if(pageNumber===page){pageBtn.setAttribute("selected",!0)}pagesControl.appendChild(pageBtn)});const nextBtn=window.document.createElement("button");nextBtn.classList.add("navigation-page-number");nextBtn.textContent="next";nextBtn.addEventListener("click",function(){const selectedPage=parseInt(pagesControl.querySelector("[selected]").textContent);that.updateItemsFromPage(selectedPage+1)});pagesControl.appendChild(nextBtn)}const buttons=Array.from(pagesControl.children);buttons.forEach(function(btn,index){if(parseInt(btn.textContent)===page){btn.setAttribute("selected",!0)}else{btn.removeAttribute("selected")}if(0===index){if(1===page){btn.setAttribute("disabled","")}else{btn.removeAttribute("disabled")}}if(index===buttons.length-1){if(page===that.pages.length){btn.setAttribute("disabled","")}else{btn.removeAttribute("disabled")}}});var start=(page-1)*grid.pageSize,end=page*grid.pageSize;grid.items=this.users.slice(start,end);this._clicked();this._loading(0)}}_handleUserDelete(e){this.getData(this.storeDatagetData)}_handleUserDeleteError(e){this.error=e.detail.request.xhr.status;console.log(e)}_addUser(){this.set("subroute.path","/add-user")}}window.customElements.define("bmm-user",User)});