import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home';
import { Link } from 'react-router-dom';
import MagneticPoleAnomaly from './pages/MagneticPoleAnomaly';
import SunLifeCycle from './pages/components.jsx/SunLifeCycle';
import MoonquakeInfo from './pages/components.jsx/MoonquakeInfo';
import ReversingCore from './pages/components.jsx/ReversingCore';
import EarthRotationSpeed from './pages/components.jsx/EarthRotationSpeed';
import Earthquake from './pages/Earthquake';
function App() {

  return (
    <>

<Router>

  {/* <NavigationBar toggleTheme={toggleTheme} theme={theme} setTheme={setTheme} set  settoggleLOGIN={settoggleLOGIN} toggleLOGIN={toggleLOGIN} accessToken={accessToken} setLoginUsername={setLoginUsername} loginUsername={loginUsername} /> */}
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/magneticpoleanomaly" element={<MagneticPoleAnomaly/>} />
    <Route path="/sunlifecycle" element={<SunLifeCycle/>} />
    <Route path="/mooninfo" element={<MoonquakeInfo/>} />
    <Route path="/earthinfo" element={<ReversingCore/>} />
    <Route path="/earthrotation" element={<EarthRotationSpeed/>} />
    <Route path="/earthquakes" element={<Earthquake/>} />


    {/* <Route path="/*" element={<NotFound />} /> */}

  </Routes>
</Router>

</>

  )
}

export default App
