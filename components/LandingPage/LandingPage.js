import React from 'react';
import ContactUs from './ContactUs';
import GetStarted from './GetStarted';
import ExampleCode from './ExampleCode';
import WhyHoplite from './WhyHopLite';
import Footer from '../Footer';

export default function LandingPage() {
  return (
    <div>
      <h1 id="landing-title">Welcome to hopLiteJS!</h1>
      <ContactUs />
      <ExampleCode />
      <GetStarted />
      <WhyHoplite />
      <Footer />
    </div>
  )
}