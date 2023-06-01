import React from 'react'
import { ReactComponent as Logo } from './logo.svg'
import { Button } from 'antd'
import './App.css'

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header ">
        <Logo width={'300px'} className="App-logo bg-[red]" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button type="primary">222</Button>
      </header>
    </div>
  )
}

export default App
