const { src, dest, watch, series, parallel } = require('gulp');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');

function defaultTask(cb) {
	console.log('This is a first task')
	cb();
}

function styles() {
	return src('src/styles/**/*.css')
		.pipe(sourcemaps.init())
		.pipe(cleanCSS({ debug: true }, (details) => {
			console.log(`Файл: ${details.name}`);
			console.log(`Изначальный размер: ${details.stats.originalSize}`);
			console.log(`Размер после сжатия: ${details.stats.minifiedSize}`);
			console.log(`Эффективность сжатия: ${Math.round(details.stats.efficiency * 100)}%`)
			console.log('=============================================')
		}))
		.pipe(sourcemaps.write())
		.pipe(dest('dist/styles'))
}

function html() {
	return src('src/index.html')
		.pipe(dest('dist/'))
}

function images() {
	return src(['src/assets/**/*.png', 'src/assets/**/*.ico', 'src/assets/**/*.svg'])
		.pipe(dest('dist/assets/'))
}

function dev() {
	watch('src/index.html', html)
	watch('src/**/*.css', styles)
}

exports.default = defaultTask;
exports.dev = dev;
exports.build = parallel(html, styles, images);
