//Filename: app.js
//Name: Brian Twene
//Date: 07/08/2021

//activate strict mode
"use strict";
//grab elements to use
const btn = document.querySelector(".nav-toggle");
const menu = document.querySelector(".menu");

//added event listener to the button
btn.addEventListener("click", function () {
  //when user clicks the button remove or add the class depening on if it exists
  menu.classList.toggle("hidden");
});
