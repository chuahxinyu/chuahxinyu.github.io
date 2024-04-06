// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Cindy";
export const SITE_DESCRIPTION = "Cindy's little corner of the internet.";
// export const TWITTER_HANDLE = "@yourtwitterhandle";
export const MY_NAME = "Cindy";
export const GITHUB_USERNAME = "cindyc-dev";
export const LINKEDIN_USERNAME = "cindyc-dev";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
