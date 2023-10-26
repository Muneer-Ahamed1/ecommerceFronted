import { createSlice, current } from "@reduxjs/toolkit";


const Cart=createSlice({
    name:"Cart",
    initialState:{
        addToCart:[],

    },
    reducers:{
        addToCart:(state,{payload})=>{
            console.log(payload)
           state.addToCart.push(payload);

        },
        removeToCart:(state,{payload})=>{
            console.log("I am in remove")

            state.addToCart.splice(payload,1);
            console.log(current(state.addToCart))

        }
    }
})
export default Cart.reducer;
export const{addToCart,removeToCart}=Cart.actions;
export {Cart};

