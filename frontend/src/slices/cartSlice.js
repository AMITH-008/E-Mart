import { createSlice } from '@reduxjs/toolkit';

const addDecimals = (number) => {
    return (Math.round(number*100) / 100 ).toFixed(2);
}
const initialState = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : {cartItems: []};

const cartSlice = createSlice({
    name:"Cart",
    initialState,
    reducers : {
        addToCart: (state, action) => {
            const item = action.payload;
            const existItem = state.cartItems.find(cartItem => cartItem._id === item._id);

            if (existItem) {
                state.cartItems = state.cartItems.map(cartItem => cartItem._id === existItem._id ? item: cartItem);
            } else {
                state.cartItems = [...state.cartItems, item];
            }

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
        }
    }
});
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;