import gulp from "gulp";
import paths from "./paths.js";
import newer from "gulp-newer";
import ttf2woff2 from "gulp-ttf2woff2";

export default () => {
	return gulp.src(paths.src.fonts)
		.pipe(newer(paths.build.fonts))
		.pipe(ttf2woff2())
		.pipe(gulp.dest(paths.build.fonts))
}
