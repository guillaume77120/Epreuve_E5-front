import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './index.css';


const Contact = () => {
    const params = useParams();

    useEffect(() => {
        console.log(params);
    }, [params])
    
    return (
        <div className="Connexion">
            <div class="m2l"></div>
            <div class="container">
                <h1>Connexion</h1>
                <ul>
                    <li>
                    <label>Email:</label><br></br>
                    <input type="email" id="mail" name="user_mail"></input>
                    </li>
                    <li>
                    <label>Mot de passe:</label><br></br>
                    <input type="password" id="password" name="user_password"></input>
                    </li>
                </ul>
            <button type="button" class="button">Connexion</button>
            </div>
        </div>
    )
}

export default Contact;