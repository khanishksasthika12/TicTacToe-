import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tictactoe from './Tictactoe/Tictactoe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Tictactoe />


    </div>

  )
}

export default App
