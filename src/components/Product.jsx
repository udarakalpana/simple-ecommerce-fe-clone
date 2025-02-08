import ProductDetailsCard from "./ProductDetailsCard.jsx";
import {useEffect} from "react";
import axios from "axios";

const Product = () => {

    useEffect(() => {
        fetchProductDetails()
    }, []);

    const fetchProductDetails = async () => {
       const response = await axios.get('api/get-all-products')
        console.log('sfasd')
    }

    return (
        <div className='grid grid-cols-3 m-4'>
            <ProductDetailsCard/>
            <ProductDetailsCard/>
            <ProductDetailsCard/>
        </div>
    );
};

export default Product;