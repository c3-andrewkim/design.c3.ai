import React from 'react';

import TeamMember01 from '../images/team-member-01.jpg';
import TeamMember02 from '../images/team-member-02.jpg';
import TeamMember03 from '../images/team-member-03.jpg';
import TeamMember04 from '../images/team-member-04.jpg';
import TeamMember05 from '../images/team-member-05.jpg';
import TeamMember06 from '../images/team-member-06.jpg';
import TeamMember07 from '../images/team-member-07.jpg';
import TeamMember08 from '../images/team-member-08.jpg';
import TeamMember09 from '../images/team-member-09.jpg';

function Team() {
  return (
    <section className="border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 dark:text-white">Meet the Team</h2>
          </div>

          {/* Team members */}
          <div className="max-w-sm sm:max-w-5xl mx-auto sm:flex sm:flex-wrap sm:justify-center -my-6 sm:-my-8 sm:-mx-3" data-aos-id-team>

            {/* 1st member */}
            <div className="sm:w-1/2 md:w-1/6 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="1200" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={TeamMember09} width="120" height="120" alt="Team member 09" />
                <h4 className="text-xl dark:text-white font-bold mb-1">Andrew Kim</h4>
                <div className="dark:text-gray-600 font-medium mb-2">Design Engineer</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>
            
            <div className="sm:w-1/2 md:w-1/6 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="1200" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={TeamMember09} width="120" height="120" alt="Team member 09" />
                <h4 className="text-xl dark:text-white font-bold mb-1">Beatrice Zhou</h4>
                <div className="dark:text-gray-600 font-medium mb-2">Product Designer</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>
            
            <div className="sm:w-1/2 md:w-1/6 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="1200" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={TeamMember09} width="120" height="120" alt="Team member 09" />
                <h4 className="text-xl dark:text-white font-bold mb-1">Clair Sun</h4>
                <div className="dark:text-gray-600 font-medium mb-2">Product Designer</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            <div className="sm:w-1/2 md:w-1/6 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="1200" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={TeamMember09} width="120" height="120" alt="Team member 09" />
                <h4 className="text-xl dark:text-white font-bold mb-1">Emily Ho</h4>
                <div className="dark:text-gray-600 font-medium mb-2">Product Designer</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            <div className="sm:w-1/2 md:w-1/6 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={TeamMember01} width="120" height="120" alt="Team member 01" />
                <h4 className="text-xl dark:text-white font-bold mb-1">Eva Luo</h4>
                <div className="dark:text-gray-600 font-medium mb-2">Design Manager</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            {/* 2nd member */}
            <div className="sm:w-1/2 md:w-1/6 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="150" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={TeamMember02} width="120" height="120" alt="Team member 02" />
                <h4 className="text-xl dark:text-white font-bold mb-1">Evie Xu</h4>
                <div className="dark:text-gray-600 font-medium mb-2">Product Designer</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            {/* 3rd member */}
            <div className="sm:w-1/2 md:w-1/6 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="300" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={TeamMember03} width="120" height="120" alt="Team member 03" />
                <h4 className="text-xl dark:text-white font-bold mb-1">Gianna Kim</h4>
                <div className="dark:text-gray-600 font-medium mb-2">Product Designer</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            {/* 4th member */}
            <div className="sm:w-1/2 md:w-1/6 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="450" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={TeamMember04} width="120" height="120" alt="Team member 04" />
                <h4 className="text-xl dark:text-white font-bold mb-1">Grace Guo</h4>
                <div className="dark:text-gray-600 font-medium mb-2">Product Designer</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            {/* 5th member */}
            <div className="sm:w-1/2 md:w-1/6 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="600" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={TeamMember05} width="120" height="120" alt="Team member 05" />
                <h4 className="text-xl dark:text-white font-bold mb-1">Hans Gruten</h4>
                <div className="dark:text-gray-600 font-medium mb-2">VP of Design</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            {/* 6th member */}
            <div className="sm:w-1/2 md:w-1/6 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="750" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={TeamMember06} width="120" height="120" alt="Team member 06" />
                <h4 className="text-xl dark:text-white font-bold mb-1">Ivy Lin</h4>
                <div className="dark:text-gray-600 font-medium mb-2">Product Designer</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            {/* 7th member */}
            <div className="sm:w-1/2 md:w-1/6 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="900" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={TeamMember07} width="120" height="120" alt="Team member 07" />
                <h4 className="text-xl dark:text-white font-bold mb-1">Peter Xu</h4>
                <div className="dark:text-gray-600 font-medium mb-2">Product Designer Intern</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            <div className="sm:w-1/2 md:w-1/6 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="900" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={TeamMember07} width="120" height="120" alt="Team member 07" />
                <h4 className="text-xl dark:text-white font-bold mb-1">Jason Azares</h4>
                <div className="dark:text-gray-600 font-medium mb-2">Design Manager</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            {/* 8th member */}
            <div className="sm:w-1/2 md:w-1/6 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="1050" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={TeamMember08} width="120" height="120" alt="Team member 08" />
                <h4 className="text-xl dark:text-white font-bold mb-1">JC Hu</h4>
                <div className="dark:text-gray-600 font-medium mb-2">Product Designer</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            {/* 9th member */}
            <div className="sm:w-1/2 md:w-1/6 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="1200" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={TeamMember09} width="120" height="120" alt="Team member 09" />
                <h4 className="text-xl dark:text-white font-bold mb-1">Jeeyoung Jung</h4>
                <div className="dark:text-gray-600 font-medium mb-2">Design Manager</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            {/* 10th member */}
            <div className="sm:w-1/2 md:w-1/6 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="1200" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={TeamMember09} width="120" height="120" alt="Team member 09" />
                <h4 className="text-xl dark:text-white font-bold mb-1">Jueun Nam</h4>
                <div className="dark:text-gray-600 font-medium mb-2">Product Designer</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            {/* 11th member */}
            <div className="sm:w-1/2 md:w-1/6 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="1200" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={TeamMember09} width="120" height="120" alt="Team member 09" />
                <h4 className="text-xl dark:text-white font-bold mb-1">Nitya Devireddy</h4>
                <div className="dark:text-gray-600 font-medium mb-2">Design Manager</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            {/* 12th member */}
            <div className="sm:w-1/2 md:w-1/6 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="1200" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={TeamMember09} width="120" height="120" alt="Team member 09" />
                <h4 className="text-xl dark:text-white font-bold mb-1">Robert Ye</h4>
                <div className="dark:text-gray-600 font-medium mb-2">Product Designer</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            {/* 13th member */}
            <div className="sm:w-1/2 md:w-1/6 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="1200" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={TeamMember09} width="120" height="120" alt="Team member 09" />
                <h4 className="text-xl dark:text-white font-bold mb-1">Sooyeon Hwang</h4>
                <div className="dark:text-gray-600 font-medium mb-2">Product Designer</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            {/* 14th member */}
            <div className="sm:w-1/2 md:w-1/6 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="1200" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={TeamMember09} width="120" height="120" alt="Team member 09" />
                <h4 className="text-xl dark:text-white font-bold mb-1">Tianyi Xie</h4>
                <div className="dark:text-gray-600 font-medium mb-2">Product Designer</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            {/* 15th member */}
            <div className="sm:w-1/2 md:w-1/6 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="1200" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={TeamMember09} width="120" height="120" alt="Team member 09" />
                <h4 className="text-xl dark:text-white font-bold mb-1">Visuda Sathurappan</h4>
                <div className="dark:text-gray-600 font-medium mb-2">Product Designer</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            {/* 16th member */}
            <div className="sm:w-1/2 md:w-1/6 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="1200" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={TeamMember09} width="120" height="120" alt="Team member 09" />
                <h4 className="text-xl dark:text-white font-bold mb-1">Yangyi Xu</h4>
                <div className="dark:text-gray-600 font-medium mb-2">Product Designer</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            {/* 17th member */}
            <div className="sm:w-1/2 md:w-1/6 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="1200" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={TeamMember09} width="120" height="120" alt="Team member 09" />
                <h4 className="text-xl dark:text-white font-bold mb-1">Yi-Le Zhang</h4>
                <div className="dark:text-gray-600 font-medium mb-2">Product Designer</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>

            {/* 18th member */}
            <div className="sm:w-1/2 md:w-1/6 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-delay="1200" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={TeamMember09} width="120" height="120" alt="Team member 09" />
                <h4 className="text-xl dark:text-white font-bold mb-1">Yujin Xue</h4>
                <div className="dark:text-gray-600 font-medium mb-2">Product Designer</div>
                {/* <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                <div className="text-sm text-gray-600 font-medium">
                  <a className="text-gray-900 hover:underline" href="#0">Twitter</a> · <a className="text-gray-900 hover:underline" href="#0">GitHub</a> · <a className="text-gray-900 hover:underline" href="#0">LinkedIn</a>
                </div> */}
              </div>
            </div>
            
            {/* 19th member */}
           
            
            {/* 20th member */}
            

          </div>

        </div>
      </div>
    </section>
  );
}

export default Team;