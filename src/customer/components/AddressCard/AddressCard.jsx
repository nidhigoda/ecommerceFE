import React from 'react'

const AddressCard=({address})=>{
    console.log("Address in Address Card", address)
    return (
        <div className='space-y-3'> 
            <div className='font-semibold'>
                <p> {address?.firstName} {' '}{address?.lastName}</p>
                <p>{address?.city}{','}{address?.zipCode}</p>
                <div className='space-y-1'>
                    <p className='font-semibold'>Phone Number:</p>
                    <p>{address?.mobile}</p>
                    </div>
            </div>
        </div>
    )
}

export default AddressCard