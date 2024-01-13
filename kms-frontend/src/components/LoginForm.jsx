import React, { useEffect } from 'react'
import '../components/LoginForm.css'
import { useNavigate } from 'react-router-dom'



const LoginForm = () => {

  const navigator = useNavigate();

  function loginAdmin(e) {
    e.preventDefault();

    navigator('/admin-login-page');
  }

  function loginStaff(e) {
    e.preventDefault();

    navigator('/staff-login-page');
  }

  function loginClient(e) {
    e.preventDefault();

    navigator('/client-login-page');
  }


  return (

    <div class="container-fluid align-items-center vh-100">
      <div className='p-5'>
        <h1>Welcome to Hill and Knowlton</h1>
        <h2>We are more than just a company.</h2>
      </div>
      <div className='card-body p-5'>
        <form className='row'>
       
            <div className=' col-lg-4 col-sm-4 col mt-2 '>
              <div className="card card-body bg-light">
                <h2 className='text-center'>Client Account</h2>
                <hr />
                <p className='text-left'>Login as a client.</p>
                <button className="btn btn-outline-dark" type="button" onClick={loginClient}>Login</button></div>
            </div>
            <div className=' col-lg-4 col-sm-4 col mt-2'>
              <div className="card card-body bg-light">
                <h2 className='text-center'>Staff Account</h2><hr />
                <p className='text-left'>Login as a staff.</p>
                <button class="btn btn-outline-dark" type="button" onClick={loginStaff}>Login</button>
              </div>
            </div>
            <div className=' col-lg-4 col-sm-4 col mt-2'>
              <div className="card card-body bg-light">
                <h2 className='text-center'>Admin Account</h2><hr />
                <p className='text-left'>Login as an admin.</p>
                <button class="btn btn-outline-dark" type="button" onClick={loginAdmin}>Login</button>
              </div>

            </div>
         
        </form>
      </div>
    </div>

  )
}

export default LoginForm