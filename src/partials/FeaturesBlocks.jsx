import React from 'react';
import IntegrityImage from '../images/integrity.svg';
import InnovationImage from '../images/innovation.svg';
import CollectiveImage from '../images/collective.svg';
import CuriosityImage from '../images/curiosity.svg';

function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="dark:text-white h2 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">

              <img className="relative" src={InnovationImage} width="32" height="32" alt="Innovation" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Innovation</h4>
              <p className="text-gray-600 text-center">Our ambition is to solve problems that have never been solved before.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
             
              <img className="relative" src={CuriosityImage} width="32" height="32" alt="Curiosity" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Curiosity</h4>
              <p className="text-gray-600 text-center">We are self-learners, fulfilled by continuous knowledge acquisition to accelerate innovation.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
             
              <img className="relative" src={IntegrityImage} width="32" height="32" alt="Integrity" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Integrity</h4>
              <p className="text-gray-600 text-center">We comport ourselves with unwavering ethical integrity, respect, and courtesy.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            
              <img className="relative" src={CollectiveImage} width="32" height="32" alt="Collective" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Collective Intelligence</h4>
              <p className="text-gray-600 text-center">The respect we have for the intelligence and capabilities of one another fosters boundless collaboration.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
