<script setup lang="ts">
interface ImageData {
    headline?: string;
    description?: string;
    link: string;
    image: string;
    alt?: string;
}

const props = defineProps({
    datas: {
        type: Array<ImageData>,
        required: true,
    },
    size: {
        type: String,
        default: 'small',
    },
})

const imageClasses = computed(() => {
    const classes = {
        'small': 'h-16 w-16',
        'medium': 'h-24 w-24',
        'large': 'h-32 w-32',
    }

    return classes[props.size] + ' object-cover mx-auto'
})
</script>

<template>
    <div class="flex flex-wrap items-center w-full text-center">
        <div class="px-1 mx-auto" v-for="data in props.datas">
            <a :href="data.link" target="_blank" rel="noopener noreferrer">
                <img
                :alt="data.alt ?? 'Images for ' + data.image"
                :src="data.image"
                :class="imageClasses"
                />
            </a>
        
            <p v-if="data.headline" class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                {{ data.headline }}
            </p>
        
            <p v-if="data.description" class="mt-1 max-w-sm text-sm text-gray-700">
                {{ data.description }}
            </p>
        </div>
    </div>
</template>