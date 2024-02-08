
<script setup lang="ts">
    import { computed, useRuntimeConfig } from '#imports'

    const props = defineProps<{ id?: string }>()

    const { headings } = useRuntimeConfig().public.mdc
    const generate = computed(() => props.id && headings?.anchorLinks?.h1)
</script>

<template>
    <h1 class="text-3xl font-extrabold mt-10 mb-5 tracking-wider" :id="id">
        <a
        v-if="generate"
        :href="`#${id}`"
        >
            <slot />
        </a>
        <slot v-else />
    </h1>
</template>
