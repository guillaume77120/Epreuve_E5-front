import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './index.css';

const Panier = () => {
    const params = useParams();

    useEffect(() => {
        console.log(params);
    }, [params])
    
    return (
          <div className="Panier">
           <div class="verticalScrollpanier">
                <div class="scrollpanier">
                    <h1>Mon panier</h1>
                <div><div class="imgpanier"></div><h2>99€99</h2><h3>Nom produit</h3><p>Bonjour je suis une description très developpé.</p></div>
                <div><div class="imgpanier"></div><h2>99€99</h2><h3>Nom produit</h3><p>Bonjour je suis une description très developpé.</p></div>
                <div><div class="imgpanier"></div><h2>99€99</h2><h3>Nom produit</h3><p>Bonjour je suis une description très developpé.</p></div>
                <div><div class="imgpanier"></div><h2>99€99</h2><h3>Nom produit</h3><p>Bonjour je suis une description très developpé.</p></div>
                <div><div class="imgpanier"></div><h2>99€99</h2><h3>Nom produit</h3><p>Bonjour je suis une description très developpé.</p></div>
                <div><div class="imgpanier"></div><h2>99€99</h2><h3>Nom produit</h3><p>Bonjour je suis une description très developpé.</p></div>

             </div>
           </div>
           <div class="total">
            <div class="scrolltotal">
            <div><p id="article">Nom produit</p> <p id="prix"> 999,99€</p></div>
            <div><p id="article">Nom produit</p> <p id="prix"> 999,99€</p></div>
            <div><p id="article">Nom produit</p> <p id="prix"> 999,99€</p></div>
            <div><p id="article">Nom produit</p> <p id="prix"> 999,99€</p></div>
                </div>
                <hr></hr>
                <p>total : 99,99€</p>
                <button>Paiement</button>
           </div>
           <div class="blank"></div>
        </div>
    )
}

export default Panier;