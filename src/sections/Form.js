import { useState } from "react";
import { Navigate } from 'react-router-dom';

function Form() {
    const[user,setUser] = useState({nome:'', telefone:'', email:''});
    const [submitted, setSubmitted] = useState(false);
    const [verified, setVerified] = useState({nome:false, telefone:false, email:false});

    const getData = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });        
    }

    const verify = (event) => {
        console.log(user);
        if (!user.nome) {
            document.getElementById("error").innerHTML = "Insira um nome válido!";
            setVerified({ ...verified, name: true }); 
        }

        else if (!user.telefone) {
            document.getElementById("error").innerHTML = "Insira um telefone válido!";
        }

        else if (!user.email) {
            document.getElementById("error").innerHTML = "Insira um email válido!";
        }

        else {
            
            fetch('http://localhost:8080/form/cadastro', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(function (response) {
                    if (response.ok) setSubmitted(true);

            });
        }
    }

    return (
        <div>
            {submitted ? (
                <Navigate to = "/thankyou" replace = "true"/>
            ) : (
                    
            <div  id="form" className="form" name="form">
                <form>
                    <h2>Encontre seu imóvel</h2>
                    <input type="text" name="nome" id="nome" placeholder="Seu nome completo" onChange={getData}/>
                    
                    <input type="text" name="telefone" id="telefone" placeholder="Seu telefone (WhatsApp)" onChange={getData}/>
                    
                    <input type="email" name="email" id="email" placeholder="Seu melhor e-mail" onChange={getData} />
                    
                    <p id="error" className="error"></p>
                    
                    <input type="button" value="PEDIR AJUDA" onClick={verify} />
                </form>
            </div>
            )}
        
        </div>
    );
    
}

export default Form;