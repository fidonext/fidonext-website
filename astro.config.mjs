// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://fidonext.org',
	vite: {
		build: {
			target: 'esnext',
		},
	},
});
