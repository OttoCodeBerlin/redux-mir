import React from 'react'
// import logo from './logo.svg'
import './App.css'
import { Provider } from 'react-redux'
import store from './store'

//
//"Every reducer is a function that returns an object"
//

function App() {
  const store = {}
  return (
    <Provider store={store}>
      <div className="App">
        <h1>redux</h1>
      </div>
    </Provider>
  )
}

export default App
