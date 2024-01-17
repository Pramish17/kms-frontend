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
import StaffBiography from './components/StaffBiography'
import BeenzPointPage from './components/BeenzPointPage'
import ClientLayout from './Layouts/ClientLayout'
import Feedback from './components/Feedback'
import StaffLayout from './Layouts/StaffLayout'
import StaffBiographyStaffPage from './components/StaffBiographyStaffPage'
import StaffProjectPage from './components/StaffProjectPage'
import StaffTraining from './components/StaffTraining'
import NewsStaffPage from './components/NewsStaffPage'
import FeedbackStaffPage from './components/FeedbackStaffPage'
import StaffProfile from './components/StaffProfile'
import ClientProfile from './components/ClientProfile'
import ProjectClient from './components/ProjectClient'


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
            {/* http://localhost:5000/staff-login-page*/}
            <Route path='staff-login-page' element={<StaffLogin />}></Route>
            {/* http://localhost:5000/admin-login-page*/}
            <Route path='admin-login-page' element={<AdminLogin />}></Route>
            {/* http://localhost:5000/client-login-page*/}
            <Route path='client-login-page' element={<ClientLogin />}></Route>
          </Route>

          <Route path='/' element={<ClientLayout />}>
            {/* http://localhost:5000/news-page*/}
            <Route path='news-page' element={<News />}></Route>
            {/* http://localhost:5000/feedback-page*/}
            <Route path='feedback-page' element={<Feedback />}></Route>
            {/* http://localhost:5000/staffbiography-page*/}
            <Route path='staffbiography-page' element={<StaffBiography />}></Route>
             {/* http://localhost:5000/clientprofile-page*/}
             <Route path='clientprofile-page' element={<ClientProfile />}></Route>
             {/* http://localhost:5000/projectclient-page*/}
             <Route path='projectclient-page' element={<ProjectClient />}></Route>
          </Route>

          <Route path='/' element={<StaffLayout />}>
            {/* http://localhost:5000/staffnews-page*/}
            <Route path='newsstaff-page' element={<NewsStaffPage />}></Route>
            {/* http://localhost:5000/feedbackstaff-page*/}
            <Route path='feedbackstaff-page' element={<FeedbackStaffPage />}></Route>
            {/* http://localhost:5000/staffbiographystaff-page*/}
            <Route path='staffbiographystaff-page' element={<StaffBiographyStaffPage />}></Route>
            {/* http://localhost:5000/stafftraining-page*/}
            <Route path='stafftraining-page' element={<StaffTraining />}></Route>
            {/* http://localhost:5000/staffproject-page*/}
            <Route path='staffproject-page' element={<StaffProjectPage />}></Route>
            {/* http://localhost:5000/beenzpoint-page*/}
            <Route path='beenzpoint-page' element={<BeenzPointPage />}></Route>
            {/* http://localhost:5000/staffprofile-page*/}
            <Route path='staffprofile-page' element={<StaffProfile />}></Route>
          </Route>
        </Routes>


      </BrowserRouter>
    </>
  )
}
export default App
