<script setup lang="ts">
    import { computed, useRuntimeConfig } from '#imports'
    
    const props = defineProps<{ id?: string }>()
    
    const { headings } = useRuntimeConfig().public.mdc
    const generate = computed(() => props.id && headings?.anchorLinks?.h2)
</script>
  
  <template>
    <h4 class="text-lg font-extrabold mt-10 mb-5 tracking-wider" :id="id">
        <a
            v-if="id && generate"
            :href="`#${id}`"
        >
            <slot />
        </a>
        <slot v-else />
    </h4>
</template>