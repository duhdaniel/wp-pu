<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */
?><!DOCTYPE html>
<!--[if IE 7]>
<html class="ie ie7" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 8]>
<html class="ie ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 7) | !(IE 8)  ]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width" />
<title><?php wp_title( '|', true, 'right' ); ?></title>
<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
<?php // Loads HTML5 JavaScript file to add support for HTML5 elements in older IE versions. ?>
<!--[if lt IE 9]>
<script src="<?php echo get_template_directory_uri(); ?>/js/html5.js" type="text/javascript"></script>
<![endif]-->
<?php wp_head(); ?>


<!-- serve só pra exibir as ondas no footer -->
<script type="text/javascript" src="http://www.peixeurbano.com.br/Content/V2/newdesign/js/jquery.min.js"></script>

</head>

<body <?php body_class(); ?>>
<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>


<div class="header">
	    <div class="row">
			<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php bloginfo('name'); ?> - <?php bloginfo('description'); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
			<h2 class="site-description"><?php bloginfo( 'description' ); ?> / <span class="entry-title">
				<?php the_title(); ?>
			</span></h2>
		</div> <!-- fecha row -->
</div>


<div class="toolbar">
<div class="row">

			<a class="menu-item-1" href="/faq/">Ajuda</a>
			<a class="menu-item-2" href="/faq/institucional">Institucional</a>
			<a class="menu-item-3" href="/faq/peixe-urbano">Imprensa</a>
			<a class="menu-item-4" href="/faq/seja-parceiro">Seja Parceiro</a>
			<a class="menu-item-5" href="http://www.linkedin.com/company/peixe-urbano" title="Link abrirá em nova janela." target="_blank">Trabalhe conosco</a>
			
			
			<form role="search" method="get" id="header-search" action="<?php echo home_url( '/' ); ?>">
			    <div> 
			        <input type="text" value="" name="s" id="s" placeholder="Buscar alguma coisa..." />
			        <input type="submit" id="searchsubmit" value="buscar" class="secondary" />
			    </div>
			</form>
	
</div> <!-- fecha row -->
</div>



<div id="page" class="hfeed site">
	<header id="masthead" class="site-header" role="banner">
		

		<nav id="site-navigation" class="main-navigation" role="navigation">
			<h3 class="menu-toggle"><?php _e( 'Menu', 'twentytwelve' ); ?></h3>
			<a class="assistive-text" href="#content" title="<?php esc_attr_e( 'Skip to content', 'twentytwelve' ); ?>"><?php _e( 'Skip to content', 'twentytwelve' ); ?></a>
			<?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_class' => 'nav-menu' ) ); ?>
		</nav><!-- #site-navigation -->

		<?php $header_image = get_header_image();
		if ( ! empty( $header_image ) ) : ?>
			<a href="<?php echo esc_url( home_url( '/' ) ); ?>"><img src="<?php echo esc_url( $header_image ); ?>" class="header-image" width="<?php echo get_custom_header()->width; ?>" height="<?php echo get_custom_header()->height; ?>" alt="" /></a>
		<?php endif; ?>
	</header><!-- #masthead -->

	<div id="main" class="wrapper">