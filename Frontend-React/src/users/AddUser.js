import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser() {
    let navigate =useNavigate();

    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');

    const onNameChange = (event) => {
        setName(event.target.value);
    };

    const onUserNameChange = (event) => {
        setUserName(event.target.value);
    };

    const onEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const userData = {
        name: name,
        userName: userName,
        email: email
    };


    const onSubmitFunction =async(event)=>{
        event.preventDefault();
        console.log("Name:", name);
        console.log("UserName:", userName);
        console.log("Email:", email);
        setName('');
        setUserName('');
        setEmail('');
        await axios.post("http://localhost:8080/user",userData)
        navigate("/");
        


    }



  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
            <h2 className='text-center m-4'> Register User</h2>
            <form onSubmit={(e)=>onSubmitFunction(e)}>
            <div className='mb-3'>
                {/* <label htmlFor="Name" className='form-label'>Name: </label> */}
                <input type={"text"} 
                className='form-control'
                placeholder='Enter Your Name'
                name='name'
                value={name}
               onChange={onNameChange}
                />
                </div>
                <div className='mb-3'>
                {/* <label htmlFor="Name" className='form-label'>User Name: </label> */}
                <input type={"text"} 
                className='form-control'
                placeholder='Enter Your User Name'
                name='User Name'
                value={userName}
                onChange={onUserNameChange}
                />

                </div>
                <div className='mb-3'>
                {/* <label htmlFor="Name" className='form-label'>Email: </label> */}
                <input type={"text"} 
                className='form-control'
                placeholder='Enter Your Email'
                name='Email'
                value={email}
                onChange={onEmailChange}
                />
                </div>
                <button type='submit' className='btn btn-outline-danger'>Submit</button>
                <Link to="/" className='btn btn-outline-danger mx-2'>Cancel</Link>
                </form>
            </div>

        </div>
    </div>
  )
}
