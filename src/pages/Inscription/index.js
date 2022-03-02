import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './index.css';

const Contact = () => {
    const params = useParams();

    useEffect(() => {
        console.log(params);
    }, [params])
    
    return (
        <div className="Contact">
           <form action="/ma-page-de-traitement" method="post">
                <div>
                    <ul>
                    <li><label for="name">Nom :</label> <br></br>
                    <input type="text" id="name" name="user_name"></input></li>
                    <li><label for="mail">Prenom :</label><br></br>
                    <input type="email" id="mail" name="user_mail"></input></li>
                    </ul>
                </div>
                <div>
                    <label for="name">Email :</label><br></br>
                    <input type="text" id="name" name="user_name"></input>
                </div>
                <div>
                    <label for="mail">Mot de passe :</label><br></br>
                    <input type="email" id="mail" name="user_mail"></input>
                </div>
                <div>
                    <label for="name">Confirmation mot de passe :</label><br></br>
                    <input type="text" id="name" name="user_name"></input>
                </div>
                <div>
                    <label for="mail">Adresse:</label><br></br>
                    <input type="email" id="mail" name="user_mail"></input>
                </div>
                <div>
                    <label for="name">Code postal :</label><br></br>
                    <input type="text" id="name" name="user_name"></input>
                </div>
                <div>
                    <label for="mail">Ville:</label><br></br>
                    <input type="email" id="mail" name="user_mail"></input>
                </div>
                <div>
                    <label for="msg">Téléphone :</label><br></br>
                    <textarea id="msg" name="user_message"></textarea>
                </div>
                <div>
                    <label for="msg">Club :</label><br></br>
                    <textarea id="msg" name="user_message"></textarea>
                </div>
            </form>
        </div>
    )
}

export default Contact;