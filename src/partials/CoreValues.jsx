import React from 'react';
import IntegrityImage from '../images/integrity.svg';
import InnovationImage from '../images/innovation.svg';
import CollectiveImage from '../images/collective.svg';
import CuriosityImage from '../images/curiosity.svg';

function CoreValues() {
  return (
    <section className="relative gray-95">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      {/* <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div> */}
      {/* <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div> */}

      <div className="relative max-w-6xl mx-auto px-8 md:px-4 sm:px-6">
        <div className="py-20">

          {/* Section header */}
          <div className="max-w-3xl text-left pb-10">
            <h3 className="dark:text-white h3">Our core values</h3>
            {/* <p className="text-xl dark:text-white text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p> */}
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-6xl">

            {/* 1st item */}
            <div className="relative flex flex-row items-center p-6 pl-0" data-aos="zoom-y-out" data-aos-delay="150" data-aos-anchor="[data-aos-id-values]">

              <img className="relative" src={InnovationImage} width="80" height="80" alt="Innovation" />
              <div className="text-left pl-6 md:pl-10">

              <h4 className="text-xl dark:text-white font-bold leading-snug tracking-tight mb-1">Innovation</h4>
              <p className="dark-secondary-font-color">Our ambition is to solve problems that have never been solved before.</p>
              </div>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-row items-center p-6 pl-0" data-aos="zoom-y-out" data-aos-delay="300" data-aos-anchor="[data-aos-id-values]">
             
              <img className="relative" src={CuriosityImage} width="80" height="80" alt="Curiosity" />
              <div className="text-left pl-6 md:pl-10">

              <h4 className="text-xl dark:text-white font-bold leading-snug tracking-tight mb-1">Curiosity</h4>
              <p className="dark-secondary-font-color">We are self-learners, fulfilled by continuous knowledge acquisition to accelerate innovation.</p>
              </div>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-row items-center p-6 pl-0" data-aos="zoom-y-out" data-aos-delay="450" data-aos-anchor="[data-aos-id-values]">
             
              <img className="relative" src={IntegrityImage} width="80" height="80" alt="Integrity" />
              <div className="text-left pl-6 md:pl-10">

              <h4 className="text-xl dark:text-white font-bold leading-snug tracking-tight mb-1">Integrity</h4>
              <p className="dark-secondary-font-color">We comport ourselves with unwavering ethical integrity, respect, and courtesy.</p>
              </div>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-row items-center p-6 pl-0" data-aos="zoom-y-out" data-aos-delay="600" data-aos-anchor="[data-aos-id-values]">
            
              <img className="relative" src={CollectiveImage} width="80" height="80" alt="Collective" />
              <div className="text-left pl-6 md:pl-10">
                
              <h4 className="text-xl dark:text-white font-bold leading-snug tracking-tight mb-1">Collective Intelligence</h4>
              <p className="dark-secondary-font-color">The respect we have for the intelligence and capabilities of one another fosters boundless collaboration.</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default CoreValues;
