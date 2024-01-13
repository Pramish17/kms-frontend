import React from 'react'
import { useNavigate } from 'react-router-dom'

const ClientFeedback = () => {

    const navigator = useNavigate();
    function cancelClientFeedback(e){
        navigator(0);
    }




    return (
       
        <div className='container m-4 p-2'>
            <h1>Client Feedback</h1>
            <form className='form '>
            <div className= "col-lg-4 ">
                <label  className="form-label mt-3 ml-4">Project Name:</label>
                <input  type='text' className = "form-control ml-4" placeholder="Enter Project Name"></input>
            </div>
            <div className="col-lg-4 col-sm-4 col mt-2 ">
                <label className="form-label">Project Date:</label>
                <input type= 'date' className='form-control'></input>
            </div>
            <div className="col-lg-4 col-sm-4 col mt-2 ">
                <label className="form-label">Feedback:</label>
                <textarea className="form-control" rows="5" placeholder="Enter Feedback"></textarea>
            </div>
            <div className="btn btn-success m-2" > Submit</div>
            <div className="btn btn-danger m-2" onClick={cancelClientFeedback} > Cancel</div>
            </form>
            </div>

    )
}

export default ClientFeedback