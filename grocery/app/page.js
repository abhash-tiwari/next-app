import { Button } from "@/components/ui/button";
import Image from "next/image";
import Slider from "./_components/Slider";
import GlobalApi from "./_utils/GlobalApi";
import CategoryList from "./_components/CategoryList";
import ProductList from "./_components/ProductList";
import Banner from "../public/banner.png"
import Footer from "./_components/Footer";

export default async function Home() {

  const sliderList = await GlobalApi.getSliders()
  const categoryList = await GlobalApi.getCategoryList()
  const productList = await GlobalApi.getAllProducts()

  return (
    <div className="p-10 px-16">
      <Slider sliderList={sliderList}/>

      <CategoryList categoryList={categoryList} />

      <ProductList productList={productList}/>

      {/* Banner */}
      <Image src={Banner}  alt="Banner" width={1000} height={300} className="w-full h-[400px] object-contain mt-5" />

      <Footer />
    </div>
  );
}
