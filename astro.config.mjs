import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://aini-ai-network-innovation-lab.github.io",
  output: "static",
  integrations: [sitemap()]
});

