<?php
/**
 * The template for displaying the footer.
 *
 * Contains footer content and the closing of the
 * #main and #page div elements.
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */
?>
	</div><!-- #main .wrapper -->
	
</div><!-- #page -->




<footer id="colophon" role="contentinfo">
		<div class="site-info">
			
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
	
	
<?php wp_footer(); ?>

    <canvas id="ondas"></canvas>
    <div class="pos_footer">
        <div class="row">
            <p class="alignleft"><a href="/" title="<?php bloginfo('name'); ?> - <?php bloginfo('description'); ?>"><?php bloginfo('name'); ?></a> &#169; <?php the_date('Y'); ?> Web Servi&#231;os Digitais, LTDA. Todos os direitos reservados.</p>
           
            <p class="footer-links alignright">
                <a href="<?php bloginfo('url'); ?>/termos-de-uso" title="Termos de uso">Termos de uso</a> | 
                <a href="<?php bloginfo('url'); ?>/politica-de-privacidade" title="Política de Privacidade">Política de privacidade</a>
                 | <a href="<?php bloginfo('url'); ?>/wp-admin/">Admin</a>
                
                </p>
        </div>
    </div>
    
   
    <script type="text/javascript" src="http://www.peixeurbano.com.br/Content/V2/newdesign/js/canvas.js"></script>



</body>
</html>