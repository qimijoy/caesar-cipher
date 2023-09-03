import gulp from "gulp";
import paths from "./paths.js";
import newer from "gulp-newer";
import webp from "gulp-webp";
import imagemin from "gulp-imagemin";

export default () => {
	return gulp.src([
		paths.src.images,
		'!src/assets/images/**/*.svg'
	])
		.pipe(newer(paths.build.images))            // update only if new images
		.pipe(webp())                               // except svg, ico
		.pipe(imagemin())                           // svg
		.pipe(gulp.dest(paths.build.images))
}
