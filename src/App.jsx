import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Estado from './components/Estado'

function App() {
  const [estados, setEstados] = useState([]);

  useEffect(() => {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then((resposta) => resposta.json())
    .then((dados) => setEstados(dados));
  }, []);

  return (
    <div className='app'>
      <header>
        <h1>Lista de estados</h1>
        <p>De acordo com dados do <span>IBGE</span></p>
      </header>

      <div className='grade-estados'>
        {estados.map((estado) => (
          <Estado key={estado.id} estado={estado} />
          ))};
      </div>

    </div>
  )
}

export default App
