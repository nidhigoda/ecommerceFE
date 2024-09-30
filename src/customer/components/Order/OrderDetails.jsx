import React from 'react'
import AddressCard from '../AddressCard/AddressCard.jsx'
import OrderTracker from './OrderTracker.jsx'
import {Grid,Box} from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder'
const OrderDetails=()=>{
    return (
        <div>
        <div className='px-5 lg:px-20'>
            <div>
                <h1 className='font-bold text-xl py-7'> Delivery Address</h1>
            </div>
           <AddressCard />
        </div>
        <div className='py-20'>
            <OrderTracker  activeStep={3} />
        </div>
        <div>
        <Grid  container className=' space-x-5 shadow-xl rounded-md p-5 border 'sx={{ alignItems:"center", justifyContent:"space-between"}}>
        {[1,1,1,1,1,1].map((item )=>
           <div> <Grid item xs={6} >
                <div className='flex items-center'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top' src='https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/l/f/r/xl-k-spl668-yellow-sg-leman-original-imagznqcrahgq9rf.jpeg?q=70' alt='' />
                    <div className='space-y-2 ml-5'>
                    <p className='font-semibold'>Men Kurtas</p>
                    <p className='space-x-4 opacity-50 text-xs font-semibold'>Color:pink Size:M</p>
                    <p>Seller: Linaria</p>
                </div>
                </div>
                
            </Grid>
            
            <Grid item>
                
                    <StarBorderIcon sx={{fontSize:"2rem"}} className='px-2 text-2xl'/>
                    <span> Rate & Review Product</span>

              
            </Grid></div>
        )}
        </Grid>
        </div>
        </div>
        
    )
}

export default OrderDetails