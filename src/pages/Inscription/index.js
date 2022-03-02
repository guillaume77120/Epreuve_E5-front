import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './index.css';

const Inscription = () => {
    const params = useParams();

    useEffect(() => {
        console.log(params);
    }, [params])
    
    return (
        <div className="Contact">
                           <div class="infos">
                    <ul>
                        <li>
                            <label>Nom :</label>
                            
                            <input></input>
                        </li>
                        <li>
                            <label>Prenom :</label>
                            
                            <input></input>
                        </li>
                    </ul>
                </div>
         </div>
    )
}

export default Inscription;