import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [quakes, setQuakes] = useState([]);
  const [count, setCount] = useState(5);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  
  // Use a ref to track the latest quake ID to avoid double-alerting
  const lastQuakeId = useRef(null);
  // Audio object for notification
  const alertAudio = useRef(new Audio('https://actions.google.com/sounds/v1/alarms/beep_short.ogg'));

  const fetchQuakes = async () => {
    try {
      const response = await fetch(
        `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&eventtype=earthquake&orderby=time&limit=${count}`
      );
      const data = await response.json();
      const newQuakes = data.features;

      if (newQuakes.length > 0) {
        // Check if the most recent quake is new
        if (lastQuakeId.current && newQuakes.id !== lastQuakeId.current) {
          alertAudio.current.play().catch(e => console.log("Audio play blocked: ", e));
        }
        lastQuakeId.current = newQuakes.id;
      }

      setQuakes(newQuakes);
      setLoading(false);
    } catch (error) {
      setErrorMsg("Network Error");
      setLoading(false);
    }
  };

  // Polling logic: Runs every 2 minutes
  useEffect(() => {
    fetchQuakes();
    const interval = setInterval(fetchQuakes, 120000);
    return () => clearInterval(interval); // Cleanup to prevent memory leaks
  }, [count]);

  if (loading) return <div className="screen-center">Locating tremors...</div>;
  if (errorMsg) return <div className="screen-center">{errorMsg}</div>;

  return (
    <div className="container">
      <div className="header">
        <button className="touch-btn" onClick={() => setCount(prev => Math.max(3, prev - 1))}>-</button>
        <span className="title">Latest {count} Quakes</span>
        <button className="touch-btn" onClick={() => setCount(prev => prev + 1)}>+</button>
      </div>

      <div className="list-container">
        {quakes.map(q => {
          const date = new Date(q.properties.time);
          const timeStr = `${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
          
          return (
            <div key={q.id} className="quake-card">
              <div className="mag" style={{ color: q.properties.mag >= 5 ? '#ff4d4d' : '#90ee90' }}>
                {q.properties.mag.toFixed(1)}
              </div>
              <div className="info">
                <div className="place">{q.properties.place}</div>
                <div className="time">{timeStr}</div>
              </div>
            </div>
          );
        })}
      </div>
      <button className="refresh-bar" onClick={fetchQuakes}>REFRESH NOW</button>
    </div>
  );
}

export default App;