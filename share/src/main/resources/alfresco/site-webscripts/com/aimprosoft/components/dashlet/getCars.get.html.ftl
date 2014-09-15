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

        <div class="toolbar ">

            <input type="radio" name="body" value="Saloon" checked> Saloon
            <p><input type="radio" name="body" value="Estate"> Estate

            <p><input type="radio" name="body" value="MiniBus"> MiniBus

            <p>
                <button type="button" tabindex="0" id="${id}-advancedSearch">Advanced Search</button>

            <div id="searchDetails" class="hidden">
                <p><select id="carBrand">
                </select>

                <p><select id="carModel">
                </select>

                <p><span> Year of a car</span>

                <p> from <input id="yearFrom" name="from"> to <input id="yearTo" name="to">

                <p><span> Price of a car</span>

                <p> from <input id="priceFrom" name="from"> to <input id="priceTo" name="to">

            </div>

            <p> <button type="button" tabindex="0" id="${id}-Search">Search NOW, man!</button>

        </div>

        <div id="listCar">

            <b> List of cars </b>
        <#--  </div>


            <span class="align-left yui-button" id="${id}-mybutton">
                <span class="first-child">
                   <button type="button" tabindex="0">Load data 1 </button>
                </span>
              </span>
                <span class="align-left yui-button" id="${id}-mybutton2">
                <span class="first-child">
                   <button type="button" tabindex="0">Load data 2</button>
                </span>
              </span>
                <span class="align-left yui-button" id="${id}-mybutton3">
                <span class="first-child">
                   <button type="button" tabindex="0">Load data 3</button>
                </span>
              </span>
          </div>-->
        </div>

    <#--<#list data.items as item>
        <div id="detail-list" class="detail-list-item <#if !item_has_next>last-item</#if>">
        &lt;#&ndash; Таблица &ndash;&gt;
            <table>
                <tr>
                &lt;#&ndash; Ссылка &ndash;&gt;
                    <td><h4>${item.model}</h4></td>
                    <td><h4>${item.brand}</h4></td>
                    <td><h4>${item.type}</h4></td>
                </tr>
            </table>
        </div>
    </#list>-->

        <div id="${id}-simpleDetailed" class="align-right simple-detailed yui-buttongroup inline">
                  <span class="yui-button yui-radio-button simple-view  yui-button-checked yui-radio-button-checked>">
                     <span class="first-child">
                        <button type="button" tabindex="0" title="test1"></button>
                     </span>
                  </span>
                  <span class="yui-button yui-radio-button detailed-view ">
                     <span class="first-child">
                        <button type="button" tabindex="0" title="test2"></button>
                     </span>
                  </span>
        </div>

    </div>

</div>
</@>
