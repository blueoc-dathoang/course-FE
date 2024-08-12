import { lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const HomePage = lazy(() => import('./pages/HomePage'))
const RegisterPage = lazy(() => import('./pages/Register/Register'))

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<HomePage/>} path=''></Route>
          <Route element={<RegisterPage/>} path='/register'>
            <Route path='teacher'></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App