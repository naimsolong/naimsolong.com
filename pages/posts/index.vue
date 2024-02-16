<script setup>
import { useAsyncData, useCookie, useRuntimeConfig } from 'nuxt/app';
import { PostHog } from 'posthog-node';
import { profile } from '~/datas/root'
const posts = await queryContent('posts').only(['id', 'title', 'description', 'image', '_path']).sort({ published: -1 }).limit(50).find()

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

const { data: someData, error } = await useAsyncData('ctaText', async () => {
  const runtimeConfig = useRuntimeConfig();
  console.log(runtimeConfig)
  
  const posthog = new PostHog(
    runtimeConfig.public.posthog_key,
    { host: runtimeConfig.public.posthog_host || 'https://app.posthog.com' }
  );

  try {
    const distinctId = `ph_${runtimeConfig.public.posthog_key}_posthog`; // or you can use your user's email, for example.
    posthog.capture({
      distinctId: distinctId,
      event: 'post_index_page"',
    })
    await posthog.shutdownAsync()
  } catch (error) {
    // console.log(error);
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