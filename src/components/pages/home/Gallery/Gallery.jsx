"use client";
import Image from 'next/image';

const galleryItems = [
  {
    src: '/images/gallery-1.jpg',
    alt: 'Aquarium 1',
    title: 'Vibrant Underwater Scene',
    description: 'A beautiful display of colorful fish and lush aquatic plants.',
  },
  {
    src: '/images/gallery-2.jpg',
    alt: 'Aquarium 2',
    title: 'Discus Fish Collection',
    description: 'A stunning array of various discus fish in their natural habitat.',
  },
  {
    src: '/images/gallery-3.jpg',
    alt: 'Aquarium 3',
    title: 'Graceful Discus Pair',
    description: 'Two elegant discus fish swimming together.',
  },
  {
    src: '/images/gallery-4.jpg',
    alt: 'Aquarium 4',
    title: 'Lush Green Aquascape',
    description: 'A serene underwater garden with vibrant green plants.',
  },
  {
    src: '/images/gallery-5.jpg',
    alt: 'Aquarium 5',
    title: 'Deep Forest Aquascape',
    description: 'An intricate aquascape featuring driftwood and dense vegetation.',
  },
  {
    src: '/images/gallery-6.jpg',
    alt: 'Aquarium 6',
    title: 'Tall Plant Aquascape',
    description: 'A focused aquascape with tall, elegant aquatic plants.',
  },
];

const Gallery = () => {
  return (
    <section className="mt-[100px] bg-white">
      <div className="w-full px-[20px] md:px-[30px] lg:px-[30px] xl:max-w-7xl xl:mx-auto">
        {/* Section Header */}
        <h2 className="common_title text-gray-800 text-center mb-4">
          Gallery
        </h2>
        <p className="text-center text-gray-600 text-sm sm:text-base md:text-lg mb-12 max-w-4xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper mattis, pulvinar dapibus leo. Sed urna lacus, egestas a pellentesque vel, ornare at est. 
          Vestibulum elit eros, mattis ac ultricies consequat, malesuada eget nisi.
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6  md:gap-4 lg:gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden shadow-lg h-64 sm:h-72 md:h-80 lg:h-96"
            >
              {/* Image */}
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover w-full h-full"
              />

              {/* Black overlay fade-in */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Text overlay */}
              <div className="absolute inset-0 flex flex-col justify-end transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 px-4 pb-4 sm:pb-6">
                <h3 className="text-white text-lg sm:text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-white text-xs sm:text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
