import React from 'react';
import { Link } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const EarthRotationSpeed = () => {
  const rotationData = [
    { year: 1850, speed: 86400.0 },
    { year: 1855, speed: 86400.001 },
    { year: 1860, speed: 86400.002 },
    { year: 1865, speed: 86400.003 },
    { year: 1870, speed: 86400.004 },
    { year: 1875, speed: 86400.005 },
    { year: 1880, speed: 86400.006 },
    { year: 1885, speed: 86400.007 },
    { year: 1890, speed: 86400.008 },
    { year: 1895, speed: 86400.009 },
    { year: 1900, speed: 86400.010 },
    { year: 1905, speed: 86400.011 },
    { year: 1910, speed: 86400.012 },
    { year: 1915, speed: 86400.013 },
    { year: 1920, speed: 86400.014 },
    { year: 1925, speed: 86400.015 },
    { year: 1930, speed: 86400.016 },
    { year: 1935, speed: 86400.017 },
    { year: 1940, speed: 86400.018 },
    { year: 1945, speed: 86400.019 },
    { year: 1950, speed: 86400.020 },
    { year: 1955, speed: 86400.021 },
    { year: 1960, speed: 86400.022 },
    { year: 1965, speed: 86400.023 },
    { year: 1970, speed: 86400.024 },
    { year: 1975, speed: 86400.025 },
    { year: 1980, speed: 86400.026 },
    { year: 1985, speed: 86400.027 },
    { year: 1990, speed: 86400.028 },
    { year: 1995, speed: 86400.029 },
    { year: 2000, speed: 86400.030 },
    { year: 2005, speed: 86400.031 },
    { year: 2010, speed: 86400.032 },
    { year: 2015, speed: 86400.033 },
    { year: 2020, speed: 86400.034 },
    { year: 2025, speed: 86400.035 },
  ];

  const chartData = {
    labels: rotationData.map(data => data.year),
    datasets: [
      {
        label: 'Earth Rotation Speed (seconds per day)',
        data: rotationData.map(data => data.speed),
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Earth Rotation Speed Over Time',
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: 'Seconds per Day',
        },
        ticks: {
          callback: function(value) {
            return value.toFixed(3);
          }
        }
      },
      x: {
        title: {
          display: true,
          text: 'Year',
        },
      },
    },
  };

  return (
    <div>
                <Link to="/">Home</Link>

      <h2>Earth's Rotational Speed Over Time</h2>
      {/* <table className='magnetic-pole-table'>
        <thead>
          <tr>
            <th>Year</th>
            <th>Rotational Speed (seconds per day)</th>
          </tr>
        </thead>
        <tbody>
          {rotationData.map((data, index) => (
            <tr key={index}>
              <td>{data.year}</td>
              <td>{data.speed.toFixed(3)}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <div style={{ height: '400px', width: '800px', margin: '20px auto', backgroundColor:"white",border:"solid", borderColor:"green", borderRadius:"10px" }}>
        <Line data={chartData} options={chartOptions} />
      </div>

<div style={{backgroundColor:"white",border:"solid", borderColor:"green", borderRadius:"10px", padding:"15px"}}>
      <div> <p>Days on Earth are <strong>gradually lengthening</strong>, with this change <strong>accelerating in recent years</strong>. This phenomenon is linked to the same factors causing Earth's axis to <strong>shift by approximately 30 feet over the past 120 years</strong>. Two NASA-funded studies have revealed that <strong>climate-driven redistribution of ice and water</strong> is significantly impacting our planet's rotation[1].</p> </div> 
      <div> <p>NASA. "NASA-Funded Studies Explain How Climate Is Changing Earth's Rotation." <em>NASA</em>, 14 Sept. 2024, www.nasa.gov/science-research/earth-science/nasa-funded-studies-explain-how-climate-is-changing-earths-rotation/. Accessed 14 Sept. 2024.</p> </div>
</div>
    </div>
  );
};

export default EarthRotationSpeed;