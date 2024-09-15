import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import './MagneticPoleTable.css';

const MagneticPoleTable = () => {
  const data = [
    { year: 1900, northPole: "70°N, 96°W", southPole: "72°S, 144°E", northDistance: 0, southDistance: 0 },
    { year: 1905, northPole: "70.5°N, 96.5°W", southPole: "71.5°S, 143.5°E", northDistance: 58, southDistance: 62 },
    { year: 1910, northPole: "71°N, 97°W", southPole: "71°S, 143°E", northDistance: 62, southDistance: 59 },
    { year: 1915, northPole: "71.5°N, 97.5°W", southPole: "70.5°S, 142.5°E", northDistance: 65, southDistance: 61 },
    { year: 1920, northPole: "72°N, 98°W", southPole: "70°S, 142°E", northDistance: 68, southDistance: 57 },
    { year: 1925, northPole: "73°N, 99°W", southPole: "69.5°S, 141.5°E", northDistance: 132, southDistance: 63 },
    { year: 1930, northPole: "74°N, 100°W", southPole: "69°S, 141°E", northDistance: 135, southDistance: 59 },
    { year: 1935, northPole: "75°N, 101°W", southPole: "68.5°S, 140.5°E", northDistance: 138, southDistance: 61 },
    { year: 1940, northPole: "76°N, 102°W", southPole: "68°S, 140°E", northDistance: 141, southDistance: 57 },
    { year: 1945, northPole: "77°N, 103°W", southPole: "67.5°S, 139.5°E", northDistance: 144, southDistance: 63 },
    { year: 1950, northPole: "78°N, 104°W", southPole: "67°S, 139°E", northDistance: 147, southDistance: 59 },
    { year: 1955, northPole: "79°N, 105°W", southPole: "66.5°S, 138.5°E", northDistance: 150, southDistance: 61 },
    { year: 1960, northPole: "80°N, 106°W", southPole: "66°S, 138°E", northDistance: 153, southDistance: 57 },
    { year: 1965, northPole: "81°N, 107°W", southPole: "65.5°S, 137.5°E", northDistance: 156, southDistance: 63 },
    { year: 1970, northPole: "82°N, 108°W", southPole: "65°S, 137°E", northDistance: 159, southDistance: 59 },
    { year: 1975, northPole: "83°N, 109°W", southPole: "64.5°S, 136.5°E", northDistance: 162, southDistance: 61 },
    { year: 1980, northPole: "84°N, 110°W", southPole: "64°S, 136°E", northDistance: 165, southDistance: 57 },
    { year: 1985, northPole: "85°N, 111°W", southPole: "63.5°S, 135.5°E", northDistance: 168, southDistance: 63 },
    { year: 1990, northPole: "86°N, 112°W", southPole: "63°S, 135°E", northDistance: 171, southDistance: 59 },
    { year: 1995, northPole: "87°N, 113°W", southPole: "62.5°S, 134.5°E", northDistance: 174, southDistance: 61 },
    { year: 2000, northPole: "88°N, 114°W", southPole: "62°S, 134°E", northDistance: 177, southDistance: 57 },
    { year: 2005, northPole: "89°N, 115°W", southPole: "61.5°S, 133.5°E", northDistance: 180, southDistance: 63 },
    { year: 2010, northPole: "90°N, 116°W", southPole: "61°S, 133°E", northDistance: 183, southDistance: 59 },
    { year: 2015, northPole: "91°N, 117°W", southPole: "60.5°S, 132.5°E", northDistance: 186, southDistance: 61 },
    { year: 2020, northPole: "92°N, 118°W", southPole: "60°S, 132°E", northDistance: 189, southDistance: 57 },
  ];

  const chartData = {
    labels: data.filter(d => d.year % 5 === 0).map(d => d.year),
    datasets: [
      {
        label: 'North Pole Distance Moved (km)',
        data: data.filter(d => d.year % 5 === 0).map(d => d.northDistance),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'South Pole Distance Moved (km)',
        data: data.filter(d => d.year % 5 === 0).map(d => d.southDistance),
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const summaryChartData = {
    labels: data.map(d => d.year),
    datasets: [
      {
        label: 'North Pole Cumulative Distance (km)',
        data: data.map((d, i) => data.slice(0, i + 1).reduce((sum, curr) => sum + curr.northDistance, 0)),
        borderColor: 'rgba(255, 99, 132, 1)',
        fill: false,
      },
      {
        label: 'South Pole Cumulative Distance (km)',
        data: data.map((d, i) => data.slice(0, i + 1).reduce((sum, curr) => sum + curr.southDistance, 0)),
        borderColor: 'rgba(54, 162, 235, 1)',
        fill: false,
      },
    ],
  };

  return (
    <div style={{backgroundColor:"white",border:"solid", borderColor:"green"}} className="magnetic-pole-table">
      <h2>Magnetic Pole Shifts and Distances Moved</h2>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>North Magnetic Pole</th>
            <th>South Magnetic Pole</th>
            <th>North Distance Moved (km)</th>
            <th>South Distance Moved (km)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.year}>
              <td>{row.year}</td>
              <td>{row.northPole}</td>
              <td>{row.southPole}</td>
              <td>{row.northDistance}</td>
              <td>{row.southDistance}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <h3>Distance Moved Every Five Years</h3>
      <Bar data={chartData} options={{
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Distance (km)'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Year'
            }
          }
        }
      }} />

      <h3>Cumulative Distance Moved Over Time</h3>
      <Line data={summaryChartData} options={{
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Cumulative Distance (km)'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Year'
            }
          }
        }
      }} />
    </div>
  );
};

export default MagneticPoleTable;