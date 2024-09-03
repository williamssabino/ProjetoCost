import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./components/pages/Home"
import Empresa from "./components/pages/Empresa"
import Contatos from "./components/pages/Contatos"
import NewProject from "./components/pages/NewProject"
import Container from './components/layout/Container'
import Footer from './components/layout/Footer'
import NavBar from './components/layout/NavBar'
import Projects from './components/pages/Projects'
import Edit from './components/pages/Edit'

function App() {
  return ( 
    //CRIAÇÃO DE TODAS AS ROTAS PARA PAGINAS EXIBIDAS
      
      <Router>
        <NavBar/>
        <Container customClass="min_height" >
            <Routes>
                <Route exact path='/' element={<Home/>}></Route>
                <Route  path='/contatos' element={<Contatos/>}></Route>
                <Route  path='/empresa' element={<Empresa/>}></Route>
                <Route  path='/newproject' element={<NewProject/>}></Route>
                <Route  path='/projects' element={<Projects/>}></Route>
                <Route  path='/edit/:id' element={<Edit/>}></Route>
            </Routes> 
        </Container>
        <Footer/>
      </Router>  
    
  )  
}

export default App;
