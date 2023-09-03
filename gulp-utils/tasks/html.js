import gulp from 'gulp';
import paths from '../paths.js';
import config from '../configs.js';
import include from 'gulp-include';
import htmlmin from 'gulp-htmlmin';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import size from 'gulp-size';

export default () => {
	return gulp.src(paths.src.html)
		.pipe(plumber({	errorHandler: notify.onError(error => ({ title: 'HTML',	message: error.message }))}))
		.pipe(include({
			includePaths: paths.src.templates
		}))
		.pipe(size({ title: 'HTML. Before:'}))
		.pipe(htmlmin(config.htmlmin))
		.pipe(size({ title: 'HTML. After:'}))
		.pipe(gulp.dest(paths.build.html))
}
