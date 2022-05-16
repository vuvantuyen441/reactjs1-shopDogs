import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './productSlice'


const store = configureStore ({
    reducer:{
        Allproducts:productsReducer,      
    }
})
export default store;