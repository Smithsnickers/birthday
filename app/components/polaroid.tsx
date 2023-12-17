import { StaticImageData, StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export default function Polaroid(
    {imagePath}: {imagePath: StaticImageData}
) {
    const width = imagePath.width;
    const height = imagePath.height;
    return (
        <div className="flex shadow-lg w-[16rem] h-[26rem] self-center bg-stone-200 mx-4 justify-center rounded-md">
            <div className="flex w-5/6 h-[22rem] justify-center relative overflow-hidden mt-4">
                <Image
                    className="flex bg-stone-100"      
                    src={imagePath}
                    alt="imagePath"
                    fill                
                    objectFit="cover"
                ></Image>
            </div>            
        </div>
    );
}