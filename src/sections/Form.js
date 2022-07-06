import { useState } from "react";
import { useCheckbox, useForm, useInput } from "lx-react-form";
import { Link, Navigate } from 'react-router-dom';

const Form = () => {

    const [submitted, setSubmitted] = useState(false);

    const name = useInput({
        name: "nome",
        errorText: {
            required: "Este campo é obrigatório"
        }
    });

    const email = useInput({
        name: "email",
        validation: "email",
        errorText: {
            required: "Este campo é obrigatório"
        }
    });

    const phone = useInput({
        name: "telefone",
        validation: "telefone",
        mask: "telefone",
        errorText: {
            required: "Este campo é obrigatório"
        }
    });

    const terms = useCheckbox({
        name: "terms",
        errorText: {
            required: "O aceite aos termos é obrigatório para continuar"
        }
    });

    const form = useForm({
        clearFields: true,
        formFields: [name, email, phone, terms],
        submitCallback: (formData) => {
            sendForm(formData);
        },
    });

    const sendForm = (form) => {
        const newForm = {
            "nome": form.nome,
            "email": form.email,
            "telefone": form.telefone.replace(/[^0-9]+/g, '')
        }
        console.log(newForm);
        fetch('https://projetocamilla.herokuapp.com/form/cadastro', {
            method: 'POST',
            body: JSON.stringify(newForm),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(function (response) {
                if (response.ok) setSubmitted(true);
            })
            .catch(function (err) { console.error(err); });
    }

    function preventDefault(e) {
        e.preventDefault();
        form.handleSubmit(e);
    }

    return (
        <div>
            {submitted ? (
                <Navigate to="/thankyou" replace="true" />
            ) : (

                <div id="form" className="form" name="form">

                    <form onSubmit={preventDefault}>
                        <h2>Encontre seu imóvel</h2>

                        <input className={name.error == '' ? "erro" : ""} placeholder='Seu nome' type="text" {...name.inputProps} />
                        <div >
                            {name.error && <p>{name.error}</p>}</div>

                        <input placeholder='Seu melhor e-mail' type="email" {...email.inputProps} />
                        <div>{email.error && <p>{email.error}</p>}</div>

                        <input placeholder='Telefone (WhatsApp)' type="tel" {...phone.inputProps} />
                        <div>{phone.error && <p>{phone.error}</p>}</div>


                        <label htmlFor={terms.name}>
                            <input type="checkbox" {...terms.inputProps} />
                            <span>Eu aceito os <Link to="/terms">termos e condições</Link>.</span>
                        </label>
                        <div>{terms.error && <p>{terms.error}</p>}</div>

                        <button type="submit" >ENTRE EM CONTATO</button>
                    </form>
                </div>
            )
            }

        </div>
    );

}

export default Form;