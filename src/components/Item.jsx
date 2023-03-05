import React from 'react'
import { useNavigate } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import { ADD } from '../redux/action';
const Item = (food) => {
    const navigate=useNavigate()
    const item=food.food;
    const details = ()=>{
      navigate('/fooddetails/'+item.id)
    }
    const dispatch=useDispatch();

    const data=useSelector((state)=>{state.cardReducer})

    const addToCart=(item)=>{
      console.log("ITem : "+item);
      dispatch(ADD(item));
    }

  return (
    
      <div className="col-sm-12 col-md-3 my-3">
        <div className="card p-2">
            <img onClick={details} style={{height:"200px"}} className='img-fluid' src={item.url } alt="" />
            <h5>{item.title}</h5>
            <p>{item.dis}</p>
            <span><strong>Price : </strong>{item.price}</span>
            <button onClick={()=>{addToCart(item)}} className='btn btn-block btn-primary'>Add to cart</button>
        </div>
      </div> 
  )
}

export default Item
