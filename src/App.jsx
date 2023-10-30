import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UsersList from './Components/UsersList'
import AddUser from './Components/AddUser'
import EditUser from './Components/EditUser'
import ErrorHandler from './Components/errorHandler'

import './App.css'

function App() {
  return (
    <main className=' px-20'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path="/AddUser" element={<AddUser />} />
          <Route path="/EditUser/:id" element={<EditUser />} />
          <Route path="*" element={<ErrorHandler code='ERR_BAD_REQUEST'/>} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
