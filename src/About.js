import React from 'react'
import styled from 'styled-components';
import profile from '../src/About.jpg';

function About() {
    return (
      <div>
        <Aboutme>
          <h1 className="about-title">About Me</h1><br />
          <p className="about-subtitle">My Introduction </p><br />
          <img className="profile"  width="300px" height="300px" src={profile} alt='profile pic'/><br /><br />
          <p className="about-description">A self-motivated and passionate individual who loves to code👨🏻‍💻,<br /> build🛠 and colloborate🤝 in creating software products that creates impact</p>
        </Aboutme>
      </div>
    )
}

export default About


const Aboutme = styled.div`

text-align: center;
justify-content: center;
flex-direction: column;
padding:80px;

h1{
  line-height: 0.2;
}

p{
  line-height:1.8;
  color:#8B837E;
}

img{
  border-radius:10%
  
  }

  .about-description{
    
    display:flex;
    text-align: center;
    justify-content: center;
    
    
  }

  @media (max-width:450px){
    padding:30px;
    margin-top: 50px;
}
`