import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

type ViteConfigInput = {
	mode: string
	command: string
}

export default (args: ViteConfigInput) => {
	const generateScopedName =
		args.mode === 'production'
			? 'css-[hash:base64:8]'
			: '[name]_[local]__[hash:base64:5]'

	return defineConfig({
		plugins: [react()],
		resolve: {
			alias: {
				assets: '/src/assets',

				images: '/src/assets/images',
				styles: '/src/assets/styles',

				components: '/src/components',

				layout: '/src/components/layout',
				shared: '/src/components/shared',
				ui: '/src/components/ui',

				data: '/src/data',
				hooks: '/src/hooks',
				views: '/src/views',
			},
		},
		css: {
			modules: {
				localsConvention: 'camelCase',
				generateScopedName,
				hashPrefix: 'prefix',
			},
		},
		server: {
			host: true,
		},
	})
}
