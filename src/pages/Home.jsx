import React from 'react';

import Header from '../partials/Header';
import Intro from '../partials/Intro';
import AboutStory from '../partials/AboutStory';
import Stats from '../partials/Stats';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import News from '../partials/News';

import Team from '../partials/Team';
import Career from '../partials/Career';
// import Process from '../partials/Process';
// import CtaAlternative from '../partials/CtaAlternative';
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
        <div className="max-w-6xl mx-auto text-left md:text-center bg-black-100 px-8 md:px-0 py-32">
          <h3 className="dark:text-white h3 mb-10">What we make</h3>
          <p className="text-xl text-gray-600">C3 AI is a leading enterprise AI software provider for accelerating digital transformation. The proven C3 AI Suite provides comprehensive services to build enterprise-scale AI applications more efficiently and cost-effectively than alternative approaches. The C3 AI Suite supports the value chain in any industry with prebuilt, configurable, high-value AI applications for reliability, fraud detection, sensor network health, supply network optimization, energy management, anti-money laundering, and customer engagement.</p>
        </div>
        </section>
        <FeaturesBlocks />
        <Team />
        <News />

        <Career />
        {/* <Process /> */}
        {/* <CtaAlternative /> */}

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;