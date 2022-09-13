let existing = document.querySelector(".existing");
let dynamic = document.getElementById("dynamic-content");
let start = document.getElementById("start");

// let container = document.createElement("div");
// function addContent() {
//     let btn = document.createElement("button");
//     btn.setAttribute("class", "blue");
//     btn.textContent = "Turn Blue";
//     dynamic.append(btn)
// }

start.addEventListener("click", () => {
    let btn = document.createElement("button");
    btn.setAttribute("class", "blue");
    btn.textContent = "Turn Blue";
    
    dynamic.append(btn)
})

let blueBtn = document.querySelector(".blue");
blueBtn.addEventListener("click", (event) => {
    dynamic.style.background = "cyan";
})

