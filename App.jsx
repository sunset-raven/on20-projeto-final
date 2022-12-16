import './App.css'
import { ApplicationRoutes } from './ApplicationRoutes'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Title } from './components/Title'

function App() {

  return (
    <div className="App">
      <Header />
      <Title />
      <ApplicationRoutes />
      <Footer />
    </div>
  )
}

export default App
