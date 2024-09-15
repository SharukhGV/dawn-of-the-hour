import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import MagneticPoleTable from './components.jsx/MagneticPoleTable';
import MoonquakeInfo from './components.jsx/MoonquakeInfo';
import ReversingCore from './components.jsx/ReversingCore';
import { Link } from 'react-router-dom';

function MagneticPoleAnomaly(){
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const data = {
      labels: [1590, 1700, 1800, 1900, 2000, 2020],
      datasets: [
        {
          label: 'North Magnetic Pole',
          data: [
            { x: -83, y: 70 },
            { x: -84, y: 70 },
            { x: -85, y: 73 },
            { x: -96, y: 70 },
            { x: -71, y: 80 },
            { x: -86, y: 86 }
          ],
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'South Magnetic Pole',
          data: [
            { x: 144, y: -76 },
            { x: 138, y: -71 },
            { x: 132, y: -65 },
            { x: 144, y: -72 },
            { x: 138, y: -65 },
            { x: 137, y: -64 }
          ],
          borderColor: 'rgb(54, 162, 235)',
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
        }
      ]
    };

    const config = {
      type: 'scatter',
      data: data,
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Magnetic Pole Shifts Over Time'
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const label = context.dataset.label || '';
                const year = context.parsed.x;
                const latitude = context.parsed.y;
                const longitude = context.raw.x;
                return `${label}: (${longitude}°, ${latitude}°) in ${year}`;
              }
            }
          }
        },
        scales: {
          x: {
            type: 'linear',
            position: 'bottom',
            title: {
              display: true,
              text: 'Year'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Latitude'
            }
          }
        }
      }
    };

    const chart = new Chart(ctx, config);

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div>
        <Link to="/">Home</Link>

      <h2>Magnetic Pole Anomaly</h2>
      
<div style={{backgroundColor:"white",border:"solid", borderColor:"green", borderRadius:"10px", padding:"15px"}}>
      <canvas ref={chartRef} />
      <p style={{color:'darkmagenta'}}>Current North Magnetic Pole (2020): 86°N, 86°W</p>
      <p style={{color:'blue'}}>Current South Magnetic Pole (2020): 64°S, 137°E</p>
</div>
<br></br>
<br></br>
<MagneticPoleTable/>

<br></br>
<div style={{backgroundColor:"white",border:"solid", borderColor:"green", borderRadius:"10px",padding:"15px"}}>

<div>
    <p><strong>Field Weakening:</strong></p>
    <p>Before a reversal, the magnetic field weakens significantly. This process can take thousands of years, and during this time, the magnetic poles may wander or temporarily coexist near the equator or other unusual locations.</p>
</div>

<div>
    <p><strong>Pole Migration:</strong></p>
    <p>The magnetic poles move toward their new positions (north becomes south and vice versa). As the poles shift, the overall geomagnetic field may become disorganized, leading to multiple poles or weak magnetic zones.</p>
</div>

<div>
    <p><strong>Magnetic Effects on Life:</strong></p>
    <p>While the weakening magnetic field could increase radiation exposure at Earth's surface, there is no evidence that past reversals have caused major disruptions to life or the planet's geophysical processes.</p>
</div>
</div>
<br></br>
<div style={{backgroundColor:"white",border:"solid", borderColor:"orange", borderRadius:"10px",padding:"15px"}}>
  <div >
    <p><strong>Paleomagnetism: What is it?</strong></p>
    <p>Paleomagnetism is the study of the record of Earth's magnetic field preserved in rocks, sediments, and archaeological materials. Magnetic minerals (like magnetite) in igneous and sedimentary rocks align themselves with the Earth's magnetic field at the time of their formation, preserving the direction and intensity of the field.</p>
</div>

<div>
    <p><strong>How it works:</strong></p>
    <p>When volcanic rocks cool or sedimentary layers form, the magnetic minerals within them align with the current magnetic field. Once solidified or compacted, these minerals lock in the direction of the field (north or south).</p>
    <p>By studying the orientation of magnetic minerals in rocks, researchers can determine the position of the magnetic poles at the time the rocks were formed.</p>
    <p>By analyzing different rock layers of varying ages, scientists can map the history of magnetic pole shifts, including full reversals and excursions (temporary shifts).</p>
</div>

<div>
    <p><strong>Use in correlation studies:</strong></p>
    <p>Scientists use paleomagnetic data to date geomagnetic reversals and shifts (e.g., the Brunhes-Matuyama reversal ~780,000 years ago) and compare these data with fossil records, extinction events, and other geological markers.</p>
</div>
</div>
{/* <div style={{border:"solid", borderColor:"blue", padding:"15px"}}><ReversingCore/></div> */}
   <br></br>
   <div style={{backgroundColor:"white",border:"solid", borderColor:"red", borderRadius:"10px",padding:"15px"}}>
   <div>
    <p><strong>The Great Dying: What happened:</strong></p>
    <p>The largest extinction event in Earth's history, with over 90% of marine species and 70% of terrestrial species wiped out. This event is linked to massive volcanic eruptions (Siberian Traps), resulting in global warming, ocean acidification, and anoxia.</p>
</div>

<div>
    <p><strong>Magnetic Link:</strong></p>
    <p>Some researchers have proposed that geomagnetic reversals or disturbances may have contributed to environmental instability during this period. There is evidence of increased volcanism, which is sometimes correlated with changes in the geomagnetic field. The mantle plume activity that caused the volcanic eruptions might have disturbed the magnetic field, but this is not seen as the primary extinction driver.</p>
</div>
   </div>

   <em class="citation"> National Centers for Environmental Information. "Wandering of the Geomagnetic Poles." National Oceanic and Atmospheric Administration, U.S. Department of Commerce, accessed 14 Sep. 2024, www.ncei.noaa.gov/products/wandering-geomagnetic-poles. </em> 
    </div>
  );
};

export default MagneticPoleAnomaly;