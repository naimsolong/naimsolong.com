import { PostHog } from 'posthog-node'
const config = useRuntimeConfig()

export const posthog = new PostHog(
    config.posthog_key,
    { host: config.posthog_host }
)