import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage></HomePage>}></Route>
      <Route path='/test' element={<HomePage></HomePage>}></Route>
    </Routes>
  )
}

export default App
