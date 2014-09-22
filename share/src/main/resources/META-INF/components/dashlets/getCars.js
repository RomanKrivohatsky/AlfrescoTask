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

                var params = {carBody: "all",
                    brand: "all",
                    model: "all",
                    yearFrom: "all",
                    yearTo: "all",
                    priceFrom: "all",
                    priceTo: "all"
                };

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

                var selectedBrand = '', selectedModel = '', selectedBody = '',
                    yearFrom = '', yearTo = '', priceFrom = '', priceTo = '';
                var params = {carBody: "all",
                    brand: "all",
                    model: "all",
                    yearFrom: "all",
                    yearTo: "all",
                    priceFrom: "all",
                    priceTo: "all"
                };

                //var domCarBody = Dom.get("carBody");
                var domCarBody = document.getElementsByName('body');


                for (var ind = 0; ind < domCarBody.length; ++ind) {
                    if (domCarBody[ind].checked == true) {
                        selectedBody = domCarBody[ind].value;
                    }
                }

                if (Dom.hasClass("searchDetails", "hidden") === false) {
                    selectedBrand = Dom.get("carBrand").selectedOptions[0].value;
                    selectedModel = Dom.get("carModel").selectedOptions[0].value;
                    yearFrom = Dom.get("yearFrom").value;
                    yearTo = Dom.get("yearTo").value;
                    priceFrom = Dom.get("priceFrom").value;
                    priceTo = Dom.get("priceTo").value;
                }

                if (selectedBody != "" && selectedBody != "All") {
                    params.carBody = selectedBody;
                }
                if (selectedBrand != "" && selectedBrand != "all") {
                    params.brand = selectedBrand;
                }
                if (selectedModel != "" && selectedModel != "all") {
                    params.model = selectedModel;
                }
                if (yearFrom != "") {
                    params.yearFrom = yearFrom;
                }
                if (yearTo != "") {
                    params.yearTo = yearTo;
                }
                if (priceFrom != "") {
                    params.priceFrom = priceFrom;
                }
                if (priceTo != "") {
                    params.priceTo = priceTo;
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
                var listCarImage = Dom.get("listCarImage");
                domListCar.innerHTML = "";
                listCarImage.innerHTML = "";
                var html = '', htmlImage = '';
              /*  var html = "<table border='1' >"
                html = html + "<tr> <td> <b> brand  </td>";
                html = html + "<td> <b> model  </td>"
                html = html + "<td> <b> gearbox  </td>"
                html = html + "<td> <b> mileage  </td>"
                html = html + "<td> <b> drive  </td>"
                html = html + "<td> <b> doors  </td>"
                html = html + "<td> <b> seats  </td>"
                html = html + "<td> <b> color  </td>"
                html = html + "<td> <b> body  </td>"
                html = html + "<td> <b> engineType  </td>"
                html = html + "<td> <b> priceValue  </td>"
                html = html + "<td> <b> NameDealer  </td>"
                html = html + "<td> <b> contacts  </td>"
                html = html + "<td> <b> constructionDate  </td>"
                html = html + "<td> <b> image  </td></tr>"*/


                for (var ind = 0; ind < carsData.length; ++ind) {

                  /*  html = html + "<tr> <td> " + carsData[ind].brand + "</td>";
                    html = html + "<td> " + carsData[ind].model + "</td>"
                    html = html + "<td> " + carsData[ind].gearbox + "</td>"
                    html = html + "<td> " + carsData[ind].mileage + "</td>"
                    html = html + "<td> " + carsData[ind].drive + "</td>"
                    html = html + "<td> " + carsData[ind].doors + "</td>"
                    html = html + "<td> " + carsData[ind].seats + "</td>"
                    html = html + "<td> " + carsData[ind].color + "</td>"
                    html = html + "<td> " + carsData[ind].body + "</td>"
                    html = html + "<td> " + carsData[ind].engineType + "</td>"
                    html = html + "<td> " + carsData[ind].priceValue + "</td>"
                    html = html + "<td> " + carsData[ind].NameDealer + "</td>"
                    html = html + "<td> " + carsData[ind].contacts + "</td>"
                    html = html + "<td> " + carsData[ind].constructionDate + "</td>"*/

                    //enctype='multipart/form-data'

                    html = html + "<div class='div-table-row'> " +
                    "<span class = 'div-font-car-description'>  <p><p><b> <a href = http://localhost:8080/share/page/carDetails?carID="
                            + carsData[ind].ID + "&proxyURI=" + Alfresco.constants.PROXY_URI_RELATIVE
                            + "> Car details </a> </b> "
                        + "<form method='POST' action = 'http://localhost:8080/share/page/carDetails'> "
                        +"<input type='hidden' name = 'model' value= '" + carsData[ind].model+ "'/>"
                        +"<input type='hidden' name = 'brand' value= '" + carsData[ind].brand+ "'/>"
                        +"<input type='hidden' name = 'gearbox' value= '" + carsData[ind].gearbox+ "'/>"
                        +"<input type='hidden' name = 'mileage' value= '" + carsData[ind].mileage+ "'/>"
                        +"<input type='hidden' name = 'drive' value= '" + carsData[ind].drive+ "'/>"
                        +"<input type='hidden' name = 'doors' value= '" + carsData[ind].doors+ "'/>"
                        +"<input type='hidden' name = 'seats' value= '" + carsData[ind].seats+ "'/>"
                        +"<input type='hidden' name = 'body' value= '" + carsData[ind].body+ "'/>"
                        +"<input type='hidden' name = 'engineType' value= '" + carsData[ind].engineType+ "'/>"
                        +"<input type='hidden' name = 'priceValue' value= '" + carsData[ind].priceValue+ "'/>"
                        +"<input type='hidden' name = 'NameDealer' value= '" + carsData[ind].NameDealer+ "'/>"
                        +"<input type='hidden' name = 'contacts' value= '" + carsData[ind].contacts+ "'/>"
                        +"<input type='hidden' name = 'constructionDate' value= '" + carsData[ind].constructionDate+ "'/>"

                        +"<input type='hidden' name = 'images' value= '" + carsData[ind].images+ "'/>"
                        +"<input type='hidden' name = 'PROXY_URI_RELATIVE' value= '" + Alfresco.constants.PROXY_URI_RELATIVE + "'/>"

                        + "<input type='submit' value = 'Details'> </form>"
                        + "<p><b> Model:</b>" + carsData[ind].brand + " " + carsData[ind].model + " " + carsData[ind].body + "  <p><b> Year of Construction:</b> " + carsData[ind].constructionDate
                        + "  <p><b>Price:</b>" + carsData[ind].priceValue + "</span></div>"

                    var images = carsData[ind].images.split(";");

                    //trow proxy http://localhost:8080/share/proxy/alfresco/api/node/content/workspace/SpacesStore/39795594-ffa8-4ca0-8eac-a2ad1e4347a9/images.jpg
                    var imagePath =  Alfresco.constants.PROXY_URI_RELATIVE + "api/node/content/" + images[0].substring(5, images[0].length - 4);

                    //html = html  +  "  <td>  <img src = " + imagePath + "  onerror='' title='image' width='48' /> </td>";
                    //html = html  +  "  <td>  <a href = " + imagePath + " > View full image </> </td>";

                    htmlImage =  htmlImage +  " <div class='div-table-row'>"

                    htmlImage = htmlImage + "<a href = " + imagePath + " >  <img src = " + imagePath + "  onerror='' title='image' width='180' /> </a> </div>";

                }
               // html = html + "</tr> </table >"
                domListCar.innerHTML = html;
                listCarImage.innerHTML = htmlImage;

            },

            failureHandler: function GetCars_failureHandler(response, config) {
                window.alert("error!!!");
            },


            onButtonClickDetail: function GetCars_onButtonClick() {

                var carsData = carsDataGlobal;

                if (Dom.hasClass("searchDetails", "hidden") === true) {
                    Dom.removeClass("searchDetails", "hidden");
                    //brand
                    generateDropdown("carBrand", "brand", carsData);
                    //model
                    generateDropdown("carModel", "model", carsData);
                }
                else {
                    Dom.addClass("searchDetails", "hidden");
                }
            },


            changeBrand: function fnCallback(e) {
                var carsData = carsDataGlobal;
                selectedBrand = Dom.get("carBrand").selectedOptions[0].value;
                var domModel = Dom.get("carModel");
                var html = '';

                if (selectedBrand == "all") {
                    generateDropdown("carModel", "model", carsData)
                    return;
                }

                var len = carsData.length;
                var models = [];
                for (var ind = 0; ind < len; ++ind) {
                    if (carsData[ind].brand == selectedBrand) {
                        if (!inArray(carsData[ind].model, models)) {
                            models.push(carsData[ind].model);
                        }

                    }
                }

                var len = models.length;

                html = html + "<option value= 'all'>all</option> ";

                for (var ind = 0; ind < len; ++ind) {
                    html = html + "<option value= " + models[ind] + ">" + models[ind] + "</option> ";
                }
                domModel.innerHTML = html;
            }
        });

    function generateDropdown(id, node, data) {

        var nodes = uniqueNodes(node, data);
        var len = nodes.length;
        var html = '';
        var dom = Dom.get(id);

        html = html + "<option value= 'all'>all</option> ";

        for (var ind = 0; ind < len; ++ind) {
            html = html + "<option value= '" + nodes[ind] + "'>" + nodes[ind] + "</option> ";
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
