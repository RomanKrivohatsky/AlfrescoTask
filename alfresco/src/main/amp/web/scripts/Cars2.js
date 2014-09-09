/*
function unzipFile() {
    //folders for unzip
    var dest = companyhome.childByNamePath("Cars");
    var tempFolder = companyhome.childByNamePath("temp");
    if (tempFolder == null) {
        companyhome.createFolder("temp");
    }


    CarUnzip.unzipCar(document, tempFolder);
    var carXML = tempFolder.childByNamePath("Car.xml");
    //var folderName = carXML.propeprties["my:brand"];

    var car = parseXML(carXML);
    var folderName = car.brand;
    var carDataFolder = companyhome.createFolder(folderName);
    tempFolder.move(dest);
    document.remove();
}

function parseXML(carXML) {

    var results = carXML;
    var car = new XML();
    car = <car>
        <carOwnerName></carOwnerName>
        <brand></brand>
        <model></model>
        <yearOfConstruction></yearOfConstruction>
        <engine></engine>
        <gearbox></gearbox>
        <mileage></mileage>
        <drive></drive>
        <doors></doors>
        <seats></seats>
        <color></color>
        <contactInformation></contactInformation>
    </car>


    var str = new String(results.content);

    if (str.indexOf("brand") != -1) {
        var brand = new XML(str);
        startBrandElement = str.indexOf("<brand>");
        endBrandElement = str.indexOf("</brand>");
        brand = str.substr(startBrandElement + 7, function unzipFile() {
            //folders for unzip
            var dest = companyhome.childByNamePath("Cars");
            var tempFolder = companyhome.childByNamePath("temp");
            if (tempFolder == null) {
                companyhome.createFolder("temp");
            }


            CarUnzip.unzipCar(document, tempFolder);
            var carXML = tempFolder.childByNamePath("Car.xml");
            //var folderName = carXML.propeprties["my:brand"];

            var car = parseXML(carXML);
            var folderName = car.brand;
            var carDataFolder = companyhome.createFolder(folderName);
            tempFolder.move(dest);
            document.remove();
        }

        function parseXML(carXML) {

            var car = new XML(carXML.content);

            car2 = <car>
                <carOwnerName></carOwnerName>
                <brand></brand>
                <model></model>
                <yearOfConstruction></yearOfConstruction>
                <engine></engine>
                <gearbox></gearbox>
                <mileage></mileage>
                <drive></drive>
                <doors></doors>
                <seats></seats>
                <color></color>
                <contactInformation></contactInformation>
            </car>


            var str = new String(results.content);

            if (str.indexOf("brand") != -1) {
                var brand = new XML(str);
                startBrandElement = str.indexOf("<brand>");
                endBrandElement = str.indexOf("</brand>");
                brand = str.substr(startBrandElement + 7, endBrandElement - startBrandElement);
                car.brand = brand;
            }


            model.car = car.toXMLString();
            return car;

        }

        function setProp() {

            if (carXML.getType() != "{my.new.car}car") {
                carXML.specializeType("{my.new.car}car");
                carXML.properties["my:model"] = "520";
                carXML.properties["my:brand"] = "BMW";
                carXML.properties["my:Gearbox"] = "4";
                carXML.properties["my:doors"] = "5";
                carXML.properties["my:seats"] = "5";
                carXML.properties["my:color"] = "red";
                carXML.save();
            }
        };


        unzipFile();
        setProp();
        - startBrandElement);
        car.brand = brand;
    }


    model.car = car.toXMLString();
    return car;

}

function setProp() {

    if (carXML.getType() != "{my.new.car}car") {
        carXML.specializeType("{my.new.car}car");
        carXML.properties["my:model"] = "520";
        carXML.properties["my:brand"] = "BMW";
        carXML.properties["my:Gearbox"] = "4";
        carXML.properties["my:doors"] = "5";
        carXML.properties["my:seats"] = "5";
        carXML.properties["my:color"] = "red";
        carXML.save();
    }
};


unzipFile();
setProp();
*/