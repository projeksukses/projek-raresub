"use client"

import HeroImage from "@public/img/hero.png";
import Image from "next/image";
import { Button } from "@/components/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { HeroCards } from "../cards";
import { mockHarleyData } from "@/helpers/mock";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const IndexHero = () => {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <div className="max-w-screen h-screen max-h-screen">
            <div className="relative grid grid-cols-[1fr_2fr] items-center">
                {/* Hero Image */}
                <div className="w-full h-[1000px] relative">
                    <Image
                        fill
                        src={HeroImage}
                        alt="Hero Image"
                        className="object-contain"
                    />
                </div>
                <div className="flex flex-col gap-y-15 w-5xl px-10 absolute top-1/2 -translate-y-1/2 right-0 h-fit">
                    <div className="space-y-4">
                        <p className="text-4xl font-semibold">Selamat Datang di Portofolioku</p>
                        <p className="font-medium text-sm max-w-3xl text-[#C4C4C4]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, ipsum dolorum modi nostrum maiores,
                            quibusdam labore tempore est saepe repellat, quod quaerat corrupti rem odit facilis. Illum optio ipsum alias!
                        </p>
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


                        <button
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="p-2 rounded-full bg-transparent border border-secondary cursor-pointer hover:bg-secondary/80 absolute -left-10 bottom-0"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() => swiperRef.current?.slideNext()}
                            className="p-2 rounded-full bg-transparent border border-secondary cursor-pointer absolute -right-10 bottom-0 hover:bg-secondary/80"
                            aria-label="Next slide"
                        >
                            <ChevronRight size={20} />
                        </button>

                    {/* Swiper Container dengan custom Navigation */}
                    <div className="">
                        {/* Custom Navigation Buttons */}
                        

                        {/* Swiper Component */}
                        <Swiper
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            modules={[Navigation]}
                            spaceBetween={20}
                            slidesPerView={3}
                            navigation={{
                                enabled: true,
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev'
                            }}
                        >
                            {mockHarleyData.map((product, index) => (
                                <SwiperSlide key={index}>
                                    <HeroCards product={product} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};