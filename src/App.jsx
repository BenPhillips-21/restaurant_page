import './App.css'
import Home from './Home.jsx'
import Menu from './Menu.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import NavBar from './NavBar'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<h3>Error 404 - Page not found</h3>}/>
        </Routes>
        
    </>
  )
}

export default App