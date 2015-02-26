module.exports = function(grunt) {
  'use strict';

  var gruntConfig = {
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      my_target: {
        files: {
          'dist/js/all.min.js': 
          [
            'js/libs/jquery.min.js',
            'js/libs/module.min.js',
            'js/index.js'
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
          'dist/css/all.min.css': 
          [
            'css/style.css'
          ]
        }
      }
    }
  };

  grunt.initConfig(gruntConfig);

  // load plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // tasks
  grunt.registerTask('default', ['uglify','cssmin']);
};
