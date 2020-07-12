import { cartActionTypes } from "./cart.types"

const toggleCartHidden = () => ({
    type: cartActionTypes.toggleCartHidden
});

export {
    toggleCartHidden
}