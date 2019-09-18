define(["../my-app.js"],function(_myApp){"use strict";class Br extends _myApp.PolymerElement{static get template(){return _myApp.html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>
      <global-variable key="Register" value="{{regObj}}"></global-variable>
      <global-variable key="LoginCred" value="{{ storedUser }}"></global-variable>

       <div class="wrap">
          <vaadin-form-layout>
          <vaadin-date-picker label="Tanggal Proposal" placeholder="Pilih tanggal" id="tanggal_proposal" value="[[regObj.tanggalProposal]]"  colspan="2"></vaadin-date-picker>
          <vaadin-text-field label="Judul Proposal" value="{{regObj.judul_proposal}}" colspan="2"></vaadin-text-field>
          <vaadin-select  value="{{regObj.kategoris.kategori}}" label="Kategori Pendaftaran">
            <template>
              <vaadin-list-box>
                <vaadin-item value="Lembaga">Lembaga</vaadin-item>
                <vaadin-item value="Perorangan">Perorangan</vaadin-item>
              </vaadin-list-box>
            </template>
          </vaadin-select>

          <vaadin-select label="Asnaf" value="{{regObj.kategoris.asnaf}}">
                <template>
                  <vaadin-list-box>
                    <vaadin-item value="Fakir">Fakir</vaadin-item>
                    <vaadin-item value="Miskin">Miskin</vaadin-item>
                    <vaadin-item value="Amil">Amil</vaadin-item>
                    <vaadin-item value="Mu'allaf">Mu'allaf</vaadin-item>
                    <vaadin-item value="Gharimin">Gharimin</vaadin-item>
                    <vaadin-item value="Fisabilillah">Fisabilillah</vaadin-item>
                    <vaadin-item value="Ibnus Sabil">Ibnus Sabil</vaadin-item>
                  </vaadin-list-box>
                </template>
              </vaadin-select>
             
              <vaadin-select value="{{ regObj.kategoris.sub_program }}" label="sub-kategori">
                <template>
                  <vaadin-list-box>
                  <dom-repeat items="{{subkategori}}">
                    <template>
                      <vaadin-item label="{{item.nama}}" value="{{item.kode}}">{{item.nama}}</vaadin-item>
                    </template>
                  </dom-repeat>
                  </vaadin-list-box>
                </template>
              </vaadin-select>
              <vaadin-select value="{{ regObj.persetujuan.manager_id }}" label="Manager tertuju">
                <template>
                  <vaadin-list-box>
                  <dom-repeat items="{{cekUser(user, 3 )}}">
                    <template>
                      <vaadin-item label="{{item.nama}}" value="{{item.Id}}">{{item.nama}}</vaadin-item>
                    </template>
                  </dom-repeat>
                  </vaadin-list-box>
                </template>
              </vaadin-select>

              
              <vaadin-select value="{{ regObj.persetujuan.kadiv_id }}" label="Kadiv tertuju">
                <template>
                  <vaadin-list-box>
                  <dom-repeat items="{{cekUser(user, 4,9 )}}">
                    <template>
                      <vaadin-item label="{{item.nama}}" value="{{item.Id}}">{{item.nama}}</vaadin-item>
                    </template>
                  </dom-repeat>
                  </vaadin-list-box>
                </template>
              </vaadin-select>

              <vaadin-date-picker label="Tanggal Respon Bencana" placeholder="Pilih tanggal" id="tanggal_bencana" value="[[regObj.kategoris.tanggal_respon_bencana]]"  colspan="2"></vaadin-date-picker>

              <vaadin-text-field label="Skala Bencana" value="{{regObj.kategoris.skala_bencana}}"></vaadin-text-field>

              <vaadin-number-field label="Jumlah Bantuan" value="{{regObj.kategoris.jumlah_bantuan}}"></vaadin-number-field>
              <vaadin-text-field label="Tahapan Bencana" value="{{regObj.kategoris.tahapan_bencana}}"></vaadin-text-field>
          </vaadin-form-layout>
      </div>
    `}static get properties(){return{subKategori:{type:Array,notify:!0},regObj:{type:Object,notify:!0,value:function(){return{judul_proposal:"-",kategoris:{skala_bencana:"-",tahapan_bencana:"-",jumlah_bantuan:"0",tanggal_respon_bencana:"0000-00-00"},persetujuan:{manager_id:"-",kadiv_id:"-"},tanggalProposal:this.formatDate(new Date)}}}}}static get observers(){return["_changeStoI(regObj.kategoris.*)","_changeDateProposal(regObj.tanggalProposal)","_changeDateTglBencana(regObj.kategoris.tanggal_respon_bencana)"]}_changeStoI(f){var array=f.path.split(".");if("jumlah_bantuan"==array[2]){f.base[array[2]]=parseInt(f.value)}}_changeDateProposal(f){if(""!==f&&"undefined"!==typeof f){var date=this.$.tanggal_proposal,that=this;date.value=this.formatDate(new Date(f));if(""!==date.value){that.regObj.tanggalProposal=new Date(date.value).toISOString()}date.addEventListener("change",function(){if(""!==date.value){that.regObj.tanggalProposal=new Date(date.value).toISOString()}})}}_changeDateTglBencana(f){if(""!==f){var date=this.$.tanggal_bencana,that=this;date.value=this.formatDate(new Date(f));date.addEventListener("change",function(){if(""!==date.value){that.regObj.kategoris.tanggal_respon_bencana=new Date(date.value).toISOString()}})}}formatDate(date){var dd=date.getDate(),mm=date.getMonth()+1,yyyy=date.getFullYear();return yyyy+"-"+mm+"-"+dd}cekUser(user,role,role2=0){return user.filter(function(e){if(0!==role2){return e.role==role||e.role==role2}return e.role==role})}}window.customElements.define("bmm-kategori-br",Br)});