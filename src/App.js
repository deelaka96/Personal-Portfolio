import React from 'react';
import './App.css';
import Nav from './components/nav/navHeader';
import linkedin from './assets/linkedin_icon.png';
import youtube from './assets/youtube_icon.png';
import Section from './components/section';
import Career from './components/career/careerSection';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
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
      <Section title={'Experiences'}>
        <Career
          company={'ICP Technologies (PVT) LTD'}
          position={'Senior Software Engineer / Lead'}
          duration={'1.5yrs'}
          description={'blah blah blah'}
        />
      </Section>
    </div>


  );
}

export default App;
