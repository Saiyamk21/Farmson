import axios from "axios";

async function fetchFruits() { 
    try {
        const response = await axios("http://localhost:3000/product/fruits");
        console.log(response.data);
        const result = await response.json();
        return response.data;
    } catch (err) {
        console.error(err.message);
        return []; // Return an empty array in case of an error
    }
}

export default fetchFruits;
