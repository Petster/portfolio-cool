import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import About from './pages/About';
import Connect from './pages/Connect';
import Index from './pages/Index';
import Portfolio from './pages/Portfolio';

const App = () => {
  return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path='/' element={<Index/>}/>
            <Route exact path='/about' element={<About/>}/>
            <Route exact path='/portfolio' element={<Portfolio/>}/>
            <Route exact path='/connect' element={<Connect/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
  )
}

export default App