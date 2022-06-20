import React from 'react';
import IntegrityImage from '../images/integrity.svg';
import InnovationImage from '../images/innovation.svg';
import CollectiveImage from '../images/collective.svg';
import CuriosityImage from '../images/curiosity.svg';

function CoreValues() {
  return (
    <section id="values" className="core-values relative gray-95">
      <div className="relative max-w-6xl mx-auto px-8 md:px-4 sm:px-6">
        <div className="py-20">

          {/* Section header */}
          <div className="max-w-3xl text-left pb-10">
            <h3 className="text-white h3">Our Core Values</h3>
            {/* <p className="text-xl text-white text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p> */}
          </div>

          {/* Items */}
          <div className="grid sm:gap-6 gap-2 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-6xl">

            {/* 1st item */}
            <div className="relative flex flex-row items-center p-6 pl-0" data-aos="zoom-y-out" data-aos-delay="150" data-aos-anchor="[data-aos-id-values]">

              <img className="relative" src={InnovationImage} width="80" height="80" alt="Innovation" />
              <div className="text-left pl-6 md:pl-10">

              <h4 className="text-xl text-white font-bold leading-snug tracking-tight mb-1">Innovation</h4>
              <p className="dark-secondary-font-color">Our ambition is to solve problems that have never been solved before.</p>
              </div>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-row items-center p-6 pl-0" data-aos="zoom-y-out" data-aos-delay="300" data-aos-anchor="[data-aos-id-values]">
             
              <img className="relative" src={CuriosityImage} width="80" height="80" alt="Curiosity" />
              <div className="text-left pl-6 md:pl-10">

              <h4 className="text-xl text-white font-bold leading-snug tracking-tight mb-1">Curiosity</h4>
              <p className="dark-secondary-font-color">We are self-learners, fulfilled by continuous knowledge acquisition to accelerate innovation.</p>
              </div>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-row items-center p-6 pl-0" data-aos="zoom-y-out" data-aos-delay="450" data-aos-anchor="[data-aos-id-values]">
             
              <img className="relative" src={IntegrityImage} width="80" height="80" alt="Integrity" />
              <div className="text-left pl-6 md:pl-10">

              <h4 className="text-xl text-white font-bold leading-snug tracking-tight mb-1">Integrity</h4>
              <p className="dark-secondary-font-color">We comport ourselves with unwavering ethical integrity, respect, and courtesy.</p>
              </div>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-row items-center p-6 pl-0" data-aos="zoom-y-out" data-aos-delay="600" data-aos-anchor="[data-aos-id-values]">
            
              <img className="relative" src={CollectiveImage} width="80" height="80" alt="Collective" />
              <div className="text-left pl-6 md:pl-10">
                
              <h4 className="text-xl text-white font-bold leading-snug tracking-tight mb-1">Collective Intelligence</h4>
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
