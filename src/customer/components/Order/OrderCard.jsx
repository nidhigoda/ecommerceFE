import {Grid} from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust'
import {useNavigate} from 'react-router-dom'


const OrderCard=()=>{

    const navigate=useNavigate();
    return (
        <div onClick={()=>navigate(`/ account/order/${5}`)} className='p-5 shadow-md hover:shadow-2xl border'>
            <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
                <Grid item xs={6}>
                    <div className='flex cursor-pointer'>
                        <img className='w-[5rem] h-[5rem] object-cover object-top' src='https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/l/f/r/xl-k-spl668-yellow-sg-leman-original-imagznqcrahgq9rf.jpeg?q=70' alt='' />
                        <div className='ml-5 space-y-2'>
                            <p className='' >Mens Kurta</p>
                            <p className='opacity-50 text-xs font-semibold '>Size: M</p>
                            <p className='opacity-50 text-xs font-semibold '> Color: Black</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    $1099
                </Grid>
                <Grid item xs={4}>
                    { true && <div>
                       < p>
                        <span> Delivered on March 03</span>
                    </p>
                    < p className='text-xs'>
                        <span> Your Item has been delivered</span>
                    </p>
                    </div>}
                    { false && <p>
                        <AdjustIcon sx={{ width:'15px' , height:'15px'}} className='text-green-600 mr-2 text-sm'/>
                        Expected Delivery on March 03</p>}
                </Grid>
            </Grid>
        </div>
    )
}

export default OrderCard 