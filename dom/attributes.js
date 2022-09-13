let container = document.querySelector(".list-container");
let list = document.querySelector("#list");
let showBtn = document.querySelector("#show");
let hideBtn = document.querySelector("#hide");
let addBtn = document.querySelector(".add");
let rmvBtn = document.querySelector(".remove");
let toggle = document.querySelector(".toggle");

// Notice how this will take already existing values of the "class" on the selected element and overwrite them!!!
// list.setAttribute("class", "blue");
// let attr = list.getAttribute("class");
// console.log(attr);


// list.className = "show";
list.className = "blue";

// list.classList.add("hide");
// list.classList.toggle("hide");
// list.classList.remove("green");

toggle.addEventListener("click", (e) => {
    list.classList.toggle("hide");
});

showBtn.addEventListener("click", function(event) {
    list.classList = "show";
});

hideBtn.addEventListener("click", function(event) {
    list.classList = "hide";
});

addBtn.addEventListener("click", function(event) {
    list.classList.add("blue");
});

rmvBtn.addEventListener("click", function(event) {
    list.classList.remove("blue");
});

toggle.addEventListener("click", function(event) {
    if(list.classList.contains("show")) {
        list.classList.remove("show");
    } else {
        list.classList.toggle("hide");
    }
});


list.addEventListener('click', function(event) {
    console.log(event.target);
    let data = event.target.getAttribute("data-value");
    console.log(data); 
});




