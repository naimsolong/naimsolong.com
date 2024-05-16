<template>
    <component
      :is="imgComponent"
        :src="refinedSrc"
        :alt="alt"
        :width="width"
        :height="height"
        class="object-cover lg:w-1/2 md:w-3/4 my-6 mx-auto"
    />
</template>
  
<script setup lang="ts">
    import { withTrailingSlash, withLeadingSlash, joinURL } from 'ufo'
    import { useRuntimeConfig, computed, resolveComponent } from '#imports'
    
    const imgComponent = useRuntimeConfig().public.mdc.useNuxtImage ? resolveComponent('NuxtImg') : 'img'
    
    const props = defineProps({
        src: {
            type: String,
            default: ''
        },
        alt: {
            type: String,
            default: ''
        },
        width: {
            type: [String, Number],
            default: undefined
        },
        height: {
            type: [String, Number],
            default: undefined
        }
    })
    
    const refinedSrc = computed(() => {
        if (props.src?.startsWith('/') && !props.src.startsWith('//')) {
            const _base = withLeadingSlash(withTrailingSlash(useRuntimeConfig().app.baseURL))
            if (_base !== '/' && !props.src.startsWith(_base)) {
                return joinURL(_base, props.src)
            }
        }
        return props.src
    })
</script>