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
          'release/': ['index.html', 'media/**']
        }
      }
    },
    useminPrepare: {
      html: 'release/index.html'
    },
    usemin: {
      html: 'release/index.html'
    }
  });

  grunt.loadNpmTasks('grunt-compass');
  grunt.loadNpmTasks('grunt-contrib');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-usemin');

  grunt.registerTask('default', ['clean:release', 'copy', 'useminPrepare', 'concat', 'cssmin', 'uglify', 'usemin', 'clean:release-media']);
};

