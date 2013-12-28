module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      release: 'release',
      'release-media': ['release/media/css/*.css', '!release/media/css/app.css',
                        'release/media/js/*.js', '!release/media/js/app.js']
    },
    copy: {
      release: {
        files: {
          'release/': ['media/**']
        }
      }
    },
    preprocess: {
      options: {
        context: {
          DEBUG: false,
          PROD: true
        }
      },
      html: {
        src: 'index.html',
        dest: 'release/index.html'
      }
    },
    useminPrepare: {
      html: 'release/index.html'
    },
    usemin: {
      html: 'release/index.html'
    },
    watch: {
      scripts: {
        files: ['index.html', 'media/**'],
        tasks: ['default'],
        options: {
          interrupt: true,
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-compass');
  grunt.loadNpmTasks('grunt-contrib');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-preprocess');

  grunt.registerTask('default', ['clean:release', 'copy', 'preprocess', 'useminPrepare', 'concat', 'cssmin', 'uglify', 'usemin', 'clean:release-media']);
};

