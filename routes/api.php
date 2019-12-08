<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// ROUTES AUTH
Route::post('/auth/register', 'AuthController@register');
Route::post('/auth/login', 'AuthController@login');


// ROUTES REGISTRASI PENYEDIA
Route::get('/registrasi/penyedia', 'RegistrasiPenyediaController@getAll');
Route::get('/registrasi/penyedia/export', 'RegistrasiPenyediaController@export');
Route::post('/registrasi/penyedia', 'RegistrasiPenyediaController@create');


// ROUTES REGISTRASI INSTANSI
Route::get('/registrasi/instansi', 'RegistrasiInstansiController@getAll');
Route::get('/registrasi/instansi/export', 'RegistrasiInstansiController@export');
Route::post('/registrasi/instansi', 'RegistrasiInstansiController@create');

// ROUTES REGISTRASI ADOSIASI
Route::get('/registrasi/adosiasi', 'RegistrasiAdosiasiController@getAll');
Route::get('/registrasi/adosiasi/export', 'RegistrasiAdosiasiController@export');
Route::post('/registrasi/adosiasi', 'RegistrasiAdosiasiController@create');


// ROUTES IMAGE SLIDER
Route::get('/block/slider', 'BlockHomeImageSliderController@getAll');
Route::get('/block/slider/active', 'BlockHomeImageSliderController@getAllImageSlider');
Route::post('/block/slider', 'BlockHomeImageSliderController@create');
Route::put('/block/slider/add/{id}', 'BlockHomeImageSliderController@addToSlider');
Route::put('/block/slider/remove/{id}', 'BlockHomeImageSliderController@removeFromSlider');
Route::delete('/block/slider/{id}', 'BlockHomeImageSliderController@deleteImage');


// ROUTES JENIS PELATIHAN
Route::get('/jenis-pelatihan', 'JenisPelatihanController@getAll');
Route::get('/jenis-pelatihan/status/active', 'JenisPelatihanController@getAllActiveData');
Route::get('/jenis-pelatihan/{id}', 'JenisPelatihanController@getDataById');
Route::post('/jenis-pelatihan', 'JenisPelatihanController@create');
Route::put('/jenis-pelatihan/{id}', 'JenisPelatihanController@update');
Route::put('/jenis-pelatihan/{id}/activate', 'JenisPelatihanController@activate');
Route::put('/jenis-pelatihan/{id}/inactivate', 'JenisPelatihanController@inactivate');
// Route::delete('/block/slider/{id}', 'BlockHomeImageSliderController@deleteImage');
