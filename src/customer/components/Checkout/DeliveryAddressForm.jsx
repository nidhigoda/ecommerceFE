import React from 'react'
import {Grid,Button,Box, TextField} from '@mui/material'
import AddressCard from '../AddressCard/AddressCard.jsx'
import {useDispatch} from 'react-redux'
import {createOrder} from '../../../State/Order/Action.js'
import {useNavigate} from 'react-router-dom'

const DeliveryAddressForm =()=>{
   
    const dispatch=useDispatch();
    const navigate=useNavigate()
   const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("address")
    const data=new FormData(e.currentTarget);
    console.log(data)
    const address={
        firstName: data.get("firstName"),
        lastName:data.get("lastName"),
        streetAddress:data.get("Address"),
        city:data.get("city"),
        state:data.get("state"),
        zipCode:data.get("zip"),
        mobile:data.get("mobileNumber")
    
    }
    const orderData={address, navigate}
    dispatch(createOrder(orderData))
    console.log("Address",orderData)
   }

    return(
        <div>
            <Grid container spacing={3}>
                <Grid xs={12} lg={5} className='border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll'>
                    <div className='p-5 py-7 border-b cursor-pointer'>
                        <AddressCard/>
                        <Button sx={{mt:2 ,bgcolor:"RGB(145 85 253)"}} size='large' variant='contained'  > Deliver Here</Button>
                    </div>
                </Grid>
                <Grid item xs={12} lg={7}>
                    <Box className='border rounded-s-md shadow-md p-5'>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField required id="firstName" name="firstName" label="First Name" fullWidth autoComplete='given-name'/>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required id="lastName" name="lastName" label="Last Name" fullWidth autoComplete='given-name'/>
                                </Grid>
                                <Grid item xs={12} >
                                    <TextField multiline rows={4} required id="address" name="Address" label="Address" fullWidth autoComplete='given-name'/>
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <TextField  required id="city" name="city" label="City" fullWidth autoComplete='given-name'/>
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <TextField  required id="state" name="state" label="State" fullWidth autoComplete='given-name'/>
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <TextField  required id="zip" name="zip" label="Zip/Postal Code" fullWidth />
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <TextField  required id="mobileNumber" name="mobileNumber" label="Mobile Number" fullWidth autoComplete='given-name'/>
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                <Button type="submit" sx={{ py:2, mt:2 ,bgcolor:"RGB(145 85 253)"}} size='large' variant='contained'  > Deliver Here</Button>
                                   </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default DeliveryAddressForm