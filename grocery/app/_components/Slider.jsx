
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'

const Slider = ({sliderList}) => {
  return (
    <Carousel>
  <CarouselContent>
    {sliderList.map((slider,idx) => (

    <CarouselItem key={idx}>
      {slider.image.length > 0 && slider.image[0].url ? (
      <Image
        src={slider.image[0].url.startsWith('/') 
             ? `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}${slider.image[0].url}` 
             : slider.image[0].url} // Ensures it starts with a leading slash
        alt={slider.image[0].name || 'Slider Image'}
        width={1000}
        height={400}
        className='w-full h-[200px] md:h-[380px] object-fill rounded-2xl'
      />
    ) : (
      <p>No image available</p>
    )}
    </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

  )
}

export default Slider