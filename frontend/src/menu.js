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
      </style>

        <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
            <a name="beranda" href="[[rootPath]]panel/beranda">   <paper-icon-button icon="home"></paper-icon-button> Beranda</a>
            <a name="muztahik" href="[[rootPath]]panel/muztahik">  <paper-icon-button icon="face"></paper-icon-button> Muztahik</a>
            <a name="proposal" href="[[rootPath]]panel/proposal">  <paper-icon-button icon="receipt"></paper-icon-button> Proposal</a>
            <a name="laporan" href="[[rootPath]]panel/laporan">   <paper-icon-button icon="book"></paper-icon-button> Laporan</a>
            <a name="user" href="[[rootPath]]panel/user">   <paper-icon-button icon="account-circle"></paper-icon-button> Pengguna</a>
            <a on-click="_logout" style="cursor:pointer">   <paper-icon-button icon="exit-to-app"></paper-icon-button> Keluar</a>
        </iron-selector>    
    `;
  }

  static get properties(){
    return {
        page : {
          type : String,
          notify : true
        }
    }  
  }
  _logout(event){
    window.location.href = "/login"
    this.storedUser = null
  }
}

window.customElements.define('bmm-menu', Menu);
