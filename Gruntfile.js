module.exports = function(grunt) {

    grunt.initConfig({
        responsive_images: {
            create_images: {
                options: {
                    engine: 'im',
                    newFilesOnly: true,
                    sizes: [
                        { width: 200 },
                        { width: 300 },
                        { width: 400 }
                    ]
                },
                files: [{
                    expand: true,
                    src: ['**.{jpg,gif,png}'],
                    cwd: 'images/assets/',
                    dest: "images/optimized/"
                }]
            }
        },
        concat: {
            options: {
                separator: '',
            },
            dist: {
                src: ['js/builder.js', 'js/bio.js', 'js/education.js', 'js/work.js'],
                dest: 'js/optimized/built.js',
            },
        },
        uglify: {
            my_target: {
                files: {
                    'js/optimized/built.min.js': ['js/optimized/built.js']
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'css/optimized/style.min.css': ['css/style.css']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('images', 'responsive_images');
    grunt.registerTask('concatjs', 'concat');
    grunt.registerTask('minjs', 'uglify');
    grunt.registerTask('mincss', 'cssmin');
};
