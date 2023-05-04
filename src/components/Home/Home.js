import React from "react";
import { Link } from "react-router-dom";
import Navbar from '../NavBar/Navbar'
import Footer from '../Footer/Footer'
import apple from '../../assets/apple.png'
import playstore from '../../assets/playstore.png'
import hp3 from '../../assets/HP3.png'
import logo from '../../assets/pogo_logo.png'
import electrique from '../../assets/electricity.png'
import speed from '../../assets/speedometer.png'
import smartphone from '../../assets/smartphone.png'
import moneyBag from '../../assets/money-bag.png'
import chek from '../../assets/check1.png'
import scooter from '../../assets/scooter.png'
import trottinette from '../../assets/trottinette.png'
import rec from '../../assets/rec.png'
import map from '../../assets/map.png'
import img1 from '../../assets/1.png'
import img2 from '../../assets/2.png'
import img3 from '../../assets/3.png'
import img4 from '../../assets/4.png'
import number1 from '../../assets/number1.png'
import number2 from '../../assets/number2.png'
import number3 from '../../assets/number3.png'
import number4 from '../../assets/number4.png'
import abonnement from '../../assets/abonnement.png'
import engagement from '../../assets/engagement.png'
import minute from '../../assets/minute.png'
import basic from '../../assets/basic.png'
import UEMF from  '../../assets/UEMF.png'
import bp from  '../../assets/bp.png'
import aloula from  '../../assets/aloula.png'
import ccg from  '../../assets/ccg.png'
import emob1 from  '../../assets/emob1.png'
import pp from  '../../assets/pp.png'
import {FaDotCircle} from 'react-icons/fa'
import './Style.css'
export default function Home(){
    const [selectedTitle, setSelectedTitle] = React.useState(null);
    const [selectedImg, setSelectedImg] = React.useState(img1);
    const handleTitleClick = (title,img) => {
        setSelectedTitle(title);
        setSelectedImg(img);
    }
    return(
        <>
            <Navbar />
            <div className="home-Container">
                <div className="home-Description">
                    <p className="home-Paragraph1">Avec <img src={logo} style={{width:'130px'}} /> ,la location d’un véhicule électrique n’a jamais été aussi simple !</p>
                    <p className="home-Paragraph2">Téléchargez notre application <span style={{color:'#03d3b9'}}>POGO</span>  et profitez de la conduite de nos scooters modernes et écologiques dès aujourd’hui !</p>
                    <div className="download-badgeContainerHome">
                        <div className="download-btnHome">
                            <img src={playstore}  className="OS-iconHome"/>
                            <Link style={{textDecoration:'none',marginTop:'-7px'}}><span >Disponible sur<br/><p >Google Play</p> </span></Link>
                            
                        </div>
                        <div className="download-btnHome" >
                            <img src={apple} className="OS-iconHome"/>
                            <Link style={{textDecoration:'none',marginTop:'-7px'}}><span>Disponible sur <p>App Store</p></span></Link>
                        </div>
                    </div>
                </div>
                <div className="home-Thumb">
                    <img src={hp3}  />
                </div>
            </div>
            <div className="Home_slogan">
                <h3>Embrace </h3>
                <h3>The Revolution</h3>
            </div>
            <div className="Info-Cotainer">
                <div className="info-Header">
                    <h1><img src={logo} />propose un nouveau mode de transport pour <span>un monde meilleur !</span></h1>
                </div>
                <div className="info-Wrapper">
                    <div className="info-Info">
                        <img src={electrique}  />
                        <p>100% Électrique </p>
                        <span>Profitez d'une expérience de conduite électrique et ultra authentique à 0% vibration, 0% bruit, 0% odeur de carburant et 100% Fun !</span>
                    </div>
                    <div className="info-Info">
                        <img src={speed}  />
                        <p>Rapide</p>
                        <span>Conduisez nos véhicules POGO, évitez les embouteillages et soyez 40% plus rapide.</span>
                    </div>
                    <div className="info-Info">
                        <img src={smartphone}  />
                        <p>Digital </p>
                        <span>Votre téléphone est votre nouvelle clé. Démarrez, mettez en pause et éteignez votre véhicule en un seul clic sur notre App POGO.</span>
                    </div>
                    <div className="info-Info">
                        <img src={moneyBag} />
                        <p>Economique</p>
                        <span>POGO propose le meilleur moyen de transport urbain ! Au prix le plus bas du marché !</span>
                    </div>
                </div>
            </div>
            <div className="Homme-InnerText">
                <p>Ça donne vraiment envie ! Hein ? Vous deviendrez addictes à l’expérience POGO !</p>
            </div>
            <h1 className="Flotte-title">Notre flotte</h1>
            <div className="scooter-flotte">
                
                <div className="scooter-thumb">
                    <img src={scooter}  />
                </div>
                <div className="scooter-Description">
                    <h1><FaDotCircle style={{width:'15px',color:'#fff'}} /> POGO S</h1>
                    <p className="scooter-DesParagraph1">Profitez de nos scootersen libre-service</p>
                    <p className="scooter-DesParagraph2">Avec le scooter POGO S de haut calibre, roulez en toute élégance, en toute sécurité, sans polluer l’environnement !</p>
                    <div className="scooter-Prop">
                        <ul>
                            <li><img src={chek} style={{width:'25px'}} /><span>Conçu pour une balade confortable à 2</span></li>
                            <li><img src={chek} style={{width:'25px'}} /><span>Crochet pour porter votre sac ou cartable</span></li>
                            <li><img src={chek} style={{width:'25px'}} /><span>Prise pour charger votre téléphone</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="trottinette-flotte">
                <div className="trottinette-Description">
                    <h1><FaDotCircle style={{width:'15px',color:'#fff'}} /> POGO T</h1>
                    <p className="trottinette-DesParagraph1">Profitez de nos trottinettes en libre-service</p>
                    <p className="trottinette-DesParagraph2">Avec la trottinette POGO T de haute qualité, roulez doucement, confortablement et élégamment.</p>
                    <div className="trottinette-Prop">
                        <ul>
                            <li><img src={chek} style={{width:'25px'}} /><span>Ultra légère et très pratique</span></li>
                            <li><img src={chek} style={{width:'25px'}} /><span>Facilement pliable et portable</span></li>
                            <li><img src={chek} style={{width:'25px'}} /><span>Puissante et monte facilement les pentes</span></li>
                        </ul>
                    </div>
                </div>
                <div className="trottinette-thumb">
                    <img src={trottinette}  />
                </div>
            </div>
            <div className="map-Container">
                <h1 className="map-Title">Où se trouve POGO ? </h1>
                <div className="map-Description">
                    <div className="map-Image">
                        <img src={map} />
                    </div>
                    <div className="map-Text">
                        <div >
                            <img src={rec} style={{width:'30px',height:'25px'}} />
                            <p>Fès</p>
                        </div>
                        <div>
                            <img src={rec} style={{width:'30px',height:'25px'}}/>
                            <p>Rabat</p>
                        </div>
                        <div>
                            <img src={rec} style={{width:'30px',height:'25px'}}/>
                            <p>Ben Guerir</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="How-Container">
                <h1>Louez un scooter n’a jamais été aussi simple !</h1>
                <div className="how-Steps">
                    <div className="how-Thumb">
                        <img src={selectedImg}  />
                    </div>
                    <div className="steps">
                        <div className="step">
                            <div className="step-Header" onClick={() => handleTitleClick('Title 1',img1)}>
                                <img src={number1} style={{width:'40px' ,height:'40px'}} />
                                <span>Localisez votre scooter POGO </span>
                            </div>
                            {
                                selectedTitle === 'Title 1' && <p>Repérez dans l’application le parking POGO le plus proche de vous.</p>
                            }
                            
                        </div>
                        <div className="step">
                            <div className="step-Header" onClick={() => handleTitleClick('Title 2',img2)}>
                                <img src={number2} style={{width:'40px' ,height:'40px'}} />
                                <span>Réservez-le </span>
                            </div>
                            {
                                selectedTitle === 'Title 2' && <p>En un simple clic sur l’application, vous pouvez réserver votre scooter. Vous disposez de 15 minutes pour le rejoindre et le déverrouiller.</p>
                            }
                            
                        </div>
                        <div className="step">
                            <div className="step-Header" onClick={() => handleTitleClick('Title 3',img3)}>
                                <img src={number3} style={{width:'40px' ,height:'40px'}} />
                                <span>Roulez où vous souhaitez</span>
                            </div>
                            {
                                selectedTitle === 'Title 3' && <p>Roulez où vous souhaitez dans le périmètre urbain renseigné sur l’application tout en respectant le code de la route. Veuillez revenir au parking POGO pour terminer votre location.</p>
                            }
                            
                        </div>
                        <div className="step">
                            <div className="step-Header" onClick={() => handleTitleClick('Title 4',img4)}>
                                <img src={number4} style={{width:'40px' ,height:'40px'}} />
                                <span>Terminez la location </span>
                            </div>
                            {
                                selectedTitle === 'Title 4' && <p>Repérez dans l’application le parking POGO le plus proche de vous.</p>
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="Coute-Container">
                <h1>Combien ça coûte ?</h1>
                <div className="Coutes">
                    <div className="Coute">
                        <img style={{width:'35px'}} src={abonnement}  /><p>Pas d’abonnement</p>
                    </div>
                    <div className="Coute">
                         <img style={{width:'35px'}} src={engagement} /><p>Pas d’abonnement</p>
                    </div>
                    <div className="Coute">
                        <img style={{width:'35px'}} src={minute} /><p>Pas d’abonnement</p>
                    </div>
                </div>
                <div className="HomeTarif-Container">
                    <div className="Home-Tarif">
                        <h2>POGO Prix Basique</h2>
                        <img src={basic} style={{width:'150px'}} />
                        <p className="Tarif-Prix1">0.99 DH / min </p>
                        <span className="Tarif-Prix2">0.19 DH / min de pause</span>
                        <p className="Tarif-Desc">Vos locations sont facturées par prélèvement bancaire selon la somme due.</p>
                        <div className="Tarif-Prop">
                            <ul>
                                <li><img src={chek} style={{width:'25px'}} /><span>Payez vos minutes consommées à la fin de votre trajet</span></li>
                                <li><img src={chek} style={{width:'25px'}} /><span>Protection 100% du conducteur et du passager</span></li>
                                <li><img src={chek} style={{width:'25px'}} /><span>Assurance Responsabilité Civile</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="Tarif-Description">
                        <h1>POGO Packs</h1>
                        <p>POGO propose à sa communauté des packs pour recharger son solde, avec des bonus très avantageux allant jusqu’à 50DH.</p>
                        <p>POGO met la sécurité de sa communauté en tête de sa liste des priorités, c’est pour cela que chaque utilisateur de nos services est 100% assuré.</p>
                        <Link to='/tarif'>En savoir plus sur nos packs</Link>
                    </div>
                    
                </div>
            </div>
            <div className="sponsors">
                <h1>Nos partenaires</h1>
                <div className="sponsorsImageContainer">
                    <div className="sponsors-Thumb"><img src={UEMF}  /></div>
                    <div className="sponsors-Thumb"><img src={bp}  /></div>
                    <div className="sponsors-Thumb"><img src={aloula}  /></div>
                    <div className="sponsors-Thumb"><img src={ccg}  /></div>
                    <div className="sponsors-Thumb"><img src={emob1}  /></div>
                    <div className="sponsors-Thumb"><img src={pp}  /></div>
                </div>
            </div>
            <Footer />
        </>
        
    )
}