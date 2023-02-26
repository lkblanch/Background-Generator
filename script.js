var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var gradient = document.getElementById("gradient")


// color1.addEventListener("input", function() {
// 	console.log(color1.value);
// })

// color2.addEventListener("input", function() {
// 	console.log(color2.value)
// })

// color1.oninput = function(){
// 	gradient.style.background = "linear-gradient(to right," 
// 	+ color1.value 
// 	+ ", " 
// 	+ color2.value 
// 	+ ")";
// }

// color2.oninput = function () {
// 	gradient.style.background = "linear-gradient(to right," 
// 	+ color1.value 
// 	+ ", " 
// 	+ color2.value 
// 	+ ")";
// }


function setGradient () {
	gradient.style.background = "linear-gradient(to right," 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = gradient.style.background + ";";
}

color1.oninput = setGradient;
color2.oninput = setGradient;

