import React ,{useState} from 'react';
import './style.css'
import logo from '../../assets/pogo_logo.png'
import {Link}from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SocialIcon } from 'react-social-icons';
import { faLocationDot,faPhone,faHouse,faAddressCard ,faCircleInfo, faCreditCard,faComment ,faFileContract, faLink } from '@fortawesome/free-solid-svg-icons'
export default function Footer(){
    
    return(
        <footer className="footer">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<img src={logo} alt='company_logo' className='footer-logo'/>
  	 			<ul className='footer-1'>
  	 				<li><FontAwesomeIcon icon={faLocationDot} style={{color: "#66fcf1",}} /><span  style={{marginLeft:"7px"}}>209 B Lotissement Riad Laymoun Rte  Meknès-Fès</span></li>
  	 				<li><FontAwesomeIcon icon={faPhone} style={{color: "#66fcf1",}} /><span  style={{marginLeft:"7px"}}>(+212) 695 423 240</span></li>
  	 				
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>LIENS RAPIDES</h4>
  	 			<ul>
  	 				<li className='footer-links' ><FontAwesomeIcon style={{color: "#66fcf1",}} icon={faHouse} /><Link to="#">Acceuil</Link></li>
  	 				<li className='footer-links'><FontAwesomeIcon style={{color: "#66fcf1",}} icon={faAddressCard} /><Link to="#">À propos</Link></li>
  	 				<li className='footer-links'><FontAwesomeIcon style={{color: "#66fcf1",}} icon={faCircleInfo} /><Link to="#">Comment ça marche</Link></li>
  	 				<li className='footer-links'><FontAwesomeIcon style={{color: "#66fcf1",}} icon={faCreditCard} /><Link to="#"> Nos tarifs</Link></li>
  	 				<li className='footer-links'><FontAwesomeIcon style={{color: "#66fcf1",}} icon={faFileContract} /><Link to="#">Reserver</Link></li>
                    <li className='footer-links'><FontAwesomeIcon style={{color: "#66fcf1",}} icon={faComment} /><Link to="#">Contactez-nous</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>LIENS UTILES</h4>
  	 			<ul>
  	 				<li className='footer-links' style={{color: "#66fcf1",}}><FontAwesomeIcon icon={faLink} /><Link to="#">Termes et Conditions </Link></li>
  	 				<li className='footer-links' style={{color: "#66fcf1",}}><FontAwesomeIcon icon={faLink} /><Link to="#">Politique de confidentialite</Link></li>
  	 				<li className='footer-links' style={{color: "#66fcf1",}}><FontAwesomeIcon icon={faLink} /><Link to="#"> FAQ</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
                    <a href="#"><SocialIcon className='social-icons' url="https://instagram.com/jaketrent" /></a>
  	 				<a href="#"><SocialIcon className='social-icons' url="https://facebook.com/jaketrent" /></a>
                    <a href="#"><SocialIcon className='social-icons' url="https://linkedin.com/jaketrent" /></a>
  	 				
  	 			</div>
  	 		</div>
            <hr/>
            <p className='footer-rights'>Copyright © POGO 2023. All rights reserved.</p>
  	 	</div>
  	 </div>
  </footer>

    )
}