import gulp from 'gulp';

import htmlmin from 'gulp-htmlmin';

import less from 'gulp-less';
import cleanCSS from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';

// import uglify from 'gulp-uglify-es';

import sourcemaps from 'gulp-sourcemaps';

import concat from 'gulp-concat';
import rename from 'gulp-rename';

import bs from 'browser-sync';

// HTML

export const html = () => {
	return gulp.src('src/index.html')
		.pipe(htmlmin({
			collapseWhitespace: true,
			removeComments: true
		}))
		.pipe(gulp.dest('dist/'))
		.pipe(bs.stream())
}

// STYLES
export const styles = () => {
	return gulp.src('src/styles/main.less')
		.pipe(less())
		.pipe(autoprefixer())
		.pipe(cleanCSS({ debug: true }, (details) => {
			console.log(`Файл: ${details.name}`);
			console.log(`Изначальный размер: ${details.stats.originalSize}`);
			console.log(`Размер после сжатия: ${details.stats.minifiedSize}`);
			console.log(`Эффективность сжатия: ${Math.round(details.stats.efficiency * 100)}%`)
			console.log('=============================================')
		}))
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('dist/styles'))
		.pipe(bs.stream())
}

// SCRIPTS
export const scripts = () => {
	return gulp.src([
		'src/scripts/main.js',
		'node_modules/chart.js/dist/chart.js',
	])
		.pipe(concat('main.min.js'))
		.pipe(sourcemaps.init())
		// .pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('dist/scripts'))
		.pipe(bs.stream())
}

// ASSETS
export const images = () => {
	return gulp.src(['src/assets/**/*.png', 'src/assets/**/*.ico', 'src/assets/**/*.svg'])
		.pipe(gulp.dest('dist/assets/'))
}

// BROWSER-SYNC
export const browserSync = () => {
	bs({
		server: './dist'
	});
}

// DEVELOPMENT

export const watching = () => {
	gulp.watch(['src/index.html']).on('change', bs.reload)
	gulp.watch('src/**/*.less', styles)
	gulp.watch('src/**/*.js', scripts)
}

export default gulp.parallel(html, styles, scripts, images, browserSync, watching);
