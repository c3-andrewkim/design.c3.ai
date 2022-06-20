import React from 'react';

import Header from '../partials/Header';
import Hero from '../partials/Hero';
import CoreValues from '../partials/CoreValues';
import Blogs from '../partials/Blogs';
import WhatWeMake from '../partials/WhatWeMake';

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
        <Hero />
        
        <WhatWeMake />

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