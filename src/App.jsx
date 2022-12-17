import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { ApplicationRoutes } from './ApplicationRoutes'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Title } from './components/Title'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Title />
        <ApplicationRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
