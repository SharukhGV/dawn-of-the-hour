import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [quakes, setQuakes] = useState([]);
  const [count, setCount] = useState(5);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [mode, setMode] = useState("time"); // 'time', 'magnitude', or 'nearest'
  
  const lastQuakeId = useRef(null);
  const alertAudio = useRef(new Audio('https://actions.google.com/sounds/v1/alarms/beep_short.ogg'));

  const fetchQuakes = async () => {
    setLoading(true);
    let url = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&eventtype=earthquake&limit=${count}`;

    try {
      if (mode === "time") {
        url += `&orderby=time`;
      } else if (mode === "magnitude") {
        url += `&orderby=magnitude`;
      } else if (mode === "nearest") {
        // Get user location
        const pos = await new Promise((res, rej) => {
          navigator.geolocation.getCurrentPosition(res, rej, { timeout: 5000 });
        });
        const { latitude, longitude } = pos.coords;
        // Search within 1000km of user, ordered by time
        url += `&latitude=${latitude}&longitude=${longitude}&maxradiuskm=1000&orderby=time`;
      }

      const response = await fetch(url);
      const data = await response.json();
      const newQuakes = data.features;

      if (newQuakes.length > 0 && lastQuakeId.current && newQuakes.id !== lastQuakeId.current) {
        alertAudio.current.play().catch(e => console.log("Audio blocked", e));
      }
      
      lastQuakeId.current = newQuakes?.id;
      setQuakes(newQuakes);
      setErrorMsg("");
    } catch (error) {
      setErrorMsg(mode === "nearest" ? "Location access denied or timeout." : "Network Error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuakes();
    const interval = setInterval(fetchQuakes, 120000);
    return () => clearInterval(interval);
  }, [count, mode]); // Refetch when count or sorting mode changes

  return (
    <div className="container">
      <div className="header">
        <button className="touch-btn" onClick={() => setCount(prev => Math.max(3, prev - 1))}>-</button>
        <span className="title">{mode.toUpperCase()} ({count})</span>
        <button className="touch-btn" onClick={() => setCount(prev => prev + 1)}>+</button>
      </div>

      {/* Filter Buttons */}
      <div className="filter-bar">
        <button 
          className={`filter-btn ${mode === 'time' ? 'active' : ''}`} 
          onClick={() => setMode('time')}
        >Recent</button>
        <button 
          className={`filter-btn ${mode === 'magnitude' ? 'active' : ''}`} 
          onClick={() => setMode('magnitude')}
        >Strongest</button>
        <button 
          className={`filter-btn ${mode === 'nearest' ? 'active' : ''}`} 
          onClick={() => setMode('nearest')}
        >Nearest</button>
      </div>

      {loading ? (
        <div className="screen-center">Locating tremors...</div>
      ) : errorMsg ? (
        <div className="screen-center">{errorMsg}</div>
      ) : (
        <div className="list-container">
          {quakes.map(q => {
            const date = new Date(q.properties.time);
            const timeStr = `${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
            
            return (
              <div key={q.id} className="quake-card">
                <div className="mag" style={{ color: q.properties.mag >= 5 ? '#ff4d4d' : '#90ee90' }}>
                  {q.properties.mag?.toFixed(1) || "N/A"}
                </div>
                <div className="info">
                  <div className="place">{q.properties.place}</div>
                  <div className="time">{timeStr}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      
      <button className="refresh-bar" onClick={fetchQuakes}>REFRESH NOW</button>
    </div>
  );
}

export default App;