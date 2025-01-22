import { Header } from './components/header'
import { Clientes } from './screens/clientes'
import { Home } from './screens/home'
import { Serviços } from './screens/serviços'
import { Sobre } from './screens/sobre'

function App() {

  return (
    <>
     <Header/>
     <Home/>
     <Sobre/>
     <Serviços/>
     <Clientes/>
    </>
  )
}

export default App
