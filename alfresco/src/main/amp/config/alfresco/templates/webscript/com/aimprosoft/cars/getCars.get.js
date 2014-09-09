// получаем значение параметра brand
var brand = args["brand"];
// инициализируем массив
list = [];
//var cars = companyhome.childByNamePath("Cars");

// search for Car nodes
//var cars = companyhome.Cars.childrenByLuceneSearch["TYPE:'cm:content'"];
var searhString = "TYPE\:\"my\:car\""
//search.luceneSearch("TYPE\:\"my\:car\"" + "@my\\:brand:\\"" + brand + ""\"")
// search.luceneSearch("TYPE\:\"my\:car\" and @my\\:brand:\"bmw\"")
//search.luceneSearch("TYPE\:\"my\:car\" and @my\\:brand:\"bmw\"")


if (brand.length > 0 && brand != "{brand?}") {
    searhString = "@my\\:brand:\"" + brand + "\""
}
var cars = search.luceneSearch(searhString)

var len = cars.length;
for (var index = 0; index < len; ++index) {

    var imagsPaths;

    if (cars[index].getType() == "{my.new.car}car") {
        var car = cars[index];


        if (car.hasAspect("my:images")) {
            var imageList = car.assocs["my:imageList"];
            if (imageList != null) {
                var len2 = imageList.length;
                for (var index2 = 0; index2 < len2; ++index2) {
                    var imageUrl = imageList[index2].getUrl();
                    imagsPaths += imageUrl + ";";

                }
            }
        }

        list.push(
            {
                "type": car.getType(),
                "model": car.properties["my:model"],
                "brand": car.properties["my:brand"],
                "Gearbox": "" + car.properties["my:Gearbox"],
                "mileage": "" + car.properties["my:mileage"],
                "Drive": "" + car.properties["my:Drive"],
                "doors": "" + car.properties["my:doors"],
                "seats": "" + car.properties["my:seats"],
                "images": imagsPaths
            });
    }
}

// заполняем model для передачи данных в FreeMarker
model.data = {"items": list};