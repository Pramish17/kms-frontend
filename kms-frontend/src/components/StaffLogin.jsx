import React, { useState } from 'react';
import '../components/css/Login.css';
import { useNavigate } from 'react-router-dom';

const StaffLogin = () => {
  const navigator = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function staffLog(e) {
    e.preventDefault();

    // Perform  validation
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    // If authentication is successful, navigate to the news-page
    navigator('/newsstaff-page');
  }

  return (
    <section className="h-100 ">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0 px-2 py-2">
                <div className="col-lg-5">
                  <div className="card-body p-4 mx-md-4">
                    <div className="text-center">
                      <h2 className="mt-1 mb-1 pb-1">H&K - Staff Login</h2>
                      <p className='mb-5'>Please login to your account</p>
                    </div>
                    <form>
                      <div className="form-outline mb-4">
                        <label className="form-label mt-4">Username</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter your email address"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                      <label className="form-label">Password</label>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Enter your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>

                      {error && <div className="alert alert-danger">{error}</div>}

                      <div className="text-center pt-3 mb-5 pb-1">
                        <button
                          className="btn btn-primary form-control mb-1 mt-1"
                          type="button"
                          onClick={staffLog}
                        >
                          Log in
                        </button>
                        <br />
                        <a className="text-muted" href="#!">
                          Forgot password?
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col custom"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaffLogin;
