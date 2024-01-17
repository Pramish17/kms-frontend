import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigator = useNavigate();
  const [email, setEmail] = useState('');

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

  function handleSubscribe(e) {
    e.preventDefault();
    console.log(`Subscribed with email: ${email}`);
    setEmail('');
  }

  return (
    <div className="container-fluid vh-100 d-flex flex-column align-items-center justify-content-center">
      <div className="p-5 text-center">
        <h1>Welcome to Hill and Knowlton</h1>
        <h2>We are more than just a company.</h2>
      </div>
      <div className="card-body p-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col mt-2">
            <div className="card card-body bg-light h-100" style={{ width: '400px' }}>
              <h2 className="text-center mb-4">Client Account</h2>
              <hr />
              <p className="text-left mb-4">Login as a client.</p>
              <button className="btn btn-outline-dark d-flex justify-content-center" type="button" onClick={loginClient}>
                Login
              </button>
            </div>
          </div>
          <div className="col mt-2">
            <div className="card card-body bg-light h-100" style={{ width: '400px' }}>
              <h2 className="text-center mb-4">Staff Account</h2>
              <hr />
              <p className="text-left mb-4">Login as a staff.</p>
              <button className="btn btn-outline-dark d-flex justify-content-center" type="button" onClick={loginStaff}>
                Login
              </button>
            </div>
          </div>
          <div className="col mt-2">
            <div className="card card-body bg-light h-100" style={{ width: '400px' }}>
              <h2 className="text-center mb-4">Admin Account</h2>
              <hr />
              <p className="text-left mb-4">Login as an admin.</p>
              <button className="btn btn-outline-dark d-flex justify-content-center" type="button" onClick={loginAdmin}>
                Login
              </button>
            </div>
          </div>
        </div>

        <div className="mt-5 text-center">
          <h3>Sign up for our e-newsletter</h3>
          <p>Latest industry thinking, job opportunities, events, case studies, and client offers.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
