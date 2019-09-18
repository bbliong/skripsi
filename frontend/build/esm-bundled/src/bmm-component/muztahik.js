import{PolymerElement,html}from"../my-app.js";import("../config/loader.js").then(bundle=>bundle&&bundle.$loader||{});class Muzatahik extends PolymerElement{static get template(){return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }

        .filter-side {
          position:absolute;
          top : 120px;
          right :70px;
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
        vaadin-grid {
          font-size :14px;
        }

        #main {
          display :none;
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
        <h1>Data Muztahik</h1>
        <iron-ajax
          id="GetMuztahik"
          headers='{"Access-Control-Allow-Origin": "*" }'
          handle-as="json"
          method="GET"
          on-response="_handleResponseM"
          on-error="_handleErrorM"
          Content-Type="application/json"
          debounce-duration="300"></iron-ajax>
        
        <!-- ajax delete -->
          <iron-ajax
          id="DeleteMuztahik"
          headers='{"Access-Control-Allow-Origin": "*" }'
          handle-as="json"
          method="DELETE"
          on-response="_handleMuztahikDelete"
          on-error="_handleMuztahikDeleteError"
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
          <paper-button  raised class="green" on-click="_addMuztahik" id="addMuztahik">Tambah</paper-button>
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
          
        <!-- End Filter -->
          <!-- Table  -->
          <vaadin-grid theme="column-borders" column-reordering-allowed multi-sort id="grid" page-size="10" height-by-rows aria-label="Selection using Active Item Example" >
            <vaadin-grid-sort-column path="nama" id="nama" width="200px"></vaadin-grid-sort-column >
              <vaadin-grid-sort-column path="nik" width="150px"></vaadin-grid-sort-column >
              <vaadin-grid-sort-column  path="kecamatan" width="140px"></vaadin-grid-sort-column >
              <vaadin-grid-sort-column path="kabkot" header="Kabupaten/Kota" width="140px"></vaadin-grid-sort-column >
              <vaadin-grid-sort-column path="provinsi" width="140px"></vaadin-grid-sort-column >
              <vaadin-grid-column header="Action" id="action"></vaadin-grid-column>
          </vaadin-grid>
          <div id="pages"></div>
          <!-- End Table -->
      </div>
    `}static get properties(){return{muztahiks:{type:Array,notify:!0},Search:String,storedUser:{type:Object,notify:!0},filter:{type:Array,notify:!0,value:function(){return["nama","nik","alamat","kecamatan","kabkot","provinsi"]}},selectedArray:{type:Array,notify:!0,value:function(){return[]}},datacuk:{type:Boolean,value:!0},pages:{type:Array,notify:!0},incre:{type:Number,value:0},activated:{type:Boolean,value:!1,observer:"_activatedChanged"},showLoader:{type:Number,notify:!0,value:0}}}connectedCallback(){super.connectedCallback();this._loading(1)}static get observers(){return[]}_activatedChanged(newValue,oldValue){if(newValue){localStorage.removeItem("register-data");this.getData(this.storeData)}}_loading(show){if(0==show){if(9==this.storedUser.role){this.shadowRoot.querySelector("#addMuztahik").style.display="none"}this.shadowRoot.querySelector("#main").style.display="block";var that=this;setTimeout(function(){that.shadowRoot.querySelector("bmm-loader").style.display="none"},2e3)}else{this.shadowRoot.querySelector("#main").style.display="none";this.shadowRoot.querySelector("bmm-loader").style.display="block"}}_clicked(){const action=this.$.action;var that=this;action.renderer=function(root,column,rowData){root.innerHTML="<paper-button class=\"green\">Lihat</paper-button>";root.childNodes[0].addEventListener("click",function(e){that.set("subroute.path","/profile-muztahik/"+rowData.item._id)});if(9!==that.storedUser.role){let el=document.createElement("paper-icon-button");el.innerHTML="Verif";el.classList.add("green");el.setAttribute("icon","add");root.appendChild(el).addEventListener("click",function(e){that.set("route.path","/panel/proposal/add-proposal/"+rowData.item._id)})}}}_addMuztahik(){this.set("subroute.path","/add-muztahik")}_showArray(){var value;if(0<this.selectedArray.length){value="inline"}else{value="none";this.getData(this.storedUser)}this.$.cekData.updateStyles({display:value})}_removeArray(obj){for(var name=obj.target.id,i=0;i<this.selectedArray.length;i++){if(this.selectedArray[i].name==name){this.selectedArray.splice(i,1)}}this.filter.push(name);this.$.selectedField.render();this.$.dropdownArray.render();this._showArray()}_containsObject(obj,list){for(var i=0;i<list.length;i++){if(list[i].name===obj){return!0}}return!1}_itemSelected(e){var selected=e.target.selectedItem.innerText;if(this._containsObject(this.selectereArray,selected)){this.selectedArray.push({name:selected,value:""});this.filter=this.filter.filter(function(value,index,arr){return value!=selected})}this.$.selectedField.render();this._showArray()}getData(storeData,url=MyAppGlobals.apiPath+"/api/muztahiks"){this.$.GetMuztahik.url=url;this.$.GetMuztahik.headers.authorization=this.storedUser.access_token;this.$.GetMuztahik.generateRequest()}cekData(){this.pages=0;const pagesControl=this.$.pages;pagesControl.innerHTML="";var search="?";this.selectedArray.forEach(item=>{search+=2<search.length?"&":"";search+="nik"==item.name?"nik_no_yayasan"+"="+item.value:item.name+"="+item.value});var url=MyAppGlobals.apiPath+"/api/muztahiks"+search;this.getData(this.storedUser,url)}_handleResponseM(event){var response=event.detail.response;this.muztahiks=response.data;const grid=this.$.grid;grid.items=this.muztahiks;this._clicked();this.updateItemsFromPage(1)}_handleErrorM(e){this.error=e.detail.request.xhr.status}updateItemsFromPage(page){if(null!==this.muztahiks){const pagesControl=this.$.pages;var that=this;const grid=this.$.grid;if(page===void 0){return}if(!that.pages){that.pages=Array.apply(null,{length:Math.ceil(this.muztahiks.length/grid.pageSize)}).map(function(item,index){return index+1});const prevBtn=window.document.createElement("button");prevBtn.classList.add("navigation-page");prevBtn.textContent="previous";prevBtn.addEventListener("click",function(){const selectedPage=parseInt(pagesControl.querySelector("[selected]").textContent);that.updateItemsFromPage(selectedPage-1)});pagesControl.appendChild(prevBtn);that.pages.forEach(function(pageNumber){const pageBtn=window.document.createElement("button");pageBtn.classList.add("navigation-page");pageBtn.textContent=pageNumber;pageBtn.addEventListener("click",function(e){that.updateItemsFromPage(parseInt(e.target.textContent))});if(pageNumber===page){pageBtn.setAttribute("selected",!0)}pagesControl.appendChild(pageBtn)});const nextBtn=window.document.createElement("button");nextBtn.classList.add("navigation-page-number");nextBtn.textContent="next";nextBtn.addEventListener("click",function(){const selectedPage=parseInt(pagesControl.querySelector("[selected]").textContent);that.updateItemsFromPage(selectedPage+1)});pagesControl.appendChild(nextBtn)}const buttons=Array.from(pagesControl.children);buttons.forEach(function(btn,index){if(parseInt(btn.textContent)===page){btn.setAttribute("selected",!0)}else{btn.removeAttribute("selected")}if(0===index){if(1===page){btn.setAttribute("disabled","")}else{btn.removeAttribute("disabled")}}if(index===buttons.length-1){if(page===that.pages.length){btn.setAttribute("disabled","")}else{btn.removeAttribute("disabled")}}});var start=(page-1)*grid.pageSize,end=page*grid.pageSize;grid.items=this.muztahiks.slice(start,end);this._clicked()}this._loading(0)}_handleMuztahikDelete(e){this.getData(this.storeDatagetData)}_handleMuztahikDeleteError(e){console.log(e)}}window.customElements.define("bmm-muztahik",Muzatahik);