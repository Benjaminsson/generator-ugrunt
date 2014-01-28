// Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>
'use strict';

module.exports = function (grunt) {
  
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Project configuration.
  grunt.initConfig({

    // Read the package.json
    pkg: grunt.file.readJSON('package.json'),

    // Metadata (paths)
    meta: {
      deployPath: 'deploy'
    },

    'bower-install': {
      target: {
        // Point to the files that should be updated when
        // you run `grunt bower-install`
        src: ['masterpages/<%= masterpageName %>.master'],
        cwd: '.'
      }
    },

    clean: {
      all: ['<%%=meta.deployPath%>/*'],
      main: ['<%%=meta.deployPath%>/css/*', '<%%=meta.deployPath%>/scripts/*', '<%%=meta.deployPath%>/masterpages/*', '<%%=meta.deployPath%>/xslt/*']
    },

    copy: { // UseminPrepare copies over scripts and css.
      all: {
        expand: true,
        cwd: '.',
        src: [ 
          'App_Browsers/**',
          'App_Code/**',
          'App_Data/**',
          'App_Plugins/**',
          'bin/**',
          'config/**',
          'data/**',
          'img/**',
          'macroScripts/**',
          'masterpages/**',
          'media/**',
          'umbraco/**',
          'umbraco_client/**',
          'usercontrols/**',
          'Views/**',
          'xslt/**',
          'default.aspx',
          'favicon.ico',
          'Global.asax',
          'robots.txt',
          'web.config',
          '*.png'
        ],
        dest: '<%%=meta.deployPath%>'
      },
      main: {
        files: [ {
            expand: true,
            cwd: '.',
            src: [
              'masterpages/**',
              'xslt/**',
              'img/**'
            ],
            dest: '<%%=meta.deployPath%>'
        }]
      }
    },

    useminPrepare: {
      options: {
        root: '.', // We do not want Grunt to have "masterpages" as root path
        dest: '<%%=meta.deployPath%>' // Root of deployPath
      },
      html: ['masterpages/*']
    },

    usemin: {
        options: {
            assetsDirs: ['<%%=meta.deployPath%>']
        }, 
        html: ['<%%=meta.deployPath%>/masterpages/*'],
        css: ['<%%=meta.deployPath%>/css/{,*/}*.css']
    },

    modernizr: {
        devFile: 'bower_components/modernizr/modernizr.js',
        outputFile: '<%%=meta.deployPath%>/bower_components/modernizr/modernizr.js',
        files: [
            '<%%=meta.deployPath%>/scripts/{,*/}*.js',
            '<%%=meta.deployPath%>/styles/{,*/}*.css',
            '!<%%=meta.deployPath%>/scripts/vendor/*'
        ],
        uglify: true
    },

    rev: {
        dist: {
            files: {
                src: [
                    '<%%=meta.deployPath%>/scripts/{,*/}*.js',
                    '<%%=meta.deployPath%>/css/{,*/}*.css',
                    '<%%=meta.deployPath%>/img/{,*/}*.{gif,jpeg,jpg,png,webp}',
                    '<%%=meta.deployPath%>/css/fonts/{,*/}*.*'
                ]
            }
        }
    }

  });

  // TASKS
  // Default task takes all the "developer files" (javascript, xslt and css) and builds them
  grunt.registerTask('default', ['clean:all', 'useminPrepare', 'concat', 'cssmin', 'uglify', 'copy:main', 'modernizr', 'rev', 'usemin']);
  // The all task takes everything. That includes the media folder so it may take time. 
  grunt.registerTask('all', ['clean:all', 'useminPrepare', 'concat', 'cssmin', 'uglify', 'copy:all', 'modernizr', 'rev', 'usemin']);
};
