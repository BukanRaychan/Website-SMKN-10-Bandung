<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('app');
});

Route::get('/test', function () {
    return Inertia::render('component/home');
});