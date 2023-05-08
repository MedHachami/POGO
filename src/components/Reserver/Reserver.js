import React ,{ useState } from "react";
import './Style.css'
import Navbar from '../NavBar/Navbar'
import Footer from '../Footer/Footer'
import chek from '../../assets/check1.png'
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Reserver(){
    const history = useNavigate();
    const options = [
        {
          label: "Fès",
          value: "fes",
        },
        {
          label: "Rabat",
          value: "rabat",
        },
        {
          label: "Ben Guerir",
          value: "ben guerir",
        },
       
      ];
    const [dateLivraison,setdateLivraison] = useState('')
    const[heureLivraison,setheureLivraison] = useState('')
    const[dateRamassage,setdateRamassage] = useState('')
    const[heureRamassage,setheureRamassage] = useState('')
    const[Nom,setNom]= useState('')
    const[NombreMoto,setNombreMoto] = useState('')
    const[tele,setTele] = useState('')
    const[place,setPlace] = useState('fes')

    const handledateLivraison = (event) => {
        setdateLivraison(event.target.value);
      };
      const handleheureLivraison = (event) => {
        setheureLivraison(event.target.value);
      };
      const handledateRamassage = (event) => {
        setdateRamassage(event.target.value);
      };
      const handleheureRamassage = (event) => {
        setheureRamassage(event.target.value);
      };
      const handleNom = (event) => {
        setNom(event.target.value);
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
        await axios.post("",{
            place:place,
            dateLivraison:dateLivraison,
            heureLivraison:heureLivraison,
            dateRamassage:dateRamassage,
            heureRamassage:heureRamassage,
            Nom:Nom,
            NombreMoto:NombreMoto,
            tele:tele


    
        }).then((res)=>res.data)
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
            place:place,
            dateLivraison:dateLivraison,
            heureLivraison:heureLivraison,
            dateRamassage:dateRamassage,
            heureRamassage:heureRamassage,
            Nom:Nom,
            NombreMoto:NombreMoto,
            tele:tele
        });
        sendRequest().then(()=>history('/reserver'))
    
      };

    return(
        <>
            <Navbar />
            <div className="reserver-Container">
                <div className="title-Container">
                    <h1>Nos Offres</h1>
                </div>
                <div className="offre-Container">
                    <div className="offre-Card">
                        <h1>24H/69DH</h1>
                        <span className="distance">Vous aurez droit à 25 km</span>
                        <div className="card-options">
                        <div className="tarifChek-container">
                            <div className="tarif-Chek"><img src={chek} style={{width:'25px'}} /><span style={{marginTop:'5px'}}>Assurance tous risques inclus</span></div>
                            <div className="tarif-Chek"><img src={chek} style={{width:'25px'}} /><span style={{marginTop:'5px'}}>Livraison et ramassage gratuit</span></div>
                            <div className="tarif-Chek"><img src={chek} style={{width:'25px'}} /><span style={{marginTop:'5px'}}>Casque offert</span></div>
                        </div>
                    </div>
                </div>
                <div className="offre-Card">
                        <h1>24H/99DH</h1>
                        <span className="distance">Vous aurez droit à 50 km</span>
                        <div className="card-options">
                            <div className="tarifChek-container">
                                <div className="tarif-Chek"><img src={chek} style={{width:'25px'}} /><span style={{marginTop:'5px'}} >Assurance tous risques inclus</span></div>
                                <div className="tarif-Chek"><img src={chek} style={{width:'25px'}} /><span style={{marginTop:'5px'}} >Livraison et ramassage de la moto gratuit</span></div>
                                <div className="tarif-Chek"><img src={chek} style={{width:'25px'}} /><span style={{marginTop:'5px'}} >Casque offert</span></div>
                            </div>
                        </div>
                    </div>
                
                </div>
                <div className="constact-form" >
                    <form id="contact" onSubmit={handleSubmit} >
                        
                        <div className="inputField">
                        <span className="Input_Titile">Place de la livraison</span>
                        <select onChange={handlePlace}>
                        {
                            options.map((option) => (
                             <option value={option.value}>{option.label}</option>
                        ))
                        }
                        </select>
                        <span className="valid_info_name"></span>
                        </div>
                        <div className="inputField">
                        <span className="Input_Titile">Date de livraison</span>
                        <input
                            type="date"
                            autoComplete="on"
                            value={dateLivraison}
                            onChange={handledateLivraison}
                            required
                        />
                        <span className="valid_info_name"></span>
                        </div>
                        <div className="inputField">
                        <span className="Input_Titile">Heure de livraison</span>
                        <input
                            type="text"
                            placeholder="01:00 "
                            autoComplete="on"
                           value={heureLivraison}
                            onChange={handleheureLivraison}
                            required
                        />
                        <span className="valid_info_name"></span>
                        </div>
                        <div className="inputField">
                        <span className="Input_Titile">Date de ramassage</span>
                        <input
                            type="date"
                            autoComplete="on"
                            value={dateRamassage}
                            onChange={handledateRamassage}
                            required
                        />
                        <span className="valid_info_name"></span>
                        </div>
                        <div className="inputField">
                        <span className="Input_Titile">Heure de ramassage</span>
                        <input
                            type="text"
                            placeholder="01:00 "
                            autoComplete="on"
                            value={heureRamassage}
                            onChange={handleheureRamassage}
                            required
                        />
                        <span className="valid_info_name"></span>
                        </div>
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
                        <div className="inputField btn">
                        <button
                            type="submit"
                            id="form-submit"
                            className="main-gradient-button"
                            disabled={!dateLivraison || !heureLivraison || !dateRamassage || !heureRamassage || !Nom || !NombreMoto || !tele }
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