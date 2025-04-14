import axios from 'axios'

export const API_BASE_URL='https://ecommercebe-production-app.up.railway.app/'

const jwt=localStorage.getItem("jwt")
console.log("JWT",jwt)
export const api=axios.create({
    baseUrl:API_BASE_URL,
    headers:{
        "Authorization":`Bearer ${jwt}`,
        "Content-Type":"application/json"
    }
})
 