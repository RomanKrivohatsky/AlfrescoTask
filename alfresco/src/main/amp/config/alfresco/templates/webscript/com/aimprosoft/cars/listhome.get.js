// получаем значение параметра dirsonly
var dirsonly = args["dirsonly"] == 'true' ? true : false;
 
// инициализируем массив
list = [];
// перебираем все элементы в домашней папке
for each(var child in userhome.children)
	// проверяем, нужно ли отображать этот элемент
	if ((child.isContainer && dirsonly) || !dirsonly)
		// добавляем новый объект в список
		list.push(
				{
					"name": child.properties["cm:name"],
					"uuid": child.properties["sys:node-uuid"],
					"folder": child.isContainer
				});
 
// заполняем model для передачи данных в FreeMarker
model.data = {"userhome": userhome.displayPath, "items" :list};