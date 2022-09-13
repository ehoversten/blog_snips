
let listInfo = document.querySelectorAll("li");
// console.log(listInfo);

// ------------ //

let listItems = document.getElementById("list");
console.log(listItems);
console.log(listItems.children);
// console.log(listItems.children[0]);
// console.log(listItems.childNodes[0]);
console.log(listItems.childNodes);
// console.log(listItems.childElementCount);

let listContainer = document.querySelector(".list-container");
// console.log(listContainer);
// console.log(listContainer.parentNode);
// console.log(listContainer.parentElement);

// console.log(listItems.parentElement);
// console.log(listItems.parentNode);
console.log("// ----------------------------- //");
let item3 = document.querySelector(".listItem");
console.log(item3)

console.log(item3.nextSibling);
console.log(item3.nextSibling.nextSibling);
console.log(item3.nextElementSibling);

console.log(item3.previousSibling);
console.log(item3.previousElementSibling);

console.log("// ----------------------------- //");
console.log(item3.nextSibling.nodeName);
console.log(item3.nextSibling.nodeType);
console.log(item3.nextSibling.nodeValue);


// console.log(listContainer.children);
// console.log(listContainer.childNodes);
// console.log(listContainer.childElementCount);

// console.log("// ----------------------------- //");

// console.log(listContainer.firstChild)
// console.log(listContainer.firstElementChild);

let list = document.getElementById("list");

// console.log(list);

// console.log(list.children);
// console.log(list.childNodes);
// console.log(list.childElementCount);

// -------------------------- //

// let firstItem = list.firstElementChild;
// firstItem.style.background = "cyan";
// let itemData = firstItem.getAttribute("data-value");
// console.log(itemData);

// let lastItem = list.lastElementChild;
// lastItem.setAttribute("id", "bingo");
// lastItem.style.background = "yellow"
// lastItem.style.fontSize = "60px";
