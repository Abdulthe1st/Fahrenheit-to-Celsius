// Firt conversion
document.getElementById("convert").addEventListener("click", conversion);
// Function
function conversion() {
  // Input
  let fahren = +document.getElementById("input").value;
  // process
  let answer = (fahren - 32 * (5 / 9)).toFixed(1);
  document.getElementById("input").style.background = "#26d978";

  // Output
  document.getElementById("output").innerHTML = ` °${answer} `;
  document.getElementById("input").value = "";
}

// Switch btn
document.getElementById("switch").addEventListener("click", switches);
// Function

function switches() {
  // process
  document.getElementById("head").innerHTML = " °F = (°C x 9/5) + 32 ";
  document.getElementById("out-text").innerHTML = "Temperature in Fahrenheit";
  // output
  document.getElementById("title").innerHTML = "Celsius to Fahrenheit";
  document.getElementById("temp").innerHTML = "Temperature in Celsius";
}
// conversion #2
document.getElementById("convert2").addEventListener("click", converts);
// Function
function converts() {
  // Input
  let fahren = +document.getElementById("input").value;
  // Process
  let answer2 = (fahren * (9 / 5) + 32).toFixed(1);
  document.getElementById("input").style.background = "#26d978";
  // Output
  document.getElementById("output").innerHTML = `°${answer2}`;
  document.getElementById("input").value = "";
}
// Switch back
document.getElementById("switchbck").addEventListener("click", switchBack);
// Function
function switchBack() {
  // reload page
  window.location.reload();
}

// clear
