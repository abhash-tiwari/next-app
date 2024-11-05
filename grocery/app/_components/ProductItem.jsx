import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "../../components/ui/dialog"
import ProductItemDetail from './ProductItemDetail'

const ProductItem = ({ product }) => {
  return (
    <div className='p-2 md:p-6 flex flex-col justify-center items-center gap-3 border rounded-lg hover:scale-105 cursor-pointer hover:shadow-lg transition-all ease-in-out'>
      <Image 
        src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + product.images[0].url} 
        alt='img' 
        width={500} 
        height={200} 
        className='h-[200px] w-[200px] object-contain' 
      />
      <h2 className='font-bold text-lg'>{product.name}</h2>
      <div className='flex gap-3'>
        {product.sellingPrice && <h2 className='font-bold text-lg'>{product.sellingPrice}</h2>}
        <h2 className={`font-bold text-lg ${product.sellingPrice && `line-through text-gray-500`}`}>{product.mrp}</h2>
      </div>

      <Dialog asChild>
        <DialogTrigger asChild>
          <Button variant="outline" className='text-primary hover:text-white hover:bg-primary'>
            Add To Cart
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            {/* If you need a title, uncomment the line below */}
            <DialogTitle>Product Details</DialogTitle>
            <DialogDescription asChild>
              <div>
                <ProductItemDetail product={product} />
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductItem;
