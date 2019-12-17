import Item1 from '../assets/images/item1.jpg'
import Item2 from '../assets/images/item2.jpg'
import Item3 from '../assets/images/item3.jpg'
import Item4 from '../assets/images/item4.jpg'
import Item5 from '../assets/images/item5.jpg'
import Item6 from '../assets/images/item6.jpg'
import { FETCH_ITEMS, ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING, SUB_SHIPPING } from '../actions/action-types/cart-actions'


const initState = {
    items: [
        // { id: 1, title: 'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 110, img: Item1 },
        // { id: 2, title: 'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 80, img: Item2 },
        // { id: 3, title: 'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 120, img: Item3 },
        // { id: 4, title: 'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 260, img: Item4 },
        // { id: 5, title: 'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 160, img: Item5 },
        // { id: 6, title: 'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 90, img: Item6 }
    ],
    addedItems: [],
    total: 0

}
const cartReducer = (state = initState, action) => {

    //INSIDE HOME COMPONENT

    switch (action.type) {

        case FETCH_ITEMS: 
            return {
                ...state,
                items: action.payload
            }
        case ADD_TO_CART:
            let addToCartAddedItem = state.items.find(item => item.id === action.id)
            //check if the action id exists in the addedItems
            let existed_item = state.addedItems.find(item => action.id === item.id)
            if (existed_item) {
                addToCartAddedItem.quantity += 1
                return {
                    ...state,
                    total: state.total + addToCartAddedItem.price
                }
            }
            else {
                addToCartAddedItem.quantity = 1;
                //calculating the total
                let newTotal = state.total + addToCartAddedItem.price
    
                return {
                    ...state,
                    addedItems: [...state.addedItems, addToCartAddedItem],
                    total: newTotal
                }
            }
        case REMOVE_ITEM: 
            let itemToRemove = state.addedItems.find(item => action.id === item.id)
            let new_items = state.addedItems.filter(item => action.id !== item.id)

            //calculating the total
            let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
            console.log(itemToRemove)
            return {
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        case ADD_QUANTITY: 
            let addQtyAddedItem = state.items.find(item => item.id === action.id)
            addQtyAddedItem.quantity += 1
            let addQtyNewTotal = state.total + addQtyAddedItem.price
            return {
                ...state,
                total: addQtyNewTotal
            }
        case SUB_QUANTITY: 
            let subQtyAddedItem = state.items.find(item => item.id === action.id)
            //if the qt == 0 then it should be removed
            if (subQtyAddedItem.quantity === 1) {
                let new_items = state.addedItems.filter(item => item.id !== action.id)
                let newTotal = state.total - subQtyAddedItem.price
                return {
                    ...state,
                    addedItems: new_items,
                    total: newTotal
                }
            }
            else {
                subQtyAddedItem.quantity -= 1
                let newTotal = state.total - subQtyAddedItem.price
                return {
                    ...state,
                    total: newTotal
                }
            } 
        case ADD_SHIPPING: 
            return {
                ...state,
                total: state.total + 6
            }
        case SUB_SHIPPING:
            return {
                ...state,
                total: state.total - 6
            }
        default:
            return state
    }
}

export default cartReducer