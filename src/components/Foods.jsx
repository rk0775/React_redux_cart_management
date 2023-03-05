import React, { useState } from 'react'
import foodData from '../dishes.json'
import Item from './Item'
const Foods = () => {
    const [data,setData]=useState(foodData);
    return (
        <div className='container'>
            <div className="text-center my-4">
                <h3 className='text-uppercase text-muted'>Select the food</h3>
            </div>
            <div className="row">
                {data.map((item)=>{
                   return(
                    <>
                        <Item food={item} />
                    </> 
                   ) 
                })}
                
            </div>

        </div>
    )
}

export default Foods
