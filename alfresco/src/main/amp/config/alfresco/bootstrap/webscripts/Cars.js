


unzipFile();

function unzipFile() {
    //folders for unzip
    var dest = companyhome.childByNamePath("Cars");
    var tempFolder = companyhome.childByNamePath("temp");
    if (tempFolder == null) {
        companyhome.createFolder("temp");
        tempFolder = companyhome.childByNamePath("temp");
    }

    CarUnzip.unzipCar(document, tempFolder);
    var carXML = tempFolder.childByNamePath("Car.xml");

    var car = parseXML(carXML);
    var folderName = car.brand;
    var currentDate = new Date();
    var carDataFolder = companyhome.createFolder(folderName + "_" + currentDate.getFullYear() + "_" + currentDate.getTime());
    setProp(carXML, car);
    imageActions(tempFolder, carDataFolder, carXML);
    carXML.move(carDataFolder);
    carDataFolder.move(dest);
    //document.remove();
    tempFolder.remove();
}

function imageActions (tempFolder, carDataFolder, carXML) {
    var contentFolder = tempFolder.children
    var len = contentFolder.length;
    for (var index = 0; index < len; ++index) {
        var content = contentFolder[index];
        if (content.mimetype == "image/jpeg") {
            var props = {};
            //props["my:imageList"].add = contentFolder[index].nodeRef;
            carXML.addAspect("my:images");
            carXML.createAssociation(content, "my:imageList")
            contentFolder[index].move(carDataFolder);
        }
    }
}

function parseXML(carXML) {
    var car = new XML(carXML.content);
    return car;
}

function setProp(carXML, car) {

    if (carXML.getType() != "{my.new.car}car") {
        carXML.specializeType("{my.new.car}car");
    }
    carXML.properties["my:model"] = String(car.model);
    carXML.properties["my:brand"] = String(car.brand);
    carXML.properties["my:Gearbox"] = String(car.gearbox);
    carXML.properties["my:doors"] = parseInt(car.doors);
    carXML.properties["my:seats"] = parseInt(car.seats);
    carXML.properties["my:color"] = String(car.color);
    constructionDate = new Date( car.yearOfConstruction.substring(0, 4),0,1);
    //constructionDate = new Date();
    //constructionDate.setDate(car.yearOfConstruction.toString());
   // constructionDate = Date.parse(car.yearOfConstruction);
    carXML.properties["my:constructionDate"] = constructionDate;
   var drive = car.drive.split(",");
    carXML.properties["my:Drive"] = drive;
    carXML.save();
    var props = new Array(1);
    props["my:body"] = String(car.carBody);;
    carXML.addAspect("my:carBody", props);
    var props = new Array(1);
    var engine = car.engine.split(",");
    props["my:engineType"] = engine;
    carXML.addAspect("my:engine", props);
    var props = new Array(1);
    props["my:priceValue"] = String(car.price);
    carXML.addAspect("my:price", props);
    var props = new Array(1);
    props["my:NameDealer"] = String(car.carOwnerName);
    props["my:contacts"] = String(car.contactInformation);
    carXML.addAspect("my:details", props);
    carXML.save();
};


