// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'rv',
			logo: {
				src: './src/assets/images/rv-logo.png'
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/a2-ai/rv' }],
			sidebar: [
				{
					label: 'Introduction',
					items: [
						{ label: 'Installation Instructions', slug: 'intro/installation' },
						{ label: 'First rv project', slug: 'intro/getting-started' },
					],
				},
				{
					label: 'Configuration File',
					autogenerate: { directory: 'config' },
				},
				{
					label: 'Commands',
					autogenerate: { directory: 'commands' },
				},
			],
		}),
	],
});
