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
import '@polymer/polymer/lib/elements/dom-if.js';
import '@polymer/polymer/lib/elements/dom-module.js';
import '@polymer/iron-pages/iron-pages.js';
import './../shared-styles.js';
import('./proposal.js');


// import paper
import '@polymer/app-route/app-route.js';
import '@polymer/app-route/app-location.js';
import '@polymer/iron-ajax/iron-ajax.js';

//Other
import 'global-variable-migration/global-data.js';
import 'global-variable-migration/global-variable.js';

//vaadin component
import '@vaadin/vaadin-Upload/vaadin-upload';

class MuztahikProfile extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }

        .container {
          display: -webkit-box;
          display: -moz-box;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -webkit-flex-flow: row wrap;
          flex-flow: row wrap;
          text-align: center;
          margin : 10px 23px;
        }

        .container > * , .main > * {
          padding: 10px;
          flex-grow: 1;
          flex-basis: 100%;
          text-align: left;

        }

        .aside-1 {
          display :flex;
          text-align : center;
            flex-direction: column;
        }

        @media all and (min-width: 600px) {
          .aside {
            flex-grow: 1;
            flex-basis: 0;
          }
        }

        @media all and (max-width: 700px){
          .main {
            padding: 0px;
            margin-left: -10px;
          }
          table {
            margin-top : 30px;
          }
        }

        @media all and (min-width: 800px) {
          .main {
            flex-grow: 3;
            flex-basis: 0;
            display :flex;
          }

          .aside-1 {
            order: 1;
          }

          .main {
            order: 2;
          }

        }
        body {
          padding: 2em;
        }
        table { 
          border-collapse: collapse;
          border: 1px solid #ddd;
          text-align: left;
          width :100%;
        }

        table > tbody > tr > td{
          width : 50%;
          padding : 8px;
        }

        tr:nth-child(even) {background-color: #f2f2f2;}
        
        .aside-1 > img  {
          border-radius: 50%;
          width: 150px;
          height: 150px;
          display: block;
          margin-left: auto;
          margin-right: auto;
        }

      </style>
        <!-- app-location binds to the app's URL -->
        <app-location route="{{route}}"></app-location>

        <!-- this app-route manages the top-level routes -->
        <app-route
            route="{{route}}"
            pattern="/panel/muztahik/profile-muztahik/:id"
            data="{{routeData}}"
            tail="{{subroute}}"></app-route>

        <iron-ajax 
          auto
          id="getData"
          headers='{"Access-Control-Allow-Origin": "*" }'
          handle-as="json"
          method="GET"
          on-response="_handleMuztahik"
          on-error="_handleMuztahikError"
          Content-Type="application/json"
          debounce-duration="300">
          <global-variable key="LoginCred" value="{{ storedUser }}"></global-variable>

      </iron-ajax>
      <div class="card">
        <div class="container">
            <header>
              <h2> {{regObj.nama}}</h2>
            </header>
            <aside class="aside aside-1">
                <img src="/images/no_photo.png" alt="photo muztahik" id="img" class="img-rounded">
                <vaadin-upload id="uploadPhoto" capture="camera" accept="image/*" nodrop></vaadin-upload>                  
            </aside>
            <section class="main">
              <table class="aside">
                  <tr>
                    <td>ID</td>
                    <td> {{regObj._id}} </td>
                  </tr>
                  <tr>
                    <td>NIK</td>
                    <td>{{regObj.nik}}</td>
                  </tr>
                  <tr>
                    <td>Telpon</td>
                    <td>{{regObj.nohp}}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>{{regObj.email}}</td>
                  </tr>
              </table>
              <table  class="aside">
                  <tr>
                    <td>Kecamatan</td>
                    <td>{{regObj.kecamatan}}</td>
                  </tr>
                  <tr>
                    <td>Kota</td>
                    <td>{{regObj.kabkot}}</td>
                  </tr>
                  <tr>
                    <td>Provinsi</td>
                    <td>{{regObj.provinsi}}</td>
                  </tr>
                  <tr>
                    <td colspan="2">{{regObj.alamat}}</td>
                  
                  </tr>
              </table>
            </section>
        </div>
        <iron-pages selected="{{muzId}}" attr-for-selected="muz-id" selected-attribute="activated" id="pages">
           <bmm-proposal muz-id="{{muzId}}" id="proposal"></bmm-proposal>
        </iron-pages>

      </div>
    `;
  }

  static get properties(){
    return {
      muzId : {
        type : String,
        notify : true
      },
      regObj  : {
        type : Object,
        notify : true,
        value : function(){
          return {       
          }
        }
      },
    }
  }

  
  static get observers() {
    return [
      '_routePageChanged(route.*)',
    ];
  }

  _routePageChanged(page) {
    this.muzId = this.routeData.id
    this.$.getData.url= MyAppGlobals.apiPath + "/api/muztahik/" + this.routeData.id
    this.$.getData.headers['authorization'] = this.storedUser.access_token;

    /*  Upload Vaading */

    var upload = this.$.uploadPhoto;
    var that = this
    upload.addEventListener('upload-before', function(event) {
      // console.log('upload xhr before open: ', event.detail.xhr);

      // Prevent the upload request:
      // event.preventDefault();

      var file = event.detail.file;

      // Custom upload request url for file
      file.uploadTarget = MyAppGlobals.apiPath+ '/api/upload?muztahik_id=' + that.muzId;

      // Custom name in the Content-Disposition header
        file.formDataName = 'attachment';
      });

    upload.addEventListener('upload-request', function(event) {
      event.detail.xhr.setRequestHeader('X-File-Name', event.detail.file.name);
      event.detail.xhr.setRequestHeader('authorization', that.storedUser.access_token);
      event.detail.formData.append('documentId', 1234);
    });

    upload.addEventListener('upload-start', function(event) {
      // console.log('upload xhr after send: ', event.detail.xhr);
    });

    upload.addEventListener('upload-response', function(event) {
      // console.log('upload xhr after server response: ', event.detail.xhr);
      var data = JSON.parse(event.detail.xhr.response)
      if( event.detail.xhr.status == 200 ){
        that.$.img.src = MyAppGlobals.apiPath +  "/" + data.data
      }else{
        event.detail.file.error = data.data
      }
    });

   /*  Upload Vaading */
  }

  _handleMuztahik(e){
    this.regObj =   e.detail.response.data
      if (typeof this.regObj.photo !== 'undefined'){
        this.$.img.src = MyAppGlobals.apiPath +  "/"+  this.regObj.photo
      }else{
        this.$.img.src = "/images/no_photo.png"
      }
  }

  _handleMuztahikError(e){
    this.set('route.path', '/panel/muztahik');
  }

}

window.customElements.define('bmm-muztahik-profile', MuztahikProfile);
