"use strict";

const $ = require('jquery');


const sayHello = () => console.log('Paris');
sayHello();

$('body').html('<h2>Hello World!</h2>').css("background-color", "lightBlue");

$('h2').css('background-color', 'beige').slideToggle(3000).slideDown(3000);


$(".div").css('background-color', 'lightblue');

const greeting = require('./say-hello.js');
greeting.niceGreeting();










