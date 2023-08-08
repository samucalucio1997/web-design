import React, { useState } from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:8080"
})

const App = () => {
  const [nome, setNome] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const response = await axios.post(
        '/cadastro/produto',
        { nome: nome}
      );

      console.log(response.data);
      alert('Produto cadastrado com sucesso!');
    } catch (error) {
      console.error(error);
      alert('Ocorreu um erro ao cadastrar o produto.');
    }
  };

  return (
    <div>
      <h2>Cadastrar Produto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome do Produto:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={e => setNome(e.target.value)}
          />
        </div>
        <button type="submit">Cadastrar</button>
        <a href=""></a>
      </form>
    </div>
  );
};

export default App;
