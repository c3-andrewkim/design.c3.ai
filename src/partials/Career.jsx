import React from 'react';

import arrowright from '../images/arrow-right.svg';


function Career() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          {/* <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4 dark:text-white">C3 is growing. Grow with us.</h2>
            <p className="text-xl text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.
                </p>
          </div> */}

          {/* Team images */}
          {/* <div className="max-w-3xl mx-auto">
            <div className="pb-12 md:pb-20">
              <div className="relative w-full h-0 pb-3/4">
                <figure className="absolute h-auto" style={{ bottom: '9%', width: '41.7%', maxWidth: '320px' }} data-aos="fade-right">
                  <img className="shadow-2xl" src={TeamImage03} width="320" height="240" alt="Team mosaic 03" />
                </figure>
                <figure className="absolute" style={{ left: '14.8%', top: '11.8%', width: '70.3%', maxWidth: '540px' }} data-aos="fade-down" data-aos-delay="150">
                  <img className="shadow-2xl" src={TeamImage01} width="540" height="360" alt="Team mosaic 01" />
                </figure>
                <figure className="absolute h-auto" style={{ bottom: '0', right: '6.2%', width: '41.7%', maxWidth: '320px' }} data-aos="fade-left" data-aos-delay="300">
                  <img className="shadow-2xl" src={TeamImage02} width="320" height="240" alt="Team mosaic 02" />
                </figure>
                <figure className="absolute h-auto" style={{ top: '5.9%', right: '0', width: '23.4%', maxWidth: '180px' }} data-aos="zoom-y-out" data-aos-delay="450">
                  <img className="shadow-2xl" src={TeamImage04} width="180" height="180" alt="Team mosaic 04" />
                </figure>
                <svg className="relative mx-auto h-auto rounded-full shadow-2xl" style={{ width: '10.4%' }} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="header-logo">
                      <stop stopColor="#4FD1C5" offset="0%" />
                      <stop stopColor="#81E6D9" offset="25.871%" />
                      <stop stopColor="#338CF5" offset="100%" />
                    </radialGradient>
                  </defs>
                  <rect width="32" height="32" rx="16" fill="url(#header-logo)" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div> */}

          {/* Job list */}
          <div className="">

            <h3 className="h4 mb-8 dark:text-white">Current Openings</h3>
            <p className='dark:text-white'>Join our world class design team and help shape the future of Enterprise AI…</p>

            <div className="my-6 mt-20 grid gap-20 md:grid-cols-3 lg:grid-cols-3">

              <div>
                <p className='dark:text-gray-500 font-bold text-sm mb-6'>PRODUCT DESIGN</p>
                {/* 1st Item */}
              <a className="flex justify-between mb-6 transition duration-300 ease-in-out dark:text-white mb-3" href="https://c3.ai/job-description/?gh_jid=6093878002">
                <div className="font-medium">Director, AI Product Innovation</div>
                <img src={arrowright} alt="right arrow" />
              </a>
           
              {/* 1st Item */}
              <a className="flex justify-between mb-6 transition duration-300 ease-in-out dark:text-white mb-3" href="https://c3.ai/job-description/?gh_jid=6036960002">
                <div className="font-medium">Manager, Product Design</div>
                <img src={arrowright} alt="right arrow" />
              </a>
              {/* 1st Item */}
              <a className="flex justify-between mb-6 transition duration-300 ease-in-out dark:text-white mb-3" href="https://c3.ai/job-description/?gh_jid=5033860002">
                <div className="font-medium">Lead Product Designer</div>
                <img src={arrowright} alt="right arrow" />
              </a>
              {/* 1st Item */}
              <a className="flex justify-between mb-6 transition duration-300 ease-in-out dark:text-white mb-3" href="https://c3.ai/job-description/?gh_jid=6093935002">
                <div className="font-medium">Senior Product Designer, C3 AI CRM</div>
                <img src={arrowright} alt="right arrow" />
              </a>
              {/* 1st Item */}
              <a className="flex justify-between mb-6 transition duration-300 ease-in-out dark:text-white mb-3" href="https://c3.ai/job-description/?gh_jid=6093939002">
                <div className="font-medium">Senior Product Designer, C3 AI Studio</div>
                <img src={arrowright} alt="right arrow" />
              </a>
              {/* 1st Item */}
              <a className="flex justify-between mb-6 transition duration-300 ease-in-out dark:text-white mb-3" href="https://c3.ai/job-description/?gh_jid=5033850002">
                <div className="font-medium">Senior Product Designer</div>
                <img src={arrowright} alt="right arrow" />
              </a>
              {/* 1st Item */}
              <a className="flex justify-between mb-6 transition duration-300 ease-in-out dark:text-white mb-3" href="https://c3.ai/job-description/?gh_jid=5029238002">
                <div className="font-medium">Product Designer</div>
                <img src={arrowright} alt="right arrow" />
              </a>
              {/* 1st Item */}
              <a className="flex justify-between mb-6 transition duration-300 ease-in-out dark:text-white mb-3" href="https://c3.ai/job-description/?gh_jid=5991077002">
                <div className="font-medium">Product Designer, Intelligence and Defense </div>
                <img src={arrowright} alt="right arrow" />
              </a>
              </div>
              
              <div>
                <p className='dark:text-gray-500 font-bold text-sm mb-6'>DESIGN SYSTEM</p>
              
              {/* 1st Item */}
              <a className="flex justify-between mb-6 transition duration-300 ease-in-out dark:text-white mb-3" href="https://c3.ai/job-description/?gh_jid=5627079002">
                <div className="font-medium">Product Manager, Design Systems</div>
                <img src={arrowright} alt="right arrow" />
              </a>
              {/* 1st Item */}
              <a className="flex justify-between mb-6 transition duration-300 ease-in-out dark:text-white mb-3" href="https://c3.ai/job-description/?gh_jid=5596108002">
                <div className="font-medium">Lead Product Designer, Design Systems</div>
                <img src={arrowright} alt="right arrow" />
              </a>
              {/* 1st Item */}
              <a className="flex justify-between mb-6 transition duration-300 ease-in-out dark:text-white mb-3" href="https://c3.ai/job-description/?gh_jid=5596222002">
                <div className="font-medium">Senior Product Designer, Design Systems</div>
                <img src={arrowright} alt="right arrow" />
              </a>
              {/* 1st Item */}
              <a className="flex justify-between mb-6 transition duration-300 ease-in-out dark:text-white mb-3" href="https://c3.ai/job-description/?gh_jid=6037070002">
                <div className="font-medium">Senior Product Designer, Visual Design</div>
                <img src={arrowright} alt="right arrow" />
              </a>
              {/* 1st Item */}
              <a className="flex justify-between mb-6 transition duration-300 ease-in-out dark:text-white mb-3" href="https://c3.ai/job-description/?gh_jid=5625759002">
                <div className="font-medium">Product Designer, Design Systems</div>
                <img src={arrowright} alt="right arrow" />
              </a>
              {/* 1st Item */}
              <a className="flex justify-between mb-6 transition duration-300 ease-in-out dark:text-white mb-3" href="https://c3.ai/job-description/?gh_jid=5596178002">
                <div className="font-medium">Lead Front-End Engineer, Design Systems</div>
                <img src={arrowright} alt="right arrow" />
              </a>
              {/* 1st Item */}
              <a className="flex justify-between mb-6 transition duration-300 ease-in-out dark:text-white mb-3" href="https://c3.ai/job-description/?gh_jid=5596242002">
                <div className="font-medium">Senior Front-End Engineer, Design Systems</div>
                <img src={arrowright} alt="right arrow" />
              </a>
              {/* 1st Item */}
              <a className="flex justify-between mb-6 transition duration-300 ease-in-out dark:text-white mb-3" href="https://c3.ai/job-description/?gh_jid=5545901002">
                <div className="font-medium">Front-End Engineer, Design Systems</div>
                <img src={arrowright} alt="right arrow" />
              </a>
              </div>

              <div>
                <p className='dark:text-gray-500 font-bold text-sm mb-6'>RESEARCH</p>
                   {/* 1st Item */}
              <a className="flex justify-between mb-6 transition duration-300 ease-in-out dark:text-white mb-3" href="https://c3.ai/job-description/?gh_jid=6093903002">
                <div className="font-medium">Manager, UX Researcher</div>
                <img src={arrowright} alt="right arrow" />
              </a>
              {/* 1st Item */}
              <a className="flex justify-between mb-6 transition duration-300 ease-in-out dark:text-white mb-3" href="https://c3.ai/job-description/?gh_jid=6093900002">
                <div className="font-medium">Lead UX Researcher</div>
                <img src={arrowright} alt="right arrow" />
              </a>
              {/* 1st Item */}
              <a className="flex justify-between mb-6 transition duration-300 ease-in-out dark:text-white mb-3" href="https://c3.ai/job-description/?gh_jid=6093941002">
                <div className="font-medium">Senior UX Researcher</div>
                <img src={arrowright} alt="right arrow" />
              </a>
              {/* 1st Item */}
              <a className="flex justify-between mb-6 transition duration-300 ease-in-out dark:text-white mb-3" href="https://c3.ai/job-description/?gh_jid=5904643002">
                <div className="font-medium">UX Researcher</div>
                <img src={arrowright} alt="right arrow" />
              </a>
              </div>
              </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Career;