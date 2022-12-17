import { BrowserRouter, Routes, Route, } from 'react-router-dom'

import { Home } from './pages/Home'
import { Sobre } from './pages/Sobre'
import { Inscricao } from './pages/Inscricao'
import { Busca } from './pages/Busca'


export function ApplicationRoutes() {
    return(
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/inscricao" element={<Inscricao />}/>
                <Route path="/busca" element={<Busca />}/>
                <Route path="/sobre" element={<Sobre />}/>
            </Routes>
    )
}