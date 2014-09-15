/**
 * Created by rom4 on 9/9/14.
 */
/**
 * Dashboard GetCars component.
 *
 * @namespace Alfresco
 * @class Alfresco.dashlet.GetCars
 */

/**
 * MyCompany root namespace.
 *
 * @namespace MyCompany
 */
if (typeof GetCars == "undefined" || !GetCars) {
    var GetCars = {};
}

/**
 * MyCompany dashlet namespace.
 *
 * @namespace MyCompany.dashlet
 */
if (typeof GetCars.dashlet == "undefined" || !GetCars.dashlet) {
    GetCars.dashlet = {};
}
(function () {
    /**
     * YUI Library aliases
     */
    var Dom = YAHOO.util.Dom,
        Event = YAHOO.util.Event,
        Selector = YAHOO.util.Selector;
    carsDataGlobal = [];

    /**
     * Dashboard GetCars constructor.
     *
     * @param {String} htmlId The HTML id of the parent element
     * @return {Alfresco.dashlet.GetCars} The new component instance
     * @constructor
     */
    Alfresco.dashlet.GetCars = function GetCars_constructor(htmlId) {
        // usually extending Alfresco.component.Base or something.
        // here, you also often declare array of YUI components you'll need,
        // like button, datatable etc

        Alfresco.dashlet.GetCars.superclass.constructor.call(this, "Alfresco.dashlet.GetCars",
            htmlId, ["button", "container", "datasource", "datatable", "paginator"]);

        // Services
        // this.services.preferences = new Alfresco.service.Preferences();

        return this;
    };

    //YAHOO.extend(Alfresco.dashlet.GetCars, Alfresco.component.Base);

    YAHOO.extend(Alfresco.dashlet.GetCars, Alfresco.component.Base,

    {

            PREFERENCES_MYDOCUMENTS_DASHLET_FILTER: "",
            PREFERENCES_MYDOCUMENTS_DASHLET_VIEW: "",

            /**
             * Fired by YUI when parent element is available for scripting
             * @method onReady
             */
            onReady: function GetCars_onReady() {
                /**
                 * Preferences
                 */

                    //this.widgets.carsData = []

                this.widgets.mybutton = Alfresco.util.createYUIButton(this,
                    "advancedSearch",
                    this.onButtonClickDetail);

                this.widgets.mybutton = Alfresco.util.createYUIButton(this,
                    "Search",
                    this.onButtonClickSearch);

                Event.addListener(Dom.get("carBrand"), "change", this.changeBrand);

                var params = {brand: "all", model: "all"};


                Alfresco.util.Ajax.request({
                    url: Alfresco.constants.PROXY_URI + "ossportal/getCars",
                    dataObj: params,
                    method: Alfresco.util.Ajax.GET,   // can be post, put, delete
                    successCallback: { fn: function (response, config) {
                        carsDataGlobal = response.json.data.items;
                        //alert("responce");
                    }
                    },
                    failureCallback: { fn: function () {
                        carsDataGlobal = [];
                    }
                    }
                });
            },



        onButtonClickSearch: function GetCars_onButtonClickSearch() {

                var selectedBrand = '', selectedModel = '';
                var params = {brand: "all", model: "all"};

                if (Dom.hasClass("searchDetails", "hidden") === false) {
                    selectedBrand = Dom.get("carBrand").selectedOptions[0].value;
                    selectedModel = Dom.get("carModel").selectedOptions[0].value;
                }

                if (selectedBrand != "") {
                    params.brand = selectedBrand;
                }
                if (selectedModel != "") {
                    params.model = selectedModel;
                }

                 Alfresco.util.Ajax.request({
                 url: Alfresco.constants.PROXY_URI + "ossportal/getCars",
                 dataObj: params,
                 method: Alfresco.util.Ajax.GET,   // can be post, put, delete
                 successCallback: { fn: this.successHandler},
                 failureCallback: {fn: this.failureHandler  }

                 });
            },

           successHandler: function GetCars_successHandler(response, config) {

             var carsData = response.json.data.items;


             var domListCar = Dom.get("listCar");
             domListCar.innerHTML = "";

             for (var ind = 0; ind < carsData.length; ++ind) {
             var html = domListCar.innerHTML + "<p>" + carsData[ind].model
             domListCar.innerHTML = html;
             }
             },

            failureHandler: function GetCars_failureHandler(response, config) {
                window.alert("error!!!");
            },


            onButtonClickDetail: function GetCars_onButtonClick() {

                var carsData = carsDataGlobal;
                this.widgets.carsData = carsData;

                if (Dom.hasClass("searchDetails", "hidden") === true) {
                    Dom.removeClass("searchDetails", "hidden");
                    //brand
                    generateDropdown("carBrand", "brand",carsData );
                    //model
                    generateDropdown("carModel", "model",carsData );

                }
                else {
                    Dom.addClass("searchDetails", "hidden");
                }

            },

            changeBrand: function fnCallback(e) {
                alert("clickBrand");
            }
        });

    function generateDropdown(id, node, data) {

        var nodes = uniqueNodes(node, data);
        var len = nodes.length;
        var html = '';
        var dom = Dom.get(id);

        for (var ind = 0; ind < len; ++ind) {
            html = html + "<option value= " + nodes[ind] + ">" + nodes[ind] + "</option> "
        }
        dom.innerHTML = html;
    }

    function uniqueNodes(node, carsData) {
        var data = parseBrand(node, carsData);
        var uniqueNodes = [];
        var len = data.length;
        for (var index = 0; index < len; ++index) {
            if (data[index] != "" && (typeof data[index]) == "string") {
                if (!inArray(data[index], uniqueNodes)) {
                    uniqueNodes.push(data[index]);
                }
            }
        }
        return uniqueNodes;
    }

    function inArray(value, array) {
        var len = array.length;
        for (var index = 0; index < len; ++index) {
            if (value === array[index]) {
                return true;
            }
        }
        return false;
    }

    function parseBrand(node, carsData) {
        var data = [];
        var len = carsData.length;
        for (var index = 0; index < len; ++index) {
            data.push(carsData[index][node]);
        }
        return data;
    }


})();
