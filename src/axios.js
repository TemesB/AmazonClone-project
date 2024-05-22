import axios from 'axios';
const instance = axios.create({
    baseURL: "https://us-central1-t-5d237.cloudfunctions.net/api",
});
export default instance;

// http://localhost:5001/t-5d237/us-central1/api