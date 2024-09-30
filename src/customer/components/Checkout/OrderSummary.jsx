import React from 'react'
import AddressCard from  '../AddressCard/AddressCard.jsx'
import CartItem from '../Cart/CartItem.jsx'
import {Divider,Button} from '@mui/material'

const OrderSummary =()=>{
    return(
        <div>
            <div className='p-5 shadow-lg rounded-s-md border'>
                <AddressCard />

            </div>
            <div>
            <div className=' mt-7 lg:grid grid-cols-3  relative'>
            
                    <div className='col-span-2'>
                    {[1,1,1,1].map((item)=><CartItem />)}
                    </div>
                    <div className=' mt -5 px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                        <div>
                            <p className='uppercase font-bold opacity-60 pb-4'> Price Details</p>
                            <Divider />
                            <div className='space-y-3 font-semibold mb-10'>
                                    <div className='flex justify-between pt-3 text-black'>
                                    <span>Price</span>
                                    <span>$4594</span>
                                </div>
                                <div className='flex justify-between pt-3 '>
                                    <span>Discount</span>
                                    <span className='text-green-600'>-$32</span>
                                </div>
                                <div className='flex justify-between pt-3 '>
                                    <span>Delivery Charge</span>
                                    <span className='text-green-600'>Free</span>
                                </div>
                                <div className='flex justify-between pt-3  font-bold'>
                                    <span>Total Amount</span>
                                    <span className='text-green-600'>$1278</span>
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