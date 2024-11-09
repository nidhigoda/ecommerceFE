import { CREATE_ORDER_FAILURE,CREATE_ORDER_REQUEST,CREATE_ORDER_SUCCESS,GET_ORDER_BY_ID_FAILURE,GET_ORDER_BY_ID_REQUEST,GET_ORDER_BY_ID_SUCCESS} from './ActionType.js'
import  {API_BASE_URL,api} from '../../config/apiConfig.js';
import axios from 'axios'


const jwt=localStorage.getItem("jwt")
export const createOrder=(reqData)=> async (dispatch)=>{
    console.log("req data",reqData);
    dispatch({ type:CREATE_ORDER_REQUEST})
    try{
        const {data}= await axios.post(`${API_BASE_URL}/api/orders/`,
        reqData.address, {
            headers:{
              "Authorization":`Bearer ${jwt}`,
              "Content-Type":"application/json"
          }
          });

        if(data._id){
            reqData.navigate({ search: `step=3&order_id=${data._id}`});
        }
        console.log('created order -',data);

        dispatch({
            type:CREATE_ORDER_SUCCESS,
            payload:data,
        });
    }
    catch(error){
        console.log("catch error :", error);
        dispatch({
            type:CREATE_ORDER_FAILURE,
            payload: error.message
        })
    }
}

export const getOrderById=(orderId)=> async (dispatch)=>{

    console.log("get order req", orderId);
    dispatch({type:GET_ORDER_BY_ID_REQUEST})
    try{
        
        const {data}=await axios.get(`${API_BASE_URL}/api/orders/${orderId}`,
        {
            headers:{
              "Authorization":`Bearer ${jwt}`,
              "Content-Type":"application/json"
          }
          });
        console.log("order by id", data);
        dispatch({
            type:GET_ORDER_BY_ID_SUCCESS,
            payload:data,
        });
    }
    catch(error){
        console.log("catch", error)
        dispatch({
            type: GET_ORDER_BY_ID_FAILURE,
            payload:error.message
        })
    }
}
