<script setup>
import { useAsyncData, useCookie, useRuntimeConfig } from 'nuxt/app';
const { $posthog } = useNuxtApp()

const { data: someData, error } = await useAsyncData('home', async (event) => {
  const runtimeConfig = useRuntimeConfig();
  
  if ($posthog) {
    const posthog = $posthog() 

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
  }

  return "Some data";
});
</script>

<template>
  <main>
    <ContentDoc :path="$route.path">
      <template v-slot="{ doc }">
        {{ page }}
        <ContentRenderer :value="doc" />
      </template>
      <template #not-found>
        <h1>Page not found</h1>
      </template>
    </ContentDoc>
  </main>
</template>