import { useState, useEffect } from "react";

function Produtos() {
  // Aqui vamos guardar os produtos que vierem da "API"
  const [produtos, setProdutos] = useState([]);

  // O useEffect serve pra fazer algo assim que a página abrir
  useEffect(() => {
    // O fetch é o comando que "puxa" os dados da API (ou JSON local)
    fetch("/src/data/produtos.json")
      .then(resposta => resposta.json())  // converte a resposta pra JSON
      .then(dados => setProdutos(dados))  // salva os produtos no estado
      .catch(erro => console.error("Erro ao carregar produtos:", erro)); // se der erro, mostra no console
  }, []); // [] faz isso rodar só uma vez, quando o componente abrir

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ul>
        {produtos.map(produto => (
          <li key={produto.id}>
            <img src={produto.imagem} alt={produto.nome} width="100" />
            <p>{produto.nome} — R$ {produto.preco}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Produtos;
