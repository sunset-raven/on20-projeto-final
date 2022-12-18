import styles from '../styles/pages/home.module.css'
import huggingPeople from '../assets/pessoas-se-abracando.png'
import React from 'react'

export function Home() {

    return (
        <div className= { styles.homeBase }>
            <img src={ huggingPeople }/>
            <h1 className= { styles.homeInitialText }>Bem-vinde ao Projeto Conexão, onde buscamos criar uma ponte entre uma pessoa trans em situação de vulnerabilidade e uma pessoa que trabalhe na área de saúde mental. O intuito do Projeto é alcançar profissionais que tenham a possibilidade e disponibilidade de atender a um valor social pessoas trans que, em sua maioria, não tem os meios financeiros para arcar com os custos desses atendimentos.</h1>
        </div>
    )
}