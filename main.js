//Visualizzo il menu hamburger con show e hide

// $('.header-right a').click(
//     function () {
//         $('.hamburger-menu').show();
//     }
// );
//
// $('.hamburger-menu a').click(
//     function () {
//         $('.hamburger-menu').hide();
//     }
// );

//Visualizzo il menu hamburger su mobile utilizzando toggle
//
// $('.hamburger-menu a, .header-right a').click(
//     function () {
//         $('.hamburger-menu').toggle();
//     }
// );


// // Visualizzo il menu hamburger su mobile aggiungendo la classe .active già presente nel css

$(".header-right a").click(
    function () {
        $('.hamburger-menu').addClass("active");
    }
)

// // Nascondo il menu hamburger rimuovendo la classe .active al click dell'utente su close

$('.hamburger-menu a').click(
    function () {
        $('.hamburger-menu').removeClass("active");
    }
);
