module.exports = function(grunt) {

    grunt.initConfig({
        "6to5": {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    "app.js": "ecma6/app.js",
                    "config/": "ecma6/config/**/*.js",
                    "routes/": "ecma6/routes/**/*.js",
                    "controllers/": "ecma6/controllers/**/*.js"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-6to5');

    grunt.registerTask("default", ["6to5"]);

};