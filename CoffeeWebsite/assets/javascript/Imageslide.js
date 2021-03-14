var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 2000;	// Time Between Switch
	 
// Image List
images[0] = "assets/img/CoffeeWallpaper.jpg";
images[1] = "assets/img/Coffeewallpaper2.jpg";
images[2] = "assets/img/Coffeewallpaper3.jpg";
images[3] = "assets/img/Coffeewallpaper4.jpg";

// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;