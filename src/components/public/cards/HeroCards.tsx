import { mockHarleyData } from "@/helpers/mock"
import Image from "next/image"
import Link from "next/link";

interface ProductCardsProps {
    product: typeof mockHarleyData[0];
}

export const HeroCards = ({ product }: ProductCardsProps) => {
    return (
        <div className="bg-secondary/40 border border-secondary p-4 rounded-2xl">
            <div className="flex flex-col gap-4">
                <div className="relative w-full h-50 rounded-2xl overflow-hidden">
                    <Image 
                        src={product.image}
                        fill
                        alt="Gambar Produk"
                        className="object-cover z-10"
                    />
                </div>
                <div className="pb-2 max-w-[180px] text-left">
                    <p className="text-lg font-semibold text-[#C4C4C4]">{product.seri} - {product.tahun}</p>
                </div>
            </div>
        </div>
    )
}