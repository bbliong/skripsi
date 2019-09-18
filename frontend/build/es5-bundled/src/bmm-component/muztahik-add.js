define(["require","../my-app.js"],function(_require,_myApp){"use strict";_require=babelHelpers.interopRequireWildcard(_require);function _templateObject_89544140da2b11e9886ab5694315db4a(){var data=babelHelpers.taggedTemplateLiteral(["\n      <style include=\"shared-styles\">\n        :host {\n          display: block;\n\n          padding: 10px;\n        }\n\n        .wrap {\n          width:100%;\n        }\n        .paper-toast-open{\n          left: 250px !important;\n        }\n      </style>\n        <!-- app-location binds to the app's URL -->\n        <app-location route=\"{{route}}\"></app-location>\n\n        <!-- this app-route manages the top-level routes -->\n        <app-route\n            route=\"{{route}}\"\n            pattern=\"/panel/muztahik/:view\"\n            data=\"{{routeData}}\"\n            tail=\"{{subroute}}\"></app-route>\n\n      <global-variable key=\"LoginCred\" value=\"{{ storedUser }}\"></global-variable>\n      <global-variable key=\"Register\" value=\"{{ regObj }}\"></global-variable>\n      <global-variable key=\"error\" value=\"{{ error }}\"></global-variable>\n      <global-variable key=\"toast\" value=\"{{ toast }}\"></global-variable>\n      <global-data id=\"globalData\"></global-data>\n      <div class=\"card\">\n      <h1>Pendaftaran Muztahik</h1>\n\n      <vaadin-form-layout>\n            <vaadin-text-field label=\"Nama\" value=\"{{regObj.muztahik.nama}}\"></vaadin-text-field>\n            <vaadin-text-field label=\"Nik *Wajib Diisi\" value=\"{{regObj.muztahik.nik}}\"></vaadin-text-field>\n            <vaadin-text-field label=\"No Handphone\" value=\"{{regObj.muztahik.nohp}}\"></vaadin-text-field>\n            <vaadin-text-field label=\"Email\" value=\"{{regObj.muztahik.email}}\"></vaadin-text-field>\n        </vaadin-form-layout>\n\n      <vaadin-form-layout>\n        <vaadin-text-area label=\"Alamat\"  colspan=\"2\" value=\"{{regObj.muztahik.alamat}}\"></vaadin-text-area>\n        <vaadin-text-field label=\"Kecamatan\" value=\"{{regObj.muztahik.kecamatan}}\"></vaadin-text-field>\n        <vaadin-text-field label=\"Kabupate/Kota\" value=\"{{regObj.muztahik.kabkot}}\"></vaadin-text-field>\n        <vaadin-text-field label=\"Provinsi\" value=\"{{regObj.muztahik.provinsi}}\"></vaadin-text-field>\n        </vaadin-form-layout>\n      </div>\n\n      <iron-ajax\n          auto \n          id=\"datass\"\n          on-response=\"_handleKategori\"\n          on-error=\"_errorKategori\">\n      </iron-ajax>\n      <iron-ajax \n          id=\"postData\"\n          headers='{\"Access-Control-Allow-Origin\": \"*\" }'\n          handle-as=\"json\"\n          method=\"POST\"\n          on-response=\"_handleMuztahik\"\n          on-error=\"_handleMuztahikError\"\n          Content-Type=\"application/json\"\n          debounce-duration=\"300\"></iron-ajax>\n      </iron-ajax>\n      <iron-ajax \n          id=\"deleteData\"\n          headers='{\"Access-Control-Allow-Origin\": \"*\" }'\n          handle-as=\"json\"\n          method=\"DELETE\"\n          on-response=\"_handleMuztahikDelete\"\n          on-error=\"_handleMuztahikDeleteError\"\n          Content-Type=\"application/json\"\n          debounce-duration=\"300\"></iron-ajax>\n      </iron-ajax>\n\n\n      <iron-ajax\n          auto \n          id=\"managerDPP\"\n          headers='{\"Access-Control-Allow-Origin\": \"*\" }'\n          handle-as=\"json\"\n          method=\"GET\"\n          on-response=\"_handleManager\"\n          on-error=\"_errorManager\"\n          Content-Type=\"application/json\"\n          debounce-duration=\"300\">\n      </iron-ajax>\n      \n    <div class=\"card\">    \n      <h1>Pendaftaran Kategori</h1>\n        <vaadin-form-layout>\n        <vaadin-select value=\"{{selectedKategori}}\" colspan=\"2\">\n          <template>\n            <vaadin-list-box>\n            <dom-repeat items=\"{{Kategori}}\">\n            <template>\n              <vaadin-item label=\"{{item.Value}}\" value=\"{{item}}\">{{item.Value}}</vaadin-item>\n            </template>\n            </dom-repeat>\n            </vaadin-list-box>\n          </template>\n        </vaadin-select>\n        </vaadin-form-layout>    \n        <div class=\"wrap\">\n          <iron-pages selected=\"[[selectedKategori.Kode]]\"  attr-for-selected=\"name\">\n            <bmm-kategori-ksm name=\"Ksm\" subKategori=\"{{subkategori}}\"  user=\"{{User}}\"></bmm-kategori-ksm>\n            <bmm-kategori-rbm name=\"Rbm\" subKategori=\"{{subkategori}}\" user=\"{{User}}\"></bmm-kategori-rbm>\n            <bmm-kategori-paud name=\"Paud\" subKategori=\"{{subkategori}}\" user=\"{{User}}\"></bmm-kategori-paud>\n            <bmm-kategori-kafala name=\"Kafala\" subKategori=\"{{subkategori}}\" user=\"{{User}}\"></bmm-kategori-kafala>\n            <bmm-kategori-jsm name=\"Jsm\" subKategori=\"{{subkategori}}\" user=\"{{User}}\"></bmm-kategori-jsm>\n            <bmm-kategori-dzm name=\"Dzm\" subKategori=\"{{subkategori}}\" user=\"{{User}}\"></bmm-kategori-dzm>\n            <bmm-kategori-bsu name=\"Bsu\" subKategori=\"{{subkategori}}\" user=\"{{User}}\"></bmm-kategori-bsu>\n            <bmm-kategori-br name=\"Br\" subKategori=\"{{subkategori}}\" user=\"{{User}}\"></bmm-kategori-br>\n            <bmm-kategori-btm name=\"Btm\" subKategori=\"{{subkategori}}\" user=\"{{User}}\"></bmm-kategori-btm>\n            <bmm-kategori-bsm name=\"Bsm\" subKategori=\"{{subkategori}}\" user=\"{{User}}\"></bmm-kategori-bsm>\n            <bmm-kategori-bcm name=\"Bcm\" subKategori=\"{{subkategori}}\" user=\"{{User}}\"></bmm-kategori-bcm>\n            <bmm-kategori-asm name=\"Asm\" subKategori=\"{{subkategori}}\" user=\"{{User}}\"></bmm-kategori-asm>\n          </iron-pages>\n        </div> \n\n      <iron-localstorage name=\"register-data\" value=\"{{regObj}}\"></iron-localstorage>\n      <paper-button  raised class=\"indigo\" on-click=\"sendData\" >Registrasi</paper-button> \n      </div>\n    "]);_templateObject_89544140da2b11e9886ab5694315db4a=function _templateObject_89544140da2b11e9886ab5694315db4a(){return data};return data}var MuztahikAdd=function(_PolymerElement){babelHelpers.inherits(MuztahikAdd,_PolymerElement);function MuztahikAdd(){babelHelpers.classCallCheck(this,MuztahikAdd);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(MuztahikAdd).apply(this,arguments))}babelHelpers.createClass(MuztahikAdd,[{key:"_routePageChanged",value:function _routePageChanged(page){this.$.datass.url="change";this.$.datass.url=MyAppGlobals.apiPath+"/api/kategori";this.$.datass.headers.authorization=this.storedUser.access_token;this.$.managerDPP.url=MyAppGlobals.apiPath+"/api/users?role=3&role2=4&role3=9";this.$.managerDPP.headers.authorization=this.storedUser.access_token}},{key:"_handleKategori",value:function _handleKategori(e){var response=e.detail.response;this.Kategori=response.data;var data={muztahik:{},kategoris:{},persetujuan:{},tanggalProposal:this.formatDate(new Date)};this.regObj=data}},{key:"_errorKategori",value:function _errorKategori(e){console.log(e)}},{key:"_kategoriSelected",value:function _kategoriSelected(e){this.subkategori=e.sub;switch(e.Kode){case"Ksm":new Promise(function(res,rej){return _require.default(["../bmm-kategori/ksm.js"],res,rej)}).then(function(bundle){return bundle&&bundle.$ksm||{}});break;case"Rbm":new Promise(function(res,rej){return _require.default(["../bmm-kategori/rbm.js"],res,rej)}).then(function(bundle){return bundle&&bundle.$rbm||{}});break;case"Paud":new Promise(function(res,rej){return _require.default(["../bmm-kategori/paud.js"],res,rej)}).then(function(bundle){return bundle&&bundle.$paud||{}});break;case"Kafala":new Promise(function(res,rej){return _require.default(["../bmm-kategori/kafala.js"],res,rej)}).then(function(bundle){return bundle&&bundle.$kafala||{}});break;case"Jsm":new Promise(function(res,rej){return _require.default(["../bmm-kategori/jsm.js"],res,rej)}).then(function(bundle){return bundle&&bundle.$jsm||{}});break;case"Dzm":new Promise(function(res,rej){return _require.default(["../bmm-kategori/dzm.js"],res,rej)}).then(function(bundle){return bundle&&bundle.$dzm||{}});break;case"Bsu":new Promise(function(res,rej){return _require.default(["../bmm-kategori/bsu.js"],res,rej)}).then(function(bundle){return bundle&&bundle.$bsu||{}});break;case"Br":new Promise(function(res,rej){return _require.default(["../bmm-kategori/br.js"],res,rej)}).then(function(bundle){return bundle&&bundle.$br||{}});break;case"Btm":new Promise(function(res,rej){return _require.default(["../bmm-kategori/btm.js"],res,rej)}).then(function(bundle){return bundle&&bundle.$btm||{}});break;case"Bsm":new Promise(function(res,rej){return _require.default(["../bmm-kategori/bsm.js"],res,rej)}).then(function(bundle){return bundle&&bundle.$bsm||{}});break;case"Bcm":new Promise(function(res,rej){return _require.default(["../bmm-kategori/bcm.js"],res,rej)}).then(function(bundle){return bundle&&bundle.$bcm||{}});break;case"Asm":new Promise(function(res,rej){return _require.default(["../bmm-kategori/asm.js"],res,rej)}).then(function(bundle){return bundle&&bundle.$asm||{}});break;case"view404":new Promise(function(res,rej){return _require.default(["../my-view404.js"],res,rej)}).then(function(bundle){return bundle&&bundle.$myView404||{}});break;}}},{key:"sendData",value:function sendData(){if("undefined"==typeof this.selectedKategori.KodeP){this.toast="Terjadi Masalah : Kategori Belum Dipilih";return}else if("undefined"==typeof this.regObj.persetujuan.manager_id||"undefined"==typeof this.regObj.persetujuan.kadiv_id){this.toast="Terjadi Masalah : Manager ID atau Kadiv ID belum terisi";return}this.$.postData.url=MyAppGlobals.apiPath+"/api/muztahik";this.$.postData.headers.authorization=this.storedUser.access_token;this.$.postData.body=this.regObj.muztahik;this.$.postData.generateRequest()}},{key:"_handleMuztahik",value:function _handleMuztahik(e){var id=e.detail.response.Data.InsertedID;switch(this.$.postData.url){case MyAppGlobals.apiPath+"/api/muztahik":if(id){this.resID=id;this.$.postData.url=MyAppGlobals.apiPath+"/api/pendaftaran";this.$.postData.headers.authorization=this.storedUser.access_token;this.$.postData.body={muztahik_id:id,kategori:this.selectedKategori.KodeP,kategoris:this.regObj.kategoris,persetujuan:{Proposal:1,manager_id:this.regObj.persetujuan.manager_id,kadiv_id:this.regObj.persetujuan.kadiv_id,tanggal_disposisi:new Date().toISOString()},judul_proposal:this.regObj.judul_proposal,tanggalProposal:this.regObj.tanggalProposal};this.$.postData.generateRequest()}break;case MyAppGlobals.apiPath+"/api/pendaftaran":if(id){var data={muztahik:{},kategoris:{}};this.regObj=data;this.selectedKategori={};this.toast=e.detail.response.Message;this.set("route.path","/panel/muztahik")}}}},{key:"_handleMuztahikError",value:function _handleMuztahikError(e){if(401==e.detail.request.xhr.status){this.error=e.detail.request.xhr.status}else{this.toast=e.detail.request.xhr.response.Message;if(""!=this.resID){this.$.deleteData.url=MyAppGlobals.apiPath+"/api/muztahik/"+this.resID;this.$.deleteData.headers.authorization=this.storedUser.access_token;this.$.deleteData.generateRequest()}}}},{key:"_handleMuztahikDelete",value:function _handleMuztahikDelete(e){}},{key:"_handleMuztahikDeleteError",value:function _handleMuztahikDeleteError(e){}},{key:"formatDate",value:function formatDate(date){var dd=date.getDate(),mm=date.getMonth()+1,yyyy=date.getFullYear();return yyyy+"-"+mm+"-"+dd}},{key:"_handleManager",value:function _handleManager(e){var response=e.detail.response;this.User=response.data}},{key:"_errorManager",value:function _errorManager(e){console.log(e)}}],[{key:"template",get:function get(){return(0,_myApp.html)(_templateObject_89544140da2b11e9886ab5694315db4a())}},{key:"properties",get:function get(){return{Kategori:{type:Array,notify:!0,value:function value(){return[]}},selectedKategori:{type:Object,notify:!0},storedUser:{type:Object,notify:!0},regObj:{type:Object,notify:!0,value:function value(){return{proposal:1}}},nama:{type:String,notify:!0},subkategori:{type:Array,notify:!0,value:function value(){return[]}},resID:String,User:{type:Array,notify:!0,value:function value(){return[]}}}}},{key:"observers",get:function get(){return["_kategoriSelected(selectedKategori)","_routePageChanged(routeData.*)"]}}]);return MuztahikAdd}(_myApp.PolymerElement);window.customElements.define("bmm-muztahik-add",MuztahikAdd)});