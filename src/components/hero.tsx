import type { StaticImageData } from "next/image";
import  Image from "next/image";

interface HeroProps {
    img:StaticImageData;
    imgAlt:string;
    imgTitle:string;
}
export default function Hero(props:HeroProps) {
    return (
    <div className="relative h-screen">
        <div className='absolute -z-10 inset-0'>
        <Image src={props.img} 
         alt={props.imgAlt} 
         fill 
         style={{objectFit:'cover'}}/>
         <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="pt-48 flex justify-center items-center">
            <h1 className="text-5xl text-white">
                {props.imgTitle}
            </h1>
        </div>
    </div>
)
}
