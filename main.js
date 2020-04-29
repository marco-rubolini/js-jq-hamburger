// $('.fa-bars').click(
//     function () {
//         $('.hamburger-menu').show();
//     }
// );
//
// $('.fa-times').click(
//     function () {
//         $('.hamburger-menu').hide();
//     }
// );

$('.hamburger-menu a, .header-right a').click(
    function () {
        $('.hamburger-menu').toggle();
    }
);
