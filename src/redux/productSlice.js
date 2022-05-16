import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncSetProducts = createAsyncThunk(
    'products/fetchAsyncSetProducts',
    async () => {
        const response = await axios
        .get('https://fakestoreapi.com/products/category/jewelery')
        console.log(response.data)
        return response.data
    }
)
export const fetchAsyncSelectedProducts = createAsyncThunk(
    'products/fetchAsyncSelectedProducts',
    async (productId) => {
        const response = await axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        return response.data
    }
)

export const productSlice = createSlice ({
    name:'products',
    initialState:{
        products:[],
        show:{}
    },
    reducers:{
        // setProducts: (state,action) => {
        //     state.products = action.payload
        // },
        // selectedProducts: (state,action) => {
        //     state.show = action.payload
        // },
        removeSelectedProductShow: (state) => {
            state.show = {}
        } 
    },
    extraReducers:{
        [fetchAsyncSetProducts.pending]: () => {
            console.log('pending')
        },
        [fetchAsyncSetProducts.fulfilled]: (state,action) => {
            console.log('fetched Successfuly')
            state.products = action.payload
        },
        [fetchAsyncSetProducts.rejected]: () =>{
            console.log('rejected')
        },
        [fetchAsyncSelectedProducts.fulfilled]: (state,action) => {
            console.log('fetched Successfuly')
            state.show = action.payload
        }     
    }
    }
       
);

export const {setProducts,selectedProducts,removeSelectedProductShow} = productSlice.actions
export default productSlice.reducer