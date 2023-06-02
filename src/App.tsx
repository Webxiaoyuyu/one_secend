/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { Button } from 'antd'
import { ReactComponent as Logo } from '@/logo.svg'
import './App.css'

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header ">
        <Logo width="300px" className="App-logo bg-[red]" />
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
