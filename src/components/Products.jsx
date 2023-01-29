import Product from './Product'
import { popularProducts } from '../data'

const Products = () => {
    return (
        <div className='container flex  flex-col p-5 '>
            <h1 className='font-bold text-4xl m-auto text-center'>POPULAR PRODUCTS</h1>
            <div className='flex flex-row justify-center items-center flex-wrap'>
                {popularProducts.map((item) =>
                    <Product key={item.id} item={item}>Product</Product>
                )}
            </div>
        </div>
    )
}

export default Products