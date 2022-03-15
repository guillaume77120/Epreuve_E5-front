import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './index.css';

const Produits = () => {
    const params = useParams();

    useEffect(() => {
        console.log(params);
    }, [params])
    
    return (
        <div className="Produits">
            <div class="verticalScroll">
                <h1>Nom produit</h1>
                <div class="scroll">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

            </div>
            <hr></hr>
            <div class="verticalScroll">
                <h1>Nom produit</h1>
                <div class="scroll">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
           <hr></hr>
            </div>
        </div>
    )
}

export default Produits;