import React ,{useState} from 'react';
import { NavDropdown } from 'react-bootstrap';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars , faX } from '@fortawesome/free-solid-svg-icons'
import logo from '../../assets/pogo_logo.png'
import {NavLink , Link}from "react-router-dom";
export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {

    setIsOpen(!isOpen);
  };
    return(
        <nav className="navbar navbar-expand-custom navbar-mainbg">
        <Link to='/'><img src={logo} className='navbar-brand navbar-logo logo_img' /></Link>
        
        {!isOpen ?
            <button className="navbar-toggler" type="button" onClick={toggleDropdown}>
                <FontAwesomeIcon icon={faBars} style={{color: "#66fcf1",}} />
          </button>
          : <button className="navbar-toggler" type="button" onClick={toggleDropdown}>
          <FontAwesomeIcon icon={faX} style={{color: "#66fcf1",}} />
        </button>
        }
        <div className={`collapse navbar-collapse navbarSupportedContent ${isOpen ? "show" : ""}`}  id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                
                <li className="nav-item">
                    <NavLink className={({ isActive }) => 
                      (isActive ? "nav-link link-active" : "nav-link ")}  exact to='/' ><i className="fas fa-tachometer-alt"></i>Acceuil</NavLink>
                </li>
                
                <li className="nav-item">
                    <NavLink className={({ isActive }) => 
                      (isActive ? "nav-link link-active" : "nav-link ")} onClick={toggleDropdown} to='/about'><i className="far fa-clone"></i>À propos</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={({ isActive }) => 
                      (isActive ? "nav-link link-active" : "nav-link ")} onClick={toggleDropdown} to='/comment'><i className="far fa-calendar-alt"></i>Comment ça marche</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={({ isActive }) => 
                      (isActive ? "nav-link link-active" : "nav-link ")} onClick={toggleDropdown} to='/tarif'><i className="far fa-chart-bar"></i>Nos tarifs</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={({ isActive }) => 
                      (isActive ? "nav-link link-active" : "nav-link ")} onClick={toggleDropdown} to='/gallery'><i className="far fa-chart-bar"></i>Galerie</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={({ isActive }) => 
                      (isActive ? "nav-link link-active" : "nav-link ")} onClick={toggleDropdown} to='/reserver'><i className="far fa-chart-bar"></i>Reserver</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={({ isActive }) => 
                      (isActive ? "nav-link link-active" : "nav-link ")} onClick={toggleDropdown} to='/contact'><i className="far fa-chart-bar"></i>Contactez-Nous</NavLink>
                </li>
                
                
            </ul>
            {isOpen ? "" :<button className='register-btn'><Link to='/registration' className='register-link'>Register Now</Link></button>}
        </div>
    </nav>

    )
}