import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import ColorList from './components/ColorList';


const persona = {
    nome : "francesco",
    eta : "23",
    colori : [
      "verde",
      "marrone",
      "nero"
    ]
}

function App() {
  const [data, setData] = useState(null);
  const requestOptions = {
    method: 'POST', // Metodo della richiesta
    headers: { 'Content-Type': 'application/json' }, // Intestazione della richiesta
    body: JSON.stringify({ email: 'buonomo_f@yahoo.it', password: 'ciaomamma' }) // Dati da inviare nel corpo
  };
    useEffect(() => {
      fetch('https://webservice.paxypay.com/auth/login')
        .then(response => response.json())
        .then(data => {
          setData(data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);
  // Stato per le variabili
  const [numero, setNumero] = useState(12);
  const incrementaNumero = () => {
    console.log(data);
    // Incrementa il valore di numero di 1
    setNumero(numero + 1);
  };
  const [numero1, setNumero1] = useState(10);
  return (
    <div className="App">
       <h1>API Data:</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='orange'>
          Edit <code>src/App.js</code> and save to reload. {numero + numero1}
        </p>
        <button onClick={incrementaNumero}>click</button>
        <p>
        Mi chiamo {persona.nome} e ho {persona.eta} anni 
        </p>
        <ColorList colors={persona.colori}/>
        {/* <ul>
          {persona.colori.map((colore, index) => (
            <li key={index}>{colore}</li>
          ))}
        </ul> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
