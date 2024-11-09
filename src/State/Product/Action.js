import { FIND_PRODUCTS_REQUEST,FIND_PRODUCTS_SUCCESS,FIND_PRODUCTS_FAILURE,FIND_PRODUCT_BY_ID_REQUEST,FIND_PRODUCT_BY_ID_SUCCESS,FIND_PRODUCT_BY_ID_FAILURE} from './ActionType.js'
import  {API_BASE_URL, api} from '../../config/apiConfig.js';
import axios from 'axios'


const jwt=localStorage.getItem("jwt")
export const findProducts=(reqData)=>async(dispatch)=>{
    dispatch({type: FIND_PRODUCTS_REQUEST})
    const {colors,sizes,minPrice,maxPrice,minDiscount,category,stock,sort,pageNumber,pageSize}=reqData
    try{
      
      const {data}= await axios.get(`${API_BASE_URL}/api/products?category=${category}&color=${colors}&sizes=${sizes}&minPrice=${minPrice}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`, 
      {
        headers:{
          "Authorization":`Bearer ${jwt}`,
          "Content-Type":"application/json"
      }
      })
      console.log("Data",data);
      dispatch({type:FIND_PRODUCTS_SUCCESS, payload:data})
    }
    catch(error){
        dispatch({type:FIND_PRODUCTS_FAILURE, payload:error.message})
    }
}

export const findProductsById=(reqData)=>async(dispatch)=>{
    dispatch({type: FIND_PRODUCT_BY_ID_REQUEST})
    const {productId}=reqData
    console.log("reqData",reqData)
    try{
      const {data}=await axios.get(`${API_BASE_URL}/api/products/id/${productId}`,
      {
        headers:{
          "Authorization":`Bearer ${jwt}`,
          "Content-Type":"application/json"
      }
      })

      console.log("data",data)

      dispatch({type:FIND_PRODUCT_BY_ID_SUCCESS, payload:data})
    }
    catch(error){
        dispatch({type:FIND_PRODUCT_BY_ID_FAILURE, payload:error.message})
    }
}