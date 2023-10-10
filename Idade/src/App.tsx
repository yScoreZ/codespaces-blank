import React, { useState } from 'react';

function App() {
  const [anoNascimento, setAnoNascimento] = useState<string>('');
  const [idade, setIdade] = useState<number | null>(null);

  const calcularIdade = () => {
    const anoNasc = parseInt(anoNascimento);

    if (isNaN(anoNasc)) {
      alert('Por favor, insira um ano de nascimento válido.');
      return;
    }

    const anoAtual = new Date().getFullYear();
    const idadeCalculada = anoAtual - anoNasc;
    setIdade(idadeCalculada);
  };

  return (
    <div className="App">
      <div>
        <label>Digite o ano em que você nasceu:</label>
        <input
          type="text"
          value={anoNascimento}
          onChange={(e) => setAnoNascimento(e.target.value)}
        />
      </div>
      <button onClick={calcularIdade}>Calcular Idade</button>
      {idade !== null && (
        <p>Sua idade é de {idade} anos.</p>
      )}
    </div>
  );
}

export default App;