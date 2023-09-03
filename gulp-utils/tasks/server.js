import paths from "../paths.js";
import browserSync from "browser-sync";

export default () => {
	browserSync({
		ui: false,
		notify: false,
		server: {
			baseDir: paths.build.html
		}
	});
};
