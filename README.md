# Flexible navigation

## Usage with Wordpress
This package contains a custom Wordpress Walker called FlexyNavigationWalker. 

How to use:
    <!-- Begin - navigation -->
    <nav class="flexy-header__navigation__wrapper hidden-xs hidden-sm hidden-touch">
        <?php @wp_nav_menu( array(
            'theme_location' => 'primary',
            'container'      => FALSE,
            'menu_class'     => 'flexy-navigation',
            'walker'         => new FlexyNavigationWalker(),
            'depth'          => 1,
        ) ); ?>
    </nav>
    <!-- End - navigation -->
