<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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


Route::post('/covid', 'CovidController@store');
Route::get('/covid', 'CovidController@index');
Route::get('/region', 'CovidController@getcases');
Route::post('/region', 'CovidController@storeCasesRegion');
