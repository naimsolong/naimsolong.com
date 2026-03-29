<script setup lang="ts">
const props = defineProps({
    href: {
        type: String,
        default: '',
        required: true
    },
    target: {
        type: String,
        default: '_blank',
        required: false
    },
    rel: {
        type: String,
        default: 'noopener noreferrer',
    },

})
</script>

<template>
    <a class="underline underline-offset-4 font-medium text-site-accent hover:opacity-80 transition-opacity" :href="props.href" :target="props.target" :rel="props.rel">
        <slot/>
    </a>
</template>