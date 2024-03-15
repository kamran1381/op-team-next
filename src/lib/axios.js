import Axios from "axios";


const axios = Axios.create({
    baseURL: 'http://api.op-team.ir',
    timeout: 5000,
    withCredentials: true,
    withXSRFToken:true,
    headers: {
        Accept: 'application/json',
    }
})



export default axios;
