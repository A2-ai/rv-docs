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
			customCss: [
				'./src/styles/custom.css',
			],
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
						{ label: 'Overview', slug: 'config' },
						{
							label: 'Required Fields',
							items: [
								{ label: 'Overview', slug: 'config/required-fields' },
								{ label: 'name', slug: 'config/required-fields/name' },
								{ label: 'r_version', slug: 'config/required-fields/r_version' },
								{ label: 'repositories', slug: 'config/required-fields/repositories' },
								{ label: 'dependencies', slug: 'config/required-fields/dependencies' },
							]
						},
						{
							label: 'Package Compilation',
							collapsed: true,
							items: [
								{ label: 'Overview', slug: 'config/package-compilation' },
								{ label: 'prefer_repositories_for', slug: 'config/package-compilation/prefer_repositories_for' },
								{ label: 'packages_env_vars', slug: 'config/package-compilation/packages_env_vars' },
								{ label: 'configure_args', slug: 'config/package-compilation/configure_args' },
								{ label: 'no_strip', slug: 'config/package-compilation/no_strip' },
								{ label: 'git_shorthand_base_url', slug: 'config/package-compilation/git_shorthand_base_url' }
							]
						},
						{
							label: 'Project Options',
							collapsed: true,
							items: [
								{ label: 'Overview', slug: 'config/project-options' },
								{ label: 'library', slug: 'config/project-options/library' },
								{ label: 'use_lockfile', slug: 'config/project-options/use_lockfile' },
								{ label: 'lockfile_name', slug: 'config/project-options/lockfile_name' },
								{ label: 'sandbox', slug: 'config/project-options/sandbox' },
							]
						}
					]
				},
				{
					label: 'Commands',
					items: [
						{ label: 'Overview and Global Options', slug: 'commands' },
						{
							label: 'Project Initialization',
							collapsed: true,
							items: [
								{ label: 'Overview', slug: 'commands/project-initialization' },
								{ label: 'rv init', slug: 'commands/project-initialization/init' },
								{ label: 'rv migrate renv', slug: 'commands/project-initialization/migrate_renv' },
							]
						},
						{
							label: 'Package Installation',
							collapsed: true,
							items: [
								{ label: 'Overview', slug: 'commands/package-installation' },
								{ label: 'rv sync', slug: 'commands/package-installation/sync' },
								{ label: 'rv upgrade', slug: 'commands/package-installation/upgrade' }
							]
						},
						{
							label: 'Editing the Config',
							collapsed: true,
							items: [
								{ label: 'Overview', slug: 'commands/editing-the-config' },
								{ label: 'rv add', slug: 'commands/editing-the-config/add' },
								{ label: 'rv remove', slug: 'commands/editing-the-config/remove' },
								{
									label: 'rv configure repository',
									collapsed: true,
									items: [
										{ label: 'Overview', slug: 'commands/editing-the-config/configure-repository' },
										{ label: 'add', slug: 'commands/editing-the-config/configure-repository/add' },
										{ label: 'replace', slug: 'commands/editing-the-config/configure-repository/replace' },
										{ label: 'update', slug: 'commands/editing-the-config/configure-repository/update' },
										{ label: 'remove', slug: 'commands/editing-the-config/configure-repository/remove' },
										{ label: 'clear', slug: 'commands/editing-the-config/configure-repository/clear' },
									]
								}
							]
						},
						{
							label: 'Project Status',
							collapsed: true,
							items: [
								{ label: 'Overview', slug: 'commands/project-status' },
								{ label: 'rv plan', slug: 'commands/project-status/plan' },
								{ label: 'rv summary', slug: 'commands/project-status/summary' }
							]
						},
						{
							label: 'Project Information',
							collapsed: true,
							items: [
								{ label: 'Overview', slug: 'commands/project-information' },
								{ label: 'rv tree', slug: 'commands/project-information/tree' },
								{ label: 'rv cache', slug: 'commands/project-information/cache' },
								{ label: 'rv library', slug: 'commands/project-information/library' },
								{ label: 'rv info', slug: 'commands/project-information/info' },
								{ label: 'rv sysdeps', slug: 'commands/project-information/sysdeps' },
							]
						},
						{
							label: 'Other',
							collapsed: true,
							items: [
								{ label: 'Overview', slug: 'commands/other' },
								{ label: 'rv fmt', slug: 'commands/other/fmt' },
								{ label: 'rv activate & rv deactivate', slug: 'commands/other/activation' },
								{ label: 'rv run', slug: 'commands/other/run' },
								{ label: 'rv export renv', slug: 'commands/other/export_renv' }
							]
						}
					],
				},
				{
					label: 'Cookbook',
					collapsed: true,
					items: [
						{ label: 'Introduction', slug: 'cookbook/intro' },
						{ label: 'rv add examples', slug: 'cookbook/rv_add_examples' },
						{ label: 'Installing a Specific Package Version', slug: 'cookbook/pkg_version' },
						{ label: 'Overriding Remotes', slug: 'cookbook/remotes' },
						{ label: 'Using a sandbox', slug: 'cookbook/sandbox' },
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
						{ label: 'Self-contained scripts', slug: 'reference/self_contained_scripts' },
					]
				},
				{
					label: 'Concepts',
					collapsed: true,
					items: [
						{ label: 'Resolution', slug: 'concepts/resolution'},
						{ label: 'Caching', slug: 'concepts/cache' },
						{ label: 'Sandbox', slug: 'concepts/sandbox' },
					]
				}
			],
		}),
	],
});
