module.exports = function (grunt) {

	grunt.initConfig({

		// Read package.json
		pkg: grunt.file.readJSON('package.json'),

		stylus: {
			compile: {
				options: {
					banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
				},
				files: {
					'public/stylesheets/application.min.css': 'assets/stylesheets/*.styl'
				}
			}
		},

		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			dist: {
				files: {
					'public/javascripts/application.min.js': ['public/javascripts/application.min.js']
				}
			}
		},

		concat: {
			options: {
				separator: ';'
			},
			dist: {
				files: {
					'public/javascripts/application.min.js': 'assets/javascripts/*.js'
				}
			}
		},

		watch: {
			styles: {
				files: ['assets/stylesheets/*.styl'],
				tasks: ['stylus'],
				options: {
					interrupt: true
				}
			},
			scripts: {
				files: ['assets/javascripts/*.js'],
				tasks: ['concat', 'uglify'],
				options: {
					interrupct: true
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['watch']);
	// grunt.registerTask('build', /* Array of sequence tasks to build for production */);

};
