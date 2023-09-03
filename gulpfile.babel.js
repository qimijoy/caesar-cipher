import gulp from 'gulp';

import paths from './gulp-utils/paths.js';
import config from './gulp-utils/configs.js';
import clean from './gulp-utils/tasks/clean.js';
import html from './gulp-utils/tasks/html.js';
import styles from './gulp-utils/tasks/styles.js';
import scripts from './gulp-utils/tasks/scripts.js';
import images from './gulp-utils/tasks/images.js';
import fonts from './gulp-utils/tasks/fonts.js';
import server from './gulp-utils/tasks/server.js';

import browserSync from 'browser-sync';

import ghPages from 'gulp-gh-pages';

// TASKS
export {
	clean,
	html,
	styles,
	scripts,
	images,
	fonts,
	server,
}

// WATCHING TASK
export const watching = () => {
	gulp.watch([paths.watch.html, paths.watch.templates], html).on('all', browserSync.reload)
	gulp.watch(paths.watch.css, styles).on('all', browserSync.reload)
	gulp.watch(paths.watch.js, scripts).on('all', browserSync.reload)
	gulp.watch(paths.watch.images, images).on('all', browserSync.reload)
	gulp.watch(paths.watch.fonts, fonts).on('all', browserSync.reload)
}

// DEPLOY TO GITHUB TASK
export const deploy = () => {
	return gulp.src('./dist/**/*')
		.pipe(ghPages());
}

// BUILD TASK
export const build = gulp.series(
	clean,
	gulp.parallel(html, styles, scripts),
	gulp.parallel(fonts, images),
)

// DEV TASK
export const dev = gulp.series(
	build,
	gulp.parallel(server, watching)
)

// DEFAULT TASK
export default config.isProduction ? build : dev;
