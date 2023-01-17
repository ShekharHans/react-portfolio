import { Route,  Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Skills from './components/Skills'

import './App.scss'

import Projects from "./components/Project/Projects";


function App() {
  return (
    <>
    
      <Routes>
        <Route  path="/"  element={<Layout />}>
          <Route index element={<Home />} />
          <Route  path="about" element={<About />} />
          <Route  path="/contact" element={<Contact />} />
          <Route  path="/Project" element={<Projects/>} />
          <Route  path="/skills" element={<Skills />} />
        </Route>
      </Routes>
      
    </>
  )
}

export default App
