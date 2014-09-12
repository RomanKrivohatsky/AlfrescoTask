/**
 * Created by rom4 on 9/9/14.
 */
/**
 * Created by rom4 on 8/29/14.
 */
// js-контроллер

function getcars (args) {
// подключаемся к /alfresco
    var connector = remote.connect('alfresco');
// получаем JSON от веб-скрипта
    var dataStr = connector.get('/ossportal/getCars?brand=' + args);
// преобразуем строку в ассоциативный массив
    var data = eval('('+dataStr+')').data;

// заполняем model
    model.data = data;


}
