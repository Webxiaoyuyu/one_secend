import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import RouterConfig from '@/router'

function App() {
  // 非必须不要显示指定类型 除非你比它更加明确这个类型
  return (
    <div className="App">
      <BrowserRouter>
        <RouterConfig />
      </BrowserRouter>
    </div>
  )
}

export default App
