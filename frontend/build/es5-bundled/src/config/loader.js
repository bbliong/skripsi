define(["../my-app.js"],function(_myApp){"use strict";function _templateObject_3897f850a3c111e9ab8d3bc52ff0ef99(){var data=babelHelpers.taggedTemplateLiteral(["\n      <style include=\"shared-styles\">\n        :host {\n          display: block;\n          width : 100px;\n          height : 100px;\n          padding: 10px;\n          position : absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            z-index : 1000;\n            height : 100%;\n            width : 100%;\n            background : #fff;\n        }\n        .main {\n            background : white;\n            position : absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            z-index : 1000;\n        }\n        .loader {\n            color: #6861CE;\n            background : #fff;\n            font-size: 20px;\n            margin: 100px auto;\n            width: 1em;\n            height: 1em;\n            border-radius: 50%;\n            position: relative;\n            text-indent: -9999em;\n            -webkit-animation: load4 1.3s infinite linear;\n            animation: load4 1.3s infinite linear;\n            -webkit-transform: translateZ(0);\n            -ms-transform: translateZ(0);\n            transform: translateZ(0);\n            }\n            @-webkit-keyframes load4 {\n            0%,\n            100% {\n                box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\n            }\n            12.5% {\n                box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n            }\n            25% {\n                box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n            }\n            37.5% {\n                box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\n            }\n            50% {\n                box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\n            }\n            62.5% {\n                box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\n            }\n            75% {\n                box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\n            }\n            87.5% {\n                box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\n            }\n            }\n            @keyframes load4 {\n            0%,\n            100% {\n                box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\n            }\n            12.5% {\n                box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n            }\n            25% {\n                box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n            }\n            37.5% {\n                box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\n            }\n            50% {\n                box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\n            }\n            62.5% {\n                box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\n            }\n            75% {\n                box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\n            }\n            87.5% {\n                box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\n            }\n            }\n      </style>\n       <div class=\"main\">\n            <div class=\"loader\">Loading...</div>\n            <img src=\"./../images/logo.png\" style=\"width:45px;height:45px;position: absolute;top: 85px;left: -20px;\">\n       </div>\n    "]);_templateObject_3897f850a3c111e9ab8d3bc52ff0ef99=function _templateObject_3897f850a3c111e9ab8d3bc52ff0ef99(){return data};return data}var Loader=function(_PolymerElement){babelHelpers.inherits(Loader,_PolymerElement);function Loader(){babelHelpers.classCallCheck(this,Loader);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(Loader).apply(this,arguments))}babelHelpers.createClass(Loader,null,[{key:"template",get:function get(){return(0,_myApp.html)(_templateObject_3897f850a3c111e9ab8d3bc52ff0ef99())}},{key:"properties",get:function get(){return{}}}]);return Loader}(_myApp.PolymerElement);window.customElements.define("bmm-loader",Loader)});