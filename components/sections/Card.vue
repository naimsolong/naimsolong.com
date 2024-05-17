<script setup lang="ts">
import moment from 'moment';

const props = defineProps({
    post: {
        type: Object,
        required: true,
    },
})
</script>

<template>
    <div class="bg-white border border-ray-200 rounded-lg">
        <a :href="props.post._path">
            <img v-if="props.post.image && props.post.image != ''" class="rounded-t-lg" :src="props.post.image" :alt="props.post.alt ?? 'Images'" />
            <div class="flex flex-col justify-between p-5 h-full">
                <span>
                    <h5 class="mb-1 text-lg font-bold tracking-tight text-gray-900">{{ props.post.title }}</h5>
                    <p class="mb-3 font-normal text-gray-700">{{ props.post.description }}</p>
                </span>
                <span class="flex flex-col pt-3 text-sm font-medium border-t-2 border-ray-200">
                    <p class="mb-2 font-small text-gray-300"><small>Published at: <span class="text-gray-400">{{ moment(props.post.published).format('DD/MM/YYYY')}}</span></small></p>
                    <p class="inline-flex items-center">
                        Read more
                        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </p>
                </span>
            </div>
        </a>
    </div>
</template>