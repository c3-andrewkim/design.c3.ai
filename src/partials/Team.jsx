import React from 'react';

import clair from '../images/clair.png';
import emily from '../images/emily.png';
import evie from '../images/evie.png';
import grace from '../images/grace.png';
import hans from '../images/hans.png';
import jason from '../images/jason.png';
import jc from '../images/jc.png';
import jeeyoung from '../images/jeeyoung.png';
import peter from '../images/peter.png';
import andrew from '../images/andrew.png';
import yangyi from '../images/yangyi.png';
import yujin from '../images/yujin.png';
import eva from '../images/eva.png';

import ivy from '../images/ivy.png';
import visudha from '../images/visudha.png';
import sooyeon from '../images/soo.png';
// import eva from '../images/eva.png';

import gianna from '../images/gianna.png';
import beatrice from '../images/beatrice.png';
import notpictured from '../images/notpictured.png';

function Team() {
  return (
    <section className="gray-100">
      <div className="max-w-6xl mx-auto px-8 md:px-4">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl pb-16">
            {/* <h2 className="h2 dark:text-white">Meet the Team</h2> */}
          <h3 className="dark:text-white h3">Meet the team</h3>
          </div>


          {/* Team members */}
          <div className="mx-auto grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-2 -my-6 sm:-my-8 sm:-mx-3" data-aos-id-team>

          
            <div className="py-4 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="0" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
              <img className="team-image mb-4" src={andrew} alt="Team member 09" />
                <h4 className="text-lg dark:text-white font-bold">Andrew Kim</h4>
                <div className="dark-secondary-font-color font-medium">Design Engineer</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>
            
            <div className="py-4 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="50" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
              <img className="team-image mb-4" src={beatrice} alt="Team member 09" />
                <h4 className="text-lg dark:text-white font-bold">Beatrice Zhou</h4>
                <div className="dark-secondary-font-color font-medium">Product Designer</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>
            
            <div className="py-4 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="100" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
                <img className="team-image mb-4" src={clair} alt="Team member 09" />
                <h4 className="text-lg dark:text-white font-bold">Clair Sun</h4>
                <div className="dark-secondary-font-color font-medium">Product Designer</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            <div className="py-4 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="150" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
                <img className="team-image mb-4" src={emily} alt="Team member 09" />
                <h4 className="text-lg dark:text-white font-bold">Emily Ho</h4>
                <div className="dark-secondary-font-color font-medium">Product Designer</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            <div className="py-4 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="200" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
              <img className="team-image mb-4" src={eva} alt="Team member 09" />
                <h4 className="text-lg dark:text-white font-bold">Eva Luo</h4>
                <div className="dark-secondary-font-color font-medium">Design Manager</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

          
            <div className="py-4 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="250" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
                <img className="team-image mb-4" src={evie} alt="Team member 02" />
                <h4 className="text-lg dark:text-white font-bold">Evie Xu</h4>
                <div className="dark-secondary-font-color font-medium">Product Designer</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

          
            <div className="py-4 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="300" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
              <img className="team-image mb-4" src={gianna} alt="Team member 09" />
                <h4 className="text-lg dark:text-white font-bold">Gianna Kim</h4>
                <div className="dark-secondary-font-color font-medium">Product Designer</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

          
            <div className="py-4 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="350" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
                <img className="team-image mb-4" src={grace} alt="Team member 04" />
                <h4 className="text-lg dark:text-white font-bold">Grace Guo</h4>
                <div className="dark-secondary-font-color font-medium">Product Designer</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

          
            <div className="py-4 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="400" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
                <img className="team-image mb-4" src={hans} alt="Team member 05" />
                <h4 className="text-lg dark:text-white font-bold">Hans Gruten</h4>
                <div className="dark-secondary-font-color font-medium">VP of Design</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

          
            <div className="py-4 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="450" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
              <img className="team-image mb-4" src={ivy} alt="Team member 09" />
                <h4 className="text-lg dark:text-white font-bold">Ivy Lin</h4>
                <div className="dark-secondary-font-color font-medium">Product Designer</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            <div className="py-4 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="500" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
                <img className="team-image mb-4" src={jason} alt="Team member 07" />
                <h4 className="text-lg dark:text-white font-bold">Jason Azares</h4>
                <div className="dark-secondary-font-color font-medium">Design Manager</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

          
            <div className="py-4 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="550" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
                <img className="team-image mb-4" src={jc} alt="Team member 08" />
                <h4 className="text-lg dark:text-white font-bold">JC Hu</h4>
                <div className="dark-secondary-font-color font-medium">Product Designer</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

          
            <div className="py-4 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="600" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
                <img className="team-image mb-4" src={jeeyoung} alt="Team member 09" />
                <h4 className="text-lg dark:text-white font-bold">Jeeyoung Jung</h4>
                <div className="dark-secondary-font-color font-medium">Design Manager</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            
            <div className="hidden py-4 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="650" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
              <img className="team-image mb-4" src={notpictured} alt="Team member 09" />
                <h4 className="text-lg dark:text-white font-bold">Jueun Nam</h4>
                <div className="dark-secondary-font-color font-medium">Product Designer</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            
            <div className="hidden py-4 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="700" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
              <img className="team-image mb-4" src={notpictured} alt="Team member 09" />
                <h4 className="text-lg dark:text-white font-bold">Nitya Devireddy</h4>
                <div className="dark-secondary-font-color font-medium">Design Manager</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

          
            <div className="py-4 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="750" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
                <img className="team-image mb-4" src={peter} alt="Team member 07" />
                <h4 className="text-lg dark:text-white font-bold">Peter Xu</h4>
                <div className="dark-secondary-font-color font-medium">Product Designer Intern</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            
            <div className="hidden py-4 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="800" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
              <img className="team-image mb-4" src={notpictured} alt="Team member 09" />
                <h4 className="text-lg dark:text-white font-bold">Robert Ye</h4>
                <div className="dark-secondary-font-color font-medium">Product Designer</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            
            <div className="py-4 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="850" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
              <img className="team-image mb-4" src={sooyeon} alt="Team member 09" />
                <h4 className="text-lg dark:text-white font-bold">Sooyeon Hwang</h4>
                <div className="dark-secondary-font-color font-medium">Product Designer</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            
            <div className="py-4 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="900" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
              <img className="team-image mb-4" src={visudha} alt="Team member 09" />
                <h4 className="text-lg dark:text-white font-bold">Visudha Sathurappan</h4>
                <div className="dark-secondary-font-color font-medium">Product Designer</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            
            <div className="py-4 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="950" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
                <img className="team-image mb-4" src={yangyi} alt="Team member 09" />
                <h4 className="text-lg dark:text-white font-bold">Yangyi Xu</h4>
                <div className="dark-secondary-font-color font-medium">Product Designer</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            
            <div className="hidden py-4 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="1000" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
              <img className="team-image mb-4" src={notpictured} alt="Team member 09" />
                <h4 className="text-lg dark:text-white font-bold">Yi-Le Zhang</h4>
                <div className="dark-secondary-font-color font-medium">Product Designer</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            
            <div className="py-4 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="1050" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
                <img className="team-image mb-4" src={yujin} alt="Team member 09" />
                <h4 className="text-lg dark:text-white font-bold">Yujin Xue</h4>
                <div className="dark-secondary-font-color font-medium">Product Designer</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Team;