export function GalleryBanner() {
    return (
        <div
            className="w-full h-[450px] bg-cover bg-center flex items-center justify-center relative"
            style={{ backgroundImage: "url('/images/gallery-banner.jpg')" }}
        >
            {/* Enhanced overlay for better readability */}
            <div className="absolute inset-0 bg-gray-900/40 "></div>

            {/* Content */}
            <div className="text-center text-white relative z-10">
                <h1 className="text-5xl font-bold">Gallery</h1>
                <p className="text-sm mt-5">Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    );
}