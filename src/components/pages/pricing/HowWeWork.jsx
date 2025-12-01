import Image from 'next/image';

const HowWeWork = () => {
    return (
        <section className="mt-[100px]">
            <div className="w-full px-[20px] md:px-[30px] lg:px-[30px] xl:max-w-7xl xl:mx-auto flex flex-col lg:flex-row items-center lg:items-start space-y-10 lg:space-y-0 lg:space-x-10">

                {/* Left Section: Text Content */}
                <div className="lg:w-1/2">
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
                        How We Work
                    </h2>
                    <p className="text-gray-600 mb-10 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                        ullamcorper mattis, pulvinar dapibus leo.
                    </p>

                    <div className="space-y-8">

                        {/* Concept Planning */}
                        <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-6 space-y-3 sm:space-y-0">
                            <div className="text-4xl sm:text-5xl font-bold text-[#49b94e] flex-shrink-0">01</div>
                            <div>
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">Concept Planning</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                    luctus nec ullamcorper mattis.
                                </p>
                            </div>
                        </div>

                        {/* Material preparation */}
                        <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-6 space-y-3 sm:space-y-0">
                            <div className="text-4xl sm:text-5xl font-bold text-[#49b94e] flex-shrink-0">02</div>
                            <div>
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">Material preparation</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                    luctus nec ullamcorper mattis.
                                </p>
                            </div>
                        </div>

                        {/* Executing Project */}
                        <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-6 space-y-3 sm:space-y-0">
                            <div className="text-4xl sm:text-5xl font-bold text-[#49b94e] flex-shrink-0">03</div>
                            <div>
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">Executing Project</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                    luctus nec ullamcorper mattis.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Right Section: Image */}
                <div className="lg:w-1/2 flex justify-center lg:justify-end w-full">
                    <div className="relative w-full sm:max-w-md lg:max-w-none lg:w-[450px] h-[400px] sm:h-[500px] lg:h-[550px] rounded-lg overflow-hidden shadow-xl">
                        <Image
                            src="/images/how-we-work.jpg"
                            alt="Man working with glass"
                            fill
                            className="rounded-lg object-cover"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HowWeWork;
