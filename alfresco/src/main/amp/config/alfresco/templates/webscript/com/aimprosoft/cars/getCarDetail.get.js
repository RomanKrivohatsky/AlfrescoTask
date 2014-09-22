

// получаем значение параметра brand
var carID = args["carID"];

// search for Car nodes
//var car = companyhome.car.childrenByLuceneSearch["TYPE:'cm:content'"];
//search.luceneSearch("TYPE\:\"my\:car\"" + "@my\\:brand:\\"" + brand + ""\"")

var searhString = "TYPE\:\"my\:car\" + @sys\\:node-uuid:\"" + carID + "\"";

var carArray = search.luceneSearch(searhString);
var carDetail = {};
var car = carArray[0];

if (car != null) {

    var imagsPaths = "";

    if (car.getType() == "{my.new.car}car") {
        
        if (car.hasAspect("my:images")) {
            var imageList = car.assocs["my:imageList"];
            if (imageList != null) {
                var len2 = imageList.length;
                for (var index = 0; index < len2; ++index) {
                    var imageUrl = "";
                    imageUrl = imageList[index].getUrl().toString();
                    imagsPaths = imagsPaths + imageUrl + ";";

                }
            }
        }

        //Alfresco.constants.PROXY_URI_RELATIVE

        carDetail =
            {
                "type": car.getType(),
                "model": car.properties["my:model"],
                "brand": car.properties["my:brand"],
                "Gearbox": "" + car.properties["my:Gearbox"],
                "mileage": "" + car.properties["my:mileage"],
                "Drive": "" + car.properties["my:Drive"],
                "doors": "" + car.properties["my:doors"],
                "seats": "" + car.properties["my:seats"],
                "color": "" + car.properties["my:color"],
                "constructionDate": "" + car.properties["my:constructionDate"].getFullYear(),
                "body": "" + car.properties["my:body"],
                "engineType": "" + car.properties["my:engineType"],
                "priceValue": "" + car.properties["my:priceValue"],
                "NameDealer": "" + car.properties["my:NameDealer"],
                "contacts": "" + car.properties["my:contacts"],
                "images": imagsPaths
            };
    }
}

// заполняем model для передачи данных в FreeMarker
model.data = {"carDetail": carDetail};