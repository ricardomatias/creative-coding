'use strict';

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    config: {
      base: 'Exercises/' + grunt.option('project'),
      dist: 'Exercises/dist'
    },
    watch: {
      scripts: {
        files: [ '<%= config.base %>/*.*', 'Exercises/**/*.js' ],
        tasks: [ 'copy' ],
        options: {
          spawn: false
        }
      }
    },
    copy: {
      app: {
        files: [
          {
            expand: true,
            cwd: 'Exercises/',
            src: [ '*.js', '!animation_template.js', 'index.html' ],
            dest: '<%= config.dist %>'
          },
          {
            expand: true,
            cwd: '<%= config.base %>/',
            src: [ '*.js', 'index.html' ],
            dest: '<%= config.dist %>'
          }
        ]
      }
    },
    connect: {
      options: {
        port: 9013,
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '<%= config.dist %>'
          ]
        }
      }
    }
  });

  // Default task(s).
  grunt.registerTask('default', [ 'copy', 'connect:livereload', 'watch' ]);

};
