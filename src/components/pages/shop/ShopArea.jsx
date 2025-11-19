import Image from "next/image";

// Star Rating
const StarRating = ({ rating }) => {
    return (
        <div className="flex justify-center my-2">
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
};

// Product Card
const ProductCard = ({ product }) => {
    return (
        <div className="relative bg-white p-4 text-center border-2 border-gray-100 flex flex-col justify-between group overflow-hidden">

            {/* Image Box */}
            <div className="relative w-full h-64 mb-4 flex items-center justify-center">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain transition-all duration-300 group-hover:scale-105"
                />
            </div>

            {/* Card Text */}
            <h3 className="text-gray-800 text-lg font-bold mb-1 line-clamp-2">
                {product.name}
            </h3>

            <StarRating rating={product.rating} />

            <p className="text-gray-700 font-semibold mt-auto">{product.price}</p>

            {/* Hover Overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                {/* View Icon */}
                <button className="w-12 h-12 rounded-full bg-[#49b94e] hover:bg-[#97f03d] shadow flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7s-8.268-2.943-9.542-7z" />
                    </svg>
                </button>

                {/* Cart Icon */}
                <button className="w-12 h-12 rounded-full bg-[#49b94e] hover:bg-[#97f03d] shadow flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
                        <circle cx="9" cy="20" r="1" />
                        <circle cx="17" cy="20" r="1" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

const Section = ({ title, items }) => (
    <>
        <h2 className="text-4xl font-bold text-center mb-10">{title}</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
            {items.map((p) => (
                <ProductCard key={p.id} product={p} />
            ))}
        </div>
    </>
);

export default function ShopArea() {
    const data = {
        "Aquatic Plant": [
            { id: 1, image: "/images/shop/plant-1.jpg", name: "Hygrophila Pinnatifida", rating: 5, price: "$4.00" },
            { id: 2, image: "/images/shop/plant-2.jpg", name: "Hygrophila Corymbosa", rating: 5, price: "$7.50" },
            { id: 3, image: "/images/shop/plant-3.jpg", name: "Pistia Stratiotes", rating: 5, price: "$3.00" },
            { id: 4, image: "/images/shop/plant-4.jpg", name: "Microsorum Pteropus", rating: 4, price: "$5.00" },
        ],
        "Fish and Shrimp": [
            { id: 5, image: "/images/shop/fish-1.jpg", name: "Kryptopterus Biccifhis", rating: 5, price: "$3.00" },
            { id: 6, image: "/images/shop/fish-2.jpg", name: "Hyphessobrycon Bentosi", rating: 5, price: "$1.00" },
            { id: 7, image: "/images/shop/fish-3.jpg", name: "Neocaridina Heteropoda", rating: 5, price: "$2.00" },
            { id: 8, image: "/images/shop/fish-4.jpg", name: "Hemigrammus Bleheri", rating: 5, price: "$1.00" },
        ],
        Tools: [
            { id: 9, image: "/images/shop/tool-1.jpg", name: "Heater", rating: 5, price: "$5.00" },
            { id: 10, image: "/images/shop/tool-2.jpg", name: "Pump", rating: 5, price: "$3.00" },
            { id: 11, image: "/images/shop/tool-3.jpg", name: "Filter", rating: 5, price: "$5.00" },
        ],
    };

    return (
        <section className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {Object.entries(data).map(([title, items]) => (
                    <Section key={title} title={title} items={items} />
                ))}
            </div>
        </section>
    );
}
