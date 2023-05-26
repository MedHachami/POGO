import React,{useState} from "react";
import './Style.css'
import Navbar from '../NavBar/Navbar'
import Footer from '../Footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faDiamond} from '@fortawesome/free-solid-svg-icons'
import {FaWindowClose} from 'react-icons/fa'
import pc from '../../assets/pc.png'
import pc1 from '../../assets/pc1.png'
export default function Politique(){
    const [model,setModel] = useState(false);
    const [tempImgsrc,settempImgsrc] = useState('')
    const getImg = (imgSrc)=>{
        settempImgsrc(imgSrc)
        setModel(true)
    }
    return(
        <>
            <Navbar />
            <div className="politique-Container">
                <div className="politique-Filter">
                    <div className="politique-Description">
                        <h1>POLITIQUE DE CONFIDENTIALITE</h1>
                    </div>
                </div>
                
            </div>  
            <div className="politique_TextContainer">
                <div>
                    <p className="politique-Title"><FontAwesomeIcon icon={faDiamond} style={{marginRight:'7px',fontSize:'12px'}} />Dernière mise à jour le 13 Avril 2022</p>
                    <p>
                        Le Site www.pogo.ma, l’application et le service POGO (ci-après « nos Services ») sont proposés par la société POGO sarl immatriculée à Fès sous le N° 002783488000066 dont le siège social est situé à 209 B Lot Riad Laymoune Rte Meknès, Mag 3 Fès Maroc.  <br /><br />
                        POGO s’engage à protéger la vie privée de tous les visiteurs, Clients et Utilisateurs de ses Services. Elle s’engage à ce que la collecte et le traitement de vos données soient effectués conformément au Règlement Général sur la Protection des Données (RGPD) et la Loi dite « Informatique et Libertés ». <br /><br />
                        La Politique de confidentialité présente nos engagements et les principes fondamentaux que nous appliquons à la protection des données personnelles. Elle vous informe des procédés de collecte et d’utilisation de vos données, des options et des droits dont vous bénéficiez. Elle complète les Conditions Générales d’Utilisation du Service. Les termes commençant par une majuscule non définis aux présentes ont le sens qui leur est donné dans lesdites Conditions Générales d’Utilisation. <br /><br />
                        Nous pouvons modifier la Politique de confidentialité à tout moment afin notamment de se conformer à toutes évolutions réglementaires, jurisprudentielles, éditoriales ou techniques. Les Clients et Utilisateurs sont informés par tout moyen en cas de changement significatif de la Politique. Avant chaque navigation, nous vous invitons à vous référer à sa dernière version. <br /><br />
                    </p>
                </div>
                <div>
                    <p className="politique-Title"><FontAwesomeIcon icon={faDiamond} style={{marginRight:'7px',fontSize:'12px'}} />Qui sont les personnes concernées par cette politique ?</p>
                    <p>
                        La collecte et le traitement de données personnelles concerne tous les visiteurs, Clients et Utilisateurs de nos Services.  <br /><br />
                        Lors de votre inscription ou de l’accès à nos services, vous recevrez l’ensemble des informations obligatoires relatives à la collecte et au traitement de vos Données. <br /><br />
                        Conformément à nos Conditions Générales d’Utilisation, l’accès à nos Services est réservé aux personnes majeures. <br /><br />
                        
                    </p>
                </div>
                <div>
                    <p className="politique-Title"><FontAwesomeIcon icon={faDiamond} style={{marginRight:'7px',fontSize:'12px'}} />Quelles sont les données personnelles traitées ?</p>
                    <p>Lors de votre création d’un compte POGO, de votre Inscription, de l’utilisation de nos Services, les données personnelles suivantes sont susceptibles d’être collectées et traitées : </p>
                    <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Des données personnelles d’identification (nom, prénom, date de naissance, pièce d’identité). </p>
                    <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Des données personnelles de contact (e-mail, adresse postale, numéro de téléphone).</p>
                    <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Des données personnelles à fin de paiement (données bancaires).</p>
                    <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Des données de localisation du Scooter (lieu de récupération et restitution, historiques des trajets).</p>
                    <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Des données de localisation de votre appareil mobile.</p>
                
                </div>
                <div>
                    <p className="politique-Title"><FontAwesomeIcon icon={faDiamond} style={{marginRight:'7px',fontSize:'12px'}} />À quel moment collectons-nous vos données personnelles ?</p>
                    <p>
                        Les données personnelles sont issues des informations que vous nous communiquez directement lors de votre Inscription à nos Services. <br /><br />
                        L’historique de vos trajets est collecté lors de l’utilisation de nos Services. <br /><br />
                    </p>
                </div>
                <div>
                    <p className="politique-Title"><FontAwesomeIcon icon={faDiamond} style={{marginRight:'7px',fontSize:'12px'}} />A quelles fins utilisons-nous vos données personnelles et pour quelles durées ?</p>
                    
                </div>
                <div className={model? "model open" : "model"}>
                    <img src={tempImgsrc} />
                    <FaWindowClose onClick={()=>setModel(false)} />
                </div>
                <div className="politique-Thumb" onClick={()=>getImg(pc)}>
                    <img src={pc} />
                </div>
                <div className="politique-Thumb" onClick={()=>getImg(pc1)}>
                    <img src={pc1} />
                </div>
                <div>
                    <p>Sont destinataires des données : </p>
                    <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />POGO, ses filiales, sociétés affiliées, les services concernés par le traitement de votre inscription, notre service clientèle.</p>
                    <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />nos prestataires et sous-traitants, notamment aux fins de traitement de vos paiements ou d’authentification de vos documents.</p>
                    <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />notre compagnie d’assurance (et/ou notre société de courtage) en cas de sinistres et de vols.</p>
                    <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />les autorités de police compétentes en cas d’infraction.</p>

                </div>
                <div>
                    <p className="politique-Title"><FontAwesomeIcon icon={faDiamond} style={{marginRight:'7px',fontSize:'12px'}} />Vos données sont-elles sécurisées ?</p>
                    <p>
                    Nous nous engageons à prendre toutes les précautions utiles, mesures organisationnelles et techniques appropriées pour préserver la sécurité, l’intégrité et la confidentialité des Données, et notamment, empêcher qu’elles soient altérées, modifiées ou  supprimées ou que des tiers non autorisés y aient accès. 
                    <br />
                    Nous avons notamment pris les mesures suivantes : 
                    </p>
                    <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Lors de leur transmission, nous utilisons des systèmes de chiffrement afin de garantir la sécurité de vos données personnelles. </p>
                    <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />L’accès au réseau et aux systèmes d’information est limité au personnel disposant de droits d’accès.</p>
                    <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Les Utilisateurs disposent de mots de passe uniques (gestion des mots de passe garantissant des mots de passe forts et double authentification).</p>
                    <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Pares-feux.</p>
                    <p>Cependant, nous ne pouvons garantir l’élimination de tout risque d’utilisation abusive des Données. Il importe que vous préserviez la confidentialité de vos identifiants de façon à empêcher une utilisation illicite de votre compte. </p>
                </div>
                <div>
                    <p className="politique-Title"><FontAwesomeIcon icon={faDiamond} style={{marginRight:'7px',fontSize:'12px'}} />Quels sont vos droits ?</p>
                    <p>
                        Conformément à la Réglementation Informatique et Libertés, et sous réserve du paiement de l’ensemble des sommes dues tel que précisé aux Conditions Générales d’Utilisation de nos services, vous pouvez à tout moment retirer le consentement que vous nous auriez préalablement donné lors de l’inscription à nos services.<br /><br /> 
                        Vous pouvez accéder et obtenir copie des données vous concernant, les faire rectifier, sous certaines conditions vous opposez à leur traitement ou les faire effacer. <br /><br />
                        Vous disposez également d’un droit à la limitation du traitement de vos Données et à leur portabilité vers des tiers. <br /><br />
                        Vous avez enfin la possibilité de définir des directives relatives au sort de vos Données Personnelles après votre décès. <br /><br />
                        Exercer ses droits. <br /><br />
                        L’exercice de ces droits s’effectue à tout moment, auprès de POGO, à l’aide d’une pièce d’identité par voie électronique : support@pogo.ma. <br /><br />
                        Réclamation auprès de la CNDP. <br /><br />
                        Si vous estimez, après nous avoir contactés, que vos droits sur vos données ne sont pas respectés, vous pouvez adresser une réclamation à la CNDP. 
                    </p>
                </div>
            </div> 
            <Footer />
        </>
    )
}