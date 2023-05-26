import React from "react";
import './Style.css'
import Navbar from '../NavBar/Navbar'
import Footer from '../Footer/Footer'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faCircle,faDiamond} from '@fortawesome/free-solid-svg-icons'


export default function Termes(){
    return(
        <>
            <Navbar />
            <div className="termes-Container">
                <div className="termes-Filter">
                    <div className="termes-Description">
                        <h1>LES CONDITIONS GÉNÉRALES D’UTILISATION DU SERVICE POGO</h1>
                    </div>
                </div>
                
            </div>
            <div className="termes_TextContainer">
                    <div>
                        <p>Les Conditions Générales d’Utilisation « CGU » ci-présentes définissent, à compter de leur acceptation par le Client, les conditions d’accès et d’utilisation du Service POGO. </p>
                    </div>
                    <div>
                        <p>POGO est un service de mobilité électrique qui consiste en la location courte durée de véhicules électriques (scooters et trottinettes) en libre-service. Il est proposé par la Société A Responsabilité Limitée, immatriculée à Fès sous le numéro 002783488000066, dont le siège social se situe à 209 B Lot Riad Laymoune Rte Meknès, Mag 3.</p>
                    </div>
                    <div>
                        <p className="termes-Title"><FontAwesomeIcon icon={faPlus} style={{marginRight:'5px' ,fontSize:'20px'}}/>ARTICLE <span className="termes-Number">1</span> – DÉFINITIONS </p>
                    </div>
                    <div>
                        <p>« Utilisateur » désigne tout client, remplissant l’ensemble des conditions énoncées à l’article 4 des présentes, ayant créé un compte POGO et finalisé son Inscription lui permettant d’utiliser et de bénéficier du Service POGO dans les conditions des présentes CGU. </p>
                        <p>« Conditions Générales d’Utilisation » ou « CGU » désigne le présent document dont les termes doivent avoir été acceptés par l’Utilisateur pour pouvoir accéder au Service. </p>
                        <p>« Service » désigne le service de location de courte durée de véhicules en libre-service proposé par la société POGO. </p>
                        <p>« Location » désigne le temps d’utilisation du Véhicule par un Utilisateur. La Location démarre dès le déblocage du Véhicule et se termine à l’initiative de l’Utilisateur (via l’Application). </p>
                        <p>« Réservation » désigne l’action de réserver un Véhicule via l’Application avant la Location. </p>
                        <p>« Application » désigne l’application mobile de POGO qui permet à l’Utilisateur d’accéder au Service POGO, de réserver un Véhicule et commencer sa Location. </p>
                        <p>« Site Internet » désigne le site web du Service POGO disponible à l’adresse <Link to='/' className="termes-Link">www.pogo.ma</Link></p>
                        <p>« Inscription » désigne le processus d’enregistrement d’un futur Utilisateur au Service POGO. L’inscription est gratuite. </p>
                        <p>« Inscription » désigne le processus d’enregistrement d’un futur Utilisateur au Service POGO. L’inscription est gratuite. </p>
                        <p>« Espace Personnel » désigne l’espace de gestion en ligne accessible par l’Utilisateur ayant un compte POGO, accessible sur l’Application POGO. En y accédant, l’Utilisateur peut gérer ses informations personnelles, de consulter son historique de Locations et ses factures POGO, ou d’acheter des Packages. </p>
                        <p>« Identifiants » désigne l’adresse email (ou le numéro de téléphone portable) de l’Utilisateur et le mot de passe qu’il aura choisi pour s’identifier et se connecter à l’Application POGO et utiliser le Service</p>
                        <p>« Véhicule » désigne l’un des scooters ou trottinettes électriques que POGO met à la disposition des Utilisateurs. </p>
                        <p>« Scooter » désigne l’un des scooters électriques que POGO met à la disposition des Utilisateurs. </p>
                        <p>« Trottinette » désigne l’une des trottinettes électriques que POGO met à la disposition des Utilisateurs. </p>
                        <p>« Accessoires de l’Utilisateur » désigne les objets et effets personnels de l’Utilisateur et des personnes transportées dans le Véhicule au cours d’une Location.</p>
                        <p>« Casque » désigne le casque appartenant à POGO, attaché au Scooter. Mis à la disposition de l’Utilisateur afin qu’il conduise le Scooter en toute sécurité. </p>
                        <p>« Documents de Bord » désigne l’ensemble des documents suivants : la copie du certificat d’assurance, la copie du certificat de propriété, le constat amiable d’accident, qui sont présents à bord du Véhicule.</p>
                        <p>« Pause » désigne l’arrêt temporaire du Véhicule pendant une Location. </p>
                        <p>« Service Client » désigne le centre d’information et d’assistance de POGO qui répond aux réclamations et aux questions des Utilisateurs.</p>
                    </div>
                    <div>
                        <p className="termes-Title"><FontAwesomeIcon icon={faPlus} style={{marginRight:'5px' ,fontSize:'20px'}}/>ARTICLE <span className="termes-Number">2</span> – OBJET </p>
                        <p>Les présentes CGU sont destinées aux Utilisateurs du Service POGO sur le territoire marocain. Chaque Utilisateur souhaitant accéder au Service est invité à consulter et accepter les CGU présentes sur l’Application ainsi que sur le Site Internet <Link to="/" className="termes-Link">www.pogo.ma</Link> . Les CGU régissent l’utilisation du Service et de l’Application POGO que l’Utilisateur se doit de respecter.</p>
                    </div>
                    <div>
                        <p className="termes-Title"><FontAwesomeIcon icon={faPlus} style={{marginRight:'5px' ,fontSize:'20px'}}/>ARTICLE <span className="termes-Number">3</span> – MODALITES/TARIFS EN VIGUEUR DU SERVICE POGO  </p>
                        <p>Lorsque j’ajoute la carte de crédit, j’autorise POGO à envoyer des instructions à l’institution financière qui a émis ma carte pour prélever des paiements sur mon compte de carte conformément aux termes de mon accord avec POGO</p>
                        <p>Le Service est facturé à la minute/minute de pause.  </p>
                        <p>Les tarifs applicables sont les suivants :  </p>
                        <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />0.99 DH la minute. </p>
                        <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />0.19 DH la minute de pause </p>
                        <p>Toute Location et tout achat de « Package » est facturé. </p>
                        <p>Les « Packages » ont une durée de validité telle qu’elle est indiquée au moment de l’achat sur l’Application ou le Site Internet.</p>
                        <p>L’achat de « Package » n’est pas remboursable, sauf dans les conditions autorisant à l’Utilisateur d’exercer son droit de rétractation  (voir l’article 6). </p>
                        <p>Les prix et les pénalités applicables à l’utilisation du Service sont ceux en vigueur au jour de la Réservation. POGO se réserve le droit de les modifier à tout moment conformément à l’article 10.4 des présentes CGU. </p>
                    </div>
                    <div>
                        <p className="termes-Title"><FontAwesomeIcon icon={faPlus} style={{marginRight:'5px' ,fontSize:'20px'}}/>ARTICLE <span className="termes-Number">4</span> – CONDITIONS D’ACCES AU SERVICE  </p>
                        <p>Pour accéder au Service POGO, l’Utilisateur doit : </p>
                        <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Être âgé d’au moins 18 ans .</p>
                        <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Disposer d’un smartphone où est téléchargée la dernière version de l’Application POGO. </p>
                        <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Télétransmettre à l’aide de l’outil intégré dans l’Application les informations relatives à une ou plusieurs cartes bancaires Visa ou Mastercard en cours de validité. </p>
                    </div>
                    <div>
                        <p className="termes-Title"><FontAwesomeIcon icon={faPlus} style={{marginRight:'5px' ,fontSize:'20px'}}/>ARTICLE <span className="termes-Number">5</span> – MODALITÉS D’INSCRIPTION   </p>
                        <div>
                            <p className="termes-SousTitle"><FontAwesomeIcon icon={faDiamond} style={{marginRight:'7px',fontSize:'12px'}} /><strong className="termes-Number">5.1</strong> Inscription </p>
                            <p>Pour s’inscrire et devenir un Utilisateur POGO, le Client doit impérativement : </p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Être âgé d’au moins 18 ans .</p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Remplir le formulaire d’Inscription dans l’Application, dans lequel l’Utilisateur indique les informations suivantes : </p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Son nom </p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Son prénom  </p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Sa date de naissance </p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Une adresse e-mail valide </p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Un numéro de téléphone portable valide </p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Un mot de passe respectant les préconisations de sécurité de POGO </p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Avoir consulté et accepté les présentes CGU ainsi que la Politique de Confidentialité de POGO accessibles sur l’Application et sur le Site Internet www.pogo.ma </p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Les informations relatives à une ou plusieurs de ses cartes bancaires Visa ou Mastercard en cours de validité sur l’interface de paiement sécurisée pour le paiement des factures ultérieures </p>
                            <p>Les informations communiquées doivent être exactes et précises. </p>
                        </div>
                        <div>
                            <p className="termes-SousTitle"><FontAwesomeIcon icon={faDiamond} style={{marginRight:'7px',fontSize:'12px'}} /><strong className="termes-Number">5.2</strong> Prise d’effet </p>
                            <p>L’Inscription de l’Utilisateur prend effet directement à la fin du processus d’Inscription décrit ci-dessus. L’Utilisateur peut donc bénéficier des services proposés par POGO. </p>
                        </div>
                        <div>
                            <p className="termes-SousTitle"><FontAwesomeIcon icon={faDiamond} style={{marginRight:'7px',fontSize:'12px'}} /><strong className="termes-Number">5.3</strong> Durée  </p>
                            <p>L’Inscription est sans limite de durée tant que l’Utilisateur respecte l’ensemble des CGU. </p>
                        </div>
                        <div>
                            <p className="termes-SousTitle"><FontAwesomeIcon icon={faDiamond} style={{marginRight:'7px',fontSize:'12px'}} /><strong className="termes-Number">5.4</strong> Désinscription </p>
                            <p>Le Service POGO est un service sans engagement, l’Utilisateur peut à tout moment annuler son inscription en faisant une demande au Service Client par e-mail sur l’adresse : <strong style={{color:'#03d3b9',textDecoration:'underline',fontSize:'22px'}}>info@pogo.ma</strong>  </p>
                            <p>Pour se désinscrire, l’Utilisateur doit être acquitté de toutes les sommes qu’il doit à POGO. </p>
                            <p>Le solde de l’Utilisateur sera perdu définitivement et ne lui sera en aucun cas remboursé. </p>
                        </div>
                    </div>
                    <div>
                        <p className="termes-Title"><FontAwesomeIcon icon={faPlus} style={{marginRight:'5px' ,fontSize:'20px'}}/>ARTICLE <span className="termes-Number">6</span> – DROIT DE RÉTRACTATION   </p>
                        <p>En tant que consommateur, le Client bénéficie d’un droit de rétractation conformément aux dispositions de la loi 31-08 édictant des mesures de protection du consommateur. </p>
                        <p>En acceptant les présentes CGU, l’Utilisateur consent que le contrat entre lui et POGO devient effectif dès la confirmation de sa première Réservation, et renonce expressément à son droit de rétraction, conformément aux dispositions des articles de la loi 31-08 édictant des mesures de protection du consommateur. </p>
                        <p>Lorsqu’il s’agit d’achat de « Package », l’Utilisateur peut exercer son droit de rétractation dans un délai de sept (7) jours à compter de la date de l’achat. Dans ce cas, l’Utilisateur remplit et envoie le formulaire de rétractation disponible ici au Service Client avant l’expiration du délai susvisé à l’adresse info@pogo.ma </p>
                        <p>Si l’Utilisateur exerce son droit de rétractation sans avoir commencé l’utilisation du Service, l’Utilisateur est intégralement remboursé du montant du « Package » payé. </p>
                    </div>
                    <div>
                        <p className="termes-Title"><FontAwesomeIcon icon={faPlus} style={{marginRight:'5px' ,fontSize:'20px'}}/>ARTICLE <span className="termes-Number">7</span> – MODALITÉS D’UTILISATION DU SERVICE POGO   </p>
                        <p>Le Service POGO n’est accessible que via l’Application. L’Utilisateur se doit de prendre toutes les mesures et les précautions nécessaires pour assurer l’accès à l’Application via son smartphone disponible sur Android et iOS. </p>
                         <div>
                            <p className="termes-SousTitle"><FontAwesomeIcon icon={faDiamond} style={{marginRight:'7px',fontSize:'12px'}} /><strong className="termes-Number">7.1</strong> Espace Personnel </p>    
                            <p>Sur l’Application, l’Utilisateur peut : </p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Contacter le Service Client </p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Consulter les FAQ (Frequently Asked Questions)</p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Consulter les CGU</p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Mettre à jour ses données personnelles (adresse, mot de passe, cartes bancaires)</p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Modifier sa ville de préférence</p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Consulter son historique de Réservations et de Locations </p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Consulter et télécharger ses factures </p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Consulter son solde et acheter des « Packages » </p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Saisir un Code promotionnel </p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Modifier et partager son Code de parrainage </p>
                        </div> 
                        <div>
                            <p className="termes-SousTitle"><FontAwesomeIcon icon={faDiamond} style={{marginRight:'7px',fontSize:'12px'}} /><strong className="termes-Number">7.2</strong> Service Client </p>
                            <p>Les Utilisateurs peuvent contacter le Service Client comme suit : </p>
                            <p>Par téléphone au +212 695 423 240, notamment en cas de problème, de dysfonctionnement du Service ou pour signaler un incident technique.</p>
                            <p>Par e-mail à l’adresse info@pogo.ma pour poser des questions à propos de son compte POGO, signaler un problème technique rencontré sur le Véhicule électrique ou sur l’Application POGO, ou plus généralement apporter un commentaire.</p>
                        </div> 
                        <div>
                            <p className="termes-SousTitle"><FontAwesomeIcon icon={faDiamond} style={{marginRight:'7px',fontSize:'12px'}} /><strong className="termes-Number">7.3</strong> Informations sur les Véhicules et la Réservation </p>
                            <p>Sur l’Application, l’Utilisateur peut : </p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Visualiser le positionnement et l’autonomie des Véhicules disponibles dans les Parkings POGO </p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Procéder à la Réservation d’un Scooter </p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Annuler sa Réservation</p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Restituer un Véhicule loué selon les termes prévus par les présentes CGU </p>
                        </div>
                        <div>
                            <p className="termes-SousTitle"><FontAwesomeIcon icon={faDiamond} style={{marginRight:'7px',fontSize:'12px'}} /><strong className="termes-Number">7.4</strong> Location d’un Véhicule</p>
                        </div>
                        <div style={{marginLeft:'25px'}}>
                            <p className="termes-SousTitle" ><strong className="termes-Number">7.4.1 </strong> Réservation d’un Véhicule</p>
                            <p>L’Utilisateur choisit un Véhicule disponible, puis le réserve via l’Application. Il dispose alors de 15 minutes pour se rendre au Véhicule réservé et le déverrouiller en scannant grâce à l’Application le code figurant sur le Véhicule.</p>
                            <p>Le scan du code du Véhicule marque la fin de la période de Réservation du et le démarrage de la période de Location.</p>
                            <p className="termes-SousTitle" ><strong className="termes-Number">7.4.2 </strong> État des lieux à la prise du Véhicule</p>
                            <p>L’Utilisateur s’engage à signaler au Service Client tout dégât qu’il aura observé sur le Véhicule avant son départ, via la rubrique dédiée de l’Application ou par téléphone. L’Utilisateur s’engage, dans la mesure du possible, à prendre des photos des dégâts constatés et les transmettre par l’intermédiaire du formulaire de Contact dans l’Application.</p>
                            <p>Liste non exhaustive des dégâts que l’Utilisateur doit signaler au Service Client : </p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Carénages cassés </p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Pneu crevé </p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Rétroviseur manquant</p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Phare cassé</p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Béquille cassée</p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Levier de frein cassé ou tordu</p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Freins défaillants</p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Lumières ne fonctionnant pas correctement</p>
                            <p>Dans de telles circonstances, l’Utilisateur s’engage à ne pas utiliser le Véhicule endommagé.</p>
                        
                        </div>
                        <div style={{marginLeft:'25px'}}>
                            <p className="termes-SousTitle" ><strong className="termes-Number">7.4.3 </strong> Démarrage du Véhicule</p>
                            <p>Pour démarrer le Scooter, l’Utilisateur doit : </p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Sur l’Application, appuyer sur ‘’ Louer ‘’ </p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Prendre le Casque attaché au Scooter </p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Ajuster le Casque à sa taille et l’enfiler</p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Ajuster les rétroviseurs </p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Commencer son trajet </p>
                        </div>
                        <div style={{marginLeft:'25px'}}>
                            <p className="termes-SousTitle" ><strong className="termes-Number">7.4.4 </strong> Procédure de pause</p>
                            <p>Pour stationner temporairement le Scooter, l’Utilisateur doit : </p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Béquiller le Scooter sur un emplacement autorisé </p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Attacher le Casque au crochet</p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Retirer tous Accessoires de l’Utilisateur du Scooter, POGO ne pouvant en aucun cas être tenue responsable de tout objet oublié ou volé.</p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Sur l’Application, appuyer sur ‘’ P mode ‘’ </p>
                            <p>Pendant la période de Pause, chaque minute est facturée selon le prix indiqué dans l’article 3. </p>
                            
                        </div>
                        <div style={{marginLeft:'25px'}}>
                            <p className="termes-SousTitle" ><strong className="termes-Number">7.4.5 </strong> Procédure de restitution du Scooter et de fin de Location</p>
                            <p>Pour restituer le Scooter et mettre fin à sa Location, l’Utilisateur doit : </p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />S’assurer d’être dans un Parking POGO (indiqué sur l’Application).</p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Béquiller le Scooter.</p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Restituer le Casque en l’accrochant au Scooter</p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Retirer tous les Accessoires de l’Utilisateur du Scooter, POGO ne pouvant en aucun cas être tenue responsable de tout objet oublié ou volé. </p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Sur l’Application, appuyer sur ‘’ Fin ‘’  </p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Prendre une photo du Scooter à travers l’Application</p>
                            <p>L’Utilisateur est responsable du contrôle que la fin de sa Location est effective. Si le Scooter a été restitué d’une manière incorrecte, POGO ne pourra pas être tenue responsable d’une facturation prolongée. </p>
                        </div>
                        <div style={{marginLeft:'25px'}}>
                            <p className="termes-SousTitle" ><strong className="termes-Number">7.4.6 </strong> Fin de Location déclenchée par POGO</p>
                            <p>POGO se réserve le droit de suspendre l’accès au Service sans préavis, d’annuler une Réservation ou de mettre fin à une Location dans les cas suivants, et ce sans qu’aucune indemnité ne soit due à l’Utilisateur : </p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Problème technique ou incident de sécurité affectant l’utilisation du Service ou la gestion des Véhicules.</p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Fermeture du Service sur la décision d’une autorité compétente ou pour toute raison propre à POGO. </p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Force majeure. </p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Panne ou accident du Véhicule concerné.</p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Suspension ou désactivation du compte de l’Utilisateur ou de son accès au Service</p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Vol du Véhicule pendant une Location.</p>
                            
                        </div>
                        <div>
                            <p className="termes-SousTitle"><FontAwesomeIcon icon={faDiamond} style={{marginRight:'7px',fontSize:'12px'}} /><strong className="termes-Number">7.5</strong> Procédure d’assistance</p>
                            <p>En cas d’accident matériel et/ou corporel, de panne, ou de crevaison, l’Utilisateur doit obligatoirement déclencher la procédure d’assistance en appelant le Service Client POGO au numéro suivant +212 695 423 240, (coût d’un appel local depuis un téléphone portable marocain)</p>
                        </div>
                    
                    </div>
                    <div>
                        <p className="termes-Title"><FontAwesomeIcon icon={faPlus} style={{marginRight:'5px' ,fontSize:'20px'}}/>ARTICLE <span className="termes-Number">8</span> – PAIEMENTS  </p>
                        <div>
                            <p className="termes-SousTitle"><FontAwesomeIcon icon={faDiamond} style={{marginRight:'7px',fontSize:'12px'}} /><strong className="termes-Number">8.1</strong> Dispositions générales</p>
                            <p>L’Utilisateur s’engage à s’acquitter de toutes les sommes dont il serait redevable dans le cadre de l’utilisation du Service POGO, notamment : </p>
                            <p>Le prix d’utilisation du Service POGO. </p>
                            <p>Les contraventions dues aux éventuelles infractions au Code de la route que l’Utilisateur aura commises. </p>
                            <p>Les pénalités énumérées à l’article 10 des présentes CGU.</p>
                            <p>La franchise en cas d’accident sans tiers responsable.</p>
                            <p>L’Utilisateur s’engage à être à jour de ses obligations financières à l’égard de POGO pendant toute la durée de la relation contractuelle.</p>
                            <p>Les éléments dus par l’Utilisateur identifiés ci-dessus feront l’objet d’une facturation complémentaire, qui sera adressée à l’Utilisateur dans les trois (3) mois suivant la date de prise de connaissance par POGO des faits donnant lieu à leur exigibilité.</p>
                        </div>
                        <div>
                            <p className="termes-SousTitle"><FontAwesomeIcon icon={faDiamond} style={{marginRight:'7px',fontSize:'12px'}} /><strong className="termes-Number">8.2</strong> Paiement de la Location</p>
                            <p>Le prix de la Location, défini conformément à l’article 3 est exigible à la fin de chaque Location. </p><br />
                            <p>POGO émet une facture après que l’Utilisateur aie effectué une ou plusieurs Locations. Le prélèvement sera effectué soit depuis son solde POGO ou depuis la carte bancaire de l’Utilisateur (selon le mode qu’il a choisi) dont les coordonnées ont été saisies au moment de l’Inscription, dans l’intervalle de temps indiqué sur la facture.</p><br />
                            <p>En cas de rejet du prélèvement, l’Utilisateur peut régler sa facture directement à POGO depuis son Espace Personnel. La régularisation d’un incident de paiement par paiement direct permettra le déblocage de l’accès au Service de l’Utilisateur, sauf si le blocage résulte également du non-respect d’autres stipulations des présentes CGU.</p><br />
                        </div>
                        <div>
                            <p className="termes-SousTitle"><FontAwesomeIcon icon={faDiamond} style={{marginRight:'7px',fontSize:'12px'}} /><strong className="termes-Number">8.3</strong> Mise à jour des moyens de paiement</p>
                            <p>L’Utilisateur doit mettre à jour ses coordonnées et informations bancaires au fur et à mesure de leurs éventuels changements, afin que les informations à disposition de POGO soient à jour pendant toute la durée de la relation contractuelle.</p><br />
                            <p>Dans le cas où la carte bancaire de l’Utilisateur s’expirera, il doit absolument mettre à jour ses coordonnées bancaires quinze (15) jours avant l’expiration de sa carte. </p><br />
                            <p>En cas d’invalidité de la carte bancaire de l’Utilisateur pour une raison quelconque, POGO pourra suspendre l’accès au Service jusqu’à ce que la situation soit régularisée.l’Utilisateur reste néanmoins redevable des échéances de ses factures impayées.</p><br />

                        </div>
                        <div>
                            <p className="termes-SousTitle"><FontAwesomeIcon icon={faDiamond} style={{marginRight:'7px',fontSize:'12px'}} /><strong className="termes-Number">8.4</strong> Autorisation de prélèvement sur la carte bancaire </p>
                            <p>En saisissant ses références de carte bancaire lors de son Inscription ou dans le cadre de toute mise à jour de ses informations bancaires dans son Espace Personnel, et en acceptant les présentes CGU, l’Utilisateur consent à POGO une autorisation de prélèvement sur carte bancaire pour tous montants dus par l’Utilisateur notamment : </p><br />
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Les frais de Location.  </p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />Les pénalités.</p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />La franchise en cas d’accident ou de vol sans tiers responsable. </p>
                            <p>Une empreinte de la carte bancaire de l’Utilisateur est indispensable pour valider l’Inscription et autoriser le prélèvement des montants dus. </p>

                        </div>
                        <div>
                            <p className="termes-SousTitle"><FontAwesomeIcon icon={faDiamond} style={{marginRight:'7px',fontSize:'12px'}} /><strong className="termes-Number">8.5</strong> Facturation</p>
                            <p>
                            L’Utilisateur s’engage à payer les frais de Location correspondants. Ces frais de Location incluent le montant équivalent du nombre de minutes de location ainsi que le montant pour chaque minute de Pause. <br /> <br />
                            Les frais appliqués sont conformes à ceux indiqués sur l’Application POGO ainsi que dans l’article 3 des CGU ci-présentes. <br /><br />
                            Les frais de Location sont dus dès la fin du contrat de Location. <br /><br />
                            Pour tout remboursement, POGO utilise toujours le même mode de paiement que celui utilisé par l’Utilisateur pour la transaction initiale. <br /><br />
                            En acceptant les présentes CGU, l’Utilisateur déclare que lui et lui seul dispose du droit légal d’utiliser le mode de paiement prévu et d’autoriser les transactions. Dans le cas où POGO soupçonne que les informations concernant le mode de paiement qui ont été transmises par l’Utilisateur sont frauduleuses, POGO se réserve le droit de bloquer complètement l’accès au compte ainsi qu’aux Service POGO sans notification préalable, l’Utilisateur devra se justifier et clarifier la situation au Support de POGO afin de débloquer son compte et reprendre l’utilisation du Service. <br /><br />
                            Il est de la responsabilité de l’Utilisateur de veiller à ce que ses fonds soient suffisant pour faire une Location. Que ce soit le solde sur son compte POGO (issu de l’achat de Package), ou les fonds sur sa carte bancaire. <br /><br />
                            </p>

                        </div>
                    </div>
                    <div>
                        <p className="termes-Title"><FontAwesomeIcon icon={faPlus} style={{marginRight:'5px' ,fontSize:'20px'}}/>ARTICLE <span className="termes-Number">9</span> – PROTECTION DES DONNEES PERSONNELLES DE PROTECTION DES DONNEES PERSONNELLES DE L’UTILISATEUR </p>
                        <p>
                            Les destinataires des données personnelles concernant un Utilisateur, à l’exception des informations relatives à sa carte bancaire, et qui sont transmises par à la plateforme sécurisée de paiement en ligne Centre Monétique Interbancaire (CMI), pourront être en vertu de l’autorisation de la Commission Nationale de Contrôle de la Protection des Données à Caractère Personnel «CNDP». Les collaborateurs de CMI, responsables du traitement dont la finalité est le suivi de l’opération du paiement.<br /><br />
                            Les informations relatives à la carte bancaire recueillies par le Centre Monétique Interbancaire (CMI) ne peuvent être utilisées à des fins de prospection par ce dernier et sont la propriété du marchand qui a délégué le traitement du paiement au Centre Monétique Interbancaire (CMI).<br /><br />
                            L’Utilisateur peut accéder à ses données personnelles traitées par le Centre Monétique Interbancaire et qui figurent sur le reçu de la facture (hormis les informations relatives à la carte bancaire) en téléchargeant ses factures depuis l’Application POGO, ou en contactant le support POGO.<br /><br />
                            L’achat d’un Pack POGO ou le paiement effectué à la fin de chaque location vaut une acceptation irrévocable des présentes Conditions Générales d’Utilisation du service du Centre Monétique Interbancaire (CMI). Pour toute demande de rectification de vos données personnelles, ou d’annulation de la demande de paiement, vous devez vous adresser au support POGO.<br /><br />
                            Les données personnelles de chaque Utilisateur sont conservées dans les meilleures conditions de sécurité et de confidentialité auprès des services techniques de POGO.<br /><br />
                            Conformément aux dispositions du Dahir n 1-09-15 du 18 février 2009 portant promulgation de la loi n 09-08 relative à la protection des personnes physiques à l’égard du traitement des données à caractère personnel et de son décret d’application n 2-09-165 du 18 juin 2009, chaque Utilisateur dispose d’un droit d’accès, de modification, de rectification et de suppression des données personnelles le concernant. Pour exercer ce droit, l’Utilisateur peut accéder directement à son espace personnel sur l’Application POGO « Compte » ou en contactant le support POGO par appel téléphonique sur le numéro : +212 695 423 240 ou par mail sur l’adresse : support@pogo.ma En acceptant les présentes Conditions Générales d’Utilisation, l’Utilisateur autorise POGO à lui adresser par e-mail ou SMS des offres promotionnelles. Chaque Utilisateur peut à tout moment mettre fin à la réception de ces offres promotionnelles en se désabonnant sur le mail ou en désactivant les notifications via les paramètres.<br /><br />
                            Chaque Utilisateur reconnaît être informé et accepte que POGO conserve ses données personnelles pendant la durée d’ouverture de son compte
                        </p>
                    </div>
                    <div>
                        <p className="termes-Title"><FontAwesomeIcon icon={faPlus} style={{marginRight:'5px' ,fontSize:'20px'}}/>ARTICLE <span className="termes-Number">10</span> – OBLIGATIONS DE L’UTILISATEUR </p>
                        <div>
                            <p className="termes-SousTitle"><FontAwesomeIcon icon={faDiamond} style={{marginRight:'7px',fontSize:'12px'}} /><strong className="termes-Number">10.1</strong> Engagement de l’Utilisateur par rapport au Véhicule POGO </p>
                            <p>
                                Avant d’entamer sa Location et commencer la conduite du Véhicule POGO, l’Utilisateur doit s’assurer que le Véhicule et ses accessoires sont dans un bon état et prêt à être utilisé (pneus en bon état, rétroviseurs fonctionnels ..)<br /><br />
                                L’Utilisateur doit conduire le Véhicule en respectant les dispositions du Code la route et conformément aux CGU ci-présentes. Tout en utilisant les éléments de sécurité fournis.<br /><br /> 
                                Durant toute la durée du Location, l’Utilisateur est responsable du Véhicule et doit le considérer comme sa propre propriété. Il doit donc le stationner dans les endroits autorisés et s’assurer qu’il est en sécurité (présence de caméras de surveillance ou agent de sécurité).<br /><br />  
                                Une fois en circulation, il est interdit à l’Utilisateur de manger, boire, fumer ou pratiquer toute activité pouvant compromettre sa sécurité. <br /><br />
                            </p>
                            <p>L’Utilisateur doit respecter le nombre de passagers transportés autorisés pour chaque véhicule : </p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />2 passagers pour les Scooters</p>
                            <p style={{marginLeft:'35px'}}><FontAwesomeIcon icon={faCircle}  style={{fontSize:'6px',marginRight:'7px'}} />1 passager pour les Trottinettes </p>
                            <p>L’Utilisateur ne pourra utiliser le Véhicule ou permettre à quiconque de l’utiliser pour une activité à laquelle il n’est pas conçu ou à des fins illicites. </p>
                        </div>
                        <div>
                            <p className="termes-SousTitle"><FontAwesomeIcon icon={faDiamond} style={{marginRight:'7px',fontSize:'12px'}} /><strong className="termes-Number">10.2</strong> Conducteur d’un véhicule POGO </p>
                            <p>
                                Les Véhicules POGO ne doivent être conduit que par l’Utilisateur qui les a loués. L’Utilisateur s’engage à ne laisser aucune autre personne que lui-même conduire le Véhicule, même si cette dernière est également un Utilisateur du Service POGO. <br /><br />
                                En cas de non-respect de cet engagement, l’Utilisateur aura affaire à des pénalités.<br /><br />  
                                Toute utilisation de l’Application avec les Identifiants de l’Utilisateur est considérée avoir été faite par l’Utilisateur lui-même. Il est d’ailleurs responsable de la création, de la conservation et de l’utilisation de ses Identifiants, qui lui sont strictement personnels et ne doivent pas être communiqués à d’autres personnes. Il est de sa responsabilité de préserver leur confidentialité et sécurité.<br /><br />  
                                En cas de perte ou de vol de son mot de passe, l’Utilisateur doit le modifier immédiatement pour que son compte soit en sécurité.<br /><br /> 
                                L’Utilisateur est entièrement responsable de toute utilisation du Service via l’Application installée sur son smartphone. Même si cette utilisation a été faite par un tiers à son insu.<br /><br /> 
                            </p>
                        </div>
                        <div>
                            <p className="termes-SousTitle"><FontAwesomeIcon icon={faDiamond} style={{marginRight:'7px',fontSize:'12px'}} /><strong className="termes-Number">10.3</strong> Capacité de conduite </p>
                            <p>
                                L’Utilisateur s’engage au moment de l’utilisation d’un Véhicule POGO à ne pas se trouver sous l’emprise de l’alcool, de la drogue, de médicaments ou toute autre substance altérant ses facultés ou sa capacité à maîtriser le Véhicule.<br /><br /> 
                            </p>
                        </div>
                        <div>
                            <p className="termes-SousTitle"><FontAwesomeIcon icon={faDiamond} style={{marginRight:'7px',fontSize:'12px'}} /><strong className="termes-Number">10.4</strong> Dommages </p>
                            <p>
                                L’Utilisateur est seul et entier responsable des dommages aux personnes et aux biens (en ce compris au Véhicule) causés par l’utilisation qui est faite du Scooter durant toute la durée de la Location. <br /><br />
                                L’Utilisateur est tenu de restituer le Véhicule dans le même état que celui où il était avant la Location. En cas de perte ou de dommages survenus pendant la période de Location, l’Utilisateur devra indemniser POGO des préjudices et frais encourus. <br /><br />
                                A titre indicatif, le prix de la réparation est le prix de la pièce détachée endommagée à l’addition de la somme forfaitaire de 150 MAD (frais du transport et de la réparation du véhicule). Ce prix sera communiqué à l’Utilisateur et prélevé sur sa carte bancaire.<br /><br />

                                Liste non exhaustive des pièces détachées: <br /><br /> 
                            </p>
                            <table>
                                <thead>
                                    <tr>
                                        <th style={{textDecoration:'underline'}}>Pièce</th>
                                        <th style={{textDecoration:'underline'}}>Tarif</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Rétroviseur</td>
                                        <td>46 MAD</td>
                                    </tr>
                                    <tr>
                                        <td>Carénage du côté</td>
                                        <td>85 MAD</td>
                                    </tr>
                                    <tr>
                                        <td>Garde-boue du devant</td>
                                        <td>79 MAD</td>
                                    </tr>
                                    <tr>
                                        <td>Carénage avant</td>
                                        <td>105 MAD</td>
                                    </tr>
                                    <tr>
                                        <td>Repose-pieds</td>
                                        <td>94 MAD</td>
                                    </tr>
                                    <tr>
                                        <td>Béquille latérale</td>
                                        <td>54 MAD</td>
                                    </tr>
                                    <tr>
                                        <td>Béquille centrale</td>
                                        <td>159 MAD</td>
                                    </tr>
                                    <tr>
                                        <td>Barre latérale basse</td>
                                        <td>57 MAD</td>
                                    </tr>
                                    <tr>
                                        <td>Repose-pied	</td>
                                        <td>101 MAD</td>
                                    </tr>
                                    <tr>
                                        <td>Topcase</td>
                                        <td>300 MAD</td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                            <p>En cas d'insuffisance des fonds permettant déduire ces frais, POGO pourra contacter l’Utilisateur afin que ce dernier puisse effectuer le paiement de ces montants. </p>
                        </div>
                        <div>
                            <p className="termes-Title"><FontAwesomeIcon icon={faPlus} style={{marginRight:'5px' ,fontSize:'20px'}}/>ARTICLE <span className="termes-Number">11</span> – PENALITES ET SANCTIONS </p>
                            <p>
                                Des pénalités seront appliquées à l’Utilisateur en cas de non-respect des présentes CGU :  
                                Abandon du Véhicule pendant la Location hors Parking POGO : <br /><br />
                                La Location reste effective sans plafonnement de facturation jusqu’à la restitution du Véhicule par l’Utilisateur ou, si ce dernier refuse, jusqu’à ce qu’un agent ou un dépanneur mandaté par POGO le récupère. L’Utilisateur sera facturé des frais de la Location ainsi que du rapatriement du Véhicule au Parking POGO. <br /><br />
                                Défaut de Paiement : <br /><br />
                                Non-paiement des sommes dues à POGO par l’Utilisateur. <br /><br />
                                Sanction : Suspension de l’accès au Service jusqu’au paiement des sommes dues. <br /><br />
                                Panne de batterie : due à la négligence de l’Utilisateur et entrainant l’intervention de POGO ou d’un dépanneur mandaté par POGO. <br /><br />
                                Perte ou dégradation du Casque : <br /><br />
                                Enlèvement du Scooter en fourrière ou par les services de Police : due à un stationnement non-autorisé. <br /><br />
                            </p>
                        </div>
                        <div>
                            <p className="termes-Title"><FontAwesomeIcon icon={faPlus} style={{marginRight:'5px' ,fontSize:'20px'}}/>ARTICLE <span className="termes-Number">12</span> –  ASSURANCES </p>
                            <p>En utilisant les services de POGO, l’Utilisateur est assuré. </p>
                            <p className="termes-SousTitle"><FontAwesomeIcon icon={faDiamond} style={{marginRight:'7px',fontSize:'12px'}} /><strong className="termes-Number">12.1</strong> Assurance Responsabilité Civile</p>
                            <p className="termes-SousTitle"><FontAwesomeIcon icon={faDiamond} style={{marginRight:'7px',fontSize:'12px'}} /><strong className="termes-Number">12</strong> Protection du conducteur </p>
                            <p className="termes-SousTitle"><FontAwesomeIcon icon={faDiamond} style={{marginRight:'7px',fontSize:'12px'}} /><strong className="termes-Number">12</strong>  Protection de la personne transportée</p>
                        </div>
                    </div>
                    
            </div>
            <Footer />
        </>
    )
}