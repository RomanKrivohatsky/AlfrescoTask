<#escape x as jsonUtils.encodeJSONString(x)>
{
"data":
{

"items":
[
    <#list data.items as item>
    {
    "type": "${item.type}",
    "model": "${item.model}",
    "brand": "${item.brand}",
    "gearbox": "${item.Gearbox}",
    "mileage": "${item.mileage}",
    "drive": "${item.Drive}",
    "doors": "${item.doors}",
    "seats": "${item.seats}"

    }<#if item_has_next>,</#if>
    </#list>
]
}
}
</#escape>