import React, { useEffect, useState } from 'react';
import './App.css';
import Nav from './components/nav/navHeader';
import linkedin from './assets/linkedin_icon.png';
import youtube from './assets/youtube_icon.png';
import Section from './components/section';
import Career from './components/career/careerSection';
import Api from './utils/apiCall';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  const [exp, setExp] = useState();

  useEffect(() => {
    async function fetchData() {
      const result = await Api.getAll('experiences');
      setExp(result)
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <Nav></Nav>
      <header className="App-header">
        <code>Hi! Im Deelaka Algawatta</code>
        <p className='subText'>Software Engineer, Tech Enthusiast</p>
        <div className='social'>
          <a href="https://www.linkedin.com/in/deelaka-algawatta"><img src={linkedin} className="social-logo" alt="linkedin" /></a>
          <a href="https://www.youtube.com/channel/UC9YZY_UBf2NmlmeMdZJCmsQ"> <img src={youtube} className="social-logo" alt="youtube" /></a>
        </div>
        <div className='scroll'>
          <code>ˇ</code>
        </div>
      </header>
      <Section title={'Experiences'}>
        <Row>
          <Col>1 of 1</Col>
        </Row>
        {
          exp?.data.length > 0 ? (
            exp.data.map((obj) => {
              return <Career
                company={obj.attributes.company}
                position={obj.attributes.position}
                duration={obj.attributes.duration}
                description={obj.attributes.description}
              />
            })) : <p>No experiences found :(</p>
        }
      </Section>
    </div>

  );
}

export default App;
