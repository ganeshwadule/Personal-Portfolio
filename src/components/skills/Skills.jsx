import React from 'react'
import { experience } from '../../data';
import SkillCard from './SkillCard';
import "./Skills.css";
const Skills = () => {
  return (
    <section id="skills">
      <div className="section_wrapper">
        <div className="section_header center">
          <h2 className="primary_title">My Skills</h2>
        </div>
        <div className="skill_container">
          {
            experience.map((list,index)=>(
              <SkillCard className="skill_card"
              {...list}
              key={index}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Skills;
