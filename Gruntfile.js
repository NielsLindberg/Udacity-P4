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
                src: ['js/bio.js', 'js/education.js', 'js/work.js', 'js/map.js', 'js/builder.js'],
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
                    'css/optimized/style.min.css': ['css/style.css'],
                    'css/optimized/less.style.min.css': ['css/optimized/less.style.css']
                }
            }
        },
        less: {
            development: {
                options: {
                    paths: ['css/']
                },
                files: {
                    'css/optimized/less.style.css': 'css/style.less'
                }
            },
            production: {
                options: {
                    paths: ['css/'],
                    plugins: [
                        new(require('less-plugin-autoprefix'))({ browsers: ["last 2 versions"] })
                    ],
                    modifyVars: {
                        imgPath: '"http://mycdn.com/path/to/images"',
                        bgColor: 'red'
                    }
                },
                files: {
                    'css/optimized/less.style.css': 'css/style.less'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['responsive_images', 'concat', 'uglify','less', 'cssmin']);
};
