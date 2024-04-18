import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Splash.css';
// import './searchlogo.png'
import searchLogo from './searchlogo.png';


function Splash() {
  let navigate = useNavigate();
  React.useEffect(() => {
    setTimeout(() => navigate('/home'), 3000); // Redirect after 3 seconds
  }, [navigate]);

  return (
    <div className="splash">
      {/* <img src="./searchlogo.png" alt="Quran Semantic Search Logo" className="logo"/> */}
      <img src={searchLogo} alt="Quran Semantic Search Logo" className="logo"/>

      <h1>Quran Semantic Search</h1>
      <progress className="loading-bar"></progress>
    </div>
  );
}

export default Splash;
