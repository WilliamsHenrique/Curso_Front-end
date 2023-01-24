module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            },
            production: {
                options: {
                    compress: true
                },
                files: {
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            }
        },
        watch: {
            less: {
                files: ['src/styles**/*.less'],
                tasks: ['less:development']
            }
        },
        replace: {
            dev: {
                options: {
                    patterns: [
                        {
                            match: 'ENDERECO_DO_CSS',
                            replacement: '.styles/main.css'
                        },
                        {
                            match: 'ENDERECO_DO_JS',
                            replacement: '../scripts/script.js'
                        }
                    ]
                }
            },
            dist: {
                options: {
                    patterns: [
                        {
                            match: 'ENDERECO_DO_CSS',
                            replacement: '../src/styles/main.min.css'
                        },
                        {
                            match: 'ENDERECO_DO_JS',
                            replacement: '../src/scripts/script.min.js'
                        }
                    ]
                }
            }
        },
        uglify: {
            target: {
                files: {
                    'dist/scripts/script.min.js' : 'src/scripts/script.js'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less')
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-replace')
    grunt.loadNpmTasks('grunt-contrib-uglify')

    grunt.registerTask('default', ['less'])
    grunt.registerTask('build', ['less:production', 'replace:dist', 'uglify'])
}