import React from 'react';
import './App.css';
import linkedin from './assests/linkedin_icon.png';
import youtube from './assests/youtube_icon.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <code>Hi! Im Deelaka Algawatta</code>
        <p>Software Engineer, Tech Enthusiast</p>
        <div className='social'>
          <a href="https://www.linkedin.com/in/deelaka-algawatta"><img src={linkedin} className="social-logo" alt="linkedin" /></a>
          <a href="https://www.youtube.com/channel/UC9YZY_UBf2NmlmeMdZJCmsQ"> <img src={youtube} className="social-logo" alt="youtube" /></a>
        </div>
        <div className='scroll'>
          <code>ˇ</code>
        </div>
        <div class='icon-scroll'></div>
      </header>
    </div>
  );
}

export default App;
