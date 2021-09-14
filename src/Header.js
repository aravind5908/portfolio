import React,{ useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


function Header() {
    const [click, setClick] = useState(false);

    const handleClick = () =>setClick(!click)
    return (
        <div>
            <Nav>
            <a class="logo" href="/">AK</a>
            
            
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li><NavLink exact to="/" className="hover" onClick={handleClick}>Home</NavLink></li>
                <li><NavLink exact to="/About" className="hover" onClick={handleClick}>About</NavLink></li>
                <li><NavLink exact to="/Skills" className="hover" onClick={handleClick}>Skills</NavLink></li>
                <li><NavLink exact to="/Service" className="hover" onClick={handleClick}>Service</NavLink></li>
                <li><NavLink exact to="/Portfolio" className="hover" onClick={handleClick}>Portfolio</NavLink></li>
                <li><NavLink exact to="/Contact" className="hover" onClick={handleClick}>Contact me</NavLink></li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
            
                <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            </Nav>
        </div>
    )
}

export default Header;

const Nav = styled.nav`
width:100%;
height:65px;
padding: 0px 0px 0px 0px;
align-items:center;
justify-content:space-between;
display:flex;

NavLink{

}

.logo{
    margin-left:40px;
    display: flex;
    font-family: 'Noto Serif';
    align-items: center;
    justify-content: center;
    font-size:40px;
    color: #1B4F72;
    cursor:pointer;
    padding-top: 13px;
    
}


ul{
    list-style:none;
    display:flex;
    flex-flow:row nowrap;
    padding-right:30px;

   /*  @media (max-width: 768px) {
        flex-flow:column nowrap;
        background-color:#29A6A6;
        color:#fff;
        align-items:center;

        padding-top:3.5rem;
        position:fixed;
        top:0;
        height:100vh;
        width:100%;
    } */
}

li{
    padding:25px;
    font-weight:bold;
}

.hover {
    
    font-weight:bold;
    
    cursor:pointer;
}

.hover:hover {
    color: #8A3FFC;
    font-weight:bold;
    cursor:pointer;
}

.nav-icon{
    display:none;
}

.fa-bars {
    color: black;
}

.fa-times {
    color: black;
}






@media screen and (max-width: 960px) {
    @media screen and (max-width: 960px) {
        .nav-menu {
          display: flex;
          flex-direction: column;
          width: 100%;
          border-top: 1pxsolid #fff;
          position: absolute;
          top: 80px;
          left: -110%;
          opacity: 1;
          transition: all 0.5s ease;
        }
      
        .nav-menu.active {
          background: #1f5156;
          left: 0px;
          opacity: 1;
          transition: all 0.5s ease;
          z-index: 1;
        }
        .nav-item .active {
          color: #ffdd40;
          border: none;
        }
        .nav-links {
          padding: 1.5rem;
          width: 100%;
          display: table;
        }
      
        .nav-icon {
          display: block;
          position: absolute;
          top: 0;
          right: 0;
          transform: translate(-100%, 60%);
          font-size: 1.8rem;
          cursor: pointer;
          color: #ffdd40;
        }

    li{
        background:none;
        color:white;
        text-align:center;
        
        
    }
    a{
        background:none;
        color:white;
        text-align:center;
    }
`
