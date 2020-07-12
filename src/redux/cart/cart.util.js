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

const removeItemToCard = (itemList, removeItem) => {
    itemList.filter((item) => (item.id === removeItem.id && (item["quantity"] || 1) - 1 > 0))
    return itemList;
}

export {
    addItemToCart,
    removeItemToCard
}