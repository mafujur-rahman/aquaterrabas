import Image from "next/image";
import { FaFish } from "react-icons/fa";

export function ServiceAbout() {
    return (
        <div className="bg-white mt-[100px] px-[20px] md:px-[30px] lg:px-[30px] xl:max-w-7xl xl:mx-auto">
            <div className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-12 lg:gap-x-16">

                    {/* Image */}
                    <div className="relative overflow-hidden rounded-3xl shadow-lg">
                        <Image
                            src="/images/service-about.jpg"
                            alt="Experienced Team"
                            width={600}
                            height={350}
                            className="w-full h-auto max-h-[380px] object-cover"
                            priority
                        />
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col justify-start">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                            Design Full with passion
                        </h2>

                        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia sit amet ipsum et
                            imperdiet. Vivamus mauris tellus, faucibus eu velit eu, volutpat varius erat. Aenean in
                            turpis quam. Maecenas scelerisque convallis turpis, id laoreet augue varius ut.
                        </p>

                        {/* Features */}
                        <div className="mt-6 space-y-4">
                            <div className="flex gap-4 items-center">
                                <FaFish className="text-[#49b94e] text-2xl" />
                                <p className="text-base md:text-lg text-gray-600 leading-relaxed">High Quality Material</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <FaFish className="text-[#49b94e] text-2xl" />
                                <p className="text-base md:text-lg text-gray-600 leading-relaxed">Healthy livestock</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <FaFish className="text-[#49b94e] text-2xl" />
                                <p className="text-base md:text-lg text-gray-600 leading-relaxed">Professional work</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
