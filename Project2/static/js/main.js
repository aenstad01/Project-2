

// Sliding bar for Recommendations page

var slider = document.getElementById("myRange");
var output = document.getElementById("selected-bitterness");


output.innerHTML = slider.value; // Display the default slider value



// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {

  if (this.value == 1) {
    output.innerHTML = "Low Bitterness";
  }

  else if (this.value == 2) {
    output.innerHTML = "Medium Bitterness";
  }

  else if (this.value == 3) {
    output.innerHTML = "High Bitterness";
  }

};



var alcSlider = document.getElementById("myRange2");
var output2 = document.getElementById("selected-alcohol");
output2.innerHTML = alcSlider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
alcSlider.oninput = function() {
  if (this.value == 1) {
    output2.innerHTML = "Low ABV";
  }

  else if (this.value == 2) {
    output2.innerHTML = "Medium ABV";
  }

  else if (this.value == 3) {
    output2.innerHTML = "High ABV";
  }
};


// End of sliding bar
