import { Piece } from './assets/classes/Piece';
import { useState} from 'react';

import { Board } from './Board';
import './App.css';

function App() {
  console.log("Estou aqui");

  //const [count, setCount] = useState(0)
  /*const board = new Board();
  const piece = new Piece(10, 10);

  const p = document.getElementById('piece');



  document.addEventListener('click', function handleClick(event){
    p.style.left = event.clientX + 'px';
    p.style.top = event.clientY + 'px';
  })
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )*/

  return (
    <>
      <body>
        <Board />
      </body>
    </>
    
  )
}

export default App
