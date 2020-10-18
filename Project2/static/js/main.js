

// Sliding bar for Recommendations page

var slider = document.getElementById("myRange");
var output = document.getElementById("selected-bitterness");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  console.log(output.innerHTML);
}

// End of sliding bar