import React ,{useEffect}from 'react'
import AddressCard from  '../AddressCard/AddressCard.jsx'
import CartItem from '../Cart/CartItem.jsx'
import {Divider,Button} from '@mui/material'
import {useLocation} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getOrderById} from '../../../State/Order/Action.js'

const OrderSummary =()=>{
  const dispatch=useDispatch();
  const location=useLocation();
  const searchParams=new URLSearchParams(location.search);
  const orderId=searchParams.get('order_id')
  const {order}=useSelector(store=>store)

    useEffect(()=>{
        dispatch(getOrderById(orderId))
    },[orderId])
    return(
        <div>
            <div className='p-5 shadow-lg rounded-s-md border'>
                <AddressCard address={order.order?.shippingAddress} />

            </div>
            <div>
            <div className=' mt-7 lg:grid grid-cols-3  relative'>
            
                    <div className='col-span-2'>
                    {order.order?.orderItems?.map((item)=><CartItem item={item} />)}
                    </div>
                    <div className=' mt -5 px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                        <div>
                            <p className='uppercase font-bold opacity-60 pb-4'> Price Details</p>
                            <Divider />
                            <div className='space-y-3 font-semibold mb-10'>
                                    <div className='flex justify-between pt-3 text-black'>
                                    <span>Price</span>
                                    <span>${order.order?.totalPrice}</span>
                                </div>
                                <div className='flex justify-between pt-3 '>
                                    <span>Discount</span>
                                    <span className='text-green-600'>-${order.order?.discounte}</span>
                                </div>
                                <div className='flex justify-between pt-3 '>
                                    <span>Delivery Charge</span>
                                    <span className='text-green-600'>Free</span>
                                </div>
                                <div className='flex justify-between pt-3  font-bold'>
                                    <span>Total Amount</span>
                                    <span className='text-green-600'>${order.order?.totalDiscountedPrice}</span>
                                </div>
                            </div>
                            <Button color="secondary" variant="contained" className='w-full mt-5' sx={{px:"2.5rem", py:"0.5rem"}} >
                        Checkout
                        </Button>
                        </div>
                    </div>
            </div>
            

        </div>
        </div>
    )
}

export default OrderSummary