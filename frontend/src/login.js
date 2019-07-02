define(["exports","./my-app.js"],function(_exports,_myApp){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.PasswordFieldElement=_exports.$vaadinPasswordField=void 0;const $_documentContainer=document.createElement("template");$_documentContainer.innerHTML=`<custom-style>
  <style>
    @font-face {
      font-family: 'vaadin-password-field-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAYMAAsAAAAABcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIFgGNtYXAAAAFoAAAAVAAAAFQXVtKIZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAfwAAAH8yBLEP2hlYWQAAAPAAAAANgAAADYN+RfTaGhlYQAAA/gAAAAkAAAAJAfCA8dobXR4AAAEHAAAABgAAAAYDgAAAGxvY2EAAAQ0AAAADgAAAA4BJgCSbWF4cAAABEQAAAAgAAAAIAAMAFpuYW1lAAAEZAAAAYYAAAGGmUoJ+3Bvc3QAAAXsAAAAIAAAACAAAwAAAAMDVQGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QEDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkB//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAwAAAHoEAALGABQAJABFAAABIg4CMTAeAjMyPgIxMC4CIwc+ATEwBhUUFjEHMCY1NDYTIi4CJz4BNw4BFRQeAjMyPgI1NCYnHgEXDgMjAgChyHAnN3rAiYjFfjsncMihrRg7IA1GExmnY5ZqQg8PWGAFCChGXTU1XUYoCAVgWA8RRW2ZZALGZnpmUmJSUGBQaHxoYA8FRSIhJQ0rIiYz/lQvQkYVInswEygYNV1GKChGXTUYKBMrgCIVRkIvAAAABQAA/8AEAAPAABoAJgA6AEcAVwAAAQceARcOAyMiJicHHgEzMj4CMTAuAicHNCYnATIWMzI+AhMBLgEjIg4CMTAeAhcHFTMBNQEuASc+ATcOARUUFhc3BzAmNTQ2MT4BMTAGFQYWAzo0UlMPEUVtmWQiNR0zJ1QsiMV+OxEsTTw6AgT+zA8dDjVdRijT/ucnXjWhyHAnGTNQN9MtA9P9AE1ZFA9YYAUILSY6QBMZGDsgBAsCczMrcyIWQ0AtCAQzDgtQYFAzS1ckeQ4bCv7TBihGXQH7/uYKEGZ6Zic5RBzNLQPTLf0tIVoYInswEygYNWMihgwrISc5DwVHJiIlAAEAAAAAAADkyo21Xw889QALBAAAAAAA1W1pqwAAAADVbWmrAAD/wAQAA8AAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAABAAAAQAAAAAAAAAAAAAAAAAAAAYEAAAAAAAAAAAAAAACAAAABAAAAAQAAAAAAAAAAAoAFAAeAH4A/gAAAAEAAAAGAFgABQAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAHAAAAAQAAAAAAAgAHAGAAAQAAAAAAAwAHADYAAQAAAAAABAAHAHUAAQAAAAAABQALABUAAQAAAAAABgAHAEsAAQAAAAAACgAaAIoAAwABBAkAAQAOAAcAAwABBAkAAgAOAGcAAwABBAkAAwAOAD0AAwABBAkABAAOAHwAAwABBAkABQAWACAAAwABBAkABgAOAFIAAwABBAkACgA0AKRpY29tb29uAGkAYwBvAG0AbwBvAG5WZXJzaW9uIDEuMABWAGUAcgBzAGkAbwBuACAAMQAuADBpY29tb29uAGkAYwBvAG0AbwBvAG5pY29tb29uAGkAYwBvAG0AbwBvAG5SZWd1bGFyAFIAZQBnAHUAbABhAHJpY29tb29uAGkAYwBvAG0AbwBvAG5Gb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
</custom-style><dom-module id="vaadin-password-field-template">
  <template>
    <style>
      /* Hide the native eye icon for IE/Edge */
      ::-ms-reveal {
        display: none;
      }

      [part="reveal-button"][hidden] {
        display: none !important;
      }
    </style>

    <div part="reveal-button" on-mousedown="_revealButtonMouseDown" on-touchend="_togglePasswordVisibilityTouchend" on-click="_togglePasswordVisibility" hidden\$="[[revealButtonHidden]]">
    </div>
  </template>
  
</dom-module>`;document.head.appendChild($_documentContainer.content);let memoizedTemplate;class PasswordFieldElement extends _myApp.TextFieldElement{static get is(){return"vaadin-password-field"}static get version(){return"2.4.3"}static get properties(){return{revealButtonHidden:{type:Boolean,value:!1},passwordVisible:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_passwordVisibleChange",readOnly:!0}}}static get template(){if(!memoizedTemplate){memoizedTemplate=super.template.cloneNode(!0);const thisTemplate=_myApp.DomModule.import(this.is+"-template","template"),revealButton=thisTemplate.content.querySelector("[part=\"reveal-button\"]"),styles=thisTemplate.content.querySelector("style"),inputField=memoizedTemplate.content.querySelector("[part=\"input-field\"]");inputField.appendChild(revealButton);memoizedTemplate.content.appendChild(styles)}return memoizedTemplate}ready(){super.ready();this.inputElement.type="password";this.inputElement.autocapitalize="off";this.addEventListener("focusout",()=>{if(!this._passwordVisibilityChanging){this._setPasswordVisible(!1);if(this._cachedChangeEvent){this._onChange(this._cachedChangeEvent)}}})}_onChange(e){const slotted=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);if(slotted){e.stopPropagation()}if(this._passwordVisibilityChanging){this._cachedChangeEvent=e}else{this._cachedChangeEvent=null;super._onChange(e)}}_revealButtonMouseDown(e){if(this.hasAttribute("focused")){e.preventDefault()}}_togglePasswordVisibilityTouchend(e){e.preventDefault();this._togglePasswordVisibility();this.inputElement.focus()}_togglePasswordVisibility(){this._passwordVisibilityChanging=!0;this.inputElement.blur();this._setPasswordVisible(!this.passwordVisible);this.inputElement.focus();this._passwordVisibilityChanging=!1}_passwordVisibleChange(passwordVisible){this.inputElement.type=passwordVisible?"text":"password"}}_exports.PasswordFieldElement=PasswordFieldElement;customElements.define(PasswordFieldElement.is,PasswordFieldElement);var vaadinPasswordField={PasswordFieldElement:PasswordFieldElement};_exports.$vaadinPasswordField=vaadinPasswordField;const $_documentContainer$1=_myApp.html$1`<dom-module id="lumo-password-field" theme-for="vaadin-password-field">
  <template>
    <style>
      [part="reveal-button"]::before {
        content: var(--lumo-icons-eye);
      }

      :host([password-visible]) [part="reveal-button"]::before {
        content: var(--lumo-icons-eye-disabled);
      }

      /* Make it easy to hide the button across the whole app */
      [part="reveal-button"] {
        display: var(--lumo-password-field-reveal-button-display, block);
      }

      /* FIXME: ShadyCSS workaround for slotted input in Edge */
      [part="input-field"] ::slotted(input)::-ms-reveal {
        display: none;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$1.content);class Login extends _myApp.PolymerElement{static get template(){return _myApp.html`
            <style include="shared-styles">
                :host {
                display: block;

                padding: 10px;
                }

                .full-width {
                    position : absolute;
                    top :0;
                    right:0;
                    left:0;
                    bottom:0;
                    width:100%;
                    height:100vh;
                }
                .img-bg {
                    background-image: url("./images/bg-login.jpg");
                    width: 100%;
                    min-height: 100vh;
                    display: -webkit-box;
                    display: -webkit-flex;
                    display: -moz-box;
                    display: -ms-flexbox;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    background-repeat: no-repeat;
                    background-attachment: fixed;
                    background-size: cover;
                    background-position: center;
                    position: relative;
                    z-index: 1;
                }
                .card {
                    padding: 8px 16px;
                    color: #757575;
                    border-radius: 4px;
                    background-color: rgba(255, 255, 255, 0.911);
                    -webkit-filter: drop-shadow(8px 8px 10px rgba(112, 112, 112, 0.514));
                    filter: drop-shadow(8px 8px 10px rgba(112, 112, 112, 0.514));
                    width: 40vw;
                    min-width: 355px;
                    max-width: 455px;
                    height: 364px;
                    position: absolute;
                    top: 285px;
                    left: 44%;
                    overflow: hidden;
                    transform: translate(-50%,-50%);
                }

                .card > .input {
                    position: relative;
                    display: block;
                }

                .card > .input > * {
                    width :100%;
                }
                .header  {
                    text-align: center;
                }
            </style>
            <div class="full-width">
                <div class="img-bg">
                    <div class="card">
                        <div class="header">
                            <img src="./images/logo-bmm.png" width="auto" height="110">
                        </div>
                        <div class="input">
                            <vaadin-text-field label="Username" placeholder="Enter Username" value="{{userInput.username}}"></vaadin-text-field>
                            <vaadin-password-field label="Password" placeholder="Enter password" value="{{userInput.password}}"></vaadin-password-field>
                            <vaadin-button on-click="_loginAccess">Login</vaadin-button>
                        </div>

                    </div>
                </div>
                <paper-toast text="Username atau password salah" id="toast"></paper-toast>
            </div>
            <iron-ajax
                id="LoginPost"
                auto
                headers='{"Access-Control-Allow-Origin": "*"}'
                handle-as="json"
                method="POST"
                on-response="_loginResponse"
                on-error="_loginError"
                Content-Type="application/json"
                debounce-duration="300">
            </iron-ajax>
            <app-location route="{{route}}"></app-location>
            <iron-localstorage name="login-bmm" value="{{storedUser}}"></iron-localstorage>
        `}static get properties(){return{userInput:{type:Object,notify:!0,value:()=>{return{username:"",password:""}}},storedUser:Object,error:String}}_loginAccess(){console.log(MyAppGlobals.apiPath);this.$.LoginPost.url=MyAppGlobals.apiPath+"/api/signin";this.$.LoginPost.body=this.userInput;this.$.LoginPost.generateRequest()}_loginResponse(event){var response=event.detail.response;if(response.token){this.error="";this.storedUser={name:response.nama,access_token:response.token,role:response.role,loggedin:!0};localStorage.setItem("login-bmm",JSON.stringify(this.storedUser));this.set("route.path","/panel")}}_loginError(event){console.log(event);this.$.toast.open()}}window.customElements.define("bmm-login",Login)});