import React ,{ useState , useEffect } from "react";
import './Style.css'
import Navbar from '../NavBar/Navbar'
import Footer from '../Footer/Footer'
import chek from '../../assets/check1.png'
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Reserver(){
  const [offres,setOffres] = useState([])
  const [test,setTest] =useState({})
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
   
    console.log(offres);
    
    useEffect(() => {
      fetchHandler().then((data) => setOffres(data.splice(0).reverse()))
    }, []);
    
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
      const offreOptions = [
        {
          label: "24H / 69 DH",
          value: "offre1",
        },
        {
          label: "24H /99 DH",
          value: "offre2",
        },
        
       
      ];
    const [dateLivraison,setdateLivraison] = useState('')
    const[dateRamassage,setdateRamassage] = useState('')
    const[Nom,setNom]= useState('')
    const[NombreMoto,setNombreMoto] = useState('')
    const[tele,setTele] = useState('')
    const[place,setPlace] = useState('fes')
    const [offre,setOffre] = useState('offre1')

    const handledateLivraison = (event) => {
        setdateLivraison(event.target.value);
      };
      
      const handledateRamassage = (event) => {
        setdateRamassage(event.target.value);
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
      const handleOffre = (event) => {
        setOffre(event.target.value);
      };

      const sendRequest = async ()=>{
        await axios.post("",{
           adress:place,
           clientId:null,
           phoneNumber:tele,
           pickupDate:dateLivraison,
           returnDate:dateRamassage,
           amount:NombreMoto,
           rentOffer:offre,
           orderType:'onArrival'


    
        }).then((res)=>res.data)
      }
   
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
          adress:place,
          clientId:null,
          phoneNumber:tele,
          pickupDate:dateLivraison,
          returnDate:dateRamassage,
          amount:NombreMoto,
          rentOffer:offre,
          orderType:'onArrival'
        });
        sendRequest().then(()=>history('/reserver'))
    
      };

    return(
        <>
            <Navbar />
            <div className="reserver-Container">
                <div className="title-Container">
                    <h1>Réservez maintenant </h1>
                </div>
                <div className="reserver-Header">
                      <h2>Choisissez votre plan ...</h2>
                      <h1>Un pas de plus vers <span style={{color:'#03d3b9'}}>la liberté !</span></h1>
                </div>
                <div className="plans-Container">
                    
                    <div className="plan-Card">
                        <div className="plan-props">
                          <h2>Plan basic</h2>
                          <h1 className="plan-Prix">119 Dhs</h1>
                          <p>24H</p>
                        </div>
                      <div className="scooter-Prop">
                        <ul>
                            <li><img src={chek} style={{width:'25px'}} /><span>Jusqu’a 50 km d'autonomie par jour</span></li>
                            <li><img src={chek} style={{width:'25px'}} /><span>Protection 100% du conducteur et du passager</span></li>
                            <li><img src={chek} style={{width:'25px'}} /><span>Assurance tout risques</span></li>
                        </ul>
                      </div>
                    </div>
                    <div className="plan-Card">
                        <div className="plan-props">
                          <h2>Plan basic</h2>
                          <h1 className="plan-Prix">119 Dhs</h1>
                          <p>24H</p>
                        </div>
                      <div className="scooter-Prop">
                        <ul>
                            <li><img src={chek} style={{width:'25px'}} /><span>Jusqu’a 50 km d'autonomie par jour</span></li>
                            <li><img src={chek} style={{width:'25px'}} /><span>Protection 100% du conducteur et du passager</span></li>
                            <li><img src={chek} style={{width:'25px'}} /><span>Assurance tout risques</span></li>
                        </ul>
                      </div>
                    </div>
                    <div className="plan-Card">
                        <div className="plan-props">
                          <h2>Plan basic</h2>
                          <h1 className="plan-Prix">119 Dhs</h1>
                          <p>24H</p>
                        </div>
                      <div className="scooter-Prop">
                        <ul>
                            <li><img src={chek} style={{width:'25px'}} /><span>Jusqu’a 50 km d'autonomie par jour</span></li>
                            <li><img src={chek} style={{width:'25px'}} /><span>Protection 100% du conducteur et du passager</span></li>
                            <li><img src={chek} style={{width:'25px'}} /><span>Assurance tout risques</span></li>
                        </ul>
                      </div>
                    </div>
                    
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
                                <input type="radio" name="styles" id="box-shadow" className="custom-radio" />
    
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
            </div>
            <Footer />
        </>
    )
}