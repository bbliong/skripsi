define(["require","../my-app.js"],function(_require,_myApp){"use strict";_require=babelHelpers.interopRequireWildcard(_require);new Promise((res,rej)=>_require.default(["../config/loader.js"],res,rej)).then(bundle=>bundle&&bundle.$loader||{});class Laporan extends _myApp.PolymerElement{static get template(){return _myApp.html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
         p{
           color : red;
           font-weight : bold;
         }
      </style>

      <bmm-loader></bmm-loader>
      <!-- this app-route manages the top-level routes -->
      <app-route
        route="{{route}}"
        pattern="/panel/muztahik/:view"
        data="{{routeData}}"
        tail="{{subroute}}"></app-route>

      <global-variable key="LoginCred" value="{{ storedUser }}"></global-variable>
      <global-variable key="Register" value="{{ regObj }}"></global-variable>
      <global-variable key="error" value="{{ error }}"></global-variable>
      <global-variable key="toast" value="{{ toast }}"></global-variable>
      <global-data id="globalData"></global-data>

      <iron-ajax
          auto 
          id="datass"
          on-response="_handleKategori"
          on-error="_errorKategori">
      </iron-ajax>

      <iron-ajax 
          id="printData"
          headers='{"Access-Control-Allow-Origin": "*" }'
          method="POST"
          handle-as="json"
          on-response="_handleReport"
          on-error="_handleReportError"
          Content-Type="application/json"
          debounce-duration="300">
      </iron-ajax>


      <div class="card" id="main">
        <h1>Laporan</h1>
        <vaadin-form-layout>
          <vaadin-date-picker id="start" label="Tanggal Awal" value="{{filter.start_date}}"></vaadin-date-picker>
          <vaadin-date-picker id="end" label="Tanggal Akhir" value="{{filter.end_date}}" ></vaadin-date-picker>
          <vaadin-select value="{{selectedKategori}}" colspan="2" label="kategori">
            <template>
              <vaadin-list-box>
              <vaadin-item label="Semua" value="0">Semua</vaadin-item>
                <dom-repeat items="{{Kategori}}">
                  <template>
                    <vaadin-item label="{{item.Value}}" value="{{item.KodeP}}">{{item.Value}}</vaadin-item>
                  </template>
                </dom-repeat>
              </vaadin-list-box>
            </template>
          </vaadin-select>

          <vaadin-button on-click="printData" theme="success"> Monitoring </vaadin-button>
          <vaadin-button on-click="printDataKategori"  theme="primary"> Per Kategori</vaadin-button>
        </vaadin-form-layout>

        <p> *Tombol Monitoring digunakan untuk mencetak laporan dalam 1 buah file (filter kategori tidak berpengaruh)</p>
        <p> *Tombol Per Kategori digunakan untuk mencetak laporan monitoring dengan file terpisah</p>
      </div>
    `}static get properties(){return{Kategori:{type:Array,notify:!0,value:function(){return[]}},selectedKategori:{type:Number,notify:!0},Filter:{type:Object,notify:!0,value:function(){return{start_date:this.formatDate(new Date),end_date:this.formatDate(new Date)}}}}}static get observers(){return["_routePageChanged(routeData.*)","_changeDateStart(Filter.start_date)","_changeDateEnd(Filter.end_date)"]}_changeDateStart(f){if(""!==f&&"undefined"!==typeof f){var date=this.$.start,that=this;date.value=this.formatDate(new Date(f));if(""!==date.value){that.Filter.start_date=new Date(date.value).toISOString()}date.addEventListener("change",function(){if(""!==date.value){that.Filter.start_date=new Date(date.value).toISOString()}})}}_changeDateEnd(f){if(""!==f&&"undefined"!==typeof f){var date=this.$.end,that=this;date.value=this.formatDate(new Date(f));if(""!==date.value){that.Filter.end_date=new Date(date.value).toISOString()}date.addEventListener("change",function(){if(""!==date.value){that.Filter.end_date=new Date(date.value).toISOString()}})}}formatDate(date){var dd=date.getDate(),mm=date.getMonth()+1,yyyy=date.getFullYear();return yyyy+"-"+mm+"-"+dd}_routePageChanged(page){this.$.datass.url="change";this.$.datass.url=MyAppGlobals.apiPath+"/api/kategori";this.$.datass.headers.authorization=this.storedUser.access_token}_handleKategori(e){var response=e.detail.response;this.Kategori=response.data;this._loading(0)}_errorKategori(e){console.log(e)}_loading(show){if(0==show){this.shadowRoot.querySelector("#main").style.display="block";var that=this;setTimeout(function(){that.shadowRoot.querySelector("bmm-loader").style.display="none"},2e3)}else{this.shadowRoot.querySelector("#main").style.display="none";this.shadowRoot.querySelector("bmm-loader").style.display="block"}}connectedCallback(){super.connectedCallback();this._loading(1)}printData(){this.$.printData.url=MyAppGlobals.apiPath+"/api/report/proposal";this.$.printData.headers.authorization=this.storedUser.access_token;this.$.printData.body={start_date:this.Filter.start_date,end_date:this.Filter.end_date};this.$.printData.generateRequest()}printDataKategori(){if(""==this.selectedKategori){this.toast="Kategori belum dipilih";return}this.$.printData.url=MyAppGlobals.apiPath+"/api/report/proposal/kategori";this.$.printData.headers.authorization=this.storedUser.access_token;this.$.printData.body={start_date:this.Filter.start_date,end_date:this.Filter.end_date,kategori:this.selectedKategori};console.log(this.$.printData.body);this.$.printData.generateRequest()}_handleReport(e){if("undefined"!==typeof e.detail.response.url){document.location.href=MyAppGlobals.apiPath+e.detail.response.url}}_handleReportError(e){this.error=e.detail.request.xhr.status;console.log(e)}}window.customElements.define("bmm-laporan",Laporan)});