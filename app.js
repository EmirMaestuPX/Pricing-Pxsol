$('.tablas-pricing').on('click', 'li', function () {
    event.preventDefault();
    let pos = $(this).index() + 2;
    // console.log(pos);
    $('tr').find('td:not(:eq(0))').hide();
    $('td:nth-child(' + pos + ')').css('display', 'table-cell');
    $('tr').find('th:not(:eq(0))').hide();
    $('li').removeClass('active');
    $(this).addClass('active');
});

let mediaQuery = window.matchMedia('(min-width: 800px)');

mediaQuery.addListener(doSomething);

function doSomething(mediaQuery) {
    if (mediaQuery.matches) {
        $('.sep').attr('colspan', 5);
    } else {
        $('.sep').attr('colspan', 2);
    }
}
doSomething(mediaQuery);

$('.alternar').click(function () {
    $('.prueba').toggle();
});
