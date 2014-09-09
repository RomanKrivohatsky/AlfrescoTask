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
    carXML.properties["my:Gearbox"] = parseInt(car.Gearbox);
    carXML.properties["my:doors"] = parseInt(car.doors);
    carXML.properties["my:seats"] = parseInt(car.seats);
    carXML.properties["my:color"] = String(car.color);
    carXML.save();

};


