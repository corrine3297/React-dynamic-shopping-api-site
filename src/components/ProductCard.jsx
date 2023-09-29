// import React from 'react';
import './ProductCard.css';
import cardImage from '../components/card_blue-ear-muffs.png';
import React, { useEffect, useState } from "react";
import apiAxiosInstance from '../apiAxiosInstance';

function ProductCard() {
    const [allProduct, setAllProduct] = useState([])
    const fetchData = async () => {
        const fetchUrl = "/products"
        const { data } = await apiAxiosInstance.get(fetchUrl)
        // console.log(data)
        setAllProduct(data)

    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className='product-card-container'>
            <div className='product-card-section'>
                <div className='product-card-header'>
                    <div className='product-card-title'>
                        Latest Products
                    </div>
                    <div className='product-list-title'>
                        View All Products
                    </div>
                </div>
                <div className="product-detail-card">
                    {allProduct.map(item => (
                        <div className="product-card" key={item.id}>
                            <div className="product-card-img mt-3">
                                <img src={item?.image} alt="" />
                            </div>
                            <div className="product-name mt-3">{item?.title?.slice(0,35)}...</div>
                            <div className="product-price mt-1">Price: $ {item?.price} USD</div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default ProductCard