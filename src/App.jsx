import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UsersList from './Components/UsersList'
import AddUser from './Components/AddUser'
import EditUser from './Components/EditUser'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className=' px-20'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UsersList/>}></Route>
          <Route path='/AddUser' element={<AddUser/>}></Route>
          <Route path='/EditUser/:id' element={<EditUser/>}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
