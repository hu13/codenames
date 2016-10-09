<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

/* controller */
Route::get('/', 'PagesController@home');
Route::get('about', 'PagesController@about');

Route::get('cards', 'CardsController@index');
Route::get('cards/{card}', 'CardsController@show');
Route::get('cards/notFound', 'CardsController@notFound');

/*Route::get('/', function () {
    $fruit = ['apple','notApple'];
    $people = ['me','others'];
    return view('welcome', compact('fruit'), compact('people'));
    // return View::make();
});

Route::get('about', function() {
    return view('pages.about'); // look at resources/views/<someDir>
    // return 'about me'; // display a text
});
*/
