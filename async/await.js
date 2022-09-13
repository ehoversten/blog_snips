
let url = "https://opentdb.com/api.php?amount=10"

async function getData() {
    const response = await fetch(url);
    // console.log(response);
    console.log("// --------- //");
    const data = await response.json();
    console.log(data);
}

// getData();

// let data = getData();
// console.log(data);
// console.log(data.json());



const loadData = async () => {
    return fetch(url);
}


const testFunc = async () => {

    let res = await loadData();
    // console.log(res);

    console.log("// --------- //");
    let data = await res.json();
    console.log(data);
}


testFunc();