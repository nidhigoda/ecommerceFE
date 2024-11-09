import React, {useEffect} from 'react'
import {IconButton,Button} from '@mui/material'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {useDispatch,useSelector} from 'react-redux'
import {get} from '../../../State/Cart/Action.js'
import {updateCartItem,removeCartItem} from '../../../State/Cart/Action'

const CartItem=({item})=>{
 
    const dispatch=useDispatch();
   console.log("item",item)
    const handleUpdateCartItem=(num)=>{
        const data={ data:{quantity:item.quantity+num}, cartItemId:item?._id}
        if(dispatch(updateCartItem(data)))
        {
            dispatch(get())
        }
        
    }

    const handleRemoveCartItem=()=>{
        dispatch(removeCartItem(item._id))
        dispatch(get())
    }

    return (
        <div className='p-5 shadow-lg border rounded-md'>
            <div className='flex items-center'>
                <div className='w-[10rem] h-[10rem] lg:w-[9rem] lg:[9rem]'>
                    <img className='w-full h-full object-cover object-top' src={item?.product?.imageUrl}
                    alt="" />
                </div>
                <div className='ml-5 space-y-1'>
                    <p className='font-semibold'>{item.product?.title}</p>
                    <p className='opacity-70'> Size:{item.size}, {item.product?.color}</p>
                    <p className='opacity-70 mt-2'> Seller: {item?.product?.brand}</p>
                    
                    <div className="flex space-x-5 items-center  lg:text-xl text-gray-900 pd-6">
                            <p className='font-semibold'>
                            ${item?.discountedPrice}
                            </p>
                            <p className='opacity-50 line-through'>
                            ${item?.price}
                            </p>
                            <p className='text-green-600 font-semibold'>5% off</p>                    
                     </div>
                </div>
               
            </div>
            <div className='lg:flex items-center lg:space-x-10 pt-4'>
                    <div className='flex items-center space-x-2'>
                        <IconButton onClick={()=>handleUpdateCartItem(-1)} disabled={item.quantity<=1} >
                            <RemoveCircleOutlineIcon/>
                        </IconButton>
                        <span className='py-1 px-7 border rounded-sm'>{item.quantity} </span>
                        <IconButton sx={{color:"RGB(145 85 253)"}} onClick={()=>handleUpdateCartItem(1)}>
                            <AddCircleOutlineIcon/>
                        </IconButton>
                       
                    </div>
                    <div>
                        <Button sx={{color:"RGB(145 85 253)"}}  onClick={handleRemoveCartItem}>Remove</Button>
                    </div>
                </div>
        </div>
    )
}

export default CartItem