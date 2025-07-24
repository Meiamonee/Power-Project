// src/App.jsx
import '../src/style/App.css'; // Supondo que App.css seja para estilos globais do App
import Corpo from './componente/Corpo/Corpo';
import Head from './componente/Head/Head'; // Adicione a extensão .jsx, ou apenas './componente/Head' se sua ferramenta de build lidar com isso
import Mid from './componente/Mid/Mid'


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