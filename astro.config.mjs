// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'rv 0.6.2',
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
				{
					label: 'Cookbook',
					items: [
						{ 
							label: 'Installing a Specific Version', 
							items: [
								{ label: 'From Snapshot', slug: 'cookbook/snapshot_pkg' },
								{ label: 'From Archive', slug: 'cookbook/archive_pkg' },
							]
						},
						{ label: 'Overriding Remotes', slug: 'cookbook/remotes' },
					]
				},
				{
					label: 'Reference',
					items: [
						{ label: 'rvr - rv for R', slug: 'reference/rvr' },
						{ label: 'Difference with renv', slug: 'reference/renv-difference'},
						{ label: 'Resolution', slug: 'reference/resolution'},
						{ label: 'FAQ', slug: 'reference/faq'},
					]
				}
			],
		}),
	],
});
