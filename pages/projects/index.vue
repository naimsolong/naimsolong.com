<script setup lang="ts">
import { useAsyncData, useCookie, useRuntimeConfig } from 'nuxt/app';
import { PostHog } from 'posthog-node';
import { profile } from '~/datas/root'
const projects = await queryContent('projects').only(['id', 'title', 'description', 'image', '_path']).where({ draft: false }).sort({ published: -1 }).limit(50).find()

useSeoMeta({
  author: profile.fullname,
  creator: profile.fullname,
  title: 'Projects | naimsolong',
  description: 'Ongoing and past interesting projects that I have worked on.',
  ogTitle: 'Projects | naimsolong',
  ogDescription: 'Ongoing and past interesting projects that I have worked on.',
  ogType: 'article',
  twitterCard: 'summary_large_image',
})

const { data: someData, error } = await useAsyncData('ctaText', async (event) => {
  const runtimeConfig = useRuntimeConfig();
  console.log(runtimeConfig)
  
  const posthog = new PostHog(
    runtimeConfig.public.posthog_key,
    { host: runtimeConfig.public.posthog_host || 'https://app.posthog.com' }
  );

  try {
    const distinctId = `ph_posthog`; // or you can use your user's email, for example.
    posthog.capture({
      distinctId: distinctId,
      event: event.payload.path,
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
    Projects
  </FontsHeaderOne>

  <FontsParagraph>
    Ongoing and past interesting projects that I have worked on.
  </FontsParagraph>

  <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center w-full">
    <SectionsCard v-if="projects.length > 0" v-for="project in projects" :post="project" />
    <span v-else>Coming soon...</span>
  </div>
</template>