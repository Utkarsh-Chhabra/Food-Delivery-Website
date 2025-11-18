import React from 'react';
import { Clock, Leaf, Truck, Star } from 'lucide-react';

export default function About() {
    return (
        <section className="py-16 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="grid gap-12 lg:grid-cols-2 items-center">

                    {/* Image */}
                    <div className="order-2 lg:order-1">
                        <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-800">
                            <img
                                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80"
                                alt="Professional kitchen with chefs preparing food"
                                className="w-full h-72 md:h-96 object-cover"
                                loading="lazy"
                            />
                        </div>
                        <div className="mt-4 flex gap-4">
                            <div className="flex-1 rounded-2xl bg-gray-800/60 backdrop-blur-sm p-4 border border-gray-700">
                                <p className="text-2xl font-bold text-amber-400">500+</p>
                                <p className="text-gray-400">Restaurant Partners</p>
                            </div>
                            <div className="flex-1 rounded-2xl bg-gray-800/60 backdrop-blur-sm p-4 border border-gray-700">
                                <p className="text-2xl font-bold text-amber-400">10,000+</p>
                                <p className="text-gray-400">Happy Customers</p>
                            </div>
                        </div>
                    </div>

                    {/* Text */}
                    <div className="order-1 lg:order-2">
                        <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 font-semibold mb-4">Since 2010</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">Why Choose <span className="text-amber-400">ZestyBite</span>?</h2>
                        <p className="text-gray-300 text-lg mb-6">We're passionate about delivering exceptional food experiences right to your doorstep. With fresh ingredients, expert chefs, and lightning-fast delivery, we make every meal memorable.</p>

                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-800/40 border border-gray-700">
                                <div className="p-3 rounded-lg bg-gray-900/40">
                                    <Clock className="w-6 h-6 text-amber-400" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Fast Delivery</h4>
                                    <p className="text-gray-400 text-sm">30 minutes or less</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-800/40 border border-gray-700">
                                <div className="p-3 rounded-lg bg-gray-900/40">
                                    <Leaf className="w-6 h-6 text-amber-400" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Fresh Ingredients</h4>
                                    <p className="text-gray-400 text-sm">Sourced daily from trusted farms</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-800/40 border border-gray-700">
                                <div className="p-3 rounded-lg bg-gray-900/40">
                                    <Truck className="w-6 h-6 text-amber-400" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Reliable Delivery</h4>
                                    <p className="text-gray-400 text-sm">Real-time tracking & contactless drop-off</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-800/40 border border-gray-700">
                                <div className="p-3 rounded-lg bg-gray-900/40">
                                    <Star className="w-6 h-6 text-amber-400" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Quality Assured</h4>
                                    <p className="text-gray-400 text-sm">Top chefs and strict hygiene standards</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
