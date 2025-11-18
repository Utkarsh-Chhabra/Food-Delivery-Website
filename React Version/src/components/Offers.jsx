import React from 'react';

const offers = [
    {
        badge: '50% OFF',
        title: 'Weekend Special',
        desc: 'Get 50% off on all pizza orders above ₹500',
        validity: 'Valid till Sunday',
        cta: 'Order Now',
        // featured: true,
    },
    {
        badge: 'Buy 1 Get 1',
        title: 'Burger Bonanza',
        desc: 'Buy any burger and get another one absolutely free',
        validity: 'Limited time',
        cta: 'Grab Deal',
    },
    {
        badge: '₹100 OFF',
        title: 'First Order',
        desc: '₹100 off on your first order. No minimum order value',
        validity: 'For new users',
        cta: 'Use Code: FIRST100',
    },
    {
        badge: 'Free Delivery',
        title: 'No Delivery Charges',
        desc: 'Free delivery on orders above ₹300. Valid all day',
        validity: 'Today only',
        cta: 'Order Free',
    },
];

function OfferCard({ item }) {
    return (
        <div className="bg-linear-to-br from-gray-800 via-gray-800 to-gray-700 p-6 rounded-2xl h-full flex flex-col shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all">
            <span className="inline-block bg-amber-500/10 text-amber-300 px-3 py-1 rounded-full text-sm font-semibold mb-3">{item.badge}</span>
            <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-300 flex-1">{item.desc}</p>
            <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-gray-400">{item.validity}</div>
                <button className="ml-4 inline-flex items-center bg-amber-400 text-gray-900 font-semibold px-4 py-2 rounded-full shadow hover:scale-105 transition focus:outline-none focus:ring-2 focus:ring-amber-300">
                    {item.cta}
                </button>
            </div>
        </div>
    );
}

export default function OffersSection() {
    return (
        <section className="offers-section py-12">
            <div className="container px-6">
                <div className="text-center mb-8">
                    <h2 className="font-bold text-amber-400 text-5xl mb-1">Special Offers</h2>
                    <p className="section-subtitle text-gray-400">Don't miss out on our amazing deals and discounts</p>
                </div>

                <div className="flex flex-wrap -mx-3">
                    {offers.map((o, i) => {
                        const colClass = o.featured ? 'px-3 w-full sm:w-1/2 lg:w-1/2 mb-6' : 'px-3 w-full sm:w-1/2 lg:w-1/4 mb-6';
                        return (
                            <div key={o.title + i} className={colClass}>
                                <OfferCard item={o} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
