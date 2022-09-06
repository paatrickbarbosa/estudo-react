import React from "react";
import { BrowserRouter, Routes,Route,} from "react-router-dom";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Galeria from "./pages/Galeria";
import Erro from "./components/Erro";
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function Rotas() {
    return (
        <BrowserRouter>
            <Navbar/>
              <Routes>
                      <Route path="/" element={<Home />}/>
                      <Route path="/contato" element={<Contato />} />
                      <Route path="/galeria" element={<Galeria />} />


                      <Route path="*" element={<Erro />} />
              </Routes>
            <Footer/>
      </BrowserRouter>
    );
  }