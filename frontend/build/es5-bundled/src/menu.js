define(["./my-app.js"],function(_myApp){"use strict";function _templateObject_89214a60da2b11e9886ab5694315db4a(){var data=babelHelpers.taggedTemplateLiteral(["\n      <style include=\"custom-css\">\n        :host {\n          display: block;\n\n          padding: 10px;\n        }\n        a {\n          font-size : 14px;\n        }\n        paper-icon-button {\n          width : 35px;\n          height  :35px;\n        }\n      </style>\n\n              <iron-selector selected=\"[[page]]\" attr-for-selected=\"name\" class=\"drawer-list\" role=\"navigation\">\n               <dom-repeat items=\"{{SelectedRole}}\">\n                  <template>\n                    <a name=\"{{item.name}}\" href=\"[[rootPath]]panel/{{item.url}}\">   <paper-icon-button icon=\"{{item.icon}}\"></paper-icon-button> {{item.text}}</a>\n                  </template>\n                </dom-repeat>\n            <a name=\"keluar\" on-click=\"_logout\" style=\"cursor:pointer\">   <paper-icon-button icon=\"exit-to-app\"></paper-icon-button> Keluar</a>\n        </iron-selector>      \n    "]);_templateObject_89214a60da2b11e9886ab5694315db4a=function _templateObject_89214a60da2b11e9886ab5694315db4a(){return data};return data}var Menu=function(_PolymerElement){babelHelpers.inherits(Menu,_PolymerElement);function Menu(){babelHelpers.classCallCheck(this,Menu);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(Menu).apply(this,arguments))}babelHelpers.createClass(Menu,[{key:"_logout",value:function _logout(event){window.location.href="/login";localStorage.removeItem("login-bmm");this.storedUser=null}},{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(Menu.prototype),"connectedCallback",this).call(this);var access=localStorage.getItem("login-bmm");this.SelectedRole=this.AccessMenu[JSON.parse(access).role]}}],[{key:"template",get:function get(){return(0,_myApp.html)(_templateObject_89214a60da2b11e9886ab5694315db4a())}},{key:"properties",get:function get(){return{page:{type:String,notify:!0},SelectedRole:{type:Array,notify:!0},AccessMenu:{type:Object,value:function value(){return{1:[{name:"beranda",url:"beranda",icon:"home",text:"Beranda"},{name:"muztahik",url:"muztahik",icon:"face",text:"Muztahik"},{name:"proposal",url:"proposal",icon:"receipt",text:"Proposal"},{name:"laporan",url:"laporan",icon:"book",text:"Laporan"},{name:"pengguna",url:"user",icon:"account-circle",text:"Pengguna"}],2:[{name:"beranda",url:"beranda",icon:"home",text:"Beranda"},{name:"proposal",url:"proposal",icon:"receipt",text:"Proposal"},{name:"ppd",url:"ppd",icon:"assignment-turned-in",text:"PPD"},{name:"laporan",url:"laporan",icon:"book",text:"Laporan"}],3:[{name:"beranda",url:"beranda",icon:"home",text:"Beranda"},{name:"proposal",url:"proposal",icon:"receipt",text:"Proposal"},{name:"ppd",url:"ppd",icon:"assignment-turned-in",text:"PPD"},{name:"laporan",url:"laporan",icon:"book",text:"Laporan"}],4:[{name:"beranda",url:"beranda",icon:"home",text:"Beranda"},{name:"proposal",url:"proposal",icon:"receipt",text:"Proposal"},{name:"ppd",url:"ppd",icon:"assignment-turned-in",text:"PPD"},{name:"laporan",url:"laporan",icon:"book",text:"Laporan"}],5:[{name:"beranda",url:"beranda",icon:"home",text:"Beranda"},{name:"muztahik",url:"muztahik",icon:"face",text:"Muztahik"},{name:"proposal",url:"proposal",icon:"receipt",text:"Proposal"},{name:"laporan",url:"laporan",icon:"book",text:"Laporan"}],6:[{name:"beranda",url:"beranda",icon:"home",text:"Beranda"},{name:"proposal",url:"proposal",icon:"receipt",text:"Proposal"},{name:"ppd",url:"ppd",icon:"assignment-turned-in",text:"PPD"},{name:"laporan",url:"laporan",icon:"book",text:"Laporan"}],7:[{name:"beranda",url:"beranda",icon:"home",text:"Beranda"},{name:"proposal",url:"proposal",icon:"receipt",text:"Proposal"},{name:"ppd",url:"ppd",icon:"assignment-turned-in",text:"PPD"},{name:"laporan",url:"laporan",icon:"book",text:"Laporan"}],8:[{name:"beranda",url:"beranda",icon:"home",text:"Beranda"},{name:"proposal",url:"proposal",icon:"receipt",text:"Proposal"},{name:"ppd",url:"ppd",icon:"assignment-turned-in",text:"PPD"},{name:"laporan",url:"laporan",icon:"book",text:"Laporan"}],9:[{name:"beranda",url:"beranda",icon:"home",text:"Beranda"},{name:"muztahik",url:"muztahik",icon:"face",text:"Muztahik"},{name:"proposal",url:"proposal",icon:"receipt",text:"Proposal"},{name:"ppd",url:"ppd",icon:"assignment-turned-in",text:"PPD"},{name:"laporan",url:"laporan",icon:"book",text:"Laporan"}]}}}}}}]);return Menu}(_myApp.PolymerElement);window.customElements.define("bmm-menu",Menu)});