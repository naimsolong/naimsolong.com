<script setup lang="ts">
const props = defineProps({
    text_align: {
        type: String,
        default: 'justify',
    },
})

const classes = computed(() => {
    let alignment = ''

    if(props.text_align === 'center') {
        alignment = 'md:text-center'
    } else if(props.text_align === 'right') {
        alignment = 'md:text-right'
    } else if(props.text_align === 'left') {
        alignment = 'md:text-left'
    }

    return [
        'my-6',
        'text-justify',
        'text-lg',
        'tracking-wide',
        alignment,
    ]
})
</script>

<template>
    <FontsHeaderTwo>
        In a nutshell
    </FontsHeaderTwo>
    <p :class="classes">
        <slot /> 
    </p>
    <p :class="classes">
        See you soon!
    </p>
</template>