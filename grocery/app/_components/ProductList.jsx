import React from 'react'
import ProductItem from './ProductItem'

const ProductList = ({productList}) => {
  return (
    <div className='mt-5'>
        <h2 className='text-green-600 font-bold text-2xl flex align-middle justify-center'>Our Popular Products</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6">
            {productList.map((product,idx)=> idx<8&&(
                <ProductItem product={product}/>
            ))}
        </div>
    </div>
  )
}

export default ProductList