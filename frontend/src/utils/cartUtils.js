export const addDecimals = (number) => {
    return (Math.round(number*100) / 100 ).toFixed(2);
}

export const updateCart = (state) => {
    //Calculate Items Price
    state.itemsPrice = addDecimals(state.cartItems.reduce((total, curItem) => total+ (curItem.price * curItem.quantity), 0));

    //Calculate Shipping price 
    state.shippingPrice = addDecimals(state.itemsPice > 100 ? 0 : 10);

    //Calculate Tax Price

    state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)));

    //Calculate Total Price

    state.totalPrice = (
        Number(state.itemsPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice)
    ).toFixed(2);

    localStorage.setItem('cart', JSON.stringify(state));

    return state;
}