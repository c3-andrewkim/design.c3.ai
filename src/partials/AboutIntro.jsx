import React from 'react';

// import AboutImage from '../images/about-01.jpg';

function AboutIntro() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="dark:text-white h1 mb-4">C3 AI Design Presents SF Design Week</h1>
            <p className="text-xl text-gray-600">
            Bringing leaders in UX, Data Science and Machine Learning together to discuss the latest trends in Enterprise AI. Join our world class design team, and help create the future of Enterprise AI.
            </p>
          </div>

          <div className="text-center pb-12 md:pb-16">
            
            <div className="max-w-3xl mx-auto">
            
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                {/* <div>
                  <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Start free trial</a>
                </div> */}
                <div>
                  <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">Join Us</a>
                </div>
              </div>
            </div>
          </div>

          {/* <figure className="flex justify-center items-start">
            <img className="rounded shadow-2xl" src={AboutImage} width="768" height="432" alt="About us" />
          </figure> */}

        </div>
      </div>
    </section>
  );
}

export default AboutIntro;