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
           <div class="contpanier">
               <h1>Mon panier</h1>
               <div><div class="contimg"></div><p>0€</p></div><br></br>
               <div><div class="contimg"></div></div>
           </div>
           <div class="prixpanier">
           </div>
        </div>
    )
}

export default Panier;