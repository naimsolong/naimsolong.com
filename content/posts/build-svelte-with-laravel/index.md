---
title: "Build Svelte with Laravel"
date: 2022-01-11T12:27:37+08:00
draft: false # Set 'false' to publish
imageSEO: "images/social-medias/social-build-svelte-with-laravel.png"
description: "A radical changes in JavaScript world, writes code that surgically updates the DOM when the state of the app changes"
categories:
- Articles
tags:
- Tutorials
- Svelte
- Laravel
---

Assalamualaikum!

Svelte is the game changer framework in JavaScript world, even though it almost same with ReactJS and VueJS. However, Svelte not using complex state management libraries instead use directly language that everyone already know - HTML while ReactJS using components or JSX. In my personal view, Svelte have better learning curve with it’s simplicity.

## Svelte + Laravel

We will build Svelte scaffolding on top of Laravel. For Laravel installation, you can follow it’s official documentation and as for minimum requirement PHP and Composer minimum version, can follow Laravel’s requirement according to your installed Laravel version.

### Install Laravel Svelte Preset

Once you have installed Laravel, we gonna use [Laravel Svelte Preset](https://github.com/wewowweb/laravel-svelte-preset) by [We Wow Web](https://github.com/wewowweb). Run the command below on your Laravel project:

```php
composer require wewowweb/laravel-svelte-preset
```

After that, run the command below, in which you will get the initial scaffolding of the project:

```php
php artisan ui svelte
```

Then, install the JavaScript dependencies by running this command:

```php
npm install && npm run dev
```

The package will provide you with the initial set of these files:

- `/js/app.js`
- `/js/components/App.svelte`
- `webpack.mix.js`

### Svelte setup

Inside the Laravel project already included a welcome blade file, which located at `/resources/views/welcome.blade.php`  and replace the code with below:

```php
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    ...
    <!-- Include the app.js file -->
    <script src="{{ mix('js/app.js') }}" defer></script>
  </head>
  <body>
    <!-- Include your App Component -->
    <App />
  </body>
</html>
```

This line of code (`<script src="{{ mix('js/app.js') }}" defer></script>`)  will attach Svelte app from `/js/components/App.svelte` into `/resources/views/welcome.blade.php` 

---

## Custom Svelte Components

In addition, you can bind custom Svelte components into blade file.

### Create a New Custom Component

Let's create a new Svelte Component (e.g. MyTestComponent.svelte)

```php
<script></script>

<main>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">My Test Component</div>
          <div class="card-body">
            I'm a test component.
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
```

### Modify The `webpack.mix.js` file

```php
mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .svelte({
        customElement: true,
        tag: null
    });
```

### Import the component to your app.js

Then within your `/js/app.js` file, import the MyTestComponent like so:

```php
require('./bootstrap');

import App from "./components/App.svelte";
import MyTestComponent from "./components/MyTestComponent.svelte";

const app = new App({
  target: document.body
});

window.app = app;

customElements.define('my-test-component', MyTestComponent);
export default app;
```

### Convert your App component to a custom component

```php
require('./bootstrap');

import App from './components/App.svelte';
import MyTestComponent from './components/MyTestComponent.svelte';

customElements.define('my-app', App);
customElements.define('my-test-component', MyTestComponent);
```

### Use the new component in your `blade.php` file
<!DOCTYPE html>

```html
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        ...
        <!-- Include the app.js file -->
        <script src="{{ mix('js/app.js') }}" defer></script>
    </head>
    <body>
        <!-- Include your App Component -->
        <my-app></my-app>
        <my-test-component></my-test-component>
    </body>
</html>
```

Then there you have it, simple way to build Svelte with Laravel.

That will be all for today. See you later!