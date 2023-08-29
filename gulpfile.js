import gulp from 'gulp';
const { src, dest, watch, series } = gulp;

import cleanCSS from 'gulp-clean-css';
import sourcemaps from 'gulp-sourcemaps';

export default function defaultTask(cb) {
	console.log('This is a first task')
	cb();
}

export function styles() {
	return src('src/styles/**/*.css')
		.pipe(sourcemaps.init())
		.pipe(cleanCSS({debug: true}, (details) => {
			console.log(`Файл: ${details.name}`);
			console.log(`Изначальный размер: ${details.stats.originalSize}`);
			console.log(`Размер после сжатия: ${details.stats.minifiedSize}`);
			console.log(`Эффективность сжатия: ${Math.round(details.stats.efficiency * 100)}%`)
			console.log('=============================================')
		}))
		.pipe(sourcemaps.write())
		.pipe(dest('dist/styles'))
}

export function dev() {
	watch('src/**', series(styles))
}
