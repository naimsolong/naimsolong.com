<script setup lang="ts">
useHead({
    bodyAttrs: {
        class: computed(() => {
            return 'max-w-screen-lg px-10 md:px-6 mx-auto';
        }),
    },
});
</script>

<style>
    * {
        font-family: 'Roboto', sans-serif;
    }
</style>

<template>
    <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
    </Head>

    <div>
        <HeadersDefault />
        <slot />
        <FootersDefault />
    </div>
</template>