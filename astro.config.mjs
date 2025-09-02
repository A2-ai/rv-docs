// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
        site: 'https://a2-ai.github.io',
	base: '/rv-docs',
	integrations: [
		starlight({
			title: 'rv docs',
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
					label: 'Project Configuration',
					items: [
						{ label: 'Introduction', slug: 'config/intro' },
						{ 
							label: 'Required Fields',
							items: [
								{ label: 'name', slug: 'config/name' },
								{ label: 'r_version', slug: 'config/r_version' },
								{ label: 'repositories', slug: 'config/repositories' },
								{ label: 'dependencies', slug: 'config/dependencies' },
							]
						},
						{
							label: 'Package Compilation',
							collapsed: true,
							items: [
								{ label: 'prefer_repositories_for', slug: 'config/prefer_repositories_for' },
								{ label: 'packages_env_vars', slug: 'config/packages_env_vars' },
								{ label: 'configure_args', slug: 'config/configure_args' }
							]
						},
						{
							label: 'Project Options',
							collapsed: true,
							items: [
								{ label: 'library', slug: 'config/library' },
								{ label: 'use_lockfile', slug: 'config/use_lockfile' },
								{ label: 'lockfile_name', slug: 'config/lockfile_name' },
							]
						}
					]
				},
				{
					label: 'Commands',
					items: [
						{ label: 'Introduction and Global Options', slug: 'commands/intro' },
						{
							label: 'Project Initialization',
							collapsed: true,
							items: [
								{ label: 'rv init', slug: 'commands/init' },
								{ label: 'rv migrate renv', slug: 'commands/migrate_renv' },
							]
						},
						{
							label: 'Package Installation',
							collapsed: true,
							items: [
								{ label: 'rv sync', slug: 'commands/sync' },
								{ label: 'rv upgrade', slug: 'commands/upgrade' }
							]
						},
						{
							label: 'Project Configuration',
							collapsed: true,
							items: [
								{ label: 'rv add', slug: 'commands/add' },
								{ label: 'rv configure repository', slug: 'commands/configure_repos'}
							]
						},
						{
							label: 'Project Status',
							collapsed: true,
							items: [
								{ label: 'rv plan', slug: 'commands/plan' },
								{ label: 'rv summary', slug: 'commands/summary' }
							]
						},
						{
							label: 'Project Information',
							collapsed: true,
							items: [
								{ label: 'rv tree', slug: 'commands/tree' },
								{ label: 'rv cache', slug: 'commands/cache' },
								{ label: 'rv library', slug: 'commands/library' },
								{ label: 'rv info', slug: 'commands/info' },
								{ label: 'rv sysdeps', slug: 'commands/sysdeps' },
							]
						},
						{
							label: 'Other',
							collapsed: true,
							items: [
								{ label: 'rv activate & rv deactivate', slug: 'commands/activation' }
							]
						}
					],
				},
				{
					label: 'Cookbook',
					collapsed: true,
					items: [
						{ label: 'Introduction', slug: 'cookbook/intro' },
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
					collapsed: true,
					items: [
						{ label: 'FAQ', slug: 'reference/faq'},
						{ label: 'Difference with renv', slug: 'reference/renv-difference' },
						{ label: 'Environment Variables', slug: 'reference/env_vars' },
						{ label: 'rv with quarto', slug: 'reference/rv-quarto'},
						{ label: 'rvr - rv for R', slug: 'reference/rvr' },
					]
				},
				{
					label: 'Concepts',
					collapsed: true,
					items: [
						{ label: 'Resolution', slug: 'concepts/resolution'},
						{ label: 'Caching', slug: 'concepts/cache' },
					]
				}
			],
		}),
	],
});
