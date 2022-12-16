import { useState } from 'react'
import styles from '../styles/pages/inscricao.module.css'
import React from 'react'

export function Inscricao() {
    const [results, setResults] = useState([])

    function handleResult(event) {
        event.preventDefault()
        const nameInput = document.forms["form"]["name"].value
        const emailInput = document.forms["form"]["email"].value
        const telephoneInput = document.forms["form"]["telephone"].value
        const professionInput = document.forms["form"]["profession"]
        const ageInput = document.forms["form"]["birthdate"].value
        const form = document.getElementById("form")

        if (nameInput == "" || emailInput == "" || telephoneInput == "" || professionInput == "" || ageInput == "") {
            setResults('Por favor preencha todos os campos para enviar!')
        } else {
            form.reset()
            setResults('Tudo preenchido! Obrigada!')
        }
    }

    return (
        <div>
            <div className={styles.bodyInscription}>
                <p className={styles.bodyIntro}>
                    <span>Espaço para inscrição dos profissionais de saúde que se identificarem com o projeto.</span>
                </p>
                <form id="form" name="form" onSubmit={handleResult}>
                    <p id="results" className={styles.results}>{results}</p>
                    <div className={styles.inputBox}>
                        <label>Nome:</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div className={styles.inputBox}>
                        <label>E-mail:</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className={styles.inputBox}>
                        <label>Telefone:</label>
                        <input placeholder="(__)_____-____" type="text" id="telephone" name="telephone" />
                    </div>
                    <div className={styles.inputBox}>
                        <label>Profissão:</label>
                        <select list="profession">
                            <option value=""></option>
                            <option value="Psicóloga">Psicóloga</option>
                            <option value="Médica Psiquiatra">Médica Psiquiatra</option>
                            <option value="Enfermeira">Enfermeira</option>
                        </select>
                    </div>
                    <div className={styles.inputBox}>
                        <label>Data de nascimento:</label>
                        <input type="date" id="birthdate" max="2003-12-31"  name="date"/>
                    </div>
                    <div className={styles.inscriptionButton}>
                        <button id={styles.insideButton}>Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}