import React from "react";
import { Utensils } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Hero = () => {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-center min-h-screen bg-gray-900 text-white px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* LEFT SIDE */}
      <div className="relative z-10 flex flex-col justify-center w-full md:w-1/2 py-20 space-y-7 text-center md:text-left lg:ml-20">
        {/* Heading */}
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-amber-400">
            Delicious Food
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mt-2 text-white">
            Delivered to Your Door
          </h2>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-base sm:text-lg max-w-md mx-auto md:mx-0 leading-relaxed">
          Experience the finest flavors from around the world, prepared fresh
          and delivered hot to your doorstep.
        </p>

        {/* Button */}
        <div>
          <button className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold px-6 py-3 rounded-full shadow-[0_0_25px_-5px_#f59e0b] transition duration-300">
            <Utensils strokeWidth={2} className="inline mr-2" size={20} /> Order
            Now
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center md:justify-start gap-8 sm:gap-12 pt-6">
          <div className="text-center md:text-left">
            <p className="text-2xl sm:text-3xl font-bold text-amber-400">
              1000+
            </p>
            <p className="text-gray-400 text-sm sm:text-base">
              Happy Customers
            </p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-2xl sm:text-3xl font-bold text-amber-400">50+</p>
            <p className="text-gray-400 text-sm sm:text-base">Menu Items</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-2xl sm:text-3xl font-bold text-amber-400">24/7</p>
            <p className="text-gray-400 text-sm sm:text-base">Delivery</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: LOTTIE ANIMATION */}
      <div className="w-full sm:h-5 md:w-1/2  lg:h-screen md:h-screen relative mt-8 md:mt-0 flex items-center justify-center">
        <DotLottieReact
          src="/assets/Delivery guy out for delivery.lottie"
          loop
          autoplay
          style={{ width: "100%", height: "400px", maxWidth: "500px" }}
        />
      </div>
    </section>
  );
};

export default Hero;
