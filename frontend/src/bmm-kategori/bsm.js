define(["../my-app.js"],function(_myApp){"use strict";class Bsm extends _myApp.PolymerElement{static get template(){return _myApp.html`
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
              <vaadin-select value="{{ regObj.kategoris.sub_program }}" colspan="2" label="sub-kategori">
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
              <vaadin-date-picker label="Tanggal Lahir" placeholder="Pilih tanggal" id="tanggal_lahir" value="[[regObj.kategoris.tanggal_lahir]]"></vaadin-date-picker>            
              <vaadin-text-field label="Tempat Lahir" value="{{regObj.kategoris.tempat}}"></vaadin-text-field>
              <vaadin-text-field label="Mitra (Pesantren/Sekolah/Kampus)" value="{{regObj.kategoris.mitra}}"></vaadin-text-field>
              <vaadin-text-field label="Karya" value="{{regObj.kategoris.karya}}"></vaadin-text-field>
              <vaadin-text-field label="Alamat" value="{{regObj.kategoris.alamat}}"></vaadin-text-field>
              <vaadin-text-field label="Kelas" value="{{regObj.kategoris.semester}}"></vaadin-text-field>
              <vaadin-text-field label="Jumlah Hafalan" value="{{regObj.kategoris.jumlah_hafalan}}"></vaadin-text-field>
              <vaadin-text-field label="Jenis Dana" value="{{regObj.kategoris.jenis_dana}}"></vaadin-text-field>
              <vaadin-number-field label="Jumlah Bantuan" value="{{regObj.kategoris.jumlah_bantuan}}"></vaadin-number-field>
        </vaadin-form-layout>
      </div>
    `}static get properties(){return{subKategori:{type:Array,notify:!0,value:function(){return{judul_proposal:"-",kategoris:{tempat:"-",mitra:"-",alamat:"-",karya:"-",jumlah_hafalan:"-",jenis_dana:"-",jumlah_bantuan:"0",tanggal_lahir:"0000-00-00",semester:"-"},tanggalProposal:this.formatDate(new Date)}}}}}static get observers(){return["_changeStoI(regObj.kategoris.*)","_changeDateProposal(regObj.tanggalProposal)","_changeDateTgl(regObj.kategoris.tanggal_lahir)"]}_changeStoI(f){var array=f.path.split(".");console.log(array);if("jumlah_bantuan"==array[2]){f.base[array[2]]=parseInt(f.value)}}_changeDateProposal(f){if(""!==f&&"undefined"!==typeof f){var date=this.$.tanggal_proposal,that=this;date.value=this.formatDate(new Date(f));date.addEventListener("change",function(){if(""!==date.value){that.regObj.tanggalProposal=new Date(date.value).toISOString()}})}}_changeDateTgl(f){if(""!==f){var date=this.$.tanggal_lahir,that=this;date.value=this.formatDate(new Date(f));date.addEventListener("change",function(){if(""!==date.value){that.regObj.kategoris.tanggal_lahir=new Date(date.value).toISOString()}})}}formatDate(date){var dd=date.getDate(),mm=date.getMonth()+1,yyyy=date.getFullYear();return yyyy+"-"+mm+"-"+dd}}window.customElements.define("bmm-kategori-bsm",Bsm)});