import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'
 
function CreateEmployeeComponent() {
    let navigate=useNavigate();
    const[employee,setEmployee]=useState({
        firstName:'',
        lastName:'',
        email:''
    })
    const handleClick=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setEmployee({...employee,[name]:value});
    }
    const cancleHandler=()=>
    {
        navigate('/employees');
    }
    const saveHandler=(e)=>
    {
        e.preventDefault();
        console.log("employee =>"+JSON.stringify(employee));
        EmployeeService.createEmployee(employee).then(res=>
          {
            navigate('/employees');
          })
    }
    
  return (
    <div className='container mt-3'>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                <h3 className='text-center my-3'>Add Employee</h3>
                <div className='card-body'>
                    <form>
                        <div className='form-group my-2'>
                            <label>First Name</label>
                            <input placeholder='FirstName' name='firstName' className='form-control'
                            value={employee.firstName} onChange={handleClick}/>
                            </div>
                            <div className='form-group my-2'>
                            <label>last Name</label>
                            <input placeholder='FirstName' name='lastName' className='form-control'
                            value={employee.lastName} onChange={handleClick}/>
                            </div>
                            <div className='form-group my-2'>
                            <label>Email</label>
                            <input placeholder='Eamil' name='email' className='form-control'
                            value={employee.email} onChange={handleClick}/>
                             
                            </div>
                            <button className='btn btn-success' onClick={saveHandler}>save</button>
                            <button className='btn btn-danger' style={{marginLeft:'10px'}} onClick={cancleHandler}>cancle</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateEmployeeComponent
