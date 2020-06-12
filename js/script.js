$(document).ready(function ()
{
    if ( $('.block__partners').length )
    {
        var $buttons = $('.b_partners--button'),

        owl = $('#carousel_partners').owlCarousel({
            loop: true,
            items: 4,
            autoplay: true,
            autoplayTimeout: 1500
        });

        $buttons.filter('.__left').on('click', function (e)
        {
            e.preventDefault();
            owl.trigger('prev.owl.carousel');
        });

        $buttons.filter('.__right').on('click', function (e)
        {
            e.preventDefault();
            owl.trigger('next.owl.carousel');
        });
    }

    var limits, $parallaxItem = $('#parallax');

    if ( $parallaxItem.length )
    {
        let top     = parseInt( $parallaxItem.css('top') ),
            left    = parseInt( $parallaxItem.css('left') );

        limits = {
            top     : {
                center  : top,
                min     : top,
                max     : top + 50
            },
            left    : {
                center  : left,
                min     : left - 50,
                max     : left + 50
            },
        };

        $(window).on('mousemove', function (e)
        {
            let $w = $(this),
                width   = $w.width(),
                height  = $w.height(),

                cursor_x = e.clientX,
                cursor_y = e.clientY,

                x = ( cursor_x / ( width / 100 ) / 100 ),
                y = ( cursor_y / ( height / 100 ) / 100 );

                x = limits.left.min + ( ( limits.left.max - limits.left.min ) * x );
                y = limits.top.min + ( ( limits.top.max - limits.top.min ) * y );

            $parallaxItem.css({
                top     : y,
                left    : x,
            });
        });
    }
});