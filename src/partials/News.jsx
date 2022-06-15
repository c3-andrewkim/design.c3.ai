import React from 'react';
import { Link } from 'react-router-dom';

import blogseries from '../images/blog-series.png';
// import NewsImage02 from '../images/news-02.jpg';
// import NewsImage03 from '../images/news-03.jpg';
// import NewsAuthor01 from '../images/news-author-01.jpg';
// import NewsAuthor02 from '../images/news-author-02.jpg';

function News() {
  return (
    <section className='gray-95'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

        <div className="max-w-3xl text-left pb-16">
            <h3 className="dark:text-white h3">Blogs</h3>
          </div>

          {/* Articles list */}
          <div className="max-w-sm mx-auto md:max-w-none">
            <div className="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">

              {/* 1st article */}
              <article className="flex flex-col h-full" data-aos="zoom-y-out">
                <header>
                  <Link to="/blog-post" className="block mb-6">
                    <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                      <img className="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out" src={blogseries} width="352" height="198" alt="News 01" />
                    </figure>
                  </Link>
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
                  <span className='font-bold dark-secondary-font-color text-xs'>Feb 3, 2022</span>
                  <h3 className="text-xl font-bold leading-snug tracking-tight">
                    <Link to="/blog-post" className="hover:underline dark:text-white">Intro to AI design blog series</Link>
                  </h3>
                </header>
                <footer className="text-sm flex items-center mt-4">
                  {/* <div className="flex shrink-0 mr-3">
                    <a className="relative" href="#0">
                      <span className="absolute inset-0 -m-px" aria-hidden="true"><span className="absolute inset-0 -m-px bg-white rounded-full"></span></span>
                      <img className="relative rounded-full" src={NewsAuthor01} width="32" height="32" alt="Author 01" />
                    </a>
                  </div> */}
                  <div>
                    {/* <span className="text-gray-600">By </span> */}
                    <a className="font-medium hover:underline dark-secondary-font-color" href="#0">Artificial Intelligence</a>
                  </div>
                </footer>
              </article>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default News;
