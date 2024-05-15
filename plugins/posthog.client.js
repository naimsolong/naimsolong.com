import { defineNuxtPlugin } from '#app'
import posthog from 'posthog-js'

export default defineNuxtPlugin(nuxtApp => {
  const runtimeConfig = useRuntimeConfig();
  const posthogClient = posthog.init(runtimeConfig.public.posthog_key, {
    api_host: runtimeConfig.public.posthog_host || '"https://app.posthog.com"',
    capture_pageview: false, // we add manual pageview capturing below
    loaded: (posthog) => {
      if (import.meta.env.MODE === 'development') posthog.debug();
    }
  })

  // Make sure that pageviews are captured with each route change
  const router = useRouter();
  router.afterEach((to) => {
    nextTick(() => {
      posthog.capture('$pageview', {
        current_url: to.fullPath
      });
    });
  });
  router.beforeRouteLeave((to, from) => {
    nextTick(() => {
      posthog.capture('$pageleave', {
        current_url: to.fullPath
      });
    });
  });

  return {
    provide: {
      posthog: () => posthogClient
    }
  }
})