import React from 'react'
import {Grid,Avatar,Box,Rating} from '@mui/material'
const ProductReviewCard=()=>{
    return(
        <div>
            <Grid container spacing={2} gap={3}>
                <Grid item xs={1}>
                    <Box>
                        <Avatar className='text-white' sx={{width:56,height:56,bgcolor:"#9155fd"}}>
                            R
                        </Avatar>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <div className='space-y-2'> 
                        <div>
                            <div>
                                <p className='font-semibold text-lg'>Ram</p>
                                <p classNa='opacity-70'>April 5, 2024</p>
                            </div>
                        </div>
                    </div>
                    <Rating value={3.5} name='half-rating' readOnly precision={.5}/>
                    <p>Loreum ipsum </p>
                </Grid>
            </Grid>
        </div>
    )
}

export default ProductReviewCard