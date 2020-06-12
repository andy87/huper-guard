$(document).ready(function ()
{
    if ( $('.block__partners').length )
    {
        const $buttons = $('.b_partners--button'),

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

    let limits;
    const $parallaxItem = $('#parallax');

    if ( $parallaxItem.length )
    {
        const top   = parseInt( $parallaxItem.css('top') ),
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
            const $w = $(this),
                width   = $w.width(),
                height  = $w.height();

            if ( width < 1140 ) return;

            const cursor_x = e.clientX,
                cursor_y = e.clientY;

            let x = ( cursor_x / ( width / 100 ) / 100 ),
                y = ( cursor_y / ( height / 100 ) / 100 );

                x = limits.left.min + ( ( limits.left.max - limits.left.min ) * x );
                y = limits.top.min + ( ( limits.top.max - limits.top.min ) * y );

            $parallaxItem.css({
                top     : y,
                left    : x,
            });
        });
    }

    window.sliders = {};

    const $sliders    = $('INPUT[type="range"]');

    if ( $sliders.length )
    {
        $sliders.each(function (i, element)
        {
            const $this = $(element);

            window.sliders[ $this.attr('name') ] = $this.slider();

            window.sliders[ $this.attr('name') ].on("slide", function (e)
                {
                    const $this       = $( this ),
                        selector    = 'INPUT[name="' + $this.data('target') + '"]';

                    $( selector ).val( e.value ).change();
                });
        });

        const $inputs = $('.b_form--input');

        if ( $inputs.length )
        {
            $('.b_form--input.range').change(function (e)
            {
                const $this = $(this);

                let value = $this.val().replace(/\s/g, '');

                //спасибо ciprex_
                const result = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

                $this.val( result );

                window.sliders[ $this.data('target') ].slider('setValue', value);
            });
        }
    }

    const $modals = $('.js-modal');

    if ( $modals.length )
    {
        $modals.on('click', function (e)
        {
            e.preventDefault();

            const $block__modal = $('.block__modal'),
                $modal          = $( $(this).attr('href') );

            if ( $block__modal.is(":hidden") )
            {
                $block__modal.show();
            }

            $modal.show();
        });
    }



    const selector_window = '.b_modal--window',
        $block_modal    = $('.block__modal'),
        $modal_overlay  = $('.b_modal--overlay');

    function close_modal()
    {
        if ( ! $( selector_window ).filter(":visible").length )
        {
            $block_modal.hide();
        }
    }

    $block_modal.on('click', '.b_modal--closer', function (e)
    {
        const $window = $(this).parents( selector_window ).hide();

        close_modal();
    });

    $modal_overlay.on('click', function (e)
    {
        if ( e.target !== e.currentTarget ) return;

        $( selector_window ).filter(":visible").hide();
        close_modal();
    });

    const $filter = $('.block__filter');

    if ( $filter.length )
    {
        $filter.on('click', '.b_filter--button', function (e)
        {
            e.preventDefault();

            const $this         = $(this),
                $product_list   = $('.b_product--list'),
                category        = $this.attr('href');

            let $collectionProduct = $('.b_product--item');

            $collectionProduct.hide();

            if ( category !== '*' )
            {
                const filter = '[data-category="' + category+ '"]';

                $collectionProduct = $collectionProduct.filter( filter );
            }

            $product_list.removeClass('__filter');

            if ( $collectionProduct.length )
            {
                $collectionProduct.show();

                $('.b_filter--button.__active').removeClass('__active');

                $this.addClass('__active');

                if ( $collectionProduct.length < 4 ) $product_list.addClass('__filter');
            }

        });
    }

});