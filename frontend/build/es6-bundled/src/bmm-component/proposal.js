define(["exports","require","../my-app.js"],function(_exports,_require,_myApp){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.DialogElement=_exports.$vaadinDialog=void 0;_require=babelHelpers.interopRequireWildcard(_require);const $_documentContainer=document.createElement("template");$_documentContainer.innerHTML=`<dom-module id="vaadin-dialog-overlay-styles" theme-for="vaadin-dialog-overlay">
  <template>
    <style>
      /*
        NOTE(platosha): Make some min-width to prevent collapsing of the content
        taking the parent width, e. g., <vaadin-grid> and such.
      */
      [part="content"] {
        min-width: 12em; /* matches the default <vaadin-text-field> width */
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer.content);class DialogOverlayElement extends _myApp.OverlayElement{static get is(){return"vaadin-dialog-overlay"}}customElements.define(DialogOverlayElement.is,DialogOverlayElement);class DialogElement extends(0,_myApp.ThemePropertyMixin)((0,_myApp.ElementMixin)(_myApp.PolymerElement)){static get template(){return _myApp.html$1`
    <style>
      :host {
        display: none;
      }
    </style>

    <vaadin-dialog-overlay id="overlay" on-opened-changed="_onOverlayOpened" with-backdrop="" theme\$="[[theme]]" focus-trap="">
    </vaadin-dialog-overlay>
`}static get is(){return"vaadin-dialog"}static get version(){return"2.2.1"}static get properties(){return{opened:{type:Boolean,value:!1,notify:!0},noCloseOnOutsideClick:{type:Boolean,value:!1},noCloseOnEsc:{type:Boolean,value:!1},ariaLabel:{type:String},theme:String,_contentTemplate:Object,renderer:Function,_oldTemplate:Object,_oldRenderer:Object}}static get observers(){return["_openedChanged(opened)","_ariaLabelChanged(ariaLabel)","_templateOrRendererChanged(_contentTemplate, renderer)"]}ready(){super.ready();this.$.overlay.setAttribute("role","dialog");this.$.overlay.addEventListener("vaadin-overlay-outside-click",this._handleOutsideClick.bind(this));this.$.overlay.addEventListener("vaadin-overlay-escape-press",this._handleEscPress.bind(this));this._observer=new _myApp.FlattenedNodesObserver(this,info=>{this._setTemplateFromNodes(info.addedNodes)})}_setTemplateFromNodes(nodes){this._contentTemplate=nodes.filter(node=>node.localName&&"template"===node.localName)[0]||this._contentTemplate}_removeNewRendererOrTemplate(template,oldTemplate,renderer,oldRenderer){if(template!==oldTemplate){this._contentTemplate=void 0}else if(renderer!==oldRenderer){this.renderer=void 0}}render(){this.$.overlay.render()}_templateOrRendererChanged(template,renderer){if(template&&renderer){this._removeNewRendererOrTemplate(template,this._oldTemplate,renderer,this._oldRenderer);throw new Error("You should only use either a renderer or a template for dialog content")}this._oldTemplate=template;this._oldRenderer=renderer;if(renderer){this.$.overlay.setProperties({owner:this,renderer:renderer})}}disconnectedCallback(){super.disconnectedCallback();this.opened=!1}_openedChanged(opened){if(opened){this.$.overlay.template=this.querySelector("template")}this.$.overlay.opened=opened}_ariaLabelChanged(ariaLabel){if(ariaLabel!==void 0&&null!==ariaLabel){this.$.overlay.setAttribute("aria-label",ariaLabel)}else{this.$.overlay.removeAttribute("aria-label")}}_onOverlayOpened(e){if(!1===e.detail.value){this.opened=!1}}_handleOutsideClick(e){if(this.noCloseOnOutsideClick){e.preventDefault()}}_handleEscPress(e){if(this.noCloseOnEsc){e.preventDefault()}}}_exports.DialogElement=DialogElement;customElements.define(DialogElement.is,DialogElement);var vaadinDialog={DialogElement:DialogElement};_exports.$vaadinDialog=vaadinDialog;const $_documentContainer$1=_myApp.html$1`<dom-module id="lumo-dialog" theme-for="vaadin-dialog-overlay">
  <template>
    <style include="lumo-overlay">
      /* Optical centering */
      :host::before,
      :host::after {
        content: "";
        flex-basis: 0;
        flex-grow: 1;
      }

      :host::after {
        flex-grow: 1.1;
      }

      [part="overlay"] {
        box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-xl);
        background-image: none;
        outline: none;
        -webkit-tap-highlight-color: transparent;
      }

      [part="content"] {
        padding: var(--lumo-space-l);
      }

      /* Animations */

      :host([opening]),
      :host([closing]) {
        animation: 0.25s lumo-overlay-dummy-animation;
      }

      :host([opening]) [part="overlay"] {
        animation: 0.12s 0.05s vaadin-dialog-enter cubic-bezier(.215, .61, .355, 1) both;
      }

      @keyframes vaadin-dialog-enter {
        0% {
          opacity: 0;
          transform: scale(0.95);
        }
      }

      :host([closing]) [part="overlay"] {
        animation: 0.1s 0.03s vaadin-dialog-exit cubic-bezier(.55, .055, .675, .19) both;
      }

      :host([closing]) [part="backdrop"] {
        animation-delay: 0.05s;
      }

      @keyframes vaadin-dialog-exit {
        100% {
          opacity: 0;
          transform: scale(1.02);
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$1.content);new Promise((res,rej)=>_require.default(["../config/loader.js"],res,rej)).then(bundle=>bundle&&bundle.$loader||{});class Proposal extends _myApp.PolymerElement{static get template(){return _myApp.html`
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
          color: white;
          width: 150px;
          display: inline;
          border: 1px solid white;
          border-r: ;
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
            <vaadin-grid-sort-column path="muztahiks.nama" id="nama" header="nama" width="200px"></vaadin-grid-sort-column >
              <vaadin-grid-sort-column id="tanggal" header="tanggal" width="100px"></vaadin-grid-sort-column >
              <vaadin-grid-sort-column path="persetujuan.kategori_program" id="kategori" header="kategori" width="220px"></vaadin-grid-sort-column >
              <vaadin-grid-sort-column id="status" header="status" width="160px"></vaadin-grid-sort-column >
              <vaadin-grid-column header="Action" id="action" width="150px"></vaadin-grid-column>
          </vaadin-grid>
          <div id="pages"></div>
          <!-- End Table -->
      </div>
    `}static get properties(){return{pendaftarans:{type:Array,notify:!0},Search:String,storedUser:{type:Object,notify:!0},filter:{type:Array,notify:!0,value:function(){return["nama","kategori"]}},selectedArray:{type:Array,notify:!0,value:function(){return[]}},pages:{type:Array,notify:!0},User:{type:Array,notify:!0,value:function(){return[]}},muzId:{type:String,notify:!0,observer:"_activatedChanged"},reload:{type:Boolean,notify:!0},activated:{type:Boolean,value:!1,observer:"_activatedChanged"},regObj:{type:Object,notify:!0,value:function(){return{}}}}}connectedCallback(){super.connectedCallback();this._loading(1)}static get observers(){return["_routePageChanged(subroute.*)"]}confirmPic(){this.$.postData.url=MyAppGlobals.apiPath+"/api/pendaftaran/"+this.regObj._id;this.$.postData.headers.authorization=this.storedUser.access_token;this.$.postData.body={muztahik_id:this.regObj._id,persetujuan:{disposisi_pic_id:this.regObj.disposisi_pic_id,level_persetujuan:this.regObj.level_persetujuan}};this.$.postData.generateRequest()}_activatedChanged(newValue,oldValue){if(newValue){localStorage.removeItem("register-data");this.getData(this.storeData);this.$.managerDPP.url=MyAppGlobals.apiPath+"/api/users?role=2";this.$.managerDPP.headers.authorization=this.storedUser.access_token;if(3!==this.storedUser.role){this.$.dialog_pic.style="display:none"}}}_loading(show){if(0==show){this.shadowRoot.querySelector("#main").style.display="block";var that=this;setTimeout(function(){that.shadowRoot.querySelector("bmm-loader").style.display="none"},2e3)}else{this.shadowRoot.querySelector("#main").style.display="none";this.shadowRoot.querySelector("bmm-loader").style.display="block"}}_clicked(){const action=this.$.action;var that=this;action.renderer=function(root,column,rowData){switch(that.storedUser.role){case 1:var urlEdit="/panel/proposal/edit-proposal/"+rowData.item.kategori+"/"+rowData.item._id,urlDelete=MyAppGlobals.apiPath+"/api/pendaftaran/"+rowData.item._id,innerHtml="<paper-icon-button icon =\"settings\" class=\"green\">Edit</paper-icon-button><paper-icon-button icon = \"clear\" class=\"red\">Delete</paper-icon-button><paper-icon-button icon =\"pan-tool\" class=\"green\" style=\"display:none\">PIC</paper-icon-button>";action.width="100px";break;case 2:var urlEdit="/panel/proposal/edit-verifikator/"+rowData.item.kategori+"/"+rowData.item._id,innerHtml="<paper-button class=\"green\">Verif</paper-button><paper-icon-button icon = \"clear\" class=\"red\" style=\"display:none\">Delete</paper-icon-button><paper-icon-button icon =\"pan-tool\" class=\"green\"  style=\"display:none\">PIC</paper-icon-button>";action.width="150px";break;case 3:var urlEdit="/panel/proposal/edit-proposal/"+rowData.item.kategori+"/"+rowData.item._id,innerHtml="<paper-icon-button icon =\"settings\" class=\"green\" style=\"display:none\">Edit</paper-icon-button><paper-icon-button icon = \"clear\" class=\"red\" style=\"display:none\">Delete</paper-icon-button><paper-icon-button icon =\"pan-tool\" class=\"green\">PIC</paper-icon-button>";action.width="100px";break;case 5:var urlEdit="/panel/proposal/edit-proposal/"+rowData.item.kategori+"/"+rowData.item._id,urlDelete=MyAppGlobals.apiPath+"/api/pendaftaran/"+rowData.item._id,innerHtml="<paper-icon-button icon =\"settings\" class=\"green\">Edit</paper-icon-button><paper-icon-button icon = \"clear\" class=\"red\">Delete</paper-icon-button><paper-icon-button icon =\"pan-tool\" class=\"green\" style=\"display:none\">PIC</paper-icon-button>";action.width="100px";break;case 7:var urlEdit="/panel/proposal/edit-verifikator/"+rowData.item.kategori+"/"+rowData.item._id,innerHtml="<paper-icon-button icon =\"settings\" class=\"green\">Edit</paper-icon-button><paper-icon-button icon = \"clear\" class=\"red\" style=\"display:none\">Delete</paper-icon-button><paper-icon-button icon =\"pan-tool\" class=\"green\"  style=\"display:none\">PIC</paper-icon-button>";action.width="100px";break;}root.innerHTML=innerHtml;root.childNodes[0].addEventListener("click",function(e){that.set("route.path",urlEdit)});root.childNodes[1].addEventListener("click",function(e){if(confirm("Yakin hapus pendaftaran proposal "+rowData.item.muztahiks.nama+" dengan asnaf "+rowData.item.kategoris.asnaf+". Jika data dihapus, tidak dapat dikembalikan kembali!")){that.$.DeletePendaftaran.url=urlDelete;that.$.DeletePendaftaran.headers.authorization=that.storedUser.access_token;that.$.DeletePendaftaran.generateRequest()}});root.childNodes[2].addEventListener("click",function(e){that.regObj={_id:rowData.item._id,disposisi_pic_id:rowData.item.persetujuan.disposisi_pic_id,level_persetujuan:rowData.item.persetujuan.level_persetujuan};var dialog=that.shadowRoot.querySelector("vaadin-dialog"),backdrop=dialog.shadowRoot.querySelector("vaadin-dialog-overlay").shadowRoot.querySelector("#backdrop");backdrop.addEventListener("click",function(){that.regObj={}});dialog.opened=!0});if(2<=rowData.item.persetujuan.level_persetujuan&&2==that.storedUser.role){let el=document.createElement("paper-button");el.innerHTML="UPD";el.classList.add("green");root.appendChild(el);root.childNodes[3].addEventListener("click",function(e){that.set("route.path","/panel/proposal/edit-upd/"+rowData.item.kategori+"/"+rowData.item._id)})}}}_showArray(){var value;if(0<this.selectedArray.length){value="inline"}else{value="none";this.getData(this.storedUser)}this.$.cekData.updateStyles({display:value})}_removeArray(obj){for(var name=obj.target.id,i=0;i<this.selectedArray.length;i++){if(this.selectedArray[i].name==name){this.selectedArray.splice(i,1)}}this.filter.push(name);this.$.selectedField.render();this.$.dropdownArray.render();this._showArray()}_containsObject(obj,list){for(var i=0;i<list.length;i++){if(list[i].name===obj){return!0}}return!1}_itemSelected(e){var selected=e.target.selectedItem.innerText;if(this._containsObject(this.selectereArray,selected)){this.selectedArray.push({name:selected,value:""});this.filter=this.filter.filter(function(value,index,arr){return value!=selected})}this.$.selectedField.render();this._showArray()}getData(storeData,url=MyAppGlobals.apiPath+"/api/pendaftaran"){if("undefined"!==typeof this.muzId){url=url+"?muztahik_id="+this.muzId;this.shadowRoot.querySelector(".filter-side").style.display="none"}this.$.GetPendaftaran.url=url;this.$.GetPendaftaran.headers.authorization=this.storedUser.access_token;this.$.GetPendaftaran.generateRequest()}cekData(){this.pages=0;const pagesControl=this.$.pages;pagesControl.innerHTML="";var search="?";this.selectedArray.forEach(item=>{search+=2<search.length?"&":"";search+="nik"==item.name?"nik_no_yayasan"+"="+item.value:item.name+"="+item.value});var url=MyAppGlobals.apiPath+"/api/pendaftaran"+search;this.getData(this.storedUser,url)}_handleResponseM(event){var response=event.detail.response;this.pendaftarans=response.data;const grid=this.$.grid;grid.items=this.pendaftarans;this._clicked();this.updateItemsFromPage(1);this.$.tanggal.renderer=(root,grid,rowData)=>{var date=new Date(`${rowData.item.tanggalProposal}`);root.textContent=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()};this.$.status.renderer=(root,grid,rowData)=>{var status="",colors=["#74b9ff","#d63031","#00b894","#FF7F50"];switch(rowData.item.persetujuan.level_persetujuan){case 0:status="Belum ada PIC";root.classList.add("status-verifikasi");root.style.backgroundColor=colors[1];break;case 1:status="Belum Diverifikasi";root.classList.add("status-verifikasi");root.style.backgroundColor=colors[0];break;case 2:status="Sudah Diverifikasi";root.classList.add("status-verifikasi");root.style.backgroundColor=colors[2];break;case 3:status="Sudah buat UPD";root.classList.add("status-verifikasi");root.style.backgroundColor=colors[3];break;}root.textContent=status}}_handleErrorM(e){this.error=e.detail.request.xhr.status}updateItemsFromPage(page){const pagesControl=this.$.pages;var that=this;const grid=this.$.grid;if(page===void 0){return}if(!that.pages){that.pages=Array.apply(null,{length:Math.ceil(this.pendaftarans.length/grid.pageSize)}).map(function(item,index){return index+1});const prevBtn=window.document.createElement("button");prevBtn.textContent="<";prevBtn.addEventListener("click",function(){const selectedPage=parseInt(pagesControl.querySelector("[selected]").textContent);that.updateItemsFromPage(selectedPage-1)});pagesControl.appendChild(prevBtn);that.pages.forEach(function(pageNumber){const pageBtn=window.document.createElement("button");pageBtn.textContent=pageNumber;pageBtn.addEventListener("click",function(e){that.updateItemsFromPage(parseInt(e.target.textContent))});if(pageNumber===page){pageBtn.setAttribute("selected",!0)}pagesControl.appendChild(pageBtn)});const nextBtn=window.document.createElement("button");nextBtn.textContent=">";nextBtn.addEventListener("click",function(){const selectedPage=parseInt(pagesControl.querySelector("[selected]").textContent);that.updateItemsFromPage(selectedPage+1)});pagesControl.appendChild(nextBtn)}const buttons=Array.from(pagesControl.children);buttons.forEach(function(btn,index){if(parseInt(btn.textContent)===page){btn.setAttribute("selected",!0)}else{btn.removeAttribute("selected")}if(0===index){if(1===page){btn.setAttribute("disabled","")}else{btn.removeAttribute("disabled")}}if(index===buttons.length-1){if(page===that.pages.length){btn.setAttribute("disabled","")}else{btn.removeAttribute("disabled")}}});var start=(page-1)*grid.pageSize,end=page*grid.pageSize;grid.items=this.pendaftarans.slice(start,end);this._clicked();this._loading(0)}_handlePendaftaranDelete(e){this.getData(this.storeData)}_handlePendaftaranDeleteError(e){}_routePageChanged(page){}_handleManager(e){var response=e.detail.response;this.User=response.data}_errorManager(e){console.log(e)}_handleProposalPost(e){this.shadowRoot.querySelector("vaadin-dialog").opened=!1;this.getData(this.storeData)}_handleProposalPostError(e){console.log(e)}}window.customElements.define("bmm-proposal",Proposal)});