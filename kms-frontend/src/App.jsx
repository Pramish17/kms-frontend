import './App.css'
import UserComponent from './components/UserComponent'
import ListUserComponent from './components/ListUserComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm'
import Horizontal from './Layouts/Horizontal'
import Fulllayout from './Layouts/Fulllayout'
import StaffLogin from './components/StaffLogin'
import AdminLogin from './components/AdminLogin'
import ClientLogin from './components/ClientLogin'
import News from './components/News'
import ClientFeedback from './components/ClientFeedback'


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
              {/* http://localhost:5000/news-page*/}
              <Route path='news-page' element={<News />}></Route>
              {/* http://localhost:5000/clientfeedback-page*/}
              <Route path='clientfeedback-page' element={<ClientFeedback />}></Route>

          </Route>

          <Route path='/' element={<Fulllayout />}>
            {/* http://localhost:5000/register */}
            <Route path='register' element={<RegisterForm />}></Route>
            {/* http://localhost:5000/login*/}
            <Route path='login' element={<LoginForm />}></Route>
            {/* http://localhost:5000/staff-login-page*/}
            <Route path='staff-login-page' element={<StaffLogin />}></Route>
            {/* http://localhost:5000/admin-login-page*/}
            <Route path='admin-login-page' element={<AdminLogin />}></Route>
            {/* http://localhost:5000/client-login-page*/}
            <Route path='client-login-page' element={<ClientLogin />}></Route>
          
          </Route>
        </Routes>


      </BrowserRouter>
    </>
  )
}
export default App
