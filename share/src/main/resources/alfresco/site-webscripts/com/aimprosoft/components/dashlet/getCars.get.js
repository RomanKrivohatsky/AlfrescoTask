/**
 * Created by rom4 on 8/29/14.
 */
// js-контроллер
//<import resource="classpath:/alfresco/templates/org/alfresco/import/alfresco-util.js " >

function main()
{



var getCars = {
    id : "getCars",
    name : "Alfresco.dashlet.GetCars"
};

var dashletResizer = {
    id : "DashletResizer",
    name : "Alfresco.widget.DashletResizer",
    initArgs : ["\"" + args.htmlid + "\"", "\"" + instance.object.id + "\""],
    useMessages: false
    };

var dashletTitleBarActions = {
    id : "DashletTitleBarActions",
    name : "Alfresco.widget.DashletTitleBarActions",
    useMessages : false,
    options : {
    actions: [
    {
    cssClass: "help",
    bubbleOnClick:
    {
    message: msg.get("dashlet.help")
    },
tooltip: msg.get("dashlet.help.tooltip")
}
]
}
};
model.widgets = [getCars, dashletResizer, dashletTitleBarActions];
}

/*// подключаемся к /alfresco
var connector = remote.connect('alfresco');
// получаем JSON от веб-скрипта
var dataStr = connector.get('/ossportal/getCars?brand=audi');
// преобразуем строку в ассоциативный массив
var data = eval('('+dataStr+')').data;*/

// заполняем model
//model.data = data;

main();


