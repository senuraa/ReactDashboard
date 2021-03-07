import React  from 'react'
import { Switch, Route } from 'react-router-dom'
import { ScreenClassProvider } from 'react-grid-system';
import Login from './pages/Login'
import { addIcons } from './config/IconLibrary'

function App() {
  addIcons()
  return (
    <ScreenClassProvider>
      <Switch>
        <Route path="/">
          <Login/>
        </Route>
      </Switch>
    </ScreenClassProvider>
  )
}

export default App
