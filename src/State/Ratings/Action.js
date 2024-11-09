import  {API_BASE_URL, api} from '../../config/apiConfig.js';
import axios from 'axios'
import {FIND_RATING_BY_PRODUCT_ID_FAILURE,FIND_RATING_BY_PRODUCT_ID_REQUEST, FIND_RATING_BY_PRODUCT_ID_SUCCESS} from './ActionType.js'


const jwt=localStorage.getItem("jwt")
console.log("jwt",jwt)
export const findRatings=(reqData)=>async(dispatch)=>{
   dispatch({type:FIND_RATING_BY_PRODUCT_ID_REQUEST})
   try{
        const productId=reqData.productId;
        const {data}=await axios.get(`${API_BASE_URL}/api/ratings/product/${productId}`,
      {
        headers:{
          "Authorization":`Bearer ${jwt}`,
          "Content-Type":"application/json"
      }
      })
      dispatch({type:FIND_RATING_BY_PRODUCT_ID_SUCCESS, payload:data})
   }
   catch(error){
    dispatch({type:FIND_RATING_BY_PRODUCT_ID_FAILURE, payload:error.message})
   }
}