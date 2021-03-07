import React  from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './pages/Login'
import { addIcons } from './config/IconLibrary'

function App() {
  addIcons()
  return (
    <>
      <Switch>
        <Route path="/">
          <Login/>
        </Route>
      </Switch>
    </>
  )
}

export default App
