
let modules;



$(document).ready(function ()
{
    const STATUS_ERR    = 0;
    const STATUS_OK     = 1;

    modules = {

        init : function ()
        {
            function condition( modules, name )
            {
                return ( typeof modules[ name ] === "object" && modules[ name ]['init'] !== undefined )
            }

            for( let name in modules )
            {
                if ( condition(modules, name) )
                {
                    if ( modules[name]['init']() === STATUS_ERR )
                    {
                        console.log( 'Error module', name );
                    }
                }
            }
        },

        menu        : {
            selectors   : {
                hamburger   : '.b_menu--hamburger',
                wrapper     : '.b_menu--wrapper'
            },

            cls         : {
                open        : '__open'
            },

            init        : function()
            {
                this.bind();
            },

            bind        : function()
            {
                $(this.selectors.hamburger).on('click', this.actions.toggle );
            },

            actions     : {

                toggle : function ()
                {
                    $(modules.menu.selectors.wrapper).toggleClass( modules.menu.cls.open );
                },
                open : function ()
                {
                    $(modules.menu.selectors.wrapper).addClass( modules.menu.cls.open );

                },
                close : function ()
                {
                    $(modules.menu.selectors.wrapper).removeClass( modules.menu.cls.open );

                }
            }
        },

        parallax    : {

            $item       : '#parallax',
            limits      : {},

            init        : function ()
            {
                this.$item = $( this.$item );

                if ( this.$item.length )
                {
                    const top   = parseInt( this.$item.css('top') ),
                        left    = parseInt( this.$item.css('left') );

                    this.limits = {
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

                    this.bind();

                    return STATUS_OK
                }

                return STATUS_ERR
            },

            bind        : function ()
            {
                let self = this;

                $(window).on('mousemove', function (e)
                {
                    const $w    = $(this),
                        width   = $w.width(),
                        height  = $w.height();

                    if ( width < 1140 ) return;

                    const   cursor_x = e.clientX,
                        cursor_y = e.clientY;

                    let x = ( cursor_x / ( width / 100 ) / 100 ),
                        y = ( cursor_y / ( height / 100 ) / 100 );

                    const limits = self.limits;

                    x = limits.left.min + ( ( limits.left.max - limits.left.min ) * x );
                    y = limits.top.min + ( ( limits.top.max - limits.top.min ) * y );

                    self.$item.css({
                        top     : y,
                        left    : x,
                    });
                });
            }

        },

        partners    : {

            selectors   : {
                block       : '.block__partners',
                button      : '.b_partners--button'
            },

            owl         : null,

            property    : {
                loop            : true,
                items           : 1,
                autoplay        : true,
                autoplayTimeout : 1500,
                responsive      :{
                    400              :{
                        items           :1
                    },
                    640             :{
                        items           :2
                    },
                    900             :{
                        items           :3
                    },
                    1140             :{
                        items           :4
                    }
                }
            },

            init        : function ()
            {
                if ( $(this.selectors.block).length )
                {

                    this.owl = $('#carousel_partners').owlCarousel(this.property );

                    this.bind();

                    return STATUS_OK
                }

                return STATUS_ERR
            },

            bind        : function()
            {
                const $buttons = $(this.selectors.button);

                $buttons.filter('.__left').on('click', this.actions.left);

                $buttons.filter('.__right').on('click', this.actions.right);
            },

            actions     : {

                left        : function (e)
                {
                    e.preventDefault();
                    modules.partners.owl.trigger('prev.owl.carousel');
                },

                right       : function (e)
                {
                    e.preventDefault();
                    modules.partners.owl.trigger('next.owl.carousel');
                },
            }
        },

        modal       : {

            selectors   : {
                block       : '.block__modal',
                window      : '.b_modal--window',
                overlay     : '.b_modal--overlay',
                closer      : '.b_modal--closer'
            },

            links       : {
                $block      : null,
                $windows    : null,
                $button     : null,
            },

            init        : function ()
            {
                let links = this.links;

                links.$block    = $( this.selectors.block );
                links.$windows  = $( this.selectors.window );
                links.$button  = $('.js-modal');

                if ( links.$block.length &&   links.$windows.length )
                {
                    if ( this.bind() === STATUS_OK ) return STATUS_OK
                }
            },

            bind        : function ()
            {
                this.links.$button.on('click', function (e)
                {
                    e.preventDefault();

                    modules.modal.actions.open(  $(this).attr('href') );

                });

                this.links.$block.on('click', this.selectors.closer, this.actions.closer );

                $( this.selectors.overlay ).on('click', this.actions.closer_overlay );

                return STATUS_OK
            },

            actions     : {

                open            : function( id )
                {
                    const   $block__modal   = modules.modal.links.$block,
                            $modal          = $( id );

                    if ( ! $modal.length ) return;

                    if ( $block__modal.is(":hidden") )
                    {
                        $block__modal.show();
                    }

                    $modal.show();
                },

                closer_overlay  : function(e)
                {
                    if ( e.target !== e.currentTarget ) return;

                    modules.modal.links.$windows.filter(":visible").hide();

                    modules.modal.actions.close_modal();
                },

                closer      : function(e)
                {
                    $(this).parents( modules.modal.selectors.window ).hide();

                    modules.modal.actions.close_modal();
                },

                close_modal : function ()
                {
                    const self = modules.modal;

                    if ( ! self.links.$windows.filter(":visible").length )
                    {
                        self.links.$block.hide();
                    }
                }
            }
        },

        filter      : {

            selectors   : {
                block       : '.block__filter',
                list        : '.b_product--list',
                item        : '.b_product--item',
                button      : '.b_filter--button',
            },

            init        : function ()
            {
                const $filter = $( this.selectors.block );

                if ( $filter.length )
                {
                    this.bind( $filter );

                    return STATUS_OK
                }

                return STATUS_ERR
            },

            bind        : function( $filter )
            {
                $filter.on('click', this.selectors.button, function (e)
                {
                    e.preventDefault();

                    modules.filter.actions.filter( $(this).attr('href'), $(this) );
                });
            },

            actions     : {

                filter      : function ( category, $this )
                {
                    const   self            = modules.filter,
                            cls             = {
                                filter : '__filter',
                                active : '__active',
                            },
                            $product_list   = $( self.selectors.list );

                    let $collectionProduct = $( self.selectors.item );

                    $collectionProduct.hide();

                    if ( category !== '*' )
                    {
                        const filter = '[data-category="' + category+ '"]';

                        $collectionProduct = $collectionProduct.filter( filter );
                    }

                    if ( $this === undefined )
                    {
                        $this = $( self.selectors.button + '[href="' + category + '"]' );
                    }

                    $product_list.removeClass(cls.filter);

                    if ( $collectionProduct.length )
                    {
                        $collectionProduct.show();

                        $( self.selectors.button + '.' + cls.active ).removeClass( cls.active );

                        if ( $this !== undefined ) $this.addClass(cls.active );

                        if ( $collectionProduct.length < 4 ) $product_list.addClass(cls.filter);
                    }
                }
            }
        },

        input       : {

            selector    : {
                input       : '.b_form--input',
                range       : 'INPUT.range',
            },

            init        : function ()
            {
                if ( $( this.selector.input ).length )
                {
                    this.bind();

                    return STATUS_OK
                }

                return STATUS_ERR
            },

            bind        : function()
            {
                $( this.selector.range ).on('change', function (e)
                {
                    modules.input.actions.change( $(this) );

                } );
            },

            actions     : {

                change  : function ( $item )
                {
                    let value = $item.val().replace(/\s/g, '');

                    //спасибо ciprex_
                    const result = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

                    $item.val( result );

                    if ( $item.data('target') )
                    {
                        modules.range.actions.setValue( $item.data('target'), value );
                    }
                }
            }
        },

        range       : {

            selector    : 'INPUT[type="range"]',

            collection  : {},

            init        : function ()
            {
                const $range    = $( this.selector );

                if ( $range.length )
                {
                    let $item;

                    for( let i in $range )
                    {
                        $item = $( $range[ i ] );

                        this.collection[ $item.attr('name') ] = $item.slider();

                        this.collection[ $item.attr('name') ].on("slide", this.actions.slide );
                    }

                    return STATUS_OK
                }

                return STATUS_ERR
            },

            actions     : {

                slide       : function (e)
                {
                    const $this       = $( this ),
                        selector    = 'INPUT[name="' + $this.data('target') + '"]';

                    $( selector ).val( e.value ).change();
                },

                setValue    : function ( slider_name, value )
                {
                    modules.range.collection[ slider_name ].slider('setValue', value );
                }
            },
        },
    };

    modules.init();

});