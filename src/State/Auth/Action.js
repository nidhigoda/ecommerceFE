import {API_BASE_URL} from '../../config/apiConfig'
import axios from 'axios'
import {REGISTER_FAILURE,REGISTER_REQUEST,REGISTER_SUCCESS, LOGIN_FAILURE,LOGIN_REQUEST,LOGIN_SUCCESS, GET_USER_SUCCESS,GET_USER_FAILURE,GET_USER_REQUEST,LOGOUT} from './ActionType'

let token=localStorage.getItem("jwt")

const registerRequest=()=>({type:REGISTER_REQUEST});
const registerSuccess=(user)=>({type:REGISTER_SUCCESS, payload:user});
const registerFailure=(error)=>({type:REGISTER_FAILURE, payload:error})

export const register=(userData)=>async(dispatch)=>{
    dispatch(registerRequest())
    try{
        const response=await axios.post(`${API_BASE_URL}/auth/signup`,userData)
        const user=response.data;

        if(user.JWT){
            localStorage.setItem("jwt", user.JWT)
             token=localStorage.getItem("jwt")
        }
        console.log("jwt", user.JWT)
        dispatch(registerSuccess(user.JWT))
    }
    catch(error){
        dispatch(registerFailure(error.message))
    }
}


const loginRequest=()=>({type:LOGIN_REQUEST});
const loginSuccess=(user)=>({type:LOGIN_SUCCESS, payload:user});
const loginFailure=(error)=>({type:LOGIN_FAILURE, payload:error}) 





export const login=(userData)=>async(dispatch)=>{
    dispatch(loginRequest())
    try{
        const response=await axios.post(`${API_BASE_URL}/auth/signin`,userData)
        const user=response.data;

        if(user.jwt){
            localStorage.setItem("jwt", user.jwt)
        }
        token=localStorage.getItem("jwt");
        dispatch(loginSuccess(user.jwt))
    }
    catch(error){
        dispatch(loginFailure(error.message))
    }
}

const getUserRequest=()=>({type:GET_USER_REQUEST});
const getUserSuccess=(user)=>({type:GET_USER_SUCCESS, payload:user});
const getUserFailure=(error)=>({type:GET_USER_FAILURE, payload:error}) 

export const getUser=()=>async(dispatch)=>{
    dispatch(getUserRequest())
    try{
        
        //console.log("Token", token)
        const response=await axios.get(`${API_BASE_URL}/api/users/profile`,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        })
        const user=response.data;

        

        dispatch(getUserSuccess(user))
    }
    catch(error){
        dispatch(getUserFailure(error.message))
    }
}

export const logout=()=>(dispatch)=>{
    dispatch({type:LOGOUT,payload:null})
}




