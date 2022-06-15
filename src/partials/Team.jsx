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
// import tianyi from '../images/tianyi.png';
import yangyi from '../images/yangyi.png';
import yujin from '../images/yujin.png';
import notpictured from '../images/notpictured.png';
// import TeamMember09 from '../images/09.png';
// import TeamMember09 from '../images/09.png';
// import TeamMember09 from '../images/09.png';
// import TeamMember09 from '../images/09.png';
// import TeamMember09 from '../images/09.png';

function Team() {
  return (
    <section className="gray-100">
      <div className="max-w-6xl mx-auto px-8 md:px-4">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl pb-12 md:pb-20">
            {/* <h2 className="h2 dark:text-white">Meet the Team</h2> */}
          <h3 className="dark:text-white h3">Meet the team</h3>
          </div>


          {/* Team members */}
          <div className="max-w-sm sm:max-w-5xl mx-auto grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-2 -my-6 sm:-my-8 sm:-mx-3" data-aos-id-team>

          
            <div className="py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="0" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
              <img className=" team-image mb-4" src={notpictured} alt="Team member 09" />
                <h4 className="text-lg dark:text-white font-bold mb-1">Andrew Kim</h4>
                <div className="dark-secondary-font-color font-medium mb-2">Design Engineer</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>
            
            <div className="py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="50" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
              <img className=" team-image mb-4" src={notpictured} alt="Team member 09" />
                <h4 className="text-lg dark:text-white font-bold mb-1">Beatrice Zhou</h4>
                <div className="dark-secondary-font-color font-medium mb-2">Product Designer</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>
            
            <div className="py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="100" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
                <img className=" team-image mb-4" src={clair} alt="Team member 09" />
                <h4 className="text-lg dark:text-white font-bold mb-1">Clair Sun</h4>
                <div className="dark-secondary-font-color font-medium mb-2">Product Designer</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            <div className="py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="150" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
                <img className=" team-image mb-4" src={emily} alt="Team member 09" />
                <h4 className="text-lg dark:text-white font-bold mb-1">Emily Ho</h4>
                <div className="dark-secondary-font-color font-medium mb-2">Product Designer</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            <div className="py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="200" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
              <img className=" team-image mb-4" src={notpictured} alt="Team member 09" />
                <h4 className="text-lg dark:text-white font-bold mb-1">Eva Luo</h4>
                <div className="dark-secondary-font-color font-medium mb-2">Design Manager</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

          
            <div className="py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="250" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
                <img className=" team-image mb-4" src={evie} alt="Team member 02" />
                <h4 className="text-lg dark:text-white font-bold mb-1">Evie Xu</h4>
                <div className="dark-secondary-font-color font-medium mb-2">Product Designer</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

          
            <div className="py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="300" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
              <img className=" team-image mb-4" src={notpictured} alt="Team member 09" />
                <h4 className="text-lg dark:text-white font-bold mb-1">Gianna Kim</h4>
                <div className="dark-secondary-font-color font-medium mb-2">Product Designer</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

          
            <div className="py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="350" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
                <img className=" team-image mb-4" src={grace} alt="Team member 04" />
                <h4 className="text-lg dark:text-white font-bold mb-1">Grace Guo</h4>
                <div className="dark-secondary-font-color font-medium mb-2">Product Designer</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

          
            <div className="py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="400" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
                <img className=" team-image mb-4" src={hans} alt="Team member 05" />
                <h4 className="text-lg dark:text-white font-bold mb-1">Hans Gruten</h4>
                <div className="dark-secondary-font-color font-medium mb-2">VP of Design</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

          
            <div className="py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="450" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
              <img className=" team-image mb-4" src={notpictured} alt="Team member 09" />
                <h4 className="text-lg dark:text-white font-bold mb-1">Ivy Lin</h4>
                <div className="dark-secondary-font-color font-medium mb-2">Product Designer</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            <div className="py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="500" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
                <img className=" team-image mb-4" src={jason} alt="Team member 07" />
                <h4 className="text-lg dark:text-white font-bold mb-1">Jason Azares</h4>
                <div className="dark-secondary-font-color font-medium mb-2">Design Manager</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

          
            <div className="py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="550" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
                <img className=" team-image mb-4" src={jc} alt="Team member 08" />
                <h4 className="text-lg dark:text-white font-bold mb-1">JC Hu</h4>
                <div className="dark-secondary-font-color font-medium mb-2">Product Designer</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

          
            <div className="py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="600" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
                <img className=" team-image mb-4" src={jeeyoung} alt="Team member 09" />
                <h4 className="text-lg dark:text-white font-bold mb-1">Jeeyoung Jung</h4>
                <div className="dark-secondary-font-color font-medium mb-2">Design Manager</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            
            <div className="py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="650" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
              <img className=" team-image mb-4" src={notpictured} alt="Team member 09" />
                <h4 className="text-lg dark:text-white font-bold mb-1">Jueun Nam</h4>
                <div className="dark-secondary-font-color font-medium mb-2">Product Designer</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            
            <div className="py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="700" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
              <img className=" team-image mb-4" src={notpictured} alt="Team member 09" />
                <h4 className="text-lg dark:text-white font-bold mb-1">Nitya Devireddy</h4>
                <div className="dark-secondary-font-color font-medium mb-2">Design Manager</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

          
            <div className="py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="750" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
                <img className=" team-image mb-4" src={peter} alt="Team member 07" />
                <h4 className="text-lg dark:text-white font-bold mb-1">Peter Xu</h4>
                <div className="dark-secondary-font-color font-medium mb-2">Product Designer Intern</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            
            <div className="py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="800" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
              <img className=" team-image mb-4" src={notpictured} alt="Team member 09" />
                <h4 className="text-lg dark:text-white font-bold mb-1">Robert Ye</h4>
                <div className="dark-secondary-font-color font-medium mb-2">Product Designer</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            
            <div className="py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="850" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
              <img className=" team-image mb-4" src={notpictured} alt="Team member 09" />
                <h4 className="text-lg dark:text-white font-bold mb-1">Sooyeon Hwang</h4>
                <div className="dark-secondary-font-color font-medium mb-2">Product Designer</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            
            <div className="py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="900" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
              <img className=" team-image mb-4" src={notpictured} alt="Team member 09" />
                <h4 className="text-lg dark:text-white font-bold mb-1">Visuda Sathurappan</h4>
                <div className="dark-secondary-font-color font-medium mb-2">Product Designer</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            
            <div className="py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="950" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
                <img className=" team-image mb-4" src={yangyi} alt="Team member 09" />
                <h4 className="text-lg dark:text-white font-bold mb-1">Yangyi Xu</h4>
                <div className="dark-secondary-font-color font-medium mb-2">Product Designer</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            
            <div className="py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="1000" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
              <img className=" team-image mb-4" src={notpictured} alt="Team member 09" />
                <h4 className="text-lg dark:text-white font-bold mb-1">Yi-Le Zhang</h4>
                <div className="dark-secondary-font-color font-medium mb-2">Product Designer</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            
            <div className="py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="1050" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
                <img className=" team-image mb-4" src={yujin} alt="Team member 09" />
                <h4 className="text-lg dark:text-white font-bold mb-1">Yujin Xue</h4>
                <div className="dark-secondary-font-color font-medium mb-2">Product Designer</div>
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