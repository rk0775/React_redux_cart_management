import { useState } from "react";

const Inital_state = {
    carts:[]
}

export const cardReducer=(state=Inital_state,action)=>{
    switch(action.type){
        case "ADD_CART":
            const index=state.carts.findIndex((item)=> item.id ===action.payload.id )
            console.log(index);
            if(index>=0){
                console.log("qty increase")
                 state.carts[index].qty++;
                
            }else{
                console.log("new")
                action.payload.qty=1;
                return{
                    ...state,
                    carts:[...state.carts,action.payload]
                    
                }
            }
        case "RMV_CART":
            const data = state.carts.filter((item)=>item.id !== action.payload)
            return{
                carts:data
            }
        case "FTCH_CART":
            return state;
        default :
            return state;
    }

}