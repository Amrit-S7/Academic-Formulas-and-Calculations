var m = 5.0;
var v = 2.0;
var kinecticEnergy = (0.5 * m * v * v);

// Write the results to the screen
var elm = document.getElementById('m');
elm.textContent = m;

var elv = document.getElementById('v');
elv.textContent = v;

var elke = document.getElementById('ke');
elke.textContent = kinecticEnergy;
