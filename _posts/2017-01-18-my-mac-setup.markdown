---
layout: post
title: "My Mac Setup"
date:   2017-01-18
author: Zeheng Li
icon : /assets/post/icon-config.svg
---

This is my basic mac setup, heavily depending on Homebrew. (Updated as of 2017-01-21)

### Reinstall macOS

If you need a bootable use drive for macOS Sierra to begin with, see this instruction.

<script src="https://gist.github.com/zehengl/78882986e17766240653052adb9be0a0.js"></script>

### Package Manager

You cannot go wrong with [Homebrew](http://brew.sh/).

```/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"```

### Packages

There are tons of useful packages already managed in homebrew. Here is a list of my frequent items.

```brew install```

* git
* imagemagick
* multitail
* tree
* bash-completion
* vim
	* [spf13](https://github.com/spf13/spf13-vim) is awesome
* graphviz
* htop
* links

```brew cask install```

* qlcolorcode qlstephen qlmarkdown quicklook-json qlprettypatch quicklook-csv betterzipql qlimagesize webpquicklook suspicious-package quicklookase qlvideo
* virtualbox
* vagrant
* vagrant-manager
* vectr

### Programming Languages

* Ruby
	* ```brew install rbenv```
	* ```rbenv install 2.3.3```
* Python
	* ```brew install python```
	* ```brew install python3```
	* ```pip install virtualenv```
* Node.js (with nvm)
	* ```curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash```
	* ```nvm install node```
* Go
	* ```brew install golang```
* R
	* ```brew tap homebrew/science```
	* ```brew install r```
* Java
	* [ORACLE](http://www.oracle.com/technetwork/java/javase/downloads/index.html)

### Database

* MySQL
	* ```brew install mysql```
	* ```brew services start mysql```
	* ```brew cask install mysqlworkbench```

### PaaS

* Heroku
	* ```brew install heroku```
* Openshift
	* ```brew install openshift-cli```

### Apps

* [iTerm2](https://www.iterm2.com/downloads.html)
	* Dracula from [https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)
* [Sublime Text](https://www.sublimetext.com/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Atom](https://atom.io/)
* [Rstudio](https://www.rstudio.com/)
* [SizeUp](http://www.irradiatedsoftware.com/sizeup/)
* [Cyberduck](https://cyberduck.io/)
* [VNC Viewer](https://www.realvnc.com/download/viewer/)
* [Go2Shell](http://zipzapmac.com/go2shell)
* [Amphetamine](https://itunes.apple.com/ca/app/amphetamine/id937984704)
* [Chrome](https://www.google.com/chrome/)
	* Postman
	* Stylish
	* Linkpadz
	* Notifier for GitHub
	* LastPass
	* Google Mail Checker
* [MacTex](https://tug.org/mactex/)
	* [Texworks](https://github.com/TeXworks/texworks)
* [Transmission](https://transmissionbt.com/)
* [XQuartz](https://www.xquartz.org/)
* [Tunnelblick](https://tunnelblick.net/)
