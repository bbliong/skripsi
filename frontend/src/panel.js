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
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-localstorage/iron-localstorage.js';
import './my-icons.js';
import './custom-css.js';

import 'global-variable-migration/global-variable.js'
import 'global-variable-migration/global-data.js';

import('./menu.js');

// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);

class Panel extends PolymerElement {
  static get template() {
    return html`
      <style include="custom-css">
      </style>

      <app-location route="{{route}}" >
      </app-location>

      <app-route route="{{route}}" pattern="/panel/:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>

      <app-drawer-layout fullbleed="" narrow="{{narrow}}">
        <!-- Drawer content -->
        <app-drawer id="drawer" slot="drawer" swipe-open="[[narrow]]">
          <app-toolbar class="tool-bar">
              <div main-title="">Aplikasi BMM</div>
              <paper-icon-button icon="my-icons:menu" drawer-toggle=""></paper-icon-button>
          </app-toolbar>
          <div class="tool-bar-menu">
              <div class="user-view">
                  <div class="gambar">
                  <img class="circle" src="https://materializecss.com/images/yuna.jpg">
                  </div>

                  <div class="info">
                     <p class=" name">{{storedUser.name}}</p>
                     <h5 class=" email">{{roleName}}</h5>
                  </div>

              </div>
              <hr style="width : 90%;margin-left : 5%;opacity : .2">
          </div>

          <bmm-menu page="{{page}}"></bmm-menu>
        </app-drawer>

        <!-- Main content -->
        <app-header-layout has-scrolling-region="">
          
          <app-header slot="header" condenses="" reveals="" effects="waterfall">
            <app-toolbar>
              <paper-icon-button icon="my-icons:menu" drawer-toggle=""></paper-icon-button>
            </app-toolbar>
          </app-header>

          <iron-pages selected="[[page]]" attr-for-selected="name"   selected-attribute="activated" role="main">
            <bmm-beranda name="beranda"></bmm-beranda>
            <bmm-muztahik name="muztahik"></bmm-muztahik>
            <bmm-proposal name="proposal"></bmm-proposal>
            <bmm-proposal-add name="add-proposal"></bmm-proposal-add>
            <bmm-proposal-edit name="edit-proposal"></bmm-proposal-edit>
            <bmm-laporan name="laporan"></bmm-laporan>
            <bmm-muztahik-add name="add-muztahik"></bmm-muztahik-add>
            <bmm-muztahik-edit name="edit-muztahik"></bmm-muztahik-edit>
            <bmm-verifikator-edit name="edit-verifikator"></bmm-verifikator-edit>
            <bmm-muztahik-profile name="profile-muztahik"></bmm-muztahik-profile>
            <bmm-user name="user"></bmm-user>
            <bmm-user-add name="add-user"></bmm-user-add>
            <bmm-user-edit name="edit-user"></bmm-user-edit>
            <bmm-upd-edit name="edit-upd"></bmm-upd-edit>
            <bmm-komite-manager name="komite-manager"></bmm-komite-manager>
            <bmm-loader name="loader"></bmm-loader>
            <my-view404 name="view404"></my-view404>
          </iron-pages>
        </app-header-layout>
      </app-drawer-layout>
      <iron-localstorage name="login-bmm" value="{{storedUser}}"></iron-localstorage>
      
      <!-- varible global untuk data dan error -->
      <global-variable key="LoginCred" 
           value="{{ storedUser }}">
      </global-variable>
      <global-variable key="error" 
           value="{{ error }}">
      </global-variable>

      <!-- Untuk membuat varible global memiliki event saat diubah -->
      <global-data id="globalData"
         on-set="log">
      </global-data>

      <iron-ajax
          id="Counts"
          headers='{"Access-Control-Allow-Origin": "*" }'
          handle-as="json"
          method="GET"
          on-response="_handleRefresh"
          on-error="_errorRefresh"
          Content-Type="application/json"
          debounce-duration="300">
      </iron-ajax>
    `;
  }

//   constructor(){
//       super();
     
//   }


  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      routeData: {
          type : Object,
      },
      subroute: Object,
      loginStatus : {
        type : Object,
        notify : true,
      },
      loginStatus :{
        type : Object,
        notify :true,
      },
      storedUser:{
        type : Object,
        notify : true,
      },
      roleName : {
        type :String,
      }
    };
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.page)',
      '_checkLogin(storedUser.*)',
    ];
  }

  _checkRole(storedUser){
    //Admin : 1 , PIC : 2, MGR : 3, KADIV  :4, Admin Register : 5, Keuangan : 6
    switch(storedUser.role){
      case 1 : 
      return "Admin"
      break;
      case 2 :
      return "PIC"
      break;
      case 3 :
      return "MGR"
      break;
      case 4  :
      return  "KADIV"
      break;
      case 5 : 
      return  "Admin Register "
      break;
      case 6 :
      return "Keuangan"
      break;
    }
  }

  log(e){
    if(e.detail.value == 401){
      this.$.Counts.url = MyAppGlobals.apiPath + "/api/refresh"
      this.$.Counts.headers['authorization'] = this.storedUser.access_token;
      this.$.Counts.generateRequest();
    }
  }

  _checkLogin(data){
     if(data != null){
        if(!data.value){
           window.location.href = "/login"   
        }
        this.roleName =  this._checkRole(this.storedUser)
      }else{
        window.location.href = "/login"
      }
    
  }

  _routePageChanged(page) {
     
     // Show the corresponding page according to the route.
     //
     // If no page was found in the route data, page will be an empty string.
     // Show 'view1' in that case. And if the page doesn't exist, show 'view404'.
    if (!page) {
      this.page = 'beranda';
    } else if (['beranda', 'muztahik', 'laporan', 'proposal', 'user',  'loader'].indexOf(page) !== -1) {
      var url = this.subroute.path.split("/")[1]
      if(this.subroute.path){
        if(['add-muztahik', 'edit-muztahik','profile-muztahik', 'edit-proposal', 'add-proposal', 'edit-verifikator', 'add-user', 'edit-user','edit-upd', 'komite-manager'].lastIndexOf(url) !== -1){
          this.page = url
        }else{
          this.page = 'view404';
        }
      }else{
        this.page = page
      }
    } else {
      this.page = 'view404';
    }
    // Close a non-persistent drawer when the page & route are changed.
    if (!this.$.drawer.persistent) {
      this.$.drawer.close();
    }
  }

  _pageChanged(page) {
    // Import the page component on demand.
    //
    // Note: `polymer build` doesn't like string concatenation in the import
    // statement, so break it up.
    switch (page) {
      case 'beranda':
        import('./bmm-component/beranda.js');
        break;
      case 'muztahik':
        import('./bmm-component/muztahik.js');
        break;
      case 'add-muztahik' :
        import('./bmm-component/muztahik-add.js');
        break;
      case 'edit-muztahik' :
        import('./bmm-component/muztahik-edit.js');
        break;
      case 'profile-muztahik' :
        import('./bmm-component/muztahik-profile.js');
        break;
      case 'laporan':
        import('./bmm-component/laporan.js');
        break;
      case 'proposal':
        import('./bmm-component/proposal.js');
        break;
      case 'add-proposal':
        import('./bmm-component/proposal-add.js');
        break;
      case 'edit-proposal':
        import('./bmm-component/proposal-edit.js');
        break;
      case 'edit-verifikator':
          import('./bmm-component/verifikator-edit.js');
          break;
      case 'user':
          import('./bmm-component/user.js');
          break;
      case 'add-user':
          import('./bmm-component/user-add.js');
          break;
      case 'edit-user':
          import('./bmm-component/user-edit.js');
          break;
      case 'edit-upd':
          import('./bmm-component/upd-edit.js');
          break;
      case 'loader':
          import('./config/loader.js');
          break;
      case 'komite-manager':
          import('./bmm-component/komite-manager.js');
          break;
      case 'view404':
        import('./my-view404.js');
        break;
    }
  }
  
  _handleRefresh(event){
    var response = event.detail.response;
        this.error =""
        this.storedUser = {
            name :response.nama,
            access_token : response.token,
            role : response.role,
            loggedin :true
        }
        localStorage.setItem('login-bmm', JSON.stringify(this.storedUser))
        this.set('route.path', '/panel');
    }

  _errorRefresh(event){
    window.location.href = "/login"
    this.storedUser = null
  }


}

window.customElements.define('bmm-panel', Panel);
