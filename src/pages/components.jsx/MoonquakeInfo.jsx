import React from 'react';
import { Link } from 'react-router-dom';
import smithsonianmoonimage from "../../assets/smithsonianmoonimage.jpg"
const MoonquakeInfo = () => {
  return (
    <div >   <Link to="/">Home</Link>
   <h2>Moon's Shrinkage and Moonquakes</h2>
<p>And the moon we have ordained for it phases until it returns like the old (withered) date stalk </p>
<p>Quran Surah Yasin verse 39</p>
    <div style={{border:"solid", borderColor:"blue", padding:"15px"}} className="moonquake-info">
<img style={{maxWidth:"300px", border:"solid"}} src={smithsonianmoonimage}></img>
<br></br>
<em>Smithsonian Magazine: NASA’s Lunar Reconnaissance Orbiter found these thrust faults near the moon’s south pole. T. R. Watters et al., The Planetary Science Journal, 2024, under CC BY 4.0 DEED</em>

      <p>
        Though it might appear still and quiet, the moon is not an entirely peaceful world. 
        Our natural satellite is slowly shrinking, and as it does, 'moonquakes' rock its surface. 
        These regular rumbles in the regolith could become a problem for future crewed flights to the moon, 
        such as NASA's planned Artemis 3 mission, according to a study published late last month in the 
        Planetary Science Journal.
      </p>
      <div className="source">
        <strong>Source:</strong> Smithsonian Magazine, "The Moon is Shrinking, Causing Moonquakes 
        at a Potential NASA Landing Site, Study Finds", accessed September 13th, 2024.
      </div>

      </div>

    </div>
  );
};

export default MoonquakeInfo;