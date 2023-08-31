import gulp from 'gulp';

import clean from 'gulp-clean';

import htmlmin from 'gulp-htmlmin';

import less from 'gulp-less';
import cleanCSS from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';

// import uglify from 'gulp-uglify-es';

import sourcemaps from 'gulp-sourcemaps';

import webp from 'gulp-webp';
import imagemin from 'gulp-imagemin';
import svgSprite from 'gulp-svg-sprite';

import ttf2woff2 from 'gulp-ttf2woff2';

import concat from 'gulp-concat';
import rename from 'gulp-rename';
import newer from 'gulp-newer';

import bs from 'browser-sync';


// CLEAN
export const cleanDist = () => {
	return gulp.src('dist', { read: false })
		.pipe(clean());
}


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
// IMAGES
export const images = () => {
	return gulp.src([
		'src/assets/images/**/*.*',
		'!src/assets/images/**/*.svg'
	])
		.pipe(newer('dist/assets/images'))          // update only if new images
		.pipe(webp())                               // except svg, ico
		.pipe(imagemin())                           // svg
		.pipe(gulp.dest('dist/assets/images'))
}

// SVG SPRITE
export const sprite = () => {
	return gulp.src('src/assets/images/**/*.svg')
		.pipe(svgSprite({
			mode: {
				stack: {
					sprite: '../sprite.svg',
					example: false
				}
			}
		}))
		.pipe(gulp.dest('dist/assets/images'))
}

// FONTS
export const fonts = () => {
	return gulp.src('src/assets/fonts/**/*.ttf')
		.pipe(ttf2woff2())
		.pipe(gulp.dest('dist/assets/fonts'))
}

// WATCHING
export const watching = () => {
	bs({
		server: './dist'
	});

	gulp.watch('src/index.html', html)
	gulp.watch('src/**/*.less', styles)
	gulp.watch('src/**/*.js', scripts)
	gulp.watch('src/assets/images/', gulp.series(images, sprite))
	gulp.watch('src/assets/fonts/**/*.ttf', fonts)
}

export default gulp.series(
	// cleanDist,                                 // It should be in "build" task
	gulp.parallel(html, styles, scripts, fonts, gulp.series(images, sprite)),
	watching
)
