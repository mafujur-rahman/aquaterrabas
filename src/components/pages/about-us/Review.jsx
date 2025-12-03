import React from 'react';
import Image from 'next/image';

const Star = ({ filled }) => (
    <span className={`text-lg sm:text-xl ${filled ? 'text-yellow-500' : 'text-gray-300'}`}>
        ★
    </span>
);

const StarRating = ({ rating }) => {
    const stars = Array(5).fill(0).map((_, index) => (
        <Star key={index} filled={index < rating} />
    ));
    return (
        <div className="flex justify-center my-2">
            {stars}
        </div>
    );
};

export function Review() {
    return (
        <div className="px-[20px] md:px-[30px] lg:px-[30px] xl:max-w-7xl xl:mx-auto mt-[100px] text-center">
            
            {/* Heading */}
            <h2 className="common_title">
                Our Review
            </h2>

            {/* Subtext */}
            <p className="text-sm sm:text-base text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 lg:gap-6 mt-12">
                <ReviewCard
                    name="Donna Yen"
                    role="Freelancer"
                    img="/images/person.jpg"
                    rating={5}
                    reviewText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus."
                />
                <ReviewCard
                    name="Alec Misko"
                    role="Freelancer"
                    img="/images/allec.jpg"
                    rating={5}
                    reviewText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus."
                />
                <ReviewCard
                    name="Tom Hans"
                    role="Freelancer"
                    img="/images/tom.jpg"
                    rating={5}
                    reviewText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus."
                />
            </div>
        </div>
    );
}

function ReviewCard({ img, name, role, rating, reviewText }) {
    return (
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-2xl transition duration-300 ease-in-out">
            
            {/* Image */}
            <div className="w-24 h-24 mx-auto rounded-full border-4 border-white ring-4 ring-[#49b94e] overflow-hidden">
                <Image
                    src={img}
                    alt={name}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                />
            </div>

            {/* Name */}
            <h3 className="mt-6 text-lg sm:text-xl font-bold text-gray-800">
                {name}
            </h3>

            {/* Role */}
            <p className="text-base font-medium text-[#49b94e] mt-1">
                {role}
            </p>

            {/* Star Rating */}
            <StarRating rating={rating} />

            {/* Review Text */}
            <p className="text-sm sm:text-base text-gray-600 mt-4 leading-relaxed px-1 sm:px-3">
                {reviewText}
            </p>
        </div>
    );
}
