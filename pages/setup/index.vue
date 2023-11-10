<script setup lang="ts">
import { profile } from '~/datas/root'

useSeoMeta({
  author: profile.fullname,
  creator: profile.fullname,
  title: 'Setup | naimsolong',
  description: 'Local development setup.',
  ogTitle: 'Setup | naimsolong',
  ogDescription: 'Local development setup.',
  ogType: 'article',
  twitterCard: 'summary_large_image',
})
</script>

<template>
    Setup index
</template>