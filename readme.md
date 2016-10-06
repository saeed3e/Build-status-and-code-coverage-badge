# Build-status-and-code-coverage-badge 
to show project build status(success/fail) by [travic](https://travis-ci.org/) badge and show cove coverage by [coveralls](https://coveralls.io/)

#### To show "build badge"[![Build Status](https://travis-ci.org/saeed3e/Build-status-and-code-coverage-badge.svg?branch=master)](https://travis-ci.org/saeed3e/Build-status-and-code-coverage-badge) kindly refer this [link](https://github.com/saeed3e/travis-build-badge)

## For "coverage badge"[![Coverage Status](https://coveralls.io/repos/github/saeed3e/Build-status-and-code-coverage-badge/badge.svg?branch=master)](https://coveralls.io/github/saeed3e/Build-status-and-code-coverage-badge?branch=master) follow the below steps

#### Step1: login to [coveralls](https://coveralls.io/) account with your github credential and authorize coveralls to access your github repositories.

#### Step2: Go to "APP REPOS" section and enable the repo(by on/off switch button) as shown in images, for which you want to show test coverage.
![picture](https://saeed3e.github.io/Build-status-and-code-coverage-badge/switch.png) 

#### Step3: Click on *DETAILS* button(as shown in above image) and it will land you on another page with URL like:
https://coveralls.io/github/saeed3e/Build-status-and-code-coverage-badge and 
get your repo token and put this token in your coveralls.yml file.


#### Step4: Add coveralls.yml file in your project root directory with repo token. e.g.

```
repo_token: Dt5SvlLV8sg53YxsbmldfU51ETsdvVHqv
```

#### Step5: install node(npm) packages
```
npm install grunt-template-jasmine-istanbul --save-dev
npm install grunt-coveralls --save-dev
```

#### Step6: Create gruntfile.js
```
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
```
#### Step7: run command
```
grunt test
```
