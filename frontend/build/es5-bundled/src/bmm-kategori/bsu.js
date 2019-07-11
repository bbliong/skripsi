define(["../my-app.js"],function(_myApp){"use strict";function _templateObject_3beeeb80a3c111e9ab8d3bc52ff0ef99(){var data=babelHelpers.taggedTemplateLiteral(["\n      <style include=\"shared-styles\">\n        :host {\n          display: block;\n\n          padding: 10px;\n        }\n      </style>\n      <global-variable key=\"Register\" value=\"{{regObj}}\"></global-variable>\n      <global-variable key=\"LoginCred\" value=\"{{ storedUser }}\"></global-variable>\n\n       <div class=\"wrap\">\n          <vaadin-form-layout>\n          <vaadin-date-picker label=\"Tanggal Proposal\" placeholder=\"Pilih tanggal\" id=\"tanggal_proposal\" value=\"[[regObj.tanggalProposal]]\"  colspan=\"2\"></vaadin-date-picker>\n          <vaadin-text-field label=\"Judul Proposal\" value=\"{{regObj.judul_proposal}}\" colspan=\"2\"></vaadin-text-field>\n          <vaadin-select  value=\"{{regObj.kategoris.kategori}}\" label=\"Kategori Pendaftaran\">\n            <template>\n              <vaadin-list-box>\n                <vaadin-item value=\"Lembaga\">Lembaga</vaadin-item>\n                <vaadin-item value=\"Perorangan\">Perorangan</vaadin-item>\n              </vaadin-list-box>\n            </template>\n          </vaadin-select>\n\n    \n          <vaadin-select label=\"Asnaf\" value=\"{{regObj.kategoris.asnaf}}\">\n                <template>\n                  <vaadin-list-box>\n                    <vaadin-item value=\"Fakir\">Fakir</vaadin-item>\n                    <vaadin-item value=\"Miskin\">Miskin</vaadin-item>\n                    <vaadin-item value=\"Amil\">Amil</vaadin-item>\n                    <vaadin-item value=\"Mu'allaf\">Mu'allaf</vaadin-item>\n                    <vaadin-item value=\"Gharimin\">Gharimin</vaadin-item>\n                    <vaadin-item value=\"Fisabilillah\">Fisabilillah</vaadin-item>\n                    <vaadin-item value=\"Ibnus Sabil\">Ibnus Sabil</vaadin-item>\n                  </vaadin-list-box>\n                </template>\n              </vaadin-select>\n              <vaadin-select value=\"{{ regObj.kategoris.sub_program }}\" label=\"sub-kategori\">\n                <template>\n                  <vaadin-list-box>\n                  <dom-repeat items=\"{{subkategori}}\">\n                    <template>\n                      <vaadin-item label=\"{{item.nama}}\" value=\"{{item.kode}}\">{{item.nama}}</vaadin-item>\n                    </template>\n                  </dom-repeat>\n                  </vaadin-list-box>\n                </template>\n              </vaadin-select>\n              <vaadin-select value=\"{{ regObj.persetujuan.manager_id }}\" label=\"Manager tertuju\">\n                <template>\n                  <vaadin-list-box>\n                  <dom-repeat items=\"{{user}}\">\n                    <template>\n                      <vaadin-item label=\"{{item.nama}}\" value=\"{{item.Id}}\">{{item.nama}}</vaadin-item>\n                    </template>\n                  </dom-repeat>\n                  </vaadin-list-box>\n                </template>\n              </vaadin-select>\n              <vaadin-number-field label=\"Jumlah Muztahik\" value=\"{{regObj.kategoris.jumlah_muztahik}}\"></vaadin-number-field>\n              <vaadin-number-field label=\"Jumlah Bantuan\" value=\"{{regObj.kategoris.jumlah_bantuan}}\"></vaadin-number-field>\n              <vaadin-text-field label=\"Jenis Dana\" value=\"{{regObj.kategoris.jenis_dana}}\"></vaadin-text-field>\n              <vaadin-number-field label=\"Pendapatan Perhari\" value=\"{{regObj.kategoris.pendapatan_perhari}}\"></vaadin-number-field>\n              <vaadin-text-field label=\"Jenis Produk\" value=\"{{regObj.kategoris.jenis_produk}}\"></vaadin-text-field>\n              <vaadin-text-field label=\"Aset\" value=\"{{regObj.kategoris.aset}}\"></vaadin-text-field>\n          </vaadin-form-layout>\n      </div>\n    "]);_templateObject_3beeeb80a3c111e9ab8d3bc52ff0ef99=function _templateObject_3beeeb80a3c111e9ab8d3bc52ff0ef99(){return data};return data}var Bsu=function(_PolymerElement){babelHelpers.inherits(Bsu,_PolymerElement);function Bsu(){babelHelpers.classCallCheck(this,Bsu);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(Bsu).apply(this,arguments))}babelHelpers.createClass(Bsu,[{key:"_changeStoI",value:function _changeStoI(f){var array=f.path.split(".");console.log(array);if("pendapatan_perhari"==array[2]||"jumlah_muztahik"==array[2]||"jumlah_bantuan"==array[2]){f.base[array[2]]=parseInt(f.value)}}},{key:"_changeDateProposal",value:function _changeDateProposal(f){if(""!==f&&"undefined"!==typeof f){var date=this.$.tanggal_proposal,that=this;date.value=this.formatDate(new Date(f));date.addEventListener("change",function(){if(""!==date.value){that.regObj.tanggalProposal=new Date(date.value).toISOString()}})}}},{key:"formatDate",value:function formatDate(date){var dd=date.getDate(),mm=date.getMonth()+1,yyyy=date.getFullYear();return yyyy+"-"+mm+"-"+dd}}],[{key:"template",get:function get(){return(0,_myApp.html)(_templateObject_3beeeb80a3c111e9ab8d3bc52ff0ef99())}},{key:"properties",get:function get(){return{subKategori:{type:Array,notify:!0},regObj:{type:Object,notify:!0,value:function value(){return{judul_proposal:"-",kategoris:{jumlah_bantuan:"0",jumlah_muztahik:"0",pendapatan_perhari:"0",jenis_produk:"-",jenis_dana:"-",aset:"-"},persetujuan:{manager_id:"-"},tanggalProposal:this.formatDate(new Date)}}}}}},{key:"observers",get:function get(){return["_changeStoI(regObj.kategoris.*)","_changeDateProposal(regObj.tanggalProposal)"]}}]);return Bsu}(_myApp.PolymerElement);window.customElements.define("bmm-kategori-bsu",Bsu)});