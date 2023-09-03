import gulp from "gulp";
import paths from "../paths.js";
import config from '../configs.js';
import babel from "gulp-babel";
import webpack from "webpack-stream";
import concat from "gulp-concat";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import size from "gulp-size";

export default () => {
	return gulp.src([
		paths.src.js,
		// 'node_modules/chart.js/dist/chart.js',
	], { sourcemaps: true })
		.pipe(plumber({	errorHandler: notify.onError(error => ({ title: 'JS',	message: error.message }))}))
		.pipe(size({ title: 'JS. Before:'}))
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(webpack(config.webpack))
		.pipe(concat('main.min.js'))
		.pipe(size({ title: 'JS. After:'}))
		.pipe(gulp.dest(paths.build.js), { sourcemaps: true })
}
