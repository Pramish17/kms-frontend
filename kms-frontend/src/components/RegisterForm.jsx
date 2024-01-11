import React from "react";
import { useNavigate } from 'react-router-dom'
import '../components/RegisterForm.css'
import { useState } from 'react'
import { createUser } from "../services/UserService";


const RegisterForm = () => {

    const navigator = useNavigate();
    const style = { color: 'blue' };

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const handleFirstName = (e) => setFirstName(e.target.value);
    const handleLastName = (e) => setLastName(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

function registerUser(e){
    e.preventDefault();
    const user = {firstName, lastName, email, password};
    console.log(user);
    createUser(user).then((response) => {
    navigator('/login'); 
    Alert("User Added Successfully!")
}) 
}

function onClickLoginHere(){
    navigator('/login');
}

    return (
        <div style={{ backgroundImage: 'url("src/assets/a.jpg")'}}>
            <div className="container-fluid d-flex justify-content-center align-items-center pb-2 " >
                <div className='card col-md-4  mt-3 '>
                    <div className='card-body p-5'>
                        <h2 class="text-uppercase text-center mb-5">Create an account</h2>
                        {/* <form className="needs-validation" novalidate> */}
                        <form>
                            <div className='form-group mb-3'>
                                FirstName:
                                <input required type='text' for="validationDefault01" placeholder='Enter Your First Name' name='firstName' value={firstName} className='form-control' onChange={handleFirstName} ></input>
                            </div>
                            <div className='form-group mb-3'>
                                LastName:
                                <input required type='text' placeholder='Enter Your Last Name' name='lastName' value={lastName} className='form-control' onChange={handleLastName}  ></input>
                            </div>
                            <div className='form-group mb-3'>
                                Email:
                                <input type='text' placeholder='Enter Your Email' name='email' value={email} className='form-control' onChange={handleEmail} ></input>
                            </div>
                            <div className='form-group mb-3'>
                                Password:
                                <input type='password' placeholder='Enter Password' name='password' value={password} className='form-control'onChange={handlePassword}  ></input>
                            </div>
                            <div class="form-check d-flex justify-content-center mb-4 mt-4">
                                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                                <label className="form-check-label " for="form2Example3g">
                                    I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
                                </label>
                            </div>
                            <div className="d-grid gap-2">
                                <button type="button" class="btn btn-primary btn-lg "  onClick={registerUser}>Register</button>
                            </div>
                            <p className="text-center text-muted mt-4 mb-1">Have already an account? <a href="#!"
                                className="loginHere" onClick={onClickLoginHere}><u>Login here</u></a></p>
                        </form>
                    </div>
                </div>

            </div>
        </div>

    )

}
export default RegisterForm