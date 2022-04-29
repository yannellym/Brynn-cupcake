import { createSlice, current } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        quantity: 0, //quanitity of products in the item page     /products/id 
        total: 0,  // total is going to be 0 at the beginning 
        title: "",
        price: 0,
    },
    reducers:{
        addProduct: (state, action) => {
        
            state.products.push(action.payload)
            state.quantity += 1 ;
            state.total += action.payload.price * action.payload.quantity  //take the total amount (price) and multiply by quantity in cart
            state.title = action.payload.title;
            state.price = action.payload.price;
        },
        decrement: (state, action) => {
            let remainingProducts = current(state).products.filter(item => item._id !== action.payload); 
            //check the current state, filter out all products's ids that DO NOT match the number of the payload
            state.products = remainingProducts
            //now let products array equal to the the remaining products in the cart
            state.quantity--
            state.total = current(state).products.map(item => item.price ).reduce((a,b) => a + b, 0)
            //get the prices of all current items in the cart and add them. 
        },
        reset: (state) => {
            state.products = []; //when customer makes an order, the cart will reset to 0 again since they paid for the items.
            state.quantity = 0 ;
            state.total = 0;
            state.title = "";
            state.price = 0;
        },
    },
})

export const { addProduct, reset, decrement} = cartSlice.actions;
export default cartSlice.reducer;