'use strict';


var path = require('path');


module.exports = function(grunt) {


  // Project configuration

  grunt.initConfig({


    pkg: grunt.file.readJSON('package.json'),


    mustache_mustache: {
        files: 'views/**/*.mustache',
        task: [ 'mustache_mustache' ]
    },


    express: {
      options: {
        // Override defaults here
      },
      dev: {
        options: {
          script: 'app.js'
        }
      }
    },


    watch: {
      options: {
        livereload: true,
      },


      mustache_mustache: {
        files: 'views/**/*.mustache',
        tasks: [ 'mustache_mustache' ],

        options: {
          livereload: true,
          spawn: false
        }
      },


      express: {
        files:  [ 'app.js' ],
        tasks:  [ 'express:dev' ],
        options: {
          spawn: false
        }
      }
    }


  });


  // Load the plugin that provides the 'express' task

 [
  'grunt-mustache-mustache',
  'grunt-express-server',
  'grunt-contrib-watch'
  ].forEach(function (task) {
    grunt.loadNpmTasks(task);
  });


  // Default task(s)

  grunt.registerTask('default', [
    'mustache_mustache',
    'express:dev',
    'watch'
  ]);


};