
import React from "react";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Apropos from './components/Apropos/Apropos'
import Home from './components/Home/Home'
import Tarif from './components/Tarif/Tarif'
import Comment from './components/Comment/Comment'
import Gallery from './components/Gallery/Gallery'
import Contact from './components/Contact/Conatct'
import Reserver from './components/Reserver/Reserver'
import Registration from "./components/Registration/Registration";
import Faquestion from "./components/Faquestion/Faquestion";
import Termes from "./components/Termes/Termes";
import Politique from "./components/Politique/Politique";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route  path='/about' element={< Apropos />}></Route>
        <Route  path='/tarif' element={< Tarif />}></Route>
        <Route  path="/comment" element = {<Comment />}></Route>
        <Route  path="/gallery" element = {<Gallery />}></Route>
        <Route  path="/contact" element = {<Contact />}></Route>
        <Route  path="/reserver" element = {<Reserver />}></Route> 
        <Route  path="/registration" element = {<Registration />}></Route>
        <Route  path="/faquestion" element = {<Faquestion />}></Route> 
        <Route  path="/termesetconditions" element = {<Termes />}></Route>
        <Route  path="/politique-de-confidentialite" element = {<Politique />}></Route>       
      </Routes>       
    </Router>
  );
}

 
