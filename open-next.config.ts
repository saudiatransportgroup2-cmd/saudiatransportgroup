import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

// Every page is prerendered at build time, so prerendered output is served from the
// Worker's static assets (read-only). No KV, R2, queue or revalidation bindings are needed.
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
});
