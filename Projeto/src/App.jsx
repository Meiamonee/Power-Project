// src/App.jsx
import '../src/style/App.css'; // Supondo que App.css seja para estilos globais do App
import Corpo from './componente/Corpo/Corpo';
import Mid from './componente/Mid/Mid'
import Down from './componente/Down/Down'
import Footer from './componente/Footer/Footer'

function App() {
  return (
    <div>
      <Corpo/>
      <Mid/>
      <Down/>
      <Footer/>
    </div>
  );
}

export default App;