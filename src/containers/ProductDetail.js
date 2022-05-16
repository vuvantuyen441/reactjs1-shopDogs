import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {fetchAsyncSelectedProducts, removeSelectedProductShow} from '../redux/productSlice'

const ProductDetail = () => {
    const { productId } = useParams()
    console.log(productId)
    const showProduct = useSelector(state => state.Allproducts.show)
    console.log(showProduct)
    const {title,image,price,category,description} = showProduct;
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchAsyncSelectedProducts(productId));
        return () => {
            dispatch(removeSelectedProductShow());
        }
        
    },[dispatch,productId])
    return (
        <div className="ui grid container">
      {Object.keys(showProduct).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    );
};

export default ProductDetail;