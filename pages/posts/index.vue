<script setup>
import { useAsyncData, useCookie, useRuntimeConfig } from 'nuxt/app';
import { profile } from '~/datas/root'
const { $posthog } = useNuxtApp()
const posts = await queryContent('posts').only(['id', 'title', 'description', 'image', 'draft', '_path']).where({ draft: false }).sort({ published: -1 }).limit(50).find()

useSeoMeta({
  author: profile.fullname,
  creator: profile.fullname,
  title: 'Posts | naimsolong',
  description: 'Sharing my knowledge and updates about my career progress in articles and journals.',
  ogTitle: 'Posts | naimsolong',
  ogDescription: 'Sharing my knowledge and updates about my career progress in articles and journals.',
  ogType: 'article',
  twitterCard: 'summary_large_image',
})

const { data: someData, error } = await useAsyncData('home', async (event) => {
  const runtimeConfig = useRuntimeConfig();
  // const { page } = queryContent($route.path).findOne()
  
  if ($posthog) {
    const posthog = $posthog()

    try {
      const distinctId = `ph_posthog`; // or you can use your user's email, for example.

      posthog.capture({
        // distinctId: distinctId,
        event: 'project_index',
      })
      await posthog.shutdownAsync()
    } catch (error) {
      // console.log(error);
    }
  }

  return "Some data";
});
</script>

<template>
  <FontsHeaderOne>
    Posts
  </FontsHeaderOne>

  <FontsParagraph>
    Sharing my knowledge and updates about my career progress in articles and journals.
  </FontsParagraph>

  <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center w-full">
    <SectionsCard v-if="posts.length > 0" v-for="post in posts" :post="post" />
    <span v-else>Coming soon...</span>
  </div>
</template>