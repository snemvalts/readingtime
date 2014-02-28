readingtime
===========

Calculate the time needed to read an article.

###To use:
Require the module, then call the function with a callback, string to measure and (optional) wpm.

###Example:
````
var readingTime = require("./index.js");
var stringToProcess = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, pariatur, incidunt, voluptates, quasi velit recusandae quam maiores accusantium ratione quod illo in eveniet laboriosam aliquid quos iste excepturi architecto dolores aut blanditiis saepe molestiae explicabo voluptas aspernatur at. Suscipit amet distinctio natus dolore recusandae fugit veniam consequuntur vero magni iste?";
readingTime(function(data){
	console.log(data)
},stringToProcess,200)
````