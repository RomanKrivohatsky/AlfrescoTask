<#escape x as jsonUtils.encodeJSONString(x)>
{
"data":
{

"items":
[
    <#list data.items as item>
    {
    "type": "${item.type}",
    "ID": "${item.ID}",
    "model": "${item.model}",
    "brand": "${item.brand}",
    "gearbox": "${item.Gearbox}",
    "mileage": "${item.mileage}",
    "drive": "${item.Drive}",
    "doors": "${item.doors}",
    "seats": "${item.seats}",
    "color": "${item.color}",
    "constructionDate": "${item.constructionDate}",
    "body": "${item.body}",
    "engineType": "${item.engineType}",
    "priceValue": "${item.priceValue}",
    "NameDealer": "${item.NameDealer}",
    "contacts": "${item.contacts}",
    "images": "${item.images}"
}<#if item_has_next>,</#if>
    </#list>
]
}
}
</#escape>