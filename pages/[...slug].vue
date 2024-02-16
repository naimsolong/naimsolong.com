<script setup>
import { useAsyncData, useCookie, useRuntimeConfig } from 'nuxt/app';
import { PostHog } from 'posthog-node';

const { data: someData, error } = await useAsyncData('home', async () => {
  const { page } = await useAsyncData('query', () => queryContent($route.path).findOne())

  const runtimeConfig = useRuntimeConfig();
  
  const posthog = new PostHog(
    runtimeConfig.public.posthog_key,
    { host: runtimeConfig.public.posthog_host || 'https://app.posthog.com' }
  );

  try {
    const distinctId = `ph_${runtimeConfig.public.posthog_key}_posthog`; // or you can use your user's email, for example.
    posthog.capture({
      distinctId: distinctId,
      event: page.event || $route.path,
    })
    await posthog.shutdownAsync()
  } catch (error) {
    // console.log(error);
  }

  return "Some data";
});
</script>

<template>
  <main>
    <ContentDoc :path="$route.path">
      <template v-slot="{ doc }">
        <ContentRenderer :value="doc" />
      </template>
      <template #not-found>
        <h1>Page not found</h1>
      </template>
    </ContentDoc>
  </main>
</template>