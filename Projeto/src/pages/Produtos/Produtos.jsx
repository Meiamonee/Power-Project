import { useEffect, useState } from "react";
import "./Produtos.css";

function Produtos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("/src/data/produtos.json")
      .then((res) => res.json())
      .then((data) => setProdutos(data))
      .catch((err) => console.error("Erro ao carregar produtos:", err));
  }, []);

  return (
    <div className="produtos-container">
      <h1 className="titulo">Produtos Gamer</h1>
      <div className="produtos-grid">
        {produtos.map((item) => (
          <div key={item.id} className="produto-card">
            <img src={item.imagem} alt={item.nome} className="produto-img" />
            <h2>{item.nome}</h2>
            <p>R$ {item.preco.toFixed(2)}</p>
            <button>Comprar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Produtos;
