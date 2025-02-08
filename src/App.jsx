import ProductDetails from "./components/ProductDetails.jsx";

const App = () => {

  return (
      <div className='grid grid-cols-3 m-4'>
      <ProductDetails />
        <ProductDetails />
        <ProductDetails />
      </div>
  )
}

export default App
