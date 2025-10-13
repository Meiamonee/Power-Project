import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../src/style/index.css'
import App from './App.jsx'
import Produto from './pages/Produtos.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/produtos" element={<Produto/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
