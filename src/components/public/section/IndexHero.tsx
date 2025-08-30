import HeroImage from "@public/img/hero.png"
import Image from "next/image";
import { Button } from "@/components/Button";
import { ChevronRight } from "lucide-react";
import { HeroCards } from "../cards";
import { mockHarleyData } from "@/helpers/mock";

export const IndexHero = () => {
    return(
        <div className="relative max-w-screen">
            <div className="flex items-center justify-center">
                <div className="w-2xl h-screen relative">
                    <Image 
                    fill
                    src={HeroImage}
                    alt="Hero Image"
                    />
                </div>
                <div className="flex flex-col gap-20 w-5xl">
                    <div className="space-y-4">
                        <p className="text-5xl font-semibold">Selamat Datang di Portofolioku</p>
                        <p className="font-medium text-base max-w-3xl text-[#C4C4C4]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, ipsum dolorum modi nostrum maiores, quibusdam labore tempore est saepe repellat, quod quaerat corrupti rem odit facilis. Illum optio ipsum alias!</p>
                        <Button
                        variant="ghost"
                        size="lg"
                        className="flex items-center gap-1"
                        rounded="xxl"
                        >
                            <span>View More</span>
                            <ChevronRight size={16} />
                        </Button>
                    </div>
                    <div className="grid grid-cols-3 gap-7">
                        {mockHarleyData.map((product, index) => (
                            <HeroCards key={index} product={product} />
                        ))}
                    </div>
                </div>
            </div>
            
        </div>
    );
};


