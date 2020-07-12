import { cartActionTypes } from "./cart.types"
import { addItemToCart, clearItems, removeItem } from "./cart.util"

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.toggleCartHidden:
            return {
                ...state,
                hidden: !state.hidden
            };
        case cartActionTypes.addItem:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case cartActionTypes.clearItem:
            return {
                ...state,
                cartItems: clearItems(state.cartItems, action.payload)
            }
        case cartActionTypes.removeItem:
            return {
                ...state,
                cartItems: removeItem(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;