module.exports = function(grunt) {


  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    express: {

      options: {
        port: 3000,
        debug: true
      },
      server: {
        options: {
          script: 'app.js'
        }
      }

    }

  });


  // Load the plugin that provides the 'express' task

  grunt.loadNpmTasks('grunt-express-server');


  // Default task(s)

  grunt.registerTask('default', ['express']);


};