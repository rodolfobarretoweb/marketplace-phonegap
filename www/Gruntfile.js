module.exports = function(grunt) {
  'use strict';

  var gruntConfig = {
    pkg: grunt.file.readJSON('package.json'),

    handlebars: {
      options: {
        namespace: "TPL"
      },

      all: {
        files: {
          "js/templates.js" : ["views/**/*.tpl"]
        }
      }
    },

    uglify: {
      my_target: {
        files: {
          'dist/js/all.min.js': 
          [
            'js/libs/jquery.min.js',
            'js/libs/module.min.js',
            'js/libs/bootstrap.min.js',
            'js/libs/handlebars.min.js',
            'js/helpers.js',
            'js/templates.js',
            'js/index.js',
            'js/base.js',
            'js/interface.js',
            'js/main.js'
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
            'css/libs/bootstrap.min.css',
            'css/libs/bootstrap-theme.min.css',
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
  grunt.loadNpmTasks('grunt-contrib-handlebars')

  // tasks
  grunt.registerTask('default', ['handlebars', 'uglify','cssmin']);
};
