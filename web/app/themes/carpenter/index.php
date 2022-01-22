<?php
/**
 * The main template file
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.1
 */
require_once __DIR__ . '/../../../../vendor/autoload.php';

use Timber\Post;
use Timber\Term;
use Timber\Timber as Timber;
use Timber\PostQuery as PostQuery;
use Timber\Loader as Loader;

$context          = Timber::context();
$context['posts'] = new PostQuery();
$templates        = array( 'index.twig' );

if (is_home()) {

    $context['home_hero'] = getTranslatedPostByTermId('home_hero');

    $context['product'] = getTranslatedPostByTermId('product');
    $context['aboutUs'] = getPostTranslation((new \Timber\Post('about-us'))->ID);


    array_unshift($templates, 'front-page.twig', 'home.twig');
}
Timber::render($templates, $context, 0, Loader::CACHE_NONE);
