const src = './src/';
const dist = './dist/';

export default {
	build: {
		html: dist,
		css: dist + 'styles',
		js: dist + 'scripts',
		images: dist + 'assets/images',
		fonts: dist + 'assets/fonts',
	},
	src: {
		html: src + '*.html',
		components: src + 'components',
		css: src + 'styles/*.less',
		js: src + 'scripts/**/*.js',
		images: src + 'assets/images/**/*.{jpeg,png,ico}',
		svg: src + 'assets/images/**/*.svg',
		fonts: src + 'assets/fonts/**/*.{ttf,woff}',
	},
	watch: {
		html: src + '**/*.html',
		components: src + 'components/**/*.html',
		css: src + 'styles/**/*.less',
		js: src + 'scripts/**/*.js',
		images: src + 'assets/images/**/*.{jpeg,png,ico}',
		svg: src + 'assets/images/**/*.svg',
		fonts: src + 'assets/fonts/**/*.{ttf,woff}',
	},
	clean: dist
}
