import ProductDetailsCard from "./ProductDetailsCard.jsx";

const Product = () => {
    return (
        <div className='grid grid-cols-3 m-4'>
            <ProductDetailsCard/>
            <ProductDetailsCard/>
            <ProductDetailsCard/>
        </div>
    );
};

export default Product;