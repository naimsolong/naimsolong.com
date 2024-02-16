<script setup lang="ts">
    defineProps({
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
    <FontsLink
        :href="href"
        :target="target"
        :rel="rel"
    >
      <slot />
    </FontsLink>
</template>