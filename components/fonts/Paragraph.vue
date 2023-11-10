<script setup lang="ts">
const props = defineProps({
    text_align: {
        type: String,
        default: 'justify',
    },
})

const classes = computed(() => {
    let alignment = 'text-justify'

    if(props.text_align === 'center') {
        alignment = 'text-center'
    } else if(props.text_align === 'right') {
        alignment = 'text-right'
    } else if(props.text_align === 'left') {
        alignment = 'text-left'
    }

    return [
        'my-6',
        'text-lg',
        'tracking-wide',
        alignment,
    ]
})
</script>

<template>
    <p :class="classes">
        <slot /> 
    </p>
</template>