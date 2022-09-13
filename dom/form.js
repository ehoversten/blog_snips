// Using Events (Event Listeners) to capture form submissions
let userForm = document.getElementById("formy");
let username = document.querySelector(".name");

userForm.addEventListener("submit", function(event) {
    // stop form submission (default browser functionality is to refresh the page on submission of a form)
    event.preventDefault();

    // Let's take a look at what this EVENT object is and how we can utilize it to help us navigate the DOM 
    console.log(event);
    console.log(event.target);

    // ----------------------- //
    console.log(userForm.name);
    console.log(userForm.elements);
    
    console.log(userForm.elements['username']);
    console.log(userForm.elements['username'].value);
    console.log(userForm.elements['age']);
    console.log(userForm.elements['age'].value);
    
    // ----------------------- //
    console.log("Form Submitted");
    let inputName = document.getElementById("user-name");
    let name = inputName.value;

    let inputAge = document.getElementById("user-age").value;
    console.log(name);
    console.log(inputAge);

    // reset the form input box for the next user input
    inputName.value = "";
    inputAge.value = "";

    username.textContent = name;
});