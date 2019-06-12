;(function($){
    $.fn.downloadParamUrl = function(url){
        const jContainerElem = $('<div>').prop('id','dane-programisty');
        const jAfterElem = $(this);
        $.getJSON( url, function(data){
            Object.keys(data).forEach(function(key) {
                const jDataPropElem = $(
                `<div class="prop">
                    <span class="prop_name">${key}</span>
                    <span class="prop_value">${data[key]}</span>
                </div>`);
                jDataPropElem.appendTo( jContainerElem );
            });
            jContainerElem.insertAfter( jAfterElem );
        }).fail(function(jqXHR, textStatus, errorThrown) { 
            console.log(`Request for programmer data failed!  ${textStatus}`); 
        })
    }
    $('.btn-download').on('click',function(){
        $(this).downloadParamUrl('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
    });
})(jQuery);