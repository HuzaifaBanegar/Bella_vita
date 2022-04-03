let url = "http://localhost:5000/searchData";

async function searchData() {
    try{
        let res = await fetch(url);
        let data = await res.json();

        return data;
    }
    catch(err) {
        console.error(err)
    }
}

export default searchData;