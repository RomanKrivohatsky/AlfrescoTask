/**
 * Created by rom4 on 9/9/14.
 */
/**
 * Dashboard CarDetails component.
 *
 * @namespace Alfresco
 * @class Alfresco.dashlet.CarDetails
 */

/**
 * MyCompany root namespace.
 *
 * @namespace MyCompany
 */
if (typeof CarDetails == "undefined" || !CarDetails) {
    var CarDetails = {};
}

/**
 * MyCompany dashlet namespace.
 *
 * @namespace MyCompany.dashlet
 */
if (typeof CarDetails.dashlet == "undefined" || !CarDetails.dashlet) {
    CarDetails.dashlet = {};
}

(function () {
    /**
     * YUI Library aliases
     */
    /*var Dom = YAHOO.util.Dom,
        Event = YAHOO.util.Event,
        Selector = YAHOO.util.Selector;
    */

    /**
     * Dashboard CarDetails constructor.
     *
     * @param {String} htmlId The HTML id of the parent element
     * @return {Alfresco.dashlet.CarDetails} The new component instance
     * @constructor
     */
    Alfresco.dashlet.CarDetails = function CarDetails_constructor(htmlId) {
        // usually extending Alfresco.component.Base or something.
        // here, you also often declare array of YUI components you'll need,
        // like button, datatable etc

        Alfresco.dashlet.CarDetails.superclass.constructor.call(this, "Alfresco.dashlet.CarDetails",htmlId);

        // Services
        // this.services.preferences = new Alfresco.service.Preferences();

        return this;
    };

    //YAHOO.extend(Alfresco.dashlet.CarDetails, Alfresco.component.Base);

    YAHOO.extend(Alfresco.dashlet.CarDetails, Alfresco.component.Base,

        {

            PREFERENCES_MYDOCUMENTS_DASHLET_FILTER: "",
            PREFERENCES_MYDOCUMENTS_DASHLET_VIEW: "",

            /**
             * Fired by YUI when parent element is available for scripting
             * @method onReady
             */
            onReady: function CarDetails_onReady() {
                /**
                 * Preferences
                 */
            }

            });
    


})();
