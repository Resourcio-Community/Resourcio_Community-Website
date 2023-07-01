import './App.css'
import { Analytics } from '@vercel/analytics/react'
import axios from 'axios'
import Spinner from './component/spinner/Spinner'
import { Route, Switch, Redirect } from "react-router-dom"
import { useContext, lazy, Suspense } from 'react'
import { AuthContext } from './context/authContext/AuthContext'


const Home = lazy(() => import('./scenes/home/Home'))
const Resources = lazy(() => import('./scenes/resources/Resources'))
const Proglang = lazy(() => import('./scenes/proglang/Proglang'))
const Login = lazy(() => import('./scenes/login/Login'))
const NotFound = lazy(() => import('./component/404_Not Found/NotFound'))


axios.defaults.baseURL = process.env.REACT_APP_API_URL


const App = () => {

  const { user } = useContext(AuthContext)

  return (
    <>
      <Suspense fallback={<Spinner width='40px' height='40px' />}>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/resources'>
            <Resources />
          </Route>
          <Route exact path='/proglang'>
            {user ? <Proglang /> : <Redirect to='/login' />}
          </Route>
          <Route exact path='/login'>
            {!user ? <Login /> : <Redirect to='/' />}
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
      
      <Analytics />
    </>
  )
}

export default App
