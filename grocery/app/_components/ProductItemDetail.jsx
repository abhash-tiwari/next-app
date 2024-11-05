import Image from 'next/image'
import React from 'react'

const ProductItemDetail = ({product}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 p-7 bg-white text-black'>
      <Image src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL+product.images[0].url} alt='img' height={300} width={300} 
      className='bg-slate-200 p-5 h-[320px] w-[300px] object-contain rounded-lg' />
      <div className='flex flex-col gap-3'>
        <h2 className='text-2xl font-bold' >{product.name}</h2>
        <h2 className='text-sm text-gray-500' >{product.description}</h2>

        <div className='flex gap-3'>
        {product.sellingPrice &&
        <h2 className='font-bold text-3xl'>{product.sellingPrice}</h2> }
        <h2 className={`font-bold text-3xl ${product.sellingPrice &&`line-through text-gray-500`}`}>{product.mrp}</h2>
        </div>
        <h2 className='font-medium text-lg' >Quantity ({product.itemQuantityType})</h2>
      </div>
    </div>
  )
}

export default ProductItemDetail