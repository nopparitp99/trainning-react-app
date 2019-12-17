import axios from "axios"
import { 
        ADD_TO_CART,
        REMOVE_ITEM,
        SUB_QUANTITY,
        ADD_QUANTITY,
        ADD_SHIPPING,
        FETCH_ITEMS
    } from './action-types/cart-actions'

const endpoint = 'http://localhost:3500/'
axios.defaults.baseURL = endpoint
//add cart action
export const fetchItems = _ => {
    return async dispatch => {
        try {
          const res = await axios.get(`items`)
          
          dispatch({ type: FETCH_ITEMS, payload: res.data });
        } catch (error) {
            dispatch({ type: FETCH_ITEMS, payload: [] });
          console.log(error)
        }
      };
}

//add cart action
export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}
//remove item action
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}
//subtract qt action
export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}