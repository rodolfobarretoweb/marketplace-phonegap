module.exports = function(grunt) {
  'use strict';

  var gruntConfig = {
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      my_target: {
        files: {
          'www/dist/js/all.min.js': 
          [
            'bower_components/jquery/dist/jquery.min.js',
            'bower_components/bootstrap/dist/js/bootstrap.min.js',
            'bower_components/module/module.min.js',
            'bower_components/handlebars/handlebars.min.js',
            'www/js/helpers.js',
            'www/js/index.js',
            'www/js/base.js',
            'www/js/interface.js',
            'www/js/main.js',
            'www/js/connectionless.js'
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
            'bower_components/bootstrap/dist/css/bootstrap.min.css',
            'bower_components/bootstrap/dist/css/bootstrap-responsive.min.css',
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
