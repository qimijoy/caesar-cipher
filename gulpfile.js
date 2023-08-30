import gulp from 'gulp';

import htmlmin from 'gulp-htmlmin';

import less from 'gulp-less';
import cleanCSS from 'gulp-clean-css';

import rename from 'gulp-rename';

// HTML

export const html = () => {
	return gulp.src('src/index.html')
		.pipe(htmlmin({
			collapseWhitespace: true,
			removeComments: true
		}))
		.pipe(gulp.dest('dist/'))
}

// STYLES

export const styles = () => {
	return gulp.src('src/styles/main.less')
		.pipe(less())
		.pipe(cleanCSS({ debug: true }, (details) => {
			console.log(`Файл: ${details.name}`);
			console.log(`Изначальный размер: ${details.stats.originalSize}`);
			console.log(`Размер после сжатия: ${details.stats.minifiedSize}`);
			console.log(`Эффективность сжатия: ${Math.round(details.stats.efficiency * 100)}%`)
			console.log('=============================================')
		}))
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('dist/styles'))
}

// ASSETS

export const images = () => {
	return gulp.src(['src/assets/**/*.png', 'src/assets/**/*.ico', 'src/assets/**/*.svg'])
		.pipe(gulp.dest('dist/assets/'))
}


export const dev = () => {
	gulp.watch('src/index.html', html)
	gulp.watch('src/**/*.css', styles)
}

export default gulp.series(html, styles, images);
