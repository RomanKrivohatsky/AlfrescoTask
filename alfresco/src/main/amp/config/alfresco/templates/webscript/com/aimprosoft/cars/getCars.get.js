
// получаем значение параметра brand
var carBody = args["carBody"];
var brand = args["brand"];
var  modelArg = args["model"];
var  yearFrom = args["yearFrom"];
var  yearTo = args["yearTo"];
var  priceFrom = args["priceFrom"];
var  priceTo = args["priceTo"];

list = [];

// search for Car nodes
//var cars = companyhome.Cars.childrenByLuceneSearch["TYPE:'cm:content'"];
//search.luceneSearch("TYPE\:\"my\:car\"" + "@my\\:brand:\\"" + brand + ""\"")

var searhString = "TYPE\:\"my\:car\"";

if (carBody.length > 0 && carBody != "{carBody?}" && carBody != "all"  ) {
    searhString = searhString + " + @my\\:body:\"" + carBody + "\"";
}

if (brand.length > 0 && brand != "{brand?}" && brand != "all"  ) {
    searhString = searhString + " + @my\\:brand:\"" + brand + "\"";
}



if ( modelArg.length > 0 && modelArg != "{model}" && modelArg != "all"  ) {
    searhString = searhString + " + @my\\:model:\"" + modelArg + "\"";
}

if ( ( yearFrom.length > 0 && yearFrom != "{yearFrom}" && yearFrom != "all")
    || ( yearTo.length > 0 && yearTo != "{yearTo}" && yearTo != "all" ) ) {

    if ( (yearFrom.length > 0 && yearFrom != "{yearFrom}" && yearFrom != "all")
        &&  (yearTo.length > 0 && yearTo != "{yearTo}" && yearTo != "all"  )) {
        searhString = searhString + " + @my\\:constructionDate:\[" + yearFrom + "-01-01'T'00:00:00.000 TO " + yearTo + "-01-01'T'00:00:00.000 \]";
    }
    else {
        if ( yearFrom.length > 0 && yearFrom != "{yearFrom}" && yearFrom != "all") {
            searhString = searhString + " + @my\\:constructionDate:\[" + yearFrom + "-01-01'T'00:00:00.000 TO MAX \]";
        }

        if ( yearTo.length > 0 && yearTo != "{yearTo}" && yearFrom != "all") {
            searhString = searhString + " + @my\\:constructionDate:\[ MIN TO " + yearTo + "-01-01'T'00:00:00.000 \]";
        }
    }
}

if ( ( priceFrom.length > 0 && priceFrom != "{priceFrom}" && priceFrom != "all")
    || ( priceTo.length > 0 && priceTo != "{priceTo}" && priceTo != "all" ) ) {

    if ( (priceFrom.length > 0 && priceFrom != "{priceFrom}" && priceFrom != "all")
        &&  (priceTo.length > 0 && priceTo != "{yearTo}" && priceTo != "all"  )) {
        searhString = searhString + " + @my\\:priceValue:\[" + priceFrom + " TO " + priceTo   + "\]";
    }
    else {
        if ( priceFrom.length > 0 && priceFrom != "{yearFrom}" && priceFrom != "all") {
            searhString = searhString + " + @my\\:priceValue:\[" + priceFrom + " TO MAX \]";
        }

        if ( priceTo.length > 0 && priceTo != "{yearTo}" && priceTo != "all") {
            searhString = searhString + " + @my\\:priceValue:\[ MIN TO " + priceTo + "\]";
        }
    }
}
var cars = search.luceneSearch(searhString);

var len = 0
if (cars != null) {
    len = cars.length;
}

for (var index = 0; index < len; ++index) {

    var imagsPaths = "";

    if (cars[index].getType() == "{my.new.car}car") {
        var car = cars[index];

        if (car.hasAspect("my:images")) {
            var imageList = car.assocs["my:imageList"];
            if (imageList != null) {
                var len2 = imageList.length;
                for (var index2 = 0; index2 < len2; ++index2) {
                    var imageUrl = "";
                    imageUrl = imageList[index2].getUrl().toString();
                    imagsPaths = imagsPaths + imageUrl + ";";

                }
            }
        }

        list.push(
            {
                "type": car.getType(),
                "ID": car.getId(),
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
            });
    }
}

// заполняем model для передачи данных в FreeMarker
model.data = {"items": list};