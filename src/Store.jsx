import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Feature/ProductRedux"


const Store=configureStore({
    reducer:{
        Products:productReducer,
    }
})

export default Store;