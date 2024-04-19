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
        'text-2xl',
        'font-extrabold',
        'mt-10',
        'mb-5',
        'tracking-wider',
        alignment,
    ]
})
</script>

<template>
    <h2 :class="classes">
        <slot /> 
    </h2>
</template>