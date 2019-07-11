import{PolymerElement,html,setPassiveTouchGestures,setRootPath}from"./my-app.js";import("./menu.js").then(bundle=>bundle&&bundle.$menu||{});setPassiveTouchGestures(!0);setRootPath(MyAppGlobals.rootPath);class Panel extends PolymerElement{static get template(){return html`
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
    `}static get properties(){return{page:{type:String,reflectToAttribute:!0,observer:"_pageChanged"},routeData:{type:Object},subroute:Object,loginStatus:{type:Object,notify:!0},loginStatus:{type:Object,notify:!0},storedUser:{type:Object,notify:!0},roleName:{type:String}}}static get observers(){return["_routePageChanged(routeData.page)","_checkLogin(storedUser.*)"]}_checkRole(storedUser){switch(storedUser.role){case 1:return"Admin";break;case 2:return"PIC";break;case 3:return"MGR";break;case 4:return"KADIV";break;case 5:return"Admin Register ";break;case 6:return"Keuangan";break;}}log(e){if(401==e.detail.value){this.$.Counts.url=MyAppGlobals.apiPath+"/api/refresh";this.$.Counts.headers.authorization=this.storedUser.access_token;this.$.Counts.generateRequest()}}_checkLogin(data){if(null!=data){if(!data.value){window.location.href="/login"}this.roleName=this._checkRole(this.storedUser)}else{window.location.href="/login"}}_routePageChanged(page){if(!page){this.page="beranda"}else if(-1!==["beranda","muztahik","laporan","proposal","user","loader"].indexOf(page)){var url=this.subroute.path.split("/")[1];if(this.subroute.path){if(-1!==["add-muztahik","edit-muztahik","profile-muztahik","edit-proposal","add-proposal","edit-verifikator","add-user","edit-user","edit-upd"].lastIndexOf(url)){this.page=url}else{this.page="view404"}}else{this.page=page}}else{this.page="view404"}if(!this.$.drawer.persistent){this.$.drawer.close()}}_pageChanged(page){switch(page){case"beranda":import("./bmm-component/beranda.js").then(bundle=>bundle&&bundle.$beranda||{});break;case"muztahik":import("./bmm-component/muztahik.js").then(bundle=>bundle&&bundle.$muztahik||{});break;case"add-muztahik":import("./bmm-component/muztahik-add.js").then(bundle=>bundle&&bundle.$muztahikAdd||{});break;case"edit-muztahik":import("./bmm-component/muztahik-edit.js").then(bundle=>bundle&&bundle.$muztahikEdit||{});break;case"profile-muztahik":import("./bmm-component/muztahik-profile.js").then(bundle=>bundle&&bundle.$muztahikProfile||{});break;case"laporan":import("./bmm-component/laporan.js").then(bundle=>bundle&&bundle.$laporan||{});break;case"proposal":import("./bmm-component/proposal.js").then(bundle=>bundle&&bundle.$proposal||{});break;case"add-proposal":import("./bmm-component/proposal-add.js").then(bundle=>bundle&&bundle.$proposalAdd||{});break;case"edit-proposal":import("./bmm-component/proposal-edit.js").then(bundle=>bundle&&bundle.$proposalEdit||{});break;case"edit-verifikator":import("./bmm-component/verifikator-edit.js").then(bundle=>bundle&&bundle.$verifikatorEdit||{});break;case"user":import("./bmm-component/user.js").then(bundle=>bundle&&bundle.$user||{});break;case"add-user":import("./bmm-component/user-add.js").then(bundle=>bundle&&bundle.$userAdd||{});break;case"edit-user":import("./bmm-component/user-edit.js").then(bundle=>bundle&&bundle.$userEdit||{});break;case"edit-upd":import("./bmm-component/upd-edit.js").then(bundle=>bundle&&bundle.$updEdit||{});break;case"loader":import("./config/loader.js").then(bundle=>bundle&&bundle.$loader||{});break;case"view404":import("./my-view404.js").then(bundle=>bundle&&bundle.$myView404||{});break;}}_handleRefresh(event){var response=event.detail.response;this.error="";this.storedUser={name:response.nama,access_token:response.token,role:response.role,loggedin:!0};localStorage.setItem("login-bmm",JSON.stringify(this.storedUser));this.set("route.path","/panel")}_errorRefresh(event){window.location.href="/login";this.storedUser=null}}window.customElements.define("bmm-panel",Panel);