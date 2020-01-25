import React from 'react'
// import logo from './logo.svg'
import './App.css'
import { Provider } from 'react-redux'
import store from './store'
import Starwars from './components/starwars/starwars'
// import Weather from "./components/weather/weather"

//
//"Every reducer is a function that returns an object"
//

function App() {
  const store = {}
  return (
    <Provider store={store}>
      <div className="App">
        <h1>redux</h1>
        <Starwars />
        {/* <Weather /> */}
      </div>
    </Provider>
  )
}

export default App
