import React from 'react';

function Intro() {
  return (
    <section style={{backgroundColor: "rgba(0,0,0,0.8)"}}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16 h-max">
            <h1 className="dark:text-white h1 mb-4">C3 AI Design Presents SF Design Week</h1>
            <p className="text-xl text-gray-600">
            Bringing leaders in UX, Data Science and Machine Learning together to discuss the latest trends in Enterprise AI. Join our world class design team, and help create the future of Enterprise AI.
            </p>
          </div>

          <div className="text-center pb-12 md:pb-16">
            
            <div className="max-w-3xl mx-auto">
            
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">

                <div>
                  <a className="btn text-white dark:text-black font-bold bg-gray-900 bg-white hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="https://sfdesignweek.org/event/design-for-ai/">Join Us</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Intro;