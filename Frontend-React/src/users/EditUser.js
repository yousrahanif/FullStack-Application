import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {
  

    let navigate =useNavigate();
    const{id}=useParams();

    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [userData, setUserData] = useState({}); // Initialize userData as an empty object


    const onNameChange = (event) => {
        setName(event.target.value);
    };

    const onUserNameChange = (event) => {
        setUserName(event.target.value);
    };

    const onEmailChange = (event) => {
        setEmail(event.target.value);
    };
    
 
    //  userData = {
    //     name: name,
    //     userName: userName,
    //     email: email
    // };


    const onSubmitFunction =async(event)=>{
        event.preventDefault();
        const updatedUserData = { name, userName, email }; // Updated userData with latest values
        await axios.put(`http://localhost:8080/user/${id}`, updatedUserData); // Send updatedUserData to server
        navigate("/");


    }
    const loadUsers = async () => {
        const result = await axios.get(`http://localhost:8080/user/${id}`);
        setUserData(result.data); // Use setUserData to update the state
        setUserData(result.data); // Set the fetched data to the userData state
        setName(result.data.name); // Set the name field with the fetched name
        setUserName(result.data.userName); // Set the username field with the fetched username
        setEmail(result.data.email);
    }

    useEffect(()=>{
        loadUsers();

    },[])


  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
            <h2 className='text-center m-4'> Edit User</h2>
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
