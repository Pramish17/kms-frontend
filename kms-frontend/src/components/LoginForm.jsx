import React, { useEffect } from 'react'
import '../components/LoginForm.css'
import { useNavigate } from 'react-router-dom'



const LoginForm = () => {

  const navigator = useNavigate();

  function loginAdmin(e) {
    e.preventDefault();
    navigator('/users');
  }


  return (

    <div class="container-fluid  bg-light align-items-center vh-100">
      <div className='p-5'>
        <h1>Welcome to Hill and Knowlton</h1>
        <h2>Please choose your account and access it with your credentials.</h2>
      </div>
      <div className='card-body p-5'>
        <form className='row'>
       
            <div className=' col-lg-4 col-sm-4 col mt-2'>
              <div className="card card-body">
                <h2 className='text-center'>Client Account</h2>
                <hr />
                <p className='text-left'>Login as a client.</p>
                <button className="btn btn-outline-dark" type="button">Login</button></div>
            </div>
            <div className=' col-lg-4 col-sm-4 col mt-2'>
              <div className="card card-body">
                <h2 className='text-center'>Staff Account</h2><hr />
                <p className='text-left'>Login as a staff.</p>
                <button class="btn btn-outline-dark" type="button">Login</button>
              </div>
            </div>
            <div className=' col-lg-4 col-sm-4 col mt-2'>
              <div className="card card-body">
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