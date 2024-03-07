import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import partytown from '@astrojs/partytown'
import netlify from "@astrojs/netlify";
import sitemap from '@astrojs/sitemap';
import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  site: 'https://cooltoybro.com',
  integrations: [
    tailwind(), 
    svelte(), 
    sitemap(),
		partytown({
			config: {
			  forward: ["dataLayer.push"],
			},
		}),
    compressor(),
  ],
  output: "server",
  server: {
    port: 3000
  },
  preview: {
    port: 3000
  },
  adapter: netlify(),
  redirects: {
    '/home': '/',
    '/survey': '/gift-finder',
    '/quiz': '/gift-finder',
    '/gift': '/gift-finder',
    '/about': '/',
    '/all': '/products',
    '/mike': 'https://mjweaver01.com',
    '/abe': 'https://efukt.com/436_21049_It_s_Only_Smellz.html'
  }
});