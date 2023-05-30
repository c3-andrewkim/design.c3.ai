import React from 'react';

function Hero() {
  return (
    <section id="hero-section">
      <div className="max-w-6xl mx-auto px-8 md:px-4 h-full">
        <div id="hero-container" className="pt-32 md:pt-40 md:pb-20 flex flex-col justify-center m-auto h-full">

          {/* Section header */}
          <div className="max-w-3xl h-full mx-auto text-center pb-12 h-max">
            {/* <p className="hero-date dark-secondary-font-color font-bold uppercase mb-6">June 24, 2023</p> */}
            <h1 className="text-white h1 mb-4">Designing the Future of <br></br>Digital Transformation and <br></br> Enterprise AI</h1>
            <p className="md:text-xl text-md text-white">
            {/* Bringing leaders in UX, Data Science and Machine Learning together to discuss the latest trends in Enterprise AI. Join our world class design team, and help create the future of Enterprise AI. */}
            At C3 AI, Product Designers drive innovation at the frontier of Enterprise AI. Working closely with our customers, we develop powerful AI-based tools and applications that have the potential to change the world. 
            </p>
          </div>

          <div className="text-center pb-12 md:pb-16">
            
            <div className="max-w-3xl mx-auto">
            
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">

                <div>
                  {/* <a className="main-cta btn text-black font-bold bg-white w-full" href="https://sfdesignweek.org/event/design-for-ai/" target="_blank" rel="noopener noreferrer">Join Us</a> */}
                  <a className="main-cta btn text-black font-bold bg-white w-full" href="#career">Join Our Team</a>
                </div>
                
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;