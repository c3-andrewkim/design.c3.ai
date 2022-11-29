import React from 'react';

import andrew from '../images/andrew.webp';
import beatrice from '../images/beatrice.webp';
import clair from '../images/clair.webp';
import evie from '../images/evie.webp';
import nitya from '../images/nitya.webp';
import gianna from '../images/gianna.webp';
import grace from '../images/grace.webp';
import hans from '../images/hans.webp';
import ivy from '../images/ivy.webp';
import jae from '../images/jae.webp';
import jason from '../images/jason.webp';
import jeeyoung from '../images/jeeyoung.webp';
import jc from '../images/jc.webp';
import robert from '../images/robert.webp';
import saptarshi from '../images/saptarshi.webp';
import stephanie from '../images/stephanie.webp';
import visudha from '../images/visudha.webp';
import yangyi from '../images/yangyi.webp';
import yujin from '../images/yujin.webp';
import yile from '../images/yile.webp';

function Team() {
  const members = [
    { photo: andrew, name: 'Andrew Kim', position: 'Design Technologist' },
    { photo: beatrice, name: 'Beatrice Zhou', position: 'Product Designer'},
    { photo: clair, name: 'Clair Sun', position: 'Product Designer'},
    { photo: evie, name: 'Evie Xu', position: 'Product Designer' },
    { photo: gianna, name: 'Gianna Kim', position: 'Product Designer'}, 
    { photo: grace, name: 'Grace Guo' , position: 'Product Designer'}, 
    { photo: hans, name: 'Hans Guntren', position: 'VP of Design'}, 
    { photo: ivy, name: 'Ivy Lin', position: 'Product Designer'}, 
    { photo: jae, name: 'Jae Kim', position: 'Product Designer'}, 
    { photo: jason, name: 'Jason Azares', position:'Design Manager' }, 
    { photo: jeeyoung, name:'Jeeyoung Jung', position: 'Design Manager'}, 
    { photo: jc, name: 'JC Hu', position: 'Product Designer'}, 
    { photo: nitya, name: 'Nitya Devireddy', position:'Product Designer' },
    { photo: robert, name: 'Robert Ye' , position: 'Product Designer'}, 
    { photo: saptarshi, name: 'Saptarshi Mandal', position:'UX Researcher' }, 
    { photo: stephanie, name: 'Stephanie Lee', position: 'UX Researcher'}, 
    { photo: visudha, name: 'Visudha Sathurappan', position: 'Product Designer' },
    { photo: yangyi, name: 'Yangyi Xu', position: 'Product Designer'}, 
    { photo: yujin, name: 'Yujin Xue', position: 'Product Designer'}, 
    { photo: yile, name: 'Yi-Le Zhang' , position: 'UX Researcher' }
  ];

  const teammates = members.map((member, index) => 
    <div className="teammate-wrapper pb-8 sm:pb-8" data-aos="zoom-y-out" data-aos-delay={index * 50} data-aos-anchor="[data-aos-id-team]">
      <div className="flex flex-col">
      <img className="team-image mb-4" src={member.photo} alt={`Team member ${index + 1}`} />
        <h4 className="text-white font-bold text-base">{member.name}</h4>
        <div className="dark-secondary-font-color text-sm">{member.position}</div>
      </div>
    </div>
  )
  return (
    <section id="team" className="meet-the-team relative gray-100">
      <div className="max-w-6xl mx-auto px-8 md:px-4">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl pb-16">
            <h3 className="text-white h3">Meet The Team</h3>
          </div>

          {/* Team members */}
          <div id="team-grid" className="mx-auto grid" data-aos-id-team>
            {teammates}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;