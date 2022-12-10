import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { store } from './redux/store'
import { Provider } from 'react-redux'

import Header from './components/Header/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';

import './scss/style.scss'

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <div className="container">
          <Header />
          <div className="content">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;