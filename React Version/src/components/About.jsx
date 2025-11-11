import React from 'react';

export default function About() {
    return (
        <section className="py-12">
            <div className="container mx-auto px-6">
                <div className="flex sm:flex-col gap-8 lg:grid-cols-2 items-center">
                    <div className="about-text">
                        <h2 className="text-3xl font-bold text-white mb-4">Why Choose ZestyBite?</h2>
                        <div className='flex flex-col sm:flex-row items-start sm:items-center gap-6'>
                                <img
                                    className="rounded-2xl mx-0 sm:mx-4 lg:w-3xl lg:min-h-80 sm:w-56 h-48 sm:h-56 object-contain"
                                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80"
                                alt="Professional kitchen with chefs preparing food"
                                loading="lazy"
                            />
                            <div className="features gap-1 flex-1">
                                <p className="text-gray-400 mb-4">We're passionate about delivering exceptional food experiences right to your doorstep. With fresh ingredients, expert chefs, and lightning-fast delivery, we make every meal memorable.</p>
                                <div className="feature p-4 rounded flex gap-7">
                                    <div className='bg-gray-800 p-3 rounded-2xl'>
                                        <h4 className="text-white font-semibold">Fast Delivery</h4>
                                        <p className="text-gray-400 text-sm">30 minutes or less</p>
                                    </div>
                                    <div className='bg-gray-800 p-3 rounded-2xl'>
                                        <h4 className="text-white font-semibold">Fresh Ingredients</h4>
                                        <p className="text-gray-400 text-sm">Sourced daily</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
