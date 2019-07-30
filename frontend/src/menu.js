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
import '@polymer/iron-selector/iron-selector.js';
import './shared-styles.js';

class Menu extends PolymerElement {
  static get template() {
    return html`
      <style include="custom-css">
        :host {
          display: block;

          padding: 10px;
        }
        a {
          font-size : 14px;
        }
        paper-icon-button {
          width : 35px;
          height  :35px;
        }
      </style>

              <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
               <dom-repeat items="{{SelectedRole}}">
                  <template>
                    <a name="{{item.name}}" href="[[rootPath]]panel/{{item.url}}">   <paper-icon-button icon="{{item.icon}}"></paper-icon-button> {{item.text}}</a>
                  </template>
                </dom-repeat>
            <a name="keluar" on-click="_logout" style="cursor:pointer">   <paper-icon-button icon="exit-to-app"></paper-icon-button> Keluar</a>
        </iron-selector>      
    `;
  }

  static get properties(){
    return {
        page : {
          type : String,
          notify : true
        },
        SelectedRole : {
          type : Array,
          notify : true
        },
         AccessMenu : {
            type : Object,
            value : function(){
              return {
                1 : [
                  {
                    name : "beranda",
                    url : "beranda",
                   icon : "home",
                   text : "Beranda"
                  },
                  {
                  name : "muztahik",
                  url : "muztahik",
                   icon : "face",
                   text : "Muztahik"
                  },
                   {
                     name : "proposal",
                     url : "proposal",
                   icon : "receipt",
                   text : "Proposal"
                  },
                   {
                     name : "laporan",
                     url : "laporan",
                   icon : "book",
                   text : "Laporan"
                  },
                   {
                     name : "pengguna",
                     url : "user",
                   icon : "account-circle",
                   text : "Pengguna",
                  },
                ], 
                2 :[
                  {
                    name : "beranda",
                    url : "beranda",
                   icon : "home",
                   text : "Beranda"
                  },
                   {
                     name : "proposal",
                     url : "proposal",
                   icon : "receipt",
                   text : "Proposal"
                  },
                  {
                    name : "ppd",
                    url : "ppd",
                  icon : "assignment-turned-in",
                  text : "PPD"
                 },
                   {
                     name : "laporan",
                     url : "laporan",
                   icon : "book",
                   text : "Laporan"
                  },
                ], 
                3  :[
                  {
                    name : "beranda",
                    url : "beranda",
                   icon : "home",
                   text : "Beranda"
                  },
                
                   {
                     name : "proposal",
                     url : "proposal",
                   icon : "receipt",
                   text : "Proposal"
                  },
                  {
                    name : "ppd",
                    url : "ppd",
                  icon : "assignment-turned-in",
                  text : "PPD"
                 },
                   {
                     name : "laporan",
                     url : "laporan",
                   icon : "book",
                   text : "Laporan"
                  },
                ], 
                4:[
                  {
                    name : "beranda",
                    url : "beranda",
                   icon : "home",
                   text : "Beranda"
                  },
                  {
                  name : "muztahik",
                  url : "muztahik",
                   icon : "face",
                   text : "Muztahik"
                  },
                   {
                     name : "proposal",
                     url : "proposal",
                   icon : "receipt",
                   text : "Proposal"
                  },
                  {
                    name : "ppd",
                    url : "ppd",
                  icon : "assignment-turned-in",
                  text : "PPD"
                 },
                   {
                     name : "laporan",
                     url : "laporan",
                   icon : "book",
                   text : "Laporan"
                  },
                ], 
                5 : [
                  {
                    name : "beranda",
                    url : "beranda",
                   icon : "home",
                   text : "Beranda"
                  },
                  {
                  name : "muztahik",
                  url : "muztahik",
                   icon : "face",
                   text : "Muztahik"
                  },
                   {
                     name : "proposal",
                     url : "proposal",
                   icon : "receipt",
                   text : "Proposal"
                  },
                   {
                     name : "laporan",
                     url : "laporan",
                   icon : "book",
                   text : "Laporan"
                  },
                ],
                 7:[
                  {
                    name : "beranda",
                    url : "beranda",
                   icon : "home",
                   text : "Beranda"
                  },
                  {
                  name : "muztahik",
                  url : "muztahik",
                   icon : "face",
                   text : "Muztahik"
                  },
                   {
                     name : "proposal",
                     url : "proposal",
                   icon : "receipt",
                   text : "Proposal"
                  },
                  {
                    name : "ppd",
                    url : "ppd",
                  icon : "assignment-turned-in",
                  text : "PPD"
                 },
                   {
                     name : "laporan",
                     url : "laporan",
                   icon : "book",
                   text : "Laporan"
                  },
                ],
                8:[
                  {
                    name : "beranda",
                    url : "beranda",
                   icon : "home",
                   text : "Beranda"
                  },
                  {
                  name : "muztahik",
                  url : "muztahik",
                   icon : "face",
                   text : "Muztahik"
                  },
                   {
                     name : "proposal",
                     url : "proposal",
                   icon : "receipt",
                   text : "Proposal"
                  },
                  {
                    name : "ppd",
                    url : "ppd",
                  icon : "assignment-turned-in",
                  text : "PPD"
                 },
                   {
                     name : "laporan",
                     url : "laporan",
                   icon : "book",
                   text : "Laporan"
                  },
                ],
                9:[
                  {
                    name : "beranda",
                    url : "beranda",
                   icon : "home",
                   text : "Beranda"
                  },
                  {
                  name : "muztahik",
                  url : "muztahik",
                   icon : "face",
                   text : "Muztahik"
                  },
                   {
                     name : "proposal",
                     url : "proposal",
                   icon : "receipt",
                   text : "Proposal"
                  },
                  {
                    name : "ppd",
                    url : "ppd",
                  icon : "assignment-turned-in",
                  text : "PPD"
                 },
                   {
                     name : "laporan",
                     url : "laporan",
                   icon : "book",
                   text : "Laporan"
                  },
                ],
              }
            }
        }
    }  
  }
  _logout(event){
    window.location.href = "/login"
    localStorage.removeItem("login-bmm")
    this.storedUser = null
  }

connectedCallback(){
  super.connectedCallback()
  var access = localStorage.getItem("login-bmm")
  this.SelectedRole = this.AccessMenu[JSON.parse(access).role]
}

}
window.customElements.define('bmm-menu', Menu);



