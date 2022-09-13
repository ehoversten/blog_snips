
let url = c

let jsonObj = {
    "first": "John",
    "last": "Boy",
    "age": 23
}

function getData() {
    fetch(url)
        .then(response => {
            // console.log(response);
            console.log("// --------------- //");
            // console.log(response.headers);
            // console.log(response.status);
            if(response.status == 200) {
                console.log(response.ok);
                console.log("200 - Success");
            }
            // console.log(response.body);
            return response.json();
        })
        .then(data => {
            console.log("// --------------- //");
            // console.log(data);
            console.log("// --------------- //");
            // console.log(data.results[0]);
        })
        .catch(error => {
            console.log(error);
        });
}

getData();



const findMeData = async (url) => {
    return fetch(url)
}

// let result = await findMeData(url);

// console.log(result);

// Handle fetch with async/await
async function getUser() {
    const response = await fetch('https://api.github.com/users/ehoversten')
    const data = await response.json()
  
    console.log(data)
  }
  
  // Execute async function
  getUser()