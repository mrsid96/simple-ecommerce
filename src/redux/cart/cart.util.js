const addItemToCart = (itemList, newItem) => {
    let itemMatch = false;
    for (let i = 0; i < itemList.length; i++) {
        if (itemList[i].id === newItem.id) {
            itemMatch = true;
            itemList[i]["quantity"] = itemList[i]["quantity"] + 1
        }
    }
    return itemMatch ? [...itemList] : [...itemList, { ...newItem, quantity: 1 }];
}

const clearItems = (itemList, removeItem) => {
    return [...itemList.filter(item => removeItem.id !== item.id)];
}

// const removeItem = (itemList, removeItem) => {
//     let singleItem = false;
//     for (let i = 0; i < itemList.length; i++) {
//         if (itemList[i].id === removeItem.id) {
//             if (itemList[i]["quantity"] - 1 > 0) {
//                 itemList[i]["quantity"] = itemList[i]["quantity"] - 1
//             } else {
//                 singleItem = true;
//             }
//         }
//     }
//     return singleItem ? clearItems(itemList, removeItem) : [...itemList];
// }

// const addItemToCart = (cartItems, cartItemToAdd) => {
//     const existingCartItem = cartItems.find(
//         cartItem => cartItem.id === cartItemToAdd.id
//     );

//     if (existingCartItem) {
//         return cartItems.map(cartItem =>
//             cartItem.id === cartItemToAdd.id
//                 ? { ...cartItem, quantity: cartItem.quantity + 1 }
//                 : cartItem
//         );
//     }

//     return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
// };

const removeItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};

export {
    addItemToCart,
    removeItem,
    clearItems
}