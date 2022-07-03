import { useState } from "react";
import { Link, Navigate } from 'react-router-dom';
import validator from 'validator';

function Form() {
    const[user,setUser] = useState({nome:'', telefone:'', email:''});
    const [submitted, setSubmitted] = useState(false);
    const [emailVerified, setEmailVerified] = useState();
    const [termsVerified, setTermsVerified] = useState();
    const [nameVerified, setNameVerified] = useState();
    const [phoneVerified, setPhoneVerified] = useState();

    const getData = (event) => {
        const { name, value, checked } = event.target;
        if (name == 'terms') {           
            if (checked) setTermsVerified(true);
            else setTermsVerified(false);
        }
        else
            setUser({ ...user, [name]: value });
        
    }

    const verify = (event) => {
        if (validator.isEmail(user.email)) setEmailVerified(true);
        else setEmailVerified(false);
        if (validator.isMobilePhone(user.telefone, 'pt-BR')) setPhoneVerified(true);
        else setPhoneVerified(false);
        if (!validator.isEmpty(user.nome)) setNameVerified(true);
        else setNameVerified(false);

        if (emailVerified && nameVerified && phoneVerified && termsVerified)
            fetch('https://projetocamilla.herokuapp.com/form/cadastro', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(function (response) {
                    if (response.ok) setSubmitted(true);
                });
        else alert('Error');
    
    }

    return (
        <div>
            {submitted ? (
                <Navigate to = "/thankyou" replace = "true"/>
            ) : (
                    
            <div  id="form" className="form" name="form">
                <form>
                    <h2>Encontre seu imóvel</h2>
                            <input type="text" name="nome" id="nome" placeholder="Seu nome completo" onChange={getData} />
                    
                    <input type="tel" name="telefone" id="telefone" placeholder="Seu telefone (WhatsApp)" minLength="8" onChange={getData}/>
                    
                    <input type="email" name="email" id="email" placeholder="Seu melhor e-mail" onChange={getData} />
                    
                    <label>
                        <input type="checkbox" name="terms" id="terms" value="Terms" onChange={getData}/>
                        Li e aceito os <Link to= "/terms"> termos e condições</Link>.
                    </label>
                    
                    <input type="button" value="ENTRE EM CONTATO" onClick={verify} />
                        
                </form>
            </div>
            )}
        
        </div>
    );
    
}

export default Form;