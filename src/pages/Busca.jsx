import { useState, useEffect } from "react"
import Axios from 'axios'
import styles from '../styles/pages/busca.module.css'


export function Busca() {
    const inputBusca = document.getElementById('inputBusca')

    const [result, setResult] = useState([])
    const [searchedTerm, setSearchedTerm] = useState('')
    const [filteredResults, setFilteredResults] = useState([])

    useEffect(() => {
        async function getData() {
            const response = await Axios.get('https://random-data-api.com/api/v2/users?size=10&is_json=true')
            const final = response.data
            setResult(final)
        }
        getData()
    }, [])

    function handleSearch(event) {
        setSearchedTerm(event.target.value)
    }

    useEffect(() => {
        const filtered = result.filter(professional => {
            return professional.first_name.includes(searchedTerm)
        })
        setFilteredResults(filtered)
    }, [result, searchedTerm])

    return (
        <>
            <div className={styles.searchBegin}>
                <p>Insira o primeiro nome da profissional para iniciar a busca:</p>
                <input type="text" placeholder="Lembre-se que caixa alta ou baixa faz diferença!" className={styles.inputBusca} id="inputBusca" onChange={handleSearch} />
            </div>
            {filteredResults.map(professionals => {
                return (
                    inputBusca.value !== "" &&
                    <div key={professionals.id} id=''>
                        <div className={styles.searchInfo}>
                            <div>
                                <div className={styles.firstAndLastName}>
                                    <p>{professionals.first_name} </p>
                                    <p> {professionals.last_name}</p>
                                </div>
                                <p className={styles.email}>{professionals.email}</p>
                                <p className={styles.gender}>{professionals.gender}</p>
                            </div>
                            <img className={styles.Image} src={professionals.avatar} width="70" height="70" />
                        </div>
                    </div>
                )
            })}
        </>
    )
}