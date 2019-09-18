define(["../my-app.js"],function(_myApp){"use strict";function _templateObject_8a3b9400da2b11e9886ab5694315db4a(){var data=babelHelpers.taggedTemplateLiteral(["\n      <style include=\"shared-styles\">\n        :host {\n          display: block;\n\n          padding: 10px;\n        }\n      </style>\n      <global-variable key=\"Register\" value=\"{{regObj}}\"></global-variable>\n      <global-variable key=\"LoginCred\" value=\"{{ storedUser }}\"></global-variable>\n\n       <div class=\"wrap\">\n          <vaadin-form-layout>\n              <vaadin-date-picker label=\"Tanggal Proposal\" placeholder=\"Pilih tanggal\" id=\"tanggal_proposal\" value=\"[[regObj.tanggalProposal]]\"  colspan=\"2\"></vaadin-date-picker>\n              <vaadin-text-field label=\"Judul Proposal\" value=\"{{regObj.judul_proposal}}\" colspan=\"2\"></vaadin-text-field>\n              <vaadin-select  value=\"{{regObj.kategoris.kategori}}\" label=\"Kategori Pendaftaran\">\n                <template>\n                  <vaadin-list-box>\n                    <vaadin-item value=\"Lembaga\">Lembaga</vaadin-item>\n                    <vaadin-item value=\"Perorangan\">Perorangan</vaadin-item>\n                  </vaadin-list-box>\n                </template>\n              </vaadin-select>\n              <vaadin-select label=\"Asnaf\" value=\"{{regObj.kategoris.asnaf}}\">\n                <template>\n                  <vaadin-list-box>\n                    <vaadin-item value=\"Fakir\">Fakir</vaadin-item>\n                    <vaadin-item value=\"Miskin\">Miskin</vaadin-item>\n                    <vaadin-item value=\"Amil\">Amil</vaadin-item>\n                    <vaadin-item value=\"Mu'allaf\">Mu'allaf</vaadin-item>\n                    <vaadin-item value=\"Gharimin\">Gharimin</vaadin-item>\n                    <vaadin-item value=\"Fisabilillah\">Fisabilillah</vaadin-item>\n                    <vaadin-item value=\"Ibnus Sabil\">Ibnus Sabil</vaadin-item>\n                  </vaadin-list-box>\n                </template>\n              </vaadin-select>\n              <!-- <vaadin-text-field label=\"Sub Program\" value=\"{{regObj.kategoris.sub_program}}\"></vaadin-text-field> -->\n              <vaadin-select value=\"{{ regObj.kategoris.sub_program }}\" colspan=\"2\" label=\"sub-kategori\">\n                <template>\n                  <vaadin-list-box>\n                  <dom-repeat items=\"{{subkategori}}\">\n                    <template>\n                      <vaadin-item label=\"{{item.nama}}\" value=\"{{item.kode}}\">{{item.nama}}</vaadin-item>\n                    </template>\n                  </dom-repeat>\n                  </vaadin-list-box>\n                </template>\n              </vaadin-select>\n              <vaadin-select value=\"{{ regObj.persetujuan.manager_id }}\" label=\"Manager tertuju\">\n                <template>\n                  <vaadin-list-box>\n                  <dom-repeat items=\"{{cekUser(user, 3 )}}\">\n                    <template>\n                      <vaadin-item label=\"{{item.nama}}\" value=\"{{item.Id}}\">{{item.nama}}</vaadin-item>\n                    </template>\n                  </dom-repeat>\n                  </vaadin-list-box>\n                </template>\n              </vaadin-select>\n\n              \n              <vaadin-select value=\"{{ regObj.persetujuan.kadiv_id }}\" label=\"Kadiv tertuju\">\n                <template>\n                  <vaadin-list-box>\n                  <dom-repeat items=\"{{cekUser(user, 4,9 )}}\">\n                    <template>\n                      <vaadin-item label=\"{{item.nama}}\" value=\"{{item.Id}}\">{{item.nama}}</vaadin-item>\n                    </template>\n                  </dom-repeat>\n                  </vaadin-list-box>\n                </template>\n              </vaadin-select>\n              <vaadin-number-field label=\"Jumlah Bantuan *wajib disi (isi default data dengan 0)\" value=\"{{regObj.kategoris.jumlah_bantuan}}\"></vaadin-number-field>\n              \n          </vaadin-form-layout>\n      </div>\n    "]);_templateObject_8a3b9400da2b11e9886ab5694315db4a=function _templateObject_8a3b9400da2b11e9886ab5694315db4a(){return data};return data}var Ksm=function(_PolymerElement){babelHelpers.inherits(Ksm,_PolymerElement);function Ksm(){babelHelpers.classCallCheck(this,Ksm);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(Ksm).apply(this,arguments))}babelHelpers.createClass(Ksm,[{key:"_changeStoI",value:function _changeStoI(f){var array=f.path.split(".");if("jumlah_bantuan"==array[2]){f.base[array[2]]=parseInt(f.value)}}},{key:"_changeDate",value:function _changeDate(f){if(""!==f&&"undefined"!==typeof f){var date=this.$.tanggal_proposal,that=this;date.value=this.formatDate(new Date(f));if(""!==date.value){that.regObj.tanggalProposal=new Date(date.value).toISOString()}date.addEventListener("change",function(){if(""!==date.value){that.regObj.tanggalProposal=new Date(date.value).toISOString()}})}}},{key:"formatDate",value:function formatDate(date){var dd=date.getDate(),mm=date.getMonth()+1,yyyy=date.getFullYear();return yyyy+"-"+mm+"-"+dd}},{key:"cekUser",value:function cekUser(user,role){var role2=2<arguments.length&&arguments[2]!==void 0?arguments[2]:0;return user.filter(function(e){if(0!==role2){return e.role==role||e.role==role2}return e.role==role})}}],[{key:"template",get:function get(){return(0,_myApp.html)(_templateObject_8a3b9400da2b11e9886ab5694315db4a())}},{key:"properties",get:function get(){return{subKategori:{type:Array,notify:!0},user:{type:Array,notify:!0},regObj:{type:Object,notify:!0,value:function value(){return{judul_proposal:"-",kategoris:{jumlah_bantuan:"0"},persetujuan:{manager_id:"-",kadiv_id:"-"},tanggalProposal:"000-00-00"}}}}}},{key:"observers",get:function get(){return["_changeStoI(regObj.kategoris.*)","_changeDate(regObj.tanggalProposal)"]}}]);return Ksm}(_myApp.PolymerElement);window.customElements.define("bmm-kategori-ksm",Ksm)});