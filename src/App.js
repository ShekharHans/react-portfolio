import { Route, Router, Routes } from 'react-router-dom'
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
    <Router basename='/ReactPortfolio'>
      <Routes>
        <Route exact path="/"  element={<Layout />}>
          <Route index element={<Home />} />
          <Route exact path="about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/Project" element={<Projects/>} />
          <Route exact path="/skills" element={<Skills />} />
        </Route>
      </Routes>
      </Router>
    </>
  )
}

export default App
