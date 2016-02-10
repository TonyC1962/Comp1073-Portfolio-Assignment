"use strict"; // Java script page

// set up the IIFE (Pronounced 'IFFY')(Immediately Invoked Function Expression)
(function(){

	console.log("App has Started...");
//anything inside the braces is called "Code Block" 

// declared a named function way
	/*function replaceFirstParagraph() {
		console.log("inside replaceFirstParagraph function");
		var firstParagraph;

		firstParagraph = document.getElementById("firstParagraph");

		firstParagraph.innerHTML = "My New Paragraph Data";
}
*/
// declare anonymous function with named alias
	var replaceFirstParagraph = function() {
	console.log("inside replaceFirstParagraph anonymous function");
		var firstParagraph;

		firstParagraph = document.getElementById("firstParagraph");

		firstParagraph.innerHTML = "Welcome to my portfolio!";
};
// call the replaceFirstParagraph function
	replaceFirstParagraph();

})();