$(document).ready(function () {

    /*
    * Logic for Background Funfetti✨
    * Thank you @sengokukun
    * https://codepen.io/sengoku/pen/LYVzVjp
    */

    // Keep shape container hidden at first
    $('.shape').hide();

    var html = '';
    for (var i = 1; i <= 40; i ++) {
        html += '<div class="shape-container--'+i+' shape-animation"><div class="random-shape"></div></div>';
    }

    document.querySelector('.shape').innerHTML += html;

    var $allShapes = $("[class*='shape-container--']");

    // Add emoji background sprites on hover of certain elements
    $('.fancy').hover(function () {
        // Determine which element was hovered
        let addSprite = $(this).attr('data-sprite');

        // Add corresponding sprite class
        $('.random-shape').addClass(addSprite);

        // Render shape container
        $('.shape').show();
    }, function () {
        let removeSprite = $(this).attr('data-sprite');
        $('.random-shape').removeClass(removeSprite);
        $('.shape').hide();
    });

    /*
    * Lil asterisks animations
    */
    // $('.fa-asterisk').hover(() => {
    //     $('.fa-asterisk').css({
    //         'animation': 'fa-spin 2s infinite linear',
    //         'color': '#BAFF00',
    //     });
    // }, () => {
    //     $('.fa-asterisk').css('animation', 'none');
    //     $('.thing1').css('color', '#212E31');
    //     $('.thing2').css('color', '#E7D6E9');
    // });
});
