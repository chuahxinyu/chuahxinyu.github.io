/* eslint-disable turbo/no-undeclared-env-vars */
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

/* 
  We are doing some URL mumbo jumbo here to tell Astro what the URL of your website will be.
  In local development, your SEO meta tags will have localhost URL.
  In built production websites, your SEO meta tags should have your website URL.
  So we give our website URL here and the template will know what URL to use 
  for meta tags during build.
  If you don't know your website URL yet, don't worry about this
  and leave it empty or use localhost URL. It won't break anything.
*/
import react from "@astrojs/react";
const SERVER_PORT = 3000;
const SITE_URL = `https://cindyc-dev.github.io`;

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  server: {
    port: SERVER_PORT,
  },
  integrations: [
    sitemap(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    react(),
  ],
});
