<script setup lang="ts">
import { PostData } from '~/datas/type';

const props = defineProps({
    post: {
        type: Object,
        required: true,
    },
})
</script>

<template>
    <div class="bg-white border border-gray-200 rounded-lg">
        <a :href="props.post.link">
            <img class="rounded-t-lg" :src="props.post.image" :alt="props.post.alt ?? 'Images'" />
            <div class="p-5">
                <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900">{{ props.post.headline }}</h5>
                <p class="mb-3 font-normal text-gray-700">{{ props.post.description }}</p>
                <hr>
                <span class="inline-flex mt-3 items-center text-sm font-medium text-center rounded-lg">
                    Read more
                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </span>
            </div>
        </a>
    </div>
</template>