import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Contact = () => {
    const params = useParams();

    useEffect(() => {
        console.log(params);
    }, [params])
    
    return (
        <div className="Contact">
            <div class="m2l"></div>
            <div class="container">
                <h1>Contact</h1>
                <ul>
                    <li>
                    <label>Objet :</label><br></br>
                    <input type="email" id="mail" name="user_mail"></input>
                    </li>
                    <li>
                    <label>Contenu :</label><br></br>
                    <input type="password" id="password" name="user_password"></input>
                    </li>
                </ul>
            <button type="button" class="button">Envoyer</button>
            </div>
        </div>
    )
}

export default Contact;