<script setup>
import { useAsyncData, useCookie, useRuntimeConfig } from 'nuxt/app';
import moment from 'moment';
const { $posthog } = useNuxtApp()

const { data: someData, error } = await useAsyncData('home', async (event) => {
  const runtimeConfig = useRuntimeConfig();
  
  if ($posthog) {
    const posthog = $posthog() 

    try {
      const distinctId = `ph_posthog`; // or you can use your user's email, for example.

      posthog.capture({
        // distinctId: distinctId,
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
        <span v-if="doc.published != ''">
          <ProseH1>
            {{ doc.title }}
          </ProseH1>
          <p class="mb-2 font-small text-gray-400"><small>Published at: {{ moment(doc.published).format('DD/MM/YYYY') }}</small></p>
        </span>
        <ContentRenderer :value="doc" />
      </template>
      <template #not-found>
        <h1>Page not found</h1>
      </template>
    </ContentDoc>
  </main>
</template>