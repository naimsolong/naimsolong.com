<script setup lang="ts">
const props = defineProps({
    lists: {
        type: Array,
        required: true,
    },

})
</script>

<template>
    <ol class="my-6 text-justify text-lg tracking-wide list-decimal list-outside">
        <li v-for="list in lists" class="ml-6 md:ml-12 mb-3">{{ list }}</li>
    </ol>
</template>