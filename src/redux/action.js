export const ADD = (item) =>{
    console.log("add : "+item);
    return{
        type:"ADD_CART",
        payload:item
    }
}

export const RMV = (id) =>{
    return{
        type:"RMV_CART",
        payload:id
    }
}

export const FTCH = () =>{
    return{
        type:"FTCH_CART"
    }
}