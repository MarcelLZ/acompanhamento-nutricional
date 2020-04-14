import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

/**
 * Páginas disponíveis!
 */
import { Hotsite } from './pages/Hotsite'
import { CreateAccount } from './pages/CreateAccount'

/**
 * Páginas habilitadas
 */
function Routes () {
  return (
    <Router>
      <Switch>
        <Route path="/create-account">
          <CreateAccount />
        </Route>

        <Route path="/">
          <Hotsite />
        </Route>
      </Switch>
    </Router>
  )
}

export { Routes }
