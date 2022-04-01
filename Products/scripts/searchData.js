let url = "http://localhost:5000/bestsellers";

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