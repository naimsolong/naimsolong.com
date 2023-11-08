<script setup lang="ts">
import { posts } from '~/datas/posts'
</script>

<template>
    
    <SectionsSpacing>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center w-full">
            <SectionsCard v-for="post in posts" :post="post" />
        </div>
    </SectionsSpacing>

</template>