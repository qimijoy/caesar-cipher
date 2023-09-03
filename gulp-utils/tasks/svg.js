import gulp from "gulp";
import paths from "../paths.js";
import newer from "gulp-newer";
import svgSprite from "gulp-svg-sprite";

export default () => {
	return gulp.src(paths.src.svg)
		.pipe(newer(paths.build.images))
		.pipe(svgSprite({
			mode: {
				stack: {
					sprite: '../sprite.svg',
					example: false
				}
			}
		}))
		.pipe(gulp.dest(paths.build.images))
}
