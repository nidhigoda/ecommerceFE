const initialState={
    products:[],
    product:null,
    loading:false,
    error:null
}
 
export const customerProductReducer=(state=initialState, action)=>{
    switch(action.type){
        case 'FIND_PRODUCT_BY_ID_REQUEST':
        case 'FIND_PRODUCTS_REQUEST':
            return {...state, loading:true, error:null}
        case 'FIND_PRODUCTS_SUCCESS':
            return {...state, loading:false, error:null, products:action.payload}
        case 'FIND_PRODUCT_BY_ID_SUCCESS':
             return {...state, loading:false, error:null, product:action.payload}
        case 'FIND_PRODUCTS_FAILURE':
        case 'FIND_PRODUCT_BY_ID_FAILURE':
            return {...state, loading:false, error:action.payload}
        default:
            return state
    }
}