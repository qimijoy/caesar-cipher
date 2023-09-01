import gulp from 'gulp';

import { deleteAsync } from 'del';

import include from 'gulp-include';
import htmlmin from 'gulp-htmlmin';

import less from 'gulp-less';
import cleanCSS from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';

import babel from 'gulp-babel';
import terser from 'gulp-terser';

import webp from 'gulp-webp';
import imagemin from 'gulp-imagemin';
import svgSprite from 'gulp-svg-sprite';

import ttf2woff2 from 'gulp-ttf2woff2';

import cached from 'gulp-cached';
import concat from 'gulp-concat';
import rename from 'gulp-rename';
import newer from 'gulp-newer';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';

import browserSync from 'browser-sync';

import ghPages from 'gulp-gh-pages';

// PATHS
const srcPath = 'src/';
const distPath = 'dist/';

const path = {
	build: {
		html: distPath,
		css: distPath + 'styles',
		js: distPath + 'scripts',
		images: distPath + 'assets/images',
		fonts: distPath + 'assets/fonts',
	},
	src: {
		html: srcPath + '*.html',
		pages: srcPath + 'pages/*.html',
		components: srcPath + 'components',
		css: srcPath + 'styles/*.less',
		js: srcPath + 'scripts/**/*.js',
		images: srcPath + 'assets/images/**/*.{jpeg,png,ico}',
		svg: srcPath + 'assets/images/**/*.svg',
		fonts: srcPath + 'assets/fonts/**/*.{ttf,woff}',
	},
	watch: {
		html: srcPath + '**/*.html',
		pages: srcPath + 'pages/*.html',
		components: srcPath + 'components/**/*.html',
		css: srcPath + 'styles/**/*.less',
		js: srcPath + 'scripts/**/*.js',
		images: srcPath + 'assets/images/**/*.{jpeg,png,ico}',
		svg: srcPath + 'assets/images/**/*.svg',
		fonts: srcPath + 'assets/fonts/**/*.{ttf,woff}',
	},
	clean: './' + distPath
}

function onError(err) {
	notify.onError({
		title: 'Gulp Task Error',
		message: 'Error: <%= error %>'
	})(err);
}

// CLEAN
export const cleanDist = () => {
	return deleteAsync(path.clean);
}

// HTML
export const html = () => {
	return gulp.src(path.src.html)
		.pipe(cached())
		.pipe(plumber())
		.pipe(htmlmin({
			collapseWhitespace: true,
			removeComments: true
		}))
		.pipe(gulp.dest(path.build.html))
		.pipe(browserSync.stream())
}

// HTML TEMPLATES
export const pages = () => {
	return gulp.src(path.src.pages)
		.pipe(cached())
		.pipe(plumber())
		.pipe(include({
			includePaths: path.src.components
		}))
		.pipe(rename('index.html'))
		.pipe(gulp.dest(srcPath))
		.pipe(browserSync.stream())
}

// STYLES
export const styles = () => {
	return gulp.src([
		'node_modules/normalize.css/normalize.css',
		path.src.css,
	])
		.pipe(plumber({	errorHandler: onError }))
		.pipe(less())
		.pipe(autoprefixer())
		.pipe(cleanCSS())
		.pipe(concat('main.min.css'))
		.pipe(gulp.dest(path.build.css))
		.pipe(browserSync.stream())
}

// SCRIPTS
export const scripts = () => {
	return gulp.src([
		path.src.js,
		// 'node_modules/chart.js/dist/chart.js',
	])
		.pipe(cached())
		.pipe(plumber({	errorHandler: onError }))
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(concat('main.min.js'))
		.pipe(terser())
		.pipe(gulp.dest(path.build.js))
		.pipe(browserSync.stream())
}

// ASSETS
// IMAGES
export const images = () => {
	return gulp.src([
		path.src.images,
		'!src/assets/images/**/*.svg'
	])
		.pipe(newer(path.build.images))             // update only if new images
		.pipe(webp())                               // except svg, ico
		.pipe(imagemin())                           // svg
		.pipe(gulp.dest(path.build.images))
}

// SVG SPRITE
export const sprite = () => {
	return gulp.src(path.src.svg)
		.pipe(newer(path.build.images))
		.pipe(svgSprite({
			mode: {
				stack: {
					sprite: '../sprite.svg',
					example: false
				}
			}
		}))
		.pipe(gulp.dest(path.build.images))
}

// FONTS
export const fonts = () => {
	return gulp.src(path.src.fonts)
		.pipe(newer(path.build.fonts))
		.pipe(ttf2woff2())
		.pipe(gulp.dest(path.build.fonts))
}

// WATCHING
export const watching = () => {
	browserSync({
		ui: false,
		notify: false,
		server: {
			baseDir: 'dist'
		}
	});

	gulp.watch(path.watch.html, html)
	gulp.watch([path.watch.pages, path.watch.components], gulp.series(pages, html))
	gulp.watch(path.watch.css, styles)
	gulp.watch(path.watch.js, scripts)
	gulp.watch(path.watch.images, images)
	gulp.watch(path.watch.svg, sprite)
	gulp.watch(path.watch.fonts, fonts)
}

// DEPLOY TO GITHUB
export const deploy = () => {
	return gulp.src('./dist/**/*')
		.pipe(ghPages());
}

// BUILD TASK
export const build = gulp.series(
	cleanDist,
	pages,
	html,
	gulp.parallel(
		styles,
		scripts,
		fonts,
		images,
		sprite
	),
)

// DEFAULT TASK
export default gulp.series(
	build,
	watching
)
