import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Feature/ProductRedux";
import CartRedux from "./Feature/CartRedux";


const Store=configureStore({
    reducer:{
        Products:productReducer,
        Cart:CartRedux
    }
})

export default Store;