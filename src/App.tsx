import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'


function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route element={<HomePage/>} path=''></Route>
          <Route element={<RegisterPage></RegisterPage>} path='/register'>
            <Route path='teacher'></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App