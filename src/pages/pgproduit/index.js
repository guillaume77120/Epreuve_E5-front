import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './index.css';

const Reservation = () => {
    const params = useParams();

    useEffect(() => {
        console.log(params);
    }, [params])
    
    return (
        <div className="Reservation">
            <h1 class="plan">Planning</h1>
            <div class="contreservation">
                <div class="imgplan"></div>
                <ul>
                    <li>
                        <label>Horraire</label><br></br>
                        <input></input>
                    </li>
                    <li>
                        <label>Durée</label><br></br>
                        <input></input>
                    </li>
                </ul>
                <div class="price">
                <label >Prix</label><br></br>
                <input></input><br></br>
                <button type="button" class="button">Reserver</button>
                </div>
            </div>
        </div>
    )
}

export default Reservation;