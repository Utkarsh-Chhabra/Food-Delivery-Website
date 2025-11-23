import React from 'react';
import { Heart, Eye, Star, Clock, Shield, Headphones, Tag, Users, ChefHat, Award, Truck } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-white">
            
            <section className="relative pt-24 pb-16 bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-amber-500/5 via-transparent to-emerald-500/5 pointer-events-none" />
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h1 className="text-5xl lg:text-6xl font-bold text-amber-400 mb-4">About ZestyBite</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">Your trusted partner in delivering delicious food experiences since 2020</p>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-16 bg-gray-900">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-white mb-4">Our Story</h2>
                        <p className="text-xl text-gray-300">From a small dream to your doorstep</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-semibold text-amber-400 mb-4">How It All Started</h3>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                ZestyBite was born from a simple idea: everyone deserves access to delicious, high-quality food without leaving their home. Founded in 2020 by a team of food enthusiasts, we started with just 5 restaurants and a vision to revolutionize food delivery.
                            </p>
                            <p className="text-gray-300 mb-8 leading-relaxed">
                                Today, we partner with over 500 restaurants across the city, serving thousands of happy customers daily. Our commitment to quality, speed, and customer satisfaction has made us the preferred choice for food delivery.
                            </p>

                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-amber-400">500+</div>
                                    <div className="text-gray-400">Restaurant Partners</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-amber-400">10,000+</div>
                                    <div className="text-gray-400">Happy Customers</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-amber-400">50,000+</div>
                                    <div className="text-gray-400">Orders Delivered</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-amber-400">30 min</div>
                                    <div className="text-gray-400">Average Delivery</div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <img
                                src="https://img.freepik.com/free-vector/group-therapy-illustration-concept_52683-45727.jpg"
                                alt="Our Journey"
                                className="w-full rounded-2xl shadow-2xl"
                            />
                            <div className="absolute bottom-4 left-4 bg-gray-900/80 backdrop-blur-md px-4 py-2 rounded-lg">
                                <p className="text-white font-semibold">Our Journey</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 bg-gray-800">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6 rounded-2xl bg-gray-900/50 border border-gray-700">
                            <Heart className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-white mb-3">Our Mission</h3>
                            <p className="text-gray-300">To connect people with the food they love, delivered fresh and fast, while supporting local restaurants and communities.</p>
                        </div>

                        <div className="text-center p-6 rounded-2xl bg-gray-900/50 border border-gray-700">
                            <Eye className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-white mb-3">Our Vision</h3>
                            <p className="text-gray-300">To become the most trusted food delivery platform, known for exceptional service, quality, and innovation in every order.</p>
                        </div>

                        <div className="text-center p-6 rounded-2xl bg-gray-900/50 border border-gray-700">
                            <Star className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-white mb-3">Our Values</h3>
                            <p className="text-gray-300">Quality, reliability, customer satisfaction, and supporting local businesses are at the core of everything we do.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 bg-gray-900">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
                        <p className="text-xl text-gray-300">The passionate people behind ZestyBite</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-6 rounded-2xl bg-gray-800/50 border border-gray-700">
                            <Users className="w-16 h-16 text-amber-400 mx-auto mb-4" />
                            <h4 className="text-lg font-semibold text-white mb-2">Pratham Gupta</h4>
                            <div className="flex justify-center space-x-3">
                                <a href="#" className="text-gray-400 hover:text-amber-400"><i className="fab fa-linkedin"></i></a>
                                <a href="#" className="text-gray-400 hover:text-amber-400"><i className="fab fa-twitter"></i></a>
                            </div>
                        </div>

                        <div className="text-center p-6 rounded-2xl bg-gray-800/50 border border-gray-700">
                            <ChefHat className="w-16 h-16 text-amber-400 mx-auto mb-4" />
                            <h4 className="text-lg font-semibold text-white mb-2">Vansh Garg</h4>
                            <div className="flex justify-center space-x-3">
                                <a href="#" className="text-gray-400 hover:text-amber-400"><i className="fab fa-linkedin"></i></a>
                                <a href="#" className="text-gray-400 hover:text-amber-400"><i className="fab fa-twitter"></i></a>
                            </div>
                        </div>

                        <div className="text-center p-6 rounded-2xl bg-gray-800/50 border border-gray-700">
                            <Award className="w-16 h-16 text-amber-400 mx-auto mb-4" />
                            <h4 className="text-lg font-semibold text-white mb-2">Paras Singla</h4>
                            <div className="flex justify-center space-x-3">
                                <a href="#" className="text-gray-400 hover:text-amber-400"><i className="fab fa-linkedin"></i></a>
                                <a href="#" className="text-gray-400 hover:text-amber-400"><i className="fab fa-twitter"></i></a>
                            </div>
                        </div>

                        <div className="text-center p-6 rounded-2xl bg-gray-800/50 border border-gray-700">
                            <Truck className="w-16 h-16 text-amber-400 mx-auto mb-4" />
                            <h4 className="text-lg font-semibold text-white mb-2">Utkarash Chabhra</h4>
                            <div className="flex justify-center space-x-3">
                                <a href="#" className="text-gray-400 hover:text-amber-400"><i className="fab fa-linkedin"></i></a>
                                <a href="#" className="text-gray-400 hover:text-amber-400"><i className="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 bg-gray-800">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-white mb-4">Why Choose ZestyBite?</h2>
                        <p className="text-xl text-gray-300">We go the extra mile to ensure your satisfaction</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-6 rounded-2xl bg-gray-900/50 border border-gray-700 hover:border-amber-400 transition-colors">
                            <Clock className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                            <h3 className="text-lg font-semibold text-white mb-3">Fast Delivery</h3>
                            <p className="text-gray-300 text-sm">Average delivery time of 30 minutes or less with real-time tracking</p>
                        </div>

                        <div className="text-center p-6 rounded-2xl bg-gray-900/50 border border-gray-700 hover:border-amber-400 transition-colors">
                            <Shield className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                            <h3 className="text-lg font-semibold text-white mb-3">Quality Assured</h3>
                            <p className="text-gray-300 text-sm">Partnered with certified restaurants maintaining highest hygiene standards</p>
                        </div>

                        <div className="text-center p-6 rounded-2xl bg-gray-900/50 border border-gray-700 hover:border-amber-400 transition-colors">
                            <Headphones className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                            <h3 className="text-lg font-semibold text-white mb-3">24/7 Support</h3>
                            <p className="text-gray-300 text-sm">Round-the-clock customer support for any queries or concerns</p>
                        </div>

                        <div className="text-center p-6 rounded-2xl bg-gray-900/50 border border-gray-700 hover:border-amber-400 transition-colors">
                            <Tag className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                            <h3 className="text-lg font-semibold text-white mb-3">Best Prices</h3>
                            <p className="text-gray-300 text-sm">Competitive pricing with regular offers and discounts</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}