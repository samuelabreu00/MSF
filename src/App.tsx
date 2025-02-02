import { Footer } from './components/footer'
import { Header } from './components/header'
import { Contato } from './screens/contato'
import { Fornecedores } from './screens/fornecedores'
import { Home } from './screens/home'
import { Serviços } from './screens/serviços'
import { Sobre } from './screens/sobre'

function App() {

  return (
    <>
     <Header/>
     <Home/>
     <Sobre/>
     <Fornecedores/>
     <Serviços/>
     <Contato/>
     <Footer/>
    </>
  )
}

export default App
