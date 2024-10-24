'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import logo from '../../public/grocery.png'
import { LayoutGrid, Search, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import GlobalApi from '../_utils/GlobalApi'

const Header = () => {
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
      getCategoryList();
    }, []);

    const getCategoryList = () => {
        GlobalApi.getCategory().then((res) => {
            setCategoryList(res.data.data); // Assuming the data field has the categories
            console.log(res.data.data);
        }).catch((error) => {
            console.error("Error fetching categories", error);
        });
    }

  return (
    <div className='shadow-sm p-5 flex justify-between'>
      <div className='flex items-center gap-8'>
        <Image src={logo} alt='logo' width={150} height={100} priority />
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <h2 className='hidden md:flex gap-2 items-center border rounded-full p-2 px-10 bg-slate-200 cursor-pointer'>
              <LayoutGrid className='h-5 w-5' /> Category
            </h2>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Categories</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {categoryList.map((category, index) => (
               <DropdownMenuItem key={index} className='flex gap-4 items-center cursor-pointer'>
                {category.icon[0]?.url && (
       <Image src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL+category.icon[0].url}  alt={category.name || 'category'} 
       width={25} 
       height={25}
       unoptimized={true}
        />
     )}
    <h2 className='text-lg'>{category?.name} </h2> 
               </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <div className='hidden md:flex gap-3 items-center rounded-full border p-2 px-5'>
          <Search />
          <input type="text" placeholder='Search' className='outline-none' />
        </div>
      </div>

      <div className='flex gap-5 items-center'>
        <h2 className='flex gap-2 items-center text-lg'><ShoppingBag /> 0 </h2> 
        <Button>Login</Button>
      </div>
    </div>
  )
}

export default Header
