<script setup lang="ts">
import { profile } from '~/datas/root'
const projects = await queryContent('projects').only(['id', 'title', 'description', 'image', '_path']).sort({ published: -1 }).limit(50).find()

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