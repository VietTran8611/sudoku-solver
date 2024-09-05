import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Board } from './components/Board'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className='h1'>Sudoku Solver</h1>
      <Board />
    </div>
  )
}

export default App
