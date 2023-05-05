import React from "react";
import { Link } from "react-router-dom";
import Navbar from '../NavBar/Navbar'
import Footer from '../Footer/Footer'
import './Style.css'
import '../../components/Tarif/style.css'
import casque from '../../assets/casque.jpg'
import vele from '../../assets/velectr.jpeg'
import playstore from '../../assets/playstore.png'
import apple from '../../assets/apple.png'
import scooter from '../../assets/undrw.png'


import Swiper from './Swiper'

export default function Comment(){
    return(
        <>
        <Navbar />
        <div className="how-Conatiner">
            <h1>Aveccc POGO, la micromobilité est simple et accessible pour tous !</h1>
            <Swiper />  
        </div>
        <div className="casque-container">
            <div className="casque-thumb">
                <img src={casque}  className="casuqe-img" />
            </div>
            <div className="casque-description">
                <h2>Un casque mis à votre disposition</h2>
                <p>POGO met à votre disposition un casque homologué pour vous protéger. Vous pouvez cependant utiliser votre propre casque si vous le souhaitez.</p>
            </div>
        </div>
        <div className="vehicule-container">
            <div className="vehicule-description">
                <h2>Un véhicule électrique toujours chargé</h2>
                <p>Les parkings POGO sont dotés de stations de recharges des batteries, les véhicules POGO sont chargés en permanence. Ils sont utilisables 24h/24, 7j/7.</p>
            </div>
            <div className="vehicule-thumb">
                <img src={vele}  className="casuqe-img" />
            </div>
        </div>
        <div className="app-container">
                <div className="app-description">
                    <h1>C'est parti !</h1>
                    <p>Vous voulez commencer une nouvelle expérience ? Tester un mode de transport urbain pionnier en Afrique ? Téléchargez notre application et accédez en un clic à nos scooters électriques !</p>
                     <div className="download-badgeContainer">
                     
                        <div className="download-btn">
                            <img src={playstore}  className="OS-icon"/>
                            <Link style={{textDecoration:'none',marginTop:'-7px'}}><span >Disponible sur<br/><p >Google Play</p> </span></Link>
                            
                        </div>
                        <div className="download-btn" >
                            <img src={apple} className="OS-icon"/>
                            <Link style={{textDecoration:'none',marginTop:'-7px'}}><span>Disponible sur <p>App Store</p></span></Link>
                        </div>
                    </div>
                </div>
                <div className="scooter">
                <img src={scooter} className="scooter-img"/>
                </div>
        </div>
        <Footer />
        </>
    )
}