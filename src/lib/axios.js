import Axios from "axios";

const axios = Axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 5000,
    withCredentials: true,
    withXSRFToken:true,
    headers: {
        Accept: 'application/json',
    }
})



export default axios;
