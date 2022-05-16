import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsyncSetProducts } from '../redux/productSlice';
import ProcudtComponent from './ProcudtComponent'

const ProductListing = () => {
    const dispatch = useDispatch() 
    useEffect(()=>{
        dispatch(fetchAsyncSetProducts());
    },[dispatch])
    return (
        <div className='ui grid container'>
            <ProcudtComponent />
        </div>
    );
};

export default ProductListing;