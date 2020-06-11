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

});