<script setup>
import { useAsyncData, useCookie, useRuntimeConfig } from 'nuxt/app';
import moment from 'moment';
import { profile } from '~/datas/root'
const { $posthog } = useNuxtApp()
const projects = await queryContent('projects')
                  .only(['id', 'title', 'description', 'image', 'published', '_path'])
                  .where({
                    draft: false,
                    published: {
                      $lte: moment().format('Y-m-d')
                    }
                  })
                  .sort({ published: -1 })
                  .limit(50)
                  .find()

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

const { data: someData, error } = await useAsyncData('home', async (event) => {
  const runtimeConfig = useRuntimeConfig();
  // const { page } = queryContent($route.path).findOne()
  
  if ($posthog) {
    const posthog = $posthog()

    try {
      const distinctId = `ph_posthog`; // or you can use your user's email, for example.

      posthog.capture({
        distinctId: distinctId,
        // event: 'project_index',
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