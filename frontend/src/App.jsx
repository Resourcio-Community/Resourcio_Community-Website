import './App.css'
import Home from "./scenes/home/Home"
import Resources from "./scenes/resources/Resources"
import Proglang from './scenes/proglang/Proglang'
import Login from './scenes/login/Login'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import { useContext } from 'react'
import { AuthContext } from './authContext/AuthContext'


const App = () => {
  const { user } = useContext(AuthContext)
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/resources'>
          <Resources />
        </Route>
        <Route path='/proglang'>
          <Proglang />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
