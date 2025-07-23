// src/App.jsx
import './App.css'; // Supondo que App.css seja para estilos globais do App
import Corpo from './componente/Corpo';
import Head from './componente/Head'; // Adicione a extensão .jsx, ou apenas './componente/Head' se sua ferramenta de build lidar com isso
import Mid from './componente/Mid'


function App() {
  return (
    <div>
      <Head />
      <Corpo/>
      <Mid/>
    </div>
  );
}

export default App;