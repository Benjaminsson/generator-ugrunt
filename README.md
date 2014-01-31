# generator-ugrunt [![Build Status](https://secure.travis-ci.org/Benjaminsson/generator-ugrunt.png?branch=master)](https://travis-ci.org/Benjaminsson/generator-ugrunt)

A [Yeoman](http://yeoman.io) generator for [Umbraco](http://umbraco.com). It will set up the following in your Umbraco project:

* A boilerplate masterpage based on [h5bp](http://html5boilerplate.com/) with all the necessary build tags for Grunt and Bower.
* Ignore file for GIT or Mercurial (optional).
* [JQuery](http://jquery.com/) (optional).
* [Normalize CSS](http://necolas.github.io/normalize.css/) (optional).
* Editorconfig file (optional).
* [Grunt](http://gruntjs.com/) configuration file optimized for an Umbraco installation  (Gruntfile.js).
* A package file listing all the nodejs components used in this Grunt configuration (package.json).
* A [Bower](http://bower.io/) configuration file with all the javascript libraries you have selected (bower.json).
* All the [node modules](https://npmjs.org/) used in this Grunt/Bower configuration (cssmin, jshint, uglify etc.)
* A deploy folder in which the built solution resides.





## Getting Started

Before you can run uGrunt you need to have Yeoman installed on your computer. If you need instructions on how to install Yeoman, you'll find them on [yeoman.io](http://yeoman.io/gettingstarted.html). 


### Yeoman Generators

You can think of a Yeoman generator like a plug-in. You get to choose what type of application you wish to create; in this case an Umbraco website.

To install generator-ugrunt from npm, run:

```
$ npm install -g generator-ugrunt
```

Finally, initiate the generator in Umbraco root folder:

```
$ yo ugrunt
```
The uGrunt generator will ask you a series of questions regarding the Umbraco project you are working on. The answers that you provide will determine the setup you get. The questions it will ask are:

1. **What’s the name of your Umbraco site?**
This is the name that the Grunt project will get in the Grunt and Bower package files (bower.json and package.json). In the future it may be used for more stuff.

2. **What do you want to call the boilerplate masterpage?**
In an Umbraco project your masterpage is usually named "master.master". If you want to keep it this way simply write "master" without the extension ".master". The default name you’ll get if you just hit enter is "ugrunt_boilerplate" though. The reason for is that we don't want to accidentally replace an already present "master.master"-file. 

3. **Would you like to include an ignore file?**
I use Mercurial on BitBucket for scource control, others prefer GIT. I have prepared [hgignore](https://github.com/Benjaminsson/generator-ugrunt/blob/master/app/templates/hgignore) (click to view) and [gitignore](https://github.com/Benjaminsson/generator-ugrunt/blob/master/app/templates/gitignore) files. You can choose which flavor you like best.<br>
Is there stuff missing? I’d love to see your ignore file and update this one. I know that there are a lot of improvements that can be done by including more Umbraco temp files that don't really need to be included in a repository. 

4. **Would you like to include jQuery?**
Pretty straight forward. The version you choose will be added to bower.json. Choose "Latest v2" if you don't need support for Internet Explorer 6, 7 or 8. Otherwise select "Latest v1".

5. **Would you like to include the latest version of the normalize CSS?**
The default answer is of course yes. Do people still use a CSS resets? Should one be included as an alternative to normalize?

6. **Would you like to include a boilerplate editorconfig file?**
If you’re using Sublime Text or Visual Studio there is good support for editorconfig files. Webmatrix on the other hand seems to be a bit unenlightened.

7. **If you are about to overwrite any files already present in your project, you are asked if you really want to do that (one question per file).**
If not, the script will just continue.

8. **Yeoman will install all the files needed for the setup.**
If it for some reason should fail, you can run the install commands yourself.

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
