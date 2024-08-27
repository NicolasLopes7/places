import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	site: "https://places.nicolaslopes.space",
	integrations: [mdx({
		syntaxHighlight: 'shiki',
		shikiConfig: { theme: 'dracula' },
		gfm: false,
	}), sitemap({
		changefreq: 'daily',
		priority: 1,
		lastmod: new Date().toISOString().split('T')[0]
	}), tailwind(),],
	output: "server",
	adapter: cloudflare(),
});
