import React from 'react';

export default function Offers() {
    return (
        <section className="offers-section py-12">
            <div className="container px-6">
                <div className="text-center mb-8">
                    <h2 className="font-bold text-amber-400 text-5xl mb-1">Special Offers</h2>
                    <p className="section-subtitle text-gray-400">Don't miss out on our amazing deals and discounts</p>
                </div>

                <div className="flex flex-wrap gap-6 justify-center">
                    <div className="offer-card featured bg-gray-800 p-6 rounded-lg w-full sm:w-1/2 lg:w-1/2">
                        <div className="offer-badge text-amber-400 font-semibold mb-3">50% OFF</div>
                        <h3 className="text-xl font-semibold text-white">Weekend Special</h3>
                        <p className="text-gray-400">Get 50% off on all pizza orders above ₹500</p>
                        <div className="offer-validity text-sm text-gray-500 mt-3">Valid till Sunday</div>
                        <button className="mt-4 w-full md:w-auto text-green-400 font-bold hover:text-green-200 transition-all border border-green-400 p-2 rounded-2xl hover:border-none hover:bg-green-800">Order Now</button>
                    </div>
                    <div className="offer-card bg-gray-800 p-6 rounded-lg w-full sm:w-1/2 lg:w-1/4">
                        <div className="offer-badge text-amber-400 font-semibold mb-3">Buy 1 Get 1</div>
                        <h3 className="text-xl font-semibold text-white">Burger Bonanza</h3>
                        <p className="text-gray-400">Buy any burger and get another one absolutely free</p>
                        <div className="offer-validity text-sm text-gray-500 mt-3">Limited time</div>
                        <button className="mt-4 w-full md:w-auto text-green-400 font-bold hover:text-green-200 transition-all border border-green-400 p-2 rounded-2xl hover:border-none hover:bg-green-800">Grab Deal</button>
                    </div>
                    <div className="offer-card bg-gray-800 p-6 rounded-lg w-full sm:w-1/2 lg:w-1/4">
                        <div className="offer-badge text-amber-400 font-semibold mb-3">₹100 OFF</div>
                        <h3 className="text-xl font-semibold text-white">First Order</h3>
                        <p className="text-gray-400">₹100 off on your first order. No minimum order value</p>
                        <div className="offer-validity text-sm text-gray-500 mt-3">For new users</div>
                        <button className="mt-4 w-full md:w-auto text-green-400 font-bold hover:text-green-200 transition-all border border-green-400 p-2 rounded-2xl hover:border-none hover:bg-green-800">Use Code: FIRST100</button>
                    </div>
                    <div className="offer-card bg-gray-800 p-6 rounded-lg w-full sm:w-1/2 lg:w-1/4">
                        <div className="offer-badge text-amber-400 font-semibold mb-3">Free Delivery</div>
                        <h3 className="text-xl font-semibold text-white">No Delivery Charges</h3>
                        <p className="text-gray-400">Free delivery on orders above ₹300. Valid all day</p>
                        <div className="offer-validity text-sm text-gray-500 mt-3">Today only</div>
                        <button className="mt-4 w-full md:w-auto text-green-400 font-bold hover:text-green-200 transition-all border border-green-400 p-2 rounded-2xl hover:border-none hover:bg-green-800">Order Free</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
