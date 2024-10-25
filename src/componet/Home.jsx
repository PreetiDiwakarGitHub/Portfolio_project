import React from 'react';
import './Home.css'; // Make sure this path is correct
import preeti_diwakar from '../componet/Assets/preeti_diwakar.png';

function Home() {
  return (
    <div className="Home_Text">
      <div>
        <h1>
        <span className="highlight">I'm</span>
        </h1>
        <h2>
          <span className="highlight">Preeti Diwakar</span>
        </h2>
        <h1>
        <span className="normal"> Frondend Developer</span>
        </h1>
        <p>
          I am passionate about creating efficient and user-friendly web applications. With a focus on problem-solving and continuous learning, I build solutions that drive results and improve user experience.
        </p>
        <button className='resumebtn'><a href ="https://drive.google.com/file/d/1fPvKW8tOQmmQ0VFC6NgNNDw5wkjWlqk8/view">Resume</a></button>
      </div>
      <div className="image">
        <img src={preeti_diwakar} alt="Preeti Diwakar" />
      </div>
    </div>
  );
}

export default Home;
