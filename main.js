// WEB COLORS START

// HTML Variable for Output
let outputEl = document.getElementById("output");

let output = [];

// Load Color Data
let colorData;

fetch("color-data.json")
  .then((rawData) => rawData.json())
  .then((data) => (colorData = data));

// Event Listener on Go Button
document.getElementById("go-btn").addEventListener("click", goBtnClicked);

// Process Go Button Click
function goBtnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "all-colors") {
    allColors();
  } else if (selection === "bright-colors") {
    brightColors();
  } else if (selection === "red-pink-families") {
    redPinkFamilies();
  } else if (selection === "family-search") {
    familySearch();
  } else if (selection === "start-letter-search") {
    startLetterSearch();
  }
}

// MENU FUNCTIONS
function allColors() {
  outputEl.innerHTML = "";

  // Display Name and Family of All Colors
  for (let i = 0; i < colorData.length; i++) {
    // create a new div El & set the inner HTML of div to ____
    let divEl = document.createElement("div");
    divEl.innerHTML = `${i}. Colour name: ${colorData[i].name} | Colour Family: ${colorData[i].family}`;
    outputEl.appendChild(divEl);
  }

  // outputEl.innerHTML = "<h3>Display All Colors</h3>";
}

function brightColors() {
  // Display Name and Brightness of All Colors with a Brightness of 200 and Higher
  outputEl.innerHTML = "";

  for (let i = 0; i < colorData.length; i++) {
    if (colorData[i].brightness >= 200) {
      let divEl = document.createElement("div");
      divEl.innerHTML = `Colour name: ${colorData[i].name} | Colour Family: ${colorData[i].family}`;
      outputEl.appendChild(divEl);
    }
  }
}

function redPinkFamilies() {
  // Count Colors in Red/Pink Families
  outputEl.innerHTML = ""; // clear output

  let count = 0;

  for (let i = 0; i < colorData.length; i++) {
    if (colorData[i].family === "Red" || colorData[i].family === "Pink") {
      count++;
    }
  }
  let divEl = document.createElement("div");
  divEl.innerHTML = `Colours in Red or Pink Families: ${count}`;
  outputEl.appendChild(divEl);
}

function familySearch() {
  outputEl.innerHTML = "";
  let colourFamily = prompt("Colour family you want to display:");
  let familyCount = 0;

  for (let i = 0; i < colorData.length; i++) {
    if (colorData[i].family === colourFamily) {
      let divEl = document.createElement("div");
      divEl.innerHTML = `Colour name: ${colorData[i].name} | Colour Family: ${colorData[i].family}`;
      outputEl.appendChild(divEl);
    }

    // display count here [[[[[WHERE U LEFT OFF <3 ]]]]]
    for (let i = 0; i < colorData.length; i++) {
      if (colorData[i].family === "colourFamily") {
        familyCount++;
      }
    }
  }
  // Display Name and Family of all Colors that Match a User Provided Family Name. Also Output a Count of Colors Found.
}

function startLetterSearch() {
  outputEl.innerHTML = "";

  // Display Name of all Colors that Match a User Provided Starting Letter. Also Output a Count of Colors Found.
  outputEl.innerHTML = "<h3>Start Letter Search</h3>";
}
