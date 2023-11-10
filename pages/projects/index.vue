<script setup lang="ts">
import { profile } from '~/datas/root'

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
    Projects index
</template>