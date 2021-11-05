let mediaQuery = window.matchMedia('(min-width: 800px)');

console.log('mq',mediaQuery);
$('.tablas-pricing').on('click', '.card-li-container', function (e) {
    e.preventDefault();
    let pos = $(this).index() + 2;
    let containerEl = $(this);
    // console.log(pos);
    $('tr').find('td:not(:eq(0))').hide();
    $('td:nth-child(' + pos + ')').css('display', 'table-cell');
    $('tr').find('th:not(:eq(0))').hide();
    $('li').removeClass('active');
    $(this).addClass('active');
    if ( !mediaQuery.matches ) {
        if (!$(this).find('#tabla-general').length) {
            console.log('desired Container', containerEl);
            $('#tabla-general').detach().appendTo($(containerEl).find('.card-table-container'));
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

$('.alternar').click(function () {
    $('.prueba').toggle();
});
