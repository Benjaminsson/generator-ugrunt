'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var UgruntGenerator = module.exports = function UgruntGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ 
      skipInstall: options['skip-install'] 
    });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(UgruntGenerator, yeoman.generators.Base);

UgruntGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // Welcome.
  console.log(this.yeoman);
  console.log('Out of the box i include a gruntfile and a package file.');
  console.log('No minified files will be added. Minifying is your job.');

  var prompts = [
  {
    name: 'siteName',
    message: 'What is the name of your Umbraco site?'
  },
  {
    name: 'masterpageName',
    message: 'What do you want to call the boilerplate masterpage?',
    default: 'ugrunt_boilerplate'
  },
  {
    type: 'list',
    name: 'ignoreFileChoice',
    message: 'Would you like to include an ignore file?',
    choices: [{
      name: 'hgignore (Mercurial)',
      value: 'hgignore'
    },{
      name: 'gitignore (GIT)',
      value: 'gitignore'
    }, {
      name: 'No ignore file plz',
      value: 'noIgnorefile'
    }] 
  }, {
    type: 'list',
    name: 'jqueryVersion',
    message: 'Would you like to include jQuery?',
    choices: [{
      name: 'Latest v1',
      value: 'jquery1'
    },{
      name: 'Latest v2 (does not support IE6/7/8)',
      value: 'jquery2'
    }, {
      name: 'No jQuery for me',
      value: 'noJquery'
    }]
  }, {
    type: 'confirm',
    name: 'includeNormalize',
    message: 'Would you like to include the latest version of the normalize CSS?',
    default: true
  }, {
    type: 'confirm',
    name: 'includeEditorconfig',
    message: 'Would you like to include a boilerplate editorconfig file?',
    default: true
  }];
  // TODO: Add support for Sass and Modernizr (the possibility to include only the Modernizr feature-detects you actually use on build)

  this.prompt(prompts, function (props) {
    this.siteName = props.siteName;
    this.masterpageName = props.masterpageName;
    this.ignoreFileChoice = getIgnorefileChoice(props);
    this.jqueryVersion = getJqueryVersion(props);
    this.includeNormalize = props.includeNormalize;
    this.includeEditorconfig = props.includeEditorconfig;

    cb();
  }.bind(this));
};

function getIgnorefileChoice(props) {
  var choices = props.ignoreFileChoice;

  if(choices.indexOf('hgignore') !== -1) {
    return 'hgignore';
  }
  
  if(choices.indexOf('gitignore') !== -1) {
    return 'gitignore';
  }

  if(choices.indexOf('noIgnorefile') !== -1) {
    return 'noIgnorefile';
  }
}
function getJqueryVersion(props) {
  var choices = props.jqueryVersion;

  if(choices.indexOf('jquery1') !== -1) {
    return 'jquery1';
  }
  
  if(choices.indexOf('jquery2') !== -1) {
    return 'jquery2';
  }

  if(choices.indexOf('noJquery') !== -1) {
    return 'noJquery';
  }
}

UgruntGenerator.prototype.app = function app() {
  this.copy('_package.json', 'package.json');
  this.template('_ugrunt_boilerplate.master', 'masterpages/' + this.masterpageName + '.master');
  this.template('Gruntfile.js', 'Gruntfile.js');
  this.template('_bower.json', 'bower.json');
  this.copy('bowerrc', '.bowerrc');

  // Ignore file
  if(this.ignoreFileChoice == 'gitignore') {
    this.copy('gitignore', '.gitignore');
  } else if(this.ignoreFileChoice == 'hgignore') {
    this.copy('hgignore', '.hgignore');
  }

  // Editor config file
  if(this.includeEditorconfig) {
    this.copy('editorconfig', '.editorconfig');
  }

};
