import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Error from './pages/Error'
import { BrowserRouter, Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import Login from './pages/Login'

function App() {

  return (
    <>



     
     <BrowserRouter>

      <Navbar />
     <Routes>
      <Route path='/' element = {<Home />}  />
      <Route path='/about' element = {<About />}  />
      <Route path='/contact' element = {<Contact />}  />
      <Route path='/login' element = {<Login />}  />
      <Route path='/*' element = {<Error />}  />
     </Routes>
     
     
     </BrowserRouter>

    </>
  )
}

export default App
