module.exports = function(grunt) {
	grunt.loadNpmTasks("grunt-browserify");

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		browserify: {
			tunabonyeza: {
				src: "src/app/TunaBonyezaApp.js",
				dest: "tunabonyeza.js"
			}
		}
	})
}