// components/FishGallery.jsx
import Image from 'next/image';

const FishGallery = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-4 auto-rows-min grid-cols-2 sm:grid-cols-3">

                    {/* Image 1 (Tall, Spanning 2 rows) */}
                    <div className="relative col-span-1 row-span-2 rounded-lg overflow-hidden shadow-md">
                        <Image src="/images/fish-gallery/fish-1.jpg" alt="Discus Fish" layout="fill" objectFit="cover" className="rounded-lg" />
                    </div>

                    {/* Image 2 (Normal) */}
                    <div className="relative col-span-1 rounded-lg overflow-hidden shadow-md aspect-w-1 aspect-h-1">
                        <Image src="/images/fish-gallery/fish-2.jpg" alt="Discus Fish" layout="fill" objectFit="cover" className="rounded-lg" />
                    </div>

                    {/* Image 3 (Normal) */}
                    <div className="relative col-span-1 rounded-lg overflow-hidden shadow-md aspect-w-1 aspect-h-1">
                        <Image src="/images/fish-gallery/fish-3.jpg" alt="Discus Fish" layout="fill" objectFit="cover" className="rounded-lg" />
                    </div>

                    {/* Image 4 (Normal) */}
                    <div className="relative col-span-1 rounded-lg overflow-hidden shadow-md aspect-w-1 aspect-h-1">
                        <Image src="/images/fish-gallery/fish-4.jpg" alt="Discus Fish" layout="fill" objectFit="cover" className="rounded-lg" />
                    </div>

                    {/* Image 5 (Wide, Spanning 2 columns) */}
                    <div className="relative col-span-2 row-span-2 rounded-lg overflow-hidden shadow-md">
                        <Image src="/images/fish-gallery/fish-5.jpg" alt="Discus Fish" layout="fill" objectFit="cover" className="rounded-lg" />
                    </div>

                    {/* Image 6 (Normal) */}
                    <div className="relative col-span-1 rounded-lg overflow-hidden shadow-md aspect-w-1 aspect-h-1">
                        <Image src="/images/fish-gallery/fish-6.jpg" alt="Discus Fish" layout="fill" objectFit="cover" className="rounded-lg" />
                    </div>

                    {/* Image 7 (Normal) */}
                    <div className="relative col-span-1 rounded-lg overflow-hidden shadow-md aspect-w-1 aspect-h-1">
                        <Image src="/images/fish-gallery/fish-7.jpg" alt="Discus Fish" layout="fill" objectFit="cover" className="rounded-lg" />
                    </div>

                    {/* Image 8 (Normal) */}
                    <div className="relative col-span-1 rounded-lg overflow-hidden shadow-md aspect-w-1 aspect-h-1">
                        <Image src="/images/fish-gallery/fish-8.jpg" alt="Discus Fish" layout="fill" objectFit="cover" className="rounded-lg" />
                    </div>

                    {/* Image 9 (Tall, spanning 2 rows, and wide, spanning 2 columns) */}
                    <div className="relative col-span-2 row-span-2 rounded-lg overflow-hidden shadow-md">
                        <Image src="/images/fish-gallery/fish-9.jpg" alt="Discus Fish" layout="fill" objectFit="cover" className="rounded-lg" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FishGallery;