import React from 'react'
import {BrowserRouter, HashRouter, Route, Routes} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fas, fab, far);

import Layout from './components/Layout';
import About from './pages/About';
import Connect from './pages/Connect';
import Index from './pages/Index';
import Portfolio from './pages/Portfolio';
import {LineNumberProvider} from "./context/LineNumberContext";
import {WindowMenuProvider} from "./context/WindowMenuContext";

const App = () => {
  return (
      <LineNumberProvider>
          <WindowMenuProvider>
          <HashRouter>
            <Layout>
              <Routes>
                    <Route exact path='/' element={<Index/>}/>
                    <Route exact path='/about' element={<About/>}/>
                    <Route exact path='/portfolio' element={<Portfolio/>}/>
                    <Route exact path='/connect' element={<Connect/>}/>
              </Routes>
            </Layout>
          </HashRouter>
          </WindowMenuProvider>
      </LineNumberProvider>
  )
}

export default App