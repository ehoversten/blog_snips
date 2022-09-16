let parent = document.querySelector(".parent");
let child = document.querySelector(".child");

console.log(child);
// Both of these properties return the PARENT of the respective element
console.log(child.parentNode);
console.log(child.parentElement);

// What if we look at the PARENT of our 'class="parent"' element (?)
console.log(parent.parentNode);
console.log(parent.parentElement);

