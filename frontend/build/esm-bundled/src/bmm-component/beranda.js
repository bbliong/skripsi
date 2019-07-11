import{Polymer,html$1 as html,dom,mixinBehaviors,PolymerElement,html as html$1,IronResizableBehavior,NeonAnimationRunnerBehavior}from"../my-app.js";var DEFACTO_CHART_PACKAGE="corechart",Namespace={CHARTS:"charts",VIS:"visualization"},CHART_CONSTRUCTORS={area:{ctor:"AreaChart"},bar:{ctor:"BarChart"},"md-bar":{ctor:"Bar",pkg:"bar"},bubble:{ctor:"BubbleChart"},calendar:{ctor:"Calendar",pkg:"calendar"},candlestick:{ctor:"CandlestickChart"},column:{ctor:"ColumnChart"},combo:{ctor:"ComboChart"},gauge:{ctor:"Gauge",pkg:"gauge"},geo:{ctor:"GeoChart"},histogram:{ctor:"Histogram"},line:{ctor:"LineChart"},"md-line":{ctor:"Line",pkg:"line"},org:{ctor:"OrgChart",pkg:"orgchart"},pie:{ctor:"PieChart"},sankey:{ctor:"Sankey",pkg:"sankey"},scatter:{ctor:"ScatterChart"},"md-scatter":{ctor:"Scatter",pkg:"scatter"},"stepped-area":{ctor:"SteppedAreaChart"},table:{ctor:"Table",pkg:"table"},timeline:{ctor:"Timeline",pkg:"timeline"},treemap:{ctor:"TreeMap",pkg:"treemap"},wordtree:{ctor:"WordTree",namespace:Namespace.VIS,pkg:"wordtree"}};function namespaceForType(type){return google[0===type.indexOf("md-")?Namespace.CHARTS:Namespace.VIS]}var loaderPromise=new Promise(function(resolve,reject){if("undefined"!==typeof google&&google.charts&&"function"===typeof google.charts.load){resolve()}else{var loaderScript=document.querySelector("script[src=\"https://www.gstatic.com/charts/loader.js\"]");if(!loaderScript){loaderScript=document.createElement("script");loaderScript.src="https://www.gstatic.com/charts/loader.js";document.head.appendChild(loaderScript)}loaderScript.addEventListener("load",resolve);loaderScript.addEventListener("error",reject)}}),packagesToLoad={},promises={},resolves={};Polymer({is:"google-chart-loader",properties:{packages:{type:Array,value:function(){return[]},observer:"_loadPackages"},type:{type:String,observer:"_loadPackageForType"}},get _corePackage(){if(promises[DEFACTO_CHART_PACKAGE]){return promises[DEFACTO_CHART_PACKAGE]}return this._loadPackages([DEFACTO_CHART_PACKAGE]).then(function(pkgs){return pkgs[0]})},_loadPackagesDebounce:function(){this.debounce("loadPackages",()=>{var packages=Object.keys(packagesToLoad);if(!packages.length){return}packagesToLoad={};loaderPromise.then(function(){google.charts.load("current",{packages:packages,language:document.documentElement.lang||"en"});google.charts.setOnLoadCallback(function(){packages.forEach(function(pkg){this.fire("loaded",pkg);resolves[pkg](google.visualization)}.bind(this))}.bind(this))}.bind(this))},100)},_loadPackages:function(pkgs){var returns=[];pkgs.forEach(function(pkg){if(!promises[pkg]){packagesToLoad[pkg]=!0;promises[pkg]=new Promise(function(resolve){resolves[pkg]=resolve});this._loadPackagesDebounce()}returns.push(promises[pkg])}.bind(this));return Promise.all(returns)},_loadPackageForType:function(type){var chartData=CHART_CONSTRUCTORS[type];if(!chartData){return Promise.reject("This chart type is not yet supported: "+type)}return this._loadPackages([chartData.pkg||DEFACTO_CHART_PACKAGE]).then(function(){var namespace=google[chartData.namespace]||namespaceForType(type);return namespace[chartData.ctor]})},create:function(type,el){return this._loadPackageForType(type).then(function(ctor){return new ctor(el)})},fireOnChartEvent:function(chart,eventName,opt_once){return this._corePackage.then(function(viz){var adder=opt_once?viz.events.addOneTimeListener:viz.events.addListener;adder(chart,eventName,function(event){this.fire("google-chart-"+eventName,{chart:chart,data:event})}.bind(this))}.bind(this))},dataTable:function(data){return this._corePackage.then(function(viz){if(null==data){return new viz.DataTable}else if(data.getNumberOfRows){return data}else if(data.cols){return new viz.DataTable(data)}else if(0<data.length){return viz.arrayToDataTable(data)}else if(0===data.length){return Promise.reject("Data was empty.")}return Promise.reject("Data format was not recognized.")})},dataView:function(data){return this._corePackage.then(function(viz){return new viz.DataView(data)})},query:function(url,opt_options){return this._corePackage.then(function(viz){return new viz.Query(url,opt_options)})}});Polymer({_template:html`
    <style>
      :host {
        display: -webkit-flex;
        display: -ms-flex;
        display: flex;
        margin: 0;
        padding: 0;
        width: 400px;
        height: 300px;
      }

      :host([hidden]) {
        display: none;
      }

      :host([type="gauge"]) {
        width: 300px;
        height: 300px;
      }

      #chartdiv {
        width: 100%;
      }
    </style>
    <div id="styles"></div>
    <google-chart-loader id="loader" type="[[type]]"></google-chart-loader>
    <div id="chartdiv"></div>
  `,is:"google-chart",properties:{type:{type:String,value:"column",observer:"_typeChanged"},events:{type:Array,value:function(){return[]}},options:{type:Object},cols:{type:Array,observer:"_rowsOrColumnsChanged"},rows:{type:Array,observer:"_rowsOrColumnsChanged"},data:{type:String,observer:"_dataChanged"},view:{type:Object,observer:"_viewChanged"},selection:{type:Array,notify:!0,observer:"_setSelection"},drawn:{type:Boolean,readOnly:!0,value:!1},_chart:{type:Object,value:null},_dataView:{type:Object,value:null}},observers:["_draw(_chart, _dataView)","_subOptionChanged(options.*)"],listeners:{"google-chart-select":"_updateSelection","google-chart-ready":"_onChartReady"},_selection:null,_typeChanged:function(){const loader=this.$.loader;loader.create(this.type,this.$.chartdiv).then(function(chart){if(!this.$.styles.children.length){this._localizeGlobalStylesheets()}Object.keys(this.events.concat(["select","ready"]).reduce(function(set,eventName){set[eventName]=!0;return set},{})).forEach(function(eventName){loader.fireOnChartEvent(chart,eventName)});this._setDrawn(!1);this._chart=chart}.bind(this))},_subOptionChanged:function(optionChangeDetails){this.options=optionChangeDetails.base;this.debounce("optionChangeRedraw",()=>{this.redraw()},5)},_setSelection:function(){if(!this.drawn||!this.selection||this.selection===this._selection){return}if(this._chart.setSelection){this._chart.setSelection(this.selection)}this._selection=this.selection},_updateSelection:function(){const selection=this._chart.getSelection();this._selection=selection;this.selection=selection},_onChartReady:function(){this._setDrawn(!0);this._selection=null;this._setSelection()},redraw:function(){if(!this._chart||!this._dataView){return}this._draw(this._chart,this._dataView)},_draw:function(chart,data){if(null==chart||null==data){return}try{this._setDrawn(!1);chart.draw(data,this.options||{})}catch(error){this.$.chartdiv.textContent=error}},get imageURI(){if(!this._chart){return null}return this._chart.getImageURI()},_viewChanged:function(view){if(!view){return}this._dataView=view},_rowsOrColumnsChanged:function(){var rows=this.rows,cols=this.cols;if(!rows||!cols){return}const loader=this.$.loader;loader.dataTable(void 0).then(function(dataTable){cols.forEach(function(col){dataTable.addColumn(col)});dataTable.addRows(rows);return dataTable}.bind(this)).then(loader.dataView.bind(loader)).then(function(dataView){this._dataView=dataView}.bind(this)).catch(function(reason){this.$.chartdiv.textContent=reason}.bind(this))},_dataChanged:function(data){var dataPromise;if(!data){return}var isString=!1;try{data=JSON.parse(data)}catch(e){isString="string"==typeof data||data instanceof String}if(isString){var request=document.createElement("iron-request");dataPromise=request.send({url:data,handleAs:"json"}).then(function(xhr){return xhr.response})}else{dataPromise=Promise.resolve(data)}const loader=this.$.loader;dataPromise.then(loader.dataTable.bind(loader)).then(loader.dataView.bind(loader)).then(function(dataView){this._dataView=dataView}.bind(this))},_localizeGlobalStylesheets:function(){for(var stylesheets=dom(document.head).querySelectorAll("link[rel=\"stylesheet\"][type=\"text/css\"]"),stylesheetsArray=Array.from(stylesheets),i=0;i<stylesheetsArray.length;i++){var sheetLinkEl=stylesheetsArray[i],isGchartStylesheet=0==sheetLinkEl.id.indexOf("load-css-");if(isGchartStylesheet){var clonedLinkEl=document.createElement("link");clonedLinkEl.setAttribute("rel","stylesheet");clonedLinkEl.setAttribute("type","text/css");clonedLinkEl.setAttribute("href",sheetLinkEl.getAttribute("href"));dom(this.$.styles).appendChild(clonedLinkEl)}}}});import("../config/loader.js").then(bundle=>bundle&&bundle.$loader||{});class Beranda extends mixinBehaviors([NeonAnimationRunnerBehavior,IronResizableBehavior],PolymerElement){static get template(){return html$1`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }

       
         /* Phone and tablet */
          #chartBMM {
            height: 300px;
            width: 300px;
          }
          /* Desktop */
          @media screen and (min-width: 1024px) {
            #chartBMM {
              width: 600px;
            }
          }

          #main {
          display :none;
        }

      </style>
       <bmm-loader></bmm-loader>
      <div class="card" id="main">
        <h1> Grafik Proposal Masuk Baitulmaal Muamalat</h1>
        <paper-button raised class="indigo" on-click="refreshCount">Refresh</paper-button>
        <google-chart 
          id="chartBMM"
          type="pie"
          cols='[{"label": "Kategori", "type": "string"},{"label": "Jumlah", "type": "number"}]'
          rows='{{Kategori}}'
          options='{"vAxis": {"minValue" : 0, "maxValue": 10},
          "chartArea": {"width": "100%"},
          "selectionMode": "multiple"}'
         >
        </google-chart>

        <iron-ajax
          id="Counts"
          headers='{"Access-Control-Allow-Origin": "*" }'
          handle-as="json"
          method="GET"
          on-response="getCount"
          on-error="handleError"
          Content-Type="application/json"
          debounce-duration="300">
      </iron-ajax>
      <global-variable key="LoginCred" 
           value="{{ storedUser }}">
      </global-variable>
      <global-variable key="error" 
           value="{{ error }}">
      </global-variable>
      <global-data id="globalData">
      </global-data>
      
      </div>
    `}static get properties(){return{Kategori:{type:Array,notify:!0,value:function(){return[["data",1]]}},data:{type:Object,notify:!0},options:{type:Object,notify:!0},storedUser:{type:Object,notify:!0}}}_loading(show){if(0==show){this.shadowRoot.querySelector("#main").style.display="block";var that=this;setTimeout(function(){that.shadowRoot.querySelector("bmm-loader").style.display="none"},2e3)}else{this.shadowRoot.querySelector("#main").style.display="none";this.shadowRoot.querySelector("bmm-loader").style.display="block"}}static get observers(){return["refreshCount(storedUser.*)"]}getCount(e){var data=e.detail.response.data,kategori=[];for(var key in data){kategori.push([key,data[key]])}this.Kategori=kategori;this._loading(0)}refreshCount(store){var storeData=!store.value?this.storedUser:store.value;this.$.Counts.url=MyAppGlobals.apiPath+"/api/pendaftarancount";this.$.Counts.headers.authorization=storeData.access_token;this.$.Counts.generateRequest()}connectedCallback(){super.connectedCallback();this._loading(1);this.addEventListener("iron-resize",this.onIronResize.bind(this))}onIronResize(){this.$.chartBMM.redraw()}handleError(e){this.error=e.detail.request.xhr.status}}window.customElements.define("bmm-beranda",Beranda);