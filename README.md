# Fashion Shopping

> Shop online for clothing and fashion accessories

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)


## General info

The application lets user shop online for clothes and fashion accessories for men and women.

## Screenshots

1. Login Page - Sign Up/Sign In to the application
![Login page](./screenshots/loginPage.png)

2.Home page with list of all shopping categories.
![Home page](./screenshots/homePage.png)

3.Product page with add to cart functionality.
![Product page](./screenshots/showCart.png)

4.Checkout page
![checkout page](./screenshots/checkoutPage.png)

## Technologies

* React 16.8.6
* Redux, Reselect library for statemangement
* React-router for routing
* Firebase for authentication
* SCSS for styling

## Setup

* Clone the project
* From terminal, run either `yarn` or `npm install` to build all the dependencies in the project.
* Replace the `config` variable in `firebase.utils.js` with your own config object from the firebase dashboard. 

![alt text](https://i.ibb.co/6ywMkBf/Screen-Shot-2019-07-01-at-11-35-02-AM.png "image to firebase config")

* To start the server and serve the pages run `npm start`.

## Features

List of features currently available to user,

* Login/sign up functionality
* Display list of available product categories to user
* Products are loaded based on selected category
* Add to cart functionality and product checkout page

To-do list,

* Integrate app with firestore for database management
* Pages need to be made responsive for mobile view
* Integrate stripe payment with checkout page

## Status

Project is: _in progress

