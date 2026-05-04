import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { testimonials } from "../../data/homeData";

interface Testimonial {
  id: number;
  text: string;
  author: {
    name: string;
    date: string;
    initials: string;
    color: string;
  };
  rating: number;
}

const ClientTestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 640) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Calculate average rating
  const averageRating = (
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length
  ).toFixed(1);

  const getVisibleTestimonials = () => {
    const items = [];
    for (let i = 0; i < itemsPerView; i++) {
      items.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return items;
  };

  return (
    <section className="relative z-10 bg-gradient-to-b from-gray-50 to-white px-4 py-16 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
            Client Testimonials
          </p>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            What Our <span className="text-blue-600">Clients Say</span>
          </h2>
          <p className="mb-6 text-gray-600">
            Real feedback from companies and partners who've experienced our
            solutions first-hand.
          </p>

          {/* Rating Summary */}
          <div className="flex items-center justify-center gap-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.round(parseFloat(averageRating))
                      ? "fill-yellow-400 text-yellow-400"
                      : "fill-gray-300 text-gray-300"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-medium text-gray-700">
              {averageRating} average from {testimonials.length} reviews
            </span>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative mb-8">
          <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {getVisibleTestimonials().map((testimonial: Testimonial) => (
              <div
                key={testimonial.id}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-blue-300"
              >
                {/* Quote Icon */}
                <div className="mb-4 text-blue-600">
                  <MessageCircle className="h-6 w-6" />
                </div>

                {/* Testimonial Text */}
                <p className="mb-6 text-gray-700">{testimonial.text}</p>

                {/* Author & Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full text-white font-semibold text-sm ${testimonial.author.color}`}
                    >
                      {testimonial.author.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {testimonial.author.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {testimonial.author.date}
                      </p>
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-gray-300 text-gray-300"
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 rounded-full bg-blue-600 p-2 text-white transition hover:bg-blue-700 lg:-translate-x-16"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 rounded-full bg-blue-600 p-2 text-white transition hover:bg-blue-700 lg:translate-x-16"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Carousel Dots */}
        <div className="mb-8 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition ${
                index === currentIndex
                  ? "w-8 bg-blue-600"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="#feedback-form"
            className="inline-flex items-center gap-2 rounded-full border border-blue-600 px-6 py-2.5 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
          >
            <MessageCircle className="h-4 w-4" />
            Share Your Experience
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonialsSection;
