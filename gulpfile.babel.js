import gulp from 'gulp';

import paths from './gulp-utils/paths.js';
import clean from './gulp-utils/clean.js';
import html from './gulp-utils/html.js';
import styles from './gulp-utils/styles.js';
import scripts from './gulp-utils/scripts.js';
import images from './gulp-utils/images.js';
import svg from './gulp-utils/svg.js';
import fonts from './gulp-utils/fonts.js';

import browserSync from 'browser-sync';

import ghPages from 'gulp-gh-pages';


// WATCHING
export const watching = () => {
	browserSync({
		ui: false,
		notify: false,
		server: {
			baseDir: './dist'
		}
	});

	gulp.watch([paths.watch.html, paths.watch.components], html).on('all', browserSync.reload)
	gulp.watch(paths.watch.css, styles).on('all', browserSync.reload)
	gulp.watch(paths.watch.js, scripts).on('all', browserSync.reload)
	gulp.watch(paths.watch.images, images).on('all', browserSync.reload)
	gulp.watch(paths.watch.svg, svg).on('all', browserSync.reload)
	gulp.watch(paths.watch.fonts, fonts).on('all', browserSync.reload)
}

// DEPLOY TO GITHUB
export const deploy = () => {
	return gulp.src('./dist/**/*')
		.pipe(ghPages());
}

// BUILD TASK
export const build = gulp.series(
	clean,
	gulp.parallel(html, styles, scripts),
	gulp.parallel(fonts, images, svg),
)

// DEFAULT TASK
export default gulp.series(
	build,
	watching
)
