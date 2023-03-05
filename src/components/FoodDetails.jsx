import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import foodData from '../dishes.json'
export function  FoodDetails() {
    const param=useParams('id');
    const [item,setItem]=useState({});
    const getFoodDetails=()=>{
        setItem(foodData.filter((e)=>  e.id == param.id  )[0]);
    }
    useEffect(()=>{
        getFoodDetails()
    },param.id)
    
    //alert(JSON.stringify(item))

  return (
    
    <div className='mt-5'>
      <div className='text-center my-3'>
        <h1 className="text-muted">Dish details</h1>
      </div>
      <div className="container">
        <div className="row">
            <div className="col-sm-12 col-md-8 offset-md-2">
                <div className="card p-3">
                    <div className="row">
                        <div className="col-sm-12 col-md-4">
                            <img style={{height:"250px"}} className='img-fluid' src={item?.url} alt="" />
                        </div>
                        <div className="col-sm-12 col-md-8 ">
                            <div className='text-center'><h6><strong>Name : </strong>{item?.title}</h6></div>
                            
                            <Table className='mt-4'>
                                <tr>
                                    <td style={{width:"60%"}}><strong>Discription : </strong>{item.dis}</td>
                                    <td><strong>Rateing : </strong> <span style={{borderRadius:"10px"}} className='bg-success text-light px-3'>4.5</span></td>
                                </tr>
                                <tr className='my-3s'>
                                    <td><strong>Price : </strong>{item.price}</td>
                                    <td><strong>Quantity : </strong>{item.qty}</td>
                                </tr>
                                <tr>
                                    <td><strong>Total price : </strong>300</td>
                                </tr>
                            </Table>
                            <div style={{height:"40px",width:"100px",display:"flex",justifyContent:"space-between",alignItems:"center"}} className='bg-secondary px-3 text-light'>
                                <span style={{cursor:"pointer"}}>-</span>
                                <span>{item.qty}</span>
                                <span style={{cursor:"pointer"}}>+</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      
    </div>
  )
}

