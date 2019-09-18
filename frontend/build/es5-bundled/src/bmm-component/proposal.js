define(["require","../my-app.js"],function(_require,_myApp){"use strict";_require=babelHelpers.interopRequireWildcard(_require);function _templateObject_89a6ce10da2b11e9886ab5694315db4a(){var data=babelHelpers.taggedTemplateLiteral(["\n      <style include=\"shared-styles\">\n        :host {\n          display: block;\n          padding: 10px;\n        }\n\n        .filter-side {\n          position:absolute;\n          top: 20px;\n    right: 20px;\n    z-index: 100;\n        }\n      \n        #pages {\n          display: flex;\n          flex-wrap: wrap;\n          margin: 20px;\n        }\n\n        .search {\n          margin-bottom :20px;\n        }\n\n        #pages > button {\n          user-select: none;\n          padding: 5px;\n          margin: 0 5px;\n          border-radius: 10%;\n          border: 0;\n          background: transparent;\n          font: inherit;\n          outline: none;\n          cursor: pointer;\n        }\n\n        #pages > button:not([disabled]):hover,\n        #pages > button:focus {\n          color: #ccc;\n          background-color: #eee;\n        }\n\n        #pages > button[selected] {\n          font-weight: bold;\n          color: white;\n          background-color: #ccc;\n        }\n\n        #pages > button[disabled] {\n          opacity: 0.5;\n          cursor: default;\n        }\n\n        .card {\n          position : relative;\n        }\n\n        .status-verifikasi {\n          color: white;\n          width: 220px;\n          display: inline;\n          border: 1px solid white;\n          width: 4;\n          margin-left: 10px;\n          border-radius: 7px;\n          text-align: center;\n        }\n\n        [part~=\"cell\"].female {\n        background: rgb(255, 240, 240);\n      }\n\n      [part~=\"cell\"].male {\n        background: rgb(245, 245, 255);\n      } \n\n      paper-button.green {\n          background-color: var(--paper-green-500);\n          color: white;\n        }\n        \n        paper-button.green[active] {\n          background-color: var(--paper-red-500);\n        }\n\n        paper-button.blue {\n          background-color: var(--paper-blue-500);\n          color: white;\n        }\n        \n        paper-button.blue[active] {\n          background-color: var(--paper-blue-500);\n        }\n\n        #main {\n          display :none;\n        }\n\n        vaadin-grid {\n          font-size :14px;\n        }\n      </style>\n\n      <bmm-loader></bmm-loader>\n\n       <!-- app-location binds to the app's URL -->\n       <app-location route=\"{{route}}\"></app-location>\n\n      <!-- this app-route manages the top-level routes -->\n      <app-route\n          route=\"{{route}}\"\n          pattern=\"/panel/:view\"\n          data=\"{{routeData}}\"\n          tail=\"{{subroute}}\"></app-route>\n\n      <div class=\"card\" id=\"main\">\n      <vaadin-dialog aria-label=\"polymer templates\" id=\"dialog_pic\">\n          <template>\n           <h3> Pilih PIC </h3>\n           <vaadin-select value=\"{{ regObj.disposisi_pic_id }}\" label=\"Staff tertuju\" id=\"disposisi_pic\">\n              <template>\n                <vaadin-list-box>\n                <dom-repeat items=\"{{User}}\">\n                  <template>\n                    <vaadin-item label=\"{{item.nama}}\" value=\"{{item.Id}}\">{{item.nama}}</vaadin-item>\n                  </template>\n                </dom-repeat>\n                </vaadin-list-box>\n              </template>\n            </vaadin-select>\n            <vaadin-button on-click=\"confirmPic\"> Simpan</vaadin-button>\n          </template>\n       </vaadin-dialog>\n       <vaadin-dialog  id=\"dialogSearch\">\n          <template>\n           <h3> Filter </h3>\n           <!-- <div class=\"search\"  id=\"selectedField\"> -->\n                <vaadin-select value=\"{{Filter.kategori}}\" colspan=\"2\" label=\"Kategori\">\n                  <template>\n              \n                    <vaadin-list-box>\n                    <vaadin-item value=\"\">Semua</vaadin-item>\n                      <dom-repeat items=\"{{Kategori}}\">\n                        <template>\n                          <vaadin-item label=\"{{item.Value}}\" value=\"{{item.KodeP}}\">{{item.Value}}</vaadin-item>\n                        </template>\n                      </dom-repeat>\n                    </vaadin-list-box>\n                  </template>\n                </vaadin-select><br>\n    \n          <!-- </div> -->\n            <vaadin-date-picker id=\"start\" label=\"Tanggal Mulai\" value=\"{{Filter.tanggal_mulai}}\"></vaadin-date-picker><br>\n            <vaadin-date-picker id=\"end\" label=\"Tanggal Akhir\"  value=\"{{Filter.tanggal_akhir}}\"></vaadin-date-picker><br>\n            <vaadin-button on-click=\"cekData\" id=\"cekData\" class=\"green\" style=\"width:100%\"> Cari</vaadin-button>\n          </template>\n       </vaadin-dialog>\n       <vaadin-dialog  id=\"dialogPencairan\">\n          <template>\n           <h3> Pencairan dana a/n  {{ Pencairan.muztahiks.nama}}</h3>\n            <vaadin-date-picker id=\"end\" label=\"Tanggal Pencairan\"value=\"{{Pencairan.persetujuan.tanggal_pencairan}}\" style=\"width:100%\"></vaadin-date-picker><br>\n            <vaadin-number-field label=\"Jumlah Pencairan\" style=\"width:100%\" value=\"{{Pencairan.persetujuan.jumlah_pencairan}}\"></vaadin-number-field><br>\n            <vaadin-text-area label=\"Keterangan\" style=\"width:100%\" value=\"{{Pencairan.persetujuan.keterangan}}\"></vaadin-text-area><br>\n            <vaadin-button on-click=\"simpanPencairan\" id=\"simpanPencairan\"> Simpan Data Pencairan</vaadin-button>\n          </template>\n       </vaadin-dialog>\n        <h1 style=\"display:inline;margin-right:20px;\">Data Permintaan</h1>\n        <paper-button raised class=\"indigo\" on-click=\"refresh\">Refresh</paper-button>\n        <iron-ajax\n          id=\"GetPendaftaran\"\n          headers='{\"Access-Control-Allow-Origin\": \"*\" }'\n          handle-as=\"json\"\n          method=\"GET\"\n          on-response=\"_handleResponseM\"\n          on-error=\"_handleErrorM\"\n          Content-Type=\"application/json\"\n          debounce-duration=\"300\"></iron-ajax>\n        \n        <!-- ajax delete -->\n          <iron-ajax\n          id=\"DeletePendaftaran\"\n          headers='{\"Access-Control-Allow-Origin\": \"*\" }'\n          handle-as=\"json\"\n          method=\"DELETE\"\n          on-response=\"_handlePendaftaranDelete\"\n          on-error=\"_handlePendaftaranDeleteError\"\n          Content-Type=\"application/json\"\n          debounce-duration=\"300\"></iron-ajax>\n\n          <iron-ajax\n              auto \n              id=\"managerDPP\"\n              headers='{\"Access-Control-Allow-Origin\": \"*\" }'\n              handle-as=\"json\"\n              method=\"GET\"\n              on-response=\"_handleManager\"\n              on-error=\"_errorManager\"\n              Content-Type=\"application/json\"\n              debounce-duration=\"300\">\n          </iron-ajax>\n\n          <iron-ajax \n            id=\"postData\"\n            headers='{\"Access-Control-Allow-Origin\": \"*\" }'\n            handle-as=\"json\"\n            method=\"PUT\"\n            on-response=\"_handleProposalPost\"\n            on-error=\"_handleProposalPostsError\"\n            Content-Type=\"application/json\"\n            debounce-duration=\"300\"></iron-ajax>\n\n          <iron-ajax\n              auto \n              id=\"datass\"\n              headers='{\"Access-Control-Allow-Origin\": \"*\" }'\n              handle-as=\"json\"\n              method=\"GET\"\n              on-response=\"_handleKategori\"\n              on-error=\"_errorKategori\"\n              Content-Type=\"application/json\"\n              debounce-duration=\"300\">\n          </iron-ajax>\n\n          <global-variable key=\"LoginCred\"   value=\"{{ storedUser }}\"> </global-variable>\n          <global-variable key=\"error\"   value=\"{{ error }}\">  </global-variable>\n          <global-variable key=\"toast\" value=\"{{ toast }}\"></global-variable>\n          <global-data id=\"globalData\"> </global-data>\n\n          <div class=\"filter-side\">\n              <paper-icon-button icon=\"search\" on-click=\"dialogSearch\"></paper-icon-button>\n          </div>\n          <!-- Table  -->\n          <vaadin-grid theme=\"column-borders\" column-reordering-allowed multi-sort id=\"grid\" page-size=\"10\" height-by-rows aria-label=\"Selection using Active Item Example\" style=\"margin-top:30px;\">\n            <vaadin-grid-sort-column path=\"muztahiks.nama\" id=\"nama\" header=\"nama\" width=\"200px\"></vaadin-grid-sort-column >\n              <vaadin-grid-sort-column id=\"tanggal\" header=\"tanggal\" width=\"200px\"></vaadin-grid-sort-column >\n              <vaadin-grid-sort-column path=\"persetujuan.kategori_program\" id=\"kategori\" header=\"kategori\" width=\"220px\"></vaadin-grid-sort-column >\n              <vaadin-grid-sort-column id=\"status\" header=\"status\" width=\"220px\"></vaadin-grid-sort-column >\n              <vaadin-grid-column header=\"Action\" id=\"action\" width=\"150px\">\n                    \n              </vaadin-grid-column>\n          </vaadin-grid>\n          <div id=\"pages\"></div>\n          <!-- End Table -->\n      </div>\n    "]);_templateObject_89a6ce10da2b11e9886ab5694315db4a=function _templateObject_89a6ce10da2b11e9886ab5694315db4a(){return data};return data}new Promise(function(res,rej){return _require.default(["../config/loader.js"],res,rej)}).then(function(bundle){return bundle&&bundle.$loader||{}});var Proposal=function(_PolymerElement){babelHelpers.inherits(Proposal,_PolymerElement);function Proposal(){babelHelpers.classCallCheck(this,Proposal);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(Proposal).apply(this,arguments))}babelHelpers.createClass(Proposal,[{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(Proposal.prototype),"connectedCallback",this).call(this);this._loading(1)}},{key:"_kategoriSelected",value:function _kategoriSelected(val){console.log(val)}},{key:"confirmPic",value:function confirmPic(){this.$.postData.url=MyAppGlobals.apiPath+"/api/pendaftaran/"+this.regObj._id;this.$.postData.headers.authorization=this.storedUser.access_token;this.$.postData.body={muztahik_id:this.regObj._id,persetujuan:{disposisi_pic_id:this.regObj.disposisi_pic_id,level_persetujuan:this.regObj.level_persetujuan}};this.statusRequest=1;this.$.postData.generateRequest()}},{key:"simpanPencairan",value:function simpanPencairan(){this.$.postData.url=MyAppGlobals.apiPath+"/api/pencairan/"+this.Pencairan._id;this.$.postData.headers.authorization=this.storedUser.access_token;this.$.postData.body={muztahik_id:this.Pencairan._id,persetujuan:{level_persetujuan:this.Pencairan.persetujuan.level_persetujuan,tanggal_pencairan:new Date(this.Pencairan.persetujuan.tanggal_pencairan).toISOString(),jumlah_pencairan:parseInt(this.Pencairan.persetujuan.jumlah_pencairan),keterangan:this.Pencairan.persetujuan.keterangan}};this.statusRequest=2;this.$.postData.generateRequest()}},{key:"_activatedChanged",value:function _activatedChanged(newValue,oldValue){if(newValue){localStorage.removeItem("register-data");this.getData(this.storeData);this.$.managerDPP.url=MyAppGlobals.apiPath+"/api/users?role=2&role2=3";this.$.managerDPP.headers.authorization=this.storedUser.access_token;if(3!==this.storedUser.role){this.$.dialog_pic.style="display:none"}}}},{key:"_loading",value:function _loading(show){if(0==show){this.shadowRoot.querySelector("#main").style.display="block";var that=this;setTimeout(function(){that.shadowRoot.querySelector("bmm-loader").style.display="none"},2e3)}else{this.shadowRoot.querySelector("#main").style.display="none";this.shadowRoot.querySelector("bmm-loader").style.display="block"}}},{key:"_clicked",value:function _clicked(){var action=this.$.action,that=this;action.renderer=function(root,column,rowData){switch(that.storedUser.role){case 1:var urlEdit="/panel/proposal/edit-proposal/"+rowData.item.kategori+"/"+rowData.item._id,urlDelete=MyAppGlobals.apiPath+"/api/pendaftaran/"+rowData.item._id,innerHtml="<paper-icon-button icon =\"settings\" class=\"green\">Edit</paper-icon-button><paper-icon-button icon = \"clear\" class=\"red\">Delete</paper-icon-button><paper-icon-button icon =\"pan-tool\" class=\"green\" style=\"display:none\">PIC</paper-icon-button>";break;case 2:var urlEdit="/panel/proposal/edit-verifikator/"+rowData.item.kategori+"/"+rowData.item._id,innerHtml="<paper-button class=\"green\">Verif</paper-button><paper-icon-button icon = \"clear\" class=\"red\" style=\"display:none\">Delete</paper-icon-button><paper-icon-button icon =\"pan-tool\" class=\"green\"  style=\"display:none\">PIC</paper-icon-button>";break;case 3:var urlEdit="/panel/proposal/edit-proposal/"+rowData.item.kategori+"/"+rowData.item._id,innerHtml="<paper-icon-button icon =\"settings\" class=\"green\" style=\"display:none\">Edit</paper-icon-button><paper-icon-button icon = \"clear\" class=\"red\" style=\"display:none\">Delete</paper-icon-button><paper-icon-button icon =\"pan-tool\" class=\"green\">PIC</paper-icon-button> ";break;case 4:var urlEdit="/panel/proposal/edit-proposal/"+rowData.item.kategori+"/"+rowData.item._id,innerHtml="<paper-icon-button icon =\"settings\" class=\"green\" style=\"display:none\">Edit</paper-icon-button><paper-icon-button icon = \"clear\" class=\"red\" style=\"display:none\">Delete</paper-icon-button><paper-icon-button icon =\"pan-tool\" class=\"green\"  style=\"display:none\">PIC</paper-icon-button>";break;case 5:var urlEdit="/panel/proposal/edit-proposal/"+rowData.item.kategori+"/"+rowData.item._id,urlDelete=MyAppGlobals.apiPath+"/api/pendaftaran/"+rowData.item._id,innerHtml="<paper-icon-button icon =\"settings\" class=\"green\">Edit</paper-icon-button><paper-icon-button icon = \"clear\" class=\"red\">Delete</paper-icon-button><paper-icon-button icon =\"pan-tool\" class=\"green\" style=\"display:none\">PIC</paper-icon-button>";break;case 7:var urlEdit="/panel/proposal/edit-verifikator/"+rowData.item.kategori+"/"+rowData.item._id,innerHtml="<paper-icon-button icon =\"settings\" class=\"green\"  style=\"display:none\">Edit</paper-icon-button><paper-icon-button icon = \"clear\" class=\"red\" style=\"display:none\">Delete</paper-icon-button><paper-icon-button icon =\"pan-tool\" class=\"green\"  style=\"display:none\">PIC</paper-icon-button>";break;case 9:var urlEdit="/panel/proposal/edit-proposal/"+rowData.item.kategori+"/"+rowData.item._id,innerHtml="<paper-icon-button icon =\"settings\" class=\"green\" style=\"display:none\">Edit</paper-icon-button><paper-icon-button icon = \"clear\" class=\"red\" style=\"display:none\">Delete</paper-icon-button><paper-icon-button icon =\"pan-tool\" class=\"green\"  style=\"display:none\">PIC</paper-icon-button>";break;}root.innerHTML=innerHtml;root.childNodes[0].addEventListener("click",function(e){that.set("route.path",urlEdit)});root.childNodes[1].addEventListener("click",function(e){if(confirm("Yakin hapus pendaftaran proposal "+rowData.item.muztahiks.nama+" dengan asnaf "+rowData.item.kategoris.asnaf+". Jika data dihapus, tidak dapat dikembalikan kembali!")){that.$.DeletePendaftaran.url=urlDelete;that.$.DeletePendaftaran.headers.authorization=that.storedUser.access_token;that.$.DeletePendaftaran.generateRequest()}});root.childNodes[2].addEventListener("click",function(e){that.regObj={_id:rowData.item._id,disposisi_pic_id:rowData.item.persetujuan.disposisi_pic_id,level_persetujuan:rowData.item.persetujuan.level_persetujuan};var dialog=that.shadowRoot.querySelector("vaadin-dialog"),backdrop=dialog.shadowRoot.querySelector("vaadin-dialog-overlay").shadowRoot.querySelector("#backdrop");backdrop.addEventListener("click",function(){that.regObj={}});dialog.opened=!0});if(3==that.storedUser.role&&1<=rowData.item.persetujuan.level_persetujuan&&"undefined"!==typeof rowData.item.verifikasi){var el=document.createElement("paper-button");el.innerHTML="Verif";el.classList.add("green");root.appendChild(el).addEventListener("click",function(e){that.set("route.path","/panel/proposal/edit-verifikator/"+rowData.item.kategori+"/"+rowData.item._id)});action.width=that._subCon(action.width)<that._subCon("220px")?"220px":action.width}if((3==that.storedUser.role||2==that.storedUser.role||9==that.storedUser.role||4==that.storedUser.role&&1==that.storedUser.department)&&2<=rowData.item.persetujuan.level_persetujuan){var _el=document.createElement("paper-button");_el.innerHTML="UPD";_el.classList.add("green");root.appendChild(_el).addEventListener("click",function(e){that.set("route.path","/panel/proposal/edit-upd/"+rowData.item.kategori+"/"+rowData.item._id)});action.width=that._subCon(action.width)<that._subCon("200px")?"200px":action.width}if(2==that.storedUser.role&&5<=rowData.item.persetujuan.level_persetujuan&&6!==rowData.item.persetujuan.level_persetujuan){var _el2=document.createElement("paper-button");_el2.innerHTML="Komite";_el2.classList.add("blue");root.appendChild(_el2).addEventListener("click",function(e){that.set("route.path","/panel/proposal/komite-pic/"+rowData.item.kategori+"/"+rowData.item._id)});action.width=that._subCon(action.width)<that._subCon("280px")?"280px":action.width}else if((4==that.storedUser.role||7<=that.storedUser.role)&&5<=rowData.item.persetujuan.level_persetujuan&&6!==rowData.item.persetujuan.level_persetujuan){var _el3=document.createElement("paper-button");_el3.innerHTML="Komite";_el3.classList.add("blue");root.appendChild(_el3).addEventListener("click",function(e){that.set("route.path","/panel/proposal/komite-persetujuan/"+rowData.item.kategori+"/"+rowData.item._id)});action.width=that._subCon(action.width)<that._subCon("200px")?"200px":action.width}if((that.storedUser.id==rowData.item.persetujuan.disposisi_pic_id||that.storedUser.id==rowData.item.persetujuan.manager_id||that.storedUser.id==rowData.item.persetujuan.kadiv_id)&&7<=rowData.item.persetujuan.level_persetujuan){var url="/panel/ppd/ppd-persetujuan";if(2==that.storedUser.role){url="/panel/proposal/ppd-pic"}var approve=rowData.item.komite.filter(function(data){return"undefined"!==typeof data.tanggal&&""!==data.tanggal&&"0001-01-01T00:00:00Z"!==data.tanggal});if(rowData.item.komite.length==approve.length){var _el4=document.createElement("paper-button");_el4.innerHTML="PPD";_el4.classList.add("blue");root.appendChild(_el4).addEventListener("click",function(e){that.set("route.path",url+"/"+rowData.item.kategori+"/"+rowData.item._id)});action.width=that._subCon(action.width)<that._subCon("350px")?"350px":action.width;if("undefined"!==typeof rowData.item.ppd){var approve=rowData.item.ppd.filter(function(data){return"undefined"!==typeof data.tanggal&&""!==data.tanggal&&"0001-01-01T00:00:00Z"!==data.tanggal});if(rowData.item.ppd.length==approve.length&&2==that.storedUser.role){var _el5=document.createElement("paper-button");_el5.innerHTML="Pencairan";_el5.classList.add("blue");root.appendChild(_el5).addEventListener("click",function(e){that.Pencairan=rowData.item;that.Pencairan.persetujuan.tanggal_pencairan=that.formatDate2(new Date(rowData.item.persetujuan.tanggal_pencairan));if("undefined"==typeof that.Pencairan.persetujuan.jumlah_pencairan){that.Pencairan.persetujuan.jumlah_pencairan=that.Pencairan.kategoris.jumlah_bantuan}that.shadowRoot.querySelector("#dialogPencairan").opened=!0});action.width=that._subCon(action.width)<that._subCon("440px")?"440px":action.width}}}}}}},{key:"getData",value:function getData(storeData){var url=1<arguments.length&&arguments[1]!==void 0?arguments[1]:MyAppGlobals.apiPath+"/api/pendaftaran";if("undefined"!==typeof this.muzId){url=url+"?muztahik_id="+this.muzId;this.shadowRoot.querySelector(".filter-side").style.display="none";this.shadowRoot.querySelector("#main").style.margin="0";this.shadowRoot.querySelector("#main").style.padding="0"}this.$.GetPendaftaran.url=url;this.$.GetPendaftaran.headers.authorization=this.storedUser.access_token;this.$.GetPendaftaran.generateRequest()}},{key:"cekData",value:function cekData(){this.pages=0;var pagesControl=this.$.pages;pagesControl.innerHTML="";var search="",isi="";for(var key in this.Filter){if(this.Filter.hasOwnProperty(key)){if(""!==this.Filter[key]){search+=2<search.length?"&":"?";if("kategori"==key){isi=this.Filter[key]}else if("tanggal_mulai"==key){if(""==this.Filter.tanggal_akhir){alert("Belum memasukan tanggal akhir");return}else{isi=new Date(this.Filter[key]).toISOString()}}else if("tanggal_akhir"==key){if(""==this.Filter.tanggal_mulai){alert("Belum memasukan tanggal mulai");return}else{isi=new Date(this.Filter[key]).toISOString()}}search+=key+"="+isi}}}var url=MyAppGlobals.apiPath+"/api/pendaftaran"+search;this.getData(this.storedUser,url)}},{key:"_handleResponseM",value:function _handleResponseM(event){var _this=this;this.shadowRoot.querySelector("#dialogSearch").opened=!1;var response=event.detail.response;this.pendaftarans=response.data;var grid=this.$.grid;grid.items=this.pendaftarans;this._clicked();this.updateItemsFromPage(1);this.$.tanggal.renderer=function(root,grid,rowData){var date=new Date("".concat(rowData.item.tanggalProposal));root.textContent=_this.formatDate(date)};this.$.status.renderer=function(root,grid,rowData){var status="",colors=["#74b9ff","#d63031","#00b894","#FF7F50","#6861CE","#8BC34A","#F44336","#c0392b","#16a085","#2c3e50","#8e44ad","#34495e"];switch(rowData.item.persetujuan.level_persetujuan){case 0:status="Belum ada PIC";root.classList.add("status-verifikasi");root.style.backgroundColor=colors[1];break;case 1:status="Belum Diverifikasi";root.classList.add("status-verifikasi");root.style.backgroundColor=colors[0];break;case 2:status="Sudah Diverifikasi";root.classList.add("status-verifikasi");root.style.backgroundColor=colors[2];break;case 3:status="UPD Sudah Dibuat";root.classList.add("status-verifikasi");root.style.backgroundColor=colors[3];break;case 4:status="UPD diperiksa Manager";root.classList.add("status-verifikasi");root.style.backgroundColor=colors[4];break;case 5:status="UPD Disetujui Kadiv/Direktur ";root.classList.add("status-verifikasi");root.style.backgroundColor=colors[5];break;case 6:status="UPD Tidak disetujui Kadiv/Direktur";root.classList.add("status-verifikasi");root.style.backgroundColor=colors[6];break;case 7:status="Komite sudah dibentuk";root.classList.add("status-verifikasi");root.style.backgroundColor=colors[8];if("undefined"!==typeof rowData.item.komite){var approve=rowData.item.komite.filter(function(data){return"undefined"!==typeof data.tanggal&&""!==data.tanggal&&"0001-01-01T00:00:00Z"!==data.tanggal});if(approve.length==rowData.item.komite.length){status="TTD Komite Sudah Lengkap";root.classList.add("status-verifikasi");root.style.backgroundColor=colors[11]}else if(0<approve.length){status="Komite sudah di ttd "+approve.length+" orang";root.classList.add("status-verifikasi");root.style.backgroundColor=colors[9]}}break;case 8:status="PPD sudah dibuat";root.classList.add("status-verifikasi");root.style.backgroundColor=colors[10];if("undefined"!==typeof rowData.item.ppd){var approve=rowData.item.ppd.filter(function(data){return"undefined"!==typeof data.tanggal&&""!==data.tanggal&&"0001-01-01T00:00:00Z"!==data.tanggal});if(4==approve.length){status="TTD PPD Sudah Lengkap";root.classList.add("status-verifikasi");root.style.backgroundColor=colors[11]}else if(0<approve.length){status="PPd sudah di ttd "+approve.length+" orang";root.classList.add("status-verifikasi");root.style.backgroundColor=colors[10]}}break;case 9:status="Pencairan tgl "+_this.formatDate2(new Date(rowData.item.persetujuan.tanggal_pencairan));root.classList.add("status-verifikasi");root.style.backgroundColor=colors[2];}root.textContent=status}}},{key:"_handleErrorM",value:function _handleErrorM(e){this.error=e.detail.request.xhr.status}},{key:"updateItemsFromPage",value:function updateItemsFromPage(page){var pagesControl=this.$.pages,that=this,grid=this.$.grid;if(page===void 0){return}if(null==this.pendaftarans){this._loading(0);return}if(!that.pages){that.pages=Array.apply(null,{length:Math.ceil(this.pendaftarans.length/grid.pageSize)}).map(function(item,index){return index+1});var prevBtn=window.document.createElement("button");prevBtn.textContent="<";prevBtn.addEventListener("click",function(){var selectedPage=parseInt(pagesControl.querySelector("[selected]").textContent);that.updateItemsFromPage(selectedPage-1)});pagesControl.appendChild(prevBtn);that.pages.forEach(function(pageNumber){var pageBtn=window.document.createElement("button");pageBtn.textContent=pageNumber;pageBtn.addEventListener("click",function(e){that.updateItemsFromPage(parseInt(e.target.textContent))});if(pageNumber===page){pageBtn.setAttribute("selected",!0)}pagesControl.appendChild(pageBtn)});var nextBtn=window.document.createElement("button");nextBtn.textContent=">";nextBtn.addEventListener("click",function(){var selectedPage=parseInt(pagesControl.querySelector("[selected]").textContent);that.updateItemsFromPage(selectedPage+1)});pagesControl.appendChild(nextBtn)}var buttons=Array.from(pagesControl.children);buttons.forEach(function(btn,index){if(parseInt(btn.textContent)===page){btn.setAttribute("selected",!0)}else{btn.removeAttribute("selected")}if(0===index){if(1===page){btn.setAttribute("disabled","")}else{btn.removeAttribute("disabled")}}if(index===buttons.length-1){if(page===that.pages.length){btn.setAttribute("disabled","")}else{btn.removeAttribute("disabled")}}});var start=(page-1)*grid.pageSize,end=page*grid.pageSize;grid.items=this.pendaftarans.slice(start,end);this._clicked();this._loading(0)}},{key:"_handlePendaftaranDelete",value:function _handlePendaftaranDelete(e){this.getData(this.storeData)}},{key:"_handlePendaftaranDeleteError",value:function _handlePendaftaranDeleteError(e){}},{key:"_routePageChanged",value:function _routePageChanged(page){}},{key:"_handleManager",value:function _handleManager(e){var response=e.detail.response;this.User=response.data}},{key:"_errorManager",value:function _errorManager(e){console.log(e)}},{key:"_handleProposalPost",value:function _handleProposalPost(e){if(1==this.statusRequest){this.toast="Berhasil memilih PIC"}else if(1==this.statusRequest){this.toast="Alhamdulillah sudah melakukan pencairan"}this.shadowRoot.querySelector("vaadin-dialog").opened=!1;this.shadowRoot.querySelector("#dialogPencairan").opened=!1;this.getData(this.storeData)}},{key:"_handleProposalPostError",value:function _handleProposalPostError(e){if(401==e.detail.request.xhr.status){this.error=e.detail.request.xhr.status}else{this.toast=e.detail.request.xhr.response.Message}}},{key:"formatDate",value:function formatDate(date){var hari=["Minggu","Senin","Selasa","Rabu","Kamis","Jum'at","Sabtu"],bulan=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],day=date.getDay(),dd=date.getDate(),mm=date.getMonth(),yyyy=date.getFullYear(),hari=hari[day],bulan=bulan[mm];return hari+", "+dd+" "+bulan+" "+yyyy}},{key:"formatDate2",value:function formatDate2(date){var dd=date.getDate(),mm=date.getMonth()+1,yyyy=date.getFullYear();return yyyy+"-"+mm+"-"+dd}},{key:"_handleKategori",value:function _handleKategori(e){var response=e.detail.response;this.Kategori=response.data}},{key:"_errorKategori",value:function _errorKategori(e){console.log(e)}},{key:"dialogSearch",value:function dialogSearch(){this.shadowRoot.querySelector("#dialogSearch").opened=!0;this.$.datass.url=MyAppGlobals.apiPath+"/api/kategori";this.$.datass.headers.authorization=this.storedUser.access_token}},{key:"refresh",value:function refresh(){localStorage.removeItem("register-data");this.getData(this.storeData)}},{key:"_subCon",value:function _subCon(val){return parseInt(val.substring(0,3))}}],[{key:"template",get:function get(){return(0,_myApp.html)(_templateObject_89a6ce10da2b11e9886ab5694315db4a())}},{key:"properties",get:function get(){return{pendaftarans:{type:Array,notify:!0},Search:String,storedUser:{type:Object,notify:!0},pages:{type:Array,notify:!0},User:{type:Array,notify:!0,value:function value(){return[]}},muzId:{type:String,notify:!0,observer:"_activatedChanged"},reload:{type:Boolean,notify:!0},activated:{type:Boolean,value:!1,observer:"_activatedChanged"},regObj:{type:Object,notify:!0,value:function value(){return{}}},Pencairan:{type:Object,notify:!0,value:function value(){return{nama:"",persetujuan:{tanggal_pencairan:"",jumlah_pencairan:"",keterangan:""}}}},Kategori:{type:Array,notify:!0,value:function value(){return[]}},Filter:{type:Object,notify:!0,value:function value(){return{kategori:"",tanggal_mulai:"",tanggal_akhir:""}}},statusRequest:Number}}},{key:"observers",get:function get(){return["_routePageChanged(subroute.*)","_kategoriSelected(selectedKategori)"]}}]);return Proposal}(_myApp.PolymerElement);window.customElements.define("bmm-proposal",Proposal)});