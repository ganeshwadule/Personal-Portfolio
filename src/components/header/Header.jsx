import React from 'react'
import './Header.css'
import profile from '../../images/profile.png'
import Facts from "./facts";
const Header = () => {
  return (
    <header id="header" className='blur_effect'>
     <div className="stroke_text intro_text">
      Hello
      </div> 
      <div className="section_wrapper header_container">

        <div className="column intro_container blur_effect">
          <div className="header_info">
            <div className="header_info_top">
              Hello There! I'm <span className="color_primary">Ganesh Wadule</span>
            </div>
            <div className="header_info_middle">
              <h1 className="primary_title header_title">
                I'M A WEB DEVELOPER
              </h1>
              <p className="text_muted header_description">
              I solve complex backend issues to build secure and scalable systems that efficiently handle massive user interactions.
              </p>
            </div>
              {/* <Facts/> */}
            <div className="header_info_bottom">
              <a href="" className="btn">Download CV</a>
              <a href="" className="btn">Email Me</a>
            </div>
          </div>
        </div>
        <div className="column profile_wrapper">
          <div className="profile_photo_container">
            <img src={profile} alt="" className='profile_photo'/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
