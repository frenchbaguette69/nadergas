import React from 'react';
import Google from "@/assets/google.png"
import Image from 'next/image';

type Review = {
  name: string;
  location: string;
  review: string;
  rating: number;
};

const reviews: Review[] = [
  {
    name: 'Jan de Wit',
    location: 'Rotterdam',
    review: 'Goed werk geleverd, zeer tevreden en goed tarief.',
    rating: 5,
  },
  {
    name: 'Maria Jansen',
    location: 'Utrecht',
    review: 'Het resultaat was uitstekend en de prijs was eerlijk. Aanrader!',
    rating: 5,
  },
  {
    name: 'Pieter van Leeuwen',
    location: 'Den Haag',
    review: 'Zeer tevreden met de service. Het werk was snel en netjes uitgevoerd.',
    rating: 5,
  },
];

const ReviewCard: React.FC<Review> = ({ name, location, review, rating }) => (
  <div className="p-4 bg-white rounded-lg shadow-lg">
    <h3 className="text-lg font-semibold">{name}</h3>
    <p className="text-green-600 font-medium">{location}</p>
    <p className="mt-2 text-gray-600">{review}</p>
    <div className="mt-4 flex items-center justify-between">
      <span className="text-yellow-400 text-4xl">
        {'★'.repeat(rating)}
        {'☆'.repeat(5 - rating)}
      </span>
      <Image src={Google} alt='reviews stukadoor reviews tegezetter' height={30} width={30} />
    </div>
  </div>
);

const ReviewsSection: React.FC = () => (
  <section className="py-12">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold text-center text-green-600 mb-4">
        Hoe klanten onze diensten hebben ervaren.
      </h2>
      <p className="text-center text-gray-600 mb-12">
        Wij zijn trots op het vertrouwen van onze klanten en dankbaar voor hun positieve ervaringen. Lees hieronder hoe zij onze service hebben ervaren!
      </p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
