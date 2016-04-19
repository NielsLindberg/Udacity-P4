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
        }
    });


    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('images', 'responsive_images');
    grunt.registerTask('concatjs', 'concat');
};
