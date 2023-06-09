import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ReviewSection from '../components/ReviewSection';
import FeatuedCandy from '../components/FeatuedCandy';
import FeaturedCrafts from '../components/FeaturedCrafts';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div>
        <Header />
        <Hero />
        <ReviewSection />
        <FeatuedCandy />
        <FeaturedCrafts />
        <Footer />
    </div>
  )
}
