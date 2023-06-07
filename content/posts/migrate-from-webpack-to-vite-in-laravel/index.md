---
title: "Migrate from Webpack to Vite in Laravel"
date: 2022-09-19T12:33:27+08:00
draft: false # Set 'false' to publish
description: "A build tool that aims to provides rich feature enhancements over native ES modules"
categories:
- Articles
tags:
- Tutorials
- Laravel
- Webpack
- Vite
---

Assalamualaikum!

### Vite

[Vite](https://vitejs.dev/) is a **Next Generation Frontend Tool** that aims to provide a faster and leaner development experience for modern web projects in which aims to address these issues by leveraging new advancements in the ecosystem: the availability of native ES modules in the browser, and the rise of JavaScript tools written in compile-to-native languages.

### Migrating from Laravel Mix to Vite

We're going to migrate this for [InertiaJS](https://inertiajs.com/) with [Svelte](https://svelte.dev/) and follow steps in-depth migration tutorial from the official [Laravel Vite plugin](https://github.com/laravel/vite-plugin/blob/main/UPGRADE.md#migrating-from-laravel-mix-to-vite):

1. Update Laravel Framework
2. Install Vite and the Laravel Plugin
3. Configure Vite
4. Update NPM scripts
5. Vite compatible imports
6. Update environment variables
7. Importing your CSS from your JavaScript entry point(s)
8. Replace ```mix()``` with ```@vite```
9. Remove Laravel Mix
10. Update Test Helpers
11. Optional: Configure Tailwind

---

#### Update Laravel Framework

To make use of the new Vite integration, you will need to update to at least version `9.19.0` of the `laravel/framework`:

```sh
composer require laravel/framework:^9.19.0
```

#### Install Vite and the Laravel Plugin

First, you will need to install [Vite](https://vitejs.dev/) and the [Laravel Vite Plugin](https://www.npmjs.com/package/laravel-vite-plugin) using your npm package manager of choice:

```shell
npm install --save-dev vite laravel-vite-plugin
```

You may also need to install additional Vite plugins for your project with Svelte plugins:

```shell
npm install --save-dev @sveltejs/vite-plugin-svelte
```

#### Configure Vite

Create a `vite.config.js` file in the root of your project:

```js
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel([
            'resources/css/app.css',
            'resources/js/app.js',
        ]),
    ],
});
```

##### Update Aliases

If you are migrating aliases from your `webpack.mix.js` file to your `vite.config.js` file, you should ensure that the paths start with `/`. For example, `resources/js` would become `/resources/js`:

```js
export default defineConfig({
    plugins: [
        laravel([
            'resources/css/app.css',
            'resources/js/app.js',
        ]),
    ],
    resolve: {
        alias: {
            '@': '/resources/js'
        }
    }
});
```

For your convenience, the Laravel Vite plugin automatically adds an `@` alias for your `/resources/js` directory. If you do not need to customize your aliases, you may omit this section from your `vite.config.js` file.

#### Update NPM scripts

Update your NPM scripts in `package.json`:

```diff
  "scripts": {
-     "dev": "npm run development",
-     "development": "mix",
-     "watch": "mix watch",
-     "watch-poll": "mix watch -- --watch-options-poll=1000",
-     "hot": "mix watch --hot",
-     "prod": "npm run production",
-     "production": "mix --production"
+     "dev": "vite",
+     "build": "vite build"
  }
```

#### Vite compatible imports

Vite only supports ES modules, so if you are upgrading an existing application you will need to replace any `require()` statements with `import`. You may refer to [this pull request](https://github.com/laravel/laravel/pull/5895/files) for an example.

##### Inertia

Inertia makes use of a `require()` call that is more complex to replicate with Vite.

The following function can be used instead:

```diff
+ import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

  createInertiaApp({
      title: (title) => `${title} - ${appName}`,
-     resolve: (name) => require(`./Pages/${name}.svelte`),
+     resolve: (name) => resolvePageComponent(`./Pages/${name}.svelte`, import.meta.glob('./Pages/**/*.svelte')),
      setup({ el, app, props, plugin }) {
          return createApp({ render: () => h(app, props) })
              .use(plugin)
              .mixin({ methods: { route } })
              .mount(el);
      },
  });
```

Additionally, you should ensure you have updated to at least version `0.6.3` of the `inertia-laravel` package:

```sh
composer require inertiajs/inertia-laravel:^0.6.3
```

#### Update environment variables

You will need to update the environment variables that are explicitly exposed in your `.env` files and in hosting environments such as Forge to use the `VITE_` prefix instead of `MIX_`:

```diff
- MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
- MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"
+ VITE_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
+ VITE_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"
```

> **Note**  
> You may optionally maintain the `MIX_` prefix by [configuring Vite](https://vitejs.dev/config/#envprefix) to use it.

You will also need to update these references in your JavaScript code to use the new variable name and Vite syntax:

```diff
-    key: process.env.MIX_PUSHER_APP_KEY,
-    cluster: process.env.MIX_PUSHER_APP_CLUSTER,
+    key: import.meta.env.VITE_PUSHER_APP_KEY,
+    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
```

#### Importing your CSS from your JavaScript entry point(s)

If you are building an SPA, you will get a better experience by importing your CSS from your JavaScript entry point(s), such as your `resources/js/app.js` entry point:

```diff
  import './bootstrap';
+ import '../css/app.css';
```

In development mode, Vite will automatically inject your CSS into the page. In production, a dedicated stylesheet will be generated that the `@vite` directive will load from the manifest.

#### Replace `mix()` with `@vite`

When using Vite, you will need to use the `@vite` Blade directive instead of the `mix()` helper.

This will automatically detect whether you are running in serve or build mode and include all of the required `<script>` and `<link rel="stylesheet">` for you:

```diff
- <link rel="stylesheet" href="{{ mix('css/app.css') }}">
- <script src="{{ mix('js/app.js') }}" defer></script>
+ @vite(['resources/css/app.css', 'resources/js/app.js'])
```

The entry points should match those used in your `vite.config.js`.

#### Remove Laravel Mix

The Laravel Mix package can now be uninstalled:

```shell
npm remove laravel-mix
```

And you may remove your Mix configuration file:

```shell
rm webpack.mix.js
```

If you are using StyleCI and have ignored the `webpack.mix.js` file in your configuration, you may also wish to remove the ignore rule.

#### Update Test Helpers

If you are using the `$this->withoutMix();` helper in your tests, you should replace this with `$this->withoutVite()`:

```diff
- $this->withoutMix();
+ $this->withoutVite();
```

#### Optional: Configure Tailwind

If you are using Tailwind, perhaps with one of Laravel's starter kits, you will need migrate your `tailwind.config.js` to use [Vite compatible imports](#vite-compatible-imports) and exports.

```diff
- const defaultTheme = require('tailwindcss/defaultTheme');
+ import defaultTheme from 'tailwindcss/defaultTheme';
+ import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
- module.exports = {
+ export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.svelte',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

-    plugins: [require('@tailwindcss/forms')],
+    plugins: [forms],
};
```

You will also need to create a `postcss.config.cjs` file. Tailwind can generate this for you automatically:

```shell
npx tailwindcss init -p
```

Or, you can create it manually:

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

If you are using other PostCSS plugins, such as `postcss-import`, you will need to include them in your configuration.

#### Optional: Git ignore the build directory

Vite will place all of your build assets into a `build` subdirectory inside your public directory. If you prefer to build your assets on deploy instead of committing them to your repository, you may wish to add this directory to your `.gitignore` file:

```gitignore
/public/build
```

That will be all for today. See you later!