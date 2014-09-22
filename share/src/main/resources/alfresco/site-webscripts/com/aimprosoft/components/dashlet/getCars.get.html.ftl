<@markup id="css">
<#-- CSS Dependencies -->
    <@link rel="stylesheet" type="text/css" href="${url.context}/res/components/dashlets/getCars.css" group="dashlets"/>
</@>

<@markup id="js">
<#-- JavaScript Dependencies -->
    <@script type="text/javascript" src="${url.context}/res/components/dashlets/getCars.js" group="dashlets"/>
</@>

<@markup id="widgets">
    <@createWidgets group="dashlets"/>
</@>


<@markup id="html">

<div class="dashlet">
    <#assign id = args.htmlid>

<#-- Заголовок -->
    <div class="title">${msg('label.title')}</div>

<#-- Список -->
    <div class="body scrollableList">
    <#-- Выводим список всех элементов в домашней папке -->

        <div class="div-table">
            <div class="div-table-col-left">

                <div id="carBodyDiv">
                    <div class="div-table-row">
                        <input type="radio" id="carBody" name="body" value="All" checked> All
                    </div>
                    <div class="div-table-row">
                        <p><input type="radio" id="carBody" name="body" value="Saloon"> Saloon
                    </div>
                    <div class="div-table-row">
                        <p><input type="radio" id="carBody" name="body" value="Estate"> Estate
                    </div>
                    <div class="div-table-row">
                        <p><input type="radio" id="carBody" name="body" value="MiniBus"> MiniBus
                    </div>
                    <div class="div-table-row">
                        <p><input type="radio" id="carBody" name="body" value="Small Car"> Small Car
                    </div>
                </div>

                <div class="div-table-row">
                    <div class="advanced_search">
                        <button type="button" tabindex="0" id="${id}-advancedSearch">Advanced Search</button>
                    </div>
                </div>
                <div id="searchDetails" class="hidden">

                    <div class="div-table-row">
                        <select id="carBrand">
                        </select>
                    </div>
                    <div class="div-table-row">
                        <p><select id="carModel">
                        </select>
                    </div>
                    <div class="div-table-row">
                        <span> Year of a car</span>
                        <p> from <input id="yearFrom" name="from"> to <input id="yearTo" name="to">
                    </div>
                    <div class="div-table-row">
                        <span> Price of a car</span>
                        <p> from <input id="priceFrom" name="from"> to <input id="priceTo" name="to">
                    </div>
                </div>

                <div class="div-table-row">
                    <button type="button" tabindex="0" id="${id}-Search">Search NOW, man!</button>
                </div>

            </div>

            <div class="div-table-col-left">
                <div id="listCar">
                    <b> List of cars </b>
                </div>
            </div>

            <div class="div-table-col-right">
                <div id="listCarImage">
                    <b> Images </b>
                </div>
            </div>
        </div>

    </div>


</div>

</@>
