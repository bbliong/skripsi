import{PolymerElement,html}from"../my-app.js";import("../config/loader.js").then(bundle=>bundle&&bundle.$loader||{});class Ppd extends PolymerElement{static get template(){return html`
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
            <vaadin-button on-click="cekData" id="cekData"> Cari</vaadin-button>
          </template>
       </vaadin-dialog>
        <h1 style="display:inline;margin-right:20px;">Proposal Sudah PPD</h1>
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
        
        <iron-ajax
            auto 
            id="datass"
            headers='{"Access-Control-Allow-Origin": "*" }'
            handle-as="json"
            method="GET"
            on-response="_handleKategori"
            on-error="_errorKategori"
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
              <paper-icon-button icon="search" on-click="dialogSearch"></paper-icon-button>
          </div>
          <!-- Table  -->
          <vaadin-grid theme="column-borders" column-reordering-allowed multi-sort id="grid" page-size="10" height-by-rows aria-label="Selection using Active Item Example" style="margin-top:30px;">
            <vaadin-grid-sort-column path="muztahiks.nama" id="nama" header="nama" width="200px"></vaadin-grid-sort-column >
              <vaadin-grid-sort-column id="tanggal" header="tanggal" width="200px"></vaadin-grid-sort-column >
              <vaadin-grid-sort-column path="persetujuan.kategori_program" id="kategori" header="kategori" width="220px"></vaadin-grid-sort-column >
              <vaadin-grid-sort-column id="status" header="status" width="220px"></vaadin-grid-sort-column >
              <vaadin-grid-column header="Action" id="action" width="150px"></vaadin-grid-column>
          </vaadin-grid>
          <div id="pages"></div>
          <!-- End Table -->
      </div>
    `}static get properties(){return{pendaftarans:{type:Array,notify:!0},Search:String,storedUser:{type:Object,notify:!0},pages:{type:Array,notify:!0},User:{type:Array,notify:!0,value:function(){return[]}},activated:{type:Boolean,value:!1,observer:"_activatedChanged"},regObj:{type:Object,notify:!0,value:function(){return{}}},Kategori:{type:Array,notify:!0,value:function(){return[]}},Filter:{type:Object,notify:!0,value:function(){return{kategori:"",tanggal_mulai:"",tanggal_akhir:""}}}}}connectedCallback(){super.connectedCallback();this._loading(1)}static get observers(){return["_routePageChanged(subroute.*)","_kategoriSelected(selectedKategori)"]}_kategoriSelected(val){console.log(val)}_activatedChanged(newValue,oldValue){if(newValue){localStorage.removeItem("register-data");this.getData(this.storeData)}}_routePageChanged(page){}_loading(show){if(0==show){this.shadowRoot.querySelector("#main").style.display="block";var that=this;setTimeout(function(){that.shadowRoot.querySelector("bmm-loader").style.display="none"},2e3)}else{this.shadowRoot.querySelector("#main").style.display="none";this.shadowRoot.querySelector("bmm-loader").style.display="block"}}_clicked(){const action=this.$.action;var that=this;action.renderer=function(root,column,rowData){root.innerHTML="";if(7<=rowData.item.persetujuan.level_persetujuan){let el=document.createElement("paper-button");el.innerHTML="PPD";el.classList.add("blue");root.appendChild(el).addEventListener("click",function(e){that.set("route.path","/panel/ppd/ppd-persetujuan/"+rowData.item.kategori+"/"+rowData.item._id)});action.width="100px"}}}getData(storeData,url=MyAppGlobals.apiPath+"/api/ppd"){if("undefined"!==typeof this.muzId){url=url+"?muztahik_id="+this.muzId;this.shadowRoot.querySelector(".filter-side").style.display="none";this.shadowRoot.querySelector("#main").style.margin="0";this.shadowRoot.querySelector("#main").style.padding="0"}this.$.GetPendaftaran.url=url;this.$.GetPendaftaran.headers.authorization=this.storedUser.access_token;this.$.GetPendaftaran.generateRequest()}cekData(){this.pages=0;const pagesControl=this.$.pages;pagesControl.innerHTML="";var search="",isi="";for(var key in this.Filter){if(this.Filter.hasOwnProperty(key)){if(""!==this.Filter[key]){search+=2<search.length?"&":"?";if("kategori"==key){isi=this.Filter[key]}else if("tanggal_mulai"==key){if(""==this.Filter.tanggal_akhir){alert("Belum memasukan tanggal akhir");return}else{isi=new Date(this.Filter[key]).toISOString()}}else if("tanggal_akhir"==key){if(""==this.Filter.tanggal_mulai){alert("Belum memasukan tanggal mulai");return}else{isi=new Date(this.Filter[key]).toISOString()}}search+=key+"="+isi}}}var url=MyAppGlobals.apiPath+"/api/ppd"+search;this.getData(this.storedUser,url)}_handleResponseM(event){this.shadowRoot.querySelector("#dialogSearch").opened=!1;var response=event.detail.response;this.pendaftarans=response.data;const grid=this.$.grid;grid.items=this.pendaftarans;this._clicked();this.updateItemsFromPage(1);this.$.tanggal.renderer=(root,grid,rowData)=>{var date=new Date(`${rowData.item.tanggalProposal}`);root.textContent=this.formatDate(date)};this.$.status.renderer=(root,grid,rowData)=>{var status="",colors=["#74b9ff","#d63031","#00b894","#FF7F50","#6861CE","#8BC34A","#F44336","#c0392b","#16a085","#2c3e50","#8e44ad","#34495e"];switch(rowData.item.persetujuan.level_persetujuan){case 0:status="Belum ada PIC";root.classList.add("status-verifikasi");root.style.backgroundColor=colors[1];break;case 1:status="Belum Diverifikasi";root.classList.add("status-verifikasi");root.style.backgroundColor=colors[0];break;case 2:status="Sudah Diverifikasi";root.classList.add("status-verifikasi");root.style.backgroundColor=colors[2];break;case 3:status="UPD Sudah Dibuat";root.classList.add("status-verifikasi");root.style.backgroundColor=colors[3];break;case 4:status="UPD diperiksa Manager";root.classList.add("status-verifikasi");root.style.backgroundColor=colors[4];break;case 5:status="UPD Disetujui Kadiv/Direktur ";root.classList.add("status-verifikasi");root.style.backgroundColor=colors[5];break;case 6:status="UPD Tidak disetujui Kadiv/Direktur";root.classList.add("status-verifikasi");root.style.backgroundColor=colors[6];break;case 7:status="Komite sudah dibentuk";root.classList.add("status-verifikasi");root.style.backgroundColor=colors[8];if("undefined"!==typeof rowData.item.komite){var approve=rowData.item.komite.filter(function(data){return"undefined"!==typeof data.tanggal&&""!==data.tanggal&&"0001-01-01T00:00:00Z"!==data.tanggal});if(0<approve.length){status="Komite sudah di ttd "+approve.length+" orang";root.classList.add("status-verifikasi");root.style.backgroundColor=colors[9]}}break;case 8:status="PPD sudah dibuat";root.classList.add("status-verifikasi");root.style.backgroundColor=colors[10];if("undefined"!==typeof rowData.item.ppd){var approve=rowData.item.ppd.filter(function(data){return"undefined"!==typeof data.tanggal&&""!==data.tanggal&&"0001-01-01T00:00:00Z"!==data.tanggal});if(4==approve.length){status="TTD PPD Sudah Lengkap";root.classList.add("status-verifikasi");root.style.backgroundColor=colors[11]}else if(0<approve.length){status="PPd sudah di ttd "+approve.length+" orang";root.classList.add("status-verifikasi");root.style.backgroundColor=colors[10]}}break;case 9:status="Pencairan tgl "+this.formatDate2(new Date(rowData.item.persetujuan.tanggal_pencairan));root.classList.add("status-verifikasi");root.style.backgroundColor=colors[2];}root.textContent=status}}_handleErrorM(e){this.error=e.detail.request.xhr.status}updateItemsFromPage(page){const pagesControl=this.$.pages;var that=this;const grid=this.$.grid;if(page===void 0){return}if(null==this.pendaftarans){this._loading(0);return}if(!that.pages){that.pages=Array.apply(null,{length:Math.ceil(this.pendaftarans.length/grid.pageSize)}).map(function(item,index){return index+1});const prevBtn=window.document.createElement("button");prevBtn.textContent="<";prevBtn.addEventListener("click",function(){const selectedPage=parseInt(pagesControl.querySelector("[selected]").textContent);that.updateItemsFromPage(selectedPage-1)});pagesControl.appendChild(prevBtn);that.pages.forEach(function(pageNumber){const pageBtn=window.document.createElement("button");pageBtn.textContent=pageNumber;pageBtn.addEventListener("click",function(e){that.updateItemsFromPage(parseInt(e.target.textContent))});if(pageNumber===page){pageBtn.setAttribute("selected",!0)}pagesControl.appendChild(pageBtn)});const nextBtn=window.document.createElement("button");nextBtn.textContent=">";nextBtn.addEventListener("click",function(){const selectedPage=parseInt(pagesControl.querySelector("[selected]").textContent);that.updateItemsFromPage(selectedPage+1)});pagesControl.appendChild(nextBtn)}const buttons=Array.from(pagesControl.children);buttons.forEach(function(btn,index){if(parseInt(btn.textContent)===page){btn.setAttribute("selected",!0)}else{btn.removeAttribute("selected")}if(0===index){if(1===page){btn.setAttribute("disabled","")}else{btn.removeAttribute("disabled")}}if(index===buttons.length-1){if(page===that.pages.length){btn.setAttribute("disabled","")}else{btn.removeAttribute("disabled")}}});var start=(page-1)*grid.pageSize,end=page*grid.pageSize;grid.items=this.pendaftarans.slice(start,end);this._clicked();this._loading(0)}_handleProposalPost(e){this.shadowRoot.querySelector("vaadin-dialog").opened=!1;this.getData(this.storeData)}_handleProposalPostError(e){console.log(e)}formatDate(date){var hari=["Minggu","Senin","Selasa","Rabu","Kamis","Jum'at","Sabtu"],bulan=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],day=date.getDay(),dd=date.getDate(),mm=date.getMonth(),yyyy=date.getFullYear(),hari=hari[day],bulan=bulan[mm];return hari+", "+dd+" "+bulan+" "+yyyy}formatDate2(date){var dd=date.getDate(),mm=date.getMonth()+1,yyyy=date.getFullYear();return yyyy+"-"+mm+"-"+dd}_handleKategori(e){var response=e.detail.response;this.Kategori=response.data}_errorKategori(e){console.log(e)}dialogSearch(){this.shadowRoot.querySelector("#dialogSearch").opened=!0;this.$.datass.url=MyAppGlobals.apiPath+"/api/kategori";this.$.datass.headers.authorization=this.storedUser.access_token}refresh(){localStorage.removeItem("register-data");this.getData(this.storeData)}}window.customElements.define("bmm-ppd",Ppd);