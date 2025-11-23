import React from 'react';
import Hero from './Hero';
import Offers from './Offers';
import Categories from './Categories';
import About from './About';
import Footer from './Footer';

export default function Home() {
    return (
        <div>
            <Hero />
            <Offers />
            <Categories />
            <About />
        </div>
    );
}
