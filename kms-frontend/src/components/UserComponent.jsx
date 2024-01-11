import React, {useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { createUser, getUser, updateUser } from '../services/UserService';

const userComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const handleFirstName = (e) => setFirstName(e.target.value);
    const handleLastName = (e) => setLastName(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const navigator = useNavigate();
    const{id} = useParams();

    useEffect(() => {
        if(id){
            getUser(id).then((response)=>{
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
                setPassword(response.data.password);
            }).catch(error => {
                console.error(error);
            })
        }
    },[id])

    function saveOrUpdateUser(e){
        e.preventDefault();
        const user = {firstName, lastName, email, password};
        console.log(user);

        if (id){
            updateUser(id, user).then((response) => {
                console.log(response.data+" this is update response");
                navigator('/users')
                alert("User Updated Successfully!")
            })
        }else{
            createUser(user).then((response) => {

            console.log(response.data+"This is response");
            navigator('/users'); 
            alert("User Added Successfully!")
        }) 
    }

    }


    
    function pageTitle(){
        if(id){
            return <h2 className='text-center'>Update User</h2>
        }else{
           return <h2 className='text-center'>Add User</h2>
        }
    }

  return (
    <div className='container h-100'>
        <div className='card col-md-6 offset-md-3 offset-md-3 mt-5 p-5'>
            { 
            pageTitle()
            }
        <div className='card-body'>
        <form>
            <div className='form-group mb-2'>
             FirstName: 
                <input type='text' placeholder='Enter User First Name' name ='firstName ' value={firstName} className='form-control' onChange={handleFirstName} ></input> 
            </div>
            <div className='form-group mb-2'>
            LastName: 
                <input type='text' placeholder='Enter User Last Name' name= 'lastName' value={lastName} className='form-control' onChange={handleLastName} ></input> 
            </div>
            <div className='form-group mb-2'>
            Email:
                <input type='text' placeholder='Enter User Email' name = 'email' value={email} className='form-control' onChange={handleEmail} ></input> 
            </div>
            Password:
                <input type='password' placeholder='Enter Password' name = 'password' value={password} className='form-control' onChange={handlePassword} ></input> 
                <br></br>
            <button className='btn btn-success' onClick={saveOrUpdateUser}>Submit</button>
        </form>
        </div>
        </div>
    </div>
  )
}

export default userComponent