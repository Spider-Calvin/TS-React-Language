import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import {lazy, Suspense} from 'react'
import Loader from './components/Loader'

const Home = lazy(()=>import('./components/Home'))
const Learn = lazy(()=>import('./components/Learning'))
const Result = lazy(()=>import('./components/Result'))
const Quiz = lazy(()=>import('./components/Quiz'))
const Login = lazy(()=>import('./components/Login'))

function App() {

  return (
    <div className='main'>
      <Router>
        <Header/>
        <div className='innermain'>
          <Suspense fallback={<Loader/>}>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/learn' element={<Learn/>} />
              <Route path='/quiz' element={<Quiz/>} />
              <Route path='/result' element={<Result/>} />
              <Route path='/login' element={<Login/>} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </div>
  )
}

export default App
