<script setup lang="ts">
import { offers } from '~/datas/root'
</script>

<template>
    <SectionsImages :datas="offers" :spacing="true" size="large"/>
</template>