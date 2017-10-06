# About Me  - Prep Assignment

----
## Objective
This is a project for [AcceleratedHK](https://www.acceleratedhk.com/) as a prep assignment in this stage and it is intended to be my profile website in the future.

----
## Web Content
The current web page is a standalone one-page HTML which is divided into three parts, including 

* welcome section

* personal information section(personal info, hobbies, dreams)

* photo album(contains some photos of my Australia trip)

----

## Stack used

* HTML
* CSS
* Javascript
* jQuery
* Bootstrap 4
* Typeit js library

----

## Implementation

### Basic Layout
Firstly, the whole layout of the website is based on bootstrap's grid system which helps better position elements as well as make the page responsive to fit on any devices.

### Welcome Section

This section utilizes 1.) [Typeit](https://github.com/alexmacarthur/typeit) - a javascript library for animating typing script and 2.) [CSS 3D transforms with javascript](https://www.clicktorelease.com/blog/how-to-make-clouds-with-css-3d/) to create a 3d-likes interactive cloud as a background. In order to make the interactive cloud as a background for only a section of the page, I have used **iframe** attribute to hold the cloud page. 

### Personal Information Section

This section purely uses bootstrap 4's list group library. The list group itself can't show dynamic content, nevertheless, bootstrap 4 utilizes some javascript which makes it happen either through *data attributes* or *javascript*. 

With this, I can show all the content in the same place clearly with neat layout.

### Photo Album Section

In order to test and improve my understanding on DOM manipulation and jQuery, I built this section from scratch by myself without using carousel library included in bootstrap. 
To show photos one by one, they were firstly placed at a absolute position and with **CSS** *display* property set to none. **jQuery**,when triggered by clicks on paginations dots or left/right button, is then used to add an  *active* class to the specified photos as well as the pagination dots.

----

## Reference

I can't build this page completely on my own knowledge, so many thanks to the following websites which had taught me a lot:

* [w3school](https://www.w3schools.com/)
* [Bootstrap Api](https://getbootstrap.com)
* [Typeit](https://github.com/alexmacarthur/typeit)
* [Clicktorelease.com](https://www.clicktorelease.com/blog/how-to-make-clouds-with-css-3d/)
* [jQuery Api](http://jquery.com)

----

##Author

Tom Yip

2017-10-06