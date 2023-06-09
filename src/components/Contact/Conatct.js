import React , {useState} from "react";
import {Link} from 'react-router-dom'
import './Style.css'
import Navbar from '../NavBar/Navbar'
import Footer from '../Footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot , faPhone , faAt} from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Contact(){
    const history = useNavigate();
    const [firstName, setfirstName] = useState('');
    const [secondName, setsecondName] = useState('');
    const [email, setEmail] = useState('');
    const [sujet, setSujet] = useState('')
    const [message, setMessage] = useState('');

 
  const sendRequest = async ()=>{
    await axios.post("",{
        firstName:firstName,
        secondName:setsecondName,
        email:email,
        sujet:sujet,
        message:message

    }).then((res)=>res.data)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
        firstName:firstName,
        secondName:setsecondName,
        email:email,
        sujet:sujet,
        message:message
    });
    sendRequest().then(()=>history('/contact'))

  };

  const handleFirstNameChange = (event) => {
    setfirstName(event.target.value);
  };
  const handlesecondNameChange = (event) => {
    setsecondName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlesujetChange = (event) => {
    setSujet(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
    return(
        <>
            <Navbar />
            <div className="Contact-Container">
                <div className="Contact-Description">
                    <h1>CONTACTEZ-NOUS</h1>
                    <p>Vous avez une question, un commentaire ou quelque chose à nous signaler ? Nous sommes à votre disposition !</p>
                    <div className="contact_info-Container">
                        <div className="contact_info">
                            <div className="contact_icon">
                                 <FontAwesomeIcon icon={faLocationDot} />
                            </div>
                            <div className="contact_text">
                                <h1>Fès</h1>
                                <span>209 B Lotissement Riad Rte Meknès - Fès</span>
                            </div>
                        </div>
                        <div className="contact_info">
                            <div className="contact_icon">
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                            <div className="contact_text">
                                <h1>Appelez-nous</h1>
                                <span>(+212) 695 423 240</span>
                            </div>
                        </div>
                        <div className="contact_info">
                            <div className="contact_icon">
                                 <FontAwesomeIcon  icon={faAt} />
                            </div>
                            <div className="contact_text">
                                <h1>Adresse email</h1>
                                <span><Link to='mailto:pogomobility@gmail.com'>pogomobility@gmail.com</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-form" >
                    <form id="contact" onSubmit={handleSubmit}>
                        <div className="section-heading">
                        
                        </div>
                        <div className="inputField">
                        <span className="Input_Titile">Nom</span>
                        <input
                            type="text"
                            name="firsTName"
                            placeholder="Votre Nom"
                            autoComplete="on"
                            value={secondName}
                            onChange={handlesecondNameChange}
                            required
                        />
                        <span className="valid_info_name"></span>
                        </div>
                        <div className="inputField">
                        <span className="Input_Titile">Prenom</span>
                        <input
                            type="text"
                            name="secondName"
                            placeholder="Votre Prenom"
                            autoComplete="on"
                            value={firstName}
                            onChange={handleFirstNameChange}
                            required
                        />
                        <span className="valid_info_name"></span>
                        </div>
                        <div className="inputField">
                        <span className="Input_Titile">Email</span>
                        <input
                            type="email"
                            name="email"
                            placeholder="Votre Email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                        <span className="valid_info_email"></span>
                        </div>
                        <div className="inputField">
                        <span className="Input_Titile">Sujet</span>
                        <input
                            type="text"
                            name="sujet"
                            placeholder="..."
                            autoComplete="on"
                            value={sujet}
                            onChange={handlesujetChange}
                            required
                        />
                        <span className="valid_info_name"></span>
                        </div>
                        <div className="inputField">
                            <span className="Input_Titile">Commentaire / Questions</span>
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Your message"
                            value={message}
                            onChange={handleMessageChange}
                        ></textarea>
                        <span className="valid_info_message"></span>
                        </div>
                        <div className="inputField btn">
                        <button
                            type="submit"
                            id="form-submit"
                            className="main-gradient-button"
                            disabled={!firstName || !secondName || !sujet || !email || !message}
                        >
                            Envoyer le message
                        </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}