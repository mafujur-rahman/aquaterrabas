import Image from "next/image";
import { FaFish } from "react-icons/fa";

export function ServiceAbout() {
    return (
        <div className="bg-white py-20">
            <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                    <div className="relative overflow-hidden rounded-3xl shadow-lg">
                        <Image
                            src='/images/service-about.jpg'
                            alt="Experienced Team"
                            width={600}
                            height={350}
                            className="w-full h-full max-h-[350px] object-cover"
                            priority
                        />
                    </div>

                    <div className="flex flex-col justify-start">
                        <h2 className="text-3xl sm:text-5xl lg:text-5xl font-bold mb-4">
                            Design Full with passion
                        </h2>
                        <p className="text-base text-gray-600 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia sit amet ipsum et imperdiet. Vivamus mauris tellus, faucibus eu velit eu, volutpat varius erat. Aenean in turpis quam. Maecenas scelerisque convallis turpis, id laoreet augue varius ut. Pellentesque nec metus at diam facilisis pretium. Donec non mattis metus. Nullam rutrum eleifend odio et consectetur. In ornare rutrum condimentum.
                        </p>

                        <div className="mt-5">
                            <div className="flex gap-4 items-center">
                                <FaFish className="text-[#49b94e] text-2xl" />
                                <p className="text-base text-gray-600 leading-relaxed">High Quality Material</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <FaFish className="text-[#49b94e] text-2xl" />
                                <p className="text-base text-gray-600 leading-relaxed">Healthy livestock</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <FaFish className="text-[#49b94e] text-2xl" />
                                <p className="text-base text-gray-600 leading-relaxed">Professional work</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}