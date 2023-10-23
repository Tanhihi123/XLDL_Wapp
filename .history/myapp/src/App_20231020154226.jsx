import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Test from './pages/Test'

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage></HomePage>}></Route>
      <Route path='/' element={<Resu></Resu>}></Route>
      <Route path='/test' element={<Test></Test>}></Route>
    </Routes>
  )
}

export default App
