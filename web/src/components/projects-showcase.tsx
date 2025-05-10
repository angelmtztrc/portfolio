'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Button } from './button';

import 'swiper/css';

export const ProjectsShowcase = () => {
  return (
    <section className="mt-64">
      <h2 className="font-display text-3xl leading-7 tracking-[-1px] font-medium text-center text-primary-300">
        See what I&apos;ve done
      </h2>
      <div className="relative">
        <Image
          fill
          alt="nebula"
          src="/assets/raw-nebula.svg"
          className="absolute blur-[160px] inset-x-0 !-top-12 "
        />

        <Swiper
          className="w-full mt-12"
          slidesPerView="auto"
          loop={true}
          spaceBetween={64}
          centeredSlides={true}
        >
          <SwiperSlide className="container border border-white/[0.15] bg-white/[0.08] pt-8 px-12 pb-12 rounded-3xl aspect-video relative">
            <div className="absolute bottom-12 left-12 z-20">
              <h3 className="font-display font-bold text-5xl leading-10 tracking-tighter text-content-white">
                Passgen - Deno
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide className="container border border-white/[0.15] bg-white/[0.08] pt-8 px-12 pb-12 rounded-3xl aspect-video relative">
            <div className="absolute bottom-12 left-12 z-20">
              <h3 className="font-display font-bold text-5xl leading-10 tracking-tighter text-content-white">
                DishCost Calculator
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide className="container border border-white/[0.15] bg-white/[0.08] pt-8 px-12 pb-12 rounded-3xl aspect-video relative">
            <div className="absolute bottom-12 left-12 z-20">
              <h3 className="font-display font-bold text-5xl leading-10 tracking-tighter text-content-white">
                Obsidian Project
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide className="container border border-white/[0.15] bg-white/[0.08] pt-8 px-12 pb-12 rounded-3xl aspect-video relative">
            <div className="absolute bottom-12 left-12 z-20">
              <h3 className="font-display font-bold text-5xl leading-10 tracking-tighter text-content-white">
                Fish Spotter
              </h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-full flex justify-center mt-12">
        <Button>See Everything</Button>
      </div>
    </section>
  );
};
