import React from "react";
import Image from "next/image";

const PopularProducts = () => {
  const products = [
    {
      name: "Barbus Fish",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      image: "/images/barbus.jpg",
    },
    {
      name: "Glowing Tetra",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      image: "/images/tetra.jpg",
    },
    {
      name: "Fire Discus",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      image: "/images/fire.jpg",
    },
    {
      name: "SilverTip Tetra",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      image: "/images/silver.jpg",
    },
    {
      name: "Gold Gourami",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      image: "/images/gourami.jpg",
    },
    {
      name: "Cardinal Tetra",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      image: "/images/cardinal.jpg",
    },
  ];

  return (
    <section className="mt-[100px] bg-white">
      {/* CONTENT WIDTH CONTROL */}
      <div className="w-full px-[20px] md:px-[30px] lg:px-[30px] xl:max-w-7xl xl:mx-auto">

        {/* Heading */}
        <h2 className="common_title text-center mb-4">
          Popular Among Customers
        </h2>

        <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 lg:gap-6">

          {products.map((product, index) => (
            <div key={index} className=" overflow-hidden flex flex-col">

              {/* Image */}
              <div className="relative w-full h-64 ">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-xl "
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow text-center">
                <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                <p className="text-gray-600 text-base leading-relaxed flex-grow">
                  {product.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PopularProducts;
