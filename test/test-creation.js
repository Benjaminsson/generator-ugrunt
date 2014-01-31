/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;



describe('uGrunt generator', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = helpers.createGenerator('ugrunt:app', [
                '../../app'
            ]);
            done();
        }.bind(this));
    });

	/* '.jshintrc', */
	
    it('creates expected files', function (done) {
        var expected = [
            // add files you expect to exist here.
            '.editorconfig',
			'bower.json',
			'package.json',
			'Gruntfile.js'
        ];
		
        helpers.mockPrompt(this.app, {
            'siteName': 'test',
			'masterpageName': 'master',
			'ignoreFileChoice': 'gitignore',
			'jqueryVersion': 'jquery1',
			'includeNormalize': true,
			'includeEditorconfig': true
        });
		
        this.app.options['skip-install'] = true;
        this.app.run({}, function () {
            helpers.assertFiles(expected);
            done();
        });
    });
});
