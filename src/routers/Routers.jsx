import {Route, Routes} from "react-router";
import Product from "../components/Product.jsx";

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Product />} />
            </Routes>
        </>
    );
};

export default Routers;