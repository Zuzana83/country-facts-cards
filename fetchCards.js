const URL = "./simple-country.json";

const fetchCards = async() => {
    try {
      const resp = await fetch(URL);
        if(!resp.ok) {
            throw new Error(`HTTP error! Status: ${resp.status}`);
        }
        const data = await resp.json();
        return data;   
    } catch (error) {
        console.error(error);
        return null;
    }
}

export default fetchCards;