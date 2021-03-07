import React  from 'react'
import { Switch, Route } from 'react-router-dom'
import { ScreenClassProvider } from 'react-grid-system';
import Login from './pages/Login'
import { addIcons } from './config/IconLibrary'
import Dashboard from './pages/Dashboard';

function App() {
  addIcons()
  return (
    <ScreenClassProvider>
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route path={'/dashboard'}>
          <Dashboard />
        </Route>
      </Switch>
    </ScreenClassProvider>
  )
}

export default App
