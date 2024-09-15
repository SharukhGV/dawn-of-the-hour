import React from 'react';
import { Link } from 'react-router-dom';
import hrdiagram from "../../assets/hrdiagram.png"
import lights from "../../assets/lights.jpg"
const SunLifeCycle = () => {
  return (
    <>
    <div style={{
      padding: '30px',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: 'auto',
      textAlign:"center"
    //   backgroundColor: '#f5f5f5',
    //   borderRadius: '10px',
    //   boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }}>
        <Link to="/">Home</Link>

      <h2 style={{ color: '#1a237e', paddingBottom: '10px' }}>The Sun's Life Cycle and Current Solar Activity</h2>
      <p>'When the sun is wrapped up [in darkness]'</p>
      <p>Surah At-Takwir Verse 2</p>
      <section style={{border:"solid", borderRadius:"10px", borderColor:"gray", padding:"15px",backgroundColor:"white"}}>
        <strong style={{ color: '#303f9f' }}>Will the Sun Lose Its Shimmer?</strong>
        <p>
          Yes, the Sun will eventually lose its shimmer, but this process will take billions of years according to scientists. The Sun is currently
          in its <strong>Main Sequence</strong> phase, where it shines by converting hydrogen into helium through nuclear fusion. This will continue for
          another 5 billion years. However, data is showing anomalies everywhere within the earth, on the earth, on the moon, and on our very own Sun...
        </p>
      </section>
<br></br>
      <section style={{border:"solid", borderRadius:"10px", backgroundColor:"white", borderColor:"orange", padding:"15px"}}>
        <strong style={{ color: '#303f9f' }}>The Projected Phases of the Sun's Life Cycle:</strong>
        <br></br>
        <br></br>
        <img style={{maxWidth:"300px", borderRadius:"10px",border:"solid"}} src={hrdiagram}></img>
        <br></br>
        <em style={{color:"gray"}}>The Hertzsprung Russel Diagram shows where a star lies in their life cycle according to their color-index and absolute-magnitude</em>
        <br></br>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {['Main Sequence', 'Red Giant', 'Planetary Nebula', 'White Dwarf', 'Black Dwarf'].map((phase, index) => (
            <li key={index} style={{
              margin: '10px 0',
              padding: '10px',
              backgroundColor: 'white',
              borderRadius: '5px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
            }}>
              <strong>{phase}:</strong> {getPhaseDescription(phase)}
            </li>
          ))}
        </ul>
      </section>
      <br></br>
      <section style={{ marginTop: '20px', backgroundColor: 'white', padding: '20px', borderRadius: '5px', border:"solid", borderColor:"yellow" }}>
      <h3 style={{ color: '#303f9f' }}>What is the Solar Maximum</h3>

<p>Solar maximums occur due to the Sun's complex magnetic field dynamics, which go through an approximately 11-year cycle. During a solar maximum, heightened solar activity happens because the Sun's magnetic field becomes highly distorted and tangled, causing an increase in sunspots, solar flares, and coronal mass ejections (CMEs). As the Sun’s magnetic field lines twist and reconnect, this intense magnetic activity releases enormous amounts of energy, leading to more frequent and powerful solar events. The heightened activity also results from the Sun reversing its magnetic poles at the peak of the cycle, further driving disruptions and increasing solar emissions. These fluctuations contribute to more intense radiation, influencing space weather and sometimes affecting Earth’s magnetic environment.</p>


<img style={{maxWidth:"500px"}} src={lights}></img>
<br></br>
<br></br>
<em>Northern Lights are a byproduct of Solar Activity</em>

      <section style={{ marginTop: '20px', backgroundColor: 'white', padding: '20px', borderRadius: '5px' }}>
        <h3 style={{ color: '#303f9f' }}>Current Solar Maximum and Activity Anomaly</h3>
        <p>
          As of September 2024, we are experiencing an unexpected anomaly in solar activity. Initially, Solar Cycle 25 was predicted to be relatively weak, with a peak expected around July 2025. However, recent observations have led to significant revisions in these forecasts:
        </p>
        <ul>
          <li>NOAA's Space Weather Prediction Center updated their prediction in October 2023, stating that Solar Cycle 25 is expected to peak between January and October of 2024, earlier and stronger than previously thought.</li>
          <li>A study from the Indian Institute of Science Education and Research Kolkata, published in November 2023, suggests the peak is likely to occur in early 2024, with an uncertainty range extending to September 2024.</li>
          <li>As of June 2024, solar activity is still high and potentially increasing, with May and June 2024 seeing the highest sunspot numbers since 2002.</li>
        </ul>
        <p>
          This unexpectedly strong solar activity has led to more frequent and intense auroral displays, even at lower latitudes. It also poses potential risks to satellites, GPS systems, and other technologies sensitive to space weather. The ongoing nature of this heightened activity underscores the complexity of solar cycles and the challenges in accurately predicting space weather.
        </p>
      </section>
</section>

      <footer style={{ marginTop: '20px', fontSize: '0.9em', color: '#666' }}>
        <p>Sources:</p>
        <ol>
          <li>NOAA Space Weather Prediction Center. (2023). Solar Cycle 25 Forecast Update. Retrieved September 13, 2024.</li>
          <li>Indian Institute of Science Education and Research Kolkata. (2023). Solar Cycle 25 Peak Prediction. Retrieved September 13, 2024.</li>
          <li>Space.com. (2024). Solar Cycle 25 Activity Update. Retrieved September 13, 2024.</li>
        </ol>
      </footer>
    </div>
</>
  );
};

const getPhaseDescription = (phase) => {
  const descriptions = {
    'Main Sequence': "The current stage of the Sun, where it shines by converting hydrogen into helium through nuclear fusion. This will continue for another 5 billion years.",
    'Red Giant': "After the hydrogen in its core is depleted, the Sun will expand into a red giant, growing large enough to engulf the inner planets. It will cool down but still be very bright.",
    'Planetary Nebula': "The Sun will shed its outer layers, leaving behind a core surrounded by a glowing cloud of gas.",
    'White Dwarf': "The remaining core will collapse into a white dwarf, a dense and faintly glowing remnant. Over billions of years, even this faint glow will fade.",
    'Black Dwarf': "Finally, the Sun will cool and darken, becoming a black dwarf, having lost all of its shimmer."
  };
  return descriptions[phase];
};

export default SunLifeCycle;