import axios from "axios"

const client = axios.create({
    baseURL : "",
    headers : {
        "Authorization" : "",
        "Context-Type" : "application/json; charset=UTF-8"
    }
})


