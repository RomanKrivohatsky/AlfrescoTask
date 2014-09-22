/**
 * Created by rom4 on 8/29/14.
 */
// js-контроллер
//<import resource="classpath:/alfresco/template-instances/org/alfresco/import/alfresco-util.js " >

function main() {

var imagesPaths = RequestParameters.get("images").toString();
var images =   imagesPaths.split(";");

    //RequestParameters.get("PROXY_URI_RELATIVE").toString() +
//+images[index].substring(5, images[index].length - 4);

var len = images.length;
for (var index = 0; index < len; ++index) {
    var str = images[index].toString();
    var strLen = str.length();
    images[index] =  RequestParameters.get("PROXY_URI_RELATIVE").toString() + "api/node/content/" + images[index].substring(5,strLen - 4);
}

var mainImage = images[0];
var imageList = images.slice(1,images.length);

//htmlImage = htmlImage + "<a href = " + imagePath + " >  <img src = " + imagePath + "  onerror='' title='image' width='150' /> </a> </div>";


var car = {
    "detail": {
        "brand": RequestParameters.get("brand"),
        "model": RequestParameters.get("model"),
        "gearbox": RequestParameters.get("gearbox"),
        "mileage": RequestParameters.get("mileage"),
        "drive": RequestParameters.get("drive"),
        "doors": RequestParameters.get("doors"),
        "seats": RequestParameters.get("seats"),
        "body": RequestParameters.get("body"),
        "engineType": RequestParameters.get("engineType"),
        "priceValue": RequestParameters.get("priceValue"),
        "NameDealer": RequestParameters.get("NameDealer"),
        "contacts": RequestParameters.get("contacts"),
        "constructionDate": RequestParameters.get("constructionDate")
    },

    "mainImage": mainImage,
    "images": imageList

};

model.data = car;

}

main();


