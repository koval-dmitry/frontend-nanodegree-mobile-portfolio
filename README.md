# Front-End Web Developer Nanodegree - P4: Website Optimization

This is the completed project for Udacity's Front-End Web Developer Nanodegree - P4: Website Optimization.

The goal of the project is to optimize two HTML pages as well as CSS and JS code that is being used to render them.

[The Udacity classroom of the project](https://www.udacity.com/course/viewer#!/c-nd001/l-2735848561/m-2604538748) **(Login required)**

## How to install

Simply fork from [my GitHub repo](https://github.com/koval-dmitry/frontend-nanodegree-mobile-portfolio) or [download as the zip file](https://github.com/koval-dmitry/frontend-nanodegree-mobile-portfolio/archive/master.zip)

## What is inside

I have used the classic approach. The project contains:

* **src** folder includes the completed code intact, I've just resized the original images
* **dist** folder (short from "distribution") contains minified code and optimized images

## GULP configuration

I have used [gulp](http://gulpjs.com/) for two groups of tasks and combined them in two different sequences:

### Development tasks

This sequence tasks clean the **dist** folder, open the browser, launch the basic local web server and watch **src** folder for any file changes to refresh the browser automatically.

### Build tasks

This set of tasks are used to optimize images, HTML, CSS and JS files, as well as inline the CSS as needed. The result is saved in **dist** folder.

**Please refer to gruntfile.js in the project root for the modules used (lines 1-8) and the sequence descriptions in the comments.**

## Optimizations to the project

### The profile

In order to get high PageSpeed Score several pages were made:

* JS functions were put to the end of the file and CSS inlined to improve the critical rendering path. **Print.css** now has the media query be loaded by the browser only when needed.
* Images optimized

### Pizza page

In this part of the project JS functions and CSS were optimized to remove the the forced synchronous layout from the Google Chrome timeline and to fight jank while the page is being scrolled. Please refer to comments starting with "Optimized function" in the **main.js** file and the changes made to .mover class in the **style.css** file.

## Tools used to complete the project

* [Sublime Text editor](https://www.sublimetext.com/3)
* [gulp](http://gulpjs.com/)
* [ngrok](https://ngrok.com/)
* [Chrome Canary browser](https://www.google.com/chrome/browser/canary.html)

## License

MIT: http://rem.mit-license.org