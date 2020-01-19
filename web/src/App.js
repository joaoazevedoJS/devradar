import React, { useState, useEffect } from 'react';
import api from './services/api'

// Componente: Bloco isolado de HTML, CSS, JS, o qual não interfere no restante da aplicação
// Propriedade: Informações que um componente PAI passa para o componente FILHO;
// Estado: Informação mantidas pelos componente (Lembrar: Imutabilidade)

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

import DevForm from './components/DevForm'
import DevItem from './components/DevItem'; // ele pega o index diretamente

function App() {
  const [devs, setDevs] = useState([])

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data)
    }

    loadDevs()
  }, [])

  async function handleAddDev(data) {
    const response = await api.post('/devs', data)

    setDevs([...devs, response.data])
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main> {/* Para cada dev vai retornar suas informações, devs até 10km até sua localização*/}
        <ul>
          {devs.map(dev => (
            <DevItem Key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
