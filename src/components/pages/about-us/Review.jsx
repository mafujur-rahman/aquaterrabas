import React from 'react';
import Image from 'next/image';

const Star = ({ filled }) => (
    <span className={`text-xl ${filled ? 'text-yellow-500' : 'text-gray-300'}`}>
        ★
    </span>
);

const StarRating = ({ rating }) => {
    const stars = Array(5).fill(0).map((_, index) => (
        <Star key={index} filled={index < rating} />
    ));
    return (
        <div className="flex justify-center my-2 text-xl">
            {stars}
        </div>
    );
};

export function Review() {
    return (
        <div className="max-w-7xl mx-auto py-16 px-4 text-center">
            <h2 className="text-5xl font-bold">
                Our Review
            </h2>
            <p className="text-base text-gray-600 mt-4 max-w-6xl mx-auto leading-relaxed px-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
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
        <div className="bg-white rounded-xl p-8 shadow-xl transition duration-300 ease-in-out hover:shadow-2xl">
            <div className="relative inline-block">
                <div className="w-24 h-24 rounded-full mx-auto border-4 border-white ring-4 ring-[#49b94e] overflow-hidden">
                    <Image
                        src={img}
                        alt={name}
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>

            <h3 className="mt-6 text-xl font-bold text-gray-800">
                {name}
            </h3>
            <p className="text-lg font-medium text-[#49b94e] mt-1">
                {role}
            </p>

            <StarRating rating={rating} />

            <p className="text-lg text-gray-600 mt-4 leading-relaxed px-2">
                {reviewText}
            </p>
        </div>
    );
}