let mediaQuery = window.matchMedia('(min-width: 1200px)');

// console.log('mq', mediaQuery);
$('.tablas-pricing').on('click', '.card-li-container', function (e) {
    e.preventDefault();
    let pos = $(this).index() + 2;
    // console.log('pos', this, pos);
    let containerEl = $(this);
    // console.log(pos);
    $('tr').find('td:not(:eq(0))').hide();
    $('td:nth-child(' + pos + ')').css('display', 'table-cell');
    $('tr').find('th:not(:eq(0))').hide();
    $('li').removeClass('active');
    $(this).addClass('active');
    if (!mediaQuery.matches) {
        if (!$(this).find('#tabla-general').length) {
            // console.log('desired Container', containerEl);
            $('#tabla-general')
                .detach()
                .appendTo($(containerEl).find('.card-table-container'));
            $('.card-table-container').removeClass('active');
            $(containerEl).find('.card-table-container').addClass('active');
            $('#tabla-general').show();
        } else {
            $('.card-table-container').toggleClass('active');
        }
    }
});

mediaQuery.addListener(doSomething);

function doSomething(mediaQuery) {
    if (mediaQuery.matches) {
        $('.sep').attr('colspan', 5);
    } else {
        $('#tabla-general').hide();
        $('.sep').attr('colspan', 2);
    }
}
doSomething(mediaQuery);

$(document).ready(function () {
    $('tr.parent')
        .css('cursor', 'pointer')
        .attr('title', 'Click to expand/collapse')
        .click(function () {
            $(this)
                .siblings('.child-' + this.id)
                .toggle();
        });
    // $('tr[@class^=child-]').hide().children('td');
});

$(".pushme").click(function () {
    $(this).text(function(i, v){
       return v === '- Mostrar menos' ? '+ Mostrar más' : '- Mostrar menos'
    })
});

$(".btn-desple-table-a").click(function () {
    $(this).text(function(j, l){
       return l === '- Ocultar características del plan' ? '+ Mostrar características del plan' : '- Ocultar características del plan'
    })
});
$(".btn-desple-mobile").click(function () {
    $(this).text(function(p, o){
       return o === '- Ocultar características del plan' ? '+ Mostrar características del plan' : '- Ocultar características del plan'
    })
});

// popvers bootstrap
var popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
);
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
});
