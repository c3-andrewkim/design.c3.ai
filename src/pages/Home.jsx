import React from 'react';

import Header from '../partials/Header';
import Intro from '../partials/Intro';
import CoreValues from '../partials/CoreValues';
import Blogs from '../partials/Blogs';

import Team from '../partials/Team';
import Career from '../partials/Career';
import Footer from '../partials/Footer';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
    
        {/*  Page sections */}
        <Intro />
        
        <section className="gray-100">
        <div className="max-w-4xl mx-auto text-left md:text-center bg-black-100 px-8 lg:px-0 py-32">
          <h3 className="text-white h3 mb-10">What We Make</h3>
          <p className="text-lg text-white">C3 AI is a leading enterprise AI software provider for accelerating digital transformation. The proven C3 AI Suite provides comprehensive services to build enterprise-scale AI applications more efficiently and cost-effectively than alternative approaches. The C3 AI Suite supports the value chain in any industry with prebuilt, configurable, high-value AI applications for reliability, fraud detection, sensor network health, supply network optimization, energy management, anti-money laundering, and customer engagement.</p>
        </div>
        </section>

        <CoreValues />

        <Team />

        <Blogs />

        <Career />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;