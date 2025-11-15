
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import GetStarted from './components/GetStarted';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white flex flex-col items-center antialiased w-full overflow-x-hidden">
      <Header />
      <main className="w-full">
        <Hero />
        <GetStarted />
        <AboutUs />
        <Services />
        <FAQ />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default App;
