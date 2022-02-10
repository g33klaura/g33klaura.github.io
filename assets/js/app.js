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


    // Trying out mouse-following gradient
    // $(document).mousemove(function(event) {
    //     windowWidth = $(window).width();
    //     windowHeight = $(window).height();

    //     mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
    //     mouseYpercentage = Math.round(event.pageY / windowHeight * 100);

    //     $('html').css({
    //         'background-image': 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #ffd1e7, #fff5ff)',
    //     });
    // });
});
