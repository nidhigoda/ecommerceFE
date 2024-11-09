import {api,API_BASE_URL} from '../../config/apiConfig'
import {ADD_ITEM_TO_CART_REQUEST,ADD_ITEM_TO_CART_FAILURE,ADD_ITEM_TO_CART_SUCCESS, UPDATE_CART_ITEM_FAILURE,
    UPDATE_CART_ITEM_REQUEST,UPDATE_CART_ITEM_SUCCESS,REMOVE_CART_ITEM_FAILURE,
    REMOVE_CART_ITEM_REQUEST,REMOVE_CART_ITEM_SUCCESS,GET_CART_REQUEST,GET_CART_SUCCESS,GET_CART_FAILURE} from './ActionType.js';
import axios from 'axios';


const jwt=localStorage.getItem("jwt");
export const addItemToCart=(reqData)=>async(dispatch)=>{
    dispatch({type:ADD_ITEM_TO_CART_REQUEST})
    try{
            const {data} = await axios.put(`${API_BASE_URL}/api/cart/add`, reqData, {
                headers:{
                    "Authorization":`Bearer ${jwt}`,
                    "Content-Type":"application/json"

                }
            }) 
            dispatch({type:ADD_ITEM_TO_CART_SUCCESS, payload:data})
    }
    catch(error){
        dispatch({type:ADD_ITEM_TO_CART_FAILURE, payload:error.message})
    }
}


export const removeCartItem=(cartItemId)=>async (dispatch)=>{
    dispatch({type:REMOVE_CART_ITEM_REQUEST})
    try{
            const {data}=await axios.delete(`${API_BASE_URL}/api/cart_items/${cartItemId}`,{
                headers:{
                    "Authorization":`Bearer ${jwt}`,
                    "Content-Type":"application/json"

                }  
            })
            dispatch({type:REMOVE_CART_ITEM_SUCCESS, payload:cartItemId })
    }
    catch(error){
        dispatch({type:REMOVE_CART_ITEM_FAILURE, payload:error.message})
    }
}

export const updateCartItem=(reqData)=> async (dispatch)=>{
    dispatch({type:UPDATE_CART_ITEM_REQUEST})
    try{
            const {data}=await axios.put(`${API_BASE_URL}/api/cart_items/${reqData.cartItemId}`, reqData.data,{
                headers:{
                    "Authorization":`Bearer ${jwt}`,
                    "Content-Type":"application/json"

                }   
            })
            dispatch({type:UPDATE_CART_ITEM_SUCCESS, payload:data})
    }
    catch(error){
        dispatch({type:UPDATE_CART_ITEM_FAILURE, payload:error.message})
    }
}

export const get=()=>async (dispatch)=>{
    dispatch({type:GET_CART_REQUEST})
    try{
            const {data}=await axios.get(`${API_BASE_URL}/api/cart/`, {
                headers:{
                    "Authorization":`Bearer ${jwt}`,
                    "Content-Type":"application/json"
                 }
            })
            console.log("Data", data)
            dispatch({type:GET_CART_SUCCESS, payload:data})
    }
    catch(error){
        dispatch({type:GET_CART_FAILURE, payload:error.message})
    }
}