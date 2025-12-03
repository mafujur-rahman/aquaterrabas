"use client";
import Image from "next/image";
import React from "react";

const faqs = [
  {
    q: "Do you accept scaping order via phone or email?",
    a: "No, we are an online shop and we do not take orders via Phone, E-mail or Social Media.",
  },
  {
    q: "Where on your website i can open customer account?",
    a: "You can create a new account at the end of the order process or on the following page. You can view all of your orders and subscriptions in your customer account. You can also change your addresses and your password.",
  },
  {
    q: "What are your opening hours?",
    a: "The products in our shop can only be ordered online at present and are sent out by Swiss Post.",
  },
  {
    q: "Do you also have physical store?",
    a: "No, we don’t have a physical store location at the moment. We accept only orders through our online shop and we’re shipping all orders with the Swiss Post Service.",
  },
  {
    q: "Why do price in shop sometimes change?",
    a: "Many of the magazines that we sell are from far-away countries. Prices depend largely on factors such as the shipping cost, customs duties, and general price changes imposed by our suppliers and the individual publishers.",
  },
  {
    q: "Do i need create an account to make an order?",
    a: "No, you don’t have to create an account. But there are a few advantages if you create an account.",
  },
];

const FAQArea = () => {
  return (
    <section className="w-full flex justify-center mt-[100px] px-[20px] md:px-[30px] lg:px-[30px] xl:max-w-7xl xl:mx-auto">
      <div className="w-full">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center  gap-10 lg:gap-16 mb-20">

          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/images/faq-area.jpg"
              alt="FAQ Image"
              width={550}
              height={400}
              className="rounded-xl object-cover w-full h-auto"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2">
            <h2 className="common_title text-[#0F172A] mb-4">
              Whats in your mind?
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-full md:max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Aliquam
              eget rutrum orci, eu hendrerit arcu. Sed et consectetur diam.
              Ut fringilla egestas lectus, in tincidunt magna porta vitae.
            </p>
          </div>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-5">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="border border-[#49b94e] rounded-xl p-6 md:p-8 shadow-sm bg-white"
            >
              <h3 className="text-[#49b94e] font-semibold text-lg mb-2 leading-snug">
                {f.q}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {f.a}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQArea;
