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
$_documentContainer.innerHTML = `<dom-module id="shared-styles">
  <template>
    <style>
      .card {
        margin: 24px;
        padding: 16px;
        color: #757575;
        border-radius: 5px;
        background-color: #fff;
        padding: 20px 40px;
        display: block;
        /* border: 1px solid green; */
        box-shadow: 0 0 1px rgba(0,0,0,.15);
    }
      
      }

      .circle {
        display: inline-block;
        width: 64px;
        height: 64px;
        text-align: center;
        color: #555;
        border-radius: 50%;
        background: #ddd;
        font-size: 30px;
        line-height: 64px;
      }

      h1 {
        margin: 16px 0;
        color: #212121;
        font-size: 22px;
      }

      @media all and (max-width: 600px) {
        .card {
          margin : 20px px;
        }
        paper-button {
          width :100%; !important
        }
      }

      paper-button.green {
        background-color: var(--paper-green-500);
        color: white;
      }
      
      paper-button.green[active] {
        background-color: var(--paper-red-500);
      }

      paper-button.blue {
        background-color: var(--paper-blue-500);
        color: white;
      }
      
      paper-button.blue[active] {
        background-color: var(--paper-blue-500);
      }

    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
