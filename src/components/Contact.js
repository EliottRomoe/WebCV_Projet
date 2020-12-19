import React from 'react'

function Contact(){
    return(
        <form className="contact_form animate__animated animate__fadeIn">
            <input placeholder="Votre nom complet" required className="contact_input" id="name" type="text"></input>
            <input placeholder="Votre email" required className="contact_input" id="mail" type="mail"></input>
            <textarea placeholder="Votre message : 50 charactères minimum" required minLength="50" className="contact_text"></textarea>
            <button className="contact_submite">Envoyé</button>
        </form>
    )
}

export default Contact