module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		nodemon: {
      dev: {
        script: 'server.js'
      }
    },

		jshint: {
			files: [
				'**/*.js'
			],
			options: {
				force: 'true',
				jshintrc: '.jshintrc'
			}
		},

		cssmin: {
			options: {
				keepSpecialComments: 0
			},
			dist: {
				files: {
					'dist/style.min.css': ['style.css']
				}
			}
		},

		watch: {
      scripts: {
        files: [
          '**/*.js',
        ],
        tasks: [
          'jshint'
        ]
      },
      css: {
        files: '*.css',
        tasks: ['cssmin']
      }
    },

		shell: {
			prodServer: {
				command: 'git push heroku master',
				options: {
					stdout: true,
					stderr: true,
					failOnError: true
				}
			}
		}
		});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-nodemon');

	grunt.registerTask('server-dev', function(target) {
		var nodemon = grunt.util.spawn({
			   cmd: 'grunt',
         grunt: true,
         args: 'nodemon'
			});
		nodemon.stdout.pipe(process.stdout);
    nodemon.stderr.pipe(process.stderr);

    grunt.task.run([ 'watch' ]);
	});

	grunt.registerTask('build', [

    'cssmin'
  ]);

  grunt.registerTask('upload', function(n) {
    if(grunt.option('prod')) {
      grunt.task.run([ 'shell:prodServer' ]);
    } else {
      grunt.task.run([ 'server-dev' ]);
    }
  });

  grunt.registerTask('deploy', [
    'build',
    'upload'
  ]);

};