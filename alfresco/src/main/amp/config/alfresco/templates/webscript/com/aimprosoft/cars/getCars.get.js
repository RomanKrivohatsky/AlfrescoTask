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


if (brand.length > 0 && brand !=  "{brand?}") {
  searhString = "@my\\:brand:\"" + brand + "\""
}
var cars = search.luceneSearch(searhString)

var len = cars.length;
for (var index = 0; index < len; ++index) {

    if (cars[index].getType() == "{my.new.car}car") {
        list.push(
            {
                "type": cars[index].getType(),
                "model": cars[index].properties["my:model"],
                "brand": cars[index].properties["my:brand"],
                "Gearbox": "" + cars[index].properties["my:Gearbox"],
                "mileage": "" + cars[index].properties["my:mileage"],
                "Drive": "" + cars[index].properties["my:Drive"],
                "doors": "" + cars[index].properties["my:doors"],
                "seats": "" + cars[index].properties["my:seats"]

            });
    }
}
 
// заполняем model для передачи данных в FreeMarker
model.data = {"items" :list};