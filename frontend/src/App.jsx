import './App.css'
import Home from "./scenes/home/Home"
import Resources from "./scenes/resources/Resources"
import Proglang from './scenes/proglang/Proglang'
import Login from './scenes/login/Login'
import LoadingScreen from './component/loadingScreen/LoadingScreen'
import { Route, Switch, Redirect } from "react-router-dom"
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from './authContext/AuthContext'


const App = () => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])



  const { user } = useContext(AuthContext)
  return (
    loading ?
      <LoadingScreen />
      :
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/resources'>
          <Resources />
        </Route>
        <Route path='/proglang'>
          {user ? <Proglang /> : <Redirect to='/login' />}
        </Route>
        <Route path='/login'>
          {!user ? <Login /> : <Redirect to='/' />}
        </Route>
      </Switch>
  )
}

export default App
