import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://university.udesly.com',
	integrations: [
		starlight({
			title: 'Udesly Nexus',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			customCss: [
				'./src/styles/custom.css',
				'./src/fonts/font-face.css'
			],
			components: {
				Sidebar: './src/components/Sidebar.astro',
				Hero: './src/components/Hero.astro'
			},
			logo: {
				light: './src/assets/logo-light.svg',
				dark: './src/assets/logo.svg',
				replacesTitle: true
			},
			sidebar: [
				{
					label: 'Shopify',
					autogenerate: { directory: 'shopify' },
				},
				{
					label: 'WordPress',
					autogenerate: { directory: 'wordpress' },
				},
				{
					label: 'Ghost',
					autogenerate: { directory: 'ghost' },
				},
				{
					label: 'JamStack',
					autogenerate: { directory: 'jamstack' },
				},
			],
		}),
	],
});
