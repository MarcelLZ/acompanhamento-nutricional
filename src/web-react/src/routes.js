import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useHistory
} from 'react-router-dom'

/**
 * Páginas disponíveis!
 */
import { Hotsite } from './pages/Hotsite'
import { CreateAccount } from './pages/CreateAccount'
import { Login } from './pages/Login'
import { ForgotPassword } from './pages/ForgotPassword'
import { Dashboard } from './pages/Dashboard'
import { Customers } from './pages/Customers'

/**
 * 
 */
export function useVerifyAuthentication () {
  const history = useHistory()
  localStorage.getItem('user') && history.push('/dashboard')
}

/**
 * Páginas habilitadas
 */
function Routes () {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/customers">
          <Customers />
        </PrivateRoute>

        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>

        <Route path="/forgot-password">
          <ForgotPassword />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

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

function PrivateRoute ({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.getItem('user') ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export { Routes }
