// Grab references to the DOM Elements
let title = document.querySelector(".title");
let textContent = document.querySelector(".text");
let container = document.querySelector(".change");

// Progamatically add inline CSS styling: Open up the inspector and inspect the elements that the DOM creates
title.style.fontSize = "24px";
container.style.background = "darkblue";
container.style.height = "50px";

textContent.style.fontWeight = "bold";
textContent.style.color = "gold";
textContent.style.textAlign = "center";