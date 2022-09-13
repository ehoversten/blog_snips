let container = document.querySelector(".list-container");
let list = document.querySelector("#list");
let showBtn = document.querySelector("#show");
let hideBtn = document.querySelector("#hide");
let addBtn = document.querySelector("#add");
let rmvBtn = document.querySelector("#remove");

// Notice how this will take already existing values of the "class" on the selected element and overwrite them!!!
list.setAttribute("class", "green");
let attr = list.getAttribute("class");
console.log(attr);

showBtn.addEventListener("click", function(event) {
    console.log(event.target);
    list.setAttribute("class", "show green");
    let attr = list.getAttribute("class");
    console.log(attr);
});

hideBtn.addEventListener("click", function(event) {
    console.log(event.target);
    list.setAttribute("class", "hide");
});

addBtn.addEventListener("click", function(event) {
    console.log(event.target);
    list.setAttribute("class", "green");
});

rmvBtn.addEventListener("click", function(event) {
    console.log(event.target);
    list.removeAttribute("class");
});

list.addEventListener('click', function(event) {
    console.log(event.target);
    let data = event.target.getAttribute("data-value");
    console.log(data); 
});
