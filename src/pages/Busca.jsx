import { useState, useEffect } from "react"
import Axios from 'axios'


export function Busca() {

    const [result, setResult] = useState([])
    const [searchedTerm, setSearchedTerm] = useState('')
    const [filteredRepos, setfilteredRepos] = useState([])
    const baseURL = '/api/users/random_user/v2/users'

    useEffect(() => {
        async function getData() {
            const response = await Axios.get('https://random-data-api.com/api/v2/users/{')
            setResult(response.data)
        }
        getData()
    }, [])

    return (
        <>
        <input type="text" />
        <p>{result}</p>
        </>
    )
}