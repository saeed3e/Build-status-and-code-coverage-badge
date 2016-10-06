module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        
        jasmine: {
            coverage: {
                src: 'src/**/*.js',
                options: {
                    specs: 'spec/**/*.js',
                    template: require('grunt-template-jasmine-istanbul'),
                    templateOptions: {
                        coverage: 'src/coverage/coverage.json',
                        report: {
                            type: 'cobertura',   // valid types : cobertura, lcov
                            options: {
                                dir: 'src/coverage'
                            }
                        },
                        thresholds: {
                            lines: 5,
                            statements: 5,
                            branches: 5,
                            functions: 5
                        }
                    }
                }
            },
        },
        coveralls: {
            // Options relevant to all targets
            options: {
                // When true, grunt-coveralls will only print a warning rather than
                // an error, to prevent CI builds from failing unnecessarily (e.g. if
                // coveralls.io is down). Optional, defaults to false.
                force: false
            },
            your_target: {
                // LCOV coverage file (can be string, glob or array)
                src: 'src/coverage/lcov.info'
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-coveralls');
    grunt.registerTask('test', ['jasmine',"coveralls"]);
};