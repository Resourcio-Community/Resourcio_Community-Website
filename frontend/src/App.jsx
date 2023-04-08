import './App.css'
import LoadingScreen from './component/loadingScreen/LoadingScreen'
import logo from './Images/LOGO.webp'
import { Route, Switch, Redirect } from "react-router-dom"
import { useContext, useEffect, useState, lazy, Suspense } from 'react'
import { AuthContext } from './authContext/AuthContext'


const Home = lazy(() => import('./scenes/home/Home'))
const Resources = lazy(() => import('./scenes/resources/Resources'))
const Proglang = lazy(() => import('./scenes/proglang/Proglang'))
const Login = lazy(() => import('./scenes/login/Login'))


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
      <LoadingScreen img={logo} />
      :
      <Suspense>
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
      </Suspense>
  )
}

export default App
