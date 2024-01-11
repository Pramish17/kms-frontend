import React, { useEffect, useState } from 'react'
import { deleteUserById, listUsers } from '../services/UserService'
import { useNavigate } from 'react-router-dom'

const listUserComponent = () => {
    const [users, setUsers] = useState([])
    const navigator = useNavigate();

    useEffect(() => {
        getAllUsers()
    }, [])

    function getAllUsers(){
        listUsers().then((response) => {
            setUsers(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewUser() {
        navigator('/add-user')
    }

    function updateUser(id) {
        navigator(`/edit-user/${id}`)
    }

    function deleteUser(id) {
        if(id){
            deleteUserById(id).then((response) => {
                console.log(response.data);
                getAllUsers();
                alert("User deleted successfully.")
            }).catch(
                error.log(error)
            )
            
        }
        
    }

    return (
        <div className='container'>
            <h2 className='text-center pt-5'>Welcome to admin section!</h2>
            <button className='btn btn-primary' onClick={addNewUser}>Add User</button>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user =>
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td><div>
                                    <button className='btn btn-success' onClick={() => updateUser(user.id)}>Update</button>
                                    <button className='btn btn-danger' onClick={() => deleteUser(user.id) }
                                    style = {{marginLeft: '10px'}}>Delete</button>
                                </div>
                                </td>
                            </tr>
                        )
                    }
                    <tr>

                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default listUserComponent
