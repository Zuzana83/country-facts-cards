const URL = "./simple-country.json";

const fetchFollowers = async() => {
    const resp = await fetch(URL);
    const data = await resp.json();
    return data;
}

export default fetchFollowers