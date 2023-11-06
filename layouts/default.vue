<script setup lang="ts">
useHead({
    bodyAttrs: {
        class: computed(() => {
            return 'max-w-screen-md px-10 md:px-0 mx-auto';
        }),
    },
});
</script>

<template>
    <div>
        <HeadersDefault />
        <slot />
        <FootersDefault />
    </div>
</template>