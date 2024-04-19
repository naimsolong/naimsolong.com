<script setup lang="ts">
import { stacks } from '~/datas/root'
</script>

<template>
    <SectionsSpacing>
        <FontsParagraph text_align="center">
            By using latest technology stack and tools that can scale but not limited to.
        </FontsParagraph>

        <FontsHeaderTwo text_align="center">
            Back End Stack
        </FontsHeaderTwo>

        <SectionsImages :datas="stacks.backend"/>

        <FontsHeaderTwo text_align="center">
            Front End Stack
        </FontsHeaderTwo>

        <SectionsImages :datas="stacks.frontend"/>

        <FontsHeaderTwo text_align="center">
            DevOps Stack
        </FontsHeaderTwo>

        <SectionsImages :datas="stacks.devops"/>
    </SectionsSpacing>
</template>