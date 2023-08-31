import gulp from 'gulp';

import clean from 'gulp-clean';
import { deleteAsync } from 'del';

import include from 'gulp-include';
import htmlmin from 'gulp-htmlmin';

import less from 'gulp-less';
import cleanCSS from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';

import terser from 'gulp-terser';
import sourcemaps from 'gulp-sourcemaps';

import webp from 'gulp-webp';
import imagemin from 'gulp-imagemin';
import svgSprite from 'gulp-svg-sprite';

import ttf2woff2 from 'gulp-ttf2woff2';

import concat from 'gulp-concat';
import rename from 'gulp-rename';
import newer from 'gulp-newer';
import plumber from 'gulp-plumber';

import bs from 'browser-sync';

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
		js: srcPath + 'scripts/*.js',
		images: srcPath + 'assets/images/**/*.{jpeg,png,ico}',
		svg: srcPath + 'assets/images/**/*.svg',
		fonts: srcPath + 'assets/fonts/**/*.{ttf,woff}',
	},
	watch: {
		html: srcPath + '**/*.html',
		css: srcPath + 'styles/**/*.less',
		js: srcPath + 'scripts/**/*.js',
		images: srcPath + 'assets/images/**/*.{jpeg,png,ico}',
		fonts: srcPath + 'assets/fonts/**/*.{ttf,woff}',
	},
	clean: './' + distPath
}

// CLEAN
export const cleanDist = () => {
	return deleteAsync(path.clean);
}

// HTML
export const html = () => {
	return gulp.src(path.src.html)
		.pipe(plumber())
		.pipe(htmlmin({
			collapseWhitespace: true,
			removeComments: true
		}))
		.pipe(gulp.dest(path.build.html))
		.pipe(bs.stream())
}

// HTML TEMPLATES
export const pages = () => {
	return gulp.src(path.src.pages)
		.pipe(plumber())
		.pipe(include({
			includePaths: path.src.components
		}))
		.pipe(rename('index.html'))
		.pipe(gulp.dest(srcPath))
		.pipe(bs.stream())
}

// STYLES
export const styles = () => {
	return gulp.src(path.src.css)
		.pipe(plumber())
		.pipe(less())
		.pipe(autoprefixer())
		.pipe(cleanCSS())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest(path.build.css))
		.pipe(bs.stream())
}

// SCRIPTS
export const scripts = () => {
	return gulp.src([
		path.src.js,
		'node_modules/chart.js/dist/chart.js',
	])
		.pipe(plumber())
		.pipe(concat('main.min.js'))
		.pipe(sourcemaps.init())
		.pipe(terser())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(path.build.js))
		.pipe(bs.stream())
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
		.pipe(ttf2woff2())
		.pipe(gulp.dest(path.build.fonts))
}

// WATCHING
export const watching = () => {
	bs({
		server: './dist'
	});

	gulp.watch('src/index.html', html)
	gulp.watch(['src/components/**/*.html', 'src/pages/**/*.html'], pages)
	gulp.watch('src/**/*.less', styles)
	gulp.watch('src/**/*.js', scripts)
	gulp.watch('src/assets/images/', gulp.series(images, sprite))
	gulp.watch('src/assets/fonts/**/*.ttf', fonts)
}

export default gulp.series(
	cleanDist,
	gulp.parallel(html, styles, scripts, fonts, pages, gulp.series(images, sprite)),
	watching
)
