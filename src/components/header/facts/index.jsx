import React, { useEffect , useState} from 'react';
import "./Facts.css";
import Odometer from "react-odometerjs";
import { experience } from "../../../data";

const Facts = () => {
  const [experience,setExperience] = useState(0);
  
  useEffect(()=>{
    const timeoutId = setTimeout(()=>{
      setExperience(0);
    },3000);

    return ()=>{
      clearTimeout(timeoutId);
    }
  },[]);
  return (
    <div className="fact_container">
        <div className="fact_item">
          <div className="count_container">
            <Odometer 
              value={experience}
              />
              <span className="indicator">+</span>
          </div>
          <p className="name">Years of Experience</p>
        </div>
    </div>
  )
}

export default Facts;
