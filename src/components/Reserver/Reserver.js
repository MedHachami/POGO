import React ,{ useState , useEffect } from "react";
import './Style.css'
import Navbar from '../NavBar/Navbar'
import Footer from '../Footer/Footer'
import chek from '../../assets/check1.png'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'
export default function Reserver(){
  const [offres,setOffres] = useState([])
  const [message,setMessage] =useState(null)
    const history = useNavigate();
    const fetchHandler = async () => {
      try {
        const response = await axios.post('http://pogo.gounane.ovh:3000/rentOffer');
        
        return response.data;
      } catch (error) {
        console.error(error);
        return error;
      }
    };
   
    
    
    useEffect(() => {
      fetchHandler().then((data) => setOffres(data.splice(0).reverse()))
    }, []);
    
  
   
    const [dateLivraison,setdateLivraison] = useState('')
    const[dateRamassage,setdateRamassage] = useState('')
    const[Nom,setNom]= useState('')
    const[NombreMoto,setNombreMoto] = useState('')
    const[tele,setTele] = useState('')
    const[email,setEmail] = useState('')
    const[place,setPlace] = useState('')
    const[offre,setOffre] = useState('')

    const handledateLivraison = (event) => {
        setdateLivraison(event.target.value);
      };
      
      const handledateRamassage = (event) => {
        setdateRamassage(event.target.value);
      };
      
      const handleNom = (event) => {
        setNom(event.target.value);
      };
      const handleEmail = (event) => {
        setEmail(event.target.value);
      };
      const handleNombreMoto = (event) => {
        setNombreMoto(event.target.value);
      };
      const handleTele = (event) => {
        setTele(event.target.value);
      };

      const handlePlace = (event) => {
        setPlace(event.target.value);
      };
     

      const sendRequest = async ()=>{
        await axios.post("http://pogo.gounane.ovh:3000/rent/create",{
          "address":place,
          "phone":tele,
          "pickupDate":dateLivraison,
          "returnDate":dateRamassage,
          "amount":NombreMoto,
          "email":email,
          "rentOffer":offre,
          "orderType":"onArrival",
          "fullName":Nom


    
        }).then((res)=>{
          setMessage(res.data.message);
          console.log(res.data.message);
        })
      }
   console.log("this : " + message);
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
          address:place,
          phone:tele,
          pickupDate:dateLivraison,
          returnDate:dateRamassage,
          amount:NombreMoto,
          email:email,
          rentOffer:offre,
          orderType:"onArrival",
          fullName:Nom
        });
        sendRequest().then(()=>history('/reserver'))
    
      };

    return(
        <>
            <Navbar />
            <div className="reserver-Container">
                <div className="title-Container">
                    <h1>Réservez maintenant en 3 étapes</h1>
                </div>
                
                <div className="reserver-Header">
                    <h2>Choisissez votre véhicule ...</h2>
                    <h1>Le commencement d'une grande <span  style={{color:'#03d3b9'}}>aventure !</span></h1>
                </div>
                <div className="flotte-Container">
                    
                    {
                      offres.map((offre)=>{
                        return(
                          <>
                            
                            <div className="vehicule-Card">
                              <div className="radioButton">
                                <input type="radio" name="vehicule" id="box-shadow" className="custom-radio" />
    
                              </div>
                              <h1>POGO {offre.vehiculeType.vehicule.typeName.charAt(0)}</h1>
                              <div className="card-Thumb">
                                <img src={`http://pogo.gounane.ovh:3000/${offre.vehiculeType.vehicule.image}`} className="card-img" />
                              </div>

                              <div className="scooter-Prop">
                                <ul>
                                    <li><img src={chek} style={{width:'25px'}} /><span>{offre.vehiculeType.vehiculeDescription[0]}</span></li>
                                    <li><img src={chek} style={{width:'25px'}} /><span>{offre.vehiculeType.vehiculeDescription[1]}</span></li>
                                    <li><img src={chek} style={{width:'25px'}} /><span>{offre.vehiculeType.vehiculeDescription[2]}</span></li>
                                </ul>
                              </div>

                            </div>
                          </>
                        )
                      })
                    }
                    
                </div>
                <div className="reserver-Header">
                      <h2>Choisissez votre plan ...</h2>
                      <h1>Un pas de plus vers <span style={{color:'#03d3b9'}}>la liberté !</span></h1>
                </div>
                <div className="plans-Container">
                  {
                    offres.map((offre)=>{
                      return(
                        <div className="plan-Card">
                            <div className="radioButton">
                                  <input type="radio"
                                   name="plan" 
                                   id="box-shadow"
                                    className="custom-radio"
                                     value={offre._id}
                                     onChange={(e) => setOffre(e.target.value)} 
                                  />
      
                            </div>
                            <div className="plan-props">
                              <h2>Plan basic</h2>
                              <h1 className="plan-Prix">{offre.prix} Dhs</h1>
                              <p>{offre.period} H</p>
                            </div>
                          <div className="scooter-Prop">
                            <ul>
                                <li><img src={chek} style={{width:'25px'}} /><span>{offre.description[0]}</span></li>
                                <li><img src={chek} style={{width:'25px'}} /><span>{offre.description[1]}</span></li>
                                <li><img src={chek} style={{width:'25px'}} /><span>{offre.description[2]}</span></li>
                            </ul>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
                <div className="reserver-Header">
                        <h2>Renseignez vos informations ...</h2>
                        <h1>L'évasion est à portée de main !</h1>
                </div>
                <div className="reserver-form" >
                
                    <form id="contact" onSubmit={handleSubmit} >
                        <div className="inputField">
                        <span className="Input_Titile">Nom complet</span>
                        <input
                            type="text"
                            placeholder="Votre Nom"
                            autoComplete="on"
                            value={Nom}
                            onChange={handleNom}
                            required
                        />
                        <span className="valid_info_name"></span>
                        </div>
                        <div className="inputField">
                        <span className="Input_Titile">Téléphone</span>
                        <input
                            type="text"
                            placeholder="+212.. "
                            autoComplete="on"
                            value={tele}
                            onChange={handleTele}
                            required
                        />
                        <span className="valid_info_name"></span>
                        </div>
                        <div className="inputField">
                        <span className="Input_Titile">Email</span>
                        <input
                            type="email"
                            placeholder="you@mymail.com "
                            autoComplete="on"
                            value={email}
                            onChange={handleEmail}
                            required
                        />
                        <span className="valid_info_name"></span>
                        </div>
                        <div className="inputField">
                        <span className="Input_Titile">Nombre de moto</span>
                        <input
                            type="text"
                            placeholder="Nombre de moto"
                            autoComplete="on"
                            value={NombreMoto}
                            onChange={handleNombreMoto}
                            required
                        />
                        <span className="valid_info_name"></span>
                        </div>
                        <div className="inputField">
                        <span className="Input_Titile">Date de livraison</span>
                        <input
                            type="datetime-local"
                            autoComplete="on"
                            value={dateLivraison}
                            onChange={handledateLivraison}
                            required
                        />
                        <span className="valid_info_name"></span>
                        </div>
                        
                        <div className="inputField">
                        <span className="Input_Titile">Date de ramassage</span>
                        <input
                            type="datetime-local"
                            autoComplete="on"
                            value={dateRamassage}
                            onChange={handledateRamassage}
                            required
                        />
                        <span className="valid_info_name"></span>
                        </div>
                        <div className="inputField">
                            <span className="Input_Titile">Adresse</span>
                        <textarea
                            name="Adresse"
                            id="message"
                            placeholder="Votre Adresse"
                            value={place}
                            onChange={handlePlace}
                        ></textarea>
                        <span className="valid_info_message"></span>
                        </div>
                        <div className="inputField btn">
                        <button
                            type="submit"
                            id="form-submit"
                            className="main-gradient-button"
                            disabled={!dateLivraison ||  !dateRamassage  || !Nom || !NombreMoto || !tele || !offre || !place}
                        >
                            Reserver
                        </button>
                        
                        </div>
                        {
                            message 
                            && 
                            <div className="success-msg">
                                <div>
                                  <FontAwesomeIcon icon={faCheck} style={{fontSize:'24px'}} />
                                </div>
                                <div>
                                  <p>{message}</p>
                                </div>  
                            </div>
                          }
                         
                        
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}