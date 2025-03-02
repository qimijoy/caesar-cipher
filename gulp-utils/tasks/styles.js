import gulp from 'gulp';
import paths from '../paths.js';
import less from 'gulp-less';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import concat from 'gulp-concat';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import size from 'gulp-size';
import rename from 'gulp-rename';
import groupCssMediaQueries from 'gulp-group-css-media-queries';

export default () => {
	return gulp
		.src(['node_modules/normalize.css/normalize.css', paths.src.css], {
			sourcemaps: true,
		})
		.pipe(
			plumber({
				errorHandler: notify.onError((error) => ({ title: 'CSS', message: error.message })),
			}),
		)
		.pipe(less())
		.pipe(autoprefixer())
		.pipe(
			size({
				title: 'CSS. Before:',
			}),
		)
		.pipe(groupCssMediaQueries())
		.pipe(concat('main.css'))
		.pipe(
			gulp.dest(paths.build.css, {
				sourcemaps: true,
			}),
		)
		.pipe(
			rename({
				suffix: '.min',
			}),
		)
		.pipe(cleanCSS())
		.pipe(
			size({
				title: 'CSS. After:',
			}),
		)
		.pipe(
			gulp.dest(paths.build.css, {
				sourcemaps: true,
			}),
		);
};
