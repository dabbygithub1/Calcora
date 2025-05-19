import { useEffect } from 'react';
import Header from 'C:/ProjectWeb/calcora/src/components/Header/Header';
import Hero from 'C:/ProjectWeb/calcora/src/components/Hero/Hero';
import HowItWorks from 'C:/ProjectWeb/calcora/src/components/HowItWorks/HowItWorks';
import Features from 'C:/ProjectWeb/calcora/src/components/Features/Features';
import CallToAction from 'C:/ProjectWeb/calcora/src/components/CallToAction/CallToAction';
import Footer from 'C:/ProjectWeb/calcora/src/components/Footer/Footer';
import './HomePage.css';

const HomePage = () => {
  useEffect(() => {
    // Update document title
    document.title = 'Calcora - Умный расчёт зарплаты';
  }, []);

  return (
    <div className="home-page">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;