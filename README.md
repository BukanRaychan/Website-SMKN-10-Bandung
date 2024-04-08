# Setup

1. open cmd, then type
```
composer create-project laravel/laravel <project name>
```
```
cd <project name>
```
2. change DB_CONNECTION value into mysql (if you are using mysql)
3. Activate MySQL from XAMPP
4. In your project with cmd open, type
```
composer require inertiajs/inertia-laravel
```
5. create app.blade.php in ./resources/views, inside it type
```
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.jsx'])
        @inertiaHead
    </head>
    <body>
        @inertia
    </body>
</html>
```
6. Continue to type in cmd (direction in your project)
```
php artisan inertia:middleware
```
```
npm i @inertiajs/react @vitejs/plugin-react @inertiajs/inertia-react react react-dom
```
7. rename app.js in resources/js to app.jsx, then type
```
import React from 'react'
import {createRoot} from 'react-dom/client' //here
import {createInertiaApp } from '@inertiajs/inertia-react'
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers'

createInertiaApp({
    resolve: (name) => resolvePageComponent(`./pages/${name}.jsx`,import.meta.glob('./pages/**/*.jsx')),
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />) //and here
    },
})
```
8. in vite.config.js type
```
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        react(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
});
```
9. In web.php type
```
<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('<your component name in pages folder>');
});
```
10. Change the port in package.json
```
"dev": "vite --port=3000"
```
