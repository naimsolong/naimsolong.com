<script setup lang="ts">
import { profile, offers, stacks } from '~/datas/root'

useSeoMeta({
  author: profile.fullname,
  creator: profile.fullname,
  title: 'Full-Stack Laravel Developer | naimsolong',
  description: 'A passionate web application developer in helping business growth.',
  ogTitle: 'Full-Stack Laravel Developer | naimsolong',
  ogDescription: 'A passionate web application developer in helping business growth.',
  ogType: 'article',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div>
    <SectionsSpacing>
      <FontsHeaderOne>
        Full-Stack Laravel Developer
      </FontsHeaderOne>

      <FontsParagraph>
        Passionate web application developer in helping business growth, with 4 year plus of web development experience across multiple industries - e-commerce, human resources, point of sales - I'm still curious and love to learn new things about how tech work behind the scene.
      </FontsParagraph>

      <FontsParagraph>
        Currently, work on a full-time basis, it's a pleasure to share knowledge and updates about my career progress in articles and journals.
      </FontsParagraph>

      <FontsParagraph>
        I believe that <b>simplicity</b>, <b>integrity</b> and <b>empathy</b> are the ideal approach to problem-solving in general.
      </FontsParagraph>
    </SectionsSpacing>

    <SectionsSpacing>
      <FontsHeaderTwo>
        What Do I Offer
      </FontsHeaderTwo>

      <SectionsImages :datas="offers" :spacing="true" size="large"/>
    </SectionsSpacing>

    <hr>

    <SectionsSpacing>
      <FontsParagraph text_align="center">
        By using latest technology stack and tools that can scale but not limited to.
      </FontsParagraph>

      <SectionsImages :datas="stacks"/>
    </SectionsSpacing>
  </div>
</template>
