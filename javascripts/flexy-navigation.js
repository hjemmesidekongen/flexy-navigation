// |--------------------------------------------------------------------------
// | Flexy navigation
// |--------------------------------------------------------------------------
// |
// | This jQuery script is written by
// |
// | Morten Nissen
// | hjemmesidekongen.dk
// |

var flexy_navigation = (function ($) {
    'use strict';

    var pub = {},
        layout_classes = {
            'navigation': '.flexy-navigation',
            'obfuscator': '.flexy-navigation__obfuscator',
            'dropdown': '.flexy-navigation__item--dropdown',
            'dropdown_megamenu': '.flexy-navigation__item__dropdown-megamenu',

            'is_upgraded': 'is-upgraded',
            'navigation_has_megamenu': 'has-megamenu',
            'dropdown_has_megamenu': 'flexy-navigation__item--dropdown-with-megamenu',
        };

    /**
     * Instantiate
     */
    pub.init = function (options) {
        registerEventHandlers();
        registerBootEventHandlers();
    };

    /**
     * Register boot event handlers
     */
    function registerBootEventHandlers() {

        // Upgrade
        upgrade();
    }

    /**
     * Register event handlers
     */
    function registerEventHandlers() {}

    /**
     * Upgrade elements.
     * Add classes to elements, based upon attached classes.
     */
    function upgrade() {

        // Navigations
        $(layout_classes.navigation).each(function(index, element) {
            var $navigation = $(this),
                $megamenus = $navigation.find(layout_classes.dropdown_megamenu),
                $dropdown_megamenu = $navigation.find(layout_classes.dropdown_has_megamenu);

            // Has already been upgraded
            if ($navigation.hasClass(layout_classes.is_upgraded)) {
                return;
            }

            // Has megamenu
            if ($megamenus.length > 0) {
                $navigation.addClass(layout_classes.navigation_has_megamenu);
            }

            // Run through all megamenus
            $megamenus.each(function(index, element) {
                var $megamenu = $(this),
                    has_obfuscator = $('html').hasClass('has-obfuscator') ? true : false;

                $megamenu.parents(layout_classes.dropdown)
                    .addClass(layout_classes.dropdown_has_megamenu)
                    .hover(function() {

                        if (has_obfuscator) {
                            obfuscator.show();
                        }
                    }, function() {
                        
                        if (has_obfuscator) {
                            obfuscator.hide();
                        }
                    });
            });

            // Is upgraded
            $navigation.addClass(layout_classes.is_upgraded);
        });
    }

    return pub;
})(jQuery);
