<script setup lang="ts">
import { stacks } from '~/datas/root'
</script>

<template>
    <SectionsSpacing>
        <FontsParagraph text_align="center">
            By using latest technology stack and tools that can scale but not limited to.
        </FontsParagraph>

      <SectionsImages :datas="stacks"/>
    </SectionsSpacing>
</template>