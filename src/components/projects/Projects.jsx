import React , {useEffect, useRef, useState} from 'react';
import "./Projects.css";
import { sumArray } from '../../helper';
import {projects} from '../../data';
// import { act } from 'react';
import ProjectsCard from './ProjectCard';

const tabs = [
  {name:"All"},
  {name:"FullStack"},
  {name:"Frontend"},
  {name:"Python"},
]


const Projects = () => {
  const [displaybleProjects,setDisplaybleProjects] = useState(projects);
  const [activeIndex,setActiveIndex] = useState(0);
  const [offset,setOffset] = useState(0);
  const [indicatorWidth,setIndicatorWidth] = useState(0);
  const itemsEls = useRef(new Array());
  useEffect(()=>{
    const prevEl = itemsEls.current.filter((_,index) => index < activeIndex);
    setOffset(
      sumArray(
        prevEl.map(item=>item.offsetWidth)
      )
    )
    setIndicatorWidth(itemsEls.current[activeIndex].offsetWidth)
  },[activeIndex]);

  const setProjects = (category)=>{
    if(category === "All"){
      return setDisplaybleProjects(projects);
    }
    const pro = projects.filter((project)=>project.category.toLowerCase() === category.toLowerCase());
    setDisplaybleProjects(projects);
  }

  return (
    <section id="projects">
        <div className="section_wrapper project_container">
          <div className="section_header center">
            <h2 className="primary_title">Projects</h2>
          </div>
          <nav>
            {
              tabs.map((tab, index) =>(
                <button
                ref={el => itemsEls.current[index] = el}
                onClick={()=>{
                  setActiveIndex(index)
                  setProjects(tab.name)
                }}
                key={index}
                >
                {tab.name}
                </button>
              ))
            }

            <span className="active_indicator"
            style={{left:`${offset}px`,
                    width:`${indicatorWidth}px`
                  }
                  }
            >

            </span>
          </nav>
          <div className="card_container">
            {
              displaybleProjects.map((project,index)=>(
                  <ProjectsCard
                  title = {project.title}
                  image = {project.image}
                  data = {project.data}
                  stack = {project.stack}
                  key={index}
                  />
              ))
            }
          </div>
        </div>
    </section>
  )
}

export default Projects
