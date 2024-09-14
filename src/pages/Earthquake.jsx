import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Earthquake= () => {
  const [earthquakes, setEarthquakes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEarthquakes = async () => {
      try {
        const response = await fetch(
          'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch earthquake data');
        }
        const data = await response.json();
        setEarthquakes(data.features);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchEarthquakes();
  }, []);

  if (loading) return <p>Loading earthquake data...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
                <Link to="/">Home</Link>

      <h2>Earthquakes (Magnitude 4.5+)</h2>
      <p>"And We have already destroyed what surrounds you of [those] cities, and We have diversified the signs that perhaps they might return [from disbelief]."
     </p> <p>Quran Surah Al-Ahqaf verse 27</p>
      <table>
        <thead>
          <tr>
            <th>Location</th>
            <th>Magnitude</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {earthquakes.map((quake) => (
            <tr key={quake.id}>
              <td>{quake.properties.place}</td>
              <td>{quake.properties.mag.toFixed(1)}</td>
              <td>{new Date(quake.properties.time).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Earthquake;
