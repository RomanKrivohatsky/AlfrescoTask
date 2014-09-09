<script type="text/javascript">
    new Alfresco.widget.DashletResizer("${args.htmlid}", "${instance.object.id}");
</script>

<div class="dashlet">
<#-- Заголовок -->
    <div class="title">${msg('label.title')}</div>

<#-- Список -->
    <div class="body scrollableList">
    <#-- Выводим список всех элементов в домашней папке -->
    <#list data.items as item>
        <div class="detail-list-item <#if !item_has_next>last-item</#if>">
        <#-- Таблица -->
            <table>
                <tr>
                <#-- Картинка папки -->
                    <td><div class="yui-dt-liner"><img src='/share/res/components/documentlibrary/images/folder-32.png'/></div></td>
                <#-- Ссылка -->
                    <td><h4><a class="theme-color-1" href="${url.context}/page/repository#filter=path|${data.userhome?url}/${item.name?url}">${item.name}</a></h4></td>
                </tr>
            </table>
        </div>
    </#list>
    </div>

</div>