import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Balu Tikkisetti</h1>
      <div className="card">
       
        <p>
          Java Full Stack Developer
        </p>
      </div>
      <p className="read-the-docs">
       
      </p>
    </>
  )
}

export default App
