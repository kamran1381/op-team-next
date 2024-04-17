import Axios from "axios";



const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_AXIOS_BASE_URL,
    timeout: 9000,
    withCredentials: true,
    withXSRFToken: true,
    headers: {
        Accept: 'application/json',
    }
})



export default axios;
