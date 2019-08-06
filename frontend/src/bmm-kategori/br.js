/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../shared-styles.js';

//Other
import 'global-variable-migration/global-data.js';
import 'global-variable-migration/global-variable.js'

//Vaadin
import '@vaadin/vaadin-item/vaadin-item.js';
import '@vaadin/vaadin-select/vaadin-select.js';
import '@vaadin/vaadin-list-box/vaadin-list-box.js';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@vaadin/vaadin-date-picker/vaadin-date-picker.js';
import '@vaadin/vaadin-form-layout/vaadin-form-layout.js';
import '@vaadin/vaadin-text-field/vaadin-number-field.js';

class Br extends PolymerElement {
  static get template() {
    return html`
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
    `;
  }

  static get properties(){
    return{
      subKategori : {
        type : Array,
        notify : true
      },
      regObj  : {
        type : Object,
        notify : true,
        value : function(){
          return {
            "judul_proposal" : "-",
                "kategoris" : {
                  "skala_bencana" : "-",
                  "tahapan_bencana" : "-",
                  "jumlah_bantuan" : "0",
                  "tanggal_respon_bencana" : "0000-00-00",
            },
            "persetujuan" : {
              "manager_id" : "-",
              "kadiv_id" : "-",
            },
            "tanggalProposal" : this.formatDate(new Date()),
          }
        }
      }
  }
}
  static get observers() {
    return [
      '_changeStoI(regObj.kategoris.*)',
      '_changeDateProposal(regObj.tanggalProposal)',
      '_changeDateTglBencana(regObj.kategoris.tanggal_respon_bencana)',
    
    ];
  }

    // Fungsi convert ke int 
    _changeStoI(f){
      var array = f.path.split(".");
      if (array[2] == "jumlah_bantuan"){
        f.base[array[2]] = parseInt(f.value)
      }
    }

    _changeDateProposal(f){
      if (f !== "" && typeof f !== "undefined" ){
        var date = this.$.tanggal_proposal
        var that =this
        date.value = this.formatDate(new Date(f))

        if(date.value !== ""){
          that.regObj.tanggalProposal = new Date(date.value).toISOString()
        }

        date.addEventListener("change", function(){
          if(date.value !== ""){

            that.regObj.tanggalProposal = new Date(date.value).toISOString()
          }
        })
      }
    }

    _changeDateTglBencana(f){
      if (f !== ""){
        var date = this.$.tanggal_bencana
        var that =this
        date.value = this.formatDate(new Date(f))
        date.addEventListener("change", function(){
          if(date.value !== ""){
            that.regObj.kategoris.tanggal_respon_bencana = new Date(date.value).toISOString()
          }
        })
      }
    }

    formatDate(date){
      var dd = date.getDate();
      var mm = date.getMonth()+1; 
      var yyyy = date.getFullYear();
      return yyyy + "-" + mm +  "-"+dd
    }

    cekUser(user, role, role2 =0){
      return user.filter(function(e){
        if (role2 !== 0){
          return e.role == role  || e.role == role2
        }
        return  e.role == role
      })
    }
    
}

window.customElements.define('bmm-kategori-br', Br);
