import React from 'react'
import {Grid,Avatar,Box,Rating} from '@mui/material'
const ProductReviewCard=({item})=>{
    return(
        <div>
            <Grid container spacing={2} gap={3}>
                <Grid item xs={1}>
                    <Box>
                        <Avatar className='text-white' sx={{width:56,height:56,bgcolor:"#9155fd"}}>
                            {item.user.firstName[0].toUpperCase()}
                        </Avatar>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <div className='space-y-2'> 
                        <div>
                            <div>
                                <p className='font-semibold text-lg'>{item.user.firstName}</p>
                                <p classNa='opacity-70'>{item.createdAt}</p>
                            </div>
                        </div>
                    </div>
                    <Rating value={item.rating} name='half-rating' readOnly precision={.5}/>
                    <p>Loreum ipsum </p>
                </Grid>
            </Grid>
        </div>
    )
}

export default ProductReviewCard