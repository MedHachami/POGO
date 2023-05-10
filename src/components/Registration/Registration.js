import React ,{ useState } from "react";
import './Style.css'
import Navbar from '../NavBar/Navbar'
import Footer from '../Footer/Footer'
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Registration(){
  const history = useNavigate();
    const [city,setCity] = useState('fes')
    const [firstName, setfirstName] = useState('');
    const [secondName, setsecondName] = useState('');
    const [email, setEmail] = useState('');
    const [UserName,setUserName] =useState('')
    const [password,setPassword] = useState('')
    const[tele,setTele] = useState('')
   
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

      
      const handleFirstNameChange = (event) => {
        setfirstName(event.target.value);
      };
      const handlesecondNameChange = (event) => {
        setsecondName(event.target.value);
      };
    
      const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
      const handleUserName = (event) => {
        setUserName(event.target.value);
      };
      const handlepassword= (event) => {
        setPassword(event.target.value);
      };
      const handleTele = (event) => {
        setTele(event.target.value);
      };
      const handleCity = (event) => {
        setCity(event.target.value);
      };
      const sendRequest = async ()=>{
        await axios.post("",{
           nom:secondName,
           prenom:firstName,
           email:email,
           password:password,
           username:UserName,
           customerId:'null',
           city:city,
           language:'x',
           phoneNumber:tele


    
        }).then((res)=>res.data)
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
          nom:secondName,
          prenom:firstName,
          email:email,
          password:password,
          username:UserName,
          customerId:'null',
          city:city,
          language:'x',
          phoneNumber:tele
        });
        sendRequest().then(()=>history('/reserver'))
    
      }; 

    return(
        <>
            <Navbar />
            <div className="title-Container" style={{marginTop:'100px'}}>
                <h1>Register Now</h1>
            </div>
            <div className="register-form" onSubmit={handleSubmit} >
                    
                    <form id="contact" >
                        
                        
                        <div className="inputField">
                        <span className="Input_Titile">Nom</span>
                        <input
                            type="text"
                            placeholder="Votre Nom "
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
                            placeholder="Votre Prenom "
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
                            autoComplete="on"
                            placeholder="Votre Email "
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                        <span className="valid_info_name"></span>
                        </div>
                        <div className="inputField">
                        <span className="Input_Titile">User Name</span>
                        <input
                            type="text"
                            placeholder="UserName"
                            autoComplete="on"
                            value={UserName}
                            onChange={handleUserName}
                            required
                        />
                        <span className="valid_info_name"></span>
                        </div>
                        <div className="inputField">
                        <span className="Input_Titile">Password</span>
                        <input
                            type="password"
                            placeholder="Votre Mot de Passe"
                            autoComplete="on"
                            value={password}
                            onChange={handlepassword}
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
                        <span className="Input_Titile">City</span>
                        <select onChange={handleCity}>
                        {
                            options.map((option) => (
                             <option value={option.value}>{option.label}</option>
                        ))
                        }
                        </select>
                        <span className="valid_info_name"></span>
                        </div>
                        <div className="inputField btn">
                        <button
                            type="submit"
                            id="form-submit"
                            className="main-gradient-button"
                            disabled={!secondName || !firstName || !email || !UserName || !password  || !tele }
                        >
                            Envoyer le message
                        </button>
                        </div>
                    </form>
                </div>
            <Footer />
        </>
    )
}