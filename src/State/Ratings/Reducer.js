import {FIND_RATING_BY_PRODUCT_ID_FAILURE,FIND_RATING_BY_PRODUCT_ID_REQUEST, FIND_RATING_BY_PRODUCT_ID_SUCCESS} from './ActionType.js'


const initialState={
    ratings:[],
    loading:false,
    error:null
}

export const customerRatingReducer=(state=initialState,action)=>{
    switch(action.type){
        case FIND_RATING_BY_PRODUCT_ID_REQUEST:
            return {...state, loading:true, error:null}
        case FIND_RATING_BY_PRODUCT_ID_SUCCESS:
            return {...state, loading:false, error:null, ratings:action.payload}
        case FIND_RATING_BY_PRODUCT_ID_FAILURE:
            return {...state, loading:false, error:action.payload}
       default:
            return state
     }
}
 