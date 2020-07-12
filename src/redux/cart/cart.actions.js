import { cartActionTypes } from "./cart.types"

const toggleCartHidden = () => ({
    type: cartActionTypes.toggleCartHidden
});

const addItem = (item) => ({
    type: cartActionTypes.addItem,
    payload: item
})

const clearItem = (item) => ({
    type: cartActionTypes.clearItem,
    payload: item
});

const removeItem = (item) => ({
    type: cartActionTypes.removeItem,
    payload: item
});

export {
    toggleCartHidden,
    addItem,
    clearItem,
    removeItem
}