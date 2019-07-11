/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = /*css*/ `<dom-module id="custom-css">
  <template>
    <style>

    :host {
      --app-primary-color: #2f274c;
      --app-second-color: #fff;
      --app-secondary-color: black;
      --app-bg-color-primary : #6861CE;
      --app-bg-color-secondary : #5C55BF;
      --app-content : #8d9498;
      display: block;
    }
    
    * {
      text-decoration: none;
    }
    app-drawer-layout:not([narrow]) [drawer-toggle] {
      display: none;
    }

    app-drawer {
    --app-drawer-scrim-background: rgba(0, 0, 100, 0.8);
    --app-drawer-content-container: {
      background-color: var( --app-second-color);
    }
    color : var(--app-content);
    -webkit-box-shadow: 4px 4px 10px rgba(69,65,78,.06);
    -moz-box-shadow: 4px 4px 10px rgba(69,65,78,.06);
    box-shadow: 4px 4px 10px rgba(69,65,78,.06);
   
  }

    app-header {
      color: var(--app-second-color);
      background-color: var(--app-bg-color-primary);
    }

    app-header paper-icon-button {
      --paper-icon-button-ink-color:  var(--app-primary-color);
    }

    .drawer-list {
      margin: 0 20px;
    }

    .drawer-list a {
      display: block;
      padding: 0 16px;
      text-decoration: none;
      color : var(--app-content);
      line-height: 40px;
    }

    .drawer-list a.iron-selected {
      color: white;
      font-weight: bold;
      background: #5C55BF;
      box-shadow: 4px 4px 10px 0 rgba(0,0,0,.1),4px 4px 15px -5px rgba(72,171,247,.4)!important;
      border-radius: 5px;
      width: 80%;
    }

    .tool-bar-menu .user-view {
      position: relative;
      padding: 20px 20px;
      width: 100%;
      padding-bottom : 5px;
    }

    .tool-bar-menu {
      overflow :hidden;
    }

    hr {
      background : #8d9498;
    }

   .tool-bar-menu .user-view  > div  {
        display : inline-block;
    }
    .tool-bar-menu .user-view  > .info  {
      position: absolute;
    top: 25px;
    margin-left: 15px;
    }
    .tool-bar-menu .user-view  > .info  > * {
      font-size: 14px;
      margin  : 0;
    }
    

    .tool-bar-menu .user-view .circle {
      height: 50px;
      width: 50px;
    }
    
    .white-text {
      color: #fff !important;
    }
    .circle {
      border-radius: 50%;
    }

    app-header-layout{
      background : #F3F6F9;
    }

    .tool-bar {
      background : var( --app-bg-color-secondary )
    }
    .tool-bar > div {
      color :white;
    }
    
    bmm-menu {
      margin-top: -30px;
    }

    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
