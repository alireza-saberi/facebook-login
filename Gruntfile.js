/*
* @Author: Ali
* @Date:   2016-10-21 22:07:55
* @Last Modified by:   Ali
* @Last Modified time: 2016-10-21 23:47:25
*/

module.exports = function(grunt) {

    grunt.initConfig({
        
        jshint: {
          files: ['Gruntfile.js', 'app/js/**/*.js'],
          options: {
            globals: {
              jQuery: true
            }
          }
        },

        concat: {
            js: {
                src: ['app/js/*.js'],
                dest: 'dist/js/script.min.js'
            },
            css: {
                src: ['app/css/*.css'],
                dest: 'dist/css/style.min.css'
            }
        },

        uglify: {
            ugly: {
                src: 'dist/js/script.min.js',
                dest: 'dist/js/script.min.js'
            }
        },

        cssmin: {
            options: {
                        shorthandCompacting: false,
                        roundingPrecision: -1
            },
            mytarget: {
                src:'dist/css/style.min.css',
                dest: 'dist/css/style.min.css'
            }
        },

        /* PROCESS THE SPECIAL COMMENTS IN THE HTML */
        processhtml: {
            replaceScriptLinks: {
                files: {
                    './dist/index.html': ['./app/index.html']
                }
            }
        },

        /* Copy images to img folder without change*/
        /*TODO: images need to get optimzed for web application later*/
        copy: {
            main: {
                files: {
                    'app/img/*.*': 'dist/img/*.*'
                }
            }
        },

        watch: {
            html: {
                files: ['app/index.html'],
                tasks: ['processhtml']
            },
            css: {
                files: ['app/css/*.*'],
                tasks: ['concat:css', 'cssmin']
            },
            js: {
                files: ['app/js/*.*'],
                tasks: ['jshint', 'concat:js' ,'uglify']
            },
            img: {
                files: ['app/img/*.*'],
                tasks: ['copy']
            },

        }
        });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'cssmin', 'processhtml', 'copy']);

};