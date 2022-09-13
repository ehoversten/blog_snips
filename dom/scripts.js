let welcome = document.querySelector("h1");
console.log(welcome);

let title = document.querySelector("h2");
console.log(title);

let content = document.getElementById("title");
console.log(content);

let container = document.querySelector(".container");
console.log(container);

let t2 = document.querySelector("#title");
console.log(t2);

let btn = document.querySelector(".btn");


let listInfo = document.querySelectorAll("li");
console.log(listInfo);







// btn.addEventListener("click", function() {
//     // logic to run when a CLICK event occurs on this particular button
//     console.log("Clicked...");
// })



btn.addEventListener("click", function() {
    // logic to run when a CLICK event occurs on this particular button
    console.log("Clicked...");
    // title.textContent = "updated content";
    // title.innerHTML = "<a href=www.google.com>Google</a>";
    // title.innerText = "bingo!";
})
