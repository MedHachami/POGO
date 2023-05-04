import React from "react";
import Navbar from '../NavBar/Navbar'
import Footer from '../Footer/Footer'
import './Style.css'
export default function Apropos(){
    return(
        <>
            <Navbar />
            <div className="Apropos-Container">
                <div className="QuiSommeNous-Cotainer">
                    <h1>Qui somme nous ?</h1>
                    <p>POGO est une start-up qui a été lancée en 2021 par une équipe de jeunes entrepreneurs marocains, ambitieux, souhaitant métamorphoser et digitaliser la mobilité urbaine au Maroc. Notre ambition est de simplifier la mobilité urbaine et de rapprocher la mobilité électrique au plus grand nombre de citoyens.</p>
                </div>
                <div className="IdeePogo-Conatiner">
                    <h1>D’où vient l’idée POGO ?</h1>
                    <p> POGO (<span>P</span>eople <span>O</span>n the <span>GO</span>) signifie les gens extrêmement actifs, en constant mouvement, dans les deux sens de l’expression : les gens qui se déplacent, et les gens qui cherchent constamment à se développer et s’améliorer. Puisque nous estimons que toute communauté mérite une mobilité intelligente et à la portée de tous, nous mettons à la disposition de la communauté POGO des véhicules électriques (scooters et trottinettes) en libre-service à la location courte durée. Nous visons à réduire la dépendance sur les voitures personnelles pour les transportations à courte distance afin de limiter les émissions de CO2 et de gaz à effet de serre.</p>
                </div>
                <div className="Mission-Cotainer">
                    <h1>Notre mission ?</h1>
                    <p>Au vu des problèmes climatiques de notre époque, un changement dans les comportements habituels vis-à-vis de l’environnement doit être fait. La mission de POGO est la transformation des villes marocaines progressivement en des villes durables et intelligentes qui respectent les grands principes de la mobilité et du développement durable. Ainsi que la contribution au développement social, économique et écologique de notre pays.</p>
                </div>
                <div className="AproposInfo-Cotainer">
                    <h1>Ce qui nous définit ?</h1>
                    <div className="Info1-Container">
                        <div className="Aprops-Img">

                        </div>
                        <div className="Aprops-Description">
                            <h1>Engagement</h1>
                            <div className="Line">
                                
                            </div>
                            <p>Nous nous engageons à offrir la meilleure expérience de micromobilité possible dans chaque ville où nous proposons nos services.</p>
                        </div>
                    </div>
                    <div className="Info2-Container">
                        <div className="Aprops-Img">

                        </div>
                        <div className="Aprops-Description">
                            <h1>Communauté</h1>
                            <div className="Line">
                                
                            </div>
                            <p>Nous créons des offres d’emploi localement et travaillons en partenariat avec des organisations de haut calibre afin d’améliorer la vie urbaine dans les villes marocaines.</p>
                        </div>
                    </div>
                    <div className="Info3-Container">
                        <div className="Aprops-Img">

                        </div>
                        <div className="Aprops-Description">
                            <h1>Technologie</h1>
                            <div className="Line">
                                
                            </div>
                            <p>Notre volonté de conduire la micromobilité vers l'avenir nous place à la pointe du transport urbain propre et accessible.</p>
                        </div>
                    </div>
                    <div className="Info4-Container">
                        <div className="Aprops-Img">

                        </div>
                        <div className="Aprops-Description">
                            <h1>Confiance</h1>
                            <div className="Line">
                                
                            </div>
                            <p>Nous croyons fortement en la transparence et la responsabilité, et nous faisons de notre mieux afin d'offrir la meilleure expérience client chaque jour.</p>
                        </div>
                    </div>
                    <p className="Apropos-fin"> Changeons nos villes ! Ensemble !</p>
                </div>
            </div>
            <Footer />
        </>
    )
}