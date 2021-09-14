import React from 'react';
import profile from '../src/profile.png';
import styled from 'styled-components';
import Typical from 'react-typical';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FaWhatsapp } from 'react-icons/fa';



function Page1() {
    return (
        <Home>
            <Section1>
            <h1>Hi I'm Aravind Kalidindi 
        
        </h1>
        <h2>
          I'm a{' '}
        <Typical
        steps={[    
          'Web Developer .', 1000,
          'Web Peneration Tester .', 1000,
          'Cloud Architect .',1000]}
        loop={Infinity}
        wrapper="b"
      />
      </h2>
      <Iconsh>
       <a href="https://github.com/aravind5908" style={{}}><FaGithub size="2.5rem" style={{color:"#000",margin:10,cursor:'pointer'}} /></a>
       <a href="https://www.linkedin.com/in/aravind-kalidindi-a386a997/"><FaLinkedin size="2.5rem" color="#0077b5" style={{margin:10,textDecoration: 'none'}}  /></a>
       <a  href="mailto:aravind5908@gmail.com"><FcGoogle size="2.5rem" style={{margin:10}}  /></a>
       <a  href="tel:+91-8500608044"><FaWhatsapp size="2.5rem" color="#4FCE5D" style={{margin:10}} /></a>
      </Iconsh>    
            </Section1>
            <Section2>
                <img className="profile"  width="300px" height="300px" src={profile} alt='profile pic'/>
                
            </Section2>
        </Home>
    )
}

export default Page1

const Home = styled.div`
display:flex;

@media (max-width:1000px){
    flex-direction:column;
}
`

const Section1 = styled.div`
flex: 50%;

padding:260px 110px;

h1{
    font-size:40px !important;
    color: rgb(0, 28, 85);
}

h2{
    color: rgb(127, 141, 170);
    font-size:30px !important;
}





@media (max-width:1421px){
    h1{
        font-size:30px !important;
        color: rgb(0, 28, 85);
    }
    
    h2{
        color:color: rgb(127, 141, 170);
        font-size:20px !important;
    }

   
}



@media (max-width:1000px){
    order:2;
    
    align-items: center;
    justify-content: center;
        
    padding:100px;


h1{
    font-size:30px;
    display:flex;
    align-items: center;
    justify-content: center;
    color: rgb(0, 28, 85);
}

h2{
    color:rgb(127, 141, 170);
    font-size:20px;
    display:flex;
    align-items: center;
    justify-content: center;
}
}
@media (max-width:550px){
    order:2;
    
    align-items: center;
    justify-content: center;
        
    padding:50px;


h1{
    font-size:14px !important;
    display:flex;
    align-items: center;
    justify-content: center;
    color: rgb(0, 28, 85);
}

h2{
    color:rgb(127, 141, 170);
    font-size:10px !important;
    display:flex;
    align-items: center;
    justify-content: center;
}

@media (max-width:360px){
    order:2;
    
    align-items: center;
    justify-content: center;
        
    padding:50px;


h1{
    font-size:13px !important;
    display:flex;
    align-items: center;
    justify-content: center;
    color: rgb(0, 28, 85);
}

h2{
    color:rgb(127, 141, 170);
    font-size:8px !important;
    display:flex;
    align-items: center;
    justify-content: center;
}
`
const Iconsh = styled.div`
display:flex;



@media (max-width:1000px){
    display:flex;
    align-items: center;
    justify-content: center;
}

@media (max-width:450px){
    display:flex;
    align-items: center;
    justify-content: center;
    height:357px
    width:57px;
}
`
const Section2 = styled.div`

padding-top:100px;



img{
    display:flex;
    width:500px;
    height:500px;
    margin-right:150px
    

   
    
}

@media (max-width:1421px){
    order:1;
    align-tems:center;
    justify-content:center;
    padding-top:100px;

    

    img{
    
    display:flex;
    width:500px;
    height:500px;
    margin-right:150px;
    height:350px;
    width:350px;

        
        
        
    }
}


@media (max-width:1030px){
    order:1;
    align-tems:center;
    justify-content:center;
    padding:50px !important;
    

    img{
    
        display: flex;
        align-items: center;
        justify-content: center;
        display: block;
        margin-left: auto;
        margin-right: auto;
        height:350px;
        width:350px;
        margin-top:100px;
        
        
        
    }

    @media (max-width:500px){
        order:1;
        align-tems:center;
        justify-content:center;
        padding-top:10px !important;
        
    
        img{
        
            display: flex;
            align-items: center;
            justify-content: center;
            display: block;
            margin-left: auto;
            margin-right: auto;
            height:250px;
            width:250px;
            margin-top:100px;
            
            
            
        }
}

`