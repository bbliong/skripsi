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

          padding: 10px;
        }

       
         /* Phone and tablet */
          #chartBMM {
            height: 300px;
            width: 300px;
          }
          /* Desktop */
          @media screen and (min-width: 1024px) {
            #chartBMM {
              width: 600px;
            }
          }

          #main {
          display :none;
        }

      </style>
       <bmm-loader></bmm-loader>
      <div class="card" id="main">
        <h1> Grafik Proposal Masuk Baitulmaal Muamalat</h1>
        <paper-button raised class="indigo" on-click="refreshCount">Refresh</paper-button>
        <google-chart 
          id="chartBMM"
          type="pie"
          cols='[{"label": "Kategori", "type": "string"},{"label": "Jumlah", "type": "number"}]'
          rows='{{Kategori}}'
          options='{"vAxis": {"minValue" : 0, "maxValue": 10},
          "chartArea": {"width": "100%"},
          "selectionMode": "multiple"}'
         >
        </google-chart>

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
      
      </div>
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
   
    var kategori = []
    for (var key in  data){
      kategori.push([key, data[key]])
    }
    this.Kategori = kategori
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
    this.$.chartBMM.redraw(); 
  }

  handleError(e){
    this.error = e.detail.request.xhr.status
  }
}

window.customElements.define('bmm-beranda', Beranda);
