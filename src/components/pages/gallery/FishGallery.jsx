"use client";
import Image from "next/image";
import React from "react";

export default function FishGallery() {
  const images = [
    "/images/fish-gallery/fish-1.jpg",
    "/images/fish-gallery/fish-2.jpg",
    "/images/fish-gallery/fish-3.jpg",
    "/images/fish-gallery/fish-4.jpg",
    "/images/fish-gallery/fish-5.jpg",
    "/images/fish-gallery/fish-6.jpg",
    "/images/fish-gallery/fish-7.jpg",
    "/images/fish-gallery/fish-8.jpg",
    "/images/fish-gallery/fish-9.jpg",
    "/images/fish-gallery/fish-10.jpg",
  ];

  return (
    <section className="w-full my-[100px] px-[20px] md:px-[30px] lg:px-[30px] xl:max-w-7xl xl:mx-auto">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-4">
          <div className="h-[410px] relative rounded-xl overflow-hidden">
            <Image src={images[0]} alt="" fill className="object-cover" />
          </div>

          <div className="h-[240px] relative rounded-xl overflow-hidden">
            <Image src={images[1]} alt="" fill className="object-cover" />
          </div>

          <div className="h-[240px] relative rounded-xl overflow-hidden">
            <Image src={images[2]} alt="" fill className="object-cover" />
          </div>
        </div>

        {/* MIDDLE COLUMN */}
        <div className="flex flex-col gap-4">
          <div className="h-[210px] relative rounded-xl overflow-hidden">
            <Image src={images[3]} alt="" fill className="object-cover" />
          </div>

          <div className="h-[480px] relative rounded-xl overflow-hidden">
            <Image src={images[4]} alt="" fill className="object-cover" />
          </div>

          <div className="h-[200px] relative rounded-xl overflow-hidden">
            <Image src={images[5]} alt="" fill className="object-cover" />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-4">
          <div className="h-[200px] relative rounded-xl overflow-hidden">
            <Image src={images[6]} alt="" fill className="object-cover" />
          </div>

          <div className="h-[450px] relative rounded-xl overflow-hidden">
            <Image src={images[7]} alt="" fill className="object-cover" />
          </div>

          <div className="h-[240px] relative rounded-xl overflow-hidden">
            <Image src={images[8]} alt="" fill className="object-cover" />
          </div>
        </div>

      </div>
    </section>
  );
}
