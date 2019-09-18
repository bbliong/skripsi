import{PolymerElement,html}from"./my-app.js";import("./config/loader.js").then(bundle=>bundle&&bundle.$loader||{});class Login extends PolymerElement{static get template(){return html`
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
                #main  {
                    display : none;
                }
            </style>
               <bmm-loader></bmm-loader>
            <div class="full-width" id="main">
                <div class="img-bg">
                    <div class="card">
                        <div class="header">
                            <img src="./images/logo-bmm.png" width="auto" height="110">
                        </div>
                        <div class="input">
                            <vaadin-text-field label="Username" placeholder="Enter Username" value="{{userInput.username}}" class="login"></vaadin-text-field>
                            <vaadin-password-field label="Password" placeholder="Enter password" value="{{userInput.password}}" class="login"></vaadin-password-field>
                            <vaadin-button on-click="_loginAccess">Login</vaadin-button>
                        </div>

                    </div>
                </div>
                <paper-toast text="Username atau password salah" id="toast"></paper-toast>
            </div>
            <iron-ajax
                id="LoginPost"
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
        `}static get properties(){return{userInput:{type:Object,notify:!0,value:()=>{return{username:"",password:""}}},storedUser:Object,error:String}}ready(){super.ready();for(var that=this,login=this.shadowRoot.querySelectorAll(".login"),i=0;i<login.length;i++){login[i].addEventListener("keyup",function(e){if(13==e.keyCode){console.log("prent");that._loginAccess()}})}this._loading(1)}_loginAccess(){this._loading(1);this.$.LoginPost.url=MyAppGlobals.apiPath+"/api/signin";this.$.LoginPost.body=this.userInput;this.$.LoginPost.generateRequest()}_loginResponse(event){var response=event.detail.response;if(response.token){this.error="";this.storedUser={name:response.nama,id:response.id,access_token:response.token,role:response.role,details_role:response.details_role,department:response.department,loggedin:!0};this._loading(0);localStorage.setItem("login-bmm",JSON.stringify(this.storedUser));this.set("route.path","/panel")}}_loginError(event){this._loading(0);var that=this;setTimeout(function(){that.$.toast.open()},2e3)}_loading(show){if(0==show){var that=this;setTimeout(function(){that.shadowRoot.querySelector("bmm-loader").style.display="none";that.shadowRoot.querySelector("#main").style.display="block"},2e3)}else{this.shadowRoot.querySelector("#main").style.display="none";this.shadowRoot.querySelector("bmm-loader").style.display="block"}}connectedCallback(){super.connectedCallback();this._loading(0)}}window.customElements.define("bmm-login",Login);