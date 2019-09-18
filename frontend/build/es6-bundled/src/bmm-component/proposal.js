define(["require","../my-app.js"],function(_require,_myApp){"use strict";_require=babelHelpers.interopRequireWildcard(_require);new Promise((res,rej)=>_require.default(["../config/loader.js"],res,rej)).then(bundle=>bundle&&bundle.$loader||{});class Proposal extends _myApp.PolymerElement{static get template(){return _myApp.html`
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
    `}static get properties(){return{pendaftarans:{type:Array,notify:!0},Search:String,storedUser:{type:Object,notify:!0},pages:{type:Array,notify:!0},User:{type:Array,notify:!0,value:function(){return[]}},muzId:{type:String,notify:!0,observer:"_activatedChanged"},reload:{type:Boolean,notify:!0},activated:{type:Boolean,value:!1,observer:"_activatedChanged"},regObj:{type:Object,notify:!0,value:function(){return{}}},Pencairan:{type:Object,notify:!0,value:function(){return{nama:"",persetujuan:{tanggal_pencairan:"",jumlah_pencairan:"",keterangan:""}}}},Kategori:{type:Array,notify:!0,value:function(){return[]}},Filter:{type:Object,notify:!0,value:function(){return{kategori:"",tanggal_mulai:"",tanggal_akhir:""}}},statusRequest:Number}}connectedCallback(){super.connectedCallback();this._loading(1)}static get observers(){return["_routePageChanged(subroute.*)","_kategoriSelected(selectedKategori)"]}_kategoriSelected(val){console.log(val)}confirmPic(){this.$.postData.url=MyAppGlobals.apiPath+"/api/pendaftaran/"+this.regObj._id;this.$.postData.headers.authorization=this.storedUser.access_token;this.$.postData.body={muztahik_id:this.regObj._id,persetujuan:{disposisi_pic_id:this.regObj.disposisi_pic_id,level_persetujuan:this.regObj.level_persetujuan}};this.statusRequest=1;this.$.postData.generateRequest()}simpanPencairan(){this.$.postData.url=MyAppGlobals.apiPath+"/api/pencairan/"+this.Pencairan._id;this.$.postData.headers.authorization=this.storedUser.access_token;this.$.postData.body={muztahik_id:this.Pencairan._id,persetujuan:{level_persetujuan:this.Pencairan.persetujuan.level_persetujuan,tanggal_pencairan:new Date(this.Pencairan.persetujuan.tanggal_pencairan).toISOString(),jumlah_pencairan:parseInt(this.Pencairan.persetujuan.jumlah_pencairan),keterangan:this.Pencairan.persetujuan.keterangan}};this.statusRequest=2;this.$.postData.generateRequest()}_activatedChanged(newValue,oldValue){if(newValue){localStorage.removeItem("register-data");this.getData(this.storeData);this.$.managerDPP.url=MyAppGlobals.apiPath+"/api/users?role=2&role2=3";this.$.managerDPP.headers.authorization=this.storedUser.access_token;if(3!==this.storedUser.role){this.$.dialog_pic.style="display:none"}}}_loading(show){if(0==show){this.shadowRoot.querySelector("#main").style.display="block";var that=this;setTimeout(function(){that.shadowRoot.querySelector("bmm-loader").style.display="none"},2e3)}else{this.shadowRoot.querySelector("#main").style.display="none";this.shadowRoot.querySelector("bmm-loader").style.display="block"}}_clicked(){const action=this.$.action;var that=this;action.renderer=function(root,column,rowData){switch(that.storedUser.role){case 1:var urlEdit="/panel/proposal/edit-proposal/"+rowData.item.kategori+"/"+rowData.item._id,urlDelete=MyAppGlobals.apiPath+"/api/pendaftaran/"+rowData.item._id,innerHtml="<paper-icon-button icon =\"settings\" class=\"green\">Edit</paper-icon-button><paper-icon-button icon = \"clear\" class=\"red\">Delete</paper-icon-button><paper-icon-button icon =\"pan-tool\" class=\"green\" style=\"display:none\">PIC</paper-icon-button>";break;case 2:var urlEdit="/panel/proposal/edit-verifikator/"+rowData.item.kategori+"/"+rowData.item._id,innerHtml="<paper-button class=\"green\">Verif</paper-button><paper-icon-button icon = \"clear\" class=\"red\" style=\"display:none\">Delete</paper-icon-button><paper-icon-button icon =\"pan-tool\" class=\"green\"  style=\"display:none\">PIC</paper-icon-button>";break;case 3:var urlEdit="/panel/proposal/edit-proposal/"+rowData.item.kategori+"/"+rowData.item._id,innerHtml="<paper-icon-button icon =\"settings\" class=\"green\" style=\"display:none\">Edit</paper-icon-button><paper-icon-button icon = \"clear\" class=\"red\" style=\"display:none\">Delete</paper-icon-button><paper-icon-button icon =\"pan-tool\" class=\"green\">PIC</paper-icon-button> ";break;case 4:var urlEdit="/panel/proposal/edit-proposal/"+rowData.item.kategori+"/"+rowData.item._id,innerHtml="<paper-icon-button icon =\"settings\" class=\"green\" style=\"display:none\">Edit</paper-icon-button><paper-icon-button icon = \"clear\" class=\"red\" style=\"display:none\">Delete</paper-icon-button><paper-icon-button icon =\"pan-tool\" class=\"green\"  style=\"display:none\">PIC</paper-icon-button>";break;case 5:var urlEdit="/panel/proposal/edit-proposal/"+rowData.item.kategori+"/"+rowData.item._id,urlDelete=MyAppGlobals.apiPath+"/api/pendaftaran/"+rowData.item._id,innerHtml="<paper-icon-button icon =\"settings\" class=\"green\">Edit</paper-icon-button><paper-icon-button icon = \"clear\" class=\"red\">Delete</paper-icon-button><paper-icon-button icon =\"pan-tool\" class=\"green\" style=\"display:none\">PIC</paper-icon-button>";break;case 7:var urlEdit="/panel/proposal/edit-verifikator/"+rowData.item.kategori+"/"+rowData.item._id,innerHtml="<paper-icon-button icon =\"settings\" class=\"green\"  style=\"display:none\">Edit</paper-icon-button><paper-icon-button icon = \"clear\" class=\"red\" style=\"display:none\">Delete</paper-icon-button><paper-icon-button icon =\"pan-tool\" class=\"green\"  style=\"display:none\">PIC</paper-icon-button>";break;case 9:var urlEdit="/panel/proposal/edit-proposal/"+rowData.item.kategori+"/"+rowData.item._id,innerHtml="<paper-icon-button icon =\"settings\" class=\"green\" style=\"display:none\">Edit</paper-icon-button><paper-icon-button icon = \"clear\" class=\"red\" style=\"display:none\">Delete</paper-icon-button><paper-icon-button icon =\"pan-tool\" class=\"green\"  style=\"display:none\">PIC</paper-icon-button>";break;}root.innerHTML=innerHtml;root.childNodes[0].addEventListener("click",function(e){that.set("route.path",urlEdit)});root.childNodes[1].addEventListener("click",function(e){if(confirm("Yakin hapus pendaftaran proposal "+rowData.item.muztahiks.nama+" dengan asnaf "+rowData.item.kategoris.asnaf+". Jika data dihapus, tidak dapat dikembalikan kembali!")){that.$.DeletePendaftaran.url=urlDelete;that.$.DeletePendaftaran.headers.authorization=that.storedUser.access_token;that.$.DeletePendaftaran.generateRequest()}});root.childNodes[2].addEventListener("click",function(e){that.regObj={_id:rowData.item._id,disposisi_pic_id:rowData.item.persetujuan.disposisi_pic_id,level_persetujuan:rowData.item.persetujuan.level_persetujuan};var dialog=that.shadowRoot.querySelector("vaadin-dialog"),backdrop=dialog.shadowRoot.querySelector("vaadin-dialog-overlay").shadowRoot.querySelector("#backdrop");backdrop.addEventListener("click",function(){that.regObj={}});dialog.opened=!0});if(3==that.storedUser.role&&1<=rowData.item.persetujuan.level_persetujuan&&"undefined"!==typeof rowData.item.verifikasi){let el=document.createElement("paper-button");el.innerHTML="Verif";el.classList.add("green");root.appendChild(el).addEventListener("click",function(e){that.set("route.path","/panel/proposal/edit-verifikator/"+rowData.item.kategori+"/"+rowData.item._id)});action.width=that._subCon(action.width)<that._subCon("220px")?"220px":action.width}if((3==that.storedUser.role||2==that.storedUser.role||9==that.storedUser.role||4==that.storedUser.role&&1==that.storedUser.department)&&2<=rowData.item.persetujuan.level_persetujuan){let el=document.createElement("paper-button");el.innerHTML="UPD";el.classList.add("green");root.appendChild(el).addEventListener("click",function(e){that.set("route.path","/panel/proposal/edit-upd/"+rowData.item.kategori+"/"+rowData.item._id)});action.width=that._subCon(action.width)<that._subCon("200px")?"200px":action.width}if(2==that.storedUser.role&&5<=rowData.item.persetujuan.level_persetujuan&&6!==rowData.item.persetujuan.level_persetujuan){let el=document.createElement("paper-button");el.innerHTML="Komite";el.classList.add("blue");root.appendChild(el).addEventListener("click",function(e){that.set("route.path","/panel/proposal/komite-pic/"+rowData.item.kategori+"/"+rowData.item._id)});action.width=that._subCon(action.width)<that._subCon("280px")?"280px":action.width}else if((4==that.storedUser.role||7<=that.storedUser.role)&&5<=rowData.item.persetujuan.level_persetujuan&&6!==rowData.item.persetujuan.level_persetujuan){let el=document.createElement("paper-button");el.innerHTML="Komite";el.classList.add("blue");root.appendChild(el).addEventListener("click",function(e){that.set("route.path","/panel/proposal/komite-persetujuan/"+rowData.item.kategori+"/"+rowData.item._id)});action.width=that._subCon(action.width)<that._subCon("200px")?"200px":action.width}if((that.storedUser.id==rowData.item.persetujuan.disposisi_pic_id||that.storedUser.id==rowData.item.persetujuan.manager_id||that.storedUser.id==rowData.item.persetujuan.kadiv_id)&&7<=rowData.item.persetujuan.level_persetujuan){var url="/panel/ppd/ppd-persetujuan";if(2==that.storedUser.role){url="/panel/proposal/ppd-pic"}var approve=rowData.item.komite.filter(function(data){return"undefined"!==typeof data.tanggal&&""!==data.tanggal&&"0001-01-01T00:00:00Z"!==data.tanggal});if(rowData.item.komite.length==approve.length){let el=document.createElement("paper-button");el.innerHTML="PPD";el.classList.add("blue");root.appendChild(el).addEventListener("click",function(e){that.set("route.path",url+"/"+rowData.item.kategori+"/"+rowData.item._id)});action.width=that._subCon(action.width)<that._subCon("350px")?"350px":action.width;if("undefined"!==typeof rowData.item.ppd){var approve=rowData.item.ppd.filter(function(data){return"undefined"!==typeof data.tanggal&&""!==data.tanggal&&"0001-01-01T00:00:00Z"!==data.tanggal});if(rowData.item.ppd.length==approve.length&&2==that.storedUser.role){let el=document.createElement("paper-button");el.innerHTML="Pencairan";el.classList.add("blue");root.appendChild(el).addEventListener("click",function(e){that.Pencairan=rowData.item;that.Pencairan.persetujuan.tanggal_pencairan=that.formatDate2(new Date(rowData.item.persetujuan.tanggal_pencairan));if("undefined"==typeof that.Pencairan.persetujuan.jumlah_pencairan){that.Pencairan.persetujuan.jumlah_pencairan=that.Pencairan.kategoris.jumlah_bantuan}that.shadowRoot.querySelector("#dialogPencairan").opened=!0});action.width=that._subCon(action.width)<that._subCon("440px")?"440px":action.width}}}}}}getData(storeData,url=MyAppGlobals.apiPath+"/api/pendaftaran"){if("undefined"!==typeof this.muzId){url=url+"?muztahik_id="+this.muzId;this.shadowRoot.querySelector(".filter-side").style.display="none";this.shadowRoot.querySelector("#main").style.margin="0";this.shadowRoot.querySelector("#main").style.padding="0"}this.$.GetPendaftaran.url=url;this.$.GetPendaftaran.headers.authorization=this.storedUser.access_token;this.$.GetPendaftaran.generateRequest()}cekData(){this.pages=0;const pagesControl=this.$.pages;pagesControl.innerHTML="";var search="",isi="";for(var key in this.Filter){if(this.Filter.hasOwnProperty(key)){if(""!==this.Filter[key]){search+=2<search.length?"&":"?";if("kategori"==key){isi=this.Filter[key]}else if("tanggal_mulai"==key){if(""==this.Filter.tanggal_akhir){alert("Belum memasukan tanggal akhir");return}else{isi=new Date(this.Filter[key]).toISOString()}}else if("tanggal_akhir"==key){if(""==this.Filter.tanggal_mulai){alert("Belum memasukan tanggal mulai");return}else{isi=new Date(this.Filter[key]).toISOString()}}search+=key+"="+isi}}}var url=MyAppGlobals.apiPath+"/api/pendaftaran"+search;this.getData(this.storedUser,url)}_handleResponseM(event){this.shadowRoot.querySelector("#dialogSearch").opened=!1;var response=event.detail.response;this.pendaftarans=response.data;const grid=this.$.grid;grid.items=this.pendaftarans;this._clicked();this.updateItemsFromPage(1);this.$.tanggal.renderer=(root,grid,rowData)=>{var date=new Date(`${rowData.item.tanggalProposal}`);root.textContent=this.formatDate(date)};this.$.status.renderer=(root,grid,rowData)=>{var status="",colors=["#74b9ff","#d63031","#00b894","#FF7F50","#6861CE","#8BC34A","#F44336","#c0392b","#16a085","#2c3e50","#8e44ad","#34495e"];switch(rowData.item.persetujuan.level_persetujuan){case 0:status="Belum ada PIC";root.classList.add("status-verifikasi");root.style.backgroundColor=colors[1];break;case 1:status="Belum Diverifikasi";root.classList.add("status-verifikasi");root.style.backgroundColor=colors[0];break;case 2:status="Sudah Diverifikasi";root.classList.add("status-verifikasi");root.style.backgroundColor=colors[2];break;case 3:status="UPD Sudah Dibuat";root.classList.add("status-verifikasi");root.style.backgroundColor=colors[3];break;case 4:status="UPD diperiksa Manager";root.classList.add("status-verifikasi");root.style.backgroundColor=colors[4];break;case 5:status="UPD Disetujui Kadiv/Direktur ";root.classList.add("status-verifikasi");root.style.backgroundColor=colors[5];break;case 6:status="UPD Tidak disetujui Kadiv/Direktur";root.classList.add("status-verifikasi");root.style.backgroundColor=colors[6];break;case 7:status="Komite sudah dibentuk";root.classList.add("status-verifikasi");root.style.backgroundColor=colors[8];if("undefined"!==typeof rowData.item.komite){var approve=rowData.item.komite.filter(function(data){return"undefined"!==typeof data.tanggal&&""!==data.tanggal&&"0001-01-01T00:00:00Z"!==data.tanggal});if(approve.length==rowData.item.komite.length){status="TTD Komite Sudah Lengkap";root.classList.add("status-verifikasi");root.style.backgroundColor=colors[11]}else if(0<approve.length){status="Komite sudah di ttd "+approve.length+" orang";root.classList.add("status-verifikasi");root.style.backgroundColor=colors[9]}}break;case 8:status="PPD sudah dibuat";root.classList.add("status-verifikasi");root.style.backgroundColor=colors[10];if("undefined"!==typeof rowData.item.ppd){var approve=rowData.item.ppd.filter(function(data){return"undefined"!==typeof data.tanggal&&""!==data.tanggal&&"0001-01-01T00:00:00Z"!==data.tanggal});if(4==approve.length){status="TTD PPD Sudah Lengkap";root.classList.add("status-verifikasi");root.style.backgroundColor=colors[11]}else if(0<approve.length){status="PPd sudah di ttd "+approve.length+" orang";root.classList.add("status-verifikasi");root.style.backgroundColor=colors[10]}}break;case 9:status="Pencairan tgl "+this.formatDate2(new Date(rowData.item.persetujuan.tanggal_pencairan));root.classList.add("status-verifikasi");root.style.backgroundColor=colors[2];}root.textContent=status}}_handleErrorM(e){this.error=e.detail.request.xhr.status}updateItemsFromPage(page){const pagesControl=this.$.pages;var that=this;const grid=this.$.grid;if(page===void 0){return}if(null==this.pendaftarans){this._loading(0);return}if(!that.pages){that.pages=Array.apply(null,{length:Math.ceil(this.pendaftarans.length/grid.pageSize)}).map(function(item,index){return index+1});const prevBtn=window.document.createElement("button");prevBtn.textContent="<";prevBtn.addEventListener("click",function(){const selectedPage=parseInt(pagesControl.querySelector("[selected]").textContent);that.updateItemsFromPage(selectedPage-1)});pagesControl.appendChild(prevBtn);that.pages.forEach(function(pageNumber){const pageBtn=window.document.createElement("button");pageBtn.textContent=pageNumber;pageBtn.addEventListener("click",function(e){that.updateItemsFromPage(parseInt(e.target.textContent))});if(pageNumber===page){pageBtn.setAttribute("selected",!0)}pagesControl.appendChild(pageBtn)});const nextBtn=window.document.createElement("button");nextBtn.textContent=">";nextBtn.addEventListener("click",function(){const selectedPage=parseInt(pagesControl.querySelector("[selected]").textContent);that.updateItemsFromPage(selectedPage+1)});pagesControl.appendChild(nextBtn)}const buttons=Array.from(pagesControl.children);buttons.forEach(function(btn,index){if(parseInt(btn.textContent)===page){btn.setAttribute("selected",!0)}else{btn.removeAttribute("selected")}if(0===index){if(1===page){btn.setAttribute("disabled","")}else{btn.removeAttribute("disabled")}}if(index===buttons.length-1){if(page===that.pages.length){btn.setAttribute("disabled","")}else{btn.removeAttribute("disabled")}}});var start=(page-1)*grid.pageSize,end=page*grid.pageSize;grid.items=this.pendaftarans.slice(start,end);this._clicked();this._loading(0)}_handlePendaftaranDelete(e){this.getData(this.storeData)}_handlePendaftaranDeleteError(e){}_routePageChanged(page){}_handleManager(e){var response=e.detail.response;this.User=response.data}_errorManager(e){console.log(e)}_handleProposalPost(e){if(1==this.statusRequest){this.toast="Berhasil memilih PIC"}else if(1==this.statusRequest){this.toast="Alhamdulillah sudah melakukan pencairan"}this.shadowRoot.querySelector("vaadin-dialog").opened=!1;this.shadowRoot.querySelector("#dialogPencairan").opened=!1;this.getData(this.storeData)}_handleProposalPostError(e){if(401==e.detail.request.xhr.status){this.error=e.detail.request.xhr.status}else{this.toast=e.detail.request.xhr.response.Message}}formatDate(date){var hari=["Minggu","Senin","Selasa","Rabu","Kamis","Jum'at","Sabtu"],bulan=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],day=date.getDay(),dd=date.getDate(),mm=date.getMonth(),yyyy=date.getFullYear(),hari=hari[day],bulan=bulan[mm];return hari+", "+dd+" "+bulan+" "+yyyy}formatDate2(date){var dd=date.getDate(),mm=date.getMonth()+1,yyyy=date.getFullYear();return yyyy+"-"+mm+"-"+dd}_handleKategori(e){var response=e.detail.response;this.Kategori=response.data}_errorKategori(e){console.log(e)}dialogSearch(){this.shadowRoot.querySelector("#dialogSearch").opened=!0;this.$.datass.url=MyAppGlobals.apiPath+"/api/kategori";this.$.datass.headers.authorization=this.storedUser.access_token}refresh(){localStorage.removeItem("register-data");this.getData(this.storeData)}_subCon(val){return parseInt(val.substring(0,3))}}window.customElements.define("bmm-proposal",Proposal)});