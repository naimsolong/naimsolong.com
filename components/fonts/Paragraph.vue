<script setup lang="ts">
const props = defineProps({
    text_align: {
        type: String,
        default: 'justify',
    },
})

const classes = computed(() => {
    return [
        'my-6',
        'text-lg',
        'tracking-wide',
        'text-' + props.text_align,
    ]
})
</script>

<template>
    <p :class="classes">
        <slot /> 
    </p>
</template>