import React from "react";
import { Link } from "react-router-dom";
import Navbar from '../NavBar/Navbar'
import Footer from '../Footer/Footer'
import allianz from '../../assets/allianz.png'
import apple from '../../assets/apple.png'
import playstore from '../../assets/playstore.png'
import scooter from '../../assets/undrw.png'
import packData from "./packData";
import TarifCard from "./TarifCard";
import PSbadge from '../../assets/ps.png'
import './style.css'
export default function Tarif() {
    const TarifCards = packData.map((ele)=>{
        return(
            <TarifCard {...ele} />
        )
    })
    return (
      <>
        <Navbar />
        <div className="tarif-container">
            <div className="tairf-Cparagraph1">
                <p className="tarif-para">Pas d’abonnement, pas d’engagement. Vous ne payez que vos minutes de location avec POGO !</p>
            </div>
            <div className="tarif-Cparagraph2">
                <p>Achetez un Pack POGO et profitez de bonus allant jusqu’à 50 DH</p>
            </div>
            <section>
                {TarifCards}              
            </section>
            <h1 className="assurance-title">Votre assurance</h1>
            <div className="tarif-assurance">
                <div className="tarif-description">
                    <p>
                        <span style={{color:'#66FCF1'}}>La sécurité</span> et le bien-être des utilisateurs de nos services est <span style={{color:'#66FCF1'}}>la priorité numéro 1</span> de POGO.
                    </p>
                    <p>
                        Afin de protéger la communauté POGO, nous collaborons avec l’un des meilleurs fournisseurs d’assurance dans le monde entier, Allianz, pour que vous soyez 100% assurés en conduisant un véhicule POGO.
                    </p>
                    <p style={{textAlign:'center',fontSize:'24px',fontWeight:'800'}}>
                        En partenariat avec
                    </p>
                    <div className="partenariat-img">
                        <img src={allianz} />
                    </div>
                </div>
                <div className="tarif-img">
                    
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
        </div>
        <Footer/>
      </>
    );
  }