import '../src/style/App.css'; 
import Home from './pages/Home/Home'; 
import Produtos from './pages/Produtos/Produtos'; 


import { BrowserRouter, Routes, Route } from "react-router-dom"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;