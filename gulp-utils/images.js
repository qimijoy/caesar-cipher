import gulp from "gulp";
import paths from "./paths.js";
import newer from "gulp-newer";
import webp from "gulp-webp";
import imagemin from "gulp-imagemin";
import plumber from "gulp-plumber";
import notify from "gulp-notify";

export default () => {
	return gulp.src([
		paths.src.images,
		'!src/assets/images/**/*.svg'
	])
		.pipe(plumber({	errorHandler: notify.onError(error => ({ title: 'IMAGES',	message: error.message }))}))
		.pipe(newer(paths.build.images))            // update only if new images
		.pipe(webp())                               // except svg, ico
		.pipe(imagemin({
			verbose: true
		}))                                         // svg
		.pipe(gulp.dest(paths.build.images))
}
