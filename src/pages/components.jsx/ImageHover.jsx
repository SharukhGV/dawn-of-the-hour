import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import compass from "../../assets/compass.png"
import sun from "../../assets/sun.png"
import moon1 from "../../assets/moon1.png"
import earth from "../../assets/earth.png"
import earthlayers from "../../assets/earthlayers.png"
import earthquake from "../../assets/earthquake.png"
const ImageHover = () => {
  const [isGeologicHovered, setIsGeologicHovered] = useState(false);
  const [isSolarHovered, setIsSolarHovered] = useState(false);
  const [isLunarHovered, setIsLunarHovered] = useState(false);
  const [isEarthHovered, setIsEarthHovered] = useState(false);
  const [isEarthROTHovered, setIsEarthROTHovered] = useState(false);
  const [earthquakehover, setEarthquakehover] = useState(false);

  const imageStyle = {
    maxWidth: "150px",
    transition: "opacity 0.3s ease-in-out",
  };

  const textStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "black",
    fontSize: "18px",
    fontWeight: "bold",
    textAlign: "center",
    opacity: 0,
    transition: "opacity 0.3s ease-in-out",
  };

  const containerStyle = {
    position: "relative",
    display: "inline-block",
    margin: "10px",
  };

  return (
    <div>
      <div style={containerStyle}
           onMouseEnter={() => setIsGeologicHovered(true)}
           onMouseLeave={() => setIsGeologicHovered(false)}>
        <Link to="/magneticpoleanomaly">
          <img 
            src={compass} 
            alt="Geologic" 
            style={{
              ...imageStyle,
              borderRadius: "50%",
              opacity: isGeologicHovered ? 0.2 : 1,
            }} 
          />
          <div style={{
            ...textStyle,
            opacity: isGeologicHovered ? 1 : 0,
          }}>
            Pole Shift
          </div>
        </Link>
      </div>

      <div style={containerStyle}
           onMouseEnter={() => setIsSolarHovered(true)}
           onMouseLeave={() => setIsSolarHovered(false)}>
        <Link to="/sunlifecycle">
          <img 
            src={sun} 
            alt="Solar Activities" 
            style={{
              ...imageStyle,
              opacity: isSolarHovered ? 0.2 : 1,
            }} 
          />
          <div style={{
            ...textStyle,
            opacity: isSolarHovered ? 1 : 0,
          }}>
            Solar Activity
          </div>
        </Link>
      </div>

      <div style={containerStyle}
           onMouseEnter={() => setIsLunarHovered(true)}
           onMouseLeave={() => setIsLunarHovered(false)}>
        <Link to="/mooninfo">
          <img 
            src={moon1} 
            alt="Moon Activities" 
            style={{
              ...imageStyle,
              opacity: isLunarHovered ? 0.2 : 1,
            }} 
          />
          <div style={{
            ...textStyle,
            opacity: isLunarHovered ? 1 : 0,
          }}>
            Lunar Shrink
          </div>
        </Link>
      </div>

      <div style={containerStyle}
           onMouseEnter={() => setIsEarthHovered(true)}
           onMouseLeave={() => setIsEarthHovered(false)}>
        <Link to="/earthinfo">
          <img 
            src={earthlayers} 
            alt="Earth Activities" 
            style={{
              ...imageStyle,
              opacity: isEarthHovered ? 0.2 : 1,
            }} 
          />
          <div style={{
            ...textStyle,
            opacity: isEarthHovered ? 1 : 0,
          }}>
            Inner Earth
          </div>
        </Link>
      </div>


      <div style={containerStyle}
           onMouseEnter={() => setIsEarthROTHovered(true)}
           onMouseLeave={() => setIsEarthROTHovered(false)}>
        <Link to="/earthrotation">
          <img 
            src={earth} 
            alt="Earth Rotation" 
            style={{
              ...imageStyle,
              opacity: isEarthROTHovered ? 0.2 : 1,
            }} 
          />
          <div style={{
            ...textStyle,
            opacity: isEarthROTHovered ? 1 : 0,
          }}>
            Earth Rotation
          </div>
        </Link>
      </div>

      <div style={containerStyle}
           onMouseEnter={() => setEarthquakehover(true)}
           onMouseLeave={() => setEarthquakehover(false)}>
        <Link to="/earthquakes">
          <img 
            src={earthquake} 
            alt="earthquakes" 
            style={{
              ...imageStyle,
              borderRadius: "50%",
              border:"solid",
              width:"150px",
              height:"150px",
              borderColor:"darkgreen",
              backgroundColor:"lightblue",
              opacity: earthquakehover ? 0.2 : 1,
            }} 
          />
          <div style={{
            ...textStyle,
            opacity: earthquakehover ? 1 : 0,
          }}>
            Earthquakes
          </div>
        </Link>
      </div>

    </div>
  );
};

export default ImageHover;