import React from 'react';
import introducing from '../images/introducing.webp';
import howto from '../images/howto.webp';

function Blogs() {
  return (
    <section id="blogs" className='blogs gray-95 relative'>
      <div className="max-w-6xl mx-auto px-8 md:px-4">
        <div className="py-12 md:py-20">

        <div className="max-w-3xl text-left pb-16">
            <h3 className="text-white h3">Blogs</h3>
          </div>

          {/* Articles list */}
          <div className="max-w-sm md:max-w-none">
            <div className="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">

              {/* 1st article */}
              <article className="flex flex-col h-full" data-aos="zoom-y-out">
                <header>
                  <a target="_blank" rel="noopener noreferrer" href="https://medium.com/c3-ai-design/intro-to-c3-ai-design-blog-series-fff7fd0c78b6" className="block mb-6">
                    <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0">
                      <img className="aspect-video absolute w-full h-full transform hover:-translate-y-1 transition duration-700 ease-out" src={introducing} width="352" height="198" alt="News 01" />
                    </figure>
                  </a>
                  {/* <div className="mb-3">
                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                      <li className="m-1">
                        <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">Case studies</a>
                      </li>
                      <li className="m-1">
                        <a className="inline-flex text-center text-gray-800 py-1 px-3 rounded-full bg-white hover:bg-gray-100 shadow-sm transition duration-150 ease-in-out" href="#0">Hubspot</a>
                      </li>
                    </ul>
                  </div> */}
                  <span className='font-bold dark-secondary-font-color text-xs'>February 3, 2022</span>
                  <h3 className="text-xl font-bold leading-snug tracking-tight">
                    <a target="_blank" rel="noopener noreferrer" href="https://medium.com/c3-ai-design/intro-to-c3-ai-design-blog-series-fff7fd0c78b6" className="hover:underline text-white">Intro to AI design blog series</a>
                  </h3>
                </header>
                {/* <footer className="text-sm flex items-center mt-4">
                  <div className="flex shrink-0 mr-3">
                    <a className="relative" href="#0">
                      <span className="absolute inset-0 -m-px" aria-hidden="true"><span className="absolute inset-0 -m-px bg-white rounded-full"></span></span>
                      <img className="relative rounded-full" src={NewsAuthor01} width="32" height="32" alt="Author 01" />
                    </a>
                  </div>
                  <div>
                    <span className="text-gray-600">By </span>
                    <a className="font-medium hover:underline dark-secondary-font-color" href="#0">Artificial Intelligence</a>
                  </div>
                </footer> */}
              </article>

              {/* 2nd article */}
              <article className="flex flex-col h-full" data-aos="zoom-y-out">
                <header>
                  <a target="_blank" rel="noopener noreferrer" href="https://developer.c3.ai/blog/design-blog-series/how-design-platforms-improve-engagement-ai-beginners" className="block mb-6">
                    <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0">
                      <img className="aspect-video absolute w-full h-full transform hover:-translate-y-1 transition duration-700 ease-out" src={howto} width="352" height="198" alt="How to article thumbnail" />
                    </figure>
                  </a>
                  <span className='font-bold dark-secondary-font-color text-xs'>August 8, 2022</span>
                  <h3 className="text-xl font-bold leading-snug tracking-tight">
                    <a target="_blank" rel="noopener noreferrer" href="https://developer.c3.ai/blog/design-blog-series/how-design-platforms-improve-engagement-ai-beginners" className="hover:underline text-white">How to Design Platforms that Improve Engagement with AI Beginners</a>
                  </h3>
                </header>
              </article>

              {/* 3rd article */}
              {/* <article className="flex flex-col h-full" data-aos="zoom-y-out">
                <header>
                  <a target="_blank" rel="noopener noreferrer" href="https://medium.com/c3-ai-design/intro-to-c3-ai-design-blog-series-fff7fd0c78b6" className="block mb-6">
                    <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0">
                      <img className="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out" src={blogseries} width="352" height="198" alt="News 01" />
                    </figure>
                  </a>
                  <span className='font-bold dark-secondary-font-color text-xs'>Feb 3, 2022</span>
                  <h3 className="text-xl font-bold leading-snug tracking-tight">
                    <a target="_blank" rel="noopener noreferrer" href="https://medium.com/c3-ai-design/intro-to-c3-ai-design-blog-series-fff7fd0c78b6" className="hover:underline text-white">Intro to AI design blog series</a>
                  </h3>
                </header>
              </article> */}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Blogs;
