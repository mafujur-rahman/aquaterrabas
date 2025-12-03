import Head from 'next/head';

export default function ContactArea() {
    return (
        <div className=" bg-white flex items-center justify-center my-[100px] ">
            <Head>
                <title>Get in touch</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row bg-white rounded-lg">
                    {/* Left Section - Contact Info */}
                    <div className="lg:w-1/2 p-8 lg:pr-12">
                        <h2 className="common_title mb-4">Get in touch</h2>
                        <p className="text-gray-600 mb-8 max-w-md">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                            luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>

                        <div className="space-y-4">
                            {/* Address */}
                            <div className="flex items-center p-2 border border-[#49b94e] rounded-xl shadow-sm">
                                <div className="flex-shrink-0 mr-4 mt-1">
                                    <svg className="h-6 w-6 text-[#49b94e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.727A8 8 0 016.343 7.273L17.657 16.727zm0 0l-1.414 1.414m-3.536-3.536l1.414 1.414m-1.414-1.414l-1.414 1.414m-1.414 1.414l1.414 1.414M6.343 7.273L4.929 5.859m-1.414 1.414L3.515 8.687m1.414-1.414L6.343 7.273M17.657 16.727L16.243 18.141m1.414-1.414l1.414-1.414" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.31-2.69 6-6 6H4v-1.5c0-1.38-1.12-2.5-2.5-2.5S0 11.12 0 12.5V14h18v-3c0-3.31-2.69-6-6-6z" />
                                        <path d="M12 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-md font-bold text-gray-800">Our Address</h3>
                                    <p className="text-gray-600 text-sm">4834 Blackwell Street, SA</p>
                                </div>
                            </div>

                            {/* Phone Number */}
                            <div className="flex items-center p-2 border border-[#49b94e] rounded-xl shadow-sm">
                                <div className="flex-shrink-0 mr-4 mt-1">
                                    <svg className="h-6 w-6 text-[#49b94e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-md font-bold text-gray-800">Phone Number</h3>
                                    <p className="text-gray-600 text-sm">907-323-6727</p>
                                </div>
                            </div>

                            {/* Email Address */}
                            <div className="flex items-center p-2 border border-[#49b94e] rounded-xl shadow-sm">
                                <div className="flex-shrink-0 mr-4 mt-1">
                                    <svg className="h-6 w-6 text-[#49b94e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-md font-bold text-gray-800">Email Address</h3>
                                    <p className="text-gray-600 text-sm">admin@hmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Contact Form */}
                    <div className="lg:w-1/2 p-8 lg:pl-12">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="mt-1 block w-full border-gray-400 bg-gray-100 focus:ring-[#49b94e] focus:border-[#49b94e] sm:text-sm p-2"
                                        placeholder="Full Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700">Phone</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        className="mt-1 block w-full border-gray-400 bg-gray-100  focus:ring-[#49b94e] focus:border-[#49b94e] sm:text-sm p-2"
                                        placeholder="Phone Number"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="mt-1 block w-full border-gray-400 bg-gray-100  focus:ring-[#49b94e] focus:border-[#49b94e] sm:text-sm p-2"
                                        placeholder="Email Address"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="service" className="block text-sm font-bold text-gray-700">Service</label>
                                    <select
                                        id="service"
                                        name="service"
                                        className="mt-1 block w-full py-2 px-3 border  border-gray-400 bg-gray-100  focus:outline-none focus:ring-[#49b94e] focus:border-[#49b94e] sm:text-sm"
                                    >
                                        <option>Multi Select</option>
                                        <option>Service 1</option>
                                        <option>Service 2</option>
                                        <option>Service 3</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-gray-700">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    className="mt-1 block w-full border-gray-400 bg-gray-100  focus:ring-[#49b94e] focus:border-[#49b94e] sm:text-sm p-2"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-lg font-medium text-white bg-[#49b943] hover:bg-transparent hover:border hover:border-[#49b943] hover:text-[#49b943] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#49b94e]"
                                >
                                    Submit Button
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}