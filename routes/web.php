<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('app');
});

// EXPORT
Route::get('/export/registrasi/penyedia', 'RegistrasiPenyediaController@export');
Route::get('/export/registrasi/instansi', 'RegistrasiInstansiController@export');
Route::get('/export/registrasi/adosiasi', 'RegistrasiAdosiasiController@export');

// SURAT PERMOHONAN INSTANSI
Route::get('/preview/surat-permohonan/registrasi/instansi/{id}', 'RegistrasiInstansiController@previewSuratPermohonan');
// SURAT PERMOHONAN ADOSIASI
Route::get('/preview/surat-permohonan/registrasi/adosiasi/{id}', 'RegistrasiAdosiasiController@previewSuratPermohonan');

// Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');
