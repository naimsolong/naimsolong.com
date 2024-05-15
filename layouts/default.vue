<script setup lang="ts">
const route = useRoute()
const config = useRuntimeConfig()

let cloudflare_token = config.public.cloudflare_analytic_token

useHead({
    bodyAttrs: {
        class: computed(() => {
            return 'max-w-screen-lg px-10 md:px-6 mx-auto';
        }),
    },
    link: [
        {
            rel: 'canonical',
            href: config.public.app_url+route.path,
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com',
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap',
        },
    ],
    script: [
        {
            defer: true,
            src: 'https://static.cloudflareinsights.com/beacon.min.js',
            "data-cd-beacon": '{"token": "'+cloudflare_token+'"}'
        }
    ]
});
</script>

<style>
    * {
        font-family: 'Roboto', sans-serif;
    }
</style>

<template>
    <main>
        <HeadersDefault />
        <SectionsSpacing>
            <slot />
        </SectionsSpacing>
        <FootersDefault />
    </main>
</template>