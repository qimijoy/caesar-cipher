import gulp from "gulp";
import paths from "../paths.js";
import config from '../configs.js';
import newer from "gulp-newer";
import fonter from "gulp-fonter";
import ttf2woff2 from "gulp-ttf2woff2";
import plumber from "gulp-plumber";
import notify from "gulp-notify";

export default () => {
	return gulp.src(paths.src.fonts)
		.pipe(plumber({	errorHandler: notify.onError(error => ({ title: 'FONTS',	message: error.message }))}))
		.pipe(newer(paths.build.fonts))
		.pipe(fonter(config.fonter))
		.pipe(gulp.dest(paths.build.fonts))
		.pipe(ttf2woff2())
		.pipe(gulp.dest(paths.build.fonts))
}
