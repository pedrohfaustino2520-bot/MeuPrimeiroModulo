import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [escuro,setEscuro] = useState(false);
  const [vezesApertadas,setVezes] = useState(0);

  const mudaEscuro = (escuro:boolean) => {
    return !escuro;
  }

  return (
    <>
    <div className={escuro? 'escuro':'claro'}>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={()=>setEscuro(mudaEscuro)}>
            Mudar modo display
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Vc clicou {count>5? 'muitas' : 'poucas'} vezes <br/>
        {count>10 && 'pare de clicar por favor'} <br/>
        Modo {escuro? 'escuro': 'claro'} tá ligado <br/>
        Click on the Vite and React logos to learn more
      </p>
    </div>
      
    </>
  )
}

export default App
