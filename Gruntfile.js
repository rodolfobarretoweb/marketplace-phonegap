module.exports = function(grunt) {
  'use strict';

  var gruntConfig = {
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      my_target: {
        files: {
          'www/dist/js/all.min.js': 
          [
            'www/js/libs/jquery.min.js',
            'www/js/libs/module.min.js',
            'www/js/libs/bootstrap.min.js',
            'www/js/libs/handlebars.min.js',
            'www/js/helpers.js',
            'www/js/index.js',
            'www/js/base.js',
            'www/js/interface.js',
            'www/js/main.js'
          ]
        }
      }
    },

    cssmin: {
      options: {
        shorthandCompacting: true,
        roundingPrecision: -1
      },

      target: {
        files: {
          'www/dist/css/all.min.css': 
          [
            'www/css/libs/bootstrap.min.css',
            'www/css/libs/bootstrap-theme.min.css',
            'www/css/style.css'
          ]
        }
      }
    },

    jshint: {
      all: [
        'www/js/helpers.js',
        'www/js/index.js',
        'www/js/base.js',
        'www/js/main.js'
      ]
    }
  };

  grunt.initConfig(gruntConfig);

  // load plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // tasks
  grunt.registerTask('default', ['uglify','cssmin', 'jshint']);
};
