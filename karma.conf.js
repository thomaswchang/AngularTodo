// Karma configuration
// Generated on Fri May 02 2014 14:38:09 GMT-0700 (PDT)

module.exports = function(config) {

	var path = require('path');
	var GLIDE_HOME = '/Users/thomas.chang/Development/workspace/glide';
	var ANGULAR_PATH = path.join(GLIDE_HOME, 'glide-ng/src/main/plugins/com.glide.ui.angular/ui.html/scripts/angular');

	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',


		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['jasmine'],


		// list of files / patterns to load in the browser
		files: [
			path.join(ANGULAR_PATH, 'angular.js'),
			path.join(ANGULAR_PATH, 'angular-resource.js'),
			path.join(ANGULAR_PATH, 'angular-mocks.js'),
			'src/main/plugins/**/*.js',
			'src/test/plugins/*/unit/**/*.js'
		],


		// list of files to exclude
		exclude: [

		],


		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {

		},


		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['progress', 'osx', 'growl'],


		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,


		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['Chrome'],


		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false,

		plugins : [
			'karma-jasmine',
			'karma-chrome-launcher',
			'karma-osx-reporter',
			'karma-growl-reporter'
		]
	});
};
