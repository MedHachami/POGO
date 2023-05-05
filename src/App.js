
import React from "react";
import Apropos from './components/Apropos/Apropos'
import Home from './components/Home/Home'
import Tarif from './components/Tarif/Tarif'
import Comment from './components/Comment/Comment'
import Gallery from './components/Gallery/Gallery'
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route  path='/about' element={< Apropos />}></Route>
        <Route  path='/tarif' element={< Tarif />}></Route>
        <Route  path="/comment" element = {<Comment />}></Route>
        <Route  path="/gallery" element = {<Gallery />}></Route>
                 
      </Routes>       
    </Router>
  );
}

 