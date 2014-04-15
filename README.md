fampFrontend
============

*Before committing check and fix js errors running: grunt jshint*

Installation Steps:
--------
*(Check Installation Requirements first)*
  
 1. **git clone https://github.com/palpa/fampFrontend.git**
 2. **cd fampFrontend**
 3. **bower install & npm install** (Installs project dependencies)
 4. **webdriver.sh update** (Installs Selenium Server for e2e testing)

Usage:
--------
 * **grunt serve** (Runs the application in watch mode)
 * **grunt test** (Runs unit tests)
 * **grunt dist** (Generates the application production version)
 * **Run E2E tests:**
    1. **webdriver.sh start** (Starts Selenium Server)
    2. **grunt protractor-e2e** (Runs e2e tests)

Installation Requirements:
--------
* **GIT:** http://git-scm.com
* **NodeJS:** http://nodejs.org/
* **Yeoman:** npm install -g yo
* **Optionals:**
    * **Yeoman Angular Generator:** npm install -g generator-angular
    * **WebStorm IDE:** https://www.jetbrains.com/webstorm/
