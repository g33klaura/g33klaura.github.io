$(document).ready(function () {

    /*
    * Logic for Background Funfetti✨
    * Thank you @sengokukun
    * https://codepen.io/sengoku/pen/LYVzVjp
    */
    var html = '';
    for (var i = 1; i <= 40; i ++) {
        html += '<div class="shape-container--'+i+' shape-animation"><div class="random-shape"></div></div>';
    }

    // document.querySelector('.shape').innerHTML += html;

    var $allShapes = $("[class*='shape-container--']");

    // Lil asterisks animations
    $('.fa-asterisk').hover(() => {
        $('.fa-asterisk').css({
            'animation': 'fa-spin 2s infinite linear',
            'color': '#BAFF00',
        });
    }, () => {
        $('.fa-asterisk').css('animation', 'none');
        $('.thing1').css('color', '#212E31');
        $('.thing2').css('color', '#E7D6E9');
    });
});
