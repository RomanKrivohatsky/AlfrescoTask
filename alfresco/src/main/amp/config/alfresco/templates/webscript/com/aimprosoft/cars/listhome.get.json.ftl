<#--Включаем экранирование символов-->
<#escape x as jsonUtils.encodeJSONString(x)>
{
	<#--Корневой элемент-->
	"data":
	{
		<#-- Домашняя папка -->
		"userhome": "${data.userhome}",
		<#-- Список элементов -->
		"items":
		[
			<#--
				Перебираем все элементы в items
				и формируем ответ
				-->
			<#list data.items as item>
			{
				"name": "${item.name}",
				"uuid": "${item.uuid}",
				"folder": ${item.folder?string}
			}<#if item_has_next>,</#if>
			</#list>
		]
	}
}
</#escape>