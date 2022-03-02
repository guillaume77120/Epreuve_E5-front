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

            <div class="scroll">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
             </div>
         
            <div class="scroll">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
             </div>
            
             <div class="scroll">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
             </div>
          
             <div class="scroll">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
             </div>
             <div class="scroll">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
             </div>
             <div class="scroll">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
             </div>

            </div>
        </div>
    )
}

export default Produits;