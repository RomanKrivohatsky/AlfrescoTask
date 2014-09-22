/**
 * Created by rom4 on 8/29/14.
 */
// js-контроллер
//<import resource="classpath:/alfresco/template-instances/org/alfresco/import/alfresco-util.js " >

function main() {

// подключаемся к /alfresco
    var connector = remote.connect('alfresco');
// получаем JSON от веб-скрипта
    var id = args.carID;
    var proxyURI = args.proxyURI;
    var dataStr = connector.get('/ossportal/getCarDetail?carID=' + id);

// преобразуем строку в ассоциативный массив
    var carDetail = eval('(' + dataStr + ')').carDetail;
    var imagesPaths = carDetail.images.toString();
    var images = [];
    images = imagesPaths.split(";");

    var len = images.length;
    for (var index = 0; index < len; ++index) {
        var str = images[index].toString();
        var strLen = str.length;
        images[index] = proxyURI.toString() + "api/node/content/" + images[index].substring(5, strLen - 4);
        //images[index] = "api/node/content/" + images[index].substring(5, strLen - 4);
    }

    var mainImage = images[0];
    var imageList = images.slice(1, images.length - 1);

//htmlImage = htmlImage + "<a href = " + imagePath + " >  <img src = " + imagePath + "  onerror='' title='image' width='150' /> </a> </div>";

    var car = {
        "detail": {
            "brand": carDetail.brand,
            "model": carDetail.model,
            "gearbox": carDetail.gearbox,
            "mileage": carDetail.mileage,
            "drive": carDetail.drive,
            "doors": carDetail.doors,
            "seats": carDetail.seats,
            "body": carDetail.body,
            "engineType": carDetail.engineType,
            "priceValue": carDetail.priceValue,
            "NameDealer": carDetail.NameDealer,
            "contacts": carDetail.contacts,
            "constructionDate": carDetail.constructionDate
        },

        "mainImage": mainImage,
        "images": imageList

    };
    model.data = car;
}

main();


