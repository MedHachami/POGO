import React ,{useState} from "react";
import Navbar from '../NavBar/Navbar'
import Footer from '../Footer/Footer'
import './Style.css'
import plus from "../../assets/plus.png"
import minus from "../../assets/minus.png"
export default function Faquestion(){
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [selectedImg, setSelectedImg] = useState(plus);
    const handleQuestionClick = (Question) => {
       
        if(selectedQuestion === Question){
            setSelectedQuestion(null);
        }else{
            setSelectedQuestion(Question);
        }
    }
    return(
        <>
            <Navbar />
            <div className="faq-container">
                <div className="faq-title">
                    <h1>FAQ</h1>
                </div>
                <div className="fa-questions">
                    <div className="faq_questionContainer">
                        <div className="fa-question" onClick={() => handleQuestionClick('Question 1')} >
                            <p>En quoi consiste le service POGO ? </p>
                            {selectedQuestion === 'Question 1' ? <img src={minus} style={{width:'15px'}} /> :<img src={plus} style={{width:'15px'}} /> }
                        </div>
                        {
                            selectedQuestion === 'Question 1' &&<p  className="fa-answer">
                            POGO met à votre disposition des scooters et des trottinettes électriques en libre-service disponibles 24h/24, 7j/7. Vous pouvez les réservez et se déplacer avec librement en quelques clics sur l’application mobile.Pas d’abonnement, pas d’engagement. Avec POGO, vous ne payez que vos minutes de location !
                            </p>
                        }
                        
                    </div>
                    <div className="faq_questionContainer">
                        <div className="fa-question" onClick={() => handleQuestionClick('Question 2')} >
                            <p>Est-ce que je peux conduire un véhicule POGO ? </p>
                            {selectedQuestion === 'Question 2' ? <img src={minus} style={{width:'15px'}} /> :<img src={plus} style={{width:'15px'}} /> }
                        </div>
                        {
                            selectedQuestion === 'Question 2' &&<p  className="fa-answer">
                            Vous êtes âgés de 18 ans ou plus ? Vous disposez d’un smartphone où est téléchargée la dernière version de l’application POGO ? Vous avez rempli le formulaire d’inscription sur l’App ? Si oui, vous pouvez conduire un véhicule POGO dès maintenant !
                            </p>
                        }
                    </div>
                    <div className="faq_questionContainer">
                        <div className="fa-question" onClick={() => handleQuestionClick('Question 3')} >
                            <p>Comment puis-je démarrer et terminer une location ? </p>
                            {selectedQuestion === 'Question 3' ? <img src={minus} style={{width:'15px'}} /> :<img src={plus} style={{width:'15px'}} /> }
                        </div>
                        {
                            selectedQuestion === 'Question 3' &&<p  className="fa-answer">
                            Pour démarrer votre location : Scannez le code QR ou taper l’identifiant sur le véhicule pour le déverrouiller, la location devient effective. Pour finir votre location : Garez le véhicule dans un ‘’ Parking POGO ‘’, éteignez-le, puis cliquez sur le bouton ‘’ End ride ‘’ sur l’App POGO. Veillez à ne pas quitter le véhicule avant de recevoir la confirmation de la fin de votre location.
                            </p>
                        }
                    </div>
                    <div className="faq_questionContainer">
                        <div className="fa-question" onClick={() => handleQuestionClick('Question 4')} >
                            <p>Qu’est-ce que le ‘’ Parking POGO ‘’ ?</p>
                            {selectedQuestion === 'Question 4' ? <img src={minus} style={{width:'15px'}} /> :<img src={plus} style={{width:'15px'}} /> }
                        </div>
                        {
                            selectedQuestion === 'Question 4' &&<p  className="fa-answer">
                            C’est la zone dans laquelle se situent les scooters et les trottinettes disponibles à la réservation et dans laquelle vous devez également restituer le véhicule afin de mettre fin à votre location. Pendant votre location, vous pouvez rouler et mettre en mode ‘’ Pause ‘’ le véhicule librement dans le milieu urbain.
                            </p>
                        }
                    </div>
                    <div className="faq_questionContainer">
                        <div className="fa-question" onClick={() => handleQuestionClick('Question 5')} >
                            <p>Combien me coûtera le voyage ?</p>
                            {selectedQuestion === 'Question 5' ? <img src={minus} style={{width:'15px'}} /> :<img src={plus} style={{width:'15px'}} /> }
                        </div>
                        {
                            selectedQuestion === 'Question 5' &&<p  className="fa-answer">
                            La location d’un véhicule POGO est facturé à la minute. Les tarifs peuvent varier selon la ville, veuillez donc vous référer à l’application POGO pour connaître les tarifs exacts pratiqués au moment de la location, il vous suffit d’appuyer sur le véhicule choisi sur la carte.
                            </p>
                        }
                    </div>
                    <div className="faq_questionContainer">
                        <div className="fa-question" onClick={() => handleQuestionClick('Question 6')} >
                            <p>Qu’est-ce que c’est que le mode ‘’ Pause ‘’ ?</p>
                            {selectedQuestion === 'Question 6' ? <img src={minus} style={{width:'15px'}} /> :<img src={plus} style={{width:'15px'}} /> }
                        </div>
                        {
                            selectedQuestion === 'Question 6' &&<p  className="fa-answer">
                            POGO vous fournit la meilleure expérience possible, pour le meilleur coût possible, c’est pour cela que nous proposons le mode ‘’ Pause ‘’, afin de réduire la tarification de votre voyage. Vous souhaitez rejoindre des amis dans un café ? Garez le véhicule dans un endroit autorisé et sécurisé, mettez-le en mode ‘’ Pause ‘’, la tarification par minute sera considérablement réduite.
                            </p>
                        }
                    </div>
                    <div className="faq_questionContainer">
                        <div className="fa-question" onClick={() => handleQuestionClick('Question 7')} >
                            <p>Dois-je être muni(e) d’un casque pour conduire un véhicule POGO ? </p>
                            {selectedQuestion === 'Question 7' ? <img src={minus} style={{width:'15px'}} /> :<img src={plus} style={{width:'15px'}} /> }
                        </div>
                        {
                            selectedQuestion === 'Question 7' &&<p  className="fa-answer">
                            Conformément à la loi, sur tout véhicule à 2 roues, le port du casque est obligatoire, c’est une mesure de sécurité qui vous protège principalement. Mais pas de panique, nous vous simplifions la vie, c’est POGO qui vous fournit un casque que vous devriez absolument porter lors de la conduite. Nous vous faisons confiance, veuillez donc bien le remettre en place à la fin de votre location.
                            </p>
                        }
                    </div>
                    <div className="faq_questionContainer">
                        <div className="fa-question" onClick={() => handleQuestionClick('Question 8')} >
                            <p>Est-ce que je suis assuré(e) ? </p>
                            {selectedQuestion === 'Question 8' ? <img src={minus} style={{width:'15px'}} /> :<img src={plus} style={{width:'15px'}} /> }
                        </div>
                        {
                            selectedQuestion === 'Question 8' &&<p  className="fa-answer">
                            La sécurité et le bien-être des utilisateurs de nos services est la priorité numéro 1 de POGO. Nous collaborons avec l’un des meilleurs assureurs dans le monde entier, Allianz, pour que vous soyez 100% assurés en conduisant un véhicule POGO, à condition que vous respectiez les Conditions Générales d’Utilisation.
                            </p>
                        }
                    </div>
                    <div className="faq_questionContainer">
                        <div className="fa-question" onClick={() => handleQuestionClick('Question 9')} >
                            <p>Peut-on rouler à deux sur un véhicule POGO ?</p>
                            {selectedQuestion === 'Question 9' ? <img src={minus} style={{width:'15px'}} /> :<img src={plus} style={{width:'15px'}} /> }
                        </div>
                        {
                            selectedQuestion === 'Question 9' &&<p  className="fa-answer">
                            Sur un scooter : Vous pouvez rouler à deux sur nos scooters. Le scooter est homologué pour le transport d’un passager et vous êtes tous les deux assurés(es) à 100%. Sur une trottinette : Nos trottinettes sont homologuées pour l’utilisation individuelle. Seulement une personne peut donc la conduire.
                            </p>
                        }
                    </div>
                    <div className="faq_questionContainer">
                        <div className="fa-question" onClick={() => handleQuestionClick('Question 10')} >
                            <p>Comment fonctionne l’assurance ?</p>
                            {selectedQuestion === 'Question 10' ? <img src={minus} style={{width:'15px'}} /> :<img src={plus} style={{width:'15px'}} /> }
                        </div>
                        {
                            selectedQuestion === 'Question 10' &&<p  className="fa-answer">
                            Lors de la conduite de l’un de nos véhicules POGO, vous êtes couverts par une assurance “ avec notre partenaire Allianz. En cas d’accident ou de dommages, vous êtes couvert dans la limite de la franchise contractuelle de 1000 DH. Par exemple, si vous avez un accident et que le véhicule est endommagé à hauteur de 2000DH vous ne payez que 1000 DH. En revanche, si le montant des dégâts est de 300DH vous ne payez que 300DH. À noter que si vous avez un accident avec un tiers, que vous n’êtes pas responsable et que vous avez bien rempli le constat amiable, vous ne payez pas de franchise.
                            </p>
                        }
                    </div>
                    <div className="faq_questionContainer">
                        <div className="fa-question" onClick={() => handleQuestionClick('Question 11')} >
                            <p>Comment consulter l’historique de mes trajets ?</p>
                            {selectedQuestion === 'Question 11' ? <img src={minus} style={{width:'15px'}} /> :<img src={plus} style={{width:'15px'}} /> }
                        </div>
                        {
                            selectedQuestion === 'Question 11' &&<p  className="fa-answer">
                            Si vous souhaitez consulter l’historique de vos trajets, vous pouvez vous rendre à l’application POGO sous le menu “ Mes réservations ”. Votre historique de trajets est disponible avec les détails suivants : La date et l’heure de la location, le type du véhicule, la distance parcourue, la durée ainsi que le tarif total.
                            </p>
                        }
                    </div>
                    <div className="faq_questionContainer">
                        <div className="fa-question" onClick={() => handleQuestionClick('Question 12')} >
                            <p>Quels sont les modes de paiement que je peux utiliser ?</p>
                            {selectedQuestion === 'Question 12' ? <img src={minus} style={{width:'15px'}} /> :<img src={plus} style={{width:'15px'}} /> }
                        </div>
                        {
                            selectedQuestion === 'Question 12' &&<p  className="fa-answer">
                            Prélèvement bancaire : Packs POGO : A l’issue de l’achat d’un Pack POGO, vous créditez des minutes prépayées sur votre compte POGO selon le Pack choisi et vous profitez de bonus allant jusqu’à 50DH. Vous pouvez acheter un Pack POGO avec votre carte bancaire, ou en payant en espèces dans l’une de nos agences.
                            </p>
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}