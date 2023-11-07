import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import {lazy, Suspense} from 'react'
import Loader from './components/Loader/Loader'

const Home = lazy(()=>import('./components/Home/Home'))
const Learn = lazy(()=>import('./components/Learning/Learning'))
const Result = lazy(()=>import('./components/Result/Result'))
const Quiz = lazy(()=>import('./components/Quiz/Quiz'))
const Login = lazy(()=>import('./components/Login/Login'))

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
