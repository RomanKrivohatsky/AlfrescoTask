(function(){var g=YAHOO.util.Dom,d=YAHOO.util.Event,c=YAHOO.util.Selector;Alfresco.dashlet.MyDocuments=function f(i){return Alfresco.dashlet.MyDocuments.superclass.constructor.call(this,i)};YAHOO.extend(Alfresco.dashlet.MyDocuments,Alfresco.component.SimpleDocList,{PREFERENCES_MYDOCUMENTS_DASHLET_FILTER:"",PREFERENCES_MYDOCUMENTS_DASHLET_VIEW:"",onReady:function b(){var j=this.services.preferences.getDashletId(this,"mydocuments");this.PREFERENCES_MYDOCUMENTS_DASHLET_FILTER=j+".filter";this.PREFERENCES_MYDOCUMENTS_DASHLET_VIEW=j+".simpleView";this.widgets.filter=Alfresco.util.createYUIButton(this,"filters",this.onFilterChange,{type:"menu",menu:"filters-menu",lazyloadmenu:false});var i=this.options.filter;i=Alfresco.util.arrayContains(this.options.validFilters,i)?i:this.options.validFilters[0];this.widgets.filter.set("label",this.msg("filter."+i));this.widgets.filter.value=i;this.widgets.simpleDetailed=new YAHOO.widget.ButtonGroup(this.id+"-simpleDetailed");if(this.widgets.simpleDetailed!==null){this.widgets.simpleDetailed.check(this.options.simpleView?0:1);this.widgets.simpleDetailed.on("checkedButtonChange",this.onSimpleDetailed,this.widgets.simpleDetailed,this)}g.removeClass(c.query(".toolbar div",this.id,true),"hidden");Alfresco.dashlet.MyDocuments.superclass.onReady.apply(this,arguments)},getParameters:function a(){return"filter="+this.widgets.filter.value},onFilterChange:function h(j,i){var k=i[1];if(k){this.widgets.filter.set("label",k.cfg.getProperty("text"));this.widgets.filter.value=k.value;this.services.preferences.set(this.PREFERENCES_MYDOCUMENTS_DASHLET_FILTER,this.widgets.filter.value);this.reloadDataTable()}},onSimpleDetailed:function e(i,j){this.options.simpleView=i.newValue.index===0;this.services.preferences.set(this.PREFERENCES_MYDOCUMENTS_DASHLET_VIEW,this.options.simpleView);if(i){d.preventDefault(i)}this.reloadDataTable()}})})();