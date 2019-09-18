/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

 // Behavior
import {mixinBehaviors} from '@polymer/polymer/lib/legacy/class.js';
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import {IronResizableBehavior} from '@polymer/iron-resizable-behavior/iron-resizable-behavior.js';
import {NeonAnimationRunnerBehavior} from '@polymer/neon-animation/neon-animation-runner-behavior.js';
import('./../config/loader.js');

// google Component
import '@google-web-components/google-chart/google-chart.js';

// Paper Component
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-button/paper-button.js';

// Iron Component
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/iron-media-query/iron-media-query.js';
import '@polymer/iron-localstorage/iron-localstorage.js';

// Other Component

import 'global-variable-migration/global-variable'

import './../shared-styles.js';


class Beranda extends mixinBehaviors([NeonAnimationRunnerBehavior,IronResizableBehavior ], PolymerElement) {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
        }

       
         /* Phone and tablet */
          #chartBMM1 {
            height: 300px;
            width: 300px;
          }
          #chartBMM2 {
            height: 300px;
            width: 300px;
          }

      
          .bar1 {
              display: blocks;
              margin-top  : -50px;
            }
          
          .header{
            background: #5C55BF;
            color: white;
            padding: 50px;
            margin-top: -10px;
          }

          .header > h1 {
            color : #fff;
            display : inline;
          }

          /* Desktop */
          @media screen and (min-width: 1024px) {
            #chartBMM1 {
              width: 500px;
            }
            #chartBMM2 {
              width: 100%;
            }

           .bar1 {
              display: flex;
            }

            .bar1 > .card {
                display: inline-block;
                flex: 1;
            }

            .bar1 > .card:nth-child(1){
              width : 500px;
            }

            .bar1 > .card:nth-child(2){
              width : 400px;
            }

          }

          #main {
          display :none;
        }

        .card {
          box-shadow: 2px 6px 15px 0 rgba(69,65,78,.1);
          -webkit-box-shadow: 2px 6px 15px 0 rgba(69,65,78,.1);
          -moz-box-shadow: 2px 6px 15px 0 rgba(69,65,78,.1);
        }

        .card > span {
          padding: 5px;
          border-radius: 50%;
          border: 1px solid white;
          display: inline;
          right: 2px;
          text-align: right;
          position: absolute;
          right: 10px;
          top: 10px;
          width: 30px;
          height: 30px;
          line-height: 30px;
          text-align: center;
        }

      </style>
     

      <div id="main">
      <bmm-loader></bmm-loader>
        <div class="header">
        <h1> Grafik Proposal Masuk Baitulmaal Muamalat</h1>
        <paper-button raised class="indigo" on-click="refreshCount">Refresh</paper-button>
        </div>  
        <div class="bar1">
        <div class="card" >
          <h3> Proposal per Kategori</h3>
          <google-chart 
            id="chartBMM1"
            type="pie"
            cols='[{"label": "Kategori", "type": "string"},{"label": "Jumlah", "type": "number"}]'
            rows='{{Kategori}}'
            options='{"vAxis": {"minValue" : 0, "maxValue": 20},
            "chartArea": {"width": "100%"},
            "selectionMode": "multiple"}'
          >
          </google-chart>
        </div>
         <div class="card">
            <h3> Data Jumlah </h3>
            <div class="card" style="background : #990099; margin:0;margin-bottom:10px;color:white;position:relative;">
              Data Muztahik 
              <span> {{JumlahMuztahik}} </span>
            </div>  
            <div class="card" style="background : #0099C6; margin:0;margin-bottom:10px;color:white;position:relative;">
              Data Proposal Masuk
              <span> {{JumlahProposal}} </span>
            </div>  
            <div class="card" style="background : #B82E2E; margin:0;margin-bottom:10px;color:white;position:relative;">
              Data  Proposal Sudah Pencairan
              <span> {{JumlahPencairan}} </span>
            </div>          
         </div>
      </div>
        <div class="card">
          <h3>Status Proposal </h3>
          <google-chart 
            id="chartBMM2"
            type="column"
            cols='[{"label": "Kategori", "type": "string"},{"label": "Jumlah", "type": "number"}]'
            rows='{{Graph2}}' >
          </google-chart>
        </div>

      </div>

      


        <iron-ajax
          id="Counts"
          headers='{"Access-Control-Allow-Origin": "*" }'
          handle-as="json"
          method="GET"
          on-response="getCount"
          on-error="handleError"
          Content-Type="application/json"
          debounce-duration="300">
      </iron-ajax>
      <global-variable key="LoginCred" 
           value="{{ storedUser }}">
      </global-variable>
      <global-variable key="error" 
           value="{{ error }}">
      </global-variable>
      <global-data id="globalData">
      </global-data>
      

    `;
  }

  static get properties(){
    return {
     
      Kategori: {
        type: Array,
        notify: true,
        value : function(){
          return [
            ["data",1]
          ]
        }
      },
      Graph2: {
        type: Array,
        notify: true,
        value : function(){
          return [
            ["data",1]
          ]
        }
      },
      JumlahProposal : Number,
      JumlahPencairan : Number,
      JumlahMuztahik : Number,
      data: {
        type: Object,
        notify: true
      },

      options: {
        type: Object,
        notify: true
      },
      // error : Int
      storedUser:{
        type : Object,
        notify : true
      }
      

    }
  }

  // created(){
  //   this._loading(1)
  // }

  _loading(show){
    if(show ==0 ){
     this.shadowRoot.querySelector("#main").style.display = "block"
     var that = this
     setTimeout(function () {
       that.shadowRoot.querySelector("bmm-loader").style.display = "none"
     }, 2000);
    } else { 
       this.shadowRoot.querySelector("#main").style.display = "none"
       this.shadowRoot.querySelector("bmm-loader").style.display = "block"
    }
   }

  static get observers() {
    return [
      'refreshCount(storedUser.*)',
    ];
  }


  getCount(e){
    var data = e.detail.response.data
    var data2 = e.detail.response.data2
    var data3 = e.detail.response.data3
   
    var kategori = []
    for (var key in  data){
      kategori.push([key, data[key]])
    }

    var Graph2 = []
    var index = ["Belum Diverifikasi", "Sudah Diverifikasi", "UPD Sudah Dibuat" , "UPD diperiksa Manager", "UPD Disetujui Kadiv/Direktur", "UPD Tidak disetujui Kadiv/Direktur", "Komite sudah dibentuk", "PPD sudah dibuat", "Pencairan"]

    for(var key in  data2){
        Graph2.push([index[key - 1], data2[key]])
    }
    
  
    this.Kategori = kategori
    this.Graph2 = Graph2
    this.JumlahProposal = data3[0]
    this.JumlahPencairan = data3[1]
    this.JumlahMuztahik = data3[2]

    this._loading(0)
  }

  refreshCount(store){
    var storeData = !store.value ? this.storedUser :  store.value;
    this.$.Counts.url = MyAppGlobals.apiPath +"/api/pendaftarancount";
    this.$.Counts.headers['authorization'] = storeData.access_token;
    this.$.Counts.generateRequest();
  }

  connectedCallback() {
    super.connectedCallback();
    this._loading(1)
    this.addEventListener('iron-resize', this.onIronResize.bind(this));
  }

  onIronResize() {
    this.$.chartBMM1.redraw(); 
    this.$.chartBMM2.redraw(); 
  }

  handleError(e){
    this.error = e.detail.request.xhr.status
  }
}

window.customElements.define('bmm-beranda', Beranda);
