<?php
/**
 * Timber starter-theme
 * https://github.com/timber/starter-theme
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.1
 */

/**
 * If you are installing Timber as a Composer dependency in your theme, you'll need this block
 * to load your dependencies and initialize Timber. If you are using Timber via the WordPress.org
 * plug-in, you can safely delete this block.
 */

use Timber\Post;
use Timber\Timber;

$composer_autoload = __DIR__ . '/../../../../vendor/autoload.php';
if (file_exists($composer_autoload)) {
    require_once $composer_autoload;
    $timber = new Timber();
}


/**
 * This ensures that Timber is loaded and available as a PHP class.
 * If not, it gives an error message to help direct developers on where to activate
 */
if (! class_exists('Timber')) {
    add_action(
        'admin_notices',
        function () {
            echo '<div class="error"><p>Timber not activated. Make sure you activate the plugin in <a href="' . esc_url(admin_url('plugins.php#timber')) . '">' . esc_url(admin_url('plugins.php')) . '</a></p></div>';
        }
    );

    add_filter(
        'template_include',
        function ($template) {
            return get_stylesheet_directory() . '/static/no-timber.html';
        }
    );
    return;
}

/**
 * Sets the directories (inside your theme) to find .twig files
 */
Timber::$dirname = array( 'templates', 'views' );

/**
 * By default, Timber does NOT autoescape values. Want to enable Twig's autoescape?
 * No prob! Just set this value to true
 */
Timber::$autoescape = false;

require_once 'CarpenterSite.php';

new CarpenterSite();

function getPostTranslation($post_id): ?Post
{
    $post = pll_get_post($post_id);
    if ($post) {
        return new Post($post);
    }
    return null;
}

function getPostCollectionByTermSlug($term_slug)
{
    return ( new \Timber\Term($term_slug) )->posts;
}

function getStickyPostCollectionByTermSlug($term_slug)
{
	$sticky = get_option( 'sticky_posts' );
	$args = array(
		'posts_per_page' => 1,
		'post__in' => $sticky,
		'ignore_sticky_posts' => 0,
//		'cat' => ( new \Timber\Term($term_slug) )->ID,
	);
	return $query = new \Timber\PostQuery($args);



//	if ( isset( $sticky[0] ) ) {
//		return ( new \Timber\Term($term_slug) )->posts;
//	}

}

function getTranslatedPostByTermId($term_id): array
{
    $posts = ( new \Timber\Term($term_id) )->posts;
    $postTranslations = [];
    foreach ($posts as $post) {
        $postTranslations[] = new Post(pll_get_post($post->ID));
    }
    return $postTranslations;
}

function wporg_block_wrapper($block_content, $block)
{
//    dump([$block_content, $block]);

	if(in_array($block['blockName'], ['core/gallery'])) {
		return renderBlock($block);
	}
	return $block_content;

}

add_filter('render_block', 'wporg_block_wrapper', 10, 2);

function renderBlock($block, $is_preview = false )
{
    $context = Timber::context();

    // Store block values.
    $context['block'] = $block;

    // Store field values.
    $context['fields'] = get_fields();

    // Store $is_preview value.
    $context['is_preview'] = $is_preview;

    // Render the block.
	$blockName = str_replace('/','-', $block['blockName']);
//	dump('block/'.$blockName.'.twig');
    return Timber::fetch(['block/'.$blockName.'.twig'], $context);

}
