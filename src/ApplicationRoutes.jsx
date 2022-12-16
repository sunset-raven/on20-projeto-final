import { BrowserRouter, Routes, Route, } from 'react-router-dom'

import { Home } from './pages/Home'
import { Sobre } from './pages/Sobre'
import { Inscricao } from './pages/Inscricao'
import { Busca } from './pages/Busca'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Title } from './components/Title'

export function ApplicationRoutes() {
    return(
        <BrowserRouter>
            <Header />
            <Title />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/inscricao" element={<Inscricao />}/>
                <Route path="/busca" element={<Busca />}/>
                <Route path="/sobre" element={<Sobre />}/>
            </Routes>
        <Footer />
        </BrowserRouter>
    )
}