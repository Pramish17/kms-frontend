import './App.css'
import UserComponent from './components/UserComponent'
import ListUserComponent from './components/ListUserComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm'
import Horizontal from './Layouts/Horizontal'
import Fulllayout from './Layouts/Fulllayout'
import Login from './components/Login'


function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Horizontal />}>
            {/* http://localhost:5000 */}
            <Route path='' element={<ListUserComponent />}></Route>
            {/* http://localhost:5000/users */}
            <Route path='users' element={<ListUserComponent />}></Route>
            {/* http://localhost:5000/add-user */}
            <Route path='add-user' element={<UserComponent />}></Route>
            {/* http://localhost:5000/edit-user/1 */}
            <Route path='edit-user/:id' element={<UserComponent />}></Route>
          </Route>

          <Route path='/' element={<Fulllayout />}>
            {/* http://localhost:5000/register */}
            <Route path='register' element={<RegisterForm />}></Route>
            {/* http://localhost:5000/login*/}
            <Route path='login' element={<LoginForm />}></Route>
            {/* http://localhost:5000/login-page*/}
            <Route path='login-page' element={<Login />}></Route>
            
          </Route>

        </Routes>

      </BrowserRouter>
    </>
  )
}
export default App
