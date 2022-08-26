import React from 'react';

import andrew from '../images/andrew.webp';
import beatrice from '../images/beatrice.webp';
import clair from '../images/clair.webp';
import emily from '../images/emily.webp';
import eva from '../images/eva.webp';
import evie from '../images/evie.webp';
import nitya from '../images/nitya.webp';
import sooyeon from '../images/soo.webp';
import gianna from '../images/gianna.webp';
import grace from '../images/grace.webp';
import hans from '../images/hans.webp';
import ivy from '../images/ivy.webp';
import jason from '../images/jason.webp';
import jeeyoung from '../images/jeeyoung.webp';
import jc from '../images/jc.webp';
import jueun from '../images/jueun.webp';
// import peter from '../images/peter.webp';
import robert from '../images/robert.webp';
import visudha from '../images/visudha.webp';
import yangyi from '../images/yangyi.webp';
import yujin from '../images/yujin.webp';
import yile from '../images/yile.webp';
// import stephanie from '../images/stephanie.webp';

function Team() {
  return (
    <section id="team" className="meet-the-team relative gray-100">
      <div className="max-w-6xl mx-auto px-8 md:px-4">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl pb-16">
            {/* <h2 className="h2 text-white">Meet the Team</h2> */}
            <h3 className="text-white h3">Meet The Team</h3>
          </div>

          {/* Team members */}
          <div id="team-grid" className="mx-auto grid" data-aos-id-team>

          
            <div className="pb-8 sm:pb-8" data-aos="zoom-y-out" data-aos-delay="0" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
              <img className="team-image mb-4" src={andrew} alt="Team member 1" />
                <h4 className="text-white font-bold text-base">Andrew Kim</h4>
                <div className="dark-secondary-font-color text-sm">Design Engineer</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-small">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>
            
            <div className="pb-8 sm:pb-8" data-aos="zoom-y-out" data-aos-delay="50" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
              <img className="team-image mb-4" src={beatrice} alt="Team member 2" />
                <h4 className="text-white font-bold text-base">Beatrice Zhou</h4>
                <div className="dark-secondary-font-color text-sm">Product Designer</div>
              </div>
            </div>
            
            <div className="pb-8 sm:pb-8" data-aos="zoom-y-out" data-aos-delay="100" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
                <img className="team-image mb-4" src={clair} alt="Team member 3" />
                <h4 className="text-white font-bold text-base">Clair Sun</h4>
                <div className="dark-secondary-font-color text-sm">Product Designer</div>
              </div>
            </div>

            <div className="pb-8 sm:pb-8" data-aos="zoom-y-out" data-aos-delay="150" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
                <img className="team-image mb-4" src={emily} alt="Team member 4" />
                <h4 className="text-white font-bold text-base">Emily Ho</h4>
                <div className="dark-secondary-font-color text-sm">Product Designer</div>
              </div>
            </div>

            <div className="pb-8 sm:pb-8" data-aos="zoom-y-out" data-aos-delay="200" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
              <img className="team-image mb-4" src={eva} alt="Team member 5" />
                <h4 className="text-white font-bold text-base">Eva Luo</h4>
                <div className="dark-secondary-font-color text-sm">Design Manager</div>
              </div>
            </div>

          
            <div className="pb-8 sm:pb-8" data-aos="zoom-y-out" data-aos-delay="250" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
                <img className="team-image mb-4" src={evie} alt="Team member 6" />
                <h4 className="text-white font-bold text-base">Evie Xu</h4>
                <div className="dark-secondary-font-color text-sm">Product Designer</div>
              </div>
            </div>

          
            <div className="pb-8 sm:pb-8" data-aos="zoom-y-out" data-aos-delay="300" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
              <img className="team-image mb-4" src={gianna} alt="Team member 7" />
                <h4 className="text-white font-bold text-base">Gianna Kim</h4>
                <div className="dark-secondary-font-color text-sm">Product Designer</div>
              </div>
            </div>

          
            <div className="pb-8 sm:pb-8" data-aos="zoom-y-out" data-aos-delay="350" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
                <img className="team-image mb-4" src={grace} alt="Team member 8" />
                <h4 className="text-white font-bold text-base">Grace Guo</h4>
                <div className="dark-secondary-font-color text-sm">Product Designer</div>
              </div>
            </div>

          
            <div className="pb-8 sm:pb-8" data-aos="zoom-y-out" data-aos-delay="400" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
                <img className="team-image mb-4" src={hans} alt="Team member 9" />
                <h4 className="text-white font-bold text-base">Hans Gruten</h4>
                <div className="dark-secondary-font-color text-sm">VP of Design</div>
              </div>
            </div>

          
            <div className="pb-8 sm:pb-8" data-aos="zoom-y-out" data-aos-delay="450" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
              <img className="team-image mb-4" src={ivy} alt="Team member 10" />
                <h4 className="text-white font-bold text-base">Ivy Lin</h4>
                <div className="dark-secondary-font-color text-sm">Product Designer</div>
              </div>
            </div>

            <div className="pb-8 sm:pb-8" data-aos="zoom-y-out" data-aos-delay="500" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
                <img className="team-image mb-4" src={jason} alt="Team member 11" />
                <h4 className="text-white font-bold text-base">Jason Azares</h4>
                <div className="dark-secondary-font-color text-sm">Design Manager</div>
              </div>
            </div>

          
            <div className="pb-8 sm:pb-8" data-aos="zoom-y-out" data-aos-delay="550" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
                <img className="team-image mb-4" src={jc} alt="Team member 12" />
                <h4 className="text-white font-bold text-base">JC Hu</h4>
                <div className="dark-secondary-font-color text-sm">Product Designer</div>
              </div>
            </div>

          
            <div className="jeeyoung pb-8 sm:pb-8" data-aos="zoom-y-out" data-aos-delay="600" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
                <img className="team-image mb-4" src={jeeyoung} alt="Team member 13" />
                <h4 className="text-white font-bold text-base">Jeeyoung Jung</h4>
                <div className="dark-secondary-font-color text-sm">Design Manager</div>
              </div>
            </div>

            
            <div className="pb-8 sm:pb-8" data-aos="zoom-y-out" data-aos-delay="650" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
              <img className="team-image mb-4" src={jueun} alt="Team member 14" />
                <h4 className="text-white font-bold text-base">Jueun Nam</h4>
                <div className="dark-secondary-font-color text-sm">Product Designer</div>
              </div>
            </div>

            
            <div className="nitya pb-8 sm:pb-8" data-aos="zoom-y-out" data-aos-delay="700" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
              <img className="team-image mb-4" src={nitya} alt="Team member 15" />
                <h4 className="text-white font-bold text-base">Nitya Devireddy</h4>
                <div className="dark-secondary-font-color text-sm">Product Designer</div>
              </div>
            </div>

          
            {/* <div className="pb-8 sm:pb-8" data-aos="zoom-y-out" data-aos-delay="750" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
                <img className="team-image mb-4" src={peter} alt="Team member 16" />
                <h4 className="text-white font-bold text-base">Peter Xu</h4>
                <div className="dark-secondary-font-color text-sm">Product Designer</div>
              </div>
            </div> */}

            
            <div className="pb-8 sm:pb-8" data-aos="zoom-y-out" data-aos-delay="800" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
              <img className="team-image mb-4" src={robert} alt="Team member 17" />
                <h4 className="text-white font-bold text-base">Robert Ye</h4>
                <div className="dark-secondary-font-color text-sm">Product Designer</div>
              </div>
            </div>

            
            <div className="soo pb-8 sm:pb-8" data-aos="zoom-y-out" data-aos-delay="850" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
              <img className="team-image mb-4" src={sooyeon} alt="Team member 18" />
                <h4 className="text-white font-bold text-base">Sooyeon Hwang</h4>
                <div className="dark-secondary-font-color text-sm">Product Designer</div>
              </div>
            </div>


            <div className="pb-8 sm:pb-8 hidden" data-aos="zoom-y-out" data-aos-delay="1000" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
              <img className="team-image mb-4" src={stephanie} alt="Team member 21" />
                <h4 className="text-white font-bold text-base">Stephanie Lee</h4>
                <div className="dark-secondary-font-color text-sm">UX Researcher</div>
              </div>
            </div>

            
            <div className="visudha pb-8 sm:pb-8" data-aos="zoom-y-out" data-aos-delay="900" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
              <img className="team-image mb-4" src={visudha} alt="Team member 19" />
                <h4 className="text-white font-bold text-base">Visudha Sathurappan</h4>
                <div className="dark-secondary-font-color text-sm">Product Designer</div>
              </div>
            </div>

            
            <div className="pb-8 sm:pb-8" data-aos="zoom-y-out" data-aos-delay="950" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
                <img className="team-image mb-4" src={yangyi} alt="Team member 20" />
                <h4 className="text-white font-bold text-base">Yangyi Xu</h4>
                <div className="dark-secondary-font-color text-sm">Product Designer</div>
              </div>
            </div>

            
            <div className="pb-8 sm:pb-8" data-aos="zoom-y-out" data-aos-delay="1000" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
              <img className="team-image mb-4" src={yile} alt="Team member 21" />
                <h4 className="text-white font-bold text-base">Yi-Le Zhang</h4>
                <div className="dark-secondary-font-color text-sm">UX Researcher</div>
              </div>
            </div>

            
            <div className="pb-8 sm:pb-8" data-aos="zoom-y-out" data-aos-delay="1050" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col">
                <img className="team-image mb-4" src={yujin} alt="Team member 22" />
                <h4 className="text-white font-bold text-base">Yujin Xue</h4>
                <div className="dark-secondary-font-color text-sm">Product Designer</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Team;