import React from 'react';
import "./About.css";
import profile from '../../images/profile.png';


const About = () => {
  return (
    <section id="about">
      <div className="section_wrapper about_container">
        <div className="me_container blur_effect">
          <div className="photo_container">
            <img src={profile} alt="" />
          </div>
        </div>
        <div className="section_header">
          <h2 className="primary_title">About Me</h2>
          <h1 className="title">I am <span className="color_primary">Ganesh Wadule</span></h1>
          <p className="text_muted description">
           A budding backend-focused full-stack developer with a growing expertise in React and Spring Boot. Even as a beginner in full-stack development, I bring 3 years of experience in problem-solving using coding. I am passionate about creating efficient, scalable solutions and enjoy tackling complex challenges. My journey in tech is driven by a commitment to continuous learning and improvement. I thrive on exploring new technologies and applying them to real-world projects. Dedicated and enthusiastic, I am excited to contribute to innovative development teams.
          </p>
        </div>
      </div>
    </section>

  )
}

export default About;
