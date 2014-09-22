<@markup id="css">
<#-- CSS Dependencies -->
    <@link rel="stylesheet" type="text/css" href="${url.context}/res/components/dashlets/getCars.css" group="dashlets"/>
</@>


<div class="dashlet">

    <div class="title">${msg('label.title')}</div>

    <div class="div-table">
        <div class="div-table-col-left">

            <div class="div-table-row">
                <a href=${data.mainImage}> <img src= ${data.mainImage}   onerror='' title='image' width='250'/> </a>
            </div>

            <div class="div-table-row">
                <span> ${data.detail["model"]} </span>
            </div>
            <div class="div-table-row">
                <span> ${data.detail["brand"]} </span>
            </div>
            <div class="div-table-row">
                <span> ${data.detail["gearbox"]} </span>
            </div>
            <div class="div-table-row">
                <span> ${data.detail["mileage"]} </span>
            </div>
            <div class="div-table-row">
                <span> ${data.detail["drive"]} </span>
            </div>
            <div class="div-table-row">
                <span> ${data.detail["doors"]} </span>
            </div>
            <div class="div-table-row">
                <span> ${data.detail["seats"]} </span>
            </div>
            <div class="div-table-row">
                <span> ${data.detail["body"]} </span>
            </div>
            <div class="div-table-row">
                <span> ${data.detail["engineType"]} </span>
            </div>
            <div class="div-table-row">
                <span> ${data.detail["priceValue"]} </span>
            </div>
            <div class="div-table-row">
                <span> ${data.detail["NameDealer"]} </span>
            </div>
            <div class="div-table-row">
                <span> ${data.detail["contacts"]} </span>
            </div>
            <div class="div-table-row">
                <span> ${data.detail["constructionDate"]} </span>
            </div>

        </div>

    <#list data.images as image>
        <div class="div-table-col-right">
            <div class="div-table-row">
                <a href=${image}> <img src= ${image}   onerror='' title='image' width='80'/> </a>
            </div>
        </div>
    </#list>

    </div>

</div>

