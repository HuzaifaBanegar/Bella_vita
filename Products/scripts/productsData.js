
let url = "http://localhost:5000/allProducts";

async function allProducts () {
    try{
        let res = await fetch(url);
        let data = await res.json();

        return data;
    }
    catch(err) {
        console.error(err)
    }
}

export {allProducts};