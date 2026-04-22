import { useState, useEffect, useRef, useCallback } from 'react';
import './App.css';

function App() {
  const [quakes, setQuakes] = useState([]);
  const [count, setCount] = useState(5);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [mode, setMode] = useState("time");
  
  const lastQuakeId = useRef(null);
  const alertAudio = useRef(new Audio('https://actions.google.com/sounds/v1/alarms/beep_short.ogg'));

  // Memoized fetch function to prevent unnecessary re-creations
  const fetchQuakes = useCallback(async (isAutoPoll = false) => {
    // Only show the full-screen loader on manual interaction, not background polling
    if (!isAutoPoll) setLoading(true);
    
    let url = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&eventtype=earthquake&limit=${count}`;

    try {
      if (mode === "time") {
        url += `&orderby=time`;
      } else if (mode === "magnitude") {
        url += `&orderby=magnitude`;
      } else if (mode === "nearest") {
        const pos = await new Promise((res, rej) => {
          navigator.geolocation.getCurrentPosition(res, rej, { timeout: 5000 });
        });
        url += `&latitude=${pos.coords.latitude}&longitude=${pos.coords.longitude}&maxradiuskm=1000&orderby=time`;
      }

      const response = await fetch(url);
      const data = await response.json();
      const newQuakes = data.features;

      // Audio alert logic (only for "Recent" mode)
      if (mode === "time" && newQuakes.length > 0 && lastQuakeId.current) {
        if (newQuakes.id !== lastQuakeId.current) {
          alertAudio.current.play().catch(() => {});
        }
      }
      
      lastQuakeId.current = newQuakes?.id;
      setQuakes(newQuakes);
      setErrorMsg("");
    } catch (error) {
      setErrorMsg(mode === "nearest" ? "Location access denied." : "Network Error");
    } finally {
      setLoading(false);
    }
  }, [count, mode]);

  // Lifecycle Management
  useEffect(() => {
    fetchQuakes();

    // Auto-poll every 5 minutes ONLY if we are in "Recent" mode
    let interval;
    if (mode === "time") {
      interval = setInterval(() => fetchQuakes(true), 300000); 
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [fetchQuakes, mode]); // Mode change triggers immediate fetch, then resets interval

  return (
    <div className="container">
      <div className="header">
        <button className="touch-btn" onClick={() => setCount(prev => Math.max(3, prev - 1))}>-</button>
        <span className="title">{mode.toUpperCase()} ({count})</span>
        <button className="touch-btn" onClick={() => setCount(prev => Math.min(20, prev + 1))}>+</button>
      </div>

      <div className="filter-bar">
        <button className={mode === 'time' ? 'active' : ''} onClick={() => setMode('time')}>Recent</button>
        <button className={mode === 'magnitude' ? 'active' : ''} onClick={() => setMode('magnitude')}>Strongest</button>
        <button className={mode === 'nearest' ? 'active' : ''} onClick={() => setMode('nearest')}>Nearest</button>
      </div>

      {loading ? (
        <div className="screen-center">Scanning fault lines...</div>
      ) : (
        <div className="list-container">
          {errorMsg && <div className="error-text">{errorMsg}</div>}
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
      
      <button className="refresh-bar" onClick={() => fetchQuakes()}>REFRESH NOW</button>
    </div>
  );
}

export default App;