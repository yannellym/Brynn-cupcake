import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        quantity: 0, //quanitity of products in the item page     /products/id 
        total: 0,  // total is going to be 0 at the beginning 
    },
    reducers:{
        addProduct: (state, action) => {
            state.products.push(action.payload)
            state.quantity += 1 ;
            state.total += action.payload.price * action.payload.quantity  //take the total amount (price) and multiply by quantity in cart
        },
        reset: (state) => {
            state.products = []; //when customer makes an order, the cart will reset to 0 again since they paid for the items.
            state.quantity = 0 ;
            state.total = 0;
        },
    },
})

export const { addProduct, reset }= cartSlice.actions;
export default cartSlice.reducer;