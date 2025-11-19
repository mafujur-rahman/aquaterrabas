import Image from 'next/image';

const HowWeWork = () => {
    return (
        <section className=" py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col lg:flex-row items-center lg:items-start space-y-10 lg:space-y-0 lg:space-x-10">
                {/* Left Section: Text Content */}
                <div className="lg:w-1/2">
                    <h2 className="text-5xl font-bold text-gray-800 mb-6">How We Work</h2>
                    <p className="text-gray-600 mb-10">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                        ullamcorper mattis, pulvinar dapibus leo.
                    </p>

                    <div className="space-y-8">
                        {/* Concept Planning */}
                        <div className="flex items-center space-x-8">
                            <div className="text-5xl font-bold text-[#49b94e]">01</div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-1">Concept Planning</h3>
                                <p className="text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                    luctus nec ullamcorper mattis.
                                </p>
                            </div>
                        </div>

                        {/* Material preparation */}
                        <div className="flex items-center space-x-8">
                            <div className="text-5xl font-bold text-[#49b94e]">02</div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-1">Material preparation</h3>
                                <p className="text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                    luctus nec ullamcorper mattis.
                                </p>
                            </div>
                        </div>

                        {/* Executing Project */}
                        <div className="flex items-center space-x-8">
                            <div className="text-5xl font-bold text-[#49b94e]">03</div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-1">Executing Project</h3>
                                <p className="text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                    luctus nec ullamcorper mattis.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section: Image */}
                <div className="lg:w-1/2 flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-md lg:max-w-none lg:w-[450px] h-[550px] rounded-lg overflow-hidden shadow-xl">
                        <Image
                            src="/images/how-we-work.jpg"
                            alt="Man working with glass"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWeWork;