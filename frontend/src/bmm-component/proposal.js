define(["../my-app.js"],function(_myApp){"use strict";class Proposal extends _myApp.PolymerElement{static get template(){return _myApp.html`
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
            <vaadin-grid-sort-column path="muztahiks.nama" id="nama" header="nama"></vaadin-grid-sort-column >
              <vaadin-grid-sort-column id="tanggal" header="tanggal" ></vaadin-grid-sort-column >
              <vaadin-grid-sort-column path="persetujuan.kategori_program" id="kategori" header="kategori" ></vaadin-grid-sort-column >
              <vaadin-grid-sort-column id="status" header="status"></vaadin-grid-sort-column >
              <vaadin-grid-column header="Action" id="action"></vaadin-grid-column>
          </vaadin-grid>
          <div id="pages"></div>
          <!-- End Table -->
      </div>
    `}static get properties(){return{pendaftarans:{type:Array,notify:!0},Search:String,storedUser:{type:Object,notify:!0},filter:{type:Array,notify:!0,value:function(){return["nama","kategori"]}},selectedArray:{type:Array,notify:!0,value:function(){return[]}},datacuk:{type:Boolean,value:!0},pages:{type:Array,notify:!0},muzId:{type:String,notify:!0,observer:"_activatedChanged"},reload:{type:Boolean,notify:!0},activated:{type:Boolean,value:!1,observer:"_activatedChanged"}}}static get observers(){return["_routePageChanged(subroute.*)"]}_activatedChanged(newValue,oldValue){if(newValue){localStorage.removeItem("register-data");this.getData(this.storeData)}}_clicked(){const action=this.$.action;var that=this;action.renderer=function(root,column,rowData){switch(that.storedUser.role){case 1:var urlEdit="/panel/proposal/edit-proposal/"+rowData.item.kategori+"/"+rowData.item._id,urlDelete=MyAppGlobals.apiPath+"/api/pendaftaran/"+rowData.item._id,innerHtml="<paper-icon-button icon =\"settings\" class=\"green\">Edit</paper-icon-button><paper-icon-button icon = \"clear\" class=\"red\">Delete</paper-icon-button>";break;case 7:var urlEdit="/panel/proposal/edit-verifikator/"+rowData.item.kategori+"/"+rowData.item._id,innerHtml="<paper-icon-button icon =\"settings\" class=\"green\">Edit</paper-icon-button><paper-icon-button icon = \"clear\" class=\"red\" style=\"display:none\">Delete</paper-icon-button>";break;}root.innerHTML=innerHtml;root.childNodes[0].addEventListener("click",function(e){console.log(urlEdit);that.set("route.path",urlEdit)});root.childNodes[1].addEventListener("click",function(e){console.log(urlDelete);if(confirm("Yakin hapus pendaftaran proposal "+rowData.item.muztahiks.nama+" dengan asnaf "+rowData.item.kategoris.asnaf+". Jika data dihapus, tidak dapat dikembalikan kembali!")){that.$.DeletePendaftaran.url=urlDelete;that.$.DeletePendaftaran.headers.authorization=that.storedUser.access_token;that.$.DeletePendaftaran.generateRequest()}})}}_showArray(){var value;if(0<this.selectedArray.length){value="inline"}else{value="none";this.getData(this.storedUser)}this.$.cekData.updateStyles({display:value})}_removeArray(obj){for(var name=obj.target.id,i=0;i<this.selectedArray.length;i++){if(this.selectedArray[i].name==name){this.selectedArray.splice(i,1)}}this.filter.push(name);this.$.selectedField.render();this.$.dropdownArray.render();this._showArray()}_containsObject(obj,list){for(var i=0;i<list.length;i++){if(list[i].name===obj){return!0}}return!1}_itemSelected(e){var selected=e.target.selectedItem.innerText;if(this._containsObject(this.selectereArray,selected)){this.selectedArray.push({name:selected,value:""});this.filter=this.filter.filter(function(value,index,arr){return value!=selected})}this.$.selectedField.render();this._showArray()}getData(storeData,url=MyAppGlobals.apiPath+"/api/pendaftaran"){if("undefined"!==typeof this.muzId){url=url+"?muztahik_id="+this.muzId;this.shadowRoot.querySelector(".filter-side").style.display="none"}this.$.GetPendaftaran.url=url;this.$.GetPendaftaran.headers.authorization=this.storedUser.access_token;this.$.GetPendaftaran.generateRequest()}cekData(){this.pages=0;const pagesControl=this.$.pages;pagesControl.innerHTML="";var search="?";this.selectedArray.forEach(item=>{search+=2<search.length?"&":"";search+="nik"==item.name?"nik_no_yayasan"+"="+item.value:item.name+"="+item.value});var url=MyAppGlobals.apiPath+"/api/pendaftaran"+search;this.getData(this.storedUser,url)}_handleResponseM(event){var response=event.detail.response;this.pendaftarans=response.data;const grid=this.$.grid;grid.items=this.pendaftarans;this._clicked();this.updateItemsFromPage(1);this.$.tanggal.renderer=(root,grid,rowData)=>{root.textContent=`${rowData.item.tanggalProposal}`};this.$.status.renderer=(root,grid,rowData)=>{var status="",colors=["#74b9ff","#d63031","#00b894"];switch(rowData.item.persetujuan.level_persetujuan){case 0:status="Menunggu verifikasi";root.classList.add("status-verifikasi");root.style.backgroundColor=colors[1];break;case 1:status="Sudah terverifikasi";root.classList.add("status-verifikasi");root.style.backgroundColor=colors[0];break;}root.textContent=status}}_handleErrorM(e){this.error=e.detail.request.xhr.status}updateItemsFromPage(page){const pagesControl=this.$.pages;var that=this;const grid=this.$.grid;if(page===void 0){return}if(!that.pages){that.pages=Array.apply(null,{length:Math.ceil(this.pendaftarans.length/grid.pageSize)}).map(function(item,index){return index+1});const prevBtn=window.document.createElement("button");prevBtn.textContent="<";prevBtn.addEventListener("click",function(){const selectedPage=parseInt(pagesControl.querySelector("[selected]").textContent);that.updateItemsFromPage(selectedPage-1)});pagesControl.appendChild(prevBtn);that.pages.forEach(function(pageNumber){const pageBtn=window.document.createElement("button");pageBtn.textContent=pageNumber;pageBtn.addEventListener("click",function(e){that.updateItemsFromPage(parseInt(e.target.textContent))});if(pageNumber===page){pageBtn.setAttribute("selected",!0)}pagesControl.appendChild(pageBtn)});const nextBtn=window.document.createElement("button");nextBtn.textContent=">";nextBtn.addEventListener("click",function(){const selectedPage=parseInt(pagesControl.querySelector("[selected]").textContent);that.updateItemsFromPage(selectedPage+1)});pagesControl.appendChild(nextBtn)}const buttons=Array.from(pagesControl.children);buttons.forEach(function(btn,index){if(parseInt(btn.textContent)===page){btn.setAttribute("selected",!0)}else{btn.removeAttribute("selected")}if(0===index){if(1===page){btn.setAttribute("disabled","")}else{btn.removeAttribute("disabled")}}if(index===buttons.length-1){if(page===that.pages.length){btn.setAttribute("disabled","")}else{btn.removeAttribute("disabled")}}});var start=(page-1)*grid.pageSize,end=page*grid.pageSize;grid.items=this.pendaftarans.slice(start,end);this._clicked()}_handlePendaftaranDelete(e){this.getData(this.storeData)}_handlePendaftaranDeleteError(e){}_routePageChanged(page){}}window.customElements.define("bmm-proposal",Proposal)});