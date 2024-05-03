<template>
    <pre :class="$props.class"><slot /></pre>
</template>

<script setup lang="ts">
defineProps({
    code: {
        type: String,
        default: ''
    },
    language: {
        type: String,
        default: null
    },
    filename: {
        type: String,
        default: null
    },
    highlights: {
        type: Array as () => number[],
        default: () => []
    },
    meta: {
        type: String,
        default: null
    },
    class: {
        type: String,
        default: null
    }
})
</script>

<style>
pre {
    background-color: #ebedf0;
    line-height: 1.2em;
    letter-spacing: 1.5px;
    border-radius: 9px;
    
    /* some extra styles*/
    padding: 20px;
    text-align:justify;
    font-family:calibri,arial,sans-serif;
}
pre code .line {
    display: block;
}
</style>