module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      options: {
        livereload: true
      },
      html: {
        files: ['index.html', 'js/build/script.js']
      },
      scripts: {
        files: ['js/*.js', 'bower_components/**/*'],
        tasks: ['concat'],
        options: {
          spawn: false
        }
      }
    },

    concat: {
      dist: {
        src: [
          'bower_components/jquery/dist/jquery.js',
          'bower_components/d3/d3.js',
          'js/script.js'
        ],
        dest: 'js/build/script.js'
      }
    },

    uglify: {
      build: {
        src: 'js/build/script.js',
        dest: 'js/build/script.min.js'
      }
    },

    connect: {
      server: {
        options: {
          port: 3000,
          base: '.',
          open: true
        }
      }
    }
  });



  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('build', [
    'concat:dist',
    'uglify'
  ]);

  grunt.registerTask('default', [
    'connect',
    'concat:dist',
    'watch'
  ]);
};
