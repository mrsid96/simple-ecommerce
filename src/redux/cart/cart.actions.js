import { cartActionTypes } from "./cart.types"

const toggleCartHidden = () => ({
    type: cartActionTypes.toggleCartHidden
});

const addItem = (item) => ({
    type: cartActionTypes.addItem,
    payload: item
})

export {
    toggleCartHidden,
    addItem
}