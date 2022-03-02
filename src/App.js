import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Compte from './pages/Compte';
import NotFound from './pages/NotFound';
import Panier from './pages/Panier';
import Produits from './pages/Produits';
import Contact from './pages/Contact';
import Inscription from './pages/Inscription';
import Connexion from './pages/Connexion';
import Propos from './pages/Propos';
import './App.css';

const App = () => {


  return (
    <div className="App">
      <BrowserRouter>
        <nav class="navBar">
          <div class="compte">
            <a href="/Inscription">Inscription</a>
            <a href="/Connexion">Connexion</a>
          </div>
          <a><div class="logo"> </div></a>
          <a href="/" class="Accueil">Accueil</a>
          <ul class="ulNavBar">
            <li class="ulli">
              <div id="menuToggle">
                <input type="checkbox" />
                <a class="ullia">Nos services</a>
                <span id="span1"></span>
                <span id="span2"></span>
                <ul id="menu">
                    <div class="stylemenu"></div>
                    <a href="/Produits">
                      <li>Nos accessoires</li>
                    </a>
                    <a href="#Contact">
                      <li>Réserver une séance </li>
                    </a>
                    <a href="/Compte">
                      <li>Mon profile</li>
                    </a>
                  </ul>
                </div>
              </li>
              <li class="ullia"><a href="/Panier">Panier</a></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Compte" element={<Compte/>} />
          <Route path="/Compte/:id" element={<Compte/>} />
          <Route path="/Panier" element={<Panier/>} />
          <Route path="/Panier/:id" element={<Panier/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Contact/:id" element={<Contact/>} />
          <Route path="/Produits" element={<Produits/>} />
          <Route path="/Produits/:id" element={<Produits/>} />
          <Route path="/Inscription" element={<Inscription/>} />
          <Route path="/Inscription/:id" element={<Inscription/>} />
          <Route path="/Connexion" element={<Connexion/>} />
          <Route path="/Connexion/:id" element={<Connexion/>} />
           <Route path="/Propos" element={<Propos/>} />
          <Route path="/Propos/:id" element={<Propos/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </BrowserRouter>
      <footer>
          <ul>
            <a  href="/Propos"><li >A propos</li></a>
            <a  href="/Contact"><li>Contact</li></a>
          </ul>
      </footer>
    </div>

  );
}

export default App;
